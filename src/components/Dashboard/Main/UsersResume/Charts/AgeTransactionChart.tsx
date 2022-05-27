import ReactApexChart from "react-apexcharts";
import { ChartType } from "../../../../../types/ChartType";

type AgeTransactionChartProps = {
    data: number[];
};

export const AgeTransactionChart = ({ data }: AgeTransactionChartProps) => {
    const chartProps: ChartType = {
        series: [
            {
                name: "Transações",
                data: data,
            },
        ],
        options: {
            chart: {
                type: "bar",
                height: 350,
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
            labels: ["-18", "18-24", "25-34", "35-44", "45-54", "55-64", "65+"],
            noData: {
                text: "Dados não encontrados",
                style: {
                    fontSize: "18px",
                },
            },
            xaxis: {
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
            tooltip: {
                y: {
                    formatter: (value) => String(Math.ceil(value)),
                },
                style: {
                    fontSize: "20px",
                },
                intersect: false,
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
