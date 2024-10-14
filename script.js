const numerosAleatorios = []

function ex1(){
    if(numerosAleatorios.length<10){
        alert('Adicione mais numeros') 
        return 
    }
    
    numSoma = 0
    
    for(let i=0;i<numerosAleatorios.length;i++){
        numSoma += numerosAleatorios[i]
    }
    alert(`A soma dos numeros na array é ${numSoma}`)
}

function ex2(){
    const numerosAleatoriosPares = numerosAleatorios.filter(num => num % 2 === 0);
    
    if(numerosAleatoriosPares.length<10){
        alert('Adicione mais numeros') 
        return 
    }
    
    alert(`Os números pares adicionados são:${numerosAleatoriosPares.join(' - ')}`)
}

function numSubmit(){
    const num = parseFloat(document.getElementById('num').value)
    
    numerosAleatorios.push(num)

    if(numerosAleatorios.length===10){
        alert('Sua array tem 10 elementos e está pronto para funcionar')
        ex1()
    }

    if(numerosAleatorios.filter(num => num % 2 === 0).length === 10){
        alert('Sua array de números pares tem 10 elementos e está pronto para funcionar')
        ex2()
    }
}