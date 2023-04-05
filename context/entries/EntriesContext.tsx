import { createContext } from 'react';
import { Entry } from '../../interfaces';


interface ContextProps { 
      entry: Entry[];
 }


// Creamos nuestro contexto y tipamos o creamos los parametros o propiedades que tendra nuestro context para ello una forma muy bonita es con la terminacion AS y el nombre de nuestra props
export const EntriesContext =  createContext({} as ContextProps );