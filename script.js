function somar(){
    var n1 = document.getElementById("campo1").value
    var n2 = document.getElementById("campo2").value
    var soma = parseInt(n1) + parseInt(n2)
    document.getElementById("campo_soma").value = soma
}