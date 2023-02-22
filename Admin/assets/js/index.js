import { getAllUsers } from './users.js';
import { userById } from './user.js';


window.addEventListener("DOMContentLoaded", function(){
    getAllUsers();
    userById();
})