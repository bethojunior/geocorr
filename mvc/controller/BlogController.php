<?php  

    require "../dao/BlogDao.php";
    date_default_timezone_set('America/Fortaleza');
    
    $titleBlog = $_POST['titleBlog'];
    $postBlog  = $_POST['postBlog'];
    $dataBlog =  date('d-m-y-H-i-s');

    $blog = new BlogDao();
    echo $blog->insertPost($titleBlog , $postBlog , $dataBlog);


