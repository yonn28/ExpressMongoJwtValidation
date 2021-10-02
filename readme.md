## command for docker with mongodb

please change volume dir for local testing

```
docker run -d --name blocks -p 27017:27017 -v /Users/yonnyclinton/Desktop/mongo:/data/db  mongo
```

install a client for Mongo

````
brew install mongosh
````

you could also use VS code extension for mongo, in this plugin you can look for documents and all db information

````
mongoDB for VS Code
connect to localhost with the following link: mongodb://localhost:27017
````

conect to mongo
````
mongosh "mongodb://localhost:27017"
````

configure your db in mongoose configuration
```
mongoose.connect('mongodb://localhost:27017/test')
```

for been able to acces to special or other routes you have to add the header

```
Authorization : Bearer ******* Token generated by jwt ****************
```
is important the space between Bearer and the Token