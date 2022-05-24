import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import { ChartType } from "../../../../../types/ChartType";

export const ProfitExpectationChart = () => {
    const [chartProps, setChartProps] = useState<ChartType>({
        series: [
            {
                name: "Real",
                type: "column",
                data: [
                    60200, 67300, 65000, 72800, 55903, 64503, 90302, 129292,
                    129292, 121034, 153902, 163289,
                ],
                color: "#9FD8D5",
            },
            {
                name: "Expectativa",
                type: "column",
                data: [
                    55300, 62903, 68327, 75090, 80389, 90489, 102933, 111209,
                    130300, 143022, 155303, 163042,
                ],
                color: "#F78899",
            },
            {
                name: "Real do ano anterior",
                type: "line",
                data: [
                    5390, 6200, 6800, 7885, 10900, 12000, 16500, 17000, 25492,
                    25492, 30120, 50300,
                ],
                color: "#393C56",
            },
            {
                name: "Expectativa do ano anterior",
                type: "line",
                data: [
                    5900, 6400, 7200, 7850, 9002, 12300, 16000, 25000, 28590,
                    28590, 35000, 40020,
                ],
                color: "#E0347D",
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "line",
                stacked: false,
                fontFamily: "Ubuntu",
            },
            plotOptions: {
                bar: {
                    columnWidth: "80px",
                    distributed: false,
                    borderRadius: [3, 3, 0, 0],
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
            yaxis: { show: false },
            tooltip: {
                fixed: {
                    enabled: true,
                    position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
                    offsetY: 10,
                    offsetX: 60,
                },
            },
            legend: {
                horizontalAlign: "left",
                offsetX: 40,
            },
        },
    });

    return (
        <ReactApexChart
            options={chartProps.options}
            series={chartProps.series}
            type="line"
            height={350}
        />
    );
};
