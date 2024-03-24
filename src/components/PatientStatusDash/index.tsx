import Chart from 'react-apexcharts';



const PatientStatusDash = () => {
    const chartOptions = {
        // Define your chart options here
        series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
        }, {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
        }],
        grid: {
            show: false
        },
        legend: {
            show: true
        },
        chart: {
            height: 350,
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            }
        },
        tooltip: {
            x: {
                show: true,
                format: 'dd MMM',
            },

        },
        title: {
            text: 'Radar Chart - Multi Series'
        },
        stroke: {
            width: 2
        },
        fill: {
            opacity: 0.1
        },
        markers: {
            size: 2
        },
        xaxis: {
            categories: ['2011', '2012', '2013', '2014', '2015', '2016']
        }

    };

    return (
        <div>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <Chart
                        options={chartOptions}
                        series={chartOptions.series}
                        type="radar"
                        height={650}
                    />
                </div>
                <div>01</div>
                <div>01</div>
                <div>09</div>
            </div>
        </div>
    );
};
export default PatientStatusDash;