<?php
	require_once("action/LoginAction.php");

	$action = new LoginAction();
	$data = $action->execute();

	require_once("partial/header.php");
?>
	<script defer src="js/index.js">	</script>


	<div class="login-form-frame">

		<form action="index.php" method="post">

			<?php
				if ($data["hasConnectionError"]) {
					?>
					<div class="error-div"><strong>Erreur : </strong>Connexion erronée</div>
					<?php
				}
			?>

			<div class="form-separator"></div>

			<div class="form-label">
				<div class = "form-txt">Nom d'usager</div>
				<div class = "form-input"><input type="text" name="username" id="username" /></div>
				
			</div>

			<div class="form-separator"></div>

			
			<div class="form-label">
				<div class = "form-txt">Mot de passe</div>
				<div class = "form-input"><input type="password" name="pwd" id="password" /></div>
			</div>

			<div class="form-separator"></div>

			<div class="form-button">
				<button type="submit">Connexion</button>
			</div>
			<div class="form-separator"></div>
			<audio id="rain_audio" src="../../sounds/backgroundRain.wav" loop="loop"></audio>
			<audio id="thunder_audio" src="../../sounds/ThunderSound.wav"></audio>


		</form>
	</div>
	<input type="checkbox" name="un-mute" id="un-mute" onclick="muteSound()"/>
	<label for="un-mute" class="unmute">
    	<img class= "muteButton" src="http://upload.wikimedia.org/wikipedia/commons/3/3f/Mute_Icon.svg" alt="Mute_Icon.svg" title="Mute icon">
	</label>
	<label for="un-mute" class="mute">
    	<img class= "muteButton" src="http://upload.wikimedia.org/wikipedia/commons/2/21/Speaker_Icon.svg" alt="Speaker_Icon.svg" title="Unmute/speaker icon">
	</label>



