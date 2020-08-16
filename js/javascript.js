    function submitMessage(){
     var name=document.getElementById("name").value;
     var email=document.getElementById("email").value;
     var subject=document.getElementById("subject").value;
     var message=document.getElementById("message").value;
     if(name !== "" && email !== "" && subject !== "" && message !== ""){
        alert(name +" recieved");
     }  
    
    };