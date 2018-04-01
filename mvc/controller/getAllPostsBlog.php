<?php

    require "../service/Connection.php";
    require "../dao/BlogDao.php";
    
    $posts = new BlogDao();
    $return = $posts->getAllPosts();

    echo $return;
    return $return;