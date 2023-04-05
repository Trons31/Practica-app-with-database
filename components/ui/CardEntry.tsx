import { FC } from "react"

import { Card, CardContent, CardHeader, Grid } from "@mui/material"
import { ListItem } from "./ListItem"

export const CardEntry = () => {
  return (
    
    <Grid container spacing={2} sx={{ marginTop: 2 }} >
         <Grid item md={4} >
              <Card>
                <CardHeader title='Proveedores' />
              
              <CardContent>
              <ListItem rol='Provider' />
              </CardContent>
              </Card>
         </Grid>

         <Grid item md={4} >
            <Card>
                <CardHeader  title='Clientes' />
                <CardContent>
                    
                 <ListItem  rol='Client' />
                </CardContent>
            </Card>
         </Grid  >
            
         <Grid item md={4} >
            <Card>
                <CardHeader title='Administrador'  />
                <CardContent>
                <ListItem rol='Admin' />
                </CardContent>
            </Card>
         
        </Grid>
    </Grid>

  )
}
