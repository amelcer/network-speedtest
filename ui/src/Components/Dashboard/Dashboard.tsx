import { useEffect, useState } from "react"
import { Grid, Card, IconButton, makeStyles } from "@material-ui/core"
import Stats from "./Stats"
import GetAppIcon from "@material-ui/icons/GetApp"
import PublishIcon from "@material-ui/icons/Publish"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import LineChart, { IChartData } from "../Charts/LineChart"

interface TestResults {
    up: number
    down: number
    server: String
    date: string
    _id: String
}

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

const dateFormat = (ISODateString: string): String => {
    return new Intl.DateTimeFormat("pl-PL", {
        day: "2-digit",
        month: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(ISODateString))
}

const Dashboard = () => {
    const [results, setResults] = useState<IChartData>()
    const [maxUpload, setMaxUpload] = useState<number>(0)
    const [maxDownload, setMaxDownload] = useState<number>(0)
    const classes = useStyles()

    useEffect(() => {
        const getResults = async () => {
            try {
                const response = await fetch("http://localhost:5001/tests/get")
                const results: TestResults[] = await response.json()
                const uploads: number[] = results.map((r) => r.up)
                const downloads: number[] = results.map((r) => r.down)

                setMaxUpload(Math.max(...uploads))
                setMaxDownload(Math.max(...downloads))
                setResults({
                    data: {
                        labels: results.map((r) => dateFormat(r.date)).reverse(),
                        datasets: [
                            {
                                label: "Download",
                                data: [...downloads.reverse()],
                                borderColor: "#00ff00",
                            },
                            {
                                label: "Upload",
                                data: [...uploads.reverse()],
                                borderColor: "#0000ff",
                            },
                        ],
                    },
                })
            } catch (e) {
                console.error(e)
            }
        }
        getResults()
    }, [])

    return (
        <Grid container justifyContent="center" className={classes.container} item sm={10} xs={12} spacing={3}>
            <Grid item lg={4} sm={6}>
                <Stats title="Największy download dziś" icon={<GetAppIcon />} value={maxDownload} />
            </Grid>
            <Grid item lg={4} sm={6}>
                <Stats title="Największy upload dziś" icon={<PublishIcon />} value={maxUpload} />
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
                            {results && <LineChart data={results.data} />}
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
