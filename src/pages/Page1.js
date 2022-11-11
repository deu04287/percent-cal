import React, { useEffect, useState } from "react";
import globalVar from './globalVar';
import './Page1.css';

function resultTable2(){
    function createDiv(name){
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.id = name;
    }
    
    function createTable(){
        let a = document.getElementById('initial').value;
        a =a.replace(/[,.]/g, '');
        a *= 1; //1,000,000 -> 1000000 // str -> int
        let 총금액 = a;
    
        let b = document.getElementById('rate').value;
        b =b.replace(/[%]/g, '');
        b *= 1;
        let 수익률 = b;
    
        let 누적수익 = (총금액/100)*수익률;
        let 누적총금액= 총금액+((총금액/100)*수익률);
        let 누적수익률 = 수익률;
    
    
        let tbl = document.createElement('table');
        let forTime = document.getElementById('time').value;
        
        let thl = document.createElement('th');
        thl.appendChild(document.createTextNode(`기간`));
        tbl.appendChild(thl);
        let thl2 = document.createElement('th');
        thl2.appendChild(document.createTextNode(`수익`));
        tbl.appendChild(thl2);
        let thl3 = document.createElement('th');
        thl3.appendChild(document.createTextNode(`총 금액`));
        tbl.appendChild(thl3);
        let thl4 = document.createElement('th');
        thl4.appendChild(document.createTextNode(`수익률`));
        tbl.appendChild(thl4);
    
    
        for (let i = 0; i <= forTime; i++) {
            const tr = tbl.insertRow();
            if(i==0)
            {
    
            }
            else{
                for (let j = 0; j < 4; j++) {
                    if(j==0){
                        const td = tr.insertCell();
                        td.appendChild(document.createTextNode(`${i}일`));
        
                    }
                    else if(j==1){
                        const td = tr.insertCell();
                        td.appendChild(document.createTextNode(`+${누적수익.toFixed(0)}원`));
                        누적수익 = 누적수익+ ((누적수익/100)*수익률);
                    }
                    else if(j==2){
                        const td = tr.insertCell();
                        td.appendChild(document.createTextNode(`${누적총금액.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`));
                        누적총금액 = 누적총금액+누적수익;
    
                    }
                    else{
                        const td = tr.insertCell();
                        td.appendChild(document.createTextNode(`${누적수익률.toFixed(2)}%`));
                        누적수익률 = 누적수익률 + (수익률 + ((누적수익률/100)*수익률));
                    }
    
                }
            }
        }
        document.getElementById('heee').appendChild(tbl);
        
    }
    function deleteDiv(){
        let a = document.getElementById('heee');
        a.remove();
        // document.getElementById('test').value = document.getElementById('rate').value;
    }
    
    function hi(){
        if(document.getElementById('heee'))
        {
            deleteDiv();
        }
    
        createDiv("heee");
        // createTable();
    }

    return (
        <div>

        </div>
    );
}
function Page1() {
    const [initMoney, setInitMoney] = useState('10,000,000');//초기금액
    const [tmpInitMoney, setTmpInitMoney] = useState('');//실제 계산할 초기금액 // ,제거된 상태
    const [times, setTimes] = useState('5'); //복리 횟수
    const [rate, setRate] = useState('1%'); // 수익률

    function initialFocus(){ //초기금액/클릭/1000000으로 뱌꿔줌
        let val = initMoney;
        val = val.toString();
        val = val.replace(/[,.]/g, '');
        val *= 1;
        setInitMoney(val);
    }
   
    function initialFocusout(){//초기금액/빠져나오면/1,000,000으로 바꿔줌
        setTmpInitMoney(initMoney);
        let tmp = initMoney;
        var val = Number(tmp).toLocaleString();
        setInitMoney(val);
    }

//////////////////////////////
    function ResultTable(props){
    //     const data2 = [
    //         { name: "Anom", age: 19, gender: "Male" },
    //         { name: "Megha", age: 19, gender: "Female" },
    //         { name: "Subham", age: 25, gender: "Male" },
    //         { name: "Subham2", age: 252, gender: "Male2" }
    //     ]
    //     const [tmpData, setTmpData] = useState(props.data1); // 수익률


    //     const a = (e) => {
    //         e.preventDefault();

    //         // return (
    //         //     { test2 }
    //         // );
    

    //     }

    //     return(
    //         <div>
    //             {            
    //             tmpData.map((val, key) => {
    //             return (
    //                 <tr key={key}>
    //                     <td>{val.name}</td>
    //                     <td>{val.age}</td>
    //                     <td>{val.gender}</td>
    //                 </tr>
    //             )
    //         })}
    //         </div>
    //     );
    }
    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male" },
    ]
///////////////////////////////
        return (
        <div className="mainBodyin" style={{ width: globalVar.realWindowWidth, height: globalVar.realWindowHeight }}>
            <div>
                <div id="root2">
                    <form>
                        <div style={{display:"none"}}>
                        <input type="number" id="number" value={tmpInitMoney}/>
                        </div>
                        <div>
                            <label class="form-label" for="initial">초기 금액 </label>
                            <input type="text" data-type="num" value={initMoney} inputmode="decimal" id="initial"
                                class="number-separate-thousand-unit" onBlur={initialFocusout}
                                onFocus={initialFocus} onChange={e => setInitMoney(e.target.value)}
                                />
                        </div>
                        <div>
                            <label class="form-label" for="time">복리 횟수 (기간)</label>
                            <input type="text" inputmode="numeric" id="time" class="number-separate-thousand-unit"
                                placeholder="0" maxlength="3" value={times} onChange={e => setTimes(e.target.value)}/>
                        </div>
                        <div>
                            <label class="form-label" for="rate">수익률 (%)</label>
                            <input type="text" data-type="percent" inputmode="decimal" id="rate"
                                class="number-separate-thousand-unit" placeholder="%" value={rate} onChange={e => setRate(e.target.value)}/>
                        </div>
                        <div>
                            <button type="button" data-type="submit"  class="cal">계산하기</button>
                        </div>
                    </form>
                </div>
                <ResultTable data1={data}></ResultTable>

                <div id="divEmpty" style={{ width: globalVar.adWindowWidth, height: globalVar.adWindowHeight }}>
                    12345123123222222222
                </div>
            </div>
            
        </div>
    );
}

export default Page1;
