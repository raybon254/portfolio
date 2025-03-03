//Adding a new line after every fullstop.
document.addEventListener("DOMContentLoaded", function(){
    let paragraphs = document.querySelectorAll("p");

    paragraphs.forEach(paragraph => {
        paragraph.innerHTML = paragraph.innerHTML.replace(/\. /g, "<br><br>");
    });
});
