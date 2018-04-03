<?php
    
    require_once "../service/Connection.php";

    class UserDao{
    
        public function insertUser($name , $email , $pass){
            
            try{
                $conn = Connection::open(Connection::DB_MYSQL);
                $query = ("INSERT INTO users (name , email , pass) VALUES (:name , :email , :pass)");
                $query = $conn->prepare($query);
                $query -> bindValue(':name' , $name , PDO::PARAM_STR);
                $query -> bindValue(':email' , $email , PDO::PARAM_STR);
                $query -> bindValue(':pass' , $pass , PDO::PARAM_STR);
                
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