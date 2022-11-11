"use strict";

// 1000000 -> 1,000,000
function NumericInput(inp, locale) {
  var numericKeys = '0123456789';

  console.log(" locale12:::::::::::::::", inp);


  // add the thousands separator when the user blurs
  inp.addEventListener('blur', function(e) {
    var event = e || window.event;
    var target = event.target;

    var tmp = target.value.replace(/,/g, '');
    var val = Number(tmp).toLocaleString(locale);

    if (tmp == '') {
      target.value = '';
    } else {
      target.value = val;
    }
  });

  // strip the thousands separator when the user puts the input in focus.
  inp.addEventListener('focus', function(e) {
    var event = e || window.event;
    var target = event.target;
    var val = target.value.replace(/[,.]/g, '');
    val *= 1;
    target.value = val;
  });
}


var number1 = new NumericInput(document.getElementById('number', 'en-CA'));
var text1 = new NumericInput(document.getElementById('initial', 'en-CA'));
