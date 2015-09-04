/*
 * Author: Felix Gonda
 * Date: September 4, 2015
 * Class: Advanced Javascript with Node.js and AngularJS
 *        Fall 2015, Harvard University
 */

/*
 * This function generates and prints numbers from
 * 1 through N inclusively to an HTML div tag according
 * to the following criteria:
 * - print "Fizz", if the number is a multiple of 3
 * - print "Buzz", if the number is a multiple of 5
 * - print "FizzBuzz", if the number is a multiple of 3 and 5
 * - otherwise, print the number
 */
function FizzBuzzer(N)
{
  // retrieve the element to write the results to
  var table = document.getElementById('table');

  // clear the contents fo the element to make sure
  // only newly-generated contents is displayed
  while (table.hasChildNodes())
  {
    table.removeChild(table.lastChild);
  }

  // iterate through all numbers starting from
  // 1 through N inclusively
  for(var i=1; i<=N; i++)
  {
    // create a div element for the content of the
    // and add it to the table
    var div = document.createElement('div');
    table.appendChild(div);

    // determine whether to fizz or buzz based on
    // multiples of 3 and 5
    var fizz = (i%3 == 0);
    var buzz = (i%5 == 0);

    // print the content based on the fizz and buzz
    // flags
    if (fizz && buzz)
    {
      div.innerHTML += "FizzBuzz"
    }
    else if (fizz)
    {
      div.innerHTML += "Fizz"
    }
    else if (buzz)
    {
      div.innerHTML += "Buzz"
    }
    else
    {
      div.innerHTML += i
    }
  }
}
