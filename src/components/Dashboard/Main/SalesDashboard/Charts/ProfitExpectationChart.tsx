import ReactApexChart from "react-apexcharts";
import { ChartType } from "../../../../../types/ChartType";
import { formatCurrent } from "../../InfoResume";

type ProfitExpectationChartProps = {
    profit: number[];
    expectationProfit: number[];
};

export const ProfitExpectationChart = ({
    profit,
    expectationProfit,
}: ProfitExpectationChartProps) => {
    const chartProps: ChartType = {
        series: [
            {
                name: "Real",
                type: "column",
                data: profit,
                color: "#9FD8D5",
            },
            {
                name: "Expectativa",
                type: "column",
                data: expectationProfit,
                color: "#F78899",
            },
            {
                name: "Real do ano anterior",
                type: "line",
                data: [],
                color: "#393C56",
            },
            {
                name: "Expectativa do ano anterior",
                type: "line",
                data: [],
                color: "#E0347D",
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "line",
                stacked: false,
                fontFamily: "Ubuntu",
                toolbar: {
                    show: false,
                    tools: {
                        download: false,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        reset: false,
                        selection: false,
                        pan: false,
                    },
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: "80px",
                    distributed: false,
                    borderRadius: [2, 2, 0, 0],
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                width: [1, 1, 2, 2],
            },
            title: {
                text: "Expectativa de lucro x lucro real",
                align: "left",
                margin: 50,
                offsetX: 10,
                style: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#333333",
                },
            },
            grid: {
                show: false,
            },
            xaxis: {
                categories: [
                    "JAN",
                    "FEV",
                    "MAR",
                    "ABR",
                    "MAI",
                    "JUN",
                    "JUL",
                    "AGO",
                    "SET",
                    "OUT",
                    "NOV",
                    "DEZ",
                ],
                labels: {
                    style: {
                        colors: ["#4D4141"],
                        fontSize: "12px",
                        fontWeight: "bold",
                    },
                },
            },
            yaxis: {
                show: false,
            },
            tooltip: {
                fixed: {
                    enabled: true,
                    position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
                    offsetY: 10,
                    offsetX: 60,
                },
                y: {
                    formatter: (value) => formatCurrent(value),
                },
                intersect: false,
                style: {
                    fontSize: "16px",
                },
            },
            legend: {
                horizontalAlign: "left",
                offsetX: 40,
            },
        },
    };

    return (
        <ReactApexChart
            options={chartProps.options}
            series={chartProps.series}
            type="line"
            height={350}
        />
    );
};
