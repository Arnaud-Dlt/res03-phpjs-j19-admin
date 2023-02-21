function getAll(){
    fetch('https://arnauddeletre.sites.3wa.io/PHP/res03-php-j19-api/API/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    

    
}

export {getAll};

// <button><a href="user.html">See more</a></button>
// <button><a href="update-user.html">Update</a></button>
// <button>Delete</button>