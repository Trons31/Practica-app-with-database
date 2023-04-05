import React, { FC, useEffect, useReducer } from 'react'
import { Entry } from '../../interfaces';
import { EntriesContext,entriesReducer } from './'; // Exportamos nuestro UiContext
import entriesApi from '../../apis/entriesApi';


export interface EntriesState { // Creamos nuestro interface y la exportamos
     entry : Entry[]; // Si no colocamos el interrogante que cierra TypeScript asume que esta propiedad es obligatoria.
}


const Entries_INITIAL_STATE: EntriesState = { // Creamos una constante o una varibale y la tipamos o le decimos que es de tipo EntriesState por lo tanto debe recibir la propiedad entries y le pasamos el valor correspondiente
     entry : [   ],
    
}

interface Props { // Cremaos nuestras props locales para decirle  a nuestro functinal component que recibira childrens
     children? : JSX.Element | JSX.Element[] // El children o los children que recibira son de tipo JSXElement
}

   export const EntriesProvider:FC<Props> = ({ children }) => {  // Tipamos nuestro EntriesProvider y le diremos que es de tipo FC : functional component y le pasamos las props que recibira, y desestructuramos nuestro children

       const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE) // 


       const refresLoad = async() => {
        const { data  } = await entriesApi.get<Entry[]>('/entry');
        console.log(data)

        dispatch({ type: '[Entries] -  refresLoad', payload: data })

       }

       useEffect(() => {
        refresLoad();
       
     }, [])
       


        return (
           <EntriesContext.Provider value={{  // Llamamos a nuestro EntriesContext y le decimos que recibira un proveedor para ello colocamos punto al finalizar el nombre de nuestro EntriesContext y llamammos a la propiedad Provider
               ...state,
            }}>
              { children }
           </EntriesContext.Provider>
)
}