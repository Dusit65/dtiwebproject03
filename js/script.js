/*External js*/
//alert("Hello....")
//console.log("bbb");console.log("llll")
//console.log(30+30);

//console.log(document.getElementById("num1").value)
//n1 = (document.getElementById("num1").value)
//n2 = (document.getElementById("num2").value)
//alert(parseInt(n1) + parseInt(n2))
function ShowDti(){
    alert("Welcome to DTI...")
}

let btnSum = document.getElementById("btn-num");
let showSum = document.getElementById("show-sum");
let btnCancel = document.getElementById("btn-cancel")

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")

btnSum.addEventListener( "click" , function () {
    //alert("Congrats")    
    let sum = parseFloat(num1.value) + parseFloat(num2.value)
    showSum.innerHTML =  sum 
} )

btnCancel.addEventListener( "click" , function () {
    num1.value =""
    num2.value = ""
    showSum.innerHTML = "?????"
    document.body.style.backgroundColor = "rgb(255,255,255)"
})

let btnRed = document.getElementById("btn-red")
let btnGreen = document.getElementById("btn-green")
let btnYellow = document.getElementById("btn-yellow")

btnRed.addEventListener( "click" , function () {
    //alert("Congrats")   
    document.body.style.backgroundColor = "red"
} )

btnGreen.addEventListener( "click" , function () {
    document.body.style.background = " rgb(0,255,0) " 
    
} )

btnYellow.addEventListener( "click" , function () {
    document.body.style.backgroundColor = "yellow"   
    
} )