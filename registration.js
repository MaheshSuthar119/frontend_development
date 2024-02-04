//usename validation
function Firstname(){
    var First = document.getElementById("first-name").value;
    var Last = document.getElementById("last-name").value;
    var Emails = document.getElementById("email").value;
    var passwords = document.getElementById("new-password").value;
    var Pic = document.getElementById("profile-picture").value;
    var Ages = document.getElementById("age").value;
    if(First==""){
        document.getElementById('first-name').innerHTML = "Please fill the username";
        return false;
    }
    if(First.length <= 2 || First.length >= 20){
        document.getElementById('first-name').innerHTML = "name length must be between 2 and 20";
        return false;
    }

    if(Last==""){
        document.getElementById('last-name').innerHTML = "Please fill the username";
        return false;
    }
    if(Last.length <= 2 || Last.length >= 20){
        document.getElementById('first-name').innerHTML = "name length must be between 2 and 20";
        return false;
    }

    if(Emails==""){
        document.getElementById('email').innerHTML = "Please fill the username";
        return false;
    }

    if(passwords==""){
        document.getElementById('new-password').innerHTML = "Please fill the username";
        return false;
    }
    if(password.length <= 8 || Last.length > 16){
        document.getElementById('first-name').innerHTML = "name length must be between 2 and 20";
        return false;
    }

    if(Pic==""){
        document.getElementById('profile-picture').innerHTML = "Please fill the username";
        return false;
    }

    if(Ages==""){
        document.getElementById('age').innerHTML = "Please fill the username";
        return false;
    }

}