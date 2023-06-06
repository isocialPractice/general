# General Purpose Javascript Functions
[Preview JavaScript Functions](https://nobedee.github.io/htmlpreview.github.com/?https://github.com/isocialPractice/general/blob/main/index.html)

General scripts, snippets, and tools. The functions are meant to be lightweight, and able to be used with minimal customizations (if any). <br>
<em>NOTE</em> - the elements in the "support" folder are example purposes.

## Removing Elements
<strong>removeSpace</strong>(<em>idWhereSpaceIs</em>, <em>changeCase</em>) 
1. <strong>idWhereSpaceIs</strong>: String - the element id.
2. <strong>changeCase</strong>: String - either "u" (upper) or "l" (lower).

<strong>removeSpaceInVariable</strong>(<em>variableWhereSpaceIs</em>, <em>changeCase</em>) 
1. <strong>variableWhereSpaceIs</strong>: variable - the variable with value.
2. <strong>changeCase</strong>: String - either "u" (upper) or "l" (lower).
 
<strong>removeWord</strong>(<em>word</em>, <em>idWhereWordIs</em>) 
1. <strong>word</strong>: String - word to remove.
2. <strong>idWhereWordIs</strong>: String - the element id.
 
<strong>removeWordInVariable</strong>(<em>word</em>, <em>variableWithWord</em>) 
1. <strong>word</strong>: String - word to remove.
2. <strong>variableWithWord</strong>: variable - the variable with value.
 
<strong>removeHTMLTag</strong>(<em>tag</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>replace</em>) 
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
   
<strong>removeNewLines</strong>(<em>parElement</em>, <em>parElementIdentifier</em>, <em>removeExcessSpace</em>)
1. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
2. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   a. "id" - default   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.    
3. <strong>removeExcessSpace</strong>: Number - 1 = remove excess, 0 = do not remove excess space.
   <em>NOTE</em> - excess space is considered more than one space character.
   
<strong>removeLastWord</strong>(<em>word</em>, <em>parElement</em>, <em>parElementIdentifier</em>)
1. <strong>word</strong>: String - the word to remove.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   a. "id" - default   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.    

<strong>removeLastWordInVariable</strong>(<em>variableWithWord</em>, <em>word</em>)
1. <strong>variableWithWord</strong>: variable - the variable with value.
2. <strong>word</strong>: String - the word that will be removed.

## Replacing Elements
<strong>replaceWord</strong>(<em>word</em>, <em>replaceWith</em>,  <em>parElement</em>, <em>parElementIdentifier</em>) 
1. <strong>word</strong>: String - word to remove.
2. <strong>replaceWith</strong>: String - the word the will be inserted in place of word.
3. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
4. <strong>parElementIdentifier</strong>: String - acceptable values are:   
   a. "id" - default   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.   
   
<strong>replaceWordInVariable</strong>(<em>word</em>, <em>replaceWith</em>, <em>variableWithWord</em>)   
1. <strong>word</strong>: String - the word that will be replaced.
2. <strong>replaceWith</strong>: String - the word the will be inserted in place of word.
3. <strong>variableWithWord</strong>: variable - the variable with value.

   
<strong>replaceInnerHTML</strong>(<em>replaceWith</em>, <em>parElement</em>, <em>parElementIdentifier</em>) 
1. <strong>replaceWith</strong>: String - the word the will be inserted in place of word.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, data-attribute, or self.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:   
   a. "id" - default   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.
   
<strong>replaceAttribute</strong>(<em>attribute</em>, <em>replaceWith</em>, <em>curElement</em>, <em>curElementIdentifier</em>) 
1. <strong>attribute</strong>: String - the attribute added or whose value is replace.
2. <strong>replaceWith</strong>: String - the attribute value the will be inserted into or in place of prior.
3. <strong>curElement</strong>: String - the element by name of id, tag, class, data-attribute, or self.
4. <strong>curElementIdentifier</strong>: String - acceptable values are:
   a. "id" - default
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array. 
   
<strong>replaceNewLines</strong>(<em>word</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>removeExcessSpace</em>, <em>arrayPrep</em>, <em>mindElement</em>)
1. <strong>word</strong>: String - the word that new lines will be replaced with.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:   
   a. "id" - default   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.   
4. <strong>removeExcessSpace</strong>: Number - 1 = remove excess, 0 = do not remove excess space.
   <em>NOTE</em> - excess space is considered more than one space character.
5. <strong>arrayPrep</strong>: Number - 1 = output is intended for array, 0 = output is not intended for array.
   <em>NOTE</em> - prepping for array will remove new lines with no characters, and the first and last replacement words.
6. <strong>mindElement</strong>: Number - 0 = off, 1 and over (x) = lines with x number of space characters will be ignored.
      
## Appending/Prepending/Add Elements
<strong>addToAttribute</strong>(<em>attribute</em>, <em>addWhat</em>, <em>addWhere</em>, <em>curElement</em>, <em>curElementIdentifier</em>, <em>usingAll</em>)
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
   
<strong>addHTMLToText</strong>(<em>tag</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>attributes</em>, <em>wrapWords</em>)
1. <strong>tag</strong>: String - the tag that will wrap the text.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   a. "id" - default   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.
4. <strong>attributes</strong>: String - the attribute and value respectively, separated with "::". Currently limited to one attribute. Example values:
   a. "style::color:blue"
   b. "class::className row"
5. <strong>wrapWords</strong>: String - Finds the matching string in parent element and wraps it with the <u>"tag"</u> argument.
      
## Changing Case
<strong>changeToUpperCase</strong>(<em>variableToChange</em>)
1. <strong>variableToChange</strong>: variable - the variable with value that will be changed.
 
<strong>changeToLowerCase</strong>(<em>variableToChange</em>) 
1. <strong>variableToChange</strong>: variable - the variable with value that will be changed.

<hr><hr>      

### Work In Progress (WIP)- Many updates needed
<strong>changeToTable</strong>(<em>colNumber</em>, <em>colTitles</em>, <em>extractTags</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>relocate</em>, <em>relocateElement</em>, <em>relocateElementIdentifier</em>, <em>addHTML</em>)
1. <strong>colNumber</strong>: Number - the number of columns the table will have.
2. <strong>colTitles</strong>: String - the heading for each column. Separate each heading with a comma.
3. <strong>extractTags</strong>: String - follows two patterns:
   a. Tag Name - the tag(s) within the parent element that nests text. 
      <strong>NOTE</strong> - Currently only accepts one tag followed by a separator that marks where a column ends for each row.
   b. Begins with "<strong>_</strong>" - when using primitive text with no tag pattern begin with "_" character followed by "w". For example:
      _w:n = lines with one word will mark new table data, and lines with over one word will mark next table data. New lines mark where data is nested.
      <em>NOTE</em> - this is best for tables that will only have two columns.
      _w3:n = lines with three words or less will mark new table data, and lines with over three words will mark next table data. New lines mark where data is nested.
      <strong>NOTE</strong> - this pattern assumes new lines and the number of columns are proportional with one another.
      <strong>NOTE</strong> - Currently only accepts "w" and "n"      
4. <strong>parElement</strong>: String - the parent element by name of id, tag, class, or data-attribute.
5. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   a. "id" - default   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.
6. <strong>relocate</strong>: <em><strong>WIP** </strong>Number - 1 to output to different DOM location, and 0 for current. Currently only works if current "relocateElementIdentifier" and "parElement" are id.<strong>**WIP</strong></em>
7. <strong>relocateElement</strong>: <em><strong>WIP**</strong> String - currently only works if relocating to another id or if value is "self" and "parElement" is an ID. <strong>**WIP</strong></em>
8. <strong>relocateElementIdentifier</strong>: <em><strong>WIP**</strong> String - currently only works with id. <strong>**WIP</strong></em>
9. <strong>addHTML</strong>: <em><strong>WIP**</strong> String; String = html element, add items, adding where. <strong>**WIP</strong> </em>
   - Example use:
   a. "a-:-href-:-https://site.com-:-target-:-_blank-:-rel-:-external::append-:-href-:-anchor-:-innerHTML-:-lc::td0"
      - Here "&lt;a&gt;" tag added with "href", "target", and "rel" attribute with values followed by "-:-" characters. Then appendsed to the href is an anchor link with value of the innerHTML of "&lt;td&gt;"  at index 0.
      
<hr>

### changeToTable Example:
The <strong>changeToTable</strong> function is best explained with an example. Below are two cases. 

<strong>ONE</strong> - With Tag Names as <strong>extractTags</strong>. HTML is:

&lt;div id="<em><strong>tableHere</strong></em>"&gt;&lt;/div&gt;

&lt;div id="<strong>demo</strong>"&gt;

 <strong>&lt;span&gt;</strong>
 
 Word
 A sentence or two describing the word.
 
 <strong>&lt;/span&gt;</strong>
 
 <strong>&lt;span&gt;</strong>
 
 Another Word
 And this pattern continues for however many span tags that are in table with two columns and rows equals number of span tags.
 
 <strong>&lt;/span&gt;</strong>
 
&lt;/div&gt;
&lt;script&gt;

// <em>The below call will make a table with:</em>

// <em> 2 columns, Term and Definition as headers, "span" tags nested in parent element, select id "demo" as parent, selecting id, relocating, select id "tableHere", selecting id, and adding "a" tag with attributes appending to "href" an anchor link that is the value of each 0 index "td" created.</em>

<strong>changeToTable</strong>(2, "Term, Definition", "span: ", "demo", "id", 1, "tableHere", "id", "a-:-href-:-https://site.com-:-target-:-_blank-:-rel-:-external::append-:-href-:-anchor-:-innerHTML-:-lc::td0");

&lt;/script&gt;

<strong>TWO</strong> - Using text nad new lines to create table <strong>extractTags</strong>. HTML is:

&lt;div id="<strong>demo</strong>"&gt; 

 Word
 A sentence or two describing the word.
 
 Another Word
 And this pattern continues for however many span tags that are in table with two columns and rows equals number of span tags.
 
&lt;/div&gt;

&lt;script&gt;
// <em>2 columns, Term and Definition as headers, selecting words by new lines minding two words, select id "demo" as parent, selecting id, not relocating, overwriting "demo" innerHTML with table, writing to id, and adding "a" tag with attributes appending to "href" an anchor link that is the value of each 0 index "td" created.</em>

<strong>changeToTable</strong>(2, "Term, Definition", "_w2:n", "demo", "id", 0, "self", "id", "a-:-href-:-https://site.com-:-target-:-_blank-:-rel-:-external::append-:-href-:-anchor-:-innerHTML-:-lc::td0");
&lt;/script&gt;

<strong>NOTE</strong> - using only <strong>changeToTable()</strong> with no arguments will also work, but additionally; <em><strong>NOTE</strong></em> that the parent element with highest length will be converted to table.

<hr><hr>      

## Miscellaneous
<strong>outputTextFile</strong>(<em>textFilePath</em>, <em>parElement</em>, <em>parElementIdentifier</em>, <em>asWhat</em>)
1. <strong>textFilePath</strong>: "String" - path to file that will be output as text.
2. <strong>parElement</strong>: String - the parent element by name of id, tag, class, data-attribute, or self.
3. <strong>parElementIdentifier</strong>: String - acceptable values are:  
   a. "id" - default   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.
4. <strong>asWhat</strong>: String = output as either "text" or "html".
   
<strong>copyText</strong>(<em>parElement</em>, <em>parElementIdentifier</em>, <em>copyWhat</em>) 
1. <strong>parElement</strong>: String - the parent element by name of id, tag, class, data-attribute, or self.
2. <strong>parElementIdentifier</strong>: String - acceptable values are:   
   a. "id"   
   b. "tag\[indexNumber\]" e.g. "tag2" gets the tag at index 2 as if array.   
   c. "class\[indexNumber\]" e.g. "className1" gets the class at index 1 as if array.   
   d. "data\[indexNumber\]" e.g. "name0" gets the data-name at index 0 as if array.   
3. <strong>copyWhat</strong>: String - acceptable values are:   
   a. "text" - default | gets the parent elements "innerText" value.   
   b. "html" - gets the parent elements "innerHTML" value.
   
<strong>showTermTitleWithLink</strong>(<em>cur</em>, <em>curData</em>, <em>curTitle</em>) <br>
     **TO USE** - Paste below example as is into HTML tag, then modify: <br>
```markdown
onmouseover="showTermTitleWithLink(this, this.dataset, this.dataset.title)" title="Change the definition. ::https://change_source_linke.com"
```
1. <strong>this</strong>: Required
2. <strong>curData</strong>: Required
3. <strong>curTitle</strong>: Required.
   For best results set arguments as such - (this, this.dataset, this.dataset.title). Example:
   showTermTitleWithLink(this, this.dataset, this.dataset.title)
   And place in a "onmouseover" attribute of HTML element, ensuring there is also a "title" attribute. 