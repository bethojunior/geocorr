<?php   

    require "../dao/AboutDao.php";
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


    }

new AboutController($_GET['action']);