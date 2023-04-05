//Creamos nuestro RESTFULL API

import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Entry,IEntry } from '../../../models'

// TODO: creamos una tuberia de opciones 
type Data = 
|{ message: string}
| IEntry[] 

export default function heandler(req: NextApiRequest, res: NextApiResponse<Data>) {

  // TODO: como manejaremos dos endpoints uno para crear y otro para eliminar utilizaremos un SWICTH

    // llamamos a nuestro NEXTAPIREQUEST o req, es para saber que nos estan haciendo una solicitud de un metodo espicifico, puede ser GET, PUT, DELET etc
    switch (req.method) {
        case 'GET': // Evaluamos si el metodo que recibimos es GET
                    // getEntries es una funcion que 
            return  getEntries( res )
            
    
        default: // Si recibimos cualquier peticion que no sea GET es una peticion no valida y devovelmos un status 400
        res.status(400).json({ message: 'Endpoint no existe' })
    }

}


                          // Tipamos nuestro NextApiResponse con la data que es un type que creamos en la cabezera
const getEntries = async( res: NextApiResponse<Data> ) => {

    // TODO: Como deseamos obtener la imformacion de nuestras entradas con el metodo GET nos conectaremos a la base de datos


    // TODO: SIEMPRE QUE NOS CONECTEMOS A UNA BASE DE DATOS PARA HACER UNA PETICION LUEGO DE ESTO DEBEMOS DESCONECTARNOS.
    await db.conect(); // CONEXION A BASE DE DATOS
    // TODO: todas las peticiones que deseemos hacer devemos hacerlo despues de la conexion y justo antes de la desconexion a la base de datos


    // Creamos una constante que esperare a que nuestro entry de MODELS devuelva con la propiedad (find) todos los elementos y con la propiedad (sort) los ordenamos por fecha de manera ascendente
    const entries = await Entry.find()
     // TODO: LA PROPIEDAD FIND :Crea una consulta de búsqueda: obtiene una lista de documentos que coinciden con el filtro. para el filtro corchetes dentro de los parentesis

    await db.disconect(); // DESCONEXION A BASE DE DATOS


    // TODO: DEVOLVEMOS UNA RESPUESTA AL CLIENTE pero no sera un objeto como el que devolvemos por defalut en nuestro SWITCH, SERA DE TIPO IENTRY que contiene un arreglo de entradas
    res.status(200).json(entries)

}