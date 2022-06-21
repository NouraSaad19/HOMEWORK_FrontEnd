
function Rolling_Dice(){
    var random=Math.floor(1 + Math.random()*6) //from 0 to 0.99999 
    var random1=Math.floor(1 + Math.random()*6) //from 0 to 0.99999 
    var dice= document.getElementById("die")
    var dice1= document.getElementById("die1")    
    dice.setAttribute("src" , random+".png")
    dice1.setAttribute("src" , random1+".png")

}

