
 
 
 let pixelBoard= document.querySelector("#pixel-board")
 let pixels = document.getElementsByClassName("pixel")
 let botao=document.getElementById("clear-board")

//Cria o Board

  for(let index=0; index<5;index+=1){
      let linha= document.createElement('div')
      pixelBoard.appendChild(linha)
      
    for(let index2=0; index2<5;index2+=1){
      let pixel=document.createElement('div')
      pixel.className="pixel" 
      linha.appendChild(pixel)
    }
    
  }
  

// consultei o stackoverflow para saber do classList.add e remove
//Link: https://pt.stackoverflow.com/questions/146423/como-adicionar-e-remover-classes-com-javascript

//Seleciona a cor

 let cor=document.querySelectorAll('.color')
 

 for(index=0;index<cor.length;index+=1){

 cor[index].addEventListener('click', function(event){
  
  for(index2=0; index2<cor.length;index2+=1){
    cor[index2].classList.remove('selected')

  }
  event.target.classList.add('selected') 
  })
}
// Consultei documentação https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
//para usar o getComputedStyle

colorido()
limpa()
//Colore o Pixel

function colorido(){
for(let index3=0;index3<pixels.length;index3+=1){
pixels[index3].addEventListener('click', colorePixel)
function colorePixel(event){
  
  let corSelected=document.getElementsByClassName('selected')[0]

  let corSelecionada=window.getComputedStyle(corSelected).backgroundColor
  pixels[index3].style.backgroundColor= corSelecionada
  
  }
 }
}

//Limpa o quadro

function limpa(){
  for(let index3=0;index3<pixels.length;index3+=1){
    botao.addEventListener('click', function(event){
      for(let index4=0;index4<pixels.length;index4+=1){
        pixels[index3].style.backgroundColor='white'
      }
      
    })
  }
}

//BONUS

let botaoVqv =document.getElementById('generate-board')
let inputVqv= document.getElementById('board-size')

botaoVqv.addEventListener('click', geraQuadro)

 function geraQuadro(){
   
  

  if(inputVqv.value==='' || inputVqv===0){
   window.alert('Board inválido!')
   }
    else {

  limites()

   for(let index4=0; index4<pixels.length;index4+=1){
   pixelBoard.removeChild(pixelBoard.lastChild)
  }
  

  for(let index5=0; index5<inputVqv.value;index5+=1){
  let linha2= document.createElement('div')
  pixelBoard.appendChild(linha2)

  

  for(let index2=0; index2<inputVqv.value;index2+=1){
  let pixel2=document.createElement('div')
  pixel2.className="pixel" 
  linha2.appendChild(pixel2)
  }
 }  
 colorido()
 limpa()
 }
} 

function limites(){
  if(inputVqv!==0 && inputVqv!=='' && inputVqv.value<5){
    inputVqv.value=5
  }else if(inputVqv.value>50){
    inputVqv.value=50
  }else{
    inputVqv.value=inputVqv.value
  }
}

function random(){
let aleatorio=Math.round(Math.random() * 255+1)
return aleatorio
  }
  
function coresAleatorias(){

  let cor=document.getElementsByClassName("color")

  console.log(cor)

  for(let index6=0; index6 < cor.length; index6+=1){
  cor[1].style.backgroundColor= `rgb(${random()}, ${random()}, ${random()})`
  cor[2].style.backgroundColor= `rgb(${random()}, ${random()}, ${random()})`
  cor[3].style.backgroundColor= `rgb(${random()}, ${random()}, ${random()})`
  console.log(cor)
  }
}


window.addEventListener('load', function () {
  coresAleatorias()
})

  





  
 
  




