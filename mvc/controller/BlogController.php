<?php  
    require_once "../dao/BlogDao.php";
    date_default_timezone_set('America/Fortaleza');

    $titleBlog = $_POST['titleBlog'];
    $titulo = $_POST['titleBlog'];
    $postBlog  = $_POST['postBlog'];
    $dataBlog =  date('d-m-y-H-i-s');

    $ext = strtolower(substr($_FILES['imagem']['name'],-4)); 
    $new_name = ($titulo.$ext); 
    $dir = '../../files/posts/';
    move_uploaded_file($_FILES['imagem']['tmp_name'], $dir.$new_name); 

    $blog = new BlogDao();
    $return = $blog->insertPost($titleBlog , $postBlog , $dataBlog , $new_name);

    echo $return;
    return $return;


