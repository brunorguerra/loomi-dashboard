import ReactApexChart from "react-apexcharts";
import { ChartType } from "../../../../../types/ChartType";

export const DeviceTransactionChart = () => {
    const chartProps: ChartType = {
        series: [68950, 85321],
        options: {
            chart: {
                type: "donut",
                fontFamily: "Ubuntu",
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
            yaxis: {
                labels: {
                    formatter: (value) => `${Math.ceil(value)} transações`,
                },
            },
            tooltip: {
                style: {
                    fontSize: "20px",
                },
            },
        },
    };

    return (
        <ReactApexChart
            height={350}
            options={chartProps.options}
            series={chartProps.series}
            type="donut"
        />
    );
};
