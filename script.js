
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');
let btn_home = document.querySelector('#hme');
let btn_about = document.querySelector('#abt');
let btn_project = document.querySelector('#projet');
let btn_contact = document.querySelector('#cotact');


btn_home.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active-nav');
    btn_home.classList.add('active');
    btn_about.classList.remove('active');
    btn_project.classList.remove('active');
    btn_contact.classList.remove('active');
}
btn_about.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active-nav');
    btn_about.classList.add('active');
    btn_home.classList.remove('active');
    btn_project.classList.remove('active');
    btn_contact.classList.remove('active');
}
btn_project.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active-nav');
    btn_project.classList.add('active');
    btn_home.classList.remove('active');
    btn_about.classList.remove('active');
    btn_contact.classList.remove('active');

}
btn_contact.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active-nav');
    btn_contact.classList.add('active');
    btn_home.classList.remove('active');
    btn_about.classList.remove('active');
    btn_project.classList.remove('active');

}
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