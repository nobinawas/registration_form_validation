function formValidation(){
    var uid = document.RegistrationFrom.userid;
    var passid = document.RegistrationFrom.passid;
    var uname = document.RegistrationFrom.username;
    var userAddress = document.RegistrationFrom.address;
    var userCountry = document.RegistrationFrom.country;
    var uzip = document.RegistrationFrom.zip;
    var userEmail = document.RegistrationFrom.email;
    var umsex = document.RegistrationFrom.msex;
    var ufsex = document.RegistrationFrom.fsex;
    if (userid_validation(uid,5,12))
    {
        if (passid_validation(passid,7,12))
        {
            if(allLetter(uname))
            {
                if (alphanumeric(userAddress))
                {
                    if (countryselect(userCountry))
                    {
                        if (allnumeric(uzip))
                        {
                            if (ValidateEmail(userEmail))
                            {
                                if (validsex(umsex.ufsex))
                                {

                                }
                            }
                        }
                    }
                }
            }
        }
        
    }
    return false;
    }
    function userid_validation(uid,mx,my){
        var UserIdLength = uid.value.length;
        if (UserIdLength == 0 || UserIdLength >= my || UseridLength < mx)
        {
            alert("user id should not be empty / length be between " +mx+ "to" +my);
            uid.focus();
            return false;
        }
        return false;
    }
    function passid_validation(passid,mx,my){
        var PassLength = passid.value.length;
        if (PassLenght == 0 || PassLength >= my || PassLength < mx){
            alert("Password Should not be empty / length be between " +mx+ "to" +my);
            passid.focus();
            return false;
        }
        return true;
    }
    function allLetter(uname){
        var letters = /^[A-Za-z]+$/;
        if (uname.value.match(letters))
        {
            return true;
        }
        else{
            alert ('User Name must have alphabet characters only.');
            uname.focus();
            return false;
        }
    }
    function alphanumeric(userAddress){
        var letters = /^[A-Za-z]+$/;
        if (useraddress.value.match(letters)){
            return true;
        }
        else {
            alert('User Address must have alphanumeric character only');
            userAddress.focus();
            return false; 
        }
    }
    function countryselect(userCountry){
        if (userCountry.value == "Default"){
            alert('Select Your Country from the list');
            userCountry.focus();
            return false;
        }
        else
        {
            return true;
        }

    }
    function allnumber(uzip){
        var numbers = /^[0-9]+$/;
        if (uzip.value.match(numbers)){
            return true;
        }
        else{
            alert('Zip Code must have numeric characters only.');
            uzip.focus();
            return false;
        }
    }
    function ValidateEmail(userEmail){
        var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (userEmail.value.match(mailFormat)){
            return true;
        }
        else{
            alert("You have entered an invalid email address.");
            userEmail.focus();
            return false;
        }
    }
    function validatesex (umsex,ufsex)
    {
        x=0;
        if (umsex.checked)
        {
            x++;
        }
        else if (ufsex.checked)
        {
            x++;
        }
        else if( x == 0){
            alert('Select Male or Female');
            umsex.focus();
            return false;
        }
        else{
            aler ('Form Successfully Submitted');
            window.location.reload();
            return true;
        }
    }


