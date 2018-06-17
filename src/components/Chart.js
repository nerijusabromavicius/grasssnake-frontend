import React, {Component} from 'react';
import {/*Bar, Line,*/ Pie} from 'react-chartjs-2';

class Chart3 extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            chartData:{
                labels:['On-target', 'Off-target'],
                datasets:[
                    {
                        data:[0.5, 1- 0.5
                        ] 
                    }
                ]
            }
        }
    }

    render(){
        return(
            <div className="chart">
               <Pie 
                data = {this.state.chartData}
                options = {{
                    maintainAspectRatio: false
                }}
               />
            </div>   
        );
    }
}

export default Chart3;