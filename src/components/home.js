import React, { Component } from 'react';

import DateRange from './dateRange';
import Table from './table';
import FirstChart from './firstChart';
import SecondChart from './secondChart';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'dateRange'
        };
    }

    handleClick = (str)=>{
        this.setState({
            view:str
        })
    }
    render() {
        return (
            <>
                <h1>Home</h1>
                <div className="header">
                    <div className="header-right">
                        <a href="#" 
                            onClick={()=>this.handleClick("dateRange")} 
                            className={this.state.view === "dateRange" ? " active_item" : ""}>Date Range</a>
                        <a href="#" 
                            onClick={()=>this.handleClick("table")} 
                            className={this.state.view === "table" ? " active_item" : ""}>Table</a>
                        <a href="#" 
                            onClick={()=>this.handleClick("firstChart")} 
                            className={this.state.view === "firstChart" ? " active_item" : ""}>First Chart</a>
                        <a href="#" 
                            onClick={()=>this.handleClick("secondChart")} 
                            className={this.state.view === "secondChart" ? " active_item" : ""}>Second Chart</a>
                    </div>
                </div>
                <div>
                    {this.state.view === "dateRange" && <DateRange />}
                    {this.state.view === "table" && <Table url="https://sigviewauth.sigmoid.io/api/v1/getData" formdata = {{"_id":"dashboard1516252439345","emailId":"candidate@sigmoid.com","orgViewReq":{"organization":"DemoTest","view":"Auction"},"chartObject":{"metadata":{"title":"chartobject:1516252439345","img_thumbnail":"../img/chart.png","chartType":"table","dataLimit":50},"requestParam":{"granularity":"hour","timeZone":{"name":"UTC (+00:00)","location":"UTC"},"dateRange":{"startDate":"1493337600000","endDate":"1493510400000"},"xAxis":["D044"],"yAxis":["M002"],"approxCountDistinct":[],"specialCalculation":[],"filter":[],"orderBy":{"metricOrdByList":[{"id":"M002","desc":true}]},"percentCalList":[]}}}}/>}  
                    {this.state.view === "firstChart" && <FirstChart />}  
                    {this.state.view === "secondChart" && <SecondChart />}                
                </div>
            </>
        )
    }
}

export default Home;