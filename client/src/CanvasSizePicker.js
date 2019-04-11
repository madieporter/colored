import React from "react";

const CanvasSizePicker = (props) => {
    return (
        <div className="canvasSizeContainer"> 
            <div className="canvasSize" onClick = {() => props.handleCanvasSize(500, 500)}>smaller</div>
            <div className="canvasSize" onClick = {() => props.handleCanvasSize(700, 500)}>small</div>
            <div className="canvasSize" onClick = {() => props.handleCanvasSize(900, 700)}>big</div>
            <div className="canvasSize" onClick = {() => props.handleCanvasSize(1200, 715)}>bigger</div>
        </div>
    )
}

export default CanvasSizePicker;