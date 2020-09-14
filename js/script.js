let order = []
let clickedOrder = []
let score=0

/* color scheme.
    0 = green
    1 = red
    2 = yellow
    3 = blue
*/

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

const sound_0=document.getElementById("sound-0");
const sound_1=document.getElementById("sound-1");
const sound_2=document.getElementById("sound-2");
const sound_3=document.getElementById("sound-3");


let shuffleOrder = () =>{
    let colorOrder = Math.floor(Math.random()*4)
    order[order.length] = colorOrder
    clickedOrder=[]
    

    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i)+1)
    }
}

//lights the next color
let lightColor = (element, number)=>{

    number = number * 500


    setTimeout(() => {
       playSound(element.id)
       element.classList.add('selected') 
        
    }, number - 250)

    setTimeout(() => {
        element.classList.remove('selected') 
     })
 
}
let checkOrder = () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver()
            break
        }
    }

    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`)
        nextLevel()
    }
}

let click = (color) =>{
    playSound(color)
    
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250);

}

let createColorElement = (color) =>{
    
    if(color==0){
        return green
    } else if(color == 1){
        return red
    } else if(color == 2){
        return yellow
    } else if(color==3){
        return blue
    }
    
}

let nextLevel = () =>{
    score++
    shuffleOrder()
}

let gameOver = () =>{
    alert(`Pontuação: ${score}!\n Você perdeu o jogo!\n Click em OK para reiniciar!`)
    order= []
    clickedOrder=[]
    playGame()
}

let playGame =() =>{
    alert("Bem-vindo ao Genius! Iniciando novo jogo!")
    score=0
    nextLevel()
}

/* color scheme.
    0 = green
    1 = red
    2 = yellow
    3 = blue
*/

let playSound = (color) =>{
    
    setTimeout(() => {

        switch (color){
            case 0:
                sound_0.play()
                break;
            case 1:
                sound_1.play()
                break;
            case 2:
                sound_2.play() 
                break;               
            case 3:
                sound_3.play() 
                break; 

            case 'green':
                sound_0.play()
            case 'red':
                sound_1.play()
            case 'yellow':
                sound_2.play()
            case 'blue':
                sound_3.play()                        
            default:
              //  sound_0.play()            
        }  
        
    }, 200);

  
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()