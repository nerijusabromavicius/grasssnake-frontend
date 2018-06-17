import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels:['Boston', 'Crabby'],
                datasets:[
                    {
                        label: ['On-target score'],
                        data:[50000, 60000],
                        backgroundColor: ['red', 'blue']
                    }
                ],
                options: {
                    responsive: true,
                    legend: {
                        position: 'bottom',
                    },
                    hover: {
                        mode: 'label'
                    },
                    scales: {
                        xAxes: [{
                                display: true,
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Month'
                                }
                            }],
                        yAxes: [{
                                display: true,
                                ticks: {
                                    beginAtZero: true,
                                    steps: 10,
                                    stepValue: 5,
                                    max: 100
                                }
                            }]
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart - Legend'
                    }
                }
        }
    }
}

    render(){
        return(
            <div className="chart">
               <Bar 
                data = {this.state.chartData}
                options = {{
                    maintainAspectRatio: false,
                    title: {

                    }
                }}
               />
            </div>   
        );
    }
}

export default Chart;