var errors=0;

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
		document.getElementById("vpwd").innerHTML= "Invalid! Passwords doesnt match";	
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
  if(p.length > 8 && Boolean(p.match(/[a-z]/g)) && Boolean(p.match(/[A-Z]/g)) )
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


function validate()
{
	var fname=document.getElementById("fname").value;
	var lname=document.getElementById("lname").value;
	var name=fname+lname;
	document.getElementById("vdob").innerHTML="";
	document.getElementById("vname").innerHTML="";
	document.getElementById("vgender").innerHTML="";
	document.getElementById("vlocation").innerHTML="";
	document.getElementById("vpostal").innerHTML="";
	document.getElementById("terms").innerHTML="";	


	if(name.match(/[0-9|!|@|#|*|_|-]/g) || fname== "" || lname=="")
	{	document.getElementById("vname").style.color="red";
		document.getElementById("vname").innerHTML="Invalid Name";	
	}

	if(document.getElementById("gender").value == "- Select One -")
	{	document.getElementById("vgender").style.color="red";
		document.getElementById("vgender").innerHTML="Please select your gender!";	
	}

	var d=document.getElementById("day").value;
	var m=document.getElementById("month").value;
	var y=document.getElementById("year").value;
	document.getElementById("vdob").style.color="red";

	if(m == "- Select Month -" || d == "" || y == "")
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

	if(document.getElementById("location").value == "- Select Country -")
	{	document.getElementById("vlocation").style.color="red";
		document.getElementById("vlocation").innerHTML="Please select your country!";	
	}

	var pc=document.getElementById("postal").value;
	if(isNaN(pc)||pc=="")
	{	document.getElementById("vpostal").style.color="red";
		document.getElementById("vpostal").innerHTML="Invalid!";		
	}

	vpwd();

 /*   if (document.getElementById('terms').checked) 
    {
		document.getElementById("terms").innerHTML="";
     } else {
		document.getElementById("terms").innerHTML="You must agree to our Terms of Service.!";	
        }

	*/

	 if (document.getElementById('terms').checked) {
            alert("checked");
        } else {
            alert("You didn't check it! Let me check it for you.");
        } 
}