import { AppBar, IconButton, PaletteType, Toolbar, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Brightness7 } from "@material-ui/icons"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import React from "react"
import { ThemeType } from "../../config/themes"

interface Props {
    changeTheme: (event: React.MouseEvent<HTMLButtonElement>) => void
    currentTheme: PaletteType
}

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginLeft: "auto",
        color: "white",
    },
}))

const Nav = ({ changeTheme, currentTheme }: Props) => {
    const classes = useStyles()
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>Network Speedtest Dashboard</Typography>
                <IconButton aria-label="Change theme" onClick={changeTheme} className={classes.menuButton}>
                    {currentTheme === ThemeType.Dark ? <Brightness4Icon /> : <Brightness7 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Nav
