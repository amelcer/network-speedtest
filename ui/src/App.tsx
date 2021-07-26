import { Button, createTheme } from "@material-ui/core"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import React, { useState } from "react"
import { darkTheme, lightTheme, ThemeType } from "./config/themes"

function App() {
    const [theme, setTheme] = useState(createTheme(darkTheme))

    const handleThemeChange = (): void => {
        setTheme(theme.palette?.type === ThemeType.Dark ? createTheme(lightTheme) : createTheme(darkTheme))
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <Button onClick={handleThemeChange}>ThemeToggle</Button>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App
