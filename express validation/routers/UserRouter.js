import {UserController} from "../controllers/UserController"
const express = require('express')
const Router = express.Router();


Router.get('Data',UserController);

export default Router;