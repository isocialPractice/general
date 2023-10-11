# General Purpose Javascript Functions 
<hr>

[Preview JavaScript Functions](https://jhauga.github.io/htmlpreview.github.com/?https://github.com/isocialPractice/general/blob/main/index.html)

General scripts, snippets, and tools. The functions are meant to be lightweight, and able to be used with minimal customizations (if any). <br>

<em><strong>NOTE</strong></em> - the elements in the "support" folder are example purposes.

## To Use:
Copy and paste below script tag into the bottom of an HTML page: <br>
```markdown
<script src="https://cdn.jsdelivr.net/gh/jhauga/general/reusableJavascriptFunctions.js"></script> 
```

## Removing Elements [:top:](#general-purpose-javascript-functions)
<hr>

<details>
<summary><strong>removeSpace</strong>(<em>idWhereSpaceIs</em>, <em>changeCase</em>)</summary>

1. <strong>idWhereSpaceIs</strong>: String - the element id.
2. <strong>changeCase</strong>: String - either "u" (<em>upper</em>) or "l" (<em>lower</em>).
</details>

# 

<details>
<summary><strong>removeSpaceInVariable</strong>(<em>variableWhereSpaceIs</em>, <em>changeCase</em>) </summary>

1. <strong>variableWhereSpaceIs</strong>: variable - the variable with value.
2. <strong>changeCase</strong>: String - either "u" (<em>upper</em>) or "l" (<em>lower</em>).
</details>

# 
 
<details>
<summary><strong>removeWord</strong>(<em>word</em>, <em>idWhereWordIs</em>) </summary>

1. <strong>word</strong>: String - word to remove.
2. <strong>idWhereWordIs</strong>: String - the element id.
</details>

# 
 
<details>
<summary><strong>removeWordInVariable</strong>(<em>word</em>, <em>variableWithWord</em>) </summary>

1. <strong>word</strong>: String - word to remove.
2. <strong>variableWithWord</strong>: variable - the variable with value.
</details>

# 
 
<details>
<summary><strong>removeHTMLTag</strong>(<em>tag</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>replace</em>) </summary>

1. <strong>tag</strong>: String or Keyword:
   - a. String  - the tag to be removed.
   - b. Keyword - use the keyword "this". Other arugments are then optional.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, data-attribute, or self.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   - a. "id" - default   
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" gets the tag at index 2 as if array.   
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array.   
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" gets the data-name at index 0 as if array.   
   - e. "self" e.g. similar to "id" but focus on one element. IMPORTANT - must have id attribute.
4. <strong>replace</strong>: String - either "self" or a tag to replace the removed tag with.   
   - <em><strong>NOTE</strong></em> - if value is "self" then the tag and parElement are one in the same, and either the "indexNumber" or "l" is required at end of parElementIdentifier or all matching tags will be removed. <br>
   - <em><strong>NOTE</strong></em> - using the value "l" at end of parElementIdentifier will remove the last element. Use "0" to remove first.
</details>

# 
   
<details>
<summary><strong>removeNewLines</strong>(<em>parElement</em>, <em>parElementIdentifier</em>, <em>removeExcessSpace</em>)</summary>

1. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
2. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   - a. "id" - default   
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" gets the tag at index 2 as if array.   
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array.   
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" gets the data-name at index 0 as if array.    
3. <strong>removeExcessSpace</strong>: Number - default is 0:  
   - a. 1 - remove excess   
   - b. 0 - do not remove excess space.<br>
   <em><strong>NOTE</strong></em> - excess space is considered more than one space character.
</details>

# 
   
<details>
<summary><strong>removeLastWord</strong>(<em>word</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>ignoreCase</em>)</summary>

1. <strong>word</strong>: String - the word to remove.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   - a. "id" - default   
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" gets the tag at index 2 as if array.   
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array.   
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" gets the data-name at index 0 as if array.
4. <strong>ignoreCase</strong>: Number - default is 0:  
   - a. 1 - ignore the case of the word.   
   - b. 0 - match exactly (if blank, defaults to this).
</details>

# 

<details>
<summary><strong>removeLastWordInVariable</strong>(<em>variableWithWord</em>, <em>word</em>)</summary>

1. <strong>variableWithWord</strong>: variable - the variable with value.
2. <strong>word</strong>: String - the word that will be removed.
</details>

# 

<details>
<summary><strong>removeHTMLAttribute</strong>(<em>attribute</em>, <em>parElement</em>, <em>parElementIdentifier</em>)</summary>

1. <strong>attribute</strong>: String - the attribute that will be removed.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   - a. "id" - default   
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" gets the tag at index 2 as if array.   
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array.   
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" gets the data-name at index 0 as if array.    
</details>


<br>

## Replacing Elements [:top:](#general-purpose-javascript-functions)
<hr>

<details>
<summary><strong>replaceWord</strong>(<em>word</em>, <em>replaceWith</em>,  <em>parElement</em>, <em>parElementIdentifier</em>) </summary>

1. <strong>word</strong>: String - word to remove.
2. <strong>replaceWith</strong>: String - the word the will be inserted in place of word.
3. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
4. <strong>parElementIdentifier</strong>: String - acceptable values are:   
   - a. "id" - default   
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" gets the tag at index 2 as if array.   
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array.   
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" gets the data-name at index 0 as if array.   
</details>

# 
   
<details>
<summary><strong>replaceWordInVariable</strong>(<em>word</em>, <em>replaceWith</em>, <em>variableWithWord</em>)   </summary>

1. <strong>word</strong>: String - the word that will be replaced.
2. <strong>replaceWith</strong>: String - the word the will be inserted in place of word.
3. <strong>variableWithWord</strong>: variable - the variable with value.
</details>

# 
   
<details>
<summary><strong>replaceInnerHTML</strong>(<em>replaceWith</em>, <em>parElement</em>, <em>parElementIdentifier</em>) </summary>

1. <strong>replaceWith</strong>: String - the word the will be inserted in place of word.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, data-attribute, or self.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:   
   - a. "id" - default   
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" gets the tag at index 2 as if array.   
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array.   
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" gets the data-name at index 0 as if array.
</details>

# 
   
<details>
<summary><strong>replaceAttribute</strong>(<em>attribute</em>, <em>replaceWith</em>, <em>curElement</em>, <em>curElementIdentifier</em>) </summary>

1. <strong>attribute</strong>: String - the attribute added or whose value is replace.
2. <strong>replaceWith</strong>: String - the attribute value the will be inserted into or in place of prior.
3. <strong>curElement</strong>: String - the element by name of id, tag, class, data-attribute, or self.
4. <strong>curElementIdentifier</strong>: String - acceptable values are:  
   - a. "id" - default   
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" gets the tag at index 2 as if array.   
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array.   
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" gets the data-name at index 0 as if array.
</details>

# 
   
<details>
<summary><strong>replaceNewLines</strong>(<em>word</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>removeExcessSpace</em>, <em>arrayPrep</em>, <em>mindElement</em>)</summary>

1. <strong>word</strong>: String - the word that new lines will be replaced with.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:   
   - a. "id" - default   
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" gets the tag at index 2 as if array.   
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array.   
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" gets the data-name at index 0 as if array.   
4. <strong>removeExcessSpace</strong>: Number - default is 0:   
   - a. 1 - remove excess   
   - b. 0 = do not remove excess space.  <br>
   <em><strong>NOTE</strong></em> - excess space is considered more than one space character.    
5. <strong>arrayPrep</strong>: Number - default is 0:  
   - a. 1 - output is intended for array    
   - b. 0 - output is not intended for array.   <br>
   <em><strong>NOTE</strong></em> - prepping for array will remove new lines with no characters, and the first and last replacement words.
6. <strong>mindElement</strong>: Number - default is 0:  
   - a. 0 - off    
   - b. 1 and over - (x) = lines with x number of space characters will be ignored.
</details>


<br>

## Appending/Prepending/Add Elements [:top:](#general-purpose-javascript-functions)
<hr>

<details>
<summary><strong>addToAttribute</strong>(<em>attribute</em>, <em>addWhat</em>, <em>addWhere</em>, <em>curElement</em>, <em>curElementIdentifier</em>, <em>usingAll</em>)</summary>

1. <strong>attribute</strong>: String - the attribute name.
2. <strong>addWhat</strong>: String - what is added to the attribute.
3. <strong>addWhere</strong>: String - "before" or "after".
4. <strong>curElement</strong>: String - the element by name of id, tag, class, or data-<strong>attribute</strong>.
5. <strong>curElementIdentifier</strong>: String - acceptable values are:  
   - a. "id" - default
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag1" gets the tag at index 1 as if array. <br>
     - <strong><em>NOTE</em></strong> - indexNumber is not necessary if <strong>usingAll</strong> is set to 1.  
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array. <br>
     - <strong><em>NOTE</em></strong> - indexNumber is not necessary if <strong>usingAll</strong> is set to 1.  
   - d. "data\[<em>indexNumber</em>\]" e.g. "name1" gets the data-name at index 1 as if array. <br>
     - <strong><em>NOTE</em></strong> - indexNumber is not necessary if <strong>usingAll</strong> is set to 1.  
6. <strong>usingAll</strong>: Number - default is 0:  
   - a. 0 - for only one attribute    
   - b. 1 - all matching attributes. <br>
   <strong><em>NOTE</em></strong> - if set to "0", the curElementIdentifier requires <strong>indexNumber</strong> appended at end.
</details>

# 
   
<details>
<summary><strong>addHTMLToText</strong>(<em>tag</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>attributes</em>, <em>wrapWords</em>)</summary>

1. <strong>tag</strong>: String - the tag that will wrap the text.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   - a. "id" - default   
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" gets the tag at index 2 as if array.   
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array.   
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" gets the data-name at index 0 as if array.
4. <strong>attributes</strong>: String - the attribute and value respectively, separated with "::".  
   <em><strong>NOTE</strong></em> - Currently limited to one attribute. Example values:     
   - a. "style::color:blue"    
   - b. "class::className row"   
5. <strong>wrapWords</strong>: String - Finds the matching string in parent element and wraps it with the <u>"tag"</u> argument.
</details>


<br>

## Changing Elements [:top:](#general-purpose-javascript-functions)
<hr>

<details>
<summary><strong>changeToUpperCase</strong>(<em>variableToChange</em>)</summary>

1. <strong>variableToChange</strong>: variable - the variable with value that will be changed.
</details>

# 
 
<details>
<summary><strong>changeToLowerCase</strong>(<em>variableToChange</em>) </summary>

1. <strong>variableToChange</strong>: variable - the variable with value that will be changed.
</details>

# 

<details>
<summary><strong>changeToTable</strong>(<em>colNumber</em>, <em>colTitles</em>, <em>extractTags</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>relocate</em>, <em>relocateElement</em>, <em>relocateElementIdentifier</em>, <em>addHTML</em>)</summary>

<hr>

> ### changeToTable Example:
> The <strong>changeToTable</strong> function example page below.
> [Change To Table Example](https://jhauga.github.io/htmlpreview.github.com/?https://github.com/isocialPractice/general/blob/main/changeToTableExample.html)  

<hr>

<strong>changeToTable</strong>(<em>colNumber</em>, <em>colTitles</em>, <em>extractTags</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>relocate</em>, <em>relocateElement</em>, <em>relocateElementIdentifier</em>, <em>addHTML</em>)
1. <strong>colNumber</strong>: Number - the number of columns the table will have.
2. <strong>colTitles</strong>: String - the title of table columns. Follows two patterns:
   - a. String - the heading for each column. Separate each heading with a comma.   
   - b. Reserved - use either "\_href\_" or "\_:href\_"    
     - i.  <strong>\_href\_</strong> - use with "addHTML" setting last item after "::" character to "td\[indexWhereAdded\]\_:\_td\[indexWhichIsAdded\]".     
       - This will change the column name to "Link" and the attribute to "td" at index "indexWhereAdded" to value of "td" at "indexWhichIsAdded".   
     - ii. <strong>\_:href\_</strong> - use with "addHTML" setting last item after "::" character to "td\[indexWhereAdded\]\_:\_td\[indexWhichIsAdded\]".    
       - This will remove the column at "indexWhichIsAdded", and add the attribute to "td" at index "indexWhereAdded" to value of "td" at "indexWhichIsAdded".
3. <strong>extractTags</strong>: String - follows two patterns:
   - a. Tag Name - the tag(s) within the parent element that nests text.   
     - <strong>NOTE</strong> - Currently only accepts one tag followed by a separator that marks where a column ends for each row.  
   - b. Begins with "<strong>\_</strong>" - when using primitive text with no tag pattern begin with "\_" character followed by "w". For example:   
     - i.  \_w:n = lines with one word will mark new table data, and lines with over one word will mark next table data. New lines mark where data is nested.   
       - <em>NOTE</em> - this is best for tables that will only have two columns.   
     - ii.  \_w3:n = lines with three words or less will mark new table data, and lines with over three words will mark next table data. New lines mark where data is nested.   
     - iii. \_s:splitCharacters = characters that mark the end of each data cell.   
       - <em>NOTE</em> - this assumes you have put all split characters in the correct position.
4. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
5. <strong>parElementIdentifier</strong>: String - acceptable values are:
   - a. "id" - default
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" gets the tag at index 2 as if array.    
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array.    
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" gets the data-name at index 0 as if array.   
6. <strong>relocate</strong>: Number - default is 0:   
   - a. 1 - output to different DOM location    
   - b. 0 - for current (<em>overwriting existing</em>).    
7. <strong>relocateElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.    
8. <strong>relocateElementIdentifier</strong>:  String - acceptable values are:    
   - a. "id" - default    
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" relocates to the tag at index 2 as if array.      
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" relocates to the class at index 1 as if array.       
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" relocates to the data-name at index 0 as if array.   
9. <strong>addHTML</strong>: String - following pattern where:     
   - a. String - "html element, add items, adding where"      
     - Example use (<em>ignore '<strong>(I)</strong>' and '<strong>(i)</strong>' marks</em>):      
       - A. "<em><strong>(I)</strong></em>a-:-href-:-https ://site.com-:-target-:-\_blank-:-rel-:-external<strong>::</strong><em><strong>(II)</strong></em>append-:-href-:-anchor-:-innerHTML-:-lc<strong>::</strong><em><strong>(III)</strong></em>td0"      
         - I. a-:-href-:-https ://site.com-:-target-:-\_blank-:-rel-:-external       
           - add/wrap "&lt;a&gt;" tag to td (<em>requires second and/or third part</em>)      
           - "href" set to "https ://site.com"      
           - "target" set to "\_blank"         
           - "rel" set to "external"      
         - II. append-:-href-:-anchor-:-innerHTML-:-lc      
           - "appendsed" to "href"         
           - "append" as "anchor"       
           - "append" td "innerHTML" (<em>requires third part</em>)      
           - "append" as "lc" (<em>lowercase</em>)      
         - III. td0   
           - "td" at index "0" is where html is added (<em>wrap</em>)   
           - "td" at index "0" is what value is appended   
       - B. "<em><strong>(I)</strong></em>a-:-href-:-append-:-target-:-\_blank-:-rel-:-external::<em><strong>(II)</strong></em><em><strong>(i)</strong></em>td0\_:\_<em><strong>(ii)</strong></em>td2"      
         - I. a-:-href-:-append-:-target-:-\_blank-:-rel-:-external     
           - add/wrap "&lt;a&gt;" tag to td   
           - "href" value is "append(<em>ed</em>)" (<em>requires seconde/third part with two parameters</em>   
           - "target" set to "\_blank"   
           - "rel" set to "external"    
         - II. td0\_:\_td2     
           - i. td0   
             - "td" at index "0" is where html is added (<em>wrap</em>)   
           - ii. td2   
             - "td" at index "2" is what value appended    
           - <strong>IMPORTANT</strong> - requires value of "\_href\_" or "\_:href\_" in one of the "colTitles". e.g. "Term, Definition, \_href\_".   
           - <em>NOTE</em> - the column will be kept if "colTitles" is "\_href\_". e.g. "Term, Definition, \_href\_".    
           - <em>NOTE</em> - the column will be removed if "colTitles" is "\_<strong>:</strong>href\_". e.g. "Term, Definition, \_<strong>:</strong>href\_".<br>
<strong>NOTE</strong> - using only <strong>changeToTable()</strong> with no arguments will also work, but additionally; <em><strong>NOTE</strong></em> that the parent element with highest length will be converted to table.
</details>

# 

<details>
<summary><strong>changeNextElementDisplay</strong>(<em>cur</em>, <em>curEl</em>)</summary>

1. <strong>cur</strong>: Keyword - use the keyword "this".
2. <strong>curEl</strong>: Keyword.property - use the keyword with property "this.nextElementSibling".
```markdown
onclick="changeNextElementDisplay(this, this.nextElementSibling)"
```

</details>


<br>

## Miscellaneous [:top:](#general-purpose-javascript-functions)
<hr>

<details>
<summary><strong>outputTextFile</strong>(<em>textFilePath</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>asWhat</em>)</summary>

1. <strong>textFilePath</strong>: String - path to file that will be output as text.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, data-attribute, or self.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   - a. "id" - default   
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" gets the tag at index 2 as if array.   
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array.   
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" gets the data-name at index 0 as if array.
4. <strong>asWhat</strong>: String - output as either "text" or "html".
</details>

# 
   
<details>
<summary><strong>copyText</strong>(<em>parElement</em>, <em>parElementIdentifier</em>, <em>copyWhat</em>) </summary>

1. <strong>parElement</strong>: String - the parent element by name of id, tag, class, data-attribute, or self.
2. <strong>parElementIdentifier</strong>: String - acceptable values are:   
   - a. "id"   
   - b. "tag\[<em>indexNumber</em>\]" e.g. "tag2" gets the tag at index 2 as if array.   
   - c. "class\[<em>indexNumber</em>\]" e.g. "className1" gets the class at index 1 as if array.   
   - d. "data\[<em>indexNumber</em>\]" e.g. "name0" gets the data-name at index 0 as if array.   
3. <strong>copyWhat</strong>: String - acceptable values are:   
   - a. "text" - default | gets the parent elements "innerText" value.   
   - b. "html" - gets the parent elements "innerHTML" value.  
</details>   

# 
   
<details>
<summary><strong>showTermTitleWithLink</strong>(<em>cur</em>, <em>curData</em>, <em>curTitle</em>) </summary>

<hr>

> ### showTermTitleWithLink Example:
> The <strong>showTermTitleWithLink</strong> function example page below.
> [Show Term Title With Link Example](https://jhauga.github.io/htmlpreview.github.com/?https://github.com/isocialPractice/general/blob/main/showTermTitleWithLinkExample.html)  

<hr>

<strong>showTermTitleWithLink</strong>(<em>cur</em>, <em>curData</em>, <em>curTitle</em>)
1. <strong>cur</strong>: Required constant argument - this
2. <strong>curData</strong>: Required constant argument - this.dataset
3. <strong>curTitle</strong>: Required constant argument - this.dataset.title    
   - <strong>IMPORTANT</strong> - Options are controlled with the <strong>title</strong> attribute. 
   - Enter function arguments as noted above, but the title attribute follows this logic (<em>ignore '<strong>(I)</strong>' and '<strong>(i)</strong>' marks</em>):
     - A. <strong>title</strong> \= "<em><strong>(I)</strong></em> Definition :: <em><strong>(II)</strong></em> \[<em><strong>(i)</strong></em> Alternate text for\], \[<em><strong>(ii)</strong></em> Source Name\] :: <em><strong>(III)</strong></em> \[<em><strong>(i)</strong></em> link 1\] -:- \[<em><strong>(ii)</strong></em> link 2\]"
       - I. Definition
         - the definition or hint for the displayed html text. <em><strong>required</strong></em>
       - II. \[Alternate text I \], \[Alternate text II\]
         - i. Alternate text I   
           - Alternative text to reference source link (default is "Source Page").   
         - ii. Alternate text II    
           - Additional alternate text when multiple references and/or links needed.<br>    
           - <em><strong>NOTE</strong></em> - Use "\[l\]" (defaults to first item) to denote which text is nested in link (when one link); and if multiple links leave blank, or denote with:   a. "\[l\]" (matches link order with or without \[l\]) or b. "\[i\]" (where i links index in array and can be used with or without \[l\]). (<em>optional</em>)
       - III. \[link 1\] -:- \[link 2\]    
         - i. link 1    
           - The link that the definition was derived from.   
         - ii. link 2   
           - The second link that the definition was derived from. Separate with "-:-" if over one. (<em>optional</em>)<br>
<strong>To Use</strong> - Paste one of the below examples (as is) into and HTML tag (as attribute), then modify **title** attribute only: <br>
```markdown
onmouseover="showTermTitleWithLink(this, this.dataset, this.dataset.title)" title="Change the definition. ::https://change_source_linke.com"
```
<strong>NOTE</strong> - mind indexes if using below example.  
```markdown
onmouseover="showTermTitleWithLink(this, this.dataset, this.dataset.title)" title="Change the definition. :: One[0], two[1]::https://changelink1.com -:- https://changelink2.com"
```
</details>

# 

<details>
<summary><strong>findArrayMax</strong>(<em>arr</em>)</summary>

1. <strong>arr</strong>: Array Object - required array. Can take nested arrays.
</details>

# 

<details>
<summary><strong>findArrayMin</strong>(<em>arr</em>)</summary>

1. <strong>arr</strong>: Array Object - required array. Can take nested arrays.
</details>

# 

<details>
<summary><strong>toggleButtonSwitch</strong>(<em>cur</em>, <em>curRun</em>)  </summary>

1. <strong>cur</strong>: required - set to "this".  
2. <strong>curRun</strong>: <em><strong>mute</strong></em> - do not set in html attribute. This parameter will be used as such (<em>'<strong>(i)</strong>' marks indict toggled conditions</em>):
  - data-toggle-x:  
    - a<em><strong>(i)</strong></em>. data-toggle-x="oneFunction()"  
      <strong>IMPORTANT</strong> - do not add ";" at end for above.  
    - b<em><strong>(ii)</strong></em>:  
<pre>
   data-toggle-x="(       
    function () {     
     oneAFunction();    
     oneBFucntion();     
    }  
   ) ()"     
</pre>
  - data-toggle-y:  
    - a<em><strong>(i)</strong></em>. data-toggle-y="twoFunction()"  
      <strong>IMPORTANT</strong> - do not add ";" at end for above.  
    - b<em><strong>(ii)</strong></em>:  
<pre>
   data-toggle-y="(     
   function () {     
    twoAFunction();    
    twoBFunction();    
   }    
  ) ()"     
</pre>
</details>
