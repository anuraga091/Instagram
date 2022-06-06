import React,{useState} from 'react';
import { Card,CardHeader,CardMedia, CardContent,CardActions,Collapse, Avatar,IconButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import SecondClickDialog from './SecondClickDialog';

import { postData } from '../data/data';

// import FirstClickDialog from './FirstClickDialog'

const CardComponent = () => {

    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true)
    }

    const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
    }));

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
  return (
<>
  {
      postData.map( data => (
    <StyleCard sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: purple[500] }}  aria-label="recipe">
            {data.avatar}
          </Avatar>
        }
        action={
          <IconButton onClick = {() => openDialog()} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.name}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="350"
        image={data.url}
        alt="Paella dish"
      />
      <CardActions >
        <div>
            <div style={{display: 'flex', paddingTop: 0}}>
                <IconButton  aria-label="add to favorites">
                <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="comment">
                <img style={{width: 20, height: 20}} src="../images/instagram-comment.svg" alt=""/>
                </IconButton>
                <IconButton aria-label="share">
                <img style={{width: 20, height: 20}} src="../images/send.png" alt=""/>
                </IconButton>
                <IconButton style={{marginLeft: 230}} aria-label="add to favorites">
                <BookmarkBorderIcon />
                </IconButton>
            </div>
            
            <div style={{paddingLeft: 10}}>
                <Typography style={{fontSize: 14}}>232 Likes</Typography>
                <CardContent style={{padding: 0}}>
                <Typography  variant="body2" color="text.secondary">
                 {data.by} <br/> {data.shorttitle}
                </Typography>
                </CardContent>
                <Typography style={{fontSize: 14}}>{data.comments} comments</Typography>
                <Typography style={{fontSize: 14}}>{data.time}</Typography>
            </div>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </div> 
      </CardActions>
      
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>

      {/* <FirstClickDialog open = {open} setOpen={setOpen}/> */}

      <SecondClickDialog open = {open} setOpen={setOpen}/>
    </StyleCard>
    ))
  }
  </>
    
  )
};

const StyleCard = styled(Card)`
    margin: 10px auto;
    
`;



export default CardComponent;
