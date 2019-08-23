# javascript_toaster
Toaster library by pure JavaScript

## Usage  
### 1. Include js and css for toaster in your head element.  
```  
<head>
  <link rel="stylesheet" type="text/css" href="toaster.css">
  <script type="text/javascript" src="toaster.js"></script>
</head>  
```  
### 2. Instantiate the Toaster class in your javascript.  
The easy way is like below.  
```  
const toaster = new Toaster();  
```  
  
There are some options so you can set an option like below.  
```  
const toaster = new Toaster(
    'closeButton': false,
    'hideDuration': 5000,
);
```  
The optisons are following:  
- 'closeButton' boolean: When setting the true, will display the close button.  
- 'method' string:  
  - 'top-full-width-drop-down' string: The toast with full width displays by drop down from top.  
  - 'top-center-drop-down' string: The toast displays by drop down from center top.  
  - 'bottom-full-width-drop-up' string: The toast with full width displays by drop up from bottom.  
  - 'bottom-center-drop-up' string: The toast displays by drop down from center bottom.  
- 'hideDuration' int: The duration for hiding the toast. It's milliseconds.  
### 3. Show a message toast.  
When displaying an error toast.  
```  
toaster.Error('Error.');
toaster.Error('Error.', 'This is an error message.');
```  
When displaying a warning toast.  
```
toaster.Warning('Warning.');
toaster.Warning('Warning.', 'This is a warning message.');
```  
When displaying a success toast.  
```
toaster.Success('Success.');
toaster.Success('Success.', 'This is a success message.');
```  
