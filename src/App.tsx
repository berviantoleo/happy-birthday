import React from 'react';
import { Container, ImageList, ImageListItem, Typography } from '@mui/material';
import shela1 from './imgs/shela-1.jpeg'
import shela2 from './imgs/shela-2.jpeg'
import shela3 from './imgs/shela-3.jpeg'
import shela4 from './imgs/shela-4.jpeg'

const imageList = [
  {
    img: shela1,
    alt: 'shela-1'
  },
  {
    img: shela2,
    alt: 'shela-2'
  },
  {
    img: shela3,
    alt: 'shela-3'
  },
  {
    img: shela4,
    alt: 'shela-4'
  }
]

function App() {
  return (
    <Container>
      <Typography variant="h4">Happy Birthday, Shela!</Typography>
      <Typography variant="subtitle1">Tetap Semangat ya pelatihannya!</Typography>
      <ImageList sx={{ width: '100%', height: 600 }} cols={2}>
        {imageList.map((image, index) => (<ImageListItem key={index}><img src={image.img} alt={image.alt} loading='lazy' /></ImageListItem>))}
      </ImageList>
    </Container>
  );
}

export default App;
