<?php
echo "Running ajax php file";

if(isset($_FILES['data']))
{   
    echo $_FILES['data']["size"];
    echo $_FILES['data']["type"];
    echo $_FILES['data']["tmp_name"];
    echo '<br>';

    $randomNumber = rand(0,10000000);

    $name = 'mysound_' . $randomNumber . '.mp3';
    echo $name;

    move_uploaded_file($_FILES['data']["tmp_name"],"./upload/" . $name);

}
?>