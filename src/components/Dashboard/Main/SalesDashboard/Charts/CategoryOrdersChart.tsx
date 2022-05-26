import ReactApexChart from "react-apexcharts";
import { ChartType } from "../../../../../types/ChartType";

export const CategoryOrdersChart = () => {
    const chartProps: ChartType = {
        series: [44, 55, 41, 17, 15],
        options: {
            chart: {
                type: "donut",
            },
            dataLabels: {
                enabled: false,
            },
            labels: [
                "Mesa Eva Preta",
                "Mesa Eva Verde",
                "Mesa Eva Azul",
                "Mesa Eva Vermelho",
                "Mesa Eva Laranja",
            ],
            title: {
                text: "Pedidos por categoria",
                align: "left",
                margin: 50,
                offsetX: 10,
                style: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "#333333",
                },
            },
            colors: ["#252E48", "#7BB686", "#9FD8D5", "#EC657A", "#F7C982"],
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
