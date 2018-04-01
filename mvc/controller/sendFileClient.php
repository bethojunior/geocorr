<?php   
    include "../index.php";
    require "../dao/ClienteDao.php";


    date_default_timezone_set('America/Fortaleza');
    $data =  date('d-m-y-H-i-s');
    $id = $_POST['idClientModal'];
    $title = $_POST['titlePostFile'];
    


    $ext = strtolower(substr($_FILES['file']['name'],-4)); 
    $new_name = ($data.$id.$ext); 
    $dir = '../../files/clientes/';
    move_uploaded_file($_FILES['file']['tmp_name'], $dir.$new_name); 


    $insert = new ClienteDao(); 
    $retorno = $insert->sendFileById($id , $title , $new_name);

    if($retorno){
        echo "<script>successBlog()</script>";
    }else {
        echo "<script>failedBlog()</script>";
    }