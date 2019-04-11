import React from "react";

const ColorPicker = (props) => {
    return (
        <div className="colorGuide">
            <div className="colorPicks">
                <div className="colorBtn" style={{backgroundColor: "#0339FF"}} onClick = {() => props.handleColorClick("#0339FF")}></div>
                <div className="colorBtn" style={{backgroundColor: "#0065FF"}} onClick = {() => props.handleColorClick("#0065FF")}></div>
                <div className="colorBtn" style={{backgroundColor: "#005B7F"}} onClick = {() => props.handleColorClick("#005B7F")}></div>
                <div className="colorBtn" style={{backgroundColor: "#00B6FF"}} onClick = {() => props.handleColorClick("#00B6FF")}></div>
                <div className="colorBtn" style={{backgroundColor: "#00FDFF"}} onClick = {() => props.handleColorClick("#00FDFF")}></div>
            </div>

            <div className="colorPicks">
                <div className="colorBtn" style={{backgroundColor: "#335419"}} onClick = {() => props.handleColorClick("#335419")}></div>
                <div className="colorBtn" style={{backgroundColor: "#377F00"}} onClick = {() => props.handleColorClick("#377F00")}></div>
                <div className="colorBtn" style={{backgroundColor: "#59CC00"}} onClick = {() => props.handleColorClick("#59CC00")}></div>
                <div className="colorBtn" style={{backgroundColor: "#96FF36"}} onClick = {() => props.handleColorClick("#96FF36")}></div>
                <div className="colorBtn" style={{backgroundColor: "#4CFF72"}} onClick = {() => props.handleColorClick("#4CFF72")}></div>
            </div>

            <div className="colorPicks">
                <div className="colorBtn" style={{backgroundColor: "#9CB200"}} onClick = {() => props.handleColorClick("#9CB200")}></div>
                <div className="colorBtn" style={{backgroundColor: "#E1FF16"}} onClick = {() => props.handleColorClick("#E1FF16")}></div>
                <div className="colorBtn" style={{backgroundColor: "#FFE200"}} onClick = {() => props.handleColorClick("#FFE200")}></div>
                <div className="colorBtn" style={{backgroundColor: "#FFEF4C"}} onClick = {() => props.handleColorClick("#FFEF4C")}></div>
                <div className="colorBtn" style={{backgroundColor: "#FFF59C"}} onClick = {() => props.handleColorClick("#FFF59C")}></div>
            </div>

            <div className="colorPicks">
                <div className="colorBtn" style={{backgroundColor: "#543919"}} onClick = {() => props.handleColorClick("#543919")}></div>
                <div className="colorBtn" style={{backgroundColor: "#965200"}} onClick = {() => props.handleColorClick("#965200")}></div>
                <div className="colorBtn" style={{backgroundColor: "#BA490B"}} onClick = {() => props.handleColorClick("#BA490B")}></div>
                <div className="colorBtn" style={{backgroundColor: "#FF7100"}} onClick = {() => props.handleColorClick("#FF7100")}></div>
                <div className="colorBtn" style={{backgroundColor: "#FFAD29"}} onClick = {() => props.handleColorClick("#FFAD29")}></div>
            </div>

            <div className="colorPicks">
                <div className="colorBtn" style={{backgroundColor: "#7F0800"}} onClick = {() => props.handleColorClick("#7F0800")}></div>
                <div className="colorBtn" style={{backgroundColor: "#B81A00"}} onClick = {() => props.handleColorClick("#B81A00")}></div>
                <div className="colorBtn" style={{backgroundColor: "#FF1000"}} onClick = {() => props.handleColorClick("#FF1000")}></div>
                <div className="colorBtn" style={{backgroundColor: "#CC2E25"}} onClick = {() => props.handleColorClick("#CC2E25")}></div>
                <div className="colorBtn" style={{backgroundColor: "#FF5546"}} onClick = {() => props.handleColorClick("#FF5546")}></div>
            </div>

            <div className="colorPicks">
                <div className="colorBtn" style={{backgroundColor: "#A3005D"}} onClick = {() => props.handleColorClick("#A3005D")}></div>
                <div className="colorBtn" style={{backgroundColor: "#BF0086"}} onClick = {() => props.handleColorClick("#BF0086")}></div>
                <div className="colorBtn" style={{backgroundColor: "#FF005E"}} onClick = {() => props.handleColorClick("#FF005E")}></div>
                <div className="colorBtn" style={{backgroundColor: "#FF4C8E"}} onClick = {() => props.handleColorClick("#FF4C8E")}></div>
                <div className="colorBtn" style={{backgroundColor: "#EE92C2"}} onClick = {() => props.handleColorClick("#EE92C2")}></div>
            </div>

            <div className="colorPicks">
                <div className="colorBtn" style={{backgroundColor: "#78007F"}} onClick = {() => props.handleColorClick("#78007F")}></div>
                <div className="colorBtn" style={{backgroundColor: "#BD34A7"}} onClick = {() => props.handleColorClick("#BD34A7")}></div>
                <div className="colorBtn" style={{backgroundColor: "#7F4977"}} onClick = {() => props.handleColorClick("#7F4977")}></div>
                <div className="colorBtn" style={{backgroundColor: "#A016FF"}} onClick = {() => props.handleColorClick("#A016FF")}></div>
                <div className="colorBtn" style={{backgroundColor: "#BF62FF"}} onClick = {() => props.handleColorClick("#BF62FF")}></div>
            </div>
            
            <div className="colorPicks">
                <div className="colorBtn" style={{backgroundColor: "#000000"}} onClick = {() => props.handleColorClick("#000000")}></div>
                <div className="colorBtn" style={{backgroundColor: "#3F3F40"}} onClick = {() => props.handleColorClick("#3F3F40")}></div>
                <div className="colorBtn" style={{backgroundColor: "#7F7E7F"}} onClick = {() => props.handleColorClick("#7F7E7F")}></div>
                <div className="colorBtn" style={{backgroundColor: "#BEBDBF"}} onClick = {() => props.handleColorClick("#BEBDBF")}></div>
                <div className="colorBtn" style={{backgroundColor: "#FEFCFF", border: ".5px solid", width: "67px", height: "67px"}} onClick = {() => props.handleColorClick("#FEFCFF")}></div>
            </div>
        </div>
    )
}

export default ColorPicker;