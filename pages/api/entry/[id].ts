import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data = 
|{name: string }
|IEntry
    

export default  function heandler(req: NextApiRequest, res: NextApiResponse<Data>) {

   
    switch (req.method) {
        case 'PUT':
           return updateEntry( req, res );
    
        default:
           return res.status(400).json({ name: 'No tiene acceso a este metodo' })
    }


   

}


const updateEntry = async( req: NextApiRequest , res: NextApiResponse ) => {

  const { id } = req.query;
  //console.log(id);

 await db.conect();


 const idUpdateENTRY =  await Entry.findById( id );
 
 if( !idUpdateENTRY ){
    await db.disconect();
    return res.status(400).json({ name: 'El id no existe' + id })
 }

 const {
    name = idUpdateENTRY.name,
    rol = idUpdateENTRY.rol

 } = req.body

 const updateEntry = await Entry.findByIdAndUpdate( id ,{ name, rol }, { runValidators: true, new : true } )

 return res.status(200).json(updateEntry!);

 
}