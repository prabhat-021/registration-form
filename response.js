function takevalue() {
    var name_ = document.getElementById("name").value;
    var about_ = document.getElementById("about").value;
    var email_ = document.getElementById("email").value;
    var mobile_ = document.getElementById("mobile").value;

    document.write("<h1><p><p>Form submitted successfully</p></p></h1>")
    document.write("<h2><p>Your Responses are recieved as -- </p></h2>");
    document.write("<h3><p>Name: " + name_ + " </p></h3>");
    document.write("<h3><p>Tell us something about yourself: " + about_ + " </p></h3>");
    document.write("<h3><p>Email-Id: " + email_ + " </p></h3>");
    document.write("<h3><p>Mobile No.: " + mobile_ + " </p></h3>");

}
