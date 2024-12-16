function calcularPeso() {
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseFloat(document.getElementById("altura").value)/100

    if (peso && altura) {
        const masa = (peso / (altura * altura)).toFixed(2)
        document.getElementById("resultado").textContent = `Tu masa corporal es: ${masa}`
    }else {
        document.getElementById("resultado").style.color = 'red'
        document.getElementById("resultado").textContent = `Error, introducir valores validos`
    }
}