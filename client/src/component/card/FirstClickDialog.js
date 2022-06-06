import React,{useState} from 'react';

import { Card, Dialog, styled, Divider,Typography } from '@mui/material';
// import SecondClickDialog from './SecondClickDialog';  uncomment this

import FinalClickDialog from './FinalClickDialog';

const FirstClickDialog = ({open, setOpen}) => {

    const handleClose = () => {
        setOpen(false);
    };

    /*
        Uncomment this to view second click card 
    // const [openReport, setOpenReport] = useState(false);

    // const openDialog = () => {
    //     setOpenReport(true);
    // }


    */

    /* To view second click card comment below code  */
    const [openFinal, setOpenFinal] = useState(false);
    const openDialog = () => {
         setOpenFinal(true);
    }

  return (
    <Dialog open = {open} onClose={handleClose}>
        <StyleCard sx={{ minWidth: 300 }}>
            <Typography onClick = {() => openDialog()} style={{color: 'red', fontWeight: 600, cursor: 'pointer' }}>Report</Typography> 
            <Divider/>
            <Typography  style={{color: 'red', fontWeight: 600}}> Unfollow </Typography>
            <Divider/>
            <Typography >Go to post</Typography>
            <Divider/>
            <Typography >Share to...</Typography>
            <Divider/>
            <Typography >Copy Link</Typography>
            <Divider/>
            <Typography >Embed</Typography>
            <Divider/>
            <Typography>Cancel</Typography>      
        </StyleCard>
        
        {/*           
        
        Uncomment to view second click card
        <SecondClickDialog openReport={openReport} setOpenReport={setOpenReport} />
        
        
        */}

        {/* To view second click card comment final click dialog */}

        <FinalClickDialog openFinal={openFinal} setOpenFinal={setOpenFinal}/>
    </Dialog>
  )
};


const StyleCard = styled(Card)`
   p{
        
        padding: 10px;
        font-weight: 400;
        text-align: center;
       
    }
    h4{
        
        padding: 0;
        font-weight: 700;
        text-align: center;
        
    }
`;

export default FirstClickDialog;