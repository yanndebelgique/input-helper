# This package is a quick and easy way change values on your documents or Session variables.
 
 If you are tired of writing annoying events and helpers every 
 time you want to allow the user to  modify a document
 or session variable on the client! use this package.
 

 
 See the examples to see the use cases:
 
##Case 1: You want to allow the user to modify a string session variable:
 
 ```html
    {{>InputHelper session="hello" class='form-control'}}   
 ```

 
##Case 2: You want to allow the user to modify an attribute on a document:
 
 ```
    {{>InputHelper attribute="foo" document=this collection="Foobars" class='form-control'}}
 ```
 On input change event the attribute of the document will be modified. In the example the attribute "foo" will
  be modified on the document this of the collection Foobars.
 
###important! You need to declare an App.collections object and assign the mongo collections your declare client-side. i.e. App.collections.Foobars = new Mongo.collection('foobars').
 
 <table>
    <tr>
        <td>
        attribute
        </td>
        <td>
        The attribute you want to change on the document. Uses mongodb selector.
        </td>
    </tr>
   <tr>
        <td>
        document
        </td>
        <td>
        the document object you want to modify
        </td>
    </tr>
   <tr>
        <td>
        collection
        </td>
        <td>
        the collection the document belongs to
        </td>
    </tr>
   <tr>
        <td>
        class
        </td>
        <td>
        classes to add to the input field 
        </td>
    </tr>
   
   
   
 </table>
 
 
 