import Box from '@mui/material/Box';
import Title from '../components/Title'
import GlobalStyle from '../components/Styles/GlobalStyle'

export default function ChatPage(){
    return(
        <Box
            sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundImage: 'url(https://github.com/ceciliasilvads/unicord/blob/main/images/Background.png?raw=true)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
            }}
        >
            <Box
                sx={{
                    width: '60vh',
                    height: '40vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',

                }}
            >   
                <Title tag='h2'>Bem Vindo(a)!</Title>
            </Box>
            <GlobalStyle/>
        </Box>
    );
}