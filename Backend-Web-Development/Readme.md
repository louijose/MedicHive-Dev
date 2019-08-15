## npm
<hr>

## package.json
The file package.json is the center of any Node.js project or npm package. It stores information about your project just like the <head>-section in a HTML document describes the content of a webpage. The package.json consists of a single JSON-object where information is stored in "key": value-pairs.

## Author Field
One of the most common pieces of information in this file is the author-field that specifies who’s the creator of a project. It can either be a string or an object with contact details. 

## Description Field
Short but informative description about the project.

## Keywords Field
The keywords-field is where you can describe your project using related keywords.

## License Field
The license-field is where you inform users of your project what they are allowed to do with it.

## Version Field
The version is together with name one of the required fields in a package.json. This field describes the current version of the project.

## Dependencies-Section
Expand the Project functionalities with external packages from npm.

## Semantic Versioning (SemVer)
Versions of the npm packages in the dependencies-section of your package.json follow what’s called Semantic Versioning (SemVer), an industry standard for software versioning aiming to make it easier to manage dependencies.

## Tilde-Character (~)
To allow a npm dependency to get updated to the latest PATCH-version, you can prefix the dependency’s version with the tilde-character (~).

## Caret-Character (^)
The caret-character (^) is used to prefix the version of moment in your dependencies and allow npm to update it to any new MINOR release.
<hr>
<hr>

## Nodejs and Expressjs
<hr>

## app.listen(port)
One fundamental method is app.listen(port). It tells your server to listen on a given port, putting it in running state. 

## app.get()
Use the app.get() method to serve the string Hello Express, to GET requests matching the / root path.

## res.sendFile(path)
Transfers the file at the given path. Sets the Content-Type response HTTP header field based on the filename’s extension. Unless the root option is set in the options object, path must be an absolute path to the file.

## express.static(path)
This is a built-in middleware function in Express. It serves static files and is based on serve-static.
The root argument specifies the root directory from which to serve static assets. The function determines the file to serve by combining req.url with the provided root directory. When a file is not found, instead of sending a 404 response, it instead calls next() to move on to the next middleware, allowing for stacking and fall-backs.

## app.use(path, middlewareFunction)
Binding application-level middleware to an instance of the app object by using the app.use() function, where METHOD is the HTTP method of the request that the middleware function handles (such as GET, PUT, or POST) in lowercase.

## res.json()
Sends the HTTP response.The body parameter can be a Buffer object, a String, an object, or an Array.This method performs many useful tasks for simple non-streaming responses: For example, it automatically assigns the Content-Length HTTP response header field (unless previously defined) and provides automatic HEAD and HTTP cache freshness support.

## process.env.VAR_NAME
The environment variables are accessible from the app as process.env.VAR_NAME. The process.env object is a global Node object, and variables are passed as strings. By convention, the variable names are all uppercase, with words separated by an underscore. The .env is a shell file, so you don’t need to wrap names or values in quotes. 

## Middleware functions
 Middleware functions are functions that take 3 arguments: the request object, the response object, and the next function in the application’s request-response cycle. These functions execute some code that can have side effects on the app, and usually add informations to the request or response objects. They can also end the cycle sending the response, when some condition is met. If they don’t send the response,when they are done they start the execution of the next function in the stack. This is triggered calling the 3rd argument next(). 

 ## Chain Middleware
 This approach is useful to split the server operations into smaller units. That leads to a better app structure, and the possibility to reuse code in different places. This approach can also be used to perform some validation on the data

 ## req.params
 Route parameters are named segments of the URL, delimited by slashes (/). Each segment captures the value of the part of the URL which matches its position. The captured values can be found in the req.params object.

 ## Querying Parameter Input from the Client
 The query string is delimited by a question mark (?), and includes field=value couples. Each couple is separated by an ampersand (&). Express can parse the data from the query string, and populate the object req.query.
<hr>
<hr>

## MongoDB and Mongoose
<hr>

## Install and Set Up Mongoose
Add mongodb and mongoose to the project’s package.json. Then require mongoose. Store your mLab database URI in the private .env file as MONGO_URI. Connect to the database using mongoose.connect()

## Creating a Model
First of all we need a Schema. Each schema maps to a MongoDB collection. It defines the shape of the documents within that collection.Schemas are building block for Models. They can be nested to create complex models, but in this case we’ll keep things simple.A model allows you to create instances of your objects, called documents.

## model.create()
Model.create() takes an array of objects like [{name: 'John', ...}, {...}, ...] as the first argument, and saves them all in the db. 

## model.find()
Model.find() accepts a query document (a JSON object ) as the first argument, then a callback. It returns an array of matches. It supports an extremely wide range of search options.

## model.findOne() 
Model.findOne() behaves like .find(), but it returns only one document (not an array), even if there are multiple items. It is especially useful when searching by properties that you have declared as unique. 

## model.findById() 
When saving a document, mongodb automatically adds the field _id, and set it to a unique alphanumeric key. Searching by _id is an extremely frequent operation, so moongose provides a dedicated method for it.

## model.update()
Model.update() is binded to the low-level mongo driver. It can bulk edit many documents matching certain criteria, but it doesn’t send back the updated document, only a ‘status’ message. Furthermore it makes model validations difficult, because it just directly calls the mongo driver.

## model.findOneAndUpdate()
Recent versions of mongoose have methods to simplify documents updating. Some more advanced features (i.e. pre/post hooks, validation) behave differently with this approach, so the Classic method is still useful in many situations. findByIdAndUpdate() can be used when searching by Id.

## findByIdAndRemove() & findOneAndRemove()
They are like the previous update methods. They pass the removed document to the cb. As usual, use the function argument personId as search key.

## model.remove()
Model.remove() is useful to delete all the documents matching given criteria.Model.remove() doesn’t return the deleted document, but a JSON object containing the outcome of the operation, and the number of items affected. 

## Chain Search Query 
If you don’t pass the callback as the last argument to Model.find() (or to the other search methods), the query is not executed. You can store the query in a variable for later use. This kind of object enables you to build up a query using chaining syntax. The actual db search is executed when you finally chain the method .exec().

