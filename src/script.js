//Adding a new line after every fullstop.
document.addEventListener("DOMContentLoaded", function(){
    let paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(paragraph => {
        paragraph.innerHTML = paragraph.innerHTML.replace(/\. /g, "<br><br>");
    });
});

document.addEventListener("DOMContentLoaded", function(){

    const myForm = document.getElementById('submissionform') //capture from the form ID
    myForm.addEventListener("submit", submitForm); //listen to the submit button
})

function submitForm(event){
     //prevent loading of an default form
     event.preventDefault();
    //declare variable for input capture
    const myForm = document.getElementById("submissionform")
    const name = document.getElementById("name").value.trim()
    const phone = document.getElementById("phone").value.trim()
    const email = document.getElementById("email").value.trim()

    const resultOutput = document.getElementById("result")

    //condition to be satisfied

    if(!name || !phone || !email){
        resultOutput.textContent = "Insert correct Details.";
        resultOutput.style.color = "red"
    }
    else{
        alert("Captured, I'll respond soon");
        resultOutput.textContent = "Captured, response soon.";
        resultOutput.style.color = "green"
        resultOutput.style.border = "2px lightgray"
        resultOutput.style.borderRadius = "3px"
        resultOutput.style.backgroundColor = "lightblue"
        resultOutput.style.marginTop = "5px"
        resultOutput.style.width = "70%"
        resultOutput.style.textAlign = "center"

        setTimeout(() => {
            resultOutput.textContent = ""; // Clear text
        }, 5000);
        
       myForm.reset();
        };
    }