<?php 
    require_once "../service/Connection.php";

    class ClienteDao{
        
        public function insertClient($email , $nome , $pass ){

            try{

                $conn = Connection::open(Connection::DB_MYSQL);
                $sql = ("INSERT INTO clientes (email , nome , pass) VALUES (:email , :nome , :pass)");
                $query = $conn->prepare($sql);
                $query -> bindParam (':email' , $email , PDO::PARAM_STR);
                $query -> bindParam (':nome'  , $nome , PDO::PARAM_STR);
                $query -> bindParam (':pass'  , $pass  , PDO::PARAM_STR);
                $query->execute();

                if($query){
                    return json_encode(['result' => true]);
                }else {
                    return json_encode(['result' => false]);
                }

            }catch(Exception  $e){
                return json_encode(['result' => false]);
            }

        }

    }