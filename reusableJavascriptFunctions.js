// JavaScript Document

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
  while (wordIsPresent==1) {
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


// Appending/Prepending Elements
function addToAttribute(attribute, addWhat, addWhere, curElement, curElementIdentifier, usingAll) {
 if (addWhere == undefined) addWhere = "before";
 
 var useID=0, useClass=0, useData=0, useTag=0;
 var runClass = 0, useAll=0;
 var theCurElement, theCurElements, theCurElementsLen, theAddContent, usingAll, theCurElementIndex = 0; 
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

// Changing Case
function changeToUpperCase(variableToChange) {
 let theVariableToUpperCase = variableToChange.toUpperCase();
 return theVariableToUpperCase;
}
function changeToLowerCase(variableToChange) {
 let theVariableToLowerCase = variableToChange.toLowerCase();
 return theVariableToLowerCase;
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