let arr=document.querySelectorAll("#key>div")
for(let i=0;i<arr.length;i++){
    arr[i].addEventListener("click",clickMe)
}
let bag=""
function clickMe(event){
    let screen=document.getElementById('display')
    let x=event.target.innerText
    if(x=="C"){
        bag="";
        screen.innerText=bag
    }else if(x=="="){
        screen.innerText=eval(bag)||"="
    }

    else{
        bag=bag+x
        screen.innerText=bag
    }


   
    
}