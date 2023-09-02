var card = document.getElementById("cards")
var total = document.getElementById("total")
var message = document.getElementById("message")
var ctotal=document.getElementById("ctotal")
var pcard=[]
var sum1=1
var sum=0
var win=false
var game=true
var sgame=false
var player=prompt("Enter player Name")
var amount=prompt("Enter amount")


function getrandom(){
var random=Math.floor(Math.random()*13+1)
if(random>10){
    return 10
}
else if(random==1){
return 11
}
else{
    return random
}
}
function start(){
    sgame=true
    var num1=getrandom()
    var num2=getrandom()
    var num3=getrandom()
    var num4=getrandom()
    sum=num1+num2
    sum1 = num3+num4
    // card.innerHTML="card: "
    pcard=[num1,num2]
   render()
}

function render(){
    card.innerHTML="cards: "
    for(var i=0;i<pcard.length;i++)
    {
        card.innerHTML += ` ${pcard[i]} `
    }
    total.innerHTML =`total : ${sum}`
    ctotal.innerHTML=`Computer total:${sum1}`

    if(sum<21){
        message.innerHTML="Do you want another card"
    }
    else if(sum==21 && sum1<21){
        amount *=2
        message.innerHTML=` Congtars ${player} ,you won Rs.${amount}`
        win=true
    }
    else if(sum==sum1){
        message.innerHTML="It is tie"
        }
        else{
            message.innerHTML=`Sorry ${player}, your Rs.${amount} is gaya`
            game=false
        }
    }
   function newcard(){
    if(win==false && game==true && sgame==true){
        var num=getrandom()
        pcard.push(num)
        sum +=num

        while(sum1<19){
            var cnum=getrandom()
            sum1 +=cnum
        }
        render()
        if(sum>21){
        winner()
    }
    }
   }
   function winner(){
    if(sgame==true)
    {
    while(sum1<17 && sum1<sum){
        var cnum=getrandom()
        sum1 +=cnum
    }
    ctotal.innerHTML=`computer total : ${sum1}`
    if(sum>21 || (sum1<21 && sum1>sum)){
        message.innerHTML=`Sorry ${player}, your Rs.${amount} is gaya`
    }
    else if(sum==sum1){
    message.innerHTML="It is tie"
    }
    else{
        amount *=2
        message.innerHTML=` Congtars ${player} ,you won Rs.${amount}`
    }
game=false
   }
}
