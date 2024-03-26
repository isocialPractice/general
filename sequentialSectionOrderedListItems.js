// sequentialSectionOrderedListItems
// Function that recurses through ordered list adding sequential decimals.
//////////////////////////////////////////////////////////////////////////

/*************************************************************************************************
**************************************************************************************************

sequentialSectionOrderedListItems(parElementIdentifier, parElement)
 
Function to number ol items and their nested ol items 

1. parElementIdentifier: String - acceptable values are:  
   - a. "id" - the id.
   - b. "tag" - the tag name.
   - c. "class" - the class name.
   - d. "attribute" - as would be used to select CSS attribute or with querySelectorAll() method.
2. parElement: String - the id, tag, class, or attribute name that will be looped.   

*************************************************************************************************
*************************************************************************************************/

function sequentialSectionOrderedListItems(parElementIdentifier, parElement) {
  // globals for function
  var nestedCounter, counter, doubleNest;
  // run the function on the provided ol element
  var parentElement, parentElementLen;
  if (parElementIdentifier== "class") {
   parentElement = document.getElementsByClassName(parElement);
  }
  if (parElementIdentifier== "attribute") {
   parentElement = document.querySelectorAll(parElement);
  }  
  if (parElementIdentifier== "id") {
   parentElement = document.getElementById(parElement);
  }
  if (parElementIdentifier== "tag") {
   parentElement = document.getElementsByTagName(parElement);
  } 
  // function to number nested ordered list items
  var nestedOrderedListItems = function(curList, parentNumbering = "") {
   nestedCounter = 1;
   let items = curList.querySelectorAll("li");
   let numbering;
   items.forEach(function(item) {
    if (doubleNest == 1) {
     numbering = counter + "." + parentNumbering + "." + nestedCounter + '.';
    } else {
     numbering = parentNumbering + "." + nestedCounter + '.';
    }
    item.innerHTML = numbering + '<br>' + item.innerHTML;
    let nestedOl = item.querySelector("ol");
    if (nestedOl) {
     doubleNest = 1;
     nestedOrderedListItems(nestedOl, nestedCounter);    
    }
    doubleNest = 0;
    nestedCounter++;
   });  
   // reset counter
   counter = (counter - nestedCounter) + 1;
  };  
  // function for topmost ordered lists
  var numberOrderedListItems = function(olElement, parentNumbering = '') {
   let items = olElement.querySelectorAll('li');
   counter = 1;

   items.forEach(function(item) {     
    var numbering;
    numbering = parentNumbering + counter + '.';
    item.innerHTML = numbering + ' ' + item.innerHTML;
    var nestedOl = item.querySelector('ol');     
    if (nestedOl) {
     nestedOrderedListItems(nestedOl, counter);    
    }
    counter++;
   });
  };  
  if (parElementIdentifier== "id") {
   let olElement = parentElement.querySelector("ol");
   numberOrderedListItems(olElement);
  } else {
   parentElementLen = parentElement.length;
   for (i = 0; i < parentElementLen; i++) {
    let olElement = parentElement[i].querySelector("ol");
    numberOrderedListItems(olElement);
   }    
  }    
 }