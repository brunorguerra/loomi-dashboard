import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ChartType } from "./types/ChartType";

export const DeviceTransactionChart = () => {
    const [chartProps, setChartProps] = useState<ChartType>({
        series: [68950, 85321],
        options: {
            chart: {
                type: "donut",
            },
            dataLabels: {
                enabled: false,
            },
            labels: ["Desktop", "Mobile"],
            title: {
                text: "Transações por aparelho",
                align: "left",
                margin: 50,
                offsetX: 10,
                style: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#333333",
                },
            },
            colors: ["#EC657A", "#252E48"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
    });

    return (
        <ReactApexChart
            height={350}
            options={chartProps.options}
            series={chartProps.series}
            type="donut"
        />
    );
};
