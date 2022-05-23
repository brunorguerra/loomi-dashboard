import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ChartType } from "./types/ChartType";

export const CustomerTransactionChart = () => {
    const [chartProps, setChartProps] = useState<ChartType>({
        series: [4123, 2345],
        options: {
            chart: {
                type: "donut",
            },
            dataLabels: {
                enabled: false,
            },
            labels: ["Novo cliente", "Cliente retornando"],
            title: {
                text: "Transações por tipo de cliente",
                align: "left",
                margin: 50,
                offsetX: 10,
                style: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#333333",
                },
            },
            colors: ["#9DD6D3", "#7BB686"],
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
