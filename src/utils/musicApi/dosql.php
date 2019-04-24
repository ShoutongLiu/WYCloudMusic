<?php

function doSelect($sql)
{
    $link = mysqli_connect('127.0.0.1', 'root', '', 'music');
    mysqli_query($link, 'set names utf8');
    $result = mysqli_query($link, $sql);
    $data = mysqli_fetch_all($result, 1);
    mysqli_close($link);

    return $data;
}

function doUpdate($sql)
{
    $link = mysqli_connect('127.0.0.1', 'root', '', 'music');
    mysqli_query($link, 'set names utf8');
    mysqli_query($link, $sql);
    $rows = mysqli_affected_rows($link);
    mysqli_close($link);

    return $rows;
}
