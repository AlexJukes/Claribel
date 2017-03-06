// Modal Pop Up Script

$(window).on('shoppad:coin:currencychange', function() {
  if (Shoppad.apps.coin.getLocalCurrency() === 'USD') {
    if(localStorage.getItem('popState') != 'shown') {
$('#currency-modal').show();
 localStorage.setItem('popState','shown');
} else {
$('#currency-modal').hide();

}}
});


  // Get the modal
var modal = document.getElementById('currency-modal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
