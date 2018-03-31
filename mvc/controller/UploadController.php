<?php  

    class Upload {

        public function uploadFile($titulo , $imagem){

            $ext = strtolower(substr($_FILES['fileUpload']['name'],-4)); 
            $new_name = ($titulo.$ext); 
            $dir = 'upload/';
            move_uploaded_file($_FILES['fileUpload']['tmp_name'], $dir.$new_name); 
            

        }   
    }