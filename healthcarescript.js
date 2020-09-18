
function checkPword(str1)
{
    var n1=0;
    var n2=0;
    var n3=0;
    for(i=0;i<str1.length;i++)
    {
        if(str1[i]>='a' && str1[i]<='z')
            n1++;
        else if(str1[i]>='A' && str1[i]<='Z')
            n2++;
        else if(str1[i]>='0' && str1[i]<='9')
            n3++;
    }
    if(n1>0 && n2>0 && n3>0)
        return true;
    else
        return false;
}

function checkEmail(str1)
{
    var posat=str1.indexOf("@");
    var posdot=str1.indexOf(".");
    if(posat!=-1 && posdot!=-1)
    {
        if(posat>=1 && (posdot-posat)>=2 && (str1.length-1-posdot)>=2 && (str1.length-1-posdot)<=5)
            return true;
        else
            return false;
                }
    else
        return false;
}

function validateForm()
{
    var nam=document.myform.username.value;
    var password=document.myform.password.value;
    var cpassword=document.myform.password2.value;
    var email=document.myform.email.value;
    var mobile=document.myform.mobile.value;
    if(nam=="" || nam==null)
    {
        document.getElementById("nam1").innerHTML="name should not be blank";
        return false;
    }
    else if(nam.length<3)
    {
        document.getElementById("nam1").innerHTML="name length should be 3-30";
        return false;
    }
    else if(nam.length>30)
    {
        document.getElementById("nam1").innerHTML="name length should be 3-30";
        return false;
    }
    else if(isNaN(nam)==false)
    {
        document.getElementById("nam1").innerHTML="name should not be numeric";
        return false;
    }
    else if(password=="" || password==null)
    {
        document.getElementById("pword").innerHTML="Password should not be blank";
        return false;
    }
    else if(password.length<6)
    {
        document.getElementById("pword").innerHTML="Password should be of minimum 6 characters";
        return false;
    }
    else if(!checkPword(password))
    {
        document.getElementById("pword").innerHTML="Password should have atleast 1 capital letter, 1 small letter and 1 digit";
        return false;
    }
    else if(password!=cpassword)
    {
        document.getElementById("cpword").innerHTML="Password doesn't match";
        return false;
    }
    else if(email=="" || email==null)
    {
        document.getElementById("mail").innerHTML="Email cannot be empty";
        return false;
    }
    else if(!checkEmail(email))
    {
        document.getElementById("mail").innerHTML="Email not valid";
        return false;
    }
    else if(mobile=="" || mobile==null)
    {
        document.getElementById("contact").innerHTML="Mobile number cannot be empty";
        return false;
    }
    else if(mobile.length!=10)
    {
        document.getElementById("contact").innerHTML="Please enter 10 digit mobile number";
        return false;
    }
    else if(mobile[0]<'6')
    {
        document.getElementById("contact").innerHTML="Please enter valid mobile number";
        return false;
    }
}

function cl()
{
    document.myform.name.value="";
    document.myform.password.value=""
    document.myform.cpassword.value="";
    document.myform.email.value="";
    document.myform.mobile.value="";
}
