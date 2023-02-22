function createUser() 
{
    let user = {
        username: "Gaellan",
        firstName: "Mari",
        lastName: "Doucet",
        email: "mari.doucet@kornog.bzh"
    };

    // Je dois d'abord instancier un FormData qui est la représentation en JavaScript d'un formulaire
    let formData = new FormData();
    formData.append('username', user.username);
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);

    const options = {
        method: 'POST',
        body: formData
    };

    fetch('https://arnauddeletre.sites.3wa.io/JS/res03-phpjs-j19-admin/Admin/create-user', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}
export { createUser };