// JavaScript Document

// REUSABLE FUNCTIONS
// ****************** 

function removeWord(word, idWhereWordIs) {
 var curWordID = document.getElementById(idWhereWordIs);
 let curWordIDText = curWordID.innerHTML;
 let wordIsPresent = 1;
 while (wordIsPresent==1) {
  if (curWordIDText.indexOf(word) > -1) {
   curWordIDText = curWordIDText.replace(word, "");  
  } else {
   wordIsPresent = 0;
  }
 }
 curWordID.innerHTML = curWordIDText;
}

function replaceWord(word, replaceWith, idWhereWordIs) {
 var curWordID = document.getElementById(idWhereWordIs);
 let curWordIDText = curWordID.innerHTML;
 let wordIsPresent = 1;
 while (wordIsPresent==1) {
  if (curWordIDText.indexOf(word) > -1) {
   curWordIDText = curWordIDText.replace(word, replaceWith);
  } else {
   wordIsPresent = 0;
  }
 }
 curWordID.innerHTML = curWordIDText;
}

function removeHTMLTag(tag, parElement, parElementIdentifier, replace) {
 var useID=0, useClass=0, useData=0, useTag=0, replaceTag=0, remove = 0;
 var theParElement, theParElementIndex = 0;
 let parElementIdentifierLowCase = parElementIdentifier.toLowerCase();
 if (parElementIdentifier == undefined) {
  parElementIdentifier = "ID";
  replace = "";
  useID = 1;
 } else {
  if (replace == undefined) {
   replace = "";
   remove = 1;
  }
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
 var removeTheHTMLTag = function() {
  let theRemoveTag = theParElement.getElementsByTagName(tag);
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
 };
 var replaceTheHTMLTag = function() {
  let theRemoveTag = theParElement.getElementsByTagName(tag);
  let theRemoveTagLen = theRemoveTag.length;
  for (i = 0; i < theRemoveTagLen; i++) {
   let curTagToRemove = theRemoveTag[i];
   curTagToRemove.insertAdjacentHTML("beforebegin", replace);   
  }  
 }; 
 if (useID == 1) {
  theParElement = document.getElementById(parElement);
  replaceTheHTMLTag();  
  removeTheHTMLTag();  
 }
 if (useClass == 1) {
  theParElement = document.getElementsByClassName(parElement)[theParElementIndex];
  replaceTheHTMLTag();
  removeTheHTMLTag();
 }
 if (useData == 1) {
  theParElement = document.querySelectorAll("[data-" + parElement + "]")[theParElementIndex];
  replaceTheHTMLTag();
  removeTheHTMLTag();
 }
 if (useTag == 1) {
  theParElement = document.getElementsByTagName(parElement)[theParElementIndex];
  replaceTheHTMLTag();
  removeTheHTMLTag();
 } 
}