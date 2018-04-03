<?php  

    class Upload {

        public function uploadFile($titulo , $imagem){

            try {
                $ext = strtolower(substr($_FILES['fileUpload']['name'],-4)); 
                $new_name = ($titulo.$ext); 
                $dir = 'upload/';
                $up = move_uploaded_file($_FILES['fileUpload']['tmp_name'], $dir.$new_name); 
                
                if($up){
                    return json_encode(['result' => true]);
                }else {
                    return json_encode(['result' => false]);
                }
            }catch(Exception $e){
                return json_encode(['result' => false]);
            }


        }   
    }