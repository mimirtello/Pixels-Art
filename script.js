
 let pixelBoard= document.querySelector("#pixel-board")
 let pixels = document.getElementsByClassName("pixel")

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
console.log(pixels)

for(let index3=0;index3<pixels.length;index3+=1){
pixels[index3].addEventListener('click', function(event){
  
  let corSelected=document.getElementsByClassName('selected')[0]

  let corSelecionada=window.getComputedStyle(corSelected).backgroundColor
  pixels[index3].style.backgroundColor= corSelecionada
  
  })
}
    
  





  
 
  




