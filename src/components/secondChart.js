import React, { Component } from 'react';
import axios from "axios";

class SecondChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }
    componentDidMount() {
        var formdata = {"_id":"Datastory_ChartId_1535224664111","emailId":"candidate@sigmoid.com","orgViewReq":{"organization":"DemoTest","view":"Auction"},"chartObject":{"metadata":{"title":"","img_thumbnail":"images/pie.png","chartType":"pie","dataLimit":500},"text":[],"requestParam":{"granularity":"hour","timeZone":{"name":"UTC (+00:00)","location":"UTC"},"dateRange":{"startDate":"1493424000000","endDate":"1493596800000"},"xAxis":["D005"],"yAxis":[],"approxCountDistinct":[],"specialCalculation":["CM001"],"filter":[],"orderBy":{"customMetricOrdByList":[{"id":"CM001","desc":true}]},"percentCalList":[{"id":"CM001"}]}}}

        axios.post("https://sigview.sigmoid.io/api/v1/getData", formdata, {
            headers: { 'x-auth-token': sessionStorage.getItem("_t")}
        })
            .then((response) => {
                this.setState({
                    data: response.data.result.data
                })
            })
            .catch((error) => {
                console.log("---error-->", error)
            });

    }
    render() {
        return (
            <div className="data">
            { this.state.data == null ?
                <h3>Loading......</h3>
                :
                <table>
                <thead>
                  <tr>
                    <th>Advertiser Id</th>
                    <th>CM001</th>
                    <th>CM001 Percent</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.data.map((i,j)=>(
                      <tr key={j}>
                        <td>{i.advertiserId}</td>
                        <td>{i.CM001}</td>
                        <td>{i.CM001_percent}</td>
                      </tr>
                    ))}
                  </tbody>
                  </table>
            }
            </div>
        )
    }
}

export default SecondChart;