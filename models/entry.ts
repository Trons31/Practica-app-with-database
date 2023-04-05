// Importamos las propiedades de mongoose TODO: MODEL Y SCHEMA
import mongoose, {Model,Schema} from "mongoose";
import { Entry } from '../interfaces/entries';

// Interface para nuestro Model de EntryModel
// TODO: como esta interface necesita los mismos elementos que nuestra interface de Entry heredemos sus elementos con la palabra : extends para tener acceso a todos los elementos de entry
 export interface IEntry extends Entry {
     
}

// Cremos una constante y decimos que sera igual a un nuevo esquema.
// En nuestro esquema dentro de llaves definimos todas las propiedades que vamos a tener, como en este proyecto espeficamente queremos que las entradas que ingresemos en nuetras cards se alamacenen en un base de datos.
// TODO: los elementos que tendran nuestro esquema serna iguales a la interface que tiene las Props de nuestra entry
const entrySchema = new Schema({
    // TODO: el tipo que definamos en nuestro propiedades, debe empezar con la letra mayuscula es decir : String, Number etc
    name : { type: String, required: true }, // tipamos nuestra descripcion
    address: { type: String, required: true },
    phoneNumber : { type: Number, required: true}, 
    rol:{
        type: String, // Recibe el tipo string
        enum:{ // LLamamos la propiedad enum para definir los tipos que recibe
            values: ['Provider','Client','Admin'], // los definimos en value
            message: '{VALUE} no es un estado permitido'
        }
    }
});

// TODO: Creamos una propiedad : EntryModel de tipo Model y  model recibe unas props para que no nos de error y cremos la interface que tiene esas propiedades
const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry',entrySchema )


export default EntryModel;

