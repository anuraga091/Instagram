import React,{useState} from 'react';
import { Dialog, Divider, styled, Button} from '@mui/material';
import FinalClickDialog from './FinalClickDialog';
import { reportUserActivity } from '../../services/api';


const SecondClickDialog = ({open, setOpen}) => {



  const reportInitialValues = {
    event : ''
  }

  const [report , setReport] = useState(reportInitialValues);

  


    const handleClose = () => {
        setOpen(false);
    };
   

    const [openFinal, setOpenFinal] = useState(false);
    const openDialog = (e) => {
        setOpenFinal(true);
        const event =  e.target.innerHTML;
        
        setReport({...report, event });
        console.log(report)
       
        
    };

    const reportUser = async () => {
      let response = await reportUserActivity(report)
    }



  return (
    <StyleDialog open={open} >
       <div>
        <p style={{marginLeft: 10, fontWeight: 600, padding: 0}}>Report</p> 
        <Divider/>
        <h4 style={{marginLeft: 10, fontWeight: 700, padding: 0}}>Why are you reporting this post?</h4>
        <Divider/>
        <p onClick = {(e) => openDialog(e)}  name='spam' value='Anurag reported: '>It's spam</p>
        <Divider/>
         <p onClick = {(e) => openDialog(e)}  name='nudity'>Nudity or sexual activity</p>
        <Divider/>
         <p onClick = {(e) => openDialog(e)}  name='hatespeech'>Hate speech or symbols</p>
        <Divider/>
         <p onClick = {(e) => openDialog(e)}  name='violence'>Violence or dangerous organizations</p>
        <Divider/>
         <p onClick = {(e) => openDialog(e)}  name='bullying'>Bullying or harassment</p>
        <Divider/>
         <p onClick = {(e) => openDialog(e)}  name='ipviolation'>Intellectual property violation</p>
        <Divider/>
         <p onClick = {(e) => openDialog(e)}  name='suicide'>Suicide or self injury</p>
        <Divider/>
         <p onClick = {(e) => openDialog(e)}  name='eatingdisorder'>Eating disorder</p>
        <Divider/>
         <p onClick = {(e) => openDialog(e)}  name='scam'>Scam or fraud</p>
        <Divider/>
         <p onClick = {(e) => openDialog(e)}  name='falseinfo'>False information</p>
        <Divider/>
         <p onClick = {(e) => openDialog(e)}  name='dontlike'>I just don't like it</p>
        <StyleButton onClick={handleClose}>Close</StyleButton>

       </div>

       <FinalClickDialog openFinal= {openFinal} setOpenFinal= {setOpenFinal}/>
    </StyleDialog>
  )
};

const StyleDialog = styled(Dialog)`
   div{
       min-width: 300px;
   }
    p{
        margin-left: 10px;
        padding: 0;
        font-weight: 400;
        cursor: pointer;
    }
`;
const StyleButton = styled(Button)`
  padding: 10px auto;
  width : 300px;
  background-color: #2d53fe;
  color: #fff;
  align-items: center;
  text-align: center;
  margin:10px 25px;

`;

export default SecondClickDialog;
