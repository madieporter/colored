import React, { Component } from "react";
import Pusher from "pusher-js";
import ColorPicker from "./ColorPicker";
import LineWidthPicker from "./LineWidthPicker";
import CanvasSizePicker from "./CanvasSizePicker";

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userStrokeColor: "#EE92C2",
        }

        // this.changeSelectedColor = this.changeSelectedColor.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.endPaintEvent = this.endPaintEvent.bind(this);
        //initialize pusher in constructor
        this.pusher = new Pusher ("af217167ff48aa5d1444", {
            cluster: 'us3'
        })
    }

    isPainting = false;
    line = [];
    prevPos = { offsetX: 0, offsetY: 0 };

    handleColorClick = (color) => {
        this.setState({ userStrokeColor: color })
    };

    handleCanvasSize = (width, height) => {
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx.lineJoin = "round";
        this.ctx.lineCap = "round";
    }

    handleLineWidthClick = (width) => {
        this.ctx.lineWidth = width
    };

    //setting up event handlers for mousedown, movemove, mouseout, nad mouseleave. Set in each handler is the logic behind the paint application
    onMouseDown({ nativeEvent }) {
                    //SyntheticEvent is a cross-browser wrapper around the browser's native event.
                    //But using nativeEvent attribute here to get the underlying browser event
                    //and need properties that are not included with SyntheticEvent
        const { offsetX, offsetY } = nativeEvent;
        this.isPainting = true;
        this.prevPos = { offsetX, offsetY };
    }

    //where painting takes place
    onMouseMove({ nativeEvent }) {
        if (this.isPainting) {
            const { offsetX, offsetY} = nativeEvent;
            const offSetData = { offsetX, offsetY };
            //setting the start and stop positions of the paint event
            //positionData holds current X and Y properties of the nativeEvent
            const positionData = {
                start: { ...this.prevPos },
                stop: { ...offSetData },
            };
            //appending the set position to the line array
            this.line = this.line.concat(positionData);
            this.paint(this.prevPos, offSetData, this.state.userStrokeColor);
        }
    }

    //mouseUp and mouseLeave events
    endPaintEvent() {
        if (this.isPainting) {
            this.isPainting = false;
                //set to false to prevent the user from painting until the next mouseDown is triggered
            this.sendPaintData();
                //finally called to send the position of the data of the just concluded paint event to the server.
                //sends a post request to the server containing the userId and the line array as the req.body
                //line array is then reset to empty after the request is complete 
                //using the browsers native fetch API for making network requests
        }
    }

    paint(prevPos, currPos, strokeStyle) {
        //paint method takes three parameteres to complete paint event. 
        //the previous position of the mouse, current position, and the stroke style
        const { offsetX, offsetY } = currPos;
        const { offsetX: x, offsetY: y } = prevPos;
        this.ctx.beginPath();
        this.ctx.strokeStyle = strokeStyle;
        //move the previous position of the mouse
        //takes the x and y properties of the prevPos
        this.ctx.moveTo(x, y);
        //draw a line to the current position of the mouse
        this.ctx.lineTo(offsetX, offsetY);
        //visualize the line using the strokeStyle
        this.ctx.stroke();
        this.prevPos = { offsetX, offsetY };
    }

    async sendPaintData() {
        const body = {
            line: this.line,
        };

        //using the native fetch API to make requests to the server
        const req = await fetch("http://localhost:3669/paint", {
            method: "post",
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
            },
        });

        const res = await req.json();
        this.line = [];
    }

    componentDidMount() {
        //setting up properties of the canvas elemnt.
        this.ctx = this.canvas.getContext("2d");
        this.ctx.lineWidth = 5;
        this.canvas.width = 1200;
        this.canvas.height = 715;
        this.ctx.lineJoin = "round";
        this.ctx.lineCap = "round";
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <ColorPicker handleColorClick={this.handleColorClick} />
                <CanvasSizePicker handleCanvasSize={this.handleCanvasSize} />
                <LineWidthPicker handleLineWidthClick={this.handleLineWidthClick} />
                <div className="canvasContainer">
                    <canvas
                    //using ref attribute to get direct access to canvas element
                    ref = {(ref) => (this.canvas = ref)}
                    style = {{ background: "black" }}
                    onMouseDown = {this.onMouseDown}
                    onMouseLeave = {this.endPaintEvent}
                                    //use the paint event to describe the duration from a mouse down event to a mouse up or mouse leave event. 
                    onMouseUp = {this.endPaintEvent}
                    onMouseMove = {this.onMouseMove}
                    />
                </div>
            </div>
        );
    }
}

export default Canvas;