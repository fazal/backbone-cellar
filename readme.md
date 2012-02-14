# Backbone.js Juice shop Sample application #

"Backbone Juice shop" is a sample [Backbone.js](http://documentcloud.github.com/backbone/) application.
The application allows you to browse through a list of juices, as well as add, update, and delete juices.
This is a fork of the "Backbone Cellar" application made by ccoenraets [Backbone-cellar](https://github.com/ccoenraets/backbone-cellar)

You can also follow the tutorial and build the application step by step:

- In Part 1 ([doc](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-1-getting-started/) - [code](https://github.com/ccoenraets/backbone-cellar/tree/master/part1)), you define the basic infrastructure. You create a “read-only” version of the application: you’ll be able to retrieve a list of wine and get the details of each wine.
- In Part 2 ([doc](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-2-crud/) - [code](https://github.com/ccoenraets/backbone-cellar/tree/master/part2)), you add the code to add, update and delete wines. You leverage Backbone’s powerful REST integration.
- In Part 3 ([doc](http://coenraets.org/blog/2011/12/backbone-js-wine-cellar-tutorial-part-3-deep-linking-and-application-states/) - [code](https://github.com/ccoenraets/backbone-cellar/tree/master/part3)), you add complete support for history management and deep linking.
- In Part 4 ([doc](http://coenraets.org/blog/2012/01/backbone-js-lessons-learned-and-improved-sample-app/) - [code](https://github.com/ccoenraets/backbone-cellar/tree/master/final)), you load templates asynchronously and implement a few best practices.

The UI is intentionally plain to keep the focus on the architecture of the application.

## Set Up: ##

1. Create a MySQL database name "jooz".
2. Execute jooz.sql to create and populate the "juice" table:

	mysql jooz -uroot < jooz.sql

3. If your database uses credentials other than root, then you can modify the function getConnection() in api/index.php

## Services: ##

The application is available with a PHPservices:

- The PHP services are available in the api directory of this repository. The RESTful services are implemented in PHP using the [Slim framework](http://www.slimframework.com/) (also included in the api directory).

## Issues Faced: ##

I faced the following issues on Fedora:

 - No data was being populated even though the database had data. For this, Apache has to be configured to AllowOverride FileInfo for the api directories, as this is necessary for .htaccess files to be processed which Slim.php depends on.
 - Also need to have php-mysql package for connection to database

