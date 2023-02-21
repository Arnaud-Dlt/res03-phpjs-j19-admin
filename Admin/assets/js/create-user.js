function createUser(){
    fetch('https://arnauddeletre.sites.3wa.io/PHP/res03-php-j19-api/API/create-user')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}

export { createUser };