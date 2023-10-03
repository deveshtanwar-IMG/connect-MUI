import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"
import Add from "./components/Add"
import { useState } from "react"

const App = () => {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette:{
      mode: mode
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} toggle={setMode}/>
        <Stack direction="row" justifyContent="space-between">
          <Sidebar mode={mode} toggle={setMode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  )
}

export default App;