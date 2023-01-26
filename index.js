window.onload = function () {
var buttonFire = document.getElementById('buttonFire');
var buttonWater = document.getElementById('buttonWater');
var buttonGrass = document.getElementById('buttonGrass');
var result= document.getElementById('result');
var imgfire= document.getElementById('elementsImgFire');
var imgwater= document.getElementById('elementsImgWater');
var imggrass= document.getElementById('elementsImgGrass');
var playerchoise= document.getElementById('choiseP');
var computerchoise= document.getElementById('choiseC');
var result= document.getElementById('result');
var buttonrestart = document.getElementById('restart')

computerChoise
var computer = [imgfire, imggrass, imgwater]
var random = Math.floor(Math.random()*3);

console.log(computer[random])

function choise(){
    buttonFire.addEventListener('click',()=>{ 
  playerchoise.appendChild(imgfire.cloneNode())
  }) 

    buttonWater.addEventListener('click',()=>{ 
        playerchoise.appendChild(imgwater.cloneNode())
        })
          
          buttonGrass.addEventListener('click',()=>{ 
            playerchoise.appendChild(imggrass.cloneNode())
            })
}

function winner(){
  buttonFire.addEventListener('click',()=>{ 
if(random===0){
  result.innerHTML='DRAW'
} else if (random===1){
  result.innerHTML='YOU WIN'
} else if (random===2){
  result.innerHTML='YOU LOSE'
}
}) 
buttonWater.addEventListener('click',()=>{ 
  if(random===2){
    result.innerHTML='DRAW'
  } else if (random===0){
    result.innerHTML='YOU WIN'
  } else if (random===1){
    result.innerHTML='YOU LOSE'
  }
  }) 
  buttonGrass.addEventListener('click',()=>{ 
    if(random===1){
      result.innerHTML='DRAW'
    } else if (random===2){
      result.innerHTML='YOU WIN'
    } else if (random===0){
      result.innerHTML='YOU LOSE'
    }
    }) 
}

function computerChoise(){
    buttonFire.addEventListener('click',()=>{
    computerchoise.appendChild(computer[random].cloneNode());
    })
    buttonWater.addEventListener('click',()=>{
      computerchoise.appendChild(computer[random].cloneNode());
      })
      buttonGrass.addEventListener('click',()=>{
        computerchoise.appendChild(computer[random].cloneNode());
        })

}
function disabled(){
  buttonFire.addEventListener('click',()=>{ 
buttonWater.disabled= true;
buttonFire.disabled= true;
buttonGrass.disabled= true;
}) 

  buttonWater.addEventListener('click',()=>{ 
    buttonWater.disabled= true;
    buttonFire.disabled= true;
    buttonGrass.disabled= true;
      })
        
        buttonGrass.addEventListener('click',()=>{ 
          buttonWater.disabled= true;
          buttonFire.disabled= true;
          buttonGrass.disabled= true;
          })
}


function restar(){
  buttonrestart.addEventListener('click',()=>{
    location.reload()
  })
}
function visible(){
  buttonFire.addEventListener('click',()=>{ 
    buttonrestart.style.display='block'
    }) 
    
      buttonWater.addEventListener('click',()=>{ 
        buttonrestart.style.display='block'
          })
            
            buttonGrass.addEventListener('click',()=>{ 
              buttonrestart.style.display='block'
              })
}


computerChoise()
choise()
disabled()
winner()
restar()
visible()
}