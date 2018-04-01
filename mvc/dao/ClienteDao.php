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


        public function  getAllClients(){

            try {
                $conn = Connection::open(Connection::DB_MYSQL);
                $query = ("SELECT * FROM clientes ORDER BY id DESC");
                $query = $conn->prepare($query);
                $query -> execute();
    
                $all = $query->fetchAll(PDO::FETCH_OBJ);
                
                if($query){
                    return json_encode($all);
                }else {
                    return json_encode(['result' => false]);
                }
            }catch(Excpetion $e){
                return json_encode(['result' => false]);
            }

        }


        public function sendFileById($id , $title , $src){
            try {
                $conn = Connection::open(Connection::DB_MYSQL);
                $query = ("INSERT INTO filesClient (idClient , title , src) VALUES (:id , :title , :src  ) ");
                $query = $conn->prepare($query);
                $query -> bindParam(':id'    , $id    , PDO::PARAM_STR);
                $query -> bindParam(':title' , $title , PDO::PARAM_STR);
                $query -> bindParam(':src'   , $src   , PDO::PARAM_STR);
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