import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ChartType } from "../../../../../types/ChartType";

export const AgeTransactionChart = () => {
    const [chartProps, setChartProps] = useState<ChartType>({
        series: [
            {
                data: [0, 1320, 1640, 1470, 540, 680, 300],
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 350,
                fontFamily: "Ubuntu",
            },
            colors: ["#393C56"],
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            title: {
                text: "Transações por idade",
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
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
            },
            xaxis: {
                categories: [
                    "-18",
                    "18-24",
                    "25-34",
                    "35-44",
                    "45-54",
                    "55-64",
                    "65+",
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
                labels: {
                    style: {
                        colors: ["#4D4141"],
                        fontSize: "12px",
                        fontWeight: "bold",
                    },
                },
            },
        },
    });

    return (
        <ReactApexChart
            options={chartProps.options}
            series={chartProps.series}
            type="bar"
            height={350}
        />
    );
};
