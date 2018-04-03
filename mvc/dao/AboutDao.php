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

        public function insertAboutService($title , $post){

            try{
                $conn = Connection::open(Connection::DB_MYSQL);
                $query = ("INSERT INTO services (title , post) VALUES (:title , :post)");
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

        public function getAllServices(){

            try{
                $conn = Connection::open(Connection::DB_MYSQL);
                $query = ("SELECT * FROM services order by id DESC");
                $query = $conn->prepare($query);

                $query->execute();

                $all = $query->fetchAll(PDO::FETCH_OBJ);

                if($query){
                    return json_encode($all);
                }else {
                    return json_encode($all);
                }

            }catch(Exception $e){
                return json_encode($all);
            }

        }

        public function updateService($id , $title , $post){

            try{
                $conn = Connection::open(Connection::DB_MYSQL);
                $query = ("UPDATE services SET title = :title , post = :post WHERE id = :id");
                $query = $conn->prepare($query);
                $query -> bindParam(':title' , $title , PDO::PARAM_STR);
                $query -> bindParam(':post' , $post , PDO::PARAM_STR);
                $query -> bindParam(':id' , $id , PDO::PARAM_INT);

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
        
        public function deleteService($id){
            
            try{
                $conn = Connection::open(Connection::DB_MYSQL);
                $query = ("DELETE FROM services where id = :id");
                $query = $conn->prepare($query);
                $query->bindParam(':id' , $id , PDO::PARAM_INT);
                $query->execute();

                if($query){
                    return json_encode(['result' => true]);
                }else {
                    return json_encode(['result' => false]);
                }

            }catch(Execption $e){
                return json_encode(['result' => false]);
            }

        }




    }