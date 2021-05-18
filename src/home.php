<?php
	require_once("action/HomeAction.php");

	$action = new HomeAction();
	$data = $action->execute();

	
?>
	<title>Magix | La tour des dieux</title>
    <link href="css/home.css" rel="stylesheet" />
	<script defer src="js/TiledImage.js"></script>
	<script defer src="js/sprites/hellDog.js"></script>
	<script defer src="js/home.js"></script>


<div class = "intro">
	<p> Bienvenue dans la tour des Dieux</p>
</div>
<div class="bouttons">
	<!--<form action="home.php" method="post"> -->
		<div class="buttons_play">
			<button class="jouer" onclick="location.href = 'game.php?mode=PVP';">jouer</button>	
			<button class="vs_IA" onclick="location.href = 'game.php?mode=TRAINING';">vs IA</button>	
			<button class="log_out" onclick="location.href = '?logout=true';">Log out</button>	
		</div>
	<!--</form>-->
	<div class="leave_button">
		<a href="#" class="leave" >Leave</a>
	</div>
</div>	

<iframe style="width:700px;height:240px;" onload="applyStyles(this)" 
        src="https://magix.apps-de-cours.com/server/#/chat/<?php echo $_SESSION['key'];?>">
</iframe>



	<canvas id="canvas"></canvas>



	
	

