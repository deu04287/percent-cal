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
    createTable();
}




