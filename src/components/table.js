import React, { Component } from 'react';
import axios from "axios";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }
    componentDidMount() {
        var formdata = {"_id":"dashboard1516252439345","emailId":"candidate@sigmoid.com","orgViewReq":{"organization":"DemoTest","view":"Auction"},"chartObject":{"metadata":{"title":"chartobject:1516252439345","img_thumbnail":"../img/chart.png","chartType":"table","dataLimit":50},"requestParam":{"granularity":"hour","timeZone":{"name":"UTC (+00:00)","location":"UTC"},"dateRange":{"startDate":"1493337600000","endDate":"1493510400000"},"xAxis":["D044"],"yAxis":["M002"],"approxCountDistinct":[],"specialCalculation":[],"filter":[],"orderBy":{"metricOrdByList":[{"id":"M002","desc":true}]},"percentCalList":[]}}}
        axios.post("https://sigviewauth.sigmoid.io/api/v1/getData", formdata, {
            headers: { 'x-auth-token': sessionStorage.getItem("_t")}
        })
            .then((response) => {
                this.setState({
                    data: response.data.result.data,
                    keyArr:Object.keys(response.data.result.data[0])
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
                    <th>Publisher Id</th>
                    <th>Impressions offered</th>
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.data.map((i,j)=>(
                      <tr key={j}>
                        <td>{i.publisherId}</td>
                        <td>{i.impressions_offered}</td>
                      </tr>
                    ))}
                  </tbody>
                  </table>
            }
            </div>
        )
    }
}

export default Table;