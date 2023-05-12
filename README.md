# General Purpose Use Javascript Functions
General scripts, snippets, and tools. Files are meant to be lightweight, and able to be used with minimal customizations (if any).
Additional files will be added if the current file gets overwhelmed with functions.

# Current Functions Are:
// Removing Elements
function removeSpace(idWhereSpaceIs, changeCase) 
 1. idWhereSpaceIs: String - the element id.
 2. changeCase: String - either "u" (upper) or "l" (lower).

function removeSpaceInVariable(variableWhereSpaceIs, changeCase) 
 1. variableWhereSpaceIs: Primitive - the variable with value.
 2. changeCase: String - either "u" (upper) or "l" (lower).
 
function removeWord(word, idWhereWordIs) 
 1. word: String - word to remove.
 2. idWhereWordIs: String - the element id.
 
function removeWordInVariable(word, variableWithWord) 
 1. word: String - word to remove.
 2. variableWithWord: Primitive - the variable with value.
 
function removeHTMLTag(tag, parElement, parElementIdentifier, replace) 
 1. tag: String - the tag to be removed.
 2. parElement: String - the parent element by name of id, tag, class, data-attribute, or self.
 3. parElementIdentifier: String - acceptable values are:
   a. "id" - default
   b. "tag[indexNumber]" e.g. "tag2" gets the tag at index 2 as if array.
   c. "class[indexNumber]" e.g. "className1" gets the class at index 1 as if array.
   d. "data[indexNumber]" e.g. "name0" gets the data-name at index 0 as if array.
   e. "self" e.g. similar to "id" but focus on one element. IMPORTANT - must have id attribute.
 4. replace: String - a tag to replace the removed tag with.


// Replacing Elements
function replaceWord(word, replaceWith,  parElement, parElementIdentifier) 
 1. word: String - word to remove.
 2. replaceWith: String - the word the will be inserted in place of word.
 3. parElement: String - the parent element by name of id, tag, class, data-attribute, or self.
 4. parElementIdentifier: String - acceptable values are:
   a. "id" - default
   b. "tag[indexNumber]" e.g. "tag2" gets the tag at index 2 as if array.
   c. "class[indexNumber]" e.g. "className1" gets the class at index 1 as if array.
   d. "data[indexNumber]" e.g. "name0" gets the data-name at index 0 as if array.
   
function replaceInnerHTML(replaceWith, parElement, parElementIdentifier) 
 1. replaceWith: String - the word the will be inserted in place of word.
 2. parElement: String - the parent element by name of id, tag, class, data-attribute, or self.
 3. parElementIdentifier: String - acceptable values are:
   a. "id" - default
   b. "tag[indexNumber]" e.g. "tag2" gets the tag at index 2 as if array.
   c. "class[indexNumber]" e.g. "className1" gets the class at index 1 as if array.
   d. "data[indexNumber]" e.g. "name0" gets the data-name at index 0 as if array.
   
function replaceAttribute(attribute, replaceWith, curElement, curElementIdentifier) 
 1. attribute: String - the attribute added or whose value is replace.
 2. replaceWith: String - the attribute value the will be inserted into or in place of prior.
 3. curElement: String - the element by name of id, tag, class, data-attribute, or self.
 4. curElementIdentifier: String - acceptable values are:
   a. "id" - default
   b. "tag[indexNumber]" e.g. "tag2" gets the tag at index 2 as if array.
   c. "class[indexNumber]" e.g. "className1" gets the class at index 1 as if array.
   d. "data[indexNumber]" e.g. "name0" gets the data-name at index 0 as if array. 

// Changing Case
function changeToUpperCase(variableToChange)
 1. variableToChange: Primitive - the variable with value that will be changed.
 
function changeToLowerCase(variableToChange) 
 1. variableToChange: Primitive - the variable with value that will be changed.

// Miscellaneous
function outputTextFile(textFilePath, parElement, parElementIdentifier)
 1. textFilePath: "String" - path to file that will be output as text.
 2. parElement: String - the parent element by name of id, tag, class, data-attribute, or self.
 3. parElementIdentifier: String - acceptable values are:
   a. "id" - default
   b. "tag[indexNumber]" e.g. "tag2" gets the tag at index 2 as if array.
   c. "class[indexNumber]" e.g. "className1" gets the class at index 1 as if array.
   d. "data[indexNumber]" e.g. "name0" gets the data-name at index 0 as if array.
   
function copyText(parElement, parElementIdentifier, copyWhat) 
 1. parElement: String - the parent element by name of id, tag, class, data-attribute, or self.
 2. parElementIdentifier: String - acceptable values are:
   a. "id"
   b. "tag[indexNumber]" e.g. "tag2" gets the tag at index 2 as if array.
   c. "class[indexNumber]" e.g. "className1" gets the class at index 1 as if array.
   d. "data[indexNumber]" e.g. "name0" gets the data-name at index 0 as if array.
 3. copyWhat: String - acceptable values are:
   a. "text" - default | gets the parent elements "innerText" value.
   b. "html" - gets the parent elements "innerHTML" value.