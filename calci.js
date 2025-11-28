let Numbers=(number)=>{
    let input=document.querySelector('input')
    input.value += number
}

let cleardata=()=>{
    let input=document.querySelector('input')

    input.value=""
}

let calci=()=>{
    let data=document.querySelector('input').value
    let output= eval(data)
    document.querySelector("input").value = output
}

let back=()=>{
    let input=document.querySelector('input')
    input.value=input.value.slice(0,-1)
}