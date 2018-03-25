<?php

    require "../service/Connection.php";

    try{
        $conn = Connection::open(Connection::DB_MYSQL);
        $query = ("SELECT * FROM blog ORDER BY id DESC");
        $query = $conn->prepare($query);
        $query -> execute();
    
        $all = $query->fetchAll(PDO::FETCH_OBJ);
        $result = json_encode($all);
    
        echo $result;
        return $result;

    }catch(Excepction $e){
        echo $e;
        return $e;
    }