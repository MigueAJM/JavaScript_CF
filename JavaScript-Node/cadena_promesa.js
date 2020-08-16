function calcular(){
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, 400, 5);
  })
}

function segundoCalculo(numero){ //el numero que recibe sera el valor de la primera promesa (5)
  console.log(numero);
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, 200, 'segunda promesa');
  })
}

calcular().then(segundoCalculo).then(console.log);
