<?php  
    require "../dao/UserDao.php";
    
    class UserController{
            
        public function __construct($action){    
                $this->$action();
            }

        public function insertUser(){

            $name = $_POST['name'];
            $email = $_POST['email'];
            $pass = $_POST['pass'];

            $insert = new UserDao();
            $return = $insert->insertUser($name , $email , $pass);

            echo $return;
            return $return;

        }


    }

    new UserController($_GET['action']);