import { Box, Card, CardContent, Grid, SpeedDialAction, Typography } from "@mui/material";
import { FC, useContext, useEffect } from "react"
import entriesApi from "../../apis/entriesApi";
import { EntriesContext } from "../../context/entries";
import { EntrieRol } from "../../interfaces";
import { Entry } from '../../interfaces/entries';
import { EntriesList } from "./EntriesList";

interface Props {
    rol : EntrieRol; 
}

export const ListItem:FC<Props> = ({ rol }) => {

  const {entry} = useContext(EntriesContext)


  const EntryByRol = entry.filter( e => e.rol === rol );
  



  return (
   <>
   <Box marginTop={2} >
       {
         EntryByRol.map( entry => (
            <EntriesList key={entry._id} entries={ entry }  />
         ) )
       }
   </Box>

    </>
   
  )
}
