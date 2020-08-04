if (jQuery) {
  console.log('jQuery Connected');
}

// on Click, check off to-do

$('ul').on('click', "li",function () {
  $(this).toggleClass('completed');
  console.log('working!');
  // $(this).css("text-decoration", "line-through")
});


// on Click, remove to-do
$('ul').on('click', "span",function (event) {
  event.stopPropagation()
  $(this).parent().fadeOut(500, function(){
    $(this).remove()
  });
});

$('h1').on('click', "span",function (event) {
  event.stopPropagation()
  $("input").toggleClass("show")
});

// Adding new to-do


$("input[type='text']").keypress(function(event){
  if(event.which === 13){

    // grabbing text from input 
    var todoText = $(this).val()
    $(this).val(" ")
    var span = "<span id='trashCan'><i class='fa fa-trash'></i></span>"
    
    $("ul").append("<li>"+ todoText +" "+ span + " </li>")

    console.log("enter pressed")
  }
})
