<?php 
    require_once "../service/Connection.php";

    class BlogDao{
        
        public function insertPost($titleBlog , $postBlog , $dataBlog , $src ){
            try{
                $conn = Connection::open(Connection::DB_MYSQL);
                $sql = ("INSERT INTO blog (titleBlog , postBlog , dataBlog , src ) VALUES (:titleBlog , :postBlog , :dataBlog , :src) ");
                $query = $conn->prepare($sql);
                $query->bindParam(':titleBlog' , $titleBlog ,  PDO::PARAM_STR);
                $query->bindParam(':postBlog'  , $postBlog  ,  PDO::PARAM_STR);
                $query->bindParam(':dataBlog'  , $dataBlog  ,  PDO::PARAM_STR);
                $query->bindParam(':src' , $src , PDO::PARAM_STR);
                $query -> execute();
        
                if($query){
                    return json_encode(['result' => true]);
                }else {
                    return json_encode(['result' => false]);
                }
            
            }catch(Exception $e){
                return json_encode(['result' => false]);
            }
        }

    }