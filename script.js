
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active-nav');
}

function sentmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "suneeshs793@gmail.com",
        Password : "suneesh2003",
        To : 'suneeshs793@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("sub").value,
        Body : "Name : " + document.getElementById("name").value + "<br>" + 
               "Number : " + document.getElementById("email").value + "<br>" + 
               "Message : " + document.getElementById("msg").value 
    }).then(
      message => alert("email sent")
    );
}