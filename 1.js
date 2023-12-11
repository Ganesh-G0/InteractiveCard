addEventListener("input", () => {      
  $(".card-name").text($("#name").val());
  $(".card-num").text(newCardNumber($("#cardNumber").val()));
  $(".card-month").text($("#exp-month").val());
  $(".card-year").text($("#exp-year").val());
  $(".cvc-num").text($("#cvc").val());
});
addEventListener('click', ()=> {
  if ($('#cvc').val() && $('#exp-year').val() && 
  $('#exp-month').val() && $('#cardNumber').val() 
  && $('#name').val()
   != '') {
    $("#button").click(()=> {
      $("#form").addClass("d-none");
      $("#complete").removeClass("d-none");    
    });    
  }  
})
$("#button2").click(()=> {
  $("#form").removeClass("d-none");
  $("#complete").addClass("d-none");
});

function newCardNumber(cardNumber) {
    let card = "";
    for (let i = 0; i < cardNumber.length; i++) {
        if (i % 4 == 0 && i > 0) {
            card = card.concat(" ");
        }
        card = card.concat(cardNumber[i]);
    }
    return card;
}

