import Chart from 'react-apexcharts';



const PatientStatusDash = () => {
    const chartOptions = {
        // Define your chart options here
        series: [{
            name: 'Lan 1',
            data: [50, 30, 40, 100, 20, 40],
        }, {
            name: 'Lan 2',
            data: [30, 40, 80, 20, 80, 30],
        }, {
            name: 'Lan 3',
            data: [76, 78, 13, 43, 10, 70],
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
        stroke: {
            width: 2
        },
        fill: {
            opacity: 0.1
        },
        markers: {
            size: 4
        },
        xaxis: {
            categories: ['Van dong tho', 'Van dong tinh', 'Bat chuoc va hoc', 'Ca nhan xa hoi', 'Giao tiep ngon ngu']
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