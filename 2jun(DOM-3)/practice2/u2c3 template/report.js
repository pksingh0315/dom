// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",formSubmit);


function formSubmit(event){
    event.preventDefault()

    let image=document.querySelector("#image").value
    let name=document.querySelector("#name").value
    let batch=document.querySelector("#batch").value
    let dsa=document.querySelector("#dsa").value
    let skillathon=document.querySelector("#cs").value
    let coding=document.querySelector("#coding").value

    //create tr tag
    let tr=document.createElement('tr') 

    let td1=document.createElement('td')
    let pic=document.createElement("img")
    pic.setAttribute("src",image)
    td1.append(pic)



    let td2=document.createElement('td')
    td2.innerText=name

    let td3=document.createElement('td')
    td3.innerText=batch

    let td4=document.createElement('td')
    td4.innerText=dsa

    let td5=document.createElement('td')
    td5.innerText=skillathon

    let td6=document.createElement('td')
    td6.innerText=coding

    let td7=document.createElement('td')
    let obtain_score=(+dsa)+(+skillathon)+(+coding)
    console.log(typeof obtain_score)
    percentage=(obtain_score/30)*100
    td7.innerText=percentage.toFixed(3)

    let td8=document.createElement('td')
    if(percentage>50){
        td8.innerText="Regular"
        td8.style.backgroundColor="green"
    }else{
        td8.innerText="Async"
        td8.style.backgroundColor="Red"
    }

    let td9=document.createElement('td')
    td9.innerText="Delete"
    td9.style.backgroundColor="red"
    td9.style.cursor="pointer";
    //for deleting
    td9.addEventListener("click",delet)
    let tbody=document.querySelector('tbody')
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)

    tbody.append(tr)
  function delet(event){
    event.target.parentNode.remove();
  }
}
