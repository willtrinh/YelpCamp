# YelpCamp
> A Node.js yelp-like web application project from the Udemy course - [The Web Developer Bootcamp by Colt Steele](https://www.udemy.com/the-web-developer-bootcamp/) that allows users to browse and share campgrounds.
> <img src="/img/welcome.png?raw=true">
## Live Demo
See a live demo of the web app: https://ycamp-demo.herokuapp.com/
<img src="/img/index.png?raw=true">
## Features
- [User Authentication](#user-authentication)
- [Authorization](#authorization)
- [Basic Functionalities](#basic-functionalities)
- [User Profile](#user-profile)
- [Fuzzy Searching](#fuzzy-searching)
- [Pagination](#pagination)
- [Google Map Location](#google-map-location)
- [Extra Features](#extra-features)

## User Authentication
* User login page with username and password. <img src="/img/login.png?raw=true">
* User sign-up page. <img src="/img/register.png?raw=true">
* Admin sign-up with admin code that provides them with admin privileges.
* Passwords are encrypted using [passportjs](http://www.passportjs.org/).
  
## Authorization
* Users are required to sign-up/login first before they can create, edit, or delete posts and comments.
* A user cannot edit or delete posts and comments created by other users.
* Only an admin can manage posts and comments created by all users.

## Basic Functionalities
* CRUD operations: create, edit and delete campground posts and comments.
* Data validation
* Upload & edit campground's photo.
* Flash messages (error and success) that give the user more information when interacting with the website.
* Search existing campgrounds.

## User Profile
* Each user has their own profile page that displays their profile image, username, first & last name, email, and the list of campgrounds they have posted on the website.<img src="/img/user.png?raw=true">

## Fuzzy Searching
* Approximate string matching that allows user to search for existing campgrounds even when they do not know the full name of the campground. <img src="/img/search-success.png?raw=true">
* If no result is found, it will return an error message that notify the user to search again. <img src="/img/search-fail.png?raw=true">

## Pagination
* Divide campgrounds into a maximum of six campgrounds per page to avoid clustering, page scrolling, and improve visual of the website. 
* <img src="/img/pagination.png?raw=true">
* If user is on first page, pagination to the left is disabled. Vice versa, if user is on the last page, pagination to the right is disabled.
* User can jump to first and last page using the "First" and "Last" button on the pagination.
* User can go one page left or right using the "left" and "right" arrow on the pagination.

## Google Map Location
* Using Google Map API and Geocoding API to display campground location.

## Extra Features
* Added campground and comments posted date using [moment.js](https://momentjs.com/). <img src="/img/momentjs.png?raw=true">
* Added the "like" button and display number of likes a campground has and the list of users who liked the campground. <img src="/img/likes.png?raw=true">
* Restricted campground photo uploaded to only take images from [Unsplash](https://unsplash.com/) to avoid copyright infringement as well as NSFW images being uploaded to the website.


