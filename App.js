//////////////////////////38 TO   42///////////////////

////////////////================= pdf 38-44=============///////////////////////// 
 ////// === FUNCTIONS, switch statements, while… do-while loops | JAVASCRIPT ====/////




/////////////////=========  QUESTION NO 1  ========///////////////////


  //function foo (a = 2,b ){
 //   return  a + b
 // }
 // document.write(foo (2,5))





////////////////=======   QUESTION NO 2  =========//////////////
//function leapyear(year)
//{
//return (year % 100 === 0)  ? (year % 400 === 0) : (year % 4 === 0);
///}

///console.log(leapyear(2016));
//console.log(leapyear(2000));
//console.log(leapyear(1700));
//console.log(leapyear(1800));
//console.log(leapyear(100));
//console.log( leapyear (2020));
//console.log( leapyear (2012));



//////////////////////========  QUESTION NO 4  =========//////////////////////
///var num = 88 ; 
//var num = 80;
//var num = 77;

 //function   PercentageFunction  (num){
 //return (num / 100)
// }
// console.log(  PercentageFunction(88,80,77 /100)  ) 

  //function SecondFunction(per){

 
 ///return ( 245*per)


  
 // }
 //console.log(  SecondFunction (245 ,0.88 )  )

  
 //function  mainFunction(){
   // return (245/3)
 //}
//console.log(mainFunction(245,3))


//////////////////////=========   QUESTION NO 5  ===========/////////////////////



//function  indexof (){
  //var str = "Hello world i am noor butt.";
 // var n = str.indexOf("n");
 // document.getElementById("blank").innerHTML = n;
//}



/////////////////////==========  Question no 6  ==========////////////////////////
  // var text =   " Pleases read this application and give me gratuity " ;
   //var count = 0 ; 
  // switch (text.lenght ){
  //  case 'A':
   // count++
  //  case  'a':
   //count++
   /// case 'e':
  // case 'i':
  //  case 'o':
  //  case 'u':

 
 //  console.log(1);
   // break;
  //  default:
   // console.log (0)
//}


/////////////////////=========  QUESTION NO  7 =========//////////////////////////

                          //convert to distance in meters//
//var city_km = prompt ("write your city km" , ' 1025km  distance of  karachi to lahore ') ;
//var km = 1025 ;
//var meters = 1000;

//function function1 (km,meter){
 // return  (1025 * 1000)
//}
//console.log (  function1   (1025 , 1000))


 
                             ///convert to distance in feet ///

//var km = 1025;
//var feet =  3281 ;

//function function2 (km,feet){
//return (1025 *3281)

   
//}
///console.log (function2 (1025 , 3281 ))



                              
                              /// convert to distance in inches  ///


   //var km = 1025 ;  
   //var inches =  3281;
  // function function3  (km,inches){
   // return (1025* 3281 )
 //  }
///console.log(function3(1025,3281)) 



                        /////  convert to distance in centimeters////

   //  var  km =  1025 ;
    // var centimeter = 100000 ; 


  //function function4 (){
  // return ( 1025 *100000  )

//}
///console.log (function4 (1025,100000))


                             ////////////   QUESTION NO   8    ///////////////


//var payRate =  12 ;
//var employeWorked = 42  ; 

//function   timeCalculate   (payRate , employeWorked){
//return (12 * 42)

//}
//console.log (  timeCalculate   ( 12,42 )  )   ///   output 504



//var regularPay = 504;
//var  payRate =  12 ; 
//var hour = 2;
///function overTimepay (){
 // return ( 504 + 504 * 12  * 2   )

//}
////console.log ( overTimepay ( 504,504 , 12 , 2))   // overtime pay emplyeed  12600


                               //////////// QUESTION NO  9 ///////////////
//var int = prompt (  "Please input amount for withdraw : "  ) // input value 2390

//var r = int / 100    // 100 notes 
//console .log (r  , "100 Rs. notes " )
//var b = int % 100
//console.log (b)

//var c = b / 50     // 50 notes 
//console.log ( c , "50 Rs. notes " )
//var d = b % 50
//console.log (d)


//var e = d / 10     // 10 notes 
//console.log( e, "10 Rs. notes")
//var f  = d % 10   
//console.log(f)









///////////////////43 to 48  //////////////////

// alert("Click on a link");

// function user(){
//     alert("Thanks for Purchasing a Phone from us");
// }


// function deleteRow(r) {
//   var i = r.parentNode.parentNode.rowIndex;
//   document.getElementById("myTable").deleteRow(i);
// }


// function myover(){
//   document.getElementById("pop").src = "./images/14.png";
// }

// function mymouse(){
// document.getElementById("pop").src = "./images/15.jpg"
// }

// var btnAdd = document.querySelector('#add');
// var btnsubtract = document.querySelector('#subtract');
// var input = document.querySelector('input');


// btnAdd.addEventListener('click',() =>{
//   input.value = parseInt(input.value) + 1;
// })


// btnsubtract.addEventListener('click',() =>{
//   input.value = parseInt(input.value) - 1;
// })


//////////////////////////49 to 52///////////////////////////

// var form = document.getElementById("name-form");
// form.onsubmit = function(e){
//   e.preventDefault();
//   var result = document.getElementById("result");
//   result.innerHTML = form.email.value;
//   form.reset();
// }


// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
	
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//  var new_name=document.getElementById("new_name").value;
//  var new_country=document.getElementById("new_country").value;
//  var new_age=document.getElementById("new_age").value;
	
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_name").value="";
//  document.getElementById("new_country").value="";
//  document.getElementById("new_age").value="";
// }


/////////// 53 to 57

//function showImage(e){
//console.log(e.src)
//var modalImage  = document.getElementById("modalImage")
//modalImage.src = e.src
///}



//////////////////////////////////////////////////Dom //////////////////////////////////////////////////////////


//// POINT NO 2 //////

//var type = document.getElementById("lastName")
//type.nodeType
//console.log(type)
//var child = document.getElementById("lastName")
//child.childNodes
 //var childNodes = child.innerHTML;
//console.log(childNodes)

                    //// POINT NO 3 //////

//var childUpdate = document.getElementById("lastName")
//childUpdate.childNodes
//var childNoes = childUpdate.innerHTML;
//console.log(childNoes)
                  //// POINT NO 4 //////
//var firstChildId = document.getElementById( "main-content" )
 //firstChildId.firstChild
//console.log(firstChildId)


//var lastChildId = document.getElementById( "main-content" )
// lastChildId.lastChild
//console.log(lastChildId)

                     //// POINT NO 5 //////
// var getSibling = document.getElementById("lastName").nextSibling      
//console.log(getSibling)


 //var getSiblingPre = document.getElementById("lastName").previousSibling      
///console.log(getSiblingPre)

                      //// POINT NO 6 //////

//var getParentNote = document.getElementById("email").parentNode
//console.log( getParentNote)

//var getNoteType = document.getElementById("email").nodeType
//console.log(getNoteType)



/////////  POINT NO 3 /////////
         //  var input = document.getElementById("first-name")
         //  input.value ="Alex"

                        
                   //////// point no 4 //////////           
               //   var input = document.getElementById( "last-name"  )
             //    input.value ="Bank"                   

                //   var input = document.getElementById("email")
               //  input.value =  "alexbank@example.com  "

               /// QUESTION NO 2 ///
                 //// POINT NO 1 //////

//var d = document.getElementById("form-content");
//d.nodeType
//console.log( d)


                 //// POINT NO 2 //////

//var type = document.getElementById("lastName")
//type.nodeType
//console.log(type)
//var child = document.getElementById("lastName")
//child.childNodes
 //var childNodes = child.innerHTML;
//console.log(childNodes)

                    //// POINT NO 3 //////

//var childUpdate = document.getElementById("lastName")
//childUpdate.childNodes
//var childNoes = childUpdate.innerHTML;
//console.log(childNoes)
                  //// POINT NO 4 //////
//var firstChildId = document.getElementById( "main-content" )
 //firstChildId.firstChild
//console.log(firstChildId)


//var lastChildId = document.getElementById( "main-content" )
// lastChildId.lastChild
//console.log(lastChildId)

                     //// POINT NO 5 //////
// var getSibling = document.getElementById("lastName").nextSibling      
//console.log(getSibling)


 //var getSiblingPre = document.getElementById("lastName").previousSibling      
///console.log(getSiblingPre)

                      //// POINT NO 6 //////

//var getParentNote = document.getElementById("email").parentNode
//console.log( getParentNote)

//var getNoteType = document.getElementById("email").nodeType
//console.log(getNoteType)
