"use strict";

class KakiyamaInput {
    
    constructor() {
        this.pressedKey = [];
        this.downKey = [];
        this.mouseValue = false;
        this.lastMousePosition = {x: 0, y: 0};
        this.isOn = false;
        const object = this;
        this.canvas;

        this.start = function(canvas = document, element = document) {
            if(this.isOn) {
                console.log("Input has already started");
                return;
            }
            this.isOn = true;
            this.element = element;
            this.canvas = canvas;
    
            element.addEventListener("keydown", function(e) {
                if(e.repeat) return;
                if(object.pressedKey.indexOf(e.code) == -1) object.pressedKey.push(e.code);
                if(object.downKey.indexOf(e.code) == -1) object.downKey.push(e.code);
            })
    
            element.addEventListener("keyup", function(e) {
                if(object.pressedKey.indexOf(e.code) == -1) return;
                object.pressedKey.splice(object.pressedKey.indexOf(e.code), 1);
            })

            element.addEventListener("mousedown", function(e) {
                object.mouseValue = true;
            })
            element.addEventListener("mouseup", function(e) {
                object.mouseValue = false;
            })
            canvas.addEventListener("mousemove", function(e) {
                object.lastMousePosition.x = getPositionOnCanvas(e).x;
                object.lastMousePosition.y = getPositionOnCanvas(e).y;
            })
        }
    }

    getPressedKey() {
        return this.pressedKey;
    }

    getKey(code) {
        return this.pressedKey.indexOf(code) != -1;
    }

    getKeyDown(code) {
        let include = this.downKey.indexOf(code);
        if(include != -1) {
            this.downKey.splice(include, 1);
            return true;
        }
        return false;
    }

    getMouseValue() {
        return this.mouseValue;
    }
    getLastMousePosition() {
        return this.lastMousePosition;
    }
}

var getPositionOnCanvas = function(e) {
    if(!e) {
        console.log("Error: e in getMousePos is undefined")
        return undefined;
    }
    const rect = e.target.getBoundingClientRect();
    if(!rect) {
        console.log("Error: e in getMousePos is not event handler")
        return undefined;
    }

    //calculate coordinate on browse
    const   viewX = e.clientX - rect.left,
            viewY = e.clientY - rect.top;

    //calculate ratio of canvas real size against canvas size in game
    const   scaleWidth =  e.target.clientWidth / e.target.width,
            scaleHeight =  e.target.clientHeight / e.target.height;

    //change coordinate from on browse to on canvas
    return {
        x: Math.floor( viewX / scaleWidth ),
        y: Math.floor( viewY / scaleHeight )
    }
}
