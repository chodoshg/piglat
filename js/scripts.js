// var wayadd = function(oldword) {
//   vowels = ["a","e","i","o","u"]
//     if vowels.includes(oldword[0]) {
//       return oldword + "way"
//     }
//     return oldword + "ay"
//   }


var wayadd = function(oldword) {
  vowels = ["a","e","i","o","u"]
    for(x of vowels) {
      if (x ===  oldword[0]) {
        return oldword + "way"
      } else { continue; }
    }
  }
//
// var wayadd = function(oldword) {
//   vowels = ["a","e","i","o","u"]
//     while(vowels.includes(oldword[0] === false) {
//       for(x of oldword[1:]) {
//         if vowels.includes(x) === false {
//           return oldword + x
//         } else if vowels.includes(x) === true {
//           return
//         }
//         return
//       }
//
//     }
//     return oldword + "way"
//   }

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();

    var oldword = $("input#word").val();
    var result = wayadd(oldword);

    $("#translation").text(result);
});
});
