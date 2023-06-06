// JavaScript Document

// TO ADD:
// ******
// showHide()
// addShowHideButton()

// REUSABLE FUNCTIONS
// ****************** 

// Removing Elements
function removeSpace(idWhereSpaceIs, changeCase) {
 if (changeCase == undefined) changeCase = 0;
 
 let theIDWhereSpaceIs = document.getElementById(idWhereSpaceIs); 
 let theIDWhereSpaceIsText = theIDWhereSpaceIs.innerHTML;
 let spaceIsPresent = 1;
 if (theIDWhereSpaceIs) {
  while (spaceIsPresent == 1) {
   if (theIDWhereSpaceIsText.indexOf(" ") > -1) {
    theIDWhereSpaceIsText = theIDWhereSpaceIsText.replace(" ", "");
   } else {
    spaceIsPresent = 0;
   }
  }
 }
 if (changeCase == "u") {
  theIDWhereSpaceIsText = changeToUpperCase(theIDWhereSpaceIsText);
 } else if (changeCase == "l") {
  theIDWhereSpaceIsText = changeToLowerCase(theIDWhereSpaceIsText);
 }
 theIDWhereSpaceIs.innerHTML = theIDWhereSpaceIsText;
}
function removeSpaceInVariable(variableWhereSpaceIs, changeCase) {
 if (changeCase == undefined) changeCase = 0;
 
 let theVariableWhereSpaceIs = variableWhereSpaceIs; 
 let spaceIsPresent = 1;
 if (theVariableWhereSpaceIs) {
  while (spaceIsPresent == 1) {
   if (theVariableWhereSpaceIs.indexOf(" ") > -1) {
    theVariableWhereSpaceIs = theVariableWhereSpaceIs.replace(" ", "");
   } else {
    spaceIsPresent = 0;
   }
  }
 }
 if (changeCase == "u") {
  theVariableWhereSpaceIs = changeToUpperCase(theVariableWhereSpaceIs);
 } else if (changeCase == "l") {
  theVariableWhereSpaceIs = changeToLowerCase(theVariableWhereSpaceIs);
 }
 return theVariableWhereSpaceIs;
}

function removeWord(word, idWhereWordIs) {
 var curWordID = document.getElementById(idWhereWordIs);
 let curWordIDText = curWordID.innerHTML; 
 
 let wordIsPresent = 1;
 if (curWordID) {
  while (wordIsPresent==1) {
   if (curWordIDText.indexOf(word) > -1) {
    curWordIDText = curWordIDText.replace(word, "");  
   } else {
    wordIsPresent = 0;
   }
  }
  curWordID.innerHTML = curWordIDText;
 }
}
function removeWordInVariable(word, variableWithWord) {
 let theVariableWithWord = variableWithWord;
 let wordIsPresent = 1;
 if (theVariableWithWord) {
  while (wordIsPresent == 1) {
   if (theVariableWithWord.indexOf(word) > -1) {
    theVariableWithWord = theVariableWithWord.replace(word, "");  
   } else {
    wordIsPresent = 0;
   }
  }
  return theVariableWithWord;
 }
}

function removeHTMLTag(tag, parElement, parElementIdentifier, replace) {
 if (replace == undefined) replace = "";
 var useID=0, useClass=0, useData=0, useTag=0, useSelf=0, replaceTag=0, remove = 0;
 var theParElements, theParElementsLen, theParElement, theParElementIndex = 0;
 
 if (parElementIdentifier == undefined) {
  if (tag == "self" || tag == "this") {
   useSelf = 1;
   parElementIdentifier = "SELF";
   replace = "";
  } else {
   useID = 1;  
   parElementIdentifier = "ID";
   replace = "";   
  }
 } else {
  let parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
  if (replace == undefined) {
   replace = "";
   remove = 1;
  }
  if (parElementIdentifierLowCase == "id") useID = 1;
  if (parElementIdentifierLowCase == "self" || parElementIdentifierLowCase == "this") useSelf = 1;
   
  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
 }
 var removeTheHTMLTag = function() {
  let theRemoveTag = theParElement.getElementsByTagName(tag);
  if (theRemoveTag) {
   let theRemoveTagLen = theRemoveTag.length;
   for (i = 0; i < theRemoveTagLen; i++) {
    let curTagToRemove = theRemoveTag[i];   
    if (remove == 1) {
     curTagToRemove.remove();
    } else {
     curTagToRemove.innerHTML = "";
     curTagToRemove.style.display = "none";
    }
   }  
  }
 };

 var replaceTheHTMLTag = function() {
  let theRemoveTag = theParElement.getElementsByTagName(tag);
  if (theRemoveTag) {
   let theRemoveTagLen = theRemoveTag.length;
   for (i = 0; i < theRemoveTagLen; i++) {
    let curTagToRemove = theRemoveTag[i];
    curTagToRemove.insertAdjacentHTML("beforebegin", replace);   
   }  
  }
 }; 
 if (useID == 1) {
  theParElement = document.getElementById(parElement);
  replaceTheHTMLTag();  
  removeTheHTMLTag();  
 }
 if (useSelf == 1) {
  theParElement = document.getElementById(parElement);
  theParElement.remove();
 } 
 if (useClass == 1) {
  if (replace == "self") {
   if (theParElementIndex == "l") {
    theParElements = document.getElementsByClassName(parElement);
    theParElementsLen = Number(theParElements.length - 1);
    theParElement = theParElements[theParElementsLen];
    theParElement.remove();
   } else {
    theParElements = document.getElementsByClassName(parElement);
    theParElement = theParElements[theParElementIndex];
    theParElement.remove();    
   }
  } else {
   theParElement = document.getElementsByClassName(parElement)[theParElementIndex];  
   replaceTheHTMLTag();
   removeTheHTMLTag();
  }
 }
 if (useData == 1) {  
  if (replace == "self") {
   if (theParElementIndex == "l") {
    theParElements = document.querySelectorAll("[data-" + parElement + "]");
    theParElementsLen = Number(theParElements.length - 1);
    theParElement = theParElements[theParElementsLen];
    theParElement.remove();
   } else {
    theParElements = document.querySelectorAll("[data-" + parElement + "]"); 
    theParElement = theParElements[theParElementIndex];
    theParElement.remove();    
   }
  } else {
   theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex]; 
   replaceTheHTMLTag();
   removeTheHTMLTag();
  }
 }
 if (useTag == 1) {
  if (replace == "self") {
   if (theParElementIndex == "l") {
    theParElements = document.getElementsByTagName(parElement);
    theParElementsLen = Number(theParElements.length - 1);
    theParElement = theParElements[theParElementsLen];
    theParElement.remove();
   } else {
    theParElements = document.getElementsByTagName(parElement);    
    theParElement = theParElements[theParElementIndex];
    theParElement.remove();    
   }
  } else {
   theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
   replaceTheHTMLTag();
   removeTheHTMLTag();
  }   
 } 
}

function removeNewLines(parElement, parElementIdentifier, removeExcessSpace) {
  var useID=0, useClass=0, useData=0, useTag=0, addingClass = 0, wrappingWords = 0;
  var theParElement, theParElementInnerHTML, theParElementIndex = 0;  
  
  var removeTheExcessSpace = function() {
   theParElementInnerHTML = theParElement.innerHTML;
   let hasExcessSpace = 1;
   while (hasExcessSpace == 1) {
    if (theParElementInnerHTML.indexOf("  ") > -1) {
     theParElementInnerHTML = theParElementInnerHTML.replace("  ", "");
    } else {
     hasExcessSpace = 0;
    }
   }
   theParElement.innerHTML = theParElementInnerHTML;
  };
  var removesTheNewLines = function() {
   theParElementInnerHTML = theParElement.innerHTML;
   let hasNewLines = 1;
   while (hasNewLines == 1) {
    if (theParElementInnerHTML.indexOf("\n") > -1) {
     theParElementInnerHTML = theParElementInnerHTML.replace("\n", "");
    } else {
     hasNewLines = 0;
    }
   }
   theParElement.innerHTML = theParElementInnerHTML;
   if (removeExcessSpace == 1) {
    removeTheExcessSpace();
   }
  };   
  
  var parElementConfigI = function() {
   if (parElementIdentifierLowCase == "id") useID = 1;

   if (parElementIdentifierLowCase.indexOf("class") > -1) {
    useClass = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("class", "");
   }
   if (parElementIdentifierLowCase.indexOf("data") > -1) {
    useData = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("data", "");
   }
   if (parElementIdentifierLowCase.indexOf("tag") > -1) {
    useTag = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
   }
  };
  var parElementConfigII = function() {
   if (useID == 1) {
     theParElement = document.getElementById(parElement);
    }
    if (useClass == 1) {
     theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
    }
    if (useData == 1) {
     theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
    }
    if (useTag == 1) {
     theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
    }    
    removesTheNewLines();
  };  
  
  if (parElementIdentifier == undefined) {  
   parElementIdentifier = "id";
   useID = 1;
   removeExcessSpace = 0;
   parElementConfigI();
   parElementConfigII();   
  } else {
   var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
   if (removeExcessSpace == undefined) removeExcessSpace = 0;
   parElementConfigI();
   parElementConfigII();  
 }
}

function removeLastWord(word, parElement, parElementIdentifier) {
 var useID=0, useClass=0, useData=0, useTag=0, addingClass = 0, wrappingWords = 0;
 var theParElement, theParElementInnerHTML, theParElementIndex = 0;
 var arrayParElementInnerHTML, arrayParElementInnerHTMLLen, outArrayParElementInnerHTML = "";

 var removeTheLastCharacter = function() {
  theParElementInnerHTML = theParElement.innerHTML;  
  theParElementInnerHTML = theParElementInnerHTML.replace(word, "");
  theParElement.innerHTML = theParElementInnerHTML;
 };
 var reverseTheInnerHTML = function(theSwitch) {
  if (theSwitch == undefined) theSwitch = 0;
  outArrayParElementInnerHTML = "";
  theParElementInnerHTML = theParElement.innerHTML;  
  arrayParElementInnerHTML = theParElementInnerHTML.split(" ");
  arrayParElementInnerHTML.reverse();
  arrayParElementInnerHTMLLen = arrayParElementInnerHTML.length;
  for (i in arrayParElementInnerHTML) {
   if (i == arrayParElementInnerHTMLLen - 1) {
    outArrayParElementInnerHTML += arrayParElementInnerHTML[i];
   } else {
    outArrayParElementInnerHTML += arrayParElementInnerHTML[i] + " ";
   }
  }
  theParElementInnerHTML = outArrayParElementInnerHTML;
  theParElement.innerHTML = outArrayParElementInnerHTML;
  if (theSwitch == 1) {
   removeTheLastCharacter();
  }
 };   

 var parElementConfigI = function() {
  if (parElementIdentifierLowCase == "id") useID = 1;

  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
 };
 var parElementConfigII = function() {
  if (useID == 1) {
    theParElement = document.getElementById(parElement);
   }
   if (useClass == 1) {
    theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
   }
   if (useData == 1) {
    theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
   }
   if (useTag == 1) {
    theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
   }    
   reverseTheInnerHTML(1);
   reverseTheInnerHTML();
 };  

 if (parElementIdentifier == undefined) {
  parElementIdentifier = "id";
  useID = 1;
  parElementConfigI();
  parElementConfigII();   
 } else {
  var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
  parElementConfigI();
  parElementConfigII();  
 }
}
function removeLastWordInVariable(variableWithWord, word) {
 if (word == undefined) word = "  ";
 var tempVariableWithWord, theVariableWhereWordIs, theVariableWhereWordIsLen, theVariableOut;
 tempVariableWithWord = variableWithWord;
 var reverseTheVariable = function() {
  theVariableOut = "";
  theVariableWhereWordIs = tempVariableWithWord.split(" ");
  theVariableWhereWordIsLen = theVariableWhereWordIs.length;
  theVariableWhereWordIs.reverse();
  for (i in theVariableWhereWordIs) {
   if (i == theVariableWhereWordIsLen - 1) {
    theVariableOut += theVariableWhereWordIs[i];
   } else {
    theVariableOut += theVariableWhereWordIs[i] + " ";
   }
  }
  theVariableWhereWordIs = theVariableOut;
 };
 reverseTheVariable();
 theVariableWhereWordIs = theVariableWhereWordIs.replace(word, "");
 tempVariableWithWord = theVariableWhereWordIs;
 reverseTheVariable();   
 return theVariableWhereWordIs;
}


// Replacing Elements
function replaceWord(word, replaceWith,  parElement, parElementIdentifier) {
 var useID=0, useClass=0, useData=0, useTag=0;
 var theParElement, theParElementIndex = 0; 
 if (parElementIdentifier == undefined) {
  parElementIdentifier = "ID";
  replace = "";
  useID = 1;
 } else {
  let parElementIdentifierLowCase = parElementIdentifier.toLowerCase();   
  if (parElementIdentifierLowCase == "id") useID = 1;
  
  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
 }
  var replaceTheWord = function() {   
   if (theParElement) {
    let theParElementText = theParElement.innerHTML;
    let wordIsPresent = 1;
    while (wordIsPresent==1) {
     if (theParElementText.indexOf(word) > -1) {
      theParElementText = theParElementText.replace(word, replaceWith);
     } else {
      wordIsPresent = 0;
     }
    }
    theParElement.innerHTML = theParElementText;
   }
  };
  
 if (useID == 1) {
  theParElement = document.getElementById(parElement);
 }
 if (useClass == 1) {
  theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
 }
 if (useData == 1) {
  theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
 }
 if (useTag == 1) {
  theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
 }

 replaceTheWord();
}
function replaceWordInVariable(word, replaceWith, variableWithWord) {
 let theVariableWithWord = variableWithWord;
 let wordIsPresent = 1; 
 if (theVariableWithWord) {  
  let wordIsPresent = 1;
  while (wordIsPresent == 1) {
   if (theVariableWithWord.indexOf(word) > -1) {
    theVariableWithWord = theVariableWithWord.replace(word, replaceWith);
   } else {
    wordIsPresent = 0;
   }
  }
  return theVariableWithWord;
 }
}

function replaceInnerHTML(replaceWith, parElement, parElementIdentifier) {
 var useID=0, useClass=0, useData=0, useTag=0;
 var theParElement, theParElementIndex = 0; 
 if (parElementIdentifier == undefined) {
  parElementIdentifier = "ID";  
  useID = 1;
 } else {
  let parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
  if (parElementIdentifierLowCase == "id") useID = 1;
  
  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
 }
 
 var replaceTheInnerHTML = function() {
  if (theParElement) {
   theParElement.innerHTML = replaceWith;
  }
 };
 
 if (useID == 1) {
  theParElement = document.getElementById(parElement);
 }
 if (useClass == 1) {
  theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
 }
 if (useData == 1) {
  theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
 }
 if (useTag == 1) {
  theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
 }
 replaceTheInnerHTML();
}

function replaceAttribute(attribute, replaceWith, curElement, curElementIdentifier) {

 var useID=0, useClass=0, useData=0, useTag=0;
 var theCurElement, theCurElementIndex = 0; 
 if (curElementIdentifier == undefined) {
  curElementIdentifier = "ID";
  replace = "";
  useID = 1;
 } else {
  let curElementIdentifierLowCase = curElementIdentifier.toLowerCase(); 
  
  if (curElementIdentifierLowCase == "id") useID = 1;
  if (curElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theCurElementIndex = curElementIdentifierLowCase.replace("class", "");
  }
  if (curElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theCurElementIndex = curElementIdentifierLowCase.replace("data", "");
  }
  if (curElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theCurElementIndex = curElementIdentifierLowCase.replace("tag", "");
  }
 }
  var replaceTheAttribute = function() {   
   if (theCurElement) {
    theCurElement.setAttribute(attribute, replaceWith);
   }
  };
  
  if (useID == 1) {
  theCurElement = document.getElementById(curElement);
 }
 if (useClass == 1) {
  theCurElement = document.getElementsByClassName(curElement)[theCurElementIndex];
 }
 if (useData == 1) {
  theCurElement = document.querySelectorAll("[data-" + curElement + "]")[theCurElementIndex];
 }
 if (useTag == 1) {
  theCurElement = document.getElementsByTagName(curElement)[theCurElementIndex];
 }

 replaceTheAttribute();

}

function replaceNewLines(word, parElement, parElementIdentifier, removeExcessSpace, arrayPrep, mindElement) {
  var useID=0, useClass=0, useData=0, useTag=0, addingClass = 0, wrappingWords = 0, mindingElement = 0, mindingWhatElement;
  var theParElement, theParElementInnerHTML, theParElementIndex = 0;    
  var mindArr, mindArrA, mindArrB, mindArrC, mindArrLen;
  
  var mindAnElement = function() {// MIND LINES MATCHING PATTERN
   if (mindingWhatElement == "wc") {    
    mindArr = theParElementInnerHTML.split(word);    
    let activeRecurse = 0;
    let recurseCount = 0;
    let tempMindArr = theParElementInnerHTML.split(word);    
    var mindRecurseA = function(mindVarA, mindIndexA) {
     for (i = mindIndexA; i < mindVarA.length - 1; i++) {
      mindArrA = mindVarA[i].split(" ");
      if (mindArrA.length > mindElement && mindArrA[0].indexOf("<") == -1 && mindArrA[0].indexOf("</") == -1) {       
        mindArrB = mindVarA[i+1].split(" ");        
        if (mindArrB.length > mindElement && mindArrB[0].indexOf("<") == -1 && mindArrB[0].indexOf("</") == -1) {         
         activeRecurse = 1;
         mindVarA[i] = mindVarA[i] + " " + mindVarA[i+1];        
         mindArr.splice(i, 1);
         mindArr[i] = mindVarA[i]; 
         mindVarA.splice(i+1, 1);
         //i++;
         mindRecurseB(mindVarA, i);
        } else {        
        activeRecurse = 0;
        continue;
        }
      } else {   
       activeRecurse = 0;
       continue;
      }
     }     
    };
    var mindRecurseB = function(mindVarB, mindIndexB) {
     for (i = mindIndexB; i < mindVarB.length - 1; i++) {
      mindArrA = mindVarB[i].split(" ");      
      if (mindArrA.length > mindElement && mindArrA[0].indexOf("<") == -1 && mindArrA[0].indexOf("</") == -1) {       
        recurseCount = 1;
        mindArrB = mindVarB[i+1].split(" ");        
        if (mindArrB.length > mindElement && mindArrB[0].indexOf("<") == -1 && mindArrB[0].indexOf("</") == -1) {                  
         activeRecurse = 1;
         mindVarB[i] = mindVarB[i] + " " + mindVarB[i+1];
         mindArr.splice(i, 1);
         mindArr[i] = mindVarB[i]; 
         mindVarB.splice(i+1, 1);
         //i++;
         mindRecurseA(mindVarB, i);
        } else {          
         activeRecurse = 0;
         continue;
        }       
       
      } else {             
       activeRecurse = 0;
       continue;
      }
     }         
    };
    mindRecurseA(tempMindArr, 0);    
    mindArrLen = mindArr.length;
    theParElementInnerHTML = "";
    for (i = 0; i < mindArrLen; i++) {
     if (i == mindArrLen - 1) {
      theParElementInnerHTML += mindArr[i];
     } else {
      theParElementInnerHTML += mindArr[i] + word;
     }
    }
    theParElement.innerHTML = theParElementInnerHTML;
   } else {
    let updateNeeded;
   }
  };
  var prepForArray = function() {// PREP FOR ARRAY USE
   theParElementInnerHTML = theParElement.innerHTML;
   let excessMarks = 1;
   while (excessMarks == 1) {
    if (theParElementInnerHTML.substring(0, word.length) == word) {
     theParElementInnerHTML = theParElementInnerHTML.replace(word, "");     
    } else {
     let negWordLen = word.length * -1;
     if (theParElementInnerHTML.substr(negWordLen, word.length) == word) {
      let tempParElementInnerHTML = removeLastWordInVariable(theParElementInnerHTML, word);
      theParElementInnerHTML = tempParElementInnerHTML;
     } else {
      excessMarks = 0;
     }
    }
   }
   excessMarks = 1; let i = 0;
   theParElementInnerHTML = theParElementInnerHTML.split(word);
   let theParElementInnerHTMLLen = theParElementInnerHTML.length;
   while (excessMarks == 1) {
    if (i < theParElementInnerHTMLLen) {
     if (theParElementInnerHTML[i].length == 0) {
      theParElementInnerHTML.splice(i,1);
      theParElementInnerHTMLLen = theParElementInnerHTML.length;
     } else {
      i++;
     }
    } else {
     excessMarks = 0;
    }
   }
   let tempTheParElementInnerHTML = theParElementInnerHTML; let tempText = "";
   for (i = 0; i < tempTheParElementInnerHTML.length; i++) {
    if (i == tempTheParElementInnerHTML.length - 1) {
     tempText += tempTheParElementInnerHTML[i];
    } else {
     tempText += tempTheParElementInnerHTML[i] + word;
    }    
   }
   theParElementInnerHTML = tempText;
   theParElement.innerHTML = theParElementInnerHTML;
   let textParElementInnerHTML = theParElement.innerText;   
   if (textParElementInnerHTML.substr(0, word.length) == word) {
    theParElementInnerHTML = theParElementInnerHTML.replace(word, "");
    theParElement.innerHTML = theParElementInnerHTML;
   }   
  };
  var removeTheExcessSpace = function() {
   theParElementInnerHTML = theParElement.innerHTML;
   let hasExcessSpace = 1;
   while (hasExcessSpace == 1) {
    if (theParElementInnerHTML.indexOf("  ") > -1) {
     theParElementInnerHTML = theParElementInnerHTML.replace("  ", "");
    } else {
     hasExcessSpace = 0;
    }
   }
   theParElement.innerHTML = theParElementInnerHTML;
  };
  var replaceTheNewLines = function() {
   {// REMOVE COMMENTS FIRST   
   let tempParElement = document.createElement("div");   
   tempParElement.innerHTML = theParElement.innerHTML;
   theParElement.insertAdjacentElement("afterend", tempParElement);
   
   let theTempParElement = theParElement.nextElementSibling;   
   theTempParElement.style.display = "none";
   let parElementNodeList = theParElement.childNodes;
   let parElementNodeListLen = parElementNodeList.length;
   let tempParElementNodeList = theTempParElement.childNodes;  
   let tempParElementNodeListLen = tempParElementNodeList.length;
   
   for (i = 0; i < tempParElementNodeListLen; i++) {
    let parElementNodeListLen = parElementNodeList.length;
    var outParElementChildNode = function() {
     for (j = 0; j < parElementNodeListLen; j++) {
      if (parElementNodeList[j].nodeName == "#comment") {
       parElementNodeList[j].remove();
       break;
      }
     }
    };
   
    if (tempParElementNodeList[i].nodeType == 8) {
     outParElementChildNode();
    }
   }
   tempParElement.remove();
   }
   {// REPLACE NEW LINES
   theParElementInnerHTML = theParElement.innerHTML;
   let hasNewLines = 1;
   while (hasNewLines == 1) {
    if (theParElementInnerHTML.indexOf("\n") > -1) {
     theParElementInnerHTML = theParElementInnerHTML.replace("\n", word);          
    } else {
     hasNewLines = 0;
    }
   }
   theParElement.innerHTML = theParElementInnerHTML; 
   }   
  if (removeExcessSpace == 1) {
   removeTheExcessSpace();
   if (arrayPrep == 1) { prepForArray(); }
   if (mindingElement == 1) { mindAnElement(); }
  } else {
   if (arrayPrep == 1) { prepForArray(); }
   if (mindingElement == 1) { mindAnElement(); }
  }  
 };   
  
  var parElementConfigI = function() {
   if (parElementIdentifierLowCase == "id") useID = 1;

   if (parElementIdentifierLowCase.indexOf("class") > -1) {
    useClass = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("class", "");
   }
   if (parElementIdentifierLowCase.indexOf("data") > -1) {
    useData = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("data", "");
   }
   if (parElementIdentifierLowCase.indexOf("tag") > -1) {
    useTag = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
   }
  };
  var parElementConfigII = function() {
   if (useID == 1) {
     theParElement = document.getElementById(parElement);
    }
    if (useClass == 1) {
     theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
    }
    if (useData == 1) {
     theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
    }
    if (useTag == 1) {
     theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
    }
    if (typeof mindElement == "number" && mindElement >= 2) {
     mindingWhatElement = "wc"; // word count
     mindingElement = 1;
    }
    replaceTheNewLines();
  };  
  
  if (parElementIdentifier == undefined) {  
   parElementIdentifier = "id";
   useID = 1;
   removeExcessSpace = 0;
   mindElement = 0;
   parElementConfigI();
   parElementConfigII();   
  } else {
   var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
   if (removeExcessSpace == undefined) removeExcessSpace = 0;
   if (arrayPrep == undefined) arrayPrep = 0;
   if (mindElement == undefined) {
    mindElement = 0;
   } else {
    mindingElement = 1;
   }
   parElementConfigI();
   parElementConfigII();  
 }
}

// Appending/Prepending/Add Elements
function addToAttribute(attribute, addWhat, addWhere, curElement, curElementIdentifier, usingAll) {
 if (addWhere == undefined) addWhere = "before";
 
 var useID=0, useClass=0, useData=0, useTag=0;
 var runClass = 0, useAll=0;
 var theCurElement, theCurElements, theCurElementsLen, theAddContent, theCurElementIndex = 0; 
 var theCurElementAttribute, theCurElementAttributeValue;
 if (curElementIdentifier == undefined) {
  curElementIdentifier = "ID";
  usingAll = 0;
  useID = 1;
 } else {
  if (usingAll == undefined) usingAll = 0;
  var curElementIdentifierLowCase = curElementIdentifier.toLowerCase(); 
  
  if (curElementIdentifierLowCase == "id") {
   useID = 1;
   usingAll = 0;
  }
  if (curElementIdentifierLowCase.indexOf("class") > -1) {  
   useClass = 1;
   if (usingAll == 0) {
    theCurElementIndex = curElementIdentifierLowCase.replace("class", "");
   } else {
    theCurElementIndex = "false";
   }
  }
  if (curElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   if (usingAll == 0) {
    theCurElementIndex = curElementIdentifierLowCase.replace("data", "");
   } else {
    theCurElementIndex = "false";
   }
  }
  if (curElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   if (usingAll == 0) {
    theCurElementIndex = curElementIdentifierLowCase.replace("tag", "");
   } else {
    theCurElementIndex = "false";
   } 
  }
 }
 
  var addToTheAttribute = function() {
   if (theCurElement) {
    theCurElement.setAttribute(attribute, theAddContent);
   }   
  };

 if (useID == 1) {
  theCurElement = document.getElementById(curElement);
 }
 if (useClass == 1) {
  if (theCurElementIndex == "false") {
   theCurElements = document.getElementsByClassName(curElement);
   theCurElementsLen = theCurElements.length;
  } else {
   theCurElement = document.getElementsByClassName(curElement)[theCurElementIndex];
  }
 }
 if (useData == 1) {
  if (theCurElementIndex == "false") {
   theCurElements = document.querySelectorAll("[data-" + curElement + "]");
   theCurElementsLen = theCurElements.length;
  } else {
   theCurElement = document.querySelectorAll("[data-" + curElement + "]")[theCurElementIndex];
  }
 }
 if (useTag == 1) {
  if (theCurElementIndex == "false") {
   theCurElements = document.getElementsByTagName(curElement);
   theCurElementsLen = theCurElements.length;
  } else {
   theCurElement = document.getElementsByTagName(curElement)[theCurElementIndex];
  }
 }
 
 if (addWhere == "before") {
  if (usingAll == 1) {
   if (attribute == "class") {runClass = 1;}
   for (i = 0; i < theCurElementsLen; i++) {
    if (theCurElements[i].hasAttribute(attribute)) {      
     theCurElementAttributeValue = theCurElements[i].getAttribute(attribute);  
     if (attribute == "class") {
      let theCurElementsData = theCurElements[i].dataset;
      theCurElementsData.tempunlikelyaddtoattributewillbedataset = "1";      
      //theAddContent = addWhat + " " + theCurElementAttributeValue;  
     } else {
      theAddContent = addWhat + theCurElementAttributeValue;
      theCurElement = theCurElements[i];
      addToTheAttribute();      
     }      
    } else {
     let skip;
     }
    }
   } else {
   theCurElementAttributeValue = theCurElement.getAttribute(attribute);  
   theAddContent = addWhat + theCurElementAttributeValue;  
   addToTheAttribute();
  }
 } else {
  if (usingAll == 1) {
   if (attribute == "class") {runClass = 1;}
   for (i = 0; i < theCurElementsLen; i++) {
    if (theCurElements[i].hasAttribute(attribute)) {
     theCurElementAttributeValue = theCurElements[i].getAttribute(attribute);  
     if (attribute == "class") {
      let theCurElementsData = theCurElements[i].dataset;
      theCurElementsData.tempunlikelyaddtoattributewillbedataset = "1";     
      // theAddContent = theCurElementAttributeValue + " " + addWhat;  
     } else {
      theAddContent = theCurElementAttributeValue + addWhat;
      theCurElement = theCurElements[i];
      addToTheAttribute();            
     }      
    } else {
     let skip;
     }
    }
   } else { 
   theCurElementAttributeValue = theCurElement.getAttribute(attribute);  
   theAddContent = theCurElementAttributeValue + addWhat;
   addToTheAttribute();
  }
 }
 if (runClass == 1) {
  theCurElements = document.querySelectorAll("[data-tempunlikelyaddtoattributewillbedataset]");
  theCurElementsLen = theCurElements.length;  
  if (addWhere == "before") {
   for (i = 0; i < theCurElementsLen; i++) {
    theAddContent = addWhat + theCurElementAttributeValue;
    theCurElement = theCurElements[i];
    addToTheAttribute();
    theCurElement.removeAttribute("data-tempunlikelyaddtoattributewillbedataset");
   }
  } else {
   for (i = 0; i < theCurElementsLen; i++) {
    theAddContent = theCurElementAttributeValue + addWhat;
    theCurElement = theCurElements[i];
    addToTheAttribute();
    theCurElement.removeAttribute("data-tempunlikelyaddtoattributewillbedataset");
   }
  }
 }
}

function addHTMLToText(tag, parElement, parElementIdentifier, attributes, wrapWords) {
  var useID=0, useClass=0, useData=0, useTag=0, addingClass = 0, wrappingWords = 0;
  var theAttribute, theAttributeValue, addAttribute = 0, addAttributes = 0;
  var theCurHTML, theCurStoredHTML, theTag, theTagAttribute, theTagAttributes, theTagAttributesLen;
  var wrapWordsFound, wrapWordsFoundBack, storageForWrapWords, curWrapWordStorage, multipleWrapWords = 0;
  var theParElement, theParElementIndex = 0;  
  
  var addTheHTML = function() {
   if (wrappingWords == 1) {
    theCurStoredHTML = theParElement.innerHTML;    
    if (theCurStoredHTML.indexOf("<") > -1 && theCurStoredHTML.indexOf("</") > -1) {
     let skip;
    } else {
     if (theCurStoredHTML.indexOf(wrapWords) == theCurStoredHTML.lastIndexOf(wrapWords)) {
      if (theCurStoredHTML.indexOf(wrapWords) == -1) {
       let skip;
      } else {
       theCurHTML = theCurStoredHTML.substr(theCurStoredHTML.indexOf(wrapWords), wrapWords.length);       
      }
     } else {
      if (theCurStoredHTML.indexOf(wrapWords) == -1) {
       let skip;
      } else {
       multipleWrapWords = 1;
       wrapWordsFound = 0;
       storageForWrapWords = theCurStoredHTML;
       let stillWrapWord = 1;
       while (stillWrapWord ==1) {
        if (storageForWrapWords.indexOf(wrapWords) > -1) {
         storageForWrapWords = storageForWrapWords.replace(wrapWords, "--|__--__It__IS__UNlikeLY__ThIs__TeXt__wIlL__bE__hErE__--__|--");
         wrapWordsFound++;
        } else {
         stillWrapWord = 0;
        }
       }
       wrapWordsFoundBack = wrapWordsFound;
       theCurHTML = theCurStoredHTML.substr(theCurStoredHTML.indexOf(wrapWords), wrapWords.length);       
      } 
     }    
    }
   } else {
    theCurHTML = theParElement.innerHTML;
   }   
   if (attributes == 0) {
    theTag = "<" + tag + ">" + theCurHTML + "</" + tag + ">";
   } else {
    if (addAttributes == 0) {
     if (addAttribute == 1) {
      theTagAttribute = " " + theAttribute + "=\"" + theAttributeValue + "\"";
      if (wrappingWords == 1) {
       if (
        theCurStoredHTML.indexOf("<") > -1 &&
        theCurStoredHTML.indexOf(">") > -1 &&   
        theCurStoredHTML.indexOf("</") > -1
        ) {
         theTag = "<" + tag + ">" + theCurHTML + "</" + tag + ">";
        } else {
         theTag = "<" + tag + theTagAttribute + ">" + theCurHTML + "</" + tag + ">";
        }            
      } else {
       theTag = "<" + tag + theTagAttribute + ">" + theCurHTML + "</" + tag + ">";
      }      
     } else {
      let skip;
      theTag = theParElement.innerHTML;
     }
    } else {
     let updateNeeded;
     theTag = theParElement.innerHTML;
    }    
   } 
   if (wrappingWords == 1) {
    if (multipleWrapWords == 1) {
     while (wrapWordsFound >= 0) {
      storageForWrapWords = storageForWrapWords.replace("--|__--__It__IS__UNlikeLY__ThIs__TeXt__wIlL__bE__hErE__--__|--", theTag); 
      wrapWordsFound--;
     }
     theParElement.innerHTML = storageForWrapWords;
    } else {
     theParElement.innerHTML = theCurStoredHTML.replace(theCurHTML, theTag);
    }    
   } else {
    theParElement.innerHTML = theTag;
   }         
  };
  var attributeConfig = function() {
   if (attributes == 0) {
    let skip;
   } else {
    if (attributes.indexOf(",") == -1) {
     if (attributes.indexOf("::") == -1) {
      let skip;
     } else {
      theAttribute = attributes.substr(0,attributes.indexOf("::"));
      theAttributeValue = attributes.substr(attributes.indexOf("::")+2);
      addAttribute = 1;      
      addAttributes = 0;
     }
    } else {
     let updateNeeded;
    }
   }
   addTheHTML();
  };
  var parElementConfigI = function() {
   if (parElementIdentifierLowCase == "id") useID = 1;

   if (parElementIdentifierLowCase.indexOf("class") > -1) {
    useClass = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("class", "");
   }
   if (parElementIdentifierLowCase.indexOf("data") > -1) {
    useData = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("data", "");
   }
   if (parElementIdentifierLowCase.indexOf("tag") > -1) {
    useTag = 1;
    theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
   }
  };
  var parElementConfigII = function() {
   if (useID == 1) {
     theParElement = document.getElementById(parElement);
    }
    if (useClass == 1) {
     theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
    }
    if (useData == 1) {
     theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
    }
    if (useTag == 1) {
     theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
    }    
    attributeConfig();
  };  
  
  if (parElementIdentifier == undefined) {
   parElementIdentifier = "id";
   attributes = 0;
   wrapWords = 0;
   useID = 1;
   parElementConfigI();
   parElementConfigII();   
  } else {
   var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
   if (attributes == undefined) {
    attributes = 0;
    wrapWords = 0;
   } else {
    if (wrapWords == undefined) {
     wrapWords = 0;
    } else {
     if (wrapWords != 0) { 
      wrappingWords = 1;
    }
   }
   parElementConfigI();
   parElementConfigII();
  }
 }
}

// Changing Elements
function changeToUpperCase(variableToChange) {
 let theVariableToUpperCase = variableToChange.toUpperCase();
 return theVariableToUpperCase;
}
function changeToLowerCase(variableToChange) {
 let theVariableToLowerCase = variableToChange.toLowerCase();
 return theVariableToLowerCase;
}

function changeToTable(colNumber, colTitles, extractTags, parElement, parElementIdentifier, relocate, relocateElement, relocateElementIdentifier, addHTML) {
 var useID=0, useClass=0, useData=0, useTag=0, addingClass = 0, addingHTML = 0;
 var theParElement, theParElementInnerHTML, theParElementInnerHTMLLen, theParElementIndex = 0;  
 var theColTitles, theColTitlesLen, theColTitle, useColMark = 0, colMarkCount = 0, balanceColumns = 0, columnsUnbalanced;
 var extractTagsArr, extractTagsArrLen, theExtractTag, theExtractTags, theExtractTagsLen, useCharacterMark = 0, characterMarkCount = 0, extractMark = "", extractMarkLen, maxCol, firstRunMaxCol = 0, lessThanMax, colDiff;
 var usingText = 0, usingWhatText = 0, splittingHow = 0, isUsingWords = 0, splitWordCount = 0, isUsingSplitCharacter = 0, theSplitCharacter = 0,
     splitCharacterCount, splitTableDataCount;
 var curMarkCount = 0, curExtractTag, curExtractData, tempCurExtractData, curData;
 var theAddedHTML, curAddedHTML, addHTMLArray = [], addHTMLArrayLen, isAddingTag = 0, addingTag, addingCloseTag, addingWhere, addingWhatIndex, isRelocateElementIdentifierDefined = 1;
 var addHTMLAltering, addHTMLAlterArray, addHTMLAlterArrayLen, 
     addHTMLAlterHow, addHTMLAlterWhat, addHTMLAlterAs, addHTMLAlterWithWhat, addHTMLAlterCaseHow,
     curAlterValue, curAlterText, curAlterIndexA, curAlterIndexB, curStorage, 
     curAlterInsert, curAlterCase, usedDoubleQuotes;
 var theTableCols = "", theTableRows = "", theTable = "";
 { // OUTPUT
 var outPutTable = function() {
  if (relocate == 1) {
   if (relocateElementIdentifier == "id") {
    document.getElementById(relocateElement).innerHTML = theTable;
   } else {
    let updateNeeded;
   }   
  } else {
   if (relocateElement == "self") {
    if (relocateElementIdentifier == "id") {
     theParElement.innerHTML = theTable;
    } else {
     if (relocateElementIdentifier == parElementIdentifier) {
      theParElement.innerHTML = theTable;
     } else {
      let skip;
     }
    }
   } else {
    if (relocateElementIdentifier == parElementIdentifier && useTag == 1) {
     let relocateNew = document.createElement(parElement);
     relocateNew.innerHTML = theTable;
     theParElement.insertAdjacentElement("beforebegin", relocateNew);     
     theParElement.remove();
    } else {
     if (relocateElementIdentifier == "tag") {
      let relocateNew = document.createElement(relocateElement);      
      relocateNew.innerHTML = theTable;
      theParElement.insertAdjacentElement("beforebegin", relocateNew);
      theParElement.remove();     
     } else {
      let relocateNew = document.createElement("div");      
      relocateNew.innerHTML = theTable;      
      if (relocateElement.indexOf("::") == -1) {
       relocateNew.setAttribute(relocateElementIdentifier, relocateElement);
      } else if (isRelocateElementIdentifierDefined == 0) {
       relocateNew.setAttribute(parElementIdentifier, parElement);       
      }      
      theParElement.insertAdjacentElement("beforebegin", relocateNew);                  
      theParElement.remove();      
     }
    }   
   }
  }
 };
 var makeTheTable = function() {
  if (addingClass == 0) {
   theTable += "<table>" + theTableCols + theTableRows + "</table>";
   outPutTable();
  } else {
   let updateNeeded;
  }
 };
 }
 {// MAKE
 var countCharacterMarks = function(check) {
  if (check == undefined) check = 0;
  tempCurExtractData = curExtractData;
  let markCharactersCounted = 0;
  characterMarkCount = 0;
  while (markCharactersCounted == 0) {
   if (tempCurExtractData.indexOf(extractMark) > -1) {
    tempCurExtractData = tempCurExtractData.replace(extractMark, "");
    characterMarkCount++;
   } else {
    markCharactersCounted = 1;
   }
  }
  if (extractMarkLen > 2) {
   colMarkCount = characterMarkCount;
   if (check == "findMax") {
    if (firstRunMaxCol == 0) {
     firstRunMaxCol = 1;
     maxCol = characterMarkCount;
    } else {
     if (characterMarkCount > maxCol) {
      maxCol = characterMarkCount;
     }
    }
   }   
  }
  if (check == 1) {
   checkText(1);
  }
 };
 var checkText = function(curIndex) {  
  if ((curIndex == 0 || curIndex == 1) && extractMarkLen > 2) {
   if (characterMarkCount >= colNumber) {    
    // UPDATE MAY BE NEEDED
    removeLastWord(extractMark, theExtractTag, "tag" + i);
    curExtractData = theExtractTags[i].innerHTML;
    countCharacterMarks(1);
   }
  }
  if (curIndex != 1) {
   if (characterMarkCount == 0) {
    let updateNeeded;
    curData = curExtractData;
   } else {
    if (curExtractData.indexOf(extractMark) == curExtractData.lastIndexOf(extractMark)) {
     curData = curExtractData.substr(0, curExtractData.indexOf(extractMark));
     curExtractData = curExtractData.replace(extractMark, "");
     curExtractData = curExtractData.replace(curData, "");     
    } else {
     curData = curExtractData.substr(0, curExtractData.indexOf(extractMark));
     curExtractData = curExtractData.substr(curExtractData.indexOf(extractMark) + extractMark.length);
    }
    if (curIndex == 0) {
     if (curData.length <= 1) {     
      checkText();
     }
    }   
   } 
  }
 };
 var i;
 var makeRows = function() { 
  if (addingClass == 0) {
   if (useCharacterMark == 1) {
    if (usingText == 1) {
     if (theSplitCharacter == "n") {
      if (splitWordCount <= 1) {
       if (colNumber <= 2) {
        splitWordCount = 0;
        replaceNewLines("--COL_MARK_iS_unLikELY_tO2_BE_in_the_TExT_thHat_isConVERteD_To_A_TaBlE--", parElement, parElementIdentifier, 1, 1, 2);
       } else {
        splitWordCount = -1;
        replaceNewLines("--COL_MARK_iS_unLikELY_tO2_BE_in_the_TExT_thHat_isConVERteD_To_A_TaBlE--", parElement, parElementIdentifier, 1, 1, 0);
       }
      } else {
       replaceNewLines("--COL_MARK_iS_unLikELY_tO2_BE_in_the_TExT_thHat_isConVERteD_To_A_TaBlE--", parElement, parElementIdentifier, 1, 1, Number(splitWordCount));      
      }
      {// TEXT IS NESTED IN ANOTHER HTML ELEMENT
      let tempParElementInnerHTML = theParElement.innerHTML;       
      tempParElementInnerHTML = tempParElementInnerHTML.split("--COL_MARK_iS_unLikELY_tO2_BE_in_the_TExT_thHat_isConVERteD_To_A_TaBlE--");
      if (tempParElementInnerHTML[0].indexOf("<") > -1 && tempParElementInnerHTML[0].indexOf("</") == -1) {
       theParElementInnerHTML = theParElement.innerText;
      } else {
       theParElementInnerHTML = theParElement.innerHTML;
      }
      }
      theParElementInnerHTML = theParElementInnerHTML.split("--COL_MARK_iS_unLikELY_tO2_BE_in_the_TExT_thHat_isConVERteD_To_A_TaBlE--");
      theParElementInnerHTMLLen = splitCharacterCount = theParElementInnerHTML.length;      
      if (splitWordCount == 0) {
       if (splitCharacterCount%2 != 0) { splitCharacterCount++; }
       splitTableDataCount = splitCharacterCount/2;       
      } else {       
       splitTableDataCount = Math.round(splitCharacterCount/splitWordCount);
      }
// START MAKING ROWS
      let textBasedTableRowsAreMade = 0;
      while (textBasedTableRowsAreMade == 0) {
       for (i = 0; i < theParElementInnerHTMLLen; i+=colNumber) {
        if (splitWordCount == 0 || splitWordCount == 2 && colNumber == 2) {
         if (i >= theParElementInnerHTMLLen-1 || i+1 >= theParElementInnerHTMLLen-1) {
          textBasedTableRowsAreMade = 1;
         }                  
         if (addingWhatIndex >= 0) {
          if (addHTMLAltering == 1) {
           if (curAlterCase == "l") {
            if (usedDoubleQuotes == 1) {
             if (addingWhatIndex == i-i) {
              theTableRows += "<tr><td>" + addingTag + curAlterValue + changeToLowerCase(theParElementInnerHTML[i]) + '"' + curAlterText + ">" + theParElementInnerHTML[i] + addingCloseTag + "</td><td>";                      
              theTableRows += theParElementInnerHTML[i+1] + "</td></tr>";                              
             } else {
              if (addingWhatIndex == i+1) {
               theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";                      
               theTableRows += addingTag + curAlterValue + changeToLowerCase(theParElementInnerHTML[i+1]) + '"' + curAlterText + ">" + theParElementInnerHTML[i+1] + addingCloseTag + "</td></tr>";                                                       
              } else {
               theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";
               theTableRows += theParElementInnerHTML[i+1] + "</td></tr>";                      
              }
             }
            } else {
             if (addingWhatIndex == i-i) {
              theTableRows += "<tr><td>" + addingTag + curAlterValue + changeToLowerCase(theParElementInnerHTML[i]) + "'" + curAlterText + ">" + theParElementInnerHTML[i] + addingCloseTag + "</td><td>";                      
              theTableRows += theParElementInnerHTML[i+1] + "</td></tr>";                              
             } else {
              if (addingWhatIndex == i+1) {
               theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";                      
               theTableRows += addingTag + curAlterValue + changeToLowerCase(theParElementInnerHTML[i+1]) + "'" + curAlterText + ">" + theParElementInnerHTML[i+1] + addingCloseTag + "</td></tr>";                                                       
              } else {
               theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";                      
               theTableRows += theParElementInnerHTML[i+1] + addingCloseTag + "</td></tr>";                      
              }
             }
            }
           } else if (curAlterCase == "u") {
            if (usedDoubleQuotes == 1) {
             if (addingWhatIndex == i-i) {
              theTableRows += "<tr><td>" + addingTag + curAlterValue + changeToUpperCase(theParElementInnerHTML[i]) + '"' + curAlterText + ">" + theParElementInnerHTML[i] + addingCloseTag + "</td><td>";                      
              theTableRows += theParElementInnerHTML[i+1] + "</td></tr>";                              
             } else {
              if (addingWhatIndex == i+1) {
               theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";                      
               theTableRows += addingTag + curAlterValue + changeToUpperCase(theParElementInnerHTML[i+1]) + '"' + curAlterText + ">" + theParElementInnerHTML[i+1] + addingCloseTag + "</td></tr>";                                                       
              } else {
               theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";
               theTableRows += theParElementInnerHTML[i+1] + "</td></tr>";                      
              }
             }
            } else {
             if (addingWhatIndex == i-i) {
              theTableRows += "<tr><td>" + addingTag + curAlterValue + changeToUpperCase(theParElementInnerHTML[i]) + "'" + curAlterText + ">" + theParElementInnerHTML[i] + addingCloseTag + "</td><td>";                      
              theTableRows += theParElementInnerHTML[i+1] + "</td></tr>";                              
             } else {
              if (addingWhatIndex == i+1) {
               theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";                      
               theTableRows += addingTag + curAlterValue + changeToUpperCase(theParElementInnerHTML[i+1]) + "'" + curAlterText + ">" + theParElementInnerHTML[i+1] + addingCloseTag + "</td></tr>";                                                       
              } else {
               theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";                      
               theTableRows += theParElementInnerHTML[i+1] + addingCloseTag + "</td></tr>";                      
              }
             }
            }
           } else {
            if (usedDoubleQuotes == 1) {
             if (addingWhatIndex == i-i) {
              theTableRows += "<tr><td>" + addingTag + curAlterValue + '"' + curAlterText + ">" + theParElementInnerHTML[i] + addingCloseTag + "</td><td>";                      
              theTableRows += theParElementInnerHTML[i+1] + "</td></tr>";                              
             } else {
              if (addingWhatIndex == i+1) {
               theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";                      
               theTableRows += addingTag + curAlterValue + '"' + curAlterText + ">" + theParElementInnerHTML[i+1] + addingCloseTag + "</td></tr>";                                                       
              } else {
               theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";
               theTableRows += theParElementInnerHTML[i+1] + "</td></tr>";                      
              }
             }
            } else {
             if (addingWhatIndex == i-i) {
              theTableRows += "<tr><td>" + addingTag + curAlterValue + "'" + curAlterText + ">" + theParElementInnerHTML[i] + addingCloseTag + "</td><td>";                      
              theTableRows += theParElementInnerHTML[i+1] + "</td></tr>";                              
             } else {
              if (addingWhatIndex == i+1) {
               theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";                      
               theTableRows += addingTag + curAlterValue + "'" + curAlterText + ">" + theParElementInnerHTML[i+1] + addingCloseTag + "</td></tr>";                                                       
              } else {
               theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";                      
               theTableRows += theParElementInnerHTML[i+1] + addingCloseTag + "</td></tr>";                      
              }
             }
            }           
           }
          } else {
           if (addingWhatIndex == i-i) {
            theTableRows += "<tr><td>" + addingTag + theParElementInnerHTML[i] + addingCloseTag + "</td><td>";
            theTableRows += theParElementInnerHTML[i+1] + "</td></tr>";                  
           } else {
            if (addingWhatIndex == i+1) {
             theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";
             theTableRows += addingTag + theParElementInnerHTML[i+1] + addingCloseTag + "</td></tr>";                             
            } else {
             theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";
             theTableRows += theParElementInnerHTML[i+1] + "</td></tr>";                   
            }
           }
          }         
         } else {
          theTableRows += "<tr><td>" + theParElementInnerHTML[i] + "</td><td>";
          theTableRows += theParElementInnerHTML[i+1] + "</td></tr>";                
         }
        } else {        
         if (i >= theParElementInnerHTMLLen || i+colNumber >= theParElementInnerHTMLLen-1) {
          textBasedTableRowsAreMade = 1;
         }          
         for (ii = 0; ii < colNumber; ii++) {
          if (addingWhatIndex >= 0) {
           if (addHTMLAltering == 1) {           
            var addingHTMLAlteringByText = function(theCase, theQuote) {
             let curQuote = ""; let curCase = "";             
             if (theCase == "l") curCase = changeToLowerCase(theParElementInnerHTML[i+ii]); else if (theCase == "u") curCase = changeToUpperCase(theParElementInnerHTML[i+ii]); else curCase = "";
             if (theQuote == 1) curQuote = '"'; else if (theQuote == 0) curQuote = "'"; else curQuote = "'";
            // addingTag + curAlterValue + curCase + curQuote + curAlterText + ">" + theParElementInnerHTML[i] + addingCloseTag + 
            
             if (ii == 0) {
              if (addingWhatIndex == ii) theTableRows += "<tr><td>" + addingTag + curAlterValue + curCase + curQuote + curAlterText + ">" + theParElementInnerHTML[i+ii] + addingCloseTag + "</td><td>";                      
              else theTableRows += "<tr><td>" + theParElementInnerHTML[i+ii] + "</td><td>";
             } else if (ii == colNumber-1) {
              if (addingWhatIndex == ii) {
               if (theParElementInnerHTML[i+ii]) theTableRows += addingTag + curAlterValue + curCase + curQuote + curAlterText + ">" + theParElementInnerHTML[i+ii] + addingCloseTag + "</td></tr>";
               else theTableRows += " " + "</td></tr>";             
              } else {
               if (theParElementInnerHTML[i+ii]) theTableRows += theParElementInnerHTML[i+ii] + "</td></tr>";
               else theTableRows += " " + "</td></tr>";             
              }
             } else {
              if (addingWhatIndex == ii) {
               if (theParElementInnerHTML[i+ii]) theTableRows += addingTag + curAlterValue + curCase + curQuote + curAlterText + ">" + theParElementInnerHTML[i+ii] + addingCloseTag + "</td><td>";           
               else theTableRows += " " + "</td><td>";             
              } else {
               if (theParElementInnerHTML[i+ii]) theTableRows += theParElementInnerHTML[i+ii] + "</td><td>";           
               else theTableRows += " " + "</td><td>";             
              }
             }
            };
            // USING ABOVE GUNCTION           
            addingHTMLAlteringByText(curAlterCase, usedDoubleQuotes);     
           } else {
            if (ii == 0) {
             if (addingWhatIndex == ii) theTableRows += "<tr><td>" + addingTag + theParElementInnerHTML[i] + addingCloseTag + "</td><td>";                      
             else theTableRows += "<tr><td>" + theParElementInnerHTML[i+ii] + "</td><td>";
            } else if (ii == colNumber-1) {
             if (addingWhatIndex == ii) {
              if (theParElementInnerHTML[i+ii]) theTableRows += addingTag + theParElementInnerHTML[i+ii] + addingCloseTag + "</td></tr>";
              else theTableRows += " " + "</td></tr>";             
             } else {
              if (theParElementInnerHTML[i+ii]) theTableRows += theParElementInnerHTML[i+ii] + "</td></tr>";
              else theTableRows += " " + "</td></tr>";             
             }
            } else {
             if (addingWhatIndex == ii) {
              if (theParElementInnerHTML[i+ii]) theTableRows += addingTag + theParElementInnerHTML[i+ii] + addingCloseTag + "</td><td>";           
              else theTableRows += " " + "</td><td>";             
             } else {
              if (theParElementInnerHTML[i+ii]) theTableRows += theParElementInnerHTML[i+ii] + "</td><td>";           
              else theTableRows += " " + "</td><td>";             
             }
            } 
           }
          } else {
           if (ii == 0) {
            theTableRows += "<tr><td>" + theParElementInnerHTML[i+ii] + "</td><td>";
           } else if (ii == colNumber-1) {
            if (theParElementInnerHTML[i+ii]) theTableRows += theParElementInnerHTML[i+ii] + "</td></tr>";
            else theTableRows += " " + "</td></tr>";
           } else {
            if (theParElementInnerHTML[i+ii]) theTableRows += theParElementInnerHTML[i+ii] + "</td><td>";           
            else theTableRows += " " + "</td><td>";
           }          
          }
         }
        }
       }
      }
     } else {
      let updateNeeded;
     }
    } else {
     for (i = 0; i < theExtractTagsLen; i++) {
      curExtractData = theExtractTags[i].innerHTML;
      countCharacterMarks("findMax");
     }    
     //console.log(maxCol);
     //console.log(colMarkCount);
     for (i = 0; i < theExtractTagsLen; i++) {
       curExtractData = theExtractTags[i].innerHTML;
       countCharacterMarks();
       for (ii = 0; ii <= colMarkCount; ii++) {
        if (colMarkCount < maxCol) {        
         lessThanMax = 1;
        } else {
         lessThanMax = 0;
        }
        if (ii == 0) {
         checkText(0);
         if (addingWhatIndex == ii) {
          if (addHTMLAltering == 1) {
           let tempCurData = curData;
           (function () {
            let hasHTML = 1;           
            while (hasHTML == 1) {
             if (tempCurData.indexOf("<") > -1) {
              tempCurData = tempCurData.replace(tempCurData.substr(tempCurData.indexOf("<"), tempCurData.indexOf(">") + 1), "");
             } else {
              hasHTML = 0;
             }
            }           
           }) ();
           if (curAlterCase == "l") {
            if (usedDoubleQuotes == 1) {
             theTableRows += "<tr><td>" + addingTag + curAlterValue + changeToLowerCase(tempCurData) + '"' + curAlterText + ">" + curData + addingCloseTag + "</td><td>";            
            } else {
             theTableRows += "<tr><td>" + addingTag + curAlterValue + changeToLowerCase(tempCurData) + "'" + curAlterText + ">" + curData + addingCloseTag + "</td><td>";
            }          
           } else if (curAlterCase == "u") {
            if (usedDoubleQuotes == 1) {
             theTableRows += "<tr><td>" + addingTag + curAlterValue + changeToUpperCase(tempCurData) + '"' + curAlterText + ">" + curData + addingCloseTag + "</td><td>";
            } else {
             theTableRows += "<tr><td>" + addingTag + curAlterValue + changeToUpperCase(tempCurData) + "'" + curAlterText + ">" + curData + addingCloseTag + "</td><td>";
            }
           } else {
            theTableRows += "<tr><td>" + addingTag + curData + addingCloseTag + "</td><td>";
           }           
          } else {
           theTableRows += "<tr><td>" + addingTag + curData + addingCloseTag + "</td><td>";
          }          
         } else {
          theTableRows += "<tr><td>" + curData + "</td><td>";
         }
         if (colMarkCount == 0) {
          if (lessThanMax == 1) {
           //console.log(maxCol - colMarkCount);
           colDiff = (maxCol - colMarkCount) - 2;
           for (iii = 0; iii < colDiff; iii++) {            
            if (iii == colDiff - 1) {
             theTableRows += " " + "</td></tr>";            
            } else {
             theTableRows += " " + "</td><td>";            
            }
           }
          }        
         }
        } else if (ii == colMarkCount) {       
         if (colNumber >= 3) {
          if (curExtractData.indexOf(extractMark) == -1) {
           if (lessThanMax == 1) {
            curExtractData = curExtractData.replace(extractMark, "");
            theTableRows += curExtractData + "</td><td>";
           } else {
            curExtractData = curExtractData.replace(extractMark, "");
            theTableRows += curExtractData + "</td></tr>";                    
           }
          } else {
           if (curExtractData.indexOf(extractMark) == curExtractData.lastIndexOf(extractMark)) {          
            checkText();          
            if (lessThanMax == 1) {
             theTableRows += curExtractData + "</td><td>";
            } else {
             theTableRows += curExtractData + "</td></tr>";
            }
           } else {          
            checkText();          
            if (lessThanMax == 1) {
             theTableRows += curData + "</td><td>";
            } else {
             theTableRows += curData + "</td></tr>";
            }           
           }
          }
         } else {
          if (lessThanMax == 1) {
           curData = curExtractData;
           theTableRows += curData + "</td><td>";                                  
          } else {
           curData = curExtractData;
           theTableRows += curData + "</td></tr>";                         
          }
         }
         if (lessThanMax == 1) {          
          colDiff = (maxCol - colMarkCount) - 2;
          for (iii = 0; iii < colDiff; iii++) {            
           if (iii == colDiff - 1) {
            theTableRows += " " + "</td></tr>";            
           } else {
            theTableRows += " " + "</td><td>";            
           }
          }
         } 
        } else {
         if (colNumber >= 4) { 
          if (curExtractData.indexOf(extractMark) == -1) {
           theTableRows += curExtractData + "</td><td>";
           curExtractData = "";
          } else {
           if (curExtractData.indexOf(extractMark) == curExtractData.lastIndexOf(extractMark)) {
            checkText();          
            theTableRows += curData + "</td><td>";         
           } else {
            checkText();          
            theTableRows += curData + "</td><td>";          
           }     
          }
         } else {
          checkText();
          theTableRows += curData + "</td><td>";        
         }
        }
       }
      if (theExtractTags[i].getElementsByTagName(theExtractTag).length >= 1) {
       i = i + theExtractTags[i].getElementsByTagName(theExtractTag).length;
      } 
     }    
    }
   } else {
    let updateNeeded;
   }
  } else {
   let updateNeeded;
  }
 };
 var makeColumns = function() {
  if (addingClass == 0) {
   if (balanceColumns == 1) {
    columnsUnbalanced = colNumber - theColTitlesLen;
    let theColumnBalanceIndex = theColTitlesLen;
    let columnsAreUnbalanced = 1;
    while (columnsAreUnbalanced == 1) {
     theColTitles[theColumnBalanceIndex] = "Column";
     theColumnBalanceIndex++;
     theColTitlesLen = theColTitles.length;
     if (theColTitlesLen != colNumber) {
      columnsAreUnbalanced = 1;
     } else {
      columnsAreUnbalanced = 0;
     }
    }
   }
   for (i = 0; i < theColTitlesLen; i++) {
    if (i == 0) {
     theTableCols += "<tr><th>" + theColTitles[i] + "</th><th>";
    } else if (i == theColTitlesLen - 1) {
     theTableCols +=  theColTitles[i] + "</th></tr>";
    } else {
     theTableCols +=  theColTitles[i] + "</th><th>";
    }
   }
  } else {
   let updateNeeded;
  }
 };
 }
 {// CONFIG MAKE
 var tableConfig = function() {      
  if (useColMark == 1) {
   theColTitles = replaceWordInVariable(", ", ",", colTitles);
   theColTitles = replaceWordInVariable(" ,", ",", colTitles);
   theColTitles = colTitles.split(",");
   theColTitlesLen = theColTitles.length;
   if (theColTitlesLen < colNumber) balanceColumns = 1;
   if (addingClass == 0) {
    makeColumns();
    makeRows();
    makeTheTable();    
   } else {
    let updateNeeded;
   }
  } else {
   let updateNeeded;
  }   
 };
 var extractTagConfig = function() {
  var extractWithMark = function(onOff) {
   if (onOff == undefined) onOff = 0;
   useCharacterMark = 1;
   useColMark = 1;
   colMarkCount = colNumber - 1;
   theExtractTag = extractTags.substr(0, extractTags.indexOf(":"));
   if (usingText == 0) 
   { // BY HTML - currently onely works with one tag.
    theExtractTags = theParElement.getElementsByTagName(theExtractTag);
    theExtractTagsLen = theExtractTags.length;        
   } else 
   { // BY NEW LINE or SPLIT CHAR> - Using extraction from only text with either by new lines or a split character.
    theExtractTags = theExtractTag.substr(1, theExtractTag.length - theExtractTag.lastIndexOf(":"));
    splittingHow = usingWhatText = theExtractTags;
    if (theExtractTags.length > 1) 
    {// UNBALANCED TABLE or NEW LINES
     let updateNeeded;
     isUsingWords = 1;
     splittingHow = usingWhatText = theExtractTags[0];
     splitWordCount = theExtractTags.substr(1);
    } else 
    {// BALANCED TABLE
     isUsingWords = 0;
     splittingHow = usingWhatText = theExtractTags[0];
     splitWordCount = 0;
    }
    {// BY TEXT CONFIG
    switch(splittingHow) {
     case "s":
      isUsingSplitCharacter = 1;
      theSplitCharacter = extractTags.substr(extractTags.indexOf(":") + 1);
      break;
     case "w":
      isUsingSplitCharacter = 0;
      theSplitCharacter = extractTags.substr(extractTags.indexOf(":") + 1);
      break;
     default:
      isUsingSplitCharacter = 0;
      theSplitCharacter = "n";      
    }
    }
   }
   extractMark = extractTags.substr(extractTags.indexOf(":") + 1);
   extractMarkLen = extractMark.length;    
   if (onOff == 1) tableConfig();
  };
 // Determine type of extraction. 
  if (extractTags.indexOf(",") == -1) 
  {// BY HTML (1) OR TEXT
   if (extractTags[0] == "_") {
    usingText = 1;
    extractWithMark(0);
    tableConfig();
   } else {    
    extractWithMark(1);
   }
  } else 
  {// BY MULTIPLE HTML
   let updateNeeded;
  }
 };
 }
 {// CONFIG ADDED HTML
 var alterAddedHTML = function() {// MAKE
  var nowAlterAddedHTML = function(ai, aii, aiii, aiv, av) {   
   if (isAddingTag == 1) {
    if (ai == 1) {
     if (aii == "attribute") {      
      if (aiii == "link") {       
       if (aiv == "table") {        
        if (av == "modifyText") {
         curAlterInsert = "";
         curStorage = addingTag;          
         curAlterText = curStorage.substr(curStorage.indexOf(addHTMLAlterWhat) + addHTMLAlterWhat.length + 2);
         addingTag = addingTag.replace(curAlterText, "");
         usedDoubleQuotes = 0;
         if (curAlterText.indexOf('"') > -1) usedDoubleQuotes = 1;

         if (usedDoubleQuotes == 1) {
          curIndexA = curAlterText.indexOf('"');            
          curAlterValue = curAlterText.substr(0, curIndexA);
          curStorage = curAlterValue;
          if (curAlterValue.lastIndexOf('"') == curAlterValue.length - 1) {
           curAlterValue = curAlterValue.substr(0, curAlterValue.length - 2);
          } else {
           let skip;
          }
         } else {
          curIndexA = curAlterText.indexOf("'");           
          curAlterValue = curAlterText.substr(0, curIndexA);
          curStorage = curAlterValue;
          if (curAlterValue.lastIndexOf("'") == curAlterValue.length - 1) {
           curAlterValue = curAlterValue.substr(0, curAlterValue.length - 2);
          } else {
           let skip;
          }
         }         

         if (addHTMLAlterAs == "anchor") {
          if (curAlterValue.indexOf("#") == -1) {   
           if (usedDoubleQuotes == 0) {
            curAlterText = curAlterText.replace(curStorage + "' ", "");
           } else {
            curAlterText = curAlterText.replace(curStorage + '" ', "");
           }                      
           curAlterValue += "#" + curAlterInsert;           
           if (curAlterText.lastIndexOf(">") == curAlterText.length -1 ) curAlterText = curAlterText.replace(">", "");         
          } else {
           if (usedDoubleQuotes == 0) {
            curAlterText = curAlterText.replace(curStorage + "' ", "");
           } else {
            curAlterText = curAlterText.replace(curStorage + '" ', "");
           }                      
           curAlterValue += curAlterInsert;
           if (curAlterText.lastIndexOf(">") == curAlterText.length -1 ) curAlterText = curAlterText.replace(">", "");                     
          } 
         } else {
          let updateNeeded;
         }
         if (addHTMLAlterWithWhat == "innerHTML") {
          curcurAlterInsert = "self";           
         } else {
          let updateNeeded;
         }
         if (addHTMLAlterCaseHow) {
          curAlterCase = addHTMLAlterCaseHow[0];
         } else {
          let updateNeeded;
         }          
        } else {
         let updateNeeded;
        }
       } else {
        let updateNeeded;
       }
      } else {
       let updateNeeded;
      }
     } else {
      let updateNeeded;
     }
    } else {
     let updateNeeded;
    }
   } else {
    let updateNeeded;
   }
  };
  if (addHTMLAltering == 1) {    
   if (addHTMLAlterArrayLen < 5) {
    if (addHTMLAlterArrayLen < 4) {
     if (addHTMLAlterArrayLen < 3) {
      let skip;
     } else {
      addHTMLAlterHow = addHTMLAlterArray[0];
      addHTMLAlterWhat = addHTMLAlterArray[1];
      addHTMLAlterAs = addHTMLAlterArray[2];
      addHTMLAlterWithWhat = addHTMLAlterArray[2]; 
      addHTMLAlterCaseHow = 0;
     }
    } else {
     addHTMLAlterHow = addHTMLAlterArray[0];
     addHTMLAlterWhat = addHTMLAlterArray[1];
     addHTMLAlterAs = addHTMLAlterArray[2];
     addHTMLAlterWithWhat = addHTMLAlterArray[3];      
     addHTMLAlterCaseHow = 0;
    }
   } else {
    addHTMLAlterHow = addHTMLAlterArray[0];
    addHTMLAlterWhat = addHTMLAlterArray[1];
    addHTMLAlterAs = addHTMLAlterArray[2];
    addHTMLAlterWithWhat = addHTMLAlterArray[3];      
    addHTMLAlterCaseHow = addHTMLAlterArray[4];
   }    
  }
  var alteri, alterii, alteriii, alteriv, alterv;
  {
  switch(addHTMLAlterHow) {
   case "append":
    alteri = 1;
    break;
   default:
    alteri = 0;
  }
  switch(addHTMLAlterWhat) {
   case "href":
    alterii = "attribute";
    break;
   case "class":
    alterii = "attribute";
    break;    
   case "id":
    alterii = "attribute";
    break; 
   case "style":
    alterii = "attribute";
    break;     
   default:
    alterii = 0;
  }
  switch(addHTMLAlterAs) {
   case "anchor":
    alteriii = "link";
    break;
   default:
    alteriii = 0;
  }
  switch(addHTMLAlterWithWhat) {
   case "innerHTML":
    alteriv = "table";
    break;
   default:
    alteriv = 0;
  }
  switch(addHTMLAlterCaseHow) {
   case "lc":
    alterv = "modifyText";
    break;
   case "uc":
    alterv = "modifyText";
    break;    
   default:
    alterv = 0;
  }
 }
  nowAlterAddedHTML(alteri, alterii, alteriii, alteriv, alterv);
 };
 var configAddedHTML = function() { // CONFIG
  var setAddHTMLPlacement = function() {
   if (addHTMLArray[addHTMLArrayLen - 1].indexOf("td") > -1) {
    addingWhere = "td";
    addingWhatIndex = addHTMLArray[addHTMLArrayLen - 1].replace("td","");
   } else {
    let updateNeeded;
   }   
  };
  if (addHTML.indexOf(",") == -1) {
   if (addHTML.indexOf("::") == -1) {
    let skip;
   } else {
    {
    let htmlspacer = 1;
    let addHTMLArrayIndex = 0;
    theAddedHTML = addHTML;
    addHTMLArray = theAddedHTML.split("::");
    addHTMLArrayLen = addHTMLArray.length;
    if (addHTMLArray[0].indexOf("<") == 0) {
     isAddingTag = 1;
     addingTag = addHTMLArray[0];
     if (addingTag.indexOf(" ") > -1) {
      addingCloseTag = addHTMLArray[0].substr(0, addingTag.indexOf(" ")) + ">";
      addingCloseTag = addingCloseTag.replace("<", "</");
      setAddHTMLPlacement();
     } else {
      addingCloseTag = addHTMLArray[0].replace("<", "</");
      setAddHTMLPlacement();
     }      
    } else if (addHTMLArray[0].indexOf("-:-") > -1) { 
    // ADD AS IF ARRAY HTML TAG AND ATTRIBUTES
     isAddingTag = 1;
     let addHTMLArrayOne = addHTMLArray[0].split("-:-");
     let addHTMLArrayOneLen = addHTMLArrayOne.length;
     addingTag = "";
     for (i = 0; i < addHTMLArrayOneLen; i++) {
      if (i == 0) {
       addingTag += "<" + addHTMLArrayOne[i];
      } else if (i == addHTMLArrayOneLen - 1) {
       addingTag += addHTMLArrayOne[i] + "'" + ">";
      } else {
       if (i%2 != 0) {
        // ex: href(i) = "        
        addingTag += " " + addHTMLArrayOne[i] + "='";
       } else {
        // ex: href = "(i)"
        addingTag += addHTMLArrayOne[i] + "'";
       }        
      }       
     }
     addingCloseTag = "</" + addHTMLArrayOne[0] + ">";      
     setAddHTMLPlacement();
    } else {
     isAddingTag = 0;
     let updateNeeded;
    }
    if (addHTMLArray[1].indexOf("-:-") > -1) {
     addHTMLAltering = 1; 
     addHTMLAlterArray = addHTMLArray[1].split("-:-");
     addHTMLAlterArrayLen = addHTMLAlterArray.length;
     alterAddedHTML();
    } else {
     addHTMLAltering = 0;
    }
    }
   }
  } else {
   let updateNeeded;
  }
 };
 }
 {// CONFIG PARENT HTML
 var parElementConfigI = function() {
  if (parElementIdentifierLowCase == "id") useID = 1;

  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
 };
 var parElementConfigII = function() {
  if (useID == 1) {
    theParElement = document.getElementById(parElement);
   }
   if (useClass == 1) {
    theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
   }
   if (useData == 1) {
    theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
   }
   if (useTag == 1) {
    theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
   }    
   extractTagConfig(); 
 };  
 }
 
 {// EVALUATE OUTPUT HTML
 if (colNumber == undefined || parElement == undefined) 
  {// DEFAULT WHATEVER TAG HAS MOST TEXT
  // colNumber, colTitles, extractTags, parElement, parElementIdentifier, relocate, relocateElement, relocateElementIdentifier, addHTML
  let bodyTag = document.getElementsByTagName("body")[0];
  let skipSript = "SCRIPT";
  var makeDefaultTable = function(x) {
   if (bodyTag.children.length == 0) {
    if (x == 0) {
     colNumber = 2, colTitles = "Column I,Colum II", extractTags = "_w:n", parElement = "body", parElementIdentifier = "tag0", relocate = 0, relocateElement = "self", relocateElementIdentifier = "tag0", addHTML = 0;    
    } else {
     parElement = "body", parElementIdentifier = "tag0", relocate = 0, relocateElement = "self", relocateElementIdentifier = "tag0", addHTML = 0;
    }    
   } else {
    let tempTagLength = 0;
    let maxTagLength = 0; 
    let tempTagIndex = 0;
    let tempTagName = "";
    for (i = 0; i < bodyTag.children.length; i++) {
     if (i == 0) {
      tempTagLength = bodyTag.children[0].innerHTML.length;     
      tempTagIndex = i;
      tempTagName = bodyTag.children[0].nodeName;
     } else {
      maxTagLength = bodyTag.children[i].innerHTML.length;     
      if (bodyTag.children[i].nodeName == skipSript) {
       let skip;
      } else {
      if (maxTagLength > tempTagLength) {
       tempTagLength = maxTagLength;
       tempTagIndex = i;
       tempTagName = bodyTag.children[i].nodeName;
      }     
      }
     }
    }
    if (x == 0) {
     colNumber = 2, colTitles = "Column I,Colum II", extractTags = "_w:n", parElement = tempTagName, parElementIdentifier = "tag" + tempTagIndex, relocate = 0, relocateElement = "self", relocateElementIdentifier = "tag"+ tempTagIndex, addHTML = 0;
    } else {
     parElement = tempTagName, parElementIdentifier = "tag" + tempTagIndex, relocate = 0, relocateElement = "self", relocateElementIdentifier = "tag"+ tempTagIndex, addHTML = 0;
    }    
   }  
  };
  if (colNumber == undefined) {
   makeDefaultTable(0);
  } else {
   makeDefaultTable(1);
  }
 } else {
  if (relocate == undefined) {
   relocate = 1, relocateElement = parElement, relocateElementIdentifier = parElementIdentifier, addingClass = 0;
  } else {
   if (relocateElement == undefined) {
    if (relocate == 0) {
     relocateElement = "self", relocateElementIdentifier = parElementIdentifier, addingClass = 0;
    }
   } else {
    if (relocateElementIdentifier == undefined) {
     if (relocate == 0 && relocateElement.indexOf("::") > -1) {
      relocateElementIdentifier = parElementIdentifier;
      addingClass = 0;      
      addHTML = relocateElement;      
       if (addHTML.indexOf("class:") == -1) {
        addingClass = 0;
        addingHTML = 1;
        isRelocateElementIdentifierDefined = 0;
        configAddedHTML();
       } else {      
        addingClass = 1;
        let updateNeeded;
       }            
     } else {
      relocateElementIdentifier = parElementIdentifier, addingClass = 0;
     }
    } else {
     if (addHTML == undefined) {
      addHTML = 0;
      addingClass = 0;
     } else {
      if (addHTML == 0) {
       addingClass = 0;
       addingHTML = 0;      
      } else {
       if (addHTML.indexOf("class:") == -1) {
        addingClass = 0;
        addingHTML = 1;
        configAddedHTML();
       } else {      
        addingClass = 1;
        let updateNeeded;
       }     
      }         
     }
    }
   }
  }  
 } 
 }
 
 {// EVALUATE INPUT HTML
 if (parElementIdentifier == undefined) {
   parElementIdentifier = "id";
   useID = 1;
   if (extractTags[0] != "_") {removeNewLines(parElement, parElementIdentifier, 1);}
   parElementConfigII();
 } else {
  var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
  if (extractTags[0] != "_") {removeNewLines(parElement, parElementIdentifier, 1);}
  parElementConfigI();
  parElementConfigII();
 }
 }
} 

// Miscellaneous
function outputTextFile(textFilePath, parElement, parElementIdentifier, asWhat) {
 var useID=0, useClass=0, useData=0, useTag=0;
 var theParElement, theParElementIndex = 0;
 
 if (parElementIdentifier == undefined) {
  parElementIdentifier = "ID";
  replace = "";
  useID = 1;
  asWhat = "text";
 } else {
  if (asWhat == undefined) asWhat = "text";
  let parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
  if (parElementIdentifierLowCase == "id") useID = 1;
  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
 }
 
 if (textFilePath.indexOf("manPages") > -1) isUsingManPage = 1;
 
 var outputTheTextFile = function(par) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
    if (par) {
     if (asWhat == "text") {
      par.innerText = this.responseText;
     } else {
      par.innerHTML = this.responseText;
     }     
    } else {
     let skip;
    }
   }
  };
   xmlhttp.open("GET", textFilePath, true);
   xmlhttp.send();
 }; 
 
 if (useID == 1) {
  theParElement = document.getElementById(parElement);
 }
 if (useClass == 1) {
  theParElement = document.getElementsByClassName(parElement)[theParElementIndex];  
 }
 if (useData == 1) {
  theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];  
 }
 if (useTag == 1) {
  theParElement = document.getElementsByTagName(parElement)[theParElementIndex];  
 } 
 if (theParElement) {
  outputTheTextFile(theParElement);
 }
}

function copyText(parElement, parElementIdentifier, copyWhat) {
 var useID=0, useClass=0, useData=0, useTag=0;
 var theParElement, theParElementIndex = 0;
 if (parElementIdentifier == undefined) {
  parElementIdentifier = "ID"; 
  useID = 1;
 } else {
  if (copyWhat == undefined) {
   copyWhat = "text";
  }
  let parElementIdentifierLowCase = parElementIdentifier.toLowerCase(); 
  
  if (parElementIdentifierLowCase == "id") useID = 1;
  
  if (parElementIdentifierLowCase.indexOf("class") > -1) {
   useClass = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("class", "");
  }
  if (parElementIdentifierLowCase.indexOf("data") > -1) {
   useData = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("data", "");
  }
  if (parElementIdentifierLowCase.indexOf("tag") > -1) {
   useTag = 1;
   theParElementIndex = parElementIdentifierLowCase.replace("tag", "");
  }
 }
 
 var copyTheText = function() {
  if (theParElement) {
   if (theParElement.tagName == "textarea") {
    theParElement.select();
    navigator.clipboard.writeText(theParElement.value);  
   } else {
    let copyTextarea = document.createElement("textarea");
    copyTextarea.style.display = "none";
    if (copyWhat == "text") {
     copyTextarea.value = theParElement.innerText;
    } else {
     copyTextarea.value = theParElement.innerHTML;
    }

    copyTextarea.select();
    document.body.append(copyTextarea);
    navigator.clipboard.writeText(copyTextarea.value);
   }
  }
 };
  
 if (useID == 1) {
  theParElement = document.getElementById(parElement);
 }
 if (useClass == 1) {
  theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
 }
 if (useData == 1) {
  theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
 }
 if (useTag == 1) {
  theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
 }
 
 copyTheText();
}

function showTermTitleWithLink(cur, curData, curTitle) { 
 if (!cur.hasAttribute("data-termtitle")) {
  cur.setAttribute("data-termtitle", "0");
 }
 if (!cur.hasAttribute("data-title") && cur.hasAttribute("title")) {
  cur.setAttribute("data-title", cur.title);
  cur.removeAttribute("title");  
 }
 if (!cur.hasAttribute("onmouseout")) {
  cur.setAttribute("onmouseout", cur.getAttribute("onmouseover"));
 } 
 if (curData == 1) {
  curTitle = 0;
  setTimeout(function() {
  if (cur.getElementsByTagName("a")[0].getAttribute('data-keepdefinitionbox') == 0) {
    cur.remove();     
   }
  }, 200);
  return;
 }
 // Tools to make unique id for created html.
 var setCurTermTitleStorage = function() {
  if (sessionStorage.termTitleStorage) {   
   if (sessionStorage.termTitleStorage == "NaN") {        
    sessionStorage.termTitleStorage = 0;
   } else {
    sessionStorage.termTitleStorage = Number(sessionStorage.termTitleStorage) + 1;   
   }    
   } else {   
    sessionStorage.termTitleStorage = 1;    
   }
  };  
 // Functio Variables
 var termTitleWithLinkData, termTitleWithLinkDefinition, termTitleWithLinkTerm,
     termBox, termBoxid, termBoxHTML, termLink, termLinkBox, termBoxTop, termBoxPos, termLinkTag;
 termTitleWithLinkData = curData;
 termTitleWithLinkTerm = cur.innerHTML;
 termTitleWithLinkDefinition = curData.title;
 if (curData.termtitle == 0) {
  termTitleWithLinkData.termtitle = 1;
  termBox = document.createElement("span");
  // Function in file.
  termBoxid = removeSpaceInVariable(termTitleWithLinkTerm);
  termBoxid += sessionStorage.termTitleStorage;
  setCurTermTitleStorage();  
  termBox.id = termBoxid;
  termBox.setAttribute("data-keepdefinitionbox", 0);
  termBox.setAttribute("onmouseover", "this.dataset.keepdefinitionbox = 1");
  termBox.setAttribute("onmouseleave", "showTermTitleWithLink(this, 1)");
  
  if (termTitleWithLinkDefinition.indexOf("::") > -1) {
   termLink = termTitleWithLinkDefinition
    .substr(termTitleWithLinkDefinition
    .lastIndexOf("::") + 2);

   termLinkBox = ' ' +
    '<a style="color: black; width: auto" href="' + termLink + 
     '" target="_blank" rel="external" ' +
     'data-keepdefinitionbox="0" ' +
     'onmouseover="this.dataset.keepdefinitionbox = 1;" ' +
     'onmouseout="this.dataset.keepdefinitionbox = 0;">Source Page</a>';
    } else {
   termLinkBox = ' ' +
    '<a style="display: none" href="javascript:void(0)" ' +
     'target="_blank" rel="external" ' +
     'data-keepdefinitionbox="0">Source Page</a>';   
    }
  if (cur.offsetTop > 50) {
   if (cur.parentElement.nodeName != "BODY") {    
    termBoxPos = "absolute;";
    termBoxTop = (cur.offsetTop - 30) + "px;";
   } else {
    termBoxPos = "relative;";
    termBoxTop = "15px;";
   }   
  }
  else {
   termBoxPos = "absolute;";
   termBoxTop = (cur.offsetTop + 15) + "px;";
  }
  
 termBox.setAttribute("style", 
  "display: inline;" +
  "position: " + termBoxPos +
  "top:" + termBoxTop +
  "left: 0px;" +
  "padding: 5px;" +   
  "border: 1px solid black;" +
  "background: lightyellow;" +
  "color: black;" +
  "margin-bottom: 20px;" +   
  "height: auto;" +
  "width: auto;");  
 if (termTitleWithLinkDefinition.indexOf("::") > -1) {
  termBox.innerHTML = 
   termTitleWithLinkDefinition
   .replace(termTitleWithLinkDefinition
   .substr(termTitleWithLinkDefinition
   .lastIndexOf("::") - 1), termLinkBox);
  } else {
  termBox.innerHTML = termTitleWithLinkDefinition + termLinkBox;
  }
  cur.insertAdjacentElement("afterend", termBox);
 } else {
  termTitleWithLinkData.termtitle = 0;
  if (cur.nextElementSibling) {
   termBoxHTML =  document.getElementById(cur.nextElementSibling.id);
   setTimeout(function() {
    if (termBoxHTML.dataset.keepdefinitionbox == 0) {
     termBoxHTML.remove();
    }
   }, 500);
  }
 }
}

