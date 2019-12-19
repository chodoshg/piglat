var wayadd = function(oldword) {
  vowels = ["a","e","i","o","u"]
    if vowels.includes(oldword[0]) {
      return oldword + "way"
    }
    return oldword + "ay"
  }

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();

    var oldword = $("input#word").val();
    var result = wayadd(oldword);

    $("#translation").text(result);
});
});
