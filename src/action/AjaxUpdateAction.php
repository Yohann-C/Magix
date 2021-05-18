<?php
    require_once("action/CommonAction.php");


    class AjaxUpdateAction extends CommonAction {

        public function __construct() {
            parent::__construct(CommonAction::$VISIBILITY_PUBLIC);
        }

        protected function executeAction() {

            $UID = null;
            $type = null;
            if (isset($_POST["UID"])) {

                $UID = $_POST["UID"];
                $data['uid'] = $UID;
            }
            if (isset($_POST["type"])) {
                $type = $_POST["type"];
                $data['type'] = $type;
            }
            if (isset($_POST["targetuid"])){
                $target = $_POST["targetuid"];
                $data['targetuid'] = $target;

            }
            $data['key'] = $_SESSION["key"];
            
            $result = parent::callAPI("games/action", $data);

            return compact("result");
        }
    }