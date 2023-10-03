import { Box } from '@mui/material'
import Post from './Post';


const Feed = () => {
  return (
    <Box flex={4} sx={{padding: {xs: "0px", md: "15px"}}}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed;