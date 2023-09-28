
let nome = 'Juliano';
let quantidadeXp = 100000;


if(quantidadeXp <= 1000){
    console.log("O Herói de nome " + nome + " está no nível Ferro com " + quantidadeXp +" XP.")

} else if(quantidadeXp >= 1001 && quantidadeXp <= 2000){
    console.log("O Herói de nome " + nome + " está no nível Bronze com " + quantidadeXp +" XP.")

} else if(quantidadeXp >= 2001 && quantidadeXp <= 5000){
    console.log("O Herói de nome " + nome + " está no nível Prata com " + quantidadeXp +" XP.")

} else if(quantidadeXp >= 6001 && quantidadeXp <= 7000){
    console.log("O Herói de nome " + nome + " está no nível Ouro com " + quantidadeXp +" XP.")

}else if(quantidadeXp >= 7001 && quantidadeXp <= 8000){
    console.log("O Herói de nome " + nome + " está no nível Platina com " + quantidadeXp +" XP.")

}else if(quantidadeXp >= 8001 && quantidadeXp <= 9000){
    console.log("O Herói de nome " + nome + " está no nível Ascendente com " + quantidadeXp +" XP.")

}else if(quantidadeXp >= 9001 && quantidadeXp <= 10000){
    console.log("O Herói de nome " + nome + " está no nível Imortal com " + quantidadeXp +" XP.")

}else if(quantidadeXp >= 10001){
    console.log("O Herói de nome " + nome + " está no nível Radiante com " + quantidadeXp +" XP.")
} else{
    console.log("Nível de XP não encontrado!")
}