# Wireframe skeleton

PHP application template for Alpha wireframes in support of user testing

# Usage

## Creating new views

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

## Bundled includes and their roles

* ``` constants.php ``` is used for definition of application wide constants
* ``` footer.php ``` contains The National Archives' footer and a call to ``` scanFiles() ``` (allowing users to navigate between all files within the directory)
* ``` footer-scripts.php ``` contains all JavaScript references for the application.
* ``` functions.php ``` (which is described below)
* ``` head.php ``` has the HTML <head> element
* ``` header.php ``` has the <header> element

## JavaScript

### Bundled 3rd party libraries
The application has Angular.js (including the en-gb locale), jQuery and Modernizr

### Bundled TNA libraries
The application has ```tna-definitions.js, tna-bindings.js, tna-run-on-page-load.js``` and ```footer-img.js``` (in unminified form).

### Prototype specific JavaScript files (and their roles)
* ```prototype-overrides.js``` - overrides default HTML behaviours and JavaScripts that would interfere with user testing.
* ```prototype-scripts.js``` - holds all scripts that are specific to the application

## CSS
* ```main.min.3.3.css``` - is the existing styles from **Discovery**, including the grid and other 'general' patterns
* ```override-main.css``` - are styles introduced for the sole purpose of overriding main (i.e. those that would need to be carefully considered and refactored for integration into main)
* ```prototype-styles.css``` - are the styles introduced for components specific to the wireframe
* ```wireframify.css``` - are the styles that make the pages look more like a wireframe

# Utilities in functions.php

The functions.php file contains a small number of commonly needed utilities. These are:

* ``` echoDate() ``` simply prints a human readable date to the screen
* ``` scanFiles() ``` scans the current working directory for files and outputs these to screen (allowing users to navigate between all files within the directory)
* ``` checkFileName($name) ``` is used within includes to identify whether the calling filename matches that of the argument (this is used to mock dynamic content within an include shared across the application)



