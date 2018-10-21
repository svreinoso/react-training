
# Example Node (Express + Mongoose) codebase containing real world examples (CRUD, auth, advanced patterns, etc,API spec).

# Getting started

To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- Install MongoDB Community Edition ([instructions](https://docs.mongodb.com/manual/installation/#tutorials)) and run it by executing `mongod`
- `npm run start` to start the local server

#To import Data: 
mongoimport --jsonArray -d react-training -c movies --file ~/Downloads/movies.json --type json