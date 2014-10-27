var errors=0;
var str;

window.onload = function(){loadCaptcha()}

function loadCaptcha(event)
{	
	str=Math.random().toString(36).substr(2,5)
	document.getElementById("captcha").value=str;	
	event.preventDefault();
}

function validateCaptcha()
{
  if(document.getElementById("scode").value.toString() != str)
   	document.getElementById("vcode").innerHTML="Wrong Security code";
   else
   	document.getElementById("vcode").innerHTML=""; 
}

function boo()
{
	alert('doo');
}

function vpwd()
{
	var p= document.getElementById('pwd').value;
	var p2= document.getElementById('rpwd').value;
	
	if(p == p2 && p!="")
	{
		document.getElementById("vpwd").style.color="green"
		document.getElementById("vpwd").innerHTML= "&#10004";
		errors--;
	}else
	{
		document.getElementById("vpwd").style.color="red"
		document.getElementById("vpwd").innerHTML= "Invalid Passwords!";	
		errors++;	
	}
}

function vStrength()
{
	var p= document.getElementById('pwd').value;
	var strength=1;
	document.getElementById("pwd_a").style.background="white";
	document.getElementById("pwd_b").style.background="white";
	document.getElementById("pwd_c").style.background="white";
	document.getElementById("pwd_d").style.background="white";
	
	document.getElementById("vpwd").innerHTML="";
	document.getElementById("rpwd").value="";
	document.getElementById("vcode").value="";

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
//			case 1: document.getElementById("pwd_a").style.background="red";break;
			case 2: document.getElementById("pwd_a").style.background="red";
					document.getElementById("pwd_b").style.background="red";break;
			case 3: document.getElementById("pwd_a").style.background="orange";
					document.getElementById("pwd_b").style.background="orange";
					document.getElementById("pwd_c").style.background="orange";break;
			case 4: document.getElementById("pwd_a").style.background="green";
					document.getElementById("pwd_b").style.background="green";
					document.getElementById("pwd_c").style.background="green";
					document.getElementById("pwd_d").style.background="green";break;

		};
	}
	else
	{
		pwdrules();
	}


}

function isValid(str)
{
	var p=str.toString();
  if(p.length >= 8 && Boolean(p.match(/[a-z]/g)) && Boolean(p.match(/[A-Z]/g)) )
  	{
  		document.getElementById("pwderror").style.color="green";
  		document.getElementById("pwderror").innerHTML="&#10004";
  		return true;
 	}
  else
  	{
  		document.getElementById("pwderror").style.color="red";
  		document.getElementById("pwderror").innerHTML="Invalid";
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
    6) special characters: * @ - _ # !"

	alert(rules);
}

function validateName()
{
	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var name=fname+lname;

	if(name.match(/[^a-zA-Z]/g) || fname== "" || lname=="")
	{	document.getElementById("vname").style.color="red";
		document.getElementById("vname").innerHTML="Invalid Name";	
	}
}

function validateGender()
{
	if(document.getElementById("gender").value == "- Select One -")
	{	document.getElementById("vgender").style.color="red";
		document.getElementById("vgender").innerHTML="Please select your gender!";	
	}
}

function validateDOB()
{
	var d=document.getElementById("day").value;
	var m=document.getElementById("month").value;
	var y=document.getElementById("year").value;
	document.getElementById("vdob").style.color="red";

	if(m == "- Select Month -" || d == "" || y.length!=4 || d.match(/\D/g) || y.match(/\D/g))
		document.getElementById("vdob").innerHTML="Invalid Date!";	
	
	if(y<1900 || y>=new Date().getFullYear())
		document.getElementById("vdob").innerHTML="Invalid Date!";	
	
	if((y%4==0 && y%100==0 )|| y%400==0)
	{	if(m=="Febuary" && d>29 || d<1)
			document.getElementById("vdob").innerHTML="Invalid Date!";
	}else
	{
		if(m=="Febuary" && d>28 || d<1)
			document.getElementById("vdob").innerHTML="Invalid Date!";
	}

	var mth=["January","March","May","July","August","October","December"]
	if(mth.indexOf(m) !=-1 && d>31 || d<1)
			document.getElementById("vdob").innerHTML="Invalid Date!";

	var mth=["April","June","September","November"];
	if(mth.indexOf(m) !=-1 && d>30 || d<1)
			document.getElementById("vdob").innerHTML="Invalid Date!";	
}

function validateCountry()
{
	if(document.getElementById("location").value == "- Select Country -")
	{	document.getElementById("vlocation").style.color="red";
		document.getElementById("vlocation").innerHTML="Please select your country!";	
	}

}

function validatePostal()
{
	var pc=document.getElementById("postal").value;
	if(isNaN(pc)||pc=="" || pc.length<6)
	{	document.getElementById("vpostal").style.color="red";
		document.getElementById("vpostal").innerHTML="Invalid!";		
	}	
}

function validateEmail()
{
    var em=document.getElementById("email").value;     

	if(Boolean(!em.match(/^\w{2,}.?\w{1,}\w$/g)))
    		document.getElementById("vemail").innerHTML="Invalid ID!";	

     var alte=document.getElementById("altemail").value;


    if( Boolean(! alte.match(/\w{2,}.?\w{2,}@\w{3,}.\w{2,3}$/g)) )
    		document.getElementById("valtemail").innerHTML="Invalid Email!";	


}


function validate()
{
	document.getElementById("vdob").innerHTML="";
	document.getElementById("vname").innerHTML="";
	document.getElementById("vgender").innerHTML="";
	document.getElementById("vlocation").innerHTML="";
	document.getElementById("vpostal").innerHTML="";
	document.getElementById("vterms").innerHTML="";	
	document.getElementById("vemail").innerHTML="";
	document.getElementById("valtemail").innerHTML="";

	validateCaptcha();

	validateName();

	validateGender();

	validateDOB();

	validateCountry();

	validatePostal();

	vpwd();

	if(document.getElementById('terms').checked==false)
        document.getElementById("vterms").innerHTML="You must agree to our Terms of Service.!";
         
    validateEmail();
}

/*

*/