let btn=document.getElementById("btn")
btn.addEventListener("click", function(){
    const x = parseFloat(document.getElementById("x").value)
    const y = parseFloat(document.getElementById("y").value)
    console.log(x)
    console.log(y)
    if((x>=0 && x<=50) && (y>=0 && y<=50)){
            document.getElementById("vysledek").innerHTML="Bod leží uvnitř čtverce";   
            vysledek.style.color = "green";    
}
        else{
            document.getElementById("vysledek").innerHTML="Bod neleží uvnitř čtverce";
            vysledek.style.color = "red";   
        }  
 if((x===0 || x ===50) && (y===0 || y===50)){
            document.getElementById("vysledek").innerHTML="Bod leží na hraně čtverce";
            vysledek.style.color = "orange";    
        }  
})
