import ReactApexChart from "react-apexcharts";
import { ChartType } from "../../../../../types/ChartType";

export const MonthOrdersChart = ({ data }: { data: number[] }) => {
    const chartProps: ChartType = {
        series: [
            {
                name: "Pedidos",
                data: data,
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "bar",
                fontFamily: "Ubuntu",
                toolbar: {
                    tools: {
                        download: false,
                    },
                },
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
            tooltip: {
                style: {
                    fontSize: "16px",
                },
            },
        },
    };

    return (
        <ReactApexChart
            options={chartProps.options}
            series={chartProps.series}
            type="bar"
            height={350}
        />
    );
};
