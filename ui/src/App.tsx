import { createTheme } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import React, { useState } from "react"
import Dashboard from "./Components/Dashboard/Dashboard"
import Nav from "./Components/Nav/Nav"
import { darkTheme, lightTheme, ThemeType } from "./config/themes"

function App() {
    const [theme, setTheme] = useState(createTheme(darkTheme))

    const handleThemeChange = () => {
        setTheme(theme.palette?.type === ThemeType.Dark ? createTheme(lightTheme) : createTheme(darkTheme))
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Nav currentTheme={theme.palette?.type} changeTheme={handleThemeChange} />
                <Dashboard />
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
