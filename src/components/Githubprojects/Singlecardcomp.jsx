import Card from '@mui/material/Card';
import { CardHeader ,Avatar , IconButton ,
         CardMedia ,CardContent , Typography ,
         CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
      


const Item = (props) => {

const {single_project}  = props;

return (

<Card sx = {{maxWidth:300}}>

<CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={single_project.name}
        subheader="September 14, 2016"
      />
  <CardMedia
        component="img"
        height="194"
        image="https://github.githubassets.com/images/modules/site/social-cards/github-social.png"
        alt="Paella dish"
      />

<CardContent>
        <Typography variant="body2" color="text.secondary">
          {single_project.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" href={single_project.html_url}>
          <ShareIcon />
        </IconButton>
      </CardActions>
</Card>

)


}

export default Item;