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
	var name=document.getElementById("fname").value+document.getElementById("lname").value;
	if(name.match(/[0-9]|!|@|#|*|_|-/g))
	{	document.getElementById("vname").style.color="red";
		document.getElementById("vname").innerHTML="Invalid";	
	}


	
}