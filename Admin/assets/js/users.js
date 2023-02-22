function getAllUsers() 
{
    fetch('https://arnauddeletre.sites.3wa.io/PHP/res03-php-j19-api/API/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);


            for (let i = 0; i < data.length; i++) {
                let userId = data[i].id;
                let username = data[i].username;
                let userFirstName = data[i].firstName;
                let userLastName = data[i].lastName;
                let userEmail = data[i].email;

                let tbody = document.getElementById("users-tab");

                let tr = document.createElement("tr");
                let td1 = document.createElement("td");
                let td2 = document.createElement("td");
                let td3 = document.createElement("td");
                let td4 = document.createElement("td");
                let td5 = document.createElement("td");
                let td6 = document.createElement("td");
                
                let showBtn=document.createElement("button");
                let editBtn=document.createElement("button");
                let deleteBtn=document.createElement("button");

                td1.textContent = userId;
                td2.textContent = username;
                td3.textContent = userFirstName;
                td4.textContent = userLastName;
                td5.textContent = userEmail;
                
                td6.appendChild(showBtn);
                td6.appendChild(editBtn);
                td6.appendChild(deleteBtn);
                
                showBtn.setAttribute("user-id", userId);
                editBtn.setAttribute("user-id", userId);
                deleteBtn.setAttribute("user-id", userId);
                
                showBtn.textContent= "Voir le profil";
                editBtn.textContent= "Modifier";
                deleteBtn.textContent= "Supprimer";

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);

                tbody.appendChild(tr);
                
                showBtn.addEventListener("click", function(){
                    window.location.href=`https://arnauddeletre.sites.3wa.io/JS/res03-phpjs-j19-admin/Admin/user.html`;
                });
                editBtn.addEventListener("click", function(){
                    window.location.href=`https://arnauddeletre.sites.3wa.io/JS/res03-phpjs-j19-admin/Admin/update-user.html`;
                });

            }
        });
}

export { getAllUsers };