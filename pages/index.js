import React from "react";
import Box from '@mui/material/Box';
import Form from '../components/Form'
import GlobalStyle from '../components/Styles/GlobalStyle'

export default function PaginaInicial() {
  
    return (
      <>
        <Box
            sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundImage: 'url(https://github.com/ceciliasilvads/unicord/blob/main/images/Background.png?raw=true)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
            }}
        >   
            <GlobalStyle />
            <Form />
        </Box>
      </>
    );
}