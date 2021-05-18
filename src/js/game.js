let cardsInHand;
let cardboardClick;

window.addEventListener("load", () => {
	setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});

const state = () => {
	fetch("ajax-state.php", {   // Il faut créer cette page et son contrôleur appelle 
 		method : "POST",       // l’API (games/state)
		credentials: "include"
	})
	.then(response => response.json())
	.then(data => {
		console.log(data); // contient les cartes/état du jeu.
		var response = data;
		if (response == 'WAITING') {
			
		}else if (response == 'LAST_GAME_WON') {
			
			alert('Bravo! vous avez gagné!');
			window.location.href = "home.php";

		}else if (response == "LAST_GAME_LOST") {
			alert('Dommage! vous avez perdu :c ');
			window.location.href = "home.php";
		}
		else{
			cardsInHand = response.hand;
			cardsOnBoard = response.board;
			opponentBoard  = response.opponent.board;
			//actualisation des informations des joueurs
			if (response.yourTurn == true) {
				document.getElementById("player_timer").innerText = response.remainingTurnTime;
			}
			document.getElementById("player_hp").innerText = response.hp;
			document.getElementById("player_mana").innerText = response.mp;
			document.getElementById("opponent_hp").innerText = response.opponent.hp;
			document.getElementById("opponent_mana").innerText = response.opponent.mp;
			document.getElementById("opponent_image").innerText = response.opponent.username;
			if (response.heroPowerAlreadyUsed == false && response.mp >=2) {
				document.getElementById("Hero_power").style.border = "2px solid #0000FF";
			}
			drawCards(cardsInHand,"card_container",response);
			drawCards(cardsOnBoard,"player_board",response);
			drawCards(opponentBoard,"opponent_board",response);
		}
	setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
	})
}

const action = (mode,tUid) => {
	if (mode == "ATTACK") {
		console.log( cardboardClick + " attaque sur : " + tUid);
		$.ajax({
			url: "ajax-update.php",
			type: "POST" ,  
			data : {type : mode, UID : cardboardClick, targetuid : tUid},
		})

	}else if(mode == "HERO_POWER"){
		$.ajax({
			url: "ajax-update.php",
			type: "POST" ,  
			data : {type : mode},
		})
	}
	else{
		$.ajax({
			url: "ajax-update.php",
			type: "POST" ,  
			data : {type : mode, UID : tUid},
		})
	}
}

const boardClick = (uid) => {
	cardboardClick = uid;
}

const attackHero = () => {
	action("ATTACK",0);
}

const heroPower = () => {
	action("HERO_POWER",null);
}


const drawCards = (hand,where,state) => {
	var type;

	if (where == "opponent_board") {
		type = "ATTACK";
	}
	else if(where == "card_container"){
		type = "PLAY";	
	}
	else if(where == "player_board"){
		type = "boardClick";
	}

	document.getElementById(where).innerHTML = "";
	let templateHTML = document.querySelector("#char-template").innerHTML;
	for (let i = 0; i < hand.length; i++) {
		let div = document.createElement("div");
		div.className = "character";
		div.id = hand[i].id;
		div.innerHTML = templateHTML;
		div.querySelector(".image").innerText = "";
		div.querySelector(".desc").innerText = hand[i].mechanics;
		div.querySelector(".name").innerText = 'PIERRE';
		div.querySelector(".atk").innerText =  hand[i].atk;
		div.querySelector(".def").innerText =  hand[i].hp;
		div.querySelector(".cost").innerText =  hand[i].cost;
		if (hand[i].state == "IDLE") {
			div.style.border = "thick solid #99ff99"
		}
		document.getElementById(where).append(div);
		let uid = hand[i].uid;
		if (type == "PLAY" || type == "ATTACK") {
			div.onclick = () => {
				action(type,uid);
			}
		}
		else if (type == "boardClick"){
			div.onclick = () =>{
				boardClick(uid);	
			}
		}
		
	}
}

const endTurn = () => {
	console.log('end turn');
	action('END_TURN', null);
}