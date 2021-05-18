<?php    
	require_once("action/AjaxUpdateAction.php");

	$action = new AjaxUpdateAction();
	$data =$action->execute();
	

 
	echo json_encode($data["result"]);
  