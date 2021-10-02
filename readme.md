## command for docker with mongodb

please change volume dir for local testing

```
docker run -d --name blocks -p 27017:27017 -v /Users/yonnyclinton/Desktop/mongo:/data/db  mongo
```

this mongo express doesn't work for me ;(.
````
docker run --name mongo-express -p 8085:8081 mongo-express
````


install a client for Mongo

````
brew install mongosh
````

you could also use VS code extension for mongo, in this plugin you can look for documents and all db information

````
mongoDB for VS Code
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
is important the space between Beared and the Token