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

  $(".card-name").text("jane applessed");
  $(".card-month").text("00"); 
  $(".card-year").text("00"); 
  $(".card-num").text("0000 0000 0000 0000"); 
  $(".cvc-num").text("000"); 
  $("#name").val("");
  $("#exp-month").val("");  
  $("#exp-year").val("");  
  $("#cardNumber").val("");  
  $("#cvc").val("");  
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
