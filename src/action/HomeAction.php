<?php
	require_once("action/CommonAction.php");

	class HomeAction extends CommonAction {

		public function __construct() {
			//À METRE EN MEMBER
			parent::__construct(CommonAction::$VISIBILITY_MEMBER);
		}

		protected function executeAction() {
			return [];
		}
	}