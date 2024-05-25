let info = false;
function updateName() {  $(".card-name").text($("#name").val()); };
function updateMonth() { $(".card-month").text($("#exp-month").val()); };
function updateYear() { $(".card-year").text($("#exp-year").val()); };
function updateCardNum() { $(".card-num").text(newCardNumber($("#cardNumber").val())); };
function updateCCVNum() { $(".cvc-num").text($("#cvc").val()); info = true; };

$("#confirm").click(()=> {
  if(info) {
    $(".form").toggleClass("d-none");
    $(".successful-section").toggleClass("d-none");    
  }
  else {
    alert("Please enter the required information First!");
  }
});

$("#continue").click(()=> {
  $(".form").toggleClass("d-none");
  $(".successful-section").toggleClass("d-none");    
});
function newCardNumber(cardNumber) {
  let card = "";
  for (let i = 0; i < cardNumber.length; i++) {
    if (i % 4 == 0 && i > 0) {
      card = card.concat(" ");
      console.log(i);
    }
    card = card.concat(cardNumber[i]);
  }
  return card;
};