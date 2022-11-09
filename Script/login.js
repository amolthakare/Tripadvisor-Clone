var verify2 = JSON.parse(localStorage.getItem('verify'))
document.querySelector('.login').addEventListener('submit', formdata);
// console.log(verify2)
function formdata(event){
    console.log(verify2)
    event.preventDefault();
    var obj={
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    }
    var email1 = obj.email
    var password1 = obj.password

    var index = verify2.findIndex(elem => {
        return elem.email == obj.email && elem.password == obj.password
    })
    
    if (email1 == "" || password1 == "") {
        alert("Fill all Fields")
    } 
    else if (index >= 0) {
        alert("Login Successfull")
        obj.name = verify2[index].name
        window.location = "./index.html"
    }
    else {
        alert("login failed")
    }
}