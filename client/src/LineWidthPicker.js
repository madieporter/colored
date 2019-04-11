import React from "react";

const LineWidthPicker = (props) => {
    return (
        <div className="sizeContainer">
            <div className="size" onClick = {() => props.handleLineWidthClick(3)}>sketch</div>
            <div className="size" onClick = {() => props.handleLineWidthClick(5)}>draw</div>
            <div className="size" onClick = {() => props.handleLineWidthClick(10)}>color</div>
            <div className="size" onClick = {() => props.handleLineWidthClick(20)}>paint</div>
            <div className="size" onClick = {() => props.handleLineWidthClick(50)}>graffiti</div>
            <div className="size" onClick = {() => props.handleLineWidthClick(100)}>pour</div>
        </div>
    )
}

export default LineWidthPicker;