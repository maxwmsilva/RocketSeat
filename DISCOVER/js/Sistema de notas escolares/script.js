

//let score = 101

function getScore(score){
    
let scoreA = score >=90 && score <= 100
let scoreB = score >=80 && score <= 89
let scoreC = score >=70 && score <= 79
let scoreD = score >=60 && score <= 69
let scoreF = score >=60 && score >= 0


let scoreFinal;


if (scoreA ){
    scoreFinal ="A"
}else if(scoreB) {
    scoreFInal = "B"

}else if(scoreC) {
    scoreFinal="C"

}else if(scoreD) {
    scoreFinal="D"

}else if (scoreF){
    scoreFinal="F"
}else{
    scoreFinal ="Nota invalida"
}

//console.log(scoreFinal)
return (scoreFinal)
    
}

console.log (getScore(101))
console.log (getScore(0))
console.log (getScore(80))
console.log (getScore(45))
console.log (getScore(61))
console.log (getScore(23))
console.log (getScore(75))