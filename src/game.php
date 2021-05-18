<?php 
	require_once("action/GameAction.php");

	$action = new GameAction();
	$data = $action->execute();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Magix | La tour des dieux</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="js/game.js"></script>
    <script defer type="text/javascript" src="js/jquery.min.js"></script>
    <link rel="stylesheet" href="css/game.css">
</head>
<body>
 

    <div id="opponent_container">
        <div id="opponent_hp" onclick='attackHero()'>

        </div>

        <div id="opponent_image">
        </div>

        <div id="opponent_mana">
 
        </div>
    </div>

        <div id="opponent_board"></div>
        <div id="player_board"> </div>


    <div id="player_container">
        <div id="player_stats">
            <div id="player_hp">
                
            </div>
            
            <div id="player_mana">
                
            </div>

            <div id="player_timer">
               
            </div>

        </div>
        <div id="end-turn">
            <button class="end_turn" onclick='endTurn()'>End Turn</button>	
            <button id="Hero_power" onclick='heroPower()'>Hero Power</button>	
        </div>

        <div id="card_container"> </div>
        <template id="char-template">
			<div class='image'></div>
            <div class='name'></div>
			<div class='desc'></div>
            <div class= 'stats'>
                <div class='atk'></div>
                <div class='def'></div>
                <div class='cost'></div>
            </div>
           
		</template>
    </div>


</body>
</html>