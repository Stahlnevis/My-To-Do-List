// AND
//const password = prompt("enter your password");
 //if(password.length >= 6 && password.indexOf(' ') === -1){
   // console.log("valid password")
 //}else {
   // console.log("incorrect format for password")
 //}



 //OR
// const age = 10;
 //if (age <= 5 || age >=66){
   //   console.log("FREE");
   //}
    //else if (age <= 10) {
      // console.log("$10");
   //}   
    //else if (age <= 65) {
      // console.log("$20");
   //}


   //const age = prompt("Enter your age:");
   //if (age >= 0 && age < 5 || age >=65){
    //console.log("free");
   //}
   //else if (age >= 5 && age < 10){
    //console.log("$10");
   //}
   //else if (age >=10 && age < 65){
    //console.log("$20");
   //}
   //else{
    //console.log("invalid age");
  // }


//NOT 
//let firstName = prompt("enter your first name");
//if (!firstName) {
  //firstName = prompt("try again")
//}


//const age = 9;
//if (!(age >= 0 && age < 5 || age >=65)) {
  //console.log("you are not a baby or a senior")
//}

 //switch statement
   // without using switch statement
// const day = 7;
 //if (day === 1){
  //console.log("monday")
 //}
//else if (day === 2){
  //console.log("tuesday")
//}
//else if (day === 3){
  //console.log("wednesday")
//}
//else if (day === 4){
  //console.log("thursday")
//}
//else if (day === 5){
  //console.log("friday")
//}
//else{
  //console.log("i dont know that")
//}

//using switch statement
const day = 6;
switch (day) {
  case 1:
      console.log("Monday");
      break;
  case 2:
      console.log("Tuesday");
      break;
  case 3:
      console.log("Wednesday");
      break;
  case 4:
    console.log("Thursday");
    break
  case 5:
    console.log("Friday");
    break;
  case 6: 
  case 7:
    console.log("Weekend");
    break;
    default:
        console.log("I don't know that!");
}