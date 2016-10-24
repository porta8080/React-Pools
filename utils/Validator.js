function Validator(){}


Validator.cpf = function(input){
  var pattern = new RegExp('^([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})|([0-9]{11})$');
  if(pattern.test(input)){
    var sum = 0, rest, new_input='';

    input.split('').forEach(function(i){
      if(!isNaN(i)) new_input+=i;
    });

    input = new_input;

    if (input == "00000000000") return false;

    for (i=1; i<=9; i++) sum = sum + parseInt(input.substring(i-1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(input.substring(9, 10)) ) return false;

    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(input.substring(i-1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(input.substring(10, 11) ) ) return false;
    return true;
  }

  return false;
};

module.exports = Validator;
