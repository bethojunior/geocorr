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




    }