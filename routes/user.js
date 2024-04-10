const express = require("express");

const router = express.Router();

const {handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handledeleteUserById,
    handleCreateNewUser} = require("../controllers/user")

    
    // REST APIs
    router.route("/:id")
    /**
     * @swagger
     * /api/users/{id}:
     *  get:
     *     summery: Get user by Id.
     *     tags: [Fetch]
     *     description: Retrieve a user by id.
     *     parameters:
     *          - id: id
     *            in: path
     *            description: the id of the user.
     *            require: true
     *            schema:
     *              type: string
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
    .get(handleGetUserById)
    /**
     * @swagger
     * /api/users/{id}:
     *  patch:
     *      summery: Update user by Id.
     *      tags: [Update]
     *      description: Update a user details by id.
     *      parameters:
     *          - id: id
     *            in: path
     *            description: the id of the user.
     *            require: true
     *            schema:
     *              type: string
     *      requestBody:
     *          require: true
     *          content: 
     *              application/json:
     *              schema:
     *                  type: object
     *                  properties:
     *                      first_name:
     *                              type: string
     *                      last_name:
     *                              type: string
     *                      email:
     *                              type: string
     *                      job_title:
     *                              type: string
     *                      gender:
     *                             type: string  
     *                  example:
     *                      first_name: Abhishek
     *                      last_name: Kumar Mourya
     *                      email: abhishek.mourya@gmail.com
     *                      job_title: Software dev
     *                      gender: Male
     *      responses:
     *      200:
     *        description: Updated Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     *     
     * */
    .patch(handleUpdateUserById)
    /**
     * @swagger
     * /api/users/{id}:
     *  delete:
     *      summery: Delete user by Id.
     *      tags: [Delete]
     *      description: Retrieve a user by id.
     *      parameters:
     *          - id: id
     *            in: path
     *            description: the id of the user.
     *            require: true
     *            schema:
     *              type: string
     *      responses:
     *          200:
     *              description: Fetched Successfully
     *          400:
     *              description: Bad Request
     *          404:
     *              description: Not Found
     *          500:
     *              description: Server Error
     */
    .delete(handledeleteUserById)
    
    router.route("/")
    /**
     * @swagger
     * /api/users:
     *  get:
     *      summery: Get a list of users.
     *      tags: [Fetch]
     *      description: Retrieve a list of Users.
     *      responses:
     *         200:
     *            description: A List of Users. 
     */
    .get(handleGetAllUsers)
    /**
     * @swagger
     * /api/users:
     *  post:
     *      summery: Create a new user.
     *      tags: [Create]
     *      description: Enter required all perameters to add new user in database.
     *      requestBody:
     *          require: true
     *          content: 
     *              application/json:
     *              schema:
     *                  type: object
     *                  properties:
     *                      first_name:
     *                              type: string
     *                      last_name:
     *                              type: string
     *                      email:
     *                              type: string
     *                      job_title:
     *                              type: string
     *                      gender:
     *                             type: string  
     *                  example:
     *                      first_name: Abhishek
     *                      last_name: Kumar Mourya
     *                      email: abhishek.mourya@gmail.com
     *                      job_title: Software dev
     *                      gender: Male
     *      responses:
     *          200:
     *              description: Successfully created a new User.
     *          400:
     *              description: All fields are required.
     *          500:
     *              description: Some Server Error.
     */
    .post(handleCreateNewUser);


    module.exports = router;