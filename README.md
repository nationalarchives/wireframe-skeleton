# Wireframe skeleton

PHP application template for Alpha wireframes in support of user testing

# Usage

Add new views to the application root as PHP files with the following structure:

```php
<!DOCTYPE html>
<html lang="en-gb">
<?php require_once('includes/head.php'); ?>
    <body>
        <?php require_once('includes/header.php'); ?>
        <main id="page_wrap" class="container" role="main">
            <?php /* Replace the following line with an include for the page content */ ?>
            <?php require_once('includes/index-page-content.php'); ?>
        </main>
        <?php require_once('includes/footer.php'); ?>
        <?php require_once('includes/footer-scripts.php'); ?>
    </body>
</html>
```

# Utilities in functions.php

The functions.php file contains a small number of commonly needed utilities. These are:

* ``` echoDate() ``` simply prints a human readable date to the screen
* ``` scanFiles() ``` scans the current working directory for files and outputs these to screen (allowing users to view all files within the directory)
* ``` checkFileName($name) ``` is used within includes to identify whether the calling filename matches that of the argument (this is used to mock dynamic content within an include shared across the application)



