function validateForm(Input,emptyadvice,erroradvice,test){
    if (Input.value == ""){
        emptyadvice.style.display="block";
        Input.className="inputerror";
        emptyadvice.style.marginBottom="-1rem";
              if (erroradvice.style.display=="block")
              {erroradvice.style.display="none";}
    } 
        
        else if (Input.value != ""){
            emptyadvice.style.display="none";
            if (test == false){
                erroradvice.style.display="block";
                Input.className="inputerror";
                erroradvice.style.marginBottom="-1rem";
            } 
                else if (test ==true){
                    erroradvice.style.display="none";
                    Input.className="ok";
                }
        
        }
}

window.addEventListener("load",function(){

let claim=document.getElementsByTagName("button")[0];

claim.addEventListener("mouseover",function(){
    claim.style.backgroundColor="hsl(154, 81%, 57%)";
})

claim.addEventListener("mouseout",function(){
    claim.style.backgroundColor="hsl(154, 65%, 55%)";
})




    

claim.addEventListener("click",function(){

    let input=document.getElementsByTagName("input");


    for(let i=0;i<input.length;i++){

    //First Name
    validateForm(input[0],document.getElementById("advice1"),document.getElementById("error1"),/^[a-z]+$/gi.test(input[0].value));
        
    //Last Name
    validateForm(input[1],document.getElementById("advice2"),document.getElementById("error2"),/^[a-z]+$/gi.test(input[1].value));
           
    //Email
    validateForm(input[2],document.getElementById("advice3"),document.getElementById("error3"),/^.+\@.+\..+$/.test(input[2].value));
            
        

      //Password
      
     if (input[3].value == ""){
        document.getElementById("advice4").style.display="block";
        input[3].className="inputerror";
        document.getElementById("advice4").style.marginBottom="-1rem";
        
              if (document.getElementById("error4").style.display=="block")
              {document.getElementById("error4").style.display="none";}
    } 
        
      else if (input[3].value != ""){
           document.getElementById("advice4").style.display="none";
            let error4=document.getElementById("error4");
            
           if (/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(input[3].value) == true){
                error4.style.display="block";
                input[3].className="inputerror";
                error4.style.marginBottom="-1rem";
                error4.style.marginLeft="1rem";
                
                let pass=document.getElementsByClassName("form")[3];
                pass.style.alignItems="center";
            }   
                else if (/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/.test(input[3].value) == false){
                    error4.style.display="none";
                    input[3].className="ok";
                }
       
      }


    }

    })

    




    












})