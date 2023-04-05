import { Card, CardContent, Grid, Typography } from '@mui/material';
import { FC, useContext } from 'react';
import { EntriesContext } from '../../context/entries';
import { Entry } from '../../interfaces/entries';


interface Props{
    entries : Entry;
}

export const EntriesList:FC<Props> = ({ entries }) => {

  

  return (
    <Card variant="outlined" >
    <CardContent>
        <Grid container >
            <Grid  item md={12} >
              <Typography> NID: <span> </span> </Typography> 
            </Grid>
            <Grid item md={12} > 
            <Typography> Nombre: <span> { entries.name }  </span> </Typography> 
            </Grid>
            <Grid item md={12} >
            <Typography> Direccion: <span> { entries.address } </span> </Typography> 
            </Grid>
            <Grid item md={12} >
            <Typography> rol: <span></span> {entries.rol} </Typography> 
            </Grid>
        </Grid>
    </CardContent>
</Card>
  )
}
