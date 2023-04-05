import mongoose, { mongo } from 'mongoose';


// Establecemos la conexion 

/** Tipo de conexion a nuestro dbMongoose
 *  0 = disconected
 *  1 = conected
 *  2 = conecting
 *  3 = disconecting
 */

const mongooConection = { // constante que manejara los estados de nuestra conexion
    isConnected: 0
}


export const conect = async() => {
 
    if (mongooConection.isConnected){ // validamos si estamos conectados 
        
        console.log('Ya estamos conectados')
        return; // Hacemos un return para salir de nuestra condicion

    }

    if(mongooConection.isConnected > 0){ // validamos si  ya tenemos una conexion 
        mongooConection.isConnected = mongoose.connections[0].readyState; // pasamos la conexcion que tenemos a nuestra propiedad mongoConection para que isConected lo almacene

        if ( mongooConection.isConnected === 1){ // PARA EVALUAR SON TRES IGUALES Y PARA ASIGNAR ES UNO SOLO
           console.log('usando conexion anterior')
           return;
        }

        await mongoose.disconnect(); // Nos desconectamos de nuestra base de datos
    }
                            // TODO: variable de entorno que contiene la conexion a nuestra base de datos
    await   mongoose.connect( process.env.MONGO_URL || '' ); // la propiedad mongosose de conect espera una cadena de conexion como la que tenemos en mongose compass pero como esta conexion es algo que puede cambiar lo haremos con una variable de entorno
    mongooConection.isConnected = 1;
    console.log('conectado a mongo db', process.env.MONGO_URL)
}

export const disconect = async() => {

    if( process.env.NODE_ENV === 'development' ) return; // Condicion para evaluar que si estamos en modo de desarrollo no nos desconecte de la base de datos

    if( mongooConection.isConnected === 0 ) return;

    await mongoose.disconnect();
    console.log('Desconectado de MongoDb')
}

