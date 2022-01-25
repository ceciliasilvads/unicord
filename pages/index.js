import React from "react";
import Box from '@mui/material/Box';
import ProfileImage from "../components/ProfileImage"
import Form from "../components/Form"

function GlobalStyle(){
    return(
        <style global jsx>{`
            * {
                margin: 0;
                padding: 0;
            }
            body {
                font-family: 'Open Sans', sans-serif;
            } 
            html, body, #__next {
                min-height: 100vh;
                display: flex;
                flex: 1;
            }
            #__next {
                flex: 1;
            }
            #__next > * {
                flex: 1;
            }
        `}</style>
    );
}

export default function PaginaInicial() {
  
    return (
      <>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#F9D3AF',
            }}
        >
            <Box
                sx={{
                    width: '60vh',
                    height: '40vh',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    bgcolor: '#C2825F',
                    borderRadius: '30px'

                }}
            >
                <GlobalStyle />
                <Form />
                <ProfileImage />
            </Box>
        </Box>
      </>
    );
}