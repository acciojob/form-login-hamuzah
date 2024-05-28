function getFormvalue() {
    //Write your code here
	  //event.preventDefault();  // Prevent the form from submitting the traditional way
    const form = document.getElementById("form1");
    const fname = form.elements["fname"].value;  // Get the value of the first name input field
    const lname = form.elements["lname"].value;  // Get the value of the last name input field
	
     console.log(alert(fname + " " + lname));

} )

}
