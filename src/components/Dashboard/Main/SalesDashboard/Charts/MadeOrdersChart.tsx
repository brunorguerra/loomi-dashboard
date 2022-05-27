import ReactApexChart from "react-apexcharts";
import { ChartType } from "../../../../../types/ChartType";

type MadeOrdersChartProps = {
    madeOrders: number[];
    canceledOrders: number[];
};

export const MadeOrdersChart = ({
    madeOrders,
    canceledOrders,
}: MadeOrdersChartProps) => {
    const chartProps: ChartType = {
        series: [
            {
                name: "Pedidos realizados",
                type: "column",
                data: madeOrders,
                color: "#109E8E",
            },
            {
                name: "Pedidos cancelados",
                type: "column",
                data: canceledOrders,
                color: "#F18F7F",
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "line",
                stacked: false,
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
            tooltip: {
                style: {
                    fontSize: "16px",
                },
            },
            legend: {
                horizontalAlign: "left",
                offsetX: 40,
            },
        },
    };

    return (
        <ReactApexChart
            options={chartProps.options}
            series={chartProps.series}
            type="line"
            height={350}
        />
    );
};
