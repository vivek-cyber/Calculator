let outputContainer=document.querySelector(".output")

function func(event)
{
    let target = event.target;
    let currentValue = target.innerText ; 
    let enteredValue = outputContainer.value ;

    const operators = ["+", "-", "*", "/"] ;
    let lastKey = enteredValue[enteredValue.length - 1];

    if(operators.includes(lastKey) && operators.includes(currentValue)){
         let newExp = enteredValue.slice(0, enteredValue.length - 1) + currentValue;
        outputContainer.value = newExp;
    }
    else if(currentValue === "=" && enteredValue === ""){
        alert("Enter some data")
        return ;
    }
    else if(currentValue === "="){
        const result = eval(enteredValue);
        outputContainer.value = result ;
    }
    else{
        outputContainer.value = outputContainer.value + currentValue ;
    }
}

function func1(item)
{
console.log(item.innerText)

item.addEventListener("click",func)
}

const btn=document.getElementById("btn")
btn.addEventListener("click",clickedfun)

function clickedfun()
{
    outputContainer.value=""
    console.log("clicked here")
}
 

const btnlist=document.querySelectorAll(".gridcon>button,.bottomrow>button")


btnlist.forEach(func1)
console.log(btnlist)

let evalu=document.getElementById("evalu")
evalu.onclick=function()
{
    let x=eval(outputContainer.value)
    outputContainer.value=x
}


