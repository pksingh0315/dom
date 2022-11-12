
let arr=JSON.parse(localStorage.getItem("studentData"))||[]

//for display after refresh
display(arr)

//OR
// window.addEventListener("load",function(){
//     display(arr)
// })



document.querySelector("form").addEventListener("submit",myForm);
function myForm(event){
    event.preventDefault();
     
    //catch all input
    let question=document.querySelector("#title").value;
    let questionLink=document.querySelector("#link").value;
    let level=document.querySelector("#difficulty").value

    let obj={
       questionTitle:question,
        link:questionLink,
        difficultyLevel:level
    }
    arr.push(obj)

    display()

    localStorage.setItem("studentData",JSON.stringify(arr))

  


    
}

function display(){
    document.querySelector("tbody").innerHTML=""
    arr.forEach((el)=>{

     

        let tr=document.createElement("tr");

        let td1=document.createElement("td")
        td1.innerText=el.questionTitle

        let td2=document.createElement("td")
        td2.innerText=el.link

        let td3=document.createElement("td")
        td3.innerText=el.difficultyLevel

        let td4=document.createElement("td")
        if(el.difficultyLevel=="Easy"){
            td4.innerText="No"
        }else{
            td4.innerText="Yes"
        }
        tr.append(td1,td2,td3,td4)
        document.querySelector("tbody").append(tr)
    })
}