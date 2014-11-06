var main = {}

main.output=(function(){

var errors=0;
var str;

$(document).ready(function(){
	loadCaptcha();

});


function loadCaptcha(event)
{	
	
	str=Math.random().toString(36).substr(2,5)
	
	$("#captcha").val(str);

	if(event)
		event.preventDefault();
	
//	alert("load captcha")
}

function validateCaptcha()
{
  if($("#scode").val()!=str)
   	$("#vcode").text("Wrong Security code")
   else
   	$("#vcode").text("")
}



function vpwd()
{
	var p= $("#pwd").val();
	var p2= $("#rpwd").val();
	
	if(p == p2 && p!="")
	{
		$("#vpwd").css("color","green");
		$("#vpwd").text("valid!");
	}else
	{
		$("#vpwd").css("color","red");
		$("#vpwd").text("Invalid Passwords!");			
		//errors++;	
	}
	
//	alert("vpwd");
}

function vStrength()
{
	var p= $("#pwd").val()
	var strength=1;
	$("#pwd_a").css("background-color","white")
	$("#pwd_b").css("background-color","white")
	$("#pwd_c").css("background-color","white")
	$("#pwd_d").css("background-color","white")
	
	$("#vpwd").text("");
	$("#rpwd").val("");
	$("#vcode").text("");

	if(isValid(p))
	{

		if(p.match(/[A-Z]/g).length)
			strength++;
		if(p.match(/[!|@|#|-|_|*]/g))
			strength++;
		if(p.match(/[0-9]/g))
			strength++;

		switch(strength)
		{
			case 1: $("#pwd_a").css("background","red");break;
			case 2: $("#pwd_a").css("background","red");
					$("#pwd_b").css("background","red");break;
			case 3: $("#pwd_a").css("background","orange");
					$("#pwd_b").css("background","orange");
					$("#pwd_c").css("background","orange");break;
			case 4: $("#pwd_a").css("background","green");
					$("#pwd_b").css("background","green");
					$("#pwd_c").css("background","green");
					$("#pwd_d").css("background","green");break;
		}
	}

	
//	alert("hi")
}

function isValid(str)
{
	var p=str.toString();
  if(p.length >= 8 && Boolean(p.match(/[a-z]/g)) && Boolean(p.match(/[A-Z]/g)) )
  	{
  		$("#pwderror").css("color","green");
  		$("#pwderror").text("valid");
  		return true;
 	}
  else
  	{
  		$("#pwderror").css("color","red");
  		$("#pwderror").text("Invalid");
  		return false;
  	}
}



function pwdrules()
{
	var rules="Your password should:\n\
    1) start with a character\n\
    2) contain a minimum of 8 characters\n\
    3) contain atleast 1 uppercase character\n\
    4) contain atleast 1 lowercase character\n\n\
It may optionally contain:\n\
    5) digits and/or\n\
    6) special characters: * @ - _ # !";

	alert(rules);
	
//	alert("hi");
}

function validateName()
{
	var fname=$("#fname").val();
	var lname=$("#lname").val();
	var name=fname+lname;


	if(name.match(/[^a-zA-Z]/g) || fname== "" || lname=="")
	{	$("#vname").css("color","red");
  		$("#vname").text("Invalid Name");
	}
}

function validateGender()
{
	if($("#gender").val() == "- Select One -")
	{	
		$("#vgender").css("color","red");
  		$("#vgender").text("Please select your gender!");
	}
}

function validateDOB()
{
	var d=$("#day").val(); //document.getElementById("day").value;
	var m=$("#month").val();//document.getElementById("month").value;
	var y=$("#year").val();//document.getElementById("year").value;
	$("#vdob").css("color","red");
	//document.getElementById("vdob").style.color="red";

	if(m == "- Select Month -" || d == "" || y.length!=4 || d.match(/\D/g) || y.match(/\D/g))
		$("#vdob").text("Invalid Date!");

	if(y<1900 || y>=new Date().getFullYear())
		$("#vdob").text("Invalid Date!");	
	
	if((y%4==0 && y%100==0 )|| y%400==0)
	{	if(m=="Febuary" && d>29 || d<1)
			$("#vdob").text("Invalid Date!");
	}else
	{
		if(m=="Febuary" && d>28 || d<1)
			$("#vdob").text("Invalid Date!");
	}

	var mth=["January","March","May","July","August","October","December"]
	if(mth.indexOf(m) !=-1 && d>31 || d<1)
			$("#vdob").text("Invalid Date!");

	var mth=["April","June","September","November"];
	if(mth.indexOf(m) !=-1 && d>30 || d<1)
			$("#vdob").text("Invalid Date!");	
}


function validateCountry()
{
	if($("#vlocation").val() == "- Select Country -")
	{	$("#vlocation").css("color","red");
		$("#vlocation").text("Please select your country!")	
	}

}

function validatePostal()
{
	var pc = $("#postal").val()
	if( isNaN(pc) || pc == "" || pc.length < 6)
	{	$("#vpostal").css("color","red");
		$("#vpostal").text("Invalid!")			
	}	
}

function validateEmail()
{
    var em=$("#email").val()  

	if(Boolean(!em.match(/^\w{2,}.?\w{1,}\w$/g)))
    		$("#vemail").text("Invalid ID!")	

     var alte=$("#altemail").val()//document.getElementById("altemail").value;


    if( Boolean(! alte.match(/\w{2,}.?\w{2,}@\w{3,}.\w{2,3}$/g)) )
    		$("#valtemail").text("Invalid Email!");//document.getElementById("valtemail").innerHTML="Invalid Email!";	


}


function validate()
{

	$("#vdob").text("")
	$("#vname").text("")
	$("#vgender").text("")
	$("#vlocation").text("")
	$("#vpostal").text("")
	$("#vterms").text("")
	$("#vemail").text("")
	$("#valtemail").text("")

	

	validateName();

	validateGender();

	validateDOB();

	validateCountry();

	validatePostal();

	vpwd();

	validateCaptcha();

    
    if($("#terms").prop("checked") == false)
        $("#vterms").text("You must agree to our Terms of Service.!")
         
    validateEmail();
    
 //   alert("validate");
}

return{
	vStrength:vStrength,
	pwdrules:pwdrules,
	vpwd:vpwd,
	loadCaptcha:loadCaptcha,
	validate:validate
};
}());