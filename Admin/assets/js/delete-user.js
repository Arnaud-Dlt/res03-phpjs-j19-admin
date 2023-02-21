function deleteUser(){
    fetch('https://arnauddeletre.sites.3wa.io/PHP/res03-php-j19-api/API/delete-user')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}