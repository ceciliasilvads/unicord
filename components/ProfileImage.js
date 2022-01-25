import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import appConfig from '../config.json';

export default function  ProfileImage(){
    const username = 'ceciliasilvads';

    return(
        
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
            }}
            >
            <Avatar
                alt="Remy Sharp"
                src={`https://github.com/${username}.png`}
                sx={{ width: 160, height: 160 }}
            />
            <p>{username}</p>
            <style jsx>{`
                p {
                    margin: 10px;
                    font-size: 16px;
                    font-family: Monospace;
                    color: #f2f2f2;
                }
            `}</style>
        </Box>
    );
}
