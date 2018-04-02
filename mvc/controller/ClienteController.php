<?php

    require_once "../dao/ClienteDao.php";

    class ClientController {

        public function __construct($action)
        {    
            $this->$action();
        }

        public function insertClient(){

            $email = $_POST['email'];
            $nome = $_POST['name'];
            $pass = $_POST['pass'];
        
            $insert = new ClienteDao();
            
            $return = $insert->insertClient($email , $nome , $pass);
        
            echo $return;
            return $return;
        }

        public function deletClient(){

            $id = $_POST['id'];

            $delete = new ClienteDao();
            $return = $delete->deleteClient($id);
        
            echo $return;
            return $return;
        }

        public function getAll(){
            $posts = new ClienteDao();
            $return = $posts->getAllClients();
        
            echo $return;
            return $return;
        }

        public function sendFile(){
            date_default_timezone_set('America/Fortaleza');
            $data =  date('d-m-y-H-i-s');
            $id = $_POST['idClientModal'];
            $title = $_POST['titlePostFile'];
            
        
        
            $ext = strtolower(substr($_FILES['file']['name'],-4)); 
            $new_name = ($data.$id.$ext); 
            $dir = '../../files/clientes/';
            move_uploaded_file($_FILES['file']['tmp_name'], $dir.$new_name); 
        
        
            $insert = new ClienteDao(); 
            $return = $insert->sendFileById($id , $title , $new_name);
        
            echo $return;
            return $return;
        }

    }


new ClientController($_GET['action']);