function userById(){
    fetch('https://arnauddeletre.sites.3wa.io/PHP/res03-php-j19-api/API/user/${id}')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            
            let username = data.username;
            let userFirstName = data.firstName;
            let userLastName = data.lastName;
            let userEmail = data.email;
            
            let article=document.getElementById("user-page");
            
            let h1 = document.createElement("h1");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
            
            article.appendChild("h1");
            article.appendChild("h2");
            article.appendChild("p");
            
            h1.textContent = username;
            h2.textContent = userFirstName, userLastName;
            p.textContent = userEmail;
            
            
            
            
        });
    
}

export {userById};