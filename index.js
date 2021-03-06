document.addEventListener("DOMContentLoaded",() => {
let Or = 0; // initialisation de l'or 
const allObjects = [paysanSerpette,paysanFourche,soldatEpee,archer,lanceur,soldatLance,soldatEpeeCasque,lanceurHache,arbaletrier,sorcier,multiplicateur];                   
// On met tout les personnages dans un tableau qui nous permettra de mieux les manipuler 
document.body.style.backgroundColor = "#bce7fd"; // pour gérer le darktheme
  // fonction fléchée qui permet d'afficher les stats dans la page
  const stats=() =>{ 
    //let statProd =0;
    //allObjects.forEach((e)=>statProd += e.production)
    //console.log(statProd)        
document.getElementById('prodTotale').innerHTML = (soldatEpee.production + paysanFourche.production + paysanSerpette.production+ archer.production+ lanceur.production+ soldatLance.production+ soldatEpeeCasque.production+ lanceurHache.production + arbaletrier.production+sorcier.production)*multiplicateur.production;    
document.getElementById('persoTotale').innerHTML =(paysanSerpette.nombre + paysanFourche.nombre + soldatEpee.nombre + archer.nombre + lanceur.nombre + soldatLance.nombre + soldatEpeeCasque.nombre + lanceurHache.nombre + arbaletrier.nombre+sorcier.nombre);

} 
if (localStorage.length > 0) {
	// récupération de l'or stockée dans le navigateur
	Or = JSON.parse(localStorage.getItem("Or"));
    simplify(Or,affGold);
    // récupération de tout les objects de la classe Personnage sauvegardés dans le nav
    allObjects.forEach((e)=> {
        let recObj = JSON.parse(localStorage.getItem(e.key));
        e.prix = recObj.prix;
        e.nombre = recObj.nombre;
        e.production = recObj.production; 
    });

    allObjects.forEach((e)=>e.decrire()); 
    // mettre les stats à jour
    //stats(); 
}
document.getElementById('darkBtn').addEventListener('click', ()=> {
        if (document.body.style.backgroundColor === "rgb(188, 231, 253)") {
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "#BB86FC";
            document.getElementById('PxKingdom').style.color = "#03DAC5";
            //console.log(document.getElementsByTagName('img'))
            //document.getElementsByTagName('img').forEach((e)=> e.style.opacity = "0.7")
            document.getElementById('darkBtn').innerHTML = "Theme clair";
        }
        else  {
            document.body.style.backgroundColor = "#bce7fd";
            document.body.style.color = "black";
            document.getElementById('PxKingdom').style.color = "#052f33";
            document.getElementById('darkBtn').innerHTML = "Theme sombre";
        }
    });
document.getElementById('or').addEventListener('click', function() {   // on incrémente de 1 quand on clique sur l'image or          
    Or++;
    simplify(Or,affGold);
    affGoldTitle.innerHTML = Or + " Or - Pixel Kingdom Cliker"; 
    }); 
// inclure les descriptions dans la page html
//decrire les personnages et items avec forEach
allObjects.forEach((e)=>e.decrire()); 
// affichage des stats dans la page
stats();
                                                            // acheter des personnages
// factorisation
const acheterPersonnage = (personnage) => {
    if (Or >= personnage.prix) {
        Or -= personnage.prix;
        personnage.prix = Math.round(personnage.prix*personnage.pourcentPrix);
        personnage.nombre += 1;
        personnage.production += personnage.incremProd;
        simplify(Or,affGold);
    	personnage.decrire();
		stats();
    }
}
// acheter un paysan
document.getElementById('PaysanImg').addEventListener('click', acheterPaysan=()=> {             
    acheterPersonnage(paysanSerpette);
    });
// acheter un paysan à fourche
document.getElementById('PaysanFourcheImg').addEventListener('click', acheterPaysanFourche=()=> {             
    acheterPersonnage(paysanFourche);
    });
// acheter un soldat à épée
document.getElementById('SoldatEpeeImg').addEventListener('click', acheterSoldatEpee=()=> {             
    acheterPersonnage(soldatEpee);
    });
// acheter un archer
document.getElementById('ArcherImg').addEventListener('click', acheterArcher=()=> {             
    acheterPersonnage(archer);
    });
//acheter un lanceur de pierre
document.getElementById('LanceurPImg').addEventListener('click', acheterLanceur=()=> {             
    acheterPersonnage(lanceur);
	});
//acheter un soldat à lance
document.getElementById('SoldatLanceImg').addEventListener('click', acheterSoldatLance=()=> {             
    acheterPersonnage(soldatLance);
	});
//acheter un soldat à épée et casque
document.getElementById('SoldatEpeeCasqueImg').addEventListener('click', acheterSoldatEpeeCasque=()=> {             
    acheterPersonnage(soldatEpeeCasque);
    });
//acheter un soldat à épée et casque
document.getElementById('LanceurHacheImg').addEventListener('click', acheterSoldatEpeeCasque=()=> {             
    acheterPersonnage(lanceurHache);
    });
//acheter un arbalétrier
document.getElementById('ArbaletrierImg').addEventListener('click', acheterArbaletrier=()=> {             
    acheterPersonnage(arbaletrier);
    });
//acheter un sorcier
document.getElementById('SorcierImg').addEventListener('click', acheterSorcier=()=> {             
    acheterPersonnage(sorcier);
	});				
																	//acheter des items
// acheter un multiplicateur de production																	
document.getElementById('multipliProdImg').addEventListener('click', acheterMultiplicateur=()=> {             
    acheterPersonnage(multiplicateur);
	});																															
    const travailPersonnages=() =>{         // les personnages produisent de l'or
        allObjects.pop()
        allObjects.forEach((e)=> Or += e.production*multiplicateur.production)
        allObjects.push(multiplicateur)
        simplify(Or,affGold);
        affGoldTitle.innerHTML = Or + " Or - Pixel Kingdom Cliker";    
    }
// Gestion de la fermeture ou du refresh de la page web
window.addEventListener("beforeunload", ()=> {
	// sauvegarder dans le localstorage la variable Or
	localStorage.setItem("Or", JSON.stringify(Or));
    // sauvegarder les personnages et items
    allObjects.forEach((e)=>localStorage.setItem(e.key, JSON.stringify(e)));
});     
setInterval(travailPersonnages, 1000);     // code asynchrone pour dire que la function      
});                                   // est répétée toute les secondes


   







