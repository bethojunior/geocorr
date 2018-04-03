<?php   

    require "../dao/AboutDao.php";
    date_default_timezone_set('America/Fortaleza');
    class AboutController{
        
            public function __construct($action)
            {    
                $this->$action();
            }

            //insere sobre nós
            public function insertAboutUs(){     

                $title = $_POST['title'];
                $text = $_POST['text'];

                $insert = new AboutDao();
                $return = $insert->insertAbout($title , $text);

                echo $return;
                return $return;
            }

            //insere missão
            public function insertAboutMission(){

                $text = $_POST['text'];

                $insert = new AboutDao();
                $return = $insert->insertAboutMission($text);
            
                echo $return;
                return $return;
            }
            
            //insere valores 
            public function insertAboutValues(){

                $text = $_POST['text'];

                $insert = new AboutDao();
                $return = $insert->insertAboutValues($text);
            
                echo $return;
                return $return;
            }

            //insere visão
            public function insertAboutVision(){
                $text = $_POST['text'];

                $insert = new AboutDao();
                $return = $insert->insertAboutVision($text);
            
                echo $return;
                return $return;
            }

            //insere serviços
            public function insertAboutService(){
                $title = $_POST['title'];
                $post = $_POST['post'];

                $insert = new AboutDao();
                $return = $insert->insertAboutService($title , $post);

                echo $return;
                return $return;
            }

            //pega todos os serviços
            public function getAllServices(){
                $get = new AboutDao;
                $all = $get->getAllServices();

                echo $all;
                return $all;
            }

            //UPDATE ON SERVICES
            public function updateAboutService(){
                $id = $_POST['id'];
                $title = $_POST['title'];
                $post = $_POST['post'];

                $up = new AboutDao();
                $return = $up->updateService($id , $title , $post);

                echo $return;
                return $return;
            }

            //delete service
            public function deletService(){

                $id = $_POST['id'];
    
                $delete = new AboutDao();
                $return = $delete->deleteService($id);
            
                echo $return;
                return $return;
            }

            //INSERT CAROUSEL
            public function insertAboutCarousel(){

                $data =  date('d-m-y-H-i-s');
                $titulo = $data;
                
                $ext = strtolower(substr($_FILES['carousel']['name'],-4)); 
                $new_name = ($titulo.$ext); 
                $dir = '../../files/carousel/';
                move_uploaded_file($_FILES['carousel']['tmp_name'], $dir.$new_name);

                $insert = new AboutDao();
                $return = $insert->insertAboutCarousel($new_name);
                
                echo $return;
                return $return;
            }

            public function getAllCarousel(){
                $get = new AboutDao();
                $return = $get->getAllCarousel();

                echo $return;
                return $return;
            }


    }

new AboutController($_GET['action']);