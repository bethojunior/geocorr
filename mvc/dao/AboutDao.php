<?php   
    require_once "../service/Connection.php";

    class AboutDao{

        public function insertAbout($title , $post){

            try {
                $conn = Connection::open(Connection::DB_MYSQL);
                $query = ("INSERT INTO aboutus (title , about ) VALUES (:title , :post)");
                $query = $conn->prepare($query);
                $query -> bindParam(':title' , $title , PDO::PARAM_STR);
                $query -> bindParam(':post' , $post , PDO::PARAM_STR);
    
                $query->execute();
    
                if($query){
                    return json_encode(['result' => true]);
                }else {
                    return json_encode(['result' => false]);
                }
            
            }catch(Exception $e){
                return json_encode(['result' => false]);
            }

        }

        public function insertAboutMission($post){
            try {
                $conn = Connection::open(Connection::DB_MYSQL);
                $query = ("INSERT INTO mission ( post ) VALUES (:post)");
                $query = $conn->prepare($query);
                $query -> bindParam(':post' , $post , PDO::PARAM_STR);
    
                $query->execute();
    
                if($query){
                    return json_encode(['result' => true]);
                }else {
                    return json_encode(['result' => false]);
                }
            
            }catch(Exception $e){
                return json_encode(['result' => false]);
            }
        }

        public function insertAboutValues($post){

            try {
                $conn = Connection::open(Connection::DB_MYSQL);
                $query = ("INSERT INTO valores ( post ) VALUES (:post)");
                $query = $conn->prepare($query);
                $query -> bindParam(':post' , $post , PDO::PARAM_STR);
    
                $query->execute();
    
                if($query){
                    return json_encode(['result' => true]);
                }else {
                    return json_encode(['result' => false]);
                }
            
            }catch(Exception $e){
                return json_encode(['result' => false]);
            }

        }

        public function insertAboutVision($post){

            try {
                $conn = Connection::open(Connection::DB_MYSQL);
                $query = ("INSERT INTO vision ( post ) VALUES (:post)");
                $query = $conn->prepare($query);
                $query -> bindParam(':post' , $post , PDO::PARAM_STR);
    
                $query->execute();
    
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