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


        public function getAllPosts() {
            
            $conn = Connection::open(Connection::DB_MYSQL);
            $query = ("SELECT * FROM blog ORDER BY id DESC");
            $query = $conn->prepare($query);
            $query -> execute();
            $all = $query->fetchAll(PDO::FETCH_OBJ);
            
            if($query){
                return json_encode($all);
            }else {
                return json_encode($all);
            }
            
    
        }

    }