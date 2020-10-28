# YelpCamp
> A Node.js yelp-like web application project from the Udemy course - [The Web Developer Bootcamp by Colt Steele](https://www.udemy.com/the-web-developer-bootcamp/) that allows users to browse and share campgrounds.

## Live Demo
https://ycamp-demo.herokuapp.com/

## Features
- [User Authentication](#authentication)
- [Authorization](#authorization)
- [CRUD Operations](#crud-operations)
- [User Profile](#user-profile)
- [Fuzzy Searching](#fuzzy-searching)


## User Authentication
  * User login with username and password.

  * Admin sign-up with admin code that provides them with admin privileges.
  
  * Passwords are encrypted using [passportjs](http://www.passportjs.org/)
  
## Authorization
  * One cannot create, edit, or delete posts and comments without being authenticated first.

  * One cannot edit or delete posts and comments created by other users.

  * Admin can manage posts and comments created by all users.
  
## CRUD Operations
  * Create, edit and delete campground posts and comments
  
## User Profile

## Fuzzy Searching
