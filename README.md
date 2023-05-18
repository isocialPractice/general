# General Purpose Javascript Functions
[Preview JavaScript Functions](https://nobedee.github.io/htmlpreview.github.com/?https://github.com/isocialPractice/general/blob/main/index.html)

General scripts, snippets, and tools. The functions are meant to be lightweight, and able to be used with minimal customizations (if any). <br>
<em>NOTE</em> - the elements in the "support" folder are example purposes.

## Removing Elements
function <strong>removeSpace</strong>(<em>idWhereSpaceIs</em>, <em>changeCase</em>) 
1. <strong>idWhereSpaceIs</strong>: String - the element id.
2. <strong>changeCase</strong>: String - either "u" (upper) or "l" (lower).

function <strong>removeSpaceInVariable</strong>(<em>variableWhereSpaceIs</em>, <em>changeCase</em>) 
1. <strong>variableWhereSpaceIs</strong>: Primitive - the variable with value.
2. <strong>changeCase</strong>: String - either "u" (upper) or "l" (lower).
 
function <strong>removeWord</strong>(<em>word</em>, <em>idWhereWordIs</em>) 
1. <strong>word</strong>: String - word to remove.
2. <strong>idWhereWordIs</strong>: String - the element id.
 
function <strong>removeWordInVariable</strong>(<em>word</em>, <em>variableWithWord</em>) 
1. <strong>word</strong>: String - word to remove.
2. <strong>variableWithWord</strong>: Primitive - the variable with value.
 
function <strong>removeHTMLTag</strong>(<em>tag</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>replace</em>) 
1. <strong>tag</strong>: String - the tag to be removed.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, data-attribute, or self.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   a. "id" - default   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.   
   e. "self" e.g. similar to "id" but focus on one element. IMPORTANT - must have id attribute.  
4. replace: String - either "self" or a tag to replace the removed tag with.
   <em>NOTE</em> - if value is "self" then the tag and parElement are one in the same, and either the "indexNumber" or "l" is required at end of parElementIdentifier. <br>
   <em>NOTE</em> - using the value "l" at end of parElementIdentifier will remove the last element. Use "0" to remove first.

## Replacing Elements
function <strong>replaceWord</strong>(<em>word</em>, <em>replaceWith</em>,  <em>parElement</em>, <em>parElementIdentifier</em>) 
1. <strong>word</strong>: String - word to remove.
2. <strong>replaceWith</strong>: String - the word the will be inserted in place of word.
3. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
4. <strong>parElementIdentifier</strong>: String - acceptable values are:   
   a. "id" - default   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.
   
function <strong>replaceInnerHTML</strong>(<em>replaceWith</em>, <em>parElement</em>, <em>parElementIdentifier</em>) 
1. <strong>replaceWith</strong>: String - the word the will be inserted in place of word.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, data-attribute, or self.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:   
   a. "id" - default   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.
   
function <strong>replaceAttribute</strong>(<em>attribute</em>, <em>replaceWith</em>, <em>curElement</em>, <em>curElementIdentifier</em>) 
1. <strong>attribute</strong>: String - the attribute added or whose value is replace.
2. <strong>replaceWith</strong>: String - the attribute value the will be inserted into or in place of prior.
3. <strong>curElement</strong>: String - the element by name of id, tag, class, data-attribute, or self.
4. <strong>curElementIdentifier</strong>: String - acceptable values are:
   a. "id" - default
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array. 
      
## Appending/Prepending Elements
function <strong>addToAttribute</strong>(<em>attribute</em>, <em>addWhat</em>, <em>addWhere</em>, <em>curElement</em>, <em>curElementIdentifier</em>, <em>usingAll</em>)
1. <strong>attribute</strong>: String - the attribute name.
2. <strong>addWhere</strong>: String - "before" or "after".
3. <strong>curElement</strong>: String - the element by name of id, tag, class, or data-<strong>attribute</strong>.
4. <strong>curElementIdentifier</strong>: String - acceptable values are:
   a. "id" - default
   b. "tag\[indexNumber\]" e.g. "tag1" gets the tag at index 1 as if array.
      <strong><em>NOTE</em></strong> - indexNumber is not necessary if <strong>usingAll</strong> is set to 1.
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.
      <strong><em>NOTE</em></strong> - indexNumber is not necessary if <strong>usingAll</strong> is set to 1.
   d. "data\[indexNumber\]" e.g. "name1" gets the data-name at index 1 as if array.
      <strong><em>NOTE</em></strong> - indexNumber is not necessary if <strong>usingAll</strong> is set to 1.
5. <strong>usingAll</strong>: Number - 0 (default) for only one attribute, and 1 for all matching attributes.
   <strong><em>NOTE</em></strong> - if set to "0", the curElementIdentifier requires <strong>indexNumber</strong> appended at end.
      
## Changing Case
function <strong>changeToUpperCase</strong>(<em>variableToChange</em>)
1. <strong>variableToChange</strong>: Primitive - the variable with value that will be changed.
 
function <strong>changeToLowerCase</strong>(<em>variableToChange</em>) 
1. <strong>variableToChange</strong>: Primitive - the variable with value that will be changed.

## Miscellaneous
function <strong>outputTextFile</strong>(<em>textFilePath</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>asWhat</em>)
1. <strong>textFilePath</strong>: "String" - path to file that will be output as text.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, data-attribute, or self.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   a. "id" - default   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.
4. <strong>asWhat</strong>: String = output as either "text" or "html".
   
function <strong>copyText</strong>(<em>parElement</em>, <em>parElementIdentifier</em>, <em>copyWhat</em>) 
1. <strong>parElement</strong>: String - the parent element by name of id, tag, class, data-attribute, or self.
2. <strong>parElementIdentifier</strong>: String - acceptable values are:   
   a. "id"   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.   
3. <strong>copyWhat</strong>: String - acceptable values are:   
   a. "text" - default | gets the parent elements "innerText" value.   
   b. "html" - gets the parent elements "innerHTML" value.
   