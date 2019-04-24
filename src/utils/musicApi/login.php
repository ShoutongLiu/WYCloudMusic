<?php

$name = $_POST['name'];
$pwd = $_POST['password'];

include './dosql.php';
$sql = "select * from user where name = '$name' and password = '$pwd'";
$data = doSelect($sql);
if (count($data) > 0) {
    // session_start();
    // //把用户信息存入session
    // $_SESSION['userInfo'] = $data[0];
    // echo '{"msg":"登录成功","status":"ok"}';
    echo json_encode($data);
} else {
    echo '{"msg":"登录失败","status":"fila"}';
}
