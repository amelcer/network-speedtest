import React, { useEffect, useRef } from "react"
import Chart, { BubbleDataPoint, ChartConfiguration, ChartTypeRegistry, ScatterDataPoint } from "chart.js/auto"

interface IChartData {
    data: {
        labels: String[]
        datasets: {
            data: Number[]
            label: String
            borderColor?: String
            backgroundColor?: String
        }[]
    }
}

const LineChart = ({ data }: IChartData) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        let chart: Chart<keyof ChartTypeRegistry, (number | ScatterDataPoint | BubbleDataPoint | null)[], unknown>
        const node = chartRef?.current
        const ctx = node?.getContext("2d")
        const chartOptions: ChartConfiguration = {
            type: "line",
            data: Object.assign(data),
        }

        if (ctx) {
            chart = new Chart(ctx, chartOptions)
        }

        return () => {
            if (chart) chart.destroy()
        }
    }, [data])

    return <canvas ref={chartRef} />
}

export default LineChart
