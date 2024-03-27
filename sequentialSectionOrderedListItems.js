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
  var numbering, counter, nestedCounter, doubleNest = 0, trackNestedListItems = 0, lastNestItem = 0;
  var inNestedList, nestItemLength, checkNumberingLength;
  var storeCounter = 0;
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
  // function to keep count
  var trackCount = function() {
   if (storeCounter == 0) {
    counter++;
   } else {
    counter = storeCounter + 1;
   }
  };  
  // function to count the number of occurrences of a specific character in a string
  var countNestedSection = function(str, char) {
   // split the string by the specified character and count the number of resulting elements
   return str.split(char).length;
  };      
  // function to number nested ordered list items
  var nestedOrderedListItems = function(curList, parentNumbering) {   
   if (lastNestItem == 0) {
    nestedCounter = 1;
   } 
   let items = curList.querySelectorAll("li");   
   items.forEach(function(item) {
    if (inNestedList == 1) {
     trackNestedListItems = items.length;      
    }
    if (doubleNest >= 1) {
     numbering = counter + "." + parentNumbering + "." + nestedCounter + '.';
     checkNumberingLength = Number(countNestedSection(numbering, "."));    
     if (nestItemLength == 1 && checkNumberingLength > 3) {
      // If list item is after nested items.            
      lastNestItem = 1;   
      if (doubleNest < 2) { 
       doubleNest = 0; 
      } 
      if ( // IF CONDITION
       typeof parentNumbering == "string" && parentNumbering.indexOf(".") > -1 || 
       Math.floor(parentNumbering) < parentNumbering
      ) {
       let nestedCounterArr = parentNumbering.split(".");
       nestedCounter = Math.floor(nestedCounterArr[nestedCounterArr.length-1]);   
      }              
     } else {      
       lastNestItem = 0;
       nestItemLength--;
     }
    } else {
     numbering = parentNumbering + "." + nestedCounter + '.';     
     lastNestItem = 0;   
     nestItemLength--;
    }
    //nestItemLength--;
    //nestItemLength--;
    item.innerHTML = numbering + '<br>' + item.innerHTML;
    let nestedOl = item.querySelector("ol");
    if (nestedOl) {
     if (doubleNest == 0) {
       doubleNest = 1;                   
     } else if (doubleNest >= 1 ) {
      if (nestItemLength >= 1) {
       doubleNest++;
       nestedCounter = doubleNest + "." + nestedCounter;       
      }
     }
     //nestedCounter = nestedCounter;
     nestItemLength = nestedOl.querySelectorAll("li").length;     
     nestedOrderedListItems(nestedOl, nestedCounter);    
    }
    trackNestedListItems--;     
    if (lastNestItem != 0) {
     let skip;
     lastNestItem = 0;
     //nestedCounter++;
    } else {
     nestedCounter++;
    }
   });  
   // reset counter
   //counter = (counter - nestedCounter) + 1;
  };  
  // function for topmost ordered lists
  var numberOrderedListItems = function(olElement, parentNumbering = '') {
   let items = olElement.querySelectorAll('li');
   counter = 1;

   items.forEach(function(item) {
    numbering = parentNumbering + counter + '. ';
    item.innerHTML = numbering + ' ' + item.innerHTML;
    var nestedOl = item.querySelector('ol');     
    if (nestedOl) {
     inNestedList = 1;
     storeCounter = counter;
     nestItemLength = nestedOl.querySelectorAll("li").length;     
     nestedOrderedListItems(nestedOl, counter);
    } else {
     if (doubleNest > 0) {
      doubleNest--;
     } else {
      inNestedList = 0;
      doubleNest = 0;   
     }
    }
    if (trackNestedListItems == 0) {
     let tempCounter = counter;
     trackCount();
     if (tempCounter == counter) {
      storeCounter = 0;
     }
    } else {
     trackNestedListItems--;
    }
   });      
  };  
  if (parElementIdentifier== "id") {
   let olElement = parentElement.querySelector("ol");
   numberOrderedListItems(olElement);
  } else {
   parentElementLen = parentElement.length;
   for (i = 0; i < parentElementLen; i++) {
    let olElement = parentElement[i].querySelector("ol");
    storeCounter = 0;
    numberOrderedListItems(olElement);
   }    
  }    
 }