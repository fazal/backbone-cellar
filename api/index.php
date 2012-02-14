<?php

require 'Slim/Slim.php';

$app = new Slim();

$app->get('/juices', 'getJuices');
$app->get('/juices/:id',	'getJuice');
$app->get('/juices/search/:query', 'findByName');
$app->post('/juices', 'addJuice');
$app->put('/juices/:id', 'updateJuice');
$app->delete('/juices/:id',	'deleteJuice');

$app->run();

function getJuices() {
	$sql = "select * FROM juice ORDER BY name";
	try {
		$db = getConnection();
		$stmt = $db->query($sql);  
		$juices = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		// echo '{"juice": ' . json_encode($juices) . '}';
		echo json_encode($juices);
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getJuice($id) {
	$sql = "SELECT * FROM juice WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$juice = $stmt->fetchObject();  
		$db = null;
		echo json_encode($juice); 
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function addJuice() {
	error_log('addJuice\n', 3, '/var/tmp/php.log');
	$request = Slim::getInstance()->request();
	$juice = json_decode($request->getBody());
	$sql = "INSERT INTO juice (name, price, ingredients, description) VALUES (:name, :price, :ingredients, :description)";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("name", $juice->name);
		$stmt->bindParam("price", $juice->price);
		$stmt->bindParam("ingredients", $juice->ingredients);
		$stmt->bindParam("description", $juice->description);
		$stmt->execute();
		$juice->id = $db->lastInsertId();
		$db = null;
		echo json_encode($juice); 
	} catch(PDOException $e) {
		error_log($e->getMessage(), 3, '/var/tmp/php.log');
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function updateJuice($id) {
	$request = Slim::getInstance()->request();
	$body = $request->getBody();
	$juice = json_decode($body);
	$sql = "UPDATE juice SET name=:name, price=:price, ingredients=:ingredients, description=:description WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("name", $juice->name);
		$stmt->bindParam("price", $juice->price);
		$stmt->bindParam("ingredients", $juice->ingredients);
		$stmt->bindParam("description", $juice->description);
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
		echo json_encode($juice); 
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function deleteJuice($id) {
	$sql = "DELETE FROM juice WHERE id=:id";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);  
		$stmt->bindParam("id", $id);
		$stmt->execute();
		$db = null;
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function findByName($query) {
	$sql = "SELECT * FROM juice WHERE UPPER(name) LIKE :query ORDER BY name";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$query = "%".$query."%";  
		$stmt->bindParam("query", $query);
		$stmt->execute();
		$juices = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo '{"juice": ' . json_encode($juices) . '}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getConnection() {
	$dbhost="127.0.0.1";
	$dbuser="root";
	$dbpass="";
	$dbname="jooz";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}

?>
