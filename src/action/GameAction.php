<?php
	require_once("action/CommonAction.php");

	class GameAction extends CommonAction {

		public function __construct() {
			//À METRE EN MEMBER
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
            $_SESSION['type']=($_GET["mode"]);

            $data['key'] = $_SESSION["key"];
            $data['type'] = $_SESSION['type'];
            

            $result = parent::callAPI("games/auto-match", $data);
			return [];
		}

	}