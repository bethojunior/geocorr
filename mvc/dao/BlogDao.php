<?php 
    require "../service/Connection.php";
    require "../dao/BlogDao.php";

    class BlogDao{
        
        function insertPost($title , $post){

            $conn = Connection::open(Connection::DB_MYSQL);
            $result = $conn->prepare("INSERT INTO blog (titleBlog , postBlog) VALUES (:title , :post) ");
            $result->blindValue(":title" , $title);
            $result->blindValue(":post" , $post);

            return $result->execute();

        }

    }