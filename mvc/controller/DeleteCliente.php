<?php
    require_once "../dao/ClienteDao.php";

    $id = $_POST['id'];

    $delete = new ClienteDao();
    $return = $delete->deleteClient($id);

    echo $return;
    return $return;