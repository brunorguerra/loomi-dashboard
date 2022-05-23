import ReactApexChart from "react-apexcharts";
import { useState } from "react";
import { ChartType } from "./types/ChartType";

export const MonthOrdersChart = () => {
    const [chartProps, setChartProps] = useState<ChartType>({
        series: [
            {
                name: "Pedidos",
                data: [21, 22, 10, 28, 16, 21, 13, 30, 55, 23, 40, 11],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "bar",
                fontFamily: "Ubuntu",
            },
            colors: ["#393C56"],
            plotOptions: {
                bar: {
                    columnWidth: "40px",
                    distributed: true,
                    borderRadius: 4,
                },
            },
            dataLabels: {
                enabled: false,
            },
            grid: {
                show: false,
            },
            title: {
                text: "Pedidos por mês",
                align: "left",
                margin: 50,
                offsetX: 10,
                style: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#333333",
                },
            },
            legend: {
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
