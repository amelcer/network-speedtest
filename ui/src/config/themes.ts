import { ThemeOptions } from "@material-ui/core"

export enum ThemeType {
    Light = "light",
    Dark = "dark",
}

export const lightTheme: ThemeOptions = {
    palette: {
        primary: {
            main: "#1F36BD",
        },
        secondary: {
            main: "#3949AB",
        },
        type: ThemeType.Light,
    },
}

export const darkTheme: ThemeOptions = {
    palette: {
        primary: {
            main: "#003F72",
        },
        secondary: {
            main: "#2E3234",
        },
        type: ThemeType.Dark,
    },
}
