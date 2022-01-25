import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Title from "./Title"
import Box from '@mui/material/Box';

export default function Form(){
//    const input = document.querySelector("#input-username");
    //const texto = input.value;
    //console.log(texto);
    return(
        <Box 
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
            }}
        >
            <Title tag="h2">Seja bem vindo(a)!</Title>
            <TextField id="input-username" label="Username" variant="filled" focused/>
            <Button color="secondary" variant="contained" >Procurar</Button>
        </Box>
    );
}