import React, { Component } from 'react';
import axios from "axios";

class DateRange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            startDate:null,
            endDate:null,
        };
    }
    componentDidMount() {
        var formdata = {"organization":"DemoTest","view":"Auction"}
        axios.post("https://sigviewauth.sigmoid.io/api/v1/getDateRange", formdata, {
            headers: { 'x-auth-token': sessionStorage.getItem("_t")}
        })
            .then((response) => {
                var sd = new Date(parseInt(response.data.result.startDate)).toUTCString('en').split(',')[1].split(' ').slice(1, 4)
                var ed = new Date(parseInt(response.data.result.endDate)).toUTCString('en').split(',')[1].split(' ').slice(1, 4)
                this.setState({
                    data: response.data.result,
                    startDate:sd[1]+" "+sd[0]+","+sd[2],
                    endDate:ed[1]+" "+ed[0]+","+ed[2],
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
                <>
                    <h3>Start Date.:{this.state.startDate}</h3>
                    <h3>End Date.:{this.state.endDate}</h3>
                </>
            }
            </div>
        )
    }
}

export default DateRange;