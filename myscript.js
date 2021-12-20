/*L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
const scatola = document.getElementById('container');*/

let button = document.getElementById("button");
button.addEventListener("click", function(){
   
});

document.getElementById('button').addEventListener('click',() => {
    let levelDiff = document.getElementById("select-options").value;
    const container = document.getElementById('container');
    
        container.innerHTML = " ";
        if(levelDiff=="1"){
            for(let i=1; i<=100; i++){//numeri da 1 a 100
                console.log(i)                
                container.innerHTML += '<div class="box d-flex justify-content-center align-items-center">' + i +'</div>';  
            }     
        }else if (levelDiff=="2"){
            for(let b=1; b<=81; b++){//numeri da 1 a 81
                console.log(b)                
                container.innerHTML += '<div class="bo d-flex justify-content-center align-items-center">' + b +'</div>';  
            }
        }else if (levelDiff=="3"){
            for(let c=1; c<=49; c++){//numeri da 1 a 49
                console.log(c)                
                container.innerHTML += '<div class="b d-flex justify-content-center align-items-center">' + c +' </div>';  
            }
        }
});
