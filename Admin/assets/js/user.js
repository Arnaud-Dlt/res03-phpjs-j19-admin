function userById(){
    fetch('https://arnauddeletre.sites.3wa.io/PHP/res03-php-j19-api/API/user/1')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
    
}

export {userById};