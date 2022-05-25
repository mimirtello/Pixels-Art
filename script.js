
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
  
 
  




