import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import { ChartType } from "./types/ChartType";

export const MadeOrdersChart = () => {
    const [chartProps, setChartProps] = useState<ChartType>({
        series: [
            {
                name: "Pedidos realizados",
                type: "column",
                data: [
                    60200, 67300, 65000, 72800, 55903, 64503, 90302, 129292,
                    129292, 121034, 153902, 163289,
                ],
                color: "#109E8E",
            },
            {
                name: "Pedidos cancelados",
                type: "column",
                data: [
                    55300, 62903, 68327, 75090, 80389, 90489, 102933, 111209,
                    130300, 143022, 155303, 163042,
                ],
                color: "#F18F7F",
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
                width: [1, 1],
            },
            title: {
                text: "Pedidos realizados x pedidos cancelados",
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
