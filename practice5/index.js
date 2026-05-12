let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter the Username:`);
    password = window.prompt(`Enter the Password:`);

    if(username === "myUsername" && password === "myPassword"){
        loggedIn = true;
        console.log("You are Logged In");
    }else{
        console.log("Invalid Username Or Password");
    }
}