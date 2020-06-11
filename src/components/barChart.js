import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import * as d3 from "d3";

const Node = styled.div`
  div {
    font: 15px sans-serif;
    background-color: steelblue;
    text-align: right;
    padding: 10px;
    margin: 10px;
    color: white;
  }
`;

export default (props) => {
    const myRef = useRef();
    const data = props.data.slice(1,20)
  
    useEffect(() => {
        
      d3.select(myRef.current)
        .selectAll("div")
        .data(data)
        .enter()
        .append("div")
        .style("width", function(d) {
            let temp = Math.floor(d.impressions_offered/20000)
          return temp*4.2 + "px";
        })
        .text(function(d) {
          return (d.appSiteId+"-------"+d.impressions_offered/10000);
        });
    }, [data]);
  
    return <Node ref={myRef} />;
  };