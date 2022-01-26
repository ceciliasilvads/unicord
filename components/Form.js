import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import React from 'react';
import { useRouter } from 'next/router';

export default function Form() {
    const [username, setUsername] = React.useState('');
    const roteamento = useRouter();
    return(
        <Box
            as='form'
            onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                console.log('Alguém submeteu o form');
                roteamento.push('/chat');
            }}
            sx={{
                width: '40%',
                height: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                display: 'flex',
                bgcolor: '#deaccf',
                borderRadius: '30px'
            }}

        >   
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}
            >
                <Avatar
                    src={`https://github.com/${username}.png`}
                    sx={{ width: 160, height: 160 }}
                />
                <h3>{username}</h3>
                <style jsx>{`
                    h3 {
                        margin: 10px;
                        font-size: 18px;
                        font-family: Monospace;
                        color: #404040;
                        
                    }
                `}</style>
            </Box>
            <TextField
                label='Github Username'
                value={username}
                color="secondary"
                focused
                onChange={
                    function (event) {
                        console.log('usuario digitou', event.target.value);
                        // Onde ta o valor?
                        const valor = event.target.value;
                        // Trocar o valor da variavel
                        // através do React e avise quem precisa
                        setUsername(valor);
                    }
                }
            />
            <Button type='submit' color='secondary' size='large' variant='contained'>Entrar</Button>
        </Box>

    );
}