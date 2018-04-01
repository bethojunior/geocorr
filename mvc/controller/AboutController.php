<?php   
    require "../dao/AboutDao.php";

    $title = $_POST['title'];
    $text = $_POST['text'];

    $insert = new AboutDao();
    $return = $insert->insertAbout($title , $text);

    echo $return;
    return $return;