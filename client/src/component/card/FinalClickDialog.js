import React from 'react';
import {Dialog, Card, styled, Divider,Button} from '@mui/material';



const FinalClickDialog = ({openFinal, setOpenFinal}) => {

  const handleClose = () => {
    setOpenFinal(false)
  }
  return (
    <Dialog open={openFinal} >
        <Card sx={{ maxWidth: 350 }}>
          <img style={{height: 50, width: 50,marginTop: 50, marginLeft: '40%'}} src="../images/accept.png" alt=""/>
          <p style={{alignItems: 'center', textAlign: 'center'}} >Thanks for letting us know</p>
          <p style={{alignItems: 'center', textAlign: 'center', padding: 10}}>Your feedback is important in helping us keep instagram community safe</p>
          <Divider/>
          <p style={{marginLeft: 10}}> Block user</p>
          <Divider/>
          <p style={{marginLeft: 10}}> Unfollow user</p>
          <Divider/>
          <p style={{marginLeft: 10}}>Learn More</p>
          <Divider/>
          <StyleButton onClick={handleClose}>Close</StyleButton>
        </Card>
    </Dialog>
  )
}

const StyleButton = styled(Button)`
  padding: 10px auto;
  width : 300px;
  background-color: #2d53fe;
  color: #fff;
  align-items: center;
  text-align: center;
  margin:10px 25px;

`;

export default FinalClickDialog;
