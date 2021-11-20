var calculo = ""
var soma = ""
document.getElementById("campo_num").value = calculo
var n1 = 0
var n2 = 0


function botao1(){
    calculo += 1
    document.getElementById("campo_num").value = calculo
}

function botao2(){
    calculo += 2
    document.getElementById("campo_num").value = calculo
}

function botao3(){
    calculo += `3`
    document.getElementById("campo_num").value = calculo
}

function botao4(){
    calculo += `4`
    document.getElementById("resultado").value = calculo
}

function botao5(){
    calculo += `5`
    document.getElementById("resultado").value = calculo
}

function botao6(){
    calculo += `6`
    document.getElementById("resultado").value = calculo
}

function botao7(){
    calculo += `7`
    document.getElementById("resultado").value = calculo
}

function botao8(){
    calculo += `8`
    document.getElementById("resultado").value = calculo
}

function botao9(){
    calculo+= `9`
    document.getElementById("resultado").value = calculo
}

function botao0(){
    calculo += `0`
    document.getElementById("resultado").value = calculo
}

function botao_mais(){
    
}

function botao_menos(){

}

function botao_vezes(){

}

function botao_divide(){
    
}

function botao_ac(){
    soma = ""
    calculo = ""
    previa = ""
    //window.alert(`Agora a variável calculo vale ${calculo} e a variável previa vale ${previa}. `)
    document.getElementById("campo_num").value = ""
    document.getElementById("previa").value = ""
}

function calcula(){

}