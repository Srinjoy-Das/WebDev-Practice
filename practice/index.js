let username;
document.getElementById("mysubmit").onclick = function(){
    username = document.getElementById("MyText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}