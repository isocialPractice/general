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
    if (theCurStoredHTML.indexOf(wrapWords) == theCurStoredHTML.lastIndexOf(wrapWords)) {
     theCurHTML = theCurStoredHTML.substr(theCurStoredHTML.indexOf(wrapWords), wrapWords.length);  
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
 var theParElement, theParElementIndex = 0;  
 var theColTitles, theColTitlesLen, theColTitle, useColMark = 0, colMarkCount = 0;
 var extractTagsArr, extractTagsArrLen, theExtractTag, theExtractTags, theExtractTagsLen, useCharacterMark = 0, extractMark = "";
 var curMarkCount = 0, curExtractTag, curExtractData, curData;
 var theAddedHTML, curAddedHTML, addHTMLArray = [], addHTMLArrayLen, isAddingTag = 0, addingTag, addingCloseTag, addingWhere, addingWhatIndex;
 var addHTMLAltering, addHTMLAlterArray, addHTMLAlterArrayLen, 
     addHTMLAlterHow, addHTMLAlterWhat, addHTMLAlterAs, addHTMLAlterWithWhat, addHTMLAlterCaseHow,
     curAlterValue, curAlterText, curAlterIndexA, curAlterIndexB, curStorage, 
     curAlterInsert, curAlterCase, usedDoubleQuotes;
 var theTableCols = "", theTableRows = "", theTable = "";

 var outPutTable = function() {
  if (relocate == 1) {
   if (relocateElementIdentifier == "id") {
    document.getElementById(relocateElement).innerHTML = theTable;
   }
  } else {
   if (relocateElement == "self") {
    if (relocateElementIdentifier == "id") {
     theParElement.innerHTML = theTable;
    } else {
     let updateNeeded;
    }
   } else {
    return theTable;
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
 var checkText = function(curIndex) {
  curData = curExtractData.substr(0, curExtractData.indexOf(extractMark));
  curExtractData = curExtractData.substr(curExtractData.indexOf(extractMark) + extractMark.length);    
  if (curIndex == 0) {
   if (curData.length <= 1) {     
    checkText();
   }
  } 
 };
 var makeRows = function() { 
  if (addingClass == 0) {
   if (useCharacterMark == 1) {
    for (i = 0; i < theExtractTagsLen; i++) {
      curExtractData = theExtractTags[i].innerHTML;
      for (ii = 0; ii <= colMarkCount; ii++) {
       if (ii == 0) {
        checkText(0);
        if (addingWhatIndex == ii) {
         if (addHTMLAltering == 1) {
          if (curAlterCase == "l") {
           if (usedDoubleQuotes == 1) {
            theTableRows += "<tr><td>" + addingTag + curAlterValue + changeToLowerCase(curData) + '"' + curAlterText + ">" + curData + addingCloseTag + "</td><td>";
           } else {
            theTableRows += "<tr><td>" + addingTag + curAlterValue + changeToLowerCase(curData) + "'" + curAlterText + ">" + curData + addingCloseTag + "</td><td>";
           }          
          } else if (curAlterCase == "u") {
           if (usedDoubleQuotes == 1) {
            theTableRows += "<tr><td>" + addingTag + curAlterValue + changeToUpperCase(curData) + '"' + curAlterText + ">" + curData + addingCloseTag + "</td><td>";
           } else {
            theTableRows += "<tr><td>" + addingTag + curAlterValue + changeToUpperCase(curData) + "'" + curAlterText + ">" + curData + addingCloseTag + "</td><td>";
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
       } else if (ii == colMarkCount) {
        if (colNumber >= 3) { checkText(); }
        curData = curExtractData;
        theTableRows += curData + "</td></tr>";       
       } else {
        if (colNumber >= 4) { checkText(); }
        curData = curExtractData.substr(0, curExtractData.indexOf(extractMark));
        curExtractData = curExtractData.substr(curExtractData.indexOf(extractMark) + 1);       
        theTableRows += curData + "</td><td>";
       }
      }
     if (theExtractTags[i].getElementsByTagName(theExtractTag).length >= 1) {
      i = i + theExtractTags[i].getElementsByTagName(theExtractTag).length;
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
 var tableConfig = function() {      
  if (useColMark == 1) {
   theColTitles = replaceWordInVariable(", ", ",", colTitles);
   theColTitles = replaceWordInVariable(" ,", ",", colTitles);
   theColTitles = colTitles.split(",");
   theColTitlesLen = theColTitles.length;
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
  if (extractTags.indexOf(",") == -1) {
    useCharacterMark = 1;
    useColMark = 1;
    colMarkCount = colNumber - 1;
    theExtractTag = extractTags.substr(0, extractTags.indexOf(":"));
    theExtractTags = theParElement.getElementsByTagName(theExtractTag);
    theExtractTagsLen = theExtractTags.length;     
    extractMark = extractTags.substr(extractTags.indexOf(":")+1);    
    tableConfig();
  } else {
   let updateNeeded;
  }
 };

 var alterAddedHTML = function() {
  var nowAlterAddedHTML = function(ai, aii, aiii, aiv, av) {   
   if (isAddingTag == 1) {
    if (ai == 1) {
     if (aii == "attribute") {      
      if (aiii == "link") {       
       if (aiv == "table") {        
        if (av == "modifyText") {
         // addHTMLAlterHow, addHTMLAlterWhat, addHTMLAlterAs, addHTMLAlterWithWhat, addHTMLAlterCaseHow,
         // curAlterValue, curAlterText, curAlterIndexA, curAlterIndexB, curStorage, curAlterInsert, curAlterCase
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
           curAlterText = curAlterText.replace(curStorage, "");
           curAlterValue += "#" + curAlterInsert;
           if (curAlterText.lastIndexOf(">") == curAlterText.length -1 ) curAlterText = curAlterText.replace(">", "");         
          } else {
           curAlterText = curAlterText.replace(curStorage, "");
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
         if (addHTMLAlterCaseHow == "lc") {
          curAlterCase = "l";
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
   default:
    alterv = 0;
  }
 }
  nowAlterAddedHTML(alteri, alterii, alteriii, alteriv, alterv);
 };
 var configAddedHTML = function() {
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

 if (relocate == undefined) {
  relocate = 1, relocateElement = parElement, relocateElementIdentifier = parElementIdentifier, addingClass = 0;
 } else {
  if (relocateElement == undefined) {
   relocateElement = parElement, relocateElementIdentifier = parElementIdentifier, addingClass = 0;
  } else {
   if (relocateElementIdentifier == undefined) {
    relocateElementIdentifier = parElementIdentifier, addingClass = 0;
   } else {
    if (addHTML == undefined) {
     addingClass = 0;
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
 if (parElementIdentifier == undefined) {
   parElementIdentifier = "id";
   useID = 1;
   parElementConfigII();
} else {
  var parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
  parElementConfigI();
  parElementConfigII();
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
