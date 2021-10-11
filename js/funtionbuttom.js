document.addEventListener("click", function(event) {
    let boton = event.target.dataset.boton;
  
    console.log(boton + " (paso por IF y te cuento) ")
  
    if(boton ){
      let toPlay = document.getElementById(boton);
      console.log("bien hecho, está sonando: "+ boton);
      //console.log(toPLay);
      toPlay.play();
      toPlay.currentTime = 0;
    }
      
    if(boton===undefined ){
      console.log("Sigue probandon, no le has dado donde toca");
    }
    
  })