Short Notes on Mongo DB course : M101JS

Intro of Mongo DB : http://www.youtube.com/watch?v=CvIr-2lMLsk&list=TL-8kuKO7NVEc

Week1- part1

1. What is Mongo DB

A non-relational database, based on Json (Javascipt Object Notations) documents.
A schemaless document store.

Lesson: https://www.youtube.com/watch?v=Lfl8hdQOi6Y
Answer: https://www.youtube.com/watch?v=CAR42sMkXEo

2. Mongo Relative to Relational

Mongo DB trade off between scalability-performance and functionality provided by databases.
It doesn't support these features:

Joins : joins cause performance problems while scaling databases.
Transactions

Lesson: https://www.youtube.com/watch?v=-KIC1LXxcGM
Answer: https://www.youtube.com/watch?v=IAvnMgvHuLw

3. Overview of Building an App with Mongo

Core server of Mongo Db is written is c++ as well.
There is a Mongo Shell to perform all administrative tasks on Mongo DB

Lesson: http://www.youtube.com/watch?v=iIhgggzzeoA


4. System Requirements
Lesson: http://www.youtube.com/watch?v=gUHV4dTl1p4

5.Installing MongoDB
Mac:  www.youtube.com/watch?v=7zzLSZQoSCI
Windows: www.youtube.com/watch?v=hX5louVryOQ

6.Quick Introduction to the Mongo Shell

DBs in Mongo DB are created when you first time perform any operation on DB.
Mongo Shell is complete javascript environment running on V8 Chrome Engine, 
so we can execute any javascript code supported by V8 in shell.

Like: - 
for(var i=0;i<10;i++){
	db.things.insert({"x":i})
}
Will execute insert command 10 times, amazing fact is now you can run
this code on your database server. 
Lesson: http://www.youtube.com/watch?v=j2v865GGS2A
Answer: http://www.youtube.com/watch?v=11lpX9YmUb4

7.JSON Introduced
A key- value pair in format {"key":"value"}
use .pretty() to make your response results more readable.

like:- db.collection.find.pretty()

Lesson: http://www.youtube.com/watch?v=vRgKPRrl2Ww
Answer: www.youtube.com/watch?v=3qZnmjdgRrE


8. Installing Node.js
www.youtube.com/watch?v=3-u5Ih7kd0A

9.Asynchronous vs Synchronous

Synchronous code: 
// Find one document in our collection
var doc = db.coll.findOne();

// Print the result
printjson(doc);

In the above synchronous code, process stops until results are fetched from db and then printjson
line is executed.

Asynchronous code
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {

    if(err) throw err;

    // Find one document in our collection
    db.collection('coll').findOne({}, function(err, doc) {

        // Print the result
        console.dir(doc);

        // Close the DB
        db.close();
    });

    // Declare success
    console.dir("Called findOne!");
});

In Asynchronous code we give a callback function ( function(err,doc) ), which executes
once results from database are fetched. There is a single main process which executes this code.
whenever it encounters a callback function, it gives its job to  a child process, and makes a reminder
that whenever value is returned from database, executes code inside function.
It doesn't stop like synchronous code, but after registering callback, goes on to execute next lines of code.

Here output will be:

Called findone

Db Results 

Lesson: http://www.youtube.com/watch?v=ORKA9Ay9jfs

10. Hello World on Node.js

// Source: howtonode.org/hello-node

// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");


setting up server in NodeJs

Lesson:-http://www.youtube.com/watch?v=Fv5Q_02BKrM
