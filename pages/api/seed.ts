import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database'
import { SeedData } from '../../database/see-data';
import entry from '../../models/entry';

type Data = {
    message: string
}

export default async function heandler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if( process.env.NODE_ENV === 'production' ){ // Cuando hagamos peteiciones  a nuestro API seed validamos que estos procedemientos no se ejecuten cuando estemos en modo produccion, y devolvemos un status ( 401 )
        // el porpiedad  status  de  Server Response object o abreviado res maneja el estatus que tendra nuestra aplicacion a las respuetas HTTP 
 return res.status(401).json({message: 'No tiene acceso a este servicio'});
}

await db.conect();

await entry.insertMany( SeedData.entries );


await db.disconect();




    res.status(200).json({ message: 'todo se realizo correctamente' })
}