import React, { useState } from 'react'
import './Style.css'
export default function SampleRgb() {
    const [typeOfColor, settypeOfColor] = useState('hex');
    const [color, setcolor] = useState('#000000')
    let randomNumber;

    function randomColorutility(length) {
        return Math.floor(Math.random() * length);
    }
    function HandleClickRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        randomNumber = "#";
        for (let i = 0; i < 6; i++) {
            randomNumber += hex[randomColorutility(hex.length)];
        }
        setcolor(randomNumber);
    }
    function HandleClickRandomRGBColor() {
        const r=randomColorutility(256);
        const g=randomColorutility(256);
        const b=randomColorutility(256)
        setcolor(`rgb(${r}, ${g}, ${b})`);
    }
    return (
        <div style={{
            marginTop: '5rem',
            width: '100vw',
            height: '100vh',
            background: color
        }}>
            <button onClick={() => settypeOfColor('hex')}>Create HEX color</button>
            <button onClick={() => settypeOfColor('rgb')}>Create  RGB color</button>
            <button onClick={typeOfColor === 'hex' ? HandleClickRandomHexColor : HandleClickRandomRGBColor}>Generate random Color</button>
            <div className="content">
                <div className="innercontent">
                    Current Color is: {color}
                </div>
            </div>
        </div>
    )
}
