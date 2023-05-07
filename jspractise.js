let a=23;
function decimal_to_binary(a)
{
var binary = '';
  while (a>0)
   {
binary = (a%2) + binary;
    a = Math.floor(a/2);
     }
return binary;
   }
console.log(decimal_to_binary(23))
