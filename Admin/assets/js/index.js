import { getAllUsers } from './users.js';
import { userById } from './user.js';
import { createUser } from './user.js';

window.addEventListener("DOMContentLoaded", function(){
    
    if(window.location.href === "https://arnauddeletre.sites.3wa.io/JS/res03-phpjs-j19-admin/Admin/users.html"){
        getAllUsers();
    }
    
    else if(window.location.href === "https://arnauddeletre.sites.3wa.io/JS/res03-phpjs-j19-admin/Admin/user.html"){
        userById();
    }
    
    else if(window.location.href === "https://arnauddeletre.sites.3wa.io/JS/res03-phpjs-j19-admin/Admin/update-user.html"){
        
    }
    
    else if(window.location.href === "https://arnauddeletre.sites.3wa.io/JS/res03-phpjs-j19-admin/Admin/create-user.html"){
        createUser()
    }
})