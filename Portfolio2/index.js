import MongoClient from 'mongodb';
import chalk from 'chalk';

const URL = "mongodb+srv://kcarley:0i44ucYODlBDNG2e@cluster0.oewwc.mongodb.net/test";

MongoClient.connect(URL, { useUnifiedTopology: true})
.then(connection => {
    let database = connection.db("sample_airbnb");

    let collection = database.collection("listingsAndReviews");

    let cursor = collection.find({minimum_nights: {$eq: "2"}, beds: {$gte: 2}});

    cursor.forEach(document => {
        console.log(chalk.red(document.name));
    }, () => {
        connection.close();
    })

 })
 .catch(error => {
     console.log("Error: " + error);
 });
