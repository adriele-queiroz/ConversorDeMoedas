function converte() {
    
    const nome = document.getElementById("nome").value;
  
    const dolar = document.getElementById("dolar");
    const euro = document.getElementById("euro");
    const peso = document.getElementById("peso");
    const real = document.getElementById("real");
  
    var resDolar = document.getElementById("resDolar");
    var resEuro = document.getElementById("resEuro");
    var resPeso = document.getElementById("resPeso");
  
    var valorDolar = real.value / dolar.value;
    resDolar.value = valorDolar.toFixed(2);
  
    var valorEuro = real.value / euro.value;
    resEuro.value = valorEuro.toFixed(2);
  
    var valorPeso = real.value / peso.value;
    resPeso.value = valorPeso.toFixed(2);
  
    
    alert(`Olá, ${nome}! Conversão concluída:\nDólar: ${valorDolar.toFixed(2)}\nEuro: ${valorEuro.toFixed(2)}\nPeso: ${valorPeso.toFixed(2)}`);
  }
    
  document.getElementById("btnConverter").addEventListener("click", converte);
  