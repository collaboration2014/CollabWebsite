//side navbar script: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav
function openNav() {
  document.getElementById("nav").style.width = "250px";
}

function closeNav() {
  document.getElementById("nav").style.width = "0";
}
//end of navbar script



// Start of modal map image
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
//End of Map Image script


//for popups
// When the user clicks on <div>, open the popup
//function myFunction() {
 // var popup = document.getElementById("myPopup");
 // popup.classList.toggle("show");
//}



//to download a file
/*function downloadFile(src){
    var link=document.createElement('a');
    document.body.appendChild(link);
    link.href= src;
    link.download = '';
    link.click();
}*/