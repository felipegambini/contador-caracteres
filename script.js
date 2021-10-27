function calcular() {
    var chars = document.getElementById('chars')
    var words = document.getElementById('words')
    var lines = document.getElementById('lines')
    var text = String(document.getElementById('text').value)
    var qtdP = text.trim().split(' ')
    var qtdLines = text.split('\n')
    chars.innerText = text.length
    
    var blank = qtdP.indexOf('')

    while (blank >= 0) {
        qtdP.splice(blank, 1)
        blank = qtdP.indexOf('')
    }

    if (text == '') {
        words.innerText = 0
        lines.innerText = 0
    } else {
        words.innerText = qtdP.length
        lines.innerText = qtdLines.length
    }
    
}