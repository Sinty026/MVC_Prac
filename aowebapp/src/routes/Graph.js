import React, { useState } from 'react'
import * as d3 from "d3"

export default function Graph() {

    const [rngNumber, setRngNumber] = useState(0);
    const [rngArray, setRngArray] = useState([]);
    const maxItems = 20; 
    const timeOut = 500;
    const maxValue = 60; 

    React.useEffect(() => {
        const interval = setInterval(() => {
            setRngNumber(Math.floor(Math.random() * maxValue));

        }, timeOut);

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        let tempArray = [...rngArray, rngNumber];
        if (tempArray.length > maxItems) { tempArray.shift() }
        setRngArray(tempArray)
    }, [rngNumber]);

    React.useEffect(() => {
        const svg = d3.select('svg')
        svg.selectAll('*').remove();

        let w = svg.node().getBoundingClientRect().width;
        w = w - 40
        let h = svg.node().getBoundingClientRect().height;
        h = h - 25
        const barMargin = 10;
        const barWidth = w / rngArray.length;

        let yScale = d3.scaleLinear()
            .domain([0, maxValue])
            .range([h, 0]);

        const chartGroup = svg.append('g')
            .classed('chartGroup', true)
            .attr('transform', 'translate(30,3)');

        //let barGroups = svg.selectAll('g')
        //    .data(rngArray)

        //let newBarGroups = barGroups.enter()
        //    .append('g')
        //    .attr('transform', (d, i) => {
        //        return `translate(${i * barWidth}, ${yScale(d)})`;
        //    });

        //newBarGroups
        //    .append('rect')
        //    .attr('x', 0)
        //    .attr('height', 0)
        //    .attr('y', d => h  - yScale(d))
        //    .attr('width', barWidth - barMargin)
        //    .attr('y', 0)
        //    .attr('height', d => h - yScale(d))
        //    .attr("fill", (d, i) => `rgb(${(360 / maxValue * d + 1)},
        //    ${ 360 - (360 / maxValue * d + 1)}, 60)`)

        chartGroup
            .append('path')
            .datum(rngArray)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 1.5)
            .attr('d', d3.line()
                .x((d, i) => 1 * barWidth)
                .y((d) => yScale(d))
        )

        let yAxis = d3.axisLeft(yScale);
        chartGroup.append('g')
            .classed('axis y', true)
            .call(yAxis);


    }, [rngArray])


    return (
        <div className="App contrainer">
            <h1>RNG Output: { rngNumber} </h1>
            <div className="row">
                <svg width="100%" height="600px" class="border border-primary rounded p-2"></svg>
            </div>
        </div> 
    );
}; 