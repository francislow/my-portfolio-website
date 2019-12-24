<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $my_email = 'francislow_6@hotmail.com'
    $text = $email.$message


    mail($my_email, $subject, $text, "test");
    header("Location: index.html?mailsend");
}