function getFormvalue() {
    //Write your code here
	 document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way
    const fname = document.getElementById('fname').value;  // Get the value of the first name input field
    const lname = document.getElementById('lname').value;  // Get the value of the last name input field
    alert(fname + " " + lname);  // Display the first and last name using alert()
});  

 

}
