// Validating-the-signup-Form
let signup=document.getElementById("Signup")
signup.addEventListener("submit",function(e){
    e.preventDefault();
    let username=document.getElementById("username").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let cpassword=document.getElementById("cpassword").value;
    let usercheck=/^[A-Za-z.]{3,15}$/;
    let emailcheck=/^([A-Za-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    let passwordcheck=/^([A-Za-z0-9@*#]{8,15})$/;
    if(usercheck.test(username)){
        document.getElementById("usernameerror").innerHTML=" ";
    }
    else{
        document.getElementById("usernameerror").innerHTML="**Invalid Username";
        return false;
    }
    if(emailcheck.test(email)){
        document.getElementById("emailerror").innerHTML=" ";
    }
    else{
        document.getElementById("emailerror").innerHTML="**Invalid Email";
        return false;
    }
    if(passwordcheck.test(password)){
        document.getElementById("passworderror").innerHTML=" ";
    }
    else{
        document.getElementById("passworderror").innerHTML="**Invalid Password";
        return false;
    }
    if(cpassword.match(password)){
        document.getElementById("cpassworderror").innerHTML=" ";
    }
    else{
        document.getElementById("cpassworderror").innerHTML="**Password Not Matched";
        return false;
    }
    alert("Signup Successfull");
    window.location.href="Login.html";
})