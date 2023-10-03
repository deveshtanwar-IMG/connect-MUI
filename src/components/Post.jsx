import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

const Post = () => {
  return (
    <Card sx={{margin: "5px", marginBottom: "10px"}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src="https://material-ui.com/static/images/avatar/1.jpg" >
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="John Doe"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="340px"
          image="https://source.unsplash.com/random"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{padding:"0"}}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Post;