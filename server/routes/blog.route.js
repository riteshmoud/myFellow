const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth.controller");
const { getUserById } = require("../controllers/user.controller");
const { createBlog, allblogs, upload, getBlogById, updateBlog, deleteBlog, getBlog } = require("../controllers/blog.controller");
const router = express.Router();

// param
router.param("userId", getUserById);
router.param("blogId", getBlogById);

// create blog
router.post("/create/blog/:userId", isSignedIn, isAuthenticated, upload.single("picture"), createBlog);

//get a particular blog
router.get("/blogs/:blogId", isSignedIn, getBlog);


// updtae blog
router.put("/update/blog/:userId/:blogId", isSignedIn, isAuthenticated, updateBlog);

// delete blog
router.delete("/delete/blog/:userId/:blogId",isSignedIn, isAuthenticated, deleteBlog);

// all blogs
router.get("/blogs", isSignedIn, allblogs);

module.exports = router;