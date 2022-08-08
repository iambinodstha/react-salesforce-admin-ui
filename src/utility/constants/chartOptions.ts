import Highcharts, { Options } from 'highcharts';
let colors = Highcharts.getOptions().colors as string[];

export const quarterlyPerfomanceOptions: Options = {
    title: {
        align: "left",
        text: '<p class="text-sm font-semibold">Defi Quarterly Perfomance<p>',
    },
    xAxis: {
        tickInterval: 7 * 24 * 3600 * 1000, // one week
        tickWidth: 0,
        gridLineWidth: 1,
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    yAxis: {
        title: {
            text: 'Price'
        }
    },
    plotOptions: {
        area: {
            marker: {
                enabled: false
            }
        }
    },
    series: [{
        type: "area",
        name: "Bitcoin Price",
        data: [
            [Date.UTC(2022, 7, 1), 10000], [Date.UTC(2022, 7, 2), 20000], [Date.UTC(2022, 7, 3), 10000], [Date.UTC(2022, 7, 4), 20000], [Date.UTC(2022, 7, 5), 50000], [Date.UTC(2022, 7, 6), 60000], [Date.UTC(2022, 7, 7), 70000], [Date.UTC(2022, 7, 8), 80000], [Date.UTC(2022, 7, 9), 90000], [Date.UTC(2022, 7, 10), 100000],
            [Date.UTC(2022, 7, 11), 105000], [Date.UTC(2022, 7, 12), 90000], [Date.UTC(2022, 7, 13), 95000], [Date.UTC(2022, 7, 14), 120000], [Date.UTC(2022, 7, 15), 150000], [Date.UTC(2022, 7, 16), 160000], [Date.UTC(2022, 7, 17), 170000], [Date.UTC(2022, 7, 18), 180000], [Date.UTC(2022, 7, 19), 190000], [Date.UTC(2022, 7, 20), 200000],
            [Date.UTC(2022, 7, 21), 205000], [Date.UTC(2022, 7, 22), 180000], [Date.UTC(2022, 7, 23), 195000], [Date.UTC(2022, 7, 24), 210000], [Date.UTC(2022, 7, 25), 250000], [Date.UTC(2022, 7, 26), 260000], [Date.UTC(2022, 7, 27), 270000], [Date.UTC(2022, 7, 28), 280000], [Date.UTC(2022, 7, 29), 290000], [Date.UTC(2022, 7, 30), 300000],
            [Date.UTC(2022, 7, 31), 305000], [Date.UTC(2022, 8, 1), 300000], [Date.UTC(2022, 8, 2), 295000], [Date.UTC(2022, 8, 3), 310000], [Date.UTC(2022, 8, 4), 350000], [Date.UTC(2022, 8, 5), 360000], [Date.UTC(2022, 8, 6), 370000], [Date.UTC(2022, 8, 7), 380000], [Date.UTC(2022, 8, 8), 390000]
        ]
    }]
};

export const assetBreakDownOptions: Options = {
    title: {
        align: "left",
        text: '<p class="text-sm font-semibold">Asset Breakdown<p>'

    },
    xAxis: {
        title: {
            text: "Year"
        },
        categories: ['2017', '2018', '2019', '2020', '2021']
    },
    yAxis: {
        title: {
            text: 'Market Percent (%)'
        }
    },
    plotOptions: {
        column: {
            stacking: 'normal'
        }
    },
    series: [
        {
            type: "column",
            name: 'Fantom',
            data: [10, 20, 15, 18, 25]
        },
        {
            type: "column",
            name: 'Ethereum',
            data: [5, 10, 8, 5, 10]
        },
        {
            type: "column",
            name: 'Polygon',
            data: [5, 20, 10, 15, 20]
        }]
}

export const donutPieChartOptions: Options = {
    title: {
        align: "left",
        text: '<p class="text-sm font-semibold">Browser Market Share<p>'
    },
    chart: {
        plotBackgroundColor: 'transparent',
        plotBorderWidth: 0,
        plotShadow: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            innerSize: 200,
            dataLabels: {
                enabled: false,
            },
            showInLegend: true
        },
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '70%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.61,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
}

export const averageMonthlyWeatherOptions: Options = {
    title: {
        text: '<p class="text-sm font-semibold">Average Monthly Temperature and Rainfall in Tokyo<p>',
        align: "left"
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        align: "left"
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                color: colors[1]
            }
        },
        title: {
            text: 'Temperature',
            style: {
                color: colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Rainfall',
            style: {
                color: colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend?.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' mm'
        }

    }, {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
            valueSuffix: '°C'
        }
    }]
};

export const protocolSplitOptions: Options = {
    title: {
        align: 'left',
        text: '<p class="text-sm font-semibold">Browser market shares. January, 2018<p>'
    },
    subtitle: {
        align: 'left',
        text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent market share'
        }
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            type: 'column',
            name: "Browsers",
            colorByPoint: true,
            data: [
                {
                    name: "Chrome",
                    y: 62.74,
                },
                {
                    name: "Firefox",
                    y: 10.57,
                },
                {
                    name: "Internet Explorer",
                    y: 7.23,
                },
                {
                    name: "Safari",
                    y: 5.58,
                },
                {
                    name: "Edge",
                    y: 4.02,
                },
                {
                    name: "Opera",
                    y: 1.92,
                },
                {
                    name: "Other",
                    y: 7.62,
                }
            ]
        }
    ]
}
