// // AsideNavbar
// const nav=document.querySelector(".nav"),
// navilst=nav.querySelectorAll("li"),
// totalNavList=navlist.length;


// for(let i=0; i<totalNavList; i++){
//     const a=navList[i].querySelector("a");
//     a.addEventListener("click",function(){
// console.log(this);
//     })
// }

// / $(document).ready(function(){

//     // });
    
    function contact(form){
    var name = document.forms["form-item col-6"]["name"].value;
    var email = document.forms["form-item col-6"]["email"].value;
    var message = document.forms["form-item col-12"]["Your Message"].value;
    alert("Hello! " + name + "," + " We have received your message. Thank you for reaching out to us. ");
    };