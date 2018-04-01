<?php   
    require "../dao/AboutDao.php";

    $text = $_POST['text'];

    $insert = new AboutDao();
    $return = $insert->insertAboutMission($text);

    echo $return;
    return $return;