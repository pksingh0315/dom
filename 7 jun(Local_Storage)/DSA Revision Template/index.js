document.querySelector("form").addEventListener("submit",myDSA);
let queArr=JSON.parse(localStorage.getItem("queData"))||[];
// let queArr=[];
displayTable(queArr);
    //   OR
    //   window.addEventListener("load",function(){
    //       displayTable(queArr)
    //   })
function myDSA(event){
    event.preventDefault();
    let queObj={
        queTitle:document.querySelector("#title").value,
        queLink:document.querySelector("#link").value,
        queDifficulty:document.querySelector("#difficulty").value,
    }

    queArr.push(queObj);
    displayTable(queArr);
    localStorage.setItem("queData",JSON.stringify(queArr));
}
function displayTable(queArr){
    document.querySelector("tbody").innerHTML=""
    queArr.forEach(function(elm){
        let tr=document.createElement('tr')
       
        let td1=document.createElement('td')
        td1.innerText=elm.queTitle
        let td2=document.createElement('td')
        td2.innerText=elm.queLink
        let td3=document.createElement('td')
        td3.innerText=elm.queDifficulty
        let td4=document.createElement('td')
        if(elm.queDifficulty=="Easy"){
            td4.innerText="NO"
        }else{
            td4.innerText="Yes"
        }
        tr.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(tr);
    })
}
