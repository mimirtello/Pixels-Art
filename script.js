
 let pixelBoard= document.querySelector("#pixel-board")
 

  for(let index=0; index<5;index+=1){
      let linha= document.createElement('div')
      pixelBoard.appendChild(linha)
    for(let index2=0; index2<5;index2+=1){
      pixels=document.createElement('div')
      pixels.className="pixel" 
      linha.appendChild(pixels)
    }
    
  }

// consultei o stackoverflow para saber do classList.toggle 
//Link: https://pt.stackoverflow.com/questions/146423/como-adicionar-e-remover-classes-com-javascript

 let cor=document.querySelectorAll('.color')
 let corSelected=document.querySelector('.selected')

 for(index=0;index<cor.length;index+=1){

 cor[index].addEventListener('click', function(event){
  
  for(index2=0; index2<cor.length;index2+=1){
    cor[index2].classList.remove('selected')

  }
  event.target.classList.add('selected') 
  })
}




  
 
  




