<?php  

    require "../service/Connection.php";
    date_default_timezone_set('America/Fortaleza');
    
    $titleBlog = $_POST['titleBlog'];
    $postBlog  = $_POST['postBlog'];
    $dataBlog =  date('d-m-y-H-i-s');

    $conn = Connection::open(Connection::DB_MYSQL);
    $query = ("INSERT INTO blog (titleBlog , postBlog , dataBlog) VALUES ('$titleBlog' , '$postBlog' , '$dataBlog') ");
    $query = $conn->prepare($query);
    $query -> execute();


    if($query){
        echo json_encode(['result' => true]);
        return json_encode(['result' => true]);
    }else {
        echo json_encode(['result' => false]);
        return json_encode(['result' => false]);
    }
