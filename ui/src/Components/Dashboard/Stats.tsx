import { Card, Grid, makeStyles, Typography } from "@material-ui/core"
import React, { ReactElement } from "react"

interface Props {
    title: String
    value: Number
    icon: ReactElement
}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "1em",
        height: "100%",
    },
    container: {
        height: "100%",
    },
    icon: {
        padding: "1em",
        borderRadius: "50%",
        height: "50px",
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        marginInlineStart: "auto",
        color: "#fff",
    },
    title: {
        fontSize: "1rem",
    },
    value: {
        fontSize: "1.5rem",
    },
}))

const Stats = ({ title, value, icon }: Props) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <Grid container justifyContent="center" alignContent="center" className={classes.container}>
                <Grid item xs={8}>
                    <Typography variant="h2" gutterBottom color="textSecondary" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="body1" className={classes.value}>
                        {value} mbps
                    </Typography>
                </Grid>
                <Grid item className={classes.icon}>
                    {icon}
                </Grid>
            </Grid>
        </Card>
    )
}

export default Stats
