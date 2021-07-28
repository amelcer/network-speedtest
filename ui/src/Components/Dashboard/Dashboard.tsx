import { Grid, Card, IconButton, makeStyles } from "@material-ui/core"
import Stats from "./Stats"
import GetAppIcon from "@material-ui/icons/GetApp"
import PublishIcon from "@material-ui/icons/Publish"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import LineChart from "../Charts/LineChart"

const useStyles = makeStyles((theme) => ({
    container: {
        padding: "1em",
        marginInline: "auto",
    },
    chartContainer: {
        minHeight: "500px",
        width: "100%",
        display: "flex",
        alignItems: "center",
    },
    arrows: {
        width: "100%",
    },
}))

const foo = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
        {
            data: [86, 114, 106, 106, 107, 111, 133],
            label: "Total",
            borderColor: "#3e95cd",
            backgroundColor: "#7bb6dd",
            fill: false,
        },
    ],
}

const Dashboard = () => {
    const classes = useStyles()

    return (
        <Grid container justifyContent="center" className={classes.container} item sm={10} xs={12} spacing={3}>
            <Grid item lg={4} sm={6}>
                <Stats title="Największy download dziś" icon={<GetAppIcon />} value={55} />
            </Grid>
            <Grid item lg={4} sm={6}>
                <Stats title="Największy upload dziś" icon={<PublishIcon />} value={35} />
            </Grid>
            <Grid container justifyContent="center" alignContent="center" item xs={12}>
                <Card className={classes.chartContainer}>
                    <Grid container item xs={12}>
                        <Grid item xs={1} container alignContent="center">
                            <IconButton className={classes.arrows}>
                                <ChevronLeftIcon />
                            </IconButton>
                        </Grid>
                        <Grid item xs={10}>
                            <LineChart data={foo} />
                        </Grid>
                        <Grid item xs={1} container alignContent="center">
                            <IconButton className={classes.arrows}>
                                <ChevronRightIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Dashboard
