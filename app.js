/* © CIRCULAR AGENCY */

// When the user clicks on div, open the popup
function heroesPopup() {
  var btnGroup = Array.from(document.getElementsByClassName("btn"));

/* Collect all .img classes into a NodeList and convert it into
|| an array
*/
var imgGroup = Array.from(document.getElementsByClassName('img'));

/* Iterate (loop) thru the imgGroup array with forEach() array
|| method.
*/// In each loop get a .btn from the btnGroup array's index
//// position that corresponds with the current index of the loop.
//// Register an onclick event handler that toggles the .off class
//// to a .img of the imgGroup array positioned at current loop
//// index.


imgGroup.forEach(function(img, idx) {

  btnGroup[idx].onclick = function() {

    img.classList.toggle('show');
  }

});

var popup = document.getElementById("heroes__brightness");
  popup.classList.toggle("bright");
}
