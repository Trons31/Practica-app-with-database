import { Box, Button, Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { CardEntry } from '../components/ui/CardEntry';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Home: NextPage = () => {
  return (
   <>
   <Box sx={ {  marginLeft: 2, marginTop:5 } } >
   <Button>
   <AddCircleOutlineOutlinedIcon />
   </Button>
   </Box>
   <Box sx={{ padding: 2, }} >
   <CardEntry />
   </Box>
  
   </>
  )
}

export default Home
