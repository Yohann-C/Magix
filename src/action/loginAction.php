<?php
	require_once("action/CommonAction.php");

	class LoginAction extends CommonAction {
	

		public function __construct() {
			parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
		}

		protected function executeAction() {	
			$hasConnectionError = false;	

			if (isset($_POST["username"])) {

				$logData = [];
				$logData["username"] = $_POST["username"];
				$logData["password"] = $_POST["pwd"];

				$result = parent::callAPI("signin", $logData);

				if ($result == "INVALID_USERNAME_PASSWORD") {
					$hasConnectionError = true;
				}else {
					echo('ouuuah');
					$_SESSION["visibility"] = 1;
					$key = $result->key;
					$_SESSION["key"] = $key;
					header("location:home.php");
					exit;
				}
			}
			return compact("hasConnectionError");

		}
	}
