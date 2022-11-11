import React, { useEffect, useState } from "react";
import globalVar from './globalVar';


function DefaultFrame(props) {

    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [result, setResult] = useState('');

    function setXvalue(e) {
        setX(e.target.value * 1);
    }
    function setYvalue(e) {
        setY(e.target.value * 1);
    }

    useEffect(() => {
        if (x == '' || y == '') {
            setResult('');
        }
        else {
            if (props.type === '1') {
                let a = y / x * 100;
                setResult(a.toFixed(2));
            }

            else if (props.type === '2') {
                let b = y * x / 100; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!번역했을때 달라지면 x y 위치 바꿔주기 
                setResult(b.toFixed(2));
            }

            else if (props.type === '3') {
                let c = x * (1 + y / 100);
                setResult(c.toFixed(2));
            }
            else if (props.type === '4') {
                let d = x * (1 - y / 100);

                setResult(d.toFixed(2));
            }
            else if (props.type === '5') {
                let end;
                let e = y - x;
                let minus = 1;
                if (e < 0) {
                    e = e * -1;
                    minus = -1;
                }
                end = e / x * 100;
                end = end * minus;
                setResult(end.toFixed(2));
            }
        }

    })
    return (
        <div className="defaultDiv" style={{ width: globalVar.myWindowWidth, height: globalVar.myWindowHeight }}>
            <div>
                <div id="defaultDivInSentence" style={{ width: globalVar.myWindowWidth-20}}>
                    <p>
                        {props.partA}
                        <input className="defaultInput" onChange={setXvalue}></input>
                        {props.partB}
                        <input className="defaultInput" onChange={setYvalue}></input>
                        {props.partC}
                    </p>
                    <div align="right" id="defaultDivInResult">
                        {props.partD}
                        <input className="defaultInput" id="inputEndResult"value={result}></input>
                        {props.partE}
                        
                    </div>
                </div>
                <div className="divEx">
                    {props.subject}
                </div>
                
            </div>
        </div>
    );
}

function Page0() {


        
    return (
        <div className="mainBodyin" style={{ width: globalVar.realWindowWidth, height: globalVar.realWindowHeight }}>
            <div style={{ width: globalVar.realWindowWidth, height: 10 }}></div>
            <DefaultFrame type='1' subject="ex) x = 300, y = 30 --> 10%" partA="What percentage is " partB=" to " partC=" ? "partD="=" partE="%"></DefaultFrame>
            <DefaultFrame type='2' subject="ex) x = 200%, y = 100 --> 200" partA="What is " partB=" percent of " partC=" ? "partD="=" partE=""></DefaultFrame>
            <DefaultFrame type='5' subject="ex) x = 1000, y = 1100 --> 10%" partA="What percentage did " partB=" increase when it became " partC=" ? "partD="="partE="%"></DefaultFrame>
            <DefaultFrame type='3' subject="ex) x = 100, y = 50% --> 150" partA="What if " partB=" increases by " partC=" %? "partD="=" partE=""></DefaultFrame>
            <DefaultFrame type='4' subject="ex) x = 100, y = 50% --> 50" partA="What if " partB=" decreases by " partC=" %? " partD="=" partE=""></DefaultFrame>
            <div id="divEmpty" style={{ width: globalVar.adWindowWidth, height: globalVar.adWindowHeight }}>
                
            </div>
        </div>

    );
}

export default Page0;
