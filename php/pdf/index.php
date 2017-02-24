<?php
require "app/bootstrap.php";
$capture=new \Codecourse\Capture\Capture;

$capture->load("invoice.php",[
    'number'=>'123456'
]);

$capture->respond("invoice.pdf");
