import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart = ({ data }) => {
    return (
        <div className="chart">
            <Bar 
                data = { data }
                options = {{
                    maintainAspectRatio: false,
                    scales: { yAxes: [{ticks: {beginAtZero: true}}]},
                    responsive: true,
                }}
             />
        </div>   
    );
}

export default Chart;
