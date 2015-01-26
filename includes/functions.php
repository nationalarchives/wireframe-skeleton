<?php
/**
 * Created by PhpStorm.
 * User: gjones
 * Date: 12/01/2015
 * Time: 09:36
 */

function echoDate() {
    date_default_timezone_set('UTC');
    echo(date('l jS F Y h:i a'));
}

function scanFiles() {
    if(getcwd()){
        $currentDirectory = getcwd();
        $files = scandir($currentDirectory);
        $listItems = "";
        foreach ($files as $value) {
            $lastThreeCharacters = substr($value, -3);
            if($lastThreeCharacters === "php"){
                $listItems .= sprintf('<li><a href="%s">%s</a></li>', $value, $value);
            }
        }
        printf('<ul class="prototype-pages">%s</ul>', $listItems);
    }
}

function checkFileName($name) {
    $currentFile = basename($_SERVER['PHP_SELF']);
    if($currentFile === $name) {
        return true;
    } else {
        return false;
    }
}