# ECommerce-BackEnd

## Description
This is the back end for an e-commerce site. It allows the user to view their inventory using specific API routes. It will show all Categories, Products and Tags and will allow the user to view all at a time or just one at a time. It allows the user to add a Category, a Product or a Tag. It also allows the user to update a Category, Product or Tag. Finally, it allows the user to delete a Category, Product or Tag. 

## Walk-Through Video
[Video](https://www.loom.com/share/df2e5946ebff4038bd3b229e79a5280c?sid=d3402138-8cc1-457a-88de-87a4cdfa4634)


## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Links
GitHub Repo: https://github.com/catdelaney/ECommerce-BackEnd