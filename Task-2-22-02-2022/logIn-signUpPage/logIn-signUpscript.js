

userDetails = [];

function goToLogin(){
    var loginMailId = document.login_form.email_id.value;
    var loginPassword = document.login_form.password.value;
    var userSession = false;

    for(var data=0;userDetails.length > 0;data++){
        if(userDetails[data].emailId == loginMailId){
            if(userDetails[data].password == loginPassword){
                userSession = true;
                alert("Logined successfully...");
            }else alert("Inalid Password");
        }else alert("No matching record found ...");
    }
    // alert("please register...");
    if(!userSession){
        alert("No matching record found ...go to signup");
    }
}



function onSubmit(){
    let userData = {};
    userData = {
        firstName: document.register_form.first_name.value,
        lastname: document.register_form.last_name.value,
        emailId: document.register_form.email_id.value,
        password: document.register_form.new_password.value
    };
    userDetails.push(userData);
    console.log(userDetails);
}


