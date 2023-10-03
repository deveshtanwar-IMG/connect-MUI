import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import styled from "@emotion/styled";
import { DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";

const Add = () => {

    const [open, setOpen] = useState(false);

    const StyledModal = styled(Modal)({
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        margin:"5px 20px"
    })

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        margin:"20px"
    })

  return (
    <>
        <Tooltip title="Add Post" sx={{
            position: "fixed",
            bottom: 20,
            left: {xs : "calc(50% - 25px)", sm: 30},
            cursor: "pointer"
        }}
        onClick={(e)=>setOpen(true)}>
            <Fab color="primary" aria-label="add">
                <AddIcon/>
            </Fab>
        </Tooltip>

        <StyledModal
            open={open}
            onClose={(e)=>setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box width={400} height={280} p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}>
                <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>

                <UserBox>
                    <Avatar src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Typography variant="h6" fontWeight={400}>John Doe</Typography>
                </UserBox>
                <TextField
                    sx={{width: "100%"}}
                    id="standard-multiline-static"
                    multiline
                    rows={2}
                    placeholder="What's on your mind"
                    variant="standard"
                />
                <Stack direction="row" gap={1} mt={2} mb={3} sx={{cursor:"pointer"}}>
                    <EmojiEmotions color="primary"/>
                    <Image  color="secondary"/>
                    <VideoCameraBack color="success"/>
                    <PersonAdd color="error"/>
                </Stack>

                <ButtonGroup variant="contained" fullWidth>
                    <Button>Post</Button>
                    <Button sx={{width: "100px"}}><DateRange /></Button>
                </ButtonGroup>
            </Box>
        </StyledModal>
    </>
  )
}

export default Add;