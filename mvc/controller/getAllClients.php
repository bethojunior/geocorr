<?php

    require "../service/Connection.php";
    require "../dao/ClienteDao.php";
    
    $posts = new ClienteDao();
    $return = $posts->getAllClients();

    echo $return;
    return $return;