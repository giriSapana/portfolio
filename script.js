
    var typed = new Typed('#typed', {
      strings: ['Suresh', 'a  web developer','singer',],
      typeSpeed: 50,
      loop:true,
    });

  // testing code1
  // document.getElementById("testing1").style.color="blue"
  // testing code2
  
  //  var test1=document.getElementById("testing1");
  //  test1.style.color="red";
  // console.log(test1);

  document.getElementById("backBtn").addEventListener("click",function(){
  // console.log("Clicked");
  // document.getElementById("s").style.color="green";
  document.querySelector(".feedback").scrollBy({
    left:-100,
    behavior:"smooth"
  })
  })
  document.getElementById("endBtn").addEventListener("click",function(){
    // console.log("Clicked");
    // document.getElementById("s").style.color="green";
    document.querySelector(".feedback").scrollBy({
      left:100,
      behavior:"smooth"
    })
    })

    
    // form validation start
//  function validateForm(){
//   var name=document.getElementById("name").value;
//   if(name.length==0)
//   {
//     document.getElementById("name-error").innerHTML ="Name is Required*";
//     return false;
//   }

// }
function validateForm(){
  var name=document.getElementById("name").value;
  var password1=document.getElementById("password1").value;
  var password2=document.getElementById("password2").value;
  if(name.length==0)
  {
    document.getElementById("name-error").innerHTML ="Name is Required*";
    return false;
  }
  else{
    document.getElementById("name-error").innerHTML ="";

  }
  if (password1.length==0){
    document.getElementById("password1-error").innerHTML="Password is required*";
    return false;
  }
  else{
    document.getElementById("password1-error").innerHTML ="";

  }
  if(password1.length<5)
  {
    document.getElementById("password1-error").innerHTML="Password must be more than 5 character*";
    return false;
  }
  else{
    document.getElementById("password1-error").innerHTML ="";

  }
  if (password2.length==0){
    document.getElementById("password2-error").innerHTML="Password is required*";
    return false;
  }
  else{
    document.getElementById("password2-error").innerHTML ="";

  }
  if(password1 != password2)
  {
    document.getElementById("password2-error").innerHTML="Password doesnot match"
    return false;
  }
  else{
    document.getElementById("password2-error").innerHTML ="";

  }
}

    // form validation end
    