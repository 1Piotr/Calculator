let userInp = [];
$(document).ready(function(){
    $(".num").click(function(){
        let ele = $(this).text();
        userInp.push((ele))
        $("#user").attr("placeholder", userInp.join(""))
      });
  });
$(document).ready(function(){
    $("#cancel").click(function(){
    $("#user").attr("placeholder", "") 
    userInp.length=0;     
      });
  });
$(document).ready(function(){
    $(".ops").click(function() {
      let ele =" "+$(this).text()+ " ";
       userInp.push(ele)
      $("#user").attr("placeholder", userInp.join(""))
      });
    });
function arrayA() {
  userInp =userInp.join("")
  userInp =userInp.split(" ")
}
// function culculating the result
  $(document).ready(function(){
    $("#equal").click(function(){
      arrayA()
    // first division or multiplication has to be conducted
      while (userInp.includes("*")) {
        var i = userInp.indexOf("*");
        var newNumber =parseFloat(userInp[i-1]) * parseFloat(userInp[i+1]);
        userInp[i-1] = newNumber;
        userInp.splice(i,2);
    }
      while (userInp.includes("/")){
        var i = userInp.indexOf("/");
        var newNumber =parseFloat(userInp[i-1]) / parseFloat(userInp[i+1]); 
        userInp[i-1] = newNumber;
        userInp.splice(i,2);
      }
      // then "-" and "+"
      while (userInp.includes("+" )){
        var i = userInp.indexOf("+");
        var newNumber =parseFloat(userInp[i-1]) + parseFloat(userInp[i+1]);
        userInp[i-1] = newNumber;
        userInp.splice(i,2);
    }
      while (userInp.includes("-")) {
        var i = userInp.indexOf("-");
        var newNumber =parseFloat(userInp[i-1]) - parseFloat(userInp[i+1]);
        userInp[i-1] = newNumber;
        userInp.splice(i,2);
    }
    // at the end we should stay with one element in the array
      $("#user").attr("placeholder", userInp[0]);      
      })})