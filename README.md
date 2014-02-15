JavaScript-Cookie
=================

JavaScript Cookie



Examples:

`````javascript
// Use cookie "cookiename"
var somecookie = new Cookie('cookiename');

// Create cookie "cookiename" with value "value", expire in "2" days
var somecookie = new Cookie('cookiename', 'value', 2);

// Set cookie value to "value"
somecookie.set('value');

// Set cookie value to "value", expire in "2" days
somecookie.set('value', 2);

// Get cookie value
var value = somecookie.get();

// Check if cookie exists
if (somecookie.check()) {
	// Do something
}

// Remove cookie
somecookie.remove();
`````
