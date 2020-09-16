var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var User = require("../models/user");
var middleware = require("../middleware");

// User profile Route
router.get("/:id", function(req, res) {
    User.findById(req.params.id, function(err, foundUser){
        if (err){
            req.flash("error", "Something went wrong.");
            return res.redirect("/");
        }
        Campground.find().where("author.id").equals(foundUser._id).exec(function(err, campgrounds){
            if (err){
                req.flash("error", "Something went wrong.");
                return res.redirect("/");
            }
            res.render("users/show", {user: foundUser, campgrounds: campgrounds});
        })
    })
})

// User profile EDIT Route

// User profile UPDATE Route

module.exports = router;