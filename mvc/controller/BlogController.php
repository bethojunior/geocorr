<?php  

    require "../service/Connection.php";
    date_default_timezone_set('America/Fortaleza');
    
    $titleBlog = $_POST['titleBlog'];
    $postBlog  = $_POST['postBlog'];
    $dataBlog =  date('d-m-y-H-i-s');

    try{
        $conn = Connection::open(Connection::DB_MYSQL);
        $query = ("INSERT INTO blog (titleBlog , postBlog , dataBlog) VALUES (:titleBlog , :postBlog , :dataBlog) ");
        $stmt = $conn->prepare($query);
        $stmt->bindParam(':titleBlog' , $titleBlog ,  PDO::PARAM_STR);
        $stmt->bindParam(':postBlog'  , $postBlog ,  PDO::PARAM_STR);
        $stmt->bindParam(':dataBlog'  , $dataBlog ,  PDO::PARAM_STR);
        
        $stmt -> execute();

        if($stmt){
            echo json_encode(['result' => true]);
            return json_encode(['result' => true]);
        }else {
            echo json_encode(['result' => false]);
            return json_encode(['result' => false]);
        }
    
    }catch(Exception $e){
        echo json_encode(['result' => false]);
        return json_encode(['result' => false]);
    }


