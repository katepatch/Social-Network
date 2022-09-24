# Social Network

NoSQL API Project

 Social network users can share thoughts, create friends lists, and react to friend's thoughts with this API project.

## Table of Contents

[User Story](#user-story)</br>
[Project Criteria](#project-criteria)</br>
[Installation](#installation)</br>
[Preview](#preview)</br>
[Questions](#questions)

## User Story

AS A social media startup</br>
I WANT an API for my social network that uses a NoSQL database</br>
SO THAT my website can handle large amounts of unstructured data</br>

## Project Criteria

GIVEN a social network API</br>
WHEN I enter the command to invoke the application</br>
THEN my server is started and the Mongoose models are synced to the MongoDB database</br>
WHEN I open API GET routes in Insomnia for users and thoughts</br>
THEN the data for each of these routes is displayed in a formatted JSON</br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia</br>
THEN I am able to successfully create, update, and delete users and thoughts in my database</br>
WHEN I test API POST and DELETE routes in Insomnia</br>
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Installation

Start by cloning this repository</br>
Run `npm i` to download the packages for Express.js, Mongoose, and Moment

## Preview

Please watch the following walkthroughs to see all routes tested</br>
Video walkthrough [part 1](https://watch.screencastify.com/v/fsMt7i3dMfpHtwSwvFZ8)</br>
Video walkthrough [part 2](https://watch.screencastify.com/v/m7kH4ibCLtMhGIYssHBv)</br>

Users API routes
![screenshot](./assets/insomniaUsers.png)</br>
GET all & single users, PUT update users, POST create users, DEL delete users

Friends API routes
![screenshot](./assets/friends-api.png)</br>
POST add friend, DEL remove friend

Thoughts API Routes
![screenshot](./assets/insomniaThoughts.png)</br>
GET all & single thoughts, ,PUT update thought, POST create thought, DEL delete thought

Reactions API Routes
![screenshot](./assets/insomniaReactions.png)</br>
POST add reaction, DEL remove reaction

MongoDB Users
![screenshot](./assets/mongoDBusers.png)

MongoDB Thoughts
![screenshot](./assets/mongoDBthougths.png)

## Questions

If you have questions regarding this project or others you can reach me by:</br>
Email: kate.epatch@gmail.com</br>
Github: [katepatch](https://github.com/katepatch)
