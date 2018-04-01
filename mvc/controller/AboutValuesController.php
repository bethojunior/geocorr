<?php   
    require "../dao/AboutDao.php";

    $text = $_POST['text'];

    $insert = new AboutDao();
    $return = $insert->insertAboutValues($text);

    echo $return;
    return $return;