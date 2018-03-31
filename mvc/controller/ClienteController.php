<?php
    require_once "../dao/ClienteDao.php";

    $email = $_POST['email'];
    $nome = $_POST['name'];
    $pass = $_POST['pass'];

    $insert = new ClienteDao();
    
    $return = $insert->insertClient($email , $nome , $pass);

    echo $return;
    return $return;