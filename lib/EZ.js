


/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var version = "3.7.1",

	rhtmlSuffix = /HTML$/i,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},


	// Retrieve the text value of an array of DOM nodes
	text: function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += jQuery.text( node );
			}
		}
		if ( nodeType === 1 || nodeType === 11 ) {
			return elem.textContent;
		}
		if ( nodeType === 9 ) {
			return elem.documentElement.textContent;
		}
		if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML when documentElement doesn't yet exist, such as inside
		// document fragments.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var splice = arr.splice;


var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




// Note: an element does not contain itself
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	return a === bup || !!( bup && bup.nodeType === 1 && (

		// Support: IE 9 - 11+
		// IE doesn't have `contains` on SVG.
		a.contains ?
			a.contains( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

function fcssescape( ch, asCodePoint ) {
	if ( asCodePoint ) {

		// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
		if ( ch === "\0" ) {
			return "\uFFFD";
		}

		// Control characters and (dependent upon position) numbers get escaped as code points
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Other potentially-special ASCII characters get backslash-escaped
	return "\\" + ch;
}

jQuery.escapeSelector = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferredDoc = document,
	pushNative = push;

( function() {

var i,
	Expr,
	outermostContext,
	sortInput,
	hasDuplicate,
	push = pushNative,

	// Local document vars
	document,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	matches,

	// Instance-specific data
	expando = jQuery.expando,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" +
		whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		ID: new RegExp( "^#(" + identifier + ")" ),
		CLASS: new RegExp( "^\\.(" + identifier + ")" ),
		TAG: new RegExp( "^(" + identifier + "|[*])" ),
		ATTR: new RegExp( "^" + attributes ),
		PSEUDO: new RegExp( "^" + pseudos ),
		CHILD: new RegExp(
			"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		needsContext: new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( nonHex ) {

			// Strip the backslash prefix from a non-hex escape sequence
			return nonHex;
		}

		// Replace a hexadecimal escape sequence with the encoded Unicode code point
		// Support: IE <=11+
		// For values outside the Basic Multilingual Plane (BMP), manually construct a
		// surrogate pair
		return high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes; see `setDocument`.
	// Support: IE 9 - 11+, Edge 12 - 18+
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE/Edge.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", next: "legend" }
	);

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android <=4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = {
		apply: function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		},
		call: function( target ) {
			pushNative.apply( target, slice.call( arguments, 1 ) );
		}
	};
}

function find( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE 9 only
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								push.call( results, elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE 9 only
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( context, elem ) &&
							elem.id === m ) {

							push.call( results, elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when
					// strict-comparing two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( newContext != context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrimCSS, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties
		// (see https://github.com/jquery/sizzle/issues/157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		return nodeName( elem, "input" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11+
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
function setDocument( node ) {
	var subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( document );

	// Support: iOS 7 only, IE 9 - 11+
	// Older browsers didn't support unprefixed `matches`.
	matches = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors
	// (see trac-13936).
	// Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
	// all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
	if ( documentElement.msMatchesSelector &&

		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "unload", unloadHandler );
	}

	// Support: IE <10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Support: IE 9 only
	// Check to see if it's possible to do matchesSelector
	// on a disconnected node.
	support.disconnectedMatch = assert( function( el ) {
		return matches.call( el, "*" );
	} );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge don't support the :scope pseudo-class.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
	// Make sure the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter.ID =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find.TAG = function( tag, context ) {
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			return context.getElementsByTagName( tag );

		// DocumentFragment nodes don't have gEBTN
		} else {
			return context.querySelectorAll( tag );
		}
	};

	// Class
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	rbuggyQSA = [];

	// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert( function( el ) {

		var input;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Support: iOS <=7 - 8 only
		// Boolean attributes and "value" are not treated correctly in some XML documents
		if ( !el.querySelectorAll( "[selected]" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Support: iOS <=7 - 8 only
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Support: iOS 8 only
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// In-page `selector#id sibling-combinator selector` fails
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":checked" );
		}

		// Support: Windows 8 Native Apps
		// The type and name attributes are restricted during .innerHTML assignment
		input = document.createElement( "input" );
		input.setAttribute( "type", "hidden" );
		el.appendChild( input ).setAttribute( "name", "D" );

		// Support: IE 9 - 11+
		// IE's :disabled selector does not pick up the children of disabled fieldsets
		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Support: IE 11+, Edge 15 - 18+
		// IE 11/Edge don't find elements on a `[name='']` query in some cases.
		// Adding a temporary attribute to the document before the selection works
		// around the issue.
		// Interestingly, IE 10 & older don't seem to have the issue.
		input = document.createElement( "input" );
		input.setAttribute( "name", "" );
		el.appendChild( input );
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
				whitespace + "*(?:''|\"\")" );
		}
	} );

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a === document || a.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b === document || b.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	};

	return document;
}

find.matches = function( expr, elements ) {
	return find( expr, null, null, elements );
};

find.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
};

find.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return jQuery.contains( context, elem );
};


find.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (see trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	if ( val !== undefined ) {
		return val;
	}

	return elem.getAttribute( name );
};

find.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
jQuery.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	//
	// Support: Android <=4.0+
	// Testing for detecting duplicates is unpredictable so instead assume we can't
	// depend on duplicate detection in all browsers without a stable sort.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( results, 0 );
	sort.call( results, sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			splice.call( results, duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
};

Expr = jQuery.expr = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		ATTR: function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		CHILD: function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					find.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				find.error( match[ 0 ] );
			}

			return match;
		},

		PSEUDO: function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		TAG: function( nodeNameSelector ) {
			var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return nodeName( elem, expectedNodeName );
				};
		},

		CLASS: function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace + ")" + className +
					"(" + whitespace + "|$)" ) ) &&
				classCache( className, function( elem ) {
					return pattern.test(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "undefined" &&
								elem.getAttribute( "class" ) ||
							""
					);
				} );
		},

		ATTR: function( name, operator, check ) {
			return function( elem ) {
				var result = find.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				if ( operator === "=" ) {
					return result === check;
				}
				if ( operator === "!=" ) {
					return result !== check;
				}
				if ( operator === "^=" ) {
					return check && result.indexOf( check ) === 0;
				}
				if ( operator === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if ( operator === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				if ( operator === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf( check ) > -1;
				}
				if ( operator === "|=" ) {
					return result === check || result.slice( 0, check.length + 1 ) === check + "-";
				}

				return false;
			};
		},

		CHILD: function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || ( parent[ expando ] = {} );
							cache = outerCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {
								outerCache = elem[ expando ] || ( elem[ expando ] = {} );
								cache = outerCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as jQuery does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		not: markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element
					// (see https://github.com/jquery/sizzle/issues/299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		has: markFunction( function( selector ) {
			return function( elem ) {
				return find( selector, elem ).length > 0;
			};
		} ),

		contains: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		target: function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function( elem ) {
			return elem === documentElement;
		},

		focus: function( elem ) {
			return elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		enabled: createDisabledPseudo( false ),
		disabled: createDisabledPseudo( true ),

		checked: function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		selected: function( elem ) {

			// Support: IE <=11+
			// Accessing the selectedIndex property
			// forces the browser to treat the default option as
			// selected when in an optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		empty: function( elem ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		parent: function( elem ) {
			return !Expr.pseudos.empty( elem );
		},

		// Element/input types
		header: function( elem ) {
			return rheader.test( elem.nodeName );
		},

		input: function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		button: function( elem ) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName( elem, "button" );
		},

		text: function( elem ) {
			var attr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear
				// with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		first: createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		last: createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		even: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		odd: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i;

			if ( argument < 0 ) {
				i = argument + length;
			} else if ( argument > length ) {
				i = length;
			} else {
				i = argument;
			}

			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	return soFar ?
		find.error( selector ) :

		// Cache the tokens
		tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						if ( skip && nodeName( elem, skip ) ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = outerCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							outerCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		find( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed ||
				multipleContexts( selector || "*",
					context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems;

		if ( matcher ) {

			// If we have a postFinder, or filtered seed, or non-seed postFilter
			// or preexisting results,
			matcherOut = postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results;

			// Find primary matches
			matcher( matcherIn, matcherOut, context, xml );
		} else {
			matcherOut = matcherIn;
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || context != outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element
			// (see https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find.TAG( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: iOS <=7 - 9 only
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
			// elements by id. (see trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							push.call( results, elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

function compile( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
}

/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				context
			) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
}

// One-time assignments

// Support: Android <=4.0 - 4.1+
// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Initialize against the default document
setDocument();

// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = find;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
find.compile = compile;
find.select = select;
find.setDocument = setDocument;
find.tokenize = tokenize;

find.escape = jQuery.escapeSelector;
find.getText = jQuery.text;
find.isXML = jQuery.isXMLDoc;
find.selectors = jQuery.expr;
find.support = jQuery.support;
find.uniqueSort = jQuery.uniqueSort;

	/* eslint-enable */

} )();


var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the error, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// The deprecated alias of the above. While the name suggests
								// returning the stack, not an error instance, jQuery just passes
								// it directly to `console.warn` so both will work; an instance
								// just better cooperates with source maps.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
jQuery.Deferred.exceptionHook = function( error, asyncError ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", true );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, isSetup ) {

	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
	if ( !isSetup ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Re-enable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "box-sizing:content-box;border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is `display: block`
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );






// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************

/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var DO_NOT_EXPORT_CODEPAGE=true;var cptable={version:"1.15.0"};cptable[437]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ã‡Ã¼Ã©Ã¢Ã¤Ã Ã¥Ã§ÃªÃ«Ã¨Ã¯Ã®Ã¬Ã„Ã…Ã‰Ã¦Ã†Ã´Ã¶Ã²Ã»Ã¹Ã¿Ã–ÃœÂ¢Â£Â¥â‚§Æ’Ã¡Ã­Ã³ÃºÃ±Ã‘ÂªÂºÂ¿âŒÂ¬Â½Â¼Â¡Â«Â»â–‘â–’â–“â”‚â”¤â•¡â•¢â•–â••â•£â•‘â•—â•â•œâ•›â”â””â”´â”¬â”œâ”€â”¼â•žâ•Ÿâ•šâ•”â•©â•¦â• â•â•¬â•§â•¨â•¤â•¥â•™â•˜â•’â•“â•«â•ªâ”˜â”Œâ–ˆâ–„â–Œâ–â–€Î±ÃŸÎ“Ï€Î£ÏƒÂµÏ„Î¦Î˜Î©Î´âˆžÏ†Îµâˆ©â‰¡Â±â‰¥â‰¤âŒ âŒ¡Ã·â‰ˆÂ°âˆ™Â·âˆšâ¿Â²â– Â ",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[620]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ã‡Ã¼Ã©Ã¢Ã¤Ã Ä…Ã§ÃªÃ«Ã¨Ã¯Ã®Ä‡Ã„Ä„Ä˜Ä™Å‚Ã´Ã¶Ä†Ã»Ã¹ÅšÃ–ÃœÂ¢ÅÂ¥Å›Æ’Å¹Å»Ã³Ã“Å„ÅƒÅºÅ¼Â¿âŒÂ¬Â½Â¼Â¡Â«Â»â–‘â–’â–“â”‚â”¤â•¡â•¢â•–â••â•£â•‘â•—â•â•œâ•›â”â””â”´â”¬â”œâ”€â”¼â•žâ•Ÿâ•šâ•”â•©â•¦â• â•â•¬â•§â•¨â•¤â•¥â•™â•˜â•’â•“â•«â•ªâ”˜â”Œâ–ˆâ–„â–Œâ–â–€Î±ÃŸÎ“Ï€Î£ÏƒÂµÏ„Î¦Î˜Î©Î´âˆžÏ†Îµâˆ©â‰¡Â±â‰¥â‰¤âŒ âŒ¡Ã·â‰ˆÂ°âˆ™Â·âˆšâ¿Â²â– Â ",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[737]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Î‘Î’Î“Î”Î•Î–Î—Î˜Î™ÎšÎ›ÎœÎÎžÎŸÎ Î¡Î£Î¤Î¥Î¦Î§Î¨Î©Î±Î²Î³Î´ÎµÎ¶Î·Î¸Î¹ÎºÎ»Î¼Î½Î¾Î¿Ï€ÏÏƒÏ‚Ï„Ï…Ï†Ï‡Ïˆâ–‘â–’â–“â”‚â”¤â•¡â•¢â•–â••â•£â•‘â•—â•â•œâ•›â”â””â”´â”¬â”œâ”€â”¼â•žâ•Ÿâ•šâ•”â•©â•¦â• â•â•¬â•§â•¨â•¤â•¥â•™â•˜â•’â•“â•«â•ªâ”˜â”Œâ–ˆâ–„â–Œâ–â–€Ï‰Î¬Î­Î®ÏŠÎ¯ÏŒÏÏ‹ÏŽÎ†ÎˆÎ‰ÎŠÎŒÎŽÎÂ±â‰¥â‰¤ÎªÎ«Ã·â‰ˆÂ°âˆ™Â·âˆšâ¿Â²â– Â ",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[850]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ã‡Ã¼Ã©Ã¢Ã¤Ã Ã¥Ã§ÃªÃ«Ã¨Ã¯Ã®Ã¬Ã„Ã…Ã‰Ã¦Ã†Ã´Ã¶Ã²Ã»Ã¹Ã¿Ã–ÃœÃ¸Â£Ã˜Ã—Æ’Ã¡Ã­Ã³ÃºÃ±Ã‘ÂªÂºÂ¿Â®Â¬Â½Â¼Â¡Â«Â»â–‘â–’â–“â”‚â”¤ÃÃ‚Ã€Â©â•£â•‘â•—â•Â¢Â¥â”â””â”´â”¬â”œâ”€â”¼Ã£Ãƒâ•šâ•”â•©â•¦â• â•â•¬Â¤Ã°ÃÃŠÃ‹ÃˆÄ±ÃÃŽÃâ”˜â”Œâ–ˆâ–„Â¦ÃŒâ–€Ã“ÃŸÃ”Ã’ÃµÃ•ÂµÃ¾ÃžÃšÃ›Ã™Ã½ÃÂ¯Â´Â­Â±â€—Â¾Â¶Â§Ã·Â¸Â°Â¨Â·Â¹Â³Â²â– Â ",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[852]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ã‡Ã¼Ã©Ã¢Ã¤Å¯Ä‡Ã§Å‚Ã«ÅÅ‘Ã®Å¹Ã„Ä†Ã‰Ä¹ÄºÃ´Ã¶Ä½Ä¾ÅšÅ›Ã–ÃœÅ¤Å¥ÅÃ—ÄÃ¡Ã­Ã³ÃºÄ„Ä…Å½Å¾Ä˜Ä™Â¬ÅºÄŒÅŸÂ«Â»â–‘â–’â–“â”‚â”¤ÃÃ‚ÄšÅžâ•£â•‘â•—â•Å»Å¼â”â””â”´â”¬â”œâ”€â”¼Ä‚Äƒâ•šâ•”â•©â•¦â• â•â•¬Â¤Ä‘ÄÄŽÃ‹ÄÅ‡ÃÃŽÄ›â”˜â”Œâ–ˆâ–„Å¢Å®â–€Ã“ÃŸÃ”ÅƒÅ„ÅˆÅ Å¡Å”ÃšÅ•Å°Ã½ÃÅ£Â´Â­ËË›Ë‡Ë˜Â§Ã·Â¸Â°Â¨Ë™Å±Å˜Å™â– Â ",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[857]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ã‡Ã¼Ã©Ã¢Ã¤Ã Ã¥Ã§ÃªÃ«Ã¨Ã¯Ã®Ä±Ã„Ã…Ã‰Ã¦Ã†Ã´Ã¶Ã²Ã»Ã¹Ä°Ã–ÃœÃ¸Â£Ã˜ÅžÅŸÃ¡Ã­Ã³ÃºÃ±Ã‘ÄžÄŸÂ¿Â®Â¬Â½Â¼Â¡Â«Â»â–‘â–’â–“â”‚â”¤ÃÃ‚Ã€Â©â•£â•‘â•—â•Â¢Â¥â”â””â”´â”¬â”œâ”€â”¼Ã£Ãƒâ•šâ•”â•©â•¦â• â•â•¬Â¤ÂºÂªÃŠÃ‹Ãˆï¿½ÃÃŽÃâ”˜â”Œâ–ˆâ–„Â¦ÃŒâ–€Ã“ÃŸÃ”Ã’ÃµÃ•Âµï¿½Ã—ÃšÃ›Ã™Ã¬Ã¿Â¯Â´Â­Â±ï¿½Â¾Â¶Â§Ã·Â¸Â°Â¨Â·Â¹Â³Â²â– Â ",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[861]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ã‡Ã¼Ã©Ã¢Ã¤Ã Ã¥Ã§ÃªÃ«Ã¨ÃÃ°ÃžÃ„Ã…Ã‰Ã¦Ã†Ã´Ã¶Ã¾Ã»ÃÃ½Ã–ÃœÃ¸Â£Ã˜â‚§Æ’Ã¡Ã­Ã³ÃºÃÃÃ“ÃšÂ¿âŒÂ¬Â½Â¼Â¡Â«Â»â–‘â–’â–“â”‚â”¤â•¡â•¢â•–â••â•£â•‘â•—â•â•œâ•›â”â””â”´â”¬â”œâ”€â”¼â•žâ•Ÿâ•šâ•”â•©â•¦â• â•â•¬â•§â•¨â•¤â•¥â•™â•˜â•’â•“â•«â•ªâ”˜â”Œâ–ˆâ–„â–Œâ–â–€Î±ÃŸÎ“Ï€Î£ÏƒÂµÏ„Î¦Î˜Î©Î´âˆžÏ†Îµâˆ©â‰¡Â±â‰¥â‰¤âŒ âŒ¡Ã·â‰ˆÂ°âˆ™Â·âˆšâ¿Â²â– Â ",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[865]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ã‡Ã¼Ã©Ã¢Ã¤Ã Ã¥Ã§ÃªÃ«Ã¨Ã¯Ã®Ã¬Ã„Ã…Ã‰Ã¦Ã†Ã´Ã¶Ã²Ã»Ã¹Ã¿Ã–ÃœÃ¸Â£Ã˜â‚§Æ’Ã¡Ã­Ã³ÃºÃ±Ã‘ÂªÂºÂ¿âŒÂ¬Â½Â¼Â¡Â«Â¤â–‘â–’â–“â”‚â”¤â•¡â•¢â•–â••â•£â•‘â•—â•â•œâ•›â”â””â”´â”¬â”œâ”€â”¼â•žâ•Ÿâ•šâ•”â•©â•¦â• â•â•¬â•§â•¨â•¤â•¥â•™â•˜â•’â•“â•«â•ªâ”˜â”Œâ–ˆâ–„â–Œâ–â–€Î±ÃŸÎ“Ï€Î£ÏƒÂµÏ„Î¦Î˜Î©Î´âˆžÏ†Îµâˆ©â‰¡Â±â‰¥â‰¤âŒ âŒ¡Ã·â‰ˆÂ°âˆ™Â·âˆšâ¿Â²â– Â ",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[866]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÐÐ‘Ð’Ð“Ð”Ð•Ð–Ð—Ð˜Ð™ÐšÐ›ÐœÐÐžÐŸÐ Ð¡Ð¢Ð£Ð¤Ð¥Ð¦Ð§Ð¨Ð©ÐªÐ«Ð¬Ð­Ð®Ð¯Ð°Ð±Ð²Ð³Ð´ÐµÐ¶Ð·Ð¸Ð¹ÐºÐ»Ð¼Ð½Ð¾Ð¿â–‘â–’â–“â”‚â”¤â•¡â•¢â•–â••â•£â•‘â•—â•â•œâ•›â”â””â”´â”¬â”œâ”€â”¼â•žâ•Ÿâ•šâ•”â•©â•¦â• â•â•¬â•§â•¨â•¤â•¥â•™â•˜â•’â•“â•«â•ªâ”˜â”Œâ–ˆâ–„â–Œâ–â–€Ñ€ÑÑ‚ÑƒÑ„Ñ…Ñ†Ñ‡ÑˆÑ‰ÑŠÑ‹ÑŒÑÑŽÑÐÑ‘Ð„Ñ”Ð‡Ñ—ÐŽÑžÂ°âˆ™Â·âˆšâ„–Â¤â– Â ",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[874]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~â‚¬ï¿½ï¿½ï¿½ï¿½â€¦ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½â€˜â€™â€œâ€â€¢â€“â€”ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Â à¸à¸‚à¸ƒà¸„à¸…à¸†à¸‡à¸ˆà¸‰à¸Šà¸‹à¸Œà¸à¸Žà¸à¸à¸‘à¸’à¸“à¸”à¸•à¸–à¸—à¸˜à¸™à¸šà¸›à¸œà¸à¸žà¸Ÿà¸ à¸¡à¸¢à¸£à¸¤à¸¥à¸¦à¸§à¸¨à¸©à¸ªà¸«à¸¬à¸­à¸®à¸¯à¸°à¸±à¸²à¸³à¸´à¸µà¸¶à¸·à¸¸à¸¹à¸ºï¿½ï¿½ï¿½ï¿½à¸¿à¹€à¹à¹‚à¹ƒà¹„à¹…à¹†à¹‡à¹ˆà¹‰à¹Šà¹‹à¹Œà¹à¹Žà¹à¹à¹‘à¹’à¹“à¹”à¹•à¹–à¹—à¹˜à¹™à¹šà¹›ï¿½ï¿½ï¿½ï¿½",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[895]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄŒÃ¼Ã©ÄÃ¤ÄŽÅ¤ÄÄ›ÄšÄ¹ÃÄ¾ÇªÃ„ÃÃ‰Å¾Å½Ã´Ã¶Ã“Å¯ÃšÃ½Ã–ÃœÅ Ä½ÃÅ˜Å¥Ã¡Ã­Ã³ÃºÅˆÅ‡Å®Ã”Å¡Å™Å•Å”Â¼Â§Â«Â»â–‘â–’â–“â”‚â”¤â•¡â•¢â•–â••â•£â•‘â•—â•â•œâ•›â”â””â”´â”¬â”œâ”€â”¼â•žâ•Ÿâ•šâ•”â•©â•¦â• â•â•¬â•§â•¨â•¤â•¥â•™â•˜â•’â•“â•«â•ªâ”˜â”Œâ–ˆâ–„â–Œâ–â–€Î±ÃŸÎ“Ï€Î£ÏƒÂµÏ„Î¦Î˜Î©Î´âˆžÏ†Îµâˆ©â‰¡Â±â‰¥â‰¤âŒ âŒ¡Ã·â‰ˆÂ°âˆ™Â·âˆšâ¿Â²â– Â ",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[932]=function(){var e=[],r={},t=[],a;t[0]="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï½¡ï½¢ï½£ï½¤ï½¥ï½¦ï½§ï½¨ï½©ï½ªï½«ï½¬ï½­ï½®ï½¯ï½°ï½±ï½²ï½³ï½´ï½µï½¶ï½·ï½¸ï½¹ï½ºï½»ï½¼ï½½ï½¾ï½¿ï¾€ï¾ï¾‚ï¾ƒï¾„ï¾…ï¾†ï¾‡ï¾ˆï¾‰ï¾Šï¾‹ï¾Œï¾ï¾Žï¾ï¾ï¾‘ï¾’ï¾“ï¾”ï¾•ï¾–ï¾—ï¾˜ï¾™ï¾šï¾›ï¾œï¾ï¾žï¾Ÿï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[0].length;++a)if(t[0][a].charCodeAt(0)!==65533){r[t[0][a]]=0+a;e[0+a]=t[0][a]}t[129]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ã€€ã€ã€‚ï¼Œï¼Žãƒ»ï¼šï¼›ï¼Ÿï¼ã‚›ã‚œÂ´ï½€Â¨ï¼¾ï¿£ï¼¿ãƒ½ãƒ¾ã‚ã‚žã€ƒä»ã€…ã€†ã€‡ãƒ¼â€•â€ï¼ï¼¼ï½žâˆ¥ï½œâ€¦â€¥â€˜â€™â€œâ€ï¼ˆï¼‰ã€”ã€•ï¼»ï¼½ï½›ï½ã€ˆã€‰ã€Šã€‹ã€Œã€ã€Žã€ã€ã€‘ï¼‹ï¼Â±Ã—ï¿½Ã·ï¼â‰ ï¼œï¼žâ‰¦â‰§âˆžâˆ´â™‚â™€Â°â€²â€³â„ƒï¿¥ï¼„ï¿ ï¿¡ï¼…ï¼ƒï¼†ï¼Šï¼ Â§â˜†â˜…â—‹â—â—Žâ—‡â—†â–¡â– â–³â–²â–½â–¼â€»ã€’â†’â†â†‘â†“ã€“ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½âˆˆâˆ‹âŠ†âŠ‡âŠ‚âŠƒâˆªâˆ©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½âˆ§âˆ¨ï¿¢â‡’â‡”âˆ€âˆƒï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½âˆ âŠ¥âŒ’âˆ‚âˆ‡â‰¡â‰’â‰ªâ‰«âˆšâˆ½âˆâˆµâˆ«âˆ¬ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½â„«â€°â™¯â™­â™ªâ€ â€¡Â¶ï¿½ï¿½ï¿½ï¿½â—¯ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[129].length;++a)if(t[129][a].charCodeAt(0)!==65533){r[t[129][a]]=33024+a;e[33024+a]=t[129][a]}t[130]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¼ï¼‘ï¼’ï¼“ï¼”ï¼•ï¼–ï¼—ï¼˜ï¼™ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¼¡ï¼¢ï¼£ï¼¤ï¼¥ï¼¦ï¼§ï¼¨ï¼©ï¼ªï¼«ï¼¬ï¼­ï¼®ï¼¯ï¼°ï¼±ï¼²ï¼³ï¼´ï¼µï¼¶ï¼·ï¼¸ï¼¹ï¼ºï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï½ï½‚ï½ƒï½„ï½…ï½†ï½‡ï½ˆï½‰ï½Šï½‹ï½Œï½ï½Žï½ï½ï½‘ï½’ï½“ï½”ï½•ï½–ï½—ï½˜ï½™ï½šï¿½ï¿½ï¿½ï¿½ãã‚ãƒã„ã…ã†ã‡ãˆã‰ãŠã‹ãŒããŽããã‘ã’ã“ã”ã•ã–ã—ã˜ã™ãšã›ãœããžãŸã ã¡ã¢ã£ã¤ã¥ã¦ã§ã¨ã©ãªã«ã¬ã­ã®ã¯ã°ã±ã²ã³ã´ãµã¶ã·ã¸ã¹ãºã»ã¼ã½ã¾ã¿ã‚€ã‚ã‚‚ã‚ƒã‚„ã‚…ã‚†ã‚‡ã‚ˆã‚‰ã‚Šã‚‹ã‚Œã‚ã‚Žã‚ã‚ã‚‘ã‚’ã‚“ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[130].length;++a)if(t[130][a].charCodeAt(0)!==65533){r[t[130][a]]=33280+a;e[33280+a]=t[130][a]}t[131]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ã‚¡ã‚¢ã‚£ã‚¤ã‚¥ã‚¦ã‚§ã‚¨ã‚©ã‚ªã‚«ã‚¬ã‚­ã‚®ã‚¯ã‚°ã‚±ã‚²ã‚³ã‚´ã‚µã‚¶ã‚·ã‚¸ã‚¹ã‚ºã‚»ã‚¼ã‚½ã‚¾ã‚¿ãƒ€ãƒãƒ‚ãƒƒãƒ„ãƒ…ãƒ†ãƒ‡ãƒˆãƒ‰ãƒŠãƒ‹ãƒŒãƒãƒŽãƒãƒãƒ‘ãƒ’ãƒ“ãƒ”ãƒ•ãƒ–ãƒ—ãƒ˜ãƒ™ãƒšãƒ›ãƒœãƒãƒžãƒŸï¿½ãƒ ãƒ¡ãƒ¢ãƒ£ãƒ¤ãƒ¥ãƒ¦ãƒ§ãƒ¨ãƒ©ãƒªãƒ«ãƒ¬ãƒ­ãƒ®ãƒ¯ãƒ°ãƒ±ãƒ²ãƒ³ãƒ´ãƒµãƒ¶ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Î‘Î’Î“Î”Î•Î–Î—Î˜Î™ÎšÎ›ÎœÎÎžÎŸÎ Î¡Î£Î¤Î¥Î¦Î§Î¨Î©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Î±Î²Î³Î´ÎµÎ¶Î·Î¸Î¹ÎºÎ»Î¼Î½Î¾Î¿Ï€ÏÏƒÏ„Ï…Ï†Ï‡ÏˆÏ‰ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[131].length;++a)if(t[131][a].charCodeAt(0)!==65533){r[t[131][a]]=33536+a;e[33536+a]=t[131][a]}t[132]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ÐÐ‘Ð’Ð“Ð”Ð•ÐÐ–Ð—Ð˜Ð™ÐšÐ›ÐœÐÐžÐŸÐ Ð¡Ð¢Ð£Ð¤Ð¥Ð¦Ð§Ð¨Ð©ÐªÐ«Ð¬Ð­Ð®Ð¯ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ð°Ð±Ð²Ð³Ð´ÐµÑ‘Ð¶Ð·Ð¸Ð¹ÐºÐ»Ð¼Ð½ï¿½Ð¾Ð¿Ñ€ÑÑ‚ÑƒÑ„Ñ…Ñ†Ñ‡ÑˆÑ‰ÑŠÑ‹ÑŒÑÑŽÑï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½â”€â”‚â”Œâ”â”˜â””â”œâ”¬â”¤â”´â”¼â”â”ƒâ”â”“â”›â”—â”£â”³â”«â”»â•‹â” â”¯â”¨â”·â”¿â”â”°â”¥â”¸â•‚ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[132].length;++a)if(t[132][a].charCodeAt(0)!==65533){r[t[132][a]]=33792+a;e[33792+a]=t[132][a]}t[135]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½â‘ â‘¡â‘¢â‘£â‘¤â‘¥â‘¦â‘§â‘¨â‘©â‘ªâ‘«â‘¬â‘­â‘®â‘¯â‘°â‘±â‘²â‘³â… â…¡â…¢â…£â…¤â…¥â…¦â…§â…¨â…©ï¿½ã‰ãŒ”ãŒ¢ããŒ˜ãŒ§ãŒƒãŒ¶ã‘ã—ãŒãŒ¦ãŒ£ãŒ«ãŠãŒ»ãŽœãŽãŽžãŽŽãŽã„ãŽ¡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ã»ï¿½ã€ã€Ÿâ„–ãâ„¡ãŠ¤ãŠ¥ãŠ¦ãŠ§ãŠ¨ãˆ±ãˆ²ãˆ¹ã¾ã½ã¼â‰’â‰¡âˆ«âˆ®âˆ‘âˆšâŠ¥âˆ âˆŸâŠ¿âˆµâˆ©âˆªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[135].length;++a)if(t[135][a].charCodeAt(0)!==65533){r[t[135][a]]=34560+a;e[34560+a]=t[135][a]}t[136]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½äºœå”–å¨ƒé˜¿å“€æ„›æŒ¨å§¶é€¢è‘µèŒœç©æ‚ªæ¡æ¸¥æ—­è‘¦èŠ¦é¯µæ¢“åœ§æ–¡æ‰±å®›å§è™»é£´çµ¢ç¶¾é®Žæˆ–ç²Ÿè¢·å®‰åºµæŒ‰æš—æ¡ˆé—‡éžæä»¥ä¼Šä½ä¾å‰å›²å¤·å§”å¨å°‰æƒŸæ„æ…°æ˜“æ¤…ç‚ºç•ç•°ç§»ç¶­ç·¯èƒƒèŽè¡£è¬‚é•éºåŒ»äº•äº¥åŸŸè‚²éƒç£¯ä¸€å£±æº¢é€¸ç¨²èŒ¨èŠ‹é°¯å…å°å’½å“¡å› å§»å¼•é£²æ·«èƒ¤è”­ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[136].length;++a)if(t[136][a].charCodeAt(0)!==65533){r[t[136][a]]=34816+a;e[34816+a]=t[136][a]}t[137]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é™¢é™°éš éŸ»å‹å³å®‡çƒç¾½è¿‚é›¨å¯éµœçªºä¸‘ç¢“è‡¼æ¸¦å˜˜å”„æ¬è”šé°»å§¥åŽ©æµ¦ç“œé–å™‚äº‘é‹é›²èé¤Œå¡å–¶å¬°å½±æ˜ æ›³æ „æ°¸æ³³æ´©ç‘›ç›ˆç©Žé ´è‹±è¡›è© é‹­æ¶²ç–«ç›Šé§…æ‚¦è¬è¶Šé–²æ¦ŽåŽ­å††ï¿½åœ’å °å¥„å®´å»¶æ€¨æŽ©æ´æ²¿æ¼”ç‚Žç„”ç…™ç‡•çŒ¿ç¸è‰¶è‹‘è–—é é‰›é´›å¡©æ–¼æ±šç”¥å‡¹å¤®å¥¥å¾€å¿œæŠ¼æ—ºæ¨ªæ¬§æ®´çŽ‹ç¿è¥–é´¬é´Žé»„å²¡æ²–è»å„„å±‹æ†¶è‡†æ¡¶ç‰¡ä¹™ä¿ºå¸æ©æ¸©ç©éŸ³ä¸‹åŒ–ä»®ä½•ä¼½ä¾¡ä½³åŠ å¯å˜‰å¤å«å®¶å¯¡ç§‘æš‡æžœæž¶æ­Œæ²³ç«ç‚ç¦ç¦¾ç¨¼ç®‡èŠ±è‹›èŒ„è·è¯è“è¦èª²å˜©è²¨è¿¦éŽéœžèšŠä¿„å³¨æˆ‘ç‰™ç”»è‡¥èŠ½è›¾è³€é›…é¤“é§•ä»‹ä¼šè§£å›žå¡Šå£Šå»»å¿«æ€ªæ‚”æ¢æ‡æˆ’æ‹æ”¹ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[137].length;++a)if(t[137][a].charCodeAt(0)!==65533){r[t[137][a]]=35072+a;e[35072+a]=t[137][a]}t[138]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é­æ™¦æ¢°æµ·ç°ç•Œçš†çµµèŠ¥èŸ¹é–‹éšŽè²å‡±åŠ¾å¤–å’³å®³å´–æ…¨æ¦‚æ¶¯ç¢è“‹è¡—è©²éŽ§éª¸æµ¬é¦¨è›™åž£æŸ¿è›ŽéˆŽåŠƒåš‡å„å»“æ‹¡æ’¹æ ¼æ ¸æ®»ç²ç¢ºç©«è¦šè§’èµ«è¼ƒéƒ­é–£éš”é©å­¦å²³æ¥½é¡é¡ŽæŽ›ç¬ æ¨«ï¿½æ©¿æ¢¶é°æ½Ÿå‰²å–æ°æ‹¬æ´»æ¸‡æ»‘è‘›è¤è½„ä¸”é°¹å¶æ¤›æ¨ºéž„æ ªå…œç«ƒè’²é‡œéŽŒå™›é´¨æ ¢èŒ…è±ç²¥åˆˆè‹…ç“¦ä¹¾ä¾ƒå† å¯’åˆŠå‹˜å‹§å·»å–šå ªå§¦å®Œå®˜å¯›å¹²å¹¹æ‚£æ„Ÿæ…£æ†¾æ›æ•¢æŸ‘æ¡“æ£ºæ¬¾æ­“æ±—æ¼¢æ¾—æ½…ç’°ç”˜ç›£çœ‹ç«¿ç®¡ç°¡ç·©ç¼¶ç¿°è‚è‰¦èŽžè¦³è«Œè²«é‚„é‘‘é–“é–‘é–¢é™¥éŸ“é¤¨èˆ˜ä¸¸å«å²¸å·ŒçŽ©ç™Œçœ¼å²©ç¿«è´‹é›é ‘é¡”é¡˜ä¼ä¼Žå±å–œå™¨åŸºå¥‡å¬‰å¯„å²å¸Œå¹¾å¿Œæ®æœºæ——æ—¢æœŸæ£‹æ£„ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[138].length;++a)if(t[138][a].charCodeAt(0)!==65533){r[t[138][a]]=35328+a;e[35328+a]=t[138][a]}t[139]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ©Ÿå¸°æ¯…æ°—æ±½ç•¿ç¥ˆå­£ç¨€ç´€å¾½è¦è¨˜è²´èµ·è»Œè¼é£¢é¨Žé¬¼äº€å½å„€å¦“å®œæˆ¯æŠ€æ“¬æ¬ºçŠ ç–‘ç¥‡ç¾©èŸ»èª¼è­°æŽ¬èŠéž å‰åƒå–«æ¡”æ©˜è©°ç §æµé»å´å®¢è„šè™é€†ä¸˜ä¹…ä»‡ä¼‘åŠå¸å®®å¼“æ€¥æ•‘ï¿½æœ½æ±‚æ±²æ³£ç¸çƒç©¶çª®ç¬ˆç´šç³¾çµ¦æ—§ç‰›åŽ»å±…å·¨æ‹’æ‹ æŒ™æ¸ è™šè¨±è·é‹¸æ¼ç¦¦é­šäº¨äº«äº¬ä¾›ä¾ åƒ‘å…‡ç«¶å…±å‡¶å”åŒ¡å¿å«å–¬å¢ƒå³¡å¼·å½Šæ€¯ææ­æŒŸæ•™æ©‹æ³ç‹‚ç‹­çŸ¯èƒ¸è„…èˆˆè•Žéƒ·é¡éŸ¿é¥—é©šä»°å‡å°­æšæ¥­å±€æ›²æ¥µçŽ‰æ¡ç²åƒ…å‹¤å‡å·¾éŒ¦æ–¤æ¬£æ¬½ç´ç¦ç¦½ç­‹ç·ŠèŠ¹èŒè¡¿è¥Ÿè¬¹è¿‘é‡‘åŸéŠ€ä¹å€¶å¥åŒºç‹—çŽ–çŸ©è‹¦èº¯é§†é§ˆé§’å…·æ„šè™žå–°ç©ºå¶å¯“é‡éš…ä¸²æ«›é‡§å±‘å±ˆï¿½ï¿½ï¿½".split("");for(a=0;a!=t[139].length;++a)if(t[139][a].charCodeAt(0)!==65533){r[t[139][a]]=35584+a;e[35584+a]=t[139][a]}t[140]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æŽ˜çªŸæ²“é´è½¡çªªç†Šéšˆç²‚æ —ç¹°æ¡‘é¬å‹²å›è–«è¨“ç¾¤è»éƒ¡å¦è¢ˆç¥ä¿‚å‚¾åˆ‘å…„å•“åœ­çªåž‹å¥‘å½¢å¾„æµæ…¶æ…§æ†©æŽ²æºæ•¬æ™¯æ¡‚æ¸“ç•¦ç¨½ç³»çµŒç¶™ç¹‹ç½«èŒŽèŠè›è¨ˆè©£è­¦è»½é šé¶èŠ¸è¿Žé¯¨ï¿½åŠ‡æˆŸæ’ƒæ¿€éš™æ¡å‚‘æ¬ æ±ºæ½”ç©´çµè¡€è¨£æœˆä»¶å€¹å€¦å¥å…¼åˆ¸å‰£å–§åœå …å«Œå»ºæ†²æ‡¸æ‹³æ²æ¤œæ¨©ç‰½çŠ¬çŒ®ç ”ç¡¯çµ¹çœŒè‚©è¦‹è¬™è³¢è»’é£éµé™ºé¡•é¨“é¹¸å…ƒåŽŸåŽ³å¹»å¼¦æ¸›æºçŽ„ç¾çµƒèˆ·è¨€è«ºé™ä¹Žå€‹å¤å‘¼å›ºå§‘å­¤å·±åº«å¼§æˆ¸æ•…æž¯æ¹–ç‹ç³Šè¢´è‚¡èƒ¡è°è™Žèª‡è·¨éˆ·é›‡é¡§é¼“äº”äº’ä¼åˆå‘‰å¾å¨¯å¾Œå¾¡æ‚Ÿæ¢§æªŽç‘šç¢èªžèª¤è­·é†ä¹žé¯‰äº¤ä½¼ä¾¯å€™å€–å…‰å…¬åŠŸåŠ¹å‹¾åŽšå£å‘ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[140].length;++a)if(t[140][a].charCodeAt(0)!==65533){r[t[140][a]]=35840+a;e[35840+a]=t[140][a]}t[141]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åŽå–‰å‘åž¢å¥½å­”å­å®å·¥å·§å··å¹¸åºƒåºšåº·å¼˜æ’æ…ŒæŠ—æ‹˜æŽ§æ”»æ˜‚æ™ƒæ›´æ­æ ¡æ¢—æ§‹æ±Ÿæ´ªæµ©æ¸¯æºç”²çš‡ç¡¬ç¨¿ç³ ç´…ç´˜çµžç¶±è€•è€ƒè‚¯è‚±è…”è†èˆªè’è¡Œè¡¡è¬›è²¢è³¼éƒŠé…µé‰±ç ¿é‹¼é–¤é™ï¿½é …é¦™é«˜é´»å‰›åŠ«å·åˆå£•æ‹·æ¿ è±ªè½Ÿéº¹å…‹åˆ»å‘Šå›½ç©€é…·éµ é»’ç„æ¼‰è…°ç”‘å¿½æƒšéª¨ç‹›è¾¼æ­¤é ƒä»Šå›°å¤å¢¾å©šæ¨æ‡‡æ˜æ˜†æ ¹æ¢±æ··ç—•ç´ºè‰®é­‚äº›ä½å‰å”†åµ¯å·¦å·®æŸ»æ²™ç‘³ç ‚è©éŽ–è£Ÿååº§æŒ«å‚µå‚¬å†æœ€å“‰å¡žå¦»å®°å½©æ‰æŽ¡æ ½æ­³æ¸ˆç½é‡‡çŠ€ç •ç ¦ç¥­æ–Žç´°èœè£è¼‰éš›å‰¤åœ¨æç½ªè²¡å†´å‚é˜ªå ºæ¦Šè‚´å’²å´ŽåŸ¼ç¢•é·ºä½œå‰Šå’‹æ¾æ˜¨æœ”æŸµçª„ç­–ç´¢éŒ¯æ¡œé®­ç¬¹åŒ™å†Šåˆ·ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[141].length;++a)if(t[141][a].charCodeAt(0)!==65533){r[t[141][a]]=36096+a;e[36096+a]=t[141][a]}t[142]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¯Ÿæ‹¶æ’®æ“¦æœ­æ®ºè–©é›‘çšé¯–æŒéŒ†é®«çš¿æ™’ä¸‰å‚˜å‚å±±æƒ¨æ’’æ•£æ¡Ÿç‡¦çŠç”£ç®—çº‚èš•è®ƒè³›é…¸é¤æ–¬æš«æ®‹ä»•ä»”ä¼ºä½¿åˆºå¸å²å—£å››å£«å§‹å§‰å§¿å­å±å¸‚å¸«å¿—æ€æŒ‡æ”¯å­œæ–¯æ–½æ—¨æžæ­¢ï¿½æ­»æ°ç…ç¥‰ç§ç³¸ç´™ç´«è‚¢è„‚è‡³è¦–è©žè©©è©¦èªŒè«®è³‡è³œé›Œé£¼æ­¯äº‹ä¼¼ä¾å…å­—å¯ºæ…ˆæŒæ™‚æ¬¡æ»‹æ²»çˆ¾ç’½ç—”ç£ç¤ºè€Œè€³è‡ªè’”è¾žæ±é¹¿å¼è­˜é´«ç«ºè»¸å®é›«ä¸ƒå±åŸ·å¤±å«‰å®¤æ‚‰æ¹¿æ¼†ç–¾è³ªå®Ÿè”€ç¯ å²æŸ´èŠå±¡è•Šç¸žèˆŽå†™å°„æ¨èµ¦æ–œç…®ç¤¾ç´—è€…è¬è»Šé®è›‡é‚ªå€Ÿå‹ºå°ºæ“ç¼çˆµé…Œé‡ˆéŒ«è‹¥å¯‚å¼±æƒ¹ä¸»å–å®ˆæ‰‹æœ±æ®Šç‹©ç ç¨®è…«è¶£é…’é¦–å„’å—å‘ªå¯¿æŽˆæ¨¹ç¶¬éœ€å›šåŽå‘¨ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[142].length;++a)if(t[142][a].charCodeAt(0)!==65533){r[t[142][a]]=36352+a;e[36352+a]=t[142][a]}t[143]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å®—å°±å·žä¿®æ„æ‹¾æ´²ç§€ç§‹çµ‚ç¹ç¿’è‡­èˆŸè’è¡†è¥²è®è¹´è¼¯é€±é…‹é…¬é›†é†œä»€ä½å……åå¾“æˆŽæŸ”æ±æ¸‹ç£ç¸¦é‡éŠƒå”å¤™å®¿æ·‘ç¥ç¸®ç²›å¡¾ç†Ÿå‡ºè¡“è¿°ä¿Šå³»æ˜¥çž¬ç«£èˆœé§¿å‡†å¾ªæ—¬æ¥¯æ®‰æ·³ï¿½æº–æ½¤ç›¾ç´”å·¡éµé†‡é †å‡¦åˆæ‰€æš‘æ›™æ¸šåº¶ç·’ç½²æ›¸è–¯è—·è«¸åŠ©å™å¥³åºå¾æ•é‹¤é™¤å‚·å„Ÿå‹åŒ å‡å¬å“¨å•†å”±å˜—å¥¨å¦¾å¨¼å®µå°†å°å°‘å°šåº„åºŠå» å½°æ‰¿æŠ„æ‹›æŽŒæ·æ˜‡æ˜Œæ˜­æ™¶æ¾æ¢¢æ¨Ÿæ¨µæ²¼æ¶ˆæ¸‰æ¹˜ç„¼ç„¦ç…§ç—‡çœç¡ç¤ç¥¥ç§°ç« ç¬‘ç²§ç´¹è‚–è–è’‹è•‰è¡è£³è¨Ÿè¨¼è©”è©³è±¡è³žé†¤é‰¦é¾é˜éšœéž˜ä¸Šä¸ˆä¸žä¹—å†—å‰°åŸŽå ´å£Œå¬¢å¸¸æƒ…æ“¾æ¡æ–æµ„çŠ¶ç•³ç©£è’¸è­²é†¸éŒ å˜±åŸ´é£¾ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[143].length;++a)if(t[143][a].charCodeAt(0)!==65533){r[t[143][a]]=36608+a;e[36608+a]=t[143][a]}t[144]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ‹­æ¤æ®–ç‡­ç¹”è·è‰²è§¦é£Ÿè•è¾±å°»ä¼¸ä¿¡ä¾µå”‡å¨ å¯å¯©å¿ƒæ…ŽæŒ¯æ–°æ™‹æ£®æ¦›æµ¸æ·±ç”³ç–¹çœŸç¥žç§¦ç´³è‡£èŠ¯è–ªè¦ªè¨ºèº«è¾›é€²é‡éœ‡äººä»åˆƒå¡µå£¬å°‹ç”šå°½è…Žè¨Šè¿…é™£é­ç¬¥è«é ˆé…¢å›³åŽ¨ï¿½é€—å¹åž‚å¸¥æŽ¨æ°´ç‚Šç¡ç²‹ç¿ è¡°é‚é…”éŒéŒ˜éšç‘žé«„å´‡åµ©æ•°æž¢è¶¨é››æ®æ‰æ¤™è…é —é›€è£¾æ¾„æ‘ºå¯¸ä¸–ç€¬ç•æ˜¯å‡„åˆ¶å‹¢å§“å¾æ€§æˆæ”¿æ•´æ˜Ÿæ™´æ£²æ –æ­£æ¸…ç‰²ç”Ÿç››ç²¾è–å£°è£½è¥¿èª èª“è«‹é€é†’é’é™æ–‰ç¨Žè„†éš»å¸­æƒœæˆšæ–¥æ˜”æžçŸ³ç©ç±ç¸¾è„Šè²¬èµ¤è·¡è¹Ÿç¢©åˆ‡æ‹™æŽ¥æ‘‚æŠ˜è¨­çªƒç¯€èª¬é›ªçµ¶èˆŒè‰ä»™å…ˆåƒå å®£å°‚å°–å·æˆ¦æ‰‡æ’°æ “æ ´æ³‰æµ…æ´—æŸ“æ½œç…Žç…½æ—‹ç©¿ç®­ç·šï¿½ï¿½ï¿½".split("");for(a=0;a!=t[144].length;++a)if(t[144][a].charCodeAt(0)!==65533){r[t[144][a]]=36864+a;e[36864+a]=t[144][a]}t[145]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¹Šç¾¨è…ºèˆ›èˆ¹è–¦è©®è³Žè·µé¸é·éŠ­éŠ‘é–ƒé®®å‰å–„æ¼¸ç„¶å…¨ç¦…ç¹•è†³ç³Žå™Œå¡‘å²¨æŽªæ›¾æ›½æ¥šç‹™ç–ç–Žç¤Žç¥–ç§Ÿç²—ç´ çµ„è˜‡è¨´é˜»é¡é¼ åƒ§å‰µåŒå¢å€‰å–ªå£®å¥çˆ½å®‹å±¤åŒæƒ£æƒ³æœæŽƒæŒ¿æŽ»ï¿½æ“æ—©æ›¹å·£æ§æ§½æ¼•ç‡¥äº‰ç—©ç›¸çª“ç³Ÿç·ç¶œè¡è‰è˜è‘¬è’¼è—»è£…èµ°é€é­éŽ—éœœé¨’åƒå¢—æ†Žè‡“è”µè´ˆé€ ä¿ƒå´å‰‡å³æ¯æ‰æŸæ¸¬è¶³é€Ÿä¿—å±žè³Šæ—ç¶šå’è¢–å…¶æƒå­˜å­«å°Šææ‘éœä»–å¤šå¤ªæ±°è©‘å”¾å •å¦¥æƒ°æ‰“æŸèˆµæ¥•é™€é§„é¨¨ä½“å †å¯¾è€å²±å¸¯å¾…æ€ æ…‹æˆ´æ›¿æ³°æ»žèƒŽè…¿è‹”è¢‹è²¸é€€é€®éšŠé»›é¯›ä»£å°å¤§ç¬¬é†é¡Œé·¹æ»ç€§å“å•„å®…æ‰˜æŠžæ‹“æ²¢æ¿¯ç¢è¨—é¸æ¿è«¾èŒ¸å‡§è›¸åªï¿½ï¿½ï¿½".split("");for(a=0;a!=t[145].length;++a)if(t[145][a].charCodeAt(0)!==65533){r[t[145][a]]=37120+a;e[37120+a]=t[145][a]}t[146]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å©ä½†é”è¾°å¥ªè„±å·½ç«ªè¾¿æ£šè°·ç‹¸é±ˆæ¨½èª°ä¸¹å˜å˜†å¦æ‹…æŽ¢æ—¦æ­Žæ·¡æ¹›ç‚­çŸ­ç«¯ç®ªç¶»è€½èƒ†è›‹èª•é›å›£å£‡å¼¾æ–­æš–æª€æ®µç”·è«‡å€¤çŸ¥åœ°å¼›æ¥æ™ºæ± ç—´ç¨šç½®è‡´èœ˜é…é¦³ç¯‰ç•œç«¹ç­‘è“„ï¿½é€ç§©çª’èŒ¶å«¡ç€ä¸­ä»²å®™å¿ æŠ½æ˜¼æŸ±æ³¨è™«è¡·è¨»é…Žé‹³é§æ¨—ç€¦çŒªè‹§è‘—è²¯ä¸å…†å‡‹å–‹å¯µå¸–å¸³åºå¼”å¼µå½«å¾´æ‡²æŒ‘æš¢æœæ½®ç‰’ç”ºçœºè´è„¹è…¸è¶èª¿è«œè¶…è·³éŠšé•·é ‚é³¥å‹…æ—ç›´æœ•æ²ˆçè³ƒéŽ®é™³æ´¥å¢œæ¤Žæ§Œè¿½éŽšç—›é€šå¡šæ ‚æŽ´æ§»ä½ƒæ¼¬æŸ˜è¾»è”¦ç¶´é”æ¤¿æ½°åªå£·å¬¬ç´¬çˆªåŠé‡£é¶´äº­ä½Žåœåµå‰ƒè²žå‘ˆå ¤å®šå¸åº•åº­å»·å¼Ÿæ‚ŒæŠµæŒºææ¢¯æ±€ç¢‡ç¦Žç¨‹ç· è‰‡è¨‚è«¦è¹„é€“ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[146].length;++a)if(t[146][a].charCodeAt(0)!==65533){r[t[146][a]]=37376+a;e[37376+a]=t[146][a]}t[147]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é‚¸é„­é‡˜é¼Žæ³¥æ‘˜æ“¢æ•µæ»´çš„ç¬›é©é‘æººå“²å¾¹æ’¤è½è¿­é‰„å…¸å¡«å¤©å±•åº—æ·»çºç”œè²¼è»¢é¡›ç‚¹ä¼æ®¿æ¾±ç”°é›»å…Žåå µå¡—å¦¬å± å¾’æ–—æœæ¸¡ç™»èŸè³­é€”éƒ½éç ¥ç ºåŠªåº¦åœŸå¥´æ€’å€’å…šå†¬ï¿½å‡åˆ€å”å¡”å¡˜å¥—å®•å³¶å¶‹æ‚¼æŠ•æ­æ±æ¡ƒæ¢¼æ£Ÿç›—æ·˜æ¹¯æ¶›ç¯ç‡ˆå½“ç—˜ç¥·ç­‰ç­”ç­’ç³–çµ±åˆ°è‘£è•©è—¤è¨Žè¬„è±†è¸é€ƒé€é™é™¶é ­é¨°é—˜åƒå‹•åŒå ‚å°Žæ†§æ’žæ´žçž³ç«¥èƒ´è„é“éŠ…å³ é´‡åŒ¿å¾—å¾³æ¶œç‰¹ç£ç¦¿ç¯¤æ¯’ç‹¬èª­æ ƒæ©¡å‡¸çªæ¤´å±Šé³¶è‹«å¯…é…‰ç€žå™¸å±¯æƒ‡æ•¦æ²Œè±šéé “å‘‘æ›‡éˆå¥ˆé‚£å†…ä¹å‡ªè–™è¬Žç˜æºé‹æ¥¢é¦´ç¸„ç•·å—æ¥ è»Ÿé›£æ±äºŒå°¼å¼è¿©åŒ‚è³‘è‚‰è™¹å»¿æ—¥ä¹³å…¥ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[147].length;++a)if(t[147][a].charCodeAt(0)!==65533){r[t[147][a]]=37632+a;e[37632+a]=t[147][a]}t[148]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¦‚å°¿éŸ®ä»»å¦Šå¿èªæ¿¡ç¦°ç¥¢å¯§è‘±çŒ«ç†±å¹´å¿µæ»æ’šç‡ƒç²˜ä¹ƒå»¼ä¹‹åŸœåš¢æ‚©æ¿ƒç´èƒ½è„³è†¿è¾²è¦—èš¤å·´æŠŠæ’­è¦‡æ·æ³¢æ´¾ç¶ç ´å©†ç½µèŠ­é¦¬ä¿³å»ƒæ‹æŽ’æ•—æ¯ç›ƒç‰ŒèƒŒè‚ºè¼©é…å€åŸ¹åª’æ¢…ï¿½æ¥³ç…¤ç‹½è²·å£²è³ é™ªé€™è¿ç§¤çŸ§è©ä¼¯å‰¥åšæ‹æŸæ³Šç™½ç®”ç²•èˆ¶è–„è¿«æ›æ¼ çˆ†ç¸›èŽ«é§éº¦å‡½ç®±ç¡²ç®¸è‚‡ç­ˆæ«¨å¹¡è‚Œç•‘ç• å…«é‰¢æºŒç™ºé†—é«ªä¼ç½°æŠœç­é–¥é³©å™ºå¡™è›¤éš¼ä¼´åˆ¤åŠåå›å¸†æ¬æ–‘æ¿æ°¾æ±Žç‰ˆçŠ¯ç­ç•”ç¹èˆ¬è—©è²©ç¯„é‡†ç…©é ’é£¯æŒ½æ™©ç•ªç›¤ç£è•ƒè›®åŒªå‘å¦å¦ƒåº‡å½¼æ‚²æ‰‰æ‰¹æŠ«æ–æ¯”æ³Œç–²çš®ç¢‘ç§˜ç·‹ç½·è‚¥è¢«èª¹è²»é¿éžé£›æ¨‹ç°¸å‚™å°¾å¾®æž‡æ¯˜çµçœ‰ç¾Žï¿½ï¿½ï¿½".split("");for(a=0;a!=t[148].length;++a)if(t[148][a].charCodeAt(0)!==65533){r[t[148][a]]=37888+a;e[37888+a]=t[148][a]}t[149]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¼»æŸŠç¨—åŒ¹ç–‹é«­å½¦è†è±è‚˜å¼¼å¿…ç•¢ç­†é€¼æ¡§å§«åª›ç´ç™¾è¬¬ä¿µå½ªæ¨™æ°·æ¼‚ç“¢ç¥¨è¡¨è©•è±¹å»Ÿæç—…ç§’è‹—éŒ¨é‹²è’œè›­é°­å“å½¬æ–Œæµœç€•è²§è³“é »æ•ç“¶ä¸ä»˜åŸ å¤«å©¦å¯Œå†¨å¸ƒåºœæ€–æ‰¶æ•·ï¿½æ–§æ™®æµ®çˆ¶ç¬¦è…è†šèŠ™è­œè² è³¦èµ´é˜œé™„ä¾®æ’«æ­¦èˆžè‘¡è•ªéƒ¨å°æ¥“é¢¨è‘ºè•—ä¼å‰¯å¾©å¹…æœç¦è…¹è¤‡è¦†æ·µå¼—æ‰•æ²¸ä»ç‰©é®’åˆ†å»å™´å¢³æ†¤æ‰®ç„šå¥®ç²‰ç³žç´›é›°æ–‡èžä¸™ä½µå…µå¡€å¹£å¹³å¼ŠæŸ„ä¸¦è”½é–‰é™›ç±³é åƒ»å£ç™–ç¢§åˆ¥çž¥è”‘ç®†åå¤‰ç‰‡ç¯‡ç·¨è¾ºè¿”éä¾¿å‹‰å¨©å¼éž­ä¿èˆ—é‹ªåœƒæ•æ­©ç”«è£œè¼”ç©‚å‹Ÿå¢“æ…•æˆŠæš®æ¯ç°¿è©å€£ä¿¸åŒ…å‘†å ±å¥‰å®å³°å³¯å´©åº–æŠ±æ§æ”¾æ–¹æœ‹ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[149].length;++a)if(t[149][a].charCodeAt(0)!==65533){r[t[149][a]]=38144+a;e[38144+a]=t[149][a]}t[150]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ³•æ³¡çƒ¹ç ²ç¸«èƒžèŠ³èŒè“¬èœ‚è¤’è¨ªè±Šé‚¦é‹’é£½é³³éµ¬ä¹äº¡å‚å‰–åŠå¦¨å¸½å¿˜å¿™æˆ¿æš´æœ›æŸæ£’å†’ç´¡è‚ªè†¨è¬€è²Œè²¿é‰¾é˜²å é ¬åŒ—åƒ•åœå¢¨æ’²æœ´ç‰§ç¦ç©†é‡¦å‹ƒæ²¡æ®†å €å¹Œå¥”æœ¬ç¿»å‡¡ç›†ï¿½æ‘©ç£¨é­”éº»åŸ‹å¦¹æ˜§æžšæ¯Žå“©æ§™å¹•è†œæž•é®ªæŸ¾é±’æ¡äº¦ä¿£åˆæŠ¹æœ«æ²«è¿„ä¾­ç¹­éº¿ä¸‡æ…¢æº€æ¼«è”“å‘³æœªé­…å·³ç®•å²¬å¯†èœœæ¹Šè“‘ç¨”è„ˆå¦™ç²æ°‘çœ å‹™å¤¢ç„¡ç‰ŸçŸ›éœ§éµ¡æ¤‹å©¿å¨˜å†¥åå‘½æ˜Žç›Ÿè¿·éŠ˜é³´å§ªç‰æ»…å…æ£‰ç¶¿ç·¬é¢éººæ‘¸æ¨¡èŒ‚å¦„å­Ÿæ¯›çŒ›ç›²ç¶²è€—è’™å„²æœ¨é»™ç›®æ¢å‹¿é¤…å°¤æˆ»ç±¾è²°å•æ‚¶ç´‹é–€åŒä¹Ÿå†¶å¤œçˆºè€¶é‡Žå¼¥çŸ¢åŽ„å½¹ç´„è–¬è¨³èºé–æŸ³è–®é‘“æ„‰æ„ˆæ²¹ç™’ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[150].length;++a)if(t[150][a].charCodeAt(0)!==65533){r[t[150][a]]=38400+a;e[38400+a]=t[150][a]}t[151]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è«­è¼¸å”¯ä½‘å„ªå‹‡å‹å®¥å¹½æ‚ æ†‚æ–æœ‰æŸšæ¹§æ¶ŒçŒ¶çŒ·ç”±ç¥è£•èª˜éŠé‚‘éƒµé›„èžå¤•äºˆä½™ä¸Žèª‰è¼¿é å‚­å¹¼å¦–å®¹åº¸æšæºæ“æ›œæ¥Šæ§˜æ´‹æº¶ç†”ç”¨çª¯ç¾Šè€€è‘‰è“‰è¦è¬¡è¸Šé¥é™½é¤Šæ…¾æŠ‘æ¬²ï¿½æ²ƒæµ´ç¿Œç¿¼æ·€ç¾…èžºè£¸æ¥èŽ±é ¼é›·æ´›çµ¡è½é…ªä¹±åµåµæ¬„æ¿«è—è˜­è¦§åˆ©åå±¥æŽæ¢¨ç†ç’ƒç—¢è£è£¡é‡Œé›¢é™¸å¾‹çŽ‡ç«‹è‘ŽæŽ ç•¥åŠ‰æµæºœç‰ç•™ç¡«ç²’éš†ç«œé¾ä¾¶æ…®æ—…è™œäº†äº®åƒšä¸¡å‡Œå¯®æ–™æ¢æ¶¼çŒŸç™‚çž­ç¨œç³§è‰¯è«’é¼é‡é™µé ˜åŠ›ç·‘å€«åŽ˜æž—æ·‹ç‡ç³è‡¨è¼ªéš£é±—éºŸç‘ å¡æ¶™ç´¯é¡žä»¤ä¼¶ä¾‹å†·åŠ±å¶ºæ€œçŽ²ç¤¼è‹“éˆ´éš·é›¶éœŠéº—é½¢æš¦æ­´åˆ—åŠ£çƒˆè£‚å»‰æ‹æ†æ¼£ç…‰ç°¾ç·´è¯ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[151].length;++a)if(t[151][a].charCodeAt(0)!==65533){r[t[151][a]]=38656+a;e[38656+a]=t[151][a]}t[152]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è“®é€£éŒ¬å‘‚é­¯æ«“ç‚‰è³‚è·¯éœ²åŠ´å©å»Šå¼„æœ—æ¥¼æ¦”æµªæ¼ç‰¢ç‹¼ç¯­è€è¾è‹éƒŽå…­éº“ç¦„è‚‹éŒ²è«–å€­å’Œè©±æ­ªè³„è„‡æƒ‘æž é·²äº™äº˜é°è©«è—è•¨æ¤€æ¹¾ç¢—è…•ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¼Œä¸ä¸•ä¸ªä¸±ä¸¶ä¸¼ä¸¿ä¹‚ä¹–ä¹˜äº‚äº…è±«äºŠèˆ’å¼äºŽäºžäºŸäº äº¢äº°äº³äº¶ä»Žä»ä»„ä»†ä»‚ä»—ä»žä»­ä»Ÿä»·ä¼‰ä½šä¼°ä½›ä½ä½—ä½‡ä½¶ä¾ˆä¾ä¾˜ä½»ä½©ä½°ä¾‘ä½¯ä¾†ä¾–å„˜ä¿”ä¿Ÿä¿Žä¿˜ä¿›ä¿‘ä¿šä¿ä¿¤ä¿¥å€šå€¨å€”å€ªå€¥å€…ä¼œä¿¶å€¡å€©å€¬ä¿¾ä¿¯å€‘å€†åƒå‡æœƒå•ååˆåšå–å¬å¸å‚€å‚šå‚…å‚´å‚²ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[152].length;++a)if(t[152][a].charCodeAt(0)!==65533){r[t[152][a]]=38912+a;e[38912+a]=t[152][a]}t[153]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åƒ‰åƒŠå‚³åƒ‚åƒ–åƒžåƒ¥åƒ­åƒ£åƒ®åƒ¹åƒµå„‰å„å„‚å„–å„•å„”å„šå„¡å„ºå„·å„¼å„»å„¿å…€å…’å…Œå…”å…¢ç«¸å…©å…ªå…®å†€å†‚å›˜å†Œå†‰å†å†‘å†“å†•å†–å†¤å†¦å†¢å†©å†ªå†«å†³å†±å†²å†°å†µå†½å‡…å‡‰å‡›å‡ è™•å‡©å‡­ï¿½å‡°å‡µå‡¾åˆ„åˆ‹åˆ”åˆŽåˆ§åˆªåˆ®åˆ³åˆ¹å‰å‰„å‰‹å‰Œå‰žå‰”å‰ªå‰´å‰©å‰³å‰¿å‰½åŠåŠ”åŠ’å‰±åŠˆåŠ‘è¾¨è¾§åŠ¬åŠ­åŠ¼åŠµå‹å‹å‹—å‹žå‹£å‹¦é£­å‹ å‹³å‹µå‹¸å‹¹åŒ†åŒˆç”¸åŒåŒåŒåŒ•åŒšåŒ£åŒ¯åŒ±åŒ³åŒ¸å€å†å…ä¸—å‰åå‡–åžå©å®å¤˜å»å·åŽ‚åŽ–åŽ åŽ¦åŽ¥åŽ®åŽ°åŽ¶åƒç°’é›™åŸæ›¼ç‡®å®å¨å­åºåå½å‘€å¬å­å¼å®å¶å©åå‘Žå’å‘µå’Žå‘Ÿå‘±å‘·å‘°å’’å‘»å’€å‘¶å’„å’å’†å“‡å’¢å’¸å’¥å’¬å“„å“ˆå’¨ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[153].length;++a)if(t[153][a].charCodeAt(0)!==65533){r[t[153][a]]=39168+a;e[39168+a]=t[153][a]}t[154]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å’«å“‚å’¤å’¾å’¼å“˜å“¥å“¦å”å””å“½å“®å“­å“ºå“¢å”¹å•€å•£å•Œå”®å•œå•…å•–å•—å”¸å”³å•å–™å–€å’¯å–Šå–Ÿå•»å•¾å–˜å–žå–®å•¼å–ƒå–©å–‡å–¨å—šå—…å—Ÿå—„å—œå—¤å—”å˜”å—·å˜–å—¾å—½å˜›å—¹å™Žå™ç‡Ÿå˜´å˜¶å˜²å˜¸ï¿½å™«å™¤å˜¯å™¬å™ªåš†åš€åšŠåš åš”åšåš¥åš®åš¶åš´å›‚åš¼å›å›ƒå›€å›ˆå›Žå›‘å›“å›—å›®å›¹åœ€å›¿åœ„åœ‰åœˆåœ‹åœåœ“åœ˜åœ–å—‡åœœåœ¦åœ·åœ¸åŽåœ»å€åå©åŸ€åžˆå¡å¿åž‰åž“åž åž³åž¤åžªåž°åŸƒåŸ†åŸ”åŸ’åŸ“å ŠåŸ–åŸ£å ‹å ™å å¡²å ¡å¡¢å¡‹å¡°æ¯€å¡’å ½å¡¹å¢…å¢¹å¢Ÿå¢«å¢ºå£žå¢»å¢¸å¢®å£…å£“å£‘å£—å£™å£˜å£¥å£œå£¤å£Ÿå£¯å£ºå£¹å£»å£¼å£½å¤‚å¤Šå¤å¤›æ¢¦å¤¥å¤¬å¤­å¤²å¤¸å¤¾ç«’å¥•å¥å¥Žå¥šå¥˜å¥¢å¥ å¥§å¥¬å¥©ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[154].length;++a)if(t[154][a].charCodeAt(0)!==65533){r[t[154][a]]=39424+a;e[39424+a]=t[154][a]}t[155]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¥¸å¦å¦ä½žä¾«å¦£å¦²å§†å§¨å§œå¦å§™å§šå¨¥å¨Ÿå¨‘å¨œå¨‰å¨šå©€å©¬å©‰å¨µå¨¶å©¢å©ªåªšåª¼åª¾å«‹å«‚åª½å«£å«—å«¦å«©å«–å«ºå«»å¬Œå¬‹å¬–å¬²å«å¬ªå¬¶å¬¾å­ƒå­…å­€å­‘å­•å­šå­›å­¥å­©å­°å­³å­µå­¸æ–ˆå­ºå®€ï¿½å®ƒå®¦å®¸å¯ƒå¯‡å¯‰å¯”å¯å¯¤å¯¦å¯¢å¯žå¯¥å¯«å¯°å¯¶å¯³å°…å°‡å°ˆå°å°“å° å°¢å°¨å°¸å°¹å±å±†å±Žå±“å±å±å­±å±¬å±®ä¹¢å±¶å±¹å²Œå²‘å²”å¦›å²«å²»å²¶å²¼å²·å³…å²¾å³‡å³™å³©å³½å³ºå³­å¶Œå³ªå´‹å´•å´—åµœå´Ÿå´›å´‘å´”å´¢å´šå´™å´˜åµŒåµ’åµŽåµ‹åµ¬åµ³åµ¶å¶‡å¶„å¶‚å¶¢å¶å¶¬å¶®å¶½å¶å¶·å¶¼å·‰å·å·“å·’å·–å·›å·«å·²å·µå¸‹å¸šå¸™å¸‘å¸›å¸¶å¸·å¹„å¹ƒå¹€å¹Žå¹—å¹”å¹Ÿå¹¢å¹¤å¹‡å¹µå¹¶å¹ºéº¼å¹¿åº å»å»‚å»ˆå»å»ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[155].length;++a)if(t[155][a].charCodeAt(0)!==65533){r[t[155][a]]=39680+a;e[39680+a]=t[155][a]}t[156]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å»–å»£å»å»šå»›å»¢å»¡å»¨å»©å»¬å»±å»³å»°å»´å»¸å»¾å¼ƒå¼‰å½å½œå¼‹å¼‘å¼–å¼©å¼­å¼¸å½å½ˆå½Œå½Žå¼¯å½‘å½–å½—å½™å½¡å½­å½³å½·å¾ƒå¾‚å½¿å¾Šå¾ˆå¾‘å¾‡å¾žå¾™å¾˜å¾ å¾¨å¾­å¾¼å¿–å¿»å¿¤å¿¸å¿±å¿æ‚³å¿¿æ€¡æ ï¿½æ€™æ€æ€©æ€Žæ€±æ€›æ€•æ€«æ€¦æ€æ€ºæšææªæ·æŸæŠæ†ææ£æƒæ¤æ‚æ¬æ«æ™æ‚æ‚æƒ§æ‚ƒæ‚šæ‚„æ‚›æ‚–æ‚—æ‚’æ‚§æ‚‹æƒ¡æ‚¸æƒ æƒ“æ‚´å¿°æ‚½æƒ†æ‚µæƒ˜æ…æ„•æ„†æƒ¶æƒ·æ„€æƒ´æƒºæ„ƒæ„¡æƒ»æƒ±æ„æ„Žæ…‡æ„¾æ„¨æ„§æ…Šæ„¿æ„¼æ„¬æ„´æ„½æ…‚æ…„æ…³æ…·æ…˜æ…™æ…šæ…«æ…´æ…¯æ…¥æ…±æ…Ÿæ…æ…“æ…µæ†™æ†–æ†‡æ†¬æ†”æ†šæ†Šæ†‘æ†«æ†®æ‡Œæ‡Šæ‡‰æ‡·æ‡ˆæ‡ƒæ‡†æ†ºæ‡‹ç½¹æ‡æ‡¦æ‡£æ‡¶æ‡ºæ‡´æ‡¿æ‡½æ‡¼æ‡¾æˆ€æˆˆæˆ‰æˆæˆŒæˆ”æˆ›ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[156].length;++a)if(t[156][a].charCodeAt(0)!==65533){r[t[156][a]]=39936+a;e[39936+a]=t[156][a]}t[157]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æˆžæˆ¡æˆªæˆ®æˆ°æˆ²æˆ³æ‰æ‰Žæ‰žæ‰£æ‰›æ‰ æ‰¨æ‰¼æŠ‚æŠ‰æ‰¾æŠ’æŠ“æŠ–æ‹”æŠƒæŠ”æ‹—æ‹‘æŠ»æ‹æ‹¿æ‹†æ“”æ‹ˆæ‹œæ‹Œæ‹Šæ‹‚æ‹‡æŠ›æ‹‰æŒŒæ‹®æ‹±æŒ§æŒ‚æŒˆæ‹¯æ‹µææŒ¾ææœææŽ–æŽŽæŽ€æŽ«æ¶æŽ£æŽæŽ‰æŽŸæŽµæ«ï¿½æ©æŽ¾æ©æ€æ†æ£æ‰æ’æ¶æ„æ–æ´æ†æ“æ¦æ¶æ”æ—æ¨ææ‘§æ‘¯æ‘¶æ‘Žæ”ªæ’•æ’“æ’¥æ’©æ’ˆæ’¼æ“šæ“’æ“…æ“‡æ’»æ“˜æ“‚æ“±æ“§èˆ‰æ“ æ“¡æŠ¬æ“£æ“¯æ”¬æ“¶æ“´æ“²æ“ºæ”€æ“½æ”˜æ”œæ”…æ”¤æ”£æ”«æ”´æ”µæ”·æ”¶æ”¸ç•‹æ•ˆæ•–æ••æ•æ•˜æ•žæ•æ•²æ•¸æ–‚æ–ƒè®Šæ–›æ–Ÿæ–«æ–·æ—ƒæ—†æ—æ—„æ—Œæ—’æ—›æ—™æ— æ—¡æ—±æ²æ˜Šæ˜ƒæ—»æ³æ˜µæ˜¶æ˜´æ˜œæ™æ™„æ™‰æ™æ™žæ™æ™¤æ™§æ™¨æ™Ÿæ™¢æ™°æšƒæšˆæšŽæš‰æš„æš˜æšæ›æš¹æ›‰æš¾æš¼ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[157].length;++a)if(t[157][a].charCodeAt(0)!==65533){r[t[157][a]]=40192+a;e[40192+a]=t[157][a]}t[158]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ›„æš¸æ›–æ›šæ› æ˜¿æ›¦æ›©æ›°æ›µæ›·æœæœ–æœžæœ¦æœ§éœ¸æœ®æœ¿æœ¶ææœ¸æœ·æ†æžæ æ™æ£æ¤æž‰æ°æž©æ¼æªæžŒæž‹æž¦æž¡æž…æž·æŸ¯æž´æŸ¬æž³æŸ©æž¸æŸ¤æŸžæŸæŸ¢æŸ®æž¹æŸŽæŸ†æŸ§æªœæ žæ¡†æ ©æ¡€æ¡æ ²æ¡Žï¿½æ¢³æ «æ¡™æ¡£æ¡·æ¡¿æ¢Ÿæ¢æ¢­æ¢”æ¢æ¢›æ¢ƒæª®æ¢¹æ¡´æ¢µæ¢ æ¢ºæ¤æ¢æ¡¾æ¤æ£Šæ¤ˆæ£˜æ¤¢æ¤¦æ£¡æ¤Œæ£æ£”æ£§æ£•æ¤¶æ¤’æ¤„æ£—æ££æ¤¥æ£¹æ£ æ£¯æ¤¨æ¤ªæ¤šæ¤£æ¤¡æ£†æ¥¹æ¥·æ¥œæ¥¸æ¥«æ¥”æ¥¾æ¥®æ¤¹æ¥´æ¤½æ¥™æ¤°æ¥¡æ¥žæ¥æ¦æ¥ªæ¦²æ¦®æ§æ¦¿æ§æ§“æ¦¾æ§Žå¯¨æ§Šæ§æ¦»æ§ƒæ¦§æ¨®æ¦‘æ¦ æ¦œæ¦•æ¦´æ§žæ§¨æ¨‚æ¨›æ§¿æ¬Šæ§¹æ§²æ§§æ¨…æ¦±æ¨žæ§­æ¨”æ§«æ¨Šæ¨’æ«æ¨£æ¨“æ©„æ¨Œæ©²æ¨¶æ©¸æ©‡æ©¢æ©™æ©¦æ©ˆæ¨¸æ¨¢æªæªæª æª„æª¢æª£ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[158].length;++a)if(t[158][a].charCodeAt(0)!==65533){r[t[158][a]]=40448+a;e[40448+a]=t[158][a]}t[159]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æª—è˜—æª»æ«ƒæ«‚æª¸æª³æª¬æ«žæ«‘æ«Ÿæªªæ«šæ«ªæ«»æ¬…è˜–æ«ºæ¬’æ¬–é¬±æ¬Ÿæ¬¸æ¬·ç›œæ¬¹é£®æ­‡æ­ƒæ­‰æ­æ­™æ­”æ­›æ­Ÿæ­¡æ­¸æ­¹æ­¿æ®€æ®„æ®ƒæ®æ®˜æ®•æ®žæ®¤æ®ªæ®«æ®¯æ®²æ®±æ®³æ®·æ®¼æ¯†æ¯‹æ¯“æ¯Ÿæ¯¬æ¯«æ¯³æ¯¯ï¿½éº¾æ°ˆæ°“æ°”æ°›æ°¤æ°£æ±žæ±•æ±¢æ±ªæ²‚æ²æ²šæ²æ²›æ±¾æ±¨æ±³æ²’æ²æ³„æ³±æ³“æ²½æ³—æ³…æ³æ²®æ²±æ²¾æ²ºæ³›æ³¯æ³™æ³ªæ´Ÿè¡æ´¶æ´«æ´½æ´¸æ´™æ´µæ´³æ´’æ´Œæµ£æ¶“æµ¤æµšæµ¹æµ™æ¶Žæ¶•æ¿¤æ¶…æ·¹æ¸•æ¸Šæ¶µæ·‡æ·¦æ¶¸æ·†æ·¬æ·žæ·Œæ·¨æ·’æ·…æ·ºæ·™æ·¤æ·•æ·ªæ·®æ¸­æ¹®æ¸®æ¸™æ¹²æ¹Ÿæ¸¾æ¸£æ¹«æ¸«æ¹¶æ¹æ¸Ÿæ¹ƒæ¸ºæ¹Žæ¸¤æ»¿æ¸æ¸¸æº‚æºªæº˜æ»‰æº·æ»“æº½æº¯æ»„æº²æ»”æ»•æºæº¥æ»‚æºŸæ½æ¼‘çŒæ»¬æ»¸æ»¾æ¼¿æ»²æ¼±æ»¯æ¼²æ»Œï¿½ï¿½ï¿½".split("");for(a=0;a!=t[159].length;++a)if(t[159][a].charCodeAt(0)!==65533){r[t[159][a]]=40704+a;e[40704+a]=t[159][a]}t[224]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¼¾æ¼“æ»·æ¾†æ½ºæ½¸æ¾æ¾€æ½¯æ½›æ¿³æ½­æ¾‚æ½¼æ½˜æ¾Žæ¾‘æ¿‚æ½¦æ¾³æ¾£æ¾¡æ¾¤æ¾¹æ¿†æ¾ªæ¿Ÿæ¿•æ¿¬æ¿”æ¿˜æ¿±æ¿®æ¿›ç€‰ç€‹æ¿ºç€‘ç€ç€æ¿¾ç€›ç€šæ½´ç€ç€˜ç€Ÿç€°ç€¾ç€²ç‘ç£ç‚™ç‚’ç‚¯çƒ±ç‚¬ç‚¸ç‚³ç‚®çƒŸçƒ‹çƒï¿½çƒ™ç„‰çƒ½ç„œç„™ç…¥ç…•ç†ˆç…¦ç…¢ç…Œç…–ç…¬ç†ç‡»ç†„ç†•ç†¨ç†¬ç‡—ç†¹ç†¾ç‡’ç‡‰ç‡”ç‡Žç‡ ç‡¬ç‡§ç‡µç‡¼ç‡¹ç‡¿çˆçˆçˆ›çˆ¨çˆ­çˆ¬çˆ°çˆ²çˆ»çˆ¼çˆ¿ç‰€ç‰†ç‰‹ç‰˜ç‰´ç‰¾çŠ‚çŠçŠ‡çŠ’çŠ–çŠ¢çŠ§çŠ¹çŠ²ç‹ƒç‹†ç‹„ç‹Žç‹’ç‹¢ç‹ ç‹¡ç‹¹ç‹·å€çŒ—çŒŠçŒœçŒ–çŒçŒ´çŒ¯çŒ©çŒ¥çŒ¾çŽçé»˜ç—çªç¨ç°ç¸çµç»çºçˆçŽ³çŽçŽ»ç€ç¥ç®çžç’¢ç…ç‘¯ç¥ç¸ç²çºç‘•ç¿ç‘Ÿç‘™ç‘ç‘œç‘©ç‘°ç‘£ç‘ªç‘¶ç‘¾ç’‹ç’žç’§ç“Šç“ç“”ç±ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[224].length;++a)if(t[224][a].charCodeAt(0)!==65533){r[t[224][a]]=57344+a;e[57344+a]=t[224][a]}t[225]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç“ ç“£ç“§ç“©ç“®ç“²ç“°ç“±ç“¸ç“·ç”„ç”ƒç”…ç”Œç”Žç”ç”•ç”“ç”žç”¦ç”¬ç”¼ç•„ç•ç•Šç•‰ç•›ç•†ç•šç•©ç•¤ç•§ç•«ç•­ç•¸ç•¶ç–†ç–‡ç•´ç–Šç–‰ç–‚ç–”ç–šç–ç–¥ç–£ç—‚ç–³ç—ƒç–µç–½ç–¸ç–¼ç–±ç—ç—Šç—’ç—™ç—£ç—žç—¾ç—¿ï¿½ç—¼ç˜ç—°ç—ºç—²ç—³ç˜‹ç˜ç˜‰ç˜Ÿç˜§ç˜ ç˜¡ç˜¢ç˜¤ç˜´ç˜°ç˜»ç™‡ç™ˆç™†ç™œç™˜ç™¡ç™¢ç™¨ç™©ç™ªç™§ç™¬ç™°ç™²ç™¶ç™¸ç™¼çš€çšƒçšˆçš‹çšŽçš–çš“çš™çššçš°çš´çš¸çš¹çšºç›‚ç›ç›–ç›’ç›žç›¡ç›¥ç›§ç›ªè˜¯ç›»çœˆçœ‡çœ„çœ©çœ¤çœžçœ¥çœ¦çœ›çœ·çœ¸ç‡çšç¨ç«ç›ç¥ç¿ç¾ç¹çžŽçž‹çž‘çž çžžçž°çž¶çž¹çž¿çž¼çž½çž»çŸ‡çŸçŸ—çŸšçŸœçŸ£çŸ®çŸ¼ç Œç ’ç¤¦ç  ç¤ªç¡…ç¢Žç¡´ç¢†ç¡¼ç¢šç¢Œç¢£ç¢µç¢ªç¢¯ç£‘ç£†ç£‹ç£”ç¢¾ç¢¼ç£…ç£Šç£¬ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[225].length;++a)if(t[225][a].charCodeAt(0)!==65533){r[t[225][a]]=57600+a;e[57600+a]=t[225][a]}t[226]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç£§ç£šç£½ç£´ç¤‡ç¤’ç¤‘ç¤™ç¤¬ç¤«ç¥€ç¥ ç¥—ç¥Ÿç¥šç¥•ç¥“ç¥ºç¥¿ç¦Šç¦ç¦§é½‹ç¦ªç¦®ç¦³ç¦¹ç¦ºç§‰ç§•ç§§ç§¬ç§¡ç§£ç¨ˆç¨ç¨˜ç¨™ç¨ ç¨Ÿç¦€ç¨±ç¨»ç¨¾ç¨·ç©ƒç©—ç©‰ç©¡ç©¢ç©©é¾ç©°ç©¹ç©½çªˆçª—çª•çª˜çª–çª©ç«ˆçª°ï¿½çª¶ç«…ç«„çª¿é‚ƒç«‡ç«Šç«ç«ç«•ç«“ç«™ç«šç«ç«¡ç«¢ç«¦ç«­ç«°ç¬‚ç¬ç¬Šç¬†ç¬³ç¬˜ç¬™ç¬žç¬µç¬¨ç¬¶ç­ç­ºç¬„ç­ç¬‹ç­Œç­…ç­µç­¥ç­´ç­§ç­°ç­±ç­¬ç­®ç®ç®˜ç®Ÿç®ç®œç®šç®‹ç®’ç®ç­ç®™ç¯‹ç¯ç¯Œç¯ç®´ç¯†ç¯ç¯©ç°‘ç°”ç¯¦ç¯¥ç± ç°€ç°‡ç°“ç¯³ç¯·ç°—ç°ç¯¶ç°£ç°§ç°ªç°Ÿç°·ç°«ç°½ç±Œç±ƒç±”ç±ç±€ç±ç±˜ç±Ÿç±¤ç±–ç±¥ç±¬ç±µç²ƒç²ç²¤ç²­ç²¢ç²«ç²¡ç²¨ç²³ç²²ç²±ç²®ç²¹ç²½ç³€ç³…ç³‚ç³˜ç³’ç³œç³¢é¬»ç³¯ç³²ç³´ç³¶ç³ºç´†ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[226].length;++a)if(t[226][a].charCodeAt(0)!==65533){r[t[226][a]]=57856+a;e[57856+a]=t[226][a]}t[227]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç´‚ç´œç´•ç´Šçµ…çµ‹ç´®ç´²ç´¿ç´µçµ†çµ³çµ–çµŽçµ²çµ¨çµ®çµçµ£ç¶“ç¶‰çµ›ç¶çµ½ç¶›ç¶ºç¶®ç¶£ç¶µç·‡ç¶½ç¶«ç¸½ç¶¢ç¶¯ç·œç¶¸ç¶Ÿç¶°ç·˜ç·ç·¤ç·žç·»ç·²ç·¡ç¸…ç¸Šç¸£ç¸¡ç¸’ç¸±ç¸Ÿç¸‰ç¸‹ç¸¢ç¹†ç¹¦ç¸»ç¸µç¸¹ç¹ƒç¸·ï¿½ç¸²ç¸ºç¹§ç¹ç¹–ç¹žç¹™ç¹šç¹¹ç¹ªç¹©ç¹¼ç¹»çºƒç·•ç¹½è¾®ç¹¿çºˆçº‰çºŒçº’çºçº“çº”çº–çºŽçº›çºœç¼¸ç¼ºç½…ç½Œç½ç½Žç½ç½‘ç½•ç½”ç½˜ç½Ÿç½ ç½¨ç½©ç½§ç½¸ç¾‚ç¾†ç¾ƒç¾ˆç¾‡ç¾Œç¾”ç¾žç¾ç¾šç¾£ç¾¯ç¾²ç¾¹ç¾®ç¾¶ç¾¸è­±ç¿…ç¿†ç¿Šç¿•ç¿”ç¿¡ç¿¦ç¿©ç¿³ç¿¹é£œè€†è€„è€‹è€’è€˜è€™è€œè€¡è€¨è€¿è€»èŠè†è’è˜èšèŸè¢è¨è³è²è°è¶è¹è½è¿è‚„è‚†è‚…è‚›è‚“è‚šè‚­å†è‚¬èƒ›èƒ¥èƒ™èƒèƒ„èƒšèƒ–è„‰èƒ¯èƒ±è„›è„©è„£è„¯è…‹ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[227].length;++a)if(t[227][a].charCodeAt(0)!==65533){r[t[227][a]]=58112+a;e[58112+a]=t[227][a]}t[228]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éš‹è…†è„¾è…“è…‘èƒ¼è…±è…®è…¥è…¦è…´è†ƒè†ˆè†Šè†€è†‚è† è†•è†¤è†£è…Ÿè†“è†©è†°è†µè†¾è†¸è†½è‡€è‡‚è†ºè‡‰è‡è‡‘è‡™è‡˜è‡ˆè‡šè‡Ÿè‡ è‡§è‡ºè‡»è‡¾èˆèˆ‚èˆ…èˆ‡èˆŠèˆèˆèˆ–èˆ©èˆ«èˆ¸èˆ³è‰€è‰™è‰˜è‰è‰šè‰Ÿè‰¤ï¿½è‰¢è‰¨è‰ªè‰«èˆ®è‰±è‰·è‰¸è‰¾èŠèŠ’èŠ«èŠŸèŠ»èŠ¬è‹¡è‹£è‹Ÿè‹’è‹´è‹³è‹ºèŽ“èŒƒè‹»è‹¹è‹žèŒ†è‹œèŒ‰è‹™èŒµèŒ´èŒ–èŒ²èŒ±è€èŒ¹èè…èŒ¯èŒ«èŒ—èŒ˜èŽ…èŽšèŽªèŽŸèŽ¢èŽ–èŒ£èŽŽèŽ‡èŽŠè¼èŽµè³èµèŽ èŽ‰èŽ¨è´è“è«èŽè½èƒè˜è‹èè·è‡è è²èè¢è èŽ½è¸è”†è»è‘­èªè¼è•šè’„è‘·è‘«è’­è‘®è’‚è‘©è‘†è¬è‘¯è‘¹èµè“Šè‘¢è’¹è’¿è’Ÿè“™è“è’»è“šè“è“è“†è“–è’¡è”¡è“¿è“´è”—è”˜è”¬è”Ÿè”•è””è“¼è•€è•£è•˜è•ˆï¿½ï¿½ï¿½".split("");for(a=0;a!=t[228].length;++a)if(t[228][a].charCodeAt(0)!==65533){r[t[228][a]]=58368+a;e[58368+a]=t[228][a]}t[229]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è•è˜‚è•‹è••è–€è–¤è–ˆè–‘è–Šè–¨è•­è–”è–›è—ªè–‡è–œè•·è•¾è–è—‰è–ºè—è–¹è—è—•è—è—¥è—œè—¹è˜Šè˜“è˜‹è—¾è—ºè˜†è˜¢è˜šè˜°è˜¿è™ä¹•è™”è™Ÿè™§è™±èš“èš£èš©èšªèš‹èšŒèš¶èš¯è›„è›†èš°è›‰è £èš«è›”è›žè›©è›¬ï¿½è›Ÿè››è›¯èœ’èœ†èœˆèœ€èœƒè›»èœ‘èœ‰èœè›¹èœŠèœ´èœ¿èœ·èœ»èœ¥èœ©èœšè èŸè¸èŒèŽè´è—è¨è®è™è“è£èªè …èž¢èžŸèž‚èž¯èŸ‹èž½èŸ€èŸé›–èž«èŸ„èž³èŸ‡èŸ†èž»èŸ¯èŸ²èŸ è è èŸ¾èŸ¶èŸ·è ŽèŸ’è ‘è –è •è ¢è ¡è ±è ¶è ¹è §è »è¡„è¡‚è¡’è¡™è¡žè¡¢è¡«è¢è¡¾è¢žè¡µè¡½è¢µè¡²è¢‚è¢—è¢’è¢®è¢™è¢¢è¢è¢¤è¢°è¢¿è¢±è£ƒè£„è£”è£˜è£™è£è£¹è¤‚è£¼è£´è£¨è£²è¤„è¤Œè¤Šè¤“è¥ƒè¤žè¤¥è¤ªè¤«è¥è¥„è¤»è¤¶è¤¸è¥Œè¤è¥ è¥žï¿½ï¿½ï¿½".split("");for(a=0;a!=t[229].length;++a)if(t[229][a].charCodeAt(0)!==65533){r[t[229][a]]=58624+a;e[58624+a]=t[229][a]}t[230]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¥¦è¥¤è¥­è¥ªè¥¯è¥´è¥·è¥¾è¦ƒè¦ˆè¦Šè¦“è¦˜è¦¡è¦©è¦¦è¦¬è¦¯è¦²è¦ºè¦½è¦¿è§€è§šè§œè§è§§è§´è§¸è¨ƒè¨–è¨è¨Œè¨›è¨è¨¥è¨¶è©è©›è©’è©†è©ˆè©¼è©­è©¬è©¢èª…èª‚èª„èª¨èª¡èª‘èª¥èª¦èªšèª£è«„è«è«‚è«šè««è«³è«§ï¿½è«¤è«±è¬”è« è«¢è«·è«žè«›è¬Œè¬‡è¬šè«¡è¬–è¬è¬—è¬ è¬³éž«è¬¦è¬«è¬¾è¬¨è­è­Œè­è­Žè­‰è­–è­›è­šè­«è­Ÿè­¬è­¯è­´è­½è®€è®Œè®Žè®’è®“è®–è®™è®šè°ºè±è°¿è±ˆè±Œè±Žè±è±•è±¢è±¬è±¸è±ºè²‚è²‰è²…è²Šè²è²Žè²”è±¼è²˜æˆè²­è²ªè²½è²²è²³è²®è²¶è³ˆè³è³¤è³£è³šè³½è³ºè³»è´„è´…è´Šè´‡è´è´è´é½Žè´“è³è´”è´–èµ§èµ­èµ±èµ³è¶è¶™è·‚è¶¾è¶ºè·è·šè·–è·Œè·›è·‹è·ªè·«è·Ÿè·£è·¼è¸ˆè¸‰è·¿è¸è¸žè¸è¸Ÿè¹‚è¸µè¸°è¸´è¹Šï¿½ï¿½ï¿½".split("");for(a=0;a!=t[230].length;++a)if(t[230][a].charCodeAt(0)!==65533){r[t[230][a]]=58880+a;e[58880+a]=t[230][a]}t[231]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¹‡è¹‰è¹Œè¹è¹ˆè¹™è¹¤è¹ è¸ªè¹£è¹•è¹¶è¹²è¹¼èºèº‡èº…èº„èº‹èºŠèº“èº‘èº”èº™èºªèº¡èº¬èº°è»†èº±èº¾è»…è»ˆè»‹è»›è»£è»¼è»»è»«è»¾è¼Šè¼…è¼•è¼’è¼™è¼“è¼œè¼Ÿè¼›è¼Œè¼¦è¼³è¼»è¼¹è½…è½‚è¼¾è½Œè½‰è½†è½Žè½—è½œï¿½è½¢è½£è½¤è¾œè¾Ÿè¾£è¾­è¾¯è¾·è¿šè¿¥è¿¢è¿ªè¿¯é‚‡è¿´é€…è¿¹è¿ºé€‘é€•é€¡é€é€žé€–é€‹é€§é€¶é€µé€¹è¿¸ééé‘é’é€Žé‰é€¾é–é˜éžé¨é¯é¶éš¨é²é‚‚é½é‚é‚€é‚Šé‚‰é‚é‚¨é‚¯é‚±é‚µéƒ¢éƒ¤æ‰ˆéƒ›é„‚é„’é„™é„²é„°é…Šé…–é…˜é…£é…¥é…©é…³é…²é†‹é†‰é†‚é†¢é†«é†¯é†ªé†µé†´é†ºé‡€é‡é‡‰é‡‹é‡é‡–é‡Ÿé‡¡é‡›é‡¼é‡µé‡¶éˆžé‡¿éˆ”éˆ¬éˆ•éˆ‘é‰žé‰—é‰…é‰‰é‰¤é‰ˆéŠ•éˆ¿é‰‹é‰éŠœéŠ–éŠ“éŠ›é‰šé‹éŠ¹éŠ·é‹©éŒé‹ºé„éŒ®ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[231].length;++a)if(t[231][a].charCodeAt(0)!==65533){r[t[231][a]]=59136+a;e[59136+a]=t[231][a]}t[232]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éŒ™éŒ¢éŒšéŒ£éŒºéŒµéŒ»éœé é¼é®é–éŽ°éŽ¬éŽ­éŽ”éŽ¹é–é—é¨é¥é˜éƒéééˆé¤éšé”é“éƒé‡éé¶é«éµé¡éºé‘é‘’é‘„é‘›é‘ é‘¢é‘žé‘ªéˆ©é‘°é‘µé‘·é‘½é‘šé‘¼é‘¾é’é‘¿é–‚é–‡é–Šé–”é––é–˜é–™ï¿½é– é–¨é–§é–­é–¼é–»é–¹é–¾é—Šæ¿¶é—ƒé—é—Œé—•é—”é—–é—œé—¡é—¥é—¢é˜¡é˜¨é˜®é˜¯é™‚é™Œé™é™‹é™·é™œé™žé™é™Ÿé™¦é™²é™¬éšéš˜éš•éš—éšªéš§éš±éš²éš°éš´éš¶éš¸éš¹é›Žé›‹é›‰é›è¥é›œéœé›•é›¹éœ„éœ†éœˆéœ“éœŽéœ‘éœéœ–éœ™éœ¤éœªéœ°éœ¹éœ½éœ¾é„é†éˆé‚é‰éœé é¤é¦é¨å‹’é«é±é¹éž…é¼éžéºéž†éž‹éžéžéžœéž¨éž¦éž£éž³éž´éŸƒéŸ†éŸˆéŸ‹éŸœéŸ­é½éŸ²ç«ŸéŸ¶éŸµé é Œé ¸é ¤é ¡é ·é ½é¡†é¡é¡‹é¡«é¡¯é¡°ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[232].length;++a)if(t[232][a].charCodeAt(0)!==65533){r[t[232][a]]=59392+a;e[59392+a]=t[232][a]}t[233]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¡±é¡´é¡³é¢ªé¢¯é¢±é¢¶é£„é£ƒé£†é£©é£«é¤ƒé¤‰é¤’é¤”é¤˜é¤¡é¤é¤žé¤¤é¤ é¤¬é¤®é¤½é¤¾é¥‚é¥‰é¥…é¥é¥‹é¥‘é¥’é¥Œé¥•é¦—é¦˜é¦¥é¦­é¦®é¦¼é§Ÿé§›é§é§˜é§‘é§­é§®é§±é§²é§»é§¸é¨é¨é¨…é§¢é¨™é¨«é¨·é©…é©‚é©€é©ƒï¿½é¨¾é©•é©é©›é©—é©Ÿé©¢é©¥é©¤é©©é©«é©ªéª­éª°éª¼é«€é«é«‘é«“é«”é«žé«Ÿé«¢é«£é«¦é«¯é««é«®é«´é«±é«·é«»é¬†é¬˜é¬šé¬Ÿé¬¢é¬£é¬¥é¬§é¬¨é¬©é¬ªé¬®é¬¯é¬²é­„é­ƒé­é­é­Žé­‘é­˜é­´é®“é®ƒé®‘é®–é®—é®Ÿé® é®¨é®´é¯€é¯Šé®¹é¯†é¯é¯‘é¯’é¯£é¯¢é¯¤é¯”é¯¡é°ºé¯²é¯±é¯°é°•é°”é°‰é°“é°Œé°†é°ˆé°’é°Šé°„é°®é°›é°¥é°¤é°¡é°°é±‡é°²é±†é°¾é±šé± é±§é±¶é±¸é³§é³¬é³°é´‰é´ˆé³«é´ƒé´†é´ªé´¦é¶¯é´£é´Ÿéµ„é´•é´’éµé´¿é´¾éµ†éµˆï¿½ï¿½ï¿½".split("");for(a=0;a!=t[233].length;++a)if(t[233][a].charCodeAt(0)!==65533){r[t[233][a]]=59648+a;e[59648+a]=t[233][a]}t[234]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éµéµžéµ¤éµ‘éµéµ™éµ²é¶‰é¶‡é¶«éµ¯éµºé¶šé¶¤é¶©é¶²é·„é·é¶»é¶¸é¶ºé·†é·é·‚é·™é·“é·¸é·¦é·­é·¯é·½é¸šé¸›é¸žé¹µé¹¹é¹½éºéºˆéº‹éºŒéº’éº•éº‘éºéº¥éº©éº¸éºªéº­é¡é»Œé»Žé»é»é»”é»œé»žé»é» é»¥é»¨é»¯ï¿½é»´é»¶é»·é»¹é»»é»¼é»½é¼‡é¼ˆçš·é¼•é¼¡é¼¬é¼¾é½Šé½’é½”é½£é½Ÿé½ é½¡é½¦é½§é½¬é½ªé½·é½²é½¶é¾•é¾œé¾ å ¯æ§‡é™ç‘¤å‡œç†™ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[234].length;++a)if(t[234][a].charCodeAt(0)!==65533){r[t[234][a]]=59904+a;e[59904+a]=t[234][a]}t[237]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çºŠè¤œéˆéŠˆè“œä¿‰ç‚»æ˜±æ£ˆé‹¹æ›»å½…ä¸¨ä»¡ä»¼ä¼€ä¼ƒä¼¹ä½–ä¾’ä¾Šä¾šä¾”ä¿å€å€¢ä¿¿å€žå†å°å‚å‚”åƒ´åƒ˜å…Šå…¤å†å†¾å‡¬åˆ•åŠœåŠ¦å‹€å‹›åŒ€åŒ‡åŒ¤å²åŽ“åŽ²åï¨Žå’œå’Šå’©å“¿å–†å™å¥åž¬åŸˆåŸ‡ï¨ï¿½ï¨å¢žå¢²å¤‹å¥“å¥›å¥å¥£å¦¤å¦ºå­–å¯€ç”¯å¯˜å¯¬å°žå²¦å²ºå³µå´§åµ“ï¨‘åµ‚åµ­å¶¸å¶¹å·å¼¡å¼´å½§å¾·å¿žææ‚…æ‚Šæƒžæƒ•æ„ æƒ²æ„‘æ„·æ„°æ†˜æˆ“æŠ¦æµæ‘ æ’æ“Žæ•Žæ˜€æ˜•æ˜»æ˜‰æ˜®æ˜žæ˜¤æ™¥æ™—æ™™ï¨’æ™³æš™æš æš²æš¿æ›ºæœŽï¤©æ¦æž»æ¡’æŸ€æ æ¡„æ£ï¨“æ¥¨ï¨”æ¦˜æ§¢æ¨°æ©«æ©†æ©³æ©¾æ«¢æ«¤æ¯–æ°¿æ±œæ²†æ±¯æ³šæ´„æ¶‡æµ¯æ¶–æ¶¬æ·æ·¸æ·²æ·¼æ¸¹æ¹œæ¸§æ¸¼æº¿æ¾ˆæ¾µæ¿µç€…ç€‡ç€¨ç‚…ç‚«ç„ç„„ç…œç…†ç…‡ï¨•ç‡ç‡¾çŠ±ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[237].length;++a)if(t[237][a].charCodeAt(0)!==65533){r[t[237][a]]=60672+a;e[60672+a]=t[237][a]}t[238]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çŠ¾çŒ¤ï¨–ç·çŽ½ç‰ç–ç£ç’ç‡çµç¦çªç©ç®ç‘¢ç’‰ç’Ÿç”ç•¯çš‚çšœçšžçš›çš¦ï¨—ç†åŠ¯ç ¡ç¡Žç¡¤ç¡ºç¤°ï¨˜ï¨™ï¨šç¦”ï¨›ç¦›ç«‘ç«§ï¨œç««ç®žï¨çµˆçµœç¶·ç¶ ç·–ç¹’ç½‡ç¾¡ï¨žèŒè¢è¿è‡è¶è‘ˆè’´è•“è•™ï¿½è•«ï¨Ÿè–°ï¨ ï¨¡è ‡è£µè¨’è¨·è©¹èª§èª¾è«Ÿï¨¢è«¶è­“è­¿è³°è³´è´’èµ¶ï¨£è»ï¨¤ï¨¥é§éƒžï¨¦é„•é„§é‡šé‡—é‡žé‡­é‡®é‡¤é‡¥éˆ†éˆéˆŠéˆºé‰€éˆ¼é‰Žé‰™é‰‘éˆ¹é‰§éŠ§é‰·é‰¸é‹§é‹—é‹™é‹ï¨§é‹•é‹ é‹“éŒ¥éŒ¡é‹»ï¨¨éŒžé‹¿éŒéŒ‚é°é—éŽ¤é†éžé¸é±é‘…é‘ˆé–’ï§œï¨©éšéš¯éœ³éœ»éƒééé‘é•é¡—é¡¥ï¨ªï¨«é¤§ï¨¬é¦žé©Žé«™é«œé­µé­²é®é®±é®»é°€éµ°éµ«ï¨­é¸™é»‘ï¿½ï¿½â…°â…±â…²â…³â…´â…µâ…¶â…·â…¸â…¹ï¿¢ï¿¤ï¼‡ï¼‚ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[238].length;++a)if(t[238][a].charCodeAt(0)!==65533){r[t[238][a]]=60928+a;e[60928+a]=t[238][a]}t[250]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½â…°â…±â…²â…³â…´â…µâ…¶â…·â…¸â…¹â… â…¡â…¢â…£â…¤â…¥â…¦â…§â…¨â…©ï¿¢ï¿¤ï¼‡ï¼‚ãˆ±â„–â„¡âˆµçºŠè¤œéˆéŠˆè“œä¿‰ç‚»æ˜±æ£ˆé‹¹æ›»å½…ä¸¨ä»¡ä»¼ä¼€ä¼ƒä¼¹ä½–ä¾’ä¾Šä¾šä¾”ä¿å€å€¢ä¿¿å€žå†å°å‚å‚”åƒ´åƒ˜å…Šï¿½å…¤å†å†¾å‡¬åˆ•åŠœåŠ¦å‹€å‹›åŒ€åŒ‡åŒ¤å²åŽ“åŽ²åï¨Žå’œå’Šå’©å“¿å–†å™å¥åž¬åŸˆåŸ‡ï¨ï¨å¢žå¢²å¤‹å¥“å¥›å¥å¥£å¦¤å¦ºå­–å¯€ç”¯å¯˜å¯¬å°žå²¦å²ºå³µå´§åµ“ï¨‘åµ‚åµ­å¶¸å¶¹å·å¼¡å¼´å½§å¾·å¿žææ‚…æ‚Šæƒžæƒ•æ„ æƒ²æ„‘æ„·æ„°æ†˜æˆ“æŠ¦æµæ‘ æ’æ“Žæ•Žæ˜€æ˜•æ˜»æ˜‰æ˜®æ˜žæ˜¤æ™¥æ™—æ™™ï¨’æ™³æš™æš æš²æš¿æ›ºæœŽï¤©æ¦æž»æ¡’æŸ€æ æ¡„æ£ï¨“æ¥¨ï¨”æ¦˜æ§¢æ¨°æ©«æ©†æ©³æ©¾æ«¢æ«¤æ¯–æ°¿æ±œæ²†æ±¯æ³šæ´„æ¶‡æµ¯ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[250].length;++a)if(t[250][a].charCodeAt(0)!==65533){r[t[250][a]]=64e3+a;e[64e3+a]=t[250][a]}t[251]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¶–æ¶¬æ·æ·¸æ·²æ·¼æ¸¹æ¹œæ¸§æ¸¼æº¿æ¾ˆæ¾µæ¿µç€…ç€‡ç€¨ç‚…ç‚«ç„ç„„ç…œç…†ç…‡ï¨•ç‡ç‡¾çŠ±çŠ¾çŒ¤ï¨–ç·çŽ½ç‰ç–ç£ç’ç‡çµç¦çªç©ç®ç‘¢ç’‰ç’Ÿç”ç•¯çš‚çšœçšžçš›çš¦ï¨—ç†åŠ¯ç ¡ç¡Žç¡¤ç¡ºç¤°ï¨˜ï¨™ï¿½ï¨šç¦”ï¨›ç¦›ç«‘ç«§ï¨œç««ç®žï¨çµˆçµœç¶·ç¶ ç·–ç¹’ç½‡ç¾¡ï¨žèŒè¢è¿è‡è¶è‘ˆè’´è•“è•™è•«ï¨Ÿè–°ï¨ ï¨¡è ‡è£µè¨’è¨·è©¹èª§èª¾è«Ÿï¨¢è«¶è­“è­¿è³°è³´è´’èµ¶ï¨£è»ï¨¤ï¨¥é§éƒžï¨¦é„•é„§é‡šé‡—é‡žé‡­é‡®é‡¤é‡¥éˆ†éˆéˆŠéˆºé‰€éˆ¼é‰Žé‰™é‰‘éˆ¹é‰§éŠ§é‰·é‰¸é‹§é‹—é‹™é‹ï¨§é‹•é‹ é‹“éŒ¥éŒ¡é‹»ï¨¨éŒžé‹¿éŒéŒ‚é°é—éŽ¤é†éžé¸é±é‘…é‘ˆé–’ï§œï¨©éšéš¯éœ³éœ»éƒééé‘é•é¡—é¡¥ï¨ªï¨«é¤§ï¨¬é¦žé©Žé«™ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[251].length;++a)if(t[251][a].charCodeAt(0)!==65533){r[t[251][a]]=64256+a;e[64256+a]=t[251][a]}t[252]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é«œé­µé­²é®é®±é®»é°€éµ°éµ«ï¨­é¸™é»‘ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[252].length;++a)if(t[252][a].charCodeAt(0)!==65533){r[t[252][a]]=64512+a;e[64512+a]=t[252][a]}return{enc:r,dec:e}}();cptable[936]=function(){var e=[],r={},t=[],a;t[0]="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~â‚¬ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[0].length;++a)if(t[0][a].charCodeAt(0)!==65533){r[t[0][a]]=0+a;e[0+a]=t[0][a]}t[129]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä¸‚ä¸„ä¸…ä¸†ä¸ä¸’ä¸—ä¸Ÿä¸ ä¸¡ä¸£ä¸¦ä¸©ä¸®ä¸¯ä¸±ä¸³ä¸µä¸·ä¸¼ä¹€ä¹ä¹‚ä¹„ä¹†ä¹Šä¹‘ä¹•ä¹—ä¹šä¹›ä¹¢ä¹£ä¹¤ä¹¥ä¹§ä¹¨ä¹ªä¹«ä¹¬ä¹­ä¹®ä¹¯ä¹²ä¹´ä¹µä¹¶ä¹·ä¹¸ä¹¹ä¹ºä¹»ä¹¼ä¹½ä¹¿äº€äºäº‚äºƒäº„äº…äº‡äºŠï¿½äºäº–äº—äº™äºœäºäºžäº£äºªäº¯äº°äº±äº´äº¶äº·äº¸äº¹äº¼äº½äº¾ä»ˆä»Œä»ä»ä»’ä»šä»›ä»œä» ä»¢ä»¦ä»§ä»©ä»­ä»®ä»¯ä»±ä»´ä»¸ä»¹ä»ºä»¼ä»¾ä¼€ä¼‚ä¼ƒä¼„ä¼…ä¼†ä¼‡ä¼ˆä¼‹ä¼Œä¼’ä¼“ä¼”ä¼•ä¼–ä¼œä¼ä¼¡ä¼£ä¼¨ä¼©ä¼¬ä¼­ä¼®ä¼±ä¼³ä¼µä¼·ä¼¹ä¼»ä¼¾ä¼¿ä½€ä½ä½‚ä½„ä½…ä½‡ä½ˆä½‰ä½Šä½‹ä½Œä½’ä½”ä½–ä½¡ä½¢ä½¦ä½¨ä½ªä½«ä½­ä½®ä½±ä½²ä½µä½·ä½¸ä½¹ä½ºä½½ä¾€ä¾ä¾‚ä¾…ä¾†ä¾‡ä¾Šä¾Œä¾Žä¾ä¾’ä¾“ä¾•ä¾–ä¾˜ä¾™ä¾šä¾œä¾žä¾Ÿä¾¡ä¾¢ï¿½".split("");for(a=0;a!=t[129].length;++a)if(t[129][a].charCodeAt(0)!==65533){r[t[129][a]]=33024+a;e[33024+a]=t[129][a]}t[130]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä¾¤ä¾«ä¾­ä¾°ä¾±ä¾²ä¾³ä¾´ä¾¶ä¾·ä¾¸ä¾¹ä¾ºä¾»ä¾¼ä¾½ä¾¾ä¿€ä¿ä¿‚ä¿†ä¿‡ä¿ˆä¿‰ä¿‹ä¿Œä¿ä¿’ä¿“ä¿”ä¿•ä¿–ä¿™ä¿›ä¿ ä¿¢ä¿¤ä¿¥ä¿§ä¿«ä¿¬ä¿°ä¿²ä¿´ä¿µä¿¶ä¿·ä¿¹ä¿»ä¿¼ä¿½ä¿¿å€€å€å€‚å€ƒå€„å€…å€†å€‡å€ˆå€‰å€Šï¿½å€‹å€Žå€å€‘å€“å€•å€–å€—å€›å€å€žå€ å€¢å€£å€¤å€§å€«å€¯å€°å€±å€²å€³å€´å€µå€¶å€·å€¸å€¹å€»å€½å€¿å€åå‚å„å…å†å‰åŠå‹ååå‘å’å“å”å–å—å˜å™å›ååžåŸå å¡å¢å£å¤å¦å§å¨å©åªå«å­å®å¯å°å±å²å³å´åµå¸å¹åºå¼å½å‚å‚‚å‚ƒå‚„å‚†å‚‡å‚‰å‚Šå‚‹å‚Œå‚Žå‚å‚å‚‘å‚’å‚“å‚”å‚•å‚–å‚—å‚˜å‚™å‚šå‚›å‚œå‚å‚žå‚Ÿå‚ å‚¡å‚¢å‚¤å‚¦å‚ªå‚«å‚­å‚®å‚¯å‚°å‚±å‚³å‚´å‚µå‚¶å‚·å‚¸å‚¹å‚¼ï¿½".split("");for(a=0;a!=t[130].length;++a)if(t[130][a].charCodeAt(0)!==65533){r[t[130][a]]=33280+a;e[33280+a]=t[130][a]}t[131]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å‚½å‚¾å‚¿åƒ€åƒåƒ‚åƒƒåƒ„åƒ…åƒ†åƒ‡åƒˆåƒ‰åƒŠåƒ‹åƒŒåƒåƒŽåƒåƒ‘åƒ’åƒ“åƒ”åƒ•åƒ—åƒ˜åƒ™åƒ›åƒœåƒåƒžåƒŸåƒ åƒ¡åƒ¢åƒ£åƒ¤åƒ¥åƒ¨åƒ©åƒªåƒ«åƒ¯åƒ°åƒ±åƒ²åƒ´åƒ¶åƒ·åƒ¸åƒ¹åƒºåƒ¼åƒ½åƒ¾åƒ¿å„€å„å„‚å„ƒå„„å„…å„ˆï¿½å„‰å„Šå„Œå„å„Žå„å„å„‘å„“å„”å„•å„–å„—å„˜å„™å„šå„›å„œå„å„žå„Ÿå„ å„¢å„£å„¤å„¥å„¦å„§å„¨å„©å„ªå„«å„¬å„­å„®å„¯å„°å„±å„²å„³å„´å„µå„¶å„·å„¸å„¹å„ºå„»å„¼å„½å„¾å…‚å…‡å…Šå…Œå…Žå…å…å…’å…“å…—å…˜å…™å…›å…å…žå…Ÿå… å…¡å…£å…¤å…¦å…§å…©å…ªå…¯å…²å…ºå…¾å…¿å†ƒå†„å††å†‡å†Šå†‹å†Žå†å†å†‘å†“å†”å†˜å†šå†å†žå†Ÿå†¡å†£å†¦å†§å†¨å†©å†ªå†­å†®å†´å†¸å†¹å†ºå†¾å†¿å‡å‡‚å‡ƒå‡…å‡ˆå‡Šå‡å‡Žå‡å‡’å‡“å‡”å‡•å‡–å‡—ï¿½".split("");for(a=0;a!=t[131].length;++a)if(t[131][a].charCodeAt(0)!==65533){r[t[131][a]]=33536+a;e[33536+a]=t[131][a]}t[132]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å‡˜å‡™å‡šå‡œå‡žå‡Ÿå‡¢å‡£å‡¥å‡¦å‡§å‡¨å‡©å‡ªå‡¬å‡®å‡±å‡²å‡´å‡·å‡¾åˆ„åˆ…åˆ‰åˆ‹åˆŒåˆåˆåˆ“åˆ”åˆ•åˆœåˆžåˆŸåˆ¡åˆ¢åˆ£åˆ¥åˆ¦åˆ§åˆªåˆ¬åˆ¯åˆ±åˆ²åˆ´åˆµåˆ¼åˆ¾å‰„å‰…å‰†å‰‡å‰ˆå‰‰å‰‹å‰Žå‰å‰’å‰“å‰•å‰—å‰˜ï¿½å‰™å‰šå‰›å‰å‰Ÿå‰ å‰¢å‰£å‰¤å‰¦å‰¨å‰«å‰¬å‰­å‰®å‰°å‰±å‰³å‰´å‰µå‰¶å‰·å‰¸å‰¹å‰ºå‰»å‰¼å‰¾åŠ€åŠƒåŠ„åŠ…åŠ†åŠ‡åŠ‰åŠŠåŠ‹åŠŒåŠåŠŽåŠåŠ‘åŠ’åŠ”åŠ•åŠ–åŠ—åŠ˜åŠ™åŠšåŠœåŠ¤åŠ¥åŠ¦åŠ§åŠ®åŠ¯åŠ°åŠ´åŠµåŠ¶åŠ·åŠ¸åŠ¹åŠºåŠ»åŠ¼åŠ½å‹€å‹å‹‚å‹„å‹…å‹†å‹ˆå‹Šå‹Œå‹å‹Žå‹å‹‘å‹“å‹”å‹•å‹—å‹™å‹šå‹›å‹œå‹å‹žå‹ å‹¡å‹¢å‹£å‹¥å‹¦å‹§å‹¨å‹©å‹ªå‹«å‹¬å‹­å‹®å‹¯å‹±å‹²å‹³å‹´å‹µå‹¶å‹·å‹¸å‹»å‹¼å‹½åŒåŒ‚åŒƒåŒ„åŒ‡åŒ‰åŒŠåŒ‹åŒŒåŒŽï¿½".split("");for(a=0;a!=t[132].length;++a)if(t[132][a].charCodeAt(0)!==65533){r[t[132][a]]=33792+a;e[33792+a]=t[132][a]}t[133]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åŒ‘åŒ’åŒ“åŒ”åŒ˜åŒ›åŒœåŒžåŒŸåŒ¢åŒ¤åŒ¥åŒ§åŒ¨åŒ©åŒ«åŒ¬åŒ­åŒ¯åŒ°åŒ±åŒ²åŒ³åŒ´åŒµåŒ¶åŒ·åŒ¸åŒ¼åŒ½å€å‚å„å†å‹åŒååå”å˜å™å›åå¥å¨åªå¬å­å²å¶å¹å»å¼å½å¾åŽ€åŽåŽƒåŽ‡åŽˆåŽŠåŽŽåŽï¿½åŽåŽ‘åŽ’åŽ“åŽ”åŽ–åŽ—åŽ™åŽ›åŽœåŽžåŽ åŽ¡åŽ¤åŽ§åŽªåŽ«åŽ¬åŽ­åŽ¯åŽ°åŽ±åŽ²åŽ³åŽ´åŽµåŽ·åŽ¸åŽ¹åŽºåŽ¼åŽ½åŽ¾å€åƒå„å…å†å‡åŽååå’å“å•åšåœååžå¡å¢å§å´åºå¾å¿å€å‚å…å‡å‹å”å˜å™åšåœå¢å¤å¥åªå°å³å¶å·åºå½å¿å‘å‘‚å‘„å‘…å‘‡å‘‰å‘Œå‘å‘Žå‘å‘‘å‘šå‘å‘žå‘Ÿå‘ å‘¡å‘£å‘¥å‘§å‘©å‘ªå‘«å‘¬å‘­å‘®å‘¯å‘°å‘´å‘¹å‘ºå‘¾å‘¿å’å’ƒå’…å’‡å’ˆå’‰å’Šå’å’‘å’“å’—å’˜å’œå’žå’Ÿå’ å’¡ï¿½".split("");for(a=0;a!=t[133].length;++a)if(t[133][a].charCodeAt(0)!==65533){r[t[133][a]]=34048+a;e[34048+a]=t[133][a]}t[134]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å’¢å’¥å’®å’°å’²å’µå’¶å’·å’¹å’ºå’¼å’¾å“ƒå“…å“Šå“‹å“–å“˜å“›å“ å“¡å“¢å“£å“¤å“«å“¬å“¯å“°å“±å“´å“µå“¶å“·å“¸å“¹å“»å“¾å”€å”‚å”ƒå”„å”…å”ˆå”Šå”‹å”Œå”å”Žå”’å”“å”•å”–å”—å”˜å”™å”šå”œå”å”žå”Ÿå”¡å”¥å”¦ï¿½å”¨å”©å”«å”­å”²å”´å”µå”¶å”¸å”¹å”ºå”»å”½å•€å•‚å•…å•‡å•ˆå•‹å•Œå•å•Žå•å•‘å•’å•“å•”å•—å•˜å•™å•šå•›å•å•žå•Ÿå• å•¢å•£å•¨å•©å•«å•¯å•°å•±å•²å•³å•´å•¹å•ºå•½å•¿å–…å–†å–Œå–å–Žå–å–’å–“å–•å––å–—å–šå–›å–žå– å–¡å–¢å–£å–¤å–¥å–¦å–¨å–©å–ªå–«å–¬å–­å–®å–¯å–°å–²å–´å–¶å–¸å–ºå–¼å–¿å—€å—å—‚å—ƒå—†å—‡å—ˆå—Šå—‹å—Žå—å—å—•å——å—˜å—™å—šå—›å—žå— å—¢å—§å—©å—­å—®å—°å—±å—´å—¶å—¸å—¹å—ºå—»å—¼å—¿å˜‚å˜ƒå˜„å˜…ï¿½".split("");for(a=0;a!=t[134].length;++a)if(t[134][a].charCodeAt(0)!==65533){r[t[134][a]]=34304+a;e[34304+a]=t[134][a]}t[135]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å˜†å˜‡å˜Šå˜‹å˜å˜å˜‘å˜’å˜“å˜”å˜•å˜–å˜—å˜™å˜šå˜œå˜å˜ å˜¡å˜¢å˜¥å˜¦å˜¨å˜©å˜ªå˜«å˜®å˜¯å˜°å˜³å˜µå˜·å˜¸å˜ºå˜¼å˜½å˜¾å™€å™å™‚å™ƒå™„å™…å™†å™‡å™ˆå™‰å™Šå™‹å™å™å™‘å™’å™“å™•å™–å™šå™›å™å™žå™Ÿå™ å™¡ï¿½å™£å™¥å™¦å™§å™­å™®å™¯å™°å™²å™³å™´å™µå™·å™¸å™¹å™ºå™½å™¾å™¿åš€åšåš‚åšƒåš„åš‡åšˆåš‰åšŠåš‹åšŒåšåšåš‘åš’åš”åš•åš–åš—åš˜åš™åššåš›åšœåšåšžåšŸåš åš¡åš¢åš¤åš¥åš¦åš§åš¨åš©åšªåš«åš¬åš­åš®åš°åš±åš²åš³åš´åšµåš¶åš¸åš¹åšºåš»åš½åš¾åš¿å›€å›å›‚å›ƒå›„å›…å›†å›‡å›ˆå›‰å›‹å›Œå›å›Žå›å›å›‘å›’å›“å›•å›–å›˜å›™å›œå›£å›¥å›¦å›§å›¨å›©å›ªå›¬å›®å›¯å›²å›³å›¶å›·å›¸å›»å›¼åœ€åœåœ‚åœ…åœ‡åœ‹åœŒåœåœŽåœåœåœ‘ï¿½".split("");for(a=0;a!=t[135].length;++a)if(t[135][a].charCodeAt(0)!==65533){r[t[135][a]]=34560+a;e[34560+a]=t[135][a]}t[136]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åœ’åœ“åœ”åœ•åœ–åœ—åœ˜åœ™åœšåœ›åœåœžåœ åœ¡åœ¢åœ¤åœ¥åœ¦åœ§åœ«åœ±åœ²åœ´åœµåœ¶åœ·åœ¸åœ¼åœ½åœ¿ååƒå„å…å†åˆå‰å‹å’å“å”å•å–å˜å™å¢å£å¥å§å¬å®å°å±å²å´åµå¸å¹åºå½å¾å¿åž€ï¿½åžåž‡åžˆåž‰åžŠåžåžŽåžåžåž‘åž”åž•åž–åž—åž˜åž™åžšåžœåžåžžåžŸåž¥åž¨åžªåž¬åž¯åž°åž±åž³åžµåž¶åž·åž¹åžºåž»åž¼åž½åž¾åž¿åŸ€åŸåŸ„åŸ…åŸ†åŸ‡åŸˆåŸ‰åŸŠåŸŒåŸåŸåŸ‘åŸ“åŸ–åŸ—åŸ›åŸœåŸžåŸ¡åŸ¢åŸ£åŸ¥åŸ¦åŸ§åŸ¨åŸ©åŸªåŸ«åŸ¬åŸ®åŸ°åŸ±åŸ²åŸ³åŸµåŸ¶åŸ·åŸ»åŸ¼åŸ¾åŸ¿å å ƒå „å …å ˆå ‰å Šå Œå Žå å å ’å “å ”å –å —å ˜å šå ›å œå å Ÿå ¢å £å ¥å ¦å §å ¨å ©å «å ¬å ­å ®å ¯å ±å ²å ³å ´å ¶å ·å ¸å ¹å ºå »å ¼å ½ï¿½".split("");for(a=0;a!=t[136].length;++a)if(t[136][a].charCodeAt(0)!==65533){r[t[136][a]]=34816+a;e[34816+a]=t[136][a]}t[137]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å ¾å ¿å¡€å¡å¡‚å¡ƒå¡…å¡†å¡‡å¡ˆå¡‰å¡Šå¡‹å¡Žå¡å¡å¡’å¡“å¡•å¡–å¡—å¡™å¡šå¡›å¡œå¡å¡Ÿå¡ å¡¡å¡¢å¡£å¡¤å¡¦å¡§å¡¨å¡©å¡ªå¡­å¡®å¡¯å¡°å¡±å¡²å¡³å¡´å¡µå¡¶å¡·å¡¸å¡¹å¡ºå¡»å¡¼å¡½å¡¿å¢‚å¢„å¢†å¢‡å¢ˆå¢Šå¢‹å¢Œï¿½å¢å¢Žå¢å¢å¢‘å¢”å¢•å¢–å¢—å¢˜å¢›å¢œå¢å¢ å¢¡å¢¢å¢£å¢¤å¢¥å¢¦å¢§å¢ªå¢«å¢¬å¢­å¢®å¢¯å¢°å¢±å¢²å¢³å¢´å¢µå¢¶å¢·å¢¸å¢¹å¢ºå¢»å¢½å¢¾å¢¿å£€å£‚å£ƒå£„å£†å£‡å£ˆå£‰å£Šå£‹å£Œå£å£Žå£å£å£’å£“å£”å£–å£—å£˜å£™å£šå£›å£œå£å£žå£Ÿå£ å£¡å£¢å££å£¥å£¦å£§å£¨å£©å£ªå£­å£¯å£±å£²å£´å£µå£·å£¸å£ºå£»å£¼å£½å£¾å£¿å¤€å¤å¤ƒå¤…å¤†å¤ˆå¤‰å¤Šå¤‹å¤Œå¤Žå¤å¤‘å¤’å¤“å¤—å¤˜å¤›å¤å¤žå¤ å¤¡å¤¢å¤£å¤¦å¤¨å¤¬å¤°å¤²å¤³å¤µå¤¶å¤»ï¿½".split("");for(a=0;a!=t[137].length;++a)if(t[137][a].charCodeAt(0)!==65533){r[t[137][a]]=35072+a;e[35072+a]=t[137][a]}t[138]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¤½å¤¾å¤¿å¥€å¥ƒå¥…å¥†å¥Šå¥Œå¥å¥å¥’å¥“å¥™å¥›å¥œå¥å¥žå¥Ÿå¥¡å¥£å¥¤å¥¦å¥§å¥¨å¥©å¥ªå¥«å¥¬å¥­å¥®å¥¯å¥°å¥±å¥²å¥µå¥·å¥ºå¥»å¥¼å¥¾å¥¿å¦€å¦…å¦‰å¦‹å¦Œå¦Žå¦å¦å¦‘å¦”å¦•å¦˜å¦šå¦›å¦œå¦å¦Ÿå¦ å¦¡å¦¢å¦¦ï¿½å¦§å¦¬å¦­å¦°å¦±å¦³å¦´å¦µå¦¶å¦·å¦¸å¦ºå¦¼å¦½å¦¿å§€å§å§‚å§ƒå§„å§…å§‡å§ˆå§‰å§Œå§å§Žå§å§•å§–å§™å§›å§žå§Ÿå§ å§¡å§¢å§¤å§¦å§§å§©å§ªå§«å§­å§®å§¯å§°å§±å§²å§³å§´å§µå§¶å§·å§¸å§ºå§¼å§½å§¾å¨€å¨‚å¨Šå¨‹å¨å¨Žå¨å¨å¨’å¨”å¨•å¨–å¨—å¨™å¨šå¨›å¨å¨žå¨¡å¨¢å¨¤å¨¦å¨§å¨¨å¨ªå¨«å¨¬å¨­å¨®å¨¯å¨°å¨³å¨µå¨·å¨¸å¨¹å¨ºå¨»å¨½å¨¾å¨¿å©å©‚å©ƒå©„å©…å©‡å©ˆå©‹å©Œå©å©Žå©å©å©‘å©’å©“å©”å©–å©—å©˜å©™å©›å©œå©å©žå©Ÿå© ï¿½".split("");for(a=0;a!=t[138].length;++a)if(t[138][a].charCodeAt(0)!==65533){r[t[138][a]]=35328+a;e[35328+a]=t[138][a]}t[139]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å©¡å©£å©¤å©¥å©¦å©¨å©©å©«å©¬å©­å©®å©¯å©°å©±å©²å©³å©¸å©¹å©»å©¼å©½å©¾åª€åªåª‚åªƒåª„åª…åª†åª‡åªˆåª‰åªŠåª‹åªŒåªåªŽåªåªåª‘åª“åª”åª•åª–åª—åª˜åª™åªœåªåªžåªŸåª åª¡åª¢åª£åª¤åª¥åª¦åª§åª¨åª©åª«åª¬ï¿½åª­åª®åª¯åª°åª±åª´åª¶åª·åª¹åªºåª»åª¼åª½åª¿å«€å«ƒå«„å«…å«†å«‡å«ˆå«Šå«‹å«å«Žå«å«å«‘å«“å«•å«—å«™å«šå«›å«å«žå«Ÿå«¢å«¤å«¥å«§å«¨å«ªå«¬å«­å«®å«¯å«°å«²å«³å«´å«µå«¶å«·å«¸å«¹å«ºå«»å«¼å«½å«¾å«¿å¬€å¬å¬‚å¬ƒå¬„å¬…å¬†å¬‡å¬ˆå¬Šå¬‹å¬Œå¬å¬Žå¬å¬å¬‘å¬’å¬“å¬”å¬•å¬˜å¬™å¬šå¬›å¬œå¬å¬žå¬Ÿå¬ å¬¡å¬¢å¬£å¬¤å¬¥å¬¦å¬§å¬¨å¬©å¬ªå¬«å¬¬å¬­å¬®å¬¯å¬°å¬±å¬³å¬µå¬¶å¬¸å¬¹å¬ºå¬»å¬¼å¬½å¬¾å¬¿å­å­‚å­ƒå­„å­…å­†å­‡ï¿½".split("");for(a=0;a!=t[139].length;++a)if(t[139][a].charCodeAt(0)!==65533){r[t[139][a]]=35584+a;e[35584+a]=t[139][a]}t[140]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å­ˆå­‰å­Šå­‹å­Œå­å­Žå­å­’å­–å­žå­ å­¡å­§å­¨å­«å­­å­®å­¯å­²å­´å­¶å­·å­¸å­¹å­»å­¼å­¾å­¿å®‚å®†å®Šå®å®Žå®å®‘å®’å®”å®–å®Ÿå®§å®¨å®©å®¬å®­å®®å®¯å®±å®²å®·å®ºå®»å®¼å¯€å¯å¯ƒå¯ˆå¯‰å¯Šå¯‹å¯å¯Žå¯ï¿½å¯‘å¯”å¯•å¯–å¯—å¯˜å¯™å¯šå¯›å¯œå¯ å¯¢å¯£å¯¦å¯§å¯©å¯ªå¯«å¯¬å¯­å¯¯å¯±å¯²å¯³å¯´å¯µå¯¶å¯·å¯½å¯¾å°€å°‚å°ƒå°…å°‡å°ˆå°‹å°Œå°å°Žå°å°’å°“å°—å°™å°›å°žå°Ÿå° å°¡å°£å°¦å°¨å°©å°ªå°«å°­å°®å°¯å°°å°²å°³å°µå°¶å°·å±ƒå±„å±†å±‡å±Œå±å±’å±“å±”å±–å±—å±˜å±šå±›å±œå±å±Ÿå±¢å±¤å±§å±¨å±©å±ªå±«å±¬å±­å±°å±²å±³å±´å±µå±¶å±·å±¸å±»å±¼å±½å±¾å²€å²ƒå²„å²…å²†å²‡å²‰å²Šå²‹å²Žå²å²’å²“å²•å²å²žå²Ÿå² å²¡å²¤å²¥å²¦å²§å²¨ï¿½".split("");for(a=0;a!=t[140].length;++a)if(t[140][a].charCodeAt(0)!==65533){r[t[140][a]]=35840+a;e[35840+a]=t[140][a]}t[141]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å²ªå²®å²¯å²°å²²å²´å²¶å²¹å²ºå²»å²¼å²¾å³€å³‚å³ƒå³…å³†å³‡å³ˆå³‰å³Šå³Œå³å³Žå³å³å³‘å³“å³”å³•å³–å³—å³˜å³šå³›å³œå³å³žå³Ÿå³ å³¢å³£å³§å³©å³«å³¬å³®å³¯å³±å³²å³³å³´å³µå³¶å³·å³¸å³¹å³ºå³¼å³½å³¾å³¿å´€ï¿½å´å´„å´…å´ˆå´‰å´Šå´‹å´Œå´å´å´å´‘å´’å´“å´•å´—å´˜å´™å´šå´œå´å´Ÿå´ å´¡å´¢å´£å´¥å´¨å´ªå´«å´¬å´¯å´°å´±å´²å´³å´µå´¶å´·å´¸å´¹å´ºå´»å´¼å´¿åµ€åµåµ‚åµƒåµ„åµ…åµ†åµˆåµ‰åµåµŽåµåµåµ‘åµ’åµ“åµ”åµ•åµ–åµ—åµ™åµšåµœåµžåµŸåµ åµ¡åµ¢åµ£åµ¤åµ¥åµ¦åµ§åµ¨åµªåµ­åµ®åµ°åµ±åµ²åµ³åµµåµ¶åµ·åµ¸åµ¹åµºåµ»åµ¼åµ½åµ¾åµ¿å¶€å¶å¶ƒå¶„å¶…å¶†å¶‡å¶ˆå¶‰å¶Šå¶‹å¶Œå¶å¶Žå¶å¶å¶‘å¶’å¶“å¶”å¶•å¶–å¶—å¶˜å¶šå¶›å¶œå¶žå¶Ÿå¶ ï¿½".split("");for(a=0;a!=t[141].length;++a)if(t[141][a].charCodeAt(0)!==65533){r[t[141][a]]=36096+a;e[36096+a]=t[141][a]}t[142]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¶¡å¶¢å¶£å¶¤å¶¥å¶¦å¶§å¶¨å¶©å¶ªå¶«å¶¬å¶­å¶®å¶¯å¶°å¶±å¶²å¶³å¶´å¶µå¶¶å¶¸å¶¹å¶ºå¶»å¶¼å¶½å¶¾å¶¿å·€å·å·‚å·ƒå·„å·†å·‡å·ˆå·‰å·Šå·‹å·Œå·Žå·å·å·‘å·’å·“å·”å·•å·–å·—å·˜å·™å·šå·œå·Ÿå· å·£å·¤å·ªå·¬å·­ï¿½å·°å·µå·¶å·¸å·¹å·ºå·»å·¼å·¿å¸€å¸„å¸‡å¸‰å¸Šå¸‹å¸å¸Žå¸’å¸“å¸—å¸žå¸Ÿå¸ å¸¡å¸¢å¸£å¸¤å¸¥å¸¨å¸©å¸ªå¸«å¸¬å¸¯å¸°å¸²å¸³å¸´å¸µå¸¶å¸¹å¸ºå¸¾å¸¿å¹€å¹å¹ƒå¹†å¹‡å¹ˆå¹‰å¹Šå¹‹å¹å¹Žå¹å¹å¹‘å¹’å¹“å¹–å¹—å¹˜å¹™å¹šå¹œå¹å¹Ÿå¹ å¹£å¹¤å¹¥å¹¦å¹§å¹¨å¹©å¹ªå¹«å¹¬å¹­å¹®å¹¯å¹°å¹±å¹µå¹·å¹¹å¹¾åºåº‚åºƒåº…åºˆåº‰åºŒåºåºŽåº’åº˜åº›åºåº¡åº¢åº£åº¤åº¨åº©åºªåº«åº¬åº®åº¯åº°åº±åº²åº´åººåº»åº¼åº½åº¿å»€å»å»‚å»ƒå»„å»…ï¿½".split("");for(a=0;a!=t[142].length;++a)if(t[142][a].charCodeAt(0)!==65533){r[t[142][a]]=36352+a;e[36352+a]=t[142][a]}t[143]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å»†å»‡å»ˆå»‹å»Œå»å»Žå»å»å»”å»•å»—å»˜å»™å»šå»œå»å»žå»Ÿå» å»¡å»¢å»£å»¤å»¥å»¦å»§å»©å»«å»¬å»­å»®å»¯å»°å»±å»²å»³å»µå»¸å»¹å»»å»¼å»½å¼…å¼†å¼‡å¼‰å¼Œå¼å¼Žå¼å¼’å¼”å¼–å¼™å¼šå¼œå¼å¼žå¼¡å¼¢å¼£å¼¤ï¿½å¼¨å¼«å¼¬å¼®å¼°å¼²å¼³å¼´å¼µå¼¶å¼·å¼¸å¼»å¼½å¼¾å¼¿å½å½‚å½ƒå½„å½…å½†å½‡å½ˆå½‰å½Šå½‹å½Œå½å½Žå½å½‘å½”å½™å½šå½›å½œå½žå½Ÿå½ å½£å½¥å½§å½¨å½«å½®å½¯å½²å½´å½µå½¶å½¸å½ºå½½å½¾å½¿å¾ƒå¾†å¾å¾Žå¾å¾‘å¾“å¾”å¾–å¾šå¾›å¾å¾žå¾Ÿå¾ å¾¢å¾£å¾¤å¾¥å¾¦å¾§å¾©å¾«å¾¬å¾¯å¾°å¾±å¾²å¾³å¾´å¾¶å¾¸å¾¹å¾ºå¾»å¾¾å¾¿å¿€å¿å¿‚å¿‡å¿ˆå¿Šå¿‹å¿Žå¿“å¿”å¿•å¿šå¿›å¿œå¿žå¿Ÿå¿¢å¿£å¿¥å¿¦å¿¨å¿©å¿¬å¿¯å¿°å¿²å¿³å¿´å¿¶å¿·å¿¹å¿ºå¿¼æ€‡ï¿½".split("");for(a=0;a!=t[143].length;++a)if(t[143][a].charCodeAt(0)!==65533){r[t[143][a]]=36608+a;e[36608+a]=t[143][a]}t[144]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ€ˆæ€‰æ€‹æ€Œæ€æ€‘æ€“æ€—æ€˜æ€šæ€žæ€Ÿæ€¢æ€£æ€¤æ€¬æ€­æ€®æ€°æ€±æ€²æ€³æ€´æ€¶æ€·æ€¸æ€¹æ€ºæ€½æ€¾æ€æ„æ…æ†æ‡æˆæ‰æŠæŒæŽææ‘æ“æ”æ–æ—æ˜æ›æœæžæŸæ æ¡æ¥æ¦æ®æ±æ²æ´æµæ·æ¾æ‚€ï¿½æ‚æ‚‚æ‚…æ‚†æ‚‡æ‚ˆæ‚Šæ‚‹æ‚Žæ‚æ‚æ‚‘æ‚“æ‚•æ‚—æ‚˜æ‚™æ‚œæ‚žæ‚¡æ‚¢æ‚¤æ‚¥æ‚§æ‚©æ‚ªæ‚®æ‚°æ‚³æ‚µæ‚¶æ‚·æ‚¹æ‚ºæ‚½æ‚¾æ‚¿æƒ€æƒæƒ‚æƒƒæƒ„æƒ‡æƒˆæƒ‰æƒŒæƒæƒŽæƒæƒæƒ’æƒ“æƒ”æƒ–æƒ—æƒ™æƒ›æƒžæƒ¡æƒ¢æƒ£æƒ¤æƒ¥æƒªæƒ±æƒ²æƒµæƒ·æƒ¸æƒ»æƒ¼æƒ½æƒ¾æƒ¿æ„‚æ„ƒæ„„æ„…æ„‡æ„Šæ„‹æ„Œæ„æ„‘æ„’æ„“æ„”æ„–æ„—æ„˜æ„™æ„›æ„œæ„æ„žæ„¡æ„¢æ„¥æ„¨æ„©æ„ªæ„¬æ„­æ„®æ„¯æ„°æ„±æ„²æ„³æ„´æ„µæ„¶æ„·æ„¸æ„¹æ„ºæ„»æ„¼æ„½æ„¾æ…€æ…æ…‚æ…ƒæ…„æ……æ…†ï¿½".split("");for(a=0;a!=t[144].length;++a)if(t[144][a].charCodeAt(0)!==65533){r[t[144][a]]=36864+a;e[36864+a]=t[144][a]}t[145]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ…‡æ…‰æ…‹æ…æ…æ…æ…’æ…“æ…”æ…–æ…—æ…˜æ…™æ…šæ…›æ…œæ…žæ…Ÿæ… æ…¡æ…£æ…¤æ…¥æ…¦æ…©æ…ªæ…«æ…¬æ…­æ…®æ…¯æ…±æ…²æ…³æ…´æ…¶æ…¸æ…¹æ…ºæ…»æ…¼æ…½æ…¾æ…¿æ†€æ†æ†‚æ†ƒæ†„æ†…æ††æ†‡æ†ˆæ†‰æ†Šæ†Œæ†æ†æ†æ†‘æ†’æ†“æ†•ï¿½æ†–æ†—æ†˜æ†™æ†šæ†›æ†œæ†žæ†Ÿæ† æ†¡æ†¢æ†£æ†¤æ†¥æ†¦æ†ªæ†«æ†­æ†®æ†¯æ†°æ†±æ†²æ†³æ†´æ†µæ†¶æ†¸æ†¹æ†ºæ†»æ†¼æ†½æ†¿æ‡€æ‡æ‡ƒæ‡„æ‡…æ‡†æ‡‡æ‡‰æ‡Œæ‡æ‡Žæ‡æ‡æ‡“æ‡•æ‡–æ‡—æ‡˜æ‡™æ‡šæ‡›æ‡œæ‡æ‡žæ‡Ÿæ‡ æ‡¡æ‡¢æ‡£æ‡¤æ‡¥æ‡§æ‡¨æ‡©æ‡ªæ‡«æ‡¬æ‡­æ‡®æ‡¯æ‡°æ‡±æ‡²æ‡³æ‡´æ‡¶æ‡·æ‡¸æ‡¹æ‡ºæ‡»æ‡¼æ‡½æ‡¾æˆ€æˆæˆ‚æˆƒæˆ„æˆ…æˆ‡æˆ‰æˆ“æˆ”æˆ™æˆœæˆæˆžæˆ æˆ£æˆ¦æˆ§æˆ¨æˆ©æˆ«æˆ­æˆ¯æˆ°æˆ±æˆ²æˆµæˆ¶æˆ¸æˆ¹æˆºæˆ»æˆ¼æ‰‚æ‰„æ‰…æ‰†æ‰Šï¿½".split("");for(a=0;a!=t[145].length;++a)if(t[145][a].charCodeAt(0)!==65533){r[t[145][a]]=37120+a;e[37120+a]=t[145][a]}t[146]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ‰æ‰æ‰•æ‰–æ‰—æ‰™æ‰šæ‰œæ‰æ‰žæ‰Ÿæ‰ æ‰¡æ‰¢æ‰¤æ‰¥æ‰¨æ‰±æ‰²æ‰´æ‰µæ‰·æ‰¸æ‰ºæ‰»æ‰½æŠæŠ‚æŠƒæŠ…æŠ†æŠ‡æŠˆæŠ‹æŠŒæŠæŠŽæŠæŠæŠ”æŠ™æŠœæŠæŠžæŠ£æŠ¦æŠ§æŠ©æŠªæŠ­æŠ®æŠ¯æŠ°æŠ²æŠ³æŠ´æŠ¶æŠ·æŠ¸æŠºæŠ¾æ‹€æ‹ï¿½æ‹ƒæ‹‹æ‹æ‹‘æ‹•æ‹æ‹žæ‹ æ‹¡æ‹¤æ‹ªæ‹«æ‹°æ‹²æ‹µæ‹¸æ‹¹æ‹ºæ‹»æŒ€æŒƒæŒ„æŒ…æŒ†æŒŠæŒ‹æŒŒæŒæŒæŒæŒ’æŒ“æŒ”æŒ•æŒ—æŒ˜æŒ™æŒœæŒ¦æŒ§æŒ©æŒ¬æŒ­æŒ®æŒ°æŒ±æŒ³æŒ´æŒµæŒ¶æŒ·æŒ¸æŒ»æŒ¼æŒ¾æŒ¿æ€ææ„æ‡æˆæŠæ‘æ’æ“æ”æ–æ—æ˜æ™æšæ›æœææ æ¤æ¥æ¦æ¨æªæ«æ¬æ¯æ°æ²æ³æ´æµæ¸æ¹æ¼æ½æ¾æ¿æŽæŽƒæŽ„æŽ…æŽ†æŽ‹æŽæŽ‘æŽ“æŽ”æŽ•æŽ—æŽ™æŽšæŽ›æŽœæŽæŽžæŽŸæŽ¡æŽ¤æŽ¦æŽ«æŽ¯æŽ±æŽ²æŽµæŽ¶æŽ¹æŽ»æŽ½æŽ¿æ€ï¿½".split("");for(a=0;a!=t[146].length;++a)if(t[146][a].charCodeAt(0)!==65533){r[t[146][a]]=37376+a;e[37376+a]=t[146][a]}t[147]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ææ‚æƒæ…æ‡æˆæŠæ‹æŒæ‘æ“æ”æ•æ—æ˜æ™æšæ›æœææŸæ¢æ¤æ¥æ¦æ§æ¨æ«æ¬æ®æ¯æ°æ±æ³æµæ·æ¹æºæ»æ¼æ¾æƒæ„æ†æ‡æˆæ‰æŠææŽæ‘æ’æ•æ–æ—æ˜æ™æšææŸæ¢æ£æ¤ï¿½æ¥æ§æ¨æ©æ«æ®æ¯æ°æ±æ²æ³æµæ¶æ·æ¸æ¹æ»æ¼æ¾æ‘€æ‘‚æ‘ƒæ‘‰æ‘‹æ‘Œæ‘æ‘Žæ‘æ‘æ‘‘æ‘“æ‘•æ‘–æ‘—æ‘™æ‘šæ‘›æ‘œæ‘æ‘Ÿæ‘ æ‘¡æ‘¢æ‘£æ‘¤æ‘¥æ‘¦æ‘¨æ‘ªæ‘«æ‘¬æ‘®æ‘¯æ‘°æ‘±æ‘²æ‘³æ‘´æ‘µæ‘¶æ‘·æ‘»æ‘¼æ‘½æ‘¾æ‘¿æ’€æ’æ’ƒæ’†æ’ˆæ’‰æ’Šæ’‹æ’Œæ’æ’Žæ’æ’æ’“æ’”æ’—æ’˜æ’šæ’›æ’œæ’æ’Ÿæ’ æ’¡æ’¢æ’£æ’¥æ’¦æ’§æ’¨æ’ªæ’«æ’¯æ’±æ’²æ’³æ’´æ’¶æ’¹æ’»æ’½æ’¾æ’¿æ“æ“ƒæ“„æ“†æ“‡æ“ˆæ“‰æ“Šæ“‹æ“Œæ“æ“‘æ““æ“”æ“•æ“–æ“™æ“šï¿½".split("");for(a=0;a!=t[147].length;++a)if(t[147][a].charCodeAt(0)!==65533){r[t[147][a]]=37632+a;e[37632+a]=t[147][a]}t[148]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ“›æ“œæ“æ“Ÿæ“ æ“¡æ“£æ“¥æ“§æ“¨æ“©æ“ªæ“«æ“¬æ“­æ“®æ“¯æ“°æ“±æ“²æ“³æ“´æ“µæ“¶æ“·æ“¸æ“¹æ“ºæ“»æ“¼æ“½æ“¾æ“¿æ”æ”‚æ”ƒæ”„æ”…æ”†æ”‡æ”ˆæ”Šæ”‹æ”Œæ”æ”Žæ”æ”æ”‘æ”“æ””æ”•æ”–æ”—æ”™æ”šæ”›æ”œæ”æ”žæ”Ÿæ” æ”¡ï¿½æ”¢æ”£æ”¤æ”¦æ”§æ”¨æ”©æ”ªæ”¬æ”­æ”°æ”±æ”²æ”³æ”·æ”ºæ”¼æ”½æ•€æ•æ•‚æ•ƒæ•„æ•†æ•‡æ•Šæ•‹æ•æ•Žæ•æ•’æ•“æ•”æ•—æ•˜æ•šæ•œæ•Ÿæ• æ•¡æ•¤æ•¥æ•§æ•¨æ•©æ•ªæ•­æ•®æ•¯æ•±æ•³æ•µæ•¶æ•¸æ•¹æ•ºæ•»æ•¼æ•½æ•¾æ•¿æ–€æ–æ–‚æ–ƒæ–„æ–…æ–†æ–ˆæ–‰æ–Šæ–æ–Žæ–æ–’æ–”æ–•æ––æ–˜æ–šæ–æ–žæ– æ–¢æ–£æ–¦æ–¨æ–ªæ–¬æ–®æ–±æ–²æ–³æ–´æ–µæ–¶æ–·æ–¸æ–ºæ–»æ–¾æ–¿æ—€æ—‚æ—‡æ—ˆæ—‰æ—Šæ—æ—æ—‘æ—“æ—”æ—•æ—˜æ—™æ—šæ—›æ—œæ—æ—žæ—Ÿæ—¡æ—£æ—¤æ—ªæ—«ï¿½".split("");for(a=0;a!=t[148].length;++a)if(t[148][a].charCodeAt(0)!==65533){r[t[148][a]]=37888+a;e[37888+a]=t[148][a]}t[149]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ—²æ—³æ—´æ—µæ—¸æ—¹æ—»æ—¼æ—½æ—¾æ—¿æ˜æ˜„æ˜…æ˜‡æ˜ˆæ˜‰æ˜‹æ˜æ˜æ˜‘æ˜’æ˜–æ˜—æ˜˜æ˜šæ˜›æ˜œæ˜žæ˜¡æ˜¢æ˜£æ˜¤æ˜¦æ˜©æ˜ªæ˜«æ˜¬æ˜®æ˜°æ˜²æ˜³æ˜·æ˜¸æ˜¹æ˜ºæ˜»æ˜½æ˜¿æ™€æ™‚æ™„æ™…æ™†æ™‡æ™ˆæ™‰æ™Šæ™æ™Žæ™æ™‘æ™˜ï¿½æ™™æ™›æ™œæ™æ™žæ™ æ™¢æ™£æ™¥æ™§æ™©æ™ªæ™«æ™¬æ™­æ™±æ™²æ™³æ™µæ™¸æ™¹æ™»æ™¼æ™½æ™¿æš€æšæšƒæš…æš†æšˆæš‰æšŠæš‹æšæšŽæšæšæš’æš“æš”æš•æš˜æš™æššæš›æšœæšžæšŸæš æš¡æš¢æš£æš¤æš¥æš¦æš©æšªæš«æš¬æš­æš¯æš°æš±æš²æš³æšµæš¶æš·æš¸æšºæš»æš¼æš½æš¿æ›€æ›æ›‚æ›ƒæ›„æ›…æ›†æ›‡æ›ˆæ›‰æ›Šæ›‹æ›Œæ›æ›Žæ›æ›æ›‘æ›’æ›“æ›”æ›•æ›–æ›—æ›˜æ›šæ›žæ›Ÿæ› æ›¡æ›¢æ›£æ›¤æ›¥æ›§æ›¨æ›ªæ›«æ›¬æ›­æ›®æ›¯æ›±æ›µæ›¶æ›¸æ›ºæ›»æ›½æœæœ‚æœƒï¿½".split("");for(a=0;a!=t[149].length;++a)if(t[149][a].charCodeAt(0)!==65533){r[t[149][a]]=38144+a;e[38144+a]=t[149][a]}t[150]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æœ„æœ…æœ†æœ‡æœŒæœŽæœæœ‘æœ’æœ“æœ–æœ˜æœ™æœšæœœæœžæœ æœ¡æœ¢æœ£æœ¤æœ¥æœ§æœ©æœ®æœ°æœ²æœ³æœ¶æœ·æœ¸æœ¹æœ»æœ¼æœ¾æœ¿ææ„æ…æ‡æŠæ‹ææ’æ”æ•æ—æ˜æ™æšæ›ææ¢æ£æ¤æ¦æ§æ«æ¬æ®æ±æ´æ¶ï¿½æ¸æ¹æºæ»æ½æž€æž‚æžƒæž…æž†æžˆæžŠæžŒæžæžŽæžæž‘æž’æž“æž”æž–æž™æž›æžŸæž æž¡æž¤æž¦æž©æž¬æž®æž±æž²æž´æž¹æžºæž»æž¼æž½æž¾æž¿æŸ€æŸ‚æŸ…æŸ†æŸ‡æŸˆæŸ‰æŸŠæŸ‹æŸŒæŸæŸŽæŸ•æŸ–æŸ—æŸ›æŸŸæŸ¡æŸ£æŸ¤æŸ¦æŸ§æŸ¨æŸªæŸ«æŸ­æŸ®æŸ²æŸµæŸ¶æŸ·æŸ¸æŸ¹æŸºæŸ»æŸ¼æŸ¾æ æ ‚æ ƒæ „æ †æ æ æ ’æ ”æ •æ ˜æ ™æ šæ ›æ œæ žæ Ÿæ  æ ¢æ £æ ¤æ ¥æ ¦æ §æ ¨æ «æ ¬æ ­æ ®æ ¯æ °æ ±æ ´æ µæ ¶æ ºæ »æ ¿æ¡‡æ¡‹æ¡æ¡æ¡’æ¡–æ¡—æ¡˜æ¡™æ¡šæ¡›ï¿½".split("");for(a=0;a!=t[150].length;++a)if(t[150][a].charCodeAt(0)!==65533){r[t[150][a]]=38400+a;e[38400+a]=t[150][a]}t[151]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¡œæ¡æ¡žæ¡Ÿæ¡ªæ¡¬æ¡­æ¡®æ¡¯æ¡°æ¡±æ¡²æ¡³æ¡µæ¡¸æ¡¹æ¡ºæ¡»æ¡¼æ¡½æ¡¾æ¡¿æ¢€æ¢‚æ¢„æ¢‡æ¢ˆæ¢‰æ¢Šæ¢‹æ¢Œæ¢æ¢Žæ¢æ¢‘æ¢’æ¢”æ¢•æ¢–æ¢˜æ¢™æ¢šæ¢›æ¢œæ¢æ¢žæ¢Ÿæ¢ æ¢¡æ¢£æ¢¤æ¢¥æ¢©æ¢ªæ¢«æ¢¬æ¢®æ¢±æ¢²æ¢´æ¢¶æ¢·æ¢¸ï¿½æ¢¹æ¢ºæ¢»æ¢¼æ¢½æ¢¾æ¢¿æ£æ£ƒæ£„æ£…æ£†æ£‡æ£ˆæ£Šæ£Œæ£Žæ£æ£æ£‘æ£“æ£”æ£–æ£—æ£™æ£›æ£œæ£æ£žæ£Ÿæ£¡æ£¢æ£¤æ£¥æ£¦æ£§æ£¨æ£©æ£ªæ£«æ£¬æ£­æ£¯æ£²æ£³æ£´æ£¶æ£·æ£¸æ£»æ£½æ£¾æ£¿æ¤€æ¤‚æ¤ƒæ¤„æ¤†æ¤‡æ¤ˆæ¤‰æ¤Šæ¤Œæ¤æ¤‘æ¤“æ¤”æ¤•æ¤–æ¤—æ¤˜æ¤™æ¤šæ¤›æ¤œæ¤æ¤žæ¤¡æ¤¢æ¤£æ¤¥æ¤¦æ¤§æ¤¨æ¤©æ¤ªæ¤«æ¤¬æ¤®æ¤¯æ¤±æ¤²æ¤³æ¤µæ¤¶æ¤·æ¤¸æ¤ºæ¤»æ¤¼æ¤¾æ¥€æ¥æ¥ƒæ¥„æ¥…æ¥†æ¥‡æ¥ˆæ¥‰æ¥Šæ¥‹æ¥Œæ¥æ¥Žæ¥æ¥æ¥‘æ¥’æ¥“æ¥•æ¥–æ¥˜æ¥™æ¥›æ¥œæ¥Ÿï¿½".split("");for(a=0;a!=t[151].length;++a)if(t[151][a].charCodeAt(0)!==65533){r[t[151][a]]=38656+a;e[38656+a]=t[151][a]}t[152]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¥¡æ¥¢æ¥¤æ¥¥æ¥§æ¥¨æ¥©æ¥ªæ¥¬æ¥­æ¥¯æ¥°æ¥²æ¥³æ¥´æ¥µæ¥¶æ¥ºæ¥»æ¥½æ¥¾æ¥¿æ¦æ¦ƒæ¦…æ¦Šæ¦‹æ¦Œæ¦Žæ¦æ¦æ¦‘æ¦’æ¦“æ¦–æ¦—æ¦™æ¦šæ¦æ¦žæ¦Ÿæ¦ æ¦¡æ¦¢æ¦£æ¦¤æ¦¥æ¦¦æ¦©æ¦ªæ¦¬æ¦®æ¦¯æ¦°æ¦²æ¦³æ¦µæ¦¶æ¦¸æ¦¹æ¦ºæ¦¼æ¦½ï¿½æ¦¾æ¦¿æ§€æ§‚æ§ƒæ§„æ§…æ§†æ§‡æ§ˆæ§‰æ§‹æ§æ§æ§‘æ§’æ§“æ§•æ§–æ§—æ§˜æ§™æ§šæ§œæ§æ§žæ§¡æ§¢æ§£æ§¤æ§¥æ§¦æ§§æ§¨æ§©æ§ªæ§«æ§¬æ§®æ§¯æ§°æ§±æ§³æ§´æ§µæ§¶æ§·æ§¸æ§¹æ§ºæ§»æ§¼æ§¾æ¨€æ¨æ¨‚æ¨ƒæ¨„æ¨…æ¨†æ¨‡æ¨ˆæ¨‰æ¨‹æ¨Œæ¨æ¨Žæ¨æ¨æ¨‘æ¨’æ¨“æ¨”æ¨•æ¨–æ¨™æ¨šæ¨›æ¨œæ¨æ¨žæ¨ æ¨¢æ¨£æ¨¤æ¨¥æ¨¦æ¨§æ¨©æ¨«æ¨¬æ¨­æ¨®æ¨°æ¨²æ¨³æ¨´æ¨¶æ¨·æ¨¸æ¨¹æ¨ºæ¨»æ¨¼æ¨¿æ©€æ©æ©‚æ©ƒæ©…æ©†æ©ˆæ©‰æ©Šæ©‹æ©Œæ©æ©Žæ©æ©‘æ©’æ©“æ©”æ©•æ©–æ©—æ©šï¿½".split("");for(a=0;a!=t[152].length;++a)if(t[152][a].charCodeAt(0)!==65533){r[t[152][a]]=38912+a;e[38912+a]=t[152][a];
}t[153]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ©œæ©æ©žæ©Ÿæ© æ©¢æ©£æ©¤æ©¦æ©§æ©¨æ©©æ©ªæ©«æ©¬æ©­æ©®æ©¯æ©°æ©²æ©³æ©´æ©µæ©¶æ©·æ©¸æ©ºæ©»æ©½æ©¾æ©¿æªæª‚æªƒæª…æª†æª‡æªˆæª‰æªŠæª‹æªŒæªæªæª’æª“æª”æª•æª–æª˜æª™æªšæª›æªœæªæªžæªŸæª¡æª¢æª£æª¤æª¥æª¦ï¿½æª§æª¨æªªæª­æª®æª¯æª°æª±æª²æª³æª´æªµæª¶æª·æª¸æª¹æªºæª»æª¼æª½æª¾æª¿æ«€æ«æ«‚æ«ƒæ«„æ«…æ«†æ«‡æ«ˆæ«‰æ«Šæ«‹æ«Œæ«æ«Žæ«æ«æ«‘æ«’æ«“æ«”æ«•æ«–æ«—æ«˜æ«™æ«šæ«›æ«œæ«æ«žæ«Ÿæ« æ«¡æ«¢æ«£æ«¤æ«¥æ«¦æ«§æ«¨æ«©æ«ªæ««æ«¬æ«­æ«®æ«¯æ«°æ«±æ«²æ«³æ«´æ«µæ«¶æ«·æ«¸æ«¹æ«ºæ«»æ«¼æ«½æ«¾æ«¿æ¬€æ¬æ¬‚æ¬ƒæ¬„æ¬…æ¬†æ¬‡æ¬ˆæ¬‰æ¬Šæ¬‹æ¬Œæ¬æ¬Žæ¬æ¬æ¬‘æ¬’æ¬“æ¬”æ¬•æ¬–æ¬—æ¬˜æ¬™æ¬šæ¬›æ¬œæ¬æ¬žæ¬Ÿæ¬¥æ¬¦æ¬¨æ¬©æ¬ªæ¬«æ¬¬æ¬­æ¬®ï¿½".split("");for(a=0;a!=t[153].length;++a)if(t[153][a].charCodeAt(0)!==65533){r[t[153][a]]=39168+a;e[39168+a]=t[153][a]}t[154]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¬¯æ¬°æ¬±æ¬³æ¬´æ¬µæ¬¶æ¬¸æ¬»æ¬¼æ¬½æ¬¿æ­€æ­æ­‚æ­„æ­…æ­ˆæ­Šæ­‹æ­æ­Žæ­æ­æ­‘æ­’æ­“æ­”æ­•æ­–æ­—æ­˜æ­šæ­›æ­œæ­æ­žæ­Ÿæ­ æ­¡æ­¨æ­©æ­«æ­¬æ­­æ­®æ­¯æ­°æ­±æ­²æ­³æ­´æ­µæ­¶æ­·æ­¸æ­ºæ­½æ­¾æ­¿æ®€æ®…æ®ˆï¿½æ®Œæ®Žæ®æ®æ®‘æ®”æ®•æ®—æ®˜æ®™æ®œæ®æ®žæ®Ÿæ® æ®¢æ®£æ®¤æ®¥æ®¦æ®§æ®¨æ®©æ®«æ®¬æ®­æ®®æ®¯æ®°æ®±æ®²æ®¶æ®¸æ®¹æ®ºæ®»æ®¼æ®½æ®¾æ¯€æ¯ƒæ¯„æ¯†æ¯‡æ¯ˆæ¯‰æ¯Šæ¯Œæ¯Žæ¯æ¯‘æ¯˜æ¯šæ¯œæ¯æ¯žæ¯Ÿæ¯ æ¯¢æ¯£æ¯¤æ¯¥æ¯¦æ¯§æ¯¨æ¯©æ¯¬æ¯­æ¯®æ¯°æ¯±æ¯²æ¯´æ¯¶æ¯·æ¯¸æ¯ºæ¯»æ¯¼æ¯¾æ¯¿æ°€æ°æ°‚æ°ƒæ°„æ°ˆæ°‰æ°Šæ°‹æ°Œæ°Žæ°’æ°—æ°œæ°æ°žæ° æ°£æ°¥æ°«æ°¬æ°­æ°±æ°³æ°¶æ°·æ°¹æ°ºæ°»æ°¼æ°¾æ°¿æ±ƒæ±„æ±…æ±ˆæ±‹æ±Œæ±æ±Žæ±æ±‘æ±’æ±“æ±–æ±˜ï¿½".split("");for(a=0;a!=t[154].length;++a)if(t[154][a].charCodeAt(0)!==65533){r[t[154][a]]=39424+a;e[39424+a]=t[154][a]}t[155]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ±™æ±šæ±¢æ±£æ±¥æ±¦æ±§æ±«æ±¬æ±­æ±®æ±¯æ±±æ±³æ±µæ±·æ±¸æ±ºæ±»æ±¼æ±¿æ²€æ²„æ²‡æ²Šæ²‹æ²æ²Žæ²‘æ²’æ²•æ²–æ²—æ²˜æ²šæ²œæ²æ²žæ² æ²¢æ²¨æ²¬æ²¯æ²°æ²´æ²µæ²¶æ²·æ²ºæ³€æ³æ³‚æ³ƒæ³†æ³‡æ³ˆæ³‹æ³æ³Žæ³æ³‘æ³’æ³˜ï¿½æ³™æ³šæ³œæ³æ³Ÿæ³¤æ³¦æ³§æ³©æ³¬æ³­æ³²æ³´æ³¹æ³¿æ´€æ´‚æ´ƒæ´…æ´†æ´ˆæ´‰æ´Šæ´æ´æ´æ´‘æ´“æ´”æ´•æ´–æ´˜æ´œæ´æ´Ÿæ´ æ´¡æ´¢æ´£æ´¤æ´¦æ´¨æ´©æ´¬æ´­æ´¯æ´°æ´´æ´¶æ´·æ´¸æ´ºæ´¿æµ€æµ‚æµ„æµ‰æµŒæµæµ•æµ–æµ—æµ˜æµ›æµæµŸæµ¡æµ¢æµ¤æµ¥æµ§æµ¨æµ«æµ¬æµ­æµ°æµ±æµ²æµ³æµµæµ¶æµ¹æµºæµ»æµ½æµ¾æµ¿æ¶€æ¶æ¶ƒæ¶„æ¶†æ¶‡æ¶Šæ¶‹æ¶æ¶æ¶æ¶’æ¶–æ¶—æ¶˜æ¶™æ¶šæ¶œæ¶¢æ¶¥æ¶¬æ¶­æ¶°æ¶±æ¶³æ¶´æ¶¶æ¶·æ¶¹æ¶ºæ¶»æ¶¼æ¶½æ¶¾æ·æ·‚æ·ƒæ·ˆæ·‰æ·Šï¿½".split("");for(a=0;a!=t[155].length;++a)if(t[155][a].charCodeAt(0)!==65533){r[t[155][a]]=39680+a;e[39680+a]=t[155][a]}t[156]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ·æ·Žæ·æ·æ·’æ·“æ·”æ·•æ·—æ·šæ·›æ·œæ·Ÿæ·¢æ·£æ·¥æ·§æ·¨æ·©æ·ªæ·­æ·¯æ·°æ·²æ·´æ·µæ·¶æ·¸æ·ºæ·½æ·¾æ·¿æ¸€æ¸æ¸‚æ¸ƒæ¸„æ¸†æ¸‡æ¸ˆæ¸‰æ¸‹æ¸æ¸’æ¸“æ¸•æ¸˜æ¸™æ¸›æ¸œæ¸žæ¸Ÿæ¸¢æ¸¦æ¸§æ¸¨æ¸ªæ¸¬æ¸®æ¸°æ¸±æ¸³æ¸µï¿½æ¸¶æ¸·æ¸¹æ¸»æ¸¼æ¸½æ¸¾æ¸¿æ¹€æ¹æ¹‚æ¹…æ¹†æ¹‡æ¹ˆæ¹‰æ¹Šæ¹‹æ¹Œæ¹æ¹æ¹‘æ¹’æ¹•æ¹—æ¹™æ¹šæ¹œæ¹æ¹žæ¹ æ¹¡æ¹¢æ¹£æ¹¤æ¹¥æ¹¦æ¹§æ¹¨æ¹©æ¹ªæ¹¬æ¹­æ¹¯æ¹°æ¹±æ¹²æ¹³æ¹´æ¹µæ¹¶æ¹·æ¹¸æ¹¹æ¹ºæ¹»æ¹¼æ¹½æº€æºæº‚æº„æº‡æºˆæºŠæº‹æºŒæºæºŽæº‘æº’æº“æº”æº•æº–æº—æº™æºšæº›æºæºžæº æº¡æº£æº¤æº¦æº¨æº©æº«æº¬æº­æº®æº°æº³æºµæº¸æº¹æº¼æº¾æº¿æ»€æ»ƒæ»„æ»…æ»†æ»ˆæ»‰æ»Šæ»Œæ»æ»Žæ»æ»’æ»–æ»˜æ»™æ»›æ»œæ»æ»£æ»§æ»ªæ»«æ»¬æ»­æ»®æ»¯ï¿½".split("");for(a=0;a!=t[156].length;++a)if(t[156][a].charCodeAt(0)!==65533){r[t[156][a]]=39936+a;e[39936+a]=t[156][a]}t[157]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ»°æ»±æ»²æ»³æ»µæ»¶æ»·æ»¸æ»ºæ»»æ»¼æ»½æ»¾æ»¿æ¼€æ¼æ¼ƒæ¼„æ¼…æ¼‡æ¼ˆæ¼Šæ¼‹æ¼Œæ¼æ¼Žæ¼æ¼‘æ¼’æ¼–æ¼—æ¼˜æ¼™æ¼šæ¼›æ¼œæ¼æ¼žæ¼Ÿæ¼¡æ¼¢æ¼£æ¼¥æ¼¦æ¼§æ¼¨æ¼¬æ¼®æ¼°æ¼²æ¼´æ¼µæ¼·æ¼¸æ¼¹æ¼ºæ¼»æ¼¼æ¼½æ¼¿æ½€æ½æ½‚ï¿½æ½ƒæ½„æ½…æ½ˆæ½‰æ½Šæ½Œæ½Žæ½æ½æ½‘æ½’æ½“æ½”æ½•æ½–æ½—æ½™æ½šæ½›æ½æ½Ÿæ½ æ½¡æ½£æ½¤æ½¥æ½§æ½¨æ½©æ½ªæ½«æ½¬æ½¯æ½°æ½±æ½³æ½µæ½¶æ½·æ½¹æ½»æ½½æ½¾æ½¿æ¾€æ¾æ¾‚æ¾ƒæ¾…æ¾†æ¾‡æ¾Šæ¾‹æ¾æ¾æ¾‘æ¾’æ¾“æ¾”æ¾•æ¾–æ¾—æ¾˜æ¾™æ¾šæ¾›æ¾æ¾žæ¾Ÿæ¾ æ¾¢æ¾£æ¾¤æ¾¥æ¾¦æ¾¨æ¾©æ¾ªæ¾«æ¾¬æ¾­æ¾®æ¾¯æ¾°æ¾±æ¾²æ¾´æ¾µæ¾·æ¾¸æ¾ºæ¾»æ¾¼æ¾½æ¾¾æ¾¿æ¿æ¿ƒæ¿„æ¿…æ¿†æ¿‡æ¿ˆæ¿Šæ¿‹æ¿Œæ¿æ¿Žæ¿æ¿æ¿“æ¿”æ¿•æ¿–æ¿—æ¿˜æ¿™æ¿šæ¿›æ¿œæ¿æ¿Ÿæ¿¢æ¿£æ¿¤æ¿¥ï¿½".split("");for(a=0;a!=t[157].length;++a)if(t[157][a].charCodeAt(0)!==65533){r[t[157][a]]=40192+a;e[40192+a]=t[157][a]}t[158]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¿¦æ¿§æ¿¨æ¿©æ¿ªæ¿«æ¿¬æ¿­æ¿°æ¿±æ¿²æ¿³æ¿´æ¿µæ¿¶æ¿·æ¿¸æ¿¹æ¿ºæ¿»æ¿¼æ¿½æ¿¾æ¿¿ç€€ç€ç€‚ç€ƒç€„ç€…ç€†ç€‡ç€ˆç€‰ç€Šç€‹ç€Œç€ç€Žç€ç€ç€’ç€“ç€”ç€•ç€–ç€—ç€˜ç€™ç€œç€ç€žç€Ÿç€ ç€¡ç€¢ç€¤ç€¥ç€¦ç€§ç€¨ç€©ç€ªï¿½ç€«ç€¬ç€­ç€®ç€¯ç€°ç€±ç€²ç€³ç€´ç€¶ç€·ç€¸ç€ºç€»ç€¼ç€½ç€¾ç€¿ç€çç‚çƒç„ç…ç†ç‡çˆç‰çŠç‹ççŽçç‘ç’ç“ç”ç•ç–ç—ç˜ç™çšç›çœççŸç ç¡ç¢ç£ç¤ç¥ç¦ç§ç¨ç©çªç®ç±ç²ç³ç´ç·ç¹çºç»ç½ç‚ç‚‚ç‚ƒç‚„ç‚†ç‚‡ç‚ˆç‚‹ç‚Œç‚ç‚ç‚ç‚‘ç‚“ç‚—ç‚˜ç‚šç‚›ç‚žç‚Ÿç‚ ç‚¡ç‚¢ç‚£ç‚¤ç‚¥ç‚¦ç‚§ç‚¨ç‚©ç‚ªç‚°ç‚²ç‚´ç‚µç‚¶ç‚ºç‚¾ç‚¿çƒ„çƒ…çƒ†çƒ‡çƒ‰çƒ‹çƒŒçƒçƒŽçƒçƒçƒ‘çƒ’çƒ“çƒ”çƒ•çƒ–çƒ—çƒšï¿½".split("");for(a=0;a!=t[158].length;++a)if(t[158][a].charCodeAt(0)!==65533){r[t[158][a]]=40448+a;e[40448+a]=t[158][a]}t[159]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çƒœçƒçƒžçƒ çƒ¡çƒ¢çƒ£çƒ¥çƒªçƒ®çƒ°çƒ±çƒ²çƒ³çƒ´çƒµçƒ¶çƒ¸çƒºçƒ»çƒ¼çƒ¾çƒ¿ç„€ç„ç„‚ç„ƒç„„ç„…ç„†ç„‡ç„ˆç„‹ç„Œç„ç„Žç„ç„‘ç„’ç„”ç„—ç„›ç„œç„ç„žç„Ÿç„ ç„¡ç„¢ç„£ç„¤ç„¥ç„§ç„¨ç„©ç„ªç„«ç„¬ç„­ç„®ç„²ç„³ç„´ï¿½ç„µç„·ç„¸ç„¹ç„ºç„»ç„¼ç„½ç„¾ç„¿ç…€ç…ç…‚ç…ƒç…„ç…†ç…‡ç…ˆç…‰ç…‹ç…ç…ç…ç…‘ç…’ç…“ç…”ç…•ç…–ç…—ç…˜ç…™ç…šç…›ç…ç…Ÿç… ç…¡ç…¢ç…£ç…¥ç…©ç…ªç…«ç…¬ç…­ç…¯ç…°ç…±ç…´ç…µç…¶ç…·ç…¹ç…»ç…¼ç…¾ç…¿ç†€ç†ç†‚ç†ƒç†…ç††ç†‡ç†ˆç†‰ç†‹ç†Œç†ç†Žç†ç†‘ç†’ç†“ç†•ç†–ç†—ç†šç†›ç†œç†ç†žç†¡ç†¢ç†£ç†¤ç†¥ç†¦ç†§ç†©ç†ªç†«ç†­ç†®ç†¯ç†°ç†±ç†²ç†´ç†¶ç†·ç†¸ç†ºç†»ç†¼ç†½ç†¾ç†¿ç‡€ç‡ç‡‚ç‡„ç‡…ç‡†ç‡‡ç‡ˆç‡‰ç‡Šç‡‹ç‡Œç‡ç‡ç‡ç‡‘ç‡’ç‡“ï¿½".split("");for(a=0;a!=t[159].length;++a)if(t[159][a].charCodeAt(0)!==65533){r[t[159][a]]=40704+a;e[40704+a]=t[159][a]}t[160]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç‡–ç‡—ç‡˜ç‡™ç‡šç‡›ç‡œç‡ç‡žç‡Ÿç‡¡ç‡¢ç‡£ç‡¤ç‡¦ç‡¨ç‡©ç‡ªç‡«ç‡¬ç‡­ç‡¯ç‡°ç‡±ç‡²ç‡³ç‡´ç‡µç‡¶ç‡·ç‡¸ç‡ºç‡»ç‡¼ç‡½ç‡¾ç‡¿çˆ€çˆçˆ‚çˆƒçˆ„çˆ…çˆ‡çˆˆçˆ‰çˆŠçˆ‹çˆŒçˆçˆŽçˆçˆçˆ‘çˆ’çˆ“çˆ”çˆ•çˆ–çˆ—çˆ˜çˆ™çˆšï¿½çˆ›çˆœçˆžçˆŸçˆ çˆ¡çˆ¢çˆ£çˆ¤çˆ¥çˆ¦çˆ§çˆ©çˆ«çˆ­çˆ®çˆ¯çˆ²çˆ³çˆ´çˆºçˆ¼çˆ¾ç‰€ç‰ç‰‚ç‰ƒç‰„ç‰…ç‰†ç‰‰ç‰Šç‰‹ç‰Žç‰ç‰ç‰‘ç‰“ç‰”ç‰•ç‰—ç‰˜ç‰šç‰œç‰žç‰ ç‰£ç‰¤ç‰¥ç‰¨ç‰ªç‰«ç‰¬ç‰­ç‰°ç‰±ç‰³ç‰´ç‰¶ç‰·ç‰¸ç‰»ç‰¼ç‰½çŠ‚çŠƒçŠ…çŠ†çŠ‡çŠˆçŠ‰çŠŒçŠŽçŠçŠ‘çŠ“çŠ”çŠ•çŠ–çŠ—çŠ˜çŠ™çŠšçŠ›çŠœçŠçŠžçŠ çŠ¡çŠ¢çŠ£çŠ¤çŠ¥çŠ¦çŠ§çŠ¨çŠ©çŠªçŠ«çŠ®çŠ±çŠ²çŠ³çŠµçŠºçŠ»çŠ¼çŠ½çŠ¾çŠ¿ç‹€ç‹…ç‹†ç‹‡ç‹‰ç‹Šç‹‹ç‹Œç‹ç‹‘ç‹“ç‹”ç‹•ç‹–ç‹˜ç‹šç‹›ï¿½".split("");for(a=0;a!=t[160].length;++a)if(t[160][a].charCodeAt(0)!==65533){r[t[160][a]]=40960+a;e[40960+a]=t[160][a]}t[161]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ã€€ã€ã€‚Â·Ë‰Ë‡Â¨ã€ƒã€…â€”ï½žâ€–â€¦â€˜â€™â€œâ€ã€”ã€•ã€ˆã€‰ã€Šã€‹ã€Œã€ã€Žã€ã€–ã€—ã€ã€‘Â±Ã—Ã·âˆ¶âˆ§âˆ¨âˆ‘âˆâˆªâˆ©âˆˆâˆ·âˆšâŠ¥âˆ¥âˆ âŒ’âŠ™âˆ«âˆ®â‰¡â‰Œâ‰ˆâˆ½âˆâ‰ â‰®â‰¯â‰¤â‰¥âˆžâˆµâˆ´â™‚â™€Â°â€²â€³â„ƒï¼„Â¤ï¿ ï¿¡â€°Â§â„–â˜†â˜…â—‹â—â—Žâ—‡â—†â–¡â– â–³â–²â€»â†’â†â†‘â†“ã€“ï¿½".split("");for(a=0;a!=t[161].length;++a)if(t[161][a].charCodeAt(0)!==65533){r[t[161][a]]=41216+a;e[41216+a]=t[161][a]}t[162]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½â…°â…±â…²â…³â…´â…µâ…¶â…·â…¸â…¹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½â’ˆâ’‰â’Šâ’‹â’Œâ’â’Žâ’â’â’‘â’’â’“â’”â’•â’–â’—â’˜â’™â’šâ’›â‘´â‘µâ‘¶â‘·â‘¸â‘¹â‘ºâ‘»â‘¼â‘½â‘¾â‘¿â’€â’â’‚â’ƒâ’„â’…â’†â’‡â‘ â‘¡â‘¢â‘£â‘¤â‘¥â‘¦â‘§â‘¨â‘©ï¿½ï¿½ãˆ ãˆ¡ãˆ¢ãˆ£ãˆ¤ãˆ¥ãˆ¦ãˆ§ãˆ¨ãˆ©ï¿½ï¿½â… â…¡â…¢â…£â…¤â…¥â…¦â…§â…¨â…©â…ªâ…«ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[162].length;++a)if(t[162][a].charCodeAt(0)!==65533){r[t[162][a]]=41472+a;e[41472+a]=t[162][a]}t[163]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¼ï¼‚ï¼ƒï¿¥ï¼…ï¼†ï¼‡ï¼ˆï¼‰ï¼Šï¼‹ï¼Œï¼ï¼Žï¼ï¼ï¼‘ï¼’ï¼“ï¼”ï¼•ï¼–ï¼—ï¼˜ï¼™ï¼šï¼›ï¼œï¼ï¼žï¼Ÿï¼ ï¼¡ï¼¢ï¼£ï¼¤ï¼¥ï¼¦ï¼§ï¼¨ï¼©ï¼ªï¼«ï¼¬ï¼­ï¼®ï¼¯ï¼°ï¼±ï¼²ï¼³ï¼´ï¼µï¼¶ï¼·ï¼¸ï¼¹ï¼ºï¼»ï¼¼ï¼½ï¼¾ï¼¿ï½€ï½ï½‚ï½ƒï½„ï½…ï½†ï½‡ï½ˆï½‰ï½Šï½‹ï½Œï½ï½Žï½ï½ï½‘ï½’ï½“ï½”ï½•ï½–ï½—ï½˜ï½™ï½šï½›ï½œï½ï¿£ï¿½".split("");for(a=0;a!=t[163].length;++a)if(t[163][a].charCodeAt(0)!==65533){r[t[163][a]]=41728+a;e[41728+a]=t[163][a]}t[164]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ãã‚ãƒã„ã…ã†ã‡ãˆã‰ãŠã‹ãŒããŽããã‘ã’ã“ã”ã•ã–ã—ã˜ã™ãšã›ãœããžãŸã ã¡ã¢ã£ã¤ã¥ã¦ã§ã¨ã©ãªã«ã¬ã­ã®ã¯ã°ã±ã²ã³ã´ãµã¶ã·ã¸ã¹ãºã»ã¼ã½ã¾ã¿ã‚€ã‚ã‚‚ã‚ƒã‚„ã‚…ã‚†ã‚‡ã‚ˆã‚‰ã‚Šã‚‹ã‚Œã‚ã‚Žã‚ã‚ã‚‘ã‚’ã‚“ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[164].length;++a)if(t[164][a].charCodeAt(0)!==65533){r[t[164][a]]=41984+a;e[41984+a]=t[164][a]}t[165]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ã‚¡ã‚¢ã‚£ã‚¤ã‚¥ã‚¦ã‚§ã‚¨ã‚©ã‚ªã‚«ã‚¬ã‚­ã‚®ã‚¯ã‚°ã‚±ã‚²ã‚³ã‚´ã‚µã‚¶ã‚·ã‚¸ã‚¹ã‚ºã‚»ã‚¼ã‚½ã‚¾ã‚¿ãƒ€ãƒãƒ‚ãƒƒãƒ„ãƒ…ãƒ†ãƒ‡ãƒˆãƒ‰ãƒŠãƒ‹ãƒŒãƒãƒŽãƒãƒãƒ‘ãƒ’ãƒ“ãƒ”ãƒ•ãƒ–ãƒ—ãƒ˜ãƒ™ãƒšãƒ›ãƒœãƒãƒžãƒŸãƒ ãƒ¡ãƒ¢ãƒ£ãƒ¤ãƒ¥ãƒ¦ãƒ§ãƒ¨ãƒ©ãƒªãƒ«ãƒ¬ãƒ­ãƒ®ãƒ¯ãƒ°ãƒ±ãƒ²ãƒ³ãƒ´ãƒµãƒ¶ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[165].length;++a)if(t[165][a].charCodeAt(0)!==65533){r[t[165][a]]=42240+a;e[42240+a]=t[165][a]}t[166]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Î‘Î’Î“Î”Î•Î–Î—Î˜Î™ÎšÎ›ÎœÎÎžÎŸÎ Î¡Î£Î¤Î¥Î¦Î§Î¨Î©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Î±Î²Î³Î´ÎµÎ¶Î·Î¸Î¹ÎºÎ»Î¼Î½Î¾Î¿Ï€ÏÏƒÏ„Ï…Ï†Ï‡ÏˆÏ‰ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¸µï¸¶ï¸¹ï¸ºï¸¿ï¹€ï¸½ï¸¾ï¹ï¹‚ï¹ƒï¹„ï¿½ï¿½ï¸»ï¸¼ï¸·ï¸¸ï¸±ï¿½ï¸³ï¸´ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[166].length;++a)if(t[166][a].charCodeAt(0)!==65533){r[t[166][a]]=42496+a;e[42496+a]=t[166][a]}t[167]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ÐÐ‘Ð’Ð“Ð”Ð•ÐÐ–Ð—Ð˜Ð™ÐšÐ›ÐœÐÐžÐŸÐ Ð¡Ð¢Ð£Ð¤Ð¥Ð¦Ð§Ð¨Ð©ÐªÐ«Ð¬Ð­Ð®Ð¯ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ð°Ð±Ð²Ð³Ð´ÐµÑ‘Ð¶Ð·Ð¸Ð¹ÐºÐ»Ð¼Ð½Ð¾Ð¿Ñ€ÑÑ‚ÑƒÑ„Ñ…Ñ†Ñ‡ÑˆÑ‰ÑŠÑ‹ÑŒÑÑŽÑï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[167].length;++a)if(t[167][a].charCodeAt(0)!==65533){r[t[167][a]]=42752+a;e[42752+a]=t[167][a]}t[168]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ËŠË‹Ë™â€“â€•â€¥â€µâ„…â„‰â†–â†—â†˜â†™âˆ•âˆŸâˆ£â‰’â‰¦â‰§âŠ¿â•â•‘â•’â•“â•”â••â•–â•—â•˜â•™â•šâ•›â•œâ•â•žâ•Ÿâ• â•¡â•¢â•£â•¤â•¥â•¦â•§â•¨â•©â•ªâ•«â•¬â•­â•®â•¯â•°â•±â•²â•³â–â–‚â–ƒâ–„â–…â–†â–‡ï¿½â–ˆâ–‰â–Šâ–‹â–Œâ–â–Žâ–â–“â–”â–•â–¼â–½â—¢â—£â—¤â—¥â˜‰âŠ•ã€’ã€ã€žï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ÄÃ¡ÇŽÃ Ä“Ã©Ä›Ã¨Ä«Ã­ÇÃ¬ÅÃ³Ç’Ã²Å«ÃºÇ”Ã¹Ç–Ç˜ÇšÇœÃ¼ÃªÉ‘ï¿½Å„Åˆï¿½É¡ï¿½ï¿½ï¿½ï¿½ã„…ã„†ã„‡ã„ˆã„‰ã„Šã„‹ã„Œã„ã„Žã„ã„ã„‘ã„’ã„“ã„”ã„•ã„–ã„—ã„˜ã„™ã„šã„›ã„œã„ã„žã„Ÿã„ ã„¡ã„¢ã„£ã„¤ã„¥ã„¦ã„§ã„¨ã„©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[168].length;++a)if(t[168][a].charCodeAt(0)!==65533){r[t[168][a]]=43008+a;e[43008+a]=t[168][a]}t[169]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ã€¡ã€¢ã€£ã€¤ã€¥ã€¦ã€§ã€¨ã€©ãŠ£ãŽŽãŽãŽœãŽãŽžãŽ¡ã„ãŽã‘ã’ã•ï¸°ï¿¢ï¿¤ï¿½â„¡ãˆ±ï¿½â€ï¿½ï¿½ï¿½ãƒ¼ã‚›ã‚œãƒ½ãƒ¾ã€†ã‚ã‚žï¹‰ï¹Šï¹‹ï¹Œï¹ï¹Žï¹ï¹ï¹‘ï¹’ï¹”ï¹•ï¹–ï¹—ï¹™ï¹šï¹›ï¹œï¹ï¹žï¹Ÿï¹ ï¹¡ï¿½ï¹¢ï¹£ï¹¤ï¹¥ï¹¦ï¹¨ï¹©ï¹ªï¹«ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ã€‡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½â”€â”â”‚â”ƒâ”„â”…â”†â”‡â”ˆâ”‰â”Šâ”‹â”Œâ”â”Žâ”â”â”‘â”’â”“â””â”•â”–â”—â”˜â”™â”šâ”›â”œâ”â”žâ”Ÿâ” â”¡â”¢â”£â”¤â”¥â”¦â”§â”¨â”©â”ªâ”«â”¬â”­â”®â”¯â”°â”±â”²â”³â”´â”µâ”¶â”·â”¸â”¹â”ºâ”»â”¼â”½â”¾â”¿â•€â•â•‚â•ƒâ•„â•…â•†â•‡â•ˆâ•‰â•Šâ•‹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[169].length;++a)if(t[169][a].charCodeAt(0)!==65533){r[t[169][a]]=43264+a;e[43264+a]=t[169][a]}t[170]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç‹œç‹ç‹Ÿç‹¢ç‹£ç‹¤ç‹¥ç‹¦ç‹§ç‹ªç‹«ç‹µç‹¶ç‹¹ç‹½ç‹¾ç‹¿çŒ€çŒ‚çŒ„çŒ…çŒ†çŒ‡çŒˆçŒ‰çŒ‹çŒŒçŒçŒçŒçŒ‘çŒ’çŒ”çŒ˜çŒ™çŒšçŒŸçŒ çŒ£çŒ¤çŒ¦çŒ§çŒ¨çŒ­çŒ¯çŒ°çŒ²çŒ³çŒµçŒ¶çŒºçŒ»çŒ¼çŒ½ç€çç‚çƒç„ç…ç†ç‡çˆï¿½ç‰çŠç‹çŒçŽçç‘ç“ç”ç•ç–ç˜ç™çšç›çœççžçŸç¡ç¢ç£ç¤ç¥ç¦ç§ç¨ç©çªç«ç®ç°ç±ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[170].length;++a)if(t[170][a].charCodeAt(0)!==65533){r[t[170][a]]=43520+a;e[43520+a]=t[170][a]}t[171]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç²ç³ç´çµç¶ç·ç¸ç¹çºç»ç¼ç½ç¿çŽ€çŽçŽ‚çŽƒçŽ…çŽ†çŽˆçŽŠçŽŒçŽçŽçŽçŽ’çŽ“çŽ”çŽ•çŽ—çŽ˜çŽ™çŽšçŽœçŽçŽžçŽ çŽ¡çŽ£çŽ¤çŽ¥çŽ¦çŽ§çŽ¨çŽªçŽ¬çŽ­çŽ±çŽ´çŽµçŽ¶çŽ¸çŽ¹çŽ¼çŽ½çŽ¾çŽ¿ççƒç„ç…ç†ç‡ï¿½ç‹çŒçŽç’ç“ç”ç•ç–ç—ç˜çšç›çœççŸç¡ç¢ç£ç¤ç¦ç¨çªç«ç¬ç®ç¯ç°ç±ç³ç´çµç¶ç·ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[171].length;++a)if(t[171][a].charCodeAt(0)!==65533){r[t[171][a]]=43776+a;e[43776+a]=t[171][a]}t[172]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¸ç¹çºç»ç¼ç½ç¾ç¿ç€çç‚ç„ç‡çˆç‹çŒççŽç‘ç’ç“ç”ç•ç–ç—ç˜ç™çœççžçŸç ç¡ç£ç¤ç§ç©ç«ç­ç¯ç±ç²ç·ç¸ç¹çºç»ç½ç¾ç¿ç‘€ç‘‚ç‘ƒç‘„ç‘…ç‘†ç‘‡ç‘ˆç‘‰ç‘Šç‘‹ç‘Œç‘ï¿½ç‘Žç‘ç‘ç‘‘ç‘’ç‘“ç‘”ç‘–ç‘˜ç‘ç‘ ç‘¡ç‘¢ç‘£ç‘¤ç‘¥ç‘¦ç‘§ç‘¨ç‘©ç‘ªç‘«ç‘¬ç‘®ç‘¯ç‘±ç‘²ç‘³ç‘´ç‘µç‘¸ç‘¹ç‘ºï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[172].length;++a)if(t[172][a].charCodeAt(0)!==65533){r[t[172][a]]=44032+a;e[44032+a]=t[172][a]}t[173]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç‘»ç‘¼ç‘½ç‘¿ç’‚ç’„ç’…ç’†ç’ˆç’‰ç’Šç’Œç’ç’ç’‘ç’’ç’“ç’”ç’•ç’–ç’—ç’˜ç’™ç’šç’›ç’ç’Ÿç’ ç’¡ç’¢ç’£ç’¤ç’¥ç’¦ç’ªç’«ç’¬ç’­ç’®ç’¯ç’°ç’±ç’²ç’³ç’´ç’µç’¶ç’·ç’¸ç’¹ç’»ç’¼ç’½ç’¾ç’¿ç“€ç“ç“‚ç“ƒç“„ç“…ç“†ç“‡ï¿½ç“ˆç“‰ç“Šç“‹ç“Œç“ç“Žç“ç“ç“‘ç““ç“”ç“•ç“–ç“—ç“˜ç“™ç“šç“›ç“ç“Ÿç“¡ç“¥ç“§ç“¨ç“©ç“ªç“«ç“¬ç“­ç“°ç“±ç“²ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[173].length;++a)if(t[173][a].charCodeAt(0)!==65533){r[t[173][a]]=44288+a;e[44288+a]=t[173][a]}t[174]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç“³ç“µç“¸ç“¹ç“ºç“»ç“¼ç“½ç“¾ç”€ç”ç”‚ç”ƒç”…ç”†ç”‡ç”ˆç”‰ç”Šç”‹ç”Œç”Žç”ç”’ç””ç”•ç”–ç”—ç”›ç”ç”žç” ç”¡ç”¢ç”£ç”¤ç”¦ç”§ç”ªç”®ç”´ç”¶ç”¹ç”¼ç”½ç”¿ç•ç•‚ç•ƒç•„ç•†ç•‡ç•‰ç•Šç•ç•ç•‘ç•’ç•“ç••ç•–ç•—ç•˜ï¿½ç•ç•žç•Ÿç• ç•¡ç•¢ç•£ç•¤ç•§ç•¨ç•©ç•«ç•¬ç•­ç•®ç•¯ç•°ç•±ç•³ç•µç•¶ç•·ç•ºç•»ç•¼ç•½ç•¾ç–€ç–ç–‚ç–„ç–…ç–‡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[174].length;++a)if(t[174][a].charCodeAt(0)!==65533){r[t[174][a]]=44544+a;e[44544+a]=t[174][a]}t[175]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç–ˆç–‰ç–Šç–Œç–ç–Žç–ç–“ç–•ç–˜ç–›ç–œç–žç–¢ç–¦ç–§ç–¨ç–©ç–ªç–­ç–¶ç–·ç–ºç–»ç–¿ç—€ç—ç—†ç—‹ç—Œç—Žç—ç—ç—‘ç—“ç——ç—™ç—šç—œç—ç—Ÿç— ç—¡ç—¥ç—©ç—¬ç—­ç—®ç—¯ç—²ç—³ç—µç—¶ç—·ç—¸ç—ºç—»ç—½ç—¾ç˜‚ç˜„ç˜†ç˜‡ï¿½ç˜ˆç˜‰ç˜‹ç˜ç˜Žç˜ç˜‘ç˜’ç˜“ç˜”ç˜–ç˜šç˜œç˜ç˜žç˜¡ç˜£ç˜§ç˜¨ç˜¬ç˜®ç˜¯ç˜±ç˜²ç˜¶ç˜·ç˜¹ç˜ºç˜»ç˜½ç™ç™‚ç™„ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[175].length;++a)if(t[175][a].charCodeAt(0)!==65533){r[t[175][a]]=44800+a;e[44800+a]=t[175][a]}t[176]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç™…ç™†ç™‡ç™ˆç™‰ç™Šç™‹ç™Žç™ç™ç™‘ç™’ç™“ç™•ç™—ç™˜ç™™ç™šç™›ç™ç™Ÿç™ ç™¡ç™¢ç™¤ç™¥ç™¦ç™§ç™¨ç™©ç™ªç™¬ç™­ç™®ç™°ç™±ç™²ç™³ç™´ç™µç™¶ç™·ç™¹ç™ºç™¼ç™¿çš€çšçšƒçš…çš‰çšŠçšŒçšçšçšçš’çš”çš•çš—çš˜çššçš›ï¿½çšœçšçšžçšŸçš çš¡çš¢çš£çš¥çš¦çš§çš¨çš©çšªçš«çš¬çš­çš¯çš°çš³çšµçš¶çš·çš¸çš¹çšºçš»çš¼çš½çš¾ç›€ç›ç›ƒå•Šé˜¿åŸƒæŒ¨å“Žå”‰å“€çš‘ç™Œè”¼çŸ®è‰¾ç¢çˆ±éš˜éžæ°¨å®‰ä¿ºæŒ‰æš—å²¸èƒºæ¡ˆè‚®æ˜‚ç›Žå‡¹æ•–ç†¬ç¿±è¢„å‚²å¥¥æ‡Šæ¾³èŠ­æŒæ‰’å­å§ç¬†å…«ç–¤å·´æ‹”è·‹é¶æŠŠè€™åéœ¸ç½¢çˆ¸ç™½æŸç™¾æ‘†ä½°è´¥æ‹œç¨—æ–‘ç­æ¬æ‰³èˆ¬é¢æ¿ç‰ˆæ‰®æ‹Œä¼´ç“£åŠåŠžç»Šé‚¦å¸®æ¢†æ¦œè†€ç»‘æ£’ç£…èšŒé•‘å‚è°¤è‹žèƒžåŒ…è¤’å‰¥ï¿½".split("");for(a=0;a!=t[176].length;++a)if(t[176][a].charCodeAt(0)!==65533){r[t[176][a]]=45056+a;e[45056+a]=t[176][a]}t[177]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç›„ç›‡ç›‰ç›‹ç›Œç›“ç›•ç›™ç›šç›œç›ç›žç› ç›¡ç›¢ç›£ç›¤ç›¦ç›§ç›¨ç›©ç›ªç›«ç›¬ç›­ç›°ç›³ç›µç›¶ç›·ç›ºç›»ç›½ç›¿çœ€çœ‚çœƒçœ…çœ†çœŠçœŒçœŽçœçœçœ‘çœ’çœ“çœ”çœ•çœ–çœ—çœ˜çœ›çœœçœçœžçœ¡çœ£çœ¤çœ¥çœ§çœªçœ«ï¿½çœ¬çœ®çœ°çœ±çœ²çœ³çœ´çœ¹çœ»çœ½çœ¾çœ¿ç‚ç„ç…ç†çˆç‰çŠç‹çŒççŽçç’ç“ç”ç•ç–ç—ç˜ç™çœè–„é›¹ä¿å ¡é¥±å®æŠ±æŠ¥æš´è±¹é²çˆ†æ¯ç¢‘æ‚²å‘åŒ—è¾ˆèƒŒè´é’¡å€ç‹ˆå¤‡æƒ«ç„™è¢«å¥”è‹¯æœ¬ç¬¨å´©ç»·ç”­æ³µè¹¦è¿¸é€¼é¼»æ¯”é„™ç¬”å½¼ç¢§è“–è”½æ¯•æ¯™æ¯–å¸åº‡ç—¹é—­æ•å¼Šå¿…è¾Ÿå£è‡‚é¿é™›éž­è¾¹ç¼–è´¬æ‰ä¾¿å˜åžè¾¨è¾©è¾«éæ ‡å½ªè†˜è¡¨é³–æ†‹åˆ«ç˜ªå½¬æ–Œæ¿’æ»¨å®¾æ‘ˆå…µå†°æŸ„ä¸™ç§‰é¥¼ç‚³ï¿½".split("");for(a=0;a!=t[177].length;++a)if(t[177][a].charCodeAt(0)!==65533){r[t[177][a]]=45312+a;e[45312+a]=t[177][a]}t[178]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ççžçŸç ç¤ç§ç©çªç­ç®ç¯ç°ç±ç²ç³ç´çµç¶ç·ç¸çºç»ç¼çžçž‚çžƒçž†çž‡çžˆçž‰çžŠçž‹çžçžçž“çž”çž•çž–çž—çž˜çž™çžšçž›çžœçžçžžçž¡çž£çž¤çž¦çž¨çž«çž­çž®çž¯çž±çž²çž´çž¶çž·çž¸çž¹çžºï¿½çž¼çž¾çŸ€çŸçŸ‚çŸƒçŸ„çŸ…çŸ†çŸ‡çŸˆçŸ‰çŸŠçŸ‹çŸŒçŸŽçŸçŸçŸ‘çŸ’çŸ“çŸ”çŸ•çŸ–çŸ˜çŸ™çŸšçŸçŸžçŸŸçŸ çŸ¡çŸ¤ç—…å¹¶çŽ»è æ’­æ‹¨é’µæ³¢åšå‹ƒæé“‚ç®”ä¼¯å¸›èˆ¶è„–è†Šæ¸¤æ³Šé©³æ•åœå“ºè¡¥åŸ ä¸å¸ƒæ­¥ç°¿éƒ¨æ€–æ“¦çŒœè£ææ‰è´¢ç¬è¸©é‡‡å½©èœè”¡é¤å‚èš•æ®‹æƒ­æƒ¨ç¿è‹èˆ±ä»“æ²§è—æ“ç³™æ§½æ›¹è‰åŽ•ç­–ä¾§å†Œæµ‹å±‚è¹­æ’å‰èŒ¬èŒ¶æŸ¥ç¢´æ½å¯Ÿå²”å·®è¯§æ‹†æŸ´è±ºæ€æŽºè‰é¦‹è°—ç¼ é“²äº§é˜é¢¤æ˜ŒçŒ–ï¿½".split("");for(a=0;a!=t[178].length;++a)if(t[178][a].charCodeAt(0)!==65533){r[t[178][a]]=45568+a;e[45568+a]=t[178][a]}t[179]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çŸ¦çŸ¨çŸªçŸ¯çŸ°çŸ±çŸ²çŸ´çŸµçŸ·çŸ¹çŸºçŸ»çŸ¼ç ƒç „ç …ç †ç ‡ç ˆç Šç ‹ç Žç ç ç “ç •ç ™ç ›ç žç  ç ¡ç ¢ç ¤ç ¨ç ªç «ç ®ç ¯ç ±ç ²ç ³ç µç ¶ç ½ç ¿ç¡ç¡‚ç¡ƒç¡„ç¡†ç¡ˆç¡‰ç¡Šç¡‹ç¡ç¡ç¡‘ç¡“ç¡”ç¡˜ç¡™ç¡šï¿½ç¡›ç¡œç¡žç¡Ÿç¡ ç¡¡ç¡¢ç¡£ç¡¤ç¡¥ç¡¦ç¡§ç¡¨ç¡©ç¡¯ç¡°ç¡±ç¡²ç¡³ç¡´ç¡µç¡¶ç¡¸ç¡¹ç¡ºç¡»ç¡½ç¡¾ç¡¿ç¢€ç¢ç¢‚ç¢ƒåœºå°å¸¸é•¿å¿è‚ åŽ‚æ•žç•…å”±å€¡è¶…æŠ„é’žæœå˜²æ½®å·¢åµç‚’è½¦æ‰¯æ’¤æŽ£å½»æ¾ˆéƒ´è‡£è¾°å°˜æ™¨å¿±æ²‰é™ˆè¶è¡¬æ’‘ç§°åŸŽæ©™æˆå‘ˆä¹˜ç¨‹æƒ©æ¾„è¯šæ‰¿é€žéª‹ç§¤åƒç—´æŒåŒ™æ± è¿Ÿå¼›é©°è€»é½¿ä¾ˆå°ºèµ¤ç¿…æ–¥ç‚½å……å†²è™«å´‡å® æŠ½é…¬ç•´è¸Œç¨ æ„ç­¹ä»‡ç»¸çž…ä¸‘è‡­åˆå‡ºæ©±åŽ¨èº‡é”„é›æ»é™¤æ¥šï¿½".split("");for(a=0;a!=t[179].length;++a)if(t[179][a].charCodeAt(0)!==65533){r[t[179][a]]=45824+a;e[45824+a]=t[179][a]}t[180]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¢„ç¢…ç¢†ç¢ˆç¢Šç¢‹ç¢ç¢ç¢’ç¢”ç¢•ç¢–ç¢™ç¢ç¢žç¢ ç¢¢ç¢¤ç¢¦ç¢¨ç¢©ç¢ªç¢«ç¢¬ç¢­ç¢®ç¢¯ç¢µç¢¶ç¢·ç¢¸ç¢ºç¢»ç¢¼ç¢½ç¢¿ç£€ç£‚ç£ƒç£„ç£†ç£‡ç£ˆç£Œç£ç£Žç£ç£‘ç£’ç£“ç£–ç£—ç£˜ç£šç£›ç£œç£ç£žç£Ÿç£ ç£¡ç£¢ç££ï¿½ç£¤ç£¥ç£¦ç£§ç£©ç£ªç£«ç£­ç£®ç£¯ç£°ç£±ç£³ç£µç£¶ç£¸ç£¹ç£»ç£¼ç£½ç£¾ç£¿ç¤€ç¤‚ç¤ƒç¤„ç¤†ç¤‡ç¤ˆç¤‰ç¤Šç¤‹ç¤Œç¡€å‚¨çŸ—æè§¦å¤„æ£å·ç©¿æ¤½ä¼ èˆ¹å–˜ä¸²ç–®çª—å¹¢åºŠé—¯åˆ›å¹ç‚Šæ¶é”¤åž‚æ˜¥æ¤¿é†‡å”‡æ·³çº¯è ¢æˆ³ç»°ç–µèŒ¨ç£é›Œè¾žæ…ˆç“·è¯æ­¤åˆºèµæ¬¡èªè‘±å›±åŒ†ä»Žä¸›å‡‘ç²—é†‹ç°‡ä¿ƒè¹¿ç¯¡çªœæ‘§å´”å‚¬è„†ç˜ç²¹æ·¬ç¿ æ‘å­˜å¯¸ç£‹æ’®æ“æŽªæŒ«é”™æ­è¾¾ç­”ç˜©æ‰“å¤§å‘†æ­¹å‚£æˆ´å¸¦æ®†ä»£è´·è¢‹å¾…é€®ï¿½".split("");for(a=0;a!=t[180].length;++a)if(t[180][a].charCodeAt(0)!==65533){r[t[180][a]]=46080+a;e[46080+a]=t[180][a]}t[181]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¤ç¤Žç¤ç¤ç¤‘ç¤’ç¤”ç¤•ç¤–ç¤—ç¤˜ç¤™ç¤šç¤›ç¤œç¤ç¤Ÿç¤ ç¤¡ç¤¢ç¤£ç¤¥ç¤¦ç¤§ç¤¨ç¤©ç¤ªç¤«ç¤¬ç¤­ç¤®ç¤¯ç¤°ç¤±ç¤²ç¤³ç¤µç¤¶ç¤·ç¤¸ç¤¹ç¤½ç¤¿ç¥‚ç¥ƒç¥„ç¥…ç¥‡ç¥Šç¥‹ç¥Œç¥ç¥Žç¥ç¥ç¥‘ç¥’ç¥”ç¥•ç¥˜ç¥™ç¥¡ç¥£ï¿½ç¥¤ç¥¦ç¥©ç¥ªç¥«ç¥¬ç¥®ç¥°ç¥±ç¥²ç¥³ç¥´ç¥µç¥¶ç¥¹ç¥»ç¥¼ç¥½ç¥¾ç¥¿ç¦‚ç¦ƒç¦†ç¦‡ç¦ˆç¦‰ç¦‹ç¦Œç¦ç¦Žç¦ç¦‘ç¦’æ€ è€½æ‹…ä¸¹å•éƒ¸æŽ¸èƒ†æ—¦æ°®ä½†æƒ®æ·¡è¯žå¼¹è›‹å½“æŒ¡å…šè¡æ¡£åˆ€æ£è¹ˆå€’å²›ç¥·å¯¼åˆ°ç¨»æ‚¼é“ç›—å¾·å¾—çš„è¹¬ç¯ç™»ç­‰çžªå‡³é‚“å ¤ä½Žæ»´è¿ªæ•Œç¬›ç‹„æ¶¤ç¿Ÿå«¡æŠµåº•åœ°è’‚ç¬¬å¸å¼Ÿé€’ç¼”é¢ æŽ‚æ»‡ç¢˜ç‚¹å…¸é›åž«ç”µä½ƒç”¸åº—æƒ¦å¥ æ·€æ®¿ç¢‰å¼é›•å‡‹åˆæŽ‰åŠé’“è°ƒè·Œçˆ¹ç¢Ÿè¶è¿­è°å ï¿½".split("");for(a=0;a!=t[181].length;++a)if(t[181][a].charCodeAt(0)!==65533){r[t[181][a]]=46336+a;e[46336+a]=t[181][a]}t[182]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¦“ç¦”ç¦•ç¦–ç¦—ç¦˜ç¦™ç¦›ç¦œç¦ç¦žç¦Ÿç¦ ç¦¡ç¦¢ç¦£ç¦¤ç¦¥ç¦¦ç¦¨ç¦©ç¦ªç¦«ç¦¬ç¦­ç¦®ç¦¯ç¦°ç¦±ç¦²ç¦´ç¦µç¦¶ç¦·ç¦¸ç¦¼ç¦¿ç§‚ç§„ç§…ç§‡ç§ˆç§Šç§Œç§Žç§ç§ç§“ç§”ç§–ç§—ç§™ç§šç§›ç§œç§ç§žç§ ç§¡ç§¢ç§¥ç§¨ç§ªï¿½ç§¬ç§®ç§±ç§²ç§³ç§´ç§µç§¶ç§·ç§¹ç§ºç§¼ç§¾ç§¿ç¨ç¨„ç¨…ç¨‡ç¨ˆç¨‰ç¨Šç¨Œç¨ç¨ç¨‘ç¨’ç¨“ç¨•ç¨–ç¨˜ç¨™ç¨›ç¨œä¸ç›¯å®é’‰é¡¶é¼Žé”­å®šè®¢ä¸¢ä¸œå†¬è‘£æ‡‚åŠ¨æ ‹ä¾—æ«å†»æ´žå…œæŠ–æ–—é™¡è±†é€—ç—˜éƒ½ç£æ¯’çŠŠç‹¬è¯»å µç¹èµŒæœé•€è‚šåº¦æ¸¡å¦’ç«¯çŸ­é”»æ®µæ–­ç¼Žå †å…‘é˜Ÿå¯¹å¢©å¨è¹²æ•¦é¡¿å›¤é’ç›¾éæŽ‡å“†å¤šå¤ºåž›èº²æœµè·ºèˆµå‰æƒ°å •è›¾å³¨é¹…ä¿„é¢è®¹å¨¥æ¶åŽ„æ‰¼éé„‚é¥¿æ©è€Œå„¿è€³å°”é¥µæ´±äºŒï¿½".split("");for(a=0;a!=t[182].length;++a)if(t[182][a].charCodeAt(0)!==65533){r[t[182][a]]=46592+a;e[46592+a]=t[182][a]}t[183]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¨ç¨Ÿç¨¡ç¨¢ç¨¤ç¨¥ç¨¦ç¨§ç¨¨ç¨©ç¨ªç¨«ç¨¬ç¨­ç¨®ç¨¯ç¨°ç¨±ç¨²ç¨´ç¨µç¨¶ç¨¸ç¨ºç¨¾ç©€ç©ç©‚ç©ƒç©„ç©…ç©‡ç©ˆç©‰ç©Šç©‹ç©Œç©ç©Žç©ç©ç©’ç©“ç©”ç©•ç©–ç©˜ç©™ç©šç©›ç©œç©ç©žç©Ÿç© ç©¡ç©¢ç©£ç©¤ç©¥ç©¦ç©§ç©¨ï¿½ç©©ç©ªç©«ç©¬ç©­ç©®ç©¯ç©±ç©²ç©³ç©µç©»ç©¼ç©½ç©¾çª‚çª…çª‡çª‰çªŠçª‹çªŒçªŽçªçªçª“çª”çª™çªšçª›çªžçª¡çª¢è´°å‘ç½šç­ä¼ä¹é˜€æ³•çè—©å¸†ç•ªç¿»æ¨ŠçŸ¾é’’ç¹å‡¡çƒ¦åè¿”èŒƒè´©çŠ¯é¥­æ³›åŠèŠ³æ–¹è‚ªæˆ¿é˜²å¦¨ä»¿è®¿çººæ”¾è²éžå•¡é£žè‚¥åŒªè¯½å è‚ºåºŸæ²¸è´¹èŠ¬é…šå©æ°›åˆ†çº·åŸç„šæ±¾ç²‰å¥‹ä»½å¿¿æ„¤ç²ªä¸°å°æž«èœ‚å³°é”‹é£Žç–¯çƒ½é€¢å†¯ç¼è®½å¥‰å‡¤ä½›å¦å¤«æ•·è‚¤å­µæ‰¶æ‹‚è¾å¹…æ°Ÿç¬¦ä¼ä¿˜æœï¿½".split("");for(a=0;a!=t[183].length;++a)if(t[183][a].charCodeAt(0)!==65533){r[t[183][a]]=46848+a;e[46848+a]=t[183][a]}t[184]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çª£çª¤çª§çª©çªªçª«çª®çª¯çª°çª±çª²çª´çªµçª¶çª·çª¸çª¹çªºçª»çª¼çª½çª¾ç«€ç«ç«‚ç«ƒç«„ç«…ç«†ç«‡ç«ˆç«‰ç«Šç«Œç«ç«Žç«ç«ç«‘ç«’ç«“ç«”ç«•ç«—ç«˜ç«šç«›ç«œç«ç«¡ç«¢ç«¤ç«§ç«¨ç«©ç«ªç««ç«¬ç«®ç«°ç«±ç«²ç«³ï¿½ç«´ç«µç«¶ç«·ç«¸ç«»ç«¼ç«¾ç¬€ç¬ç¬‚ç¬…ç¬‡ç¬‰ç¬Œç¬ç¬Žç¬ç¬’ç¬“ç¬–ç¬—ç¬˜ç¬šç¬œç¬ç¬Ÿç¬¡ç¬¢ç¬£ç¬§ç¬©ç¬­æµ®æ¶ªç¦è¢±å¼—ç”«æŠšè¾…ä¿¯é‡œæ–§è„¯è…‘åºœè…èµ´å‰¯è¦†èµ‹å¤å‚…ä»˜é˜œçˆ¶è…¹è´Ÿå¯Œè®£é™„å¦‡ç¼šå’å™¶å˜Žè¯¥æ”¹æ¦‚é’™ç›–æº‰å¹²ç”˜æ†æŸ‘ç«¿è‚èµ¶æ„Ÿç§†æ•¢èµ£å†ˆåˆšé’¢ç¼¸è‚›çº²å²—æ¸¯æ ç¯™çš‹é«˜è†ç¾”ç³•æžé•ç¨¿å‘Šå“¥æ­Œææˆˆé¸½èƒ³ç–™å‰²é©è‘›æ ¼è›¤é˜éš”é“¬ä¸ªå„ç»™æ ¹è·Ÿè€•æ›´åºšç¾¹ï¿½".split("");for(a=0;a!=t[184].length;++a)if(t[184][a].charCodeAt(0)!==65533){r[t[184][a]]=47104+a;e[47104+a]=t[184][a]}t[185]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¬¯ç¬°ç¬²ç¬´ç¬µç¬¶ç¬·ç¬¹ç¬»ç¬½ç¬¿ç­€ç­ç­‚ç­ƒç­„ç­†ç­ˆç­Šç­ç­Žç­“ç­•ç­—ç­™ç­œç­žç­Ÿç­¡ç­£ç­¤ç­¥ç­¦ç­§ç­¨ç­©ç­ªç­«ç­¬ç­­ç­¯ç­°ç­³ç­´ç­¶ç­¸ç­ºç­¼ç­½ç­¿ç®ç®‚ç®ƒç®„ç®†ç®‡ç®ˆç®‰ç®Šç®‹ç®Œç®Žç®ï¿½ç®‘ç®’ç®“ç®–ç®˜ç®™ç®šç®›ç®žç®Ÿç® ç®£ç®¤ç®¥ç®®ç®¯ç®°ç®²ç®³ç®µç®¶ç®·ç®¹ç®ºç®»ç®¼ç®½ç®¾ç®¿ç¯€ç¯‚ç¯ƒç¯„åŸ‚è€¿æ¢—å·¥æ”»åŠŸæ­é¾šä¾›èº¬å…¬å®«å¼“å·©æ±žæ‹±è´¡å…±é’©å‹¾æ²Ÿè‹Ÿç‹—åž¢æž„è´­å¤Ÿè¾œè‡å’•ç®ä¼°æ²½å­¤å§‘é¼“å¤è›Šéª¨è°·è‚¡æ•…é¡¾å›ºé›‡åˆ®ç“œå‰å¯¡æŒ‚è¤‚ä¹–æ‹æ€ªæ£ºå…³å®˜å† è§‚ç®¡é¦†ç½æƒ¯çŒè´¯å…‰å¹¿é€›ç‘°è§„åœ­ç¡…å½’é¾Ÿé—ºè½¨é¬¼è¯¡ç™¸æ¡‚æŸœè·ªè´µåˆ½è¾Šæ»šæ£é”…éƒ­å›½æžœè£¹è¿‡å“ˆï¿½".split("");for(a=0;a!=t[185].length;++a)if(t[185][a].charCodeAt(0)!==65533){r[t[185][a]]=47360+a;e[47360+a]=t[185][a]}t[186]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¯…ç¯ˆç¯‰ç¯Šç¯‹ç¯ç¯Žç¯ç¯ç¯’ç¯”ç¯•ç¯–ç¯—ç¯˜ç¯›ç¯œç¯žç¯Ÿç¯ ç¯¢ç¯£ç¯¤ç¯§ç¯¨ç¯©ç¯«ç¯¬ç¯­ç¯¯ç¯°ç¯²ç¯³ç¯´ç¯µç¯¶ç¯¸ç¯¹ç¯ºç¯»ç¯½ç¯¿ç°€ç°ç°‚ç°ƒç°„ç°…ç°†ç°ˆç°‰ç°Šç°ç°Žç°ç°‘ç°’ç°“ç°”ç°•ç°—ç°˜ç°™ï¿½ç°šç°›ç°œç°ç°žç° ç°¡ç°¢ç°£ç°¤ç°¥ç°¨ç°©ç°«ç°¬ç°­ç°®ç°¯ç°°ç°±ç°²ç°³ç°´ç°µç°¶ç°·ç°¹ç°ºç°»ç°¼ç°½ç°¾ç±‚éª¸å­©æµ·æ°¦äº¥å®³éª‡é…£æ†¨é‚¯éŸ©å«æ¶µå¯’å‡½å–Šç½•ç¿°æ’¼ææ—±æ†¾æ‚ç„Šæ±—æ±‰å¤¯æ­èˆªå£•åšŽè±ªæ¯«éƒå¥½è€—å·æµ©å‘µå–è·èæ ¸ç¦¾å’Œä½•åˆç›’è²‰é˜‚æ²³æ¶¸èµ«è¤é¹¤è´ºå˜¿é»‘ç—•å¾ˆç‹ æ¨å“¼äº¨æ¨ªè¡¡æ’è½°å“„çƒ˜è™¹é¸¿æ´ªå®å¼˜çº¢å–‰ä¾¯çŒ´å¼åŽšå€™åŽå‘¼ä¹Žå¿½ç‘šå£¶è‘«èƒ¡è´ç‹ç³Šæ¹–ï¿½".split("");for(a=0;a!=t[186].length;++a)if(t[186][a].charCodeAt(0)!==65533){r[t[186][a]]=47616+a;e[47616+a]=t[186][a]}t[187]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç±ƒç±„ç±…ç±†ç±‡ç±ˆç±‰ç±Šç±‹ç±Œç±Žç±ç±ç±‘ç±’ç±“ç±”ç±•ç±–ç±—ç±˜ç±™ç±šç±›ç±œç±ç±žç±Ÿç± ç±¡ç±¢ç±£ç±¤ç±¥ç±¦ç±§ç±¨ç±©ç±ªç±«ç±¬ç±­ç±®ç±¯ç±°ç±±ç±²ç±µç±¶ç±·ç±¸ç±¹ç±ºç±¾ç±¿ç²€ç²ç²‚ç²ƒç²„ç²…ç²†ç²‡ï¿½ç²ˆç²Šç²‹ç²Œç²ç²Žç²ç²ç²“ç²”ç²–ç²™ç²šç²›ç² ç²¡ç²£ç²¦ç²§ç²¨ç²©ç²«ç²¬ç²­ç²¯ç²°ç²´ç²µç²¶ç²·ç²¸ç²ºç²»å¼§è™Žå”¬æŠ¤äº’æ²ªæˆ·èŠ±å“—åŽçŒ¾æ»‘ç”»åˆ’åŒ–è¯æ§å¾Šæ€€æ·®åæ¬¢çŽ¯æ¡“è¿˜ç¼“æ¢æ‚£å”¤ç—ªè±¢ç„•æ¶£å®¦å¹»è’æ…Œé»„ç£ºè—ç°§çš‡å‡°æƒ¶ç…Œæ™ƒå¹Œæè°Žç°æŒ¥è¾‰å¾½æ¢è›”å›žæ¯æ‚”æ…§å‰æƒ æ™¦è´¿ç§½ä¼šçƒ©æ±‡è®³è¯²ç»˜è¤æ˜å©šé­‚æµ‘æ··è±æ´»ä¼™ç«èŽ·æˆ–æƒ‘éœè´§ç¥¸å‡»åœ¾åŸºæœºç•¸ç¨½ç§¯ç®•ï¿½".split("");for(a=0;a!=t[187].length;++a)if(t[187][a].charCodeAt(0)!==65533){r[t[187][a]]=47872+a;e[47872+a]=t[187][a]}t[188]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç²¿ç³€ç³‚ç³ƒç³„ç³†ç³‰ç³‹ç³Žç³ç³ç³‘ç³’ç³“ç³”ç³˜ç³šç³›ç³ç³žç³¡ç³¢ç³£ç³¤ç³¥ç³¦ç³§ç³©ç³ªç³«ç³¬ç³­ç³®ç³°ç³±ç³²ç³³ç³´ç³µç³¶ç³·ç³¹ç³ºç³¼ç³½ç³¾ç³¿ç´€ç´ç´‚ç´ƒç´„ç´…ç´†ç´‡ç´ˆç´‰ç´‹ç´Œç´ç´Žç´ç´ï¿½ç´‘ç´’ç´“ç´”ç´•ç´–ç´—ç´˜ç´™ç´šç´›ç´œç´ç´žç´Ÿç´¡ç´£ç´¤ç´¥ç´¦ç´¨ç´©ç´ªç´¬ç´­ç´®ç´°ç´±ç´²ç´³ç´´ç´µç´¶è‚Œé¥¥è¿¹æ¿€è®¥é¸¡å§¬ç»©ç¼‰å‰æžæ£˜è¾‘ç±é›†åŠæ€¥ç–¾æ±²å³å«‰çº§æŒ¤å‡ è„Šå·±è“ŸæŠ€å†€å­£ä¼Žç¥­å‰‚æ‚¸æµŽå¯„å¯‚è®¡è®°æ—¢å¿Œé™…å¦“ç»§çºªå˜‰æž·å¤¹ä½³å®¶åŠ èšé¢Šè´¾ç”²é’¾å‡ç¨¼ä»·æž¶é©¾å«æ­¼ç›‘åšå°–ç¬ºé—´ç…Žå…¼è‚©è‰°å¥¸ç¼„èŒ§æ£€æŸ¬ç¢±ç¡·æ‹£æ¡ç®€ä¿­å‰ªå‡èæ§›é‰´è·µè´±è§é”®ç®­ä»¶ï¿½".split("");for(a=0;a!=t[188].length;++a)if(t[188][a].charCodeAt(0)!==65533){r[t[188][a]]=48128+a;e[48128+a]=t[188][a]}t[189]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç´·ç´¸ç´¹ç´ºç´»ç´¼ç´½ç´¾ç´¿çµ€çµçµ‚çµƒçµ„çµ…çµ†çµ‡çµˆçµ‰çµŠçµ‹çµŒçµçµŽçµçµçµ‘çµ’çµ“çµ”çµ•çµ–çµ—çµ˜çµ™çµšçµ›çµœçµçµžçµŸçµ çµ¡çµ¢çµ£çµ¤çµ¥çµ¦çµ§çµ¨çµ©çµªçµ«çµ¬çµ­çµ¯çµ°çµ±çµ²çµ³çµ´çµµçµ¶ï¿½çµ¸çµ¹çµºçµ»çµ¼çµ½çµ¾çµ¿ç¶€ç¶ç¶‚ç¶ƒç¶„ç¶…ç¶†ç¶‡ç¶ˆç¶‰ç¶Šç¶‹ç¶Œç¶ç¶Žç¶ç¶ç¶‘ç¶’ç¶“ç¶”ç¶•ç¶–ç¶—ç¶˜å¥èˆ°å‰‘é¥¯æ¸æº…æ¶§å»ºåƒµå§œå°†æµ†æ±Ÿç–†è’‹æ¡¨å¥–è®²åŒ é…±é™è•‰æ¤’ç¤ç„¦èƒ¶äº¤éƒŠæµ‡éª„å¨‡åš¼æ…é“°çŸ«ä¾¥è„šç‹¡è§’é¥ºç¼´ç»žå‰¿æ•™é…µè½¿è¾ƒå«çª–æ­æŽ¥çš†ç§¸è¡—é˜¶æˆªåŠ«èŠ‚æ¡”æ°æ·ç«ç«­æ´ç»“è§£å§æˆ’è—‰èŠ¥ç•Œå€Ÿä»‹ç–¥è¯«å±Šå·¾ç­‹æ–¤é‡‘ä»Šæ´¥è¥Ÿç´§é”¦ä»…è°¨è¿›é³æ™‹ç¦è¿‘çƒ¬æµ¸ï¿½".split("");for(a=0;a!=t[189].length;++a)if(t[189][a].charCodeAt(0)!==65533){r[t[189][a]]=48384+a;e[48384+a]=t[189][a]}t[190]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¶™ç¶šç¶›ç¶œç¶ç¶žç¶Ÿç¶ ç¶¡ç¶¢ç¶£ç¶¤ç¶¥ç¶§ç¶¨ç¶©ç¶ªç¶«ç¶¬ç¶­ç¶¯ç¶°ç¶±ç¶²ç¶³ç¶´ç¶µç¶¶ç¶·ç¶¸ç¶¹ç¶ºç¶»ç¶¼ç¶½ç¶¾ç¶¿ç·€ç·ç·‚ç·ƒç·„ç·…ç·†ç·‡ç·ˆç·‰ç·Šç·‹ç·Œç·ç·Žç·ç·ç·‘ç·’ç·“ç·”ç·•ç·–ç·—ç·˜ç·™ï¿½ç·šç·›ç·œç·ç·žç·Ÿç· ç·¡ç·¢ç·£ç·¤ç·¥ç·¦ç·§ç·¨ç·©ç·ªç·«ç·¬ç·­ç·®ç·¯ç·°ç·±ç·²ç·³ç·´ç·µç·¶ç··ç·¸ç·¹ç·ºå°½åŠ²è†å…¢èŒŽç›æ™¶é²¸äº¬æƒŠç²¾ç²³ç»äº•è­¦æ™¯é¢ˆé™å¢ƒæ•¬é•œå¾„ç—‰é–ç«Ÿç«žå‡€ç‚¯çª˜æªç©¶çº çŽ–éŸ­ä¹…ç¸ä¹é…’åŽ©æ•‘æ—§è‡¼èˆ…å’Žå°±ç–šéž æ‹˜ç‹™ç–½å±…é©¹èŠå±€å’€çŸ©ä¸¾æ²®èšæ‹’æ®å·¨å…·è·è¸žé”¯ä¿±å¥æƒ§ç‚¬å‰§æé¹ƒå¨Ÿå€¦çœ·å·ç»¢æ’…æ”«æŠ‰æŽ˜å€”çˆµè§‰å†³è¯€ç»å‡èŒé’§å†›å›å³»ï¿½".split("");for(a=0;a!=t[190].length;++a)if(t[190][a].charCodeAt(0)!==65533){r[t[190][a]]=48640+a;e[48640+a]=t[190][a]}t[191]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç·»ç·¼ç·½ç·¾ç·¿ç¸€ç¸ç¸‚ç¸ƒç¸„ç¸…ç¸†ç¸‡ç¸ˆç¸‰ç¸Šç¸‹ç¸Œç¸ç¸Žç¸ç¸ç¸‘ç¸’ç¸“ç¸”ç¸•ç¸–ç¸—ç¸˜ç¸™ç¸šç¸›ç¸œç¸ç¸žç¸Ÿç¸ ç¸¡ç¸¢ç¸£ç¸¤ç¸¥ç¸¦ç¸§ç¸¨ç¸©ç¸ªç¸«ç¸¬ç¸­ç¸®ç¸¯ç¸°ç¸±ç¸²ç¸³ç¸´ç¸µç¸¶ç¸·ç¸¸ç¸¹ï¿½ç¸ºç¸¼ç¸½ç¸¾ç¸¿ç¹€ç¹‚ç¹ƒç¹„ç¹…ç¹†ç¹ˆç¹‰ç¹Šç¹‹ç¹Œç¹ç¹Žç¹ç¹ç¹‘ç¹’ç¹“ç¹”ç¹•ç¹–ç¹—ç¹˜ç¹™ç¹šç¹›ç¹œç¹ä¿Šç«£æµšéƒ¡éªå–€å’–å¡å’¯å¼€æ©æ¥·å‡¯æ…¨åˆŠå ªå‹˜åŽç çœ‹åº·æ…·ç³ æ‰›æŠ—äº¢ç‚•è€ƒæ‹·çƒ¤é å·è‹›æŸ¯æ£µç£•é¢—ç§‘å£³å’³å¯æ¸´å…‹åˆ»å®¢è¯¾è‚¯å•ƒåž¦æ³å‘å­ç©ºæå­”æŽ§æŠ å£æ‰£å¯‡æž¯å“­çªŸè‹¦é…·åº“è£¤å¤¸åž®æŒŽè·¨èƒ¯å—ç­·ä¾©å¿«å®½æ¬¾åŒ¡ç­ç‹‚æ¡†çŸ¿çœ¶æ—·å†µäºç›”å²¿çª¥è‘µå¥Žé­å‚€ï¿½".split("");for(a=0;a!=t[191].length;++a)if(t[191][a].charCodeAt(0)!==65533){r[t[191][a]]=48896+a;e[48896+a]=t[191][a]}t[192]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¹žç¹Ÿç¹ ç¹¡ç¹¢ç¹£ç¹¤ç¹¥ç¹¦ç¹§ç¹¨ç¹©ç¹ªç¹«ç¹¬ç¹­ç¹®ç¹¯ç¹°ç¹±ç¹²ç¹³ç¹´ç¹µç¹¶ç¹·ç¹¸ç¹¹ç¹ºç¹»ç¹¼ç¹½ç¹¾ç¹¿çº€çºçºƒçº„çº…çº†çº‡çºˆçº‰çºŠçº‹çºŒçºçºŽçºçºçº‘çº’çº“çº”çº•çº–çº—çº˜çº™çºšçºœçºçºžï¿½çº®çº´çº»çº¼ç»–ç»¤ç»¬ç»¹ç¼Šç¼ç¼žç¼·ç¼¹ç¼»ç¼¼ç¼½ç¼¾ç¼¿ç½€ç½ç½ƒç½†ç½‡ç½ˆç½‰ç½Šç½‹ç½Œç½ç½Žç½ç½’ç½“é¦ˆæ„§æºƒå¤æ˜†æ†å›°æ‹¬æ‰©å»“é˜”åžƒæ‹‰å–‡èœ¡è…Šè¾£å•¦èŽ±æ¥èµ–è“å©ªæ æ‹¦ç¯®é˜‘å…°æ¾œè°°æ½è§ˆæ‡’ç¼†çƒ‚æ»¥ç…æ¦”ç‹¼å»ŠéƒŽæœ—æµªæžåŠ³ç‰¢è€ä½¬å§¥é…ªçƒ™æ¶å‹’ä¹é›·é•­è•¾ç£Šç´¯å„¡åž’æ“‚è‚‹ç±»æ³ªæ£±æ¥žå†·åŽ˜æ¢¨çŠé»Žç¯±ç‹¸ç¦»æ¼“ç†æŽé‡Œé²¤ç¤¼èŽ‰è”åæ —ä¸½åŽ‰åŠ±ç ¾åŽ†åˆ©å‚ˆä¾‹ä¿ï¿½".split("");for(a=0;a!=t[192].length;++a)if(t[192][a].charCodeAt(0)!==65533){r[t[192][a]]=49152+a;e[49152+a]=t[192][a]}t[193]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç½–ç½™ç½›ç½œç½ç½žç½ ç½£ç½¤ç½¥ç½¦ç½§ç½«ç½¬ç½­ç½¯ç½°ç½³ç½µç½¶ç½·ç½¸ç½ºç½»ç½¼ç½½ç½¿ç¾€ç¾‚ç¾ƒç¾„ç¾…ç¾†ç¾‡ç¾ˆç¾‰ç¾‹ç¾ç¾ç¾ç¾‘ç¾’ç¾“ç¾•ç¾–ç¾—ç¾˜ç¾™ç¾›ç¾œç¾ ç¾¢ç¾£ç¾¥ç¾¦ç¾¨ç¾©ç¾ªç¾«ç¾¬ç¾­ç¾®ç¾±ï¿½ç¾³ç¾´ç¾µç¾¶ç¾·ç¾ºç¾»ç¾¾ç¿€ç¿‚ç¿ƒç¿„ç¿†ç¿‡ç¿ˆç¿‰ç¿‹ç¿ç¿ç¿ç¿‘ç¿’ç¿“ç¿–ç¿—ç¿™ç¿šç¿›ç¿œç¿ç¿žç¿¢ç¿£ç—¢ç«‹ç²’æ²¥éš¶åŠ›ç’ƒå“©ä¿©è”èŽ²è¿žé•°å»‰æ€œæ¶Ÿå¸˜æ•›è„¸é“¾æ‹ç‚¼ç»ƒç²®å‡‰æ¢ç²±è‰¯ä¸¤è¾†é‡æ™¾äº®è°…æ’©èŠåƒšç–—ç‡Žå¯¥è¾½æ½¦äº†æ’‚é•£å»–æ–™åˆ—è£‚çƒˆåŠ£çŒŽç³æž—ç£·éœ–ä¸´é‚»é³žæ·‹å‡›èµåæ‹ŽçŽ²è±é›¶é¾„é“ƒä¼¶ç¾šå‡Œçµé™µå²­é¢†å¦ä»¤æºœç‰æ¦´ç¡«é¦ç•™åˆ˜ç˜¤æµæŸ³å…­é¾™è‹å’™ç¬¼çª¿ï¿½".split("");for(a=0;a!=t[193].length;++a)if(t[193][a].charCodeAt(0)!==65533){r[t[193][a]]=49408+a;e[49408+a]=t[193][a]}t[194]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¿¤ç¿§ç¿¨ç¿ªç¿«ç¿¬ç¿­ç¿¯ç¿²ç¿´ç¿µç¿¶ç¿·ç¿¸ç¿¹ç¿ºç¿½ç¿¾ç¿¿è€‚è€‡è€ˆè€‰è€Šè€Žè€è€‘è€“è€šè€›è€è€žè€Ÿè€¡è€£è€¤è€«è€¬è€­è€®è€¯è€°è€²è€´è€¹è€ºè€¼è€¾è€èè„è…è‡èˆè‰èŽèèè‘è“è•è–è—ï¿½è™è›èœèèžèŸè è¡è¢è£è¤è¥è¦è§è¨è«è¬è­è®è¯è°è²è³è´èµè¶è·è¸è¹èºè»è¼è½éš†åž„æ‹¢é™‡æ¥¼å¨„æ‚ç¯“æ¼é™‹èŠ¦å¢é¢…åºç‚‰æŽ³å¤è™é²éº“ç¢Œéœ²è·¯èµ‚é¹¿æ½žç¦„å½•é™†æˆ®é©´å•é“ä¾£æ—…å±¥å±¡ç¼•è™‘æ°¯å¾‹çŽ‡æ»¤ç»¿å³¦æŒ›å­ªæ»¦åµä¹±æŽ ç•¥æŠ¡è½®ä¼¦ä»‘æ²¦çº¶è®ºèèžºç½—é€»é”£ç®©éª¡è£¸è½æ´›éª†ç»œå¦ˆéº»çŽ›ç èš‚é©¬éª‚å˜›å—åŸ‹ä¹°éº¦å–è¿ˆè„‰çž’é¦’è›®æ»¡è”“æ›¼æ…¢æ¼«ï¿½".split("");for(a=0;a!=t[194].length;++a)if(t[194][a].charCodeAt(0)!==65533){r[t[194][a]]=49664+a;e[49664+a]=t[194][a]}t[195]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¾è‚è‚‚è‚…è‚ˆè‚Šè‚è‚Žè‚è‚è‚‘è‚’è‚”è‚•è‚—è‚™è‚žè‚£è‚¦è‚§è‚¨è‚¬è‚°è‚³è‚µè‚¶è‚¸è‚¹è‚»èƒ…èƒ‡èƒˆèƒ‰èƒŠèƒ‹èƒèƒèƒ‘èƒ’èƒ“èƒ”èƒ•èƒ˜èƒŸèƒ èƒ¢èƒ£èƒ¦èƒ®èƒµèƒ·èƒ¹èƒ»èƒ¾èƒ¿è„€è„è„ƒè„„è„…è„‡è„ˆè„‹ï¿½è„Œè„•è„—è„™è„›è„œè„è„Ÿè„ è„¡è„¢è„£è„¤è„¥è„¦è„§è„¨è„©è„ªè„«è„­è„®è„°è„³è„´è„µè„·è„¹è„ºè„»è„¼è„½è„¿è°©èŠ’èŒ«ç›²æ°“å¿™èŽ½çŒ«èŒ…é”šæ¯›çŸ›é“†å¯èŒ‚å†’å¸½è²Œè´¸ä¹ˆçŽ«æžšæ¢…é…¶éœ‰ç…¤æ²¡çœ‰åª’é•æ¯ç¾Žæ˜§å¯å¦¹åªšé—¨é—·ä»¬èŒè’™æª¬ç›Ÿé”°çŒ›æ¢¦å­Ÿçœ¯é†šé¡ç³œè¿·è°œå¼¥ç±³ç§˜è§…æ³Œèœœå¯†å¹‚æ£‰çœ ç»µå†•å…å‹‰å¨©ç¼…é¢è‹—æçž„è—ç§’æ¸ºåº™å¦™è”‘ç­æ°‘æŠ¿çš¿æ•æ‚¯é—½æ˜ŽèžŸé¸£é“­åå‘½è°¬æ‘¸ï¿½".split("");for(a=0;a!=t[195].length;++a)if(t[195][a].charCodeAt(0)!==65533){r[t[195][a]]=49920+a;e[49920+a]=t[195][a]}t[196]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è…€è…è…‚è…ƒè…„è……è…‡è…‰è…è…Žè…è…’è…–è…—è…˜è…›è…œè…è…žè…Ÿè…¡è…¢è…£è…¤è…¦è…¨è…ªè…«è…¬è…¯è…²è…³è…µè…¶è…·è…¸è†è†ƒè†„è†…è††è†‡è†‰è†‹è†Œè†è†Žè†è†’è†“è†”è†•è†–è†—è†™è†šè†žè†Ÿè† è†¡è†¢è†¤è†¥ï¿½è†§è†©è†«è†¬è†­è†®è†¯è†°è†±è†²è†´è†µè†¶è†·è†¸è†¹è†¼è†½è†¾è†¿è‡„è‡…è‡‡è‡ˆè‡‰è‡‹è‡è‡Žè‡è‡è‡‘è‡’è‡“æ‘¹è˜‘æ¨¡è†œç£¨æ‘©é­”æŠ¹æœ«èŽ«å¢¨é»˜æ²«æ¼ å¯žé™Œè°‹ç‰ŸæŸæ‹‡ç‰¡äº©å§†æ¯å¢“æš®å¹•å‹Ÿæ…•æœ¨ç›®ç¦ç‰§ç©†æ‹¿å“ªå‘é’ é‚£å¨œçº³æ°–ä¹ƒå¥¶è€å¥ˆå—ç”·éš¾å›ŠæŒ è„‘æ¼é—¹æ·–å‘¢é¦å†…å«©èƒ½å¦®éœ“å€ªæ³¥å°¼æ‹Ÿä½ åŒ¿è…»é€†æººè”«æ‹ˆå¹´ç¢¾æ’µæ»å¿µå¨˜é…¿é¸Ÿå°¿æè‚å­½å•®é•Šé•æ¶…æ‚¨æŸ ç‹žå‡å®ï¿½".split("");for(a=0;a!=t[196].length;++a)if(t[196][a].charCodeAt(0)!==65533){r[t[196][a]]=50176+a;e[50176+a]=t[196][a]}t[197]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è‡”è‡•è‡–è‡—è‡˜è‡™è‡šè‡›è‡œè‡è‡žè‡Ÿè‡ è‡¡è‡¢è‡¤è‡¥è‡¦è‡¨è‡©è‡«è‡®è‡¯è‡°è‡±è‡²è‡µè‡¶è‡·è‡¸è‡¹è‡ºè‡½è‡¿èˆƒèˆ‡èˆˆèˆ‰èˆŠèˆ‹èˆŽèˆèˆ‘èˆ“èˆ•èˆ–èˆ—èˆ˜èˆ™èˆšèˆèˆ èˆ¤èˆ¥èˆ¦èˆ§èˆ©èˆ®èˆ²èˆºèˆ¼èˆ½èˆ¿ï¿½è‰€è‰è‰‚è‰ƒè‰…è‰†è‰ˆè‰Šè‰Œè‰è‰Žè‰è‰‘è‰’è‰“è‰”è‰•è‰–è‰—è‰™è‰›è‰œè‰è‰žè‰ è‰¡è‰¢è‰£è‰¤è‰¥è‰¦è‰§è‰©æ‹§æ³žç‰›æ‰­é’®çº½è„“æµ“å†œå¼„å¥´åŠªæ€’å¥³æš–è™ç–ŸæŒªæ‡¦ç³¯è¯ºå“¦æ¬§é¸¥æ®´è—•å‘•å¶æ²¤å•ªè¶´çˆ¬å¸•æ€•ç¶æ‹æŽ’ç‰Œå¾˜æ¹ƒæ´¾æ”€æ½˜ç›˜ç£ç›¼ç•”åˆ¤å›ä¹“åºžæ—è€ªèƒ–æŠ›å’†åˆ¨ç‚®è¢è·‘æ³¡å‘¸èƒšåŸ¹è£´èµ”é™ªé…ä½©æ²›å–·ç›†ç °æŠ¨çƒ¹æ¾Žå½­è“¬æ£šç¡¼ç¯·è†¨æœ‹é¹æ§ç¢°å¯ç ’éœ¹æ‰¹æŠ«åŠˆçµæ¯—ï¿½".split("");for(a=0;a!=t[197].length;++a)if(t[197][a].charCodeAt(0)!==65533){r[t[197][a]]=50432+a;e[50432+a]=t[197][a]}t[198]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è‰ªè‰«è‰¬è‰­è‰±è‰µè‰¶è‰·è‰¸è‰»è‰¼èŠ€èŠèŠƒèŠ…èŠ†èŠ‡èŠ‰èŠŒèŠèŠ“èŠ”èŠ•èŠ–èŠšèŠ›èŠžèŠ èŠ¢èŠ£èŠ§èŠ²èŠµèŠ¶èŠºèŠ»èŠ¼èŠ¿è‹€è‹‚è‹ƒè‹…è‹†è‹‰è‹è‹–è‹™è‹šè‹è‹¢è‹§è‹¨è‹©è‹ªè‹¬è‹­è‹®è‹°è‹²è‹³è‹µè‹¶è‹¸ï¿½è‹ºè‹¼è‹½è‹¾è‹¿èŒ€èŒŠèŒ‹èŒèŒèŒ’èŒ“èŒ–èŒ˜èŒ™èŒèŒžèŒŸèŒ èŒ¡èŒ¢èŒ£èŒ¤èŒ¥èŒ¦èŒ©èŒªèŒ®èŒ°èŒ²èŒ·èŒ»èŒ½å•¤è„¾ç–²çš®åŒ¹ç—žåƒ»å±è­¬ç¯‡åç‰‡éª—é£˜æ¼‚ç“¢ç¥¨æ’‡çž¥æ‹¼é¢‘è´«å“è˜ä¹’åªè‹¹èå¹³å‡­ç“¶è¯„å±å¡æ³¼é¢‡å©†ç ´é­„è¿«ç²•å‰–æ‰‘é“ºä»†èŽ†è‘¡è©è’²åŸ”æœ´åœƒæ™®æµ¦è°±æ›ç€‘æœŸæ¬ºæ –æˆšå¦»ä¸ƒå‡„æ¼†æŸ’æ²å…¶æ£‹å¥‡æ­§ç•¦å´Žè„é½æ——ç¥ˆç¥éª‘èµ·å²‚ä¹žä¼å¯å¥‘ç Œå™¨æ°”è¿„å¼ƒæ±½æ³£è®«æŽï¿½".split("");for(a=0;a!=t[198].length;++a)if(t[198][a].charCodeAt(0)!==65533){r[t[198][a]]=50688+a;e[50688+a]=t[198][a]}t[199]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½èŒ¾èŒ¿èè‚è„è…èˆèŠè‹èŒèèŽè“è•è–è—è˜è™èè¢è°è±è²è³è´èµè¶è¹èºè¾è¿èŽ€èŽèŽ‚èŽƒèŽ„èŽ‡èŽˆèŽŠèŽ‹èŽŒèŽèŽèŽèŽ‘èŽ”èŽ•èŽ–èŽ—èŽ™èŽšèŽèŽŸèŽ¡èŽ¢èŽ£èŽ¤èŽ¥èŽ¦èŽ§èŽ¬èŽ­èŽ®ï¿½èŽ¯èŽµèŽ»èŽ¾èŽ¿è‚èƒè„è†èˆè‰è‹èèŽèè‘è’è“è•è—è™èšè›èžè¢è£è¤è¦è§è¨è«è¬è­æ°æ´½ç‰µæ‰¦é’Žé“…åƒè¿ç­¾ä»Ÿè°¦ä¹¾é»”é’±é’³å‰æ½œé£æµ…è°´å ‘åµŒæ¬ æ­‰æžªå‘›è…”ç¾Œå¢™è”·å¼ºæŠ¢æ©‡é”¹æ•²æ‚„æ¡¥çž§ä¹”ä¾¨å·§éž˜æ’¬ç¿˜å³­ä¿çªåˆ‡èŒ„ä¸”æ€¯çªƒé’¦ä¾µäº²ç§¦ç´å‹¤èŠ¹æ“’ç¦½å¯æ²é’è½»æ°¢å€¾å¿æ¸…æ“Žæ™´æ°°æƒ…é¡·è¯·åº†ç¼ç©·ç§‹ä¸˜é‚±çƒæ±‚å›šé…‹æ³…è¶‹åŒºè›†æ›²èº¯å±ˆé©±æ¸ ï¿½".split("");for(a=0;a!=t[199].length;++a)if(t[199][a].charCodeAt(0)!==65533){r[t[199][a]]=50944+a;e[50944+a]=t[199][a]}t[200]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è®è¯è³è´èµè¶è·èºè»è¼è¾è¿è€è‚è…è‡èˆè‰èŠèè’è“è”è•è–è—è™èšè›èžèŸè è¡è¢è£è©èªè«è¬è­è®è¯è°è²è³è´èµè¶è·è¹èºè»è¾è¿è‘€è‘è‘‚è‘ƒè‘„è‘…è‘‡è‘ˆè‘‰ï¿½è‘Šè‘‹è‘Œè‘è‘Žè‘è‘è‘’è‘“è‘”è‘•è‘–è‘˜è‘è‘žè‘Ÿè‘ è‘¢è‘¤è‘¥è‘¦è‘§è‘¨è‘ªè‘®è‘¯è‘°è‘²è‘´è‘·è‘¹è‘»è‘¼å–å¨¶é¾‹è¶£åŽ»åœˆé¢§æƒé†›æ³‰å…¨ç—Šæ‹³çŠ¬åˆ¸åŠç¼ºç‚”ç˜¸å´é¹Šæ¦·ç¡®é›€è£™ç¾¤ç„¶ç‡ƒå†‰æŸ“ç“¤å£¤æ”˜åš·è®©é¥¶æ‰°ç»•æƒ¹çƒ­å£¬ä»äººå¿éŸ§ä»»è®¤åˆƒå¦Šçº«æ‰”ä»æ—¥æˆŽèŒ¸è“‰è£èžç†”æº¶å®¹ç»’å†—æ‰æŸ”è‚‰èŒ¹è •å„’å­ºå¦‚è¾±ä¹³æ±å…¥è¤¥è½¯é˜®è•Šç‘žé”é—°æ¶¦è‹¥å¼±æ’’æ´’è¨è…®é³ƒå¡žèµ›ä¸‰åï¿½".split("");for(a=0;a!=t[200].length;++a)if(t[200][a].charCodeAt(0)!==65533){r[t[200][a]]=51200+a;e[51200+a]=t[200][a]}t[201]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è‘½è‘¾è‘¿è’€è’è’ƒè’„è’…è’†è’Šè’è’è’è’‘è’’è’“è’”è’•è’–è’˜è’šè’›è’è’žè’Ÿè’ è’¢è’£è’¤è’¥è’¦è’§è’¨è’©è’ªè’«è’¬è’­è’®è’°è’±è’³è’µè’¶è’·è’»è’¼è’¾è“€è“‚è“ƒè“…è“†è“‡è“ˆè“‹è“Œè“Žè“è“’è“”è“•è“—ï¿½è“˜è“™è“šè“›è“œè“žè“¡è“¢è“¤è“§è“¨è“©è“ªè“«è“­è“®è“¯è“±è“²è“³è“´è“µè“¶è“·è“¸è“¹è“ºè“»è“½è“¾è”€è”è”‚ä¼žæ•£æ¡‘å—“ä¸§æ”éªšæ‰«å«‚ç‘Ÿè‰²æ¶©æ£®åƒ§èŽŽç ‚æ€åˆ¹æ²™çº±å‚»å•¥ç…žç­›æ™’çŠè‹«æ‰å±±åˆ ç…½è¡«é—ªé™•æ“…èµ¡è†³å–„æ±•æ‰‡ç¼®å¢’ä¼¤å•†èµæ™Œä¸Šå°šè£³æ¢¢æŽç¨çƒ§èŠå‹ºéŸ¶å°‘å“¨é‚µç»å¥¢èµŠè›‡èˆŒèˆèµ¦æ‘„å°„æ…‘æ¶‰ç¤¾è®¾ç ·ç”³å‘»ä¼¸èº«æ·±å¨ ç»…ç¥žæ²ˆå®¡å©¶ç”šè‚¾æ…Žæ¸—å£°ç”Ÿç”¥ç‰²å‡ç»³ï¿½".split("");for(a=0;a!=t[201].length;++a)if(t[201][a].charCodeAt(0)!==65533){r[t[201][a]]=51456+a;e[51456+a]=t[201][a]}t[202]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è”ƒè”„è”…è”†è”‡è”ˆè”‰è”Šè”‹è”è”Žè”è”è”’è””è”•è”–è”˜è”™è”›è”œè”è”žè” è”¢è”£è”¤è”¥è”¦è”§è”¨è”©è”ªè”­è”®è”¯è”°è”±è”²è”³è”´è”µè”¶è”¾è”¿è•€è•è•‚è•„è•…è•†è•‡è•‹è•Œè•è•Žè•è•è•‘è•’è•“è•”è••ï¿½è•—è•˜è•šè•›è•œè•è•Ÿè• è•¡è•¢è•£è•¥è•¦è•§è•©è•ªè•«è•¬è•­è•®è•¯è•°è•±è•³è•µè•¶è•·è•¸è•¼è•½è•¿è–€è–çœç››å‰©èƒœåœ£å¸ˆå¤±ç‹®æ–½æ¹¿è¯—å°¸è™±åçŸ³æ‹¾æ—¶ä»€é£Ÿèš€å®žè¯†å²çŸ¢ä½¿å±Žé©¶å§‹å¼ç¤ºå£«ä¸–æŸ¿äº‹æ‹­èª“é€åŠ¿æ˜¯å—œå™¬é€‚ä»•ä¾é‡Šé¥°æ°å¸‚æƒå®¤è§†è¯•æ”¶æ‰‹é¦–å®ˆå¯¿æŽˆå”®å—ç˜¦å…½è”¬æž¢æ¢³æ®ŠæŠ’è¾“å”èˆ’æ·‘ç–ä¹¦èµŽå­°ç†Ÿè–¯æš‘æ›™ç½²èœ€é»é¼ å±žæœ¯è¿°æ ‘æŸæˆç«–å¢…åº¶æ•°æ¼±ï¿½".split("");for(a=0;a!=t[202].length;++a)if(t[202][a].charCodeAt(0)!==65533){r[t[202][a]]=51712+a;e[51712+a]=t[202][a]}t[203]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è–‚è–ƒè–†è–ˆè–‰è–Šè–‹è–Œè–è–Žè–è–‘è–’è–“è–”è–•è––è–—è–˜è–™è–šè–è–žè–Ÿè– è–¡è–¢è–£è–¥è–¦è–§è–©è–«è–¬è–­è–±è–²è–³è–´è–µè–¶è–¸è–ºè–»è–¼è–½è–¾è–¿è—€è—‚è—ƒè—„è—…è—†è—‡è—ˆè—Šè—‹è—Œè—è—Žè—‘è—’ï¿½è—”è—–è——è—˜è—™è—šè—›è—è—žè—Ÿè— è—¡è—¢è—£è—¥è—¦è—§è—¨è—ªè—«è—¬è—­è—®è—¯è—°è—±è—²è—³è—´è—µè—¶è—·è—¸æ•åˆ·è€æ‘”è¡°ç”©å¸…æ “æ‹´éœœåŒçˆ½è°æ°´ç¡ç¨Žå®çž¬é¡ºèˆœè¯´ç¡•æœ”çƒæ–¯æ’•å˜¶æ€ç§å¸ä¸æ­»è‚†å¯ºå—£å››ä¼ºä¼¼é¥²å·³æ¾è€¸æ€‚é¢‚é€å®‹è®¼è¯µæœè‰˜æ“žå—½è‹é…¥ä¿—ç´ é€Ÿç²Ÿåƒ³å¡‘æº¯å®¿è¯‰è‚ƒé…¸è’œç®—è™½éš‹éšç»¥é«“ç¢Žå²ç©—é‚éš§ç¥Ÿå­™æŸç¬‹è“‘æ¢­å”†ç¼©çç´¢é”æ‰€å¡Œä»–å®ƒå¥¹å¡”ï¿½".split("");for(a=0;a!=t[203].length;++a)if(t[203][a].charCodeAt(0)!==65533){r[t[203][a]]=51968+a;e[51968+a]=t[203][a]}t[204]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è—¹è—ºè—¼è—½è—¾è˜€è˜è˜‚è˜ƒè˜„è˜†è˜‡è˜ˆè˜‰è˜Šè˜‹è˜Œè˜è˜Žè˜è˜è˜’è˜“è˜”è˜•è˜—è˜˜è˜™è˜šè˜›è˜œè˜è˜žè˜Ÿè˜ è˜¡è˜¢è˜£è˜¤è˜¥è˜¦è˜¨è˜ªè˜«è˜¬è˜­è˜®è˜¯è˜°è˜±è˜²è˜³è˜´è˜µè˜¶è˜·è˜¹è˜ºè˜»è˜½è˜¾è˜¿è™€ï¿½è™è™‚è™ƒè™„è™…è™†è™‡è™ˆè™‰è™Šè™‹è™Œè™’è™“è™•è™–è™—è™˜è™™è™›è™œè™è™Ÿè™ è™¡è™£è™¤è™¥è™¦è™§è™¨è™©è™ªç­æŒžè¹‹è¸èƒŽè‹”æŠ¬å°æ³°é…žå¤ªæ€æ±°åæ‘Šè´ªç˜«æ»©å›æª€ç—°æ½­è°­è°ˆå¦æ¯¯è¢’ç¢³æŽ¢å¹ç‚­æ±¤å¡˜æªå ‚æ£ è†›å”ç³–å€˜èººæ·Œè¶Ÿçƒ«æŽæ¶›æ»”ç»¦è„æ¡ƒé€ƒæ·˜é™¶è®¨å¥—ç‰¹è—¤è…¾ç–¼èªŠæ¢¯å‰”è¸¢é”‘æé¢˜è¹„å•¼ä½“æ›¿åšæƒ•æ¶•å‰ƒå±‰å¤©æ·»å¡«ç”°ç”œæ¬èˆ”è…†æŒ‘æ¡è¿¢çœºè·³è´´é“å¸–åŽ…å¬çƒƒï¿½".split("");for(a=0;a!=t[204].length;++a)if(t[204][a].charCodeAt(0)!==65533){r[t[204][a]]=52224+a;e[52224+a]=t[204][a]}t[205]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è™­è™¯è™°è™²è™³è™´è™µè™¶è™·è™¸èšƒèš„èš…èš†èš‡èšˆèš‰èšŽèšèšèš‘èš’èš”èš–èš—èš˜èš™èššèš›èšžèšŸèš èš¡èš¢èš¥èš¦èš«èš­èš®èš²èš³èš·èš¸èš¹èš»èš¼èš½èš¾èš¿è›è›‚è›ƒè›…è›ˆè›Œè›è›’è›“è›•è›–è›—è›šè›œï¿½è›è› è›¡è›¢è›£è›¥è›¦è›§è›¨è›ªè›«è›¬è›¯è›µè›¶è›·è›ºè›»è›¼è›½è›¿èœèœ„èœ…èœ†èœ‹èœŒèœŽèœèœèœ‘èœ”èœ–æ±€å»·åœäº­åº­æŒºè‰‡é€šæ¡é…®çž³åŒé“œå½¤ç«¥æ¡¶æ…ç­’ç»Ÿç—›å·æŠ•å¤´é€å‡¸ç§ƒçªå›¾å¾’é€”æ¶‚å± åœŸåå…”æ¹å›¢æŽ¨é¢“è…¿èœ•è¤ªé€€åžå±¯è‡€æ‹–æ‰˜è„±é¸µé™€é©®é©¼æ¤­å¦¥æ‹“å”¾æŒ–å“‡è›™æ´¼å¨ƒç“¦è¢œæ­ªå¤–è±Œå¼¯æ¹¾çŽ©é¡½ä¸¸çƒ·å®Œç¢—æŒ½æ™šçš–æƒ‹å®›å©‰ä¸‡è…•æ±ªçŽ‹äº¡æž‰ç½‘å¾€æ—ºæœ›å¿˜å¦„å¨ï¿½".split("");for(a=0;a!=t[205].length;++a)if(t[205][a].charCodeAt(0)!==65533){r[t[205][a]]=52480+a;e[52480+a]=t[205][a]}t[206]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½èœ™èœ›èœèœŸèœ èœ¤èœ¦èœ§èœ¨èœªèœ«èœ¬èœ­èœ¯èœ°èœ²èœ³èœµèœ¶èœ¸èœ¹èœºèœ¼èœ½è€èè‚èƒè„è…è†èŠè‹èèèè‘è’è”è•è–è˜èšè›èœèèžèŸè¡è¢è¦è§è¨è©èªè«è¬è­è¯è±è²è³èµï¿½è·è¸è¹èºè¿èž€èžèž„èž†èž‡èž‰èžŠèžŒèžŽèžèžèž‘èž’èž”èž•èž–èž˜èž™èžšèž›èžœèžèžžèž èž¡èž¢èž£èž¤å·å¾®å±éŸ¦è¿æ¡…å›´å”¯æƒŸä¸ºæ½ç»´è‹‡èŽå§”ä¼Ÿä¼ªå°¾çº¬æœªè”šå‘³ç•èƒƒå–‚é­ä½æ¸­è°“å°‰æ…°å«ç˜Ÿæ¸©èšŠæ–‡é—»çº¹å»ç¨³ç´Šé—®å—¡ç¿ç“®æŒèœ—æ¶¡çªæˆ‘æ–¡å§æ¡æ²ƒå·«å‘œé’¨ä¹Œæ±¡è¯¬å±‹æ— èŠœæ¢§å¾å´æ¯‹æ­¦äº”æ‚åˆèˆžä¼ä¾®åžæˆŠé›¾æ™¤ç‰©å‹¿åŠ¡æ‚Ÿè¯¯æ˜”ç†™æžè¥¿ç¡’çŸ½æ™°å˜»å¸é”¡ç‰ºï¿½".split("");for(a=0;a!=t[206].length;++a)if(t[206][a].charCodeAt(0)!==65533){r[t[206][a]]=52736+a;e[52736+a]=t[206][a]}t[207]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½èž¥èž¦èž§èž©èžªèž®èž°èž±èž²èž´èž¶èž·èž¸èž¹èž»èž¼èž¾èž¿èŸèŸ‚èŸƒèŸ„èŸ…èŸ‡èŸˆèŸ‰èŸŒèŸèŸŽèŸèŸèŸ”èŸ•èŸ–èŸ—èŸ˜èŸ™èŸšèŸœèŸèŸžèŸŸèŸ¡èŸ¢èŸ£èŸ¤èŸ¦èŸ§èŸ¨èŸ©èŸ«èŸ¬èŸ­èŸ¯èŸ°èŸ±èŸ²èŸ³èŸ´èŸµèŸ¶èŸ·èŸ¸ï¿½èŸºèŸ»èŸ¼èŸ½èŸ¿è €è è ‚è „è …è †è ‡è ˆè ‰è ‹è Œè è Žè è è ‘è ’è ”è —è ˜è ™è šè œè è žè Ÿè  è £ç¨€æ¯å¸Œæ‚‰è†å¤•æƒœç†„çƒ¯æºªæ±çŠ€æª„è¢­å¸­ä¹ åª³å–œé“£æ´—ç³»éš™æˆç»†çžŽè™¾åŒ£éœžè¾–æš‡å³¡ä¾ ç‹­ä¸‹åŽ¦å¤å“æŽ€é”¨å…ˆä»™é²œçº¤å’¸è´¤è¡”èˆ·é—²æ¶Žå¼¦å«Œæ˜¾é™©çŽ°çŒ®åŽ¿è…ºé¦…ç¾¡å®ªé™·é™çº¿ç›¸åŽ¢é•¶é¦™ç®±è¥„æ¹˜ä¹¡ç¿”ç¥¥è¯¦æƒ³å“äº«é¡¹å··æ©¡åƒå‘è±¡è§ç¡éœ„å‰Šå“®åš£é”€æ¶ˆå®µæ·†æ™“ï¿½".split("");for(a=0;a!=t[207].length;++a)if(t[207][a].charCodeAt(0)!==65533){r[t[207][a]]=52992+a;e[52992+a]=t[207][a]}t[208]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è ¤è ¥è ¦è §è ¨è ©è ªè «è ¬è ­è ®è ¯è °è ±è ³è ´è µè ¶è ·è ¸è ºè »è ½è ¾è ¿è¡è¡‚è¡ƒè¡†è¡‡è¡ˆè¡‰è¡Šè¡‹è¡Žè¡è¡è¡‘è¡’è¡“è¡•è¡–è¡˜è¡šè¡›è¡œè¡è¡žè¡Ÿè¡ è¡¦è¡§è¡ªè¡­è¡¯è¡±è¡³è¡´è¡µè¡¶è¡¸è¡¹è¡ºï¿½è¡»è¡¼è¢€è¢ƒè¢†è¢‡è¢‰è¢Šè¢Œè¢Žè¢è¢è¢‘è¢“è¢”è¢•è¢—è¢˜è¢™è¢šè¢›è¢è¢žè¢Ÿè¢ è¢¡è¢£è¢¥è¢¦è¢§è¢¨è¢©è¢ªå°å­æ ¡è‚–å•¸ç¬‘æ•ˆæ¥”äº›æ­‡èŽéž‹åæŒŸæºé‚ªæ–œèƒè°å†™æ¢°å¸èŸ¹æ‡ˆæ³„æ³»è°¢å±‘è–ªèŠ¯é”Œæ¬£è¾›æ–°å¿»å¿ƒä¿¡è¡…æ˜Ÿè…¥çŒ©æƒºå…´åˆ‘åž‹å½¢é‚¢è¡Œé†’å¹¸ææ€§å§“å…„å‡¶èƒ¸åŒˆæ±¹é›„ç†Šä¼‘ä¿®ç¾žæœ½å—…é”ˆç§€è¢–ç»£å¢ŸæˆŒéœ€è™šå˜˜é¡»å¾è®¸è“„é…—å™æ—­åºç•œæ¤çµ®å©¿ç»ªç»­è½©å–§å®£æ‚¬æ—‹çŽ„ï¿½".split("");for(a=0;a!=t[208].length;++a)if(t[208][a].charCodeAt(0)!==65533){r[t[208][a]]=53248+a;e[53248+a]=t[208][a]}t[209]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¢¬è¢®è¢¯è¢°è¢²è¢³è¢´è¢µè¢¶è¢¸è¢¹è¢ºè¢»è¢½è¢¾è¢¿è£€è£ƒè£„è£‡è£ˆè£Šè£‹è£Œè£è£è£è£‘è£“è£–è£—è£šè£›è£œè£è£žè£ è£¡è£¦è£§è£©è£ªè£«è£¬è£­è£®è£¯è£²è£µè£¶è£·è£ºè£»è£½è£¿è¤€è¤è¤ƒè¤„è¤…è¤†è¤‡è¤ˆï¿½è¤‰è¤‹è¤Œè¤è¤Žè¤è¤‘è¤”è¤•è¤–è¤—è¤˜è¤œè¤è¤žè¤Ÿè¤ è¤¢è¤£è¤¤è¤¦è¤§è¤¨è¤©è¤¬è¤­è¤®è¤¯è¤±è¤²è¤³è¤µè¤·é€‰ç™£çœ©ç»šé´è–›å­¦ç©´é›ªè¡€å‹‹ç†å¾ªæ—¬è¯¢å¯»é©¯å·¡æ®‰æ±›è®­è®¯é€Šè¿…åŽ‹æŠ¼é¸¦é¸­å‘€ä¸«èŠ½ç‰™èšœå´–è¡™æ¶¯é›…å“‘äºšè®¶ç„‰å’½é˜‰çƒŸæ·¹ç›ä¸¥ç ”èœ’å²©å»¶è¨€é¢œé˜Žç‚Žæ²¿å¥„æŽ©çœ¼è¡æ¼”è‰³å °ç‡•åŽŒç šé›å”å½¦ç„°å®´è°šéªŒæ®ƒå¤®é¸¯ç§§æ¨æ‰¬ä½¯ç–¡ç¾Šæ´‹é˜³æ°§ä»°ç—’å…»æ ·æ¼¾é‚€è…°å¦–ç‘¶ï¿½".split("");for(a=0;a!=t[209].length;++a)if(t[209][a].charCodeAt(0)!==65533){r[t[209][a]]=53504+a;e[53504+a]=t[209][a]}t[210]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¤¸è¤¹è¤ºè¤»è¤¼è¤½è¤¾è¤¿è¥€è¥‚è¥ƒè¥…è¥†è¥‡è¥ˆè¥‰è¥Šè¥‹è¥Œè¥è¥Žè¥è¥è¥‘è¥’è¥“è¥”è¥•è¥–è¥—è¥˜è¥™è¥šè¥›è¥œè¥è¥ è¥¡è¥¢è¥£è¥¤è¥¥è¥§è¥¨è¥©è¥ªè¥«è¥¬è¥­è¥®è¥¯è¥°è¥±è¥²è¥³è¥´è¥µè¥¶è¥·è¥¸è¥¹è¥ºè¥¼ï¿½è¥½è¥¾è¦€è¦‚è¦„è¦…è¦‡è¦ˆè¦‰è¦Šè¦‹è¦Œè¦è¦Žè¦è¦è¦‘è¦’è¦“è¦”è¦•è¦–è¦—è¦˜è¦™è¦šè¦›è¦œè¦è¦žè¦Ÿè¦ è¦¡æ‘‡å°§é¥çª‘è°£å§šå’¬èˆ€è¯è¦è€€æ¤°å™Žè€¶çˆ·é‡Žå†¶ä¹Ÿé¡µæŽ–ä¸šå¶æ›³è…‹å¤œæ¶²ä¸€å£¹åŒ»æ–é“±ä¾ä¼Šè¡£é¢å¤·é—ç§»ä»ªèƒ°ç–‘æ²‚å®œå§¨å½æ¤…èšå€šå·²ä¹™çŸ£ä»¥è‰ºæŠ‘æ˜“é‚‘å±¹äº¿å½¹è‡†é€¸è‚„ç–«äº¦è£”æ„æ¯…å¿†ä¹‰ç›Šæº¢è¯£è®®è°Šè¯‘å¼‚ç¿¼ç¿Œç»ŽèŒµè«å› æ®·éŸ³é˜´å§»åŸé“¶æ·«å¯…é¥®å°¹å¼•éšï¿½".split("");for(a=0;a!=t[210].length;++a)if(t[210][a].charCodeAt(0)!==65533){r[t[210][a]]=53760+a;e[53760+a]=t[210][a]}t[211]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¦¢è¦£è¦¤è¦¥è¦¦è¦§è¦¨è¦©è¦ªè¦«è¦¬è¦­è¦®è¦¯è¦°è¦±è¦²è¦³è¦´è¦µè¦¶è¦·è¦¸è¦¹è¦ºè¦»è¦¼è¦½è¦¾è¦¿è§€è§ƒè§è§“è§”è§•è§—è§˜è§™è§›è§è§Ÿè§ è§¡è§¢è§¤è§§è§¨è§©è§ªè§¬è§­è§®è§°è§±è§²è§´è§µè§¶è§·è§¸è§¹è§ºï¿½è§»è§¼è§½è§¾è§¿è¨è¨‚è¨ƒè¨„è¨…è¨†è¨ˆè¨‰è¨Šè¨‹è¨Œè¨è¨Žè¨è¨è¨‘è¨’è¨“è¨”è¨•è¨–è¨—è¨˜è¨™è¨šè¨›è¨œè¨å°è‹±æ¨±å©´é¹°åº”ç¼¨èŽ¹è¤è¥è§è‡è¿Žèµ¢ç›ˆå½±é¢–ç¡¬æ˜ å“Ÿæ‹¥ä½£è‡ƒç—ˆåº¸é›è¸Šè›¹å’æ³³æ¶Œæ°¸æ¿å‹‡ç”¨å¹½ä¼˜æ‚ å¿§å°¤ç”±é‚®é“€çŠ¹æ²¹æ¸¸é…‰æœ‰å‹å³ä½‘é‡‰è¯±åˆå¹¼è¿‚æ·¤äºŽç›‚æ¦†è™žæ„šèˆ†ä½™ä¿žé€¾é±¼æ„‰æ¸æ¸”éš…äºˆå¨±é›¨ä¸Žå±¿ç¦¹å®‡è¯­ç¾½çŽ‰åŸŸèŠ‹éƒåé‡å–»å³ªå¾¡æ„ˆæ¬²ç‹±è‚²èª‰ï¿½".split("");for(a=0;a!=t[211].length;++a)if(t[211][a].charCodeAt(0)!==65533){r[t[211][a]]=54016+a;e[54016+a]=t[211][a]}t[212]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¨žè¨Ÿè¨ è¨¡è¨¢è¨£è¨¤è¨¥è¨¦è¨§è¨¨è¨©è¨ªè¨«è¨¬è¨­è¨®è¨¯è¨°è¨±è¨²è¨³è¨´è¨µè¨¶è¨·è¨¸è¨¹è¨ºè¨»è¨¼è¨½è¨¿è©€è©è©‚è©ƒè©„è©…è©†è©‡è©‰è©Šè©‹è©Œè©è©Žè©è©è©‘è©’è©“è©”è©•è©–è©—è©˜è©™è©šè©›è©œè©è©žï¿½è©Ÿè© è©¡è©¢è©£è©¤è©¥è©¦è©§è©¨è©©è©ªè©«è©¬è©­è©®è©¯è©°è©±è©²è©³è©´è©µè©¶è©·è©¸è©ºè©»è©¼è©½è©¾è©¿èª€æµ´å¯“è£•é¢„è±«é©­é¸³æ¸Šå†¤å…ƒåž£è¢åŽŸæ´è¾•å›­å‘˜åœ†çŒ¿æºç¼˜è¿œè‹‘æ„¿æ€¨é™¢æ›°çº¦è¶Šè·ƒé’¥å²³ç²¤æœˆæ‚¦é˜…è€˜äº‘éƒ§åŒ€é™¨å…è¿è•´é…æ™•éŸµå­•åŒç ¸æ‚æ ½å“‰ç¾å®°è½½å†åœ¨å’±æ”’æš‚èµžèµƒè„è‘¬é­ç³Ÿå‡¿è—»æž£æ—©æ¾¡èš¤èºå™ªé€ çš‚ç¶ç‡¥è´£æ‹©åˆ™æ³½è´¼æ€Žå¢žæ†Žæ›¾èµ æ‰Žå–³æ¸£æœ­è½§ï¿½".split("");for(a=0;a!=t[212].length;++a)if(t[212][a].charCodeAt(0)!==65533){r[t[212][a]]=54272+a;e[54272+a]=t[212][a]}t[213]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½èªèª‚èªƒèª„èª…èª†èª‡èªˆèª‹èªŒèªèªŽèªèªèª‘èª’èª”èª•èª–èª—èª˜èª™èªšèª›èªœèªèªžèªŸèª èª¡èª¢èª£èª¤èª¥èª¦èª§èª¨èª©èªªèª«èª¬èª­èª®èª¯èª°èª±èª²èª³èª´èªµèª¶èª·èª¸èª¹èªºèª»èª¼èª½èª¾èª¿è«€è«è«‚ï¿½è«ƒè«„è«…è«†è«‡è«ˆè«‰è«Šè«‹è«Œè«è«Žè«è«è«‘è«’è«“è«”è«•è«–è«—è«˜è«™è«šè«›è«œè«è«žè«Ÿè« è«¡è«¢è«£é“¡é—¸çœ¨æ …æ¦¨å’‹ä¹ç‚¸è¯ˆæ‘˜æ–‹å®…çª„å€ºå¯¨çž»æ¯¡è©¹ç²˜æ²¾ç›æ–©è¾—å´­å±•è˜¸æ ˆå æˆ˜ç«™æ¹›ç»½æ¨Ÿç« å½°æ¼³å¼ æŽŒæ¶¨æ–ä¸ˆå¸è´¦ä»—èƒ€ç˜´éšœæ‹›æ˜­æ‰¾æ²¼èµµç…§ç½©å…†è‚‡å¬é®æŠ˜å“²è›°è¾™è€…é”—è”—è¿™æµ™çæ–ŸçœŸç”„ç §è‡»è´žé’ˆä¾¦æž•ç–¹è¯Šéœ‡æŒ¯é•‡é˜µè’¸æŒ£çå¾ç‹°äº‰æ€”æ•´æ‹¯æ­£æ”¿ï¿½".split("");for(a=0;a!=t[213].length;++a)if(t[213][a].charCodeAt(0)!==65533){r[t[213][a]]=54528+a;e[54528+a]=t[213][a]}t[214]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è«¤è«¥è«¦è«§è«¨è«©è«ªè««è«¬è«­è«®è«¯è«°è«±è«²è«³è«´è«µè«¶è«·è«¸è«¹è«ºè«»è«¼è«½è«¾è«¿è¬€è¬è¬‚è¬ƒè¬„è¬…è¬†è¬ˆè¬‰è¬Šè¬‹è¬Œè¬è¬Žè¬è¬è¬‘è¬’è¬“è¬”è¬•è¬–è¬—è¬˜è¬™è¬šè¬›è¬œè¬è¬žè¬Ÿè¬ è¬¡è¬¢è¬£ï¿½è¬¤è¬¥è¬§è¬¨è¬©è¬ªè¬«è¬¬è¬­è¬®è¬¯è¬°è¬±è¬²è¬³è¬´è¬µè¬¶è¬·è¬¸è¬¹è¬ºè¬»è¬¼è¬½è¬¾è¬¿è­€è­è­‚è­ƒè­„è­…å¸§ç—‡éƒ‘è¯èŠæžæ”¯å±èœ˜çŸ¥è‚¢è„‚æ±ä¹‹ç»‡èŒç›´æ¤æ®–æ‰§å€¼ä¾„å€æŒ‡æ­¢è¶¾åªæ—¨çº¸å¿—æŒšæŽ·è‡³è‡´ç½®å¸œå³™åˆ¶æ™ºç§©ç¨šè´¨ç‚™ç—”æ»žæ²»çª’ä¸­ç›…å¿ é’Ÿè¡·ç»ˆç§è‚¿é‡ä»²ä¼—èˆŸå‘¨å·žæ´²è¯Œç²¥è½´è‚˜å¸šå’’çš±å®™æ˜¼éª¤ç æ ªè››æœ±çŒªè¯¸è¯›é€ç«¹çƒ›ç…®æ‹„çž©å˜±ä¸»è‘—æŸ±åŠ©è›€è´®é“¸ç­‘ï¿½".split("");for(a=0;a!=t[214].length;++a)if(t[214][a].charCodeAt(0)!==65533){r[t[214][a]]=54784+a;e[54784+a]=t[214][a]}t[215]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è­†è­‡è­ˆè­‰è­Šè­‹è­Œè­è­Žè­è­è­‘è­’è­“è­”è­•è­–è­—è­˜è­™è­šè­›è­œè­è­žè­Ÿè­ è­¡è­¢è­£è­¤è­¥è­§è­¨è­©è­ªè­«è­­è­®è­¯è­°è­±è­²è­³è­´è­µè­¶è­·è­¸è­¹è­ºè­»è­¼è­½è­¾è­¿è®€è®è®‚è®ƒè®„è®…è®†ï¿½è®‡è®ˆè®‰è®Šè®‹è®Œè®è®Žè®è®è®‘è®’è®“è®”è®•è®–è®—è®˜è®™è®šè®›è®œè®è®žè®Ÿè®¬è®±è®»è¯‡è¯è¯ªè°‰è°žä½æ³¨ç¥é©»æŠ“çˆªæ‹½ä¸“ç –è½¬æ’°èµšç¯†æ¡©åº„è£…å¦†æ’žå£®çŠ¶æ¤Žé”¥è¿½èµ˜å ç¼€è°†å‡†æ‰æ‹™å“æ¡Œç¢èŒé…Œå•„ç€ç¼æµŠå…¹å’¨èµ„å§¿æ»‹æ·„å­œç´«ä»”ç±½æ»“å­è‡ªæ¸å­—é¬ƒæ£•è¸ªå®—ç»¼æ€»çºµé‚¹èµ°å¥æç§Ÿè¶³å’æ—ç¥–è¯…é˜»ç»„é’»çº‚å˜´é†‰æœ€ç½ªå°Šéµæ˜¨å·¦ä½æŸžåšä½œååº§ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[215].length;++a)if(t[215][a].charCodeAt(0)!==65533){r[t[215][a]]=55040+a;e[55040+a]=t[215][a]}t[216]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è°¸è°¹è°ºè°»è°¼è°½è°¾è°¿è±€è±‚è±ƒè±„è±…è±ˆè±Šè±‹è±è±Žè±è±è±‘è±’è±“è±”è±–è±—è±˜è±™è±›è±œè±è±žè±Ÿè± è±£è±¤è±¥è±¦è±§è±¨è±©è±¬è±­è±®è±¯è±°è±±è±²è±´è±µè±¶è±·è±»è±¼è±½è±¾è±¿è²€è²è²ƒè²„è²†è²‡ï¿½è²ˆè²‹è²è²Žè²è²è²‘è²’è²“è²•è²–è²—è²™è²šè²›è²œè²è²žè²Ÿè² è²¡è²¢è²£è²¤è²¥è²¦è²§è²¨è²©è²ªè²«è²¬è²­äºä¸Œå…€ä¸å»¿å…ä¸•äº˜ä¸žé¬²å­¬å™©ä¸¨ç¦ºä¸¿åŒ•ä¹‡å¤­çˆ»å®æ°å›Ÿèƒ¤é¦—æ¯“ç¾é¼—ä¸¶äºŸé¼ä¹œä¹©äº“èŠˆå­›å•¬å˜ä»„åŽåŽåŽ£åŽ¥åŽ®é¥èµåŒšåµåŒ¦åŒ®åŒ¾èµœå¦å£åˆ‚åˆˆåˆŽåˆ­åˆ³åˆ¿å‰€å‰Œå‰žå‰¡å‰œè’¯å‰½åŠ‚åŠåŠåŠ“å†‚ç½”äº»ä»ƒä»‰ä»‚ä»¨ä»¡ä»«ä»žä¼›ä»³ä¼¢ä½¤ä»µä¼¥ä¼§ä¼‰ä¼«ä½žä½§æ”¸ä½šä½ï¿½".split("");for(a=0;a!=t[216].length;++a)if(t[216][a].charCodeAt(0)!==65533){r[t[216][a]]=55296+a;e[55296+a]=t[216][a]}t[217]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è²®è²¯è²°è²±è²²è²³è²´è²µè²¶è²·è²¸è²¹è²ºè²»è²¼è²½è²¾è²¿è³€è³è³‚è³ƒè³„è³…è³†è³‡è³ˆè³‰è³Šè³‹è³Œè³è³Žè³è³è³‘è³’è³“è³”è³•è³–è³—è³˜è³™è³šè³›è³œè³è³žè³Ÿè³ è³¡è³¢è³£è³¤è³¥è³¦è³§è³¨è³©è³ªè³«è³¬ï¿½è³­è³®è³¯è³°è³±è³²è³³è³´è³µè³¶è³·è³¸è³¹è³ºè³»è³¼è³½è³¾è³¿è´€è´è´‚è´ƒè´„è´…è´†è´‡è´ˆè´‰è´Šè´‹è´Œè´ä½Ÿä½—ä¼²ä¼½ä½¶ä½´ä¾‘ä¾‰ä¾ƒä¾ä½¾ä½»ä¾ªä½¼ä¾¬ä¾”ä¿¦ä¿¨ä¿ªä¿…ä¿šä¿£ä¿œä¿‘ä¿Ÿä¿¸å€©åŒä¿³å€¬å€å€®å€­ä¿¾å€œå€Œå€¥å€¨å¾åƒå•åˆåŽå¬å»å‚¥å‚§å‚©å‚ºåƒ–å„†åƒ­åƒ¬åƒ¦åƒ®å„‡å„‹ä»æ°½ä½˜ä½¥ä¿Žé¾ æ±†ç±´å…®å·½é»‰é¦˜å†å¤”å‹¹åŒè¨‡åŒå‡«å¤™å…•äº å…–äº³è¡®è¢¤äºµè„”è£’ç¦€å¬´è ƒç¾¸å†«å†±å†½å†¼ï¿½".split("");for(a=0;a!=t[217].length;++a)if(t[217][a].charCodeAt(0)!==65533){r[t[217][a]]=55552+a;e[55552+a]=t[217][a]}t[218]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è´Žè´è´è´‘è´’è´“è´”è´•è´–è´—è´˜è´™è´šè´›è´œè´ èµ‘èµ’èµ—èµŸèµ¥èµ¨èµ©èµªèµ¬èµ®èµ¯èµ±èµ²èµ¸èµ¹èµºèµ»èµ¼èµ½èµ¾èµ¿è¶€è¶‚è¶ƒè¶†è¶‡è¶ˆè¶‰è¶Œè¶è¶Žè¶è¶è¶’è¶“è¶•è¶–è¶—è¶˜è¶™è¶šè¶›è¶œè¶è¶žè¶ è¶¡ï¿½è¶¢è¶¤è¶¥è¶¦è¶§è¶¨è¶©è¶ªè¶«è¶¬è¶­è¶®è¶¯è¶°è¶²è¶¶è¶·è¶¹è¶»è¶½è·€è·è·‚è·…è·‡è·ˆè·‰è·Šè·è·è·’è·“è·”å‡‡å†–å†¢å†¥è® è®¦è®§è®ªè®´è®µè®·è¯‚è¯ƒè¯‹è¯è¯Žè¯’è¯“è¯”è¯–è¯˜è¯™è¯œè¯Ÿè¯ è¯¤è¯¨è¯©è¯®è¯°è¯³è¯¶è¯¹è¯¼è¯¿è°€è°‚è°„è°‡è°Œè°è°‘è°’è°”è°•è°–è°™è°›è°˜è°è°Ÿè° è°¡è°¥è°§è°ªè°«è°®è°¯è°²è°³è°µè°¶å©åºé˜é˜¢é˜¡é˜±é˜ªé˜½é˜¼é™‚é™‰é™”é™Ÿé™§é™¬é™²é™´éšˆéšéš—éš°é‚—é‚›é‚é‚™é‚¬é‚¡é‚´é‚³é‚¶é‚ºï¿½".split("");for(a=0;a!=t[218].length;++a)if(t[218][a].charCodeAt(0)!==65533){r[t[218][a]]=55808+a;e[55808+a]=t[218][a]}t[219]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è·•è·˜è·™è·œè· è·¡è·¢è·¥è·¦è·§è·©è·­è·®è·°è·±è·²è·´è·¶è·¼è·¾è·¿è¸€è¸è¸‚è¸ƒè¸„è¸†è¸‡è¸ˆè¸‹è¸è¸Žè¸è¸‘è¸’è¸“è¸•è¸–è¸—è¸˜è¸™è¸šè¸›è¸œè¸ è¸¡è¸¤è¸¥è¸¦è¸§è¸¨è¸«è¸­è¸°è¸²è¸³è¸´è¸¶è¸·è¸¸è¸»è¸¼è¸¾ï¿½è¸¿è¹ƒè¹…è¹†è¹Œè¹è¹Žè¹è¹è¹“è¹”è¹•è¹–è¹—è¹˜è¹šè¹›è¹œè¹è¹žè¹Ÿè¹ è¹¡è¹¢è¹£è¹¤è¹¥è¹§è¹¨è¹ªè¹«è¹®è¹±é‚¸é‚°éƒéƒ…é‚¾éƒéƒ„éƒ‡éƒ“éƒ¦éƒ¢éƒœéƒ—éƒ›éƒ«éƒ¯éƒ¾é„„é„¢é„žé„£é„±é„¯é„¹é…ƒé…†åˆå¥‚åŠ¢åŠ¬åŠ­åŠ¾å“¿å‹å‹–å‹°åŸç‡®çŸå»´å‡µå‡¼é¬¯åŽ¶å¼ç•šå·¯åŒåž©åž¡å¡¾å¢¼å£…å£‘åœ©åœ¬åœªåœ³åœ¹åœ®åœ¯åœåœ»å‚å©åž…å«åž†å¼å»å¨å­å¶å³åž­åž¤åžŒåž²åŸåž§åž´åž“åž åŸ•åŸ˜åŸšåŸ™åŸ’åž¸åŸ´åŸ¯åŸ¸åŸ¤åŸï¿½".split("");for(a=0;a!=t[219].length;++a)if(t[219][a].charCodeAt(0)!==65533){r[t[219][a]]=56064+a;e[56064+a]=t[219][a]}t[220]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¹³è¹µè¹·è¹¸è¹¹è¹ºè¹»è¹½è¹¾èº€èº‚èºƒèº„èº†èºˆèº‰èºŠèº‹èºŒèºèºŽèº‘èº’èº“èº•èº–èº—èº˜èº™èºšèº›èºèºŸèº èº¡èº¢èº£èº¤èº¥èº¦èº§èº¨èº©èºªèº­èº®èº°èº±èº³èº´èºµèº¶èº·èº¸èº¹èº»èº¼èº½èº¾èº¿è»€è»è»‚ï¿½è»ƒè»„è»…è»†è»‡è»ˆè»‰è»Šè»‹è»Œè»è»è»è»‘è»’è»“è»”è»•è»–è»—è»˜è»™è»šè»›è»œè»è»žè»Ÿè» è»¡è»¢è»£è»¤å ‹å åŸ½åŸ­å €å žå ™å¡„å  å¡¥å¡¬å¢å¢‰å¢šå¢€é¦¨é¼™æ‡¿è‰¹è‰½è‰¿èŠèŠŠèŠ¨èŠ„èŠŽèŠ‘èŠ—èŠ™èŠ«èŠ¸èŠ¾èŠ°è‹ˆè‹Šè‹£èŠ˜èŠ·èŠ®è‹‹è‹Œè‹èŠ©èŠ´èŠ¡èŠªèŠŸè‹„è‹ŽèŠ¤è‹¡èŒ‰è‹·è‹¤èŒèŒ‡è‹œè‹´è‹’è‹˜èŒŒè‹»è‹“èŒ‘èŒšèŒ†èŒ”èŒ•è‹ è‹•èŒœè‘è›èœèŒˆèŽ’èŒ¼èŒ´èŒ±èŽ›èžèŒ¯èè‡èƒèŸè€èŒ—è èŒ­èŒºèŒ³è¦è¥ï¿½".split("");for(a=0;a!=t[220].length;++a)if(t[220][a].charCodeAt(0)!==65533){r[t[220][a]]=56320+a;e[56320+a]=t[220][a]}t[221]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è»¥è»¦è»§è»¨è»©è»ªè»«è»¬è»­è»®è»¯è»°è»±è»²è»³è»´è»µè»¶è»·è»¸è»¹è»ºè»»è»¼è»½è»¾è»¿è¼€è¼è¼‚è¼ƒè¼„è¼…è¼†è¼‡è¼ˆè¼‰è¼Šè¼‹è¼Œè¼è¼Žè¼è¼è¼‘è¼’è¼“è¼”è¼•è¼–è¼—è¼˜è¼™è¼šè¼›è¼œè¼è¼žè¼Ÿè¼ è¼¡è¼¢è¼£ï¿½è¼¤è¼¥è¼¦è¼§è¼¨è¼©è¼ªè¼«è¼¬è¼­è¼®è¼¯è¼°è¼±è¼²è¼³è¼´è¼µè¼¶è¼·è¼¸è¼¹è¼ºè¼»è¼¼è¼½è¼¾è¼¿è½€è½è½‚è½ƒè½„è¨èŒ›è©è¬èªè­è®èŽ°è¸èŽ³èŽ´èŽ èŽªèŽ“èŽœèŽ…è¼èŽ¶èŽ©è½èŽ¸è»èŽ˜èŽžèŽ¨èŽºèŽ¼èèè¥è˜å ‡è˜è‹èè½è–èœè¸è‘è†è”èŸèèƒè¸è¹èªè…è€è¦è°è¡è‘œè‘‘è‘šè‘™è‘³è’‡è’ˆè‘ºè’‰è‘¸è¼è‘†è‘©è‘¶è’Œè’Žè±è‘­è“è“è“è“¦è’½è““è“Šè’¿è’ºè“ è’¡è’¹è’´è’—è“¥è“£è”Œç”è”¸è“°è”¹è”Ÿè”ºï¿½".split("");for(a=0;a!=t[221].length;++a)if(t[221][a].charCodeAt(0)!==65533){r[t[221][a]]=56576+a;e[56576+a]=t[221][a]}t[222]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è½…è½†è½‡è½ˆè½‰è½Šè½‹è½Œè½è½Žè½è½è½‘è½’è½“è½”è½•è½–è½—è½˜è½™è½šè½›è½œè½è½žè½Ÿè½ è½¡è½¢è½£è½¤è½¥è½ªè¾€è¾Œè¾’è¾è¾ è¾¡è¾¢è¾¤è¾¥è¾¦è¾§è¾ªè¾¬è¾­è¾®è¾¯è¾²è¾³è¾´è¾µè¾·è¾¸è¾ºè¾»è¾¼è¾¿è¿€è¿ƒè¿†ï¿½è¿‰è¿Šè¿‹è¿Œè¿è¿è¿’è¿–è¿—è¿šè¿ è¿¡è¿£è¿§è¿¬è¿¯è¿±è¿²è¿´è¿µè¿¶è¿ºè¿»è¿¼è¿¾è¿¿é€‡é€ˆé€Œé€Žé€“é€•é€˜è•–è”»è“¿è“¼è•™è•ˆè•¨è•¤è•žè•ºçž¢è•ƒè•²è•»è–¤è–¨è–‡è–è•¹è–®è–œè–…è–¹è–·è–°è—“è—è—œè—¿è˜§è˜…è˜©è˜–è˜¼å»¾å¼ˆå¤¼å¥è€·å¥•å¥šå¥˜åŒå°¢å°¥å°¬å°´æ‰Œæ‰ªæŠŸæŠ»æ‹Šæ‹šæ‹—æ‹®æŒ¢æ‹¶æŒ¹æ‹æƒæŽ­æ¶æ±æºæŽŽæŽ´æ­æŽ¬æŽŠæ©æŽ®æŽ¼æ²æ¸æ æ¿æ„æžæŽæ‘’æ†æŽ¾æ‘…æ‘æ‹æ›æ æŒæ¦æ¡æ‘žæ’„æ‘­æ’–ï¿½".split("");for(a=0;a!=t[222].length;++a)if(t[222][a].charCodeAt(0)!==65533){r[t[222][a]]=56832+a;e[56832+a]=t[222][a]}t[223]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é€™é€œé€£é€¤é€¥é€§é€¨é€©é€ªé€«é€¬é€°é€±é€²é€³é€´é€·é€¹é€ºé€½é€¿é€éƒé…é†éˆé‰éŠé‹éŒéŽé”é•é–é™éšéœééžéŸé é¡é¤é¦é§é©éªé«é¬é¯é°é±é²é³é¶é·é¸é¹éºé»é¼é¾é‚ï¿½é‚„é‚…é‚†é‚‡é‚‰é‚Šé‚Œé‚é‚Žé‚é‚é‚’é‚”é‚–é‚˜é‚šé‚œé‚žé‚Ÿé‚ é‚¤é‚¥é‚§é‚¨é‚©é‚«é‚­é‚²é‚·é‚¼é‚½é‚¿éƒ€æ‘ºæ’·æ’¸æ’™æ’ºæ“€æ“æ“—æ“¤æ“¢æ”‰æ”¥æ”®å¼‹å¿’ç”™å¼‘åŸå±å½å©å¨å»å’å–å†å‘‹å‘’å‘“å‘”å‘–å‘ƒå¡å‘—å‘™å£å²å’‚å’”å‘·å‘±å‘¤å’šå’›å’„å‘¶å‘¦å’å“å’­å“‚å’´å“’å’§å’¦å““å“”å‘²å’£å“•å’»å’¿å“Œå“™å“šå“œå’©å’ªå’¤å“å“å“žå”›å“§å” å“½å””å“³å”¢å”£å”å”‘å”§å”ªå•§å–å–µå•‰å•­å•å••å”¿å•å”¼ï¿½".split("");for(a=0;a!=t[223].length;++a)if(t[223][a].charCodeAt(0)!==65533){r[t[223][a]]=57088+a;e[57088+a]=t[223][a]}t[224]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éƒ‚éƒƒéƒ†éƒˆéƒ‰éƒ‹éƒŒéƒéƒ’éƒ”éƒ•éƒ–éƒ˜éƒ™éƒšéƒžéƒŸéƒ éƒ£éƒ¤éƒ¥éƒ©éƒªéƒ¬éƒ®éƒ°éƒ±éƒ²éƒ³éƒµéƒ¶éƒ·éƒ¹éƒºéƒ»éƒ¼éƒ¿é„€é„é„ƒé„…é„†é„‡é„ˆé„‰é„Šé„‹é„Œé„é„Žé„é„é„‘é„’é„“é„”é„•é„–é„—é„˜é„šé„›é„œï¿½é„é„Ÿé„ é„¡é„¤é„¥é„¦é„§é„¨é„©é„ªé„«é„¬é„­é„®é„°é„²é„³é„´é„µé„¶é„·é„¸é„ºé„»é„¼é„½é„¾é„¿é…€é…é…‚é…„å”·å•–å•µå•¶å•·å”³å”°å•œå–‹å—’å–ƒå–±å–¹å–ˆå–å–Ÿå•¾å—–å–‘å•»å—Ÿå–½å–¾å–”å–™å—ªå—·å—‰å˜Ÿå—‘å—«å—¬å—”å—¦å—å—„å—¯å—¥å—²å—³å—Œå—å—¨å—µå—¤è¾”å˜žå˜ˆå˜Œå˜å˜¤å˜£å—¾å˜€å˜§å˜­å™˜å˜¹å™—å˜¬å™å™¢å™™å™œå™Œå™”åš†å™¤å™±å™«å™»å™¼åš…åš“åš¯å›”å›—å›å›¡å›µå›«å›¹å›¿åœ„åœŠåœ‰åœœå¸å¸™å¸”å¸‘å¸±å¸»å¸¼ï¿½".split("");for(a=0;a!=t[224].length;++a)if(t[224][a].charCodeAt(0)!==65533){r[t[224][a]]=57344+a;e[57344+a]=t[224][a]}t[225]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é……é…‡é…ˆé…‘é…“é…”é…•é…–é…˜é…™é…›é…œé…Ÿé… é…¦é…§é…¨é…«é…­é…³é…ºé…»é…¼é†€é†é†‚é†ƒé†„é††é†ˆé†Šé†Žé†é†“é†”é†•é†–é†—é†˜é†™é†œé†é†žé†Ÿé† é†¡é†¤é†¥é†¦é†§é†¨é†©é†«é†¬é†°é†±é†²é†³é†¶é†·é†¸é†¹é†»ï¿½é†¼é†½é†¾é†¿é‡€é‡é‡‚é‡ƒé‡„é‡…é‡†é‡ˆé‡‹é‡é‡’é‡“é‡”é‡•é‡–é‡—é‡˜é‡™é‡šé‡›é‡é‡žé‡Ÿé‡ é‡¡é‡¢é‡£é‡¤é‡¥å¸·å¹„å¹”å¹›å¹žå¹¡å²Œå±ºå²å²å²–å²ˆå²˜å²™å²‘å²šå²œå²µå²¢å²½å²¬å²«å²±å²£å³å²·å³„å³’å³¤å³‹å³¥å´‚å´ƒå´§å´¦å´®å´¤å´žå´†å´›åµ˜å´¾å´´å´½åµ¬åµ›åµ¯åµåµ«åµ‹åµŠåµ©åµ´å¶‚å¶™å¶è±³å¶·å·…å½³å½·å¾‚å¾‡å¾‰å¾Œå¾•å¾™å¾œå¾¨å¾­å¾µå¾¼è¡¢å½¡çŠ­çŠ°çŠ´çŠ·çŠ¸ç‹ƒç‹ç‹Žç‹ç‹’ç‹¨ç‹¯ç‹©ç‹²ç‹´ç‹·çŒç‹³çŒƒç‹ºï¿½".split("");for(a=0;a!=t[225].length;++a)if(t[225][a].charCodeAt(0)!==65533){r[t[225][a]]=57600+a;e[57600+a]=t[225][a]}t[226]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é‡¦é‡§é‡¨é‡©é‡ªé‡«é‡¬é‡­é‡®é‡¯é‡°é‡±é‡²é‡³é‡´é‡µé‡¶é‡·é‡¸é‡¹é‡ºé‡»é‡¼é‡½é‡¾é‡¿éˆ€éˆéˆ‚éˆƒéˆ„éˆ…éˆ†éˆ‡éˆˆéˆ‰éˆŠéˆ‹éˆŒéˆéˆŽéˆéˆéˆ‘éˆ’éˆ“éˆ”éˆ•éˆ–éˆ—éˆ˜éˆ™éˆšéˆ›éˆœéˆéˆžéˆŸéˆ éˆ¡éˆ¢éˆ£éˆ¤ï¿½éˆ¥éˆ¦éˆ§éˆ¨éˆ©éˆªéˆ«éˆ¬éˆ­éˆ®éˆ¯éˆ°éˆ±éˆ²éˆ³éˆ´éˆµéˆ¶éˆ·éˆ¸éˆ¹éˆºéˆ»éˆ¼éˆ½éˆ¾éˆ¿é‰€é‰é‰‚é‰ƒé‰„é‰…ç‹»çŒ—çŒ“çŒ¡çŒŠçŒžçŒçŒ•çŒ¢çŒ¹çŒ¥çŒ¬çŒ¸çŒ±ççç—ç ç¬ç¯ç¾èˆ›å¤¥é£§å¤¤å¤‚é¥£é¥§é¥¨é¥©é¥ªé¥«é¥¬é¥´é¥·é¥½é¦€é¦„é¦‡é¦Šé¦é¦é¦‘é¦“é¦”é¦•åº€åº‘åº‹åº–åº¥åº åº¹åºµåº¾åº³èµ“å»’å»‘å»›å»¨å»ªè†ºå¿„å¿‰å¿–å¿æ€ƒå¿®æ€„å¿¡å¿¤å¿¾æ€…æ€†å¿ªå¿­å¿¸æ€™æ€µæ€¦æ€›æ€æ€æ€©æ€«æ€Šæ€¿æ€¡æ¸æ¹æ»æºæ‚ï¿½".split("");for(a=0;a!=t[226].length;++a)if(t[226][a].charCodeAt(0)!==65533){r[t[226][a]]=57856+a;e[57856+a]=t[226][a]}t[227]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é‰†é‰‡é‰ˆé‰‰é‰Šé‰‹é‰Œé‰é‰Žé‰é‰é‰‘é‰’é‰“é‰”é‰•é‰–é‰—é‰˜é‰™é‰šé‰›é‰œé‰é‰žé‰Ÿé‰ é‰¡é‰¢é‰£é‰¤é‰¥é‰¦é‰§é‰¨é‰©é‰ªé‰«é‰¬é‰­é‰®é‰¯é‰°é‰±é‰²é‰³é‰µé‰¶é‰·é‰¸é‰¹é‰ºé‰»é‰¼é‰½é‰¾é‰¿éŠ€éŠéŠ‚éŠƒéŠ„éŠ…ï¿½éŠ†éŠ‡éŠˆéŠ‰éŠŠéŠ‹éŠŒéŠéŠéŠéŠ‘éŠ’éŠ“éŠ”éŠ•éŠ–éŠ—éŠ˜éŠ™éŠšéŠ›éŠœéŠéŠžéŠŸéŠ éŠ¡éŠ¢éŠ£éŠ¤éŠ¥éŠ¦éŠ§æªæ½æ‚–æ‚šæ‚­æ‚æ‚ƒæ‚’æ‚Œæ‚›æƒ¬æ‚»æ‚±æƒæƒ˜æƒ†æƒšæ‚´æ„ æ„¦æ„•æ„£æƒ´æ„€æ„Žæ„«æ…Šæ…µæ†¬æ†”æ†§æ†·æ‡”æ‡µå¿éš³é—©é—«é—±é—³é—µé—¶é—¼é—¾é˜ƒé˜„é˜†é˜ˆé˜Šé˜‹é˜Œé˜é˜é˜’é˜•é˜–é˜—é˜™é˜šä¸¬çˆ¿æˆ•æ°µæ±”æ±œæ±Šæ²£æ²…æ²æ²”æ²Œæ±¨æ±©æ±´æ±¶æ²†æ²©æ³æ³”æ²­æ³·æ³¸æ³±æ³—æ²²æ³ æ³–æ³ºæ³«æ³®æ²±æ³“æ³¯æ³¾ï¿½".split("");for(a=0;a!=t[227].length;++a)if(t[227][a].charCodeAt(0)!==65533){r[t[227][a]]=58112+a;e[58112+a]=t[227][a]}t[228]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éŠ¨éŠ©éŠªéŠ«éŠ¬éŠ­éŠ¯éŠ°éŠ±éŠ²éŠ³éŠ´éŠµéŠ¶éŠ·éŠ¸éŠ¹éŠºéŠ»éŠ¼éŠ½éŠ¾éŠ¿é‹€é‹é‹‚é‹ƒé‹„é‹…é‹†é‹‡é‹‰é‹Šé‹‹é‹Œé‹é‹Žé‹é‹é‹‘é‹’é‹“é‹”é‹•é‹–é‹—é‹˜é‹™é‹šé‹›é‹œé‹é‹žé‹Ÿé‹ é‹¡é‹¢é‹£é‹¤é‹¥é‹¦é‹§é‹¨ï¿½é‹©é‹ªé‹«é‹¬é‹­é‹®é‹¯é‹°é‹±é‹²é‹³é‹´é‹µé‹¶é‹·é‹¸é‹¹é‹ºé‹»é‹¼é‹½é‹¾é‹¿éŒ€éŒéŒ‚éŒƒéŒ„éŒ…éŒ†éŒ‡éŒˆéŒ‰æ´¹æ´§æ´Œæµƒæµˆæ´‡æ´„æ´™æ´Žæ´«æµæ´®æ´µæ´šæµæµ’æµ”æ´³æ¶‘æµ¯æ¶žæ¶ æµžæ¶“æ¶”æµœæµ æµ¼æµ£æ¸šæ·‡æ·…æ·žæ¸Žæ¶¿æ· æ¸‘æ·¦æ·æ·™æ¸–æ¶«æ¸Œæ¶®æ¸«æ¹®æ¹Žæ¹«æº²æ¹Ÿæº†æ¹“æ¹”æ¸²æ¸¥æ¹„æ»Ÿæº±æº˜æ» æ¼­æ»¢æº¥æº§æº½æº»æº·æ»—æº´æ»æºæ»‚æºŸæ½¢æ½†æ½‡æ¼¤æ¼•æ»¹æ¼¯æ¼¶æ½‹æ½´æ¼ªæ¼‰æ¼©æ¾‰æ¾æ¾Œæ½¸æ½²æ½¼æ½ºæ¿‘ï¿½".split("");for(a=0;a!=t[228].length;++a)if(t[228][a].charCodeAt(0)!==65533){r[t[228][a]]=58368+a;e[58368+a]=t[228][a]}t[229]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éŒŠéŒ‹éŒŒéŒéŒŽéŒéŒéŒ‘éŒ’éŒ“éŒ”éŒ•éŒ–éŒ—éŒ˜éŒ™éŒšéŒ›éŒœéŒéŒžéŒŸéŒ éŒ¡éŒ¢éŒ£éŒ¤éŒ¥éŒ¦éŒ§éŒ¨éŒ©éŒªéŒ«éŒ¬éŒ­éŒ®éŒ¯éŒ°éŒ±éŒ²éŒ³éŒ´éŒµéŒ¶éŒ·éŒ¸éŒ¹éŒºéŒ»éŒ¼éŒ½éŒ¿é€éé‚éƒé„é…é†é‡éˆé‰ï¿½éŠé‹éŒééŽééé‘é’é“é”é•é–é—é˜é™éšé›éœééžéŸé é¡é¢é£é¤é¥é¦é§é¨é©é«æ¿‰æ¾§æ¾¹æ¾¶æ¿‚æ¿¡æ¿®æ¿žæ¿ æ¿¯ç€šç€£ç€›ç€¹ç€µççžå®€å®„å®•å®“å®¥å®¸ç”¯éªžæ´å¯¤å¯®è¤°å¯°è¹‡è¬‡è¾¶è¿“è¿•è¿¥è¿®è¿¤è¿©è¿¦è¿³è¿¨é€…é€„é€‹é€¦é€‘é€é€–é€¡é€µé€¶é€­é€¯é„é‘é’éé¨é˜é¢é›æš¹é´é½é‚‚é‚ˆé‚ƒé‚‹å½å½—å½–å½˜å°»å’«å±å±™å­±å±£å±¦ç¾¼å¼ªå¼©å¼­è‰´å¼¼é¬»å±®å¦å¦ƒå¦å¦©å¦ªå¦£ï¿½".split("");for(a=0;a!=t[229].length;++a)if(t[229][a].charCodeAt(0)!==65533){r[t[229][a]]=58624+a;e[58624+a]=t[229][a]}t[230]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¬é­é®é¯é°é±é²é³é´éµé¶é·é¸é¹éºé»é¼é½é¾é¿éŽ€éŽéŽ‚éŽƒéŽ„éŽ…éŽ†éŽ‡éŽˆéŽ‰éŽŠéŽ‹éŽŒéŽéŽŽéŽéŽ‘éŽ’éŽ“éŽ”éŽ•éŽ–éŽ—éŽ˜éŽ™éŽšéŽ›éŽœéŽéŽžéŽŸéŽ éŽ¡éŽ¢éŽ£éŽ¤éŽ¥éŽ¦éŽ§éŽ¨éŽ©éŽªéŽ«ï¿½éŽ¬éŽ­éŽ®éŽ¯éŽ°éŽ±éŽ²éŽ³éŽ´éŽµéŽ¶éŽ·éŽ¸éŽ¹éŽºéŽ»éŽ¼éŽ½éŽ¾éŽ¿é€éé‚éƒé„é…é†é‡éˆé‰é‹éŒéå¦—å§Šå¦«å¦žå¦¤å§’å¦²å¦¯å§—å¦¾å¨…å¨†å§å¨ˆå§£å§˜å§¹å¨Œå¨‰å¨²å¨´å¨‘å¨£å¨“å©€å©§å©Šå©•å¨¼å©¢å©µèƒ¬åªªåª›å©·å©ºåª¾å««åª²å«’å«”åª¸å« å«£å«±å«–å«¦å«˜å«œå¬‰å¬—å¬–å¬²å¬·å­€å°•å°œå­šå­¥å­³å­‘å­“å­¢é©µé©·é©¸é©ºé©¿é©½éª€éªéª…éªˆéªŠéªéª’éª“éª–éª˜éª›éªœéªéªŸéª éª¢éª£éª¥éª§çºŸçº¡çº£çº¥çº¨çº©ï¿½".split("");for(a=0;a!=t[230].length;++a)if(t[230][a].charCodeAt(0)!==65533){r[t[230][a]]=58880+a;e[58880+a]=t[230][a]}t[231]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éŽééé‘é’é“é”é•é—é˜é™éšé›éœééžéŸé é¡é¢é£é¤é¥é¦é§é¨é©éªé«é¬é­é®é¯é°é±é²é³é´éµé¶é·é¸é¹éºé»é¼é½é¾é¿é€éé‚éƒé„é…é†é‡éˆé‰éŠé‹éŒéï¿½éŽééé‘é’é“é”é•é–é—é˜é™éšé›éœééžéŸé é¡é¢é£é¤é¥é¦é§é¨é©éªé«é¬é­é®çº­çº°çº¾ç»€ç»ç»‚ç»‰ç»‹ç»Œç»ç»”ç»—ç»›ç» ç»¡ç»¨ç»«ç»®ç»¯ç»±ç»²ç¼ç»¶ç»ºç»»ç»¾ç¼ç¼‚ç¼ƒç¼‡ç¼ˆç¼‹ç¼Œç¼ç¼‘ç¼’ç¼—ç¼™ç¼œç¼›ç¼Ÿç¼¡ç¼¢ç¼£ç¼¤ç¼¥ç¼¦ç¼§ç¼ªç¼«ç¼¬ç¼­ç¼¯ç¼°ç¼±ç¼²ç¼³ç¼µå¹ºç•¿å·›ç”¾é‚•çŽŽçŽ‘çŽ®çŽ¢çŽŸçç‚ç‘çŽ·çŽ³ç€ç‰çˆç¥ç™é¡¼çŠç©ç§çžçŽºç²ççªç‘›ç¦ç¥ç¨ç°ç®ç¬ï¿½".split("");for(a=0;a!=t[231].length;++a)if(t[231][a].charCodeAt(0)!==65533){r[t[231][a]]=59136+a;e[59136+a]=t[231][a]}t[232]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¯é°é±é²é³é´éµé¶é·é¸é¹éºé»é¼é½é¿é‘€é‘é‘‚é‘ƒé‘„é‘…é‘†é‘‡é‘ˆé‘‰é‘Šé‘‹é‘Œé‘é‘Žé‘é‘é‘‘é‘’é‘“é‘”é‘•é‘–é‘—é‘˜é‘™é‘šé‘›é‘œé‘é‘žé‘Ÿé‘ é‘¡é‘¢é‘£é‘¤é‘¥é‘¦é‘§é‘¨é‘©é‘ªé‘¬é‘­é‘®é‘¯ï¿½é‘°é‘±é‘²é‘³é‘´é‘µé‘¶é‘·é‘¸é‘¹é‘ºé‘»é‘¼é‘½é‘¾é‘¿é’€é’é’‚é’ƒé’„é’‘é’–é’˜é“‡é“é““é“”é“šé“¦é“»é”œé” ç›çšç‘ç‘œç‘—ç‘•ç‘™ç‘·ç‘­ç‘¾ç’œç’Žç’€ç’ç’‡ç’‹ç’žç’¨ç’©ç’ç’§ç“’ç’ºéŸªéŸ«éŸ¬æŒæ“æžæˆæ©æž¥æž‡æªæ³æž˜æž§æµæž¨æžžæž­æž‹æ·æ¼æŸ°æ ‰æŸ˜æ ŠæŸ©æž°æ ŒæŸ™æžµæŸšæž³æŸæ €æŸƒæž¸æŸ¢æ ŽæŸæŸ½æ ²æ ³æ¡ æ¡¡æ¡Žæ¡¢æ¡„æ¡¤æ¢ƒæ æ¡•æ¡¦æ¡æ¡§æ¡€æ ¾æ¡Šæ¡‰æ ©æ¢µæ¢æ¡´æ¡·æ¢“æ¡«æ£‚æ¥®æ£¼æ¤Ÿæ¤ æ£¹ï¿½".split("");for(a=0;a!=t[232].length;++a)if(t[232][a].charCodeAt(0)!==65533){r[t[232][a]]=59392+a;e[59392+a]=t[232][a]}t[233]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é”§é”³é”½é•ƒé•ˆé•‹é••é•šé• é•®é•´é•µé•·é•¸é•¹é•ºé•»é•¼é•½é•¾é–€é–é–‚é–ƒé–„é–…é–†é–‡é–ˆé–‰é–Šé–‹é–Œé–é–Žé–é–é–‘é–’é–“é–”é–•é––é–—é–˜é–™é–šé–›é–œé–é–žé–Ÿé– é–¡é–¢é–£é–¤é–¥é–¦é–§é–¨é–©é–ªï¿½é–«é–¬é–­é–®é–¯é–°é–±é–²é–³é–´é–µé–¶é–·é–¸é–¹é–ºé–»é–¼é–½é–¾é–¿é—€é—é—‚é—ƒé—„é—…é—†é—‡é—ˆé—‰é—Šé—‹æ¤¤æ£°æ¤‹æ¤æ¥—æ££æ¤æ¥±æ¤¹æ¥ æ¥‚æ¥æ¦„æ¥«æ¦€æ¦˜æ¥¸æ¤´æ§Œæ¦‡æ¦ˆæ§Žæ¦‰æ¥¦æ¥£æ¥¹æ¦›æ¦§æ¦»æ¦«æ¦­æ§”æ¦±æ§æ§Šæ§Ÿæ¦•æ§ æ¦æ§¿æ¨¯æ§­æ¨—æ¨˜æ©¥æ§²æ©„æ¨¾æª æ©æ©›æ¨µæªŽæ©¹æ¨½æ¨¨æ©˜æ©¼æª‘æªæª©æª—æª«çŒ·ç’æ®æ®‚æ®‡æ®„æ®’æ®“æ®æ®šæ®›æ®¡æ®ªè½«è½­è½±è½²è½³è½µè½¶è½¸è½·è½¹è½ºè½¼è½¾è¾è¾‚è¾„è¾‡è¾‹ï¿½".split("");for(a=0;a!=t[233].length;++a)if(t[233][a].charCodeAt(0)!==65533){r[t[233][a]]=59648+a;e[59648+a]=t[233][a]}t[234]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é—Œé—é—Žé—é—é—‘é—’é—“é—”é—•é—–é——é—˜é—™é—šé—›é—œé—é—žé—Ÿé— é—¡é—¢é—£é—¤é—¥é—¦é—§é—¬é—¿é˜‡é˜“é˜˜é˜›é˜žé˜ é˜£é˜¤é˜¥é˜¦é˜§é˜¨é˜©é˜«é˜¬é˜­é˜¯é˜°é˜·é˜¸é˜¹é˜ºé˜¾é™é™ƒé™Šé™Žé™é™‘é™’é™“é™–é™—ï¿½é™˜é™™é™šé™œé™é™žé™ é™£é™¥é™¦é™«é™­é™®é™¯é™°é™±é™³é™¸é™¹é™ºé™»é™¼é™½é™¾é™¿éš€éšéš‚éšƒéš„éš‡éš‰éšŠè¾è¾Žè¾è¾˜è¾šè»Žæˆ‹æˆ—æˆ›æˆŸæˆ¢æˆ¡æˆ¥æˆ¤æˆ¬è‡§ç“¯ç“´ç“¿ç”ç”‘ç”“æ”´æ—®æ—¯æ—°æ˜Šæ˜™æ²æ˜ƒæ˜•æ˜€ç‚…æ›·æ˜æ˜´æ˜±æ˜¶æ˜µè€†æ™Ÿæ™”æ™æ™æ™–æ™¡æ™—æ™·æš„æšŒæš§æšæš¾æ››æ›œæ›¦æ›©è´²è´³è´¶è´»è´½èµ€èµ…èµ†èµˆèµ‰èµ‡èµèµ•èµ™è§‡è§Šè§‹è§Œè§Žè§è§è§‘ç‰®çŠŸç‰ç‰¦ç‰¯ç‰¾ç‰¿çŠ„çŠ‹çŠçŠçŠ’æŒˆæŒ²æŽ°ï¿½".split("");for(a=0;a!=t[234].length;++a)if(t[234][a].charCodeAt(0)!==65533){r[t[234][a]]=59904+a;e[59904+a]=t[234][a]}t[235]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éšŒéšŽéš‘éš’éš“éš•éš–éššéš›éšéšžéšŸéš éš¡éš¢éš£éš¤éš¥éš¦éš¨éš©éšªéš«éš¬éš­éš®éš¯éš±éš²éš´éšµéš·éš¸éšºéš»éš¿é›‚é›ƒé›ˆé›Šé›‹é›é›‘é›“é›”é›–é›—é›˜é›™é›šé››é›œé›é›žé›Ÿé›¡é›¢é›£é›¤é›¥é›¦é›§é›«ï¿½é›¬é›­é›®é›°é›±é›²é›´é›µé›¸é›ºé›»é›¼é›½é›¿éœ‚éœƒéœ…éœŠéœ‹éœŒéœéœ‘éœ’éœ”éœ•éœ—éœ˜éœ™éœšéœ›éœéœŸéœ æ¿æ“˜è€„æ¯ªæ¯³æ¯½æ¯µæ¯¹æ°…æ°‡æ°†æ°æ°•æ°˜æ°™æ°šæ°¡æ°©æ°¤æ°ªæ°²æ”µæ••æ•«ç‰ç‰’ç‰–çˆ°è™¢åˆ–è‚Ÿè‚œè‚“è‚¼æœŠè‚½è‚±è‚«è‚­è‚´è‚·èƒ§èƒ¨èƒ©èƒªèƒ›èƒ‚èƒ„èƒ™èƒèƒ—æœèƒèƒ«èƒ±èƒ´èƒ­è„è„Žèƒ²èƒ¼æœ•è„’è±šè„¶è„žè„¬è„˜è„²è…ˆè…Œè…“è…´è…™è…šè…±è… è…©è…¼è…½è…­è…§å¡åªµè†ˆè†‚è†‘æ»•è†£è†ªè‡Œæœ¦è‡Šè†»ï¿½".split("");for(a=0;a!=t[235].length;++a)if(t[235][a].charCodeAt(0)!==65533){r[t[235][a]]=60160+a;e[60160+a]=t[235][a]}t[236]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éœ¡éœ¢éœ£éœ¤éœ¥éœ¦éœ§éœ¨éœ©éœ«éœ¬éœ®éœ¯éœ±éœ³éœ´éœµéœ¶éœ·éœºéœ»éœ¼éœ½éœ¿é€éé‚éƒé„é…é†é‡éˆé‰éŠé‹éŒééŽééé‘é”é•é—é˜éšéœééŸé£é¤é¦é§é¨éªé«é¬é­é®é¯é°é±ï¿½é²éµé·é¸é¹éºé»é½é¾é¿éž€éžéž‚éžƒéž„éž†éž‡éžˆéž‰éžŠéžŒéžŽéžéžéž“éž•éž–éž—éž™éžšéž›éžœéžè‡è†¦æ¬¤æ¬·æ¬¹æ­ƒæ­†æ­™é£‘é£’é£“é£•é£™é£šæ®³å½€æ¯‚è§³æ–é½‘æ–“æ–¼æ—†æ—„æ—ƒæ—Œæ—Žæ—’æ—–ç‚€ç‚œç‚–ç‚ç‚»çƒ€ç‚·ç‚«ç‚±çƒ¨çƒŠç„ç„“ç„–ç„¯ç„±ç…³ç…œç…¨ç……ç…²ç…Šç…¸ç…ºç†˜ç†³ç†µç†¨ç† ç‡ ç‡”ç‡§ç‡¹çˆçˆ¨ç¬ç„˜ç…¦ç†¹æˆ¾æˆ½æ‰ƒæ‰ˆæ‰‰ç¤»ç¥€ç¥†ç¥‰ç¥›ç¥œç¥“ç¥šç¥¢ç¥—ç¥ ç¥¯ç¥§ç¥ºç¦…ç¦Šç¦šç¦§ç¦³å¿‘å¿ï¿½".split("");
for(a=0;a!=t[236].length;++a)if(t[236][a].charCodeAt(0)!==65533){r[t[236][a]]=60416+a;e[60416+a]=t[236][a]}t[237]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éžžéžŸéž¡éž¢éž¤éž¥éž¦éž§éž¨éž©éžªéž¬éž®éž°éž±éž³éžµéž¶éž·éž¸éž¹éžºéž»éž¼éž½éž¾éž¿éŸ€éŸéŸ‚éŸƒéŸ„éŸ…éŸ†éŸ‡éŸˆéŸ‰éŸŠéŸ‹éŸŒéŸéŸŽéŸéŸéŸ‘éŸ’éŸ“éŸ”éŸ•éŸ–éŸ—éŸ˜éŸ™éŸšéŸ›éŸœéŸéŸžéŸŸéŸ éŸ¡éŸ¢éŸ£ï¿½éŸ¤éŸ¥éŸ¨éŸ®éŸ¯éŸ°éŸ±éŸ²éŸ´éŸ·éŸ¸éŸ¹éŸºéŸ»éŸ¼éŸ½éŸ¾éŸ¿é €é é ‚é ƒé „é …é †é ‡é ˆé ‰é Šé ‹é Œé é Žæ€¼ææšæ§ææ™æ£æ‚«æ„†æ„æ…æ†©æ†æ‡‹æ‡‘æˆ†è‚€è¿æ²“æ³¶æ·¼çŸ¶çŸ¸ç €ç ‰ç —ç ˜ç ‘æ–«ç ­ç œç ç ¹ç ºç »ç Ÿç ¼ç ¥ç ¬ç £ç ©ç¡Žç¡­ç¡–ç¡—ç ¦ç¡ç¡‡ç¡Œç¡ªç¢›ç¢“ç¢šç¢‡ç¢œç¢¡ç¢£ç¢²ç¢¹ç¢¥ç£”ç£™ç£‰ç£¬ç£²ç¤…ç£´ç¤“ç¤¤ç¤žç¤´é¾›é»¹é»»é»¼ç›±çœ„çœç›¹çœ‡çœˆçœšçœ¢çœ™çœ­çœ¦çœµçœ¸çç‘ç‡çƒçšç¨ï¿½".split("");for(a=0;a!=t[237].length;++a)if(t[237][a].charCodeAt(0)!==65533){r[t[237][a]]=60672+a;e[60672+a]=t[237][a]}t[238]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é é é ‘é ’é “é ”é •é –é —é ˜é ™é šé ›é œé é žé Ÿé  é ¡é ¢é £é ¤é ¥é ¦é §é ¨é ©é ªé «é ¬é ­é ®é ¯é °é ±é ²é ³é ´é µé ¶é ·é ¸é ¹é ºé »é ¼é ½é ¾é ¿é¡€é¡é¡‚é¡ƒé¡„é¡…é¡†é¡‡é¡ˆé¡‰é¡Šé¡‹é¡Œé¡ï¿½é¡Žé¡é¡é¡‘é¡’é¡“é¡”é¡•é¡–é¡—é¡˜é¡™é¡šé¡›é¡œé¡é¡žé¡Ÿé¡ é¡¡é¡¢é¡£é¡¤é¡¥é¡¦é¡§é¡¨é¡©é¡ªé¡«é¡¬é¡­é¡®ç¢ç¥ç¿çžç½çž€çžŒçž‘çžŸçž çž°çžµçž½ç”ºç•€ç•Žç•‹ç•ˆç•›ç•²ç•¹ç–ƒç½˜ç½¡ç½Ÿè©ˆç½¨ç½´ç½±ç½¹ç¾ç½¾ç›ç›¥è ²é’…é’†é’‡é’‹é’Šé’Œé’é’é’é’”é’—é’•é’šé’›é’œé’£é’¤é’«é’ªé’­é’¬é’¯é’°é’²é’´é’¶é’·é’¸é’¹é’ºé’¼é’½é’¿é“„é“ˆé“‰é“Šé“‹é“Œé“é“Žé“é“‘é“’é“•é“–é“—é“™é“˜é“›é“žé“Ÿé“ é“¢é“¤é“¥é“§é“¨é“ªï¿½".split("");for(a=0;a!=t[238].length;++a)if(t[238][a].charCodeAt(0)!==65533){r[t[238][a]]=60928+a;e[60928+a]=t[238][a]}t[239]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¡¯é¡°é¡±é¡²é¡³é¡´é¢‹é¢Žé¢’é¢•é¢™é¢£é¢¨é¢©é¢ªé¢«é¢¬é¢­é¢®é¢¯é¢°é¢±é¢²é¢³é¢´é¢µé¢¶é¢·é¢¸é¢¹é¢ºé¢»é¢¼é¢½é¢¾é¢¿é£€é£é£‚é£ƒé£„é£…é£†é£‡é£ˆé£‰é£Šé£‹é£Œé£é£é£é£”é£–é£—é£›é£œé£é£ é£¡é£¢é££é£¤ï¿½é£¥é£¦é£©é£ªé£«é£¬é£­é£®é£¯é£°é£±é£²é£³é£´é£µé£¶é£·é£¸é£¹é£ºé£»é£¼é£½é£¾é£¿é¤€é¤é¤‚é¤ƒé¤„é¤…é¤†é¤‡é“©é“«é“®é“¯é“³é“´é“µé“·é“¹é“¼é“½é“¿é”ƒé”‚é”†é”‡é”‰é”Šé”é”Žé”é”’é”“é””é”•é”–é”˜é”›é”é”žé”Ÿé”¢é”ªé”«é”©é”¬é”±é”²é”´é”¶é”·é”¸é”¼é”¾é”¿é•‚é”µé•„é•…é•†é•‰é•Œé•Žé•é•’é•“é•”é•–é•—é•˜é•™é•›é•žé•Ÿé•é•¡é•¢é•¤é•¥é•¦é•§é•¨é•©é•ªé•«é•¬é•¯é•±é•²é•³é”ºçŸ§çŸ¬é›‰ç§•ç§­ç§£ç§«ç¨†åµ‡ç¨ƒç¨‚ç¨žç¨”ï¿½".split("");for(a=0;a!=t[239].length;++a)if(t[239][a].charCodeAt(0)!==65533){r[t[239][a]]=61184+a;e[61184+a]=t[239][a]}t[240]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¤ˆé¤‰é¤Šé¤‹é¤Œé¤Žé¤é¤‘é¤’é¤“é¤”é¤•é¤–é¤—é¤˜é¤™é¤šé¤›é¤œé¤é¤žé¤Ÿé¤ é¤¡é¤¢é¤£é¤¤é¤¥é¤¦é¤§é¤¨é¤©é¤ªé¤«é¤¬é¤­é¤¯é¤°é¤±é¤²é¤³é¤´é¤µé¤¶é¤·é¤¸é¤¹é¤ºé¤»é¤¼é¤½é¤¾é¤¿é¥€é¥é¥‚é¥ƒé¥„é¥…é¥†é¥‡é¥ˆé¥‰ï¿½é¥Šé¥‹é¥Œé¥é¥Žé¥é¥é¥‘é¥’é¥“é¥–é¥—é¥˜é¥™é¥šé¥›é¥œé¥é¥žé¥Ÿé¥ é¥¡é¥¢é¥¤é¥¦é¥³é¥¸é¥¹é¥»é¥¾é¦‚é¦ƒé¦‰ç¨¹ç¨·ç©‘é»é¦¥ç©°çšˆçšŽçš“çš™çš¤ç“žç“ ç”¬é¸ é¸¢é¸¨é¸©é¸ªé¸«é¸¬é¸²é¸±é¸¶é¸¸é¸·é¸¹é¸ºé¸¾é¹é¹‚é¹„é¹†é¹‡é¹ˆé¹‰é¹‹é¹Œé¹Žé¹‘é¹•é¹—é¹šé¹›é¹œé¹žé¹£é¹¦é¹§é¹¨é¹©é¹ªé¹«é¹¬é¹±é¹­é¹³ç–’ç–”ç––ç– ç–ç–¬ç–£ç–³ç–´ç–¸ç—„ç–±ç–°ç—ƒç—‚ç—–ç—ç—£ç—¨ç—¦ç—¤ç—«ç—§ç˜ƒç—±ç—¼ç—¿ç˜ç˜€ç˜…ç˜Œç˜—ç˜Šç˜¥ç˜˜ç˜•ç˜™ï¿½".split("");for(a=0;a!=t[240].length;++a)if(t[240][a].charCodeAt(0)!==65533){r[t[240][a]]=61440+a;e[61440+a]=t[240][a]}t[241]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¦Œé¦Žé¦šé¦›é¦œé¦é¦žé¦Ÿé¦ é¦¡é¦¢é¦£é¦¤é¦¦é¦§é¦©é¦ªé¦«é¦¬é¦­é¦®é¦¯é¦°é¦±é¦²é¦³é¦´é¦µé¦¶é¦·é¦¸é¦¹é¦ºé¦»é¦¼é¦½é¦¾é¦¿é§€é§é§‚é§ƒé§„é§…é§†é§‡é§ˆé§‰é§Šé§‹é§Œé§é§Žé§é§é§‘é§’é§“é§”é§•é§–é§—é§˜ï¿½é§™é§šé§›é§œé§é§žé§Ÿé§ é§¡é§¢é§£é§¤é§¥é§¦é§§é§¨é§©é§ªé§«é§¬é§­é§®é§¯é§°é§±é§²é§³é§´é§µé§¶é§·é§¸é§¹ç˜›ç˜¼ç˜¢ç˜ ç™€ç˜­ç˜°ç˜¿ç˜µç™ƒç˜¾ç˜³ç™ç™žç™”ç™œç™–ç™«ç™¯ç¿Šç«¦ç©¸ç©¹çª€çª†çªˆçª•çª¦çª çª¬çª¨çª­çª³è¡¤è¡©è¡²è¡½è¡¿è¢‚è¢¢è£†è¢·è¢¼è£‰è£¢è£Žè££è£¥è£±è¤šè£¼è£¨è£¾è£°è¤¡è¤™è¤“è¤›è¤Šè¤´è¤«è¤¶è¥è¥¦è¥»ç–‹èƒ¥çš²çš´çŸœè€’è€”è€–è€œè€ è€¢è€¥è€¦è€§è€©è€¨è€±è€‹è€µèƒè†èè’è©è±è¦ƒé¡¸é¢€é¢ƒï¿½".split("");for(a=0;a!=t[241].length;++a)if(t[241][a].charCodeAt(0)!==65533){r[t[241][a]]=61696+a;e[61696+a]=t[241][a]}t[242]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é§ºé§»é§¼é§½é§¾é§¿é¨€é¨é¨‚é¨ƒé¨„é¨…é¨†é¨‡é¨ˆé¨‰é¨Šé¨‹é¨Œé¨é¨Žé¨é¨é¨‘é¨’é¨“é¨”é¨•é¨–é¨—é¨˜é¨™é¨šé¨›é¨œé¨é¨žé¨Ÿé¨ é¨¡é¨¢é¨£é¨¤é¨¥é¨¦é¨§é¨¨é¨©é¨ªé¨«é¨¬é¨­é¨®é¨¯é¨°é¨±é¨²é¨³é¨´é¨µé¨¶é¨·é¨¸ï¿½é¨¹é¨ºé¨»é¨¼é¨½é¨¾é¨¿é©€é©é©‚é©ƒé©„é©…é©†é©‡é©ˆé©‰é©Šé©‹é©Œé©é©Žé©é©é©‘é©’é©“é©”é©•é©–é©—é©˜é©™é¢‰é¢Œé¢é¢é¢”é¢šé¢›é¢žé¢Ÿé¢¡é¢¢é¢¥é¢¦è™è™”è™¬è™®è™¿è™ºè™¼è™»èš¨èšèš‹èš¬èšèš§èš£èšªèš“èš©èš¶è›„èšµè›Žèš°èšºèš±èš¯è›‰è›èš´è›©è›±è›²è›­è›³è›èœ“è›žè›´è›Ÿè›˜è›‘èœƒèœ‡è›¸èœˆèœŠèœèœ‰èœ£èœ»èœžèœ¥èœ®èœšèœ¾èˆèœ´èœ±èœ©èœ·èœ¿èž‚èœ¢è½è¾è»è è°èŒè®èž‹è“è£è¼è¤è™è¥èž“èž¯èž¨èŸ’ï¿½".split("");for(a=0;a!=t[242].length;++a)if(t[242][a].charCodeAt(0)!==65533){r[t[242][a]]=61952+a;e[61952+a]=t[242][a]}t[243]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é©šé©›é©œé©é©žé©Ÿé© é©¡é©¢é©£é©¤é©¥é©¦é©§é©¨é©©é©ªé©«é©²éªƒéª‰éªéªŽéª”éª•éª™éª¦éª©éªªéª«éª¬éª­éª®éª¯éª²éª³éª´éªµéª¹éª»éª½éª¾éª¿é«ƒé«„é«†é«‡é«ˆé«‰é«Šé«é«Žé«é«é«’é«”é«•é«–é«—é«™é«šé«›é«œï¿½é«é«žé« é«¢é«£é«¤é«¥é«§é«¨é«©é«ªé«¬é«®é«°é«±é«²é«³é«´é«µé«¶é«·é«¸é«ºé«¼é«½é«¾é«¿é¬€é¬é¬‚é¬„é¬…é¬†èŸ†èžˆèž…èž­èž—èžƒèž«èŸ¥èž¬èžµèž³èŸ‹èŸ“èž½èŸ‘èŸ€èŸŠèŸ›èŸªèŸ èŸ®è –è “èŸ¾è Šè ›è ¡è ¹è ¼ç¼¶ç½‚ç½„ç½…èˆç«ºç«½ç¬ˆç¬ƒç¬„ç¬•ç¬Šç¬«ç¬ç­‡ç¬¸ç¬ªç¬™ç¬®ç¬±ç¬ ç¬¥ç¬¤ç¬³ç¬¾ç¬žç­˜ç­šç­…ç­µç­Œç­ç­ ç­®ç­»ç­¢ç­²ç­±ç®ç®¦ç®§ç®¸ç®¬ç®ç®¨ç®…ç®ªç®œç®¢ç®«ç®´ç¯‘ç¯ç¯Œç¯ç¯šç¯¥ç¯¦ç¯ªç°Œç¯¾ç¯¼ç°ç°–ç°‹ï¿½".split("");for(a=0;a!=t[243].length;++a)if(t[243][a].charCodeAt(0)!==65533){r[t[243][a]]=62208+a;e[62208+a]=t[243][a]}t[244]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¬‡é¬‰é¬Šé¬‹é¬Œé¬é¬Žé¬é¬‘é¬’é¬”é¬•é¬–é¬—é¬˜é¬™é¬šé¬›é¬œé¬é¬žé¬ é¬¡é¬¢é¬¤é¬¥é¬¦é¬§é¬¨é¬©é¬ªé¬«é¬¬é¬­é¬®é¬°é¬±é¬³é¬´é¬µé¬¶é¬·é¬¸é¬¹é¬ºé¬½é¬¾é¬¿é­€é­†é­Šé­‹é­Œé­Žé­é­’é­“é­•é­–é­—é­˜é­™é­šï¿½é­›é­œé­é­žé­Ÿé­ é­¡é­¢é­£é­¤é­¥é­¦é­§é­¨é­©é­ªé­«é­¬é­­é­®é­¯é­°é­±é­²é­³é­´é­µé­¶é­·é­¸é­¹é­ºé­»ç°Ÿç°ªç°¦ç°¸ç±ç±€è‡¾èˆèˆ‚èˆ„è‡¬è¡„èˆ¡èˆ¢èˆ£èˆ­èˆ¯èˆ¨èˆ«èˆ¸èˆ»èˆ³èˆ´èˆ¾è‰„è‰‰è‰‹è‰è‰šè‰Ÿè‰¨è¡¾è¢…è¢ˆè£˜è£Ÿè¥žç¾ç¾Ÿç¾§ç¾¯ç¾°ç¾²ç±¼æ•‰ç²‘ç²ç²œç²žç²¢ç²²ç²¼ç²½ç³ç³‡ç³Œç³ç³ˆç³…ç³—ç³¨è‰®æš¨ç¾¿ç¿Žç¿•ç¿¥ç¿¡ç¿¦ç¿©ç¿®ç¿³ç³¸çµ·ç¶¦ç¶®ç¹‡çº›éº¸éº´èµ³è¶„è¶”è¶‘è¶±èµ§èµ­è±‡è±‰é…Šé…é…Žé…é…¤ï¿½".split("");for(a=0;a!=t[244].length;++a)if(t[244][a].charCodeAt(0)!==65533){r[t[244][a]]=62464+a;e[62464+a]=t[244][a]}t[245]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é­¼é­½é­¾é­¿é®€é®é®‚é®ƒé®„é®…é®†é®‡é®ˆé®‰é®Šé®‹é®Œé®é®Žé®é®é®‘é®’é®“é®”é®•é®–é®—é®˜é®™é®šé®›é®œé®é®žé®Ÿé® é®¡é®¢é®£é®¤é®¥é®¦é®§é®¨é®©é®ªé®«é®¬é®­é®®é®¯é®°é®±é®²é®³é®´é®µé®¶é®·é®¸é®¹é®ºï¿½é®»é®¼é®½é®¾é®¿é¯€é¯é¯‚é¯ƒé¯„é¯…é¯†é¯‡é¯ˆé¯‰é¯Šé¯‹é¯Œé¯é¯Žé¯é¯é¯‘é¯’é¯“é¯”é¯•é¯–é¯—é¯˜é¯™é¯šé¯›é…¢é…¡é…°é…©é…¯é…½é…¾é…²é…´é…¹é†Œé†…é†é†é†‘é†¢é†£é†ªé†­é†®é†¯é†µé†´é†ºè±•é¹¾è¶¸è·«è¸…è¹™è¹©è¶µè¶¿è¶¼è¶ºè·„è·–è·—è·šè·žè·Žè·è·›è·†è·¬è··è·¸è·£è·¹è·»è·¤è¸‰è·½è¸”è¸è¸Ÿè¸¬è¸®è¸£è¸¯è¸ºè¹€è¸¹è¸µè¸½è¸±è¹‰è¹è¹‚è¹‘è¹’è¹Šè¹°è¹¶è¹¼è¹¯è¹´èº…èºèº”èºèºœèºžè±¸è²‚è²Šè²…è²˜è²”æ–›è§–è§žè§šè§œï¿½".split("");for(a=0;a!=t[245].length;++a)if(t[245][a].charCodeAt(0)!==65533){r[t[245][a]]=62720+a;e[62720+a]=t[245][a]}t[246]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¯œé¯é¯žé¯Ÿé¯ é¯¡é¯¢é¯£é¯¤é¯¥é¯¦é¯§é¯¨é¯©é¯ªé¯«é¯¬é¯­é¯®é¯¯é¯°é¯±é¯²é¯³é¯´é¯µé¯¶é¯·é¯¸é¯¹é¯ºé¯»é¯¼é¯½é¯¾é¯¿é°€é°é°‚é°ƒé°„é°…é°†é°‡é°ˆé°‰é°Šé°‹é°Œé°é°Žé°é°é°‘é°’é°“é°”é°•é°–é°—é°˜é°™é°šï¿½é°›é°œé°é°žé°Ÿé° é°¡é°¢é°£é°¤é°¥é°¦é°§é°¨é°©é°ªé°«é°¬é°­é°®é°¯é°°é°±é°²é°³é°´é°µé°¶é°·é°¸é°¹é°ºé°»è§¥è§«è§¯è¨¾è¬¦é“é›©é›³é›¯éœ†éœéœˆéœéœŽéœªéœ­éœ°éœ¾é¾€é¾ƒé¾…é¾†é¾‡é¾ˆé¾‰é¾Šé¾Œé»¾é¼‹é¼éš¹éš¼éš½é›Žé›’çž¿é› éŠŽéŠ®é‹ˆéŒ¾éªéŠéŽé¾é‘«é±¿é²‚é²…é²†é²‡é²ˆç¨£é²‹é²Žé²é²‘é²’é²”é²•é²šé²›é²žé²Ÿé² é²¡é²¢é²£é²¥é²¦é²§é²¨é²©é²«é²­é²®é²°é²±é²²é²³é²´é²µé²¶é²·é²ºé²»é²¼é²½é³„é³…é³†é³‡é³Šé³‹ï¿½".split("");for(a=0;a!=t[246].length;++a)if(t[246][a].charCodeAt(0)!==65533){r[t[246][a]]=62976+a;e[62976+a]=t[246][a]}t[247]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é°¼é°½é°¾é°¿é±€é±é±‚é±ƒé±„é±…é±†é±‡é±ˆé±‰é±Šé±‹é±Œé±é±Žé±é±é±‘é±’é±“é±”é±•é±–é±—é±˜é±™é±šé±›é±œé±é±žé±Ÿé± é±¡é±¢é±£é±¤é±¥é±¦é±§é±¨é±©é±ªé±«é±¬é±­é±®é±¯é±°é±±é±²é±³é±´é±µé±¶é±·é±¸é±¹é±ºï¿½é±»é±½é±¾é²€é²ƒé²„é²‰é²Šé²Œé²é²“é²–é²—é²˜é²™é²é²ªé²¬é²¯é²¹é²¾é²¿é³€é³é³‚é³ˆé³‰é³‘é³’é³šé³›é³ é³¡é³Œé³é³Žé³é³é³“é³”é³•é³—é³˜é³™é³œé³é³Ÿé³¢é¼éž…éž‘éž’éž”éž¯éž«éž£éž²éž´éª±éª°éª·é¹˜éª¶éªºéª¼é«é«€é«…é«‚é«‹é«Œé«‘é­…é­ƒé­‡é­‰é­ˆé­é­‘é£¨é¤é¤®é¥•é¥”é«Ÿé«¡é«¦é«¯é««é«»é«­é«¹é¬ˆé¬é¬“é¬Ÿé¬£éº½éº¾ç¸»éº‚éº‡éºˆéº‹éº’é–éºéºŸé»›é»œé»é» é»Ÿé»¢é»©é»§é»¥é»ªé»¯é¼¢é¼¬é¼¯é¼¹é¼·é¼½é¼¾é½„ï¿½".split("");for(a=0;a!=t[247].length;++a)if(t[247][a].charCodeAt(0)!==65533){r[t[247][a]]=63232+a;e[63232+a]=t[247][a]}t[248]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é³£é³¤é³¥é³¦é³§é³¨é³©é³ªé³«é³¬é³­é³®é³¯é³°é³±é³²é³³é³´é³µé³¶é³·é³¸é³¹é³ºé³»é³¼é³½é³¾é³¿é´€é´é´‚é´ƒé´„é´…é´†é´‡é´ˆé´‰é´Šé´‹é´Œé´é´Žé´é´é´‘é´’é´“é´”é´•é´–é´—é´˜é´™é´šé´›é´œé´é´žé´Ÿé´ é´¡ï¿½é´¢é´£é´¤é´¥é´¦é´§é´¨é´©é´ªé´«é´¬é´­é´®é´¯é´°é´±é´²é´³é´´é´µé´¶é´·é´¸é´¹é´ºé´»é´¼é´½é´¾é´¿éµ€éµéµ‚ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[248].length;++a)if(t[248][a].charCodeAt(0)!==65533){r[t[248][a]]=63488+a;e[63488+a]=t[248][a]}t[249]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éµƒéµ„éµ…éµ†éµ‡éµˆéµ‰éµŠéµ‹éµŒéµéµŽéµéµéµ‘éµ’éµ“éµ”éµ•éµ–éµ—éµ˜éµ™éµšéµ›éµœéµéµžéµŸéµ éµ¡éµ¢éµ£éµ¤éµ¥éµ¦éµ§éµ¨éµ©éµªéµ«éµ¬éµ­éµ®éµ¯éµ°éµ±éµ²éµ³éµ´éµµéµ¶éµ·éµ¸éµ¹éµºéµ»éµ¼éµ½éµ¾éµ¿é¶€é¶ï¿½é¶‚é¶ƒé¶„é¶…é¶†é¶‡é¶ˆé¶‰é¶Šé¶‹é¶Œé¶é¶Žé¶é¶é¶‘é¶’é¶“é¶”é¶•é¶–é¶—é¶˜é¶™é¶šé¶›é¶œé¶é¶žé¶Ÿé¶ é¶¡é¶¢ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[249].length;++a)if(t[249][a].charCodeAt(0)!==65533){r[t[249][a]]=63744+a;e[63744+a]=t[249][a]}t[250]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¶£é¶¤é¶¥é¶¦é¶§é¶¨é¶©é¶ªé¶«é¶¬é¶­é¶®é¶¯é¶°é¶±é¶²é¶³é¶´é¶µé¶¶é¶·é¶¸é¶¹é¶ºé¶»é¶¼é¶½é¶¾é¶¿é·€é·é·‚é·ƒé·„é·…é·†é·‡é·ˆé·‰é·Šé·‹é·Œé·é·Žé·é·é·‘é·’é·“é·”é·•é·–é·—é·˜é·™é·šé·›é·œé·é·žé·Ÿé· é·¡ï¿½é·¢é·£é·¤é·¥é·¦é·§é·¨é·©é·ªé·«é·¬é·­é·®é·¯é·°é·±é·²é·³é·´é·µé·¶é··é·¸é·¹é·ºé·»é·¼é·½é·¾é·¿é¸€é¸é¸‚ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[250].length;++a)if(t[250][a].charCodeAt(0)!==65533){r[t[250][a]]=64e3+a;e[64e3+a]=t[250][a]}t[251]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¸ƒé¸„é¸…é¸†é¸‡é¸ˆé¸‰é¸Šé¸‹é¸Œé¸é¸Žé¸é¸é¸‘é¸’é¸“é¸”é¸•é¸–é¸—é¸˜é¸™é¸šé¸›é¸œé¸é¸žé¸¤é¸§é¸®é¸°é¸´é¸»é¸¼é¹€é¹é¹é¹’é¹“é¹”é¹–é¹™é¹é¹Ÿé¹ é¹¡é¹¢é¹¥é¹®é¹¯é¹²é¹´é¹µé¹¶é¹·é¹¸é¹¹é¹ºé¹»é¹¼é¹½éº€ï¿½éºéºƒéº„éº…éº†éº‰éºŠéºŒéºéºŽéºéºéº‘éº”éº•éº–éº—éº˜éº™éºšéº›éºœéºžéº éº¡éº¢éº£éº¤éº¥éº§éº¨éº©éºªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[251].length;++a)if(t[251][a].charCodeAt(0)!==65533){r[t[251][a]]=64256+a;e[64256+a]=t[251][a]}t[252]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éº«éº¬éº­éº®éº¯éº°éº±éº²éº³éºµéº¶éº·éº¹éººéº¼éº¿é»€é»é»‚é»ƒé»…é»†é»‡é»ˆé»Šé»‹é»Œé»é»’é»“é»•é»–é»—é»™é»šé»žé»¡é»£é»¤é»¦é»¨é»«é»¬é»­é»®é»°é»±é»²é»³é»´é»µé»¶é»·é»¸é»ºé»½é»¿é¼€é¼é¼‚é¼ƒé¼„é¼…ï¿½é¼†é¼‡é¼ˆé¼‰é¼Šé¼Œé¼é¼‘é¼’é¼”é¼•é¼–é¼˜é¼šé¼›é¼œé¼é¼žé¼Ÿé¼¡é¼£é¼¤é¼¥é¼¦é¼§é¼¨é¼©é¼ªé¼«é¼­é¼®é¼°é¼±ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[252].length;++a)if(t[252][a].charCodeAt(0)!==65533){r[t[252][a]]=64512+a;e[64512+a]=t[252][a]}t[253]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¼²é¼³é¼´é¼µé¼¶é¼¸é¼ºé¼¼é¼¿é½€é½é½‚é½ƒé½…é½†é½‡é½ˆé½‰é½Šé½‹é½Œé½é½Žé½é½’é½“é½”é½•é½–é½—é½˜é½™é½šé½›é½œé½é½žé½Ÿé½ é½¡é½¢é½£é½¤é½¥é½¦é½§é½¨é½©é½ªé½«é½¬é½­é½®é½¯é½°é½±é½²é½³é½´é½µé½¶é½·é½¸ï¿½é½¹é½ºé½»é½¼é½½é½¾é¾é¾‚é¾é¾Žé¾é¾é¾‘é¾’é¾“é¾”é¾•é¾–é¾—é¾˜é¾œé¾é¾žé¾¡é¾¢é¾£é¾¤é¾¥ï¤¬ï¥¹ï¦•ï§§ï§±ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[253].length;++a)if(t[253][a].charCodeAt(0)!==65533){r[t[253][a]]=64768+a;e[64768+a]=t[253][a]}t[254]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¨Œï¨ï¨Žï¨ï¨‘ï¨“ï¨”ï¨˜ï¨Ÿï¨ ï¨¡ï¨£ï¨¤ï¨§ï¨¨ï¨©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[254].length;++a)if(t[254][a].charCodeAt(0)!==65533){r[t[254][a]]=65024+a;e[65024+a]=t[254][a]}return{enc:r,dec:e}}();cptable[949]=function(){var e=[],r={},t=[],a;t[0]="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[0].length;++a)if(t[0][a].charCodeAt(0)!==65533){r[t[0][a]]=0+a;e[0+a]=t[0][a]}t[129]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê°‚ê°ƒê°…ê°†ê°‹ê°Œê°ê°Žê°ê°˜ê°žê°Ÿê°¡ê°¢ê°£ê°¥ê°¦ê°§ê°¨ê°©ê°ªê°«ê°®ê°²ê°³ê°´ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê°µê°¶ê°·ê°ºê°»ê°½ê°¾ê°¿ê±ê±‚ê±ƒê±„ê±…ê±†ê±‡ê±ˆê±‰ê±Šê±Œê±Žê±ê±ê±‘ê±’ê±“ê±•ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê±–ê±—ê±™ê±šê±›ê±ê±žê±Ÿê± ê±¡ê±¢ê±£ê±¤ê±¥ê±¦ê±§ê±¨ê±©ê±ªê±«ê±¬ê±­ê±®ê±¯ê±²ê±³ê±µê±¶ê±¹ê±»ê±¼ê±½ê±¾ê±¿ê²‚ê²‡ê²ˆê²ê²Žê²ê²‘ê²’ê²“ê²•ê²–ê²—ê²˜ê²™ê²šê²›ê²žê²¢ê²£ê²¤ê²¥ê²¦ê²§ê²«ê²­ê²®ê²±ê²²ê²³ê²´ê²µê²¶ê²·ê²ºê²¾ê²¿ê³€ê³‚ê³ƒê³…ê³†ê³‡ê³‰ê³Šê³‹ê³ê³Žê³ê³ê³‘ê³’ê³“ê³”ê³–ê³˜ê³™ê³šê³›ê³œê³ê³žê³Ÿê³¢ê³£ê³¥ê³¦ê³©ê³«ê³­ê³®ê³²ê³´ê³·ê³¸ê³¹ê³ºê³»ê³¾ê³¿ê´ê´‚ê´ƒê´…ê´‡ê´ˆê´‰ê´Šê´‹ê´Žê´ê´’ê´“ï¿½".split("");for(a=0;a!=t[129].length;++a)if(t[129][a].charCodeAt(0)!==65533){r[t[129][a]]=33024+a;e[33024+a]=t[129][a]}t[130]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê´”ê´•ê´–ê´—ê´™ê´šê´›ê´ê´žê´Ÿê´¡ê´¢ê´£ê´¤ê´¥ê´¦ê´§ê´¨ê´ªê´«ê´®ê´¯ê´°ê´±ê´²ê´³ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê´¶ê´·ê´¹ê´ºê´»ê´½ê´¾ê´¿êµ€êµêµ‚êµƒêµ†êµˆêµŠêµ‹êµŒêµêµŽêµêµ‘êµ’êµ“êµ•êµ–êµ—ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½êµ™êµšêµ›êµœêµêµžêµŸêµ êµ¢êµ¤êµ¥êµ¦êµ§êµ¨êµ©êµªêµ«êµ®êµ¯êµ±êµ²êµ·êµ¸êµ¹êµºêµ¾ê¶€ê¶ƒê¶„ê¶…ê¶†ê¶‡ê¶Šê¶‹ê¶ê¶Žê¶ê¶‘ê¶’ê¶“ê¶”ê¶•ê¶–ê¶—ê¶˜ê¶™ê¶šê¶›ê¶žê¶Ÿê¶ ê¶¡ê¶¢ê¶£ê¶¥ê¶¦ê¶§ê¶¨ê¶©ê¶ªê¶«ê¶¬ê¶­ê¶®ê¶¯ê¶°ê¶±ê¶²ê¶³ê¶´ê¶µê¶¶ê¶¸ê¶¹ê¶ºê¶»ê¶¼ê¶½ê¶¾ê¶¿ê·‚ê·ƒê·…ê·†ê·‡ê·‰ê·Šê·‹ê·Œê·ê·Žê·ê·’ê·”ê·•ê·–ê·—ê·˜ê·™ê·šê·›ê·ê·žê·Ÿê·¡ê·¢ê·£ê·¥ê·¦ê·§ê·¨ê·©ê·ªê·«ê·¬ê·­ê·®ê·¯ê·°ê·±ê·²ê·³ê·´ê·µê·¶ê··ï¿½".split("");for(a=0;a!=t[130].length;++a)if(t[130][a].charCodeAt(0)!==65533){r[t[130][a]]=33280+a;e[33280+a]=t[130][a]}t[131]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê·ºê·»ê·½ê·¾ê¸‚ê¸ƒê¸„ê¸…ê¸†ê¸‡ê¸Šê¸Œê¸Žê¸ê¸ê¸‘ê¸’ê¸“ê¸•ê¸–ê¸—ê¸˜ê¸™ê¸šê¸›ê¸œï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê¸ê¸žê¸Ÿê¸ ê¸¡ê¸¢ê¸£ê¸¤ê¸¥ê¸¦ê¸§ê¸¨ê¸©ê¸ªê¸«ê¸¬ê¸­ê¸®ê¸¯ê¸²ê¸³ê¸µê¸¶ê¸¹ê¸»ê¸¼ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê¸½ê¸¾ê¸¿ê¹‚ê¹„ê¹‡ê¹ˆê¹‰ê¹‹ê¹ê¹‘ê¹’ê¹“ê¹•ê¹—ê¹˜ê¹™ê¹šê¹›ê¹žê¹¢ê¹£ê¹¤ê¹¦ê¹§ê¹ªê¹«ê¹­ê¹®ê¹¯ê¹±ê¹²ê¹³ê¹´ê¹µê¹¶ê¹·ê¹ºê¹¾ê¹¿êº€êºêº‚êºƒêº†êº‡êºˆêº‰êºŠêº‹êºêºŽêºêºêº‘êº’êº“êº”êº•êº–êº—êº˜êº™êºšêº›êºœêºêºžêºŸêº êº¡êº¢êº£êº¤êº¥êº¦êº§êº¨êº©êºªêº«êº¬êº­êº®êº¯êº°êº±êº²êº³êº´êºµêº¶êº·êº¸êº¹êººêº»êº¿ê»ê»‚ê»ƒê»…ê»†ê»‡ê»ˆê»‰ê»Šê»‹ê»Žê»’ê»“ê»”ê»•ê»–ê»—ê»šê»›ê»ê»žê»Ÿê» ê»¡ê»¢ê»£ê»¤ê»¥ï¿½".split("");for(a=0;a!=t[131].length;++a)if(t[131][a].charCodeAt(0)!==65533){r[t[131][a]]=33536+a;e[33536+a]=t[131][a]}t[132]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê»¦ê»§ê»©ê»ªê»¬ê»®ê»¯ê»°ê»±ê»²ê»³ê»µê»¶ê»·ê»¹ê»ºê»»ê»½ê»¾ê»¿ê¼€ê¼ê¼‚ê¼ƒê¼„ê¼…ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê¼†ê¼‰ê¼Šê¼‹ê¼Œê¼Žê¼ê¼‘ê¼’ê¼“ê¼”ê¼•ê¼–ê¼—ê¼˜ê¼™ê¼šê¼›ê¼œê¼ê¼žê¼Ÿê¼ ê¼¡ê¼¢ê¼£ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê¼¤ê¼¥ê¼¦ê¼§ê¼¨ê¼©ê¼ªê¼«ê¼®ê¼¯ê¼±ê¼³ê¼µê¼¶ê¼·ê¼¸ê¼¹ê¼ºê¼»ê¼¾ê½€ê½„ê½…ê½†ê½‡ê½Šê½‹ê½Œê½ê½Žê½ê½‘ê½’ê½“ê½”ê½•ê½–ê½—ê½˜ê½™ê½šê½›ê½žê½Ÿê½ ê½¡ê½¢ê½£ê½¦ê½§ê½¨ê½©ê½ªê½«ê½¬ê½­ê½®ê½¯ê½°ê½±ê½²ê½³ê½´ê½µê½¶ê½·ê½¸ê½ºê½»ê½¼ê½½ê½¾ê½¿ê¾ê¾‚ê¾ƒê¾…ê¾†ê¾‡ê¾‰ê¾Šê¾‹ê¾Œê¾ê¾Žê¾ê¾’ê¾“ê¾”ê¾–ê¾—ê¾˜ê¾™ê¾šê¾›ê¾ê¾žê¾Ÿê¾ ê¾¡ê¾¢ê¾£ê¾¤ê¾¥ê¾¦ê¾§ê¾¨ê¾©ê¾ªê¾«ê¾¬ê¾­ê¾®ê¾¯ê¾°ê¾±ê¾²ê¾³ê¾´ê¾µê¾¶ê¾·ê¾ºê¾»ê¾½ê¾¾ï¿½".split("");for(a=0;a!=t[132].length;++a)if(t[132][a].charCodeAt(0)!==65533){r[t[132][a]]=33792+a;e[33792+a]=t[132][a]}t[133]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê¾¿ê¿ê¿‚ê¿ƒê¿„ê¿…ê¿†ê¿Šê¿Œê¿ê¿ê¿‘ê¿’ê¿“ê¿•ê¿–ê¿—ê¿˜ê¿™ê¿šê¿›ê¿ê¿žê¿Ÿê¿ ê¿¡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ê¿¢ê¿£ê¿¤ê¿¥ê¿¦ê¿§ê¿ªê¿«ê¿¬ê¿­ê¿®ê¿¯ê¿²ê¿³ê¿µê¿¶ê¿·ê¿¹ê¿ºê¿»ê¿¼ê¿½ê¿¾ê¿¿ë€‚ë€ƒï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë€…ë€†ë€‡ë€ˆë€‰ë€Šë€‹ë€ë€Žë€ë€‘ë€’ë€“ë€•ë€–ë€—ë€˜ë€™ë€šë€›ë€žë€Ÿë€ ë€¡ë€¢ë€£ë€¤ë€¥ë€¦ë€§ë€©ë€ªë€«ë€¬ë€­ë€®ë€¯ë€°ë€±ë€²ë€³ë€´ë€µë€¶ë€·ë€¸ë€¹ë€ºë€»ë€¼ë€½ë€¾ë€¿ë€ëë‚ëƒë†ë‡ë‰ë‹ëëëë‘ë’ë–ë˜ëšë›ëœëžëŸë ë¡ë¢ë£ë¤ë¥ë¦ë§ë¨ë©ëªë«ë¬ë­ë®ë¯ë°ë±ë²ë³ë´ëµë¶ë·ë¸ë¹ëºë»ë¾ë¿ë‚ë‚‚ë‚ƒë‚…ë‚†ë‚‡ë‚ˆë‚‰ë‚Šë‚‹ë‚Žë‚ë‚’ë‚“ë‚”ë‚•ë‚–ë‚—ë‚›ë‚ë‚žë‚£ë‚¤ï¿½".split("");for(a=0;a!=t[133].length;++a)if(t[133][a].charCodeAt(0)!==65533){r[t[133][a]]=34048+a;e[34048+a]=t[133][a]}t[134]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë‚¥ë‚¦ë‚§ë‚ªë‚°ë‚²ë‚¶ë‚·ë‚¹ë‚ºë‚»ë‚½ë‚¾ë‚¿ëƒ€ëƒëƒ‚ëƒƒëƒ†ëƒŠëƒ‹ëƒŒëƒëƒŽëƒëƒ’ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ëƒ“ëƒ•ëƒ–ëƒ—ëƒ™ëƒšëƒ›ëƒœëƒëƒžëƒŸëƒ¡ëƒ¢ëƒ£ëƒ¤ëƒ¦ëƒ§ëƒ¨ëƒ©ëƒªëƒ«ëƒ¬ëƒ­ëƒ®ëƒ¯ëƒ°ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ëƒ±ëƒ²ëƒ³ëƒ´ëƒµëƒ¶ëƒ·ëƒ¸ëƒ¹ëƒºëƒ»ëƒ¼ëƒ½ëƒ¾ëƒ¿ë„€ë„ë„‚ë„ƒë„„ë„…ë„†ë„‡ë„Šë„ë„Žë„ë„‘ë„”ë„•ë„–ë„—ë„šë„žë„Ÿë„ ë„¡ë„¢ë„¦ë„§ë„©ë„ªë„«ë„­ë„®ë„¯ë„°ë„±ë„²ë„³ë„¶ë„ºë„»ë„¼ë„½ë„¾ë„¿ë…‚ë…ƒë……ë…†ë…‡ë…‰ë…Šë…‹ë…Œë…ë…Žë…ë…’ë…“ë…–ë…—ë…™ë…šë…›ë…ë…žë…Ÿë…¡ë…¢ë…£ë…¤ë…¥ë…¦ë…§ë…¨ë…©ë…ªë…«ë…¬ë…­ë…®ë…¯ë…°ë…±ë…²ë…³ë…´ë…µë…¶ë…·ë…ºë…»ë…½ë…¾ë…¿ë†ë†ƒë†„ë†…ë††ë†‡ë†Šë†Œë†Žë†ë†ë†‘ë†•ë†–ë†—ë†™ë†šë†›ë†ï¿½".split("");for(a=0;a!=t[134].length;++a)if(t[134][a].charCodeAt(0)!==65533){r[t[134][a]]=34304+a;e[34304+a]=t[134][a]}t[135]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë†žë†Ÿë† ë†¡ë†¢ë†£ë†¤ë†¥ë†¦ë†§ë†©ë†ªë†«ë†¬ë†­ë†®ë†¯ë†°ë†±ë†²ë†³ë†´ë†µë†¶ë†·ë†¸ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë†¹ë†ºë†»ë†¼ë†½ë†¾ë†¿ë‡€ë‡ë‡‚ë‡ƒë‡„ë‡…ë‡†ë‡‡ë‡ˆë‡‰ë‡Šë‡‹ë‡ë‡Žë‡ë‡‘ë‡’ë‡“ë‡•ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë‡–ë‡—ë‡˜ë‡™ë‡šë‡›ë‡žë‡ ë‡¡ë‡¢ë‡£ë‡¤ë‡¥ë‡¦ë‡§ë‡ªë‡«ë‡­ë‡®ë‡¯ë‡±ë‡²ë‡³ë‡´ë‡µë‡¶ë‡·ë‡¸ë‡ºë‡¼ë‡¾ë‡¿ëˆ€ëˆëˆ‚ëˆƒëˆ†ëˆ‡ëˆ‰ëˆŠëˆëˆŽëˆëˆëˆ‘ëˆ’ëˆ“ëˆ–ëˆ˜ëˆšëˆ›ëˆœëˆëˆžëˆŸëˆ¡ëˆ¢ëˆ£ëˆ¤ëˆ¥ëˆ¦ëˆ§ëˆ¨ëˆ©ëˆªëˆ«ëˆ¬ëˆ­ëˆ®ëˆ¯ëˆ°ëˆ±ëˆ²ëˆ³ëˆµëˆ¶ëˆ·ëˆ¸ëˆ¹ëˆºëˆ»ëˆ½ëˆ¾ëˆ¿ë‰€ë‰ë‰‚ë‰ƒë‰„ë‰…ë‰†ë‰‡ë‰ˆë‰‰ë‰Šë‰‹ë‰Œë‰ë‰Žë‰ë‰ë‰‘ë‰’ë‰“ë‰”ë‰•ë‰–ë‰—ë‰™ë‰šë‰›ë‰ë‰žë‰Ÿë‰¡ë‰¢ë‰£ë‰¤ë‰¥ë‰¦ë‰§ë‰ªë‰«ë‰¬ë‰­ë‰®ï¿½".split("");for(a=0;a!=t[135].length;++a)if(t[135][a].charCodeAt(0)!==65533){r[t[135][a]]=34560+a;e[34560+a]=t[135][a]}t[136]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë‰¯ë‰°ë‰±ë‰²ë‰³ë‰¶ë‰·ë‰¸ë‰¹ë‰ºë‰»ë‰½ë‰¾ë‰¿ëŠ€ëŠëŠ‚ëŠƒëŠ†ëŠ‡ëŠˆëŠŠëŠ‹ëŠŒëŠëŠŽï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ëŠëŠ’ëŠ“ëŠ•ëŠ–ëŠ—ëŠ›ëŠœëŠëŠžëŠŸëŠ¢ëŠ¤ëŠ§ëŠ¨ëŠ©ëŠ«ëŠ­ëŠ®ëŠ¯ëŠ±ëŠ²ëŠ³ëŠµëŠ¶ëŠ·ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ëŠ¸ëŠ¹ëŠºëŠ»ëŠ¼ëŠ½ëŠ¾ëŠ¿ë‹€ë‹ë‹‚ë‹ƒë‹„ë‹…ë‹†ë‹‡ë‹Šë‹‹ë‹ë‹Žë‹ë‹‘ë‹“ë‹”ë‹•ë‹–ë‹—ë‹šë‹œë‹žë‹Ÿë‹ ë‹¡ë‹£ë‹§ë‹©ë‹ªë‹°ë‹±ë‹²ë‹¶ë‹¼ë‹½ë‹¾ëŒ‚ëŒƒëŒ…ëŒ†ëŒ‡ëŒ‰ëŒŠëŒ‹ëŒŒëŒëŒŽëŒëŒ’ëŒ–ëŒ—ëŒ˜ëŒ™ëŒšëŒ›ëŒëŒžëŒŸëŒ ëŒ¡ëŒ¢ëŒ£ëŒ¤ëŒ¥ëŒ¦ëŒ§ëŒ¨ëŒ©ëŒªëŒ«ëŒ¬ëŒ­ëŒ®ëŒ¯ëŒ°ëŒ±ëŒ²ëŒ³ëŒ´ëŒµëŒ¶ëŒ·ëŒ¸ëŒ¹ëŒºëŒ»ëŒ¼ëŒ½ëŒ¾ëŒ¿ë€ëë‚ëƒë„ë…ë†ë‡ëˆë‰ëŠë‹ëŒëëŽëëë‘ë’ë“ë—ë™ëšëë ë¡ë¢ë£ï¿½".split("");for(a=0;a!=t[136].length;++a)if(t[136][a].charCodeAt(0)!==65533){r[t[136][a]]=34816+a;e[34816+a]=t[136][a]}t[137]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë¦ë¨ëªë¬ë­ë¯ë²ë³ëµë¶ë·ë¹ëºë»ë¼ë½ë¾ë¿ëŽ‚ëŽ†ëŽ‡ëŽˆëŽ‰ëŽŠëŽ‹ëŽï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ëŽŽëŽëŽ‘ëŽ’ëŽ“ëŽ•ëŽ–ëŽ—ëŽ˜ëŽ™ëŽšëŽ›ëŽœëŽëŽžëŽŸëŽ¢ëŽ£ëŽ¤ëŽ¥ëŽ¦ëŽ§ëŽ©ëŽªëŽ«ëŽ­ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ëŽ®ëŽ¯ëŽ°ëŽ±ëŽ²ëŽ³ëŽ´ëŽµëŽ¶ëŽ·ëŽ¸ëŽ¹ëŽºëŽ»ëŽ¼ëŽ½ëŽ¾ëŽ¿ë€ëë‚ëƒë†ë‡ë‰ëŠëëë‘ë’ë“ë–ë˜ëšëœëžëŸë¡ë¢ë£ë¥ë¦ë§ë©ëªë«ë¬ë­ë®ë¯ë°ë±ë²ë³ë´ëµë¶ë·ë¸ë¹ëºë»ë½ë¾ë¿ë€ëë‚ëƒë„ë…ë†ë‡ëˆë‰ëŠë‹ëŒëëŽëë‘ë’ë“ë”ë•ë–ë—ë™ëšë›ëëžëŸë¡ë¢ë£ë¤ë¥ë¦ë§ëªë¬ë­ë®ë¯ë°ë±ë²ë³ëµë¶ë·ë¸ë¹ëºë»ë¼ë½ë¾ë¿ë‘€ë‘ë‘‚ë‘ƒë‘„ï¿½".split("");for(a=0;a!=t[137].length;++a)if(t[137][a].charCodeAt(0)!==65533){r[t[137][a]]=35072+a;e[35072+a]=t[137][a]}t[138]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë‘…ë‘†ë‘‡ë‘ˆë‘‰ë‘Šë‘‹ë‘Œë‘ë‘Žë‘ë‘’ë‘“ë‘•ë‘–ë‘—ë‘™ë‘šë‘›ë‘œë‘ë‘žë‘Ÿë‘¢ë‘¤ë‘¦ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë‘§ë‘¨ë‘©ë‘ªë‘«ë‘­ë‘®ë‘¯ë‘°ë‘±ë‘²ë‘³ë‘´ë‘µë‘¶ë‘·ë‘¸ë‘¹ë‘ºë‘»ë‘¼ë‘½ë‘¾ë‘¿ë’ë’‚ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë’ƒë’„ë’…ë’†ë’‡ë’‰ë’Šë’‹ë’Œë’ë’Žë’ë’ë’‘ë’’ë’“ë’”ë’•ë’–ë’—ë’˜ë’™ë’šë’›ë’œë’žë’Ÿë’ ë’¡ë’¢ë’£ë’¥ë’¦ë’§ë’©ë’ªë’«ë’­ë’®ë’¯ë’°ë’±ë’²ë’³ë’´ë’¶ë’¸ë’ºë’»ë’¼ë’½ë’¾ë’¿ë“ë“‚ë“ƒë“…ë“†ë“‡ë“‰ë“Šë“‹ë“Œë“ë“Žë“ë“‘ë“’ë““ë“”ë“–ë“—ë“˜ë“™ë“šë“›ë“žë“Ÿë“¡ë“¢ë“¥ë“§ë“¨ë“©ë“ªë“«ë“®ë“°ë“²ë“³ë“´ë“µë“¶ë“·ë“¹ë“ºë“»ë“¼ë“½ë“¾ë“¿ë”€ë”ë”‚ë”ƒë”„ë”…ë”†ë”‡ë”ˆë”‰ë”Šë”‹ë”Œë”ë”Žë”ë”ë”‘ë”’ë”“ë”–ë”—ë”™ë”šë”ï¿½".split("");for(a=0;a!=t[138].length;++a)if(t[138][a].charCodeAt(0)!==65533){r[t[138][a]]=35328+a;e[35328+a]=t[138][a]}t[139]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë”žë”Ÿë” ë”¡ë”¢ë”£ë”¦ë”«ë”¬ë”­ë”®ë”¯ë”²ë”³ë”µë”¶ë”·ë”¹ë”ºë”»ë”¼ë”½ë”¾ë”¿ë•‚ë•†ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë•‡ë•ˆë•‰ë•Šë•Žë•ë•‘ë•’ë•“ë••ë•–ë•—ë•˜ë•™ë•šë•›ë•žë•¢ë•£ë•¤ë•¥ë•¦ë•§ë•¨ë•©ë•ªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë•«ë•¬ë•­ë•®ë•¯ë•°ë•±ë•²ë•³ë•´ë•µë•¶ë•·ë•¸ë•¹ë•ºë•»ë•¼ë•½ë•¾ë•¿ë–€ë–ë–‚ë–ƒë–„ë–…ë–†ë–‡ë–ˆë–‰ë–Šë–‹ë–Œë–ë–Žë–ë–ë–‘ë–’ë–“ë–”ë–•ë––ë–—ë–˜ë–™ë–šë–›ë–œë–ë–žë–Ÿë–¢ë–£ë–¥ë–¦ë–§ë–©ë–¬ë–­ë–®ë–¯ë–²ë–¶ë–·ë–¸ë–¹ë–ºë–¾ë–¿ë—ë—‚ë—ƒë—…ë—†ë—‡ë—ˆë—‰ë—Šë—‹ë—Žë—’ë—“ë—”ë—•ë—–ë——ë—™ë—šë—›ë—œë—ë—žë—Ÿë— ë—¡ë—¢ë—£ë—¤ë—¥ë—¦ë—§ë—¨ë—©ë—ªë—«ë—­ë—®ë—¯ë—°ë—±ë—²ë—³ë—´ë—µë—¶ë—·ë—¸ë—¹ë—ºë—»ë—¼ë—½ë—¾ë—¿ï¿½".split("");for(a=0;a!=t[139].length;++a)if(t[139][a].charCodeAt(0)!==65533){r[t[139][a]]=35584+a;e[35584+a]=t[139][a]}t[140]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë˜€ë˜ë˜‚ë˜ƒë˜„ë˜…ë˜†ë˜‡ë˜ˆë˜‰ë˜Šë˜‹ë˜Œë˜ë˜Žë˜ë˜’ë˜“ë˜•ë˜–ë˜—ë˜™ë˜šë˜›ë˜œë˜ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë˜žë˜Ÿë˜ ë˜¡ë˜¢ë˜£ë˜¤ë˜¦ë˜§ë˜¨ë˜©ë˜ªë˜«ë˜­ë˜®ë˜¯ë˜°ë˜±ë˜²ë˜³ë˜µë˜¶ë˜·ë˜¸ë˜¹ë˜ºï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë˜»ë˜¼ë˜½ë˜¾ë˜¿ë™€ë™ë™‚ë™ƒë™„ë™…ë™†ë™‡ë™‰ë™Šë™‹ë™Œë™ë™Žë™ë™ë™‘ë™’ë™“ë™”ë™•ë™–ë™—ë™˜ë™™ë™šë™›ë™œë™ë™žë™Ÿë™ ë™¡ë™¢ë™£ë™¥ë™¦ë™§ë™©ë™ªë™«ë™¬ë™­ë™®ë™¯ë™°ë™±ë™²ë™³ë™´ë™µë™¶ë™·ë™¸ë™¹ë™ºë™»ë™¼ë™½ë™¾ë™¿ëš€ëšëš‚ëšƒëš„ëš…ëš†ëš‡ëšˆëš‰ëšŠëš‹ëšŒëšëšŽëšëšëš‘ëš’ëš“ëš”ëš•ëš–ëš—ëš˜ëš™ëššëš›ëšžëšŸëš¡ëš¢ëš£ëš¥ëš¦ëš§ëš¨ëš©ëšªëš­ëš®ëš¯ëš°ëš²ëš³ëš´ëšµëš¶ëš·ëš¸ëš¹ëšºëš»ëš¼ëš½ëš¾ëš¿ë›€ë›ë›‚ï¿½".split("");for(a=0;a!=t[140].length;++a)if(t[140][a].charCodeAt(0)!==65533){r[t[140][a]]=35840+a;e[35840+a]=t[140][a]}t[141]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë›ƒë›„ë›…ë›†ë›‡ë›ˆë›‰ë›Šë›‹ë›Œë›ë›Žë›ë›ë›‘ë›’ë›“ë›•ë›–ë›—ë›˜ë›™ë›šë››ë›œë›ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë›žë›Ÿë› ë›¡ë›¢ë›£ë›¤ë›¥ë›¦ë›§ë›¨ë›©ë›ªë›«ë›¬ë›­ë›®ë›¯ë›±ë›²ë›³ë›µë›¶ë›·ë›¹ë›ºï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë›»ë›¼ë›½ë›¾ë›¿ëœ‚ëœƒëœ„ëœ†ëœ‡ëœˆëœ‰ëœŠëœ‹ëœŒëœëœŽëœëœëœ‘ëœ’ëœ“ëœ”ëœ•ëœ–ëœ—ëœ˜ëœ™ëœšëœ›ëœœëœëœžëœŸëœ ëœ¡ëœ¢ëœ£ëœ¤ëœ¥ëœ¦ëœ§ëœªëœ«ëœ­ëœ®ëœ±ëœ²ëœ³ëœ´ëœµëœ¶ëœ·ëœºëœ¼ëœ½ëœ¾ëœ¿ë€ëë‚ëƒë…ë†ë‡ë‰ëŠë‹ëëŽëëë‘ë’ë“ë–ë—ë˜ë™ëšë›ëœëëžëŸë¡ë¢ë£ë¥ë¦ë§ë©ëªë«ë¬ë­ë®ë¯ë²ë´ë¶ë·ë¸ë¹ëºë»ë¾ë¿ëžëž‚ëžƒëž…ëž†ëž‡ëžˆëž‰ëžŠëž‹ëžŽëž“ëž”ëž•ëžšëž›ëžëžžï¿½".split("");for(a=0;a!=t[141].length;++a)if(t[141][a].charCodeAt(0)!==65533){r[t[141][a]]=36096+a;e[36096+a]=t[141][a]}t[142]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ëžŸëž¡ëž¢ëž£ëž¤ëž¥ëž¦ëž§ëžªëž®ëž¯ëž°ëž±ëž²ëž³ëž¶ëž·ëž¹ëžºëž»ëž¼ëž½ëž¾ëž¿ëŸ€ëŸï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ëŸ‚ëŸƒëŸ„ëŸ…ëŸ†ëŸˆëŸŠëŸ‹ëŸŒëŸëŸŽëŸëŸëŸ‘ëŸ’ëŸ“ëŸ”ëŸ•ëŸ–ëŸ—ëŸ˜ëŸ™ëŸšëŸ›ëŸœëŸï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ëŸžëŸŸëŸ ëŸ¡ëŸ¢ëŸ£ëŸ¤ëŸ¥ëŸ¦ëŸ§ëŸ¨ëŸ©ëŸªëŸ«ëŸ®ëŸ¯ëŸ±ëŸ²ëŸ³ëŸµëŸ¶ëŸ·ëŸ¸ëŸ¹ëŸºëŸ»ëŸ¾ë ‚ë ƒë „ë …ë †ë Šë ‹ë ë Žë ë ‘ë ’ë “ë ”ë •ë –ë —ë šë œë žë Ÿë  ë ¡ë ¢ë £ë ¦ë §ë ©ë ªë «ë ­ë ®ë ¯ë °ë ±ë ²ë ³ë ¶ë ºë »ë ¼ë ½ë ¾ë ¿ë¡ë¡‚ë¡ƒë¡…ë¡†ë¡‡ë¡ˆë¡‰ë¡Šë¡‹ë¡Œë¡ë¡Žë¡ë¡ë¡’ë¡”ë¡•ë¡–ë¡—ë¡˜ë¡™ë¡šë¡›ë¡žë¡Ÿë¡¡ë¡¢ë¡£ë¡¥ë¡¦ë¡§ë¡¨ë¡©ë¡ªë¡«ë¡®ë¡°ë¡²ë¡³ë¡´ë¡µë¡¶ë¡·ë¡¹ë¡ºë¡»ë¡½ë¡¾ë¡¿ë¢€ë¢ë¢‚ë¢ƒë¢„ï¿½".split("");for(a=0;a!=t[142].length;++a)if(t[142][a].charCodeAt(0)!==65533){r[t[142][a]]=36352+a;e[36352+a]=t[142][a]}t[143]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë¢…ë¢†ë¢‡ë¢ˆë¢‰ë¢Šë¢‹ë¢Œë¢Žë¢ë¢ë¢‘ë¢’ë¢“ë¢”ë¢•ë¢–ë¢—ë¢˜ë¢™ë¢šë¢›ë¢œë¢ë¢žë¢Ÿï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë¢ ë¢¡ë¢¢ë¢£ë¢¤ë¢¥ë¢¦ë¢§ë¢©ë¢ªë¢«ë¢¬ë¢­ë¢®ë¢¯ë¢±ë¢²ë¢³ë¢µë¢¶ë¢·ë¢¹ë¢ºë¢»ë¢¼ë¢½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë¢¾ë¢¿ë£‚ë£„ë£†ë£‡ë£ˆë£‰ë£Šë£‹ë£ë£Žë£ë£‘ë£’ë£“ë£•ë£–ë£—ë£˜ë£™ë£šë£›ë£œë£žë£ ë£¢ë££ë£¤ë£¥ë£¦ë£§ë£ªë£«ë£­ë£®ë£¯ë£±ë£²ë£³ë£´ë£µë£¶ë£·ë£ºë£¼ë£¾ë£¿ë¤€ë¤ë¤‚ë¤ƒë¤…ë¤†ë¤‡ë¤ˆë¤‰ë¤Šë¤‹ë¤Œë¤ë¤Žë¤ë¤ë¤‘ë¤’ë¤“ë¤”ë¤•ë¤–ë¤—ë¤™ë¤šë¤›ë¤œë¤ë¤žë¤Ÿë¤¡ë¤¢ë¤£ë¤¤ë¤¥ë¤¦ë¤§ë¤¨ë¤©ë¤ªë¤«ë¤¬ë¤­ë¤®ë¤¯ë¤°ë¤±ë¤²ë¤³ë¤´ë¤µë¤¶ë¤·ë¤¸ë¤¹ë¤ºë¤»ë¤¾ë¤¿ë¥ë¥‚ë¥ƒë¥…ë¥†ë¥‡ë¥ˆë¥‰ë¥Šë¥‹ë¥ë¥Žë¥ë¥’ë¥“ë¥”ë¥•ë¥–ë¥—ï¿½".split("");for(a=0;a!=t[143].length;++a)if(t[143][a].charCodeAt(0)!==65533){r[t[143][a]]=36608+a;e[36608+a]=t[143][a]}t[144]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë¥šë¥›ë¥ë¥žë¥Ÿë¥¡ë¥¢ë¥£ë¥¤ë¥¥ë¥¦ë¥§ë¥ªë¥¬ë¥®ë¥¯ë¥°ë¥±ë¥²ë¥³ë¥¶ë¥·ë¥¹ë¥ºë¥»ë¥½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë¥¾ë¥¿ë¦€ë¦ë¦‚ë¦ƒë¦†ë¦ˆë¦‹ë¦Œë¦ë¦ë¦‘ë¦’ë¦“ë¦”ë¦•ë¦–ë¦—ë¦˜ë¦™ë¦šë¦›ë¦œë¦ë¦žï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë¦Ÿë¦ ë¦¡ë¦¢ë¦£ë¦¤ë¦¥ë¦¦ë¦§ë¦¨ë¦©ë¦ªë¦«ë¦®ë¦¯ë¦±ë¦²ë¦³ë¦µë¦¶ë¦·ë¦¸ë¦¹ë¦ºë¦»ë¦¾ë§€ë§‚ë§ƒë§„ë§…ë§†ë§‡ë§Šë§‹ë§ë§“ë§”ë§•ë§–ë§—ë§šë§œë§Ÿë§ ë§¢ë§¦ë§§ë§©ë§ªë§«ë§­ë§®ë§¯ë§°ë§±ë§²ë§³ë§¶ë§»ë§¼ë§½ë§¾ë§¿ë¨‚ë¨ƒë¨„ë¨…ë¨†ë¨‡ë¨‰ë¨Šë¨‹ë¨Œë¨ë¨Žë¨ë¨ë¨‘ë¨’ë¨“ë¨”ë¨–ë¨—ë¨˜ë¨™ë¨šë¨›ë¨œë¨ë¨žë¨Ÿë¨ ë¨¡ë¨¢ë¨£ë¨¤ë¨¥ë¨¦ë¨§ë¨¨ë¨©ë¨ªë¨«ë¨¬ë¨­ë¨®ë¨¯ë¨°ë¨±ë¨²ë¨³ë¨´ë¨µë¨¶ë¨·ë¨ºë¨»ë¨½ë¨¾ë¨¿ë©ë©ƒë©„ë©…ë©†ï¿½".split("");for(a=0;a!=t[144].length;++a)if(t[144][a].charCodeAt(0)!==65533){r[t[144][a]]=36864+a;e[36864+a]=t[144][a]}t[145]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë©‡ë©Šë©Œë©ë©ë©‘ë©’ë©–ë©—ë©™ë©šë©›ë©ë©žë©Ÿë© ë©¡ë©¢ë©£ë©¦ë©ªë©«ë©¬ë©­ë©®ë©¯ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë©²ë©³ë©µë©¶ë©·ë©¹ë©ºë©»ë©¼ë©½ë©¾ë©¿ëª€ëªëª‚ëª†ëªˆëª‰ëªŠëª‹ëªëªŽëªëªëª‘ëª’ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ëª“ëª”ëª•ëª–ëª—ëª˜ëª™ëªšëª›ëªœëªëªžëªŸëª ëª¡ëª¢ëª£ëª¤ëª¥ëª¦ëª§ëªªëª­ëª®ëª¯ëª±ëª³ëª´ëªµëª¶ëª·ëªºëª¼ëª¾ëª¿ë«€ë«ë«‚ë«ƒë«…ë«†ë«‡ë«‰ë«Šë«‹ë«Œë«ë«Žë«ë«ë«‘ë«’ë«“ë«”ë«•ë«–ë«—ë«šë«›ë«œë«ë«žë«Ÿë« ë«¡ë«¢ë«£ë«¤ë«¥ë«¦ë«§ë«¨ë«©ë«ªë««ë«¬ë«­ë«®ë«¯ë«°ë«±ë«²ë«³ë«´ë«µë«¶ë«·ë«¸ë«¹ë«ºë«»ë«½ë«¾ë«¿ë¬ë¬‚ë¬ƒë¬…ë¬†ë¬‡ë¬ˆë¬‰ë¬Šë¬‹ë¬Œë¬Žë¬ë¬’ë¬“ë¬”ë¬•ë¬–ë¬—ë¬™ë¬šë¬›ë¬ë¬žë¬Ÿë¬¡ë¬¢ë¬£ë¬¤ë¬¥ë¬¦ë¬§ï¿½".split("");for(a=0;a!=t[145].length;++a)if(t[145][a].charCodeAt(0)!==65533){r[t[145][a]]=37120+a;e[37120+a]=t[145][a]}t[146]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë¬¨ë¬ªë¬¬ë¬­ë¬®ë¬¯ë¬°ë¬±ë¬²ë¬³ë¬·ë¬¹ë¬ºë¬¿ë­€ë­ë­‚ë­ƒë­†ë­ˆë­Šë­‹ë­Œë­Žë­‘ë­’ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë­“ë­•ë­–ë­—ë­™ë­šë­›ë­œë­ë­žë­Ÿë­ ë­¢ë­¤ë­¥ë­¦ë­§ë­¨ë­©ë­ªë­«ë­­ë­®ë­¯ë­°ë­±ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë­²ë­³ë­´ë­µë­¶ë­·ë­¸ë­¹ë­ºë­»ë­¼ë­½ë­¾ë­¿ë®€ë®ë®‚ë®ƒë®„ë®…ë®†ë®‡ë®‰ë®Šë®‹ë®ë®Žë®ë®‘ë®’ë®“ë®”ë®•ë®–ë®—ë®˜ë®™ë®šë®›ë®œë®ë®žë®Ÿë® ë®¡ë®¢ë®£ë®¥ë®¦ë®§ë®©ë®ªë®«ë®­ë®®ë®¯ë®°ë®±ë®²ë®³ë®µë®¶ë®¸ë®¹ë®ºë®»ë®¼ë®½ë®¾ë®¿ë¯ë¯‚ë¯ƒë¯…ë¯†ë¯‡ë¯‰ë¯Šë¯‹ë¯Œë¯ë¯Žë¯ë¯‘ë¯’ë¯”ë¯•ë¯–ë¯—ë¯˜ë¯™ë¯šë¯›ë¯œë¯ë¯žë¯Ÿë¯ ë¯¡ë¯¢ë¯£ë¯¤ë¯¥ë¯¦ë¯§ë¯¨ë¯©ë¯ªë¯«ë¯¬ë¯­ë¯®ë¯¯ë¯°ë¯±ë¯²ë¯³ë¯´ë¯µë¯¶ë¯·ë¯ºë¯»ë¯½ë¯¾ë°ï¿½".split("");for(a=0;a!=t[146].length;++a)if(t[146][a].charCodeAt(0)!==65533){r[t[146][a]]=37376+a;e[37376+a]=t[146][a]}t[147]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë°ƒë°„ë°…ë°†ë°‡ë°Šë°Žë°ë°’ë°“ë°™ë°šë° ë°¡ë°¢ë°£ë°¦ë°¨ë°ªë°«ë°¬ë°®ë°¯ë°²ë°³ë°µï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë°¶ë°·ë°¹ë°ºë°»ë°¼ë°½ë°¾ë°¿ë±‚ë±†ë±‡ë±ˆë±Šë±‹ë±Žë±ë±‘ë±’ë±“ë±”ë±•ë±–ë±—ë±˜ë±™ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë±šë±›ë±œë±žë±Ÿë± ë±¡ë±¢ë±£ë±¤ë±¥ë±¦ë±§ë±¨ë±©ë±ªë±«ë±¬ë±­ë±®ë±¯ë±°ë±±ë±²ë±³ë±´ë±µë±¶ë±·ë±¸ë±¹ë±ºë±»ë±¼ë±½ë±¾ë±¿ë²€ë²ë²‚ë²ƒë²†ë²‡ë²‰ë²Šë²ë²ë²ë²‘ë²’ë²“ë²–ë²˜ë²›ë²œë²ë²žë²Ÿë²¢ë²£ë²¥ë²¦ë²©ë²ªë²«ë²¬ë²­ë²®ë²¯ë²²ë²¶ë²·ë²¸ë²¹ë²ºë²»ë²¾ë²¿ë³ë³‚ë³ƒë³…ë³†ë³‡ë³ˆë³‰ë³Šë³‹ë³Œë³Žë³’ë³“ë³”ë³–ë³—ë³™ë³šë³›ë³ë³žë³Ÿë³ ë³¡ë³¢ë³£ë³¤ë³¥ë³¦ë³§ë³¨ë³©ë³ªë³«ë³¬ë³­ë³®ë³¯ë³°ë³±ë³²ë³³ë³·ë³¹ë³ºë³»ë³½ï¿½".split("");for(a=0;a!=t[147].length;++a)if(t[147][a].charCodeAt(0)!==65533){r[t[147][a]]=37632+a;e[37632+a]=t[147][a]}t[148]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë³¾ë³¿ë´€ë´ë´‚ë´ƒë´†ë´ˆë´Šë´‹ë´Œë´ë´Žë´ë´‘ë´’ë´“ë´•ë´–ë´—ë´˜ë´™ë´šë´›ë´œë´ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë´žë´Ÿë´ ë´¡ë´¢ë´£ë´¥ë´¦ë´§ë´¨ë´©ë´ªë´«ë´­ë´®ë´¯ë´°ë´±ë´²ë´³ë´´ë´µë´¶ë´·ë´¸ë´¹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë´ºë´»ë´¼ë´½ë´¾ë´¿ëµëµ‚ëµƒëµ„ëµ…ëµ†ëµ‡ëµŠëµ‹ëµëµŽëµëµ‘ëµ’ëµ“ëµ”ëµ•ëµ–ëµ—ëµšëµ›ëµœëµëµžëµŸëµ ëµ¡ëµ¢ëµ£ëµ¥ëµ¦ëµ§ëµ©ëµªëµ«ëµ¬ëµ­ëµ®ëµ¯ëµ°ëµ±ëµ²ëµ³ëµ´ëµµëµ¶ëµ·ëµ¸ëµ¹ëµºëµ»ëµ¼ëµ½ëµ¾ëµ¿ë¶‚ë¶ƒë¶…ë¶†ë¶‹ë¶Œë¶ë¶Žë¶ë¶’ë¶”ë¶–ë¶—ë¶˜ë¶›ë¶ë¶žë¶Ÿë¶ ë¶¡ë¶¢ë¶£ë¶¥ë¶¦ë¶§ë¶¨ë¶©ë¶ªë¶«ë¶¬ë¶­ë¶®ë¶¯ë¶±ë¶²ë¶³ë¶´ë¶µë¶¶ë¶·ë¶¹ë¶ºë¶»ë¶¼ë¶½ë¶¾ë¶¿ë·€ë·ë·‚ë·ƒë·„ë·…ë·†ë·‡ë·ˆë·‰ë·Šë·‹ë·Œë·ë·Žë·ë·ë·‘ï¿½".split("");for(a=0;a!=t[148].length;++a)if(t[148][a].charCodeAt(0)!==65533){r[t[148][a]]=37888+a;e[37888+a]=t[148][a]}t[149]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë·’ë·“ë·–ë·—ë·™ë·šë·›ë·ë·žë·Ÿë· ë·¡ë·¢ë·£ë·¤ë·¥ë·¦ë·§ë·¨ë·ªë·«ë·¬ë·­ë·®ë·¯ë·±ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë·²ë·³ë·µë·¶ë··ë·¹ë·ºë·»ë·¼ë·½ë·¾ë·¿ë¸ë¸‚ë¸„ë¸†ë¸‡ë¸ˆë¸‰ë¸Šë¸‹ë¸Žë¸ë¸‘ë¸’ë¸“ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë¸•ë¸–ë¸—ë¸˜ë¸™ë¸šë¸›ë¸žë¸ ë¸¡ë¸¢ë¸£ë¸¤ë¸¥ë¸¦ë¸§ë¸¨ë¸©ë¸ªë¸«ë¸¬ë¸­ë¸®ë¸¯ë¸°ë¸±ë¸²ë¸³ë¸´ë¸µë¸¶ë¸·ë¸¸ë¸¹ë¸ºë¸»ë¸¼ë¸½ë¸¾ë¸¿ë¹€ë¹ë¹‚ë¹ƒë¹†ë¹‡ë¹‰ë¹Šë¹‹ë¹ë¹ë¹ë¹‘ë¹’ë¹“ë¹–ë¹˜ë¹œë¹ë¹žë¹Ÿë¹¢ë¹£ë¹¥ë¹¦ë¹§ë¹©ë¹«ë¹¬ë¹­ë¹®ë¹¯ë¹²ë¹¶ë¹·ë¹¸ë¹¹ë¹ºë¹¾ë¹¿ëºëº‚ëºƒëº…ëº†ëº‡ëºˆëº‰ëºŠëº‹ëºŽëº’ëº“ëº”ëº•ëº–ëº—ëºšëº›ëºœëºëºžëºŸëº ëº¡ëº¢ëº£ëº¤ëº¥ëº¦ëº§ëº©ëºªëº«ëº¬ëº­ëº®ëº¯ëº°ëº±ëº²ëº³ëº´ëºµëº¶ëº·ï¿½".split("");for(a=0;a!=t[149].length;++a)if(t[149][a].charCodeAt(0)!==65533){r[t[149][a]]=38144+a;e[38144+a]=t[149][a]}t[150]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ëº¸ëº¹ëººëº»ëº¼ëº½ëº¾ëº¿ë»€ë»ë»‚ë»ƒë»„ë»…ë»†ë»‡ë»ˆë»‰ë»Šë»‹ë»Œë»ë»Žë»ë»’ë»“ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë»•ë»–ë»™ë»šë»›ë»œë»ë»žë»Ÿë»¡ë»¢ë»¦ë»§ë»¨ë»©ë»ªë»«ë»­ë»®ë»¯ë»°ë»±ë»²ë»³ë»´ë»µï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë»¶ë»·ë»¸ë»¹ë»ºë»»ë»¼ë»½ë»¾ë»¿ë¼€ë¼‚ë¼ƒë¼„ë¼…ë¼†ë¼‡ë¼Šë¼‹ë¼Œë¼ë¼Žë¼ë¼ë¼‘ë¼’ë¼“ë¼”ë¼•ë¼–ë¼—ë¼šë¼žë¼Ÿë¼ ë¼¡ë¼¢ë¼£ë¼¤ë¼¥ë¼¦ë¼§ë¼¨ë¼©ë¼ªë¼«ë¼¬ë¼­ë¼®ë¼¯ë¼°ë¼±ë¼²ë¼³ë¼´ë¼µë¼¶ë¼·ë¼¸ë¼¹ë¼ºë¼»ë¼¼ë¼½ë¼¾ë¼¿ë½‚ë½ƒë½…ë½†ë½‡ë½‰ë½Šë½‹ë½Œë½ë½Žë½ë½’ë½“ë½”ë½–ë½—ë½˜ë½™ë½šë½›ë½œë½ë½žë½Ÿë½ ë½¡ë½¢ë½£ë½¤ë½¥ë½¦ë½§ë½¨ë½©ë½ªë½«ë½¬ë½­ë½®ë½¯ë½°ë½±ë½²ë½³ë½´ë½µë½¶ë½·ë½¸ë½¹ë½ºë½»ë½¼ë½½ë½¾ë½¿ë¾€ë¾ë¾‚ï¿½".split("");for(a=0;a!=t[150].length;++a)if(t[150][a].charCodeAt(0)!==65533){r[t[150][a]]=38400+a;e[38400+a]=t[150][a]}t[151]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë¾ƒë¾„ë¾…ë¾†ë¾‡ë¾ˆë¾‰ë¾Šë¾‹ë¾Œë¾ë¾Žë¾ë¾ë¾‘ë¾’ë¾“ë¾•ë¾–ë¾—ë¾˜ë¾™ë¾šë¾›ë¾œë¾ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë¾žë¾Ÿë¾ ë¾¡ë¾¢ë¾£ë¾¤ë¾¥ë¾¦ë¾§ë¾¨ë¾©ë¾ªë¾«ë¾¬ë¾­ë¾®ë¾¯ë¾±ë¾²ë¾³ë¾´ë¾µë¾¶ë¾·ë¾¸ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ë¾¹ë¾ºë¾»ë¾¼ë¾½ë¾¾ë¾¿ë¿€ë¿ë¿‚ë¿ƒë¿„ë¿†ë¿‡ë¿ˆë¿‰ë¿Šë¿‹ë¿Žë¿ë¿‘ë¿’ë¿“ë¿•ë¿–ë¿—ë¿˜ë¿™ë¿šë¿›ë¿ë¿žë¿ ë¿¢ë¿£ë¿¤ë¿¥ë¿¦ë¿§ë¿¨ë¿©ë¿ªë¿«ë¿¬ë¿­ë¿®ë¿¯ë¿°ë¿±ë¿²ë¿³ë¿´ë¿µë¿¶ë¿·ë¿¸ë¿¹ë¿ºë¿»ë¿¼ë¿½ë¿¾ë¿¿ì€€ì€ì€‚ì€ƒì€„ì€…ì€†ì€‡ì€ˆì€‰ì€Šì€‹ì€Œì€ì€Žì€ì€ì€‘ì€’ì€“ì€”ì€•ì€–ì€—ì€˜ì€™ì€šì€›ì€œì€ì€žì€Ÿì€ ì€¡ì€¢ì€£ì€¤ì€¥ì€¦ì€§ì€¨ì€©ì€ªì€«ì€¬ì€­ì€®ì€¯ì€°ì€±ì€²ì€³ì€´ì€µì€¶ì€·ì€¸ì€¹ì€ºì€»ì€½ì€¾ì€¿ï¿½".split("");for(a=0;a!=t[151].length;++a)if(t[151][a].charCodeAt(0)!==65533){r[t[151][a]]=38656+a;e[38656+a]=t[151][a]}t[152]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì€ìì‚ìƒì„ì…ì†ì‡ìˆì‰ìŠì‹ìŒììŽììì’ì“ì”ì•ì–ì—ì™ìšì›ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ììžìŸì¡ì¢ì£ì¤ì¥ì¦ì§ìªì«ì¬ì­ì®ì¯ì°ì±ì²ì³ì´ìµì¶ì·ì¸ì¹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìºì»ì¼ì½ì¾ì¿ì‚€ì‚ì‚‚ì‚ƒì‚„ì‚…ì‚†ì‚‡ì‚ˆì‚‰ì‚Šì‚‹ì‚Œì‚ì‚Žì‚ì‚’ì‚“ì‚•ì‚–ì‚—ì‚™ì‚šì‚›ì‚œì‚ì‚žì‚Ÿì‚¢ì‚¤ì‚¦ì‚§ì‚¨ì‚©ì‚ªì‚«ì‚®ì‚±ì‚²ì‚·ì‚¸ì‚¹ì‚ºì‚»ì‚¾ìƒ‚ìƒƒìƒ„ìƒ†ìƒ‡ìƒŠìƒ‹ìƒìƒŽìƒìƒ‘ìƒ’ìƒ“ìƒ”ìƒ•ìƒ–ìƒ—ìƒšìƒžìƒŸìƒ ìƒ¡ìƒ¢ìƒ£ìƒ¦ìƒ§ìƒ©ìƒªìƒ«ìƒ­ìƒ®ìƒ¯ìƒ°ìƒ±ìƒ²ìƒ³ìƒ¶ìƒ¸ìƒºìƒ»ìƒ¼ìƒ½ìƒ¾ìƒ¿ì„ì„‚ì„ƒì„…ì„†ì„‡ì„‰ì„Šì„‹ì„Œì„ì„Žì„ì„‘ì„’ì„“ì„”ì„–ì„—ì„˜ì„™ì„šì„›ì„¡ì„¢ì„¥ì„¨ì„©ì„ªì„«ì„®ï¿½".split("");for(a=0;a!=t[152].length;++a)if(t[152][a].charCodeAt(0)!==65533){r[t[152][a]]=38912+a;e[38912+a]=t[152][a]}t[153]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì„²ì„³ì„´ì„µì„·ì„ºì„»ì„½ì„¾ì„¿ì…ì…‚ì…ƒì…„ì……ì…†ì…‡ì…Šì…Žì…ì…ì…‘ì…’ì…“ì…–ì…—ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì…™ì…šì…›ì…ì…žì…Ÿì… ì…¡ì…¢ì…£ì…¦ì…ªì…«ì…¬ì…­ì…®ì…¯ì…±ì…²ì…³ì…µì…¶ì…·ì…¹ì…ºì…»ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì…¼ì…½ì…¾ì…¿ì†€ì†ì†‚ì†ƒì†„ì††ì†‡ì†ˆì†‰ì†Šì†‹ì†ì†‘ì†’ì†“ì†•ì†—ì†˜ì†™ì†šì†›ì†žì† ì†¢ì†£ì†¤ì†¦ì†§ì†ªì†«ì†­ì†®ì†¯ì†±ì†²ì†³ì†´ì†µì†¶ì†·ì†¸ì†¹ì†ºì†»ì†¼ì†¾ì†¿ì‡€ì‡ì‡‚ì‡ƒì‡…ì‡†ì‡‡ì‡‰ì‡Šì‡‹ì‡ì‡Žì‡ì‡ì‡‘ì‡’ì‡“ì‡•ì‡–ì‡™ì‡šì‡›ì‡œì‡ì‡žì‡Ÿì‡¡ì‡¢ì‡£ì‡¥ì‡¦ì‡§ì‡©ì‡ªì‡«ì‡¬ì‡­ì‡®ì‡¯ì‡²ì‡´ì‡µì‡¶ì‡·ì‡¸ì‡¹ì‡ºì‡»ì‡¾ì‡¿ìˆìˆ‚ìˆƒìˆ…ìˆ†ìˆ‡ìˆˆìˆ‰ìˆŠìˆ‹ìˆŽìˆìˆ’ìˆ“ìˆ”ìˆ•ìˆ–ìˆ—ìˆšìˆ›ìˆìˆžìˆ¡ìˆ¢ìˆ£ï¿½".split("");for(a=0;a!=t[153].length;++a)if(t[153][a].charCodeAt(0)!==65533){r[t[153][a]]=39168+a;e[39168+a]=t[153][a]}t[154]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìˆ¤ìˆ¥ìˆ¦ìˆ§ìˆªìˆ¬ìˆ®ìˆ°ìˆ³ìˆµìˆ¶ìˆ·ìˆ¸ìˆ¹ìˆºìˆ»ìˆ¼ìˆ½ìˆ¾ìˆ¿ì‰€ì‰ì‰‚ì‰ƒì‰„ì‰…ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì‰†ì‰‡ì‰‰ì‰Šì‰‹ì‰Œì‰ì‰Žì‰ì‰’ì‰“ì‰•ì‰–ì‰—ì‰™ì‰šì‰›ì‰œì‰ì‰žì‰Ÿì‰¡ì‰¢ì‰£ì‰¤ì‰¦ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì‰§ì‰¨ì‰©ì‰ªì‰«ì‰®ì‰¯ì‰±ì‰²ì‰³ì‰µì‰¶ì‰·ì‰¸ì‰¹ì‰ºì‰»ì‰¾ìŠ€ìŠ‚ìŠƒìŠ„ìŠ…ìŠ†ìŠ‡ìŠŠìŠ‹ìŠŒìŠìŠŽìŠìŠ‘ìŠ’ìŠ“ìŠ”ìŠ•ìŠ–ìŠ—ìŠ™ìŠšìŠœìŠžìŠŸìŠ ìŠ¡ìŠ¢ìŠ£ìŠ¦ìŠ§ìŠ©ìŠªìŠ«ìŠ®ìŠ¯ìŠ°ìŠ±ìŠ²ìŠ³ìŠ¶ìŠ¸ìŠºìŠ»ìŠ¼ìŠ½ìŠ¾ìŠ¿ì‹€ì‹ì‹‚ì‹ƒì‹„ì‹…ì‹†ì‹‡ì‹ˆì‹‰ì‹Šì‹‹ì‹Œì‹ì‹Žì‹ì‹ì‹‘ì‹’ì‹“ì‹”ì‹•ì‹–ì‹—ì‹˜ì‹™ì‹šì‹›ì‹žì‹Ÿì‹¡ì‹¢ì‹¥ì‹¦ì‹§ì‹¨ì‹©ì‹ªì‹®ì‹°ì‹²ì‹³ì‹´ì‹µì‹·ì‹ºì‹½ì‹¾ì‹¿ìŒìŒ‚ìŒƒìŒ„ìŒ…ìŒ†ìŒ‡ìŒŠìŒ‹ìŒŽìŒï¿½".split("");for(a=0;a!=t[154].length;++a)if(t[154][a].charCodeAt(0)!==65533){r[t[154][a]]=39424+a;e[39424+a]=t[154][a]}t[155]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìŒìŒ‘ìŒ’ìŒ–ìŒ—ìŒ™ìŒšìŒ›ìŒìŒžìŒŸìŒ ìŒ¡ìŒ¢ìŒ£ìŒ¦ìŒ§ìŒªìŒ«ìŒ¬ìŒ­ìŒ®ìŒ¯ìŒ°ìŒ±ìŒ²ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìŒ³ìŒ´ìŒµìŒ¶ìŒ·ìŒ¸ìŒ¹ìŒºìŒ»ìŒ¼ìŒ½ìŒ¾ìŒ¿ì€ìì‚ìƒì„ì†ì‡ìˆì‰ìŠì‹ìŒìï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìŽììì‘ì’ì“ì”ì•ì–ì—ì˜ì™ìšì›ìœììžìŸì ì¡ì¢ì£ì¤ì¥ì¦ì§ìªì«ì­ì®ì¯ì±ì³ì´ìµì¶ì·ìºì»ì¾ì¿ìŽ€ìŽìŽ‚ìŽƒìŽ…ìŽ†ìŽ‡ìŽ‰ìŽŠìŽ‹ìŽìŽŽìŽìŽìŽ‘ìŽ’ìŽ“ìŽ”ìŽ•ìŽ–ìŽ—ìŽ˜ìŽ™ìŽšìŽ›ìŽœìŽìŽžìŽŸìŽ ìŽ¡ìŽ¢ìŽ£ìŽ¤ìŽ¥ìŽ¦ìŽ§ìŽ¨ìŽ©ìŽªìŽ«ìŽ¬ìŽ­ìŽ®ìŽ¯ìŽ°ìŽ±ìŽ²ìŽ³ìŽ´ìŽµìŽ¶ìŽ·ìŽ¸ìŽ¹ìŽºìŽ»ìŽ¼ìŽ½ìŽ¾ìŽ¿ìì‚ìƒì„ì…ì†ì‡ìˆì‰ìŠì‹ìŒììŽììì‘ì’ì“ì”ì•ì–ì—ìšï¿½".split("");for(a=0;a!=t[155].length;++a)if(t[155][a].charCodeAt(0)!==65533){r[t[155][a]]=39680+a;e[39680+a]=t[155][a]}t[156]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì›ììžì¡ì£ì¤ì¥ì¦ì§ìªì«ì¬ì®ì¯ì°ì±ì²ì³ì¶ì·ì¹ìºì»ì¼ì½ì¾ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¿ì€ìì‚ìƒì„ì…ì†ì‡ì‰ìŠì‹ìŒììŽìì‘ì’ì“ì”ì•ì–ì—ì˜ì™ìšï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì›ìœììžìŸì ì¡ì¢ì£ì¥ì¦ì§ì¨ì©ìªì«ì­ì®ì¯ì±ì²ì³ìµì¶ì·ì¸ì¹ìºì»ì¾ì¿ì‘€ì‘ì‘‚ì‘ƒì‘„ì‘…ì‘†ì‘‡ì‘‰ì‘Šì‘‹ì‘Œì‘ì‘Žì‘ì‘ì‘‘ì‘’ì‘“ì‘”ì‘•ì‘–ì‘—ì‘˜ì‘™ì‘šì‘›ì‘œì‘ì‘žì‘Ÿì‘ ì‘¡ì‘¢ì‘£ì‘¦ì‘§ì‘©ì‘ªì‘«ì‘­ì‘®ì‘¯ì‘°ì‘±ì‘²ì‘³ì‘¶ì‘·ì‘¸ì‘ºì‘»ì‘¼ì‘½ì‘¾ì‘¿ì’ì’‚ì’ƒì’„ì’…ì’†ì’‡ì’ˆì’‰ì’Šì’‹ì’Œì’ì’Žì’ì’ì’‘ì’’ì’“ì’•ì’–ì’—ì’˜ì’™ì’šì’›ì’ì’žì’Ÿì’ ì’¡ì’¢ì’£ì’¤ì’¥ì’¦ì’§ì’¨ì’©ï¿½".split("");for(a=0;a!=t[156].length;++a)if(t[156][a].charCodeAt(0)!==65533){r[t[156][a]]=39936+a;e[39936+a]=t[156][a]}t[157]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì’ªì’«ì’¬ì’­ì’®ì’¯ì’°ì’±ì’²ì’³ì’´ì’µì’¶ì’·ì’¹ì’ºì’»ì’½ì’¾ì’¿ì“€ì“ì“‚ì“ƒì“„ì“…ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì“†ì“‡ì“ˆì“‰ì“Šì“‹ì“Œì“ì“Žì“ì“ì“‘ì“’ì““ì“”ì“•ì“–ì“—ì“˜ì“™ì“šì“›ì“œì“ì“žì“Ÿï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì“ ì“¡ì“¢ì“£ì“¤ì“¥ì“¦ì“§ì“¨ì“ªì“«ì“¬ì“­ì“®ì“¯ì“²ì“³ì“µì“¶ì“·ì“¹ì“»ì“¼ì“½ì“¾ì”‚ì”ƒì”„ì”…ì”†ì”‡ì”ˆì”‰ì”Šì”‹ì”ì”Žì”ì”‘ì”’ì”“ì”•ì”–ì”—ì”˜ì”™ì”šì”›ì”ì”žì”Ÿì” ì”¡ì”¢ì”£ì”¤ì”¥ì”¦ì”§ì”ªì”«ì”­ì”®ì”¯ì”±ì”²ì”³ì”´ì”µì”¶ì”·ì”ºì”¼ì”¾ì”¿ì•€ì•ì•‚ì•ƒì•†ì•‡ì•‹ì•ì•ì•‘ì•’ì•–ì•šì•›ì•œì•Ÿì•¢ì•£ì•¥ì•¦ì•§ì•©ì•ªì•«ì•¬ì•­ì•®ì•¯ì•²ì•¶ì•·ì•¸ì•¹ì•ºì•»ì•¾ì•¿ì–ì–‚ì–ƒì–…ì–†ì–ˆì–‰ì–Šì–‹ì–Žì–ì–’ì–“ì–”ï¿½".split("");for(a=0;a!=t[157].length;++a)if(t[157][a].charCodeAt(0)!==65533){r[t[157][a]]=40192+a;e[40192+a]=t[157][a]}t[158]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì––ì–™ì–šì–›ì–ì–žì–Ÿì–¡ì–¢ì–£ì–¤ì–¥ì–¦ì–§ì–¨ì–ªì–«ì–¬ì–­ì–®ì–¯ì–°ì–±ì–²ì–³ì–¶ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì–·ì–ºì–¿ì—€ì—ì—‚ì—ƒì—‹ì—ì—ì—’ì—“ì—•ì—–ì——ì—™ì—šì—›ì—œì—ì—žì—Ÿì—¢ì—¤ì—¦ì—§ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì—¨ì—©ì—ªì—«ì—¯ì—±ì—²ì—³ì—µì—¸ì—¹ì—ºì—»ì˜‚ì˜ƒì˜„ì˜‰ì˜Šì˜‹ì˜ì˜Žì˜ì˜‘ì˜’ì˜“ì˜”ì˜•ì˜–ì˜—ì˜šì˜ì˜žì˜Ÿì˜ ì˜¡ì˜¢ì˜£ì˜¦ì˜§ì˜©ì˜ªì˜«ì˜¯ì˜±ì˜²ì˜¶ì˜¸ì˜ºì˜¼ì˜½ì˜¾ì˜¿ì™‚ì™ƒì™…ì™†ì™‡ì™‰ì™Šì™‹ì™Œì™ì™Žì™ì™’ì™–ì™—ì™˜ì™™ì™šì™›ì™žì™Ÿì™¡ì™¢ì™£ì™¤ì™¥ì™¦ì™§ì™¨ì™©ì™ªì™«ì™­ì™®ì™°ì™²ì™³ì™´ì™µì™¶ì™·ì™ºì™»ì™½ì™¾ì™¿ìšìš‚ìšƒìš„ìš…ìš†ìš‡ìšŠìšŒìšŽìšìšìš‘ìš’ìš“ìš–ìš—ìš™ìššìš›ìšìšžìšŸìš ìš¡ìš¢ìš£ìš¦ï¿½".split("");for(a=0;a!=t[158].length;++a)if(t[158][a].charCodeAt(0)!==65533){r[t[158][a]]=40448+a;e[40448+a]=t[158][a]}t[159]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìš¨ìšªìš«ìš¬ìš­ìš®ìš¯ìš²ìš³ìšµìš¶ìš·ìš»ìš¼ìš½ìš¾ìš¿ì›‚ì›„ì›†ì›‡ì›ˆì›‰ì›Šì›‹ì›Žï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì›ì›‘ì›’ì›“ì›•ì›–ì›—ì›˜ì›™ì›šì››ì›žì›Ÿì›¢ì›£ì›¤ì›¥ì›¦ì›§ì›ªì›«ì›­ì›®ì›¯ì›±ì›²ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì›³ì›´ì›µì›¶ì›·ì›ºì›»ì›¼ì›¾ì›¿ìœ€ìœìœ‚ìœƒìœ†ìœ‡ìœ‰ìœŠìœ‹ìœìœŽìœìœìœ‘ìœ’ìœ“ìœ–ìœ˜ìœšìœ›ìœœìœìœžìœŸìœ¢ìœ£ìœ¥ìœ¦ìœ§ìœ©ìœªìœ«ìœ¬ìœ­ìœ®ìœ¯ìœ²ìœ´ìœ¶ìœ¸ìœ¹ìœºìœ»ìœ¾ìœ¿ìì‚ìƒì…ì†ì‡ìˆì‰ì‹ìŽìì™ìšì›ììžìŸì¡ì¢ì£ì¤ì¥ì¦ì§ì©ìªì¬ì­ì®ì¯ì°ì±ì²ì³ì¶ì·ì¹ìºì»ì¿ìž€ìžìž‚ìž†ìž‹ìžŒìžìžìž’ìž“ìž•ìž™ìž›ìžœìžìžžìžŸìž¢ìž§ìž¨ìž©ìžªìž«ìž®ìž¯ìž±ìž²ìž³ìžµìž¶ìž·ï¿½".split("");for(a=0;a!=t[159].length;++a)if(t[159][a].charCodeAt(0)!==65533){r[t[159][a]]=40704+a;e[40704+a]=t[159][a]}t[160]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìž¸ìž¹ìžºìž»ìž¾ìŸ‚ìŸƒìŸ„ìŸ…ìŸ†ìŸ‡ìŸŠìŸ‹ìŸìŸìŸ‘ìŸ’ìŸ“ìŸ”ìŸ•ìŸ–ìŸ—ìŸ™ìŸšìŸ›ìŸœï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìŸžìŸŸìŸ ìŸ¡ìŸ¢ìŸ£ìŸ¥ìŸ¦ìŸ§ìŸ©ìŸªìŸ«ìŸ­ìŸ®ìŸ¯ìŸ°ìŸ±ìŸ²ìŸ³ìŸ´ìŸµìŸ¶ìŸ·ìŸ¸ìŸ¹ìŸºï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìŸ»ìŸ¼ìŸ½ìŸ¾ìŸ¿ì ‚ì ƒì …ì †ì ‡ì ‰ì ‹ì Œì ì Žì ì ’ì ”ì —ì ˜ì ™ì šì ›ì žì Ÿì ¡ì ¢ì £ì ¥ì ¦ì §ì ¨ì ©ì ªì «ì ®ì °ì ²ì ³ì ´ì µì ¶ì ·ì ¹ì ºì »ì ½ì ¾ì ¿ì¡ì¡‚ì¡ƒì¡„ì¡…ì¡†ì¡‡ì¡Šì¡‹ì¡Žì¡ì¡ì¡‘ì¡’ì¡“ì¡•ì¡–ì¡—ì¡˜ì¡™ì¡šì¡›ì¡œì¡ì¡žì¡Ÿì¡ ì¡¡ì¡¢ì¡£ì¡¤ì¡¥ì¡¦ì¡§ì¡¨ì¡©ì¡ªì¡«ì¡¬ì¡­ì¡®ì¡¯ì¡²ì¡³ì¡µì¡¶ì¡·ì¡¹ì¡»ì¡¼ì¡½ì¡¾ì¡¿ì¢‚ì¢„ì¢ˆì¢‰ì¢Šì¢Žì¢ì¢ì¢‘ì¢’ì¢“ì¢•ì¢–ì¢—ì¢˜ì¢™ì¢šì¢›ì¢œì¢žì¢ ì¢¢ì¢£ì¢¤ï¿½".split("");for(a=0;a!=t[160].length;++a)if(t[160][a].charCodeAt(0)!==65533){r[t[160][a]]=40960+a;e[40960+a]=t[160][a]}t[161]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¢¥ì¢¦ì¢§ì¢©ì¢ªì¢«ì¢¬ì¢­ì¢®ì¢¯ì¢°ì¢±ì¢²ì¢³ì¢´ì¢µì¢¶ì¢·ì¢¸ì¢¹ì¢ºì¢»ì¢¾ì¢¿ì£€ì£ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì£‚ì£ƒì£…ì£†ì£‡ì£‰ì£Šì£‹ì£ì£Žì£ì£ì£‘ì£’ì£“ì£–ì£˜ì£šì£›ì£œì£ì£žì£Ÿì£¢ì££ì£¥ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì£¦ì£§ì£¨ì£©ì£ªì£«ì£¬ì£­ì£®ì£¯ì£°ì£±ì£²ì£³ì£´ì£¶ì£·ì£¸ì£¹ì£ºì£»ì£¾ì£¿ì¤ì¤‚ì¤ƒì¤‡ì¤ˆì¤‰ì¤Šì¤‹ì¤Žã€€ã€ã€‚Â·â€¥â€¦Â¨ã€ƒÂ­â€•âˆ¥ï¼¼âˆ¼â€˜â€™â€œâ€ã€”ã€•ã€ˆã€‰ã€Šã€‹ã€Œã€ã€Žã€ã€ã€‘Â±Ã—Ã·â‰ â‰¤â‰¥âˆžâˆ´Â°â€²â€³â„ƒâ„«ï¿ ï¿¡ï¿¥â™‚â™€âˆ âŠ¥âŒ’âˆ‚âˆ‡â‰¡â‰’Â§â€»â˜†â˜…â—‹â—â—Žâ—‡â—†â–¡â– â–³â–²â–½â–¼â†’â†â†‘â†“â†”ã€“â‰ªâ‰«âˆšâˆ½âˆâˆµâˆ«âˆ¬âˆˆâˆ‹âŠ†âŠ‡âŠ‚âŠƒâˆªâˆ©âˆ§âˆ¨ï¿¢ï¿½".split("");for(a=0;a!=t[161].length;++a)if(t[161][a].charCodeAt(0)!==65533){r[t[161][a]]=41216+a;e[41216+a]=t[161][a]}t[162]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¤ì¤’ì¤“ì¤”ì¤•ì¤–ì¤—ì¤™ì¤šì¤›ì¤œì¤ì¤žì¤Ÿì¤ ì¤¡ì¤¢ì¤£ì¤¤ì¤¥ì¤¦ì¤§ì¤¨ì¤©ì¤ªì¤«ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¤­ì¤®ì¤¯ì¤°ì¤±ì¤²ì¤³ì¤µì¤¶ì¤·ì¤¸ì¤¹ì¤ºì¤»ì¤¼ì¤½ì¤¾ì¤¿ì¥€ì¥ì¥‚ì¥ƒì¥„ì¥…ì¥†ì¥‡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¥ˆì¥‰ì¥Šì¥‹ì¥Œì¥ì¥Žì¥ì¥’ì¥“ì¥•ì¥–ì¥—ì¥™ì¥šì¥›ì¥œì¥ì¥žì¥Ÿì¥¢ì¥¤ì¥¥ì¥¦ì¥§ì¥¨ì¥©ì¥ªì¥«ì¥­ì¥®ì¥¯â‡’â‡”âˆ€âˆƒÂ´ï½žË‡Ë˜ËËšË™Â¸Ë›Â¡Â¿Ëâˆ®âˆ‘âˆÂ¤â„‰â€°â—â—€â–·â–¶â™¤â™ â™¡â™¥â™§â™£âŠ™â—ˆâ–£â—â—‘â–’â–¤â–¥â–¨â–§â–¦â–©â™¨â˜â˜Žâ˜œâ˜žÂ¶â€ â€¡â†•â†—â†™â†–â†˜â™­â™©â™ªâ™¬ã‰¿ãˆœâ„–ã‡â„¢ã‚ã˜â„¡â‚¬Â®ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[162].length;++a)if(t[162][a].charCodeAt(0)!==65533){r[t[162][a]]=41472+a;e[41472+a]=t[162][a]}t[163]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¥±ì¥²ì¥³ì¥µì¥¶ì¥·ì¥¸ì¥¹ì¥ºì¥»ì¥½ì¥¾ì¥¿ì¦€ì¦ì¦‚ì¦ƒì¦„ì¦…ì¦†ì¦‡ì¦Šì¦‹ì¦ì¦Žì¦ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¦‘ì¦’ì¦“ì¦”ì¦•ì¦–ì¦—ì¦šì¦œì¦žì¦Ÿì¦ ì¦¡ì¦¢ì¦£ì¦¤ì¦¥ì¦¦ì¦§ì¦¨ì¦©ì¦ªì¦«ì¦¬ì¦­ì¦®ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¦¯ì¦°ì¦±ì¦²ì¦³ì¦´ì¦µì¦¶ì¦·ì¦¸ì¦¹ì¦ºì¦»ì¦¼ì¦½ì¦¾ì¦¿ì§‚ì§ƒì§…ì§†ì§‰ì§‹ì§Œì§ì§Žì§ì§’ì§”ì§—ì§˜ì§›ï¼ï¼‚ï¼ƒï¼„ï¼…ï¼†ï¼‡ï¼ˆï¼‰ï¼Šï¼‹ï¼Œï¼ï¼Žï¼ï¼ï¼‘ï¼’ï¼“ï¼”ï¼•ï¼–ï¼—ï¼˜ï¼™ï¼šï¼›ï¼œï¼ï¼žï¼Ÿï¼ ï¼¡ï¼¢ï¼£ï¼¤ï¼¥ï¼¦ï¼§ï¼¨ï¼©ï¼ªï¼«ï¼¬ï¼­ï¼®ï¼¯ï¼°ï¼±ï¼²ï¼³ï¼´ï¼µï¼¶ï¼·ï¼¸ï¼¹ï¼ºï¼»ï¿¦ï¼½ï¼¾ï¼¿ï½€ï½ï½‚ï½ƒï½„ï½…ï½†ï½‡ï½ˆï½‰ï½Šï½‹ï½Œï½ï½Žï½ï½ï½‘ï½’ï½“ï½”ï½•ï½–ï½—ï½˜ï½™ï½šï½›ï½œï½ï¿£ï¿½".split("");for(a=0;a!=t[163].length;++a)if(t[163][a].charCodeAt(0)!==65533){r[t[163][a]]=41728+a;e[41728+a]=t[163][a]}t[164]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì§žì§Ÿì§¡ì§£ì§¥ì§¦ì§¨ì§©ì§ªì§«ì§®ì§²ì§³ì§´ì§µì§¶ì§·ì§ºì§»ì§½ì§¾ì§¿ì¨ì¨‚ì¨ƒì¨„ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¨…ì¨†ì¨‡ì¨Šì¨Žì¨ì¨ì¨‘ì¨’ì¨“ì¨•ì¨–ì¨—ì¨™ì¨šì¨›ì¨œì¨ì¨žì¨Ÿì¨ ì¨¡ì¨¢ì¨£ì¨¤ì¨¥ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¨¦ì¨§ì¨¨ì¨ªì¨«ì¨¬ì¨­ì¨®ì¨¯ì¨°ì¨±ì¨²ì¨³ì¨´ì¨µì¨¶ì¨·ì¨¸ì¨¹ì¨ºì¨»ì¨¼ì¨½ì¨¾ì¨¿ì©€ì©ì©‚ì©ƒì©„ì©…ì©†ã„±ã„²ã„³ã„´ã„µã„¶ã„·ã„¸ã„¹ã„ºã„»ã„¼ã„½ã„¾ã„¿ã…€ã…ã…‚ã…ƒã…„ã……ã…†ã…‡ã…ˆã…‰ã…Šã…‹ã…Œã…ã…Žã…ã…ã…‘ã…’ã…“ã…”ã…•ã…–ã…—ã…˜ã…™ã…šã…›ã…œã…ã…žã…Ÿã… ã…¡ã…¢ã…£ã…¤ã…¥ã…¦ã…§ã…¨ã…©ã…ªã…«ã…¬ã…­ã…®ã…¯ã…°ã…±ã…²ã…³ã…´ã…µã…¶ã…·ã…¸ã…¹ã…ºã…»ã…¼ã…½ã…¾ã…¿ã†€ã†ã†‚ã†ƒã†„ã†…ã††ã†‡ã†ˆã†‰ã†Šã†‹ã†Œã†ã†Žï¿½".split("");for(a=0;a!=t[164].length;++a)if(t[164][a].charCodeAt(0)!==65533){r[t[164][a]]=41984+a;e[41984+a]=t[164][a]}t[165]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì©‡ì©ˆì©‰ì©Šì©‹ì©Žì©ì©‘ì©’ì©“ì©•ì©–ì©—ì©˜ì©™ì©šì©›ì©žì©¢ì©£ì©¤ì©¥ì©¦ì©§ì©©ì©ªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì©«ì©¬ì©­ì©®ì©¯ì©°ì©±ì©²ì©³ì©´ì©µì©¶ì©·ì©¸ì©¹ì©ºì©»ì©¼ì©¾ì©¿ìª€ìªìª‚ìªƒìª…ìª†ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìª‡ìªˆìª‰ìªŠìª‹ìªŒìªìªŽìªìªìª‘ìª’ìª“ìª”ìª•ìª–ìª—ìª™ìªšìª›ìªœìªìªžìªŸìª ìª¡ìª¢ìª£ìª¤ìª¥ìª¦ìª§â…°â…±â…²â…³â…´â…µâ…¶â…·â…¸â…¹ï¿½ï¿½ï¿½ï¿½ï¿½â… â…¡â…¢â…£â…¤â…¥â…¦â…§â…¨â…©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Î‘Î’Î“Î”Î•Î–Î—Î˜Î™ÎšÎ›ÎœÎÎžÎŸÎ Î¡Î£Î¤Î¥Î¦Î§Î¨Î©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Î±Î²Î³Î´ÎµÎ¶Î·Î¸Î¹ÎºÎ»Î¼Î½Î¾Î¿Ï€ÏÏƒÏ„Ï…Ï†Ï‡ÏˆÏ‰ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[165].length;++a)if(t[165][a].charCodeAt(0)!==65533){r[t[165][a]]=42240+a;e[42240+a]=t[165][a]}t[166]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìª¨ìª©ìªªìª«ìª¬ìª­ìª®ìª¯ìª°ìª±ìª²ìª³ìª´ìªµìª¶ìª·ìª¸ìª¹ìªºìª»ìª¾ìª¿ì«ì«‚ì«ƒì«…ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì«†ì«‡ì«ˆì«‰ì«Šì«‹ì«Žì«ì«’ì«”ì«•ì«–ì«—ì«šì«›ì«œì«ì«žì«Ÿì«¡ì«¢ì«£ì«¤ì«¥ì«¦ì«§ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì«¨ì«©ì«ªì««ì«­ì«®ì«¯ì«°ì«±ì«²ì«³ì«µì«¶ì«·ì«¸ì«¹ì«ºì«»ì«¼ì«½ì«¾ì«¿ì¬€ì¬ì¬‚ì¬ƒì¬„ì¬…ì¬†ì¬‡ì¬‰ì¬Šâ”€â”‚â”Œâ”â”˜â””â”œâ”¬â”¤â”´â”¼â”â”ƒâ”â”“â”›â”—â”£â”³â”«â”»â•‹â” â”¯â”¨â”·â”¿â”â”°â”¥â”¸â•‚â”’â”‘â”šâ”™â”–â”•â”Žâ”â”žâ”Ÿâ”¡â”¢â”¦â”§â”©â”ªâ”­â”®â”±â”²â”µâ”¶â”¹â”ºâ”½â”¾â•€â•â•ƒâ•„â•…â•†â•‡â•ˆâ•‰â•Šï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[166].length;++a)if(t[166][a].charCodeAt(0)!==65533){r[t[166][a]]=42496+a;e[42496+a]=t[166][a]}t[167]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¬‹ì¬Œì¬ì¬Žì¬ì¬‘ì¬’ì¬“ì¬•ì¬–ì¬—ì¬™ì¬šì¬›ì¬œì¬ì¬žì¬Ÿì¬¢ì¬£ì¬¤ì¬¥ì¬¦ì¬§ì¬¨ì¬©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¬ªì¬«ì¬¬ì¬­ì¬®ì¬¯ì¬°ì¬±ì¬²ì¬³ì¬´ì¬µì¬¶ì¬·ì¬¸ì¬¹ì¬ºì¬»ì¬¼ì¬½ì¬¾ì¬¿ì­€ì­‚ì­ƒì­„ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì­…ì­†ì­‡ì­Šì­‹ì­ì­Žì­ì­‘ì­’ì­“ì­”ì­•ì­–ì­—ì­šì­›ì­œì­žì­Ÿì­ ì­¡ì­¢ì­£ì­¥ì­¦ì­§ì­¨ì­©ì­ªì­«ì­¬ãŽ•ãŽ–ãŽ—â„“ãŽ˜ã„ãŽ£ãŽ¤ãŽ¥ãŽ¦ãŽ™ãŽšãŽ›ãŽœãŽãŽžãŽŸãŽ ãŽ¡ãŽ¢ãŠãŽãŽŽãŽããŽˆãŽ‰ãˆãŽ§ãŽ¨ãŽ°ãŽ±ãŽ²ãŽ³ãŽ´ãŽµãŽ¶ãŽ·ãŽ¸ãŽ¹ãŽ€ãŽãŽ‚ãŽƒãŽ„ãŽºãŽ»ãŽ¼ãŽ½ãŽ¾ãŽ¿ãŽãŽ‘ãŽ’ãŽ“ãŽ”â„¦ã€ããŽŠãŽ‹ãŽŒã–ã…ãŽ­ãŽ®ãŽ¯ã›ãŽ©ãŽªãŽ«ãŽ¬ããã“ãƒã‰ãœã†ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[167].length;++a)if(t[167][a].charCodeAt(0)!==65533){r[t[167][a]]=42752+a;e[42752+a]=t[167][a]}t[168]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì­­ì­®ì­¯ì­°ì­±ì­²ì­³ì­´ì­µì­¶ì­·ì­ºì­»ì­¼ì­½ì­¾ì­¿ì®€ì®ì®‚ì®ƒì®„ì®…ì®†ì®‡ì®ˆï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì®‰ì®Šì®‹ì®Œì®ì®Žì®ì®ì®‘ì®’ì®“ì®”ì®•ì®–ì®—ì®˜ì®™ì®šì®›ì®ì®žì®Ÿì® ì®¡ì®¢ì®£ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì®¤ì®¥ì®¦ì®§ì®¨ì®©ì®ªì®«ì®¬ì®­ì®®ì®¯ì®°ì®±ì®²ì®³ì®´ì®µì®¶ì®·ì®¹ì®ºì®»ì®¼ì®½ì®¾ì®¿ì¯€ì¯ì¯‚ì¯ƒì¯„Ã†ÃÂªÄ¦ï¿½Ä²ï¿½Ä¿ÅÃ˜Å’ÂºÃžÅ¦ÅŠï¿½ã‰ ã‰¡ã‰¢ã‰£ã‰¤ã‰¥ã‰¦ã‰§ã‰¨ã‰©ã‰ªã‰«ã‰¬ã‰­ã‰®ã‰¯ã‰°ã‰±ã‰²ã‰³ã‰´ã‰µã‰¶ã‰·ã‰¸ã‰¹ã‰ºã‰»â“â“‘â“’â““â“”â“•â“–â“—â“˜â“™â“šâ“›â“œâ“â“žâ“Ÿâ“ â“¡â“¢â“£â“¤â“¥â“¦â“§â“¨â“©â‘ â‘¡â‘¢â‘£â‘¤â‘¥â‘¦â‘§â‘¨â‘©â‘ªâ‘«â‘¬â‘­â‘®Â½â…“â…”Â¼Â¾â…›â…œâ…â…žï¿½".split("");for(a=0;a!=t[168].length;++a)if(t[168][a].charCodeAt(0)!==65533){r[t[168][a]]=43008+a;e[43008+a]=t[168][a]}t[169]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¯…ì¯†ì¯‡ì¯ˆì¯‰ì¯Šì¯‹ì¯Œì¯ì¯Žì¯ì¯ì¯‘ì¯’ì¯“ì¯•ì¯–ì¯—ì¯˜ì¯™ì¯šì¯›ì¯œì¯ì¯žì¯Ÿï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¯ ì¯¡ì¯¢ì¯£ì¯¥ì¯¦ì¯¨ì¯ªì¯«ì¯¬ì¯­ì¯®ì¯¯ì¯°ì¯±ì¯²ì¯³ì¯´ì¯µì¯¶ì¯·ì¯¸ì¯¹ì¯ºì¯»ì¯¼ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¯½ì¯¾ì¯¿ì°€ì°ì°‚ì°ƒì°„ì°…ì°†ì°‡ì°ˆì°‰ì°Šì°‹ì°Žì°ì°‘ì°’ì°“ì°•ì°–ì°—ì°˜ì°™ì°šì°›ì°žì°Ÿì° ì°£ì°¤Ã¦Ä‘Ã°Ä§Ä±Ä³Ä¸Å€Å‚Ã¸Å“ÃŸÃ¾Å§Å‹Å‰ãˆ€ãˆãˆ‚ãˆƒãˆ„ãˆ…ãˆ†ãˆ‡ãˆˆãˆ‰ãˆŠãˆ‹ãˆŒãˆãˆŽãˆãˆãˆ‘ãˆ’ãˆ“ãˆ”ãˆ•ãˆ–ãˆ—ãˆ˜ãˆ™ãˆšãˆ›â’œâ’â’žâ’Ÿâ’ â’¡â’¢â’£â’¤â’¥â’¦â’§â’¨â’©â’ªâ’«â’¬â’­â’®â’¯â’°â’±â’²â’³â’´â’µâ‘´â‘µâ‘¶â‘·â‘¸â‘¹â‘ºâ‘»â‘¼â‘½â‘¾â‘¿â’€â’â’‚Â¹Â²Â³â´â¿â‚â‚‚â‚ƒâ‚„ï¿½".split("");for(a=0;a!=t[169].length;++a)if(t[169][a].charCodeAt(0)!==65533){r[t[169][a]]=43264+a;e[43264+a]=t[169][a]}t[170]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì°¥ì°¦ì°ªì°«ì°­ì°¯ì°±ì°²ì°³ì°´ì°µì°¶ì°·ì°ºì°¿ì±€ì±ì±‚ì±ƒì±†ì±‡ì±‰ì±Šì±‹ì±ì±Žï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì±ì±ì±‘ì±’ì±“ì±–ì±šì±›ì±œì±ì±žì±Ÿì±¡ì±¢ì±£ì±¥ì±§ì±©ì±ªì±«ì±¬ì±­ì±®ì±¯ì±±ì±²ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì±³ì±´ì±¶ì±·ì±¸ì±¹ì±ºì±»ì±¼ì±½ì±¾ì±¿ì²€ì²ì²‚ì²ƒì²„ì²…ì²†ì²‡ì²ˆì²‰ì²Šì²‹ì²Œì²ì²Žì²ì²ì²‘ì²’ì²“ãã‚ãƒã„ã…ã†ã‡ãˆã‰ãŠã‹ãŒããŽããã‘ã’ã“ã”ã•ã–ã—ã˜ã™ãšã›ãœããžãŸã ã¡ã¢ã£ã¤ã¥ã¦ã§ã¨ã©ãªã«ã¬ã­ã®ã¯ã°ã±ã²ã³ã´ãµã¶ã·ã¸ã¹ãºã»ã¼ã½ã¾ã¿ã‚€ã‚ã‚‚ã‚ƒã‚„ã‚…ã‚†ã‚‡ã‚ˆã‚‰ã‚Šã‚‹ã‚Œã‚ã‚Žã‚ã‚ã‚‘ã‚’ã‚“ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[170].length;++a)if(t[170][a].charCodeAt(0)!==65533){r[t[170][a]]=43520+a;e[43520+a]=t[170][a]}t[171]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì²”ì²•ì²–ì²—ì²šì²›ì²ì²žì²Ÿì²¡ì²¢ì²£ì²¤ì²¥ì²¦ì²§ì²ªì²®ì²¯ì²°ì²±ì²²ì²³ì²¶ì²·ì²¹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì²ºì²»ì²½ì²¾ì²¿ì³€ì³ì³‚ì³ƒì³†ì³ˆì³Šì³‹ì³Œì³ì³Žì³ì³‘ì³’ì³“ì³•ì³–ì³—ì³˜ì³™ì³šï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì³›ì³œì³ì³žì³Ÿì³ ì³¡ì³¢ì³£ì³¥ì³¦ì³§ì³¨ì³©ì³ªì³«ì³­ì³®ì³¯ì³±ì³²ì³³ì³´ì³µì³¶ì³·ì³¸ì³¹ì³ºì³»ì³¼ì³½ã‚¡ã‚¢ã‚£ã‚¤ã‚¥ã‚¦ã‚§ã‚¨ã‚©ã‚ªã‚«ã‚¬ã‚­ã‚®ã‚¯ã‚°ã‚±ã‚²ã‚³ã‚´ã‚µã‚¶ã‚·ã‚¸ã‚¹ã‚ºã‚»ã‚¼ã‚½ã‚¾ã‚¿ãƒ€ãƒãƒ‚ãƒƒãƒ„ãƒ…ãƒ†ãƒ‡ãƒˆãƒ‰ãƒŠãƒ‹ãƒŒãƒãƒŽãƒãƒãƒ‘ãƒ’ãƒ“ãƒ”ãƒ•ãƒ–ãƒ—ãƒ˜ãƒ™ãƒšãƒ›ãƒœãƒãƒžãƒŸãƒ ãƒ¡ãƒ¢ãƒ£ãƒ¤ãƒ¥ãƒ¦ãƒ§ãƒ¨ãƒ©ãƒªãƒ«ãƒ¬ãƒ­ãƒ®ãƒ¯ãƒ°ãƒ±ãƒ²ãƒ³ãƒ´ãƒµãƒ¶ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[171].length;++a)if(t[171][a].charCodeAt(0)!==65533){r[t[171][a]]=43776+a;e[43776+a]=t[171][a]}t[172]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì³¾ì³¿ì´€ì´‚ì´ƒì´„ì´…ì´†ì´‡ì´Šì´‹ì´ì´Žì´ì´‘ì´’ì´“ì´”ì´•ì´–ì´—ì´šì´œì´žì´Ÿì´ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì´¡ì´¢ì´£ì´¥ì´¦ì´§ì´©ì´ªì´«ì´­ì´®ì´¯ì´°ì´±ì´²ì´³ì´´ì´µì´¶ì´·ì´¸ì´ºì´»ì´¼ì´½ì´¾ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì´¿ìµ€ìµìµ‚ìµƒìµ„ìµ…ìµ†ìµ‡ìµˆìµ‰ìµŠìµ‹ìµŒìµìµŽìµìµìµ‘ìµ’ìµ“ìµ”ìµ•ìµ–ìµ—ìµ˜ìµ™ìµšìµ›ìµìµžìµŸÐÐ‘Ð’Ð“Ð”Ð•ÐÐ–Ð—Ð˜Ð™ÐšÐ›ÐœÐÐžÐŸÐ Ð¡Ð¢Ð£Ð¤Ð¥Ð¦Ð§Ð¨Ð©ÐªÐ«Ð¬Ð­Ð®Ð¯ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ð°Ð±Ð²Ð³Ð´ÐµÑ‘Ð¶Ð·Ð¸Ð¹ÐºÐ»Ð¼Ð½Ð¾Ð¿Ñ€ÑÑ‚ÑƒÑ„Ñ…Ñ†Ñ‡ÑˆÑ‰ÑŠÑ‹ÑŒÑÑŽÑï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[172].length;++a)if(t[172][a].charCodeAt(0)!==65533){r[t[172][a]]=44032+a;e[44032+a]=t[172][a]}t[173]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìµ¡ìµ¢ìµ£ìµ¥ìµ¦ìµ§ìµ¨ìµ©ìµªìµ«ìµ®ìµ°ìµ²ìµ³ìµ´ìµµìµ¶ìµ·ìµ¹ìµºìµ»ìµ¼ìµ½ìµ¾ìµ¿ì¶€ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¶ì¶‚ì¶ƒì¶„ì¶…ì¶†ì¶‡ì¶‰ì¶Šì¶‹ì¶Œì¶ì¶Žì¶ì¶ì¶‘ì¶’ì¶“ì¶–ì¶—ì¶™ì¶šì¶›ì¶ì¶žì¶Ÿï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¶ ì¶¡ì¶¢ì¶£ì¶¦ì¶¨ì¶ªì¶«ì¶¬ì¶­ì¶®ì¶¯ì¶±ì¶²ì¶³ì¶´ì¶µì¶¶ì¶·ì¶¸ì¶¹ì¶ºì¶»ì¶¼ì¶½ì¶¾ì¶¿ì·€ì·ì·‚ì·ƒì·…ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[173].length;++a)if(t[173][a].charCodeAt(0)!==65533){r[t[173][a]]=44288+a;e[44288+a]=t[173][a]}t[174]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì·†ì·‡ì·ˆì·‰ì·Šì·‹ì·ì·Žì·ì·‘ì·’ì·“ì·”ì·•ì·–ì·—ì·˜ì·™ì·šì·›ì·œì·ì·žì·Ÿì· ì·¡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì·¢ì·£ì·¤ì·¥ì·¦ì·§ì·©ì·ªì·«ì·­ì·®ì·¯ì·±ì·²ì·³ì·´ì·µì·¶ì··ì·ºì·¼ì·¾ì·¿ì¸€ì¸ì¸‚ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¸ƒì¸…ì¸†ì¸‡ì¸‰ì¸Šì¸‹ì¸ì¸Žì¸ì¸ì¸‘ì¸’ì¸“ì¸•ì¸–ì¸—ì¸˜ì¸šì¸›ì¸œì¸ì¸žì¸Ÿì¸¢ì¸£ì¸¥ì¸¦ì¸§ì¸©ì¸ªì¸«ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[174].length;++a)if(t[174][a].charCodeAt(0)!==65533){r[t[174][a]]=44544+a;e[44544+a]=t[174][a]}t[175]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¸¬ì¸­ì¸®ì¸¯ì¸²ì¸´ì¸¶ì¸·ì¸¸ì¸¹ì¸ºì¸»ì¸¼ì¸½ì¸¾ì¸¿ì¹€ì¹ì¹‚ì¹ƒì¹„ì¹…ì¹†ì¹‡ì¹ˆì¹‰ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¹Šì¹‹ì¹Œì¹ì¹Žì¹ì¹ì¹‘ì¹’ì¹“ì¹”ì¹•ì¹–ì¹—ì¹šì¹›ì¹ì¹žì¹¢ì¹£ì¹¤ì¹¥ì¹¦ì¹§ì¹ªì¹¬ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¹®ì¹¯ì¹°ì¹±ì¹²ì¹³ì¹¶ì¹·ì¹¹ì¹ºì¹»ì¹½ì¹¾ì¹¿ìº€ìºìº‚ìºƒìº†ìºˆìºŠìº‹ìºŒìºìºŽìºìº’ìº“ìº•ìº–ìº—ìº™ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[175].length;++a)if(t[175][a].charCodeAt(0)!==65533){r[t[175][a]]=44800+a;e[44800+a]=t[175][a]}t[176]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìºšìº›ìºœìºìºžìºŸìº¢ìº¦ìº§ìº¨ìº©ìºªìº«ìº®ìº¯ìº°ìº±ìº²ìº³ìº´ìºµìº¶ìº·ìº¸ìº¹ìººï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ìº»ìº¼ìº½ìº¾ìº¿ì»€ì»‚ì»ƒì»„ì»…ì»†ì»‡ì»ˆì»‰ì»Šì»‹ì»Œì»ì»Žì»ì»ì»‘ì»’ì»“ì»”ì»•ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì»–ì»—ì»˜ì»™ì»šì»›ì»œì»ì»žì»Ÿì» ì»¡ì»¢ì»£ì»¦ì»§ì»©ì»ªì»­ì»®ì»¯ì»°ì»±ì»²ì»³ì»¶ì»ºì»»ì»¼ì»½ì»¾ì»¿ê°€ê°ê°„ê°‡ê°ˆê°‰ê°Šê°ê°‘ê°’ê°“ê°”ê°•ê°–ê°—ê°™ê°šê°›ê°œê°ê° ê°¤ê°¬ê°­ê°¯ê°°ê°±ê°¸ê°¹ê°¼ê±€ê±‹ê±ê±”ê±˜ê±œê±°ê±±ê±´ê±·ê±¸ê±ºê²€ê²ê²ƒê²„ê²…ê²†ê²‰ê²Šê²‹ê²Œê²ê²”ê²œê²ê²Ÿê² ê²¡ê²¨ê²©ê²ªê²¬ê²¯ê²°ê²¸ê²¹ê²»ê²¼ê²½ê³ê³„ê³ˆê³Œê³•ê³—ê³ ê³¡ê³¤ê³§ê³¨ê³ªê³¬ê³¯ê³°ê³±ê³³ê³µê³¶ê³¼ê³½ê´€ê´„ê´†ï¿½".split("");for(a=0;a!=t[176].length;++a)if(t[176][a].charCodeAt(0)!==65533){r[t[176][a]]=45056+a;e[45056+a]=t[176][a]}t[177]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¼‚ì¼ƒì¼…ì¼†ì¼‡ì¼‰ì¼Šì¼‹ì¼Œì¼ì¼Žì¼ì¼’ì¼”ì¼–ì¼—ì¼˜ì¼™ì¼šì¼›ì¼ì¼žì¼Ÿì¼¡ì¼¢ì¼£ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¼¥ì¼¦ì¼§ì¼¨ì¼©ì¼ªì¼«ì¼®ì¼²ì¼³ì¼´ì¼µì¼¶ì¼·ì¼¹ì¼ºì¼»ì¼¼ì¼½ì¼¾ì¼¿ì½€ì½ì½‚ì½ƒì½„ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì½…ì½†ì½‡ì½ˆì½‰ì½Šì½‹ì½Œì½ì½Žì½ì½ì½‘ì½’ì½“ì½–ì½—ì½™ì½šì½›ì½ì½žì½Ÿì½ ì½¡ì½¢ì½£ì½¦ì½¨ì½ªì½«ì½¬ê´Œê´ê´ê´‘ê´˜ê´œê´ ê´©ê´¬ê´­ê´´ê´µê´¸ê´¼êµ„êµ…êµ‡êµ‰êµêµ”êµ˜êµ¡êµ£êµ¬êµ­êµ°êµ³êµ´êµµêµ¶êµ»êµ¼êµ½êµ¿ê¶ê¶‚ê¶ˆê¶‰ê¶Œê¶ê¶œê¶ê¶¤ê¶·ê·€ê·ê·„ê·ˆê·ê·‘ê·“ê·œê· ê·¤ê·¸ê·¹ê·¼ê·¿ê¸€ê¸ê¸ˆê¸‰ê¸‹ê¸ê¸”ê¸°ê¸±ê¸´ê¸·ê¸¸ê¸ºê¹€ê¹ê¹ƒê¹…ê¹†ê¹Šê¹Œê¹ê¹Žê¹ê¹”ê¹–ê¹œê¹ê¹Ÿê¹ ê¹¡ê¹¥ê¹¨ê¹©ê¹¬ê¹°ê¹¸ï¿½".split("");for(a=0;a!=t[177].length;++a)if(t[177][a].charCodeAt(0)!==65533){r[t[177][a]]=45312+a;e[45312+a]=t[177][a]}t[178]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì½­ì½®ì½¯ì½²ì½³ì½µì½¶ì½·ì½¹ì½ºì½»ì½¼ì½½ì½¾ì½¿ì¾ì¾‚ì¾ƒì¾„ì¾†ì¾‡ì¾ˆì¾‰ì¾Šì¾‹ì¾ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¾Žì¾ì¾ì¾‘ì¾’ì¾“ì¾”ì¾•ì¾–ì¾—ì¾˜ì¾™ì¾šì¾›ì¾œì¾ì¾žì¾Ÿì¾ ì¾¢ì¾£ì¾¤ì¾¥ì¾¦ì¾§ì¾©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¾ªì¾«ì¾¬ì¾­ì¾®ì¾¯ì¾±ì¾²ì¾³ì¾´ì¾µì¾¶ì¾·ì¾¸ì¾¹ì¾ºì¾»ì¾¼ì¾½ì¾¾ì¾¿ì¿€ì¿ì¿‚ì¿ƒì¿…ì¿†ì¿‡ì¿ˆì¿‰ì¿Šì¿‹ê¹¹ê¹»ê¹¼ê¹½êº„êº…êºŒêº¼êº½êº¾ê»€ê»„ê»Œê»ê»ê»ê»‘ê»˜ê»™ê»œê»¨ê»«ê»­ê»´ê»¸ê»¼ê¼‡ê¼ˆê¼ê¼ê¼¬ê¼­ê¼°ê¼²ê¼´ê¼¼ê¼½ê¼¿ê½ê½‚ê½ƒê½ˆê½‰ê½ê½œê½ê½¤ê½¥ê½¹ê¾€ê¾„ê¾ˆê¾ê¾‘ê¾•ê¾œê¾¸ê¾¹ê¾¼ê¿€ê¿‡ê¿ˆê¿‰ê¿‹ê¿ê¿Žê¿”ê¿œê¿¨ê¿©ê¿°ê¿±ê¿´ê¿¸ë€€ë€ë€„ë€Œë€ë€”ë€œë€ë€¨ë„ë…ëˆëŠëŒëŽë“ë”ë•ë—ë™ï¿½".split("");for(a=0;a!=t[178].length;++a)if(t[178][a].charCodeAt(0)!==65533){r[t[178][a]]=45568+a;e[45568+a]=t[178][a]}t[179]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¿Œì¿ì¿Žì¿ì¿ì¿‘ì¿’ì¿“ì¿”ì¿•ì¿–ì¿—ì¿˜ì¿™ì¿šì¿›ì¿œì¿ì¿žì¿Ÿì¿¢ì¿£ì¿¥ì¿¦ì¿§ì¿©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ì¿ªì¿«ì¿¬ì¿­ì¿®ì¿¯ì¿²ì¿´ì¿¶ì¿·ì¿¸ì¿¹ì¿ºì¿»ì¿½ì¿¾ì¿¿í€í€‚í€ƒí€…í€†í€‡í€ˆí€‰í€Šï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í€‹í€Œí€í€Ží€í€í€’í€“í€”í€•í€–í€—í€™í€ší€›í€œí€í€ží€Ÿí€ í€¡í€¢í€£í€¤í€¥í€¦í€§í€¨í€©í€ªí€«í€¬ëë¼ë½ë‚€ë‚„ë‚Œë‚ë‚ë‚‘ë‚˜ë‚™ë‚šë‚œë‚Ÿë‚ ë‚¡ë‚¢ë‚¨ë‚©ë‚«ë‚¬ë‚­ë‚®ë‚¯ë‚±ë‚³ë‚´ë‚µë‚¸ë‚¼ëƒ„ëƒ…ëƒ‡ëƒˆëƒ‰ëƒëƒ‘ëƒ”ëƒ˜ëƒ ëƒ¥ë„ˆë„‰ë„‹ë„Œë„ë„’ë„“ë„˜ë„™ë„›ë„œë„ë„£ë„¤ë„¥ë„¨ë„¬ë„´ë„µë„·ë„¸ë„¹ë…€ë…ë…„ë…ˆë…ë…‘ë…”ë…•ë…˜ë…œë… ë…¸ë…¹ë…¼ë†€ë†‚ë†ˆë†‰ë†‹ë†ë†’ë†“ë†”ë†˜ë†œë†¨ë‡Œë‡ë‡”ë‡œë‡ï¿½".split("");for(a=0;a!=t[179].length;++a)if(t[179][a].charCodeAt(0)!==65533){r[t[179][a]]=45824+a;e[45824+a]=t[179][a]}t[180]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í€®í€¯í€°í€±í€²í€³í€¶í€·í€¹í€ºí€»í€½í€¾í€¿í€íí‚íƒí†íˆíŠí‹íŒííŽíï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í‘í’í“í•í–í—í™íší›íœíížíŸí¡í¢í£í¤í¥í¦í§í¨í©íªí«í®í¯ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í±í²í³íµí¶í·í¸í¹íºí»í¾í¿í‚€í‚‚í‚ƒí‚„í‚…í‚†í‚‡í‚ˆí‚‰í‚Ší‚‹í‚Œí‚í‚Ží‚í‚í‚‘í‚’í‚“í‚”ë‡Ÿë‡¨ë‡©ë‡¬ë‡°ë‡¹ë‡»ë‡½ëˆ„ëˆ…ëˆˆëˆ‹ëˆŒëˆ”ëˆ•ëˆ—ëˆ™ëˆ ëˆ´ëˆ¼ë‰˜ë‰œë‰ ë‰¨ë‰©ë‰´ë‰µë‰¼ëŠ„ëŠ…ëŠ‰ëŠëŠ‘ëŠ”ëŠ˜ëŠ™ëŠšëŠ ëŠ¡ëŠ£ëŠ¥ëŠ¦ëŠªëŠ¬ëŠ°ëŠ´ë‹ˆë‹‰ë‹Œë‹ë‹’ë‹˜ë‹™ë‹›ë‹ë‹¢ë‹¤ë‹¥ë‹¦ë‹¨ë‹«ë‹¬ë‹­ë‹®ë‹¯ë‹³ë‹´ë‹µë‹·ë‹¸ë‹¹ë‹ºë‹»ë‹¿ëŒ€ëŒëŒ„ëŒˆëŒëŒ‘ëŒ“ëŒ”ëŒ•ëŒœë”ë•ë–ë˜ë›ëœëžëŸë¤ë¥ï¿½".split("");for(a=0;a!=t[180].length;++a)if(t[180][a].charCodeAt(0)!==65533){r[t[180][a]]=46080+a;e[46080+a]=t[180][a]}t[181]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í‚•í‚–í‚—í‚˜í‚™í‚ší‚›í‚œí‚í‚ží‚Ÿí‚ í‚¡í‚¢í‚£í‚¦í‚§í‚©í‚ªí‚«í‚­í‚®í‚¯í‚°í‚±í‚²ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í‚³í‚¶í‚¸í‚ºí‚»í‚¼í‚½í‚¾í‚¿íƒ‚íƒƒíƒ…íƒ†íƒ‡íƒŠíƒ‹íƒŒíƒíƒŽíƒíƒ’íƒ–íƒ—íƒ˜íƒ™íƒšï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íƒ›íƒžíƒŸíƒ¡íƒ¢íƒ£íƒ¥íƒ¦íƒ§íƒ¨íƒ©íƒªíƒ«íƒ®íƒ²íƒ³íƒ´íƒµíƒ¶íƒ·íƒ¹íƒºíƒ»íƒ¼íƒ½íƒ¾íƒ¿í„€í„í„‚í„ƒí„„ë§ë©ë«ë®ë°ë±ë´ë¸ëŽ€ëŽëŽƒëŽ„ëŽ…ëŽŒëŽëŽ”ëŽ ëŽ¡ëŽ¨ëŽ¬ë„ë…ëˆë‹ëŒëŽëë”ë•ë—ë™ë›ëë ë¤ë¨ë¼ëë˜ëœë ë¨ë©ë«ë´ë‘ë‘‘ë‘”ë‘˜ë‘ ë‘¡ë‘£ë‘¥ë‘¬ë’€ë’ˆë’ë’¤ë’¨ë’¬ë’µë’·ë’¹ë“€ë“„ë“ˆë“ë“•ë“œë“ë“ ë“£ë“¤ë“¦ë“¬ë“­ë“¯ë“±ë“¸ë””ë”•ë”˜ë”›ë”œë”¤ë”¥ë”§ë”¨ë”©ë”ªë”°ë”±ë”´ë”¸ï¿½".split("");for(a=0;a!=t[181].length;++a)if(t[181][a].charCodeAt(0)!==65533){r[t[181][a]]=46336+a;e[46336+a]=t[181][a]}t[182]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í„…í„†í„‡í„ˆí„‰í„Ší„‹í„Œí„Ží„í„í„‘í„’í„“í„”í„•í„–í„—í„˜í„™í„ší„›í„œí„í„ží„Ÿï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í„ í„¡í„¢í„£í„¤í„¥í„¦í„§í„¨í„©í„ªí„«í„¬í„­í„®í„¯í„²í„³í„µí„¶í„·í„¹í„»í„¼í„½í„¾ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í„¿í…‚í…†í…‡í…ˆí…‰í…Ší…‹í…Ží…í…‘í…’í…“í…•í…–í…—í…˜í…™í…ší…›í…ží… í…¢í…£í…¤í…¥í…¦í…§í…©í…ªí…«í…­ë•€ë•ë•ƒë•„ë•…ë•‹ë•Œë•ë•ë•”ë•œë•ë•Ÿë• ë•¡ë– ë–¡ë–¤ë–¨ë–ªë–«ë–°ë–±ë–³ë–´ë–µë–»ë–¼ë–½ë—€ë—„ë—Œë—ë—ë—ë—‘ë—˜ë—¬ë˜ë˜‘ë˜”ë˜˜ë˜¥ë˜¬ë˜´ë™ˆë™¤ë™¨ëšœëšëš ëš¤ëš«ëš¬ëš±ë›”ë›°ë›´ë›¸ëœ€ëœëœ…ëœ¨ëœ©ëœ¬ëœ¯ëœ°ëœ¸ëœ¹ëœ»ë„ëˆëŒë”ë•ë ë¤ë¨ë°ë±ë³ëµë¼ë½ëž€ëž„ëžŒëžëžëžëž‘ëž’ëž–ëž—ï¿½".split("");for(a=0;a!=t[182].length;++a)if(t[182][a].charCodeAt(0)!==65533){r[t[182][a]]=46592+a;e[46592+a]=t[182][a]}t[183]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í…®í…¯í…°í…±í…²í…³í…´í…µí…¶í…·í…¸í…¹í…ºí…»í…½í…¾í…¿í†€í†í†‚í†ƒí†…í††í†‡í†‰í†Šï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í†‹í†Œí†í†Ží†í†í†‘í†’í†“í†”í†•í†–í†—í†˜í†™í†ší†›í†œí†í†ží†Ÿí†¢í†£í†¥í†¦í†§ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í†©í†ªí†«í†¬í†­í†®í†¯í†²í†´í†¶í†·í†¸í†¹í†»í†½í†¾í†¿í‡í‡‚í‡ƒí‡„í‡…í‡†í‡‡í‡ˆí‡‰í‡Ší‡‹í‡Œí‡í‡Ží‡ëž˜ëž™ëžœëž ëž¨ëž©ëž«ëž¬ëž­ëž´ëžµëž¸ëŸ‡ëŸ‰ëŸ¬ëŸ­ëŸ°ëŸ´ëŸ¼ëŸ½ëŸ¿ë €ë ë ‡ë ˆë ‰ë Œë ë ˜ë ™ë ›ë ë ¤ë ¥ë ¨ë ¬ë ´ë µë ·ë ¸ë ¹ë¡€ë¡„ë¡‘ë¡“ë¡œë¡ë¡ ë¡¤ë¡¬ë¡­ë¡¯ë¡±ë¡¸ë¡¼ë¢ë¢¨ë¢°ë¢´ë¢¸ë£€ë£ë£ƒë£…ë£Œë£ë£”ë£ë£Ÿë£¡ë£¨ë£©ë£¬ë£°ë£¸ë£¹ë£»ë£½ë¤„ë¤˜ë¤ ë¤¼ë¤½ë¥€ë¥„ë¥Œë¥ë¥‘ë¥˜ë¥™ë¥œë¥ ë¥¨ë¥©ï¿½".split("");for(a=0;a!=t[183].length;++a)if(t[183][a].charCodeAt(0)!==65533){r[t[183][a]]=46848+a;e[46848+a]=t[183][a]}t[184]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í‡í‡‘í‡’í‡“í‡”í‡•í‡–í‡—í‡™í‡ší‡›í‡œí‡í‡ží‡Ÿí‡ í‡¡í‡¢í‡£í‡¤í‡¥í‡¦í‡§í‡¨í‡©í‡ªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í‡«í‡¬í‡­í‡®í‡¯í‡°í‡±í‡²í‡³í‡µí‡¶í‡·í‡¹í‡ºí‡»í‡¼í‡½í‡¾í‡¿íˆ€íˆíˆ‚íˆƒíˆ„íˆ…íˆ†ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íˆˆíˆŠíˆ‹íˆŒíˆíˆŽíˆíˆ‘íˆ’íˆ“íˆ”íˆ•íˆ–íˆ—íˆ˜íˆ™íˆšíˆ›íˆœíˆíˆžíˆŸíˆ íˆ¡íˆ¢íˆ£íˆ¤íˆ¥íˆ¦íˆ§íˆ¨íˆ©ë¥«ë¥­ë¥´ë¥µë¥¸ë¥¼ë¦„ë¦…ë¦‡ë¦‰ë¦Šë¦ë¦Žë¦¬ë¦­ë¦°ë¦´ë¦¼ë¦½ë¦¿ë§ë§ˆë§‰ë§Œë§Žë§ë§ë§‘ë§’ë§˜ë§™ë§›ë§ë§žë§¡ë§£ë§¤ë§¥ë§¨ë§¬ë§´ë§µë§·ë§¸ë§¹ë§ºë¨€ë¨ë¨ˆë¨•ë¨¸ë¨¹ë¨¼ë©€ë©‚ë©ˆë©‰ë©‹ë©ë©Žë©“ë©”ë©•ë©˜ë©œë©¤ë©¥ë©§ë©¨ë©©ë©°ë©±ë©´ë©¸ëªƒëª„ëª…ëª‡ëªŒëª¨ëª©ëª«ëª¬ëª°ëª²ëª¸ëª¹ëª»ëª½ë«„ë«ˆë«˜ë«™ë«¼ï¿½".split("");for(a=0;a!=t[184].length;++a)if(t[184][a].charCodeAt(0)!==65533){r[t[184][a]]=47104+a;e[47104+a]=t[184][a]}t[185]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íˆªíˆ«íˆ®íˆ¯íˆ±íˆ²íˆ³íˆµíˆ¶íˆ·íˆ¸íˆ¹íˆºíˆ»íˆ¾í‰€í‰‚í‰ƒí‰„í‰…í‰†í‰‡í‰‰í‰Ší‰‹í‰Œï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í‰í‰Ží‰í‰í‰‘í‰’í‰“í‰”í‰•í‰–í‰—í‰˜í‰™í‰ší‰›í‰í‰ží‰Ÿí‰ í‰¡í‰¢í‰£í‰¥í‰¦í‰§í‰¨ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í‰©í‰ªí‰«í‰¬í‰­í‰®í‰¯í‰°í‰±í‰²í‰³í‰´í‰µí‰¶í‰·í‰¸í‰¹í‰ºí‰»í‰¼í‰½í‰¾í‰¿íŠ‚íŠƒíŠ…íŠ†íŠ‡íŠ‰íŠŠíŠ‹íŠŒë¬€ë¬„ë¬ë¬ë¬‘ë¬˜ë¬œë¬ ë¬©ë¬«ë¬´ë¬µë¬¶ë¬¸ë¬»ë¬¼ë¬½ë¬¾ë­„ë­…ë­‡ë­‰ë­ë­ë­ë­”ë­˜ë­¡ë­£ë­¬ë®ˆë®Œë®ë®¤ë®¨ë®¬ë®´ë®·ë¯€ë¯„ë¯ˆë¯ë¯“ë¯¸ë¯¹ë¯¼ë¯¿ë°€ë°‚ë°ˆë°‰ë°‹ë°Œë°ë°ë°‘ë°”ë°•ë°–ë°—ë°˜ë°›ë°œë°ë°žë°Ÿë°¤ë°¥ë°§ë°©ë°­ë°°ë°±ë°´ë°¸ë±€ë±ë±ƒë±„ë±…ë±‰ë±Œë±ë±ë±ë²„ë²…ë²ˆë²‹ë²Œë²Žë²”ë²•ë²—ï¿½".split("");for(a=0;a!=t[185].length;++a)if(t[185][a].charCodeAt(0)!==65533){r[t[185][a]]=47360+a;e[47360+a]=t[185][a]}t[186]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íŠíŠŽíŠíŠ’íŠ“íŠ”íŠ–íŠ—íŠ˜íŠ™íŠšíŠ›íŠíŠžíŠŸíŠ¡íŠ¢íŠ£íŠ¥íŠ¦íŠ§íŠ¨íŠ©íŠªíŠ«íŠ­ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íŠ®íŠ¯íŠ°íŠ²íŠ³íŠ´íŠµíŠ¶íŠ·íŠºíŠ»íŠ½íŠ¾í‹í‹ƒí‹„í‹…í‹†í‹‡í‹Ší‹Œí‹í‹Ží‹í‹í‹‘ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í‹’í‹“í‹•í‹–í‹—í‹™í‹ší‹›í‹í‹ží‹Ÿí‹ í‹¡í‹¢í‹£í‹¦í‹§í‹¨í‹©í‹ªí‹«í‹¬í‹­í‹®í‹¯í‹²í‹³í‹µí‹¶í‹·í‹¹í‹ºë²™ë²šë² ë²¡ë²¤ë²§ë²¨ë²°ë²±ë²³ë²´ë²µë²¼ë²½ë³€ë³„ë³ë³ë³ë³‘ë³•ë³˜ë³œë³´ë³µë³¶ë³¸ë³¼ë´„ë´…ë´‡ë´‰ë´ë´”ë´¤ë´¬ëµ€ëµˆëµ‰ëµŒëµëµ˜ëµ™ëµ¤ëµ¨ë¶€ë¶ë¶„ë¶‡ë¶ˆë¶‰ë¶Šë¶ë¶‘ë¶“ë¶•ë¶™ë¶šë¶œë¶¤ë¶°ë¶¸ë·”ë·•ë·˜ë·œë·©ë·°ë·´ë·¸ë¸€ë¸ƒë¸…ë¸Œë¸ë¸ë¸”ë¸œë¸ë¸Ÿë¹„ë¹…ë¹ˆë¹Œë¹Žë¹”ë¹•ë¹—ë¹™ë¹šë¹›ë¹ ë¹¡ë¹¤ï¿½".split("");for(a=0;a!=t[186].length;++a)if(t[186][a].charCodeAt(0)!==65533){r[t[186][a]]=47616+a;e[47616+a]=t[186][a]}t[187]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í‹»í‹¼í‹½í‹¾í‹¿íŒ‚íŒ„íŒ†íŒ‡íŒˆíŒ‰íŒŠíŒ‹íŒíŒ‘íŒ’íŒ“íŒ•íŒ—íŒ˜íŒ™íŒšíŒ›íŒžíŒ¢íŒ£ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íŒ¤íŒ¦íŒ§íŒªíŒ«íŒ­íŒ®íŒ¯íŒ±íŒ²íŒ³íŒ´íŒµíŒ¶íŒ·íŒºíŒ¾íŒ¿í€íí‚íƒí†í‡íˆí‰ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íŠí‹íŒííŽííí‘í’í“í”í•í–í—í˜í™íší›íœíížíŸí í¡í¢í£í¤í¥í¦í§í¨í©ë¹¨ë¹ªë¹°ë¹±ë¹³ë¹´ë¹µë¹»ë¹¼ë¹½ëº€ëº„ëºŒëºëºëºëº‘ëº˜ëº™ëº¨ë»ë»‘ë»”ë»—ë»˜ë» ë»£ë»¤ë»¥ë»¬ë¼ë¼ˆë¼‰ë¼˜ë¼™ë¼›ë¼œë¼ë½€ë½ë½„ë½ˆë½ë½‘ë½•ë¾”ë¾°ë¿…ë¿Œë¿ë¿ë¿”ë¿œë¿Ÿë¿¡ì€¼ì‘ì˜ìœì ì¨ì©ì‚ì‚‘ì‚”ì‚˜ì‚ ì‚¡ì‚£ì‚¥ì‚¬ì‚­ì‚¯ì‚°ì‚³ì‚´ì‚µì‚¶ì‚¼ì‚½ì‚¿ìƒ€ìƒìƒ…ìƒˆìƒ‰ìƒŒìƒìƒ˜ìƒ™ìƒ›ìƒœìƒìƒ¤ï¿½".split("");for(a=0;a!=t[187].length;++a)if(t[187][a].charCodeAt(0)!==65533){r[t[187][a]]=47872+a;e[47872+a]=t[187][a]}t[188]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íªí«í¬í­í®í¯í°í±í²í³í´íµí¶í·í¸í¹íºí»í¾í¿íŽíŽ‚íŽƒíŽ…íŽ†íŽ‡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íŽˆíŽ‰íŽŠíŽ‹íŽŽíŽ’íŽ“íŽ”íŽ•íŽ–íŽ—íŽšíŽ›íŽíŽžíŽŸíŽ¡íŽ¢íŽ£íŽ¤íŽ¥íŽ¦íŽ§íŽªíŽ¬íŽ®ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íŽ¯íŽ°íŽ±íŽ²íŽ³íŽµíŽ¶íŽ·íŽ¹íŽºíŽ»íŽ½íŽ¾íŽ¿í€íí‚íƒí†í‡íŠí‹íŒííŽíí‘í’í“í”í•í–ìƒ¥ìƒ¨ìƒ¬ìƒ´ìƒµìƒ·ìƒ¹ì„€ì„„ì„ˆì„ì„•ì„œì„ì„žì„Ÿì„ ì„£ì„¤ì„¦ì„§ì„¬ì„­ì„¯ì„°ì„±ì„¶ì„¸ì„¹ì„¼ì…€ì…ˆì…‰ì…‹ì…Œì…ì…”ì…•ì…˜ì…œì…¤ì…¥ì…§ì…¨ì…©ì…°ì…´ì…¸ì†…ì†Œì†ì†Žì†ì†”ì†–ì†œì†ì†Ÿì†¡ì†¥ì†¨ì†©ì†¬ì†°ì†½ì‡„ì‡ˆì‡Œì‡”ì‡—ì‡˜ì‡ ì‡¤ì‡¨ì‡°ì‡±ì‡³ì‡¼ì‡½ìˆ€ìˆ„ìˆŒìˆìˆìˆ‘ìˆ˜ìˆ™ìˆœìˆŸìˆ ìˆ¨ìˆ©ìˆ«ìˆ­ï¿½".split("");for(a=0;a!=t[188].length;++a)if(t[188][a].charCodeAt(0)!==65533){r[t[188][a]]=48128+a;e[48128+a]=t[188][a]}t[189]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í—í™íší›íœíížíŸí í¢í¤í¥í¦í§í¨í©íªí«í®í¯í±í²í³íµí¶í·ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í¸í¹íºí»í¾í€í‚íƒí„í…í†í‡í‰íŠí‹íŒííŽííí‘í’í“í”í•í–ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í—í˜í™íší›íœížíŸí í¡í¢í£í¤í¥í¦í§í¨í©íªí«í¬í­í®í¯í°í±í²í³í´íµí¶í·ìˆ¯ìˆ±ìˆ²ìˆ´ì‰ˆì‰ì‰‘ì‰”ì‰˜ì‰ ì‰¥ì‰¬ì‰­ì‰°ì‰´ì‰¼ì‰½ì‰¿ìŠìŠˆìŠ‰ìŠìŠ˜ìŠ›ìŠìŠ¤ìŠ¥ìŠ¨ìŠ¬ìŠ­ìŠ´ìŠµìŠ·ìŠ¹ì‹œì‹ì‹ ì‹£ì‹¤ì‹«ì‹¬ì‹­ì‹¯ì‹±ì‹¶ì‹¸ì‹¹ì‹»ì‹¼ìŒ€ìŒˆìŒ‰ìŒŒìŒìŒ“ìŒ”ìŒ•ìŒ˜ìŒœìŒ¤ìŒ¥ìŒ¨ìŒ©ì…ì¨ì©ì¬ì°ì²ì¸ì¹ì¼ì½ìŽ„ìŽˆìŽŒì€ì˜ì™ìœìŸì ì¢ì¨ì©ì­ì´ìµì¸ìˆìì¤ì¬ì°ï¿½".split("");for(a=0;a!=t[189].length;++a)if(t[189][a].charCodeAt(0)!==65533){r[t[189][a]]=48384+a;e[48384+a]=t[189][a]}t[190]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í¸í¹íºí»í¼í½í¾í¿í‘í‘‚í‘ƒí‘…í‘†í‘‡í‘ˆí‘‰í‘Ší‘‹í‘Œí‘í‘Ží‘í‘í‘‘í‘’í‘“ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í‘”í‘•í‘–í‘—í‘˜í‘™í‘ší‘›í‘í‘ží‘Ÿí‘¡í‘¢í‘£í‘¥í‘¦í‘§í‘¨í‘©í‘ªí‘«í‘¬í‘®í‘°í‘±í‘²ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í‘³í‘´í‘µí‘¶í‘·í‘ºí‘»í‘½í‘¾í’í’ƒí’„í’…í’†í’‡í’Ší’Œí’Ží’í’í’‘í’’í’“í’•í’–í’—í’˜í’™í’ší’›í’œí’ì´ì¼ì½ì‘ˆì‘¤ì‘¥ì‘¨ì‘¬ì‘´ì‘µì‘¹ì’€ì’”ì’œì’¸ì’¼ì“©ì“°ì“±ì“´ì“¸ì“ºì“¿ì”€ì”ì”Œì”ì””ì”œì”¨ì”©ì”¬ì”°ì”¸ì”¹ì”»ì”½ì•„ì•…ì•ˆì•‰ì•Šì•Œì•ì•Žì•“ì•”ì••ì•—ì•˜ì•™ì•ì•žì• ì•¡ì•¤ì•¨ì•°ì•±ì•³ì•´ì•µì•¼ì•½ì–€ì–„ì–‡ì–Œì–ì–ì–‘ì–•ì–—ì–˜ì–œì– ì–©ì–´ì–µì–¸ì–¹ì–»ì–¼ì–½ì–¾ì—„ì—…ì—†ì—‡ì—ˆì—‰ì—Šì—Œì—Žï¿½".split("");for(a=0;a!=t[190].length;++a)if(t[190][a].charCodeAt(0)!==65533){r[t[190][a]]=48640+a;e[48640+a]=t[190][a]}t[191]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í’ží’Ÿí’ í’¡í’¢í’£í’¤í’¥í’¦í’§í’¨í’ªí’«í’¬í’­í’®í’¯í’°í’±í’²í’³í’´í’µí’¶í’·í’¸ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í’¹í’ºí’»í’¼í’½í’¾í’¿í“€í“í“‚í“ƒí“„í“…í“†í“‡í“ˆí“‰í“Ší“‹í“í“Ží“í“‘í“’í““í“•ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í“–í“—í“˜í“™í“ší“›í“í“ží“ í“¡í“¢í“£í“¤í“¥í“¦í“§í“©í“ªí“«í“­í“®í“¯í“±í“²í“³í“´í“µí“¶í“·í“¹í“ºí“¼ì—ì—‘ì—”ì—˜ì— ì—¡ì—£ì—¥ì—¬ì—­ì—®ì—°ì—´ì—¶ì—·ì—¼ì—½ì—¾ì—¿ì˜€ì˜ì˜…ì˜†ì˜‡ì˜ˆì˜Œì˜ì˜˜ì˜™ì˜›ì˜œì˜¤ì˜¥ì˜¨ì˜¬ì˜­ì˜®ì˜°ì˜³ì˜´ì˜µì˜·ì˜¹ì˜»ì™€ì™ì™„ì™ˆì™ì™‘ì™“ì™”ì™•ì™œì™ì™ ì™¬ì™¯ì™±ì™¸ì™¹ì™¼ìš€ìšˆìš‰ìš‹ìšìš”ìš•ìš˜ìšœìš¤ìš¥ìš§ìš©ìš°ìš±ìš´ìš¸ìš¹ìšºì›€ì›ì›ƒì›…ì›Œì›ì›ì›”ì›œì›ì› ì›¡ì›¨ï¿½".split("");for(a=0;a!=t[191].length;++a)if(t[191][a].charCodeAt(0)!==65533){r[t[191][a]]=48896+a;e[48896+a]=t[191][a]}t[192]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í“¾í“¿í”€í”í”‚í”ƒí”…í”†í”‡í”‰í”Ší”‹í”í”Ží”í”í”‘í”’í”“í”–í”˜í”™í”ší”›í”œí”ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í”ží”Ÿí” í”¡í”¢í”£í”¤í”¥í”¦í”§í”¨í”©í”ªí”«í”¬í”­í”®í”¯í”°í”±í”²í”³í”´í”µí”¶í”·ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í”¸í”¹í”ºí”»í”¾í”¿í•í•‚í•ƒí•…í•†í•‡í•ˆí•‰í•Ší•‹í•Ží•í•’í•“í•”í••í•–í•—í•ší•›í•í•ží•Ÿí•¡í•¢í•£ì›©ì›¬ì›°ì›¸ì›¹ì›½ìœ„ìœ…ìœˆìœŒìœ”ìœ•ìœ—ìœ™ìœ ìœ¡ìœ¤ìœ¨ìœ°ìœ±ìœ³ìœµìœ·ìœ¼ìœ½ì€ì„ìŠìŒììì‘ì’ì“ì”ì•ì–ì—ì˜ìœì ì¨ì«ì´ìµì¸ì¼ì½ì¾ìžƒìž„ìž…ìž‡ìžˆìž‰ìžŠìžŽìžìž‘ìž”ìž–ìž—ìž˜ìžšìž ìž¡ìž£ìž¤ìž¥ìž¦ìž¬ìž­ìž°ìž´ìž¼ìž½ìž¿ìŸ€ìŸìŸˆìŸ‰ìŸŒìŸŽìŸìŸ˜ìŸìŸ¤ìŸ¨ìŸ¬ì €ì ì „ì ˆì Šï¿½".split("");for(a=0;a!=t[192].length;++a)if(t[192][a].charCodeAt(0)!==65533){r[t[192][a]]=49152+a;e[49152+a]=t[192][a]}t[193]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í•¤í•¦í•§í•ªí•¬í•®í•¯í•°í•±í•²í•³í•¶í•·í•¹í•ºí•»í•½í•¾í•¿í–€í–í–‚í–ƒí–†í–Ší–‹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í–Œí–í–Ží–í–‘í–’í–“í–”í–•í––í–—í–˜í–™í–ší–›í–œí–í–ží–Ÿí– í–¡í–¢í–£í–¤í–¦í–§ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í–¨í–©í–ªí–«í–¬í–­í–®í–¯í–°í–±í–²í–³í–´í–µí–¶í–·í–¸í–¹í–ºí–»í–¼í–½í–¾í–¿í—€í—í—‚í—ƒí—„í—…í—†í—‡ì ì ‘ì “ì •ì –ì œì ì  ì ¤ì ¬ì ­ì ¯ì ±ì ¸ì ¼ì¡€ì¡ˆì¡‰ì¡Œì¡ì¡”ì¡°ì¡±ì¡´ì¡¸ì¡ºì¢€ì¢ì¢ƒì¢…ì¢†ì¢‡ì¢‹ì¢Œì¢ì¢”ì¢ì¢Ÿì¢¡ì¢¨ì¢¼ì¢½ì£„ì£ˆì£Œì£”ì£•ì£—ì£™ì£ ì£¡ì£¤ì£µì£¼ì£½ì¤€ì¤„ì¤…ì¤†ì¤Œì¤ì¤ì¤‘ì¤˜ì¤¬ì¤´ì¥ì¥‘ì¥”ì¥˜ì¥ ì¥¡ì¥£ì¥¬ì¥°ì¥´ì¥¼ì¦ˆì¦‰ì¦Œì¦ì¦˜ì¦™ì¦›ì¦ì§€ì§ì§„ì§‡ì§ˆì§Šì§ì§‘ì§“ï¿½".split("");
for(a=0;a!=t[193].length;++a)if(t[193][a].charCodeAt(0)!==65533){r[t[193][a]]=49408+a;e[49408+a]=t[193][a]}t[194]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í—Ší—‹í—í—Ží—í—‘í—“í—”í—•í—–í——í—ší—œí—ží—Ÿí— í—¡í—¢í—£í—¦í—§í—©í—ªí—«í—­í—®ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í—¯í—°í—±í—²í—³í—¶í—¸í—ºí—»í—¼í—½í—¾í—¿í˜‚í˜ƒí˜…í˜†í˜‡í˜‰í˜Ší˜‹í˜Œí˜í˜Ží˜í˜’ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í˜–í˜—í˜˜í˜™í˜ší˜›í˜í˜ží˜Ÿí˜¡í˜¢í˜£í˜¥í˜¦í˜§í˜¨í˜©í˜ªí˜«í˜¬í˜®í˜¯í˜°í˜±í˜²í˜³í˜´í˜µí˜¶í˜·í˜ºí˜»ì§•ì§–ì§™ì§šì§œì§ì§ ì§¢ì§¤ì§§ì§¬ì§­ì§¯ì§°ì§±ì§¸ì§¹ì§¼ì¨€ì¨ˆì¨‰ì¨‹ì¨Œì¨ì¨”ì¨˜ì¨©ì©Œì©ì©ì©”ì©œì©ì©Ÿì© ì©¡ì©¨ì©½ìª„ìª˜ìª¼ìª½ì«€ì«„ì«Œì«ì«ì«‘ì«“ì«˜ì«™ì« ì«¬ì«´ì¬ˆì¬ì¬”ì¬˜ì¬ ì¬¡ì­ì­ˆì­‰ì­Œì­ì­˜ì­™ì­ì­¤ì­¸ì­¹ì®œì®¸ì¯”ì¯¤ì¯§ì¯©ì°Œì°ì°ì°”ì°œì°ì°¡ì°¢ì°§ì°¨ì°©ì°¬ì°®ì°°ì°¸ì°¹ì°»ï¿½".split("");for(a=0;a!=t[194].length;++a)if(t[194][a].charCodeAt(0)!==65533){r[t[194][a]]=49664+a;e[49664+a]=t[194][a]}t[195]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í˜½í˜¾í˜¿í™í™‚í™ƒí™„í™†í™‡í™Ší™Œí™Ží™í™í™’í™“í™–í™—í™™í™ší™›í™í™ží™Ÿí™ í™¡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í™¢í™£í™¤í™¥í™¦í™¨í™ªí™«í™¬í™­í™®í™¯í™²í™³í™µí™¶í™·í™¸í™¹í™ºí™»í™¼í™½í™¾í™¿íš€ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íšíš‚íš„íš†íš‡íšˆíš‰íšŠíš‹íšŽíšíš‘íš’íš“íš•íš–íš—íš˜íš™íššíš›íšœíšžíš íš¢íš£íš¤íš¥íš¦íš§íš©íšªì°¼ì°½ì°¾ì±„ì±…ì±ˆì±Œì±”ì±•ì±—ì±˜ì±™ì± ì±¤ì±¦ì±¨ì±°ì±µì²˜ì²™ì²œì² ì²¨ì²©ì²«ì²¬ì²­ì²´ì²µì²¸ì²¼ì³„ì³…ì³‡ì³‰ì³ì³”ì³¤ì³¬ì³°ì´ì´ˆì´‰ì´Œì´ì´˜ì´™ì´›ì´ì´¤ì´¨ì´¬ì´¹ìµœìµ ìµ¤ìµ¬ìµ­ìµ¯ìµ±ìµ¸ì¶ˆì¶”ì¶•ì¶˜ì¶œì¶¤ì¶¥ì¶§ì¶©ì¶°ì·„ì·Œì·ì·¨ì·¬ì·°ì·¸ì·¹ì·»ì·½ì¸„ì¸ˆì¸Œì¸”ì¸™ì¸ ì¸¡ì¸¤ì¸¨ì¸°ì¸±ì¸³ì¸µï¿½".split("");for(a=0;a!=t[195].length;++a)if(t[195][a].charCodeAt(0)!==65533){r[t[195][a]]=49920+a;e[49920+a]=t[195][a]}t[196]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íš«íš­íš®íš¯íš±íš²íš³íš´íšµíš¶íš·íš¸íšºíš¼íš½íš¾íš¿í›€í›í›‚í›ƒí›†í›‡í›‰í›Ší›‹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í›í›Ží›í›í›’í›“í›•í›–í›˜í›ší››í›œí›í›ží›Ÿí›¡í›¢í›£í›¥í›¦í›§í›©í›ªí›«í›¬í›­ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í›®í›¯í›±í›²í›³í›´í›¶í›·í›¸í›¹í›ºí›»í›¾í›¿íœíœ‚íœƒíœ…íœ†íœ‡íœˆíœ‰íœŠíœ‹íœŒíœíœŽíœíœíœ’íœ“íœ”ì¹˜ì¹™ì¹œì¹Ÿì¹ ì¹¡ì¹¨ì¹©ì¹«ì¹­ì¹´ì¹µì¹¸ì¹¼ìº„ìº…ìº‡ìº‰ìºìº‘ìº”ìº˜ìº ìº¡ìº£ìº¤ìº¥ìº¬ìº­ì»ì»¤ì»¥ì»¨ì»«ì»¬ì»´ì»µì»·ì»¸ì»¹ì¼€ì¼ì¼„ì¼ˆì¼ì¼‘ì¼“ì¼•ì¼œì¼ ì¼¤ì¼¬ì¼­ì¼¯ì¼°ì¼±ì¼¸ì½”ì½•ì½˜ì½œì½¤ì½¥ì½§ì½©ì½°ì½±ì½´ì½¸ì¾€ì¾…ì¾Œì¾¡ì¾¨ì¾°ì¿„ì¿ ì¿¡ì¿¤ì¿¨ì¿°ì¿±ì¿³ì¿µì¿¼í€€í€„í€‘í€˜í€­í€´í€µí€¸í€¼ï¿½".split("");for(a=0;a!=t[196].length;++a)if(t[196][a].charCodeAt(0)!==65533){r[t[196][a]]=50176+a;e[50176+a]=t[196][a]}t[197]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íœ•íœ–íœ—íœšíœ›íœíœžíœŸíœ¡íœ¢íœ£íœ¤íœ¥íœ¦íœ§íœªíœ¬íœ®íœ¯íœ°íœ±íœ²íœ³íœ¶íœ·íœ¹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íœºíœ»íœ½íœ¾íœ¿í€íí‚íƒí…í†íˆíŠí‹íŒííŽíí’í“í•íší›íœíížï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íŸí¢í¤í¦í§í¨íªí«í­í®í¯í±í²í³íµí¶í·í¸í¹íºí»í¾í¿íž€íž‚ížƒíž„íž…íž†íž‡ížŠíž‹í„í…í‡í‰íí”í˜í í¬í­í°í´í¼í½í‚í‚¤í‚¥í‚¨í‚¬í‚´í‚µí‚·í‚¹íƒ€íƒíƒ„íƒˆíƒ‰íƒíƒ‘íƒ“íƒ”íƒ•íƒœíƒíƒ íƒ¤íƒ¬íƒ­íƒ¯íƒ°íƒ±íƒ¸í„í„°í„±í„´í„¸í„ºí…€í…í…ƒí…„í……í…Œí…í…í…”í…œí…í…Ÿí…¡í…¨í…¬í…¼í†„í†ˆí† í†¡í†¤í†¨í†°í†±í†³í†µí†ºí†¼í‡€í‡˜í‡´í‡¸íˆ‡íˆ‰íˆíˆ¬íˆ­íˆ°íˆ´íˆ¼íˆ½íˆ¿í‰í‰ˆí‰œï¿½".split("");for(a=0;a!=t[197].length;++a)if(t[197][a].charCodeAt(0)!==65533){r[t[197][a]]=50432+a;e[50432+a]=t[197][a]}t[198]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ížížŽížíž‘íž’íž“íž”íž•íž–íž—ížšížœížžížŸíž íž¡íž¢íž£ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í‰¤íŠ€íŠíŠ„íŠˆíŠíŠ‘íŠ•íŠœíŠ íŠ¤íŠ¬íŠ±íŠ¸íŠ¹íŠ¼íŠ¿í‹€í‹‚í‹ˆí‹‰í‹‹í‹”í‹˜í‹œí‹¤í‹¥í‹°í‹±í‹´í‹¸íŒ€íŒíŒƒíŒ…íŒŒíŒíŒŽíŒíŒ”íŒ–íŒœíŒíŒŸíŒ íŒ¡íŒ¥íŒ¨íŒ©íŒ¬íŒ°íŒ¸íŒ¹íŒ»íŒ¼íŒ½í„í…í¼í½íŽ€íŽ„íŽŒíŽíŽíŽíŽ‘íŽ˜íŽ™íŽœíŽ íŽ¨íŽ©íŽ«íŽ­íŽ´íŽ¸íŽ¼í„í…íˆí‰íí˜í¡í£í¬í­í°í´í¼í½í¿íï¿½".split("");for(a=0;a!=t[198].length;++a)if(t[198][a].charCodeAt(0)!==65533){r[t[198][a]]=50688+a;e[50688+a]=t[198][a]}t[199]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½íˆíí‘€í‘„í‘œí‘ í‘¤í‘­í‘¯í‘¸í‘¹í‘¼í‘¿í’€í’‚í’ˆí’‰í’‹í’í’”í’©í“Œí“í“”í“œí“Ÿí“¨í“¬í“°í“¸í“»í“½í”„í”ˆí”Œí””í”•í”—í”¼í”½í•€í•„í•Œí•í•í•‘í•˜í•™í•œí• í•¥í•¨í•©í•«í•­í•´í•µí•¸í•¼í–„í–…í–‡í–ˆí–‰í–í–¥í—ˆí—‰í—Œí—í—’í—˜í—™í—›í—í—¤í—¥í—¨í—¬í—´í—µí—·í—¹í˜€í˜í˜„í˜ˆí˜í˜‘í˜“í˜”í˜•í˜œí˜ ï¿½".split("");for(a=0;a!=t[199].length;++a)if(t[199][a].charCodeAt(0)!==65533){r[t[199][a]]=50944+a;e[50944+a]=t[199][a]}t[200]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½í˜¤í˜­í˜¸í˜¹í˜¼í™€í™…í™ˆí™‰í™‹í™í™‘í™”í™•í™˜í™œí™§í™©í™°í™±í™´íšƒíš…íšŒíšíšíš”íšíšŸíš¡íš¨íš¬íš°íš¹íš»í›„í›…í›ˆí›Œí›‘í›”í›—í›™í› í›¤í›¨í›°í›µí›¼í›½íœ€íœ„íœ‘íœ˜íœ™íœœíœ íœ¨íœ©íœ«íœ­íœ´íœµíœ¸íœ¼í„í‡í‰íí‘í”í–í—í˜í™í í¡í£í¥í©í¬í°í´í¼í½ížížˆíž‰ížŒížíž˜íž™íž›ížï¿½".split("");for(a=0;a!=t[200].length;++a)if(t[200][a].charCodeAt(0)!==65533){r[t[200][a]]=51200+a;e[51200+a]=t[200][a]}t[202]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä¼½ä½³å‡åƒ¹åŠ å¯å‘µå“¥å˜‰å«å®¶æš‡æž¶æž·æŸ¯æ­Œç‚ç—‚ç¨¼è‹›èŒ„è¡—è¢ˆè¨¶è³ˆè·è»»è¿¦é§•åˆ»å´å„æªæ…¤æ®¼çè„šè¦ºè§’é–£ä¾ƒåˆŠå¢¾å¥¸å§¦å¹²å¹¹æ‡‡æ€æ†æŸ¬æ¡¿æ¾—ç™Žçœ‹ç£µç¨ˆç«¿ç°¡è‚è‰®è‰±è««é–“ä¹«å–æ›·æ¸´ç¢£ç«­è‘›è¤èŽéž¨å‹˜åŽå ªåµŒæ„Ÿæ†¾æˆ¡æ•¢æŸ‘æ©„æ¸›ç”˜ç–³ç›£çž°ç´ºé‚¯é‘‘é‘’é¾•ï¿½".split("");for(a=0;a!=t[202].length;++a)if(t[202][a].charCodeAt(0)!==65533){r[t[202][a]]=51712+a;e[51712+a]=t[202][a]}t[203]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åŒ£å²¬ç”²èƒ›é‰€é–˜å‰›å ˆå§œå²¡å´—åº·å¼ºå½Šæ…·æ±Ÿç•ºç–†ç³ çµ³ç¶±ç¾Œè…”èˆ¡è–‘è¥è¬›é‹¼é™é±‡ä»‹ä»·å€‹å‡±å¡æ„·æ„¾æ…¨æ”¹æ§ªæ¼‘ç–¥çš†ç›–ç®‡èŠ¥è“‹ï¤€éŽ§é–‹å–€å®¢å‘ï¤ç²³ç¾¹é†µå€¨åŽ»å±…å·¨æ‹’æ®æ“šæ“§æ¸ ç‚¬ç¥›è·è¸žï¤‚é½é‰…é‹¸ä¹¾ä»¶å¥å·¾å»ºæ„†æ¥—è…±è™”è¹‡éµé¨«ä¹žå‚‘æ°æ¡€å„‰åŠåŠ’æª¢ï¿½".split("");for(a=0;a!=t[203].length;++a)if(t[203][a].charCodeAt(0)!==65533){r[t[203][a]]=51968+a;e[51968+a]=t[203][a]}t[204]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çž¼éˆé»”åŠ«æ€¯è¿²åˆæ†©æ­æ“Šæ ¼æª„æ¿€è†ˆè¦¡éš”å …ç‰½çŠ¬ç”„çµ¹ç¹­è‚©è¦‹è­´é£éµ‘æŠ‰æ±ºæ½”çµç¼ºè¨£å…¼æ…Šç®è¬™é‰—éŽŒäº¬ä¿“å€žå‚¾å„†å‹å‹å¿å°å¢ƒåºšå¾‘æ…¶æ†¬æ“Žæ•¬æ™¯æš»æ›´æ¢—æ¶‡ç‚…çƒ±ç’Ÿç’¥ç“Šç—™ç¡¬ç£¬ç«Ÿç«¶çµ…ç¶“è€•è€¿è„›èŽ–è­¦è¼•é€•é¡é ƒé ¸é©šé¯¨ä¿‚å•“å ºå¥‘å­£å±†æ‚¸æˆ’æ¡‚æ¢°ï¿½".split("");for(a=0;a!=t[204].length;++a)if(t[204][a].charCodeAt(0)!==65533){r[t[204][a]]=52224+a;e[52224+a]=t[204][a]}t[205]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ£¨æºªç•Œç™¸ç£Žç¨½ç³»ç¹«ç¹¼è¨ˆèª¡è°¿éšŽé·„å¤å©å‘Šå‘±å›ºå§‘å­¤å°»åº«æ‹·æ”·æ•…æ•²æš æž¯æ§æ²½ç—¼çšç¾ç¨¿ç¾”è€ƒè‚¡è†è‹¦è‹½è°è—è ±è¢´èª¥ï¤ƒè¾œéŒ®é›‡é¡§é«˜é¼“å“­æ–›æ›²æ¢ç©€è°·éµ å›°å¤å´‘æ˜†æ¢±æ£æ»¾ç¨è¢žé¯¤æ±¨ï¤„éª¨ä¾›å…¬å…±åŠŸå­”å·¥ææ­æ‹±æŽ§æ”»ç™ç©ºèš£è²¢éžä¸²å¯¡æˆˆæžœç“œï¿½".split("");for(a=0;a!=t[205].length;++a)if(t[205][a].charCodeAt(0)!==65533){r[t[205][a]]=52480+a;e[52480+a]=t[205][a]}t[206]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç§‘è“èª‡èª²è·¨éŽé‹é¡†å»“æ§¨è—¿éƒ­ï¤…å† å®˜å¯¬æ…£æ£ºæ¬¾çŒç¯ç“˜ç®¡ç½è…è§€è²«é—œé¤¨åˆ®ææ‹¬é€‚ä¾Šå…‰åŒ¡å£™å»£æ› æ´¸ç‚šç‹‚ç–ç­èƒ±é‘›å¦æŽ›ç½«ä¹–å‚€å¡Šå£žæ€ªæ„§æ‹æ§é­å®ç´˜è‚±è½Ÿäº¤åƒ‘å’¬å–¬å¬Œå¶ å·§æ”ªæ•Žæ ¡æ©‹ç‹¡çšŽçŸ¯çµžç¿¹è† è•Žè›Ÿè¼ƒè½ŽéƒŠé¤ƒé©•é®«ä¸˜ä¹…ä¹ä»‡ä¿±å…·å‹¾ï¿½".split("");for(a=0;a!=t[206].length;++a)if(t[206][a].charCodeAt(0)!==65533){r[t[206][a]]=52736+a;e[52736+a]=t[206][a]}t[207]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å€å£å¥å’Žå˜”åµåž¢å¯‡å¶‡å»æ‡¼æ‹˜æ•‘æž¸æŸ©æ§‹æ­æ¯†æ¯¬æ±‚æºç¸ç‹—çŽ–çƒçž¿çŸ©ç©¶çµ¿è€‰è‡¼èˆ…èˆŠè‹Ÿè¡¢è¬³è³¼è»€é€‘é‚±é‰¤éŠ¶é§’é©…é³©é·—é¾œåœ‹å±€èŠéž éž«éº´å›çª˜ç¾¤è£™è»éƒ¡å €å±ˆæŽ˜çªŸå®®å¼“ç©¹çª®èŠŽèº¬å€¦åˆ¸å‹¸å·åœˆæ‹³æ²æ¬Šæ·ƒçœ·åŽ¥ç—è•¨è¹¶é—•æœºæ«ƒæ½°è©­è»Œé¥‹ï¤†æ™·æ­¸è²´ï¿½".split("");for(a=0;a!=t[207].length;++a)if(t[207][a].charCodeAt(0)!==65533){r[t[207][a]]=52992+a;e[52992+a]=t[207][a]}t[208]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¬¼ï¤‡å«åœ­å¥Žæ†æ§»çªç¡…çªºç«…ç³¾è‘µè¦èµ³é€µé–¨å‹»å‡ç•‡ç­ èŒéˆžï¤ˆæ©˜å…‹å‰‹åŠ‡æˆŸæ£˜æ¥µéš™åƒ…åŠ¤å‹¤æ‡ƒæ–¤æ ¹æ§¿ç‘¾ç­‹èŠ¹è«è¦²è¬¹è¿‘é¥‰ï¤‰ä»Šå¦—æ“’æ˜‘æªŽç´ç¦ç¦½èŠ©è¡¾è¡¿è¥Ÿï¤ŠéŒ¦ä¼‹åŠæ€¥æ‰±æ±²ç´šçµ¦äº˜å…¢çŸœè‚¯ä¼ä¼Žå…¶å†€å—œå™¨åœ»åŸºåŸ¼å¤”å¥‡å¦“å¯„å²å´Žå·±å¹¾å¿ŒæŠ€æ——æ—£ï¿½".split("");for(a=0;a!=t[208].length;++a)if(t[208][a].charCodeAt(0)!==65533){r[t[208][a]]=53248+a;e[53248+a]=t[208][a]}t[209]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æœžæœŸæžæ£‹æ£„æ©Ÿæ¬ºæ°£æ±½æ²‚æ·‡çŽ˜ç¦çªç’‚ç’£ç•¸ç•¿ç¢ç£¯ç¥ç¥‡ç¥ˆç¥ºç®•ç´€ç¶ºç¾ˆè€†è€­è‚Œè¨˜è­è±ˆèµ·éŒ¡éŒ¤é£¢é¥‘é¨Žé¨é©¥éº’ç·Šä½¶å‰æ‹®æ¡”é‡‘å–«å„ºï¤‹ï¤Œå¨œæ‡¦ï¤æ‹æ‹¿ï¤Žï¤ï¤ï¤‘ï¤’ï¤“é‚£ï¤”ï¤•ï¤–ï¤—ï¤˜è«¾ï¤™ï¤šï¤›ï¤œæš–ï¤ç…–ï¤žï¤Ÿé›£ï¤ ææºå—ï¤¡æžæ¥ æ¹³ï¤¢ç”·ï¤£ï¤¤ï¤¥ï¿½".split("");for(a=0;a!=t[209].length;++a)if(t[209][a].charCodeAt(0)!==65533){r[t[209][a]]=53504+a;e[53504+a]=t[209][a]}t[210]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç´ï¤¦ï¤§è¡²å›Šå¨˜ï¤¨ï¤©ï¤ªï¤«ï¤¬ä¹ƒï¤­å…§å¥ˆæŸ°è€ï¤®å¥³å¹´æ’šç§Šå¿µæ¬æ‹ˆæ»å¯§å¯—åŠªï¤¯å¥´å¼©æ€’ï¤°ï¤±ï¤²ç‘™ï¤³ï¤´ï¤µï¤¶ï¤·ï¤¸é§‘ï¤¹ï¤ºï¤»ï¤¼ï¤½ï¤¾ï¤¿ï¥€ï¥ï¥‚ï¥ƒæ¿ƒï¥„ï¥…è†¿è¾²æƒ±ï¥†ï¥‡è…¦ï¥ˆï¥‰å°¿ï¥Šï¥‹ï¥Œï¥ï¥Žï¥ï¥ï¥‘å«©è¨¥æ»ç´ï¥’ï¥“ï¥”ï¥•ï¥–ï¥—èƒ½ï¥˜ï¥™å°¼æ³¥åŒ¿æººå¤šèŒ¶ï¿½".split("");for(a=0;a!=t[210].length;++a)if(t[210][a].charCodeAt(0)!==65533){r[t[210][a]]=53760+a;e[53760+a]=t[210][a]}t[211]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä¸¹äº¶ä½†å–®åœ˜å£‡å½–æ–·æ—¦æª€æ®µæ¹çŸ­ç«¯ç°žç·žè›‹è¢’é„²é›æ’»æ¾¾çºç–¸é”å•–åæ†ºæ“”æ›‡æ·¡æ¹›æ½­æ¾¹ç—°èƒè†½è•è¦ƒè«‡è­šéŒŸæ²“ç•“ç­”è¸éå”å ‚å¡˜å¹¢æˆ‡æ’žæ£ ç•¶ç³–èž³é»¨ä»£åžˆå®å¤§å°å²±å¸¶å¾…æˆ´æ“¡çŽ³è‡ºè¢‹è²¸éšŠé»›å®…å¾·æ‚³å€’åˆ€åˆ°åœ–å µå¡—å°Žå± å³¶å¶‹åº¦å¾’æ‚¼æŒ‘æŽ‰æ—æ¡ƒï¿½".split("");for(a=0;a!=t[211].length;++a)if(t[211][a].charCodeAt(0)!==65533){r[t[211][a]]=54016+a;e[54016+a]=t[211][a]}t[212]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ£¹æ«‚æ·˜æ¸¡æ»”æ¿¤ç‡¾ç›œç¹ç¦±ç¨»è„è¦©è³­è·³è¹ˆé€ƒé€”é“éƒ½éé™¶éŸœæ¯’ç€†ç‰˜çŠ¢ç¨ç£ç¦¿ç¯¤çº›è®€å¢©æƒ‡æ•¦æ—½æš¾æ²Œç„žç‡‰è±šé “ä¹­çªä»å†¬å‡å‹•åŒæ†§æ±æ¡æ£Ÿæ´žæ½¼ç–¼çž³ç«¥èƒ´è‘£éŠ…å…œæ–—æœæž“ç—˜ç«‡è³ï¥šè±†é€—é ­å±¯è‡€èŠšéé¯éˆå¾—å¶æ©™ç‡ˆç™»ç­‰è—¤è¬„é„§é¨°å–‡æ‡¶ï¥›ç™©ç¾…ï¿½".split("");for(a=0;a!=t[212].length;++a)if(t[212][a].charCodeAt(0)!==65533){r[t[212][a]]=54272+a;e[54272+a]=t[212][a]}t[213]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è˜¿èžºè£¸é‚ï¥œæ´›çƒ™çžçµ¡è½ï¥é…ªé§±ï¥žäº‚åµæ¬„æ¬’ç€¾çˆ›è˜­é¸žå‰Œè¾£åµæ“¥æ”¬æ¬–æ¿«ç±ƒçºœè—è¥¤è¦½æ‹‰è‡˜è Ÿå»Šæœ—æµªç‹¼ç…ç‘¯èž‚éƒžä¾†å´å¾ èŠå†·æŽ ç•¥äº®å€†å…©å‡‰æ¢æ¨‘ç²®ç²±ç³§è‰¯è«’è¼›é‡ä¾¶å„·å‹µå‘‚å»¬æ…®æˆ¾æ—…æ«šæ¿¾ç¤ªè—œè £é–­é©¢é©ªéº—é»ŽåŠ›æ›†æ­·ç€ç¤«è½¢é‚æ†æˆ€æ”£æ¼£ï¿½".split("");for(a=0;a!=t[213].length;++a)if(t[213][a].charCodeAt(0)!==65533){r[t[213][a]]=54528+a;e[54528+a]=t[213][a]}t[214]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç…‰ç’‰ç·´è¯è“®è¼¦é€£éŠå†½åˆ—åŠ£æ´Œçƒˆè£‚å»‰æ–‚æ®®æ¿‚ç°¾çµä»¤ä¼¶å›¹ï¥Ÿå²ºå¶ºæ€œçŽ²ç¬­ç¾šç¿Žè†é€žéˆ´é›¶éˆé ˜é½¡ä¾‹æ¾§ç¦®é†´éš·å‹žï¥ æ’ˆæ“„æ«“æ½žç€˜çˆç›§è€è˜†è™œè·¯è¼…éœ²é­¯é·ºé¹µç¢Œç¥¿ç¶ è‰éŒ„é¹¿éº“è«–å£Ÿå¼„æœ§ç€§ç“ç± è¾å„¡ç€¨ç‰¢ç£Šè³‚è³šè³´é›·äº†åƒšå¯®å»–æ–™ç‡Žç™‚çž­èŠè“¼ï¿½".split("");for(a=0;a!=t[214].length;++a)if(t[214][a].charCodeAt(0)!==65533){r[t[214][a]]=54784+a;e[54784+a]=t[214][a]}t[215]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¼é¬§é¾å£˜å©å±¢æ¨“æ·šæ¼ç˜»ç´¯ç¸·è”žè¤¸é¤é™‹åŠ‰æ—’æŸ³æ¦´æµæºœç€ç‰ç‘ ç•™ç˜¤ç¡«è¬¬é¡žå…­æˆ®é™¸ä¾–å€«å´™æ·ªç¶¸è¼ªå¾‹æ…„æ —ï¥¡éš†å‹’è‚‹å‡œå‡Œæ¥žç¨œç¶¾è±é™µä¿šåˆ©åŽ˜åå”Žå±¥æ‚§æŽæ¢¨æµ¬çŠç‹¸ç†ç’ƒï¥¢ç—¢ç±¬ç½¹ç¾¸èŽ‰è£è£¡é‡Œé‡é›¢é¯‰åæ½¾ç‡ç’˜è—ºèºªéš£é±—éºŸæž—æ·‹ç³è‡¨éœ–ç ¬ï¿½".split("");for(a=0;a!=t[215].length;++a)if(t[215][a].charCodeAt(0)!==65533){r[t[215][a]]=55040+a;e[55040+a]=t[215][a]}t[216]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç«‹ç¬ ç²’æ‘©ç‘ªç—²ç¢¼ç£¨é¦¬é­”éº»å¯žå¹•æ¼ è†œèŽ«é‚ˆä¸‡åå¨©å·’å½Žæ…¢æŒ½æ™©æ›¼æ»¿æ¼«ç£çžžè¬è”“è »è¼“é¥…é°»å”œæŠ¹æœ«æ²«èŒ‰è¥ªéºäº¡å¦„å¿˜å¿™æœ›ç¶²ç½”èŠ’èŒ«èŽ½è¼žé‚™åŸ‹å¦¹åª’å¯æ˜§æžšæ¢…æ¯ç…¤ç½µè²·è³£é‚é­…è„ˆè²Šé™Œé©€éº¥å­Ÿæ°“çŒ›ç›²ç›ŸèŒå†ªè¦“å…å†•å‹‰æ£‰æ²”çœ„çœ ç¶¿ç·¬é¢éºµæ»…ï¿½".split("");for(a=0;a!=t[216].length;++a)if(t[216][a].charCodeAt(0)!==65533){r[t[216][a]]=55296+a;e[55296+a]=t[216][a]}t[217]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è”‘å†¥åå‘½æ˜Žæšæ¤§æºŸçš¿çž‘èŒ—è“‚èžŸé…©éŠ˜é³´è¢‚ä¾®å†’å‹Ÿå§†å¸½æ…•æ‘¸æ‘¹æš®æŸæ¨¡æ¯æ¯›ç‰Ÿç‰¡ç‘çœ¸çŸ›è€—èŠ¼èŒ…è¬€è¬¨è²Œæœ¨æ²ç‰§ç›®ç¦ç©†é¶©æ­¿æ²’å¤¢æœ¦è’™å¯å¢“å¦™å»Ÿææ˜´æ³æ¸ºçŒ«ç«—è‹—éŒ¨å‹™å·«æ†®æ‡‹æˆŠæ‹‡æ’«æ— æ¥™æ­¦æ¯‹ç„¡ç·ç•ç¹†èˆžèŒ‚è•ªèª£è²¿éœ§éµ¡å¢¨é»˜å€‘åˆŽå»å•æ–‡ï¿½".split("");for(a=0;a!=t[217].length;++a)if(t[217][a].charCodeAt(0)!==65533){r[t[217][a]]=55552+a;e[55552+a]=t[217][a]}t[218]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ±¶ç´Šç´‹èžèšŠé–€é›¯å‹¿æ²•ç‰©å‘³åªšå°¾åµ‹å½Œå¾®æœªæ¢¶æ¥£æ¸¼æ¹„çœ‰ç±³ç¾Žè–‡è¬Žè¿·é¡é»´å²·æ‚¶æ„æ†«æ•æ—»æ—¼æ°‘æ³¯çŽŸç‰ç·¡é–”å¯†èœœè¬å‰åšæ‹ææ’²æœ´æ¨¸æ³Šç€ç’žç®”ç²•ç¸›è†Šèˆ¶è–„è¿«é›¹é§ä¼´åŠåå›æ‹Œæ¬æ”€æ–‘æ§ƒæ³®æ½˜ç­ç•”ç˜¢ç›¤ç›¼ç£ç£»ç¤¬çµ†èˆ¬èŸ è¿”é ’é£¯å‹ƒæ‹”æ’¥æ¸¤æ½‘ï¿½".split("");for(a=0;a!=t[218].length;++a)if(t[218][a].charCodeAt(0)!==65533){r[t[218][a]]=55808+a;e[55808+a]=t[218][a]}t[219]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç™¼è·‹é†±é‰¢é«®é­ƒå€£å‚åŠå¦¨å°¨å¹‡å½·æˆ¿æ”¾æ–¹æ—æ˜‰æž‹æ¦œæ»‚ç£…ç´¡è‚ªè†€èˆ«èŠ³è’¡èšŒè¨ªè¬—é‚¦é˜²é¾å€ä¿³ï¥£åŸ¹å¾˜æ‹œæŽ’æ¯æ¹ƒç„™ç›ƒèƒŒèƒšè£´è£µè¤™è³ è¼©é…é™ªä¼¯ä½°å¸›æŸæ ¢ç™½ç™¾é­„å¹¡æ¨Šç…©ç‡”ç•ªï¥¤ç¹è•ƒè—©é£œä¼ç­ç½°é–¥å‡¡å¸†æ¢µæ°¾æ±Žæ³›çŠ¯ç¯„èŒƒæ³•çºåƒ»åŠˆå£æ“˜æª—ç’§ç™–ï¿½".split("");for(a=0;a!=t[219].length;++a)if(t[219][a].charCodeAt(0)!==65533){r[t[219][a]]=56064+a;e[56064+a]=t[219][a]}t[220]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¢§è˜—é—¢éœ¹ï¥¥åžå¼è®Šè¾¨è¾¯é‚Šåˆ¥çž¥é±‰é¼ˆä¸™å€‚å…µå±›å¹·æ˜žæ˜ºæŸ„æ£…ç‚³ç”ç—…ç§‰ç«è¼§é¤ é¨ˆä¿å ¡å ±å¯¶æ™®æ­¥æ´‘æ¹ºæ½½ç¤ç”«è©è£œè¤“è­œè¼”ä¼åƒ•åŒåœå®“å¾©æœç¦è…¹èŒ¯è””è¤‡è¦†è¼¹è¼»é¦¥é°’æœ¬ä¹¶ä¿¸å¥‰å°å³¯å³°æ§æ£’çƒ½ç†¢ç«ç¸«è“¬èœ‚é€¢é‹’é³³ä¸ä»˜ä¿¯å‚…å‰–å‰¯å¦å’åŸ å¤«å©¦ï¿½".split("");for(a=0;a!=t[220].length;++a)if(t[220][a].charCodeAt(0)!==65533){r[t[220][a]]=56320+a;e[56320+a]=t[220][a]}t[221]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å­šå­µå¯Œåºœï¥¦æ‰¶æ•·æ–§æµ®æº¥çˆ¶ç¬¦ç°¿ç¼¶è…è…‘è†šè‰€èŠ™èŽ©è¨ƒè² è³¦è³»èµ´è¶ºéƒ¨é‡œé˜œé™„é§™é³§åŒ—åˆ†å©å™´å¢³å¥”å¥®å¿¿æ†¤æ‰®æ˜æ±¾ç„šç›†ç²‰ç³žç´›èŠ¬è³é›°ï¥§ä½›å¼—å½¿æ‹‚å´©æœ‹æ£šç¡¼ç¹ƒéµ¬ä¸•å‚™åŒ•åŒªå‘å¦ƒå©¢åº‡æ‚²æ†Šæ‰‰æ‰¹æ–æž‡æ¦§æ¯”æ¯–æ¯—æ¯˜æ²¸ï¥¨çµç—ºç ’ç¢‘ç§•ç§˜ç²ƒç·‹ç¿¡è‚¥ï¿½".split("");for(a=0;a!=t[221].length;++a)if(t[221][a].charCodeAt(0)!==65533){r[t[221][a]]=56576+a;e[56576+a]=t[221][a]}t[222]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è„¾è‡‚è²èœšè£¨èª¹è­¬è²»é„™éžé£›é¼»åš¬å¬ªå½¬æ–Œæª³æ®¯æµœæ¿±ç€•ç‰çŽ­è²§è³“é »æ†‘æ°·è˜é¨ä¹äº‹äº›ä»•ä¼ºä¼¼ä½¿ä¿Ÿåƒ¿å²å¸å”†å—£å››å£«å¥¢å¨‘å¯«å¯ºå°„å·³å¸«å¾™æ€æ¨æ–œæ–¯æŸ¶æŸ»æ¢­æ­»æ²™æ³—æ¸£ç€‰ç…ç ‚ç¤¾ç¥€ç¥ ç§ç¯©ç´—çµ²è‚†èˆèŽŽè“‘è›‡è£Ÿè©è©žè¬è³œèµ¦è¾­é‚ªé£¼é§Ÿéºå‰Šï¥©æœ”ï¥ªï¿½".split("");for(a=0;a!=t[222].length;++a)if(t[222][a].charCodeAt(0)!==65533){r[t[222][a]]=56832+a;e[56832+a]=t[222][a]}t[223]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å‚˜åˆªå±±æ•£æ±•çŠç”£ç–ç®—è’œé…¸éœ°ä¹·æ’’æ®ºç…žè–©ä¸‰ï¥«æ‰æ£®æ¸—èŠŸè”˜è¡«æ·æ¾éˆ’é¢¯ä¸Šå‚·åƒå„Ÿå•†å–ªå˜—å­€å°™å³ å¸¸åºŠåº å»‚æƒ³æ¡‘æ©¡æ¹˜çˆ½ç‰€ç‹€ç›¸ç¥¥ç®±ç¿”è£³è§´è©³è±¡è³žéœœå¡žç’½è³½å—‡ï¥¬ç©¡ç´¢è‰²ç‰²ç”Ÿç”¥ï¥­ç¬™å¢…å£»å¶¼åºåº¶å¾æ•æŠ’æ¿æ•æš‘æ›™æ›¸æ –æ£²çŠ€ç‘žç­®çµ®ç·–ç½²ï¿½".split("");for(a=0;a!=t[223].length;++a)if(t[223][a].charCodeAt(0)!==65533){r[t[223][a]]=57088+a;e[57088+a]=t[223][a]}t[224]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½èƒ¥èˆ’è–¯è¥¿èª“é€é‹¤é»é¼ å¤•å¥­å¸­æƒœæ˜”æ™³æžæ±æ·…æ½ŸçŸ³ç¢©è“†é‡‹éŒ«ä»™åƒŠå…ˆå–„å¬‹å®£æ‰‡æ•¾æ—‹æ¸²ç…½çç‘„ç’‡ç’¿ç™¬ç¦ªç·šç¹•ç¾¨è…ºè†³èˆ¹è˜šèŸ¬è©µè·£é¸éŠ‘é¥é¥é®®å¨å±‘æ¥”æ³„æ´©æ¸«èˆŒè–›è¤»è¨­èªªé›ªé½§å‰¡æš¹æ®²çº–èŸ¾è´é–ƒé™æ”æ¶‰ç‡®ï¥®åŸŽå§“å®¬æ€§æƒºæˆæ˜Ÿæ™ŸçŒ©ç¹ç››çœç­¬ï¿½".split("");for(a=0;a!=t[224].length;++a)if(t[224][a].charCodeAt(0)!==65533){r[t[224][a]]=57344+a;e[57344+a]=t[224][a]}t[225]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è–è²è…¥èª é†’ä¸–å‹¢æ­²æ´—ç¨…ç¬¹ç´°ï¥¯è²°å¬å˜¯å¡‘å®µå°å°‘å·¢æ‰€æŽƒæ”æ˜­æ¢³æ²¼æ¶ˆæº¯ç€Ÿç‚¤ç‡’ç”¦ç–ç–Žç˜™ç¬‘ç¯ ç°«ç´ ç´¹è”¬è•­è˜‡è¨´é€é¡é‚µéŠ·éŸ¶é¨·ä¿—å±¬æŸæ¶‘ç²ŸçºŒè¬–è´–é€Ÿå­«å·½æè“€éœé£¡çŽ‡å®‹æ‚šæ¾æ·žè¨Ÿèª¦é€é Œåˆ·ï¥°ç‘ç¢ŽéŽ–è¡°é‡—ä¿®å—å—½å›šåž‚å£½å«‚å®ˆå²«å³€å¸¥æ„ï¿½".split("");for(a=0;a!=t[225].length;++a)if(t[225][a].charCodeAt(0)!==65533){r[t[225][a]]=57600+a;e[57600+a]=t[225][a]}t[226]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æˆæ‰‹æŽˆæœæ”¶æ•¸æ¨¹æ®Šæ°´æ´™æ¼±ç‡§ç‹©ç¸ç‡ç’²ç˜¦ç¡ç§€ç©—ç«ªç²¹ç¶ç¶¬ç¹¡ç¾žè„©èŒ±è’è“šè—ªè¢–èª°è®è¼¸é‚é‚ƒé…¬éŠ–éŠ¹éš‹éš§éš¨é›–éœ€é ˆé¦–é«“é¬šå”å¡¾å¤™å­°å®¿æ·‘æ½šç†Ÿç¡ç’¹è‚…è½å·¡å¾‡å¾ªæ‚æ—¬æ ’æ¥¯æ©“æ®‰æ´µæ·³ç£ç›¾çž¬ç­ç´”è„£èˆœè€è“´è•£è©¢è«„é†‡éŒžé †é¦´æˆŒè¡“è¿°é‰¥å´‡å´§ï¿½".split("");for(a=0;a!=t[226].length;++a)if(t[226][a].charCodeAt(0)!==65533){r[t[226][a]]=57856+a;e[57856+a]=t[226][a]}t[227]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åµ©ç‘Ÿè†è¨æ¿•æ‹¾ç¿’è¤¶è¥²ä¸žä¹˜åƒ§å‹å‡æ‰¿æ˜‡ç¹©è …é™žä¾åŒ™å˜¶å§‹åª¤å°¸å±Žå±å¸‚å¼‘æƒæ–½æ˜¯æ™‚æž¾æŸ´çŒœçŸ¢ç¤ºç¿…è’”è“è¦–è©¦è©©è«¡è±•è±ºåŸ´å¯”å¼æ¯æ‹­æ¤æ®–æ¹œç†„ç¯’è•è­˜è»¾é£Ÿé£¾ä¼¸ä¾ä¿¡å‘»å¨ å®¸æ„¼æ–°æ™¨ç‡¼ç”³ç¥žç´³è…Žè‡£èŽ˜è–ªè—Žèœƒè¨Šèº«è¾›ï¥±è¿…å¤±å®¤å¯¦æ‚‰å¯©å°‹å¿ƒæ²ï¿½".split("");for(a=0;a!=t[227].length;++a)if(t[227][a].charCodeAt(0)!==65533){r[t[227][a]]=58112+a;e[58112+a]=t[227][a]}t[228]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¥²æ·±ç€‹ç”šèŠ¯è«¶ä»€åï¥³é›™æ°äºžä¿„å…’å•žå¨¥å³¨æˆ‘ç‰™èŠ½èŽªè›¾è¡™è¨é˜¿é›…é¤“é´‰éµå Šå²³å¶½å¹„æƒ¡æ„•æ¡æ¨‚æ¸¥é„‚é”é¡Žé°é½·å®‰å²¸æŒ‰æ™æ¡ˆçœ¼é›éžé¡”é®Ÿæ–¡è¬è»‹é–¼å”µå²©å·–åºµæš—ç™Œè´é—‡å£“æŠ¼ç‹Žé´¨ä»°å¤®æ€æ˜»æ®ƒç§§é´¦åŽ“å“€åŸƒå´–æ„›æ›–æ¶¯ç¢è‰¾éš˜é„åŽ„æ‰¼æŽ–æ¶²ç¸Šè…‹é¡ï¿½".split("");for(a=0;a!=t[228].length;++a)if(t[228][a].charCodeAt(0)!==65533){r[t[228][a]]=58368+a;e[58368+a]=t[228][a]}t[229]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ«»ç½Œé¶¯é¸šä¹Ÿå€»å†¶å¤œæƒ¹æ¶æ¤°çˆºè€¶ï¥´é‡Žå¼±ï¥µï¥¶ç´„è‹¥è‘¯è’»è—¥èºï¥·ä½¯ï¥¸ï¥¹å£¤å­ƒæ™æšæ”˜æ•­æš˜ï¥ºæ¥Šæ¨£æ´‹ç€ç…¬ç—’ç˜ç¦³ç©°ï¥»ç¾Šï¥¼è¥„ï¥½è®“é‡€é™½ï¥¾é¤Šåœ„å¾¡æ–¼æ¼ç˜€ç¦¦èªžé¦­é­šé½¬å„„æ†¶æŠ‘æªè‡†åƒå °å½¦ç„‰è¨€è«ºå­¼è˜–ä¿ºå„¼åš´å¥„æŽ©æ·¹å¶ªæ¥­å††äºˆä½™ï¥¿ï¦€ï¦å¦‚ï¦‚ï¿½".split("");for(a=0;a!=t[229].length;++a)if(t[229][a].charCodeAt(0)!==65533){r[t[229][a]]=58624+a;e[58624+a]=t[229][a]}t[230]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¦ƒæ­Ÿæ±ï¦„ç’µç¤–ï¦…èˆ‡è‰…èŒ¹è¼¿è½ï¦†é¤˜ï¦‡ï¦ˆï¦‰äº¦ï¦ŠåŸŸå½¹æ˜“ï¦‹ï¦Œç–«ç¹¹è­¯ï¦é€†é©›åš¥å §å§¸å¨Ÿå®´ï¦Žå»¶ï¦ï¦ææŒ»ï¦‘æ¤½æ²‡æ²¿æ¶Žæ¶“æ·µæ¼”ï¦’çƒŸç„¶ç…™ï¦“ç‡ƒç‡•ï¦”ç¡ç¡¯ï¦•ç­µç·£ï¦–ç¸¯ï¦—è¡è»Ÿï¦˜ï¦™ï¦šé‰›ï¦›é³¶ï¦œï¦ï¦žæ‚…æ¶…ï¦Ÿç†±ï¦ ï¦¡é–±åŽ­ï¦¢ï¦£ï¦¤æŸ“ï¦¥ç‚Žç„°ç°è‰¶è‹’ï¿½".split("");for(a=0;a!=t[230].length;++a)if(t[230][a].charCodeAt(0)!==65533){r[t[230][a]]=58880+a;e[58880+a]=t[230][a]}t[231]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¦¦é–»é«¥é¹½æ›„ï¦§ç‡è‘‰ï¦¨ï¦©å¡‹ï¦ªï¦«å¶¸å½±ï¦¬æ˜ æšŽæ¥¹æ¦®æ°¸æ³³æ¸¶æ½æ¿šç€›ç€¯ç…ç‡Ÿç°ï¦­ç‘›ï¦®ç“”ç›ˆç©Žçº“ï¦¯ï¦°è‹±è© è¿Žï¦±éˆï¦²éœ™ï¦³ï¦´ä¹‚å€ªï¦µåˆˆå¡æ›³æ±­æ¿ŠçŒŠç¿ç©¢èŠ®è—è˜‚ï¦¶è£”è©£è­½è±«ï¦·éŠ³ï¦¸éœ“é äº”ä¼ä¿‰å‚²åˆå¾å³å—šå¡¢å¢ºå¥§å¨›å¯¤æ‚Ÿï¦¹æ‡Šæ•–æ—¿æ™¤æ¢§æ±šæ¾³ï¿½".split("");for(a=0;a!=t[231].length;++a)if(t[231][a].charCodeAt(0)!==65533){r[t[231][a]]=59136+a;e[59136+a]=t[231][a]}t[232]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çƒç†¬ç’ç­½èœˆèª¤é°²é¼‡å±‹æ²ƒç„çŽ‰éˆºæº«ç‘¥ç˜Ÿç©©ç¸•è˜Šå…€å£…æ“ç“®ç”•ç™°ç¿é‚•é›é¥”æ¸¦ç“¦çª©çªªè‡¥è›™è¸è¨›å©‰å®Œå®›æ¢¡æ¤€æµ£çŽ©ç“ç¬ç¢—ç·©ç¿«è„˜è…•èŽžè±Œé˜®é ‘æ›°å¾€æ—ºæž‰æ±ªçŽ‹å€­å¨ƒæ­ªçŸ®å¤–åµ¬å·çŒ¥ç•ï¦ºï¦»åƒ¥å‡¹å ¯å¤­å¦–å§šå¯¥ï¦¼ï¦½å¶¢æ‹—æ–æ’“æ“¾ï¦¾æ›œï¦¿æ©ˆï§€ç‡¿ç‘¤ï§ï¿½".split("");for(a=0;a!=t[232].length;++a)if(t[232][a].charCodeAt(0)!==65533){r[t[232][a]]=59392+a;e[59392+a]=t[232][a]}t[233]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çªˆçª¯ç¹‡ç¹žè€€è…°ï§‚èŸ¯è¦è¬ é™ï§ƒé‚€é¥’æ…¾æ¬²æµ´ç¸Ÿè¤¥è¾±ä¿‘å‚­å†—å‹‡åŸ‡å¢‰å®¹åº¸æ…‚æ¦•æ¶Œæ¹§æº¶ç†”ç‘¢ç”¨ç”¬è³èŒ¸è“‰è¸ŠéŽ”éžï§„äºŽä½‘å¶å„ªåˆå‹å³å®‡å¯“å°¤æ„šæ†‚æ—´ç‰›çŽ—ç‘€ç›‚ç¥ç¦‘ç¦¹ç´†ç¾½èŠ‹è—•è™žè¿‚é‡éƒµé‡ªéš…é›¨é›©å‹–å½§æ—­æ˜±æ ¯ç…œç¨¶éƒé Šäº‘ï§…æ©’æ®žæ¾ç†‰è€˜èŠ¸è•“ï¿½".split("");for(a=0;a!=t[233].length;++a)if(t[233][a].charCodeAt(0)!==65533){r[t[233][a]]=59648+a;e[59648+a]=t[233][a]}t[234]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é‹éš•é›²éŸ»è”šé¬±äºç†Šé›„å…ƒåŽŸå“¡åœ“åœ’åž£åª›å«„å¯ƒæ€¨æ„¿æ´æ²…æ´¹æ¹²æºçˆ°çŒ¿ç‘—è‹‘è¢è½…é ï§†é™¢é¡˜é´›æœˆè¶Šé‰žä½å‰åƒžå±åœå§”å¨å°‰æ…°æšæ¸­çˆ²ç‘‹ç·¯èƒƒèŽè‘¦è”¿èŸè¡›è¤˜è¬‚é•éŸ‹é­ä¹³ä¾‘å„’å…ªï§‡å”¯å–©å­ºå®¥å¹¼å¹½åº¾æ‚ æƒŸæ„ˆæ„‰æ„æ”¸æœ‰ï§ˆæŸ”æŸšï§‰æ¥¡æ¥¢æ²¹æ´§ï§Šæ¸¸ï§‹ï¿½".split("");for(a=0;a!=t[234].length;++a)if(t[234][a].charCodeAt(0)!==65533){r[t[234][a]]=59904+a;e[59904+a]=t[234][a]}t[235]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¿¡çŒ¶çŒ·ï§Œç‘œç”±ï§ç™’ï§Žï§ç¶­è‡¾è¸è£•èª˜è«›è«­è¸°è¹‚éŠé€¾éºé…‰é‡‰é®ï§ï§‘å ‰ï§’æ¯“è‚‰è‚²ï§“ï§”å…å¥«å°¹ï§•ï§–æ½¤çŽ§èƒ¤è´‡ï§—éˆ—é–ï§˜ï§™ï§šï§›è¿æˆŽç€œçµ¨èžï§œåž æ©æ…‡æ®·èª¾éŠ€éš±ä¹™åŸæ·«è”­é™°éŸ³é£®æ–æ³£é‚‘å‡æ‡‰è†ºé·¹ä¾å€šå„€å®œæ„æ‡¿æ“¬æ¤…æ¯…ç–‘çŸ£ç¾©è‰¤è–èŸ»è¡£èª¼ï¿½".split("");for(a=0;a!=t[235].length;++a)if(t[235][a].charCodeAt(0)!==65533){r[t[235][a]]=60160+a;e[60160+a]=t[235][a]}t[236]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è­°é†«äºŒä»¥ä¼Šï§ï§žå¤·å§¨ï§Ÿå·²å¼›å½›æ€¡ï§ ï§¡ï§¢ï§£çˆ¾ç¥ï§¤ç•°ç—ï§¥ç§»ï§¦è€Œè€³è‚„è‹¡è‘ï§§ï§¨è²½è²³é‚‡ï§©ï§ªé£´é¤Œï§«ï§¬ç€·ç›Šç¿Šç¿Œç¿¼è¬šäººä»åˆƒå°ï§­å’½å› å§»å¯…å¼•å¿æ¹®ï§®ï§¯çµªèŒµï§°èš“èªï§±é­é·ï§²ï§³ä¸€ä½šä½¾å£¹æ—¥æº¢é€¸éŽ°é¦¹ä»»å£¬å¦Šå§™æï§´ï§µç¨”ï§¶èè³ƒå…¥å„ï¿½".split("");for(a=0;a!=t[236].length;++a)if(t[236][a].charCodeAt(0)!==65533){r[t[236][a]]=60416+a;e[60416+a]=t[236][a]}t[237]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï§·ï§¸ï§¹ä»å‰©å­•èŠ¿ä»”åˆºå’¨å§‰å§¿å­å­—å­œæ£æ…ˆæ»‹ç‚™ç…®çŽ†ç“·ç–µç£ç´«è€…è‡ªèŒ¨è”—è—‰è«®è³‡é›Œä½œå‹ºåš¼æ–«æ˜¨ç¼ç‚¸çˆµç¶½èŠé…Œé›€éµ²å­±æ£§æ®˜æ½ºç›žå²‘æš«æ½›ç®´ç°ªè ¶é›œä¸ˆä»—åŒ å ´å¢»å£¯å¥¬å°‡å¸³åº„å¼µæŽŒæš²æ–æ¨Ÿæª£æ¬Œæ¼¿ç‰†ï§ºçç’‹ç« ç²§è…¸è‡Ÿè‡§èŽŠè‘¬è”£è–”è—è£è´“é†¬é•·ï¿½".split("");for(a=0;a!=t[237].length;++a)if(t[237][a].charCodeAt(0)!==65533){r[t[237][a]]=60672+a;e[60672+a]=t[237][a]}t[238]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éšœå†å“‰åœ¨å®°æ‰ææ ½æ¢“æ¸½æ»“ç½ç¸¡è£è²¡è¼‰é½‹é½Žçˆ­ç®è«éŒšä½‡ä½Žå„²å’€å§åº•æŠµæµæ¥®æ¨—æ²®æ¸šç‹™çŒªç–½ç®¸ç´µè‹§è¹è‘—è—·è©›è²¯èº‡é€™é‚¸é›Žé½Ÿå‹£åŠå«¡å¯‚æ‘˜æ•µæ»´ç‹„ï§»çš„ç©ç¬›ç±ç¸¾ç¿Ÿè»è¬«è³Šèµ¤è·¡è¹Ÿè¿ªè¿¹é©é‘ä½ƒä½ºå‚³å…¨å…¸å‰å‰ªå¡¡å¡¼å¥ å°ˆå±•å»›æ‚›æˆ°æ “æ®¿æ°ˆæ¾±ï¿½".split("");for(a=0;a!=t[238].length;++a)if(t[238][a].charCodeAt(0)!==65533){r[t[238][a]]=60928+a;e[60928+a]=t[238][a]}t[239]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç…Žç ç”°ç”¸ç•‘ç™²ç­Œç®‹ç®­ç¯†çºè©®è¼¾è½‰éˆ¿éŠ“éŒ¢é«é›»é¡šé¡«é¤žåˆ‡æˆªæŠ˜æµ™ç™¤ç«Šç¯€çµ¶å å²¾åº—æ¼¸ç‚¹ç²˜éœ‘é®Žé»žæŽ¥æ‘ºè¶ä¸äº•äº­åœåµå‘ˆå§ƒå®šå¹€åº­å»·å¾æƒ…æŒºæ”¿æ•´æ—Œæ™¶æ™¸æŸ¾æ¥¨æª‰æ­£æ±€æ·€æ·¨æ¸Ÿæ¹žç€žç‚¡çŽŽç½ç”ºç›ç¢‡ç¦Žç¨‹ç©½ç²¾ç¶Žè‰‡è¨‚è«ªè²žé„­é…Šé‡˜é‰¦é‹ŒéŒ éœ†é–ï¿½".split("");for(a=0;a!=t[239].length;++a)if(t[239][a].charCodeAt(0)!==65533){r[t[239][a]]=61184+a;e[61184+a]=t[239][a]}t[240]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éœé ‚é¼Žåˆ¶åŠ‘å•¼å ¤å¸å¼Ÿæ‚Œææ¢¯æ¿Ÿç¥­ç¬¬è‡è–ºè£½è«¸è¹„é†é™¤éš›éœ½é¡Œé½Šä¿Žå…†å‡‹åŠ©å˜²å¼”å½«æŽªæ“æ—©æ™æ›ºæ›¹æœæ¢æ£—æ§½æ¼•æ½®ç…§ç‡¥çˆªç’ªçœºç¥–ç¥šç§Ÿç¨ çª•ç²—ç³Ÿçµ„ç¹°è‚‡è—»èš¤è©”èª¿è¶™èºé€ é­é‡£é˜»é›•é³¥æ—ç°‡è¶³éƒå­˜å°Šå’æ‹™çŒå€§å®—å¾žæ‚°æ…«æ£•æ·™ç®ç¨®çµ‚ç¶œç¸±è…«ï¿½".split("");for(a=0;a!=t[240].length;++a)if(t[240][a].charCodeAt(0)!==65533){r[t[240][a]]=61440+a;e[61440+a]=t[240][a]}t[241]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¸ªè¸µé¾é˜ä½åå·¦åº§æŒ«ç½ªä¸»ä½ä¾åšå§èƒ„å‘ªå‘¨å—¾å¥å®™å·žå»šæ™æœ±æŸ±æ ªæ³¨æ´²æ¹Šæ¾ç‚·ç ç–‡ç±Œç´‚ç´¬ç¶¢èˆŸè››è¨»èª…èµ°èºŠè¼³é€±é…Žé…’é‘„é§ç«¹ç²¥ä¿Šå„å‡†åŸˆå¯¯å³»æ™™æ¨½æµšæº–æ¿¬ç„Œç•¯ç«£è ¢é€¡éµé›‹é§¿èŒä¸­ä»²è¡†é‡å½æ«›æ¥«æ±è‘ºå¢žæ†Žæ›¾æ‹¯çƒç”‘ç—‡ç¹’è’¸è­‰è´ˆä¹‹åªï¿½".split("");for(a=0;a!=t[241].length;++a)if(t[241][a].charCodeAt(0)!==65533){r[t[241][a]]=61696+a;e[61696+a]=t[241][a]}t[242]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å’«åœ°å€å¿—æŒæŒ‡æ‘¯æ”¯æ—¨æ™ºæžæž³æ­¢æ± æ²šæ¼¬çŸ¥ç ¥ç¥‰ç¥—ç´™è‚¢è„‚è‡³èŠèŠ·èœ˜èªŒï§¼è´„è¶¾é²ç›´ç¨™ç¨·ç¹”è·å”‡å—”å¡µæŒ¯æ¢æ™‰æ™‹æ¡­æ¦›æ®„æ´¥æº±çç‘¨ç’¡ç•›ç–¹ç›¡çœžçž‹ç§¦ç¸‰ç¸è‡»è”¯è¢—è¨ºè³‘è»«è¾°é€²éŽ­é™£é™³éœ‡ä¾„å±å§ªå«‰å¸™æ¡Žç“†ç–¾ç§©çª’è†£è›­è³ªè·Œè¿­æ–Ÿæœ•ï§½åŸ·æ½—ç·è¼¯ï¿½".split("");for(a=0;a!=t[242].length;++a)if(t[242][a].charCodeAt(0)!==65533){r[t[242][a]]=61952+a;e[61952+a]=t[242][a]}t[243]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¶é›†å¾µæ‡²æ¾„ä¸”ä¾˜å€Ÿå‰å—Ÿåµ¯å·®æ¬¡æ­¤ç£‹ç®šï§¾è¹‰è»Šé®æ‰æ¾ç€çª„éŒ¯é‘¿é½ªæ’°æ¾¯ç‡¦ç’¨ç“šç«„ç°’çº‚ç²²çº˜è®šè´Šé‘½é¤é¥Œåˆ¹å¯Ÿæ“¦æœ­ç´®åƒ­åƒå¡¹æ…˜æ…™æ‡ºæ–¬ç«™è®’è®–å€‰å€¡å‰µå”±å¨¼å» å½°æ„´æ•žæ˜Œæ˜¶æš¢æ§æ»„æ¼²çŒ–ç˜¡çª“è„¹è‰™è–è’¼å‚µåŸ°å¯€å¯¨å½©æŽ¡ç ¦ç¶µèœè”¡é‡‡é‡µå†ŠæŸµç­–ï¿½".split("");for(a=0;a!=t[243].length;++a)if(t[243][a].charCodeAt(0)!==65533){r[t[243][a]]=62208+a;e[62208+a]=t[243][a]}t[244]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è²¬å‡„å¦»æ‚½è™•å€œï§¿å‰”å°ºæ…½æˆšæ‹“æ“²æ–¥æ»Œç˜ è„Šè¹ é™Ÿéš»ä»Ÿåƒå–˜å¤©å·æ“…æ³‰æ·ºçŽ”ç©¿èˆ›è–¦è³¤è¸é·é‡§é—¡é˜¡éŸ†å‡¸å“²å–†å¾¹æ’¤æ¾ˆç¶´è¼Ÿè½éµåƒ‰å°–æ²¾æ·»ç”›çž»ç°½ç±¤è©¹è«‚å žå¦¾å¸–æ·ç‰’ç–Šç«è«œè²¼è¼’å»³æ™´æ·¸è½èè«‹é‘é¯–ï¨€å‰ƒæ›¿æ¶•æ»¯ç· è«¦é€®éžé«”åˆå‰¿å“¨æ†”æŠ„æ‹›æ¢¢ï¿½".split("");for(a=0;a!=t[244].length;++a)if(t[244][a].charCodeAt(0)!==65533){r[t[244][a]]=62464+a;e[62464+a]=t[244][a]}t[245]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¤’æ¥šæ¨µç‚’ç„¦ç¡ç¤ç¤Žç§’ç¨è‚–è‰¸è‹•è‰è•‰è²‚è¶…é…¢é†‹é†®ä¿ƒå›‘ç‡­çŸ—èœ€è§¸å¯¸å¿–æ‘é‚¨å¢å¡šå¯µæ‚¤æ†æ‘ ç¸½è°è”¥éŠƒæ’®å‚¬å´”æœ€å¢œæŠ½æŽ¨æ¤Žæ¥¸æ¨žæ¹«çšºç§‹èŠ»è©è«è¶¨è¿½é„’é…‹é†œéŒéŒ˜éŽšé››é¨¶é°ä¸‘ç•œç¥ç«ºç­‘ç¯‰ç¸®è“„è¹™è¹´è»¸é€æ˜¥æ¤¿ç‘ƒå‡ºæœ®é»œå……å¿ æ²–èŸ²è¡è¡·æ‚´è†µèƒï¿½".split("");for(a=0;a!=t[245].length;++a)if(t[245][a].charCodeAt(0)!==65533){r[t[245][a]]=62720+a;e[62720+a]=t[245][a]}t[246]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è´…å–å¹å˜´å¨¶å°±ç‚Šç¿ èšè„†è‡­è¶£é†‰é©Ÿé·²å´ä»„åŽ æƒ»æ¸¬å±¤ä¾ˆå€¤å—¤å³™å¹Ÿæ¥æ¢”æ²»æ·„ç†¾ç—”ç—´ç™¡ç¨šç©‰ç·‡ç·»ç½®è‡´èš©è¼œé›‰é¦³é½’å‰‡å‹…é£­è¦ªä¸ƒæŸ’æ¼†ä¾µå¯¢æž•æ²ˆæµ¸ç›ç §é‡é¼èŸ„ç§¤ç¨±å¿«ä»–å’¤å”¾å¢®å¦¥æƒ°æ‰“æ‹–æœ¶æ¥•èˆµé™€é¦±é§å€¬å“å•„å¼ï¨æ‰˜ï¨‚æ“¢æ™«æŸæ¿æ¿¯ç¢ç¸è¨—ï¿½".split("");for(a=0;a!=t[246].length;++a)if(t[246][a].charCodeAt(0)!==65533){r[t[246][a]]=62976+a;e[62976+a]=t[246][a]}t[247]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¸å‘‘å˜†å¦å½ˆæ†šæ­Žç˜ç‚­ç¶»èª•å¥ªè„«æŽ¢çœˆè€½è²ªå¡”æ­æ¦»å®•å¸‘æ¹¯ï¨ƒè•©å…Œå°å¤ªæ€ æ…‹æ®†æ±°æ³°ç¬žèƒŽè‹”è·†é‚°é¢±ï¨„æ“‡æ¾¤æ’‘æ”„å…ŽååœŸè¨Žæ…Ÿæ¡¶ï¨…ç—›ç­’çµ±é€šå †æ§Œè…¿è¤ªé€€é ¹å¸å¥—å¦¬æŠ•é€é¬ªæ…ç‰¹é—–å¡å©†å·´æŠŠæ’­æ“ºæ·æ³¢æ´¾çˆ¬ç¶ç ´ç½·èŠ­è·›é —åˆ¤å‚æ¿ç‰ˆç“£è²©è¾¦éˆ‘ï¿½".split("");for(a=0;a!=t[247].length;++a)if(t[247][a].charCodeAt(0)!==65533){r[t[247][a]]=63232+a;e[63232+a]=t[247][a]}t[248]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é˜ªå…«å­æŒä½©å”„æ‚–æ•—æ²›æµ¿ç‰Œç‹½ç¨—è¦‡è²å½­æ¾Žçƒ¹è†¨æ„Žä¾¿åæ‰ç‰‡ç¯‡ç·¨ç¿©ééž­é¨™è²¶åªå¹³æž°èè©•å å¬–å¹£å»¢å¼Šæ–ƒè‚ºè”½é–‰é™›ä½ˆåŒ…åŒåŒå’†å“ºåœƒå¸ƒæ€–æŠ›æŠ±æ•ï¨†æ³¡æµ¦ç–±ç ²èƒžè„¯è‹žè‘¡è’²è¢è¤’é€‹é‹ªé£½é®‘å¹…æš´æ›ç€‘çˆ†ï¨‡ä¿µå‰½å½ªæ…“æ“æ¨™æ¼‚ç“¢ç¥¨è¡¨è±¹é£‡é£„é©ƒï¿½".split("");for(a=0;a!=t[248].length;++a)if(t[248][a].charCodeAt(0)!==65533){r[t[248][a]]=63488+a;e[63488+a]=t[248][a]}t[249]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å“ç¨Ÿæ¥“è«·è±Šé¢¨é¦®å½¼æŠ«ç–²çš®è¢«é¿é™‚åŒ¹å¼¼å¿…æ³ŒçŒç•¢ç–‹ç­†è‹¾é¦ä¹é€¼ä¸‹ä½•åŽ¦å¤å»ˆæ˜°æ²³ç‘•è·è¦è³€ééœžé°•å£‘å­¸è™è¬”é¶´å¯’æ¨æ‚æ—±æ±—æ¼¢æ¾£ç€šç½•ç¿°é–‘é–’é™éŸ“å‰²è½„å‡½å«å’¸å•£å–Šæª»æ¶µç·˜è‰¦éŠœé™·é¹¹åˆå“ˆç›’è›¤é–¤é—”é™œäº¢ä¼‰å§®å«¦å··æ’æŠ—æ­æ¡æ²†æ¸¯ç¼¸è‚›èˆªï¿½".split("");for(a=0;a!=t[249].length;++a)if(t[249][a].charCodeAt(0)!==65533){r[t[249][a]]=63744+a;e[63744+a]=t[249][a]}t[250]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¨ˆï¨‰é …äº¥å•å’³åž“å¥šå­©å®³æ‡ˆæ¥·æµ·ç€£èŸ¹è§£è©²è«§é‚‚é§­éª¸åŠ¾æ ¸å€–å¹¸æè‡è¡Œäº«å‘åš®ç¦é„•éŸ¿é¤‰é¥—é¦™å™“å¢Ÿè™›è¨±æ†²æ«¶ç»è»’æ­‡éšªé©—å¥•çˆ€èµ«é©ä¿”å³´å¼¦æ‡¸æ™›æ³«ç‚«çŽ„çŽ¹ç¾çœ©ççµƒçµ¢ç¸£èˆ·è¡’ï¨Šè³¢é‰‰é¡¯å­‘ç©´è¡€é å«Œä¿ å”å¤¾å³½æŒ¾æµ¹ç‹¹è„…è„‡èŽ¢é‹é °äº¨å…„åˆ‘åž‹ï¿½".split("");for(a=0;a!=t[250].length;++a)if(t[250][a].charCodeAt(0)!==65533){r[t[250][a]]=64e3+a;e[64e3+a]=t[250][a]}t[251]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å½¢æ³‚æ»Žç€…çç‚¯ç†’ç©ç‘©èŠèž¢è¡¡é€ˆé‚¢éŽ£é¦¨å…®å½—æƒ æ…§æš³è•™è¹Šé†¯éž‹ä¹Žäº’å‘¼å£•å£ºå¥½å²µå¼§æˆ¶æ‰ˆæ˜Šæ™§æ¯«æµ©æ·æ¹–æ»¸æ¾”æ¿ æ¿©çç‹ç¥ç‘šç“ çš“ç¥œç³Šç¸žèƒ¡èŠ¦è‘«è’¿è™Žè™Ÿè´è­·è±ªéŽ¬é €é¡¥æƒ‘æˆ–é…·å©šæ˜æ··æ¸¾ç¿é­‚å¿½æƒšç¬å“„å¼˜æ±žæ³“æ´ªçƒ˜ç´…è™¹è¨Œé´»åŒ–å’Œå¬…æ¨ºç«ç•µï¿½".split("");for(a=0;a!=t[251].length;++a)if(t[251][a].charCodeAt(0)!==65533){r[t[251][a]]=64256+a;e[64256+a]=t[251][a]}t[252]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¦ç¦¾èŠ±è¯è©±è­è²¨é´ï¨‹æ“´æ”«ç¢ºç¢»ç©«ä¸¸å–šå¥å®¦å¹»æ‚£æ›æ­¡æ™¥æ¡“æ¸™ç…¥ç’°ç´ˆé‚„é©©é°¥æ´»æ»‘çŒ¾è±é—Šå‡°å¹Œå¾¨ææƒ¶æ„°æ…Œæ™ƒæ™„æ¦¥æ³æ¹Ÿæ»‰æ½¢ç…Œç’œçš‡ç¯ç°§è’è—é‘éšé»ƒåŒ¯å›žå»»å¾Šæ¢æ‚”æ‡·æ™¦æœƒæªœæ·®æ¾®ç°çªç¹ªè†¾èŒ´è›”èª¨è³„åŠƒç²å®–æ©«é„å“®åš†å­æ•ˆæ–…æ›‰æ¢Ÿæ¶æ·†ï¿½".split("");for(a=0;a!=t[252].length;++a)if(t[252][a].charCodeAt(0)!==65533){r[t[252][a]]=64512+a;e[64512+a]=t[252][a]}t[253]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çˆ»è‚´é…µé©ä¾¯å€™åŽšåŽå¼å–‰å—…å¸¿å¾Œæœ½ç…¦çé€…å‹›å‹³å¡¤å£Žç„„ç†ç‡»è–°è¨“æšˆè–¨å–§æš„ç…Šè±å‰å–™æ¯å½™å¾½æ®æš‰ç…‡è«±è¼éº¾ä¼‘æºçƒ‹ç•¦è™§æ¤è­Žé·¸å…‡å‡¶åŒˆæ´¶èƒ¸é»‘æ˜•æ¬£ç‚˜ç—•åƒå±¹ç´‡è¨–æ¬ æ¬½æ­†å¸æ°æ´½ç¿•èˆˆåƒ–å‡žå–œå™«å›å§¬å¬‰å¸Œæ†™æ†˜æˆ±æ™žæ›¦ç†™ç†¹ç†ºçŠ§ç¦§ç¨€ç¾²è©°ï¿½".split("");for(a=0;a!=t[253].length;++a)if(t[253][a].charCodeAt(0)!==65533){r[t[253][a]]=64768+a;e[64768+a]=t[253][a]}return{enc:r,dec:e}}();cptable[950]=function(){var e=[],r={},t=[],a;t[0]="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[0].length;++a)if(t[0][a].charCodeAt(0)!==65533){r[t[0][a]]=0+a;e[0+a]=t[0][a]}t[161]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ã€€ï¼Œã€ã€‚ï¼Žâ€§ï¼›ï¼šï¼Ÿï¼ï¸°â€¦â€¥ï¹ï¹‘ï¹’Â·ï¹”ï¹•ï¹–ï¹—ï½œâ€“ï¸±â€”ï¸³â•´ï¸´ï¹ï¼ˆï¼‰ï¸µï¸¶ï½›ï½ï¸·ï¸¸ã€”ã€•ï¸¹ï¸ºã€ã€‘ï¸»ï¸¼ã€Šã€‹ï¸½ï¸¾ã€ˆã€‰ï¸¿ï¹€ã€Œã€ï¹ï¹‚ã€Žã€ï¹ƒï¹„ï¹™ï¹šï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¹›ï¹œï¹ï¹žâ€˜â€™â€œâ€ã€ã€žâ€µâ€²ï¼ƒï¼†ï¼Šâ€»Â§ã€ƒâ—‹â—â–³â–²â—Žâ˜†â˜…â—‡â—†â–¡â– â–½â–¼ãŠ£â„…Â¯ï¿£ï¼¿Ëï¹‰ï¹Šï¹ï¹Žï¹‹ï¹Œï¹Ÿï¹ ï¹¡ï¼‹ï¼Ã—Ã·Â±âˆšï¼œï¼žï¼â‰¦â‰§â‰ âˆžâ‰’â‰¡ï¹¢ï¹£ï¹¤ï¹¥ï¹¦ï½žâˆ©âˆªâŠ¥âˆ âˆŸâŠ¿ã’ã‘âˆ«âˆ®âˆµâˆ´â™€â™‚âŠ•âŠ™â†‘â†“â†â†’â†–â†—â†™â†˜âˆ¥âˆ£ï¼ï¿½".split("");for(a=0;a!=t[161].length;++a)if(t[161][a].charCodeAt(0)!==65533){r[t[161][a]]=41216+a;e[41216+a]=t[161][a]}t[162]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¼¼âˆ•ï¹¨ï¼„ï¿¥ã€’ï¿ ï¿¡ï¼…ï¼ â„ƒâ„‰ï¹©ï¹ªï¹«ã•ãŽœãŽãŽžãŽãŽ¡ãŽŽãŽã„Â°å…™å…›å…žå…å…¡å…£å—§ç“©ç³Žâ–â–‚â–ƒâ–„â–…â–†â–‡â–ˆâ–â–Žâ–â–Œâ–‹â–Šâ–‰â”¼â”´â”¬â”¤â”œâ–”â”€â”‚â–•â”Œâ”â””â”˜â•­ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½â•®â•°â•¯â•â•žâ•ªâ•¡â—¢â—£â—¥â—¤â•±â•²â•³ï¼ï¼‘ï¼’ï¼“ï¼”ï¼•ï¼–ï¼—ï¼˜ï¼™â… â…¡â…¢â…£â…¤â…¥â…¦â…§â…¨â…©ã€¡ã€¢ã€£ã€¤ã€¥ã€¦ã€§ã€¨ã€©åå„å…ï¼¡ï¼¢ï¼£ï¼¤ï¼¥ï¼¦ï¼§ï¼¨ï¼©ï¼ªï¼«ï¼¬ï¼­ï¼®ï¼¯ï¼°ï¼±ï¼²ï¼³ï¼´ï¼µï¼¶ï¼·ï¼¸ï¼¹ï¼ºï½ï½‚ï½ƒï½„ï½…ï½†ï½‡ï½ˆï½‰ï½Šï½‹ï½Œï½ï½Žï½ï½ï½‘ï½’ï½“ï½”ï½•ï½–ï¿½".split("");for(a=0;a!=t[162].length;++a)if(t[162][a].charCodeAt(0)!==65533){r[t[162][a]]=41472+a;e[41472+a]=t[162][a]}t[163]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï½—ï½˜ï½™ï½šÎ‘Î’Î“Î”Î•Î–Î—Î˜Î™ÎšÎ›ÎœÎÎžÎŸÎ Î¡Î£Î¤Î¥Î¦Î§Î¨Î©Î±Î²Î³Î´ÎµÎ¶Î·Î¸Î¹ÎºÎ»Î¼Î½Î¾Î¿Ï€ÏÏƒÏ„Ï…Ï†Ï‡ÏˆÏ‰ã„…ã„†ã„‡ã„ˆã„‰ã„Šã„‹ã„Œã„ã„Žã„ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ã„ã„‘ã„’ã„“ã„”ã„•ã„–ã„—ã„˜ã„™ã„šã„›ã„œã„ã„žã„Ÿã„ ã„¡ã„¢ã„£ã„¤ã„¥ã„¦ã„§ã„¨ã„©Ë™Ë‰ËŠË‡Ë‹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½â‚¬ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[163].length;++a)if(t[163][a].charCodeAt(0)!==65533){r[t[163][a]]=41728+a;e[41728+a]=t[163][a]}t[164]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä¸€ä¹™ä¸ä¸ƒä¹ƒä¹äº†äºŒäººå„¿å…¥å…«å‡ åˆ€åˆåŠ›åŒ•ååœåˆä¸‰ä¸‹ä¸ˆä¸Šä¸«ä¸¸å‡¡ä¹…ä¹ˆä¹Ÿä¹žäºŽäº¡å…€åˆƒå‹ºåƒå‰å£åœŸå£«å¤•å¤§å¥³å­å­‘å­“å¯¸å°å°¢å°¸å±±å·å·¥å·±å·²å·³å·¾å¹²å»¾å¼‹å¼“æ‰ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä¸‘ä¸ä¸ä¸­ä¸°ä¸¹ä¹‹å°¹äºˆäº‘äº•äº’äº”äº¢ä»ä»€ä»ƒä»†ä»‡ä»ä»Šä»‹ä»„å…ƒå…å…§å…­å…®å…¬å†—å‡¶åˆ†åˆ‡åˆˆå‹»å‹¾å‹¿åŒ–åŒ¹åˆå‡å…åžåŽ„å‹åŠåå£¬å¤©å¤«å¤ªå¤­å­”å°‘å°¤å°ºå±¯å·´å¹»å»¿å¼”å¼•å¿ƒæˆˆæˆ¶æ‰‹æ‰Žæ”¯æ–‡æ–—æ–¤æ–¹æ—¥æ›°æœˆæœ¨æ¬ æ­¢æ­¹æ¯‹æ¯”æ¯›æ°æ°´ç«çˆªçˆ¶çˆ»ç‰‡ç‰™ç‰›çŠ¬çŽ‹ä¸™ï¿½".split("");for(a=0;a!=t[164].length;++a)if(t[164][a].charCodeAt(0)!==65533){r[t[164][a]]=41984+a;e[41984+a]=t[164][a]}t[165]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä¸–ä¸•ä¸”ä¸˜ä¸»ä¹ä¹ä¹Žä»¥ä»˜ä»”ä»•ä»–ä»—ä»£ä»¤ä»™ä»žå……å…„å†‰å†Šå†¬å‡¹å‡ºå‡¸åˆŠåŠ åŠŸåŒ…åŒ†åŒ—åŒä»ŸåŠå‰å¡å å¯å®åŽ»å¯å¤å³å¬å®å©å¨å¼å¸åµå«å¦åªå²å±å°å¥å­å»å››å›šå¤–ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¤®å¤±å¥´å¥¶å­•å®ƒå°¼å·¨å·§å·¦å¸‚å¸ƒå¹³å¹¼å¼å¼˜å¼—å¿…æˆŠæ‰“æ‰”æ‰’æ‰‘æ–¥æ—¦æœ®æœ¬æœªæœ«æœ­æ­£æ¯æ°‘æ°æ°¸æ±æ±€æ°¾çŠ¯çŽ„çŽ‰ç“œç“¦ç”˜ç”Ÿç”¨ç”©ç”°ç”±ç”²ç”³ç–‹ç™½çš®çš¿ç›®çŸ›çŸ¢çŸ³ç¤ºç¦¾ç©´ç«‹ä¸žä¸Ÿä¹’ä¹“ä¹©äº™äº¤äº¦äº¥ä»¿ä¼‰ä¼™ä¼Šä¼•ä¼ä¼ä¼‘ä¼ä»²ä»¶ä»»ä»°ä»³ä»½ä¼ä¼‹å…‰å…‡å…†å…ˆå…¨ï¿½".split("");for(a=0;a!=t[165].length;++a)if(t[165][a].charCodeAt(0)!==65533){r[t[165][a]]=42240+a;e[42240+a]=t[165][a]}t[166]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å…±å†å†°åˆ—åˆ‘åˆ’åˆŽåˆ–åŠ£åŒˆåŒ¡åŒ å°å±å‰ååŒåŠååå‹å„å‘ååˆåƒåŽå†å’å› å›žå›åœ³åœ°åœ¨åœ­åœ¬åœ¯åœ©å¤™å¤šå¤·å¤¸å¦„å¥¸å¦ƒå¥½å¥¹å¦‚å¦å­—å­˜å®‡å®ˆå®…å®‰å¯ºå°–å±¹å·žå¸†å¹¶å¹´ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¼å¼›å¿™å¿–æˆŽæˆŒæˆæˆæ‰£æ‰›æ‰˜æ”¶æ—©æ—¨æ—¬æ—­æ›²æ›³æœ‰æœ½æœ´æœ±æœµæ¬¡æ­¤æ­»æ°–æ±æ±—æ±™æ±Ÿæ± æ±æ±•æ±¡æ±›æ±æ±Žç°ç‰Ÿç‰ç™¾ç«¹ç±³ç³¸ç¼¶ç¾Šç¾½è€è€ƒè€Œè€’è€³è¿è‚‰è‚‹è‚Œè‡£è‡ªè‡³è‡¼èˆŒèˆ›èˆŸè‰®è‰²è‰¾è™«è¡€è¡Œè¡£è¥¿é˜¡ä¸²äº¨ä½ä½ä½‡ä½—ä½žä¼´ä½›ä½•ä¼°ä½ä½‘ä¼½ä¼ºä¼¸ä½ƒä½”ä¼¼ä½†ä½£ï¿½".split("");for(a=0;a!=t[166].length;++a)if(t[166][a].charCodeAt(0)!==65533){r[t[166][a]]=42496+a;e[42496+a]=t[166][a]}t[167]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä½œä½ ä¼¯ä½Žä¼¶ä½™ä½ä½ˆä½šå…Œå…‹å…å…µå†¶å†·åˆ¥åˆ¤åˆ©åˆªåˆ¨åŠ«åŠ©åŠªåŠ¬åŒ£å³åµåå­åžå¾å¦å‘Žå§å‘†å‘ƒå³å‘ˆå‘‚å›å©å‘Šå¹å»å¸å®åµå¶å å¼å‘€å±å«åŸå¬å›ªå›°å›¤å›«åŠå‘å€åï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å‡åŽåœ¾åååœ»å£¯å¤¾å¦å¦’å¦¨å¦žå¦£å¦™å¦–å¦å¦¤å¦“å¦Šå¦¥å­å­œå­šå­›å®Œå®‹å®å°¬å±€å±å°¿å°¾å²å²‘å²”å²Œå·«å¸Œåºåº‡åºŠå»·å¼„å¼Ÿå½¤å½¢å½·å½¹å¿˜å¿Œå¿—å¿å¿±å¿«å¿¸å¿ªæˆ’æˆ‘æŠ„æŠ—æŠ–æŠ€æ‰¶æŠ‰æ‰­æŠŠæ‰¼æ‰¾æ‰¹æ‰³æŠ’æ‰¯æŠ˜æ‰®æŠ•æŠ“æŠ‘æŠ†æ”¹æ”»æ”¸æ—±æ›´æŸæŽæææ‘æœæ–æžæ‰æ†æ ï¿½".split("");for(a=0;a!=t[167].length;++a)if(t[167][a].charCodeAt(0)!==65533){r[t[167][a]]=42752+a;e[42752+a]=t[167][a]}t[168]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ“æ—æ­¥æ¯æ±‚æ±žæ²™æ²æ²ˆæ²‰æ²…æ²›æ±ªæ±ºæ²æ±°æ²Œæ±¨æ²–æ²’æ±½æ²ƒæ±²æ±¾æ±´æ²†æ±¶æ²æ²”æ²˜æ²‚ç¶ç¼ç½ç¸ç‰¢ç‰¡ç‰ ç‹„ç‹‚çŽ–ç”¬ç”«ç”·ç”¸çš‚ç›¯çŸ£ç§ç§€ç¦¿ç©¶ç³»ç½•è‚–è‚“è‚è‚˜è‚›è‚šè‚²è‰¯èŠ’ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½èŠ‹èŠè¦‹è§’è¨€è°·è±†è±•è²èµ¤èµ°è¶³èº«è»Šè¾›è¾°è¿‚è¿†è¿…è¿„å·¡é‚‘é‚¢é‚ªé‚¦é‚£é…‰é‡†é‡Œé˜²é˜®é˜±é˜ªé˜¬ä¸¦ä¹–ä¹³äº‹äº›äºžäº«äº¬ä½¯ä¾ä¾ä½³ä½¿ä½¬ä¾›ä¾‹ä¾†ä¾ƒä½°ä½µä¾ˆä½©ä½»ä¾–ä½¾ä¾ä¾‘ä½ºå…”å…’å…•å…©å…·å…¶å…¸å†½å‡½åˆ»åˆ¸åˆ·åˆºåˆ°åˆ®åˆ¶å‰åŠ¾åŠ»å’å”å“å‘å¦å·å¸å¹å–å”å—å‘³å‘µï¿½".split("");for(a=0;a!=t[168].length;++a)if(t[168][a].charCodeAt(0)!==65533){r[t[168][a]]=43008+a;e[43008+a]=t[168][a]}t[169]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å’–å‘¸å’•å’€å‘»å‘·å’„å’’å’†å‘¼å’å‘±å‘¶å’Œå’šå‘¢å‘¨å’‹å‘½å’Žå›ºåžƒå·åªå©å¡å¦å¤å¼å¤œå¥‰å¥‡å¥ˆå¥„å¥”å¦¾å¦»å§”å¦¹å¦®å§‘å§†å§å§å§‹å§“å§Šå¦¯å¦³å§’å§…å­Ÿå­¤å­£å®—å®šå®˜å®œå®™å®›å°šå±ˆå±…ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å±†å²·å²¡å²¸å²©å²«å²±å²³å¸˜å¸šå¸–å¸•å¸›å¸‘å¹¸åºšåº—åºœåº•åº–å»¶å¼¦å¼§å¼©å¾€å¾å½¿å½¼å¿å¿ å¿½å¿µå¿¿æ€æ€”æ€¯æ€µæ€–æ€ªæ€•æ€¡æ€§æ€©æ€«æ€›æˆ–æˆ•æˆ¿æˆ¾æ‰€æ‰¿æ‹‰æ‹Œæ‹„æŠ¿æ‹‚æŠ¹æ‹’æ‹›æŠ«æ‹“æ‹”æ‹‹æ‹ˆæŠ¨æŠ½æŠ¼æ‹æ‹™æ‹‡æ‹æŠµæ‹šæŠ±æ‹˜æ‹–æ‹—æ‹†æŠ¬æ‹Žæ”¾æ–§æ–¼æ—ºæ˜”æ˜“æ˜Œæ˜†æ˜‚æ˜Žæ˜€æ˜æ˜•æ˜Šï¿½".split("");for(a=0;a!=t[169].length;++a)if(t[169][a].charCodeAt(0)!==65533){r[t[169][a]]=43264+a;e[43264+a]=t[169][a]}t[170]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ˜‡æœæœ‹æ­æž‹æž•æ±æžœæ³æ·æž‡æžæž—æ¯æ°æ¿æž‰æ¾æžæµæžšæž“æ¼æªæ²æ¬£æ­¦æ­§æ­¿æ°“æ°›æ³£æ³¨æ³³æ²±æ³Œæ³¥æ²³æ²½æ²¾æ²¼æ³¢æ²«æ³•æ³“æ²¸æ³„æ²¹æ³æ²®æ³—æ³…æ³±æ²¿æ²»æ³¡æ³›æ³Šæ²¬æ³¯æ³œæ³–æ³ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç‚•ç‚Žç‚’ç‚Šç‚™çˆ¬çˆ­çˆ¸ç‰ˆç‰§ç‰©ç‹€ç‹Žç‹™ç‹—ç‹çŽ©çŽ¨çŽŸçŽ«çŽ¥ç”½ç–ç–™ç–šçš„ç›‚ç›²ç›´çŸ¥çŸ½ç¤¾ç¥€ç¥ç§‰ç§ˆç©ºç©¹ç«ºç³¾ç½”ç¾Œç¾‹è€…è‚ºè‚¥è‚¢è‚±è‚¡è‚«è‚©è‚´è‚ªè‚¯è‡¥è‡¾èˆèŠ³èŠèŠ™èŠ­èŠ½èŠŸèŠ¹èŠ±èŠ¬èŠ¥èŠ¯èŠ¸èŠ£èŠ°èŠ¾èŠ·è™Žè™±åˆè¡¨è»‹è¿Žè¿”è¿‘é‚µé‚¸é‚±é‚¶é‡‡é‡‘é•·é–€é˜œé™€é˜¿é˜»é™„ï¿½".split("");for(a=0;a!=t[170].length;++a)if(t[170][a].charCodeAt(0)!==65533){r[t[170][a]]=43520+a;e[43520+a]=t[170][a]}t[171]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é™‚éš¹é›¨é’éžäºŸäº­äº®ä¿¡ä¾µä¾¯ä¾¿ä¿ ä¿‘ä¿ä¿ä¿ƒä¾¶ä¿˜ä¿Ÿä¿Šä¿—ä¾®ä¿ä¿„ä¿‚ä¿šä¿Žä¿žä¾·å…—å†’å†‘å† å‰Žå‰ƒå‰Šå‰å‰Œå‰‹å‰‡å‹‡å‹‰å‹ƒå‹åŒå—å»åŽšå›å’¬å“€å’¨å“Žå“‰å’¸å’¦å’³å“‡å“‚å’½å’ªå“ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å“„å“ˆå’¯å’«å’±å’»å’©å’§å’¿å›¿åž‚åž‹åž åž£åž¢åŸŽåž®åž“å¥•å¥‘å¥å¥Žå¥å§œå§˜å§¿å§£å§¨å¨ƒå§¥å§ªå§šå§¦å¨å§»å­©å®£å®¦å®¤å®¢å®¥å°å±Žå±å±å±‹å³™å³’å··å¸å¸¥å¸Ÿå¹½åº åº¦å»ºå¼ˆå¼­å½¥å¾ˆå¾…å¾Šå¾‹å¾‡å¾Œå¾‰æ€’æ€æ€ æ€¥æ€Žæ€¨ææ°æ¨æ¢æ†æƒæ¬æ«æªæ¤æ‰æ‹œæŒ–æŒ‰æ‹¼æ‹­æŒæ‹®æ‹½æŒ‡æ‹±æ‹·ï¿½".split("");for(a=0;a!=t[171].length;++a)if(t[171][a].charCodeAt(0)!==65533){r[t[171][a]]=43776+a;e[43776+a]=t[171][a]}t[172]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ‹¯æ‹¬æ‹¾æ‹´æŒ‘æŒ‚æ”¿æ•…æ–«æ–½æ—¢æ˜¥æ˜­æ˜ æ˜§æ˜¯æ˜Ÿæ˜¨æ˜±æ˜¤æ›·æŸ¿æŸ“æŸ±æŸ”æŸæŸ¬æž¶æž¯æŸµæŸ©æŸ¯æŸ„æŸ‘æž´æŸšæŸ¥æž¸æŸæŸžæŸ³æž°æŸ™æŸ¢æŸæŸ’æ­ªæ®ƒæ®†æ®µæ¯’æ¯—æ°Ÿæ³‰æ´‹æ´²æ´ªæµæ´¥æ´Œæ´±æ´žæ´—ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ´»æ´½æ´¾æ´¶æ´›æ³µæ´¹æ´§æ´¸æ´©æ´®æ´µæ´Žæ´«ç‚«ç‚ºç‚³ç‚¬ç‚¯ç‚­ç‚¸ç‚®ç‚¤çˆ°ç‰²ç‰¯ç‰´ç‹©ç‹ ç‹¡çŽ·çŠçŽ»çŽ²çç€çŽ³ç”šç”­ç•ç•Œç•Žç•‹ç–«ç–¤ç–¥ç–¢ç–£ç™¸çš†çš‡çšˆç›ˆç›†ç›ƒç›…çœç›¹ç›¸çœ‰çœ‹ç›¾ç›¼çœ‡çŸœç ‚ç ”ç Œç ç¥†ç¥‰ç¥ˆç¥‡ç¦¹ç¦ºç§‘ç§’ç§‹ç©¿çªç«¿ç«½ç±½ç´‚ç´…ç´€ç´‰ç´‡ç´„ç´†ç¼¸ç¾Žç¾¿è€„ï¿½".split("");for(a=0;a!=t[172].length;++a)if(t[172][a].charCodeAt(0)!==65533){r[t[172][a]]=44032+a;e[44032+a]=t[172][a]}t[173]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è€è€è€‘è€¶èƒ–èƒ¥èƒšèƒƒèƒ„èƒŒèƒ¡èƒ›èƒŽèƒžèƒ¤èƒè‡´èˆ¢è‹§èŒƒèŒ…è‹£è‹›è‹¦èŒ„è‹¥èŒ‚èŒ‰è‹’è‹—è‹±èŒè‹œè‹”è‹‘è‹žè‹“è‹Ÿè‹¯èŒ†è™è™¹è™»è™ºè¡è¡«è¦è§”è¨ˆè¨‚è¨ƒè²žè² èµ´èµ³è¶´è»è»Œè¿°è¿¦è¿¢è¿ªè¿¥ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¿­è¿«è¿¤è¿¨éƒŠéƒŽéƒéƒƒé…‹é…Šé‡é–‚é™é™‹é™Œé™é¢é©éŸ‹éŸ­éŸ³é é¢¨é£›é£Ÿé¦–é¦™ä¹˜äº³å€Œå€å€£ä¿¯å€¦å€¥ä¿¸å€©å€–å€†å€¼å€Ÿå€šå€’å€‘ä¿ºå€€å€”å€¨ä¿±å€¡å€‹å€™å€˜ä¿³ä¿®å€­å€ªä¿¾å€«å€‰å…¼å†¤å†¥å†¢å‡å‡Œå‡†å‡‹å‰–å‰œå‰”å‰›å‰åŒªå¿åŽŸåŽåŸå“¨å”å”å”·å“¼å“¥å“²å”†å“ºå””å“©å“­å“¡å”‰å“®å“ªï¿½".split("");for(a=0;a!=t[173].length;++a)if(t[173][a].charCodeAt(0)!==65533){r[t[173][a]]=44288+a;e[44288+a]=t[173][a]}t[174]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å“¦å”§å”‡å“½å”åœƒåœ„åŸ‚åŸ”åŸ‹åŸƒå ‰å¤å¥—å¥˜å¥šå¨‘å¨˜å¨œå¨Ÿå¨›å¨“å§¬å¨ å¨£å¨©å¨¥å¨Œå¨‰å­«å±˜å®°å®³å®¶å®´å®®å®µå®¹å®¸å°„å±‘å±•å±å³­å³½å³»å³ªå³¨å³°å³¶å´å³´å·®å¸­å¸«åº«åº­åº§å¼±å¾’å¾‘å¾æ™ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ£æ¥ææ•æ­æ©æ¯æ‚„æ‚Ÿæ‚šæ‚æ‚”æ‚Œæ‚…æ‚–æ‰‡æ‹³æŒˆæ‹¿æŽæŒ¾æŒ¯æ•æ‚æ†ææ‰æŒºææŒ½æŒªæŒ«æŒ¨ææŒæ•ˆæ•‰æ–™æ—æ—…æ™‚æ™‰æ™æ™ƒæ™’æ™Œæ™…æ™æ›¸æœ”æœ•æœ—æ ¡æ ¸æ¡ˆæ¡†æ¡“æ ¹æ¡‚æ¡”æ ©æ¢³æ —æ¡Œæ¡‘æ ½æŸ´æ¡æ¡€æ ¼æ¡ƒæ ªæ¡…æ “æ ˜æ¡æ®Šæ®‰æ®·æ°£æ°§æ°¨æ°¦æ°¤æ³°æµªæ¶•æ¶ˆæ¶‡æµ¦æµ¸æµ·æµ™æ¶“ï¿½".split("");for(a=0;a!=t[174].length;++a)if(t[174][a].charCodeAt(0)!==65533){r[t[174][a]]=44544+a;e[44544+a]=t[174][a]}t[175]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æµ¬æ¶‰æµ®æµšæµ´æµ©æ¶Œæ¶Šæµ¹æ¶…æµ¥æ¶”çƒŠçƒ˜çƒ¤çƒ™çƒˆçƒçˆ¹ç‰¹ç‹¼ç‹¹ç‹½ç‹¸ç‹·çŽ†ç­ç‰ç®ç çªçžç•”ç•ç•œç•šç•™ç–¾ç—…ç—‡ç–²ç–³ç–½ç–¼ç–¹ç—‚ç–¸çš‹çš°ç›Šç›ç›Žçœ©çœŸçœ çœ¨çŸ©ç °ç §ç ¸ç ç ´ç ·ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç ¥ç ­ç  ç Ÿç ²ç¥•ç¥ç¥ ç¥Ÿç¥–ç¥žç¥ç¥—ç¥šç§¤ç§£ç§§ç§Ÿç§¦ç§©ç§˜çª„çªˆç«™ç¬†ç¬‘ç²‰ç´¡ç´—ç´‹ç´Šç´ ç´¢ç´”ç´ç´•ç´šç´œç´ç´™ç´›ç¼ºç½Ÿç¾”ç¿…ç¿è€†è€˜è€•è€™è€—è€½è€¿èƒ±è„‚èƒ°è„…èƒ­èƒ´è„†èƒ¸èƒ³è„ˆèƒ½è„Šèƒ¼èƒ¯è‡­è‡¬èˆ€èˆèˆªèˆ«èˆ¨èˆ¬èŠ»èŒ«è’è”èŠèŒ¸èè‰èŒµèŒ´èèŒ²èŒ¹èŒ¶èŒ—è€èŒ±èŒ¨èƒï¿½".split("");for(a=0;a!=t[175].length;++a)if(t[175][a].charCodeAt(0)!==65533){r[t[175][a]]=44800+a;e[44800+a]=t[175][a]}t[176]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è™”èšŠèšªèš“èš¤èš©èšŒèš£èšœè¡°è¡·è¢è¢‚è¡½è¡¹è¨˜è¨è¨Žè¨Œè¨•è¨Šè¨—è¨“è¨–è¨è¨‘è±ˆè±ºè±¹è²¡è²¢èµ·èº¬è»’è»”è»è¾±é€é€†è¿·é€€è¿ºè¿´é€ƒè¿½é€…è¿¸é‚•éƒ¡éƒéƒ¢é…’é…é…Œé‡˜é‡é‡—é‡œé‡™é–ƒé™¢é™£é™¡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é™›é™é™¤é™˜é™žéš»é£¢é¦¬éª¨é«˜é¬¥é¬²é¬¼ä¹¾åºå½åœå‡åƒåŒåšå‰å¥å¶åŽå•åµå´å·åå€å¯å­å…œå†•å‡°å‰ªå‰¯å‹’å‹™å‹˜å‹•åŒåŒåŒ™åŒ¿å€åŒ¾åƒæ›¼å•†å•ªå•¦å•„å•žå•¡å•ƒå•Šå”±å•–å•å••å”¯å•¤å”¸å”®å•œå”¬å•£å”³å•å•—åœˆåœ‹åœ‰åŸŸå …å Šå †åŸ åŸ¤åŸºå ‚å µåŸ·åŸ¹å¤ å¥¢å¨¶å©å©‰å©¦å©ªå©€ï¿½".split("");for(a=0;a!=t[176].length;++a)if(t[176][a].charCodeAt(0)!==65533){r[t[176][a]]=45056+a;e[45056+a]=t[176][a]}t[177]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¨¼å©¢å©šå©†å©Šå­°å¯‡å¯…å¯„å¯‚å®¿å¯†å°‰å°ˆå°‡å± å±œå±å´‡å´†å´Žå´›å´–å´¢å´‘å´©å´”å´™å´¤å´§å´—å·¢å¸¸å¸¶å¸³å¸·åº·åº¸åº¶åºµåº¾å¼µå¼·å½—å½¬å½©å½«å¾—å¾™å¾žå¾˜å¾¡å¾ å¾œæ¿æ‚£æ‚‰æ‚ æ‚¨æƒ‹æ‚´æƒ¦æ‚½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æƒ…æ‚»æ‚µæƒœæ‚¼æƒ˜æƒ•æƒ†æƒŸæ‚¸æƒšæƒ‡æˆšæˆ›æ‰ˆæŽ æŽ§æ²æŽ–æŽ¢æŽ¥æ·æ§æŽ˜æŽªæ±æŽ©æŽ‰æŽƒæŽ›æ«æŽ¨æŽ„æŽˆæŽ™æŽ¡æŽ¬æŽ’æŽæŽ€æ»æ©æ¨æºæ•æ•–æ•‘æ•™æ•—å•Ÿæ•æ•˜æ••æ•”æ–œæ–›æ–¬æ—æ—‹æ—Œæ—Žæ™æ™šæ™¤æ™¨æ™¦æ™žæ›¹å‹—æœ›æ¢æ¢¯æ¢¢æ¢“æ¢µæ¡¿æ¡¶æ¢±æ¢§æ¢—æ¢°æ¢ƒæ£„æ¢­æ¢†æ¢…æ¢”æ¢æ¢¨æ¢Ÿæ¢¡æ¢‚æ¬²æ®ºï¿½".split("");for(a=0;a!=t[177].length;++a)if(t[177][a].charCodeAt(0)!==65533){r[t[177][a]]=45312+a;e[45312+a]=t[177][a]}t[178]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¯«æ¯¬æ°«æ¶Žæ¶¼æ·³æ·™æ¶²æ·¡æ·Œæ·¤æ·»æ·ºæ¸…æ·‡æ·‹æ¶¯æ·‘æ¶®æ·žæ·¹æ¶¸æ··æ·µæ·…æ·’æ¸šæ¶µæ·šæ·«æ·˜æ·ªæ·±æ·®æ·¨æ·†æ·„æ¶ªæ·¬æ¶¿æ·¦çƒ¹ç„‰ç„Šçƒ½çƒ¯çˆ½ç‰½çŠçŒœçŒ›çŒ–çŒ“çŒ™çŽ‡ç…çŠçƒç†ç¾çç“ ç“¶ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç“·ç”œç”¢ç•¥ç•¦ç•¢ç•°ç–ç—”ç—•ç–µç—Šç—çšŽç›”ç›’ç››çœ·çœ¾çœ¼çœ¶çœ¸çœºç¡«ç¡ƒç¡Žç¥¥ç¥¨ç¥­ç§»çª’çª•ç¬ ç¬¨ç¬›ç¬¬ç¬¦ç¬™ç¬žç¬®ç²’ç²—ç²•çµ†çµƒçµ±ç´®ç´¹ç´¼çµ€ç´°ç´³çµ„ç´¯çµ‚ç´²ç´±ç¼½ç¾žç¾šç¿Œç¿Žç¿’è€œèŠè†è„¯è„–è„£è„«è„©è„°è„¤èˆ‚èˆµèˆ·èˆ¶èˆ¹èŽŽèŽžèŽ˜è¸èŽ¢èŽ–èŽ½èŽ«èŽ’èŽŠèŽ“èŽ‰èŽ è·è»è¼ï¿½".split("");for(a=0;a!=t[178].length;++a)if(t[178][a].charCodeAt(0)!==65533){r[t[178][a]]=45568+a;e[45568+a]=t[178][a]}t[179]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½èŽ†èŽ§è™•å½ªè›‡è›€èš¶è›„èšµè›†è›‹èš±èš¯è›‰è¡“è¢žè¢ˆè¢«è¢’è¢–è¢è¢‹è¦“è¦è¨ªè¨è¨£è¨¥è¨±è¨­è¨Ÿè¨›è¨¢è±‰è±šè²©è²¬è²«è²¨è²ªè²§èµ§èµ¦è¶¾è¶ºè»›è»Ÿé€™é€é€šé€—é€£é€Ÿé€é€é€•é€žé€ é€é€¢é€–é€›é€”ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éƒ¨éƒ­éƒ½é…—é‡Žé‡µé‡¦é‡£é‡§é‡­é‡©é–‰é™ªé™µé™³é™¸é™°é™´é™¶é™·é™¬é›€é›ªé›©ç« ç«Ÿé ‚é ƒé­šé³¥é¹µé¹¿éº¥éº»å‚¢å‚å‚…å‚™å‚‘å‚€å‚–å‚˜å‚šæœ€å‡±å‰²å‰´å‰µå‰©å‹žå‹å‹›åšåŽ¥å•»å–€å–§å•¼å–Šå–å–˜å–‚å–œå–ªå–”å–‡å–‹å–ƒå–³å–®å–Ÿå”¾å–²å–šå–»å–¬å–±å•¾å–‰å–«å–™åœå ¯å ªå ´å ¤å °å ±å ¡å å  å£¹å£ºå¥ ï¿½".split("");for(a=0;a!=t[179].length;++a)if(t[179][a].charCodeAt(0)!==65533){r[t[179][a]]=45824+a;e[45824+a]=t[179][a]}t[180]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å©·åªšå©¿åª’åª›åª§å­³å­±å¯’å¯Œå¯“å¯å°Šå°‹å°±åµŒåµå´´åµ‡å·½å¹…å¸½å¹€å¹ƒå¹¾å»Šå»å»‚å»„å¼¼å½­å¾©å¾ªå¾¨æƒ‘æƒ¡æ‚²æ‚¶æƒ æ„œæ„£æƒºæ„•æƒ°æƒ»æƒ´æ…¨æƒ±æ„Žæƒ¶æ„‰æ„€æ„’æˆŸæ‰‰æŽ£æŽŒææ€æ©æ‰æ†æï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ’æ£ææ¡æ–æ­æ®æ¶æ´æªæ›æ‘’æšæ¹æ•žæ•¦æ•¢æ•£æ–‘æ–æ–¯æ™®æ™°æ™´æ™¶æ™¯æš‘æ™ºæ™¾æ™·æ›¾æ›¿æœŸæœæ£ºæ£•æ£ æ£˜æ£—æ¤…æ£Ÿæ£µæ£®æ£§æ£¹æ£’æ£²æ££æ£‹æ£æ¤æ¤’æ¤Žæ£‰æ£šæ¥®æ£»æ¬¾æ¬ºæ¬½æ®˜æ®–æ®¼æ¯¯æ°®æ°¯æ°¬æ¸¯æ¸¸æ¹”æ¸¡æ¸²æ¹§æ¹Šæ¸ æ¸¥æ¸£æ¸›æ¹›æ¹˜æ¸¤æ¹–æ¹®æ¸­æ¸¦æ¹¯æ¸´æ¹æ¸ºæ¸¬æ¹ƒæ¸æ¸¾æ»‹ï¿½".split("");for(a=0;a!=t[180].length;++a)if(t[180][a].charCodeAt(0)!==65533){r[t[180][a]]=46080+a;e[46080+a]=t[180][a]}t[181]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æº‰æ¸™æ¹Žæ¹£æ¹„æ¹²æ¹©æ¹Ÿç„™ç„šç„¦ç„°ç„¡ç„¶ç…®ç„œç‰ŒçŠ„çŠ€çŒ¶çŒ¥çŒ´çŒ©çºçªç³ç¢ç¥çµç¶ç´ç¯ç›ç¦ç¨ç”¥ç”¦ç•«ç•ªç—¢ç—›ç—£ç—™ç—˜ç—žç— ç™»ç™¼çš–çš“çš´ç›œççŸ­ç¡ç¡¬ç¡¯ç¨ç¨ˆç¨‹ç¨…ç¨€çª˜ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çª—çª–ç«¥ç«£ç­‰ç­–ç­†ç­ç­’ç­”ç­ç­‹ç­ç­‘ç²Ÿç²¥çµžçµçµ¨çµ•ç´«çµ®çµ²çµ¡çµ¦çµ¢çµ°çµ³å–„ç¿”ç¿•è€‹è’è‚…è…•è…”è…‹è…‘è…Žè„¹è…†è„¾è…Œè…“è…´èˆ’èˆœè©èƒè¸èè è…è‹èè¯è±è´è‘—èŠè°èŒèŒè½è²èŠè¸èŽè„èœè‡è”èŸè™›è›Ÿè›™è›­è›”è››è›¤è›è›žè¡—è£è£‚è¢±è¦ƒè¦–è¨»è© è©•è©žè¨¼è©ï¿½".split("");for(a=0;a!=t[181].length;++a)if(t[181][a].charCodeAt(0)!==65533){r[t[181][a]]=46336+a;e[46336+a]=t[181][a]}t[182]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è©”è©›è©è©†è¨´è¨ºè¨¶è©–è±¡è²‚è²¯è²¼è²³è²½è³è²»è³€è²´è²·è²¶è²¿è²¸è¶Šè¶…è¶è·Žè·è·‹è·šè·‘è·Œè·›è·†è»»è»¸è»¼è¾œé€®é€µé€±é€¸é€²é€¶é„‚éƒµé„‰éƒ¾é…£é…¥é‡éˆ”éˆ•éˆ£éˆ‰éˆžéˆéˆéˆ‡éˆ‘é–”é–é–‹é–‘ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é–“é–’é–ŽéšŠéšŽéš‹é™½éš…éš†éšé™²éš„é›é›…é›„é›†é›‡é›¯é›²éŸŒé …é †é ˆé£§é£ªé£¯é£©é£²é£­é¦®é¦­é»ƒé»é»‘äº‚å‚­å‚µå‚²å‚³åƒ…å‚¾å‚¬å‚·å‚»å‚¯åƒ‡å‰¿å‰·å‰½å‹Ÿå‹¦å‹¤å‹¢å‹£åŒ¯å—Ÿå—¨å—“å—¦å—Žå—œå—‡å—‘å—£å—¤å—¯å—šå—¡å—…å—†å—¥å—‰åœ’åœ“å¡žå¡‘å¡˜å¡—å¡šå¡”å¡«å¡Œå¡­å¡Šå¡¢å¡’å¡‹å¥§å«å«‰å«Œåª¾åª½åª¼ï¿½".split("");for(a=0;a!=t[182].length;++a)if(t[182][a].charCodeAt(0)!==65533){r[t[182][a]]=46592+a;e[46592+a]=t[182][a]}t[183]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åª³å«‚åª²åµ©åµ¯å¹Œå¹¹å»‰å»ˆå¼’å½™å¾¬å¾®æ„šæ„æ…ˆæ„Ÿæƒ³æ„›æƒ¹æ„æ„ˆæ…Žæ…Œæ…„æ…æ„¾æ„´æ„§æ„æ„†æ„·æˆ¡æˆ¢æ“æ¾æžæªæ­æ½æ¬ææœæ”ææ¶æ–æ—æ†æ•¬æ–Ÿæ–°æš—æš‰æš‡æšˆæš–æš„æš˜æšæœƒæ¦”æ¥­ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¥šæ¥·æ¥ æ¥”æ¥µæ¤°æ¦‚æ¥Šæ¥¨æ¥«æ¥žæ¥“æ¥¹æ¦†æ¥æ¥£æ¥›æ­‡æ­²æ¯€æ®¿æ¯“æ¯½æº¢æº¯æ»“æº¶æ»‚æºæºæ»‡æ»…æº¥æº˜æº¼æººæº«æ»‘æº–æºœæ»„æ»”æºªæº§æº´ç…Žç…™ç…©ç…¤ç…‰ç…§ç…œç…¬ç…¦ç…Œç…¥ç…žç…†ç…¨ç…–çˆºç‰’çŒ·ç…çŒ¿çŒ¾ç‘¯ç‘šç‘•ç‘Ÿç‘žç‘ç¿ç‘™ç‘›ç‘œç•¶ç•¸ç˜€ç—°ç˜ç—²ç—±ç—ºç—¿ç—´ç—³ç›žç›Ÿç›ç«ç¦çžç£ï¿½".split("");for(a=0;a!=t[183].length;++a)if(t[183][a].charCodeAt(0)!==65533){r[t[183][a]]=46848+a;e[46848+a]=t[183][a]}t[184]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¹çªç¬çœç¥ç¨ç¢çŸ®ç¢Žç¢°ç¢—ç¢˜ç¢Œç¢‰ç¡¼ç¢‘ç¢“ç¡¿ç¥ºç¥¿ç¦è¬ç¦½ç¨œç¨šç¨ ç¨”ç¨Ÿç¨žçªŸçª ç­·ç¯€ç­ ç­®ç­§ç²±ç²³ç²µç¶“çµ¹ç¶‘ç¶ç¶çµ›ç½®ç½©ç½ªç½²ç¾©ç¾¨ç¾¤è–è˜è‚†è‚„è…±è…°è…¸è…¥è…®è…³è…«ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è…¹è…ºè…¦èˆ…è‰‡è’‚è‘·è½è±è‘µè‘¦è‘«è‘‰è‘¬è‘›è¼èµè‘¡è‘£è‘©è‘­è‘†è™žè™œè™Ÿè›¹èœ“èœˆèœ‡èœ€è›¾è›»èœ‚èœƒèœ†èœŠè¡™è£Ÿè£”è£™è£œè£˜è£è£¡è£Šè£•è£’è¦œè§£è©«è©²è©³è©¦è©©è©°èª‡è©¼è©£èª è©±èª…è©­è©¢è©®è©¬è©¹è©»è¨¾è©¨è±¢è²Šè²‰è³Šè³‡è³ˆè³„è²²è³ƒè³‚è³…è·¡è·Ÿè·¨è·¯è·³è·ºè·ªè·¤è·¦èº²è¼ƒè¼‰è»¾è¼Šï¿½".split("");
for(a=0;a!=t[184].length;++a)if(t[184][a].charCodeAt(0)!==65533){r[t[184][a]]=47104+a;e[47104+a]=t[184][a]}t[185]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¾Ÿè¾²é‹éŠé“é‚é”é€¼é•éé‡ééŽéé‘é€¾éé„’é„—é…¬é…ªé…©é‡‰éˆ·é‰—éˆ¸éˆ½é‰€éˆ¾é‰›é‰‹é‰¤é‰‘éˆ´é‰‰é‰é‰…éˆ¹éˆ¿é‰šé–˜éš˜éš”éš•é›é›‹é›‰é›Šé›·é›»é›¹é›¶é–é´é¶é é ‘é “é Šé ’é Œé£¼é£´ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é£½é£¾é¦³é¦±é¦´é«¡é³©éº‚é¼Žé¼“é¼ åƒ§åƒ®åƒ¥åƒ–åƒ­åƒšåƒ•åƒåƒ‘åƒ±åƒŽåƒ©å…¢å‡³åŠƒåŠ‚åŒ±åŽ­å—¾å˜€å˜›å˜—å—½å˜”å˜†å˜‰å˜å˜Žå—·å˜–å˜Ÿå˜ˆå˜å—¶åœ˜åœ–å¡µå¡¾å¢ƒå¢“å¢Šå¡¹å¢…å¡½å£½å¤¥å¤¢å¤¤å¥ªå¥©å«¡å«¦å«©å«—å«–å«˜å«£å­µå¯žå¯§å¯¡å¯¥å¯¦å¯¨å¯¢å¯¤å¯Ÿå°å±¢å¶„å¶‡å¹›å¹£å¹•å¹—å¹”å»“å»–å¼Šå½†å½°å¾¹æ…‡ï¿½".split("");for(a=0;a!=t[185].length;++a)if(t[185][a].charCodeAt(0)!==65533){r[t[185][a]]=47360+a;e[47360+a]=t[185][a]}t[186]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ„¿æ…‹æ…·æ…¢æ…£æ…Ÿæ…šæ…˜æ…µæˆªæ’‡æ‘˜æ‘”æ’¤æ‘¸æ‘Ÿæ‘ºæ‘‘æ‘§æ´æ‘­æ‘»æ•²æ–¡æ——æ—–æš¢æš¨æšæ¦œæ¦¨æ¦•æ§æ¦®æ§“æ§‹æ¦›æ¦·æ¦»æ¦«æ¦´æ§æ§æ¦­æ§Œæ¦¦æ§ƒæ¦£æ­‰æ­Œæ°³æ¼³æ¼”æ»¾æ¼“æ»´æ¼©æ¼¾æ¼ æ¼¬æ¼æ¼‚æ¼¢ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ»¿æ»¯æ¼†æ¼±æ¼¸æ¼²æ¼£æ¼•æ¼«æ¼¯æ¾ˆæ¼ªæ»¬æ¼æ»²æ»Œæ»·ç†”ç†™ç…½ç†Šç†„ç†’çˆ¾çŠ’çŠ–ç„çç‘¤ç‘£ç‘ªç‘°ç‘­ç”„ç–‘ç˜§ç˜ç˜‹ç˜‰ç˜“ç›¡ç›£çž„ç½ç¿ç¡ç£ç¢Ÿç¢§ç¢³ç¢©ç¢£ç¦Žç¦ç¦ç¨®ç¨±çªªçª©ç«­ç«¯ç®¡ç®•ç®‹ç­µç®—ç®ç®”ç®ç®¸ç®‡ç®„ç²¹ç²½ç²¾ç¶»ç¶°ç¶œç¶½ç¶¾ç¶ ç·Šç¶´ç¶²ç¶±ç¶ºç¶¢ç¶¿ç¶µç¶¸ç¶­ç·’ç·‡ç¶¬ï¿½".split("");for(a=0;a!=t[186].length;++a)if(t[186][a].charCodeAt(0)!==65533){r[t[186][a]]=47616+a;e[47616+a]=t[186][a]}t[187]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç½°ç¿ ç¿¡ç¿Ÿèžèšè‚‡è…è†€è†è†ˆè†Šè…¿è†‚è‡§è‡ºèˆ‡èˆ”èˆžè‰‹è“‰è’¿è“†è“„è’™è’žè’²è’œè“‹è’¸è“€è““è’è’¼è“‘è“Šèœ¿èœœèœ»èœ¢èœ¥èœ´èœ˜è•èœ·èœ©è£³è¤‚è£´è£¹è£¸è£½è£¨è¤šè£¯èª¦èªŒèªžèª£èªèª¡èª“èª¤ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½èªªèª¥èª¨èª˜èª‘èªšèª§è±ªè²è²Œè³“è³‘è³’èµ«è¶™è¶•è·¼è¼”è¼’è¼•è¼“è¾£é é˜éœé£é™éžé¢éé›é„™é„˜é„žé…µé…¸é…·é…´é‰¸éŠ€éŠ…éŠ˜éŠ–é‰»éŠ“éŠœéŠ¨é‰¼éŠ‘é–¡é–¨é–©é–£é–¥é–¤éš™éšœéš›é›Œé›’éœ€é¼éž…éŸ¶é —é ˜é¢¯é¢±é¤ƒé¤…é¤Œé¤‰é§éª¯éª°é«¦é­é­‚é³´é³¶é³³éº¼é¼»é½Šå„„å„€åƒ»åƒµåƒ¹å„‚å„ˆå„‰å„…å‡œï¿½".split("");for(a=0;a!=t[187].length;++a)if(t[187][a].charCodeAt(0)!==65533){r[t[187][a]]=47872+a;e[47872+a]=t[187][a]}t[188]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åŠ‡åŠˆåŠ‰åŠåŠŠå‹°åŽ²å˜®å˜»å˜¹å˜²å˜¿å˜´å˜©å™“å™Žå™—å™´å˜¶å˜¯å˜°å¢€å¢Ÿå¢žå¢³å¢œå¢®å¢©å¢¦å¥­å¬‰å«»å¬‹å«µå¬Œå¬ˆå¯®å¯¬å¯©å¯«å±¤å±¥å¶å¶”å¹¢å¹Ÿå¹¡å»¢å»šå»Ÿå»å»£å» å½ˆå½±å¾·å¾µæ…¶æ…§æ…®æ…æ…•æ†‚ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ…¼æ…°æ…«æ…¾æ†§æ†æ†«æ†Žæ†¬æ†šæ†¤æ†”æ†®æˆ®æ‘©æ‘¯æ‘¹æ’žæ’²æ’ˆæ’æ’°æ’¥æ’“æ’•æ’©æ’’æ’®æ’­æ’«æ’šæ’¬æ’™æ’¢æ’³æ•µæ•·æ•¸æš®æš«æš´æš±æ¨£æ¨Ÿæ§¨æ¨æ¨žæ¨™æ§½æ¨¡æ¨“æ¨Šæ§³æ¨‚æ¨…æ§­æ¨‘æ­æ­Žæ®¤æ¯…æ¯†æ¼¿æ½¼æ¾„æ½‘æ½¦æ½”æ¾†æ½­æ½›æ½¸æ½®æ¾Žæ½ºæ½°æ½¤æ¾—æ½˜æ»•æ½¯æ½ æ½Ÿç†Ÿç†¬ç†±ç†¨ç‰–çŠ›çŽç—ç‘©ç’‹ç’ƒï¿½".split("");for(a=0;a!=t[188].length;++a)if(t[188][a].charCodeAt(0)!==65533){r[t[188][a]]=48128+a;e[48128+a]=t[188][a]}t[189]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç‘¾ç’€ç•¿ç˜ ç˜©ç˜Ÿç˜¤ç˜¦ç˜¡ç˜¢çššçšºç›¤çžŽçž‡çžŒçž‘çž‹ç£‹ç£…ç¢ºç£Šç¢¾ç£•ç¢¼ç£ç¨¿ç¨¼ç©€ç¨½ç¨·ç¨»çª¯çª®ç®­ç®±ç¯„ç®´ç¯†ç¯‡ç¯ç® ç¯Œç³Šç· ç·´ç·¯ç·»ç·˜ç·¬ç·ç·¨ç·£ç·šç·žç·©ç¶žç·™ç·²ç·¹ç½µç½·ç¾¯ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¿©è€¦è†›è†œè†è† è†šè†˜è”—è”½è”šè“®è”¬è”­è”“è”‘è”£è”¡è””è“¬è”¥è“¿è”†èž‚è´è¶è è¦è¸è¨è™è—èŒè“è¡›è¡è¤è¤‡è¤’è¤“è¤•è¤Šèª¼è«’è«‡è«„èª•è«‹è«¸èª²è«‰è«‚èª¿èª°è«–è«èª¶èª¹è«›è±Œè±Žè±¬è³ è³žè³¦è³¤è³¬è³­è³¢è³£è³œè³ªè³¡èµ­è¶Ÿè¶£è¸«è¸è¸è¸¢è¸è¸©è¸Ÿè¸¡è¸žèººè¼è¼›è¼Ÿè¼©è¼¦è¼ªè¼œè¼žï¿½".split("");for(a=0;a!=t[189].length;++a)if(t[189][a].charCodeAt(0)!==65533){r[t[189][a]]=48384+a;e[48384+a]=t[189][a]}t[190]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¼¥é©é®é¨é­é·é„°é„­é„§é„±é†‡é†‰é†‹é†ƒé‹…éŠ»éŠ·é‹ªéŠ¬é‹¤é‹éŠ³éŠ¼é‹’é‹‡é‹°éŠ²é–­é–±éœ„éœ†éœ‡éœ‰é éžéž‹éžé ¡é «é œé¢³é¤Šé¤“é¤’é¤˜é§é§é§Ÿé§›é§‘é§•é§’é§™éª·é«®é«¯é¬§é­…é­„é­·é­¯é´†é´‰ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é´ƒéº©éº¾é»Žå¢¨é½’å„’å„˜å„”å„å„•å†€å†ªå‡åŠ‘åŠ“å‹³å™™å™«å™¹å™©å™¤å™¸å™ªå™¨å™¥å™±å™¯å™¬å™¢å™¶å£å¢¾å£‡å£…å¥®å¬å¬´å­¸å¯°å°Žå½Šæ†²æ†‘æ†©æ†Šæ‡æ†¶æ†¾æ‡Šæ‡ˆæˆ°æ“…æ“æ“‹æ’»æ’¼æ“šæ“„æ“‡æ“‚æ“æ’¿æ“’æ“”æ’¾æ•´æ›†æ›‰æš¹æ›„æ›‡æš¸æ¨½æ¨¸æ¨ºæ©™æ©«æ©˜æ¨¹æ©„æ©¢æ©¡æ©‹æ©‡æ¨µæ©Ÿæ©ˆæ­™æ­·æ°…æ¿‚æ¾±æ¾¡ï¿½".split("");for(a=0;a!=t[190].length;++a)if(t[190][a].charCodeAt(0)!==65533){r[t[190][a]]=48640+a;e[48640+a]=t[190][a]}t[191]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¿ƒæ¾¤æ¿æ¾§æ¾³æ¿€æ¾¹æ¾¶æ¾¦æ¾ æ¾´ç†¾ç‡‰ç‡ç‡’ç‡ˆç‡•ç†¹ç‡Žç‡™ç‡œç‡ƒç‡„ç¨ç’œç’£ç’˜ç’Ÿç’žç“¢ç”Œç”ç˜´ç˜¸ç˜ºç›§ç›¥çž çžžçžŸçž¥ç£¨ç£šç£¬ç£§ç¦¦ç©ç©Žç©†ç©Œç©‹çªºç¯™ç°‘ç¯‰ç¯¤ç¯›ç¯¡ç¯©ç¯¦ç³•ç³–ç¸Šï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¸‘ç¸ˆç¸›ç¸£ç¸žç¸ç¸‰ç¸ç½¹ç¾²ç¿°ç¿±ç¿®è€¨è†³è†©è†¨è‡»èˆˆè‰˜è‰™è•Šè•™è•ˆè•¨è•©è•ƒè•‰è•­è•ªè•žèžƒèžŸèžžèž¢èžè¡¡è¤ªè¤²è¤¥è¤«è¤¡è¦ªè¦¦è«¦è«ºè««è«±è¬€è«œè«§è«®è«¾è¬è¬‚è«·è«­è«³è«¶è«¼è±«è±­è²“è³´è¹„è¸±è¸´è¹‚è¸¹è¸µè¼»è¼¯è¼¸è¼³è¾¨è¾¦éµé´é¸é²é¼éºé„´é†’éŒ éŒ¶é‹¸éŒ³éŒ¯éŒ¢é‹¼éŒ«éŒ„éŒšï¿½".split("");for(a=0;a!=t[191].length;++a)if(t[191][a].charCodeAt(0)!==65533){r[t[191][a]]=48896+a;e[48896+a]=t[191][a]}t[192]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éŒéŒ¦éŒ¡éŒ•éŒ®éŒ™é–»éš§éš¨éšªé›•éœŽéœ‘éœ–éœéœ“éœé›éœé¦éž˜é °é ¸é »é ·é ­é ¹é ¤é¤é¤¨é¤žé¤›é¤¡é¤šé§­é§¢é§±éª¸éª¼é«»é«­é¬¨é®‘é´•é´£é´¦é´¨é´’é´›é»˜é»”é¾é¾œå„ªå„Ÿå„¡å„²å‹µåšŽåš€åšåš…åš‡ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åšå£•å£“å£‘å£Žå¬°å¬ªå¬¤å­ºå°·å±¨å¶¼å¶ºå¶½å¶¸å¹«å½Œå¾½æ‡‰æ‡‚æ‡‡æ‡¦æ‡‹æˆ²æˆ´æ“Žæ“Šæ“˜æ“ æ“°æ“¦æ“¬æ“±æ“¢æ“­æ–‚æ–ƒæ›™æ›–æª€æª”æª„æª¢æªœæ«›æª£æ©¾æª—æªæª æ­œæ®®æ¯šæ°ˆæ¿˜æ¿±æ¿Ÿæ¿ æ¿›æ¿¤æ¿«æ¿¯æ¾€æ¿¬æ¿¡æ¿©æ¿•æ¿®æ¿°ç‡§ç‡Ÿç‡®ç‡¦ç‡¥ç‡­ç‡¬ç‡´ç‡ çˆµç‰†ç°ç²ç’©ç’°ç’¦ç’¨ç™†ç™‚ç™Œç›ªçž³çžªçž°çž¬ï¿½".split("");for(a=0;a!=t[192].length;++a)if(t[192][a].charCodeAt(0)!==65533){r[t[192][a]]=49152+a;e[49152+a]=t[192][a]}t[193]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çž§çž­çŸ¯ç£·ç£ºç£´ç£¯ç¤ç¦§ç¦ªç©—çª¿ç°‡ç°ç¯¾ç¯·ç°Œç¯ ç³ ç³œç³žç³¢ç³Ÿç³™ç³ç¸®ç¸¾ç¹†ç¸·ç¸²ç¹ƒç¸«ç¸½ç¸±ç¹…ç¹ç¸´ç¸¹ç¹ˆç¸µç¸¿ç¸¯ç½„ç¿³ç¿¼è±è²è°è¯è³è‡†è‡ƒè†ºè‡‚è‡€è†¿è†½è‡‰è†¾è‡¨èˆ‰è‰±è–ªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è–„è•¾è–œè–‘è–”è–¯è–›è–‡è–¨è–Šè™§èŸ€èŸ‘èž³èŸ’èŸ†èž«èž»èžºèŸˆèŸ‹è¤»è¤¶è¥„è¤¸è¤½è¦¬è¬Žè¬—è¬™è¬›è¬Šè¬ è¬è¬„è¬è±è°¿è±³è³ºè³½è³¼è³¸è³»è¶¨è¹‰è¹‹è¹ˆè¹Šè½„è¼¾è½‚è½…è¼¿é¿é½é‚„é‚é‚‚é‚€é„¹é†£é†žé†œééŽ‚éŒ¨éµéŠé¥é‹éŒ˜é¾é¬é›é°éšé”é—Šé—‹é—Œé—ˆé—†éš±éš¸é›–éœœéœžéž éŸ“é¡†é¢¶é¤µé¨ï¿½".split("");for(a=0;a!=t[193].length;++a)if(t[193][a].charCodeAt(0)!==65533){r[t[193][a]]=49408+a;e[49408+a]=t[193][a]}t[194]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é§¿é®®é®«é®ªé®­é´»é´¿éº‹é»é»žé»œé»é»›é¼¾é½‹å¢åš•åš®å£™å£˜å¬¸å½æ‡£æˆ³æ“´æ“²æ“¾æ”†æ“ºæ“»æ“·æ–·æ›œæœ¦æª³æª¬æ«ƒæª»æª¸æ«‚æª®æª¯æ­Ÿæ­¸æ®¯ç€‰ç€‹æ¿¾ç€†æ¿ºç€‘ç€ç‡»ç‡¼ç‡¾ç‡¸ç·çµç’§ç’¿ç”•ç™–ç™˜ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç™’çž½çž¿çž»çž¼ç¤Žç¦®ç©¡ç©¢ç© ç«„ç«…ç°«ç°§ç°ªç°žç°£ç°¡ç³§ç¹”ç¹•ç¹žç¹šç¹¡ç¹’ç¹™ç½ˆç¿¹ç¿»è·è¶è‡è‡èˆŠè—è–©è—è—è—‰è–°è–ºè–¹è–¦èŸ¯èŸ¬èŸ²èŸ è¦†è¦²è§´è¬¨è¬¹è¬¬è¬«è±è´…è¹™è¹£è¹¦è¹¤è¹Ÿè¹•è»€è½‰è½é‚‡é‚ƒé‚ˆé†«é†¬é‡éŽ”éŽŠéŽ–éŽ¢éŽ³éŽ®éŽ¬éŽ°éŽ˜éŽšéŽ—é—”é—–é—é—•é›¢é›œé›™é››é›žéœ¤éž£éž¦ï¿½".split("");for(a=0;a!=t[194].length;++a)if(t[194][a].charCodeAt(0)!==65533){r[t[194][a]]=49664+a;e[49664+a]=t[194][a]}t[195]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éž­éŸ¹é¡é¡é¡Œé¡Žé¡“é¢ºé¤¾é¤¿é¤½é¤®é¦¥é¨Žé«é¬ƒé¬†é­é­Žé­é¯Šé¯‰é¯½é¯ˆé¯€éµ‘éµéµ é» é¼•é¼¬å„³åš¥å£žå£Ÿå£¢å¯µé¾å»¬æ‡²æ‡·æ‡¶æ‡µæ”€æ”æ› æ›æ«¥æ«æ«šæ«“ç€›ç€Ÿç€¨ç€šç€ç€•ç€˜çˆ†çˆç‰˜çŠ¢ç¸ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çºç’½ç“Šç“£ç–‡ç–†ç™Ÿç™¡çŸ‡ç¤™ç¦±ç©«ç©©ç°¾ç°¿ç°¸ç°½ç°·ç±€ç¹«ç¹­ç¹¹ç¹©ç¹ªç¾…ç¹³ç¾¶ç¾¹ç¾¸è‡˜è—©è—è—ªè—•è—¤è—¥è—·èŸ»è …è èŸ¹èŸ¾è¥ è¥Ÿè¥–è¥žè­è­œè­˜è­‰è­šè­Žè­è­†è­™è´ˆè´Šè¹¼è¹²èº‡è¹¶è¹¬è¹ºè¹´è½”è½Žè¾­é‚Šé‚‹é†±é†®é¡é‘éŸéƒéˆéœéé–é¢éé˜é¤é—é¨é—œéš´é›£éœªéœ§é¡éŸœéŸ»é¡žï¿½".split("");for(a=0;a!=t[195].length;++a)if(t[195][a].charCodeAt(0)!==65533){r[t[195][a]]=49920+a;e[49920+a]=t[195][a]}t[196]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¡˜é¡›é¢¼é¥…é¥‰é¨–é¨™é¬é¯¨é¯§é¯–é¯›é¶‰éµ¡éµ²éµªéµ¬éº’éº—éº“éº´å‹¸åš¨åš·åš¶åš´åš¼å£¤å­€å­ƒå­½å¯¶å·‰æ‡¸æ‡ºæ”˜æ””æ”™æ›¦æœ§æ«¬ç€¾ç€°ç€²çˆç»ç“ç™¢ç™¥ç¤¦ç¤ªç¤¬ç¤«ç«‡ç«¶ç±Œç±ƒç±ç³¯ç³°è¾®ç¹½ç¹¼ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çº‚ç½Œè€€è‡šè‰¦è—»è—¹è˜‘è—ºè˜†è˜‹è˜‡è˜Šè ”è •è¥¤è¦ºè§¸è­°è­¬è­¦è­¯è­Ÿè­«è´è´èº‰èºèº…èº‚é†´é‡‹é˜éƒé½é—¡éœ°é£„é¥’é¥‘é¦¨é¨«é¨°é¨·é¨µé°“é°é¹¹éºµé»¨é¼¯é½Ÿé½£é½¡å„·å„¸å›å›€å›‚å¤”å±¬å·æ‡¼æ‡¾æ”æ”œæ–•æ›©æ«»æ¬„æ«ºæ®²çŒçˆ›çŠ§ç“–ç“”ç™©çŸ“ç±çºçºŒç¾¼è˜—è˜­è˜šè £è ¢è ¡è Ÿè¥ªè¥¬è¦½è­´ï¿½".split("");for(a=0;a!=t[196].length;++a)if(t[196][a].charCodeAt(0)!==65533){r[t[196][a]]=50176+a;e[50176+a]=t[196][a]}t[197]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è­·è­½è´“èºŠèºèº‹è½Ÿè¾¯é†ºé®é³éµéºé¸é²é«é—¢éœ¸éœ¹éœ²éŸ¿é¡§é¡¥é¥—é©…é©ƒé©€é¨¾é«é­”é­‘é°­é°¥é¶¯é¶´é·‚é¶¸éºé»¯é¼™é½œé½¦é½§å„¼å„»å›ˆå›Šå›‰å­¿å·”å·’å½Žæ‡¿æ”¤æ¬Šæ­¡ç‘ç˜çŽ€ç“¤ç–Šç™®ç™¬ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¦³ç± ç±Ÿè¾è½è‡Ÿè¥²è¥¯è§¼è®€è´–è´—èº‘èº“è½¡é…ˆé‘„é‘‘é‘’éœ½éœ¾éŸƒéŸé¡«é¥•é©•é©é«’é¬šé±‰é°±é°¾é°»é·“é·—é¼´é½¬é½ªé¾”å›Œå·–æˆ€æ”£æ”«æ”ªæ›¬æ¬ç“šç«Šç±¤ç±£ç±¥çº“çº–çº”è‡¢è˜¸è˜¿è ±è®Šé‚é‚é‘£é‘ é‘¤é¨é¡¯é¥œé©šé©›é©—é«“é«”é«‘é±”é±—é±–é·¥éºŸé»´å›‘å£©æ”¬çžç™±ç™²çŸ—ç½ç¾ˆè ¶è ¹è¡¢è®“è®’ï¿½".split("");for(a=0;a!=t[197].length;++a)if(t[197][a].charCodeAt(0)!==65533){r[t[197][a]]=50432+a;e[50432+a]=t[197][a]}t[198]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è®–è‰·è´›é‡€é‘ªé‚éˆé„éŸ†é¡°é©Ÿé¬¢é­˜é±Ÿé·¹é·ºé¹¼é¹½é¼‡é½·é½²å»³æ¬–ç£ç±¬ç±®è »è§€èº¡é‡é‘²é‘°é¡±é¥žé«–é¬£é»Œç¤çŸšè®šé‘·éŸ‰é©¢é©¥çºœè®œèºªé‡…é‘½é‘¾é‘¼é±·é±¸é»·è±”é‘¿é¸šçˆ¨é©ªé¬±é¸›é¸žç±²ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[198].length;++a)if(t[198][a].charCodeAt(0)!==65533){r[t[198][a]]=50688+a;e[50688+a]=t[198][a]}t[201]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä¹‚ä¹œå‡µåŒšåŽ‚ä¸‡ä¸Œä¹‡äºå›—ï¨Œå±®å½³ä¸å†‡ä¸Žä¸®äº“ä»‚ä»‰ä»ˆå†˜å‹¼å¬åŽ¹åœ å¤ƒå¤¬å°å·¿æ—¡æ®³æ¯Œæ°”çˆ¿ä¸±ä¸¼ä»¨ä»œä»©ä»¡ä»ä»šåˆŒåŒœåŒåœ¢åœ£å¤—å¤¯å®å®„å°’å°»å±´å±³å¸„åº€åº‚å¿‰æˆ‰æ‰æ°•ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ°¶æ±ƒæ°¿æ°»çŠ®çŠ°çŽŠç¦¸è‚Šé˜žä¼Žä¼˜ä¼¬ä»µä¼”ä»±ä¼€ä»·ä¼ˆä¼ä¼‚ä¼…ä¼¢ä¼“ä¼„ä»´ä¼’å†±åˆ“åˆ‰åˆåŠ¦åŒ¢åŒŸååŽŠå‡å›¡å›Ÿåœ®åœªåœ´å¤¼å¦€å¥¼å¦…å¥»å¥¾å¥·å¥¿å­–å°•å°¥å±¼å±ºå±»å±¾å·Ÿå¹µåº„å¼‚å¼šå½´å¿•å¿”å¿æ‰œæ‰žæ‰¤æ‰¡æ‰¦æ‰¢æ‰™æ‰ æ‰šæ‰¥æ—¯æ—®æœ¾æœ¹æœ¸æœ»æœºæœ¿æœ¼æœ³æ°˜æ±†æ±’æ±œæ±æ±Šæ±”æ±‹ï¿½".split("");for(a=0;a!=t[201].length;++a)if(t[201][a].charCodeAt(0)!==65533){r[t[201][a]]=51456+a;e[51456+a]=t[201][a]}t[202]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ±Œç±ç‰žçŠ´çŠµçŽŽç”ªç™¿ç©µç½‘è‰¸è‰¼èŠ€è‰½è‰¿è™è¥¾é‚™é‚—é‚˜é‚›é‚”é˜¢é˜¤é˜ é˜£ä½–ä¼»ä½¢ä½‰ä½“ä½¤ä¼¾ä½§ä½’ä½Ÿä½ä½˜ä¼­ä¼³ä¼¿ä½¡å†å†¹åˆœåˆžåˆ¡åŠ­åŠ®åŒ‰å£å²åŽŽåŽå°å·åªå‘”å‘…å™åœå¥å˜ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å½å‘å‘å¨å¤å‘‡å›®å›§å›¥åå…åŒå‰å‹å’å¤†å¥€å¦¦å¦˜å¦ å¦—å¦Žå¦¢å¦å¦å¦§å¦¡å®Žå®’å°¨å°ªå²å²å²ˆå²‹å²‰å²’å²Šå²†å²“å²•å· å¸Šå¸Žåº‹åº‰åºŒåºˆåºå¼…å¼å½¸å½¶å¿’å¿‘å¿å¿­å¿¨å¿®å¿³å¿¡å¿¤å¿£å¿ºå¿¯å¿·å¿»æ€€å¿´æˆºæŠƒæŠŒæŠŽæŠæŠ”æŠ‡æ‰±æ‰»æ‰ºæ‰°æŠæŠˆæ‰·æ‰½æ‰²æ‰´æ”·æ—°æ—´æ—³æ—²æ—µæ…æ‡ï¿½".split("");for(a=0;a!=t[202].length;++a)if(t[202][a].charCodeAt(0)!==65533){r[t[202][a]]=51712+a;e[51712+a]=t[202][a]}t[203]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ™æ•æŒæˆæææšæ‹æ¯æ°™æ°šæ±¸æ±§æ±«æ²„æ²‹æ²æ±±æ±¯æ±©æ²šæ±­æ²‡æ²•æ²œæ±¦æ±³æ±¥æ±»æ²Žç´çºç‰£çŠ¿çŠ½ç‹ƒç‹†ç‹çŠºç‹…çŽ•çŽ—çŽ“çŽ”çŽ’ç”ºç”¹ç–”ç–•çšç¤½è€´è‚•è‚™è‚è‚’è‚œèŠèŠèŠ…èŠŽèŠ‘èŠ“ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½èŠŠèŠƒèŠ„è±¸è¿‰è¾¿é‚Ÿé‚¡é‚¥é‚žé‚§é‚ é˜°é˜¨é˜¯é˜­ä¸³ä¾˜ä½¼ä¾…ä½½ä¾€ä¾‡ä½¶ä½´ä¾‰ä¾„ä½·ä½Œä¾—ä½ªä¾šä½¹ä¾ä½¸ä¾ä¾œä¾”ä¾žä¾’ä¾‚ä¾•ä½«ä½®å†žå†¼å†¾åˆµåˆ²åˆ³å‰†åˆ±åŠ¼åŒŠåŒ‹åŒ¼åŽ’åŽ”å’‡å‘¿å’å’‘å’‚å’ˆå‘«å‘ºå‘¾å‘¥å‘¬å‘´å‘¦å’å‘¯å‘¡å‘ å’˜å‘£å‘§å‘¤å›·å›¹å¯å²å­å«å±å°å¶åž€åµå»å³å´å¢ï¿½".split("");for(a=0;a!=t[203].length;++a)if(t[203][a].charCodeAt(0)!==65533){r[t[203][a]]=51968+a;e[51968+a]=t[203][a]}t[204]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¨å½å¤Œå¥…å¦µå¦ºå§å§Žå¦²å§Œå§å¦¶å¦¼å§ƒå§–å¦±å¦½å§€å§ˆå¦´å§‡å­¢å­¥å®“å®•å±„å±‡å²®å²¤å² å²µå²¯å²¨å²¬å²Ÿå²£å²­å²¢å²ªå²§å²å²¥å²¶å²°å²¦å¸—å¸”å¸™å¼¨å¼¢å¼£å¼¤å½”å¾‚å½¾å½½å¿žå¿¥æ€­æ€¦æ€™æ€²æ€‹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ€´æ€Šæ€—æ€³æ€šæ€žæ€¬æ€¢æ€æ€æ€®æ€“æ€‘æ€Œæ€‰æ€œæˆ”æˆ½æŠ­æŠ´æ‹‘æŠ¾æŠªæŠ¶æ‹ŠæŠ®æŠ³æŠ¯æŠ»æŠ©æŠ°æŠ¸æ”½æ–¨æ–»æ˜‰æ—¼æ˜„æ˜’æ˜ˆæ—»æ˜ƒæ˜‹æ˜æ˜…æ—½æ˜‘æ˜æ›¶æœŠæž…æ¬æžŽæž’æ¶æ»æž˜æž†æž„æ´æžæžŒæºæžŸæž‘æž™æžƒæ½æžæ¸æ¹æž”æ¬¥æ®€æ­¾æ¯žæ°æ²“æ³¬æ³«æ³®æ³™æ²¶æ³”æ²­æ³§æ²·æ³æ³‚æ²ºæ³ƒæ³†æ³­æ³²ï¿½".split("");for(a=0;a!=t[204].length;++a)if(t[204][a].charCodeAt(0)!==65533){r[t[204][a]]=52224+a;e[52224+a]=t[204][a]}t[205]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ³’æ³æ²´æ²Šæ²æ²€æ³žæ³€æ´°æ³æ³‡æ²°æ³¹æ³æ³©æ³‘ç‚”ç‚˜ç‚…ç‚“ç‚†ç‚„ç‚‘ç‚–ç‚‚ç‚šç‚ƒç‰ªç‹–ç‹‹ç‹˜ç‹‰ç‹œç‹’ç‹”ç‹šç‹Œç‹‘çŽ¤çŽ¡çŽ­çŽ¦çŽ¢çŽ çŽ¬çŽç“ç“¨ç”¿ç•€ç”¾ç–Œç–˜çš¯ç›³ç›±ç›°ç›µçŸ¸çŸ¼çŸ¹çŸ»çŸºï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çŸ·ç¥‚ç¤¿ç§…ç©¸ç©»ç«»ç±µç³½è€µè‚è‚®è‚£è‚¸è‚µè‚­èˆ èŠ è‹€èŠ«èŠšèŠ˜èŠ›èŠµèŠ§èŠ®èŠ¼èŠžèŠºèŠ´èŠ¨èŠ¡èŠ©è‹‚èŠ¤è‹ƒèŠ¶èŠ¢è™°è™¯è™­è™®è±–è¿’è¿‹è¿“è¿è¿–è¿•è¿—é‚²é‚´é‚¯é‚³é‚°é˜¹é˜½é˜¼é˜ºé™ƒä¿ä¿…ä¿“ä¾²ä¿‰ä¿‹ä¿ä¿”ä¿œä¿™ä¾»ä¾³ä¿›ä¿‡ä¿–ä¾ºä¿€ä¾¹ä¿¬å‰„å‰‰å‹€å‹‚åŒ½å¼åŽ—åŽ–åŽ™åŽ˜å’ºå’¡å’­å’¥å“ï¿½".split("");for(a=0;a!=t[205].length;++a)if(t[205][a].charCodeAt(0)!==65533){r[t[205][a]]=52480+a;e[52480+a]=t[205][a]}t[206]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å“ƒèŒå’·å’®å“–å’¶å“…å“†å’ å‘°å’¼å’¢å’¾å‘²å“žå’°åžµåžžåžŸåž¤åžŒåž—åžåž›åž”åž˜åžåž™åž¥åžšåž•å£´å¤å¥“å§¡å§žå§®å¨€å§±å§å§ºå§½å§¼å§¶å§¤å§²å§·å§›å§©å§³å§µå§ å§¾å§´å§­å®¨å±Œå³å³˜å³Œå³—å³‹å³›ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å³žå³šå³‰å³‡å³Šå³–å³“å³”å³å³ˆå³†å³Žå³Ÿå³¸å·¹å¸¡å¸¢å¸£å¸ å¸¤åº°åº¤åº¢åº›åº£åº¥å¼‡å¼®å½–å¾†æ€·æ€¹æ”æ²æžæ…æ“æ‡æ‰æ›æŒæ€æ‚æŸæ€¤æ„æ˜æ¦æ®æ‰‚æ‰ƒæ‹æŒæŒ‹æ‹µæŒŽæŒƒæ‹«æ‹¹æŒæŒŒæ‹¸æ‹¶æŒ€æŒ“æŒ”æ‹ºæŒ•æ‹»æ‹°æ•æ•ƒæ–ªæ–¿æ˜¶æ˜¡æ˜²æ˜µæ˜œæ˜¦æ˜¢æ˜³æ˜«æ˜ºæ˜æ˜´æ˜¹æ˜®æœæœæŸæŸ²æŸˆæžºï¿½".split("");for(a=0;a!=t[206].length;++a)if(t[206][a].charCodeAt(0)!==65533){r[t[206][a]]=52736+a;e[52736+a]=t[206][a]}t[207]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æŸœæž»æŸ¸æŸ˜æŸ€æž·æŸ…æŸ«æŸ¤æŸŸæžµæŸæž³æŸ·æŸ¶æŸ®æŸ£æŸ‚æž¹æŸŽæŸ§æŸ°æž²æŸ¼æŸ†æŸ­æŸŒæž®æŸ¦æŸ›æŸºæŸ‰æŸŠæŸƒæŸªæŸ‹æ¬¨æ®‚æ®„æ®¶æ¯–æ¯˜æ¯ æ° æ°¡æ´¨æ´´æ´­æ´Ÿæ´¼æ´¿æ´’æ´Šæ³šæ´³æ´„æ´™æ´ºæ´šæ´‘æ´€æ´æµ‚ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ´æ´˜æ´·æ´ƒæ´æµ€æ´‡æ´ æ´¬æ´ˆæ´¢æ´‰æ´ç‚·ç‚Ÿç‚¾ç‚±ç‚°ç‚¡ç‚´ç‚µç‚©ç‰ç‰‰ç‰Šç‰¬ç‰°ç‰³ç‰®ç‹Šç‹¤ç‹¨ç‹«ç‹Ÿç‹ªç‹¦ç‹£çŽ…çŒç‚çˆç…çŽ¹çŽ¶çŽµçŽ´ç«çŽ¿ç‡çŽ¾çƒç†çŽ¸ç‹ç“¬ç“®ç”®ç•‡ç•ˆç–§ç–ªç™¹ç›„çœˆçœƒçœ„çœ…çœŠç›·ç›»ç›ºçŸ§çŸ¨ç †ç ‘ç ’ç …ç ç ç Žç ‰ç ƒç “ç¥Šç¥Œç¥‹ç¥…ç¥„ç§•ç§ç§ç§–ç§Žçª€ï¿½".split("");for(a=0;a!=t[207].length;++a)if(t[207][a].charCodeAt(0)!==65533){r[t[207][a]]=52992+a;e[52992+a]=t[207][a]}t[208]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç©¾ç«‘ç¬€ç¬ç±ºç±¸ç±¹ç±¿ç²€ç²ç´ƒç´ˆç´ç½˜ç¾‘ç¾ç¾¾è€‡è€Žè€è€”è€·èƒ˜èƒ‡èƒ èƒ‘èƒˆèƒ‚èƒèƒ…èƒ£èƒ™èƒœèƒŠèƒ•èƒ‰èƒèƒ—èƒ¦èƒè‡¿èˆ¡èŠ”è‹™è‹¾è‹¹èŒ‡è‹¨èŒ€è‹•èŒºè‹«è‹–è‹´è‹¬è‹¡è‹²è‹µèŒŒè‹»è‹¶è‹°è‹ªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è‹¤è‹ è‹ºè‹³è‹­è™·è™´è™¼è™³è¡è¡Žè¡§è¡ªè¡©è§“è¨„è¨‡èµ²è¿£è¿¡è¿®è¿ éƒ±é‚½é‚¿éƒ•éƒ…é‚¾éƒ‡éƒ‹éƒˆé‡”é‡“é™”é™é™‘é™“é™Šé™Žå€žå€…å€‡å€“å€¢å€°å€›ä¿µä¿´å€³å€·å€¬ä¿¶ä¿·å€—å€œå€ å€§å€µå€¯å€±å€Žå…šå†”å†“å‡Šå‡„å‡…å‡ˆå‡Žå‰¡å‰šå‰’å‰žå‰Ÿå‰•å‰¢å‹åŒŽåŽžå”¦å“¢å”—å”’å“§å“³å“¤å”šå“¿å”„å”ˆå“«å”‘å”…å“±ï¿½".split("");for(a=0;a!=t[208].length;++a)if(t[208][a].charCodeAt(0)!==65533){r[t[208][a]]=53248+a;e[53248+a]=t[208][a]}t[209]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å”Šå“»å“·å“¸å“ å”Žå”ƒå”‹åœåœ‚åŸŒå ²åŸ•åŸ’åžºåŸ†åž½åž¼åž¸åž¶åž¿åŸ‡åŸåž¹åŸå¤Žå¥Šå¨™å¨–å¨­å¨®å¨•å¨å¨—å¨Šå¨žå¨³å­¬å®§å®­å®¬å°ƒå±–å±”å³¬å³¿å³®å³±å³·å´€å³¹å¸©å¸¨åº¨åº®åºªåº¬å¼³å¼°å½§ææšæ§ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ææ‚¢æ‚ˆæ‚€æ‚’æ‚æ‚æ‚ƒæ‚•æ‚›æ‚—æ‚‡æ‚œæ‚Žæˆ™æ‰†æ‹²æŒæ–æŒ¬æ„æ…æŒ¶æƒæ¤æŒ¹æ‹æŠæŒ¼æŒ©ææŒ´æ˜æ”æ™æŒ­æ‡æŒ³æšæ‘æŒ¸æ—æ€æˆæ•Šæ•†æ—†æ—ƒæ—„æ—‚æ™Šæ™Ÿæ™‡æ™‘æœ’æœ“æ Ÿæ šæ¡‰æ ²æ ³æ »æ¡‹æ¡æ –æ ±æ œæ µæ «æ ­æ ¯æ¡Žæ¡„æ ´æ æ ’æ ”æ ¦æ ¨æ ®æ¡æ ºæ ¥æ  æ¬¬æ¬¯æ¬­æ¬±æ¬´æ­­è‚‚æ®ˆæ¯¦æ¯¤ï¿½".split("");for(a=0;a!=t[209].length;++a)if(t[209][a].charCodeAt(0)!==65533){r[t[209][a]]=53504+a;e[53504+a]=t[209][a]}t[210]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¯¨æ¯£æ¯¢æ¯§æ°¥æµºæµ£æµ¤æµ¶æ´æµ¡æ¶’æµ˜æµ¢æµ­æµ¯æ¶‘æ¶æ·¯æµ¿æ¶†æµžæµ§æµ æ¶—æµ°æµ¼æµŸæ¶‚æ¶˜æ´¯æµ¨æ¶‹æµ¾æ¶€æ¶„æ´–æ¶ƒæµ»æµ½æµµæ¶çƒœçƒ“çƒ‘çƒçƒ‹ç¼¹çƒ¢çƒ—çƒ’çƒžçƒ çƒ”çƒçƒ…çƒ†çƒ‡çƒšçƒŽçƒ¡ç‰‚ç‰¸ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç‰·ç‰¶çŒ€ç‹ºç‹´ç‹¾ç‹¶ç‹³ç‹»çŒç“ç™ç¥ç–çŽ¼ç§ç£ç©çœç’ç›ç”ççšç—ç˜ç¨ç“žç“Ÿç“´ç“µç”¡ç•›ç•Ÿç–°ç—ç–»ç—„ç—€ç–¿ç–¶ç–ºçšŠç›‰çœçœ›çœçœ“çœ’çœ£çœ‘çœ•çœ™çœšçœ¢çœ§ç £ç ¬ç ¢ç µç ¯ç ¨ç ®ç «ç ¡ç ©ç ³ç ªç ±ç¥”ç¥›ç¥ç¥œç¥“ç¥’ç¥‘ç§«ç§¬ç§ ç§®ç§­ç§ªç§œç§žç§çª†çª‰çª…çª‹çªŒçªŠçª‡ç«˜ç¬ï¿½".split("");for(a=0;a!=t[210].length;++a)if(t[210][a].charCodeAt(0)!==65533){r[t[210][a]]=53760+a;e[53760+a]=t[210][a]}t[211]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¬„ç¬“ç¬…ç¬ç¬ˆç¬Šç¬Žç¬‰ç¬’ç²„ç²‘ç²Šç²Œç²ˆç²ç²…ç´žç´ç´‘ç´Žç´˜ç´–ç´“ç´Ÿç´’ç´ç´Œç½œç½¡ç½žç½ ç½ç½›ç¾–ç¾’ç¿ƒç¿‚ç¿€è€–è€¾è€¹èƒºèƒ²èƒ¹èƒµè„èƒ»è„€èˆèˆ¯èˆ¥èŒ³èŒ­è„èŒ™è‘èŒ¥è–èŒ¿èèŒ¦èŒœèŒ¢ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è‚èŽèŒ›èŒªèŒˆèŒ¼èèŒ–èŒ¤èŒ èŒ·èŒ¯èŒ©è‡è…èŒè“èŒžèŒ¬è‹èŒ§èˆè™“è™’èš¢èš¨èš–èšèš‘èšžèš‡èš—èš†èš‹èššèš…èš¥èš™èš¡èš§èš•èš˜èšŽèšèšèš”è¡ƒè¡„è¡­è¡µè¡¶è¡²è¢€è¡±è¡¿è¡¯è¢ƒè¡¾è¡´è¡¼è¨’è±‡è±—è±»è²¤è²£èµ¶èµ¸è¶µè¶·è¶¶è»‘è»“è¿¾è¿µé€‚è¿¿è¿»é€„è¿¼è¿¶éƒ–éƒ éƒ™éƒšéƒ£éƒŸéƒ¥éƒ˜éƒ›éƒ—éƒœéƒ¤é…ï¿½".split("");for(a=0;a!=t[211].length;++a)if(t[211][a].charCodeAt(0)!==65533){r[t[211][a]]=54016+a;e[54016+a]=t[211][a]}t[212]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é…Žé…é‡•é‡¢é‡šé™œé™Ÿéš¼é££é«Ÿé¬¯ä¹¿å°åªå¡åžå å“å‹åå²åˆååå›åŠå¢å€•å…åŸå©å«å£å¤å†å€å®å³å—å‘å‡å‰«å‰­å‰¬å‰®å‹–å‹“åŒ­åŽœå•µå•¶å”¼å•å•å”´å”ªå•‘å•¢å”¶å”µå”°å•’å•…ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å”Œå”²å•¥å•Žå”¹å•ˆå”­å”»å•€å•‹åœŠåœ‡åŸ»å ”åŸ¢åŸ¶åŸœåŸ´å €åŸ­åŸ½å ˆåŸ¸å ‹åŸ³åŸå ‡åŸ®åŸ£åŸ²åŸ¥åŸ¬åŸ¡å ŽåŸ¼å åŸ§å å ŒåŸ±åŸ©åŸ°å å „å¥œå© å©˜å©•å©§å©žå¨¸å¨µå©­å©å©Ÿå©¥å©¬å©“å©¤å©—å©ƒå©å©’å©„å©›å©ˆåªŽå¨¾å©å¨¹å©Œå©°å©©å©‡å©‘å©–å©‚å©œå­²å­®å¯å¯€å±™å´žå´‹å´å´šå´ å´Œå´¨å´å´¦å´¥å´ï¿½".split("");for(a=0;a!=t[212].length;++a)if(t[212][a].charCodeAt(0)!==65533){r[t[212][a]]=54272+a;e[54272+a]=t[212][a]}t[213]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å´°å´’å´£å´Ÿå´®å¸¾å¸´åº±åº´åº¹åº²åº³å¼¶å¼¸å¾›å¾–å¾Ÿæ‚Šæ‚æ‚†æ‚¾æ‚°æ‚ºæƒ“æƒ”æƒæƒ¤æƒ™æƒæƒˆæ‚±æƒ›æ‚·æƒŠæ‚¿æƒƒæƒæƒ€æŒ²æ¥æŽŠæŽ‚æ½æŽ½æŽžæŽ­æŽæŽ—æŽ«æŽŽæ¯æŽ‡æŽæ®æŽ¯æµæŽœæ­æŽ®æ¼æŽ¤æŒ»æŽŸï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¸æŽ…æŽæŽ‘æŽæ°æ•“æ—æ™¥æ™¡æ™›æ™™æ™œæ™¢æœ˜æ¡¹æ¢‡æ¢æ¢œæ¡­æ¡®æ¢®æ¢«æ¥–æ¡¯æ¢£æ¢¬æ¢©æ¡µæ¡´æ¢²æ¢æ¡·æ¢’æ¡¼æ¡«æ¡²æ¢ªæ¢€æ¡±æ¡¾æ¢›æ¢–æ¢‹æ¢ æ¢‰æ¢¤æ¡¸æ¡»æ¢‘æ¢Œæ¢Šæ¡½æ¬¶æ¬³æ¬·æ¬¸æ®‘æ®æ®æ®Žæ®Œæ°ªæ·€æ¶«æ¶´æ¶³æ¹´æ¶¬æ·©æ·¢æ¶·æ·¶æ·”æ¸€æ·ˆæ· æ·Ÿæ·–æ¶¾æ·¥æ·œæ·æ·›æ·´æ·Šæ¶½æ·­æ·°æ¶ºæ·•æ·‚æ·æ·‰ï¿½".split("");for(a=0;a!=t[213].length;++a)if(t[213][a].charCodeAt(0)!==65533){r[t[213][a]]=54528+a;e[54528+a]=t[213][a]}t[214]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ·æ·²æ·“æ·½æ·—æ·æ·£æ¶»çƒºç„çƒ·ç„—çƒ´ç„Œçƒ°ç„„çƒ³ç„çƒ¼çƒ¿ç„†ç„“ç„€çƒ¸çƒ¶ç„‹ç„‚ç„Žç‰¾ç‰»ç‰¼ç‰¿çŒçŒ—çŒ‡çŒ‘çŒ˜çŒŠçŒˆç‹¿çŒçŒžçŽˆç¶ç¸çµç„çç½ç‡ç€çºç¼ç¿çŒç‹ç´çˆç•¤ç•£ç—Žç—’ç—ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç—‹ç—Œç—‘ç—çšçš‰ç›“çœ¹çœ¯çœ­çœ±çœ²çœ´çœ³çœ½çœ¥çœ»çœµç¡ˆç¡’ç¡‰ç¡ç¡Šç¡Œç ¦ç¡…ç¡ç¥¤ç¥§ç¥©ç¥ªç¥£ç¥«ç¥¡ç¦»ç§ºç§¸ç§¶ç§·çªçª”çªç¬µç­‡ç¬´ç¬¥ç¬°ç¬¢ç¬¤ç¬³ç¬˜ç¬ªç¬ç¬±ç¬«ç¬­ç¬¯ç¬²ç¬¸ç¬šç¬£ç²”ç²˜ç²–ç²£ç´µç´½ç´¸ç´¶ç´ºçµ…ç´¬ç´©çµçµ‡ç´¾ç´¿çµŠç´»ç´¨ç½£ç¾•ç¾œç¾ç¾›ç¿Šç¿‹ç¿ç¿ç¿‘ç¿‡ç¿ç¿‰è€Ÿï¿½".split("");for(a=0;a!=t[214].length;++a)if(t[214][a].charCodeAt(0)!==65533){r[t[214][a]]=54784+a;e[54784+a]=t[214][a]}t[215]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è€žè€›è‡èƒèˆè„˜è„¥è„™è„›è„­è„Ÿè„¬è„žè„¡è„•è„§è„è„¢èˆ‘èˆ¸èˆ³èˆºèˆ´èˆ²è‰´èŽèŽ£èŽ¨èŽèºè³èŽ¤è´èŽèŽèŽ•èŽ™èµèŽ”èŽ©è½èŽƒèŽŒèŽèŽ›èŽªèŽ‹è¾èŽ¥èŽ¯èŽˆèŽ—èŽ°è¿èŽ¦èŽ‡èŽ®è¶èŽšè™™è™–èš¿èš·ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è›‚è›è›…èšºèš°è›ˆèš¹èš³èš¸è›Œèš´èš»èš¼è›ƒèš½èš¾è¡’è¢‰è¢•è¢¨è¢¢è¢ªè¢šè¢‘è¢¡è¢Ÿè¢˜è¢§è¢™è¢›è¢—è¢¤è¢¬è¢Œè¢“è¢Žè¦‚è§–è§™è§•è¨°è¨§è¨¬è¨žè°¹è°»è±œè±è±½è²¥èµ½èµ»èµ¹è¶¼è·‚è¶¹è¶¿è·è»˜è»žè»è»œè»—è» è»¡é€¤é€‹é€‘é€œé€Œé€¡éƒ¯éƒªéƒ°éƒ´éƒ²éƒ³éƒ”éƒ«éƒ¬éƒ©é…–é…˜é…šé…“é…•é‡¬é‡´é‡±é‡³é‡¸é‡¤é‡¹é‡ªï¿½".split("");for(a=0;a!=t[215].length;++a)if(t[215][a].charCodeAt(0)!==65533){r[t[215][a]]=55040+a;e[55040+a]=t[215][a]}t[216]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é‡«é‡·é‡¨é‡®é•ºé–†é–ˆé™¼é™­é™«é™±é™¯éš¿éªé „é£¥é¦—å‚›å‚•å‚”å‚žå‚‹å‚£å‚ƒå‚Œå‚Žå‚å¨å‚œå‚’å‚‚å‚‡å…Ÿå‡”åŒ’åŒ‘åŽ¤åŽ§å–‘å–¨å–¥å–­å•·å™…å–¢å–“å–ˆå–å–µå–å–£å–’å–¤å•½å–Œå–¦å•¿å–•å–¡å–ŽåœŒå ©å ·ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å ™å žå §å £å ¨åŸµå¡ˆå ¥å œå ›å ³å ¿å ¶å ®å ¹å ¸å ­å ¬å »å¥¡åª¯åª”åªŸå©ºåª¢åªžå©¸åª¦å©¼åª¥åª¬åª•åª®å¨·åª„åªŠåª—åªƒåª‹åª©å©»å©½åªŒåªœåªåª“åªå¯ªå¯å¯‹å¯”å¯‘å¯Šå¯Žå°Œå°°å´·åµƒåµ«åµåµ‹å´¿å´µåµ‘åµŽåµ•å´³å´ºåµ’å´½å´±åµ™åµ‚å´¹åµ‰å´¸å´¼å´²å´¶åµ€åµ…å¹„å¹å½˜å¾¦å¾¥å¾«æƒ‰æ‚¹æƒŒæƒ¢æƒŽæƒ„æ„”ï¿½".split("");for(a=0;a!=t[216].length;++a)if(t[216][a].charCodeAt(0)!==65533){r[t[216][a]]=55296+a;e[55296+a]=t[216][a]}t[217]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æƒ²æ„Šæ„–æ„…æƒµæ„“æƒ¸æƒ¼æƒ¾æƒæ„ƒæ„˜æ„æ„æƒ¿æ„„æ„‹æ‰ŠæŽ”æŽ±æŽ°æŽæ¥æ¨æ¯æƒæ’æ³æŠæ æ¶æ•æ²æµæ‘¡æŸæŽ¾ææœæ„æ˜æ“æ‚æ‡æŒæ‹æˆæ°æ—æ™æ”²æ•§æ•ªæ•¤æ•œæ•¨æ•¥æ–Œæ–æ–žæ–®æ—æ—’ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ™¼æ™¬æ™»æš€æ™±æ™¹æ™ªæ™²æœæ¤Œæ£“æ¤„æ£œæ¤ªæ£¬æ£ªæ£±æ¤æ£–æ£·æ£«æ£¤æ£¶æ¤“æ¤æ£³æ£¡æ¤‡æ£Œæ¤ˆæ¥°æ¢´æ¤‘æ£¯æ£†æ¤”æ£¸æ£æ£½æ£¼æ£¨æ¤‹æ¤Šæ¤—æ£Žæ£ˆæ£æ£žæ£¦æ£´æ£‘æ¤†æ£”æ£©æ¤•æ¤¥æ£‡æ¬¹æ¬»æ¬¿æ¬¼æ®”æ®—æ®™æ®•æ®½æ¯°æ¯²æ¯³æ°°æ·¼æ¹†æ¹‡æ¸Ÿæ¹‰æºˆæ¸¼æ¸½æ¹…æ¹¢æ¸«æ¸¿æ¹æ¹æ¹³æ¸œæ¸³æ¹‹æ¹€æ¹‘æ¸»æ¸ƒæ¸®æ¹žï¿½".split("");for(a=0;a!=t[217].length;++a)if(t[217][a].charCodeAt(0)!==65533){r[t[217][a]]=55552+a;e[55552+a]=t[217][a]}t[218]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¹¨æ¹œæ¹¡æ¸±æ¸¨æ¹ æ¹±æ¹«æ¸¹æ¸¢æ¸°æ¹“æ¹¥æ¸§æ¹¸æ¹¤æ¹·æ¹•æ¹¹æ¹’æ¹¦æ¸µæ¸¶æ¹šç„ ç„žç„¯çƒ»ç„®ç„±ç„£ç„¥ç„¢ç„²ç„Ÿç„¨ç„ºç„›ç‰‹ç‰šçŠˆçŠ‰çŠ†çŠ…çŠ‹çŒ’çŒ‹çŒ°çŒ¢çŒ±çŒ³çŒ§çŒ²çŒ­çŒ¦çŒ£çŒµçŒŒç®ç¬ç°ç«ç–ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çšç¡ç­ç±ç¤ç£çç©ç ç²ç“»ç”¯ç•¯ç•¬ç—§ç—šç—¡ç—¦ç—ç—Ÿç—¤ç——çš•çš’ç›šç†ç‡ç„çç…çŠçŽç‹çŒçŸžçŸ¬ç¡ ç¡¤ç¡¥ç¡œç¡­ç¡±ç¡ªç¡®ç¡°ç¡©ç¡¨ç¡žç¡¢ç¥´ç¥³ç¥²ç¥°ç¨‚ç¨Šç¨ƒç¨Œç¨„çª™ç«¦ç«¤ç­Šç¬»ç­„ç­ˆç­Œç­Žç­€ç­˜ç­…ç²¢ç²žç²¨ç²¡çµ˜çµ¯çµ£çµ“çµ–çµ§çµªçµçµ­çµœçµ«çµ’çµ”çµ©çµ‘çµŸçµŽç¼¾ç¼¿ç½¥ï¿½".split("");for(a=0;a!=t[218].length;++a)if(t[218][a].charCodeAt(0)!==65533){r[t[218][a]]=55808+a;e[55808+a]=t[218][a]}t[219]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç½¦ç¾¢ç¾ ç¾¡ç¿—è‘èèèƒ¾èƒ”è…ƒè…Šè…’è…è…‡è„½è…è„ºè‡¦è‡®è‡·è‡¸è‡¹èˆ„èˆ¼èˆ½èˆ¿è‰µèŒ»èè¹è£è€è¨è’è§è¤è¼è¶èè†èˆè«è£èŽ¿èèè¥è˜è¿è¡è‹èŽè–èµè‰è‰èèžè‘è†è‚è³ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è•èºè‡è‘èªè“èƒè¬è®è„è»è—è¢è›è›è¾è›˜è›¢è›¦è›“è›£è›šè›ªè›è›«è›œè›¬è›©è›—è›¨è›‘è¡ˆè¡–è¡•è¢ºè£—è¢¹è¢¸è£€è¢¾è¢¶è¢¼è¢·è¢½è¢²è¤è£‰è¦•è¦˜è¦—è§è§šè§›è©Žè©è¨¹è©™è©€è©—è©˜è©„è©…è©’è©ˆè©‘è©Šè©Œè©è±Ÿè²è²€è²ºè²¾è²°è²¹è²µè¶„è¶€è¶‰è·˜è·“è·è·‡è·–è·œè·è·•è·™è·ˆè·—è·…è»¯è»·è»ºï¿½".split("");for(a=0;a!=t[219].length;++a)if(t[219][a].charCodeAt(0)!==65533){r[t[219][a]]=56064+a;e[56064+a]=t[219][a]}t[220]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è»¹è»¦è»®è»¥è»µè»§è»¨è»¶è»«è»±è»¬è»´è»©é€­é€´é€¯é„†é„¬é„„éƒ¿éƒ¼é„ˆéƒ¹éƒ»é„é„€é„‡é„…é„ƒé…¡é…¤é…Ÿé…¢é… éˆéˆŠéˆ¥éˆƒéˆšéˆ¦éˆéˆŒéˆ€éˆ’é‡¿é‡½éˆ†éˆ„éˆ§éˆ‚éˆœéˆ¤éˆ™éˆ—éˆ…éˆ–é•»é–é–Œé–éš‡é™¾éšˆï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éš‰éšƒéš€é›‚é›ˆé›ƒé›±é›°é¬é°é®é ‡é¢©é£«é³¦é»¹äºƒäº„äº¶å‚½å‚¿åƒ†å‚®åƒ„åƒŠå‚´åƒˆåƒ‚å‚°åƒå‚ºå‚±åƒ‹åƒ‰å‚¶å‚¸å‡—å‰ºå‰¸å‰»å‰¼å—ƒå—›å—Œå—å—‹å—Šå—å—€å—”å—„å—©å–¿å—’å–å—å—•å—¢å—–å—ˆå—²å—å—™å—‚åœ”å¡“å¡¨å¡¤å¡å¡å¡‰å¡¯å¡•å¡Žå¡å¡™å¡¥å¡›å ½å¡£å¡±å£¼å«‡å«„å«‹åªºåª¸åª±åªµåª°åª¿å«ˆåª»å«†ï¿½".split("");for(a=0;a!=t[220].length;++a)if(t[220][a].charCodeAt(0)!==65533){r[t[220][a]]=56320+a;e[56320+a]=t[220][a]}t[221]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åª·å«€å«Šåª´åª¶å«åª¹åªå¯–å¯˜å¯™å°Ÿå°³åµ±åµ£åµŠåµ¥åµ²åµ¬åµžåµ¨åµ§åµ¢å·°å¹å¹Žå¹Šå¹å¹‹å»…å»Œå»†å»‹å»‡å½€å¾¯å¾­æƒ·æ…‰æ…Šæ„«æ……æ„¶æ„²æ„®æ…†æ„¯æ…æ„©æ…€æˆ é…¨æˆ£æˆ¥æˆ¤æ…æ±æ«ææ’æ‰æ æ¤ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ³æ‘ƒæŸæ•æ˜æ¹æ·æ¢æ£æŒæ¦æ°æ¨æ‘æµæ¯æŠæšæ‘€æ¥æ§æ‹æ§æ›æ®æ¡æŽæ•¯æ–’æ—“æš†æšŒæš•æšæš‹æšŠæš™æš”æ™¸æœ æ¥¦æ¥Ÿæ¤¸æ¥Žæ¥¢æ¥±æ¤¿æ¥…æ¥ªæ¤¹æ¥‚æ¥—æ¥™æ¥ºæ¥ˆæ¥‰æ¤µæ¥¬æ¤³æ¤½æ¥¥æ£°æ¥¸æ¤´æ¥©æ¥€æ¥¯æ¥„æ¥¶æ¥˜æ¥æ¥´æ¥Œæ¤»æ¥‹æ¤·æ¥œæ¥æ¥‘æ¤²æ¥’æ¤¯æ¥»æ¤¼æ­†æ­…æ­ƒæ­‚æ­ˆæ­æ®›ï¨æ¯»æ¯¼ï¿½".split("");for(a=0;a!=t[221].length;++a)if(t[221][a].charCodeAt(0)!==65533){r[t[221][a]]=56576+a;e[56576+a]=t[221][a]}t[222]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¯¹æ¯·æ¯¸æº›æ»–æ»ˆæºæ»€æºŸæº“æº”æº æº±æº¹æ»†æ»’æº½æ»æºžæ»‰æº·æº°æ»æº¦æ»æº²æº¾æ»ƒæ»œæ»˜æº™æº’æºŽæºæº¤æº¡æº¿æº³æ»æ»Šæº—æº®æº£ç…‡ç…”ç…’ç…£ç… ç…ç…ç…¢ç…²ç…¸ç…ªç…¡ç…‚ç…˜ç…ƒç…‹ç…°ç…Ÿç…ç…“ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç…„ç…ç…šç‰çŠçŠŒçŠ‘çŠçŠŽçŒ¼ç‚çŒ»çŒºç€çŠç‰ç‘„ç‘Šç‘‹ç‘’ç‘‘ç‘—ç‘€ç‘ç‘ç‘Žç‘‚ç‘†ç‘ç‘”ç“¡ç“¿ç“¾ç“½ç”ç•¹ç•·æ¦ƒç—¯ç˜ç˜ƒç—·ç—¾ç—¼ç—¹ç—¸ç˜ç—»ç—¶ç—­ç—µç—½çš™çšµç›ç•çŸç ç’ç–çšç©ç§ç”ç™ç­çŸ ç¢‡ç¢šç¢”ç¢ç¢„ç¢•ç¢…ç¢†ç¢¡ç¢ƒç¡¹ç¢™ç¢€ç¢–ç¡»ç¥¼ç¦‚ç¥½ç¥¹ç¨‘ç¨˜ç¨™ç¨’ç¨—ç¨•ç¨¢ç¨“ï¿½".split("");for(a=0;a!=t[222].length;++a)if(t[222][a].charCodeAt(0)!==65533){r[t[222][a]]=56832+a;e[56832+a]=t[222][a]}t[223]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¨›ç¨çª£çª¢çªžç««ç­¦ç­¤ç­­ç­´ç­©ç­²ç­¥ç­³ç­±ç­°ç­¡ç­¸ç­¶ç­£ç²²ç²´ç²¯ç¶ˆç¶†ç¶€ç¶çµ¿ç¶…çµºç¶Žçµ»ç¶ƒçµ¼ç¶Œç¶”ç¶„çµ½ç¶’ç½­ç½«ç½§ç½¨ç½¬ç¾¦ç¾¥ç¾§ç¿›ç¿œè€¡è…¤è… è…·è…œè…©è…›è…¢è…²æœ¡è…žè…¶è…§è…¯ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è…„è…¡èˆè‰‰è‰„è‰€è‰‚è‰…è“±è¿è‘–è‘¶è‘¹è’è’è‘¥è‘‘è‘€è’†è‘§è°è‘è‘½è‘šè‘™è‘´è‘³è‘è”‡è‘žè·èºè´è‘ºè‘ƒè‘¸è²è‘…è©è™è‘‹è¯è‘‚è­è‘Ÿè‘°è¹è‘Žè‘Œè‘’è‘¯è“…è’Žè»è‘‡è¶è³è‘¨è‘¾è‘„è«è‘ è‘”è‘®è‘èœ‹èœ„è›·èœŒè›ºè›–è›µèè›¸èœŽèœ‰èœè›¶èœèœ…è£–è£‹è£è£Žè£žè£›è£šè£Œè£è¦…è¦›è§Ÿè§¥è§¤ï¿½".split("");for(a=0;a!=t[223].length;++a)if(t[223][a].charCodeAt(0)!==65533){r[t[223][a]]=57088+a;e[57088+a]=t[223][a]}t[224]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è§¡è§ è§¢è§œè§¦è©¶èª†è©¿è©¡è¨¿è©·èª‚èª„è©µèªƒèªè©´è©ºè°¼è±‹è±Šè±¥è±¤è±¦è²†è²„è²…è³Œèµ¨èµ©è¶‘è¶Œè¶Žè¶è¶è¶“è¶”è¶è¶’è·°è· è·¬è·±è·®è·è·©è·£è·¢è·§è·²è·«è·´è¼†è»¿è¼è¼€è¼…è¼‡è¼ˆè¼‚è¼‹é’é€¿ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é„é‰é€½é„é„é„é„‘é„–é„”é„‹é„Žé…®é…¯é‰ˆé‰’éˆ°éˆºé‰¦éˆ³é‰¥é‰žéŠƒéˆ®é‰Šé‰†é‰­é‰¬é‰é‰ é‰§é‰¯éˆ¶é‰¡é‰°éˆ±é‰”é‰£é‰é‰²é‰Žé‰“é‰Œé‰–éˆ²é–Ÿé–œé–žé–›éš’éš“éš‘éš—é›Žé›ºé›½é›¸é›µé³é·é¸é²é é é Žé¢¬é£¶é£¹é¦¯é¦²é¦°é¦µéª­éª«é­›é³ªé³­é³§éº€é»½åƒ¦åƒ”åƒ—åƒ¨åƒ³åƒ›åƒªåƒåƒ¤åƒ“åƒ¬åƒ°åƒ¯åƒ£åƒ ï¿½".split("");for(a=0;a!=t[224].length;++a)if(t[224][a].charCodeAt(0)!==65533){r[t[224][a]]=57344+a;e[57344+a]=t[224][a]}t[225]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å‡˜åŠ€åŠå‹©å‹«åŒ°åŽ¬å˜§å˜•å˜Œå˜’å—¼å˜å˜œå˜å˜“å˜‚å—ºå˜å˜„å—¿å—¹å¢‰å¡¼å¢å¢˜å¢†å¢å¡¿å¡´å¢‹å¡ºå¢‡å¢‘å¢Žå¡¶å¢‚å¢ˆå¡»å¢”å¢å£¾å¥«å«œå«®å«¥å«•å«ªå«šå«­å««å«³å«¢å« å«›å«¬å«žå«å«™å«¨å«Ÿå­·å¯ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¯£å±£å¶‚å¶€åµ½å¶†åµºå¶åµ·å¶Šå¶‰å¶ˆåµ¾åµ¼å¶åµ¹åµ¿å¹˜å¹™å¹“å»˜å»‘å»—å»Žå»œå»•å»™å»’å»”å½„å½ƒå½¯å¾¶æ„¬æ„¨æ…æ…žæ…±æ…³æ…’æ…“æ…²æ…¬æ†€æ…´æ…”æ…ºæ…›æ…¥æ„»æ…ªæ…¡æ…–æˆ©æˆ§æˆ«æ«æ‘æ‘›æ‘æ‘´æ‘¶æ‘²æ‘³æ‘½æ‘µæ‘¦æ’¦æ‘Žæ’‚æ‘žæ‘œæ‘‹æ‘“æ‘ æ‘æ‘¿æ¿æ‘¬æ‘«æ‘™æ‘¥æ‘·æ•³æ– æš¡æš æšŸæœ…æœ„æœ¢æ¦±æ¦¶æ§‰ï¿½".split("");for(a=0;a!=t[225].length;++a)if(t[225][a].charCodeAt(0)!==65533){r[t[225][a]]=57600+a;e[57600+a]=t[225][a]}t[226]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¦ æ§Žæ¦–æ¦°æ¦¬æ¦¼æ¦‘æ¦™æ¦Žæ¦§æ¦æ¦©æ¦¾æ¦¯æ¦¿æ§„æ¦½æ¦¤æ§”æ¦¹æ§Šæ¦šæ§æ¦³æ¦“æ¦ªæ¦¡æ¦žæ§™æ¦—æ¦æ§‚æ¦µæ¦¥æ§†æ­Šæ­æ­‹æ®žæ®Ÿæ® æ¯ƒæ¯„æ¯¾æ»Žæ»µæ»±æ¼ƒæ¼¥æ»¸æ¼·æ»»æ¼®æ¼‰æ½Žæ¼™æ¼šæ¼§æ¼˜æ¼»æ¼’æ»­æ¼Šï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¼¶æ½³æ»¹æ»®æ¼­æ½€æ¼°æ¼¼æ¼µæ»«æ¼‡æ¼Žæ½ƒæ¼…æ»½æ»¶æ¼¹æ¼œæ»¼æ¼ºæ¼Ÿæ¼æ¼žæ¼ˆæ¼¡ç†‡ç†ç†‰ç†€ç†…ç†‚ç†ç…»ç††ç†ç†—ç‰„ç‰“çŠ—çŠ•çŠ“çƒçç‘çŒç‘¢ç‘³ç‘±ç‘µç‘²ç‘§ç‘®ç”€ç”‚ç”ƒç•½ç–ç˜–ç˜ˆç˜Œç˜•ç˜‘ç˜Šç˜”çš¸çžç¼çž…çž‚ç®çž€ç¯ç¾çžƒç¢²ç¢ªç¢´ç¢­ç¢¨ç¡¾ç¢«ç¢žç¢¥ç¢ ç¢¬ç¢¢ç¢¤ç¦˜ç¦Šç¦‹ç¦–ç¦•ç¦”ç¦“ï¿½".split("");for(a=0;a!=t[226].length;++a)if(t[226][a].charCodeAt(0)!==65533){r[t[226][a]]=57856+a;e[57856+a]=t[226][a]}t[227]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¦—ç¦ˆç¦’ç¦ç¨«ç©Šç¨°ç¨¯ç¨¨ç¨¦çª¨çª«çª¬ç«®ç®ˆç®œç®Šç®‘ç®ç®–ç®ç®Œç®›ç®Žç®…ç®˜åŠ„ç®™ç®¤ç®‚ç²»ç²¿ç²¼ç²ºç¶§ç¶·ç·‚ç¶£ç¶ªç·ç·€ç·…ç¶ç·Žç·„ç·†ç·‹ç·Œç¶¯ç¶¹ç¶–ç¶¼ç¶Ÿç¶¦ç¶®ç¶©ç¶¡ç·‰ç½³ç¿¢ç¿£ç¿¥ç¿žï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è€¤èèœè†‰è††è†ƒè†‡è†è†Œè†‹èˆ•è’—è’¤è’¡è’Ÿè’ºè“Žè“‚è’¬è’®è’«è’¹è’´è“è“è’ªè’šè’±è“è’è’§è’»è’¢è’”è“‡è“Œè’›è’©è’¯è’¨è“–è’˜è’¶è“è’ è“—è“”è“’è“›è’°è’‘è™¡èœ³èœ£èœ¨è«è€èœ®èœžèœ¡èœ™èœ›èƒèœ¬èèœ¾è†èœ èœ²èœªèœ­èœ¼èœ’èœºèœ±èœµè‚èœ¦èœ§èœ¸èœ¤èœšèœ°èœ‘è£·è£§è£±è£²è£ºè£¾è£®è£¼è£¶è£»ï¿½".split("");for(a=0;a!=t[227].length;++a)if(t[227][a].charCodeAt(0)!==65533){r[t[227][a]]=58112+a;e[58112+a]=t[227][a]}t[228]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è£°è£¬è£«è¦è¦¡è¦Ÿè¦žè§©è§«è§¨èª«èª™èª‹èª’èªèª–è°½è±¨è±©è³•è³è³—è¶–è¸‰è¸‚è·¿è¸è·½è¸Šè¸ƒè¸‡è¸†è¸…è·¾è¸€è¸„è¼è¼‘è¼Žè¼é„£é„œé„ é„¢é„Ÿé„é„šé„¤é„¡é„›é…ºé…²é…¹é…³éŠ¥éŠ¤é‰¶éŠ›é‰ºéŠ éŠ”éŠªéŠï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éŠ¦éŠšéŠ«é‰¹éŠ—é‰¿éŠ£é‹®éŠŽéŠ‚éŠ•éŠ¢é‰½éŠˆéŠ¡éŠŠéŠ†éŠŒéŠ™éŠ§é‰¾éŠ‡éŠ©éŠéŠ‹éˆ­éšžéš¡é›¿é˜é½éºé¾éžƒéž€éž‚é»éž„éžé¿éŸŽéŸé –é¢­é¢®é¤‚é¤€é¤‡é¦é¦œé§ƒé¦¹é¦»é¦ºé§‚é¦½é§‡éª±é«£é«§é¬¾é¬¿é­ é­¡é­Ÿé³±é³²é³µéº§åƒ¿å„ƒå„°åƒ¸å„†å„‡åƒ¶åƒ¾å„‹å„Œåƒ½å„ŠåŠ‹åŠŒå‹±å‹¯å™ˆå™‚å™Œå˜µå™å™Šå™‰å™†å™˜ï¿½".split("");for(a=0;a!=t[228].length;++a)if(t[228][a].charCodeAt(0)!==65533){r[t[228][a]]=58368+a;e[58368+a]=t[228][a]}t[229]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å™šå™€å˜³å˜½å˜¬å˜¾å˜¸å˜ªå˜ºåœšå¢«å¢å¢±å¢ å¢£å¢¯å¢¬å¢¥å¢¡å£¿å«¿å«´å«½å«·å«¶å¬ƒå«¸å¬‚å«¹å¬å¬‡å¬…å¬å±§å¶™å¶—å¶Ÿå¶’å¶¢å¶“å¶•å¶ å¶œå¶¡å¶šå¶žå¹©å¹å¹ å¹œç·³å»›å»žå»¡å½‰å¾²æ†‹æ†ƒæ…¹æ†±æ†°æ†¢æ†‰ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ†›æ†“æ†¯æ†­æ†Ÿæ†’æ†ªæ†¡æ†æ…¦æ†³æˆ­æ‘®æ‘°æ’–æ’ æ’…æ’—æ’œæ’æ’‹æ’Šæ’Œæ’£æ’Ÿæ‘¨æ’±æ’˜æ•¶æ•ºæ•¹æ•»æ–²æ–³æšµæš°æš©æš²æš·æšªæš¯æ¨€æ¨†æ¨—æ§¥æ§¸æ¨•æ§±æ§¤æ¨ æ§¿æ§¬æ§¢æ¨›æ¨æ§¾æ¨§æ§²æ§®æ¨”æ§·æ§§æ©€æ¨ˆæ§¦æ§»æ¨æ§¼æ§«æ¨‰æ¨„æ¨˜æ¨¥æ¨æ§¶æ¨¦æ¨‡æ§´æ¨–æ­‘æ®¥æ®£æ®¢æ®¦æ°æ°€æ¯¿æ°‚æ½æ¼¦æ½¾æ¾‡æ¿†æ¾’ï¿½".split("");for(a=0;a!=t[229].length;++a)if(t[229][a].charCodeAt(0)!==65533){r[t[229][a]]=58624+a;e[58624+a]=t[229][a]}t[230]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¾æ¾‰æ¾Œæ½¢æ½æ¾…æ½šæ¾–æ½¶æ½¬æ¾‚æ½•æ½²æ½’æ½æ½—æ¾”æ¾“æ½æ¼€æ½¡æ½«æ½½æ½§æ¾æ½“æ¾‹æ½©æ½¿æ¾•æ½£æ½·æ½ªæ½»ç†²ç†¯ç†›ç†°ç† ç†šç†©ç†µç†ç†¥ç†žç†¤ç†¡ç†ªç†œç†§ç†³çŠ˜çŠšç˜ç’çžçŸç çç›ç¡çšç™ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¢ç’‡ç’‰ç’Šç’†ç’ç‘½ç’…ç’ˆç‘¼ç‘¹ç”ˆç”‡ç•¾ç˜¥ç˜žç˜™ç˜ç˜œç˜£ç˜šç˜¨ç˜›çšœçšçšžçš›çžçžçž‰çžˆç£ç¢»ç£ç£Œç£‘ç£Žç£”ç£ˆç£ƒç£„ç£‰ç¦šç¦¡ç¦ ç¦œç¦¢ç¦›æ­¶ç¨¹çª²çª´çª³ç®·ç¯‹ç®¾ç®¬ç¯Žç®¯ç®¹ç¯Šç®µç³…ç³ˆç³Œç³‹ç··ç·›ç·ªç·§ç·—ç·¡ç¸ƒç·ºç·¦ç·¶ç·±ç·°ç·®ç·Ÿç½¶ç¾¬ç¾°ç¾­ç¿­ç¿«ç¿ªç¿¬ç¿¦ç¿¨è¤è§è†£è†Ÿï¿½".split("");for(a=0;a!=t[230].length;++a)if(t[230][a].charCodeAt(0)!==65533){r[t[230][a]]=58880+a;e[58880+a]=t[230][a]}t[231]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è†žè†•è†¢è†™è†—èˆ–è‰è‰“è‰’è‰è‰Žè‰‘è”¤è”»è”è”€è”©è”Žè”‰è”è”Ÿè”Šè”§è”œè“»è”«è“ºè”ˆè”Œè“´è”ªè“²è”•è“·è“«è“³è“¼è”’è“ªè“©è”–è“¾è”¨è”è”®è”‚è“½è”žè“¶è”±è”¦è“§è“¨è“°è“¯è“¹è”˜è” è”°è”‹è”™è”¯è™¢ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è–è£è¤è·èŸ¡è³è˜è”è›è’è¡èšè‘èžè­èªèèŽèŸèè¯è¬èºè®èœè¥èè»èµè¢è§è©è¡šè¤…è¤Œè¤”è¤‹è¤—è¤˜è¤™è¤†è¤–è¤‘è¤Žè¤‰è¦¢è¦¤è¦£è§­è§°è§¬è«è«†èª¸è«“è«‘è«”è«•èª»è«—èª¾è«€è«…è«˜è«ƒèªºèª½è«™è°¾è±è²è³¥è³Ÿè³™è³¨è³šè³è³§è¶ è¶œè¶¡è¶›è¸ è¸£è¸¥è¸¤è¸®è¸•è¸›è¸–è¸‘è¸™è¸¦è¸§ï¿½".split("");for(a=0;a!=t[231].length;++a)if(t[231][a].charCodeAt(0)!==65533){r[t[231][a]]=59136+a;e[59136+a]=t[231][a]}t[232]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¸”è¸’è¸˜è¸“è¸œè¸—è¸šè¼¬è¼¤è¼˜è¼šè¼ è¼£è¼–è¼—é³é°é¯é§é«é„¯é„«é„©é„ªé„²é„¦é„®é†…é††é†Šé†é†‚é†„é†€é‹é‹ƒé‹„é‹€é‹™éŠ¶é‹é‹±é‹Ÿé‹˜é‹©é‹—é‹é‹Œé‹¯é‹‚é‹¨é‹Šé‹ˆé‹Žé‹¦é‹é‹•é‹‰é‹ é‹žé‹§é‹‘é‹“ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éŠµé‹¡é‹†éŠ´é•¼é–¬é–«é–®é–°éš¤éš¢é›“éœ…éœˆéœ‚éšéžŠéžŽéžˆéŸéŸé žé é ¦é ©é ¨é  é ›é §é¢²é¤ˆé£ºé¤‘é¤”é¤–é¤—é¤•é§œé§é§é§“é§”é§Žé§‰é§–é§˜é§‹é§—é§Œéª³é«¬é««é«³é«²é«±é­†é­ƒé­§é­´é­±é­¦é­¶é­µé­°é­¨é­¤é­¬é³¼é³ºé³½é³¿é³·é´‡é´€é³¹é³»é´ˆé´…é´„éºƒé»“é¼é¼å„œå„“å„—å„šå„‘å‡žåŒ´å¡å™°å™ å™®ï¿½".split("");for(a=0;a!=t[232].length;++a)if(t[232][a].charCodeAt(0)!==65533){r[t[232][a]]=59392+a;e[59392+a]=t[232][a]}t[233]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å™³å™¦å™£å™­å™²å™žå™·åœœåœ›å£ˆå¢½å£‰å¢¿å¢ºå£‚å¢¼å£†å¬—å¬™å¬›å¬¡å¬”å¬“å¬å¬–å¬¨å¬šå¬ å¬žå¯¯å¶¬å¶±å¶©å¶§å¶µå¶°å¶®å¶ªå¶¨å¶²å¶­å¶¯å¶´å¹§å¹¨å¹¦å¹¯å»©å»§å»¦å»¨å»¥å½‹å¾¼æ†æ†¨æ†–æ‡…æ†´æ‡†æ‡æ‡Œæ†ºï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ†¿æ†¸æ†Œæ“—æ“–æ“æ“æ“‰æ’½æ’‰æ“ƒæ“›æ“³æ“™æ”³æ•¿æ•¼æ–¢æ›ˆæš¾æ›€æ›Šæ›‹æ›æš½æš»æšºæ›Œæœ£æ¨´æ©¦æ©‰æ©§æ¨²æ©¨æ¨¾æ©æ©­æ©¶æ©›æ©‘æ¨¨æ©šæ¨»æ¨¿æ©æ©ªæ©¤æ©æ©æ©”æ©¯æ©©æ© æ¨¼æ©žæ©–æ©•æ©æ©Žæ©†æ­•æ­”æ­–æ®§æ®ªæ®«æ¯ˆæ¯‡æ°„æ°ƒæ°†æ¾­æ¿‹æ¾£æ¿‡æ¾¼æ¿Žæ¿ˆæ½žæ¿„æ¾½æ¾žæ¿Šæ¾¨ç€„æ¾¥æ¾®æ¾ºæ¾¬æ¾ªæ¿æ¾¿æ¾¸ï¿½".split("");for(a=0;a!=t[233].length;++a)if(t[233][a].charCodeAt(0)!==65533){r[t[233][a]]=59648+a;e[59648+a]=t[233][a]}t[234]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¾¢æ¿‰æ¾«æ¿æ¾¯æ¾²æ¾°ç‡…ç‡‚ç†¿ç†¸ç‡–ç‡€ç‡ç‡‹ç‡”ç‡Šç‡‡ç‡ç†½ç‡˜ç†¼ç‡†ç‡šç‡›çŠçŠžç©ç¦ç§ç¬ç¥ç«çªç‘¿ç’šç’ ç’”ç’’ç’•ç’¡ç”‹ç–€ç˜¯ç˜­ç˜±ç˜½ç˜³ç˜¼ç˜µç˜²ç˜°çš»ç›¦çžšçžçž¡çžœçž›çž¢çž£çž•çž™ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çž—ç£ç£©ç£¥ç£ªç£žç££ç£›ç£¡ç£¢ç£­ç£Ÿç£ ç¦¤ç©„ç©ˆç©‡çª¶çª¸çªµçª±çª·ç¯žç¯£ç¯§ç¯ç¯•ç¯¥ç¯šç¯¨ç¯¹ç¯”ç¯ªç¯¢ç¯œç¯«ç¯˜ç¯Ÿç³’ç³”ç³—ç³ç³‘ç¸’ç¸¡ç¸—ç¸Œç¸Ÿç¸ ç¸“ç¸Žç¸œç¸•ç¸šç¸¢ç¸‹ç¸ç¸–ç¸ç¸”ç¸¥ç¸¤ç½ƒç½»ç½¼ç½ºç¾±ç¿¯è€ªè€©è¬è†±è†¦è†®è†¹è†µè†«è†°è†¬è†´è†²è†·è†§è‡²è‰•è‰–è‰—è•–è•…è•«è•è•“è•¡è•˜ï¿½".split("");for(a=0;a!=t[234].length;++a)if(t[234][a].charCodeAt(0)!==65533){r[t[234][a]]=59904+a;e[59904+a]=t[234][a]}t[235]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è•€è•†è•¤è•è•¢è•„è•‘è•‡è•£è”¾è•›è•±è•Žè•®è•µè••è•§è• è–Œè•¦è•è•”è•¥è•¬è™£è™¥è™¤èž›èžèž—èž“èž’èžˆèžèž–èž˜è¹èž‡èž£èž…èžèž‘èžèž„èž”èžœèžšèž‰è¤žè¤¦è¤°è¤­è¤®è¤§è¤±è¤¢è¤©è¤£è¤¯è¤¬è¤Ÿè§±è« ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è«¢è«²è«´è«µè«è¬”è«¤è«Ÿè«°è«ˆè«žè«¡è«¨è«¿è«¯è«»è²‘è²’è²è³µè³®è³±è³°è³³èµ¬èµ®è¶¥è¶§è¸³è¸¾è¸¸è¹€è¹…è¸¶è¸¼è¸½è¹è¸°è¸¿èº½è¼¶è¼®è¼µè¼²è¼¹è¼·è¼´é¶é¹é»é‚†éƒºé„³é„µé„¶é†“é†é†‘é†é†éŒ§éŒžéŒˆéŒŸéŒ†éŒéºéŒ¸éŒ¼éŒ›éŒ£éŒ’éŒé†éŒ­éŒŽéŒé‹‹éŒé‹ºéŒ¥éŒ“é‹¹é‹·éŒ´éŒ‚éŒ¤é‹¿éŒ©éŒ¹éŒµéŒªéŒ”éŒŒï¿½".split("");for(a=0;a!=t[235].length;++a)if(t[235][a].charCodeAt(0)!==65533){r[t[235][a]]=60160+a;e[60160+a]=t[235][a]}t[236]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éŒ‹é‹¾éŒ‰éŒ€é‹»éŒ–é–¼é—é–¾é–¹é–ºé–¶é–¿é–µé–½éš©é›”éœ‹éœ’éœéž™éž—éž”éŸ°éŸ¸é µé ¯é ²é¤¤é¤Ÿé¤§é¤©é¦žé§®é§¬é§¥é§¤é§°é§£é§ªé§©é§§éª¹éª¿éª´éª»é«¶é«ºé«¹é«·é¬³é®€é®…é®‡é­¼é­¾é­»é®‚é®“é®’é®é­ºé®•ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é­½é®ˆé´¥é´—é´ é´žé´”é´©é´é´˜é´¢é´é´™é´Ÿéºˆéº†éº‡éº®éº­é»•é»–é»ºé¼’é¼½å„¦å„¥å„¢å„¤å„ å„©å‹´åš“åšŒåšåš†åš„åšƒå™¾åš‚å™¿åšå£–å£”å£å£’å¬­å¬¥å¬²å¬£å¬¬å¬§å¬¦å¬¯å¬®å­»å¯±å¯²å¶·å¹¬å¹ªå¾¾å¾»æ‡ƒæ†µæ†¼æ‡§æ‡ æ‡¥æ‡¤æ‡¨æ‡žæ“¯æ“©æ“£æ“«æ“¤æ“¨æ–æ–€æ–¶æ—šæ›’æªæª–æªæª¥æª‰æªŸæª›æª¡æªžæª‡æª“æªŽï¿½".split("");for(a=0;a!=t[236].length;++a)if(t[236][a].charCodeAt(0)!==65533){r[t[236][a]]=60416+a;e[60416+a]=t[236][a]}t[237]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æª•æªƒæª¨æª¤æª‘æ©¿æª¦æªšæª…æªŒæª’æ­›æ®­æ°‰æ¿Œæ¾©æ¿´æ¿”æ¿£æ¿œæ¿­æ¿§æ¿¦æ¿žæ¿²æ¿æ¿¢æ¿¨ç‡¡ç‡±ç‡¨ç‡²ç‡¤ç‡°ç‡¢ç³ç®ç¯ç’—ç’²ç’«ç’ç’ªç’­ç’±ç’¥ç’¯ç”ç”‘ç”’ç”ç–„ç™ƒç™ˆç™‰ç™‡çš¤ç›©çžµçž«çž²çž·çž¶ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çž´çž±çž¨çŸ°ç£³ç£½ç¤‚ç£»ç£¼ç£²ç¤…ç£¹ç£¾ç¤„ç¦«ç¦¨ç©œç©›ç©–ç©˜ç©”ç©šçª¾ç«€ç«ç°…ç°ç¯²ç°€ç¯¿ç¯»ç°Žç¯´ç°‹ç¯³ç°‚ç°‰ç°ƒç°ç¯¸ç¯½ç°†ç¯°ç¯±ç°ç°Šç³¨ç¸­ç¸¼ç¹‚ç¸³é¡ˆç¸¸ç¸ªç¹‰ç¹€ç¹‡ç¸©ç¹Œç¸°ç¸»ç¸¶ç¹„ç¸ºç½…ç½¿ç½¾ç½½ç¿´ç¿²è€¬è†»è‡„è‡Œè‡Šè‡…è‡‡è†¼è‡©è‰›è‰šè‰œè–ƒè–€è–è–§è–•è– è–‹è–£è•»è–¤è–šè–žï¿½".split("");for(a=0;a!=t[237].length;++a)if(t[237][a].charCodeAt(0)!==65533){r[t[237][a]]=60672+a;e[60672+a]=t[237][a]}t[238]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è•·è•¼è–‰è–¡è•ºè•¸è•—è–Žè––è–†è–è–™è–è–è–¢è–‚è–ˆè–…è•¹è•¶è–˜è–è–Ÿè™¨èž¾èžªèž­èŸ…èž°èž¬èž¹èžµèž¼èž®èŸ‰èŸƒèŸ‚èŸŒèž·èž¯èŸ„èŸŠèž´èž¶èž¿èž¸èž½èŸžèž²è¤µè¤³è¤¼è¤¾è¥è¥’è¤·è¥‚è¦­è¦¯è¦®è§²è§³è¬žï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¬˜è¬–è¬‘è¬…è¬‹è¬¢è¬è¬’è¬•è¬‡è¬è¬ˆè¬†è¬œè¬“è¬šè±è±°è±²è±±è±¯è²•è²”è³¹èµ¯è¹Žè¹è¹“è¹è¹Œè¹‡è½ƒè½€é‚…é¾é„¸é†šé†¢é†›é†™é†Ÿé†¡é†é† éŽ¡éŽƒéŽ¯é¤é–é‡é¼é˜éœé¶é‰éé‘é é­éŽéŒéªé¹é—é•é’éé±é·é»é¡éžé£é§éŽ€éŽé™é—‡é—€é—‰é—ƒé—…é–·éš®éš°éš¬éœ éœŸéœ˜éœéœ™éžšéž¡éžœï¿½".split("");for(a=0;a!=t[238].length;++a)if(t[238][a].charCodeAt(0)!==65533){r[t[238][a]]=60928+a;e[60928+a]=t[238][a]}t[239]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éžžéžéŸ•éŸ”éŸ±é¡é¡„é¡Šé¡‰é¡…é¡ƒé¤¥é¤«é¤¬é¤ªé¤³é¤²é¤¯é¤­é¤±é¤°é¦˜é¦£é¦¡é¨‚é§ºé§´é§·é§¹é§¸é§¶é§»é§½é§¾é§¼é¨ƒéª¾é«¾é«½é¬é«¼é­ˆé®šé®¨é®žé®›é®¦é®¡é®¥é®¤é®†é®¢é® é®¯é´³éµéµ§é´¶é´®é´¯é´±é´¸é´°ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éµ…éµ‚éµƒé´¾é´·éµ€é´½ç¿µé´­éºŠéº‰éºéº°é»ˆé»šé»»é»¿é¼¤é¼£é¼¢é½”é¾ å„±å„­å„®åš˜åšœåš—åššåšåš™å¥°å¬¼å±©å±ªå·€å¹­å¹®æ‡˜æ‡Ÿæ‡­æ‡®æ‡±æ‡ªæ‡°æ‡«æ‡–æ‡©æ“¿æ”„æ“½æ“¸æ”æ”ƒæ“¼æ–”æ—›æ›šæ››æ›˜æ«…æª¹æª½æ«¡æ«†æªºæª¶æª·æ«‡æª´æª­æ­žæ¯‰æ°‹ç€‡ç€Œç€ç€ç€…ç€”ç€Žæ¿¿ç€€æ¿»ç€¦æ¿¼æ¿·ç€Šçˆç‡¿ç‡¹çˆƒç‡½ç¶ï¿½".split("");for(a=0;a!=t[239].length;++a)if(t[239][a].charCodeAt(0)!==65533){r[t[239][a]]=61184+a;e[61184+a]=t[239][a]}t[240]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç’¸ç“€ç’µç“ç’¾ç’¶ç’»ç“‚ç””ç”“ç™œç™¤ç™™ç™ç™“ç™—ç™šçš¦çš½ç›¬çŸ‚çžºç£¿ç¤Œç¤“ç¤”ç¤‰ç¤ç¤’ç¤‘ç¦­ç¦¬ç©Ÿç°œç°©ç°™ç° ç°Ÿç°­ç°ç°¦ç°¨ç°¢ç°¥ç°°ç¹œç¹ç¹–ç¹£ç¹˜ç¹¢ç¹Ÿç¹‘ç¹ ç¹—ç¹“ç¾µç¾³ç¿·ç¿¸èµè‡‘è‡’ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è‡è‰Ÿè‰žè–´è—†è—€è—ƒè—‚è–³è–µè–½è—‡è—„è–¿è—‹è—Žè—ˆè—…è–±è–¶è—’è˜¤è–¸è–·è–¾è™©èŸ§èŸ¦èŸ¢èŸ›èŸ«èŸªèŸ¥èŸŸèŸ³èŸ¤èŸ”èŸœèŸ“èŸ­èŸ˜èŸ£èž¤èŸ—èŸ™è èŸ´èŸ¨èŸè¥“è¥‹è¥è¥Œè¥†è¥è¥‘è¥‰è¬ªè¬§è¬£è¬³è¬°è¬µè­‡è¬¯è¬¼è¬¾è¬±è¬¥è¬·è¬¦è¬¶è¬®è¬¤è¬»è¬½è¬ºè±‚è±µè²™è²˜è²—è³¾è´„è´‚è´€è¹œè¹¢è¹ è¹—è¹–è¹žè¹¥è¹§ï¿½".split("");for(a=0;a!=t[240].length;++a)if(t[240][a].charCodeAt(0)!==65533){r[t[240][a]]=61440+a;e[61440+a]=t[240][a]}t[241]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¹›è¹šè¹¡è¹è¹©è¹”è½†è½‡è½ˆè½‹é„¨é„ºé„»é„¾é†¨é†¥é†§é†¯é†ªéŽµéŽŒéŽ’éŽ·éŽ›éŽéŽ‰éŽ§éŽŽéŽªéŽžéŽ¦éŽ•éŽˆéŽ™éŽŸéŽéŽ±éŽ‘éŽ²éŽ¤éŽ¨éŽ´éŽ£éŽ¥é—’é—“é—‘éš³é›—é›šå·‚é›Ÿé›˜é›éœ£éœ¢éœ¥éž¬éž®éž¨éž«éž¤éžªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éž¢éž¥éŸ—éŸ™éŸ–éŸ˜éŸºé¡é¡‘é¡’é¢¸é¥é¤¼é¤ºé¨é¨‹é¨‰é¨é¨„é¨‘é¨Šé¨…é¨‡é¨†é«€é«œé¬ˆé¬„é¬…é¬©é¬µé­Šé­Œé­‹é¯‡é¯†é¯ƒé®¿é¯é®µé®¸é¯“é®¶é¯„é®¹é®½éµœéµ“éµéµŠéµ›éµ‹éµ™éµ–éµŒéµ—éµ’éµ”éµŸéµ˜éµšéºŽéºŒé»Ÿé¼é¼€é¼–é¼¥é¼«é¼ªé¼©é¼¨é½Œé½•å„´å„µåŠ–å‹·åŽ´åš«åš­åš¦åš§åšªåš¬å£šå£å£›å¤’å¬½å¬¾å¬¿å·ƒå¹°ï¿½".split("");for(a=0;a!=t[241].length;++a)if(t[241][a].charCodeAt(0)!==65533){r[t[241][a]]=61696+a;e[61696+a]=t[241][a]}t[242]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¾¿æ‡»æ”‡æ”æ”æ”‰æ”Œæ”Žæ–„æ—žæ—æ›žæ«§æ« æ«Œæ«‘æ«™æ«‹æ«Ÿæ«œæ«æ««æ«æ«æ«žæ­ æ®°æ°Œç€™ç€§ç€ ç€–ç€«ç€¡ç€¢ç€£ç€©ç€—ç€¤ç€œç€ªçˆŒçˆŠçˆ‡çˆ‚çˆ…çŠ¥çŠ¦çŠ¤çŠ£çŠ¡ç“‹ç“…ç’·ç“ƒç”–ç™ çŸ‰çŸŠçŸ„çŸ±ç¤ç¤›ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¤¡ç¤œç¤—ç¤žç¦°ç©§ç©¨ç°³ç°¼ç°¹ç°¬ç°»ç³¬ç³ªç¹¶ç¹µç¹¸ç¹°ç¹·ç¹¯ç¹ºç¹²ç¹´ç¹¨ç½‹ç½Šç¾ƒç¾†ç¾·ç¿½ç¿¾è¸è‡—è‡•è‰¤è‰¡è‰£è—«è—±è—­è—™è—¡è—¨è—šè——è—¬è—²è—¸è—˜è—Ÿè—£è—œè—‘è—°è—¦è—¯è—žè—¢è €èŸºè ƒèŸ¶èŸ·è ‰è Œè ‹è †èŸ¼è ˆèŸ¿è Šè ‚è¥¢è¥šè¥›è¥—è¥¡è¥œè¥˜è¥è¥™è¦ˆè¦·è¦¶è§¶è­è­ˆè­Šè­€è­“è­–è­”è­‹è­•ï¿½".split("");for(a=0;a!=t[242].length;++a)if(t[242][a].charCodeAt(0)!==65533){r[t[242][a]]=61952+a;e[61952+a]=t[242][a]}t[243]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è­‘è­‚è­’è­—è±ƒè±·è±¶è²šè´†è´‡è´‰è¶¬è¶ªè¶­è¶«è¹­è¹¸è¹³è¹ªè¹¯è¹»è»‚è½’è½‘è½è½è½“è¾´é…€é„¿é†°é†­éžé‡éé‚éšéé¹é¬éŒé™éŽ©é¦éŠé”é®é£é•é„éŽé€é’é§é•½é—šé—›é›¡éœ©éœ«éœ¬éœ¨éœ¦ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éž³éž·éž¶éŸéŸžéŸŸé¡œé¡™é¡é¡—é¢¿é¢½é¢»é¢¾é¥ˆé¥‡é¥ƒé¦¦é¦§é¨šé¨•é¨¥é¨é¨¤é¨›é¨¢é¨ é¨§é¨£é¨žé¨œé¨”é«‚é¬‹é¬Šé¬Žé¬Œé¬·é¯ªé¯«é¯ é¯žé¯¤é¯¦é¯¢é¯°é¯”é¯—é¯¬é¯œé¯™é¯¥é¯•é¯¡é¯šéµ·é¶é¶Šé¶„é¶ˆéµ±é¶€éµ¸é¶†é¶‹é¶Œéµ½éµ«éµ´éµµéµ°éµ©é¶…éµ³éµ»é¶‚éµ¯éµ¹éµ¿é¶‡éµ¨éº”éº‘é»€é»¼é¼­é½€é½é½é½–é½—é½˜åŒ·åš²ï¿½".split("");for(a=0;a!=t[243].length;++a)if(t[243][a].charCodeAt(0)!==65533){r[t[243][a]]=62208+a;e[62208+a]=t[243][a]}t[244]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åšµåš³å££å­…å·†å·‡å»®å»¯å¿€å¿æ‡¹æ”—æ”–æ”•æ”“æ—Ÿæ›¨æ›£æ›¤æ«³æ«°æ«ªæ«¨æ«¹æ«±æ«®æ«¯ç€¼ç€µç€¯ç€·ç€´ç€±ç‚ç€¸ç€¿ç€ºç€¹ç€ç€»ç€³ççˆ“çˆ”çŠ¨ç½ç¼ç’ºçš«çšªçš¾ç›­çŸŒçŸŽçŸçŸçŸ²ç¤¥ç¤£ç¤§ç¤¨ç¤¤ç¤©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¦²ç©®ç©¬ç©­ç«·ç±‰ç±ˆç±Šç±‡ç±…ç³®ç¹»ç¹¾çºçº€ç¾ºç¿¿è¹è‡›è‡™èˆ‹è‰¨è‰©è˜¢è—¿è˜è—¾è˜›è˜€è—¶è˜„è˜‰è˜…è˜Œè—½è ™è è ‘è —è “è –è¥£è¥¦è¦¹è§·è­ è­ªè­è­¨è­£è­¥è­§è­­è¶®èº†èºˆèº„è½™è½–è½—è½•è½˜è½šé‚é…ƒé…é†·é†µé†²é†³é‹é“é»é éé”é¾é•éé¨é™ééµé€é·é‡éŽé–é’éºé‰é¸éŠé¿ï¿½".split("");for(a=0;a!=t[244].length;++a)if(t[244][a].charCodeAt(0)!==65533){r[t[244][a]]=62464+a;e[62464+a]=t[244][a]}t[245]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¼éŒé¶é‘é†é—žé— é—Ÿéœ®éœ¯éž¹éž»éŸ½éŸ¾é¡ é¡¢é¡£é¡Ÿé£é£‚é¥é¥Žé¥™é¥Œé¥‹é¥“é¨²é¨´é¨±é¨¬é¨ªé¨¶é¨©é¨®é¨¸é¨­é«‡é«Šé«†é¬é¬’é¬‘é°‹é°ˆé¯·é°…é°’é¯¸é±€é°‡é°Žé°†é°—é°”é°‰é¶Ÿé¶™é¶¤é¶é¶’é¶˜é¶é¶›ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¶ é¶”é¶œé¶ªé¶—é¶¡é¶šé¶¢é¶¨é¶žé¶£é¶¿é¶©é¶–é¶¦é¶§éº™éº›éºšé»¥é»¤é»§é»¦é¼°é¼®é½›é½ é½žé½é½™é¾‘å„ºå„¹åŠ˜åŠ—å›ƒåš½åš¾å­ˆå­‡å·‹å·å»±æ‡½æ”›æ¬‚æ«¼æ¬ƒæ«¸æ¬€çƒç„çŠçˆç‰ç…ç†çˆçˆšçˆ™ç¾ç”—ç™ªçŸç¤­ç¤±ç¤¯ç±”ç±“ç³²çºŠçº‡çºˆçº‹çº†çºç½ç¾»è€°è‡è˜˜è˜ªè˜¦è˜Ÿè˜£è˜œè˜™è˜§è˜®è˜¡è˜ è˜©è˜žè˜¥ï¿½".split("");for(a=0;a!=t[245].length;++a)if(t[245][a].charCodeAt(0)!==65533){r[t[245][a]]=62720+a;e[62720+a]=t[245][a]}t[246]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è ©è è ›è  è ¤è œè «è¡Šè¥­è¥©è¥®è¥«è§ºè­¹è­¸è­…è­ºè­»è´è´”è¶¯èºŽèºŒè½žè½›è½é…†é…„é……é†¹é¿é»é¶é©é½é¼é°é¹éªé·é¬é‘€é±é—¥é—¤é—£éœµéœºéž¿éŸ¡é¡¤é£‰é£†é£€é¥˜é¥–é¨¹é¨½é©†é©„é©‚é©é¨ºï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¨¿é«é¬•é¬—é¬˜é¬–é¬ºé­’é°«é°é°œé°¬é°£é°¨é°©é°¤é°¡é¶·é¶¶é¶¼é·é·‡é·Šé·é¶¾é·…é·ƒé¶»é¶µé·Žé¶¹é¶ºé¶¬é·ˆé¶±é¶­é·Œé¶³é·é¶²é¹ºéºœé»«é»®é»­é¼›é¼˜é¼šé¼±é½Žé½¥é½¤é¾’äº¹å›†å›…å›‹å¥±å­‹å­Œå·•å·‘å»²æ”¡æ” æ”¦æ”¢æ¬‹æ¬ˆæ¬‰æ°ç•ç–ç—ç’çˆžçˆŸçŠ©ç¿ç“˜ç“•ç“™ç“—ç™­çš­ç¤µç¦´ç©°ç©±ç±—ç±œç±™ç±›ç±šï¿½".split("");for(a=0;a!=t[246].length;++a)if(t[246][a].charCodeAt(0)!==65533){r[t[246][a]]=62976+a;e[62976+a]=t[246][a]}t[247]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç³´ç³±çº‘ç½ç¾‡è‡žè‰«è˜´è˜µè˜³è˜¬è˜²è˜¶è ¬è ¨è ¦è ªè ¥è¥±è¦¿è¦¾è§»è­¾è®„è®‚è®†è®…è­¿è´•èº•èº”èºšèº’èºèº–èº—è½ è½¢é…‡é‘Œé‘é‘Šé‘‹é‘é‘‡é‘…é‘ˆé‘‰é‘†éœ¿éŸ£é¡ªé¡©é£‹é¥”é¥›é©Žé©“é©”é©Œé©é©ˆé©Šï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é©‰é©’é©é«é¬™é¬«é¬»é­–é­•é±†é±ˆé°¿é±„é°¹é°³é±é°¼é°·é°´é°²é°½é°¶é·›é·’é·žé·šé·‹é·é·œé·‘é·Ÿé·©é·™é·˜é·–é·µé·•é·éº¶é»°é¼µé¼³é¼²é½‚é½«é¾•é¾¢å„½åŠ™å£¨å£§å¥²å­å·˜è ¯å½æˆæˆƒæˆ„æ”©æ”¥æ––æ›«æ¬‘æ¬’æ¬æ¯Šç›çšçˆ¢çŽ‚çŽçŽƒç™°çŸ”ç±§ç±¦çº•è‰¬è˜ºè™€è˜¹è˜¼è˜±è˜»è˜¾è °è ²è ®è ³è¥¶è¥´è¥³è§¾ï¿½".split("");for(a=0;a!=t[247].length;++a)if(t[247][a].charCodeAt(0)!==65533){r[t[247][a]]=63232+a;e[63232+a]=t[247][a]}t[248]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è®Œè®Žè®‹è®ˆè±…è´™èº˜è½¤è½£é†¼é‘¢é‘•é‘é‘—é‘žéŸ„éŸ…é €é©–é©™é¬žé¬Ÿé¬ é±’é±˜é±é±Šé±é±‹é±•é±™é±Œé±Žé·»é··é·¯é·£é·«é·¸é·¤é·¶é·¡é·®é·¦é·²é·°é·¢é·¬é·´é·³é·¨é·­é»‚é»é»²é»³é¼†é¼œé¼¸é¼·é¼¶é½ƒé½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é½±é½°é½®é½¯å›“å›å­Žå±­æ”­æ›­æ›®æ¬“çŸç¡çç çˆ£ç“›ç“¥çŸ•ç¤¸ç¦·ç¦¶ç±ªçº—ç¾‰è‰­è™ƒè ¸è ·è µè¡‹è®”è®•èºžèºŸèº èºé†¾é†½é‡‚é‘«é‘¨é‘©é›¥é†éƒé‡éŸ‡éŸ¥é©žé«•é­™é±£é±§é±¦é±¢é±žé± é¸‚é·¾é¸‡é¸ƒé¸†é¸…é¸€é¸é¸‰é·¿é·½é¸„éº é¼žé½†é½´é½µé½¶å›”æ”®æ–¸æ¬˜æ¬™æ¬—æ¬šç¢çˆ¦çŠªçŸ˜çŸ™ç¤¹ç±©ç±«ç³¶çºšï¿½".split("");for(a=0;a!=t[248].length;++a)if(t[248][a].charCodeAt(0)!==65533){r[t[248][a]]=63488+a;e[63488+a]=t[248][a]}t[249]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çº˜çº›çº™è‡ è‡¡è™†è™‡è™ˆè¥¹è¥ºè¥¼è¥»è§¿è®˜è®™èº¥èº¤èº£é‘®é‘­é‘¯é‘±é‘³é‰é¡²é¥Ÿé±¨é±®é±­é¸‹é¸é¸é¸é¸’é¸‘éº¡é»µé¼‰é½‡é½¸é½»é½ºé½¹åœžç¦ç±¯è ¼è¶²èº¦é‡ƒé‘´é‘¸é‘¶é‘µé© é±´é±³é±±é±µé¸”é¸“é»¶é¼Šï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¾¤ç¨ç¥ç³·è™ªè ¾è ½è ¿è®žè²œèº©è»‰é‹é¡³é¡´é£Œé¥¡é¦«é©¤é©¦é©§é¬¤é¸•é¸—é½ˆæˆ‡æ¬žçˆ§è™Œèº¨é’‚é’€é’é©©é©¨é¬®é¸™çˆ©è™‹è®Ÿé’ƒé±¹éº·ç™µé©«é±ºé¸ç©çªéº¤é½¾é½‰é¾˜ç¢éŠ¹è£å¢»æ’ç²§å«ºâ•”â•¦â•—â• â•¬â•£â•šâ•©â•â•’â•¤â••â•žâ•ªâ•¡â•˜â•§â•›â•“â•¥â•–â•Ÿâ•«â•¢â•™â•¨â•œâ•‘â•â•­â•®â•°â•¯â–“ï¿½".split("");for(a=0;a!=t[249].length;++a)if(t[249][a].charCodeAt(0)!==65533){r[t[249][a]]=63744+a;e[63744+a]=t[249][a]}return{enc:r,dec:e}}();cptable[1250]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~â‚¬ï¿½â€šï¿½â€žâ€¦â€ â€¡ï¿½â€°Å â€¹ÅšÅ¤Å½Å¹ï¿½â€˜â€™â€œâ€â€¢â€“â€”ï¿½â„¢Å¡â€ºÅ›Å¥Å¾ÅºÂ Ë‡Ë˜ÅÂ¤Ä„Â¦Â§Â¨Â©ÅžÂ«Â¬Â­Â®Å»Â°Â±Ë›Å‚Â´ÂµÂ¶Â·Â¸Ä…ÅŸÂ»Ä½ËÄ¾Å¼Å”ÃÃ‚Ä‚Ã„Ä¹Ä†Ã‡ÄŒÃ‰Ä˜Ã‹ÄšÃÃŽÄŽÄÅƒÅ‡Ã“Ã”ÅÃ–Ã—Å˜Å®ÃšÅ°ÃœÃÅ¢ÃŸÅ•Ã¡Ã¢ÄƒÃ¤ÄºÄ‡Ã§ÄÃ©Ä™Ã«Ä›Ã­Ã®ÄÄ‘Å„ÅˆÃ³Ã´Å‘Ã¶Ã·Å™Å¯ÃºÅ±Ã¼Ã½Å£Ë™",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[1251]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ð‚Ðƒâ€šÑ“â€žâ€¦â€ â€¡â‚¬â€°Ð‰â€¹ÐŠÐŒÐ‹ÐÑ’â€˜â€™â€œâ€â€¢â€“â€”ï¿½â„¢Ñ™â€ºÑšÑœÑ›ÑŸÂ ÐŽÑžÐˆÂ¤ÒÂ¦Â§ÐÂ©Ð„Â«Â¬Â­Â®Ð‡Â°Â±Ð†Ñ–Ò‘ÂµÂ¶Â·Ñ‘â„–Ñ”Â»Ñ˜Ð…Ñ•Ñ—ÐÐ‘Ð’Ð“Ð”Ð•Ð–Ð—Ð˜Ð™ÐšÐ›ÐœÐÐžÐŸÐ Ð¡Ð¢Ð£Ð¤Ð¥Ð¦Ð§Ð¨Ð©ÐªÐ«Ð¬Ð­Ð®Ð¯Ð°Ð±Ð²Ð³Ð´ÐµÐ¶Ð·Ð¸Ð¹ÐºÐ»Ð¼Ð½Ð¾Ð¿Ñ€ÑÑ‚ÑƒÑ„Ñ…Ñ†Ñ‡ÑˆÑ‰ÑŠÑ‹ÑŒÑÑŽÑ",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[1252]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~â‚¬ï¿½â€šÆ’â€žâ€¦â€ â€¡Ë†â€°Å â€¹Å’ï¿½Å½ï¿½ï¿½â€˜â€™â€œâ€â€¢â€“â€”Ëœâ„¢Å¡â€ºÅ“ï¿½Å¾Å¸Â Â¡Â¢Â£Â¤Â¥Â¦Â§Â¨Â©ÂªÂ«Â¬Â­Â®Â¯Â°Â±Â²Â³Â´ÂµÂ¶Â·Â¸Â¹ÂºÂ»Â¼Â½Â¾Â¿Ã€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã—Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã·Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[1253]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~â‚¬ï¿½â€šÆ’â€žâ€¦â€ â€¡ï¿½â€°ï¿½â€¹ï¿½ï¿½ï¿½ï¿½ï¿½â€˜â€™â€œâ€â€¢â€“â€”ï¿½â„¢ï¿½â€ºï¿½ï¿½ï¿½ï¿½Â Î…Î†Â£Â¤Â¥Â¦Â§Â¨Â©ï¿½Â«Â¬Â­Â®â€•Â°Â±Â²Â³Î„ÂµÂ¶Â·ÎˆÎ‰ÎŠÂ»ÎŒÂ½ÎŽÎÎÎ‘Î’Î“Î”Î•Î–Î—Î˜Î™ÎšÎ›ÎœÎÎžÎŸÎ Î¡ï¿½Î£Î¤Î¥Î¦Î§Î¨Î©ÎªÎ«Î¬Î­Î®Î¯Î°Î±Î²Î³Î´ÎµÎ¶Î·Î¸Î¹ÎºÎ»Î¼Î½Î¾Î¿Ï€ÏÏ‚ÏƒÏ„Ï…Ï†Ï‡ÏˆÏ‰ÏŠÏ‹ÏŒÏÏŽï¿½",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[1254]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~â‚¬ï¿½â€šÆ’â€žâ€¦â€ â€¡Ë†â€°Å â€¹Å’ï¿½ï¿½ï¿½ï¿½â€˜â€™â€œâ€â€¢â€“â€”Ëœâ„¢Å¡â€ºÅ“ï¿½ï¿½Å¸Â Â¡Â¢Â£Â¤Â¥Â¦Â§Â¨Â©ÂªÂ«Â¬Â­Â®Â¯Â°Â±Â²Â³Â´ÂµÂ¶Â·Â¸Â¹ÂºÂ»Â¼Â½Â¾Â¿Ã€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÄžÃ‘Ã’Ã“Ã”Ã•Ã–Ã—Ã˜Ã™ÃšÃ›ÃœÄ°ÅžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯ÄŸÃ±Ã²Ã³Ã´ÃµÃ¶Ã·Ã¸Ã¹ÃºÃ»Ã¼Ä±ÅŸÃ¿",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[1255]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~â‚¬ï¿½â€šÆ’â€žâ€¦â€ â€¡Ë†â€°ï¿½â€¹ï¿½ï¿½ï¿½ï¿½ï¿½â€˜â€™â€œâ€â€¢â€“â€”Ëœâ„¢ï¿½â€ºï¿½ï¿½ï¿½ï¿½Â Â¡Â¢Â£â‚ªÂ¥Â¦Â§Â¨Â©Ã—Â«Â¬Â­Â®Â¯Â°Â±Â²Â³Â´ÂµÂ¶Â·Â¸Â¹Ã·Â»Â¼Â½Â¾Â¿Ö°Ö±Ö²Ö³Ö´ÖµÖ¶Ö·Ö¸Ö¹ï¿½Ö»Ö¼Ö½Ö¾Ö¿×€××‚×ƒ×°×±×²×³×´ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½××‘×’×“×”×•×–×—×˜×™×š×›×œ××ž×Ÿ× ×¡×¢×£×¤×¥×¦×§×¨×©×ªï¿½ï¿½â€Žâ€ï¿½",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[1256]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~â‚¬Ù¾â€šÆ’â€žâ€¦â€ â€¡Ë†â€°Ù¹â€¹Å’Ú†Ú˜ÚˆÚ¯â€˜â€™â€œâ€â€¢â€“â€”Ú©â„¢Ú‘â€ºÅ“â€Œâ€ÚºÂ ØŒÂ¢Â£Â¤Â¥Â¦Â§Â¨Â©Ú¾Â«Â¬Â­Â®Â¯Â°Â±Â²Â³Â´ÂµÂ¶Â·Â¸Â¹Ø›Â»Â¼Â½Â¾ØŸÛØ¡Ø¢Ø£Ø¤Ø¥Ø¦Ø§Ø¨Ø©ØªØ«Ø¬Ø­Ø®Ø¯Ø°Ø±Ø²Ø³Ø´ØµØ¶Ã—Ø·Ø¸Ø¹ØºÙ€ÙÙ‚ÙƒÃ Ù„Ã¢Ù…Ù†Ù‡ÙˆÃ§Ã¨Ã©ÃªÃ«Ù‰ÙŠÃ®Ã¯Ù‹ÙŒÙÙŽÃ´ÙÙÃ·Ù‘Ã¹Ù’Ã»Ã¼â€Žâ€Û’",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[1257]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~â‚¬ï¿½â€šï¿½â€žâ€¦â€ â€¡ï¿½â€°ï¿½â€¹ï¿½Â¨Ë‡Â¸ï¿½â€˜â€™â€œâ€â€¢â€“â€”ï¿½â„¢ï¿½â€ºï¿½Â¯Ë›ï¿½Â ï¿½Â¢Â£Â¤ï¿½Â¦Â§Ã˜Â©Å–Â«Â¬Â­Â®Ã†Â°Â±Â²Â³Â´ÂµÂ¶Â·Ã¸Â¹Å—Â»Â¼Â½Â¾Ã¦Ä„Ä®Ä€Ä†Ã„Ã…Ä˜Ä’ÄŒÃ‰Å¹Ä–Ä¢Ä¶ÄªÄ»Å ÅƒÅ…Ã“ÅŒÃ•Ã–Ã—Å²ÅÅšÅªÃœÅ»Å½ÃŸÄ…Ä¯ÄÄ‡Ã¤Ã¥Ä™Ä“ÄÃ©ÅºÄ—Ä£Ä·Ä«Ä¼Å¡Å„Å†Ã³ÅÃµÃ¶Ã·Å³Å‚Å›Å«Ã¼Å¼Å¾Ë™",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[1258]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~â‚¬ï¿½â€šÆ’â€žâ€¦â€ â€¡Ë†â€°ï¿½â€¹Å’ï¿½ï¿½ï¿½ï¿½â€˜â€™â€œâ€â€¢â€“â€”Ëœâ„¢ï¿½â€ºÅ“ï¿½ï¿½Å¸Â Â¡Â¢Â£Â¤Â¥Â¦Â§Â¨Â©ÂªÂ«Â¬Â­Â®Â¯Â°Â±Â²Â³Â´ÂµÂ¶Â·Â¸Â¹ÂºÂ»Â¼Â½Â¾Â¿Ã€ÃÃ‚Ä‚Ã„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹Ì€ÃÃŽÃÄÃ‘Ì‰Ã“Ã”Æ Ã–Ã—Ã˜Ã™ÃšÃ›ÃœÆ¯ÌƒÃŸÃ Ã¡Ã¢ÄƒÃ¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«ÌÃ­Ã®Ã¯Ä‘Ã±Ì£Ã³Ã´Æ¡Ã¶Ã·Ã¸Ã¹ÃºÃ»Ã¼Æ°â‚«Ã¿",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[1e4]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ã„Ã…Ã‡Ã‰Ã‘Ã–ÃœÃ¡Ã Ã¢Ã¤Ã£Ã¥Ã§Ã©Ã¨ÃªÃ«Ã­Ã¬Ã®Ã¯Ã±Ã³Ã²Ã´Ã¶ÃµÃºÃ¹Ã»Ã¼â€ Â°Â¢Â£Â§â€¢Â¶ÃŸÂ®Â©â„¢Â´Â¨â‰ Ã†Ã˜âˆžÂ±â‰¤â‰¥Â¥Âµâˆ‚âˆ‘âˆÏ€âˆ«ÂªÂºâ„¦Ã¦Ã¸Â¿Â¡Â¬âˆšÆ’â‰ˆâˆ†Â«Â»â€¦Â Ã€ÃƒÃ•Å’Å“â€“â€”â€œâ€â€˜â€™Ã·â—ŠÃ¿Å¸â„Â¤â€¹â€ºï¬ï¬‚â€¡Â·â€šâ€žâ€°Ã‚ÃŠÃÃ‹ÃˆÃÃŽÃÃŒÃ“Ã”ï¿½Ã’ÃšÃ›Ã™Ä±Ë†ËœÂ¯Ë˜Ë™ËšÂ¸ËË›Ë‡",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[10006]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ã„Â¹Â²Ã‰Â³Ã–ÃœÎ…Ã Ã¢Ã¤Î„Â¨Ã§Ã©Ã¨ÃªÃ«Â£â„¢Ã®Ã¯â€¢Â½â€°Ã´Ã¶Â¦Â­Ã¹Ã»Ã¼â€ Î“Î”Î˜Î›ÎžÎ ÃŸÂ®Â©Î£ÎªÂ§â‰ Â°Î‡Î‘Â±â‰¤â‰¥Â¥Î’Î•Î–Î—Î™ÎšÎœÎ¦Î«Î¨Î©Î¬ÎÂ¬ÎŸÎ¡â‰ˆÎ¤Â«Â»â€¦Â Î¥Î§Î†ÎˆÅ“â€“â€•â€œâ€â€˜â€™Ã·Î‰ÎŠÎŒÎŽÎ­Î®Î¯ÏŒÎÏÎ±Î²ÏˆÎ´ÎµÏ†Î³Î·Î¹Î¾ÎºÎ»Î¼Î½Î¿Ï€ÏŽÏÏƒÏ„Î¸Ï‰Ï‚Ï‡Ï…Î¶ÏŠÏ‹ÎÎ°ï¿½",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[10007]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÐÐ‘Ð’Ð“Ð”Ð•Ð–Ð—Ð˜Ð™ÐšÐ›ÐœÐÐžÐŸÐ Ð¡Ð¢Ð£Ð¤Ð¥Ð¦Ð§Ð¨Ð©ÐªÐ«Ð¬Ð­Ð®Ð¯â€ Â°Â¢Â£Â§â€¢Â¶Ð†Â®Â©â„¢Ð‚Ñ’â‰ ÐƒÑ“âˆžÂ±â‰¤â‰¥Ñ–Âµâˆ‚ÐˆÐ„Ñ”Ð‡Ñ—Ð‰Ñ™ÐŠÑšÑ˜Ð…Â¬âˆšÆ’â‰ˆâˆ†Â«Â»â€¦Â Ð‹Ñ›ÐŒÑœÑ•â€“â€”â€œâ€â€˜â€™Ã·â€žÐŽÑžÐÑŸâ„–ÐÑ‘ÑÐ°Ð±Ð²Ð³Ð´ÐµÐ¶Ð·Ð¸Ð¹ÐºÐ»Ð¼Ð½Ð¾Ð¿Ñ€ÑÑ‚ÑƒÑ„Ñ…Ñ†Ñ‡ÑˆÑ‰ÑŠÑ‹ÑŒÑÑŽÂ¤",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[10008]=function(){var e=[],r={},t=[],a;t[0]="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Â€ï£˜ï£™ï£šï£›ï£œï£ï£žï£Ÿï£ ï£¡ï£¢ï££ï£¤ï£¥ï£¦ï£§ï£¨ï£©ï£ªï£«ï£¬ï£­ï£®ï£¯ï£°ï£±ï£²ï£³ï£´ï£µï£¶ï£·ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï£¸ï£¹ï£ºï£»ï£¼ï£½ï£¾ï£¿".split("");for(a=0;a!=t[0].length;++a)if(t[0][a].charCodeAt(0)!==65533){r[t[0][a]]=0+a;e[0+a]=t[0][a]}t[161]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ã€€ã€ã€‚ãƒ»Ë‰Ë‡Â¨ã€ƒã€…â€•ï½žï¿½â€¦â€˜â€™â€œâ€ã€”ã€•ã€ˆã€‰ã€Šã€‹ã€Œã€ã€Žã€ã€–ã€—ã€ã€‘Â±Ã—Ã·âˆ¶âˆ§âˆ¨âˆ‘âˆâˆªâˆ©âˆˆâˆ·âˆšâŠ¥âˆ¥âˆ âŒ’âŠ™âˆ«âˆ®â‰¡â‰Œâ‰ˆâˆ½âˆâ‰ â‰®â‰¯â‰¤â‰¥âˆžâˆµâˆ´â™‚â™€Â°â€²â€³â„ƒï¼„Â¤ï¿ ï¿¡â€°Â§â„–â˜†â˜…â—‹â—â—Žâ—‡â—†â–¡â– â–³â–²â€»â†’â†â†‘â†“ã€“ï¿½".split("");for(a=0;a!=t[161].length;++a)if(t[161][a].charCodeAt(0)!==65533){r[t[161][a]]=41216+a;e[41216+a]=t[161][a]}t[162]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½â’ˆâ’‰â’Šâ’‹â’Œâ’â’Žâ’â’â’‘â’’â’“â’”â’•â’–â’—â’˜â’™â’šâ’›â‘´â‘µâ‘¶â‘·â‘¸â‘¹â‘ºâ‘»â‘¼â‘½â‘¾â‘¿â’€â’â’‚â’ƒâ’„â’…â’†â’‡â‘ â‘¡â‘¢â‘£â‘¤â‘¥â‘¦â‘§â‘¨â‘©ï¿½ï¿½ãˆ ãˆ¡ãˆ¢ãˆ£ãˆ¤ãˆ¥ãˆ¦ãˆ§ãˆ¨ãˆ©ï¿½ï¿½â… â…¡â…¢â…£â…¤â…¥â…¦â…§â…¨â…©â…ªâ…«ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[162].length;++a)if(t[162][a].charCodeAt(0)!==65533){r[t[162][a]]=41472+a;e[41472+a]=t[162][a]}t[163]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¼ï¼‚ï¼ƒï¿¥ï¼…ï¼†ï¼‡ï¼ˆï¼‰ï¼Šï¼‹ï¼Œï¼ï¼Žï¼ï¼ï¼‘ï¼’ï¼“ï¼”ï¼•ï¼–ï¼—ï¼˜ï¼™ï¼šï¼›ï¼œï¼ï¼žï¼Ÿï¼ ï¼¡ï¼¢ï¼£ï¼¤ï¼¥ï¼¦ï¼§ï¼¨ï¼©ï¼ªï¼«ï¼¬ï¼­ï¼®ï¼¯ï¼°ï¼±ï¼²ï¼³ï¼´ï¼µï¼¶ï¼·ï¼¸ï¼¹ï¼ºï¼»ï¼¼ï¼½ï¼¾ï¼¿ï½€ï½ï½‚ï½ƒï½„ï½…ï½†ï½‡ï½ˆï½‰ï½Šï½‹ï½Œï½ï½Žï½ï½ï½‘ï½’ï½“ï½”ï½•ï½–ï½—ï½˜ï½™ï½šï½›ï½œï½ï¿£ï¿½".split("");for(a=0;a!=t[163].length;++a)if(t[163][a].charCodeAt(0)!==65533){r[t[163][a]]=41728+a;e[41728+a]=t[163][a]}t[164]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ãã‚ãƒã„ã…ã†ã‡ãˆã‰ãŠã‹ãŒããŽããã‘ã’ã“ã”ã•ã–ã—ã˜ã™ãšã›ãœããžãŸã ã¡ã¢ã£ã¤ã¥ã¦ã§ã¨ã©ãªã«ã¬ã­ã®ã¯ã°ã±ã²ã³ã´ãµã¶ã·ã¸ã¹ãºã»ã¼ã½ã¾ã¿ã‚€ã‚ã‚‚ã‚ƒã‚„ã‚…ã‚†ã‚‡ã‚ˆã‚‰ã‚Šã‚‹ã‚Œã‚ã‚Žã‚ã‚ã‚‘ã‚’ã‚“ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[164].length;++a)if(t[164][a].charCodeAt(0)!==65533){r[t[164][a]]=41984+a;e[41984+a]=t[164][a]}t[165]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ã‚¡ã‚¢ã‚£ã‚¤ã‚¥ã‚¦ã‚§ã‚¨ã‚©ã‚ªã‚«ã‚¬ã‚­ã‚®ã‚¯ã‚°ã‚±ã‚²ã‚³ã‚´ã‚µã‚¶ã‚·ã‚¸ã‚¹ã‚ºã‚»ã‚¼ã‚½ã‚¾ã‚¿ãƒ€ãƒãƒ‚ãƒƒãƒ„ãƒ…ãƒ†ãƒ‡ãƒˆãƒ‰ãƒŠãƒ‹ãƒŒãƒãƒŽãƒãƒãƒ‘ãƒ’ãƒ“ãƒ”ãƒ•ãƒ–ãƒ—ãƒ˜ãƒ™ãƒšãƒ›ãƒœãƒãƒžãƒŸãƒ ãƒ¡ãƒ¢ãƒ£ãƒ¤ãƒ¥ãƒ¦ãƒ§ãƒ¨ãƒ©ãƒªãƒ«ãƒ¬ãƒ­ãƒ®ãƒ¯ãƒ°ãƒ±ãƒ²ãƒ³ãƒ´ãƒµãƒ¶ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[165].length;++a)if(t[165][a].charCodeAt(0)!==65533){r[t[165][a]]=42240+a;e[42240+a]=t[165][a]}t[166]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Î‘Î’Î“Î”Î•Î–Î—Î˜Î™ÎšÎ›ÎœÎÎžÎŸÎ Î¡Î£Î¤Î¥Î¦Î§Î¨Î©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Î±Î²Î³Î´ÎµÎ¶Î·Î¸Î¹ÎºÎ»Î¼Î½Î¾Î¿Ï€ÏÏƒÏ„Ï…Ï†Ï‡ÏˆÏ‰ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[166].length;++a)if(t[166][a].charCodeAt(0)!==65533){
r[t[166][a]]=42496+a;e[42496+a]=t[166][a]}t[167]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ÐÐ‘Ð’Ð“Ð”Ð•ÐÐ–Ð—Ð˜Ð™ÐšÐ›ÐœÐÐžÐŸÐ Ð¡Ð¢Ð£Ð¤Ð¥Ð¦Ð§Ð¨Ð©ÐªÐ«Ð¬Ð­Ð®Ð¯ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½Ð°Ð±Ð²Ð³Ð´ÐµÑ‘Ð¶Ð·Ð¸Ð¹ÐºÐ»Ð¼Ð½Ð¾Ð¿Ñ€ÑÑ‚ÑƒÑ„Ñ…Ñ†Ñ‡ÑˆÑ‰ÑŠÑ‹ÑŒÑÑŽÑï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[167].length;++a)if(t[167][a].charCodeAt(0)!==65533){r[t[167][a]]=42752+a;e[42752+a]=t[167][a]}t[168]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ÄÃ¡ÇŽÃ Ä“Ã©Ä›Ã¨Ä«Ã­ÇÃ¬ÅÃ³Ç’Ã²Å«ÃºÇ”Ã¹Ç–Ç˜ÇšÇœÃ¼Ãªï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ã„…ã„†ã„‡ã„ˆã„‰ã„Šã„‹ã„Œã„ã„Žã„ã„ã„‘ã„’ã„“ã„”ã„•ã„–ã„—ã„˜ã„™ã„šã„›ã„œã„ã„žã„Ÿã„ ã„¡ã„¢ã„£ã„¤ã„¥ã„¦ã„§ã„¨ã„©ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[168].length;++a)if(t[168][a].charCodeAt(0)!==65533){r[t[168][a]]=43008+a;e[43008+a]=t[168][a]}t[169]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½â”€â”â”‚â”ƒâ”„â”…â”†â”‡â”ˆâ”‰â”Šâ”‹â”Œâ”â”Žâ”â”â”‘â”’â”“â””â”•â”–â”—â”˜â”™â”šâ”›â”œâ”â”žâ”Ÿâ” â”¡â”¢â”£â”¤â”¥â”¦â”§â”¨â”©â”ªâ”«â”¬â”­â”®â”¯â”°â”±â”²â”³â”´â”µâ”¶â”·â”¸â”¹â”ºâ”»â”¼â”½â”¾â”¿â•€â•â•‚â•ƒâ•„â•…â•†â•‡â•ˆâ•‰â•Šâ•‹ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[169].length;++a)if(t[169][a].charCodeAt(0)!==65533){r[t[169][a]]=43264+a;e[43264+a]=t[169][a]}t[176]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å•Šé˜¿åŸƒæŒ¨å“Žå”‰å“€çš‘ç™Œè”¼çŸ®è‰¾ç¢çˆ±éš˜éžæ°¨å®‰ä¿ºæŒ‰æš—å²¸èƒºæ¡ˆè‚®æ˜‚ç›Žå‡¹æ•–ç†¬ç¿±è¢„å‚²å¥¥æ‡Šæ¾³èŠ­æŒæ‰’å­å§ç¬†å…«ç–¤å·´æ‹”è·‹é¶æŠŠè€™åéœ¸ç½¢çˆ¸ç™½æŸç™¾æ‘†ä½°è´¥æ‹œç¨—æ–‘ç­æ¬æ‰³èˆ¬é¢æ¿ç‰ˆæ‰®æ‹Œä¼´ç“£åŠåŠžç»Šé‚¦å¸®æ¢†æ¦œè†€ç»‘æ£’ç£…èšŒé•‘å‚è°¤è‹žèƒžåŒ…è¤’å‰¥ï¿½".split("");for(a=0;a!=t[176].length;++a)if(t[176][a].charCodeAt(0)!==65533){r[t[176][a]]=45056+a;e[45056+a]=t[176][a]}t[177]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è–„é›¹ä¿å ¡é¥±å®æŠ±æŠ¥æš´è±¹é²çˆ†æ¯ç¢‘æ‚²å‘åŒ—è¾ˆèƒŒè´é’¡å€ç‹ˆå¤‡æƒ«ç„™è¢«å¥”è‹¯æœ¬ç¬¨å´©ç»·ç”­æ³µè¹¦è¿¸é€¼é¼»æ¯”é„™ç¬”å½¼ç¢§è“–è”½æ¯•æ¯™æ¯–å¸åº‡ç—¹é—­æ•å¼Šå¿…è¾Ÿå£è‡‚é¿é™›éž­è¾¹ç¼–è´¬æ‰ä¾¿å˜åžè¾¨è¾©è¾«éæ ‡å½ªè†˜è¡¨é³–æ†‹åˆ«ç˜ªå½¬æ–Œæ¿’æ»¨å®¾æ‘ˆå…µå†°æŸ„ä¸™ç§‰é¥¼ç‚³ï¿½".split("");for(a=0;a!=t[177].length;++a)if(t[177][a].charCodeAt(0)!==65533){r[t[177][a]]=45312+a;e[45312+a]=t[177][a]}t[178]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç—…å¹¶çŽ»è æ’­æ‹¨é’µæ³¢åšå‹ƒæé“‚ç®”ä¼¯å¸›èˆ¶è„–è†Šæ¸¤æ³Šé©³æ•åœå“ºè¡¥åŸ ä¸å¸ƒæ­¥ç°¿éƒ¨æ€–æ“¦çŒœè£ææ‰è´¢ç¬è¸©é‡‡å½©èœè”¡é¤å‚èš•æ®‹æƒ­æƒ¨ç¿è‹èˆ±ä»“æ²§è—æ“ç³™æ§½æ›¹è‰åŽ•ç­–ä¾§å†Œæµ‹å±‚è¹­æ’å‰èŒ¬èŒ¶æŸ¥ç¢´æ½å¯Ÿå²”å·®è¯§æ‹†æŸ´è±ºæ€æŽºè‰é¦‹è°—ç¼ é“²äº§é˜é¢¤æ˜ŒçŒ–ï¿½".split("");for(a=0;a!=t[178].length;++a)if(t[178][a].charCodeAt(0)!==65533){r[t[178][a]]=45568+a;e[45568+a]=t[178][a]}t[179]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åœºå°å¸¸é•¿å¿è‚ åŽ‚æ•žç•…å”±å€¡è¶…æŠ„é’žæœå˜²æ½®å·¢åµç‚’è½¦æ‰¯æ’¤æŽ£å½»æ¾ˆéƒ´è‡£è¾°å°˜æ™¨å¿±æ²‰é™ˆè¶è¡¬æ’‘ç§°åŸŽæ©™æˆå‘ˆä¹˜ç¨‹æƒ©æ¾„è¯šæ‰¿é€žéª‹ç§¤åƒç—´æŒåŒ™æ± è¿Ÿå¼›é©°è€»é½¿ä¾ˆå°ºèµ¤ç¿…æ–¥ç‚½å……å†²è™«å´‡å® æŠ½é…¬ç•´è¸Œç¨ æ„ç­¹ä»‡ç»¸çž…ä¸‘è‡­åˆå‡ºæ©±åŽ¨èº‡é”„é›æ»é™¤æ¥šï¿½".split("");for(a=0;a!=t[179].length;++a)if(t[179][a].charCodeAt(0)!==65533){r[t[179][a]]=45824+a;e[45824+a]=t[179][a]}t[180]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¡€å‚¨çŸ—æè§¦å¤„æ£å·ç©¿æ¤½ä¼ èˆ¹å–˜ä¸²ç–®çª—å¹¢åºŠé—¯åˆ›å¹ç‚Šæ¶é”¤åž‚æ˜¥æ¤¿é†‡å”‡æ·³çº¯è ¢æˆ³ç»°ç–µèŒ¨ç£é›Œè¾žæ…ˆç“·è¯æ­¤åˆºèµæ¬¡èªè‘±å›±åŒ†ä»Žä¸›å‡‘ç²—é†‹ç°‡ä¿ƒè¹¿ç¯¡çªœæ‘§å´”å‚¬è„†ç˜ç²¹æ·¬ç¿ æ‘å­˜å¯¸ç£‹æ’®æ“æŽªæŒ«é”™æ­è¾¾ç­”ç˜©æ‰“å¤§å‘†æ­¹å‚£æˆ´å¸¦æ®†ä»£è´·è¢‹å¾…é€®ï¿½".split("");for(a=0;a!=t[180].length;++a)if(t[180][a].charCodeAt(0)!==65533){r[t[180][a]]=46080+a;e[46080+a]=t[180][a]}t[181]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ€ è€½æ‹…ä¸¹å•éƒ¸æŽ¸èƒ†æ—¦æ°®ä½†æƒ®æ·¡è¯žå¼¹è›‹å½“æŒ¡å…šè¡æ¡£åˆ€æ£è¹ˆå€’å²›ç¥·å¯¼åˆ°ç¨»æ‚¼é“ç›—å¾·å¾—çš„è¹¬ç¯ç™»ç­‰çžªå‡³é‚“å ¤ä½Žæ»´è¿ªæ•Œç¬›ç‹„æ¶¤ç¿Ÿå«¡æŠµåº•åœ°è’‚ç¬¬å¸å¼Ÿé€’ç¼”é¢ æŽ‚æ»‡ç¢˜ç‚¹å…¸é›åž«ç”µä½ƒç”¸åº—æƒ¦å¥ æ·€æ®¿ç¢‰å¼é›•å‡‹åˆæŽ‰åŠé’“è°ƒè·Œçˆ¹ç¢Ÿè¶è¿­è°å ï¿½".split("");for(a=0;a!=t[181].length;++a)if(t[181][a].charCodeAt(0)!==65533){r[t[181][a]]=46336+a;e[46336+a]=t[181][a]}t[182]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä¸ç›¯å®é’‰é¡¶é¼Žé”­å®šè®¢ä¸¢ä¸œå†¬è‘£æ‡‚åŠ¨æ ‹ä¾—æ«å†»æ´žå…œæŠ–æ–—é™¡è±†é€—ç—˜éƒ½ç£æ¯’çŠŠç‹¬è¯»å µç¹èµŒæœé•€è‚šåº¦æ¸¡å¦’ç«¯çŸ­é”»æ®µæ–­ç¼Žå †å…‘é˜Ÿå¯¹å¢©å¨è¹²æ•¦é¡¿å›¤é’ç›¾éæŽ‡å“†å¤šå¤ºåž›èº²æœµè·ºèˆµå‰æƒ°å •è›¾å³¨é¹…ä¿„é¢è®¹å¨¥æ¶åŽ„æ‰¼éé„‚é¥¿æ©è€Œå„¿è€³å°”é¥µæ´±äºŒï¿½".split("");for(a=0;a!=t[182].length;++a)if(t[182][a].charCodeAt(0)!==65533){r[t[182][a]]=46592+a;e[46592+a]=t[182][a]}t[183]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è´°å‘ç½šç­ä¼ä¹é˜€æ³•çè—©å¸†ç•ªç¿»æ¨ŠçŸ¾é’’ç¹å‡¡çƒ¦åè¿”èŒƒè´©çŠ¯é¥­æ³›åŠèŠ³æ–¹è‚ªæˆ¿é˜²å¦¨ä»¿è®¿çººæ”¾è²éžå•¡é£žè‚¥åŒªè¯½å è‚ºåºŸæ²¸è´¹èŠ¬é…šå©æ°›åˆ†çº·åŸç„šæ±¾ç²‰å¥‹ä»½å¿¿æ„¤ç²ªä¸°å°æž«èœ‚å³°é”‹é£Žç–¯çƒ½é€¢å†¯ç¼è®½å¥‰å‡¤ä½›å¦å¤«æ•·è‚¤å­µæ‰¶æ‹‚è¾å¹…æ°Ÿç¬¦ä¼ä¿˜æœï¿½".split("");for(a=0;a!=t[183].length;++a)if(t[183][a].charCodeAt(0)!==65533){r[t[183][a]]=46848+a;e[46848+a]=t[183][a]}t[184]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æµ®æ¶ªç¦è¢±å¼—ç”«æŠšè¾…ä¿¯é‡œæ–§è„¯è…‘åºœè…èµ´å‰¯è¦†èµ‹å¤å‚…ä»˜é˜œçˆ¶è…¹è´Ÿå¯Œè®£é™„å¦‡ç¼šå’å™¶å˜Žè¯¥æ”¹æ¦‚é’™ç›–æº‰å¹²ç”˜æ†æŸ‘ç«¿è‚èµ¶æ„Ÿç§†æ•¢èµ£å†ˆåˆšé’¢ç¼¸è‚›çº²å²—æ¸¯æ ç¯™çš‹é«˜è†ç¾”ç³•æžé•ç¨¿å‘Šå“¥æ­Œææˆˆé¸½èƒ³ç–™å‰²é©è‘›æ ¼è›¤é˜éš”é“¬ä¸ªå„ç»™æ ¹è·Ÿè€•æ›´åºšç¾¹ï¿½".split("");for(a=0;a!=t[184].length;++a)if(t[184][a].charCodeAt(0)!==65533){r[t[184][a]]=47104+a;e[47104+a]=t[184][a]}t[185]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½åŸ‚è€¿æ¢—å·¥æ”»åŠŸæ­é¾šä¾›èº¬å…¬å®«å¼“å·©æ±žæ‹±è´¡å…±é’©å‹¾æ²Ÿè‹Ÿç‹—åž¢æž„è´­å¤Ÿè¾œè‡å’•ç®ä¼°æ²½å­¤å§‘é¼“å¤è›Šéª¨è°·è‚¡æ•…é¡¾å›ºé›‡åˆ®ç“œå‰å¯¡æŒ‚è¤‚ä¹–æ‹æ€ªæ£ºå…³å®˜å† è§‚ç®¡é¦†ç½æƒ¯çŒè´¯å…‰å¹¿é€›ç‘°è§„åœ­ç¡…å½’é¾Ÿé—ºè½¨é¬¼è¯¡ç™¸æ¡‚æŸœè·ªè´µåˆ½è¾Šæ»šæ£é”…éƒ­å›½æžœè£¹è¿‡å“ˆï¿½".split("");for(a=0;a!=t[185].length;++a)if(t[185][a].charCodeAt(0)!==65533){r[t[185][a]]=47360+a;e[47360+a]=t[185][a]}t[186]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éª¸å­©æµ·æ°¦äº¥å®³éª‡é…£æ†¨é‚¯éŸ©å«æ¶µå¯’å‡½å–Šç½•ç¿°æ’¼ææ—±æ†¾æ‚ç„Šæ±—æ±‰å¤¯æ­èˆªå£•åšŽè±ªæ¯«éƒå¥½è€—å·æµ©å‘µå–è·èæ ¸ç¦¾å’Œä½•åˆç›’è²‰é˜‚æ²³æ¶¸èµ«è¤é¹¤è´ºå˜¿é»‘ç—•å¾ˆç‹ æ¨å“¼äº¨æ¨ªè¡¡æ’è½°å“„çƒ˜è™¹é¸¿æ´ªå®å¼˜çº¢å–‰ä¾¯çŒ´å¼åŽšå€™åŽå‘¼ä¹Žå¿½ç‘šå£¶è‘«èƒ¡è´ç‹ç³Šæ¹–ï¿½".split("");for(a=0;a!=t[186].length;++a)if(t[186][a].charCodeAt(0)!==65533){r[t[186][a]]=47616+a;e[47616+a]=t[186][a]}t[187]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¼§è™Žå”¬æŠ¤äº’æ²ªæˆ·èŠ±å“—åŽçŒ¾æ»‘ç”»åˆ’åŒ–è¯æ§å¾Šæ€€æ·®åæ¬¢çŽ¯æ¡“è¿˜ç¼“æ¢æ‚£å”¤ç—ªè±¢ç„•æ¶£å®¦å¹»è’æ…Œé»„ç£ºè—ç°§çš‡å‡°æƒ¶ç…Œæ™ƒå¹Œæè°Žç°æŒ¥è¾‰å¾½æ¢è›”å›žæ¯æ‚”æ…§å‰æƒ æ™¦è´¿ç§½ä¼šçƒ©æ±‡è®³è¯²ç»˜è¤æ˜å©šé­‚æµ‘æ··è±æ´»ä¼™ç«èŽ·æˆ–æƒ‘éœè´§ç¥¸å‡»åœ¾åŸºæœºç•¸ç¨½ç§¯ç®•ï¿½".split("");for(a=0;a!=t[187].length;++a)if(t[187][a].charCodeAt(0)!==65533){r[t[187][a]]=47872+a;e[47872+a]=t[187][a]}t[188]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è‚Œé¥¥è¿¹æ¿€è®¥é¸¡å§¬ç»©ç¼‰å‰æžæ£˜è¾‘ç±é›†åŠæ€¥ç–¾æ±²å³å«‰çº§æŒ¤å‡ è„Šå·±è“ŸæŠ€å†€å­£ä¼Žç¥­å‰‚æ‚¸æµŽå¯„å¯‚è®¡è®°æ—¢å¿Œé™…å¦“ç»§çºªå˜‰æž·å¤¹ä½³å®¶åŠ èšé¢Šè´¾ç”²é’¾å‡ç¨¼ä»·æž¶é©¾å«æ­¼ç›‘åšå°–ç¬ºé—´ç…Žå…¼è‚©è‰°å¥¸ç¼„èŒ§æ£€æŸ¬ç¢±ç¡·æ‹£æ¡ç®€ä¿­å‰ªå‡èæ§›é‰´è·µè´±è§é”®ç®­ä»¶ï¿½".split("");for(a=0;a!=t[188].length;++a)if(t[188][a].charCodeAt(0)!==65533){r[t[188][a]]=48128+a;e[48128+a]=t[188][a]}t[189]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¥èˆ°å‰‘é¥¯æ¸æº…æ¶§å»ºåƒµå§œå°†æµ†æ±Ÿç–†è’‹æ¡¨å¥–è®²åŒ é…±é™è•‰æ¤’ç¤ç„¦èƒ¶äº¤éƒŠæµ‡éª„å¨‡åš¼æ…é“°çŸ«ä¾¥è„šç‹¡è§’é¥ºç¼´ç»žå‰¿æ•™é…µè½¿è¾ƒå«çª–æ­æŽ¥çš†ç§¸è¡—é˜¶æˆªåŠ«èŠ‚æ¡”æ°æ·ç«ç«­æ´ç»“è§£å§æˆ’è—‰èŠ¥ç•Œå€Ÿä»‹ç–¥è¯«å±Šå·¾ç­‹æ–¤é‡‘ä»Šæ´¥è¥Ÿç´§é”¦ä»…è°¨è¿›é³æ™‹ç¦è¿‘çƒ¬æµ¸ï¿½".split("");for(a=0;a!=t[189].length;++a)if(t[189][a].charCodeAt(0)!==65533){r[t[189][a]]=48384+a;e[48384+a]=t[189][a]}t[190]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å°½åŠ²è†å…¢èŒŽç›æ™¶é²¸äº¬æƒŠç²¾ç²³ç»äº•è­¦æ™¯é¢ˆé™å¢ƒæ•¬é•œå¾„ç—‰é–ç«Ÿç«žå‡€ç‚¯çª˜æªç©¶çº çŽ–éŸ­ä¹…ç¸ä¹é…’åŽ©æ•‘æ—§è‡¼èˆ…å’Žå°±ç–šéž æ‹˜ç‹™ç–½å±…é©¹èŠå±€å’€çŸ©ä¸¾æ²®èšæ‹’æ®å·¨å…·è·è¸žé”¯ä¿±å¥æƒ§ç‚¬å‰§æé¹ƒå¨Ÿå€¦çœ·å·ç»¢æ’…æ”«æŠ‰æŽ˜å€”çˆµè§‰å†³è¯€ç»å‡èŒé’§å†›å›å³»ï¿½".split("");for(a=0;a!=t[190].length;++a)if(t[190][a].charCodeAt(0)!==65533){r[t[190][a]]=48640+a;e[48640+a]=t[190][a]}t[191]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä¿Šç«£æµšéƒ¡éªå–€å’–å¡å’¯å¼€æ©æ¥·å‡¯æ…¨åˆŠå ªå‹˜åŽç çœ‹åº·æ…·ç³ æ‰›æŠ—äº¢ç‚•è€ƒæ‹·çƒ¤é å·è‹›æŸ¯æ£µç£•é¢—ç§‘å£³å’³å¯æ¸´å…‹åˆ»å®¢è¯¾è‚¯å•ƒåž¦æ³å‘å­ç©ºæå­”æŽ§æŠ å£æ‰£å¯‡æž¯å“­çªŸè‹¦é…·åº“è£¤å¤¸åž®æŒŽè·¨èƒ¯å—ç­·ä¾©å¿«å®½æ¬¾åŒ¡ç­ç‹‚æ¡†çŸ¿çœ¶æ—·å†µäºç›”å²¿çª¥è‘µå¥Žé­å‚€ï¿½".split("");for(a=0;a!=t[191].length;++a)if(t[191][a].charCodeAt(0)!==65533){r[t[191][a]]=48896+a;e[48896+a]=t[191][a]}t[192]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¦ˆæ„§æºƒå¤æ˜†æ†å›°æ‹¬æ‰©å»“é˜”åžƒæ‹‰å–‡èœ¡è…Šè¾£å•¦èŽ±æ¥èµ–è“å©ªæ æ‹¦ç¯®é˜‘å…°æ¾œè°°æ½è§ˆæ‡’ç¼†çƒ‚æ»¥ç…æ¦”ç‹¼å»ŠéƒŽæœ—æµªæžåŠ³ç‰¢è€ä½¬å§¥é…ªçƒ™æ¶å‹’ä¹é›·é•­è•¾ç£Šç´¯å„¡åž’æ“‚è‚‹ç±»æ³ªæ£±æ¥žå†·åŽ˜æ¢¨çŠé»Žç¯±ç‹¸ç¦»æ¼“ç†æŽé‡Œé²¤ç¤¼èŽ‰è”åæ —ä¸½åŽ‰åŠ±ç ¾åŽ†åˆ©å‚ˆä¾‹ä¿ï¿½".split("");for(a=0;a!=t[192].length;++a)if(t[192][a].charCodeAt(0)!==65533){r[t[192][a]]=49152+a;e[49152+a]=t[192][a]}t[193]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç—¢ç«‹ç²’æ²¥éš¶åŠ›ç’ƒå“©ä¿©è”èŽ²è¿žé•°å»‰æ€œæ¶Ÿå¸˜æ•›è„¸é“¾æ‹ç‚¼ç»ƒç²®å‡‰æ¢ç²±è‰¯ä¸¤è¾†é‡æ™¾äº®è°…æ’©èŠåƒšç–—ç‡Žå¯¥è¾½æ½¦äº†æ’‚é•£å»–æ–™åˆ—è£‚çƒˆåŠ£çŒŽç³æž—ç£·éœ–ä¸´é‚»é³žæ·‹å‡›èµåæ‹ŽçŽ²è±é›¶é¾„é“ƒä¼¶ç¾šå‡Œçµé™µå²­é¢†å¦ä»¤æºœç‰æ¦´ç¡«é¦ç•™åˆ˜ç˜¤æµæŸ³å…­é¾™è‹å’™ç¬¼çª¿ï¿½".split("");for(a=0;a!=t[193].length;++a)if(t[193][a].charCodeAt(0)!==65533){r[t[193][a]]=49408+a;e[49408+a]=t[193][a]}t[194]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½éš†åž„æ‹¢é™‡æ¥¼å¨„æ‚ç¯“æ¼é™‹èŠ¦å¢é¢…åºç‚‰æŽ³å¤è™é²éº“ç¢Œéœ²è·¯èµ‚é¹¿æ½žç¦„å½•é™†æˆ®é©´å•é“ä¾£æ—…å±¥å±¡ç¼•è™‘æ°¯å¾‹çŽ‡æ»¤ç»¿å³¦æŒ›å­ªæ»¦åµä¹±æŽ ç•¥æŠ¡è½®ä¼¦ä»‘æ²¦çº¶è®ºèèžºç½—é€»é”£ç®©éª¡è£¸è½æ´›éª†ç»œå¦ˆéº»çŽ›ç èš‚é©¬éª‚å˜›å—åŸ‹ä¹°éº¦å–è¿ˆè„‰çž’é¦’è›®æ»¡è”“æ›¼æ…¢æ¼«ï¿½".split("");for(a=0;a!=t[194].length;++a)if(t[194][a].charCodeAt(0)!==65533){r[t[194][a]]=49664+a;e[49664+a]=t[194][a]}t[195]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è°©èŠ’èŒ«ç›²æ°“å¿™èŽ½çŒ«èŒ…é”šæ¯›çŸ›é“†å¯èŒ‚å†’å¸½è²Œè´¸ä¹ˆçŽ«æžšæ¢…é…¶éœ‰ç…¤æ²¡çœ‰åª’é•æ¯ç¾Žæ˜§å¯å¦¹åªšé—¨é—·ä»¬èŒè’™æª¬ç›Ÿé”°çŒ›æ¢¦å­Ÿçœ¯é†šé¡ç³œè¿·è°œå¼¥ç±³ç§˜è§…æ³Œèœœå¯†å¹‚æ£‰çœ ç»µå†•å…å‹‰å¨©ç¼…é¢è‹—æçž„è—ç§’æ¸ºåº™å¦™è”‘ç­æ°‘æŠ¿çš¿æ•æ‚¯é—½æ˜ŽèžŸé¸£é“­åå‘½è°¬æ‘¸ï¿½".split("");for(a=0;a!=t[195].length;++a)if(t[195][a].charCodeAt(0)!==65533){r[t[195][a]]=49920+a;e[49920+a]=t[195][a]}t[196]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ‘¹è˜‘æ¨¡è†œç£¨æ‘©é­”æŠ¹æœ«èŽ«å¢¨é»˜æ²«æ¼ å¯žé™Œè°‹ç‰ŸæŸæ‹‡ç‰¡äº©å§†æ¯å¢“æš®å¹•å‹Ÿæ…•æœ¨ç›®ç¦ç‰§ç©†æ‹¿å“ªå‘é’ é‚£å¨œçº³æ°–ä¹ƒå¥¶è€å¥ˆå—ç”·éš¾å›ŠæŒ è„‘æ¼é—¹æ·–å‘¢é¦å†…å«©èƒ½å¦®éœ“å€ªæ³¥å°¼æ‹Ÿä½ åŒ¿è…»é€†æººè”«æ‹ˆå¹´ç¢¾æ’µæ»å¿µå¨˜é…¿é¸Ÿå°¿æè‚å­½å•®é•Šé•æ¶…æ‚¨æŸ ç‹žå‡å®ï¿½".split("");for(a=0;a!=t[196].length;++a)if(t[196][a].charCodeAt(0)!==65533){r[t[196][a]]=50176+a;e[50176+a]=t[196][a]}t[197]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ‹§æ³žç‰›æ‰­é’®çº½è„“æµ“å†œå¼„å¥´åŠªæ€’å¥³æš–è™ç–ŸæŒªæ‡¦ç³¯è¯ºå“¦æ¬§é¸¥æ®´è—•å‘•å¶æ²¤å•ªè¶´çˆ¬å¸•æ€•ç¶æ‹æŽ’ç‰Œå¾˜æ¹ƒæ´¾æ”€æ½˜ç›˜ç£ç›¼ç•”åˆ¤å›ä¹“åºžæ—è€ªèƒ–æŠ›å’†åˆ¨ç‚®è¢è·‘æ³¡å‘¸èƒšåŸ¹è£´èµ”é™ªé…ä½©æ²›å–·ç›†ç °æŠ¨çƒ¹æ¾Žå½­è“¬æ£šç¡¼ç¯·è†¨æœ‹é¹æ§ç¢°å¯ç ’éœ¹æ‰¹æŠ«åŠˆçµæ¯—ï¿½".split("");for(a=0;a!=t[197].length;++a)if(t[197][a].charCodeAt(0)!==65533){r[t[197][a]]=50432+a;e[50432+a]=t[197][a]}t[198]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å•¤è„¾ç–²çš®åŒ¹ç—žåƒ»å±è­¬ç¯‡åç‰‡éª—é£˜æ¼‚ç“¢ç¥¨æ’‡çž¥æ‹¼é¢‘è´«å“è˜ä¹’åªè‹¹èå¹³å‡­ç“¶è¯„å±å¡æ³¼é¢‡å©†ç ´é­„è¿«ç²•å‰–æ‰‘é“ºä»†èŽ†è‘¡è©è’²åŸ”æœ´åœƒæ™®æµ¦è°±æ›ç€‘æœŸæ¬ºæ –æˆšå¦»ä¸ƒå‡„æ¼†æŸ’æ²å…¶æ£‹å¥‡æ­§ç•¦å´Žè„é½æ——ç¥ˆç¥éª‘èµ·å²‚ä¹žä¼å¯å¥‘ç Œå™¨æ°”è¿„å¼ƒæ±½æ³£è®«æŽï¿½".split("");for(a=0;a!=t[198].length;++a)if(t[198][a].charCodeAt(0)!==65533){r[t[198][a]]=50688+a;e[50688+a]=t[198][a]}t[199]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ°æ´½ç‰µæ‰¦é’Žé“…åƒè¿ç­¾ä»Ÿè°¦ä¹¾é»”é’±é’³å‰æ½œé£æµ…è°´å ‘åµŒæ¬ æ­‰æžªå‘›è…”ç¾Œå¢™è”·å¼ºæŠ¢æ©‡é”¹æ•²æ‚„æ¡¥çž§ä¹”ä¾¨å·§éž˜æ’¬ç¿˜å³­ä¿çªåˆ‡èŒ„ä¸”æ€¯çªƒé’¦ä¾µäº²ç§¦ç´å‹¤èŠ¹æ“’ç¦½å¯æ²é’è½»æ°¢å€¾å¿æ¸…æ“Žæ™´æ°°æƒ…é¡·è¯·åº†ç¼ç©·ç§‹ä¸˜é‚±çƒæ±‚å›šé…‹æ³…è¶‹åŒºè›†æ›²èº¯å±ˆé©±æ¸ ï¿½".split("");for(a=0;a!=t[199].length;++a)if(t[199][a].charCodeAt(0)!==65533){r[t[199][a]]=50944+a;e[50944+a]=t[199][a]}t[200]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å–å¨¶é¾‹è¶£åŽ»åœˆé¢§æƒé†›æ³‰å…¨ç—Šæ‹³çŠ¬åˆ¸åŠç¼ºç‚”ç˜¸å´é¹Šæ¦·ç¡®é›€è£™ç¾¤ç„¶ç‡ƒå†‰æŸ“ç“¤å£¤æ”˜åš·è®©é¥¶æ‰°ç»•æƒ¹çƒ­å£¬ä»äººå¿éŸ§ä»»è®¤åˆƒå¦Šçº«æ‰”ä»æ—¥æˆŽèŒ¸è“‰è£èžç†”æº¶å®¹ç»’å†—æ‰æŸ”è‚‰èŒ¹è •å„’å­ºå¦‚è¾±ä¹³æ±å…¥è¤¥è½¯é˜®è•Šç‘žé”é—°æ¶¦è‹¥å¼±æ’’æ´’è¨è…®é³ƒå¡žèµ›ä¸‰åï¿½".split("");for(a=0;a!=t[200].length;++a)if(t[200][a].charCodeAt(0)!==65533){r[t[200][a]]=51200+a;e[51200+a]=t[200][a]}t[201]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä¼žæ•£æ¡‘å—“ä¸§æ”éªšæ‰«å«‚ç‘Ÿè‰²æ¶©æ£®åƒ§èŽŽç ‚æ€åˆ¹æ²™çº±å‚»å•¥ç…žç­›æ™’çŠè‹«æ‰å±±åˆ ç…½è¡«é—ªé™•æ“…èµ¡è†³å–„æ±•æ‰‡ç¼®å¢’ä¼¤å•†èµæ™Œä¸Šå°šè£³æ¢¢æŽç¨çƒ§èŠå‹ºéŸ¶å°‘å“¨é‚µç»å¥¢èµŠè›‡èˆŒèˆèµ¦æ‘„å°„æ…‘æ¶‰ç¤¾è®¾ç ·ç”³å‘»ä¼¸èº«æ·±å¨ ç»…ç¥žæ²ˆå®¡å©¶ç”šè‚¾æ…Žæ¸—å£°ç”Ÿç”¥ç‰²å‡ç»³ï¿½".split("");for(a=0;a!=t[201].length;++a)if(t[201][a].charCodeAt(0)!==65533){r[t[201][a]]=51456+a;e[51456+a]=t[201][a]}t[202]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çœç››å‰©èƒœåœ£å¸ˆå¤±ç‹®æ–½æ¹¿è¯—å°¸è™±åçŸ³æ‹¾æ—¶ä»€é£Ÿèš€å®žè¯†å²çŸ¢ä½¿å±Žé©¶å§‹å¼ç¤ºå£«ä¸–æŸ¿äº‹æ‹­èª“é€åŠ¿æ˜¯å—œå™¬é€‚ä»•ä¾é‡Šé¥°æ°å¸‚æƒå®¤è§†è¯•æ”¶æ‰‹é¦–å®ˆå¯¿æŽˆå”®å—ç˜¦å…½è”¬æž¢æ¢³æ®ŠæŠ’è¾“å”èˆ’æ·‘ç–ä¹¦èµŽå­°ç†Ÿè–¯æš‘æ›™ç½²èœ€é»é¼ å±žæœ¯è¿°æ ‘æŸæˆç«–å¢…åº¶æ•°æ¼±ï¿½".split("");for(a=0;a!=t[202].length;++a)if(t[202][a].charCodeAt(0)!==65533){r[t[202][a]]=51712+a;e[51712+a]=t[202][a]}t[203]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ•åˆ·è€æ‘”è¡°ç”©å¸…æ “æ‹´éœœåŒçˆ½è°æ°´ç¡ç¨Žå®çž¬é¡ºèˆœè¯´ç¡•æœ”çƒæ–¯æ’•å˜¶æ€ç§å¸ä¸æ­»è‚†å¯ºå—£å››ä¼ºä¼¼é¥²å·³æ¾è€¸æ€‚é¢‚é€å®‹è®¼è¯µæœè‰˜æ“žå—½è‹é…¥ä¿—ç´ é€Ÿç²Ÿåƒ³å¡‘æº¯å®¿è¯‰è‚ƒé…¸è’œç®—è™½éš‹éšç»¥é«“ç¢Žå²ç©—é‚éš§ç¥Ÿå­™æŸç¬‹è“‘æ¢­å”†ç¼©çç´¢é”æ‰€å¡Œä»–å®ƒå¥¹å¡”ï¿½".split("");for(a=0;a!=t[203].length;++a)if(t[203][a].charCodeAt(0)!==65533){r[t[203][a]]=51968+a;e[51968+a]=t[203][a]}t[204]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç­æŒžè¹‹è¸èƒŽè‹”æŠ¬å°æ³°é…žå¤ªæ€æ±°åæ‘Šè´ªç˜«æ»©å›æª€ç—°æ½­è°­è°ˆå¦æ¯¯è¢’ç¢³æŽ¢å¹ç‚­æ±¤å¡˜æªå ‚æ£ è†›å”ç³–å€˜èººæ·Œè¶Ÿçƒ«æŽæ¶›æ»”ç»¦è„æ¡ƒé€ƒæ·˜é™¶è®¨å¥—ç‰¹è—¤è…¾ç–¼èªŠæ¢¯å‰”è¸¢é”‘æé¢˜è¹„å•¼ä½“æ›¿åšæƒ•æ¶•å‰ƒå±‰å¤©æ·»å¡«ç”°ç”œæ¬èˆ”è…†æŒ‘æ¡è¿¢çœºè·³è´´é“å¸–åŽ…å¬çƒƒï¿½".split("");for(a=0;a!=t[204].length;++a)if(t[204][a].charCodeAt(0)!==65533){r[t[204][a]]=52224+a;e[52224+a]=t[204][a]}t[205]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ±€å»·åœäº­åº­æŒºè‰‡é€šæ¡é…®çž³åŒé“œå½¤ç«¥æ¡¶æ…ç­’ç»Ÿç—›å·æŠ•å¤´é€å‡¸ç§ƒçªå›¾å¾’é€”æ¶‚å± åœŸåå…”æ¹å›¢æŽ¨é¢“è…¿èœ•è¤ªé€€åžå±¯è‡€æ‹–æ‰˜è„±é¸µé™€é©®é©¼æ¤­å¦¥æ‹“å”¾æŒ–å“‡è›™æ´¼å¨ƒç“¦è¢œæ­ªå¤–è±Œå¼¯æ¹¾çŽ©é¡½ä¸¸çƒ·å®Œç¢—æŒ½æ™šçš–æƒ‹å®›å©‰ä¸‡è…•æ±ªçŽ‹äº¡æž‰ç½‘å¾€æ—ºæœ›å¿˜å¦„å¨ï¿½".split("");for(a=0;a!=t[205].length;++a)if(t[205][a].charCodeAt(0)!==65533){r[t[205][a]]=52480+a;e[52480+a]=t[205][a]}t[206]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å·å¾®å±éŸ¦è¿æ¡…å›´å”¯æƒŸä¸ºæ½ç»´è‹‡èŽå§”ä¼Ÿä¼ªå°¾çº¬æœªè”šå‘³ç•èƒƒå–‚é­ä½æ¸­è°“å°‰æ…°å«ç˜Ÿæ¸©èšŠæ–‡é—»çº¹å»ç¨³ç´Šé—®å—¡ç¿ç“®æŒèœ—æ¶¡çªæˆ‘æ–¡å§æ¡æ²ƒå·«å‘œé’¨ä¹Œæ±¡è¯¬å±‹æ— èŠœæ¢§å¾å´æ¯‹æ­¦äº”æ‚åˆèˆžä¼ä¾®åžæˆŠé›¾æ™¤ç‰©å‹¿åŠ¡æ‚Ÿè¯¯æ˜”ç†™æžè¥¿ç¡’çŸ½æ™°å˜»å¸é”¡ç‰ºï¿½".split("");for(a=0;a!=t[206].length;++a)if(t[206][a].charCodeAt(0)!==65533){r[t[206][a]]=52736+a;e[52736+a]=t[206][a]}t[207]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¨€æ¯å¸Œæ‚‰è†å¤•æƒœç†„çƒ¯æºªæ±çŠ€æª„è¢­å¸­ä¹ åª³å–œé“£æ´—ç³»éš™æˆç»†çžŽè™¾åŒ£éœžè¾–æš‡å³¡ä¾ ç‹­ä¸‹åŽ¦å¤å“æŽ€é”¨å…ˆä»™é²œçº¤å’¸è´¤è¡”èˆ·é—²æ¶Žå¼¦å«Œæ˜¾é™©çŽ°çŒ®åŽ¿è…ºé¦…ç¾¡å®ªé™·é™çº¿ç›¸åŽ¢é•¶é¦™ç®±è¥„æ¹˜ä¹¡ç¿”ç¥¥è¯¦æƒ³å“äº«é¡¹å··æ©¡åƒå‘è±¡è§ç¡éœ„å‰Šå“®åš£é”€æ¶ˆå®µæ·†æ™“ï¿½".split("");for(a=0;a!=t[207].length;++a)if(t[207][a].charCodeAt(0)!==65533){r[t[207][a]]=52992+a;e[52992+a]=t[207][a]}t[208]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å°å­æ ¡è‚–å•¸ç¬‘æ•ˆæ¥”äº›æ­‡èŽéž‹åæŒŸæºé‚ªæ–œèƒè°å†™æ¢°å¸èŸ¹æ‡ˆæ³„æ³»è°¢å±‘è–ªèŠ¯é”Œæ¬£è¾›æ–°å¿»å¿ƒä¿¡è¡…æ˜Ÿè…¥çŒ©æƒºå…´åˆ‘åž‹å½¢é‚¢è¡Œé†’å¹¸ææ€§å§“å…„å‡¶èƒ¸åŒˆæ±¹é›„ç†Šä¼‘ä¿®ç¾žæœ½å—…é”ˆç§€è¢–ç»£å¢ŸæˆŒéœ€è™šå˜˜é¡»å¾è®¸è“„é…—å™æ—­åºç•œæ¤çµ®å©¿ç»ªç»­è½©å–§å®£æ‚¬æ—‹çŽ„ï¿½".split("");for(a=0;a!=t[208].length;++a)if(t[208][a].charCodeAt(0)!==65533){r[t[208][a]]=53248+a;e[53248+a]=t[208][a]}t[209]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é€‰ç™£çœ©ç»šé´è–›å­¦ç©´é›ªè¡€å‹‹ç†å¾ªæ—¬è¯¢å¯»é©¯å·¡æ®‰æ±›è®­è®¯é€Šè¿…åŽ‹æŠ¼é¸¦é¸­å‘€ä¸«èŠ½ç‰™èšœå´–è¡™æ¶¯é›…å“‘äºšè®¶ç„‰å’½é˜‰çƒŸæ·¹ç›ä¸¥ç ”èœ’å²©å»¶è¨€é¢œé˜Žç‚Žæ²¿å¥„æŽ©çœ¼è¡æ¼”è‰³å °ç‡•åŽŒç šé›å”å½¦ç„°å®´è°šéªŒæ®ƒå¤®é¸¯ç§§æ¨æ‰¬ä½¯ç–¡ç¾Šæ´‹é˜³æ°§ä»°ç—’å…»æ ·æ¼¾é‚€è…°å¦–ç‘¶ï¿½".split("");for(a=0;a!=t[209].length;++a)if(t[209][a].charCodeAt(0)!==65533){r[t[209][a]]=53504+a;e[53504+a]=t[209][a]}t[210]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ‘‡å°§é¥çª‘è°£å§šå’¬èˆ€è¯è¦è€€æ¤°å™Žè€¶çˆ·é‡Žå†¶ä¹Ÿé¡µæŽ–ä¸šå¶æ›³è…‹å¤œæ¶²ä¸€å£¹åŒ»æ–é“±ä¾ä¼Šè¡£é¢å¤·é—ç§»ä»ªèƒ°ç–‘æ²‚å®œå§¨å½æ¤…èšå€šå·²ä¹™çŸ£ä»¥è‰ºæŠ‘æ˜“é‚‘å±¹äº¿å½¹è‡†é€¸è‚„ç–«äº¦è£”æ„æ¯…å¿†ä¹‰ç›Šæº¢è¯£è®®è°Šè¯‘å¼‚ç¿¼ç¿Œç»ŽèŒµè«å› æ®·éŸ³é˜´å§»åŸé“¶æ·«å¯…é¥®å°¹å¼•éšï¿½".split("");for(a=0;a!=t[210].length;++a)if(t[210][a].charCodeAt(0)!==65533){r[t[210][a]]=53760+a;e[53760+a]=t[210][a]}t[211]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å°è‹±æ¨±å©´é¹°åº”ç¼¨èŽ¹è¤è¥è§è‡è¿Žèµ¢ç›ˆå½±é¢–ç¡¬æ˜ å“Ÿæ‹¥ä½£è‡ƒç—ˆåº¸é›è¸Šè›¹å’æ³³æ¶Œæ°¸æ¿å‹‡ç”¨å¹½ä¼˜æ‚ å¿§å°¤ç”±é‚®é“€çŠ¹æ²¹æ¸¸é…‰æœ‰å‹å³ä½‘é‡‰è¯±åˆå¹¼è¿‚æ·¤äºŽç›‚æ¦†è™žæ„šèˆ†ä½™ä¿žé€¾é±¼æ„‰æ¸æ¸”éš…äºˆå¨±é›¨ä¸Žå±¿ç¦¹å®‡è¯­ç¾½çŽ‰åŸŸèŠ‹éƒåé‡å–»å³ªå¾¡æ„ˆæ¬²ç‹±è‚²èª‰ï¿½".split("");for(a=0;a!=t[211].length;++a)if(t[211][a].charCodeAt(0)!==65533){r[t[211][a]]=54016+a;e[54016+a]=t[211][a]}t[212]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æµ´å¯“è£•é¢„è±«é©­é¸³æ¸Šå†¤å…ƒåž£è¢åŽŸæ´è¾•å›­å‘˜åœ†çŒ¿æºç¼˜è¿œè‹‘æ„¿æ€¨é™¢æ›°çº¦è¶Šè·ƒé’¥å²³ç²¤æœˆæ‚¦é˜…è€˜äº‘éƒ§åŒ€é™¨å…è¿è•´é…æ™•éŸµå­•åŒç ¸æ‚æ ½å“‰ç¾å®°è½½å†åœ¨å’±æ”’æš‚èµžèµƒè„è‘¬é­ç³Ÿå‡¿è—»æž£æ—©æ¾¡èš¤èºå™ªé€ çš‚ç¶ç‡¥è´£æ‹©åˆ™æ³½è´¼æ€Žå¢žæ†Žæ›¾èµ æ‰Žå–³æ¸£æœ­è½§ï¿½".split("");for(a=0;a!=t[212].length;++a)if(t[212][a].charCodeAt(0)!==65533){r[t[212][a]]=54272+a;e[54272+a]=t[212][a]}t[213]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é“¡é—¸çœ¨æ …æ¦¨å’‹ä¹ç‚¸è¯ˆæ‘˜æ–‹å®…çª„å€ºå¯¨çž»æ¯¡è©¹ç²˜æ²¾ç›æ–©è¾—å´­å±•è˜¸æ ˆå æˆ˜ç«™æ¹›ç»½æ¨Ÿç« å½°æ¼³å¼ æŽŒæ¶¨æ–ä¸ˆå¸è´¦ä»—èƒ€ç˜´éšœæ‹›æ˜­æ‰¾æ²¼èµµç…§ç½©å…†è‚‡å¬é®æŠ˜å“²è›°è¾™è€…é”—è”—è¿™æµ™çæ–ŸçœŸç”„ç §è‡»è´žé’ˆä¾¦æž•ç–¹è¯Šéœ‡æŒ¯é•‡é˜µè’¸æŒ£çå¾ç‹°äº‰æ€”æ•´æ‹¯æ­£æ”¿ï¿½".split("");for(a=0;a!=t[213].length;++a)if(t[213][a].charCodeAt(0)!==65533){r[t[213][a]]=54528+a;e[54528+a]=t[213][a]}t[214]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¸§ç—‡éƒ‘è¯èŠæžæ”¯å±èœ˜çŸ¥è‚¢è„‚æ±ä¹‹ç»‡èŒç›´æ¤æ®–æ‰§å€¼ä¾„å€æŒ‡æ­¢è¶¾åªæ—¨çº¸å¿—æŒšæŽ·è‡³è‡´ç½®å¸œå³™åˆ¶æ™ºç§©ç¨šè´¨ç‚™ç—”æ»žæ²»çª’ä¸­ç›…å¿ é’Ÿè¡·ç»ˆç§è‚¿é‡ä»²ä¼—èˆŸå‘¨å·žæ´²è¯Œç²¥è½´è‚˜å¸šå’’çš±å®™æ˜¼éª¤ç æ ªè››æœ±çŒªè¯¸è¯›é€ç«¹çƒ›ç…®æ‹„çž©å˜±ä¸»è‘—æŸ±åŠ©è›€è´®é“¸ç­‘ï¿½".split("");for(a=0;a!=t[214].length;++a)if(t[214][a].charCodeAt(0)!==65533){r[t[214][a]]=54784+a;e[54784+a]=t[214][a]}t[215]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä½æ³¨ç¥é©»æŠ“çˆªæ‹½ä¸“ç –è½¬æ’°èµšç¯†æ¡©åº„è£…å¦†æ’žå£®çŠ¶æ¤Žé”¥è¿½èµ˜å ç¼€è°†å‡†æ‰æ‹™å“æ¡Œç¢èŒé…Œå•„ç€ç¼æµŠå…¹å’¨èµ„å§¿æ»‹æ·„å­œç´«ä»”ç±½æ»“å­è‡ªæ¸å­—é¬ƒæ£•è¸ªå®—ç»¼æ€»çºµé‚¹èµ°å¥æç§Ÿè¶³å’æ—ç¥–è¯…é˜»ç»„é’»çº‚å˜´é†‰æœ€ç½ªå°Šéµæ˜¨å·¦ä½æŸžåšä½œååº§ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½".split("");for(a=0;a!=t[215].length;++a)if(t[215][a].charCodeAt(0)!==65533){r[t[215][a]]=55040+a;e[55040+a]=t[215][a]}t[216]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½äºä¸Œå…€ä¸å»¿å…ä¸•äº˜ä¸žé¬²å­¬å™©ä¸¨ç¦ºä¸¿åŒ•ä¹‡å¤­çˆ»å®æ°å›Ÿèƒ¤é¦—æ¯“ç¾é¼—ä¸¶äºŸé¼ä¹œä¹©äº“èŠˆå­›å•¬å˜ä»„åŽåŽåŽ£åŽ¥åŽ®é¥èµåŒšåµåŒ¦åŒ®åŒ¾èµœå¦å£åˆ‚åˆˆåˆŽåˆ­åˆ³åˆ¿å‰€å‰Œå‰žå‰¡å‰œè’¯å‰½åŠ‚åŠåŠåŠ“å†‚ç½”äº»ä»ƒä»‰ä»‚ä»¨ä»¡ä»«ä»žä¼›ä»³ä¼¢ä½¤ä»µä¼¥ä¼§ä¼‰ä¼«ä½žä½§æ”¸ä½šä½ï¿½".split("");for(a=0;a!=t[216].length;++a)if(t[216][a].charCodeAt(0)!==65533){r[t[216][a]]=55296+a;e[55296+a]=t[216][a]}t[217]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ä½Ÿä½—ä¼²ä¼½ä½¶ä½´ä¾‘ä¾‰ä¾ƒä¾ä½¾ä½»ä¾ªä½¼ä¾¬ä¾”ä¿¦ä¿¨ä¿ªä¿…ä¿šä¿£ä¿œä¿‘ä¿Ÿä¿¸å€©åŒä¿³å€¬å€å€®å€­ä¿¾å€œå€Œå€¥å€¨å¾åƒå•åˆåŽå¬å»å‚¥å‚§å‚©å‚ºåƒ–å„†åƒ­åƒ¬åƒ¦åƒ®å„‡å„‹ä»æ°½ä½˜ä½¥ä¿Žé¾ æ±†ç±´å…®å·½é»‰é¦˜å†å¤”å‹¹åŒè¨‡åŒå‡«å¤™å…•äº å…–äº³è¡®è¢¤äºµè„”è£’ç¦€å¬´è ƒç¾¸å†«å†±å†½å†¼ï¿½".split("");for(a=0;a!=t[217].length;++a)if(t[217][a].charCodeAt(0)!==65533){r[t[217][a]]=55552+a;e[55552+a]=t[217][a]}t[218]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å‡‡å†–å†¢å†¥è® è®¦è®§è®ªè®´è®µè®·è¯‚è¯ƒè¯‹è¯è¯Žè¯’è¯“è¯”è¯–è¯˜è¯™è¯œè¯Ÿè¯ è¯¤è¯¨è¯©è¯®è¯°è¯³è¯¶è¯¹è¯¼è¯¿è°€è°‚è°„è°‡è°Œè°è°‘è°’è°”è°•è°–è°™è°›è°˜è°è°Ÿè° è°¡è°¥è°§è°ªè°«è°®è°¯è°²è°³è°µè°¶å©åºé˜é˜¢é˜¡é˜±é˜ªé˜½é˜¼é™‚é™‰é™”é™Ÿé™§é™¬é™²é™´éšˆéšéš—éš°é‚—é‚›é‚é‚™é‚¬é‚¡é‚´é‚³é‚¶é‚ºï¿½".split("");for(a=0;a!=t[218].length;++a)if(t[218][a].charCodeAt(0)!==65533){r[t[218][a]]=55808+a;e[55808+a]=t[218][a]}t[219]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é‚¸é‚°éƒéƒ…é‚¾éƒéƒ„éƒ‡éƒ“éƒ¦éƒ¢éƒœéƒ—éƒ›éƒ«éƒ¯éƒ¾é„„é„¢é„žé„£é„±é„¯é„¹é…ƒé…†åˆå¥‚åŠ¢åŠ¬åŠ­åŠ¾å“¿å‹å‹–å‹°åŸç‡®çŸå»´å‡µå‡¼é¬¯åŽ¶å¼ç•šå·¯åŒåž©åž¡å¡¾å¢¼å£…å£‘åœ©åœ¬åœªåœ³åœ¹åœ®åœ¯åœåœ»å‚å©åž…å«åž†å¼å»å¨å­å¶å³åž­åž¤åžŒåž²åŸåž§åž´åž“åž åŸ•åŸ˜åŸšåŸ™åŸ’åž¸åŸ´åŸ¯åŸ¸åŸ¤åŸï¿½".split("");for(a=0;a!=t[219].length;++a)if(t[219][a].charCodeAt(0)!==65533){r[t[219][a]]=56064+a;e[56064+a]=t[219][a]}t[220]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å ‹å åŸ½åŸ­å €å žå ™å¡„å  å¡¥å¡¬å¢å¢‰å¢šå¢€é¦¨é¼™æ‡¿è‰¹è‰½è‰¿èŠèŠŠèŠ¨èŠ„èŠŽèŠ‘èŠ—èŠ™èŠ«èŠ¸èŠ¾èŠ°è‹ˆè‹Šè‹£èŠ˜èŠ·èŠ®è‹‹è‹Œè‹èŠ©èŠ´èŠ¡èŠªèŠŸè‹„è‹ŽèŠ¤è‹¡èŒ‰è‹·è‹¤èŒèŒ‡è‹œè‹´è‹’è‹˜èŒŒè‹»è‹“èŒ‘èŒšèŒ†èŒ”èŒ•è‹ è‹•èŒœè‘è›èœèŒˆèŽ’èŒ¼èŒ´èŒ±èŽ›èžèŒ¯èè‡èƒèŸè€èŒ—è èŒ­èŒºèŒ³è¦è¥ï¿½".split("");for(a=0;a!=t[220].length;++a)if(t[220][a].charCodeAt(0)!==65533){r[t[220][a]]=56320+a;e[56320+a]=t[220][a]}t[221]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¨èŒ›è©è¬èªè­è®èŽ°è¸èŽ³èŽ´èŽ èŽªèŽ“èŽœèŽ…è¼èŽ¶èŽ©è½èŽ¸è»èŽ˜èŽžèŽ¨èŽºèŽ¼èèè¥è˜å ‡è˜è‹èè½è–èœè¸è‘è†è”èŸèèƒè¸è¹èªè…è€è¦è°è¡è‘œè‘‘è‘šè‘™è‘³è’‡è’ˆè‘ºè’‰è‘¸è¼è‘†è‘©è‘¶è’Œè’Žè±è‘­è“è“è“è“¦è’½è““è“Šè’¿è’ºè“ è’¡è’¹è’´è’—è“¥è“£è”Œç”è”¸è“°è”¹è”Ÿè”ºï¿½".split("");for(a=0;a!=t[221].length;++a)if(t[221][a].charCodeAt(0)!==65533){r[t[221][a]]=56576+a;e[56576+a]=t[221][a]}t[222]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è•–è”»è“¿è“¼è•™è•ˆè•¨è•¤è•žè•ºçž¢è•ƒè•²è•»è–¤è–¨è–‡è–è•¹è–®è–œè–…è–¹è–·è–°è—“è—è—œè—¿è˜§è˜…è˜©è˜–è˜¼å»¾å¼ˆå¤¼å¥è€·å¥•å¥šå¥˜åŒå°¢å°¥å°¬å°´æ‰Œæ‰ªæŠŸæŠ»æ‹Šæ‹šæ‹—æ‹®æŒ¢æ‹¶æŒ¹æ‹æƒæŽ­æ¶æ±æºæŽŽæŽ´æ­æŽ¬æŽŠæ©æŽ®æŽ¼æ²æ¸æ æ¿æ„æžæŽæ‘’æ†æŽ¾æ‘…æ‘æ‹æ›æ æŒæ¦æ¡æ‘žæ’„æ‘­æ’–ï¿½".split("");for(a=0;a!=t[222].length;++a)if(t[222][a].charCodeAt(0)!==65533){r[t[222][a]]=56832+a;e[56832+a]=t[222][a]}t[223]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ‘ºæ’·æ’¸æ’™æ’ºæ“€æ“æ“—æ“¤æ“¢æ”‰æ”¥æ”®å¼‹å¿’ç”™å¼‘åŸå±å½å©å¨å»å’å–å†å‘‹å‘’å‘“å‘”å‘–å‘ƒå¡å‘—å‘™å£å²å’‚å’”å‘·å‘±å‘¤å’šå’›å’„å‘¶å‘¦å’å“å’­å“‚å’´å“’å’§å’¦å““å“”å‘²å’£å“•å’»å’¿å“Œå“™å“šå“œå’©å’ªå’¤å“å“å“žå”›å“§å” å“½å””å“³å”¢å”£å”å”‘å”§å”ªå•§å–å–µå•‰å•­å•å••å”¿å•å”¼ï¿½".split("");for(a=0;a!=t[223].length;++a)if(t[223][a].charCodeAt(0)!==65533){r[t[223][a]]=57088+a;e[57088+a]=t[223][a]}t[224]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å”·å•–å•µå•¶å•·å”³å”°å•œå–‹å—’å–ƒå–±å–¹å–ˆå–å–Ÿå•¾å—–å–‘å•»å—Ÿå–½å–¾å–”å–™å—ªå—·å—‰å˜Ÿå—‘å—«å—¬å—”å—¦å—å—„å—¯å—¥å—²å—³å—Œå—å—¨å—µå—¤è¾”å˜žå˜ˆå˜Œå˜å˜¤å˜£å—¾å˜€å˜§å˜­å™˜å˜¹å™—å˜¬å™å™¢å™™å™œå™Œå™”åš†å™¤å™±å™«å™»å™¼åš…åš“åš¯å›”å›—å›å›¡å›µå›«å›¹å›¿åœ„åœŠåœ‰åœœå¸å¸™å¸”å¸‘å¸±å¸»å¸¼ï¿½".split("");for(a=0;a!=t[224].length;++a)if(t[224][a].charCodeAt(0)!==65533){r[t[224][a]]=57344+a;e[57344+a]=t[224][a]}t[225]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¸·å¹„å¹”å¹›å¹žå¹¡å²Œå±ºå²å²å²–å²ˆå²˜å²™å²‘å²šå²œå²µå²¢å²½å²¬å²«å²±å²£å³å²·å³„å³’å³¤å³‹å³¥å´‚å´ƒå´§å´¦å´®å´¤å´žå´†å´›åµ˜å´¾å´´å´½åµ¬åµ›åµ¯åµåµ«åµ‹åµŠåµ©åµ´å¶‚å¶™å¶è±³å¶·å·…å½³å½·å¾‚å¾‡å¾‰å¾Œå¾•å¾™å¾œå¾¨å¾­å¾µå¾¼è¡¢å½¡çŠ­çŠ°çŠ´çŠ·çŠ¸ç‹ƒç‹ç‹Žç‹ç‹’ç‹¨ç‹¯ç‹©ç‹²ç‹´ç‹·çŒç‹³çŒƒç‹ºï¿½".split("");for(a=0;a!=t[225].length;++a)if(t[225][a].charCodeAt(0)!==65533){r[t[225][a]]=57600+a;e[57600+a]=t[225][a]}t[226]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç‹»çŒ—çŒ“çŒ¡çŒŠçŒžçŒçŒ•çŒ¢çŒ¹çŒ¥çŒ¬çŒ¸çŒ±ççç—ç ç¬ç¯ç¾èˆ›å¤¥é£§å¤¤å¤‚é¥£é¥§é¥¨é¥©é¥ªé¥«é¥¬é¥´é¥·é¥½é¦€é¦„é¦‡é¦Šé¦é¦é¦‘é¦“é¦”é¦•åº€åº‘åº‹åº–åº¥åº åº¹åºµåº¾åº³èµ“å»’å»‘å»›å»¨å»ªè†ºå¿„å¿‰å¿–å¿æ€ƒå¿®æ€„å¿¡å¿¤å¿¾æ€…æ€†å¿ªå¿­å¿¸æ€™æ€µæ€¦æ€›æ€æ€æ€©æ€«æ€Šæ€¿æ€¡æ¸æ¹æ»æºæ‚ï¿½".split("");for(a=0;a!=t[226].length;++a)if(t[226][a].charCodeAt(0)!==65533){r[t[226][a]]=57856+a;e[57856+a]=t[226][a]}t[227]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æªæ½æ‚–æ‚šæ‚­æ‚æ‚ƒæ‚’æ‚Œæ‚›æƒ¬æ‚»æ‚±æƒæƒ˜æƒ†æƒšæ‚´æ„ æ„¦æ„•æ„£æƒ´æ„€æ„Žæ„«æ…Šæ…µæ†¬æ†”æ†§æ†·æ‡”æ‡µå¿éš³é—©é—«é—±é—³é—µé—¶é—¼é—¾é˜ƒé˜„é˜†é˜ˆé˜Šé˜‹é˜Œé˜é˜é˜’é˜•é˜–é˜—é˜™é˜šä¸¬çˆ¿æˆ•æ°µæ±”æ±œæ±Šæ²£æ²…æ²æ²”æ²Œæ±¨æ±©æ±´æ±¶æ²†æ²©æ³æ³”æ²­æ³·æ³¸æ³±æ³—æ²²æ³ æ³–æ³ºæ³«æ³®æ²±æ³“æ³¯æ³¾ï¿½".split("");for(a=0;a!=t[227].length;++a)if(t[227][a].charCodeAt(0)!==65533){r[t[227][a]]=58112+a;e[58112+a]=t[227][a]}t[228]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ´¹æ´§æ´Œæµƒæµˆæ´‡æ´„æ´™æ´Žæ´«æµæ´®æ´µæ´šæµæµ’æµ”æ´³æ¶‘æµ¯æ¶žæ¶ æµžæ¶“æ¶”æµœæµ æµ¼æµ£æ¸šæ·‡æ·…æ·žæ¸Žæ¶¿æ· æ¸‘æ·¦æ·æ·™æ¸–æ¶«æ¸Œæ¶®æ¸«æ¹®æ¹Žæ¹«æº²æ¹Ÿæº†æ¹“æ¹”æ¸²æ¸¥æ¹„æ»Ÿæº±æº˜æ» æ¼­æ»¢æº¥æº§æº½æº»æº·æ»—æº´æ»æºæ»‚æºŸæ½¢æ½†æ½‡æ¼¤æ¼•æ»¹æ¼¯æ¼¶æ½‹æ½´æ¼ªæ¼‰æ¼©æ¾‰æ¾æ¾Œæ½¸æ½²æ½¼æ½ºæ¿‘ï¿½".split("");for(a=0;a!=t[228].length;++a)if(t[228][a].charCodeAt(0)!==65533){r[t[228][a]]=58368+a;e[58368+a]=t[228][a]}t[229]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¿‰æ¾§æ¾¹æ¾¶æ¿‚æ¿¡æ¿®æ¿žæ¿ æ¿¯ç€šç€£ç€›ç€¹ç€µççžå®€å®„å®•å®“å®¥å®¸ç”¯éªžæ´å¯¤å¯®è¤°å¯°è¹‡è¬‡è¾¶è¿“è¿•è¿¥è¿®è¿¤è¿©è¿¦è¿³è¿¨é€…é€„é€‹é€¦é€‘é€é€–é€¡é€µé€¶é€­é€¯é„é‘é’éé¨é˜é¢é›æš¹é´é½é‚‚é‚ˆé‚ƒé‚‹å½å½—å½–å½˜å°»å’«å±å±™å­±å±£å±¦ç¾¼å¼ªå¼©å¼­è‰´å¼¼é¬»å±®å¦å¦ƒå¦å¦©å¦ªå¦£ï¿½".split("");for(a=0;a!=t[229].length;++a)if(t[229][a].charCodeAt(0)!==65533){r[t[229][a]]=58624+a;e[58624+a]=t[229][a]}t[230]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½å¦—å§Šå¦«å¦žå¦¤å§’å¦²å¦¯å§—å¦¾å¨…å¨†å§å¨ˆå§£å§˜å§¹å¨Œå¨‰å¨²å¨´å¨‘å¨£å¨“å©€å©§å©Šå©•å¨¼å©¢å©µèƒ¬åªªåª›å©·å©ºåª¾å««åª²å«’å«”åª¸å« å«£å«±å«–å«¦å«˜å«œå¬‰å¬—å¬–å¬²å¬·å­€å°•å°œå­šå­¥å­³å­‘å­“å­¢é©µé©·é©¸é©ºé©¿é©½éª€éªéª…éªˆéªŠéªéª’éª“éª–éª˜éª›éªœéªéªŸéª éª¢éª£éª¥éª§çºŸçº¡çº£çº¥çº¨çº©ï¿½".split("");for(a=0;a!=t[230].length;++a)if(t[230][a].charCodeAt(0)!==65533){r[t[230][a]]=58880+a;e[58880+a]=t[230][a]}t[231]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½çº­çº°çº¾ç»€ç»ç»‚ç»‰ç»‹ç»Œç»ç»”ç»—ç»›ç» ç»¡ç»¨ç»«ç»®ç»¯ç»±ç»²ç¼ç»¶ç»ºç»»ç»¾ç¼ç¼‚ç¼ƒç¼‡ç¼ˆç¼‹ç¼Œç¼ç¼‘ç¼’ç¼—ç¼™ç¼œç¼›ç¼Ÿç¼¡ç¼¢ç¼£ç¼¤ç¼¥ç¼¦ç¼§ç¼ªç¼«ç¼¬ç¼­ç¼¯ç¼°ç¼±ç¼²ç¼³ç¼µå¹ºç•¿å·›ç”¾é‚•çŽŽçŽ‘çŽ®çŽ¢çŽŸçç‚ç‘çŽ·çŽ³ç€ç‰çˆç¥ç™é¡¼çŠç©ç§çžçŽºç²ççªç‘›ç¦ç¥ç¨ç°ç®ç¬ï¿½".split("");for(a=0;a!=t[231].length;++a)if(t[231][a].charCodeAt(0)!==65533){r[t[231][a]]=59136+a;e[59136+a]=t[231][a]}t[232]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç›çšç‘ç‘œç‘—ç‘•ç‘™ç‘·ç‘­ç‘¾ç’œç’Žç’€ç’ç’‡ç’‹ç’žç’¨ç’©ç’ç’§ç“’ç’ºéŸªéŸ«éŸ¬æŒæ“æžæˆæ©æž¥æž‡æªæ³æž˜æž§æµæž¨æžžæž­æž‹æ·æ¼æŸ°æ ‰æŸ˜æ ŠæŸ©æž°æ ŒæŸ™æžµæŸšæž³æŸæ €æŸƒæž¸æŸ¢æ ŽæŸæŸ½æ ²æ ³æ¡ æ¡¡æ¡Žæ¡¢æ¡„æ¡¤æ¢ƒæ æ¡•æ¡¦æ¡æ¡§æ¡€æ ¾æ¡Šæ¡‰æ ©æ¢µæ¢æ¡´æ¡·æ¢“æ¡«æ£‚æ¥®æ£¼æ¤Ÿæ¤ æ£¹ï¿½".split("");for(a=0;a!=t[232].length;++a)if(t[232][a].charCodeAt(0)!==65533){r[t[232][a]]=59392+a;e[59392+a]=t[232][a]}t[233]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¤¤æ£°æ¤‹æ¤æ¥—æ££æ¤æ¥±æ¤¹æ¥ æ¥‚æ¥æ¦„æ¥«æ¦€æ¦˜æ¥¸æ¤´æ§Œæ¦‡æ¦ˆæ§Žæ¦‰æ¥¦æ¥£æ¥¹æ¦›æ¦§æ¦»æ¦«æ¦­æ§”æ¦±æ§æ§Šæ§Ÿæ¦•æ§ æ¦æ§¿æ¨¯æ§­æ¨—æ¨˜æ©¥æ§²æ©„æ¨¾æª æ©æ©›æ¨µæªŽæ©¹æ¨½æ¨¨æ©˜æ©¼æª‘æªæª©æª—æª«çŒ·ç’æ®æ®‚æ®‡æ®„æ®’æ®“æ®æ®šæ®›æ®¡æ®ªè½«è½­è½±è½²è½³è½µè½¶è½¸è½·è½¹è½ºè½¼è½¾è¾è¾‚è¾„è¾‡è¾‹ï¿½".split("");for(a=0;a!=t[233].length;++a)if(t[233][a].charCodeAt(0)!==65533){r[t[233][a]]=59648+a;e[59648+a]=t[233][a]}t[234]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è¾è¾Žè¾è¾˜è¾šè»Žæˆ‹æˆ—æˆ›æˆŸæˆ¢æˆ¡æˆ¥æˆ¤æˆ¬è‡§ç“¯ç“´ç“¿ç”ç”‘ç”“æ”´æ—®æ—¯æ—°æ˜Šæ˜™æ²æ˜ƒæ˜•æ˜€ç‚…æ›·æ˜æ˜´æ˜±æ˜¶æ˜µè€†æ™Ÿæ™”æ™æ™æ™–æ™¡æ™—æ™·æš„æšŒæš§æšæš¾æ››æ›œæ›¦æ›©è´²è´³è´¶è´»è´½èµ€èµ…èµ†èµˆèµ‰èµ‡èµèµ•èµ™è§‡è§Šè§‹è§Œè§Žè§è§è§‘ç‰®çŠŸç‰ç‰¦ç‰¯ç‰¾ç‰¿çŠ„çŠ‹çŠçŠçŠ’æŒˆæŒ²æŽ°ï¿½".split("");for(a=0;a!=t[234].length;++a)if(t[234][a].charCodeAt(0)!==65533){r[t[234][a]]=59904+a;e[59904+a]=t[234][a]}t[235]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ¿æ“˜è€„æ¯ªæ¯³æ¯½æ¯µæ¯¹æ°…æ°‡æ°†æ°æ°•æ°˜æ°™æ°šæ°¡æ°©æ°¤æ°ªæ°²æ”µæ••æ•«ç‰ç‰’ç‰–çˆ°è™¢åˆ–è‚Ÿè‚œè‚“è‚¼æœŠè‚½è‚±è‚«è‚­è‚´è‚·èƒ§èƒ¨èƒ©èƒªèƒ›èƒ‚èƒ„èƒ™èƒèƒ—æœèƒèƒ«èƒ±èƒ´èƒ­è„è„Žèƒ²èƒ¼æœ•è„’è±šè„¶è„žè„¬è„˜è„²è…ˆè…Œè…“è…´è…™è…šè…±è… è…©è…¼è…½è…­è…§å¡åªµè†ˆè†‚è†‘æ»•è†£è†ªè‡Œæœ¦è‡Šè†»ï¿½".split("");for(a=0;a!=t[235].length;++a)if(t[235][a].charCodeAt(0)!==65533){r[t[235][a]]=60160+a;e[60160+a]=t[235][a]}t[236]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è‡è†¦æ¬¤æ¬·æ¬¹æ­ƒæ­†æ­™é£‘é£’é£“é£•é£™é£šæ®³å½€æ¯‚è§³æ–é½‘æ–“æ–¼æ—†æ—„æ—ƒæ—Œæ—Žæ—’æ—–ç‚€ç‚œç‚–ç‚ç‚»çƒ€ç‚·ç‚«ç‚±çƒ¨çƒŠç„ç„“ç„–ç„¯ç„±ç…³ç…œç…¨ç……ç…²ç…Šç…¸ç…ºç†˜ç†³ç†µç†¨ç† ç‡ ç‡”ç‡§ç‡¹çˆçˆ¨ç¬ç„˜ç…¦ç†¹æˆ¾æˆ½æ‰ƒæ‰ˆæ‰‰ç¤»ç¥€ç¥†ç¥‰ç¥›ç¥œç¥“ç¥šç¥¢ç¥—ç¥ ç¥¯ç¥§ç¥ºç¦…ç¦Šç¦šç¦§ç¦³å¿‘å¿ï¿½".split("");for(a=0;a!=t[236].length;++a)if(t[236][a].charCodeAt(0)!==65533){r[t[236][a]]=60416+a;e[60416+a]=t[236][a]}t[237]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½æ€¼ææšæ§ææ™æ£æ‚«æ„†æ„æ…æ†©æ†æ‡‹æ‡‘æˆ†è‚€è¿æ²“æ³¶æ·¼çŸ¶çŸ¸ç €ç ‰ç —ç ˜ç ‘æ–«ç ­ç œç ç ¹ç ºç »ç Ÿç ¼ç ¥ç ¬ç £ç ©ç¡Žç¡­ç¡–ç¡—ç ¦ç¡ç¡‡ç¡Œç¡ªç¢›ç¢“ç¢šç¢‡ç¢œç¢¡ç¢£ç¢²ç¢¹ç¢¥ç£”ç£™ç£‰ç£¬ç£²ç¤…ç£´ç¤“ç¤¤ç¤žç¤´é¾›é»¹é»»é»¼ç›±çœ„çœç›¹çœ‡çœˆçœšçœ¢çœ™çœ­çœ¦çœµçœ¸çç‘ç‡çƒçšç¨ï¿½".split("");for(a=0;a!=t[237].length;++a)if(t[237][a].charCodeAt(0)!==65533){r[t[237][a]]=60672+a;e[60672+a]=t[237][a]}t[238]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¢ç¥ç¿çžç½çž€çžŒçž‘çžŸçž çž°çžµçž½ç”ºç•€ç•Žç•‹ç•ˆç•›ç•²ç•¹ç–ƒç½˜ç½¡ç½Ÿè©ˆç½¨ç½´ç½±ç½¹ç¾ç½¾ç›ç›¥è ²é’…é’†é’‡é’‹é’Šé’Œé’é’é’é’”é’—é’•é’šé’›é’œé’£é’¤é’«é’ªé’­é’¬é’¯é’°é’²é’´é’¶é’·é’¸é’¹é’ºé’¼é’½é’¿é“„é“ˆé“‰é“Šé“‹é“Œé“é“Žé“é“‘é“’é“•é“–é“—é“™é“˜é“›é“žé“Ÿé“ é“¢é“¤é“¥é“§é“¨é“ªï¿½".split("");for(a=0;a!=t[238].length;++a)if(t[238][a].charCodeAt(0)!==65533){r[t[238][a]]=60928+a;e[60928+a]=t[238][a]}t[239]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é“©é“«é“®é“¯é“³é“´é“µé“·é“¹é“¼é“½é“¿é”ƒé”‚é”†é”‡é”‰é”Šé”é”Žé”é”’é”“é””é”•é”–é”˜é”›é”é”žé”Ÿé”¢é”ªé”«é”©é”¬é”±é”²é”´é”¶é”·é”¸é”¼é”¾é”¿é•‚é”µé•„é•…é•†é•‰é•Œé•Žé•é•’é•“é•”é•–é•—é•˜é•™é•›é•žé•Ÿé•é•¡é•¢é•¤é•¥é•¦é•§é•¨é•©é•ªé•«é•¬é•¯é•±é•²é•³é”ºçŸ§çŸ¬é›‰ç§•ç§­ç§£ç§«ç¨†åµ‡ç¨ƒç¨‚ç¨žç¨”ï¿½".split("");for(a=0;a!=t[239].length;++a)if(t[239][a].charCodeAt(0)!==65533){r[t[239][a]]=61184+a;e[61184+a]=t[239][a]}t[240]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç¨¹ç¨·ç©‘é»é¦¥ç©°çšˆçšŽçš“çš™çš¤ç“žç“ ç”¬é¸ é¸¢é¸¨é¸©é¸ªé¸«é¸¬é¸²é¸±é¸¶é¸¸é¸·é¸¹é¸ºé¸¾é¹é¹‚é¹„é¹†é¹‡é¹ˆé¹‰é¹‹é¹Œé¹Žé¹‘é¹•é¹—é¹šé¹›é¹œé¹žé¹£é¹¦é¹§é¹¨é¹©é¹ªé¹«é¹¬é¹±é¹­é¹³ç–’ç–”ç––ç– ç–ç–¬ç–£ç–³ç–´ç–¸ç—„ç–±ç–°ç—ƒç—‚ç—–ç—ç—£ç—¨ç—¦ç—¤ç—«ç—§ç˜ƒç—±ç—¼ç—¿ç˜ç˜€ç˜…ç˜Œç˜—ç˜Šç˜¥ç˜˜ç˜•ç˜™ï¿½".split("");for(a=0;a!=t[240].length;++a)if(t[240][a].charCodeAt(0)!==65533){r[t[240][a]]=61440+a;e[61440+a]=t[240][a]}t[241]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç˜›ç˜¼ç˜¢ç˜ ç™€ç˜­ç˜°ç˜¿ç˜µç™ƒç˜¾ç˜³ç™ç™žç™”ç™œç™–ç™«ç™¯ç¿Šç«¦ç©¸ç©¹çª€çª†çªˆçª•çª¦çª çª¬çª¨çª­çª³è¡¤è¡©è¡²è¡½è¡¿è¢‚è¢¢è£†è¢·è¢¼è£‰è£¢è£Žè££è£¥è£±è¤šè£¼è£¨è£¾è£°è¤¡è¤™è¤“è¤›è¤Šè¤´è¤«è¤¶è¥è¥¦è¥»ç–‹èƒ¥çš²çš´çŸœè€’è€”è€–è€œè€ è€¢è€¥è€¦è€§è€©è€¨è€±è€‹è€µèƒè†èè’è©è±è¦ƒé¡¸é¢€é¢ƒï¿½".split("");for(a=0;a!=t[241].length;++a)if(t[241][a].charCodeAt(0)!==65533){r[t[241][a]]=61696+a;e[61696+a]=t[241][a]}t[242]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é¢‰é¢Œé¢é¢é¢”é¢šé¢›é¢žé¢Ÿé¢¡é¢¢é¢¥é¢¦è™è™”è™¬è™®è™¿è™ºè™¼è™»èš¨èšèš‹èš¬èšèš§èš£èšªèš“èš©èš¶è›„èšµè›Žèš°èšºèš±èš¯è›‰è›èš´è›©è›±è›²è›­è›³è›èœ“è›žè›´è›Ÿè›˜è›‘èœƒèœ‡è›¸èœˆèœŠèœèœ‰èœ£èœ»èœžèœ¥èœ®èœšèœ¾èˆèœ´èœ±èœ©èœ·èœ¿èž‚èœ¢è½è¾è»è è°èŒè®èž‹è“è£è¼è¤è™è¥èž“èž¯èž¨èŸ’ï¿½".split("");for(a=0;a!=t[242].length;++a)if(t[242][a].charCodeAt(0)!==65533){r[t[242][a]]=61952+a;e[61952+a]=t[242][a]}t[243]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½èŸ†èžˆèž…èž­èž—èžƒèž«èŸ¥èž¬èžµèž³èŸ‹èŸ“èž½èŸ‘èŸ€èŸŠèŸ›èŸªèŸ èŸ®è –è “èŸ¾è Šè ›è ¡è ¹è ¼ç¼¶ç½‚ç½„ç½…èˆç«ºç«½ç¬ˆç¬ƒç¬„ç¬•ç¬Šç¬«ç¬ç­‡ç¬¸ç¬ªç¬™ç¬®ç¬±ç¬ ç¬¥ç¬¤ç¬³ç¬¾ç¬žç­˜ç­šç­…ç­µç­Œç­ç­ ç­®ç­»ç­¢ç­²ç­±ç®ç®¦ç®§ç®¸ç®¬ç®ç®¨ç®…ç®ªç®œç®¢ç®«ç®´ç¯‘ç¯ç¯Œç¯ç¯šç¯¥ç¯¦ç¯ªç°Œç¯¾ç¯¼ç°ç°–ç°‹ï¿½".split("");for(a=0;a!=t[243].length;++a)if(t[243][a].charCodeAt(0)!==65533){r[t[243][a]]=62208+a;e[62208+a]=t[243][a]}t[244]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ç°Ÿç°ªç°¦ç°¸ç±ç±€è‡¾èˆèˆ‚èˆ„è‡¬è¡„èˆ¡èˆ¢èˆ£èˆ­èˆ¯èˆ¨èˆ«èˆ¸èˆ»èˆ³èˆ´èˆ¾è‰„è‰‰è‰‹è‰è‰šè‰Ÿè‰¨è¡¾è¢…è¢ˆè£˜è£Ÿè¥žç¾ç¾Ÿç¾§ç¾¯ç¾°ç¾²ç±¼æ•‰ç²‘ç²ç²œç²žç²¢ç²²ç²¼ç²½ç³ç³‡ç³Œç³ç³ˆç³…ç³—ç³¨è‰®æš¨ç¾¿ç¿Žç¿•ç¿¥ç¿¡ç¿¦ç¿©ç¿®ç¿³ç³¸çµ·ç¶¦ç¶®ç¹‡çº›éº¸éº´èµ³è¶„è¶”è¶‘è¶±èµ§èµ­è±‡è±‰é…Šé…é…Žé…é…¤ï¿½".split("");for(a=0;a!=t[244].length;++a)if(t[244][a].charCodeAt(0)!==65533){r[t[244][a]]=62464+a;e[62464+a]=t[244][a]}t[245]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é…¢é…¡é…°é…©é…¯é…½é…¾é…²é…´é…¹é†Œé†…é†é†é†‘é†¢é†£é†ªé†­é†®é†¯é†µé†´é†ºè±•é¹¾è¶¸è·«è¸…è¹™è¹©è¶µè¶¿è¶¼è¶ºè·„è·–è·—è·šè·žè·Žè·è·›è·†è·¬è··è·¸è·£è·¹è·»è·¤è¸‰è·½è¸”è¸è¸Ÿè¸¬è¸®è¸£è¸¯è¸ºè¹€è¸¹è¸µè¸½è¸±è¹‰è¹è¹‚è¹‘è¹’è¹Šè¹°è¹¶è¹¼è¹¯è¹´èº…èºèº”èºèºœèºžè±¸è²‚è²Šè²…è²˜è²”æ–›è§–è§žè§šè§œï¿½".split("");for(a=0;a!=t[245].length;++a)if(t[245][a].charCodeAt(0)!==65533){r[t[245][a]]=62720+a;e[62720+a]=t[245][a]}t[246]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½è§¥è§«è§¯è¨¾è¬¦é“é›©é›³é›¯éœ†éœéœˆéœéœŽéœªéœ­éœ°éœ¾é¾€é¾ƒé¾…é¾†é¾‡é¾ˆé¾‰é¾Šé¾Œé»¾é¼‹é¼éš¹éš¼éš½é›Žé›’çž¿é› éŠŽéŠ®é‹ˆéŒ¾éªéŠéŽé¾é‘«é±¿é²‚é²…é²†é²‡é²ˆç¨£é²‹é²Žé²é²‘é²’é²”é²•é²šé²›é²žé²Ÿé² é²¡é²¢é²£é²¥é²¦é²§é²¨é²©é²«é²­é²®é²°é²±é²²é²³é²´é²µé²¶é²·é²ºé²»é²¼é²½é³„é³…é³†é³‡é³Šé³‹ï¿½".split("");for(a=0;a!=t[246].length;++a)if(t[246][a].charCodeAt(0)!==65533){r[t[246][a]]=62976+a;e[62976+a]=t[246][a]}t[247]="ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½é³Œé³é³Žé³é³é³“é³”é³•é³—é³˜é³™é³œé³é³Ÿé³¢é¼éž…éž‘éž’éž”éž¯éž«éž£éž²éž´éª±éª°éª·é¹˜éª¶éªºéª¼é«é«€é«…é«‚é«‹é«Œé«‘é­…é­ƒé­‡é­‰é­ˆé­é­‘é£¨é¤é¤®é¥•é¥”é«Ÿé«¡é«¦é«¯é««é«»é«­é«¹é¬ˆé¬é¬“é¬Ÿé¬£éº½éº¾ç¸»éº‚éº‡éºˆéº‹éº’é–éºéºŸé»›é»œé»é» é»Ÿé»¢é»©é»§é»¥é»ªé»¯é¼¢é¼¬é¼¯é¼¹é¼·é¼½é¼¾é½„ï¿½".split("");for(a=0;a!=t[247].length;++a)if(t[247][a].charCodeAt(0)!==65533){r[t[247][a]]=63232+a;e[63232+a]=t[247][a]}return{enc:r,dec:e}}();cptable[10029]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ã„Ä€ÄÃ‰Ä„Ã–ÃœÃ¡Ä…ÄŒÃ¤ÄÄ†Ä‡Ã©Å¹ÅºÄŽÃ­ÄÄ’Ä“Ä–Ã³Ä—Ã´Ã¶ÃµÃºÄšÄ›Ã¼â€ Â°Ä˜Â£Â§â€¢Â¶ÃŸÂ®Â©â„¢Ä™Â¨â‰ Ä£Ä®Ä¯Äªâ‰¤â‰¥Ä«Ä¶âˆ‚âˆ‘Å‚Ä»Ä¼Ä½Ä¾Ä¹ÄºÅ…Å†ÅƒÂ¬âˆšÅ„Å‡âˆ†Â«Â»â€¦Â ÅˆÅÃ•Å‘ÅŒâ€“â€”â€œâ€â€˜â€™Ã·â—ŠÅÅ”Å•Å˜â€¹â€ºÅ™Å–Å—Å â€šâ€žÅ¡ÅšÅ›ÃÅ¤Å¥ÃÅ½Å¾ÅªÃ“Ã”Å«Å®ÃšÅ¯Å°Å±Å²Å³ÃÃ½Ä·Å»ÅÅ¼Ä¢Ë‡",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[10079]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ã„Ã…Ã‡Ã‰Ã‘Ã–ÃœÃ¡Ã Ã¢Ã¤Ã£Ã¥Ã§Ã©Ã¨ÃªÃ«Ã­Ã¬Ã®Ã¯Ã±Ã³Ã²Ã´Ã¶ÃµÃºÃ¹Ã»Ã¼ÃÂ°Â¢Â£Â§â€¢Â¶ÃŸÂ®Â©â„¢Â´Â¨â‰ Ã†Ã˜âˆžÂ±â‰¤â‰¥Â¥Âµâˆ‚âˆ‘âˆÏ€âˆ«ÂªÂºâ„¦Ã¦Ã¸Â¿Â¡Â¬âˆšÆ’â‰ˆâˆ†Â«Â»â€¦Â Ã€ÃƒÃ•Å’Å“â€“â€”â€œâ€â€˜â€™Ã·â—ŠÃ¿Å¸â„Â¤ÃÃ°ÃžÃ¾Ã½Â·â€šâ€žâ€°Ã‚ÃŠÃÃ‹ÃˆÃÃŽÃÃŒÃ“Ã”ï¿½Ã’ÃšÃ›Ã™Ä±Ë†ËœÂ¯Ë˜Ë™ËšÂ¸ËË›Ë‡",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[10081]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ã„Ã…Ã‡Ã‰Ã‘Ã–ÃœÃ¡Ã Ã¢Ã¤Ã£Ã¥Ã§Ã©Ã¨ÃªÃ«Ã­Ã¬Ã®Ã¯Ã±Ã³Ã²Ã´Ã¶ÃµÃºÃ¹Ã»Ã¼â€ Â°Â¢Â£Â§â€¢Â¶ÃŸÂ®Â©â„¢Â´Â¨â‰ Ã†Ã˜âˆžÂ±â‰¤â‰¥Â¥Âµâˆ‚âˆ‘âˆÏ€âˆ«ÂªÂºâ„¦Ã¦Ã¸Â¿Â¡Â¬âˆšÆ’â‰ˆâˆ†Â«Â»â€¦Â Ã€ÃƒÃ•Å’Å“â€“â€”â€œâ€â€˜â€™Ã·â—ŠÃ¿Å¸ÄžÄŸÄ°Ä±ÅžÅŸâ€¡Â·â€šâ€žâ€°Ã‚ÃŠÃÃ‹ÃˆÃÃŽÃÃŒÃ“Ã”ï¿½Ã’ÃšÃ›Ã™ï¿½Ë†ËœÂ¯Ë˜Ë™ËšÂ¸ËË›Ë‡",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();cptable[28591]=function(){var e="\0\b\t\n\x0B\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Â€ÂÂ‚ÂƒÂ„Â…Â†Â‡ÂˆÂ‰ÂŠÂ‹ÂŒÂÂŽÂÂÂ‘Â’Â“Â”Â•Â–Â—Â˜Â™ÂšÂ›ÂœÂÂžÂŸÂ Â¡Â¢Â£Â¤Â¥Â¦Â§Â¨Â©ÂªÂ«Â¬Â­Â®Â¯Â°Â±Â²Â³Â´ÂµÂ¶Â·Â¸Â¹ÂºÂ»Â¼Â½Â¾Â¿Ã€ÃÃ‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã—Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã·Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾Ã¿",r=[],t={};for(var a=0;a!=e.length;++a){if(e.charCodeAt(a)!==65533)t[e.charAt(a)]=a;r[a]=e.charAt(a)}return{enc:t,dec:r}}();if(typeof module!=="undefined"&&module.exports&&typeof DO_NOT_EXPORT_CODEPAGE==="undefined")module.exports=cptable;(function(e,r){"use strict";if(typeof cptable==="undefined"){if(typeof require!=="undefined"){var t=cptable;if(typeof module!=="undefined"&&module.exports&&typeof DO_NOT_EXPORT_CODEPAGE==="undefined")module.exports=r(t);else e.cptable=r(t)}else throw new Error("cptable not found")}else cptable=r(cptable)})(this,function(e){"use strict";var r={1200:"utf16le",1201:"utf16be",12000:"utf32le",12001:"utf32be",16969:"utf64le",20127:"ascii",65000:"utf7",65001:"utf8"};var t=[874,1250,1251,1252,1253,1254,1255,1256,1e4];var a=[932,936,949,950];var n=[65001];var i={};var s={};var f={};var l={};var o=function D(e){return String.fromCharCode(e)};var c=function P(e){return e.charCodeAt(0)};var h=typeof Buffer!=="undefined";var u=function(){};if(h){var d=!Buffer.from;if(!d)try{Buffer.from("foo","utf8")}catch(v){d=true}u=d?function(e,r){return r?new Buffer(e,r):new Buffer(e)}:Buffer.from.bind(Buffer);if(!Buffer.allocUnsafe)Buffer.allocUnsafe=function(e){return new Buffer(e)};var p=1024,m=Buffer.allocUnsafe(p);var g=function L(e){var r=Buffer.allocUnsafe(65536);for(var t=0;t<65536;++t)r[t]=0;var a=Object.keys(e),n=a.length;for(var i=0,s=a[i];i<n;++i){if(!(s=a[i]))continue;r[s.charCodeAt(0)]=e[s]}return r};var b=function M(r){var t=g(e[r].enc);return function a(e,r){var a=e.length;var n,i=0,s=0,f=0,l=0;if(typeof e==="string"){n=Buffer.allocUnsafe(a);for(i=0;i<a;++i)n[i]=t[e.charCodeAt(i)]}else if(Buffer.isBuffer(e)){
n=Buffer.allocUnsafe(2*a);s=0;for(i=0;i<a;++i){f=e[i];if(f<128)n[s++]=t[f];else if(f<224){n[s++]=t[((f&31)<<6)+(e[i+1]&63)];++i}else if(f<240){n[s++]=t[((f&15)<<12)+((e[i+1]&63)<<6)+(e[i+2]&63)];i+=2}else{l=((f&7)<<18)+((e[i+1]&63)<<12)+((e[i+2]&63)<<6)+(e[i+3]&63);i+=3;if(l<65536)n[s++]=t[l];else{l-=65536;n[s++]=t[55296+(l>>10&1023)];n[s++]=t[56320+(l&1023)]}}}n=n.slice(0,s)}else{n=Buffer.allocUnsafe(a);for(i=0;i<a;++i)n[i]=t[e[i].charCodeAt(0)]}if(!r||r==="buf")return n;if(r!=="arr")return n.toString("binary");return[].slice.call(n)}};var w=function U(r){var t=e[r].dec;var a=Buffer.allocUnsafe(131072),n=0,i="";for(n=0;n<t.length;++n){if(!(i=t[n]))continue;var s=i.charCodeAt(0);a[2*n]=s&255;a[2*n+1]=s>>8}return function f(e){var r=e.length,t=0,n=0;if(2*r>p){p=2*r;m=Buffer.allocUnsafe(p)}if(Buffer.isBuffer(e)){for(t=0;t<r;t++){n=2*e[t];m[2*t]=a[n];m[2*t+1]=a[n+1]}}else if(typeof e==="string"){for(t=0;t<r;t++){n=2*e.charCodeAt(t);m[2*t]=a[n];m[2*t+1]=a[n+1]}}else{for(t=0;t<r;t++){n=2*e[t];m[2*t]=a[n];m[2*t+1]=a[n+1]}}return m.slice(0,2*r).toString("ucs2")}};var k=function B(r){var t=e[r].enc;var a=Buffer.allocUnsafe(131072);for(var n=0;n<131072;++n)a[n]=0;var i=Object.keys(t);for(var s=0,f=i[s];s<i.length;++s){if(!(f=i[s]))continue;var l=f.charCodeAt(0);a[2*l]=t[f]&255;a[2*l+1]=t[f]>>8}return function o(e,r){var t=e.length,n=Buffer.allocUnsafe(2*t),i=0,s=0,f=0,l=0,o=0;if(typeof e==="string"){for(i=l=0;i<t;++i){s=e.charCodeAt(i)*2;n[l++]=a[s+1]||a[s];if(a[s+1]>0)n[l++]=a[s]}n=n.slice(0,l)}else if(Buffer.isBuffer(e)){for(i=l=0;i<t;++i){o=e[i];if(o<128)s=o;else if(o<224){s=((o&31)<<6)+(e[i+1]&63);++i}else if(o<240){s=((o&15)<<12)+((e[i+1]&63)<<6)+(e[i+2]&63);i+=2}else{s=((o&7)<<18)+((e[i+1]&63)<<12)+((e[i+2]&63)<<6)+(e[i+3]&63);i+=3}if(s<65536){s*=2;n[l++]=a[s+1]||a[s];if(a[s+1]>0)n[l++]=a[s]}else{f=s-65536;s=2*(55296+(f>>10&1023));n[l++]=a[s+1]||a[s];if(a[s+1]>0)n[l++]=a[s];s=2*(56320+(f&1023));n[l++]=a[s+1]||a[s];if(a[s+1]>0)n[l++]=a[s]}}n=n.slice(0,l)}else{for(i=l=0;i<t;i++){s=e[i].charCodeAt(0)*2;n[l++]=a[s+1]||a[s];if(a[s+1]>0)n[l++]=a[s]}}if(!r||r==="buf")return n;if(r!=="arr")return n.toString("binary");return[].slice.call(n)}};var T=function W(r){var t=e[r].dec;var a=Buffer.allocUnsafe(131072),n=0,i,s=0,f=0,l=0;for(l=0;l<65536;++l){a[2*l]=255;a[2*l+1]=253}for(n=0;n<t.length;++n){if(!(i=t[n]))continue;s=i.charCodeAt(0);f=2*n;a[f]=s&255;a[f+1]=s>>8}return function o(e){var r=e.length,t=Buffer.allocUnsafe(2*r),n=0,i=0,s=0;if(Buffer.isBuffer(e)){for(n=0;n<r;n++){i=2*e[n];if(a[i]===255&&a[i+1]===253){i=2*((e[n]<<8)+e[n+1]);++n}t[s++]=a[i];t[s++]=a[i+1]}}else if(typeof e==="string"){for(n=0;n<r;n++){i=2*e.charCodeAt(n);if(a[i]===255&&a[i+1]===253){i=2*((e.charCodeAt(n)<<8)+e.charCodeAt(n+1));++n}t[s++]=a[i];t[s++]=a[i+1]}}else{for(n=0;n<r;n++){i=2*e[n];if(a[i]===255&&a[i+1]===253){i=2*((e[n]<<8)+e[n+1]);++n}t[s++]=a[i];t[s++]=a[i+1]}}return t.slice(0,s).toString("ucs2")}};i[65001]=function z(e){if(typeof e==="string")return z(e.split("").map(c));var r=e.length,t=0,a=0;if(4*r>p){p=4*r;m=Buffer.allocUnsafe(p)}var n=0;if(r>=3&&e[0]==239)if(e[1]==187&&e[2]==191)n=3;for(var i=1,s=0,f=0;n<r;n+=i){i=1;f=e[n];if(f<128)t=f;else if(f<224){t=(f&31)*64+(e[n+1]&63);i=2}else if(f<240){t=((f&15)<<12)+(e[n+1]&63)*64+(e[n+2]&63);i=3}else{t=(f&7)*262144+((e[n+1]&63)<<12)+(e[n+2]&63)*64+(e[n+3]&63);i=4}if(t<65536){m[s++]=t&255;m[s++]=t>>8}else{t-=65536;a=55296+(t>>10&1023);t=56320+(t&1023);m[s++]=a&255;m[s++]=a>>>8;m[s++]=t&255;m[s++]=t>>>8&255}}return m.slice(0,s).toString("ucs2")};s[65001]=function H(e,r){if(h&&Buffer.isBuffer(e)){if(!r||r==="buf")return e;if(r!=="arr")return e.toString("binary");return[].slice.call(e)}var t=e.length,a=0,n=0,i=0;var s=typeof e==="string";if(4*t>p){p=4*t;m=Buffer.allocUnsafe(p)}for(var f=0;f<t;++f){a=s?e.charCodeAt(f):e[f].charCodeAt(0);if(a<=127)m[i++]=a;else if(a<=2047){m[i++]=192+(a>>6);m[i++]=128+(a&63)}else if(a>=55296&&a<=57343){a-=55296;++f;n=(s?e.charCodeAt(f):e[f].charCodeAt(0))-56320+(a<<10);m[i++]=240+(n>>>18&7);m[i++]=144+(n>>>12&63);m[i++]=128+(n>>>6&63);m[i++]=128+(n&63)}else{m[i++]=224+(a>>12);m[i++]=128+(a>>6&63);m[i++]=128+(a&63)}}if(!r||r==="buf")return m.slice(0,i);if(r!=="arr")return m.slice(0,i).toString("binary");return[].slice.call(m,0,i)}}var A=function V(){if(h){if(f[t[0]])return;var r=0,o=0;for(r=0;r<t.length;++r){o=t[r];if(e[o]){f[o]=w(o);l[o]=b(o)}}for(r=0;r<a.length;++r){o=a[r];if(e[o]){f[o]=T(o);l[o]=k(o)}}for(r=0;r<n.length;++r){o=n[r];if(i[o])f[o]=i[o];if(s[o])l[o]=s[o]}}};var y=function(e,r){void r;return""};var E=function X(e){delete f[e];delete l[e]};var C=function G(){if(h){if(!f[t[0]])return;t.forEach(E);a.forEach(E);n.forEach(E)}O=y;R=0};var _={encache:A,decache:C,sbcs:t,dbcs:a};A();var S="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'(),-./:?";var O=y,R=0;var I=function $(t,a,n){if(t===R&&O){return O(a,n)}if(l[t]){O=l[R=t];return O(a,n)}if(h&&Buffer.isBuffer(a))a=a.toString("utf8");var i=a.length;var s=h?Buffer.allocUnsafe(4*i):[],f=0,c=0,d=0,v=0;var p=e[t],m,g="";var b=typeof a==="string";if(p&&(m=p.enc))for(c=0;c<i;++c,++d){f=m[b?a.charAt(c):a[c]];if(f>255){s[d]=f>>8;s[++d]=f&255}else s[d]=f&255}else if(g=r[t])switch(g){case"utf8":if(h&&b){s=u(a,g);d=s.length;break}for(c=0;c<i;++c,++d){f=b?a.charCodeAt(c):a[c].charCodeAt(0);if(f<=127)s[d]=f;else if(f<=2047){s[d]=192+(f>>6);s[++d]=128+(f&63)}else if(f>=55296&&f<=57343){f-=55296;v=(b?a.charCodeAt(++c):a[++c].charCodeAt(0))-56320+(f<<10);s[d]=240+(v>>>18&7);s[++d]=144+(v>>>12&63);s[++d]=128+(v>>>6&63);s[++d]=128+(v&63)}else{s[d]=224+(f>>12);s[++d]=128+(f>>6&63);s[++d]=128+(f&63)}}break;case"ascii":if(h&&typeof a==="string"){s=u(a,g);d=s.length;break}for(c=0;c<i;++c,++d){f=b?a.charCodeAt(c):a[c].charCodeAt(0);if(f<=127)s[d]=f;else throw new Error("bad ascii "+f)}break;case"utf16le":if(h&&typeof a==="string"){s=u(a,g);d=s.length;break}for(c=0;c<i;++c){f=b?a.charCodeAt(c):a[c].charCodeAt(0);s[d++]=f&255;s[d++]=f>>8}break;case"utf16be":for(c=0;c<i;++c){f=b?a.charCodeAt(c):a[c].charCodeAt(0);s[d++]=f>>8;s[d++]=f&255}break;case"utf32le":for(c=0;c<i;++c){f=b?a.charCodeAt(c):a[c].charCodeAt(0);if(f>=55296&&f<=57343)f=65536+(f-55296<<10)+(a[++c].charCodeAt(0)-56320);s[d++]=f&255;f>>=8;s[d++]=f&255;f>>=8;s[d++]=f&255;f>>=8;s[d++]=f&255}break;case"utf32be":for(c=0;c<i;++c){f=b?a.charCodeAt(c):a[c].charCodeAt(0);if(f>=55296&&f<=57343)f=65536+(f-55296<<10)+(a[++c].charCodeAt(0)-56320);s[d+3]=f&255;f>>=8;s[d+2]=f&255;f>>=8;s[d+1]=f&255;f>>=8;s[d]=f&255;d+=4}break;case"utf7":for(c=0;c<i;c++){var w=b?a.charAt(c):a[c].charAt(0);if(w==="+"){s[d++]=43;s[d++]=45;continue}if(x.indexOf(w)>-1){s[d++]=w.charCodeAt(0);continue}var k=$(1201,w);s[d++]=43;s[d++]=S.charCodeAt(k[0]>>2);s[d++]=S.charCodeAt(((k[0]&3)<<4)+((k[1]||0)>>4));s[d++]=S.charCodeAt(((k[1]&15)<<2)+((k[2]||0)>>6));s[d++]=45}break;default:throw new Error("Unsupported magic: "+t+" "+r[t]);}else throw new Error("Unrecognized CP: "+t);s=s.slice(0,d);if(!h)return n=="str"?s.map(o).join(""):s;if(!n||n==="buf")return s;if(n!=="arr")return s.toString("binary");return[].slice.call(s)};var N=function j(t,a){var n;if(n=f[t])return n(a);if(typeof a==="string")return j(t,a.split("").map(c));var i=a.length,s=new Array(i),l="",o=0,u=0,d=1,v=0,p=0;var m=e[t],g,b="";if(m&&(g=m.dec)){for(u=0;u<i;u+=d){d=2;l=g[(a[u]<<8)+a[u+1]];if(!l){d=1;l=g[a[u]]}if(!l)throw new Error("Unrecognized code: "+a[u]+" "+a[u+d-1]+" "+u+" "+d+" "+g[a[u]]);s[v++]=l}}else if(b=r[t])switch(b){case"utf8":if(i>=3&&a[0]==239)if(a[1]==187&&a[2]==191)u=3;for(;u<i;u+=d){d=1;if(a[u]<128)o=a[u];else if(a[u]<224){o=(a[u]&31)*64+(a[u+1]&63);d=2}else if(a[u]<240){o=((a[u]&15)<<12)+(a[u+1]&63)*64+(a[u+2]&63);d=3}else{o=(a[u]&7)*262144+((a[u+1]&63)<<12)+(a[u+2]&63)*64+(a[u+3]&63);d=4}if(o<65536){s[v++]=String.fromCharCode(o)}else{o-=65536;p=55296+(o>>10&1023);o=56320+(o&1023);s[v++]=String.fromCharCode(p);s[v++]=String.fromCharCode(o)}}break;case"ascii":if(h&&Buffer.isBuffer(a))return a.toString(b);for(u=0;u<i;u++)s[u]=String.fromCharCode(a[u]);v=i;break;case"utf16le":if(i>=2&&a[0]==255)if(a[1]==254)u=2;if(h&&Buffer.isBuffer(a))return a.toString(b);d=2;for(;u+1<i;u+=d){s[v++]=String.fromCharCode((a[u+1]<<8)+a[u])}break;case"utf16be":if(i>=2&&a[0]==254)if(a[1]==255)u=2;d=2;for(;u+1<i;u+=d){s[v++]=String.fromCharCode((a[u]<<8)+a[u+1])}break;case"utf32le":if(i>=4&&a[0]==255)if(a[1]==254&&a[2]===0&&a[3]===0)u=4;d=4;for(;u<i;u+=d){o=(a[u+3]<<24)+(a[u+2]<<16)+(a[u+1]<<8)+a[u];if(o>65535){o-=65536;s[v++]=String.fromCharCode(55296+(o>>10&1023));s[v++]=String.fromCharCode(56320+(o&1023))}else s[v++]=String.fromCharCode(o)}break;case"utf32be":if(i>=4&&a[3]==255)if(a[2]==254&&a[1]===0&&a[0]===0)u=4;d=4;for(;u<i;u+=d){o=(a[u]<<24)+(a[u+1]<<16)+(a[u+2]<<8)+a[u+3];if(o>65535){o-=65536;s[v++]=String.fromCharCode(55296+(o>>10&1023));s[v++]=String.fromCharCode(56320+(o&1023))}else s[v++]=String.fromCharCode(o)}break;case"utf7":if(i>=4&&a[0]==43&&a[1]==47&&a[2]==118){if(i>=5&&a[3]==56&&a[4]==45)u=5;else if(a[3]==56||a[3]==57||a[3]==43||a[3]==47)u=4}for(;u<i;u+=d){if(a[u]!==43){d=1;s[v++]=String.fromCharCode(a[u]);continue}d=1;if(a[u+1]===45){d=2;s[v++]="+";continue}while(String.fromCharCode(a[u+d]).match(/[A-Za-z0-9+\/]/))d++;var w=0;if(a[u+d]===45){++d;w=1}var k=[];var T="";var A=0,y=0,E=0;var C=0,_=0,x=0,O=0;for(var R=1;R<d-w;){C=S.indexOf(String.fromCharCode(a[u+R++]));_=S.indexOf(String.fromCharCode(a[u+R++]));A=C<<2|_>>4;k.push(A);x=S.indexOf(String.fromCharCode(a[u+R++]));if(x===-1)break;y=(_&15)<<4|x>>2;k.push(y);O=S.indexOf(String.fromCharCode(a[u+R++]));if(O===-1)break;E=(x&3)<<6|O;if(O<64)k.push(E)}T=j(1201,k);for(R=0;R<T.length;++R)s[v++]=T.charAt(R)}break;default:throw new Error("Unsupported magic: "+t+" "+r[t]);}else throw new Error("Unrecognized CP: "+t);return s.slice(0,v).join("")};var F=function K(t){return!!(e[t]||r[t])};e.utils={decode:N,encode:I,hascp:F,magic:r,cache:_};return e});var XLSX={};function make_xlsx_lib(e){e.version="0.20.0";var r=1200,t=1252;var a;var n=[874,932,936,949,950,1250,1251,1252,1253,1254,1255,1256,1257,1258,1e4];var i={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969};var s=function(e){if(n.indexOf(e)==-1)return;t=i[0]=e};function f(){s(1252)}var l=function(e){r=e;s(e)};function o(){l(1200);f()}function c(e){var r=[];for(var t=0,a=e.length;t<a;++t)r[t]=e.charCodeAt(t);return r}function h(e){var r=[];for(var t=0;t<e.length>>1;++t)r[t]=String.fromCharCode(e.charCodeAt(2*t)+(e.charCodeAt(2*t+1)<<8));return r.join("")}function u(e){var r=[];for(var t=0;t<e.length>>1;++t)r[t]=String.fromCharCode(e[2*t]+(e[2*t+1]<<8));return r.join("")}function d(e){var r=[];for(var t=0;t<e.length>>1;++t)r[t]=String.fromCharCode(e.charCodeAt(2*t+1)+(e.charCodeAt(2*t)<<8));return r.join("")}var v=function(e){var r=e.charCodeAt(0),t=e.charCodeAt(1);if(r==255&&t==254)return h(e.slice(2));if(r==254&&t==255)return d(e.slice(2));if(r==65279)return e.slice(1);return e};var p=function fT(e){return String.fromCharCode(e)};var m=function lT(e){return String.fromCharCode(e)};function g(e){a=e;l=function(e){r=e;s(e)};v=function(e){if(e.charCodeAt(0)===255&&e.charCodeAt(1)===254){return a.utils.decode(1200,c(e.slice(2)))}return e};p=function n(e){if(r===1200)return String.fromCharCode(e);return a.utils.decode(r,[e&255,e>>8])[0]};m=function i(e){return a.utils.decode(t,[e])[0]};fa()}var b=null;var w=true;var k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function T(e){var r="";var t=0,a=0,n=0,i=0,s=0,f=0,l=0;for(var o=0;o<e.length;){t=e.charCodeAt(o++);i=t>>2;a=e.charCodeAt(o++);s=(t&3)<<4|a>>4;n=e.charCodeAt(o++);f=(a&15)<<2|n>>6;l=n&63;if(isNaN(a)){f=l=64}else if(isNaN(n)){l=64}r+=k.charAt(i)+k.charAt(s)+k.charAt(f)+k.charAt(l)}return r}function A(e){var r="";var t=0,a=0,n=0,i=0,s=0,f=0,l=0;for(var o=0;o<e.length;){t=e.charCodeAt(o++);if(t>255)t=95;i=t>>2;a=e.charCodeAt(o++);if(a>255)a=95;s=(t&3)<<4|a>>4;n=e.charCodeAt(o++);if(n>255)n=95;f=(a&15)<<2|n>>6;l=n&63;if(isNaN(a)){f=l=64}else if(isNaN(n)){l=64}r+=k.charAt(i)+k.charAt(s)+k.charAt(f)+k.charAt(l)}return r}function y(e){var r="";var t=0,a=0,n=0,i=0,s=0,f=0,l=0;for(var o=0;o<e.length;){t=e[o++];i=t>>2;a=e[o++];s=(t&3)<<4|a>>4;n=e[o++];f=(a&15)<<2|n>>6;l=n&63;if(isNaN(a)){f=l=64}else if(isNaN(n)){l=64}r+=k.charAt(i)+k.charAt(s)+k.charAt(f)+k.charAt(l)}return r}function E(e){var r="";var t=0,a=0,n=0,i=0,s=0,f=0,l=0;e=e.replace(/^data:([^\/]+\/[^\/]+)?;base64\,/,"").replace(/[^\w\+\/\=]/g,"");for(var o=0;o<e.length;){i=k.indexOf(e.charAt(o++));s=k.indexOf(e.charAt(o++));t=i<<2|s>>4;r+=String.fromCharCode(t);f=k.indexOf(e.charAt(o++));a=(s&15)<<4|f>>2;if(f!==64){r+=String.fromCharCode(a)}l=k.indexOf(e.charAt(o++));n=(f&3)<<6|l;if(l!==64){r+=String.fromCharCode(n)}}return r}var C=function(){return typeof Buffer!=="undefined"&&typeof undefined!=="undefined"&&typeof{}!=="undefined"&&!!{}.node}();var _=function(){if(typeof Buffer!=="undefined"){var e=!Buffer.from;if(!e)try{Buffer.from("foo","utf8")}catch(r){e=true}return e?function(e,r){return r?new Buffer(e,r):new Buffer(e)}:Buffer.from.bind(Buffer)}return function(){}}();var S=function(){if(typeof Buffer==="undefined")return false;var e=_([65,0]);if(!e)return false;var r=e.toString("utf16le");return r.length==1}();function x(e){if(C)return Buffer.alloc?Buffer.alloc(e):new Buffer(e);return typeof Uint8Array!="undefined"?new Uint8Array(e):new Array(e)}function O(e){if(C)return Buffer.allocUnsafe?Buffer.allocUnsafe(e):new Buffer(e);return typeof Uint8Array!="undefined"?new Uint8Array(e):new Array(e)}var R=function oT(e){if(C)return _(e,"binary");return e.split("").map(function(e){return e.charCodeAt(0)&255})};function I(e){if(typeof ArrayBuffer==="undefined")return R(e);var r=new ArrayBuffer(e.length),t=new Uint8Array(r);for(var a=0;a!=e.length;++a)t[a]=e.charCodeAt(a)&255;return r}function N(e){if(Array.isArray(e))return e.map(function(e){return String.fromCharCode(e)}).join("");var r=[];for(var t=0;t<e.length;++t)r[t]=String.fromCharCode(e[t]);return r.join("")}function F(e){if(typeof Uint8Array==="undefined")throw new Error("Unsupported");return new Uint8Array(e)}function D(e){if(typeof ArrayBuffer=="undefined")throw new Error("Unsupported");if(e instanceof ArrayBuffer)return D(new Uint8Array(e));var r=new Array(e.length);for(var t=0;t<e.length;++t)r[t]=e[t];return r}var P=C?function(e){return Buffer.concat(e.map(function(e){return Buffer.isBuffer(e)?e:_(e)}))}:function(e){if(typeof Uint8Array!=="undefined"){var r=0,t=0;for(r=0;r<e.length;++r)t+=e[r].length;var a=new Uint8Array(t);var n=0;for(r=0,t=0;r<e.length;t+=n,++r){n=e[r].length;if(e[r]instanceof Uint8Array)a.set(e[r],t);else if(typeof e[r]=="string")a.set(new Uint8Array(R(e[r])),t);else a.set(new Uint8Array(e[r]),t)}return a}return[].concat.apply([],e.map(function(e){return Array.isArray(e)?e:[].slice.call(e)}))};function L(e){var r=[],t=0,a=e.length+250;var n=x(e.length+255);for(var i=0;i<e.length;++i){var s=e.charCodeAt(i);if(s<128)n[t++]=s;else if(s<2048){n[t++]=192|s>>6&31;n[t++]=128|s&63}else if(s>=55296&&s<57344){s=(s&1023)+64;var f=e.charCodeAt(++i)&1023;n[t++]=240|s>>8&7;n[t++]=128|s>>2&63;n[t++]=128|f>>6&15|(s&3)<<4;n[t++]=128|f&63}else{n[t++]=224|s>>12&15;n[t++]=128|s>>6&63;n[t++]=128|s&63}if(t>a){r.push(n.slice(0,t));t=0;n=x(65535);a=65530}}r.push(n.slice(0,t));return P(r)}var M=/\u0000/g,U=/[\u0001-\u0006]/g;function B(e){var r="",t=e.length-1;while(t>=0)r+=e.charAt(t--);return r}function W(e,r){var t=""+e;return t.length>=r?t:Tr("0",r-t.length)+t}function z(e,r){var t=""+e;return t.length>=r?t:Tr(" ",r-t.length)+t}function H(e,r){var t=""+e;return t.length>=r?t:t+Tr(" ",r-t.length)}function V(e,r){var t=""+Math.round(e);return t.length>=r?t:Tr("0",r-t.length)+t}function X(e,r){var t=""+e;return t.length>=r?t:Tr("0",r-t.length)+t}var G=Math.pow(2,32);function j(e,r){if(e>G||e<-G)return V(e,r);var t=Math.round(e);return X(t,r)}function K(e,r){r=r||0;return e.length>=7+r&&(e.charCodeAt(r)|32)===103&&(e.charCodeAt(r+1)|32)===101&&(e.charCodeAt(r+2)|32)===110&&(e.charCodeAt(r+3)|32)===101&&(e.charCodeAt(r+4)|32)===114&&(e.charCodeAt(r+5)|32)===97&&(e.charCodeAt(r+6)|32)===108}var Y=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]];var Z=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function J(e){if(!e)e={};e[0]="General";e[1]="0";e[2]="0.00";e[3]="#,##0";e[4]="#,##0.00";e[9]="0%";e[10]="0.00%";e[11]="0.00E+00";e[12]="# ?/?";e[13]="# ??/??";e[14]="m/d/yy";e[15]="d-mmm-yy";e[16]="d-mmm";e[17]="mmm-yy";e[18]="h:mm AM/PM";e[19]="h:mm:ss AM/PM";e[20]="h:mm";e[21]="h:mm:ss";e[22]="m/d/yy h:mm";e[37]="#,##0 ;(#,##0)";e[38]="#,##0 ;[Red](#,##0)";e[39]="#,##0.00;(#,##0.00)";e[40]="#,##0.00;[Red](#,##0.00)";e[45]="mm:ss";e[46]="[h]:mm:ss";e[47]="mmss.0";e[48]="##0.0E+0";e[49]="@";e[56]='"ä¸Šåˆ/ä¸‹åˆ "hh"æ™‚"mm"åˆ†"ss"ç§’ "';return e}var q={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"ä¸Šåˆ/ä¸‹åˆ "hh"æ™‚"mm"åˆ†"ss"ç§’ "'};var Q={5:37,6:38,7:39,8:40,23:0,24:0,25:0,26:0,27:14,28:14,29:14,30:14,31:14,50:14,51:14,52:14,53:14,54:14,55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,67:9,68:10,69:12,70:13,71:14,72:14,73:15,74:16,75:17,76:20,77:21,78:22,79:45,80:46,81:47,82:0};var ee={5:'"$"#,##0_);\\("$"#,##0\\)',63:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',41:'_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'};function re(e,r,t){var a=e<0?-1:1;var n=e*a;var i=0,s=1,f=0;var l=1,o=0,c=0;var h=Math.floor(n);while(o<r){h=Math.floor(n);f=h*s+i;c=h*o+l;if(n-h<5e-8)break;n=1/(n-h);i=s;s=f;l=o;o=c}if(c>r){if(o>r){c=l;f=i}else{c=o;f=s}}if(!t)return[0,a*f,c];var u=Math.floor(a*f/c);return[u,a*f-u*c,c]}function te(e,r,t){if(e>2958465||e<0)return null;var a=e|0,n=Math.floor(86400*(e-a)),i=0;var s=[];var f={D:a,T:n,u:86400*(e-a)-n,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(f.u)<1e-6)f.u=0;if(r&&r.date1904)a+=1462;if(f.u>.9999){f.u=0;if(++n==86400){f.T=n=0;++a;++f.D}}if(a===60){s=t?[1317,10,29]:[1900,2,29];i=3}else if(a===0){s=t?[1317,8,29]:[1900,1,0];i=6}else{if(a>60)--a;var l=new Date(1900,0,1);l.setDate(l.getDate()+a-1);s=[l.getFullYear(),l.getMonth()+1,l.getDate()];i=l.getDay();if(a<60)i=(i+6)%7;if(t)i=oe(l,s)}f.y=s[0];f.m=s[1];f.d=s[2];f.S=n%60;n=Math.floor(n/60);f.M=n%60;n=Math.floor(n/60);f.H=n;f.q=i;return f}function ae(e){return e.indexOf(".")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,"$1")}function ne(e){if(e.indexOf("E")==-1)return e;return e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,"$1E").replace(/(E[+-])(\d)$/,"$10$2")}function ie(e){var r=e<0?12:11;var t=ae(e.toFixed(12));if(t.length<=r)return t;t=e.toPrecision(10);if(t.length<=r)return t;return e.toExponential(5)}function se(e){var r=ae(e.toFixed(11));return r.length>(e<0?12:11)||r==="0"||r==="-0"?e.toPrecision(6):r}function fe(e){var r=Math.floor(Math.log(Math.abs(e))*Math.LOG10E),t;if(r>=-4&&r<=-1)t=e.toPrecision(10+r);else if(Math.abs(r)<=9)t=ie(e);else if(r===10)t=e.toFixed(10).substr(0,12);else t=se(e);return ae(ne(t.toUpperCase()))}function le(e,r){switch(typeof e){case"string":return e;case"boolean":return e?"TRUE":"FALSE";case"number":return(e|0)===e?e.toString(10):fe(e);case"undefined":return"";case"object":if(e==null)return"";if(e instanceof Date)return We(14,ur(e,r&&r.date1904),r);}throw new Error("unsupported value in General format: "+e)}function oe(e,r){r[0]-=581;var t=e.getDay();if(e<60)t=(t+6)%7;return t}function ce(e,r,t,a){var n="",i=0,s=0,f=t.y,l,o=0;switch(e){case 98:f=t.y+543;case 121:switch(r.length){case 1:;case 2:l=f%100;o=2;break;default:l=f%1e4;o=4;break;}break;case 109:switch(r.length){case 1:;case 2:l=t.m;o=r.length;break;case 3:return Z[t.m-1][1];case 5:return Z[t.m-1][0];default:return Z[t.m-1][2];}break;case 100:switch(r.length){case 1:;case 2:l=t.d;o=r.length;break;case 3:return Y[t.q][0];default:return Y[t.q][1];}break;case 104:switch(r.length){case 1:;case 2:l=1+(t.H+11)%12;o=r.length;break;default:throw"bad hour format: "+r;}break;case 72:switch(r.length){case 1:;case 2:l=t.H;o=r.length;break;default:throw"bad hour format: "+r;}break;case 77:switch(r.length){case 1:;case 2:l=t.M;o=r.length;break;default:throw"bad minute format: "+r;}break;case 115:if(r!="s"&&r!="ss"&&r!=".0"&&r!=".00"&&r!=".000")throw"bad second format: "+r;if(t.u===0&&(r=="s"||r=="ss"))return W(t.S,r.length);if(a>=2)s=a===3?1e3:100;else s=a===1?10:1;i=Math.round(s*(t.S+t.u));if(i>=60*s)i=0;if(r==="s")return i===0?"0":""+i/s;n=W(i,2+a);if(r==="ss")return n.substr(0,2);return"."+n.substr(2,r.length-1);case 90:switch(r){case"[h]":;case"[hh]":l=t.D*24+t.H;break;case"[m]":;case"[mm]":l=(t.D*24+t.H)*60+t.M;break;case"[s]":;case"[ss]":l=((t.D*24+t.H)*60+t.M)*60+Math.round(t.S+t.u);break;default:throw"bad abstime format: "+r;}o=r.length===3?1:2;break;case 101:l=f;o=1;break;}var c=o>0?W(l,o):"";return c}function he(e){var r=3;if(e.length<=r)return e;var t=e.length%r,a=e.substr(0,t);for(;t!=e.length;t+=r)a+=(a.length>0?",":"")+e.substr(t,r);return a}var ue=/%/g;function de(e,r,t){var a=r.replace(ue,""),n=r.length-a.length;return Ne(e,a,t*Math.pow(10,2*n))+Tr("%",n)}function ve(e,r,t){var a=r.length-1;while(r.charCodeAt(a-1)===44)--a;return Ne(e,r.substr(0,a),t/Math.pow(10,3*(r.length-a)))}function pe(e,r){var t;var a=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(r==0)return"0.0E+0";else if(r<0)return"-"+pe(e,-r);var n=e.indexOf(".");if(n===-1)n=e.indexOf("E");var i=Math.floor(Math.log(r)*Math.LOG10E)%n;if(i<0)i+=n;t=(r/Math.pow(10,i)).toPrecision(a+1+(n+i)%n);if(t.indexOf("e")===-1){var s=Math.floor(Math.log(r)*Math.LOG10E);if(t.indexOf(".")===-1)t=t.charAt(0)+"."+t.substr(1)+"E+"+(s-t.length+i);else t+="E+"+(s-i);while(t.substr(0,2)==="0."){t=t.charAt(0)+t.substr(2,n)+"."+t.substr(2+n);t=t.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.")}t=t.replace(/\+-/,"-")}t=t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,r,t,a){return r+t+a.substr(0,(n+i)%n)+"."+a.substr(i)+"E"})}else t=r.toExponential(a);if(e.match(/E\+00$/)&&t.match(/e[+-]\d$/))t=t.substr(0,t.length-1)+"0"+t.charAt(t.length-1);if(e.match(/E\-/)&&t.match(/e\+/))t=t.replace(/e\+/,"e");return t.replace("e","E")}var me=/# (\?+)( ?)\/( ?)(\d+)/;function ge(e,r,t){var a=parseInt(e[4],10),n=Math.round(r*a),i=Math.floor(n/a);var s=n-i*a,f=a;return t+(i===0?"":""+i)+" "+(s===0?Tr(" ",e[1].length+1+e[4].length):z(s,e[1].length)+e[2]+"/"+e[3]+W(f,e[4].length))}function be(e,r,t){return t+(r===0?"":""+r)+Tr(" ",e[1].length+2+e[4].length)}var we=/^#*0*\.([0#]+)/;var ke=/\).*[0#]/;var Te=/\(###\) ###\\?-####/;function Ae(e){var r="",t;for(var a=0;a!=e.length;++a)switch(t=e.charCodeAt(a)){case 35:break;case 63:r+=" ";break;case 48:r+="0";break;default:r+=String.fromCharCode(t);}return r}function ye(e,r){var t=Math.pow(10,r);return""+Math.round(e*t)/t}function Ee(e,r){var t=e-Math.floor(e),a=Math.pow(10,r);if(r<(""+Math.round(t*a)).length)return 0;return Math.round(t*a)}function Ce(e,r){if(r<(""+Math.round((e-Math.floor(e))*Math.pow(10,r))).length){return 1}return 0}function _e(e){if(e<2147483647&&e>-2147483648)return""+(e>=0?e|0:e-1|0);return""+Math.floor(e)}function Se(e,r,t){if(e.charCodeAt(0)===40&&!r.match(ke)){var a=r.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");if(t>=0)return Se("n",a,t);return"("+Se("n",a,-t)+")"}if(r.charCodeAt(r.length-1)===44)return ve(e,r,t);if(r.indexOf("%")!==-1)return de(e,r,t);if(r.indexOf("E")!==-1)return pe(r,t);if(r.charCodeAt(0)===36)return"$"+Se(e,r.substr(r.charAt(1)==" "?2:1),t);var n;var i,s,f,l=Math.abs(t),o=t<0?"-":"";if(r.match(/^00+$/))return o+j(l,r.length);if(r.match(/^[#?]+$/)){n=j(t,0);if(n==="0")n="";return n.length>r.length?n:Ae(r.substr(0,r.length-n.length))+n}if(i=r.match(me))return ge(i,l,o);if(r.match(/^#+0+$/))return o+j(l,r.length-r.indexOf("0"));if(i=r.match(we)){n=ye(t,i[1].length).replace(/^([^\.]+)$/,"$1."+Ae(i[1])).replace(/\.$/,"."+Ae(i[1])).replace(/\.(\d*)$/,function(e,r){return"."+r+Tr("0",Ae(i[1]).length-r.length)});return r.indexOf("0.")!==-1?n:n.replace(/^0\./,".")}r=r.replace(/^#+([0.])/,"$1");if(i=r.match(/^(0*)\.(#*)$/)){return o+ye(l,i[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,i[1].length?"0.":".")}if(i=r.match(/^#{1,3},##0(\.?)$/))return o+he(j(l,0));if(i=r.match(/^#,##0\.([#0]*0)$/)){return t<0?"-"+Se(e,r,-t):he(""+(Math.floor(t)+Ce(t,i[1].length)))+"."+W(Ee(t,i[1].length),i[1].length)}if(i=r.match(/^#,#*,#0/))return Se(e,r.replace(/^#,#*,/,""),t);if(i=r.match(/^([0#]+)(\\?-([0#]+))+$/)){n=B(Se(e,r.replace(/[\\-]/g,""),t));s=0;return B(B(r.replace(/\\/g,"")).replace(/[0#]/g,function(e){return s<n.length?n.charAt(s++):e==="0"?"0":""}))}if(r.match(Te)){n=Se(e,"##########",t);return"("+n.substr(0,3)+") "+n.substr(3,3)+"-"+n.substr(6)}var c="";if(i=r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)){s=Math.min(i[4].length,7);f=re(l,Math.pow(10,s)-1,false);n=""+o;c=Ne("n",i[1],f[1]);if(c.charAt(c.length-1)==" ")c=c.substr(0,c.length-1)+"0";n+=c+i[2]+"/"+i[3];c=H(f[2],s);if(c.length<i[4].length)c=Ae(i[4].substr(i[4].length-c.length))+c;n+=c;return n}if(i=r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)){s=Math.min(Math.max(i[1].length,i[4].length),7);f=re(l,Math.pow(10,s)-1,true);return o+(f[0]||(f[1]?"":"0"))+" "+(f[1]?z(f[1],s)+i[2]+"/"+i[3]+H(f[2],s):Tr(" ",2*s+1+i[2].length+i[3].length))}if(i=r.match(/^[#0?]+$/)){n=j(t,0);if(r.length<=n.length)return n;return Ae(r.substr(0,r.length-n.length))+n}if(i=r.match(/^([#0?]+)\.([#0]+)$/)){n=""+t.toFixed(Math.min(i[2].length,10)).replace(/([^0])0+$/,"$1");s=n.indexOf(".");var h=r.indexOf(".")-s,u=r.length-n.length-h;return Ae(r.substr(0,h)+n+r.substr(r.length-u))}if(i=r.match(/^00,000\.([#0]*0)$/)){s=Ee(t,i[1].length);return t<0?"-"+Se(e,r,-t):he(_e(t)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(e){return"00,"+(e.length<3?W(0,3-e.length):"")+e})+"."+W(s,i[1].length)}switch(r){case"###,##0.00":return Se(e,"#,##0.00",t);case"###,###":;case"##,###":;case"#,###":var d=he(j(l,0));return d!=="0"?o+d:"";case"###,###.00":return Se(e,"###,##0.00",t).replace(/^0\./,".");case"#,###.00":return Se(e,"#,##0.00",t).replace(/^0\./,".");default:;}throw new Error("unsupported format |"+r+"|")}function xe(e,r,t){var a=r.length-1;while(r.charCodeAt(a-1)===44)--a;return Ne(e,r.substr(0,a),t/Math.pow(10,3*(r.length-a)))}function Oe(e,r,t){var a=r.replace(ue,""),n=r.length-a.length;return Ne(e,a,t*Math.pow(10,2*n))+Tr("%",n)}function Re(e,r){var t;var a=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(r==0)return"0.0E+0";else if(r<0)return"-"+Re(e,-r);var n=e.indexOf(".");if(n===-1)n=e.indexOf("E");var i=Math.floor(Math.log(r)*Math.LOG10E)%n;if(i<0)i+=n;t=(r/Math.pow(10,i)).toPrecision(a+1+(n+i)%n);if(!t.match(/[Ee]/)){var s=Math.floor(Math.log(r)*Math.LOG10E);if(t.indexOf(".")===-1)t=t.charAt(0)+"."+t.substr(1)+"E+"+(s-t.length+i);else t+="E+"+(s-i);t=t.replace(/\+-/,"-")}t=t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,r,t,a){return r+t+a.substr(0,(n+i)%n)+"."+a.substr(i)+"E"})}else t=r.toExponential(a);if(e.match(/E\+00$/)&&t.match(/e[+-]\d$/))t=t.substr(0,t.length-1)+"0"+t.charAt(t.length-1);if(e.match(/E\-/)&&t.match(/e\+/))t=t.replace(/e\+/,"e");return t.replace("e","E")}function Ie(e,r,t){if(e.charCodeAt(0)===40&&!r.match(ke)){var a=r.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");if(t>=0)return Ie("n",a,t);return"("+Ie("n",a,-t)+")"}if(r.charCodeAt(r.length-1)===44)return xe(e,r,t);if(r.indexOf("%")!==-1)return Oe(e,r,t);if(r.indexOf("E")!==-1)return Re(r,t);if(r.charCodeAt(0)===36)return"$"+Ie(e,r.substr(r.charAt(1)==" "?2:1),t);var n;var i,s,f,l=Math.abs(t),o=t<0?"-":"";if(r.match(/^00+$/))return o+W(l,r.length);if(r.match(/^[#?]+$/)){n=""+t;if(t===0)n="";return n.length>r.length?n:Ae(r.substr(0,r.length-n.length))+n}if(i=r.match(me))return be(i,l,o);if(r.match(/^#+0+$/))return o+W(l,r.length-r.indexOf("0"));if(i=r.match(we)){n=(""+t).replace(/^([^\.]+)$/,"$1."+Ae(i[1])).replace(/\.$/,"."+Ae(i[1]));n=n.replace(/\.(\d*)$/,function(e,r){return"."+r+Tr("0",Ae(i[1]).length-r.length)});return r.indexOf("0.")!==-1?n:n.replace(/^0\./,".")}r=r.replace(/^#+([0.])/,"$1");if(i=r.match(/^(0*)\.(#*)$/)){return o+(""+l).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,i[1].length?"0.":".")}if(i=r.match(/^#{1,3},##0(\.?)$/))return o+he(""+l);if(i=r.match(/^#,##0\.([#0]*0)$/)){return t<0?"-"+Ie(e,r,-t):he(""+t)+"."+Tr("0",i[1].length)}if(i=r.match(/^#,#*,#0/))return Ie(e,r.replace(/^#,#*,/,""),t);if(i=r.match(/^([0#]+)(\\?-([0#]+))+$/)){n=B(Ie(e,r.replace(/[\\-]/g,""),t));s=0;return B(B(r.replace(/\\/g,"")).replace(/[0#]/g,function(e){return s<n.length?n.charAt(s++):e==="0"?"0":""}))}if(r.match(Te)){n=Ie(e,"##########",t);return"("+n.substr(0,3)+") "+n.substr(3,3)+"-"+n.substr(6)}var c="";if(i=r.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)){s=Math.min(i[4].length,7);f=re(l,Math.pow(10,s)-1,false);n=""+o;c=Ne("n",i[1],f[1]);if(c.charAt(c.length-1)==" ")c=c.substr(0,c.length-1)+"0";n+=c+i[2]+"/"+i[3];c=H(f[2],s);if(c.length<i[4].length)c=Ae(i[4].substr(i[4].length-c.length))+c;n+=c;return n}if(i=r.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)){s=Math.min(Math.max(i[1].length,i[4].length),7);f=re(l,Math.pow(10,s)-1,true);return o+(f[0]||(f[1]?"":"0"))+" "+(f[1]?z(f[1],s)+i[2]+"/"+i[3]+H(f[2],s):Tr(" ",2*s+1+i[2].length+i[3].length))}if(i=r.match(/^[#0?]+$/)){n=""+t;if(r.length<=n.length)return n;return Ae(r.substr(0,r.length-n.length))+n}if(i=r.match(/^([#0]+)\.([#0]+)$/)){n=""+t.toFixed(Math.min(i[2].length,10)).replace(/([^0])0+$/,"$1");s=n.indexOf(".");var h=r.indexOf(".")-s,u=r.length-n.length-h;return Ae(r.substr(0,h)+n+r.substr(r.length-u))}if(i=r.match(/^00,000\.([#0]*0)$/)){return t<0?"-"+Ie(e,r,-t):he(""+t).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(e){return"00,"+(e.length<3?W(0,3-e.length):"")+e})+"."+W(0,i[1].length)}switch(r){case"###,###":;case"##,###":;case"#,###":var d=he(""+l);return d!=="0"?o+d:"";default:if(r.match(/\.[0#?]*$/))return Ie(e,r.slice(0,r.lastIndexOf(".")),t)+Ae(r.slice(r.lastIndexOf(".")));}throw new Error("unsupported format |"+r+"|")}function Ne(e,r,t){return(t|0)===t?Ie(e,r,t):Se(e,r,t)}function Fe(e){var r=[];var t=false;for(var a=0,n=0;a<e.length;++a)switch(e.charCodeAt(a)){case 34:t=!t;break;case 95:;case 42:;case 92:++a;break;case 59:r[r.length]=e.substr(n,a-n);n=a+1;}r[r.length]=e.substr(n);if(t===true)throw new Error("Format |"+e+"| unterminated string ");return r}var De=/\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;function Pe(e){var r=0,t="",a="";while(r<e.length){switch(t=e.charAt(r)){case"G":if(K(e,r))r+=6;r++;break;case'"':for(;e.charCodeAt(++r)!==34&&r<e.length;){}++r;break;case"\\":r+=2;break;case"_":r+=2;break;case"@":++r;break;case"B":;case"b":if(e.charAt(r+1)==="1"||e.charAt(r+1)==="2")return true;case"M":;case"D":;case"Y":;case"H":;case"S":;case"E":;case"m":;case"d":;case"y":;case"h":;case"s":;case"e":;case"g":return true;case"A":;case"a":;case"ä¸Š":if(e.substr(r,3).toUpperCase()==="A/P")return true;if(e.substr(r,5).toUpperCase()==="AM/PM")return true;if(e.substr(r,5).toUpperCase()==="ä¸Šåˆ/ä¸‹åˆ")return true;++r;break;case"[":a=t;while(e.charAt(r++)!=="]"&&r<e.length)a+=e.charAt(r);
if(a.match(De))return true;break;case".":;case"0":;case"#":while(r<e.length&&("0#?.,E+-%".indexOf(t=e.charAt(++r))>-1||t=="\\"&&e.charAt(r+1)=="-"&&"0#".indexOf(e.charAt(r+2))>-1)){}break;case"?":while(e.charAt(++r)===t){}break;case"*":++r;if(e.charAt(r)==" "||e.charAt(r)=="*")++r;break;case"(":;case")":++r;break;case"1":;case"2":;case"3":;case"4":;case"5":;case"6":;case"7":;case"8":;case"9":while(r<e.length&&"0123456789".indexOf(e.charAt(++r))>-1){}break;case" ":++r;break;default:++r;break;}}return false}function Le(e,r,t,a){var n=[],i="",s=0,f="",l="t",o,c,h;var u="H";while(s<e.length){switch(f=e.charAt(s)){case"G":if(!K(e,s))throw new Error("unrecognized character "+f+" in "+e);n[n.length]={t:"G",v:"General"};s+=7;break;case'"':for(i="";(h=e.charCodeAt(++s))!==34&&s<e.length;)i+=String.fromCharCode(h);n[n.length]={t:"t",v:i};++s;break;case"\\":var d=e.charAt(++s),v=d==="("||d===")"?d:"t";n[n.length]={t:v,v:d};++s;break;case"_":n[n.length]={t:"t",v:" "};s+=2;break;case"@":n[n.length]={t:"T",v:r};++s;break;case"B":;case"b":if(e.charAt(s+1)==="1"||e.charAt(s+1)==="2"){if(o==null){o=te(r,t,e.charAt(s+1)==="2");if(o==null)return""}n[n.length]={t:"X",v:e.substr(s,2)};l=f;s+=2;break};case"M":;case"D":;case"Y":;case"H":;case"S":;case"E":f=f.toLowerCase();case"m":;case"d":;case"y":;case"h":;case"s":;case"e":;case"g":if(r<0)return"";if(o==null){o=te(r,t);if(o==null)return""}i=f;while(++s<e.length&&e.charAt(s).toLowerCase()===f)i+=f;if(f==="m"&&l.toLowerCase()==="h")f="M";if(f==="h")f=u;n[n.length]={t:f,v:i};l=f;break;case"A":;case"a":;case"ä¸Š":var p={t:f,v:f};if(o==null)o=te(r,t);if(e.substr(s,3).toUpperCase()==="A/P"){if(o!=null)p.v=o.H>=12?e.charAt(s+2):f;p.t="T";u="h";s+=3}else if(e.substr(s,5).toUpperCase()==="AM/PM"){if(o!=null)p.v=o.H>=12?"PM":"AM";p.t="T";s+=5;u="h"}else if(e.substr(s,5).toUpperCase()==="ä¸Šåˆ/ä¸‹åˆ"){if(o!=null)p.v=o.H>=12?"ä¸‹åˆ":"ä¸Šåˆ";p.t="T";s+=5;u="h"}else{p.t="t";++s}if(o==null&&p.t==="T")return"";n[n.length]=p;l=f;break;case"[":i=f;while(e.charAt(s++)!=="]"&&s<e.length)i+=e.charAt(s);if(i.slice(-1)!=="]")throw'unterminated "[" block: |'+i+"|";if(i.match(De)){if(o==null){o=te(r,t);if(o==null)return""}n[n.length]={t:"Z",v:i.toLowerCase()};l=i.charAt(1)}else if(i.indexOf("$")>-1){i=(i.match(/\$([^-\[\]]*)/)||[])[1]||"$";if(!Pe(e))n[n.length]={t:"t",v:i}}break;case".":if(o!=null){i=f;while(++s<e.length&&(f=e.charAt(s))==="0")i+=f;n[n.length]={t:"s",v:i};break};case"0":;case"#":i=f;while(++s<e.length&&"0#?.,E+-%".indexOf(f=e.charAt(s))>-1)i+=f;n[n.length]={t:"n",v:i};break;case"?":i=f;while(e.charAt(++s)===f)i+=f;n[n.length]={t:f,v:i};l=f;break;case"*":++s;if(e.charAt(s)==" "||e.charAt(s)=="*")++s;break;case"(":;case")":n[n.length]={t:a===1?"t":f,v:f};++s;break;case"1":;case"2":;case"3":;case"4":;case"5":;case"6":;case"7":;case"8":;case"9":i=f;while(s<e.length&&"0123456789".indexOf(e.charAt(++s))>-1)i+=e.charAt(s);n[n.length]={t:"D",v:i};break;case" ":n[n.length]={t:f,v:f};++s;break;case"$":n[n.length]={t:"t",v:"$"};++s;break;default:if(",$-+/():!^&'~{}<>=â‚¬acfijklopqrtuvwxzP".indexOf(f)===-1)throw new Error("unrecognized character "+f+" in "+e);n[n.length]={t:"t",v:f};++s;break;}}var m=0,g=0,b;for(s=n.length-1,l="t";s>=0;--s){switch(n[s].t){case"h":;case"H":n[s].t=u;l="h";if(m<1)m=1;break;case"s":if(b=n[s].v.match(/\.0+$/))g=Math.max(g,b[0].length-1);if(m<3)m=3;case"d":;case"y":;case"M":;case"e":l=n[s].t;break;case"m":if(l==="s"){n[s].t="M";if(m<2)m=2}break;case"X":break;case"Z":if(m<1&&n[s].v.match(/[Hh]/))m=1;if(m<2&&n[s].v.match(/[Mm]/))m=2;if(m<3&&n[s].v.match(/[Ss]/))m=3;}}switch(m){case 0:break;case 1:if(o.u>=.5){o.u=0;++o.S}if(o.S>=60){o.S=0;++o.M}if(o.M>=60){o.M=0;++o.H}break;case 2:if(o.u>=.5){o.u=0;++o.S}if(o.S>=60){o.S=0;++o.M}break;}var w="",k;for(s=0;s<n.length;++s){switch(n[s].t){case"t":;case"T":;case" ":;case"D":break;case"X":n[s].v="";n[s].t=";";break;case"d":;case"m":;case"y":;case"h":;case"H":;case"M":;case"s":;case"e":;case"b":;case"Z":n[s].v=ce(n[s].t.charCodeAt(0),n[s].v,o,g);n[s].t="t";break;case"n":;case"?":k=s+1;while(n[k]!=null&&((f=n[k].t)==="?"||f==="D"||(f===" "||f==="t")&&n[k+1]!=null&&(n[k+1].t==="?"||n[k+1].t==="t"&&n[k+1].v==="/")||n[s].t==="("&&(f===" "||f==="n"||f===")")||f==="t"&&(n[k].v==="/"||n[k].v===" "&&n[k+1]!=null&&n[k+1].t=="?"))){n[s].v+=n[k].v;n[k]={v:"",t:";"};++k}w+=n[s].v;s=k-1;break;case"G":n[s].t="t";n[s].v=le(r,t);break;}}var T="",A,y;if(w.length>0){if(w.charCodeAt(0)==40){A=r<0&&w.charCodeAt(0)===45?-r:r;y=Ne("n",w,A)}else{A=r<0&&a>1?-r:r;y=Ne("n",w,A);if(A<0&&n[0]&&n[0].t=="t"){y=y.substr(1);n[0].v="-"+n[0].v}}k=y.length-1;var E=n.length;for(s=0;s<n.length;++s)if(n[s]!=null&&n[s].t!="t"&&n[s].v.indexOf(".")>-1){E=s;break}var C=n.length;if(E===n.length&&y.indexOf("E")===-1){for(s=n.length-1;s>=0;--s){if(n[s]==null||"n?".indexOf(n[s].t)===-1)continue;if(k>=n[s].v.length-1){k-=n[s].v.length;n[s].v=y.substr(k+1,n[s].v.length)}else if(k<0)n[s].v="";else{n[s].v=y.substr(0,k+1);k=-1}n[s].t="t";C=s}if(k>=0&&C<n.length)n[C].v=y.substr(0,k+1)+n[C].v}else if(E!==n.length&&y.indexOf("E")===-1){k=y.indexOf(".")-1;for(s=E;s>=0;--s){if(n[s]==null||"n?".indexOf(n[s].t)===-1)continue;c=n[s].v.indexOf(".")>-1&&s===E?n[s].v.indexOf(".")-1:n[s].v.length-1;T=n[s].v.substr(c+1);for(;c>=0;--c){if(k>=0&&(n[s].v.charAt(c)==="0"||n[s].v.charAt(c)==="#"))T=y.charAt(k--)+T}n[s].v=T;n[s].t="t";C=s}if(k>=0&&C<n.length)n[C].v=y.substr(0,k+1)+n[C].v;k=y.indexOf(".")+1;for(s=E;s<n.length;++s){if(n[s]==null||"n?(".indexOf(n[s].t)===-1&&s!==E)continue;c=n[s].v.indexOf(".")>-1&&s===E?n[s].v.indexOf(".")+1:0;T=n[s].v.substr(0,c);for(;c<n[s].v.length;++c){if(k<y.length)T+=y.charAt(k++)}n[s].v=T;n[s].t="t";C=s}}}for(s=0;s<n.length;++s)if(n[s]!=null&&"n?".indexOf(n[s].t)>-1){A=a>1&&r<0&&s>0&&n[s-1].v==="-"?-r:r;n[s].v=Ne(n[s].t,n[s].v,A);n[s].t="t"}var _="";for(s=0;s!==n.length;++s)if(n[s]!=null)_+=n[s].v;return _}var Me=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;function Ue(e,r){if(r==null)return false;var t=parseFloat(r[2]);switch(r[1]){case"=":if(e==t)return true;break;case">":if(e>t)return true;break;case"<":if(e<t)return true;break;case"<>":if(e!=t)return true;break;case">=":if(e>=t)return true;break;case"<=":if(e<=t)return true;break;}return false}function Be(e,r){var t=Fe(e);var a=t.length,n=t[a-1].indexOf("@");if(a<4&&n>-1)--a;if(t.length>4)throw new Error("cannot find right format for |"+t.join("|")+"|");if(typeof r!=="number")return[4,t.length===4||n>-1?t[t.length-1]:"@"];switch(t.length){case 1:t=n>-1?["General","General","General",t[0]]:[t[0],t[0],t[0],"@"];break;case 2:t=n>-1?[t[0],t[0],t[0],t[1]]:[t[0],t[1],t[0],"@"];break;case 3:t=n>-1?[t[0],t[1],t[0],t[2]]:[t[0],t[1],t[2],"@"];break;case 4:break;}var i=r>0?t[0]:r<0?t[1]:t[2];if(t[0].indexOf("[")===-1&&t[1].indexOf("[")===-1)return[a,i];if(t[0].match(/\[[=<>]/)!=null||t[1].match(/\[[=<>]/)!=null){var s=t[0].match(Me);var f=t[1].match(Me);return Ue(r,s)?[a,t[0]]:Ue(r,f)?[a,t[1]]:[a,t[s!=null&&f!=null?2:1]]}return[a,i]}function We(e,r,t){if(t==null)t={};var a="";switch(typeof e){case"string":if(e=="m/d/yy"&&t.dateNF)a=t.dateNF;else a=e;break;case"number":if(e==14&&t.dateNF)a=t.dateNF;else a=(t.table!=null?t.table:q)[e];if(a==null)a=t.table&&t.table[Q[e]]||q[Q[e]];if(a==null)a=ee[e]||"General";break;}if(K(a,0))return le(r,t);if(r instanceof Date)r=ur(r,t.date1904);var n=Be(a,r);if(K(n[1]))return le(r,t);if(r===true)r="TRUE";else if(r===false)r="FALSE";else if(r===""||r==null)return"";return Le(n[1],r,t,n[0])}function ze(e,r){if(typeof r!="number"){r=+r||-1;for(var t=0;t<392;++t){if(q[t]==undefined){if(r<0)r=t;continue}if(q[t]==e){r=t;break}}if(r<0)r=391}q[r]=e;return r}function He(e){for(var r=0;r!=392;++r)if(e[r]!==undefined)ze(e[r],r)}function Ve(){q=J()}var Xe={format:We,load:ze,_table:q,load_table:He,parse_date_code:te,is_date:Pe,get_table:function cT(){return Xe._table=q}};var Ge={5:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',23:"General",24:"General",25:"General",26:"General",27:"m/d/yy",28:"m/d/yy",29:"m/d/yy",30:"m/d/yy",31:"m/d/yy",32:"h:mm:ss",33:"h:mm:ss",34:"h:mm:ss",35:"h:mm:ss",36:"m/d/yy",41:'_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',50:"m/d/yy",51:"m/d/yy",52:"m/d/yy",53:"m/d/yy",54:"m/d/yy",55:"m/d/yy",56:"m/d/yy",57:"m/d/yy",58:"m/d/yy",59:"0",60:"0.00",61:"#,##0",62:"#,##0.00",63:'"$"#,##0_);\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',67:"0%",68:"0.00%",69:"# ?/?",70:"# ??/??",71:"m/d/yy",72:"m/d/yy",73:"d-mmm-yy",74:"d-mmm",75:"mmm-yy",76:"h:mm",77:"h:mm:ss",78:"m/d/yy h:mm",79:"mm:ss",80:"[h]:mm:ss",81:"mmss.0"};var $e=/[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;function je(e){var r=typeof e=="number"?q[e]:e;r=r.replace($e,"(\\d+)");$e.lastIndex=0;return new RegExp("^"+r+"$")}function Ke(e,r,t){var a=-1,n=-1,i=-1,s=-1,f=-1,l=-1;(r.match($e)||[]).forEach(function(e,r){var o=parseInt(t[r+1],10);switch(e.toLowerCase().charAt(0)){case"y":a=o;break;case"d":i=o;break;case"h":s=o;break;case"s":l=o;break;case"m":if(s>=0)f=o;else n=o;break;}});$e.lastIndex=0;if(l>=0&&f==-1&&n>=0){f=n;n=-1}var o=(""+(a>=0?a:(new Date).getFullYear())).slice(-4)+"-"+("00"+(n>=1?n:1)).slice(-2)+"-"+("00"+(i>=1?i:1)).slice(-2);if(o.length==7)o="0"+o;if(o.length==8)o="20"+o;var c=("00"+(s>=0?s:0)).slice(-2)+":"+("00"+(f>=0?f:0)).slice(-2)+":"+("00"+(l>=0?l:0)).slice(-2);if(s==-1&&f==-1&&l==-1)return o;if(a==-1&&n==-1&&i==-1)return c;return o+"T"+c}var Ye={"d.m":"d\\.m"};function Ze(e,r){return ze(Ye[e]||e,r)}var Je=function(){var e={};e.version="1.2.0";function r(){var e=0,r=new Array(256);for(var t=0;t!=256;++t){e=t;e=e&1?-306674912^e>>>1:e>>>1;e=e&1?-306674912^e>>>1:e>>>1;e=e&1?-306674912^e>>>1:e>>>1;e=e&1?-306674912^e>>>1:e>>>1;e=e&1?-306674912^e>>>1:e>>>1;e=e&1?-306674912^e>>>1:e>>>1;e=e&1?-306674912^e>>>1:e>>>1;e=e&1?-306674912^e>>>1:e>>>1;r[t]=e}return typeof Int32Array!=="undefined"?new Int32Array(r):r}var t=r();function a(e){var r=0,t=0,a=0,n=typeof Int32Array!=="undefined"?new Int32Array(4096):new Array(4096);for(a=0;a!=256;++a)n[a]=e[a];for(a=0;a!=256;++a){t=e[a];for(r=256+a;r<4096;r+=256)t=n[r]=t>>>8^e[t&255]}var i=[];for(a=1;a!=16;++a)i[a-1]=typeof Int32Array!=="undefined"&&typeof n.subarray=="function"?n.subarray(a*256,a*256+256):n.slice(a*256,a*256+256);return i}var n=a(t);var i=n[0],s=n[1],f=n[2],l=n[3],o=n[4];var c=n[5],h=n[6],u=n[7],d=n[8],v=n[9];var p=n[10],m=n[11],g=n[12],b=n[13],w=n[14];function k(e,r){var a=r^-1;for(var n=0,i=e.length;n<i;)a=a>>>8^t[(a^e.charCodeAt(n++))&255];return~a}function T(e,r){var a=r^-1,n=e.length-15,k=0;for(;k<n;)a=w[e[k++]^a&255]^b[e[k++]^a>>8&255]^g[e[k++]^a>>16&255]^m[e[k++]^a>>>24]^p[e[k++]]^v[e[k++]]^d[e[k++]]^u[e[k++]]^h[e[k++]]^c[e[k++]]^o[e[k++]]^l[e[k++]]^f[e[k++]]^s[e[k++]]^i[e[k++]]^t[e[k++]];n+=15;while(k<n)a=a>>>8^t[(a^e[k++])&255];return~a}function A(e,r){var a=r^-1;for(var n=0,i=e.length,s=0,f=0;n<i;){s=e.charCodeAt(n++);if(s<128){a=a>>>8^t[(a^s)&255]}else if(s<2048){a=a>>>8^t[(a^(192|s>>6&31))&255];a=a>>>8^t[(a^(128|s&63))&255]}else if(s>=55296&&s<57344){s=(s&1023)+64;f=e.charCodeAt(n++)&1023;a=a>>>8^t[(a^(240|s>>8&7))&255];a=a>>>8^t[(a^(128|s>>2&63))&255];a=a>>>8^t[(a^(128|f>>6&15|(s&3)<<4))&255];a=a>>>8^t[(a^(128|f&63))&255]}else{a=a>>>8^t[(a^(224|s>>12&15))&255];a=a>>>8^t[(a^(128|s>>6&63))&255];a=a>>>8^t[(a^(128|s&63))&255]}}return~a}e.table=t;e.bstr=k;e.buf=T;e.str=A;return e}();var qe=function hT(){var e={};e.version="1.2.2";function r(e,r){var t=e.split("/"),a=r.split("/");for(var n=0,i=0,s=Math.min(t.length,a.length);n<s;++n){if(i=t[n].length-a[n].length)return i;if(t[n]!=a[n])return t[n]<a[n]?-1:1}return t.length-a.length}function t(e){if(e.charAt(e.length-1)=="/")return e.slice(0,-1).indexOf("/")===-1?e:t(e.slice(0,-1));var r=e.lastIndexOf("/");return r===-1?e:e.slice(0,r+1)}function a(e){if(e.charAt(e.length-1)=="/")return a(e.slice(0,-1));var r=e.lastIndexOf("/");return r===-1?e:e.slice(r+1)}function n(e,r){if(typeof r==="string")r=new Date(r);var t=r.getHours();t=t<<6|r.getMinutes();t=t<<5|r.getSeconds()>>>1;e._W(2,t);var a=r.getFullYear()-1980;a=a<<4|r.getMonth()+1;a=a<<5|r.getDate();e._W(2,a)}function i(e){var r=e._R(2)&65535;var t=e._R(2)&65535;var a=new Date;var n=t&31;t>>>=5;var i=t&15;t>>>=4;a.setMilliseconds(0);a.setFullYear(t+1980);a.setMonth(i-1);a.setDate(n);var s=r&31;r>>>=5;var f=r&63;r>>>=6;a.setHours(r);a.setMinutes(f);a.setSeconds(s<<1);return a}function s(e){ka(e,0);var r={};var t=0;while(e.l<=e.length-4){var a=e._R(2);var n=e._R(2),i=e.l+n;var s={};switch(a){case 21589:{t=e._R(1);if(t&1)s.mtime=e._R(4);if(n>5){if(t&2)s.atime=e._R(4);if(t&4)s.ctime=e._R(4)}if(s.mtime)s.mt=new Date(s.mtime*1e3)}break;case 1:{var f=e._R(4),l=e._R(4);s.usz=l*Math.pow(2,32)+f;f=e._R(4);l=e._R(4);s.csz=l*Math.pow(2,32)+f}break;}e.l=i;r[a]=s}return r}var f;function l(){return f||(f=Qe)}function o(e,r){if(e[0]==80&&e[1]==75)return Ie(e,r);if((e[0]|32)==109&&(e[1]|32)==105)return We(e,r);if(e.length<512)throw new Error("CFB file size "+e.length+" < 512");var t=3;var a=512;var n=0;var i=0;var s=0;var f=0;var l=0;var o=[];var v=e.slice(0,512);ka(v,0);var m=c(v);t=m[0];switch(t){case 3:a=512;break;case 4:a=4096;break;case 0:if(m[1]==0)return Ie(e,r);default:throw new Error("Major Version: Expected 3 or 4 saw "+t);}if(a!==512){v=e.slice(0,a);ka(v,28)}var w=e.slice(0,a);h(v,t);var k=v._R(4,"i");if(t===3&&k!==0)throw new Error("# Directory Sectors: Expected 0 saw "+k);v.l+=4;s=v._R(4,"i");v.l+=4;v.chk("00100000","Mini Stream Cutoff Size: ");f=v._R(4,"i");n=v._R(4,"i");l=v._R(4,"i");i=v._R(4,"i");for(var T=-1,A=0;A<109;++A){T=v._R(4,"i");if(T<0)break;o[A]=T}var y=u(e,a);p(l,i,y,a,o);var E=g(y,s,o,a);if(s<E.length)E[s].name="!Directory";if(n>0&&f!==L)E[f].name="!MiniFAT";E[o[0]].name="!FAT";E.fat_addrs=o;E.ssz=a;var C={},_=[],S=[],x=[];b(s,E,y,_,n,C,S,f);d(S,x,_);_.shift();var O={FileIndex:S,FullPaths:x};if(r&&r.raw)O.raw={header:w,sectors:y};return O}function c(e){if(e[e.l]==80&&e[e.l+1]==75)return[0,0];e.chk(B,"Header Signature: ");e.l+=16;var r=e._R(2,"u");return[e._R(2,"u"),r]}function h(e,r){var t=9;e.l+=2;switch(t=e._R(2)){case 9:if(r!=3)throw new Error("Sector Shift: Expected 9 saw "+t);break;case 12:if(r!=4)throw new Error("Sector Shift: Expected 12 saw "+t);break;default:throw new Error("Sector Shift: Expected 9 or 12 saw "+t);}e.chk("0600","Mini Sector Shift: ");e.chk("000000000000","Reserved: ")}function u(e,r){var t=Math.ceil(e.length/r)-1;var a=[];for(var n=1;n<t;++n)a[n-1]=e.slice(n*r,(n+1)*r);a[t-1]=e.slice(t*r);return a}function d(e,r,t){var a=0,n=0,i=0,s=0,f=0,l=t.length;var o=[],c=[];for(;a<l;++a){o[a]=c[a]=a;r[a]=t[a]}for(;f<c.length;++f){a=c[f];n=e[a].L;i=e[a].R;s=e[a].C;if(o[a]===a){if(n!==-1&&o[n]!==n)o[a]=o[n];if(i!==-1&&o[i]!==i)o[a]=o[i]}if(s!==-1)o[s]=a;if(n!==-1&&a!=o[a]){o[n]=o[a];if(c.lastIndexOf(n)<f)c.push(n)}if(i!==-1&&a!=o[a]){o[i]=o[a];if(c.lastIndexOf(i)<f)c.push(i)}}for(a=1;a<l;++a)if(o[a]===a){if(i!==-1&&o[i]!==i)o[a]=o[i];else if(n!==-1&&o[n]!==n)o[a]=o[n]}for(a=1;a<l;++a){if(e[a].type===0)continue;f=a;if(f!=o[f])do{f=o[f];r[a]=r[f]+"/"+r[a]}while(f!==0&&-1!==o[f]&&f!=o[f]);o[a]=-1}r[0]+="/";for(a=1;a<l;++a){if(e[a].type!==2)r[a]+="/"}}function v(e,r,t){var a=e.start,n=e.size;var i=[];var s=a;while(t&&n>0&&s>=0){i.push(r.slice(s*D,s*D+D));n-=D;s=ua(t,s*4)}if(i.length===0)return Aa(0);return P(i).slice(0,e.size)}function p(e,r,t,a,n){var i=L;if(e===L){if(r!==0)throw new Error("DIFAT chain shorter than expected")}else if(e!==-1){var s=t[e],f=(a>>>2)-1;if(!s)return;for(var l=0;l<f;++l){if((i=ua(s,l*4))===L)break;n.push(i)}if(r>=1)p(ua(s,a-4),r-1,t,a,n)}}function m(e,r,t,a,n){var i=[],s=[];if(!n)n=[];var f=a-1,l=0,o=0;for(l=r;l>=0;){n[l]=true;i[i.length]=l;s.push(e[l]);var c=t[Math.floor(l*4/a)];o=l*4&f;if(a<4+o)throw new Error("FAT boundary crossed: "+l+" 4 "+a);if(!e[c])break;l=ua(e[c],o)}return{nodes:i,data:zt([s])}}function g(e,r,t,a){var n=e.length,i=[];var s=[],f=[],l=[];var o=a-1,c=0,h=0,u=0,d=0;for(c=0;c<n;++c){f=[];u=c+r;if(u>=n)u-=n;if(s[u])continue;l=[];var v=[];for(h=u;h>=0;){v[h]=true;s[h]=true;f[f.length]=h;l.push(e[h]);var p=t[Math.floor(h*4/a)];d=h*4&o;if(a<4+d)throw new Error("FAT boundary crossed: "+h+" 4 "+a);if(!e[p])break;h=ua(e[p],d);if(v[h])break}i[u]={nodes:f,data:zt([l])}}return i}function b(e,r,t,a,n,i,s,f){var l=0,o=a.length?2:0;var c=r[e].data;var h=0,u=0,d;for(;h<c.length;h+=128){var p=c.slice(h,h+128);ka(p,64);u=p._R(2);d=Vt(p,0,u-o);a.push(d);var g={name:d,type:p._R(1),color:p._R(1),L:p._R(4,"i"),R:p._R(4,"i"),C:p._R(4,"i"),clsid:p._R(16),state:p._R(4,"i"),start:0,size:0};var b=p._R(2)+p._R(2)+p._R(2)+p._R(2);if(b!==0)g.ct=w(p,p.l-8);var k=p._R(2)+p._R(2)+p._R(2)+p._R(2);if(k!==0)g.mt=w(p,p.l-8);g.start=p._R(4,"i");g.size=p._R(4,"i");if(g.size<0&&g.start<0){g.size=g.type=0;g.start=L;g.name=""}if(g.type===5){l=g.start;if(n>0&&l!==L)r[l].name="!StreamData"}else if(g.size>=4096){g.storage="fat";if(r[g.start]===undefined)r[g.start]=m(t,g.start,r.fat_addrs,r.ssz);r[g.start].name=g.name;g.content=r[g.start].data.slice(0,g.size)}else{g.storage="minifat";if(g.size<0)g.size=0;else if(l!==L&&g.start!==L&&r[l]){g.content=v(g,r[l].data,(r[f]||{}).data)}}if(g.content)ka(g.content,0);i[d]=g;s.push(g)}}function w(e,r){return new Date((ha(e,r+4)/1e7*Math.pow(2,32)+ha(e,r)/1e7-11644473600)*1e3)}function k(e,r){l();return o(f.readFileSync(e),r)}function A(e,r){var t=r&&r.type;if(!t){if(C&&Buffer.isBuffer(e))t="buffer"}switch(t||"base64"){case"file":return k(e,r);case"base64":return o(R(E(e)),r);case"binary":return o(R(e),r);}return o(e,r)}function y(e,r){var t=r||{},a=t.root||"Root Entry";if(!e.FullPaths)e.FullPaths=[];if(!e.FileIndex)e.FileIndex=[];if(e.FullPaths.length!==e.FileIndex.length)throw new Error("inconsistent CFB structure");if(e.FullPaths.length===0){e.FullPaths[0]=a+"/";e.FileIndex[0]={name:a,type:5}}if(t.CLSID)e.FileIndex[0].clsid=t.CLSID;S(e)}function S(e){var r="Sh33tJ5";if(qe.find(e,"/"+r))return;var t=Aa(4);t[0]=55;t[1]=t[3]=50;t[2]=54;e.FileIndex.push({name:r,type:2,content:t,size:4,L:69,R:69,C:69});e.FullPaths.push(e.FullPaths[0]+r);I(e)}function I(e,n){y(e);var i=false,s=false;for(var f=e.FullPaths.length-1;f>=0;--f){var l=e.FileIndex[f];switch(l.type){case 0:if(s)i=true;else{e.FileIndex.pop();e.FullPaths.pop()}break;case 1:;case 2:;case 5:s=true;if(isNaN(l.R*l.L*l.C))i=true;if(l.R>-1&&l.L>-1&&l.R==l.L)i=true;break;default:i=true;break;}}if(!i&&!n)return;var o=new Date(1987,1,19),c=0;var h=Object.create?Object.create(null):{};var u=[];for(f=0;f<e.FullPaths.length;++f){h[e.FullPaths[f]]=true;if(e.FileIndex[f].type===0)continue;u.push([e.FullPaths[f],e.FileIndex[f]])}for(f=0;f<u.length;++f){var d=t(u[f][0]);s=h[d];while(!s){while(t(d)&&!h[t(d)])d=t(d);u.push([d,{name:a(d).replace("/",""),type:1,clsid:z,ct:o,mt:o,content:null}]);h[d]=true;d=t(u[f][0]);s=h[d]}}u.sort(function(e,t){return r(e[0],t[0])});e.FullPaths=[];e.FileIndex=[];for(f=0;f<u.length;++f){e.FullPaths[f]=u[f][0];e.FileIndex[f]=u[f][1]}for(f=0;f<u.length;++f){var v=e.FileIndex[f];var p=e.FullPaths[f];v.name=a(p).replace("/","");v.L=v.R=v.C=-(v.color=1);v.size=v.content?v.content.length:0;v.start=0;v.clsid=v.clsid||z;if(f===0){v.C=u.length>1?1:-1;v.size=0;v.type=5}else if(p.slice(-1)=="/"){for(c=f+1;c<u.length;++c)if(t(e.FullPaths[c])==p)break;v.C=c>=u.length?-1:c;for(c=f+1;c<u.length;++c)if(t(e.FullPaths[c])==t(p))break;v.R=c>=u.length?-1:c;v.type=1}else{if(t(e.FullPaths[f+1]||"")==t(p))v.R=f+1;v.type=2}}}function N(e,r){var t=r||{};if(t.fileType=="mad")return ze(e,t);I(e);switch(t.fileType){case"zip":return Fe(e,t);}var a=function(e){var r=0,t=0;for(var a=0;a<e.FileIndex.length;++a){var n=e.FileIndex[a];if(!n.content)continue;var i=n.content.length;if(i>0){if(i<4096)r+=i+63>>6;else t+=i+511>>9}}var s=e.FullPaths.length+3>>2;var f=r+7>>3;var l=r+127>>7;var o=f+t+s+l;var c=o+127>>7;var h=c<=109?0:Math.ceil((c-109)/127);while(o+c+h+127>>7>c)h=++c<=109?0:Math.ceil((c-109)/127);var u=[1,h,c,l,s,t,r,0];e.FileIndex[0].size=r<<6;u[7]=(e.FileIndex[0].start=u[0]+u[1]+u[2]+u[3]+u[4]+u[5])+(u[6]+7>>3);return u}(e);var n=Aa(a[7]<<9);var i=0,s=0;{for(i=0;i<8;++i)n._W(1,W[i]);for(i=0;i<8;++i)n._W(2,0);n._W(2,62);n._W(2,3);n._W(2,65534);n._W(2,9);n._W(2,6);for(i=0;i<3;++i)n._W(2,0);n._W(4,0);n._W(4,a[2]);n._W(4,a[0]+a[1]+a[2]+a[3]-1);n._W(4,0);n._W(4,1<<12);n._W(4,a[3]?a[0]+a[1]+a[2]-1:L);n._W(4,a[3]);n._W(-4,a[1]?a[0]-1:L);n._W(4,a[1]);for(i=0;i<109;++i)n._W(-4,i<a[2]?a[1]+i:-1)}if(a[1]){for(s=0;s<a[1];++s){for(;i<236+s*127;++i)n._W(-4,i<a[2]?a[1]+i:-1);n._W(-4,s===a[1]-1?L:s+1)}}var f=function(e){for(s+=e;i<s-1;++i)n._W(-4,i+1);if(e){++i;n._W(-4,L)}};s=i=0;for(s+=a[1];i<s;++i)n._W(-4,H.DIFSECT);for(s+=a[2];i<s;++i)n._W(-4,H.FATSECT);f(a[3]);f(a[4]);var l=0,o=0;var c=e.FileIndex[0];for(;l<e.FileIndex.length;++l){c=e.FileIndex[l];if(!c.content)continue;o=c.content.length;if(o<4096)continue;c.start=s;f(o+511>>9)}f(a[6]+7>>3);while(n.l&511)n._W(-4,H.ENDOFCHAIN);s=i=0;for(l=0;l<e.FileIndex.length;++l){c=e.FileIndex[l];if(!c.content)continue;o=c.content.length;if(!o||o>=4096)continue;c.start=s;f(o+63>>6)}while(n.l&511)n._W(-4,H.ENDOFCHAIN);for(i=0;i<a[4]<<2;++i){var h=e.FullPaths[i];if(!h||h.length===0){for(l=0;l<17;++l)n._W(4,0);for(l=0;l<3;++l)n._W(4,-1);for(l=0;l<12;++l)n._W(4,0);continue}c=e.FileIndex[i];if(i===0)c.start=c.size?c.start-1:L;var u=i===0&&t.root||c.name;if(u.length>32){console.error("Name "+u+" will be truncated to "+u.slice(0,32));u=u.slice(0,32)}o=2*(u.length+1);n._W(64,u,"utf16le");n._W(2,o);n._W(1,c.type);n._W(1,c.color);n._W(-4,c.L);n._W(-4,c.R);n._W(-4,c.C);if(!c.clsid)for(l=0;l<4;++l)n._W(4,0);else n._W(16,c.clsid,"hex");n._W(4,c.state||0);n._W(4,0);n._W(4,0);n._W(4,0);n._W(4,0);n._W(4,c.start);n._W(4,c.size);n._W(4,0)}for(i=1;i<e.FileIndex.length;++i){c=e.FileIndex[i];if(c.size>=4096){n.l=c.start+1<<9;if(C&&Buffer.isBuffer(c.content)){c.content.copy(n,n.l,0,c.size);n.l+=c.size+511&-512}else{for(l=0;l<c.size;++l)n._W(1,c.content[l]);for(;l&511;++l)n._W(1,0)}}}for(i=1;i<e.FileIndex.length;++i){c=e.FileIndex[i];if(c.size>0&&c.size<4096){if(C&&Buffer.isBuffer(c.content)){c.content.copy(n,n.l,0,c.size);n.l+=c.size+63&-64}else{for(l=0;l<c.size;++l)n._W(1,c.content[l]);for(;l&63;++l)n._W(1,0)}}}if(C){n.l=n.length}else{while(n.l<n.length)n._W(1,0)}return n}function F(e,r){var t=e.FullPaths.map(function(e){return e.toUpperCase()});var a=t.map(function(e){var r=e.split("/");return r[r.length-(e.slice(-1)=="/"?2:1)]});var n=false;if(r.charCodeAt(0)===47){n=true;r=t[0].slice(0,-1)+r}else n=r.indexOf("/")!==-1;var i=r.toUpperCase();var s=n===true?t.indexOf(i):a.indexOf(i);if(s!==-1)return e.FileIndex[s];var f=!i.match(U);i=i.replace(M,"");if(f)i=i.replace(U,"!");for(s=0;s<t.length;++s){if((f?t[s].replace(U,"!"):t[s]).replace(M,"")==i)return e.FileIndex[s];if((f?a[s].replace(U,"!"):a[s]).replace(M,"")==i)return e.FileIndex[s]}return null}var D=64;var L=-2;var B="d0cf11e0a1b11ae1";var W=[208,207,17,224,161,177,26,225];var z="00000000000000000000000000000000";var H={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:L,FREESECT:-1,HEADER_SIGNATURE:B,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:z,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]};function V(e,r,t){l();var a=N(e,t);f.writeFileSync(r,a)}function X(e){var r=new Array(e.length);for(var t=0;t<e.length;++t)r[t]=String.fromCharCode(e[t]);return r.join("")}function G(e,r){var t=N(e,r);switch(r&&r.type||"buffer"){case"file":l();f.writeFileSync(r.filename,t);return t;case"binary":return typeof t=="string"?t:X(t);case"base64":return T(typeof t=="string"?t:X(t));case"buffer":if(C)return Buffer.isBuffer(t)?t:_(t);case"array":return typeof t=="string"?R(t):t;}return t}var $;function j(e){try{var r=e.InflateRaw;var t=new r;t._processChunk(new Uint8Array([3,0]),t._finishFlushFlag);if(t.bytesRead)$=e;else throw new Error("zlib does not expose bytesRead")}catch(a){console.error("cannot use native zlib: "+(a.message||a))}}function K(e,r){if(!$)return Oe(e,r);var t=$.InflateRaw;var a=new t;var n=a._processChunk(e.slice(e.l),a._finishFlushFlag);e.l+=a.bytesRead;return n}function Y(e){return $?$.deflateRawSync(e):Te(e)}var Z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];var J=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258];var q=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577];function Q(e){var r=(e<<1|e<<11)&139536|(e<<5|e<<15)&558144;return(r>>16|r>>8|r)&255}var ee=typeof Uint8Array!=="undefined";var re=ee?new Uint8Array(1<<8):[];for(var te=0;te<1<<8;++te)re[te]=Q(te);function ae(e,r){var t=re[e&255];if(r<=8)return t>>>8-r;t=t<<8|re[e>>8&255];if(r<=16)return t>>>16-r;t=t<<8|re[e>>16&255];return t>>>24-r}function ne(e,r){var t=r&7,a=r>>>3;return(e[a]|(t<=6?0:e[a+1]<<8))>>>t&3}function ie(e,r){var t=r&7,a=r>>>3;return(e[a]|(t<=5?0:e[a+1]<<8))>>>t&7}function se(e,r){var t=r&7,a=r>>>3;return(e[a]|(t<=4?0:e[a+1]<<8))>>>t&15}function fe(e,r){var t=r&7,a=r>>>3;return(e[a]|(t<=3?0:e[a+1]<<8))>>>t&31}function le(e,r){var t=r&7,a=r>>>3;return(e[a]|(t<=1?0:e[a+1]<<8))>>>t&127}function oe(e,r,t){var a=r&7,n=r>>>3,i=(1<<t)-1;var s=e[n]>>>a;if(t<8-a)return s&i;s|=e[n+1]<<8-a;if(t<16-a)return s&i;s|=e[n+2]<<16-a;if(t<24-a)return s&i;s|=e[n+3]<<24-a;return s&i}function ce(e,r,t){var a=r&7,n=r>>>3;if(a<=5)e[n]|=(t&7)<<a;else{e[n]|=t<<a&255;e[n+1]=(t&7)>>8-a}return r+3}function he(e,r,t){var a=r&7,n=r>>>3;t=(t&1)<<a;e[n]|=t;return r+1}function ue(e,r,t){var a=r&7,n=r>>>3;t<<=a;e[n]|=t&255;t>>>=8;e[n+1]=t;return r+8}function de(e,r,t){var a=r&7,n=r>>>3;t<<=a;e[n]|=t&255;t>>>=8;e[n+1]=t&255;e[n+2]=t>>>8;return r+16}function ve(e,r){var t=e.length,a=2*t>r?2*t:r+5,n=0;if(t>=r)return e;if(C){var i=O(a);if(e.copy)e.copy(i);else for(;n<e.length;++n)i[n]=e[n];return i}else if(ee){var s=new Uint8Array(a);if(s.set)s.set(e);else for(;n<t;++n)s[n]=e[n];return s}e.length=a;return e}function pe(e){var r=new Array(e);for(var t=0;t<e;++t)r[t]=0;return r}function me(e,r,t){var a=1,n=0,i=0,s=0,f=0,l=e.length;var o=ee?new Uint16Array(32):pe(32);for(i=0;i<32;++i)o[i]=0;for(i=l;i<t;++i)e[i]=0;l=e.length;var c=ee?new Uint16Array(l):pe(l);for(i=0;i<l;++i){o[n=e[i]]++;if(a<n)a=n;c[i]=0}o[0]=0;for(i=1;i<=a;++i)o[i+16]=f=f+o[i-1]<<1;for(i=0;i<l;++i){f=e[i];if(f!=0)c[i]=o[f+16]++}var h=0;for(i=0;i<l;++i){h=e[i];if(h!=0){f=ae(c[i],a)>>a-h;for(s=(1<<a+4-h)-1;s>=0;--s)r[f|s<<h]=h&15|i<<4}}return a}var ge=ee?new Uint16Array(512):pe(512);var be=ee?new Uint16Array(32):pe(32);if(!ee){for(var we=0;we<512;++we)ge[we]=0;for(we=0;we<32;++we)be[we]=0}(function(){var e=[];var r=0;for(;r<32;r++)e.push(5);me(e,be,32);var t=[];r=0;for(;r<=143;r++)t.push(8);for(;r<=255;r++)t.push(9);for(;r<=279;r++)t.push(7);for(;r<=287;r++)t.push(8);me(t,ge,288)})();var ke=function je(){var e=ee?new Uint8Array(32768):[];var r=0,t=0;for(;r<q.length-1;++r){for(;t<q[r+1];++t)e[t]=r}for(;t<32768;++t)e[t]=29;var a=ee?new Uint8Array(259):[];for(r=0,t=0;r<J.length-1;++r){for(;t<J[r+1];++t)a[t]=r}function n(e,r){var t=0;while(t<e.length){var a=Math.min(65535,e.length-t);var n=t+a==e.length;r._W(1,+n);r._W(2,a);r._W(2,~a&65535);while(a-- >0)r[r.l++]=e[t++]}return r.l}function i(r,t){var n=0;var i=0;var s=ee?new Uint16Array(32768):[];while(i<r.length){var f=Math.min(65535,r.length-i);if(f<10){n=ce(t,n,+!!(i+f==r.length));if(n&7)n+=8-(n&7);t.l=n/8|0;t._W(2,f);t._W(2,~f&65535);while(f-- >0)t[t.l++]=r[i++];n=t.l*8;continue}n=ce(t,n,+!!(i+f==r.length)+2);var l=0;while(f-- >0){var o=r[i];l=(l<<5^o)&32767;var c=-1,h=0;if(c=s[l]){c|=i&~32767;if(c>i)c-=32768;if(c<i)while(r[c+h]==r[i+h]&&h<250)++h}if(h>2){o=a[h];if(o<=22)n=ue(t,n,re[o+1]>>1)-1;else{ue(t,n,3);n+=5;ue(t,n,re[o-23]>>5);n+=3}var u=o<8?0:o-4>>2;if(u>0){de(t,n,h-J[o]);n+=u}o=e[i-c];n=ue(t,n,re[o]>>3);n-=3;var d=o<4?0:o-2>>1;if(d>0){de(t,n,i-c-q[o]);n+=d}for(var v=0;v<h;++v){s[l]=i&32767;l=(l<<5^r[i])&32767;++i}f-=h-1}else{if(o<=143)o=o+48;else n=he(t,n,1);n=ue(t,n,re[o]);s[l]=i&32767;++i}}n=ue(t,n,0)-1}t.l=(n+7)/8|0;return t.l}return function s(e,r){if(e.length<8)return n(e,r);return i(e,r)}}();function Te(e){var r=Aa(50+Math.floor(e.length*1.1));var t=ke(e,r);return r.slice(0,t)}var Ae=ee?new Uint16Array(32768):pe(32768);var ye=ee?new Uint16Array(32768):pe(32768);var Ee=ee?new Uint16Array(128):pe(128);var Ce=1,_e=1;function Se(e,r){var t=fe(e,r)+257;r+=5;var a=fe(e,r)+1;r+=5;var n=se(e,r)+4;r+=4;var i=0;var s=ee?new Uint8Array(19):pe(19);var f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var l=1;var o=ee?new Uint8Array(8):pe(8);var c=ee?new Uint8Array(8):pe(8);var h=s.length;for(var u=0;u<n;++u){s[Z[u]]=i=ie(e,r);if(l<i)l=i;o[i]++;r+=3}var d=0;o[0]=0;for(u=1;u<=l;++u)c[u]=d=d+o[u-1]<<1;for(u=0;u<h;++u)if((d=s[u])!=0)f[u]=c[d]++;var v=0;for(u=0;u<h;++u){v=s[u];if(v!=0){d=re[f[u]]>>8-v;for(var p=(1<<7-v)-1;p>=0;--p)Ee[d|p<<v]=v&7|u<<3}}var m=[];l=1;for(;m.length<t+a;){d=Ee[le(e,r)];r+=d&7;switch(d>>>=3){case 16:i=3+ne(e,r);r+=2;d=m[m.length-1];while(i-- >0)m.push(d);break;case 17:i=3+ie(e,r);r+=3;while(i-- >0)m.push(0);break;case 18:i=11+le(e,r);r+=7;while(i-- >0)m.push(0);break;default:m.push(d);if(l<d)l=d;break;}}var g=m.slice(0,t),b=m.slice(t);for(u=t;u<286;++u)g[u]=0;for(u=a;u<30;++u)b[u]=0;Ce=me(g,Ae,286);_e=me(b,ye,30);return r}function xe(e,r){if(e[0]==3&&!(e[1]&3)){return[x(r),2]}var t=0;var a=0;var n=O(r?r:1<<18);var i=0;var s=n.length>>>0;var f=0,l=0;while((a&1)==0){a=ie(e,t);t+=3;if(a>>>1==0){if(t&7)t+=8-(t&7);var o=e[t>>>3]|e[(t>>>3)+1]<<8;t+=32;if(o>0){if(!r&&s<i+o){n=ve(n,i+o);s=n.length}while(o-- >0){n[i++]=e[t>>>3];t+=8}}continue}else if(a>>1==1){f=9;l=5}else{t=Se(e,t);f=Ce;l=_e}for(;;){if(!r&&s<i+32767){n=ve(n,i+32767);s=n.length}var c=oe(e,t,f);var h=a>>>1==1?ge[c]:Ae[c];t+=h&15;h>>>=4;if((h>>>8&255)===0)n[i++]=h;else if(h==256)break;else{h-=257;var u=h<8?0:h-4>>2;if(u>5)u=0;var d=i+J[h];if(u>0){d+=oe(e,t,u);t+=u}c=oe(e,t,l);h=a>>>1==1?be[c]:ye[c];t+=h&15;h>>>=4;var v=h<4?0:h-2>>1;var p=q[h];if(v>0){p+=oe(e,t,v);t+=v}if(!r&&s<d){n=ve(n,d+100);s=n.length}while(i<d){n[i]=n[i-p];++i}}}}if(r)return[n,t+7>>>3];return[n.slice(0,i),t+7>>>3]}function Oe(e,r){var t=e.slice(e.l||0);var a=xe(t,r);e.l+=a[1];return a[0]}function Re(e,r){if(e){if(typeof console!=="undefined")console.error(r)}else throw new Error(r)}function Ie(e,r){var t=e;ka(t,0);var a=[],n=[];var i={FileIndex:a,FullPaths:n};y(i,{root:r.root});var f=t.length-4;while((t[f]!=80||t[f+1]!=75||t[f+2]!=5||t[f+3]!=6)&&f>=0)--f;t.l=f+4;t.l+=4;var l=t._R(2);t.l+=6;var o=t._R(4);t.l=o;for(f=0;f<l;++f){t.l+=20;var c=t._R(4);var h=t._R(4);var u=t._R(2);var d=t._R(2);var v=t._R(2);t.l+=8;var p=t._R(4);var m=s(t.slice(t.l+u,t.l+u+d));t.l+=u+d+v;var g=t.l;t.l=p+4;if(m&&m[1]){if((m[1]||{}).usz)h=m[1].usz;if((m[1]||{}).csz)c=m[1].csz}Ne(t,c,h,i,m);t.l=g}return i}function Ne(e,r,t,a,n){e.l+=2;var f=e._R(2);var l=e._R(2);var o=i(e);if(f&8257)throw new Error("Unsupported ZIP encryption");var c=e._R(4);var h=e._R(4);var u=e._R(4);var d=e._R(2);var v=e._R(2);
var p="";for(var m=0;m<d;++m)p+=String.fromCharCode(e[e.l++]);if(v){var g=s(e.slice(e.l,e.l+v));if((g[21589]||{}).mt)o=g[21589].mt;if((g[1]||{}).usz)u=g[1].usz;if((g[1]||{}).csz)h=g[1].csz;if(n){if((n[21589]||{}).mt)o=n[21589].mt;if((n[1]||{}).usz)u=g[1].usz;if((n[1]||{}).csz)h=g[1].csz}}e.l+=v;var b=e.slice(e.l,e.l+h);switch(l){case 8:b=K(e,u);break;case 0:break;default:throw new Error("Unsupported ZIP Compression method "+l);}var w=false;if(f&8){c=e._R(4);if(c==134695760){c=e._R(4);w=true}h=e._R(4);u=e._R(4)}if(h!=r)Re(w,"Bad compressed size: "+r+" != "+h);if(u!=t)Re(w,"Bad uncompressed size: "+t+" != "+u);Ve(a,p,b,{unsafe:true,mt:o})}function Fe(e,r){var t=r||{};var a=[],i=[];var s=Aa(1);var f=t.compression?8:0,l=0;var o=false;if(o)l|=8;var c=0,h=0;var u=0,d=0;var v=e.FullPaths[0],p=v,m=e.FileIndex[0];var g=[];var b=0;for(c=1;c<e.FullPaths.length;++c){p=e.FullPaths[c].slice(v.length);m=e.FileIndex[c];if(!m.size||!m.content||p=="Sh33tJ5")continue;var w=u;var k=Aa(p.length);for(h=0;h<p.length;++h)k._W(1,p.charCodeAt(h)&127);k=k.slice(0,k.l);g[d]=typeof m.content=="string"?Je.bstr(m.content,0):Je.buf(m.content,0);var T=typeof m.content=="string"?R(m.content):m.content;if(f==8)T=Y(T);s=Aa(30);s._W(4,67324752);s._W(2,20);s._W(2,l);s._W(2,f);if(m.mt)n(s,m.mt);else s._W(4,0);s._W(-4,l&8?0:g[d]);s._W(4,l&8?0:T.length);s._W(4,l&8?0:m.content.length);s._W(2,k.length);s._W(2,0);u+=s.length;a.push(s);u+=k.length;a.push(k);u+=T.length;a.push(T);if(l&8){s=Aa(12);s._W(-4,g[d]);s._W(4,T.length);s._W(4,m.content.length);u+=s.l;a.push(s)}s=Aa(46);s._W(4,33639248);s._W(2,0);s._W(2,20);s._W(2,l);s._W(2,f);s._W(4,0);s._W(-4,g[d]);s._W(4,T.length);s._W(4,m.content.length);s._W(2,k.length);s._W(2,0);s._W(2,0);s._W(2,0);s._W(2,0);s._W(4,0);s._W(4,w);b+=s.l;i.push(s);b+=k.length;i.push(k);++d}s=Aa(22);s._W(4,101010256);s._W(2,0);s._W(2,0);s._W(2,d);s._W(2,d);s._W(4,b);s._W(4,u);s._W(2,0);return P([P(a),P(i),s])}var De={htm:"text/html",xml:"text/xml",gif:"image/gif",jpg:"image/jpeg",png:"image/png",mso:"application/x-mso",thmx:"application/vnd.ms-officetheme",sh33tj5:"application/octet-stream"};function Pe(e,r){if(e.ctype)return e.ctype;var t=e.name||"",a=t.match(/\.([^\.]+)$/);if(a&&De[a[1]])return De[a[1]];if(r){a=(t=r).match(/[\.\\]([^\.\\])+$/);if(a&&De[a[1]])return De[a[1]]}return"application/octet-stream"}function Le(e){var r=T(e);var t=[];for(var a=0;a<r.length;a+=76)t.push(r.slice(a,a+76));return t.join("\r\n")+"\r\n"}function Me(e){var r=e.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF=]/g,function(e){var r=e.charCodeAt(0).toString(16).toUpperCase();return"="+(r.length==1?"0"+r:r)});r=r.replace(/ $/gm,"=20").replace(/\t$/gm,"=09");if(r.charAt(0)=="\n")r="=0D"+r.slice(1);r=r.replace(/\r(?!\n)/gm,"=0D").replace(/\n\n/gm,"\n=0A").replace(/([^\r\n])\n/gm,"$1=0A");var t=[],a=r.split("\r\n");for(var n=0;n<a.length;++n){var i=a[n];if(i.length==0){t.push("");continue}for(var s=0;s<i.length;){var f=76;var l=i.slice(s,s+f);if(l.charAt(f-1)=="=")f--;else if(l.charAt(f-2)=="=")f-=2;else if(l.charAt(f-3)=="=")f-=3;l=i.slice(s,s+f);s+=f;if(s<i.length)l+="=";t.push(l)}}return t.join("\r\n")}function Ue(e){var r=[];for(var t=0;t<e.length;++t){var a=e[t];while(t<=e.length&&a.charAt(a.length-1)=="=")a=a.slice(0,a.length-1)+e[++t];r.push(a)}for(var n=0;n<r.length;++n)r[n]=r[n].replace(/[=][0-9A-Fa-f]{2}/g,function(e){return String.fromCharCode(parseInt(e.slice(1),16))});return R(r.join("\r\n"))}function Be(e,r,t){var a="",n="",i="",s;var f=0;for(;f<10;++f){var l=r[f];if(!l||l.match(/^\s*$/))break;var o=l.match(/^(.*?):\s*([^\s].*)$/);if(o)switch(o[1].toLowerCase()){case"content-location":a=o[2].trim();break;case"content-type":i=o[2].trim();break;case"content-transfer-encoding":n=o[2].trim();break;}}++f;switch(n.toLowerCase()){case"base64":s=R(E(r.slice(f).join("")));break;case"quoted-printable":s=Ue(r.slice(f));break;default:throw new Error("Unsupported Content-Transfer-Encoding "+n);}var c=Ve(e,a.slice(t.length),s,{unsafe:true});if(i)c.ctype=i}function We(e,r){if(X(e.slice(0,13)).toLowerCase()!="mime-version:")throw new Error("Unsupported MAD header");var t=r&&r.root||"";var a=(C&&Buffer.isBuffer(e)?e.toString("binary"):X(e)).split("\r\n");var n=0,i="";for(n=0;n<a.length;++n){i=a[n];if(!/^Content-Location:/i.test(i))continue;i=i.slice(i.indexOf("file"));if(!t)t=i.slice(0,i.lastIndexOf("/")+1);if(i.slice(0,t.length)==t)continue;while(t.length>0){t=t.slice(0,t.length-1);t=t.slice(0,t.lastIndexOf("/")+1);if(i.slice(0,t.length)==t)break}}var s=(a[1]||"").match(/boundary="(.*?)"/);if(!s)throw new Error("MAD cannot find boundary");var f="--"+(s[1]||"");var l=[],o=[];var c={FileIndex:l,FullPaths:o};y(c);var h,u=0;for(n=0;n<a.length;++n){var d=a[n];if(d!==f&&d!==f+"--")continue;if(u++)Be(c,a.slice(h,n),t);h=n}return c}function ze(e,r){var t=r||{};var a=t.boundary||"SheetJS";a="------="+a;var n=["MIME-Version: 1.0",'Content-Type: multipart/related; boundary="'+a.slice(2)+'"',"","",""];var i=e.FullPaths[0],s=i,f=e.FileIndex[0];for(var l=1;l<e.FullPaths.length;++l){s=e.FullPaths[l].slice(i.length);f=e.FileIndex[l];if(!f.size||!f.content||s=="Sh33tJ5")continue;s=s.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7E-\xFF]/g,function(e){return"_x"+e.charCodeAt(0).toString(16)+"_"}).replace(/[\u0080-\uFFFF]/g,function(e){return"_u"+e.charCodeAt(0).toString(16)+"_"});var o=f.content;var c=C&&Buffer.isBuffer(o)?o.toString("binary"):X(o);var h=0,u=Math.min(1024,c.length),d=0;for(var v=0;v<=u;++v)if((d=c.charCodeAt(v))>=32&&d<128)++h;var p=h>=u*4/5;n.push(a);n.push("Content-Location: "+(t.root||"file:///C:/SheetJS/")+s);n.push("Content-Transfer-Encoding: "+(p?"quoted-printable":"base64"));n.push("Content-Type: "+Pe(f,s));n.push("");n.push(p?Me(c):Le(c))}n.push(a+"--\r\n");return n.join("\r\n")}function He(e){var r={};y(r,e);return r}function Ve(e,r,t,n){var i=n&&n.unsafe;if(!i)y(e);var s=!i&&qe.find(e,r);if(!s){var f=e.FullPaths[0];if(r.slice(0,f.length)==f)f=r;else{if(f.slice(-1)!="/")f+="/";f=(f+r).replace("//","/")}s={name:a(r),type:2};e.FileIndex.push(s);e.FullPaths.push(f);if(!i)qe.utils.cfb_gc(e)}s.content=t;s.size=t?t.length:0;if(n){if(n.CLSID)s.clsid=n.CLSID;if(n.mt)s.mt=n.mt;if(n.ct)s.ct=n.ct}return s}function Xe(e,r){y(e);var t=qe.find(e,r);if(t)for(var a=0;a<e.FileIndex.length;++a)if(e.FileIndex[a]==t){e.FileIndex.splice(a,1);e.FullPaths.splice(a,1);return true}return false}function Ge(e,r,t){y(e);var n=qe.find(e,r);if(n)for(var i=0;i<e.FileIndex.length;++i)if(e.FileIndex[i]==n){e.FileIndex[i].name=a(t);e.FullPaths[i]=t;return true}return false}function $e(e){I(e,true)}e.find=F;e.read=A;e.parse=o;e.write=G;e.writeFile=V;e.utils={cfb_new:He,cfb_add:Ve,cfb_del:Xe,cfb_mov:Ge,cfb_gc:$e,ReadShift:va,CheckField:wa,prep_blob:ka,bconcat:P,use_zlib:j,_deflateRaw:Te,_inflateRaw:Oe,consts:H};return e}();var Qe;function er(e){Qe=e}function rr(e){if(typeof e==="string")return I(e);if(Array.isArray(e))return F(e);return e}function tr(e,r,t){if(typeof Qe!=="undefined"&&Qe.writeFileSync)return t?Qe.writeFileSync(e,r,t):Qe.writeFileSync(e,r);if(typeof Deno!=="undefined"){if(t&&typeof r=="string")switch(t){case"utf8":r=new TextEncoder(t).encode(r);break;case"binary":r=I(r);break;default:throw new Error("Unsupported encoding "+t);}return Deno.writeFileSync(e,r)}var a=t=="utf8"?kt(r):r;if(typeof IE_SaveFile!=="undefined")return IE_SaveFile(a,e);if(typeof Blob!=="undefined"){var n=new Blob([rr(a)],{type:"application/octet-stream"});if(typeof navigator!=="undefined"&&navigator.msSaveBlob)return navigator.msSaveBlob(n,e);if(typeof saveAs!=="undefined")return saveAs(n,e);if(typeof URL!=="undefined"&&typeof document!=="undefined"&&document.createElement&&URL.createObjectURL){var i=URL.createObjectURL(n);if(typeof chrome==="object"&&typeof(chrome.downloads||{}).download=="function"){if(URL.revokeObjectURL&&typeof setTimeout!=="undefined")setTimeout(function(){URL.revokeObjectURL(i)},6e4);return chrome.downloads.download({url:i,filename:e,saveAs:true})}var s=document.createElement("a");if(s.download!=null){s.download=e;s.href=i;document.body.appendChild(s);s.click();document.body.removeChild(s);if(URL.revokeObjectURL&&typeof setTimeout!=="undefined")setTimeout(function(){URL.revokeObjectURL(i)},6e4);return i}}else if(typeof URL!=="undefined"&&!URL.createObjectURL&&typeof chrome==="object"){var f="data:application/octet-stream;base64,"+y(new Uint8Array(rr(a)));return chrome.downloads.download({url:f,filename:e,saveAs:true})}}if(typeof $!=="undefined"&&typeof File!=="undefined"&&typeof Folder!=="undefined")try{var l=File(e);l.open("w");l.encoding="binary";if(Array.isArray(r))r=N(r);l.write(r);l.close();return r}catch(o){if(!o.message||!o.message.match(/onstruct/))throw o}throw new Error("cannot save file "+e)}function ar(e){if(typeof Qe!=="undefined")return Qe.readFileSync(e);if(typeof Deno!=="undefined")return Deno.readFileSync(e);if(typeof $!=="undefined"&&typeof File!=="undefined"&&typeof Folder!=="undefined")try{var r=File(e);r.open("r");r.encoding="binary";var t=r.read();r.close();return t}catch(a){if(!a.message||!a.message.match(/onstruct/))throw a}throw new Error("Cannot access file "+e)}function nr(e){var r=Object.keys(e),t=[];for(var a=0;a<r.length;++a)if(Object.prototype.hasOwnProperty.call(e,r[a]))t.push(r[a]);return t}function ir(e,r){var t=[],a=nr(e);for(var n=0;n!==a.length;++n)if(t[e[a[n]][r]]==null)t[e[a[n]][r]]=a[n];return t}function sr(e){var r=[],t=nr(e);for(var a=0;a!==t.length;++a)r[e[t[a]]]=t[a];return r}function fr(e){var r=[],t=nr(e);for(var a=0;a!==t.length;++a)r[e[t[a]]]=parseInt(t[a],10);return r}function lr(e){var r=[],t=nr(e);for(var a=0;a!==t.length;++a){if(r[e[t[a]]]==null)r[e[t[a]]]=[];r[e[t[a]]].push(t[a])}return r}var or=Date.UTC(1899,11,30,0,0,0);var cr=Date.UTC(1899,11,31,0,0,0);var hr=Date.UTC(1904,0,1,0,0,0);function ur(e,r){var t=e.getTime();var a=(t-or)/(24*60*60*1e3);if(r){a-=1462;return a<-1402?a-1:a}return a<60?a-1:a}function dr(e){if(e>=60&&e<61)return e;var r=new Date;r.setTime((e>60?e:e+1)*24*60*60*1e3+or);return r}function vr(e){var r=0,t=0,a=false;var n=e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);if(!n)throw new Error("|"+e+"| is not an ISO8601 Duration");for(var i=1;i!=n.length;++i){if(!n[i])continue;t=1;if(i>3)a=true;switch(n[i].slice(n[i].length-1)){case"Y":throw new Error("Unsupported ISO Duration Field: "+n[i].slice(n[i].length-1));case"D":t*=24;case"H":t*=60;case"M":if(!a)throw new Error("Unsupported ISO Duration Field: M");else t*=60;case"S":break;}r+=t*parseInt(n[i],10)}return r}var pr=/^(\d+):(\d+)(:\d+)?(\.\d+)?$/;var mr=/^(\d+)-(\d+)-(\d+)$/;var gr=/^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)?(\.\d+)?$/;function br(e,r){if(e instanceof Date)return e;var t=e.match(pr);if(t)return new Date((r?hr:cr)+((parseInt(t[1],10)*60+parseInt(t[2],10))*60+(t[3]?parseInt(t[3].slice(1),10):0))*1e3+(t[4]?parseInt((t[4]+"000").slice(1,4),10):0));t=e.match(mr);if(t)return new Date(Date.UTC(+t[1],+t[2]-1,+t[3],0,0,0,0));t=e.match(gr);if(t)return new Date(Date.UTC(+t[1],+t[2]-1,+t[3],+t[4],+t[5],t[6]&&parseInt(t[6].slice(1),10)||0,t[7]&&parseInt(t[7].slice(1),10)||0));var a=new Date(e);return a}function wr(e,r){if(C&&Buffer.isBuffer(e)){if(r&&S){if(e[0]==255&&e[1]==254)return kt(e.slice(2).toString("utf16le"));if(e[1]==254&&e[2]==255)return kt(d(e.slice(2).toString("binary")))}return e.toString("binary")}if(typeof TextDecoder!=="undefined")try{if(r){if(e[0]==255&&e[1]==254)return kt(new TextDecoder("utf-16le").decode(e.slice(2)));if(e[0]==254&&e[1]==255)return kt(new TextDecoder("utf-16be").decode(e.slice(2)))}var t={"â‚¬":"Â€","â€š":"Â‚","Æ’":"Âƒ","â€ž":"Â„","â€¦":"Â…","â€ ":"Â†","â€¡":"Â‡","Ë†":"Âˆ","â€°":"Â‰","Å ":"ÂŠ","â€¹":"Â‹","Å’":"ÂŒ","Å½":"ÂŽ","â€˜":"Â‘","â€™":"Â’","â€œ":"Â“","â€":"Â”","â€¢":"Â•","â€“":"Â–","â€”":"Â—","Ëœ":"Â˜","â„¢":"Â™","Å¡":"Âš","â€º":"Â›","Å“":"Âœ","Å¾":"Âž","Å¸":"ÂŸ"};if(Array.isArray(e))e=new Uint8Array(e);return new TextDecoder("latin1").decode(e).replace(/[â‚¬â€šÆ’â€žâ€¦â€ â€¡Ë†â€°Å â€¹Å’Å½â€˜â€™â€œâ€â€¢â€“â€”Ëœâ„¢Å¡â€ºÅ“Å¾Å¸]/g,function(e){return t[e]||e})}catch(a){}var n=[],i=0;try{for(i=0;i<e.length-65536;i+=65536)n.push(String.fromCharCode.apply(0,e.slice(i,i+65536)));n.push(String.fromCharCode.apply(0,e.slice(i)))}catch(a){try{for(;i<e.length-16384;i+=16384)n.push(String.fromCharCode.apply(0,e.slice(i,i+16384)));n.push(String.fromCharCode.apply(0,e.slice(i)))}catch(a){for(;i!=e.length;++i)n.push(String.fromCharCode(e[i]))}}return n.join("")}function kr(e){if(typeof JSON!="undefined"&&!Array.isArray(e))return JSON.parse(JSON.stringify(e));if(typeof e!="object"||e==null)return e;if(e instanceof Date)return new Date(e.getTime());var r={};for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))r[t]=kr(e[t]);return r}function Tr(e,r){var t="";while(t.length<r)t+=e;return t}function Ar(e){var r=Number(e);if(!isNaN(r))return isFinite(r)?r:NaN;if(!/\d/.test(e))return r;var t=1;var a=e.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){t*=100;return""});if(!isNaN(r=Number(a)))return r/t;a=a.replace(/[(](.*)[)]/,function(e,r){t=-t;return r});if(!isNaN(r=Number(a)))return r/t;return r}var yr=/^(0?\d|1[0-2])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))\s+([ap])m?$/;var Er=/^([01]?\d|2[0-3])(?:|:([0-5]?\d)(?:|(\.\d+)(?:|:([0-5]?\d))|:([0-5]?\d)(|\.\d+)))$/;var Cr=/^(\d+)-(\d+)-(\d+)[T ](\d+):(\d+)(:\d+)(\.\d+)?[Z]?$/;var _r=new Date("6/9/69 00:00 UTC").valueOf()==-177984e5;function Sr(e){if(!e[2])return new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),0,0,0));if(e[3]){if(e[4])return new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),+e[2],+e[4],parseFloat(e[3])*1e3));else return new Date(Date.UTC(1899,11,31,e[7]=="p"?12:0,+e[1],+e[2],parseFloat(e[3])*1e3))}else if(e[5])return new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),+e[2],+e[5],e[6]?parseFloat(e[6])*1e3:0));else return new Date(Date.UTC(1899,11,31,+e[1]%12+(e[7]=="p"?12:0),+e[2],0,0))}function xr(e){if(!e[2])return new Date(Date.UTC(1899,11,31,+e[1],0,0,0));if(e[3]){if(e[4])return new Date(Date.UTC(1899,11,31,+e[1],+e[2],+e[4],parseFloat(e[3])*1e3));else return new Date(Date.UTC(1899,11,31,0,+e[1],+e[2],parseFloat(e[3])*1e3))}else if(e[5])return new Date(Date.UTC(1899,11,31,+e[1],+e[2],+e[5],e[6]?parseFloat(e[6])*1e3:0));else return new Date(Date.UTC(1899,11,31,+e[1],+e[2],0,0))}var Or=["january","february","march","april","may","june","july","august","september","october","november","december"];function Rr(e){if(Cr.test(e))return e.indexOf("Z")==-1?Fr(new Date(e)):new Date(e);var r=e.toLowerCase();var t=r.replace(/\s+/g," ").trim();var a=t.match(yr);if(a)return Sr(a);a=t.match(Er);if(a)return xr(a);a=t.match(gr);if(a)return new Date(Date.UTC(+a[1],+a[2]-1,+a[3],+a[4],+a[5],a[6]&&parseInt(a[6].slice(1),10)||0,a[7]&&parseInt(a[7].slice(1),10)||0));var n=new Date(_r&&e.indexOf("UTC")==-1?e+" UTC":e),i=new Date(NaN);var s=n.getYear(),f=n.getMonth(),l=n.getDate();if(isNaN(l))return i;if(r.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)){r=r.replace(/[^a-z]/g,"").replace(/([^a-z]|^)[ap]m?([^a-z]|$)/,"");if(r.length>3&&Or.indexOf(r)==-1)return i}else if(r.replace(/[ap]m?/,"").match(/[a-z]/))return i;if(s<0||s>8099||e.match(/[^-0-9:,\/\\\ ]/))return i;return n}var Ir=function(){var e="abacaba".split(/(:?b)/i).length==5;return function r(t,a,n){if(e||typeof a=="string")return t.split(a);var i=t.split(a),s=[i[0]];for(var f=1;f<i.length;++f){s.push(n);s.push(i[f])}return s}}();function Nr(e){return new Date(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate(),e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds())}function Fr(e){return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))}function Dr(e){if(!e)return null;if(e.content&&e.type)return wr(e.content,true);if(e.data)return v(e.data);if(e.asNodeBuffer&&C)return v(e.asNodeBuffer().toString("binary"));if(e.asBinary)return v(e.asBinary());if(e._data&&e._data.getContent)return v(wr(Array.prototype.slice.call(e._data.getContent(),0)));return null}function Pr(e){if(!e)return null;if(e.data)return c(e.data);if(e.asNodeBuffer&&C)return e.asNodeBuffer();if(e._data&&e._data.getContent){var r=e._data.getContent();if(typeof r=="string")return c(r);return Array.prototype.slice.call(r)}if(e.content&&e.type)return e.content;return null}function Lr(e){return e&&e.name.slice(-4)===".bin"?Pr(e):Dr(e)}function Mr(e,r){var t=e.FullPaths||nr(e.files);var a=r.toLowerCase().replace(/[\/]/g,"\\"),n=a.replace(/\\/g,"/");for(var i=0;i<t.length;++i){var s=t[i].replace(/^Root Entry[\/]/,"").toLowerCase();if(a==s||n==s)return e.files?e.files[t[i]]:e.FileIndex[i]}return null}function Ur(e,r){var t=Mr(e,r);if(t==null)throw new Error("Cannot find file "+r+" in zip");return t}function Br(e,r,t){if(!t)return Lr(Ur(e,r));if(!r)return null;try{return Br(e,r)}catch(a){return null}}function Wr(e,r,t){if(!t)return Dr(Ur(e,r));if(!r)return null;try{return Wr(e,r)}catch(a){return null}}function zr(e,r,t){if(!t)return Pr(Ur(e,r));if(!r)return null;try{return zr(e,r)}catch(a){return null}}function Hr(e){var r=e.FullPaths||nr(e.files),t=[];for(var a=0;a<r.length;++a)if(r[a].slice(-1)!="/")t.push(r[a].replace(/^Root Entry[\/]/,""));return t.sort()}function Vr(e,r,t){if(e.FullPaths){if(typeof t=="string"){var a;if(C)a=_(t);else a=L(t);return qe.utils.cfb_add(e,r,a)}qe.utils.cfb_add(e,r,t)}else e.file(r,t)}function Xr(){return qe.utils.cfb_new()}function Gr(e,r){switch(r.type){case"base64":return qe.read(e,{type:"base64"});case"binary":return qe.read(e,{type:"binary"});case"buffer":;case"array":return qe.read(e,{type:"buffer"});}throw new Error("Unrecognized type "+r.type)}function $r(e,r){if(e.charAt(0)=="/")return e.slice(1);var t=r.split("/");if(r.slice(-1)!="/")t.pop();var a=e.split("/");while(a.length!==0){var n=a.shift();if(n==="..")t.pop();else if(n!==".")t.push(n)}return t.join("/")}var jr='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';var Kr=/([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g;var Yr=/<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s*[\/\?]?>/gm,Zr=/<[^>]*>/g;var Jr=jr.match(Yr)?Yr:Zr;var qr=/<\w*:/,Qr=/<(\/?)\w+:/;function et(e,r,t){var a={};var n=0,i=0;for(;n!==e.length;++n)if((i=e.charCodeAt(n))===32||i===10||i===13)break;if(!r)a[0]=e.slice(0,n);if(n===e.length)return a;var s=e.match(Kr),f=0,l="",o=0,c="",h="",u=1;if(s)for(o=0;o!=s.length;++o){h=s[o];for(i=0;i!=h.length;++i)if(h.charCodeAt(i)===61)break;c=h.slice(0,i).trim();while(h.charCodeAt(i+1)==32)++i;u=(n=h.charCodeAt(i+1))==34||n==39?1:0;l=h.slice(i+1+u,h.length-u);for(f=0;f!=c.length;++f)if(c.charCodeAt(f)===58)break;if(f===c.length){if(c.indexOf("_")>0)c=c.slice(0,c.indexOf("_"));a[c]=l;if(!t)a[c.toLowerCase()]=l}else{var d=(f===5&&c.slice(0,5)==="xmlns"?"xmlns":"")+c.slice(f+1);if(a[d]&&c.slice(f-3,f)=="ext")continue;a[d]=l;if(!t)a[d.toLowerCase()]=l}}return a}function rt(e){return e.replace(Qr,"<$1")}var tt={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"};var at=sr(tt);var nt=function(){var e=/&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/gi,r=/_x([\da-fA-F]{4})_/gi;function t(a){var n=a+"",i=n.indexOf("<![CDATA[");if(i==-1)return n.replace(e,function(e,r){return tt[e]||String.fromCharCode(parseInt(r,e.indexOf("x")>-1?16:10))||e}).replace(r,function(e,r){return String.fromCharCode(parseInt(r,16))});var s=n.indexOf("]]>");return t(n.slice(0,i))+n.slice(i+9,s)+t(n.slice(s+3))}return function a(e,r){var a=t(e);return r?a.replace(/\r\n/g,"\n"):a}}();var it=/[&<>'"]/g,st=/[\u0000-\u0008\u000b-\u001f\uFFFE-\uFFFF]/g;function ft(e){var r=e+"";return r.replace(it,function(e){return at[e]}).replace(st,function(e){return"_x"+("000"+e.charCodeAt(0).toString(16)).slice(-4)+"_"})}function lt(e){return ft(e).replace(/ /g,"_x0020_")}var ot=/[\u0000-\u001f]/g;function ct(e){var r=e+"";return r.replace(it,function(e){return at[e]}).replace(/\n/g,"<br/>").replace(ot,function(e){return"&#x"+("000"+e.charCodeAt(0).toString(16)).slice(-4)+";"})}function ht(e){var r=e+"";return r.replace(it,function(e){return at[e]}).replace(ot,function(e){return"&#x"+e.charCodeAt(0).toString(16).toUpperCase()+";"})}var ut=function(){var e=/&#(\d+);/g;function r(e,r){return String.fromCharCode(parseInt(r,10))}return function t(a){return a.replace(e,r)}}();function dt(e){return e.replace(/(\r\n|[\r\n])/g,"&#10;")}function vt(e){switch(e){case 1:;case true:;case"1":;case"true":return true;case 0:;case false:;case"0":;case"false":return false;}return false}function pt(e){var r="",t=0,a=0,n=0,i=0,s=0,f=0;while(t<e.length){a=e.charCodeAt(t++);if(a<128){r+=String.fromCharCode(a);continue}n=e.charCodeAt(t++);if(a>191&&a<224){s=(a&31)<<6;s|=n&63;r+=String.fromCharCode(s);continue}i=e.charCodeAt(t++);if(a<240){r+=String.fromCharCode((a&15)<<12|(n&63)<<6|i&63);continue}s=e.charCodeAt(t++);f=((a&7)<<18|(n&63)<<12|(i&63)<<6|s&63)-65536;r+=String.fromCharCode(55296+(f>>>10&1023));r+=String.fromCharCode(56320+(f&1023))}return r}function mt(e){var r=x(2*e.length),t,a,n=1,i=0,s=0,f;for(a=0;a<e.length;a+=n){n=1;if((f=e.charCodeAt(a))<128)t=f;else if(f<224){t=(f&31)*64+(e.charCodeAt(a+1)&63);n=2}else if(f<240){t=(f&15)*4096+(e.charCodeAt(a+1)&63)*64+(e.charCodeAt(a+2)&63);n=3}else{n=4;t=(f&7)*262144+(e.charCodeAt(a+1)&63)*4096+(e.charCodeAt(a+2)&63)*64+(e.charCodeAt(a+3)&63);t-=65536;s=55296+(t>>>10&1023);t=56320+(t&1023)}if(s!==0){r[i++]=s&255;r[i++]=s>>>8;s=0}r[i++]=t%256;r[i++]=t>>>8}return r.slice(0,i).toString("ucs2")}function gt(e){return _(e,"binary").toString("utf8")}var bt="foo bar bazÃ¢Â˜ÂƒÃ°ÂŸÂÂ£";var wt=C&&(gt(bt)==pt(bt)&&gt||mt(bt)==pt(bt)&&mt)||pt;var kt=C?function(e){return _(e,"utf8").toString("binary")}:function(e){var r=[],t=0,a=0,n=0;while(t<e.length){a=e.charCodeAt(t++);switch(true){case a<128:r.push(String.fromCharCode(a));break;case a<2048:r.push(String.fromCharCode(192+(a>>6)));r.push(String.fromCharCode(128+(a&63)));break;case a>=55296&&a<57344:a-=55296;n=e.charCodeAt(t++)-56320+(a<<10);r.push(String.fromCharCode(240+(n>>18&7)));r.push(String.fromCharCode(144+(n>>12&63)));r.push(String.fromCharCode(128+(n>>6&63)));r.push(String.fromCharCode(128+(n&63)));break;default:r.push(String.fromCharCode(224+(a>>12)));r.push(String.fromCharCode(128+(a>>6&63)));r.push(String.fromCharCode(128+(a&63)));}}return r.join("")};var Tt=function(){var e={};return function r(t,a){var n=t+"|"+(a||"");if(e[n])return e[n];return e[n]=new RegExp("<(?:\\w+:)?"+t+'(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?'+t+">",a||"")}}();var At=function(){var e=[["nbsp"," "],["middot","Â·"],["quot",'"'],["apos","'"],["gt",">"],["lt","<"],["amp","&"]].map(function(e){return[new RegExp("&"+e[0]+";","ig"),e[1]]});return function r(t){var a=t.replace(/^[\t\n\r ]+/,"").replace(/[\t\n\r ]+$/,"").replace(/>\s+/g,">").replace(/\s+</g,"<").replace(/[\t\n\r ]+/g," ").replace(/<\s*[bB][rR]\s*\/?>/g,"\n").replace(/<[^>]*>/g,"");for(var n=0;n<e.length;++n)a=a.replace(e[n][0],e[n][1]);return a}}();var yt=function(){var e={};return function r(t){if(e[t]!==undefined)return e[t];return e[t]=new RegExp("<(?:vt:)?"+t+">([\\s\\S]*?)</(?:vt:)?"+t+">","g")}}();var Et=/<\/?(?:vt:)?variant>/g,Ct=/<(?:vt:)([^>]*)>([\s\S]*)</;function _t(e,r){var t=et(e);var a=e.match(yt(t.baseType))||[];var n=[];if(a.length!=t.size){if(r.WTF)throw new Error("unexpected vector length "+a.length+" != "+t.size);return n}a.forEach(function(e){var r=e.replace(Et,"").match(Ct);if(r)n.push({v:wt(r[2]),t:r[1]})});return n}var St=/(^\s|\s$|\n)/;function xt(e,r){return"<"+e+(r.match(St)?' xml:space="preserve"':"")+">"+r+"</"+e+">"}function Ot(e){return nr(e).map(function(r){return" "+r+'="'+e[r]+'"'}).join("")}function Rt(e,r,t){return"<"+e+(t!=null?Ot(t):"")+(r!=null?(r.match(St)?' xml:space="preserve"':"")+">"+r+"</"+e:"/")+">"}function It(e,r){try{return e.toISOString().replace(/\.\d*/,"")}catch(t){if(r)throw t}return""}function Nt(e,r){switch(typeof e){case"string":var t=Rt("vt:lpwstr",ft(e));if(r)t=t.replace(/&quot;/g,"_x0022_");return t;case"number":return Rt((e|0)==e?"vt:i4":"vt:r8",ft(String(e)));case"boolean":return Rt("vt:bool",e?"true":"false");}if(e instanceof Date)return Rt("vt:filetime",It(e));throw new Error("Unable to serialize "+e)}function Ft(e){if(C&&Buffer.isBuffer(e))return e.toString("utf8");if(typeof e==="string")return e;if(typeof Uint8Array!=="undefined"&&e instanceof Uint8Array)return wt(N(D(e)));throw new Error("Bad input format: expected Buffer or string")}var Dt=/<(\/?)([^\s?><!\/:]*:|)([^\s?<>:\/]+)(?:[\s?:\/](?:[^>=]|="[^"]*?")*)?>/gm;var Pt={CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/metadata/core-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",CT:"http://schemas.openxmlformats.org/package/2006/content-types",RELS:"http://schemas.openxmlformats.org/package/2006/relationships",TCMNT:"http://schemas.microsoft.com/office/spreadsheetml/2018/threadedcomments",dc:"http://purl.org/dc/elements/1.1/",dcterms:"http://purl.org/dc/terms/",dcmitype:"http://purl.org/dc/dcmitype/",mx:"http://schemas.microsoft.com/office/mac/excel/2008/main",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",sjs:"http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",vt:"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",xsi:"http://www.w3.org/2001/XMLSchema-instance",xsd:"http://www.w3.org/2001/XMLSchema"};var Lt=["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"];var Mt={o:"urn:schemas-microsoft-com:office:office",x:"urn:schemas-microsoft-com:office:excel",ss:"urn:schemas-microsoft-com:office:spreadsheet",dt:"uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",mv:"http://macVmlSchemaUri",v:"urn:schemas-microsoft-com:vml",html:"http://www.w3.org/TR/REC-html40"};function Ut(e,r){var t=1-2*(e[r+7]>>>7);var a=((e[r+7]&127)<<4)+(e[r+6]>>>4&15);var n=e[r+6]&15;for(var i=5;i>=0;--i)n=n*256+e[r+i];if(a==2047)return n==0?t*Infinity:NaN;if(a==0)a=-1022;else{a-=1023;n+=Math.pow(2,52)}return t*Math.pow(2,a-52)*n}function Bt(e,r,t){var a=(r<0||1/r==-Infinity?1:0)<<7,n=0,i=0;var s=a?-r:r;if(!isFinite(s)){n=2047;i=isNaN(r)?26985:0}else if(s==0)n=i=0;else{n=Math.floor(Math.log(s)/Math.LN2);i=s*Math.pow(2,52-n);if(n<=-1023&&(!isFinite(i)||i<Math.pow(2,52))){n=-1022}else{i-=Math.pow(2,52);n+=1023}}for(var f=0;f<=5;++f,i/=256)e[t+f]=i&255;e[t+6]=(n&15)<<4|i&15;e[t+7]=n>>4|a}var Wt=function(e){var r=[],t=10240;for(var a=0;a<e[0].length;++a)if(e[0][a])for(var n=0,i=e[0][a].length;n<i;n+=t)r.push.apply(r,e[0][a].slice(n,n+t));return r};var zt=C?function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0].map(function(e){return Buffer.isBuffer(e)?e:_(e)})):Wt(e)}:Wt;var Ht=function(e,r,t){var a=[];for(var n=r;n<t;n+=2)a.push(String.fromCharCode(oa(e,n)));return a.join("").replace(M,"")};var Vt=C?function(e,r,t){if(!Buffer.isBuffer(e)||!S)return Ht(e,r,t);return e.toString("utf16le",r,t).replace(M,"")}:Ht;var Xt=function(e,r,t){var a=[];for(var n=r;n<r+t;++n)a.push(("0"+e[n].toString(16)).slice(-2));return a.join("")};var Gt=C?function(e,r,t){return Buffer.isBuffer(e)?e.toString("hex",r,r+t):Xt(e,r,t)}:Xt;var $t=function(e,r,t){var a=[];for(var n=r;n<t;n++)a.push(String.fromCharCode(la(e,n)));return a.join("")};var jt=C?function uT(e,r,t){return Buffer.isBuffer(e)?e.toString("utf8",r,t):$t(e,r,t)}:$t;var Kt=function(e,r){var t=ha(e,r);return t>0?jt(e,r+4,r+4+t-1):""};var Yt=Kt;var Zt=function(e,r){var t=ha(e,r);return t>0?jt(e,r+4,r+4+t-1):""};var Jt=Zt;var qt=function(e,r){var t=2*ha(e,r);return t>0?jt(e,r+4,r+4+t-1):""};var Qt=qt;var ea=function dT(e,r){var t=ha(e,r);return t>0?Vt(e,r+4,r+4+t):""};var ra=ea;var ta=function(e,r){var t=ha(e,r);return t>0?jt(e,r+4,r+4+t):""};var aa=ta;var na=function(e,r){return Ut(e,r)};var ia=na;var sa=function vT(e){return Array.isArray(e)||typeof Uint8Array!=="undefined"&&e instanceof Uint8Array};if(C){Yt=function pT(e,r){if(!Buffer.isBuffer(e))return Kt(e,r);var t=e.readUInt32LE(r);return t>0?e.toString("utf8",r+4,r+4+t-1):""};Jt=function mT(e,r){if(!Buffer.isBuffer(e))return Zt(e,r);var t=e.readUInt32LE(r);return t>0?e.toString("utf8",r+4,r+4+t-1):""};Qt=function gT(e,r){if(!Buffer.isBuffer(e)||!S)return qt(e,r);var t=2*e.readUInt32LE(r);return e.toString("utf16le",r+4,r+4+t-1)};ra=function bT(e,r){if(!Buffer.isBuffer(e)||!S)return ea(e,r);var t=e.readUInt32LE(r);return e.toString("utf16le",r+4,r+4+t)};aa=function wT(e,r){if(!Buffer.isBuffer(e))return ta(e,r);var t=e.readUInt32LE(r);return e.toString("utf8",r+4,r+4+t)};ia=function kT(e,r){if(Buffer.isBuffer(e))return e.readDoubleLE(r);return na(e,r)};sa=function TT(e){return Buffer.isBuffer(e)||Array.isArray(e)||typeof Uint8Array!=="undefined"&&e instanceof Uint8Array}}function fa(){Vt=function(e,r,t){return a.utils.decode(1200,e.slice(r,t)).replace(M,"")};jt=function(e,r,t){return a.utils.decode(65001,e.slice(r,t))};Yt=function(e,r){var n=ha(e,r);return n>0?a.utils.decode(t,e.slice(r+4,r+4+n-1)):""};Jt=function(e,t){var n=ha(e,t);return n>0?a.utils.decode(r,e.slice(t+4,t+4+n-1)):""};Qt=function(e,r){var t=2*ha(e,r);return t>0?a.utils.decode(1200,e.slice(r+4,r+4+t-1)):""};ra=function(e,r){var t=ha(e,r);return t>0?a.utils.decode(1200,e.slice(r+4,r+4+t)):""};aa=function(e,r){var t=ha(e,r);return t>0?a.utils.decode(65001,e.slice(r+4,r+4+t)):""}}if(typeof a!=="undefined")fa();var la=function(e,r){return e[r]};var oa=function(e,r){return e[r+1]*(1<<8)+e[r]};var ca=function(e,r){var t=e[r+1]*(1<<8)+e[r];return t<32768?t:(65535-t+1)*-1};var ha=function(e,r){return e[r+3]*(1<<24)+(e[r+2]<<16)+(e[r+1]<<8)+e[r]};var ua=function(e,r){return e[r+3]<<24|e[r+2]<<16|e[r+1]<<8|e[r]};var da=function(e,r){return e[r]<<24|e[r+1]<<16|e[r+2]<<8|e[r+3]};function va(e,t){var n="",i,s,f=[],l,o,c,h;switch(t){case"dbcs":h=this.l;if(C&&Buffer.isBuffer(this)&&S)n=this.slice(this.l,this.l+2*e).toString("utf16le");else for(c=0;c<e;++c){n+=String.fromCharCode(oa(this,h));h+=2}e*=2;break;case"utf8":n=jt(this,this.l,this.l+e);break;case"utf16le":e*=2;n=Vt(this,this.l,this.l+e);break;case"wstr":if(typeof a!=="undefined")n=a.utils.decode(r,this.slice(this.l,this.l+2*e));else return va.call(this,e,"dbcs");e=2*e;break;case"lpstr-ansi":n=Yt(this,this.l);e=4+ha(this,this.l);break;case"lpstr-cp":n=Jt(this,this.l);e=4+ha(this,this.l);break;case"lpwstr":n=Qt(this,this.l);e=4+2*ha(this,this.l);break;case"lpp4":e=4+ha(this,this.l);n=ra(this,this.l);if(e&2)e+=2;break;case"8lpp4":e=4+ha(this,this.l);n=aa(this,this.l);if(e&3)e+=4-(e&3);break;case"cstr":e=0;n="";while((l=la(this,this.l+e++))!==0)f.push(p(l));n=f.join("");break;case"_wstr":e=0;n="";while((l=oa(this,this.l+e))!==0){f.push(p(l));e+=2}e+=2;n=f.join("");break;case"dbcs-cont":n="";h=this.l;for(c=0;c<e;++c){if(this.lens&&this.lens.indexOf(h)!==-1){l=la(this,h);this.l=h+1;o=va.call(this,e-c,l?"dbcs-cont":"sbcs-cont");return f.join("")+o}f.push(p(oa(this,h)));h+=2}n=f.join("");e*=2;break;case"cpstr":if(typeof a!=="undefined"){n=a.utils.decode(r,this.slice(this.l,this.l+e));break};case"sbcs-cont":n="";h=this.l;for(c=0;c!=e;++c){if(this.lens&&this.lens.indexOf(h)!==-1){l=la(this,h);this.l=h+1;o=va.call(this,e-c,l?"dbcs-cont":"sbcs-cont");return f.join("")+o}f.push(p(la(this,h)));h+=1}n=f.join("");break;default:switch(e){case 1:i=la(this,this.l);this.l++;return i;case 2:i=(t==="i"?ca:oa)(this,this.l);this.l+=2;return i;case 4:;case-4:if(t==="i"||(this[this.l+3]&128)===0){i=(e>0?ua:da)(this,this.l);this.l+=4;return i}else{s=ha(this,this.l);this.l+=4}return s;case 8:;case-8:if(t==="f"){
if(e==8)s=ia(this,this.l);else s=ia([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0);this.l+=8;return s}else e=8;case 16:n=Gt(this,this.l,e);break;};}this.l+=e;return n}var pa=function(e,r,t){e[t]=r&255;e[t+1]=r>>>8&255;e[t+2]=r>>>16&255;e[t+3]=r>>>24&255};var ma=function(e,r,t){e[t]=r&255;e[t+1]=r>>8&255;e[t+2]=r>>16&255;e[t+3]=r>>24&255};var ga=function(e,r,t){e[t]=r&255;e[t+1]=r>>>8&255};function ba(e,n,i){var s=0,f=0;if(i==="dbcs"){for(f=0;f!=n.length;++f)ga(this,n.charCodeAt(f),this.l+2*f);s=2*n.length}else if(i==="sbcs"||i=="cpstr"){if(typeof a!=="undefined"&&t==874){for(f=0;f!=n.length;++f){var l=a.utils.encode(t,n.charAt(f));this[this.l+f]=l[0]}s=n.length}else if(typeof a!=="undefined"&&i=="cpstr"){l=a.utils.encode(r,n);if(l.length==n.length)for(f=0;f<n.length;++f)if(l[f]==0&&n.charCodeAt(f)!=0)l[f]=95;if(l.length==2*n.length)for(f=0;f<n.length;++f)if(l[2*f]==0&&l[2*f+1]==0&&n.charCodeAt(f)!=0)l[2*f]=95;for(f=0;f<l.length;++f)this[this.l+f]=l[f];s=l.length}else{n=n.replace(/[^\x00-\x7F]/g,"_");for(f=0;f!=n.length;++f)this[this.l+f]=n.charCodeAt(f)&255;s=n.length}}else if(i==="hex"){for(;f<e;++f){this[this.l++]=parseInt(n.slice(2*f,2*f+2),16)||0}return this}else if(i==="utf16le"){var o=Math.min(this.l+e,this.length);for(f=0;f<Math.min(n.length,e);++f){var c=n.charCodeAt(f);this[this.l++]=c&255;this[this.l++]=c>>8}while(this.l<o)this[this.l++]=0;return this}else switch(e){case 1:s=1;this[this.l]=n&255;break;case 2:s=2;this[this.l]=n&255;n>>>=8;this[this.l+1]=n&255;break;case 3:s=3;this[this.l]=n&255;n>>>=8;this[this.l+1]=n&255;n>>>=8;this[this.l+2]=n&255;break;case 4:s=4;pa(this,n,this.l);break;case 8:s=8;if(i==="f"){Bt(this,n,this.l);break};case 16:break;case-4:s=4;ma(this,n,this.l);break;}this.l+=s;return this}function wa(e,r){var t=Gt(this,this.l,e.length>>1);if(t!==e)throw new Error(r+"Expected "+e+" saw "+t);this.l+=e.length>>1}function ka(e,r){e.l=r;e._R=va;e.chk=wa;e._W=ba}function Ta(e,r){e.l+=r}function Aa(e){var r=x(e);ka(r,0);return r}function ya(e,r,t){if(!e)return;var a,n,i;ka(e,e.l||0);var s=e.length,f=0,l=0;while(e.l<s){f=e._R(1);if(f&128)f=(f&127)+((e._R(1)&127)<<7);var o=Zg[f]||Zg[65535];a=e._R(1);i=a&127;for(n=1;n<4&&a&128;++n)i+=((a=e._R(1))&127)<<7*n;l=e.l+i;var c=o.f&&o.f(e,i,t);e.l=l;if(r(c,o,f))return}}function Ea(){var e=[],r=C?256:2048;var t=function l(e){var r=Aa(e);ka(r,0);return r};var a=t(r);var n=function o(){if(!a)return;if(a.l){if(a.length>a.l){a=a.slice(0,a.l);a.l=a.length}if(a.length>0)e.push(a)}a=null};var i=function c(e){if(a&&e<a.length-a.l)return a;n();return a=t(Math.max(e+1,r))};var s=function h(){n();return P(e)};var f=function u(e){n();a=e;if(a.l==null)a.l=a.length;i(r)};return{next:i,push:f,end:s,_bufs:e}}function Ca(e,r,t,a){var n=+r,i;if(isNaN(n))return;if(!a)a=Zg[n].p||(t||[]).length||0;i=1+(n>=128?1:0)+1;if(a>=128)++i;if(a>=16384)++i;if(a>=2097152)++i;var s=e.next(i);if(n<=127)s._W(1,n);else{s._W(1,(n&127)+128);s._W(1,n>>7)}for(var f=0;f!=4;++f){if(a>=128){s._W(1,(a&127)+128);a>>=7}else{s._W(1,a);break}}if(a>0&&sa(t))e.push(t)}function _a(e,r,t){var a=kr(e);if(r.s){if(a.cRel)a.c+=r.s.c;if(a.rRel)a.r+=r.s.r}else{if(a.cRel)a.c+=r.c;if(a.rRel)a.r+=r.r}if(!t||t.biff<12){while(a.c>=256)a.c-=256;while(a.r>=65536)a.r-=65536}return a}function Sa(e,r,t){var a=kr(e);a.s=_a(a.s,r.s,t);a.e=_a(a.e,r.s,t);return a}function xa(e,r){if(e.cRel&&e.c<0){e=kr(e);while(e.c<0)e.c+=r>8?16384:256}if(e.rRel&&e.r<0){e=kr(e);while(e.r<0)e.r+=r>8?1048576:r>5?65536:16384}var t=Wa(e);if(!e.cRel&&e.cRel!=null)t=La(t);if(!e.rRel&&e.rRel!=null)t=Na(t);return t}function Oa(e,r){if(e.s.r==0&&!e.s.rRel){if(e.e.r==(r.biff>=12?1048575:r.biff>=8?65536:16384)&&!e.e.rRel){return(e.s.cRel?"":"$")+Pa(e.s.c)+":"+(e.e.cRel?"":"$")+Pa(e.e.c)}}if(e.s.c==0&&!e.s.cRel){if(e.e.c==(r.biff>=12?16383:255)&&!e.e.cRel){return(e.s.rRel?"":"$")+Ia(e.s.r)+":"+(e.e.rRel?"":"$")+Ia(e.e.r)}}return xa(e.s,r.biff)+":"+xa(e.e,r.biff)}if(typeof cptable!=="undefined")g(cptable);else if(typeof module!=="undefined"&&typeof require!=="undefined"){g(undefined)}function Ra(e){return parseInt(Fa(e),10)-1}function Ia(e){return""+(e+1)}function Na(e){return e.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}function Fa(e){return e.replace(/\$(\d+)$/,"$1")}function Da(e){var r=Ma(e),t=0,a=0;for(;a!==r.length;++a)t=26*t+r.charCodeAt(a)-64;return t-1}function Pa(e){if(e<0)throw new Error("invalid column "+e);var r="";for(++e;e;e=Math.floor((e-1)/26))r=String.fromCharCode((e-1)%26+65)+r;return r}function La(e){return e.replace(/^([A-Z])/,"$$$1")}function Ma(e){return e.replace(/^\$([A-Z])/,"$1")}function Ua(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function Ba(e){var r=0,t=0;for(var a=0;a<e.length;++a){var n=e.charCodeAt(a);if(n>=48&&n<=57)r=10*r+(n-48);else if(n>=65&&n<=90)t=26*t+(n-64)}return{c:t-1,r:r-1}}function Wa(e){var r=e.c+1;var t="";for(;r;r=(r-1)/26|0)t=String.fromCharCode((r-1)%26+65)+t;return t+(e.r+1)}function za(e){var r=e.indexOf(":");if(r==-1)return{s:Ba(e),e:Ba(e)};return{s:Ba(e.slice(0,r)),e:Ba(e.slice(r+1))}}function Ha(e,r){if(typeof r==="undefined"||typeof r==="number"){return Ha(e.s,e.e)}if(typeof e!=="string")e=Wa(e);if(typeof r!=="string")r=Wa(r);return e==r?e:e+":"+r}function Va(e){var r=za(e);return"$"+Pa(r.s.c)+"$"+Ia(r.s.r)+":$"+Pa(r.e.c)+"$"+Ia(r.e.r)}function Xa(e,r){if(!e&&!(r&&r.biff<=5&&r.biff>=2))throw new Error("empty sheet name");if(/[^\w\u4E00-\u9FFF\u3040-\u30FF]/.test(e))return"'"+e.replace(/'/g,"''")+"'";return e}function Ga(e){var r={s:{c:0,r:0},e:{c:0,r:0}};var t=0,a=0,n=0;var i=e.length;for(t=0;a<i;++a){if((n=e.charCodeAt(a)-64)<1||n>26)break;t=26*t+n}r.s.c=--t;for(t=0;a<i;++a){if((n=e.charCodeAt(a)-48)<0||n>9)break;t=10*t+n}r.s.r=--t;if(a===i||n!=10){r.e.c=r.s.c;r.e.r=r.s.r;return r}++a;for(t=0;a!=i;++a){if((n=e.charCodeAt(a)-64)<1||n>26)break;t=26*t+n}r.e.c=--t;for(t=0;a!=i;++a){if((n=e.charCodeAt(a)-48)<0||n>9)break;t=10*t+n}r.e.r=--t;return r}function $a(e,r){var t=e.t=="d"&&r instanceof Date;if(e.z!=null)try{return e.w=We(e.z,t?ur(r):r)}catch(a){}try{return e.w=We((e.XF||{}).numFmtId||(t?14:0),t?ur(r):r)}catch(a){return""+r}}function ja(e,r,t){if(e==null||e.t==null||e.t=="z")return"";if(e.w!==undefined)return e.w;if(e.t=="d"&&!e.z&&t&&t.dateNF)e.z=t.dateNF;if(e.t=="e")return ei[e.v]||e.v;if(r==undefined)return $a(e,e.v);return $a(e,r)}function Ka(e,r){var t=r&&r.sheet?r.sheet:"Sheet1";var a={};a[t]=e;return{SheetNames:[t],Sheets:a}}function Ya(e,r,t){var a=t||{};var n=e?e["!data"]!=null:a.dense;if(b!=null&&n==null)n=b;var i=e||{};if(n&&!i["!data"])i["!data"]=[];var s=0,f=0;if(i&&a.origin!=null){if(typeof a.origin=="number")s=a.origin;else{var l=typeof a.origin=="string"?Ba(a.origin):a.origin;s=l.r;f=l.c}if(!i["!ref"])i["!ref"]="A1:A1"}var o={s:{c:1e7,r:1e7},e:{c:0,r:0}};if(i["!ref"]){var c=Ga(i["!ref"]);o.s.c=c.s.c;o.s.r=c.s.r;o.e.c=Math.max(o.e.c,c.e.c);o.e.r=Math.max(o.e.r,c.e.r);if(s==-1)o.e.r=s=c.e.r+1}var h=[];for(var u=0;u!=r.length;++u){if(!r[u])continue;if(!Array.isArray(r[u]))throw new Error("aoa_to_sheet expects an array of arrays");var d=s+u,v=""+(d+1);if(n){if(!i["!data"][d])i["!data"][d]=[];h=i["!data"][d]}for(var p=0;p!=r[u].length;++p){if(typeof r[u][p]==="undefined")continue;var m={v:r[u][p]};var g=f+p;if(o.s.r>d)o.s.r=d;if(o.s.c>g)o.s.c=g;if(o.e.r<d)o.e.r=d;if(o.e.c<g)o.e.c=g;if(r[u][p]&&typeof r[u][p]==="object"&&!Array.isArray(r[u][p])&&!(r[u][p]instanceof Date))m=r[u][p];else{if(Array.isArray(m.v)){m.f=r[u][p][1];m.v=m.v[0]}if(m.v===null){if(m.f)m.t="n";else if(a.nullError){m.t="e";m.v=0}else if(!a.sheetStubs)continue;else m.t="z"}else if(typeof m.v==="number")m.t="n";else if(typeof m.v==="boolean")m.t="b";else if(m.v instanceof Date){m.z=a.dateNF||q[14];if(!a.UTC)m.v=Fr(m.v);if(a.cellDates){m.t="d";m.w=We(m.z,ur(m.v,a.date1904))}else{m.t="n";m.v=ur(m.v,a.date1904);m.w=We(m.z,m.v)}}else m.t="s"}if(n){if(h[g]&&h[g].z)m.z=h[g].z;h[g]=m}else{var w=Pa(g)+v;if(i[w]&&i[w].z)m.z=i[w].z;i[w]=m}}}if(o.s.c<1e7)i["!ref"]=Ha(o);return i}function Za(e,r){return Ya(null,e,r)}function Ja(e){return e._R(4,"i")}function qa(e,r){if(!r)r=Aa(4);r._W(4,e);return r}function Qa(e){var r=e._R(4);return r===0?"":e._R(r,"dbcs")}function en(e,r){var t=false;if(r==null){t=true;r=Aa(4+2*e.length)}r._W(4,e.length);if(e.length>0)r._W(0,e,"dbcs");return t?r.slice(0,r.l):r}function rn(e){return{ich:e._R(2),ifnt:e._R(2)}}function tn(e,r){if(!r)r=Aa(4);r._W(2,e.ich||0);r._W(2,e.ifnt||0);return r}function an(e,r){var t=e.l;var a=e._R(1);var n=Qa(e);var i=[];var s={t:n,h:n};if((a&1)!==0){var f=e._R(4);for(var l=0;l!=f;++l)i.push(rn(e));s.r=i}else s.r=[{ich:0,ifnt:0}];e.l=t+r;return s}function nn(e,r){var t=false;if(r==null){t=true;r=Aa(15+4*e.t.length)}r._W(1,0);en(e.t,r);return t?r.slice(0,r.l):r}var sn=an;function fn(e,r){var t=false;if(r==null){t=true;r=Aa(23+4*e.t.length)}r._W(1,1);en(e.t,r);r._W(4,1);tn({ich:0,ifnt:0},r);return t?r.slice(0,r.l):r}function ln(e){var r=e._R(4);var t=e._R(2);t+=e._R(1)<<16;e.l++;return{c:r,iStyleRef:t}}function on(e,r){if(r==null)r=Aa(8);r._W(-4,e.c);r._W(3,e.iStyleRef||e.s);r._W(1,0);return r}function cn(e){var r=e._R(2);r+=e._R(1)<<16;e.l++;return{c:-1,iStyleRef:r}}function hn(e,r){if(r==null)r=Aa(4);r._W(3,e.iStyleRef||e.s);r._W(1,0);return r}var un=Qa;var dn=en;function vn(e){var r=e._R(4);return r===0||r===4294967295?"":e._R(r,"dbcs")}function pn(e,r){var t=false;if(r==null){t=true;r=Aa(127)}r._W(4,e.length>0?e.length:4294967295);if(e.length>0)r._W(0,e,"dbcs");return t?r.slice(0,r.l):r}var mn=Qa;var gn=vn;var bn=pn;function wn(e){var r=e.slice(e.l,e.l+4);var t=r[0]&1,a=r[0]&2;e.l+=4;var n=a===0?ia([0,0,0,0,r[0]&252,r[1],r[2],r[3]],0):ua(r,0)>>2;return t?n/100:n}function kn(e,r){if(r==null)r=Aa(4);var t=0,a=0,n=e*100;if(e==(e|0)&&e>=-(1<<29)&&e<1<<29){a=1}else if(n==(n|0)&&n>=-(1<<29)&&n<1<<29){a=1;t=1}if(a)r._W(-4,((t?n:e)<<2)+(t+2));else throw new Error("unsupported RkNumber "+e)}function Tn(e){var r={s:{},e:{}};r.s.r=e._R(4);r.e.r=e._R(4);r.s.c=e._R(4);r.e.c=e._R(4);return r}function An(e,r){if(!r)r=Aa(16);r._W(4,e.s.r);r._W(4,e.e.r);r._W(4,e.s.c);r._W(4,e.e.c);return r}var yn=Tn;var En=An;function Cn(e){if(e.length-e.l<8)throw"XLS Xnum Buffer underflow";return e._R(8,"f")}function _n(e,r){return(r||Aa(8))._W(8,e,"f")}function Sn(e){var r={};var t=e._R(1);var a=t>>>1;var n=e._R(1);var i=e._R(2,"i");var s=e._R(1);var f=e._R(1);var l=e._R(1);e.l++;switch(a){case 0:r.auto=1;break;case 1:r.index=n;var o=Qn[n];if(o)r.rgb=Vo(o);break;case 2:r.rgb=Vo([s,f,l]);break;case 3:r.theme=n;break;}if(i!=0)r.tint=i>0?i/32767:i/32768;return r}function xn(e,r){if(!r)r=Aa(8);if(!e||e.auto){r._W(4,0);r._W(4,0);return r}if(e.index!=null){r._W(1,2);r._W(1,e.index)}else if(e.theme!=null){r._W(1,6);r._W(1,e.theme)}else{r._W(1,5);r._W(1,0)}var t=e.tint||0;if(t>0)t*=32767;else if(t<0)t*=32768;r._W(2,t);if(!e.rgb||e.theme!=null){r._W(2,0);r._W(1,0);r._W(1,0)}else{var a=e.rgb||"FFFFFF";if(typeof a=="number")a=("000000"+a.toString(16)).slice(-6);r._W(1,parseInt(a.slice(0,2),16));r._W(1,parseInt(a.slice(2,4),16));r._W(1,parseInt(a.slice(4,6),16));r._W(1,255)}return r}function On(e){var r=e._R(1);e.l++;var t={fBold:r&1,fItalic:r&2,fUnderline:r&4,fStrikeout:r&8,fOutline:r&16,fShadow:r&32,fCondense:r&64,fExtend:r&128};return t}function Rn(e,r){if(!r)r=Aa(2);var t=(e.italic?2:0)|(e.strike?8:0)|(e.outline?16:0)|(e.shadow?32:0)|(e.condense?64:0)|(e.extend?128:0);r._W(1,t);r._W(1,0);return r}function In(e,r){var t={2:"BITMAP",3:"METAFILEPICT",8:"DIB",14:"ENHMETAFILE"};var a=e._R(4);switch(a){case 0:return"";case 4294967295:;case 4294967294:return t[e._R(4)]||"";}if(a>400)throw new Error("Unsupported Clipboard: "+a.toString(16));e.l-=4;return e._R(0,r==1?"lpstr":"lpwstr")}function Nn(e){return In(e,1)}function Fn(e){return In(e,2)}var Dn=2;var Pn=3;var Ln=11;var Mn=12;var Un=19;var Bn=64;var Wn=65;var zn=71;var Hn=4108;var Vn=4126;var Xn=80;var Gn=81;var $n=[Xn,Gn];var jn={1:{n:"CodePage",t:Dn},2:{n:"Category",t:Xn},3:{n:"PresentationFormat",t:Xn},4:{n:"ByteCount",t:Pn},5:{n:"LineCount",t:Pn},6:{n:"ParagraphCount",t:Pn},7:{n:"SlideCount",t:Pn},8:{n:"NoteCount",t:Pn},9:{n:"HiddenCount",t:Pn},10:{n:"MultimediaClipCount",t:Pn},11:{n:"ScaleCrop",t:Ln},12:{n:"HeadingPairs",t:Hn},13:{n:"TitlesOfParts",t:Vn},14:{n:"Manager",t:Xn},15:{n:"Company",t:Xn},16:{n:"LinksUpToDate",t:Ln},17:{n:"CharacterCount",t:Pn},19:{n:"SharedDoc",t:Ln},22:{n:"HyperlinksChanged",t:Ln},23:{n:"AppVersion",t:Pn,p:"version"},24:{n:"DigSig",t:Wn},26:{n:"ContentType",t:Xn},27:{n:"ContentStatus",t:Xn},28:{n:"Language",t:Xn},29:{n:"Version",t:Xn},255:{},2147483648:{n:"Locale",t:Un},2147483651:{n:"Behavior",t:Un},1919054434:{}};var Kn={1:{n:"CodePage",t:Dn},2:{n:"Title",t:Xn},3:{n:"Subject",t:Xn},4:{n:"Author",t:Xn},5:{n:"Keywords",t:Xn},6:{n:"Comments",t:Xn},7:{n:"Template",t:Xn},8:{n:"LastAuthor",t:Xn},9:{n:"RevNumber",t:Xn},10:{n:"EditTime",t:Bn},11:{n:"LastPrinted",t:Bn},12:{n:"CreatedDate",t:Bn},13:{n:"ModifiedDate",t:Bn},14:{n:"PageCount",t:Pn},15:{n:"WordCount",t:Pn},16:{n:"CharCount",t:Pn},17:{n:"Thumbnail",t:zn},18:{n:"Application",t:Xn},19:{n:"DocSecurity",t:Pn},255:{},2147483648:{n:"Locale",t:Un},2147483651:{n:"Behavior",t:Un},1919054434:{}};var Yn={1:"US",2:"CA",3:"",7:"RU",20:"EG",30:"GR",31:"NL",32:"BE",33:"FR",34:"ES",36:"HU",39:"IT",41:"CH",43:"AT",44:"GB",45:"DK",46:"SE",47:"NO",48:"PL",49:"DE",52:"MX",55:"BR",61:"AU",64:"NZ",66:"TH",81:"JP",82:"KR",84:"VN",86:"CN",90:"TR",105:"JS",213:"DZ",216:"MA",218:"LY",351:"PT",354:"IS",358:"FI",420:"CZ",886:"TW",961:"LB",962:"JO",963:"SY",964:"IQ",965:"KW",966:"SA",971:"AE",972:"IL",974:"QA",981:"IR",65535:"US"};var Zn=[null,"solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"];function Jn(e){return e.map(function(e){return[e>>16&255,e>>8&255,e&255]})}var qn=Jn([0,16777215,16711680,65280,255,16776960,16711935,65535,0,16777215,16711680,65280,255,16776960,16711935,65535,8388608,32768,128,8421376,8388736,32896,12632256,8421504,10066431,10040166,16777164,13434879,6684774,16744576,26316,13421823,128,16711935,16776960,65535,8388736,8388608,32896,255,52479,13434879,13434828,16777113,10079487,16751052,13408767,16764057,3368703,3394764,10079232,16763904,16750848,16737792,6710937,9868950,13158,3381606,13056,3355392,10040064,10040166,3355545,3355443,0,16777215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);var Qn=kr(qn);var ei={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"};var ri={"#NULL!":0,"#DIV/0!":7,"#VALUE!":15,"#REF!":23,"#NAME?":29,"#NUM!":36,"#N/A":42,"#GETTING_DATA":43,"#WTF?":255};var ti=["_xlnm.Consolidate_Area","_xlnm.Auto_Open","_xlnm.Auto_Close","_xlnm.Extract","_xlnm.Database","_xlnm.Criteria","_xlnm.Print_Area","_xlnm.Print_Titles","_xlnm.Recorder","_xlnm.Data_Form","_xlnm.Auto_Activate","_xlnm.Auto_Deactivate","_xlnm.Sheet_Title","_xlnm._FilterDatabase"];var ai={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.sheet.macroEnabled.main+xml":"workbooks","application/vnd.ms-excel.sheet.binary.macroEnabled.main":"workbooks","application/vnd.ms-excel.addin.macroEnabled.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":"workbooks","application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":"sheets","application/vnd.ms-excel.worksheet":"sheets","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":"charts","application/vnd.ms-excel.chartsheet":"charts","application/vnd.ms-excel.macrosheet+xml":"macros","application/vnd.ms-excel.macrosheet":"macros","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":"dialogs","application/vnd.ms-excel.dialogsheet":"dialogs","application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml":"strs","application/vnd.ms-excel.sharedStrings":"strs","application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":"styles","application/vnd.ms-excel.styles":"styles","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":"comments","application/vnd.ms-excel.comments":"comments","application/vnd.ms-excel.threadedcomments+xml":"threadedcomments","application/vnd.ms-excel.person+xml":"people","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"metadata","application/vnd.ms-excel.sheetMetadata":"metadata","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-office.chartex+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"TODO","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"};var ni={workbooks:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",xlsm:"application/vnd.ms-excel.sheet.macroEnabled.main+xml",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.main",xlam:"application/vnd.ms-excel.addin.macroEnabled.main+xml",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"},strs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",xlsb:"application/vnd.ms-excel.sharedStrings"},comments:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",xlsb:"application/vnd.ms-excel.comments"},sheets:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",xlsb:"application/vnd.ms-excel.worksheet"},charts:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",xlsb:"application/vnd.ms-excel.chartsheet"},dialogs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",xlsb:"application/vnd.ms-excel.dialogsheet"},macros:{xlsx:"application/vnd.ms-excel.macrosheet+xml",xlsb:"application/vnd.ms-excel.macrosheet"},metadata:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml",xlsb:"application/vnd.ms-excel.sheetMetadata"},styles:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",xlsb:"application/vnd.ms-excel.styles"}};function ii(){return{workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],threadedcomments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],metadata:[],people:[],TODO:[],xmlns:""}}function si(e){var r=ii();if(!e||!e.match)return r;var t={};(e.match(Jr)||[]).forEach(function(e){var a=et(e);switch(a[0].replace(qr,"<")){case"<?xml":break;case"<Types":r.xmlns=a["xmlns"+(a[0].match(/<(\w+):/)||["",""])[1]];break;case"<Default":t[a.Extension.toLowerCase()]=a.ContentType;break;case"<Override":if(r[ai[a.ContentType]]!==undefined)r[ai[a.ContentType]].push(a.PartName);break;}});if(r.xmlns!==Pt.CT)throw new Error("Unknown Namespace: "+r.xmlns);r.calcchain=r.calcchains.length>0?r.calcchains[0]:"";r.sst=r.strs.length>0?r.strs[0]:"";r.style=r.styles.length>0?r.styles[0]:"";r.defaults=t;delete r.calcchains;return r}function fi(e,r,t){var a=lr(ai);var n=[],i;if(!t){n[n.length]=jr;n[n.length]=Rt("Types",null,{xmlns:Pt.CT,"xmlns:xsd":Pt.xsd,"xmlns:xsi":Pt.xsi});n=n.concat([["xml","application/xml"],["bin","application/vnd.ms-excel.sheet.binary.macroEnabled.main"],["vml","application/vnd.openxmlformats-officedocument.vmlDrawing"],["data","application/vnd.openxmlformats-officedocument.model+data"],["bmp","image/bmp"],["png","image/png"],["gif","image/gif"],["emf","image/x-emf"],["wmf","image/x-wmf"],["jpg","image/jpeg"],["jpeg","image/jpeg"],["tif","image/tiff"],["tiff","image/tiff"],["pdf","application/pdf"],["rels","application/vnd.openxmlformats-package.relationships+xml"]].map(function(e){return Rt("Default",null,{Extension:e[0],ContentType:e[1]})}))}var s=function(t){if(e[t]&&e[t].length>0){i=e[t][0];n[n.length]=Rt("Override",null,{PartName:(i[0]=="/"?"":"/")+i,ContentType:ni[t][r.bookType]||ni[t]["xlsx"]})}};var f=function(t){(e[t]||[]).forEach(function(e){n[n.length]=Rt("Override",null,{PartName:(e[0]=="/"?"":"/")+e,ContentType:ni[t][r.bookType]||ni[t]["xlsx"]})})};var l=function(r){(e[r]||[]).forEach(function(e){n[n.length]=Rt("Override",null,{PartName:(e[0]=="/"?"":"/")+e,ContentType:a[r][0]})})};s("workbooks");f("sheets");f("charts");l("themes");["strs","styles"].forEach(s);["coreprops","extprops","custprops"].forEach(l);l("vba");l("comments");l("threadedcomments");l("drawings");f("metadata");l("people");if(!t&&n.length>2){n[n.length]="</Types>";n[1]=n[1].replace("/>",">")}return n.join("")}var li={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",SHEET:"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",XPATH:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",XMISS:"http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",XLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",CXML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",CXMLP:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",CMNT:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments",CORE_PROPS:"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties",EXT_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties",CUST_PROPS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties",SST:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings",STY:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",THEME:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme",CHART:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart",CHARTEX:"http://schemas.microsoft.com/office/2014/relationships/chartEx",CS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet",WS:["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"],DS:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",MS:"http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet",IMG:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",DRAW:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",XLMETA:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sheetMetadata",TCMNT:"http://schemas.microsoft.com/office/2017/10/relationships/threadedComment",PEOPLE:"http://schemas.microsoft.com/office/2017/10/relationships/person",CONN:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/connections",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"};function oi(e){var r=e.lastIndexOf("/");return e.slice(0,r+1)+"_rels/"+e.slice(r+1)+".rels"}function ci(e,r){var t={"!id":{}};if(!e)return t;if(r.charAt(0)!=="/"){r="/"+r}var a={};(e.match(Jr)||[]).forEach(function(e){var n=et(e);if(n[0]==="<Relationship"){var i={};i.Type=n.Type;i.Target=nt(n.Target);i.Id=n.Id;if(n.TargetMode)i.TargetMode=n.TargetMode;var s=n.TargetMode==="External"?n.Target:$r(n.Target,r);t[s]=i;a[n.Id]=i}});t["!id"]=a;return t}function hi(e){var r=[jr,Rt("Relationships",null,{xmlns:Pt.RELS})];nr(e["!id"]).forEach(function(t){r[r.length]=Rt("Relationship",null,e["!id"][t])});if(r.length>2){r[r.length]="</Relationships>";r[1]=r[1].replace("/>",">")}return r.join("")}function ui(e,r,t,a,n,i){if(!n)n={};if(!e["!id"])e["!id"]={};if(!e["!idx"])e["!idx"]=1;if(r<0)for(r=e["!idx"];e["!id"]["rId"+r];++r){}e["!idx"]=r+1;n.Id="rId"+r;n.Type=a;n.Target=t;if(i)n.TargetMode=i;else if([li.HLINK,li.XPATH,li.XMISS].indexOf(n.Type)>-1)n.TargetMode="External";if(e["!id"][n.Id])throw new Error("Cannot rewrite rId "+r);e["!id"][n.Id]=n;e[("/"+n.Target).replace("//","/")]=n;return r}var di="application/vnd.oasis.opendocument.spreadsheet";function vi(e,r){var t=Ft(e);var a;var n;while(a=Dt.exec(t))switch(a[3]){case"manifest":break;case"file-entry":n=et(a[0],false);if(n.path=="/"&&n.type!==di)throw new Error("This OpenDocument is not a spreadsheet");break;case"encryption-data":;case"algorithm":;case"start-key-generation":;case"key-derivation":throw new Error("Unsupported ODS Encryption");default:if(r&&r.WTF)throw a;}}function pi(e){var r=[jr];r.push('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n');r.push('  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n');for(var t=0;t<e.length;++t)r.push('  <manifest:file-entry manifest:full-path="'+e[t][0]+'" manifest:media-type="'+e[t][1]+'"/>\n');r.push("</manifest:manifest>");return r.join("")}function mi(e,r,t){return['  <rdf:Description rdf:about="'+e+'">\n','    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/'+(t||"odf")+"#"+r+'"/>\n',"  </rdf:Description>\n"].join("")}function gi(e,r){return['  <rdf:Description rdf:about="'+e+'">\n','    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="'+r+'"/>\n',"  </rdf:Description>\n"].join("")}function bi(e){var r=[jr];r.push('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n');for(var t=0;t!=e.length;++t){r.push(mi(e[t][0],e[t][1]));r.push(gi("",e[t][0]))}r.push(mi("","Document","pkg"));r.push("</rdf:RDF>");return r.join("")}function wi(r,t){return'<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS '+e.version+"</meta:generator></office:meta></office:document-meta>"}var ki=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]];var Ti=function(){var e=new Array(ki.length);for(var r=0;r<ki.length;++r){var t=ki[r];var a="(?:"+t[0].slice(0,t[0].indexOf(":"))+":)"+t[0].slice(t[0].indexOf(":")+1);e[r]=new RegExp("<"+a+"[^>]*>([\\s\\S]*?)</"+a+">")}return e}();function Ai(e){var r={};e=wt(e);for(var t=0;t<ki.length;++t){var a=ki[t],n=e.match(Ti[t]);if(n!=null&&n.length>0)r[a[1]]=nt(n[1]);if(a[2]==="date"&&r[a[1]])r[a[1]]=br(r[a[1]])}return r}function yi(e,r,t,a,n){if(n[e]!=null||r==null||r==="")return;n[e]=r;r=ft(r);a[a.length]=t?Rt(e,r,t):xt(e,r)}function Ei(e,r){var t=r||{};var a=[jr,Rt("cp:coreProperties",null,{"xmlns:cp":Pt.CORE_PROPS,"xmlns:dc":Pt.dc,"xmlns:dcterms":Pt.dcterms,"xmlns:dcmitype":Pt.dcmitype,"xmlns:xsi":Pt.xsi
})],n={};if(!e&&!t.Props)return a.join("");if(e){if(e.CreatedDate!=null)yi("dcterms:created",typeof e.CreatedDate==="string"?e.CreatedDate:It(e.CreatedDate,t.WTF),{"xsi:type":"dcterms:W3CDTF"},a,n);if(e.ModifiedDate!=null)yi("dcterms:modified",typeof e.ModifiedDate==="string"?e.ModifiedDate:It(e.ModifiedDate,t.WTF),{"xsi:type":"dcterms:W3CDTF"},a,n)}for(var i=0;i!=ki.length;++i){var s=ki[i];var f=t.Props&&t.Props[s[1]]!=null?t.Props[s[1]]:e?e[s[1]]:null;if(f===true)f="1";else if(f===false)f="0";else if(typeof f=="number")f=String(f);if(f!=null)yi(s[0],f,null,a,n)}if(a.length>2){a[a.length]="</cp:coreProperties>";a[1]=a[1].replace("/>",">")}return a.join("")}var Ci=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]];var _i=["Worksheets","SheetNames","NamedRanges","DefinedNames","Chartsheets","ChartNames"];function Si(e,r,t,a){var n=[];if(typeof e=="string")n=_t(e,a);else for(var i=0;i<e.length;++i)n=n.concat(e[i].map(function(e){return{v:e}}));var s=typeof r=="string"?_t(r,a).map(function(e){return e.v}):r;var f=0,l=0;if(s.length>0)for(var o=0;o!==n.length;o+=2){l=+n[o+1].v;switch(n[o].v){case"Worksheets":;case"å·¥ä½œè¡¨":;case"Ð›Ð¸ÑÑ‚Ñ‹":;case"Ø£ÙˆØ±Ø§Ù‚ Ø§Ù„Ø¹Ù…Ù„":;case"ãƒ¯ãƒ¼ã‚¯ã‚·ãƒ¼ãƒˆ":;case"×’×œ×™×•× ×•×ª ×¢×‘×•×“×”":;case"ArbeitsblÃ¤tter":;case"Ã‡alÄ±ÅŸma SayfalarÄ±":;case"Feuilles de calcul":;case"Fogli di lavoro":;case"Folhas de cÃ¡lculo":;case"Planilhas":;case"Regneark":;case"Hojas de cÃ¡lculo":;case"Werkbladen":t.Worksheets=l;t.SheetNames=s.slice(f,f+l);break;case"Named Ranges":;case"Rangos con nombre":;case"åå‰ä»˜ãä¸€è¦§":;case"Benannte Bereiche":;case"Navngivne omrÃ¥der":t.NamedRanges=l;t.DefinedNames=s.slice(f,f+l);break;case"Charts":;case"Diagramme":t.Chartsheets=l;t.ChartNames=s.slice(f,f+l);break;}f+=l}}function xi(e,r,t){var a={};if(!r)r={};e=wt(e);Ci.forEach(function(t){var n=(e.match(Tt(t[0]))||[])[1];switch(t[2]){case"string":if(n)r[t[1]]=nt(n);break;case"bool":r[t[1]]=n==="true";break;case"raw":var i=e.match(new RegExp("<"+t[0]+"[^>]*>([\\s\\S]*?)</"+t[0]+">"));if(i&&i.length>0)a[t[1]]=i[1];break;}});if(a.HeadingPairs&&a.TitlesOfParts)Si(a.HeadingPairs,a.TitlesOfParts,r,t);return r}function Oi(e){var r=[],t=Rt;if(!e)e={};e.Application="SheetJS";r[r.length]=jr;r[r.length]=Rt("Properties",null,{xmlns:Pt.EXT_PROPS,"xmlns:vt":Pt.vt});Ci.forEach(function(a){if(e[a[1]]===undefined)return;var n;switch(a[2]){case"string":n=ft(String(e[a[1]]));break;case"bool":n=e[a[1]]?"true":"false";break;}if(n!==undefined)r[r.length]=t(a[0],n)});r[r.length]=t("HeadingPairs",t("vt:vector",t("vt:variant","<vt:lpstr>Worksheets</vt:lpstr>")+t("vt:variant",t("vt:i4",String(e.Worksheets))),{size:2,baseType:"variant"}));r[r.length]=t("TitlesOfParts",t("vt:vector",e.SheetNames.map(function(e){return"<vt:lpstr>"+ft(e)+"</vt:lpstr>"}).join(""),{size:e.Worksheets,baseType:"lpstr"}));if(r.length>2){r[r.length]="</Properties>";r[1]=r[1].replace("/>",">")}return r.join("")}var Ri=/<[^>]+>[^<]*/g;function Ii(e,r){var t={},a="";var n=e.match(Ri);if(n)for(var i=0;i!=n.length;++i){var s=n[i],f=et(s);switch(rt(f[0])){case"<?xml":break;case"<Properties":break;case"<property":a=nt(f.name);break;case"</property>":a=null;break;default:if(s.indexOf("<vt:")===0){var l=s.split(">");var o=l[0].slice(4),c=l[1];switch(o){case"lpstr":;case"bstr":;case"lpwstr":t[a]=nt(c);break;case"bool":t[a]=vt(c);break;case"i1":;case"i2":;case"i4":;case"i8":;case"int":;case"uint":t[a]=parseInt(c,10);break;case"r4":;case"r8":;case"decimal":t[a]=parseFloat(c);break;case"filetime":;case"date":t[a]=br(c);break;case"cy":;case"error":t[a]=nt(c);break;default:if(o.slice(-1)=="/")break;if(r.WTF&&typeof console!=="undefined")console.warn("Unexpected",s,o,l);}}else if(s.slice(0,2)==="</"){}else if(r.WTF)throw new Error(s);}}return t}function Ni(e){var r=[jr,Rt("Properties",null,{xmlns:Pt.CUST_PROPS,"xmlns:vt":Pt.vt})];if(!e)return r.join("");var t=1;nr(e).forEach(function a(n){++t;r[r.length]=Rt("property",Nt(e[n],true),{fmtid:"{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",pid:t,name:ft(n)})});if(r.length>2){r[r.length]="</Properties>";r[1]=r[1].replace("/>",">")}return r.join("")}var Fi={Title:"Title",Subject:"Subject",Author:"Author",Keywords:"Keywords",Comments:"Description",LastAuthor:"LastAuthor",RevNumber:"Revision",Application:"AppName",LastPrinted:"LastPrinted",CreatedDate:"Created",ModifiedDate:"LastSaved",Category:"Category",Manager:"Manager",Company:"Company",AppVersion:"Version",ContentStatus:"ContentStatus",Identifier:"Identifier",Language:"Language"};var Di;function Pi(e,r,t){if(!Di)Di=sr(Fi);r=Di[r]||r;e[r]=t}function Li(e,r){var t=[];nr(Fi).map(function(e){for(var r=0;r<ki.length;++r)if(ki[r][1]==e)return ki[r];for(r=0;r<Ci.length;++r)if(Ci[r][1]==e)return Ci[r];throw e}).forEach(function(a){if(e[a[1]]==null)return;var n=r&&r.Props&&r.Props[a[1]]!=null?r.Props[a[1]]:e[a[1]];switch(a[2]){case"date":n=new Date(n).toISOString().replace(/\.\d*Z/,"Z");break;}if(typeof n=="number")n=String(n);else if(n===true||n===false){n=n?"1":"0"}else if(n instanceof Date)n=new Date(n).toISOString().replace(/\.\d*Z/,"");t.push(xt(Fi[a[1]]||a[1],n))});return Rt("DocumentProperties",t.join(""),{xmlns:Mt.o})}function Mi(e,r){var t=["Worksheets","SheetNames"];var a="CustomDocumentProperties";var n=[];if(e)nr(e).forEach(function(r){if(!Object.prototype.hasOwnProperty.call(e,r))return;for(var a=0;a<ki.length;++a)if(r==ki[a][1])return;for(a=0;a<Ci.length;++a)if(r==Ci[a][1])return;for(a=0;a<t.length;++a)if(r==t[a])return;var i=e[r];var s="string";if(typeof i=="number"){s="float";i=String(i)}else if(i===true||i===false){s="boolean";i=i?"1":"0"}else i=String(i);n.push(Rt(lt(r),i,{"dt:dt":s}))});if(r)nr(r).forEach(function(t){if(!Object.prototype.hasOwnProperty.call(r,t))return;if(e&&Object.prototype.hasOwnProperty.call(e,t))return;var a=r[t];var i="string";if(typeof a=="number"){i="float";a=String(a)}else if(a===true||a===false){i="boolean";a=a?"1":"0"}else if(a instanceof Date){i="dateTime.tz";a=a.toISOString()}else a=String(a);n.push(Rt(lt(t),a,{"dt:dt":i}))});return"<"+a+' xmlns="'+Mt.o+'">'+n.join("")+"</"+a+">"}function Ui(e){var r=e._R(4),t=e._R(4);return new Date((t/1e7*Math.pow(2,32)+r/1e7-11644473600)*1e3).toISOString().replace(/\.000/,"")}function Bi(e){var r=typeof e=="string"?new Date(Date.parse(e)):e;var t=r.getTime()/1e3+11644473600;var a=t%Math.pow(2,32),n=(t-a)/Math.pow(2,32);a*=1e7;n*=1e7;var i=a/Math.pow(2,32)|0;if(i>0){a=a%Math.pow(2,32);n+=i}var s=Aa(8);s._W(4,a);s._W(4,n);return s}function Wi(e,r,t){var a=e.l;var n=e._R(0,"lpstr-cp");if(t)while(e.l-a&3)++e.l;return n}function zi(e,r,t){var a=e._R(0,"lpwstr");if(t)e.l+=4-(a.length+1&3)&3;return a}function Hi(e,r,t){if(r===31)return zi(e);return Wi(e,r,t)}function Vi(e,r,t){return Hi(e,r,t===false?0:4)}function Xi(e,r){if(!r)throw new Error("VtUnalignedString must have positive length");return Hi(e,r,0)}function Gi(e){var r=e._R(4);var t=[];for(var a=0;a!=r;++a){var n=e.l;t[a]=e._R(0,"lpwstr").replace(M,"");if(e.l-n&2)e.l+=2}return t}function $i(e){var r=e._R(4);var t=[];for(var a=0;a!=r;++a)t[a]=e._R(0,"lpstr-cp").replace(M,"");return t}function ji(e){var r=e.l;var t=qi(e,Gn);if(e[e.l]==0&&e[e.l+1]==0&&e.l-r&2)e.l+=2;var a=qi(e,Pn);return[t,a]}function Ki(e){var r=e._R(4);var t=[];for(var a=0;a<r/2;++a)t.push(ji(e));return t}function Yi(e,r){var t=e._R(4);var a={};for(var n=0;n!=t;++n){var i=e._R(4);var s=e._R(4);a[i]=e._R(s,r===1200?"utf16le":"utf8").replace(M,"").replace(U,"!");if(r===1200&&s%2)e.l+=2}if(e.l&3)e.l=e.l>>2+1<<2;return a}function Zi(e){var r=e._R(4);var t=e.slice(e.l,e.l+r);e.l+=r;if((r&3)>0)e.l+=4-(r&3)&3;return t}function Ji(e){var r={};r.Size=e._R(4);e.l+=r.Size+3-(r.Size-1)%4;return r}function qi(e,r,t){var a=e._R(2),n,i=t||{};e.l+=2;if(r!==Mn)if(a!==r&&$n.indexOf(r)===-1&&!((r&65534)==4126&&(a&65534)==4126))throw new Error("Expected type "+r+" saw "+a);switch(r===Mn?a:r){case 2:n=e._R(2,"i");if(!i.raw)e.l+=2;return n;case 3:n=e._R(4,"i");return n;case 11:return e._R(4)!==0;case 19:n=e._R(4);return n;case 30:return Wi(e,a,4).replace(M,"");case 31:return zi(e);case 64:return Ui(e);case 65:return Zi(e);case 71:return Ji(e);case 80:return Vi(e,a,!i.raw).replace(M,"");case 81:return Xi(e,a).replace(M,"");case 4108:return Ki(e);case 4126:;case 4127:return a==4127?Gi(e):$i(e);default:throw new Error("TypedPropertyValue unrecognized type "+r+" "+a);}}function Qi(e,r){var t=Aa(4),a=Aa(4);t._W(4,e==80?31:e);switch(e){case 3:a._W(-4,r);break;case 5:a=Aa(8);a._W(8,r,"f");break;case 11:a._W(4,r?1:0);break;case 64:a=Bi(r);break;case 31:;case 80:a=Aa(4+2*(r.length+1)+(r.length%2?0:2));a._W(4,r.length+1);a._W(0,r,"dbcs");while(a.l!=a.length)a._W(1,0);break;default:throw new Error("TypedPropertyValue unrecognized type "+e+" "+r);}return P([t,a])}function es(e,r){var t=e.l;var a=e._R(4);var n=e._R(4);var i=[],s=0;var f=0;var o=-1,c={};for(s=0;s!=n;++s){var h=e._R(4);var u=e._R(4);i[s]=[h,u+t]}i.sort(function(e,r){return e[1]-r[1]});var d={};for(s=0;s!=n;++s){if(e.l!==i[s][1]){var v=true;if(s>0&&r)switch(r[i[s-1][0]].t){case 2:if(e.l+2===i[s][1]){e.l+=2;v=false}break;case 80:if(e.l<=i[s][1]){e.l=i[s][1];v=false}break;case 4108:if(e.l<=i[s][1]){e.l=i[s][1];v=false}break;}if((!r||s==0)&&e.l<=i[s][1]){v=false;e.l=i[s][1]}if(v)throw new Error("Read Error: Expected address "+i[s][1]+" at "+e.l+" :"+s)}if(r){if(i[s][0]==0&&i.length>s+1&&i[s][1]==i[s+1][1])continue;var p=r[i[s][0]];d[p.n]=qi(e,p.t,{raw:true});if(p.p==="version")d[p.n]=String(d[p.n]>>16)+"."+("0000"+String(d[p.n]&65535)).slice(-4);if(p.n=="CodePage")switch(d[p.n]){case 0:d[p.n]=1252;case 874:;case 932:;case 936:;case 949:;case 950:;case 1250:;case 1251:;case 1253:;case 1254:;case 1255:;case 1256:;case 1257:;case 1258:;case 1e4:;case 1200:;case 1201:;case 1252:;case 65e3:;case-536:;case 65001:;case-535:l(f=d[p.n]>>>0&65535);break;default:throw new Error("Unsupported CodePage: "+d[p.n]);}}else{if(i[s][0]===1){f=d.CodePage=qi(e,Dn);l(f);if(o!==-1){var m=e.l;e.l=i[o][1];c=Yi(e,f);e.l=m}}else if(i[s][0]===0){if(f===0){o=s;e.l=i[s+1][1];continue}c=Yi(e,f)}else{var g=c[i[s][0]];var b;switch(e[e.l]){case 65:e.l+=4;b=Zi(e);break;case 30:e.l+=4;b=Vi(e,e[e.l-4]).replace(/\u0000+$/,"");break;case 31:e.l+=4;b=Vi(e,e[e.l-4]).replace(/\u0000+$/,"");break;case 3:e.l+=4;b=e._R(4,"i");break;case 19:e.l+=4;b=e._R(4);break;case 5:e.l+=4;b=e._R(8,"f");break;case 11:e.l+=4;b=os(e,4);break;case 64:e.l+=4;b=br(Ui(e));break;default:throw new Error("unparsed value: "+e[e.l]);}d[g]=b}}}e.l=t+a;return d}var rs=["CodePage","Thumbnail","_PID_LINKBASE","_PID_HLINKS","SystemIdentifier","FMTID"];function ts(e){switch(typeof e){case"boolean":return 11;case"number":return(e|0)==e?3:5;case"string":return 31;case"object":if(e instanceof Date)return 64;break;}return-1}function as(e,r,t){var a=Aa(8),n=[],i=[];var s=8,f=0;var l=Aa(8),o=Aa(8);l._W(4,2);l._W(4,1200);o._W(4,1);i.push(l);n.push(o);s+=8+l.length;if(!r){o=Aa(8);o._W(4,0);n.unshift(o);var c=[Aa(4)];c[0]._W(4,e.length);for(f=0;f<e.length;++f){var h=e[f][0];l=Aa(4+4+2*(h.length+1)+(h.length%2?0:2));l._W(4,f+2);l._W(4,h.length+1);l._W(0,h,"dbcs");while(l.l!=l.length)l._W(1,0);c.push(l)}l=P(c);i.unshift(l);s+=8+l.length}for(f=0;f<e.length;++f){if(r&&!r[e[f][0]])continue;if(rs.indexOf(e[f][0])>-1||_i.indexOf(e[f][0])>-1)continue;if(e[f][1]==null)continue;var u=e[f][1],d=0;if(r){d=+r[e[f][0]];var v=t[d];if(v.p=="version"&&typeof u=="string"){var p=u.split(".");u=(+p[0]<<16)+(+p[1]||0)}l=Qi(v.t,u)}else{var m=ts(u);if(m==-1){m=31;u=String(u)}l=Qi(m,u)}i.push(l);o=Aa(8);o._W(4,!r?2+f:d);n.push(o);s+=8+l.length}var g=8*(i.length+1);for(f=0;f<i.length;++f){n[f]._W(4,g);g+=i[f].length}a._W(4,s);a._W(4,i.length);return P([a].concat(n).concat(i))}function ns(e,r,t){var a=e.content;if(!a)return{};ka(a,0);var n,i,s,f,l=0;a.chk("feff","Byte Order: ");a._R(2);var o=a._R(4);var c=a._R(16);if(c!==qe.utils.consts.HEADER_CLSID&&c!==t)throw new Error("Bad PropertySet CLSID "+c);n=a._R(4);if(n!==1&&n!==2)throw new Error("Unrecognized #Sets: "+n);i=a._R(16);f=a._R(4);if(n===1&&f!==a.l)throw new Error("Length mismatch: "+f+" !== "+a.l);else if(n===2){s=a._R(16);l=a._R(4)}var h=es(a,r);var u={SystemIdentifier:o};for(var d in h)u[d]=h[d];u.FMTID=i;if(n===1)return u;if(l-a.l==2)a.l+=2;if(a.l!==l)throw new Error("Length mismatch 2: "+a.l+" !== "+l);var v;try{v=es(a,null)}catch(p){}for(d in v)u[d]=v[d];u.FMTID=[i,s];return u}function is(e,r,t,a,n,i){var s=Aa(n?68:48);var f=[s];s._W(2,65534);s._W(2,0);s._W(4,842412599);s._W(16,qe.utils.consts.HEADER_CLSID,"hex");s._W(4,n?2:1);s._W(16,r,"hex");s._W(4,n?68:48);var l=as(e,t,a);f.push(l);if(n){var o=as(n,null,null);s._W(16,i,"hex");s._W(4,68+l.length);f.push(o)}return P(f)}function ss(e,r){e._R(r);return null}function fs(e,r){if(!r)r=Aa(e);for(var t=0;t<e;++t)r._W(1,0);return r}function ls(e,r,t){var a=[],n=e.l+r;while(e.l<n)a.push(t(e,n-e.l));if(n!==e.l)throw new Error("Slurp error");return a}function os(e,r){return e._R(r)===1}function cs(e,r){if(!r)r=Aa(2);r._W(2,+!!e);return r}function hs(e){return e._R(2,"u")}function us(e,r){if(!r)r=Aa(2);r._W(2,e);return r}function ds(e,r){return ls(e,r,hs)}function vs(e){var r=e._R(1),t=e._R(1);return t===1?r:r===1}function ps(e,r,t){if(!t)t=Aa(2);t._W(1,r=="e"?+e:+!!e);t._W(1,r=="e"?1:0);return t}function ms(e,t,a){var n=e._R(a&&a.biff>=12?2:1);var i="sbcs-cont";var s=r;if(a&&a.biff>=8)r=1200;if(!a||a.biff==8){var f=e._R(1);if(f){i="dbcs-cont"}}else if(a.biff==12){i="wstr"}if(a.biff>=2&&a.biff<=5)i="cpstr";var l=n?e._R(n,i):"";r=s;return l}function gs(e){var t=r;r=1200;var a=e._R(2),n=e._R(1);var i=n&4,s=n&8;var f=1+(n&1);var l=0,o;var c={};if(s)l=e._R(2);if(i)o=e._R(4);var h=f==2?"dbcs-cont":"sbcs-cont";var u=a===0?"":e._R(a,h);if(s)e.l+=4*l;if(i)e.l+=o;c.t=u;if(!s){c.raw="<t>"+c.t+"</t>";c.r=c.t}r=t;return c}function bs(e){var r=e.t||"",t=1;var a=Aa(3+(t>1?2:0));a._W(2,r.length);a._W(1,(t>1?8:0)|1);if(t>1)a._W(2,t);var n=Aa(2*r.length);n._W(2*r.length,r,"utf16le");var i=[a,n];return P(i)}function ws(e,r,t){var a;if(t){if(t.biff>=2&&t.biff<=5)return e._R(r,"cpstr");if(t.biff>=12)return e._R(r,"dbcs-cont")}var n=e._R(1);if(n===0){a=e._R(r,"sbcs-cont")}else{a=e._R(r,"dbcs-cont")}return a}function ks(e,r,t){var a=e._R(t&&t.biff==2?1:2);if(a===0){e.l++;return""}return ws(e,a,t)}function Ts(e,r,t){if(t.biff>5)return ks(e,r,t);var a=e._R(1);if(a===0){e.l++;return""}return e._R(a,t.biff<=4||!e.lens?"cpstr":"sbcs-cont")}function As(e,r,t){if(!t)t=Aa(3+2*e.length);t._W(2,e.length);t._W(1,1);t._W(31,e,"utf16le");return t}function ys(e){var r=e._R(1);e.l++;var t=e._R(2);e.l+=2;return[r,t]}function Es(e){var r=e._R(4),t=e.l;var a=false;if(r>24){e.l+=r-24;if(e._R(16)==="795881f43b1d7f48af2c825dc4852763")a=true;e.l=t}var n=e._R((a?r-24:r)>>1,"utf16le").replace(M,"");if(a)e.l+=24;return n}function Cs(e){var r=e._R(2);var t="";while(r-- >0)t+="../";var a=e._R(0,"lpstr-ansi");e.l+=2;if(e._R(2)!=57005)throw new Error("Bad FileMoniker");var n=e._R(4);if(n===0)return t+a.replace(/\\/g,"/");var i=e._R(4);if(e._R(2)!=3)throw new Error("Bad FileMoniker");var s=e._R(i>>1,"utf16le").replace(M,"");return t+s}function _s(e,r){var t=e._R(16);r-=16;switch(t){case"e0c9ea79f9bace118c8200aa004ba90b":return Es(e,r);case"0303000000000000c000000000000046":return Cs(e,r);default:throw new Error("Unsupported Moniker "+t);}}function Ss(e){var r=e._R(4);var t=r>0?e._R(r,"utf16le").replace(M,""):"";return t}function xs(e,r){if(!r)r=Aa(6+e.length*2);r._W(4,1+e.length);for(var t=0;t<e.length;++t)r._W(2,e.charCodeAt(t));r._W(2,0);return r}function Os(e,r){var t=e.l+r;var a=e._R(4);if(a!==2)throw new Error("Unrecognized streamVersion: "+a);var n=e._R(2);e.l+=2;var i,s,f,l,o="",c,h;if(n&16)i=Ss(e,t-e.l);if(n&128)s=Ss(e,t-e.l);if((n&257)===257)f=Ss(e,t-e.l);if((n&257)===1)l=_s(e,t-e.l);if(n&8)o=Ss(e,t-e.l);if(n&32)c=e._R(16);if(n&64)h=Ui(e);e.l=t;var u=s||f||l||"";if(u&&o)u+="#"+o;if(!u)u="#"+o;if(n&2&&u.charAt(0)=="/"&&u.charAt(1)!="/")u="file://"+u;var d={Target:u};if(c)d.guid=c;if(h)d.time=h;if(i)d.Tooltip=i;return d}function Rs(e){var r=Aa(512),t=0;var a=e.Target;if(a.slice(0,7)=="file://")a=a.slice(7);var n=a.indexOf("#");var i=n>-1?31:23;switch(a.charAt(0)){case"#":i=28;break;case".":i&=~2;break;}r._W(4,2);r._W(4,i);var s=[8,6815827,6619237,4849780,83];for(t=0;t<s.length;++t)r._W(4,s[t]);if(i==28){a=a.slice(1);xs(a,r)}else if(i&2){s="e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" ");for(t=0;t<s.length;++t)r._W(1,parseInt(s[t],16));var f=n>-1?a.slice(0,n):a;r._W(4,2*(f.length+1));for(t=0;t<f.length;++t)r._W(2,f.charCodeAt(t));r._W(2,0);if(i&8)xs(n>-1?a.slice(n+1):"",r)}else{s="03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" ");for(t=0;t<s.length;++t)r._W(1,parseInt(s[t],16));var l=0;while(a.slice(l*3,l*3+3)=="../"||a.slice(l*3,l*3+3)=="..\\")++l;r._W(2,l);r._W(4,a.length-3*l+1);for(t=0;t<a.length-3*l;++t)r._W(1,a.charCodeAt(t+3*l)&255);r._W(1,0);r._W(2,65535);r._W(2,57005);for(t=0;t<6;++t)r._W(4,0)}return r.slice(0,r.l)}function Is(e){var r=e._R(1),t=e._R(1),a=e._R(1),n=e._R(1);return[r,t,a,n]}function Ns(e,r){var t=Is(e,r);t[3]=0;return t}function Fs(e,r,t){var a=e._R(2);var n=e._R(2);var i={r:a,c:n,ixfe:0};if(t&&t.biff==2||r==7){var s=e._R(1);i.ixfe=s&63;e.l+=2}else i.ixfe=e._R(2);return i}function Ds(e,r,t,a){if(!a)a=Aa(6);a._W(2,e);a._W(2,r);a._W(2,t||0);return a}function Ps(e){var r=e._R(2);var t=e._R(2);e.l+=8;return{type:r,flags:t}}function Ls(e,r,t){return r===0?"":Ts(e,r,t)}function Ms(e,r,t){var a=t.biff>8?4:2;var n=e._R(a),i=e._R(a,"i"),s=e._R(a,"i");return[n,i,s]}function Us(e){var r=e._R(2);var t=wn(e);return[r,t]}function Bs(e,r,t){e.l+=4;r-=4;var a=e.l+r;var n=ms(e,r,t);var i=e._R(2);a-=e.l;if(i!==a)throw new Error("Malformed AddinUdf: padding = "+a+" != "+i);e.l+=i;return n}function Ws(e){var r=e._R(2);var t=e._R(2);var a=e._R(2);var n=e._R(2);return{s:{c:a,r:r},e:{c:n,r:t}}}function zs(e,r){if(!r)r=Aa(8);r._W(2,e.s.r);r._W(2,e.e.r);r._W(2,e.s.c);r._W(2,e.e.c);return r}function Hs(e){var r=e._R(2);var t=e._R(2);var a=e._R(1);var n=e._R(1);return{s:{c:a,r:r},e:{c:n,r:t}}}var Vs=Hs;function Xs(e){e.l+=4;var r=e._R(2);var t=e._R(2);var a=e._R(2);e.l+=12;return[t,r,a]}function Gs(e){var r={};e.l+=4;e.l+=16;r.fSharedNote=e._R(2);e.l+=4;return r}function $s(e){var r={};e.l+=4;e.cf=e._R(2);return r}function js(e){e.l+=2;e.l+=e._R(2)}var Ks={0:js,4:js,5:js,6:js,7:$s,8:js,9:js,10:js,11:js,12:js,13:Gs,14:js,15:js,16:js,17:js,18:js,19:js,20:js,21:Xs};function Ys(e,r){var t=e.l+r;var a=[];while(e.l<t){var n=e._R(2);e.l-=2;try{a[n]=Ks[n](e,t-e.l)}catch(i){e.l=t;return a}}if(e.l!=t)e.l=t;return a}function Zs(e,r){var t={BIFFVer:0,dt:0};t.BIFFVer=e._R(2);r-=2;if(r>=2){t.dt=e._R(2);e.l-=2}switch(t.BIFFVer){case 1536:;case 1280:;case 1024:;case 768:;case 512:;case 2:;case 7:break;default:if(r>6)throw new Error("Unexpected BIFF Ver "+t.BIFFVer);}e._R(r);return t}function Js(e,r,t){var a=1536,n=16;switch(t.bookType){case"biff8":break;case"biff5":a=1280;n=8;break;case"biff4":a=4;n=6;break;case"biff3":a=3;n=6;break;case"biff2":a=2;n=4;break;case"xla":break;default:throw new Error("unsupported BIFF version");}var i=Aa(n);i._W(2,a);i._W(2,r);if(n>4)i._W(2,29282);if(n>6)i._W(2,1997);if(n>8){i._W(2,49161);i._W(2,1);i._W(2,1798);i._W(2,0)}return i}function qs(e,r){if(r===0)return 1200;if(e._R(2)!==1200){}return 1200}function Qs(e,r,t){if(t.enc){e.l+=r;return""}var a=e.l;var n=Ts(e,0,t);e._R(r+a-e.l);return n}function ef(e,r){var t=!r||r.biff==8;var a=Aa(t?112:54);a._W(r.biff==8?2:1,7);if(t)a._W(1,0);a._W(4,859007059);a._W(4,5458548|(t?0:536870912));while(a.l<a.length)a._W(1,t?0:32);return a}function rf(e,r,t){var a=t&&t.biff==8||r==2?e._R(2):(e.l+=r,0);return{fDialog:a&16,fBelow:a&64,fRight:a&128}}function tf(e,r,t){var a="";if(t.biff==4){a=ms(e,0,t);if(a.length===0)a="Sheet1";return{name:a}}var n=e._R(4);var i=e._R(1)&3;var s=e._R(1);switch(s){case 0:s="Worksheet";break;case 1:s="Macrosheet";break;case 2:s="Chartsheet";break;case 6:s="VBAModule";break;}a=ms(e,0,t);if(a.length===0)a="Sheet1";return{pos:n,hs:i,dt:s,name:a}}function af(e,r){var t=!r||r.biff>=8?2:1;var a=Aa(8+t*e.name.length);a._W(4,e.pos);a._W(1,e.hs||0);a._W(1,e.dt);a._W(1,e.name.length);if(r.biff>=8)a._W(1,1);a._W(t*e.name.length,e.name,r.biff<8?"sbcs":"utf16le");var n=a.slice(0,a.l);n.l=a.l;return n}function nf(e,r){var t=e.l+r;var a=e._R(4);var n=e._R(4);var i=[];for(var s=0;s!=n&&e.l<t;++s){i.push(gs(e))}i.Count=a;i.Unique=n;return i}function sf(e,r){var t=Aa(8);t._W(4,e.Count);t._W(4,e.Unique);var a=[];for(var n=0;n<e.length;++n)a[n]=bs(e[n],r);var i=P([t].concat(a));i.parts=[t.length].concat(a.map(function(e){return e.length}));return i}function ff(e,r){var t={};t.dsst=e._R(2);e.l+=r-2;return t}function lf(e){var r={};r.r=e._R(2);r.c=e._R(2);r.cnt=e._R(2)-r.c;var t=e._R(2);e.l+=4;var a=e._R(1);e.l+=3;if(a&7)r.level=a&7;if(a&32)r.hidden=true;if(a&64)r.hpt=t/20;return r}function of(e){var r=Ps(e);if(r.type!=2211)throw new Error("Invalid Future Record "+r.type);var t=e._R(4);return t!==0}function cf(e){e._R(2);return e._R(4)}function hf(e,r,t){var a=0;if(!(t&&t.biff==2)){a=e._R(2)}var n=e._R(2);if(t&&t.biff==2){a=1-(n>>15);n&=32767}var i={Unsynced:a&1,DyZero:(a&2)>>1,ExAsc:(a&4)>>2,ExDsc:(a&8)>>3};return[i,n]}function uf(e){var r=e._R(2),t=e._R(2),a=e._R(2),n=e._R(2);var i=e._R(2),s=e._R(2),f=e._R(2);var l=e._R(2),o=e._R(2);return{Pos:[r,t],Dim:[a,n],Flags:i,CurTab:s,FirstTab:f,Selected:l,TabRatio:o}}function df(){var e=Aa(18);e._W(2,0);e._W(2,0);e._W(2,29280);e._W(2,17600);e._W(2,56);e._W(2,0);e._W(2,0);e._W(2,1);e._W(2,500);return e}function vf(e,r,t){if(t&&t.biff>=2&&t.biff<5)return{};var a=e._R(2);return{RTL:a&64}}function pf(e){var r=Aa(18),t=1718;if(e&&e.RTL)t|=64;r._W(2,t);r._W(4,0);r._W(4,64);r._W(4,0);r._W(4,0);return r}function mf(){}function gf(e,r,t){var a={dyHeight:e._R(2),fl:e._R(2)};switch(t&&t.biff||8){case 2:break;case 3:;case 4:e.l+=2;break;default:e.l+=10;break;}a.name=ms(e,0,t);return a}function bf(e,r){var t=e.name||"Arial";var a=r&&r.biff==5,n=a?15+t.length:16+2*t.length;var i=Aa(n);i._W(2,(e.sz||12)*20);i._W(4,0);i._W(2,400);i._W(4,0);i._W(2,0);i._W(1,t.length);if(!a)i._W(1,1);i._W((a?1:2)*t.length,t,a?"sbcs":"utf16le");return i}function wf(e,r,t){var a=Fs(e,r,t);a.isst=e._R(4);return a}function kf(e,r,t,a){var n=Aa(10);Ds(e,r,a,n);n._W(4,t);return n}function Tf(e,r,t){if(t.biffguess&&t.biff==2)t.biff=5;var a=e.l+r;var n=Fs(e,r,t);var i=ks(e,a-e.l,t);n.val=i;return n}function Af(e,r,t,a,n){var i=!n||n.biff==8;var s=Aa(6+2+ +i+(1+i)*t.length);Ds(e,r,a,s);s._W(2,t.length);if(i)s._W(1,1);s._W((1+i)*t.length,t,i?"utf16le":"sbcs");return s}function yf(e,r,t){var a=e._R(2);var n=Ts(e,0,t);return[a,n]}function Ef(e,r,t,a){var n=t&&t.biff==5;if(!a)a=Aa(n?3+r.length:5+2*r.length);a._W(2,e);a._W(n?1:2,r.length);if(!n)a._W(1,1);a._W((n?1:2)*r.length,r,n?"sbcs":"utf16le");var i=a.length>a.l?a.slice(0,a.l):a;if(i.l==null)i.l=i.length;return i}var Cf=Ts;function _f(e){var r=Aa(1+e.length);r._W(1,e.length);r._W(e.length,e,"sbcs");return r}function Sf(e){var r=Aa(3+e.length);r.l+=2;r._W(1,e.length);r._W(e.length,e,"sbcs");return r}function xf(e,r,t){var a=e.l+r;var n=t.biff==8||!t.biff?4:2;var i=e._R(n),s=e._R(n);var f=e._R(2),l=e._R(2);e.l=a;return{s:{r:i,c:f},e:{r:s,c:l}}}function Of(e,r){var t=r.biff==8||!r.biff?4:2;var a=Aa(2*t+6);a._W(t,e.s.r);a._W(t,e.e.r+1);a._W(2,e.s.c);a._W(2,e.e.c+1);a._W(2,0);return a}function Rf(e){var r=e._R(2),t=e._R(2);var a=Us(e);return{r:r,c:t,ixfe:a[0],rknum:a[1]}}function If(e,r){var t=e.l+r-2;var a=e._R(2),n=e._R(2);var i=[];while(e.l<t)i.push(Us(e));if(e.l!==t)throw new Error("MulRK read error");var s=e._R(2);if(i.length!=s-n+1)throw new Error("MulRK length mismatch");return{r:a,c:n,C:s,rkrec:i}}function Nf(e,r){var t=e.l+r-2;var a=e._R(2),n=e._R(2);var i=[];while(e.l<t)i.push(e._R(2));if(e.l!==t)throw new Error("MulBlank read error");var s=e._R(2);if(i.length!=s-n+1)throw new Error("MulBlank length mismatch");return{r:a,c:n,C:s,ixfe:i}}function Ff(e,r,t,a){var n={};var i=e._R(4),s=e._R(4);var f=e._R(4),l=e._R(2);n.patternType=Zn[f>>26];if(!a.cellStyles)return n;n.alc=i&7;n.fWrap=i>>3&1;n.alcV=i>>4&7;n.fJustLast=i>>7&1;n.trot=i>>8&255;n.cIndent=i>>16&15;n.fShrinkToFit=i>>20&1;n.iReadOrder=i>>22&2;n.fAtrNum=i>>26&1;n.fAtrFnt=i>>27&1;n.fAtrAlc=i>>28&1;n.fAtrBdr=i>>29&1;n.fAtrPat=i>>30&1;n.fAtrProt=i>>31&1;n.dgLeft=s&15;n.dgRight=s>>4&15;n.dgTop=s>>8&15;n.dgBottom=s>>12&15;n.icvLeft=s>>16&127;n.icvRight=s>>23&127;n.grbitDiag=s>>30&3;n.icvTop=f&127;n.icvBottom=f>>7&127;n.icvDiag=f>>14&127;n.dgDiag=f>>21&15;n.icvFore=l&127;n.icvBack=l>>7&127;n.fsxButton=l>>14&1;return n}function Df(e,r,t){var a={};a.ifnt=e._R(2);a.numFmtId=e._R(2);a.flags=e._R(2);a.fStyle=a.flags>>2&1;r-=6;a.data=Ff(e,r,a.fStyle,t);return a}function Pf(e,r,t,a){var n=t&&t.biff==5;if(!a)a=Aa(n?16:20);a._W(2,0);if(e.style){a._W(2,e.numFmtId||0);a._W(2,65524)}else{a._W(2,e.numFmtId||0);a._W(2,r<<4)}var i=0;if(e.numFmtId>0&&n)i|=1024;a._W(4,i);a._W(4,0);if(!n)a._W(4,0);a._W(2,0);return a}function Lf(e){var r={};r.ifnt=e._R(1);e.l++;r.flags=e._R(1);r.numFmtId=r.flags&63;r.flags>>=6;r.fStyle=0;r.data={};return r}function Mf(e){var r=Aa(4);r.l+=2;r._W(1,e.numFmtId);r.l++;return r}function Uf(e){var r=Aa(12);r.l++;r._W(1,e.numFmtId);r.l+=10;return r}var Bf=Uf;function Wf(e){var r={};r.ifnt=e._R(1);r.numFmtId=e._R(1);r.flags=e._R(2);r.fStyle=r.flags>>2&1;r.data={};return r}function zf(e){var r={};r.ifnt=e._R(1);r.numFmtId=e._R(1);r.flags=e._R(2);r.fStyle=r.flags>>2&1;r.data={};return r}function Hf(e){e.l+=4;var r=[e._R(2),e._R(2)];if(r[0]!==0)r[0]--;if(r[1]!==0)r[1]--;if(r[0]>7||r[1]>7)throw new Error("Bad Gutters: "+r.join("|"));return r}function Vf(e){var r=Aa(8);r._W(4,0);r._W(2,e[0]?e[0]+1:0);r._W(2,e[1]?e[1]+1:0);return r}function Xf(e,r,t){var a=Fs(e,6,t);var n=vs(e,2);a.val=n;a.t=n===true||n===false?"b":"e";return a}function Gf(e,r,t,a,n,i){var s=Aa(8);Ds(e,r,a,s);ps(t,i,s);return s}function $f(e,r,t){if(t.biffguess&&t.biff==2)t.biff=5;var a=Fs(e,6,t);var n=Cn(e,8);a.val=n;return a}function jf(e,r,t,a){var n=Aa(14);Ds(e,r,a,n);_n(t,n);return n}var Kf=Ls;function Yf(e,r,t){var a=e.l+r;var n=e._R(2);var i=e._R(2);t.sbcch=i;if(i==1025||i==14849)return[i,n];if(i<1||i>255)throw new Error("Unexpected SupBook type: "+i);var s=ws(e,i);var f=[];while(a>e.l)f.push(ks(e));return[i,n,s,f]}function Zf(e,r,t){var a=e._R(2);var n;var i={fBuiltIn:a&1,fWantAdvise:a>>>1&1,fWantPict:a>>>2&1,fOle:a>>>3&1,fOleLink:a>>>4&1,cf:a>>>5&1023,fIcon:a>>>15&1};if(t.sbcch===14849)n=Bs(e,r-2,t);i.body=n||e._R(r-2);if(typeof n==="string")i.Name=n;return i}function Jf(e,r,t){var a=e.l+r;var n=e._R(2);var i=e._R(1);var s=e._R(1);var f=e._R(t&&t.biff==2?1:2);var l=0;if(!t||t.biff>=5){if(t.biff!=5)e.l+=2;l=e._R(2);if(t.biff==5)e.l+=2;e.l+=4}var o=ws(e,s,t);if(n&32)o=ti[o.charCodeAt(0)];var c=a-e.l;if(t&&t.biff==2)--c;var h=a==e.l||f===0||!(c>0)?[]:Md(e,c,t,f);return{chKey:i,Name:o,itab:l,rgce:h}}function qf(e,r,t){if(t.biff<8)return Qf(e,r,t);if(!(t.biff>8)&&r==e[e.l]+(e[e.l+1]==3?1:0)+1)return Qf(e,r,t);var a=[],n=e.l+r,i=e._R(t.biff>8?4:2);while(i--!==0)a.push(Ms(e,t.biff>8?12:6,t));if(e.l!=n)throw new Error("Bad ExternSheet: "+e.l+" != "+n);return a}function Qf(e,r,t){if(e[e.l+1]==3)e[e.l]++;var a=ms(e,r,t);return a.charCodeAt(0)==3?a.slice(1):a}function el(e,r,t){if(t.biff<8){e.l+=r;return}var a=e._R(2);var n=e._R(2);var i=ws(e,a,t);var s=ws(e,n,t);return[i,s]}function rl(e,r,t){var a=Hs(e,6);e.l++;var n=e._R(1);r-=8;return[Ud(e,r,t),n,a]}function tl(e,r,t){var a=Vs(e,6);switch(t.biff){case 2:e.l++;r-=7;break;case 3:;case 4:e.l+=2;r-=8;break;default:e.l+=6;r-=12;}return[a,Pd(e,r,t,a)]}function al(e){var r=e._R(4)!==0;var t=e._R(4)!==0;var a=e._R(4);return[r,t,a]}function nl(e,r,t){var a=e._R(2),n=e._R(2);var i=e._R(2),s=e._R(2);var f=Ts(e,0,t);return[{r:a,c:n},f,s,i]}function il(e,r,t){if(t&&t.biff<8){var a=e._R(2),n=e._R(2);if(a==65535||a==-1)return;var i=e._R(2);var s=e._R(Math.min(i,2048),"cpstr");return[{r:a,c:n},s]}return nl(e,r,t)}function sl(e,r,t,a){var n=Aa(6+(a||e.length));n._W(2,r);n._W(2,t);n._W(2,a||e.length);n._W(e.length,e,"sbcs");return n}function fl(e,r){var t=[];var a=e._R(2);while(a--)t.push(Ws(e,r));return t}function ll(e){var r=Aa(2+e.length*8);r._W(2,e.length);for(var t=0;t<e.length;++t)zs(e[t],r);return r}function ol(e,r,t){if(t&&t.biff<8)return hl(e,r,t);var a=Xs(e,22);var n=Ys(e,r-22,a[1]);return{cmo:a,ft:n}}var cl={8:function(e,r){var t=e.l+r;e.l+=10;var a=e._R(2);e.l+=4;e.l+=2;e.l+=2;e.l+=2;e.l+=4;var n=e._R(1);e.l+=n;e.l=t;return{fmt:a}}};function hl(e,r,t){e.l+=4;var a=e._R(2);var n=e._R(2);var i=e._R(2);e.l+=2;e.l+=2;e.l+=2;e.l+=2;e.l+=2;e.l+=2;e.l+=2;e.l+=2;e.l+=2;e.l+=6;r-=36;var s=[];s.push((cl[a]||Ta)(e,r,t));return{cmo:[n,a,i],ft:s}}function ul(e,r,t){var a=e.l;var n="";try{e.l+=4;var i=(t.lastobj||{cmo:[0,0]}).cmo[1];var s;if([0,5,7,11,12,14].indexOf(i)==-1)e.l+=6;else s=ys(e,6,t);var f=e._R(2);e._R(2);hs(e,2);var l=e._R(2);
e.l+=l;for(var o=1;o<e.lens.length-1;++o){if(e.l-a!=e.lens[o])throw new Error("TxO: bad continue record");var c=e[e.l];var h=ws(e,e.lens[o+1]-e.lens[o]-1);n+=h;if(n.length>=(c?f:2*f))break}if(n.length!==f&&n.length!==f*2){throw new Error("cchText: "+f+" != "+n.length)}e.l=a+r;return{t:n}}catch(u){e.l=a+r;return{t:n}}}function dl(e,r){var t=Ws(e,8);e.l+=16;var a=Os(e,r-24);return[t,a]}function vl(e){var r=Aa(24);var t=Ba(e[0]);r._W(2,t.r);r._W(2,t.r);r._W(2,t.c);r._W(2,t.c);var a="d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" ");for(var n=0;n<16;++n)r._W(1,parseInt(a[n],16));return P([r,Rs(e[1])])}function pl(e,r){e._R(2);var t=Ws(e,8);var a=e._R((r-10)/2,"dbcs-cont");a=a.replace(M,"");return[t,a]}function ml(e){var r=e[1].Tooltip;var t=Aa(10+2*(r.length+1));t._W(2,2048);var a=Ba(e[0]);t._W(2,a.r);t._W(2,a.r);t._W(2,a.c);t._W(2,a.c);for(var n=0;n<r.length;++n)t._W(2,r.charCodeAt(n));t._W(2,0);return t}function gl(e){var r=[0,0],t;t=e._R(2);r[0]=Yn[t]||t;t=e._R(2);r[1]=Yn[t]||t;return r}function bl(e){if(!e)e=Aa(4);e._W(2,1);e._W(2,1);return e}function wl(e){var r=e._R(2);var t=[];while(r-- >0)t.push(Ns(e,8));return t}function kl(e){var r=e._R(2);var t=[];while(r-- >0)t.push(Ns(e,8));return t}function Tl(e){e.l+=2;var r={cxfs:0,crc:0};r.cxfs=e._R(2);r.crc=e._R(4);return r}function Al(e,r,t){if(!t.cellStyles)return Ta(e,r);var a=t&&t.biff>=12?4:2;var n=e._R(a);var i=e._R(a);var s=e._R(a);var f=e._R(a);var l=e._R(2);if(a==2)e.l+=2;var o={s:n,e:i,w:s,ixfe:f,flags:l};if(t.biff>=5||!t.biff)o.level=l>>8&7;return o}function yl(e,r){var t=Aa(12);t._W(2,r);t._W(2,r);t._W(2,e.width*256);t._W(2,0);var a=0;if(e.hidden)a|=1;t._W(1,a);a=e.level||0;t._W(1,a);t._W(2,0);return t}function El(e,r){var t={};if(r<32)return t;e.l+=16;t.header=Cn(e,8);t.footer=Cn(e,8);e.l+=2;return t}function Cl(e,r,t){var a={area:false};if(t.biff!=5){e.l+=r;return a}var n=e._R(1);e.l+=3;if(n&16)a.area=true;return a}function _l(e){var r=Aa(2*e);for(var t=0;t<e;++t)r._W(2,t+1);return r}var Sl=Fs;var xl=ds;var Ol=ks;function Rl(e){var r=e._R(2);var t=e._R(2);var a=e._R(4);var n={fmt:r,env:t,len:a,data:e.slice(e.l,e.l+a)};e.l+=a;return n}function Il(e,r,t,a,n){if(!e)e=Aa(7);e._W(2,r);e._W(2,t);e._W(1,a||0);e._W(1,n||0);e._W(1,0);return e}function Nl(e,r,t){if(t.biffguess&&t.biff==5)t.biff=2;var a=Fs(e,7,t);var n=Ts(e,r-7,t);a.t="str";a.val=n;return a}function Fl(e,r,t){var a=Fs(e,7,t);var n=Cn(e,8);a.t="n";a.val=n;return a}function Dl(e,r,t,a,n){var i=Aa(15);Il(i,e,r,a||0,n||0);i._W(8,t,"f");return i}function Pl(e,r,t){var a=Fs(e,7,t);var n=e._R(2);a.t="n";a.val=n;return a}function Ll(e,r,t,a,n){var i=Aa(9);Il(i,e,r,a||0,n||0);i._W(2,t);return i}function Ml(e){var r=e._R(1);if(r===0){e.l++;return""}return e._R(r,"sbcs-cont")}function Ul(e,r,t){var a=e.l+7;var n=Fs(e,6,t);e.l=a;var i=vs(e,2);n.val=i;n.t=i===true||i===false?"b":"e";return n}function Bl(e,r){e.l+=6;e.l+=2;e.l+=1;e.l+=3;e.l+=1;e.l+=r-13}function Wl(e,r,t){var a=e.l+r;var n=Fs(e,6,t);var i=e._R(2);var s=ws(e,i,t);e.l=a;n.t="str";n.val=s;return n}function zl(e){var r=e._R(4);var t=e._R(1),a=e._R(t,"sbcs");if(a.length===0)a="Sheet1";return{flags:r,name:a}}var Hl=[2,3,48,49,131,139,140,245];var Vl=function(){var e={1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127,8:865,9:437,10:850,11:437,13:437,14:850,15:437,16:850,17:437,18:850,19:932,20:850,21:437,22:850,23:865,24:437,25:437,26:850,27:437,28:863,29:850,31:852,34:852,35:852,36:860,37:850,38:866,55:850,64:852,77:936,78:949,79:950,80:874,87:1252,88:1252,89:1252,108:863,134:737,135:852,136:857,204:1257,255:16969};var n=sr({1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127});function i(r,t){var n=[];var i=x(1);switch(t.type){case"base64":i=R(E(r));break;case"binary":i=R(r);break;case"buffer":;case"array":i=r;break;}ka(i,0);var s=i._R(1);var f=!!(s&136);var l=false,o=false;switch(s){case 2:break;case 3:break;case 48:l=true;f=true;break;case 49:l=true;f=true;break;case 131:break;case 139:break;case 140:o=true;break;case 245:break;default:throw new Error("DBF Unsupported Version: "+s.toString(16));}var c=0,h=521;if(s==2)c=i._R(2);i.l+=3;if(s!=2)c=i._R(4);if(c>1048576)c=1e6;if(s!=2)h=i._R(2);var u=i._R(2);var d=t.codepage||1252;if(s!=2){i.l+=16;i._R(1);if(i[i.l]!==0)d=e[i[i.l]];i.l+=1;i.l+=2}if(o)i.l+=36;var v=[],p={};var m=Math.min(i.length,s==2?521:h-10-(l?264:0));var g=o?32:11;while(i.l<m&&i[i.l]!=13){p={};p.name=(typeof a!=="undefined"?a.utils.decode(d,i.slice(i.l,i.l+g)):N(i.slice(i.l,i.l+g))).replace(/[\u0000\r\n].*$/g,"");i.l+=g;p.type=String.fromCharCode(i._R(1));if(s!=2&&!o)p.offset=i._R(4);p.len=i._R(1);if(s==2)p.offset=i._R(2);p.dec=i._R(1);if(p.name.length)v.push(p);if(s!=2)i.l+=o?13:14;switch(p.type){case"B":if((!l||p.len!=8)&&t.WTF)console.log("Skipping "+p.name+":"+p.type);break;case"G":;case"P":if(t.WTF)console.log("Skipping "+p.name+":"+p.type);break;case"+":;case"0":;case"@":;case"C":;case"D":;case"F":;case"I":;case"L":;case"M":;case"N":;case"O":;case"T":;case"Y":break;default:throw new Error("Unknown Field Type: "+p.type);}}if(i[i.l]!==13)i.l=h-1;if(i._R(1)!==13)throw new Error("DBF Terminator not found "+i.l+" "+i[i.l]);i.l=h;var b=0,w=0;n[0]=[];for(w=0;w!=v.length;++w)n[0][w]=v[w].name;while(c-- >0){if(i[i.l]===42){i.l+=u;continue}++i.l;n[++b]=[];w=0;for(w=0;w!=v.length;++w){var k=i.slice(i.l,i.l+v[w].len);i.l+=v[w].len;ka(k,0);var T=typeof a!=="undefined"?a.utils.decode(d,k):N(k);switch(v[w].type){case"C":if(T.trim().length)n[b][w]=T.replace(/\s+$/,"");break;case"D":if(T.length===8){n[b][w]=new Date(Date.UTC(+T.slice(0,4),+T.slice(4,6)-1,+T.slice(6,8),0,0,0,0));if(!(t&&t.UTC)){n[b][w]=Nr(n[b][w])}}else n[b][w]=T;break;case"F":n[b][w]=parseFloat(T.trim());break;case"+":;case"I":n[b][w]=o?k._R(-4,"i")^2147483648:k._R(4,"i");break;case"L":switch(T.trim().toUpperCase()){case"Y":;case"T":n[b][w]=true;break;case"N":;case"F":n[b][w]=false;break;case"":;case"?":break;default:throw new Error("DBF Unrecognized L:|"+T+"|");}break;case"M":if(!f)throw new Error("DBF Unexpected MEMO for type "+s.toString(16));n[b][w]="##MEMO##"+(o?parseInt(T.trim(),10):k._R(4));break;case"N":T=T.replace(/\u0000/g,"").trim();if(T&&T!=".")n[b][w]=+T||0;break;case"@":n[b][w]=new Date(k._R(-8,"f")-621356832e5);break;case"T":{var A=k._R(4),y=k._R(4);if(A==0&&y==0)break;n[b][w]=new Date((A-2440588)*864e5+y);if(!(t&&t.UTC))n[b][w]=Nr(n[b][w])}break;case"Y":n[b][w]=k._R(4,"i")/1e4+k._R(4,"i")/1e4*Math.pow(2,32);break;case"O":n[b][w]=-k._R(-8,"f");break;case"B":if(l&&v[w].len==8){n[b][w]=k._R(8,"f");break};case"G":;case"P":k.l+=v[w].len;break;case"0":if(v[w].name==="_NullFlags")break;default:throw new Error("DBF Unsupported data type "+v[w].type);}}}if(s!=2)if(i.l<i.length&&i[i.l++]!=26)throw new Error("DBF EOF Marker missing "+(i.l-1)+" of "+i.length+" "+i[i.l-1].toString(16));if(t&&t.sheetRows)n=n.slice(0,t.sheetRows);t.DBF=v;return n}function s(e,r){var t=r||{};if(!t.dateNF)t.dateNF="yyyymmdd";var a=Za(i(e,t),t);a["!cols"]=t.DBF.map(function(e){return{wch:e.len,DBF:e}});delete t.DBF;return a}function f(e,r){try{var t=Ka(s(e,r),r);t.bookType="dbf";return t}catch(a){if(r&&r.WTF)throw a}return{SheetNames:[],Sheets:{}}}var o={B:8,C:250,L:1,D:8,"?":0,"":0};function c(i,s){var f=s||{};var c=r;if(+f.codepage>=0)l(+f.codepage);if(f.type=="string")throw new Error("Cannot write DBF to JS string");var h=Ea();var u=Dk(i,{header:1,raw:true,cellDates:true});var d=u[0],v=u.slice(1),p=i["!cols"]||[];var m=0,g=0,b=0,w=1;for(m=0;m<d.length;++m){if(((p[m]||{}).DBF||{}).name){d[m]=p[m].DBF.name;++b;continue}if(d[m]==null)continue;++b;if(typeof d[m]==="number")d[m]=d[m].toString(10);if(typeof d[m]!=="string")throw new Error("DBF Invalid column name "+d[m]+" |"+typeof d[m]+"|");if(d.indexOf(d[m])!==m)for(g=0;g<1024;++g)if(d.indexOf(d[m]+"_"+g)==-1){d[m]+="_"+g;break}}var k=Ga(i["!ref"]);var T=[];var A=[];var y=[];for(m=0;m<=k.e.c-k.s.c;++m){var E="",C="",_=0;var S=[];for(g=0;g<v.length;++g){if(v[g][m]!=null)S.push(v[g][m])}if(S.length==0||d[m]==null){T[m]="?";continue}for(g=0;g<S.length;++g){switch(typeof S[g]){case"number":C="B";break;case"string":C="C";break;case"boolean":C="L";break;case"object":C=S[g]instanceof Date?"D":"C";break;default:C="C";}_=Math.max(_,(typeof a!=="undefined"&&typeof S[g]=="string"?a.utils.encode(t,S[g]):String(S[g])).length);E=E&&E!=C?"C":C}if(_>250)_=250;C=((p[m]||{}).DBF||{}).type;if(C=="C"){if(p[m].DBF.len>_)_=p[m].DBF.len}if(E=="B"&&C=="N"){E="N";y[m]=p[m].DBF.dec;_=p[m].DBF.len}A[m]=E=="C"||C=="N"?_:o[E]||0;w+=A[m];T[m]=E}var x=h.next(32);x._W(4,318902576);x._W(4,v.length);x._W(2,296+32*b);x._W(2,w);for(m=0;m<4;++m)x._W(4,0);var O=+n[r]||3;x._W(4,0|O<<8);if(e[O]!=+f.codepage){if(f.codepage)console.error("DBF Unsupported codepage "+r+", using 1252");r=1252}for(m=0,g=0;m<d.length;++m){if(d[m]==null)continue;var R=h.next(32);var I=(d[m].slice(-10)+"\0\0\0\0\0\0\0\0\0\0\0").slice(0,11);R._W(1,I,"sbcs");R._W(1,T[m]=="?"?"C":T[m],"sbcs");R._W(4,g);R._W(1,A[m]||o[T[m]]||0);R._W(1,y[m]||0);R._W(1,2);R._W(4,0);R._W(1,0);R._W(4,0);R._W(4,0);g+=A[m]||o[T[m]]||0}var N=h.next(264);N._W(4,13);for(m=0;m<65;++m)N._W(4,0);for(m=0;m<v.length;++m){var F=h.next(w);F._W(1,0);for(g=0;g<d.length;++g){if(d[g]==null)continue;switch(T[g]){case"L":F._W(1,v[m][g]==null?63:v[m][g]?84:70);break;case"B":F._W(8,v[m][g]||0,"f");break;case"N":var D="0";if(typeof v[m][g]=="number")D=v[m][g].toFixed(y[g]||0);if(D.length>A[g])D=D.slice(0,A[g]);for(b=0;b<A[g]-D.length;++b)F._W(1,32);F._W(1,D,"sbcs");break;case"D":if(!v[m][g])F._W(8,"00000000","sbcs");else{F._W(4,("0000"+v[m][g].getFullYear()).slice(-4),"sbcs");F._W(2,("00"+(v[m][g].getMonth()+1)).slice(-2),"sbcs");F._W(2,("00"+v[m][g].getDate()).slice(-2),"sbcs")}break;case"C":var P=F.l;var L=String(v[m][g]!=null?v[m][g]:"").slice(0,A[g]);F._W(1,L,"cpstr");P+=A[g]-F.l;for(b=0;b<P;++b)F._W(1,32);break;}}}r=c;h.next(1)._W(1,26);return h.end()}return{to_workbook:f,to_sheet:s,from_sheet:c}}();var Xl=function(){var e={AA:"Ã€",BA:"Ã",CA:"Ã‚",DA:195,HA:"Ã„",JA:197,AE:"Ãˆ",BE:"Ã‰",CE:"ÃŠ",HE:"Ã‹",AI:"ÃŒ",BI:"Ã",CI:"ÃŽ",HI:"Ã",AO:"Ã’",BO:"Ã“",CO:"Ã”",DO:213,HO:"Ã–",AU:"Ã™",BU:"Ãš",CU:"Ã›",HU:"Ãœ",Aa:"Ã ",Ba:"Ã¡",Ca:"Ã¢",Da:227,Ha:"Ã¤",Ja:229,Ae:"Ã¨",Be:"Ã©",Ce:"Ãª",He:"Ã«",Ai:"Ã¬",Bi:"Ã­",Ci:"Ã®",Hi:"Ã¯",Ao:"Ã²",Bo:"Ã³",Co:"Ã´",Do:245,Ho:"Ã¶",Au:"Ã¹",Bu:"Ãº",Cu:"Ã»",Hu:"Ã¼",KC:"Ã‡",Kc:"Ã§",q:"Ã¦",z:"Å“",a:"Ã†",j:"Å’",DN:209,Dn:241,Hy:255,S:169,c:170,R:174,"B ":180,0:176,1:177,2:178,3:179,5:181,6:182,7:183,Q:185,k:186,b:208,i:216,l:222,s:240,y:248,"!":161,'"':162,"#":163,"(":164,"%":165,"'":167,"H ":168,"+":171,";":187,"<":188,"=":189,">":190,"?":191,"{":223};var r=new RegExp("N("+nr(e).join("|").replace(/\|\|\|/,"|\\||").replace(/([?()+])/g,"\\$1")+"|\\|)","gm");var t=function(r,t){var a=e[t];return typeof a=="number"?m(a):a};var n=function(e,r,t){var a=r.charCodeAt(0)-32<<4|t.charCodeAt(0)-48;return a==59?e:m(a)};e["|"]=254;var i=function(e){return e.replace(/\n/g," :").replace(/\r/g," =")};function s(e,r){switch(r.type){case"base64":return f(E(e),r);case"binary":return f(e,r);case"buffer":return f(C&&Buffer.isBuffer(e)?e.toString("binary"):N(e),r);case"array":return f(wr(e),r);}throw new Error("Unrecognized type "+r.type)}function f(e,i){var s=e.split(/[\n\r]+/),f=-1,o=-1,c=0,h=0,u=[];var d=[];var v=null;var p={},m=[],g=[],b=[];var w=0,k;var T={Workbook:{WBProps:{},Names:[]}};if(+i.codepage>=0)l(+i.codepage);for(;c!==s.length;++c){w=0;var A=s[c].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g,n).replace(r,t);var y=A.replace(/;;/g,"\0").split(";").map(function(e){return e.replace(/\u0000/g,";")});var E=y[0],C;if(A.length>0)switch(E){case"ID":break;case"E":break;case"B":break;case"O":for(h=1;h<y.length;++h)switch(y[h].charAt(0)){case"V":{var _=parseInt(y[h].slice(1),10);if(_>=1&&_<=4)T.Workbook.WBProps.date1904=true}break;}break;case"W":break;case"P":switch(y[1].charAt(0)){case"P":d.push(A.slice(3).replace(/;;/g,";"));break;}break;case"NN":{var S={Sheet:0};for(h=1;h<y.length;++h)switch(y[h].charAt(0)){case"N":S.Name=y[h].slice(1);break;case"E":S.Ref=(i&&i.sheet||"Sheet1")+"!"+Qh(y[h].slice(1));break;}T.Workbook.Names.push(S)}break;case"C":var x=false,O=false,R=false,I=false,N=-1,F=-1,D="",P="z";var L="";for(h=1;h<y.length;++h)switch(y[h].charAt(0)){case"A":L=y[h].slice(1);break;case"X":o=parseInt(y[h].slice(1),10)-1;O=true;break;case"Y":f=parseInt(y[h].slice(1),10)-1;if(!O)o=0;for(k=u.length;k<=f;++k)u[k]=[];break;case"K":C=y[h].slice(1);if(C.charAt(0)==='"'){C=C.slice(1,C.length-1);P="s"}else if(C==="TRUE"||C==="FALSE"){C=C==="TRUE";P="b"}else if(!isNaN(Ar(C))){C=Ar(C);P="n";if(v!==null&&Pe(v)&&i.cellDates){C=dr(T.Workbook.WBProps.date1904?C+1462:C);P=typeof C=="number"?"n":"d"}}if(typeof a!=="undefined"&&typeof C=="string"&&(i||{}).type!="string"&&(i||{}).codepage)C=a.utils.decode(i.codepage,C);x=true;break;case"E":I=true;D=Qh(y[h].slice(1),{r:f,c:o});break;case"S":R=true;break;case"G":break;case"R":N=parseInt(y[h].slice(1),10)-1;break;case"C":F=parseInt(y[h].slice(1),10)-1;break;default:if(i&&i.WTF)throw new Error("SYLK bad record "+A);}if(x){if(!u[f][o])u[f][o]={t:P,v:C};else{u[f][o].t=P;u[f][o].v=C}if(v)u[f][o].z=v;if(i.cellText!==false&&v)u[f][o].w=We(u[f][o].z,u[f][o].v,{date1904:T.Workbook.WBProps.date1904});v=null}if(R){if(I)throw new Error("SYLK shared formula cannot have own formula");var M=N>-1&&u[N][F];if(!M||!M[1])throw new Error("SYLK shared formula cannot find base");D=tu(M[1],{r:f-N,c:o-F})}if(D){if(!u[f][o])u[f][o]={t:"n",f:D};else u[f][o].f=D}if(L){if(!u[f][o])u[f][o]={t:"z"};u[f][o].c=[{a:"SheetJSYLK",t:L}]}break;case"F":var U=0;for(h=1;h<y.length;++h)switch(y[h].charAt(0)){case"X":o=parseInt(y[h].slice(1),10)-1;++U;break;case"Y":f=parseInt(y[h].slice(1),10)-1;for(k=u.length;k<=f;++k)u[k]=[];break;case"M":w=parseInt(y[h].slice(1),10)/20;break;case"F":break;case"G":break;case"P":v=d[parseInt(y[h].slice(1),10)];break;case"S":break;case"D":break;case"N":break;case"W":b=y[h].slice(1).split(" ");for(k=parseInt(b[0],10);k<=parseInt(b[1],10);++k){w=parseInt(b[2],10);g[k-1]=w===0?{hidden:true}:{wch:w}}break;case"C":o=parseInt(y[h].slice(1),10)-1;if(!g[o])g[o]={};break;case"R":f=parseInt(y[h].slice(1),10)-1;if(!m[f])m[f]={};if(w>0){m[f].hpt=w;m[f].hpx=sc(w)}else if(w===0)m[f].hidden=true;break;default:if(i&&i.WTF)throw new Error("SYLK bad record "+A);}if(U<1)v=null;break;default:if(i&&i.WTF)throw new Error("SYLK bad record "+A);}}if(m.length>0)p["!rows"]=m;if(g.length>0)p["!cols"]=g;g.forEach(function(e){tc(e)});if(i&&i.sheetRows)u=u.slice(0,i.sheetRows);return[u,p,T]}function o(e,r){var t=s(e,r);var a=t[0],n=t[1],i=t[2];var f=kr(r);f.date1904=(((i||{}).Workbook||{}).WBProps||{}).date1904;var l=Za(a,f);nr(n).forEach(function(e){l[e]=n[e]});var o=Ka(l,r);nr(i).forEach(function(e){o[e]=i[e]});o.bookType="sylk";return o}function c(e,r,t,a,n,i){var s="C;Y"+(t+1)+";X"+(a+1)+";K";switch(e.t){case"n":s+=e.v||0;if(e.f&&!e.F)s+=";E"+ru(e.f,{r:t,c:a});break;case"b":s+=e.v?"TRUE":"FALSE";break;case"e":s+=e.w||e.v;break;case"d":s+=ur(br(e.v,i),i);break;case"s":s+='"'+(e.v==null?"":String(e.v)).replace(/"/g,"").replace(/;/g,";;")+'"';break;}return s}function h(e,r,t){var a="C;Y"+(r+1)+";X"+(t+1)+";A";a+=i(e.map(function(e){return e.t}).join(""));return a}function u(e,r){r.forEach(function(r,t){var a="F;W"+(t+1)+" "+(t+1)+" ";if(r.hidden)a+="0";else{if(typeof r.width=="number"&&!r.wpx)r.wpx=Jo(r.width);if(typeof r.wpx=="number"&&!r.wch)r.wch=qo(r.wpx);if(typeof r.wch=="number")a+=Math.round(r.wch)}if(a.charAt(a.length-1)!=" ")e.push(a)})}function d(e,r){r.forEach(function(r,t){var a="F;";if(r.hidden)a+="M0;";else if(r.hpt)a+="M"+20*r.hpt+";";else if(r.hpx)a+="M"+20*ic(r.hpx)+";";if(a.length>2)e.push(a+"R"+(t+1))})}function v(e,r,t){if(!r)r={};r._formats=["General"];var a=["ID;PSheetJS;N;E"],n=[];var i=Ga(e["!ref"]),s;var f=e["!data"]!=null;var l="\r\n";var o=(((t||{}).Workbook||{}).WBProps||{}).date1904;var v="General";a.push("P;PGeneral");var p=i.s.r,m=i.s.c,g=[];for(p=i.s.r;p<=i.e.r;++p){if(f&&!e["!data"][p])continue;g=[];for(m=i.s.c;m<=i.e.c;++m){s=f?e["!data"][p][m]:e[Pa(m)+Ia(p)];if(!s||!s.c)continue;g.push(h(s.c,p,m))}if(g.length)n.push(g.join(l))}for(p=i.s.r;p<=i.e.r;++p){if(f&&!e["!data"][p])continue;g=[];for(m=i.s.c;m<=i.e.c;++m){s=f?e["!data"][p][m]:e[Pa(m)+Ia(p)];if(!s||s.v==null&&(!s.f||s.F))continue;if((s.z||(s.t=="d"?q[14]:"General"))!=v){var b=r._formats.indexOf(s.z);if(b==-1){r._formats.push(s.z);b=r._formats.length-1;a.push("P;P"+s.z.replace(/;/g,";;"))}g.push("F;P"+b+";Y"+(p+1)+";X"+(m+1))}g.push(c(s,e,p,m,r,o))}n.push(g.join(l))}a.push("F;P0;DG0G8;M255");if(e["!cols"])u(a,e["!cols"]);if(e["!rows"])d(a,e["!rows"]);a.push("B;Y"+(i.e.r-i.s.r+1)+";X"+(i.e.c-i.s.c+1)+";D"+[i.s.c,i.s.r,i.e.c,i.e.r].join(" "));a.push("O;L;D;B"+(o?";V4":"")+";K47;G100 0.001");delete r._formats;return a.join(l)+l+n.join(l)+l+"E"+l}return{to_workbook:o,from_sheet:v}}();var Gl=function(){function e(e,t){switch(t.type){case"base64":return r(E(e),t);case"binary":return r(e,t);case"buffer":return r(C&&Buffer.isBuffer(e)?e.toString("binary"):N(e),t);case"array":return r(wr(e),t);}throw new Error("Unrecognized type "+t.type)}function r(e,r){var t=e.split("\n"),a=-1,n=-1,i=0,s=[];for(;i!==t.length;++i){if(t[i].trim()==="BOT"){s[++a]=[];n=0;continue}if(a<0)continue;var f=t[i].trim().split(",");var l=f[0],o=f[1];++i;var c=t[i]||"";while((c.match(/["]/g)||[]).length&1&&i<t.length-1)c+="\n"+t[++i];c=c.trim();switch(+l){case-1:if(c==="BOT"){s[++a]=[];n=0;continue}else if(c!=="EOD")throw new Error("Unrecognized DIF special command "+c);break;case 0:if(c==="TRUE")s[a][n]=true;else if(c==="FALSE")s[a][n]=false;else if(!isNaN(Ar(o)))s[a][n]=Ar(o);else if(!isNaN(Rr(o).getDate())){s[a][n]=br(o);if(!(r&&r.UTC)){s[a][n]=Nr(s[a][n])}}else s[a][n]=o;++n;break;case 1:c=c.slice(1,c.length-1);c=c.replace(/""/g,'"');if(w&&c&&c.match(/^=".*"$/))c=c.slice(2,-1);s[a][n++]=c!==""?c:null;break;}if(c==="EOD")break}if(r&&r.sheetRows)s=s.slice(0,r.sheetRows);return s}function t(r,t){return Za(e(r,t),t)}function a(e,r){var a=Ka(t(e,r),r);a.bookType="dif";return a}function n(e,r){return"0,"+String(e)+"\r\n"+r}function i(e){return'1,0\r\n"'+e.replace(/"/g,'""')+'"'}function s(e){var r=w;var t=Ga(e["!ref"]);var a=e["!data"]!=null;var s=['TABLE\r\n0,1\r\n"sheetjs"\r\n',"VECTORS\r\n0,"+(t.e.r-t.s.r+1)+'\r\n""\r\n',"TUPLES\r\n0,"+(t.e.c-t.s.c+1)+'\r\n""\r\n','DATA\r\n0,0\r\n""\r\n'];for(var f=t.s.r;f<=t.e.r;++f){var l=a?e["!data"][f]:[];var o="-1,0\r\nBOT\r\n";for(var c=t.s.c;c<=t.e.c;++c){var h=a?l&&l[c]:e[Wa({r:f,c:c})];if(h==null){o+='1,0\r\n""\r\n';continue}switch(h.t){case"n":if(r){if(h.w!=null)o+="0,"+h.w+"\r\nV";else if(h.v!=null)o+=n(h.v,"V");else if(h.f!=null&&!h.F)o+=i("="+h.f);else o+='1,0\r\n""'}else{if(h.v==null)o+='1,0\r\n""';else o+=n(h.v,"V")}break;case"b":o+=h.v?n(1,"TRUE"):n(0,"FALSE");break;case"s":o+=i(!r||isNaN(+h.v)?h.v:'="'+h.v+'"');break;case"d":if(!h.w)h.w=We(h.z||q[14],ur(br(h.v)));if(r)o+=n(h.w,"V");else o+=i(h.w);break;default:o+='1,0\r\n""';}o+="\r\n"}s.push(o)}return s.join("")+"-1,0\r\nEOD"}return{to_workbook:a,to_sheet:t,from_sheet:s}}();var $l=function(){function e(e){return e.replace(/\\b/g,"\\").replace(/\\c/g,":").replace(/\\n/g,"\n")}function r(e){return e.replace(/\\/g,"\\b").replace(/:/g,"\\c").replace(/\n/g,"\\n")}function t(r,t){var a=r.split("\n"),n=-1,i=-1,s=0,f=[];for(;s!==a.length;++s){var l=a[s].trim().split(":");if(l[0]!=="cell")continue;var o=Ba(l[1]);if(f.length<=o.r)for(n=f.length;n<=o.r;++n)if(!f[n])f[n]=[];n=o.r;i=o.c;switch(l[2]){case"t":f[n][i]=e(l[3]);break;case"v":f[n][i]=+l[3];break;case"vtf":var c=l[l.length-1];case"vtc":switch(l[3]){case"nl":f[n][i]=+l[4]?true:false;break;default:f[n][i]=+l[4];break;}if(l[2]=="vtf")f[n][i]=[f[n][i],c];}}if(t&&t.sheetRows)f=f.slice(0,t.sheetRows);return f}function a(e,r){return Za(t(e,r),r)}function n(e,r){return Ka(a(e,r),r)}var i=["socialcalc:version:1.5","MIME-Version: 1.0","Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join("\n");var s=["--SocialCalcSpreadsheetControlSave","Content-type: text/plain; charset=UTF-8"].join("\n")+"\n";var f=["# SocialCalc Spreadsheet Control Save","part:sheet"].join("\n");var l="--SocialCalcSpreadsheetControlSave--";function o(e){if(!e||!e["!ref"])return"";var t=[],a=[],n,i="";var s=za(e["!ref"]);var f=e["!data"]!=null;for(var l=s.s.r;l<=s.e.r;++l){for(var o=s.s.c;o<=s.e.c;++o){i=Wa({r:l,c:o});n=f?(e["!data"][l]||[])[o]:e[i];if(!n||n.v==null||n.t==="z")continue;a=["cell",i,"t"];switch(n.t){case"s":;case"str":a.push(r(n.v));break;case"n":if(!n.f){a[2]="v";a[3]=n.v}else{a[2]="vtf";a[3]="n";a[4]=n.v;a[5]=r(n.f)}break;case"b":a[2]="vt"+(n.f?"f":"c");a[3]="nl";a[4]=n.v?"1":"0";a[5]=r(n.f||(n.v?"TRUE":"FALSE"));break;case"d":var c=ur(br(n.v));a[2]="vtc";a[3]="nd";a[4]=""+c;a[5]=n.w||We(n.z||q[14],c);break;case"e":continue;}t.push(a.join(":"))}}t.push("sheet:c:"+(s.e.c-s.s.c+1)+":r:"+(s.e.r-s.s.r+1)+":tvf:1");t.push("valueformat:1:text-wiki");return t.join("\n")}function c(e){return[i,s,f,s,o(e),l].join("\n")}return{to_workbook:n,to_sheet:a,from_sheet:c}}();var jl=function(){function e(e,r,t,a,n){if(n.raw)r[t][a]=e;else if(e===""){}else if(e==="TRUE")r[t][a]=true;else if(e==="FALSE")r[t][a]=false;else if(!isNaN(Ar(e)))r[t][a]=Ar(e);else if(!isNaN(Rr(e).getDate()))r[t][a]=br(e);else r[t][a]=e}function r(r,t){var a=t||{};var n=[];if(!r||r.length===0)return n;var i=r.split(/[\r\n]/);var s=i.length-1;while(s>=0&&i[s].length===0)--s;var f=10,l=0;var o=0;for(;o<=s;++o){l=i[o].indexOf(" ");if(l==-1)l=i[o].length;else l++;f=Math.max(f,l)}for(o=0;o<=s;++o){n[o]=[];var c=0;e(i[o].slice(0,f).trim(),n,o,c,a);for(c=1;c<=(i[o].length-f)/10+1;++c)e(i[o].slice(f+(c-1)*10,f+c*10).trim(),n,o,c,a)}if(a.sheetRows)n=n.slice(0,a.sheetRows);return n}var t={44:",",9:"\t",59:";",124:"|"};var n={44:3,9:2,59:1,124:0};function i(e){var r={},a=false,i=0,s=0;for(;i<e.length;++i){if((s=e.charCodeAt(i))==34)a=!a;else if(!a&&s in t)r[s]=(r[s]||0)+1}s=[];for(i in r)if(Object.prototype.hasOwnProperty.call(r,i)){s.push([r[i],i])}if(!s.length){r=n;for(i in r)if(Object.prototype.hasOwnProperty.call(r,i)){s.push([r[i],i])}}s.sort(function(e,r){return e[0]-r[0]||n[e[1]]-n[r[1]]});return t[s.pop()[1]]||44}function s(e,r){var t=r||{};var a="";if(b!=null&&t.dense==null)t.dense=b;var n={};if(t.dense)n["!data"]=[];var s={s:{c:0,r:0},e:{c:0,r:0}};if(e.slice(0,4)=="sep="){if(e.charCodeAt(5)==13&&e.charCodeAt(6)==10){a=e.charAt(4);e=e.slice(7)}else if(e.charCodeAt(5)==13||e.charCodeAt(5)==10){a=e.charAt(4);e=e.slice(6)}else a=i(e.slice(0,1024))}else if(t&&t.FS)a=t.FS;else a=i(e.slice(0,1024));var f=0,l=0,o=0;var c=0,h=0,u=a.charCodeAt(0),d=false,v=0,p=e.charCodeAt(0);var m=t.dateNF!=null?je(t.dateNF):null;function g(){var r=e.slice(c,h);if(r.slice(-1)=="\r")r=r.slice(0,-1);var a={};if(r.charAt(0)=='"'&&r.charAt(r.length-1)=='"')r=r.slice(1,-1).replace(/""/g,'"');if(t.cellText!==false)a.w=r;if(r.length===0)a.t="z";else if(t.raw){a.t="s";a.v=r}else if(r.trim().length===0){a.t="s";a.v=r}else if(r.charCodeAt(0)==61){if(r.charCodeAt(1)==34&&r.charCodeAt(r.length-1)==34){a.t="s";a.v=r.slice(2,-1).replace(/""/g,'"')}else if(nu(r)){a.t="n";a.f=r.slice(1)}else{a.t="s";a.v=r}}else if(r=="TRUE"){a.t="b";a.v=true}else if(r=="FALSE"){a.t="b";a.v=false}else if(!isNaN(o=Ar(r))){a.t="n";a.v=o}else if(!isNaN((o=Rr(r)).getDate())||m&&r.match(m)){a.z=t.dateNF||q[14];if(m&&r.match(m)){var i=Ke(r,t.dateNF,r.match(m)||[]);o=br(i);if(t&&t.UTC===false)o=Nr(o)}else if(t&&t.UTC===false)o=Nr(o);else if(t.cellText!==false&&t.dateNF)a.w=We(a.z,o);if(t.cellDates){a.t="d";a.v=o}else{a.t="n";a.v=ur(o)}if(!t.cellNF)delete a.z}else{a.t="s";a.v=r}if(a.t=="z"){}else if(t.dense){if(!n["!data"][f])n["!data"][f]=[];n["!data"][f][l]=a}else n[Wa({c:l,r:f})]=a;c=h+1;p=e.charCodeAt(c);if(s.e.c<l)s.e.c=l;if(s.e.r<f)s.e.r=f;if(v==u)++l;else{l=0;++f;if(t.sheetRows&&t.sheetRows<=f)return true}}e:for(;h<e.length;++h)switch(v=e.charCodeAt(h)){case 34:if(p===34)d=!d;break;case 13:if(d)break;if(e.charCodeAt(h+1)==10)++h;case u:;case 10:if(!d&&g())break e;break;default:break;}if(h-c>0)g();n["!ref"]=Ha(s);return n}function f(e,t){if(!(t&&t.PRN))return s(e,t);if(t.FS)return s(e,t);if(e.slice(0,4)=="sep=")return s(e,t);if(e.indexOf("\t")>=0||e.indexOf(",")>=0||e.indexOf(";")>=0)return s(e,t);return Za(r(e,t),t)}function l(e,r){var t="",n=r.type=="string"?[0,0,0,0]:lk(e,r);switch(r.type){case"base64":t=E(e);break;case"binary":t=e;break;case"buffer":if(r.codepage==65001)t=e.toString("utf8");else if(r.codepage&&typeof a!=="undefined")t=a.utils.decode(r.codepage,e);else t=C&&Buffer.isBuffer(e)?e.toString("binary"):N(e);break;case"array":t=wr(e);break;case"string":t=e;break;default:throw new Error("Unrecognized type "+r.type);}if(n[0]==239&&n[1]==187&&n[2]==191)t=wt(t.slice(3));else if(r.type!="string"&&r.type!="buffer"&&r.codepage==65001)t=wt(t);else if(r.type=="binary"&&typeof a!=="undefined"&&r.codepage)t=a.utils.decode(r.codepage,a.utils.encode(28591,t));if(t.slice(0,19)=="socialcalc:version:")return $l.to_sheet(r.type=="string"?t:wt(t),r);return f(t,r)}function o(e,r){return Ka(l(e,r),r)}function c(e){var r=[];var t=Ga(e["!ref"]),a;var n=e["!data"]!=null;for(var i=t.s.r;i<=t.e.r;++i){var s=[];for(var f=t.s.c;f<=t.e.c;++f){var l=Wa({r:i,c:f});a=n?(e["!data"][i]||[])[f]:e[l];if(!a||a.v==null){s.push("          ");continue}var o=(a.w||(ja(a),a.w)||"").slice(0,10);while(o.length<10)o+=" ";s.push(o+(f===0?" ":""))}r.push(s.join(""))}return r.join("\n")}return{to_workbook:o,to_sheet:l,from_sheet:c}}();function Kl(e,r){var t=r||{},a=!!t.WTF;t.WTF=true;try{var n=Xl.to_workbook(e,t);t.WTF=a;return n}catch(i){t.WTF=a;if(!i.message.match(/SYLK bad record ID/)&&a)throw i;return jl.to_workbook(e,r)}}var Yl=function(){function e(e,r,t){if(!e)return;ka(e,e.l||0);var a=t.Enum||V;while(e.l<e.length){var n=e._R(2);var i=a[n]||a[65535];var s=e._R(2);var f=e.l+s;var l=i.f&&i.f(e,s,t);e.l=f;if(r(l,i,n))return}}function r(e,r){switch(r.type){case"base64":return a(R(E(e)),r);case"binary":return a(R(e),r);case"buffer":;case"array":return a(e,r);}throw"Unsupported type "+r.type}var t=["mmmm","dd-mmm-yyyy","dd-mmm","mmm-yyyy","@","mm/dd","hh:mm:ss AM/PM","hh:mm AM/PM","mm/dd/yyyy","mm/dd","hh:mm:ss","hh:mm"];function a(r,a){if(!r)return r;var n=a||{};if(b!=null&&n.dense==null)n.dense=b;var i={},s="Sheet1",f="",l=0;var o={},c=[],h=[],u=[];if(n.dense)u=i["!data"]=[];var d={s:{r:0,c:0},e:{r:0,c:0}};var v=n.sheetRows||0;var p={};if(r[4]==81&&r[5]==80&&r[6]==87)return $(r,a);if(r[2]==0){if(r[3]==8||r[3]==9){if(r.length>=16&&r[14]==5&&r[15]===108)throw new Error("Unsupported Works 3 for Mac file")}}if(r[2]==2){n.Enum=V;e(r,function(e,r,a){switch(a){case 0:n.vers=e;if(e>=4096)n.qpro=true;break;case 255:n.vers=e;n.works=true;break;case 6:d=e;break;case 204:if(e)f=e;break;case 222:f=e;break;case 15:;case 51:if((!n.qpro&&!n.works||a==51)&&e[1].v.charCodeAt(0)<48)e[1].v=e[1].v.slice(1);if(n.works||n.works2)e[1].v=e[1].v.replace(/\r\n/g,"\n");case 13:;case 14:;case 16:if((e[2]&112)==112&&(e[2]&15)>1&&(e[2]&15)<15){e[1].z=n.dateNF||t[(e[2]&15)-1]||q[14];if(n.cellDates){e[1].v=dr(e[1].v);e[1].t=typeof e[1].v=="number"?"n":"d"}}if(n.qpro){if(e[3]>l){i["!ref"]=Ha(d);o[s]=i;c.push(s);i={};if(n.dense)u=i["!data"]=[];d={s:{r:0,c:0},e:{r:0,c:0}};l=e[3];s=f||"Sheet"+(l+1);f=""}}var h=n.dense?(u[e[0].r]||[])[e[0].c]:i[Wa(e[0])];if(h){h.t=e[1].t;h.v=e[1].v;if(e[1].z!=null)h.z=e[1].z;if(e[1].f!=null)h.f=e[1].f;p=h;break}if(n.dense){if(!u[e[0].r])u[e[0].r]=[];u[e[0].r][e[0].c]=e[1]}else i[Wa(e[0])]=e[1];p=e[1];break;case 21509:n.works2=true;break;case 21506:{if(e==5281){p.z="hh:mm:ss";if(n.cellDates&&p.t=="n"){p.v=dr(p.v);p.t=typeof p.v=="number"?"n":"d"}}}break;}},n)}else if(r[2]==26||r[2]==14){n.Enum=X;if(r[2]==14){n.qpro=true;r.l=0}e(r,function(e,r,t){switch(t){case 204:s=e;break;case 22:if(e[1].v.charCodeAt(0)<48)e[1].v=e[1].v.slice(1);e[1].v=e[1].v.replace(/\x0F./g,function(e){return String.fromCharCode(e.charCodeAt(1)-32)}).replace(/\r\n/g,"\n");case 23:;case 24:;case 25:;case 37:;case 39:;case 40:if(e[3]>l){i["!ref"]=Ha(d);o[s]=i;c.push(s);i={};if(n.dense)u=i["!data"]=[];d={s:{r:0,c:0},e:{r:0,c:0}};l=e[3];s="Sheet"+(l+1)}if(v>0&&e[0].r>=v)break;if(n.dense){if(!u[e[0].r])u[e[0].r]=[];u[e[0].r][e[0].c]=e[1]}else i[Wa(e[0])]=e[1];if(d.e.c<e[0].c)d.e.c=e[0].c;if(d.e.r<e[0].r)d.e.r=e[0].r;break;case 27:if(e[14e3])h[e[14e3][0]]=e[14e3][1];break;case 1537:h[e[0]]=e[1];if(e[0]==l)s=e[1];break;default:break;}},n)}else throw new Error("Unrecognized LOTUS BOF "+r[2]);i["!ref"]=Ha(d);o[f||s]=i;c.push(f||s);if(!h.length)return{SheetNames:c,Sheets:o};var m={},g=[];for(var w=0;w<h.length;++w)if(o[c[w]]){g.push(h[w]||c[w]);m[h[w]]=o[h[w]]||o[c[w]]}else{g.push(h[w]);m[h[w]]={"!ref":"A1"}}return{SheetNames:g,Sheets:m}}function n(e,r){var t=r||{};if(+t.codepage>=0)l(+t.codepage);if(t.type=="string")throw new Error("Cannot write WK1 to JS string");var a=Ea();var n=Ga(e["!ref"]);var i=e["!data"]!=null;var f=[];qg(a,0,s(1030));qg(a,6,c(n));var o=Math.min(n.e.r,8191);for(var h=n.s.c;h<=n.e.c;++h)f[h]=Pa(h);for(var u=n.s.r;u<=o;++u){var d=Ia(u);for(h=n.s.c;h<=n.e.c;++h){var p=i?(e["!data"][u]||[])[h]:e[f[h]+d];if(!p||p.t=="z")continue;switch(p.t){case"n":if((p.v|0)==p.v&&p.v>=-32768&&p.v<=32767)qg(a,13,g(u,h,p));else qg(a,14,k(u,h,p));break;case"d":var m=ur(p.v);if((m|0)==m&&m>=-32768&&m<=32767)qg(a,13,g(u,h,{t:"n",v:m,z:p.z||q[14]}));else qg(a,14,k(u,h,{t:"n",v:m,z:p.z||q[14]}));break;default:var b=ja(p);qg(a,15,v(u,h,b.slice(0,239)));}}}qg(a,1);return a.end()}function i(e,r){var t=r||{};if(+t.codepage>=0)l(+t.codepage);if(t.type=="string")throw new Error("Cannot write WK3 to JS string");var a=Ea();qg(a,0,f(e));for(var n=0,i=0;n<e.SheetNames.length;++n)if((e.Sheets[e.SheetNames[n]]||{})["!ref"])qg(a,27,H(e.SheetNames[n],i++));var s=0;for(n=0;n<e.SheetNames.length;++n){var o=e.Sheets[e.SheetNames[n]];if(!o||!o["!ref"])continue;var c=Ga(o["!ref"]);var h=o["!data"]!=null;var u=[];var d=Math.min(c.e.r,8191);for(var v=c.s.r;v<=d;++v){var p=Ia(v);for(var m=c.s.c;m<=c.e.c;++m){if(v===c.s.r)u[m]=Pa(m);var g=u[m]+p;var b=h?(o["!data"][v]||[])[m]:o[g];if(!b||b.t=="z")continue;if(b.t=="n"){qg(a,23,F(v,m,s,b.v))}else{var w=ja(b);qg(a,22,O(v,m,s,w.slice(0,239)))}}}++s}qg(a,1);return a.end()}function s(e){var r=Aa(2);r._W(2,e);return r}function f(e){var r=Aa(26);r._W(2,4096);r._W(2,4);r._W(4,0);var t=0,a=0,n=0;for(var i=0;i<e.SheetNames.length;++i){var s=e.SheetNames[i];var f=e.Sheets[s];if(!f||!f["!ref"])continue;++n;var l=za(f["!ref"]);if(t<l.e.r)t=l.e.r;if(a<l.e.c)a=l.e.c}if(t>8191)t=8191;r._W(2,t);r._W(1,n);r._W(1,a);r._W(2,0);r._W(2,0);r._W(1,1);r._W(1,2);r._W(4,0);r._W(4,0);return r}function o(e,r,t){var a={s:{c:0,r:0},e:{c:0,r:0}};if(r==8&&t.qpro){a.s.c=e._R(1);e.l++;a.s.r=e._R(2);a.e.c=e._R(1);e.l++;a.e.r=e._R(2);return a}a.s.c=e._R(2);a.s.r=e._R(2);
if(r==12&&t.qpro)e.l+=2;a.e.c=e._R(2);a.e.r=e._R(2);if(r==12&&t.qpro)e.l+=2;if(a.s.c==65535)a.s.c=a.e.c=a.s.r=a.e.r=0;return a}function c(e){var r=Aa(8);r._W(2,e.s.c);r._W(2,e.s.r);r._W(2,e.e.c);r._W(2,e.e.r);return r}function h(e,r,t){var a=[{c:0,r:0},{t:"n",v:0},0,0];if(t.qpro&&t.vers!=20768){a[0].c=e._R(1);a[3]=e._R(1);a[0].r=e._R(2);e.l+=2}else if(t.works){a[0].c=e._R(2);a[0].r=e._R(2);a[2]=e._R(2)}else{a[2]=e._R(1);a[0].c=e._R(2);a[0].r=e._R(2)}return a}function u(e){if(e.z&&Pe(e.z)){return 240|(t.indexOf(e.z)+1||2)}return 255}function d(e,r,t){var a=e.l+r;var n=h(e,r,t);n[1].t="s";if((t.vers&65534)==20768){e.l++;var i=e._R(1);n[1].v=e._R(i,"utf8");return n}if(t.qpro)e.l++;n[1].v=e._R(a-e.l,"cstr");return n}function v(e,r,t){var a=Aa(7+t.length);a._W(1,255);a._W(2,r);a._W(2,e);a._W(1,39);for(var n=0;n<a.length;++n){var i=t.charCodeAt(n);a._W(1,i>=128?95:i)}a._W(1,0);return a}function p(e,r,t){var a=e.l+r;var n=h(e,r,t);n[1].t="s";if(t.vers==20768){var i=e._R(1);n[1].v=e._R(i,"utf8");return n}n[1].v=e._R(a-e.l,"cstr");return n}function m(e,r,t){var a=h(e,r,t);a[1].v=e._R(2,"i");return a}function g(e,r,t){var a=Aa(7);a._W(1,u(t));a._W(2,r);a._W(2,e);a._W(2,t.v,"i");return a}function w(e,r,t){var a=h(e,r,t);a[1].v=e._R(8,"f");return a}function k(e,r,t){var a=Aa(13);a._W(1,u(t));a._W(2,r);a._W(2,e);a._W(8,t.v,"f");return a}function T(e,r,t){var a=e.l+r;var n=h(e,r,t);n[1].v=e._R(8,"f");if(t.qpro)e.l=a;else{var i=e._R(2);_(e.slice(e.l,e.l+i),n);e.l+=i}return n}function A(e,r,t){var a=r&32768;r&=~32768;r=(a?e:0)+(r>=8192?r-16384:r);return(a?"":"$")+(t?Pa(r):Ia(r))}var y={31:["NA",0],33:["ABS",1],34:["TRUNC",1],35:["SQRT",1],36:["LOG",1],37:["LN",1],38:["PI",0],39:["SIN",1],40:["COS",1],41:["TAN",1],42:["ATAN2",2],43:["ATAN",1],44:["ASIN",1],45:["ACOS",1],46:["EXP",1],47:["MOD",2],49:["ISNA",1],50:["ISERR",1],51:["FALSE",0],52:["TRUE",0],53:["RAND",0],54:["DATE",3],63:["ROUND",2],64:["TIME",3],68:["ISNUMBER",1],69:["ISTEXT",1],70:["LEN",1],71:["VALUE",1],73:["MID",3],74:["CHAR",1],80:["SUM",69],81:["AVERAGEA",69],82:["COUNTA",69],83:["MINA",69],84:["MAXA",69],102:["UPPER",1],103:["LOWER",1],107:["PROPER",1],109:["TRIM",1],111:["T",1]};var C=["","","","","","","","","","+","-","*","/","^","=","<>","<=",">=","<",">","","","","","&","","","","","","",""];function _(e,r){ka(e,0);var t=[],a=0,n="",i="",s="",f="";while(e.l<e.length){var l=e[e.l++];switch(l){case 0:t.push(e._R(8,"f"));break;case 1:{i=A(r[0].c,e._R(2),true);n=A(r[0].r,e._R(2),false);t.push(i+n)}break;case 2:{var o=A(r[0].c,e._R(2),true);var c=A(r[0].r,e._R(2),false);i=A(r[0].c,e._R(2),true);n=A(r[0].r,e._R(2),false);t.push(o+c+":"+i+n)}break;case 3:if(e.l<e.length){console.error("WK1 premature formula end");return}break;case 4:t.push("("+t.pop()+")");break;case 5:t.push(e._R(2));break;case 6:{var h="";while(l=e[e.l++])h+=String.fromCharCode(l);t.push('"'+h.replace(/"/g,'""')+'"')}break;case 8:t.push("-"+t.pop());break;case 23:t.push("+"+t.pop());break;case 22:t.push("NOT("+t.pop()+")");break;case 20:;case 21:{f=t.pop();s=t.pop();t.push(["AND","OR"][l-20]+"("+s+","+f+")")}break;default:if(l<32&&C[l]){f=t.pop();s=t.pop();t.push(s+C[l]+f)}else if(y[l]){a=y[l][1];if(a==69)a=e[e.l++];if(a>t.length){console.error("WK1 bad formula parse 0x"+l.toString(16)+":|"+t.join("|")+"|");return}var u=t.slice(-a);t.length-=a;t.push(y[l][0]+"("+u.join(",")+")")}else if(l<=7)return console.error("WK1 invalid opcode "+l.toString(16));else if(l<=24)return console.error("WK1 unsupported op "+l.toString(16));else if(l<=30)return console.error("WK1 invalid opcode "+l.toString(16));else if(l<=115)return console.error("WK1 unsupported function opcode "+l.toString(16));else return console.error("WK1 unrecognized opcode "+l.toString(16));}}if(t.length==1)r[1].f=""+t[0];else console.error("WK1 bad formula parse |"+t.join("|")+"|")}function S(e){var r=[{c:0,r:0},{t:"n",v:0},0];r[0].r=e._R(2);r[3]=e[e.l++];r[0].c=e[e.l++];return r}function x(e,r){var t=S(e,r);t[1].t="s";t[1].v=e._R(r-4,"cstr");return t}function O(e,r,t,a){var n=Aa(6+a.length);n._W(2,e);n._W(1,t);n._W(1,r);n._W(1,39);for(var i=0;i<a.length;++i){var s=a.charCodeAt(i);n._W(1,s>=128?95:s)}n._W(1,0);return n}function I(e,r){var t=S(e,r);t[1].v=e._R(2);var a=t[1].v>>1;if(t[1].v&1){switch(a&7){case 0:a=(a>>3)*5e3;break;case 1:a=(a>>3)*500;break;case 2:a=(a>>3)/20;break;case 3:a=(a>>3)/200;break;case 4:a=(a>>3)/2e3;break;case 5:a=(a>>3)/2e4;break;case 6:a=(a>>3)/16;break;case 7:a=(a>>3)/64;break;}}t[1].v=a;return t}function N(e,r){var t=S(e,r);var a=e._R(4);var n=e._R(4);var i=e._R(2);if(i==65535){if(a===0&&n===3221225472){t[1].t="e";t[1].v=15}else if(a===0&&n===3489660928){t[1].t="e";t[1].v=42}else t[1].v=0;return t}var s=i&32768;i=(i&32767)-16446;t[1].v=(1-s*2)*(n*Math.pow(2,i+32)+a*Math.pow(2,i));return t}function F(e,r,t,a){var n=Aa(14);n._W(2,e);n._W(1,t);n._W(1,r);if(a==0){n._W(4,0);n._W(4,0);n._W(2,65535);return n}var i=0,s=0,f=0,l=0;if(a<0){i=1;a=-a}s=Math.log2(a)|0;a/=Math.pow(2,s-31);l=a>>>0;if((l&2147483648)==0){a/=2;++s;l=a>>>0}a-=l;l|=2147483648;l>>>=0;a*=Math.pow(2,32);f=a>>>0;n._W(4,f);n._W(4,l);s+=16383+(i?32768:0);n._W(2,s);return n}function D(e,r){var t=N(e,14);e.l+=r-14;return t}function P(e,r){var t=S(e,r);var a=e._R(4);t[1].v=a>>6;return t}function L(e,r){var t=S(e,r);var a=e._R(8,"f");t[1].v=a;return t}function M(e,r){var t=L(e,12);e.l+=r-12;return t}function U(e,r){return e[e.l+r-1]==0?e._R(r,"cstr"):""}function B(e,r){var t=e[e.l++];if(t>r-1)t=r-1;var a="";while(a.length<t)a+=String.fromCharCode(e[e.l++]);return a}function W(e,r,t){if(!t.qpro||r<21)return;var a=e._R(1);e.l+=17;e.l+=1;e.l+=2;var n=e._R(r-21,"cstr");return[a,n]}function z(e,r){var t={},a=e.l+r;while(e.l<a){var n=e._R(2);if(n==14e3){t[n]=[0,""];t[n][0]=e._R(2);while(e[e.l]){t[n][1]+=String.fromCharCode(e[e.l]);e.l++}e.l++}}return t}function H(e,r){var t=Aa(5+e.length);t._W(2,14e3);t._W(2,r);for(var a=0;a<e.length;++a){var n=e.charCodeAt(a);t[t.l++]=n>127?95:n}t[t.l++]=0;return t}var V={0:{n:"BOF",f:hs},1:{n:"EOF"},2:{n:"CALCMODE"},3:{n:"CALCORDER"},4:{n:"SPLIT"},5:{n:"SYNC"},6:{n:"RANGE",f:o},7:{n:"WINDOW1"},8:{n:"COLW1"},9:{n:"WINTWO"},10:{n:"COLW2"},11:{n:"NAME"},12:{n:"BLANK"},13:{n:"INTEGER",f:m},14:{n:"NUMBER",f:w},15:{n:"LABEL",f:d},16:{n:"FORMULA",f:T},24:{n:"TABLE"},25:{n:"ORANGE"},26:{n:"PRANGE"},27:{n:"SRANGE"},28:{n:"FRANGE"},29:{n:"KRANGE1"},32:{n:"HRANGE"},35:{n:"KRANGE2"},36:{n:"PROTEC"},37:{n:"FOOTER"},38:{n:"HEADER"},39:{n:"SETUP"},40:{n:"MARGINS"},41:{n:"LABELFMT"},42:{n:"TITLES"},43:{n:"SHEETJS"},45:{n:"GRAPH"},46:{n:"NGRAPH"},47:{n:"CALCCOUNT"},48:{n:"UNFORMATTED"},49:{n:"CURSORW12"},50:{n:"WINDOW"},51:{n:"STRING",f:p},55:{n:"PASSWORD"},56:{n:"LOCKED"},60:{n:"QUERY"},61:{n:"QUERYNAME"},62:{n:"PRINT"},63:{n:"PRINTNAME"},64:{n:"GRAPH2"},65:{n:"GRAPHNAME"},66:{n:"ZOOM"},67:{n:"SYMSPLIT"},68:{n:"NSROWS"},69:{n:"NSCOLS"},70:{n:"RULER"},71:{n:"NNAME"},72:{n:"ACOMM"},73:{n:"AMACRO"},74:{n:"PARSE"},102:{n:"PRANGES??"},103:{n:"RRANGES??"},104:{n:"FNAME??"},105:{n:"MRANGES??"},204:{n:"SHEETNAMECS",f:U},222:{n:"SHEETNAMELP",f:B},255:{n:"BOF",f:hs},21506:{n:"WKSNF",f:hs},65535:{n:""}};var X={0:{n:"BOF"},1:{n:"EOF"},2:{n:"PASSWORD"},3:{n:"CALCSET"},4:{n:"WINDOWSET"},5:{n:"SHEETCELLPTR"},6:{n:"SHEETLAYOUT"},7:{n:"COLUMNWIDTH"},8:{n:"HIDDENCOLUMN"},9:{n:"USERRANGE"},10:{n:"SYSTEMRANGE"},11:{n:"ZEROFORCE"},12:{n:"SORTKEYDIR"},13:{n:"FILESEAL"},14:{n:"DATAFILLNUMS"},15:{n:"PRINTMAIN"},16:{n:"PRINTSTRING"},17:{n:"GRAPHMAIN"},18:{n:"GRAPHSTRING"},19:{n:"??"},20:{n:"ERRCELL"},21:{n:"NACELL"},22:{n:"LABEL16",f:x},23:{n:"NUMBER17",f:N},24:{n:"NUMBER18",f:I},25:{n:"FORMULA19",f:D},26:{n:"FORMULA1A"},27:{n:"XFORMAT",f:z},28:{n:"DTLABELMISC"},29:{n:"DTLABELCELL"},30:{n:"GRAPHWINDOW"},31:{n:"CPA"},32:{n:"LPLAUTO"},33:{n:"QUERY"},34:{n:"HIDDENSHEET"},35:{n:"??"},37:{n:"NUMBER25",f:P},38:{n:"??"},39:{n:"NUMBER27",f:L},40:{n:"FORMULA28",f:M},142:{n:"??"},147:{n:"??"},150:{n:"??"},151:{n:"??"},152:{n:"??"},153:{n:"??"},154:{n:"??"},155:{n:"??"},156:{n:"??"},163:{n:"??"},174:{n:"??"},175:{n:"??"},176:{n:"??"},177:{n:"??"},184:{n:"??"},185:{n:"??"},186:{n:"??"},187:{n:"??"},188:{n:"??"},195:{n:"??"},201:{n:"??"},204:{n:"SHEETNAMECS",f:U},205:{n:"??"},206:{n:"??"},207:{n:"??"},208:{n:"??"},256:{n:"??"},259:{n:"??"},260:{n:"??"},261:{n:"??"},262:{n:"??"},263:{n:"??"},265:{n:"??"},266:{n:"??"},267:{n:"??"},268:{n:"??"},270:{n:"??"},271:{n:"??"},384:{n:"??"},389:{n:"??"},390:{n:"??"},393:{n:"??"},396:{n:"??"},512:{n:"??"},514:{n:"??"},513:{n:"??"},516:{n:"??"},517:{n:"??"},640:{n:"??"},641:{n:"??"},642:{n:"??"},643:{n:"??"},644:{n:"??"},645:{n:"??"},646:{n:"??"},647:{n:"??"},648:{n:"??"},658:{n:"??"},659:{n:"??"},660:{n:"??"},661:{n:"??"},662:{n:"??"},665:{n:"??"},666:{n:"??"},768:{n:"??"},772:{n:"??"},1537:{n:"SHEETINFOQP",f:W},1600:{n:"??"},1602:{n:"??"},1793:{n:"??"},1794:{n:"??"},1795:{n:"??"},1796:{n:"??"},1920:{n:"??"},2048:{n:"??"},2049:{n:"??"},2052:{n:"??"},2688:{n:"??"},10998:{n:"??"},12849:{n:"??"},28233:{n:"??"},28484:{n:"??"},65535:{n:""}};var G={5:"dd-mmm-yy",6:"dd-mmm",7:"mmm-yy",8:"mm/dd/yy",10:"hh:mm:ss AM/PM",11:"hh:mm AM/PM",14:"dd-mmm-yyyy",15:"mmm-yyyy",34:"0.00",50:"0.00;[Red]0.00",66:"0.00;(0.00)",82:"0.00;[Red](0.00)",162:'"$"#,##0;\\("$"#,##0\\)'};function $(e,r){ka(e,0);var t=r||{};if(b!=null&&t.dense==null)t.dense=b;var a={};if(t.dense)a["!data"]=[];var n=[],i="",s=[];var f={s:{r:-1,c:-1},e:{r:-1,c:-1}};var l=0,o=0,c=0,h=0;var u={SheetNames:[],Sheets:{}};var d=[];e:while(e.l<e.length){var v=e._R(2),p=e._R(2);var m=e.slice(e.l,e.l+p);ka(m,0);switch(v){case 1:if(m._R(4)!=962023505)throw"Bad QPW9 BOF!";break;case 2:break e;case 8:break;case 10:{var g=m._R(4);var w=(m.length-m.l)/g|0;for(var k=0;k<g;++k){var T=m.l+w;var A={};m.l+=2;A.numFmtId=m._R(2);if(G[A.numFmtId])A.z=G[A.numFmtId];m.l=T;d.push(A)}}break;case 1025:break;case 1026:break;case 1031:{m.l+=12;while(m.l<m.length){l=m._R(2);o=m._R(1);n.push(m._R(l,"cstr"))}}break;case 1032:{}break;case 1537:{var y=m._R(2);a={};if(t.dense)a["!data"]=[];f.s.c=m._R(2);f.e.c=m._R(2);f.s.r=m._R(4);f.e.r=m._R(4);m.l+=4;if(m.l+2<m.length){l=m._R(2);o=m._R(1);i=l==0?"":m._R(l,"cstr")}if(!i)i=Pa(y)}break;case 1538:{if(f.s.c>255||f.s.r>999999)break;if(f.e.c<f.s.c)f.e.c=f.s.c;if(f.e.r<f.s.r)f.e.r=f.s.r;a["!ref"]=Ha(f);Gk(u,a,i)}break;case 2561:{c=m._R(2);if(f.e.c<c)f.e.c=c;if(f.s.c>c)f.s.c=c;h=m._R(4);if(f.s.r>h)f.s.r=h;h=m._R(4);if(f.e.r<h)f.e.r=h}break;case 3073:{h=m._R(4),l=m._R(4);if(f.s.r>h)f.s.r=h;if(f.e.r<h+l-1)f.e.r=h+l-1;var E=Pa(c);while(m.l<m.length){var C={t:"z"};var _=m._R(1),S=-1;if(_&128)S=m._R(2);var x=_&64?m._R(2)-1:0;switch(_&31){case 0:break;case 1:break;case 2:C={t:"n",v:m._R(2)};break;case 3:C={t:"n",v:m._R(2,"i")};break;case 4:C={t:"n",v:wn(m)};break;case 5:C={t:"n",v:m._R(8,"f")};break;case 7:C={t:"s",v:n[o=m._R(4)-1]};break;case 8:C={t:"n",v:m._R(8,"f")};m.l+=2;m.l+=4;break;default:throw"Unrecognized QPW cell type "+(_&31);}if(S!=-1&&(d[S-1]||{}).z)C.z=d[S-1].z;var O=0;if(_&32)switch(_&31){case 2:O=m._R(2);break;case 3:O=m._R(2,"i");break;case 7:O=m._R(2);break;default:throw"Unsupported delta for QPW cell type "+(_&31);}if(!(!t.sheetStubs&&C.t=="z")){var R=kr(C);if(C.t=="n"&&C.z&&Pe(C.z)&&t.cellDates){R.v=dr(C.v);R.t=typeof R.v=="number"?"n":"d"}if(a["!data"]!=null){if(!a["!data"][h])a["!data"][h]=[];a["!data"][h][c]=R}else a[E+Ia(h)]=R}++h;--l;while(x-- >0&&l>=0){if(_&32)switch(_&31){case 2:C={t:"n",v:C.v+O&65535};break;case 3:C={t:"n",v:C.v+O&65535};if(C.v>32767)C.v-=65536;break;case 7:C={t:"s",v:n[o=o+O>>>0]};break;default:throw"Cannot apply delta for QPW cell type "+(_&31);}else switch(_&31){case 1:C={t:"z"};break;case 2:C={t:"n",v:m._R(2)};break;case 7:C={t:"s",v:n[o=m._R(4)-1]};break;default:throw"Cannot apply repeat for QPW cell type "+(_&31);}if(S!=-1);if(!(!t.sheetStubs&&C.t=="z")){if(a["!data"]!=null){if(!a["!data"][h])a["!data"][h]=[];a["!data"][h][c]=C}else a[E+Ia(h)]=C}++h;--l}}}break;default:break;}e.l+=p}return u}return{sheet_to_wk1:n,book_to_wk3:i,to_workbook:r}}();function Zl(e){var r={},t=e.match(Jr),a=0;var n=false;if(t)for(;a!=t.length;++a){var s=et(t[a]);switch(s[0].replace(/\w*:/g,"")){case"<condense":break;case"<extend":break;case"<shadow":if(!s.val)break;case"<shadow>":;case"<shadow/>":r.shadow=1;break;case"</shadow>":break;case"<charset":if(s.val=="1")break;r.cp=i[parseInt(s.val,10)];break;case"<outline":if(!s.val)break;case"<outline>":;case"<outline/>":r.outline=1;break;case"</outline>":break;case"<rFont":r.name=s.val;break;case"<sz":r.sz=s.val;break;case"<strike":if(!s.val)break;case"<strike>":;case"<strike/>":r.strike=1;break;case"</strike>":break;case"<u":if(!s.val)break;switch(s.val){case"double":r.uval="double";break;case"singleAccounting":r.uval="single-accounting";break;case"doubleAccounting":r.uval="double-accounting";break;};case"<u>":;case"<u/>":r.u=1;break;case"</u>":break;case"<b":if(s.val=="0")break;case"<b>":;case"<b/>":r.b=1;break;case"</b>":break;case"<i":if(s.val=="0")break;case"<i>":;case"<i/>":r.i=1;break;case"</i>":break;case"<color":if(s.rgb)r.color=s.rgb.slice(2,8);break;case"<color>":;case"<color/>":;case"</color>":break;case"<family":r.family=s.val;break;case"<family>":;case"<family/>":;case"</family>":break;case"<vertAlign":r.valign=s.val;break;case"<vertAlign>":;case"<vertAlign/>":;case"</vertAlign>":break;case"<scheme":break;case"<scheme>":;case"<scheme/>":;case"</scheme>":break;case"<extLst":;case"<extLst>":;case"</extLst>":break;case"<ext":n=true;break;case"</ext>":n=false;break;default:if(s[0].charCodeAt(1)!==47&&!n)throw new Error("Unrecognized rich format "+s[0]);}}return r}var Jl=function(){var e=Tt("t"),r=Tt("rPr");function t(t){var a=t.match(e);if(!a)return{t:"s",v:""};var n={t:"s",v:nt(a[1])};var i=t.match(r);if(i)n.s=Zl(i[1]);return n}var a=/<(?:\w+:)?r>/g,n=/<\/(?:\w+:)?r>/;return function i(e){return e.replace(a,"").split(n).map(t).filter(function(e){return e.v})}}();var ql=function AT(){var e=/(\r\n|\n)/g;function r(e,r,t){var a=[];if(e.u)a.push("text-decoration: underline;");if(e.uval)a.push("text-underline-style:"+e.uval+";");if(e.sz)a.push("font-size:"+e.sz+"pt;");if(e.outline)a.push("text-effect: outline;");if(e.shadow)a.push("text-shadow: auto;");r.push('<span style="'+a.join("")+'">');if(e.b){r.push("<b>");t.push("</b>")}if(e.i){r.push("<i>");t.push("</i>")}if(e.strike){r.push("<s>");t.push("</s>")}var n=e.valign||"";if(n=="superscript"||n=="super")n="sup";else if(n=="subscript")n="sub";if(n!=""){r.push("<"+n+">");t.push("</"+n+">")}t.push("</span>");return e}function t(t){var a=[[],t.v,[]];if(!t.v)return"";if(t.s)r(t.s,a[0],a[2]);return a[0].join("")+a[1].replace(e,"<br/>")+a[2].join("")}return function a(e){return e.map(t).join("")}}();var Ql=/<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,eo=/<(?:\w+:)?r\b[^>]*>/;var ro=/<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;function to(e,r){var t=r?r.cellHTML:true;var a={};if(!e)return{t:""};if(e.match(/^\s*<(?:\w+:)?t[^>]*>/)){a.t=nt(wt(e.slice(e.indexOf(">")+1).split(/<\/(?:\w+:)?t>/)[0]||""),true);a.r=wt(e);if(t)a.h=ct(a.t)}else if(e.match(eo)){a.r=wt(e);a.t=nt(wt((e.replace(ro,"").match(Ql)||[]).join("").replace(Jr,"")),true);if(t)a.h=ql(Jl(a.r))}return a}var ao=/<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/;var no=/<(?:\w+:)?(?:si|sstItem)>/g;var io=/<\/(?:\w+:)?(?:si|sstItem)>/;function so(e,r){var t=[],a="";if(!e)return t;var n=e.match(ao);if(n){a=n[2].replace(no,"").split(io);for(var i=0;i!=a.length;++i){var s=to(a[i].trim(),r);if(s!=null)t[t.length]=s}n=et(n[1]);t.Count=n.count;t.Unique=n.uniqueCount}return t}var fo=/^\s|\s$|[\t\n\r]/;function lo(e,r){if(!r.bookSST)return"";var t=[jr];t[t.length]=Rt("sst",null,{xmlns:Lt[0],count:e.Count,uniqueCount:e.Unique});for(var a=0;a!=e.length;++a){if(e[a]==null)continue;var n=e[a];var i="<si>";if(n.r)i+=n.r;else{i+="<t";if(!n.t)n.t="";if(typeof n.t!=="string")n.t=String(n.t);if(n.t.match(fo))i+=' xml:space="preserve"';i+=">"+ft(n.t)+"</t>"}i+="</si>";t[t.length]=i}if(t.length>2){t[t.length]="</sst>";t[1]=t[1].replace("/>",">")}return t.join("")}function oo(e){return[e._R(4),e._R(4)]}function co(e,r){var t=[];var a=false;ya(e,function n(e,i,s){switch(s){case 159:t.Count=e[0];t.Unique=e[1];break;case 19:t.push(e);break;case 160:return true;case 35:a=true;break;case 36:a=false;break;default:if(i.T){}if(!a||r.WTF)throw new Error("Unexpected record 0x"+s.toString(16));}});return t}function ho(e,r){if(!r)r=Aa(8);r._W(4,e.Count);r._W(4,e.Unique);return r}var uo=nn;function vo(e){var r=Ea();Ca(r,159,ho(e));for(var t=0;t<e.length;++t)Ca(r,19,uo(e[t]));Ca(r,160);return r.end()}function po(e){if(typeof a!=="undefined")return a.utils.encode(t,e);var r=[],n=e.split("");for(var i=0;i<n.length;++i)r[i]=n[i].charCodeAt(0);return r}function mo(e,r){var t={};t.Major=e._R(2);t.Minor=e._R(2);if(r>=4)e.l+=r-4;return t}function go(e){var r={};r.id=e._R(0,"lpp4");r.R=mo(e,4);r.U=mo(e,4);r.W=mo(e,4);return r}function bo(e){var r=e._R(4);var t=e.l+r-4;var a={};var n=e._R(4);var i=[];while(n-- >0)i.push({t:e._R(4),v:e._R(0,"lpp4")});a.name=e._R(0,"lpp4");a.comps=i;if(e.l!=t)throw new Error("Bad DataSpaceMapEntry: "+e.l+" != "+t);return a}function wo(e){var r=[];e.l+=4;var t=e._R(4);while(t-- >0)r.push(bo(e));return r}function ko(e){var r=[];e.l+=4;var t=e._R(4);while(t-- >0)r.push(e._R(0,"lpp4"));return r}function To(e){var r={};e._R(4);e.l+=4;r.id=e._R(0,"lpp4");r.name=e._R(0,"lpp4");r.R=mo(e,4);r.U=mo(e,4);r.W=mo(e,4);return r}function Ao(e){var r=To(e);r.ename=e._R(0,"8lpp4");r.blksz=e._R(4);r.cmode=e._R(4);if(e._R(4)!=4)throw new Error("Bad !Primary record");return r}function yo(e,r){var t=e.l+r;var a={};a.Flags=e._R(4)&63;e.l+=4;a.AlgID=e._R(4);var n=false;switch(a.AlgID){case 26126:;case 26127:;case 26128:n=a.Flags==36;break;case 26625:n=a.Flags==4;break;case 0:n=a.Flags==16||a.Flags==4||a.Flags==36;break;default:throw"Unrecognized encryption algorithm: "+a.AlgID;}if(!n)throw new Error("Encryption Flags/AlgID mismatch");a.AlgIDHash=e._R(4);a.KeySize=e._R(4);a.ProviderType=e._R(4);e.l+=8;a.CSPName=e._R(t-e.l>>1,"utf16le");e.l=t;return a}function Eo(e,r){var t={},a=e.l+r;e.l+=4;t.Salt=e.slice(e.l,e.l+16);e.l+=16;t.Verifier=e.slice(e.l,e.l+16);e.l+=16;e._R(4);t.VerifierHash=e.slice(e.l,a);e.l=a;return t}function Co(e){var r=mo(e);switch(r.Minor){case 2:return[r.Minor,_o(e,r)];case 3:return[r.Minor,So(e,r)];case 4:return[r.Minor,xo(e,r)];}throw new Error("ECMA-376 Encrypted file unrecognized Version: "+r.Minor)}function _o(e){var r=e._R(4);if((r&63)!=36)throw new Error("EncryptionInfo mismatch");var t=e._R(4);var a=yo(e,t);var n=Eo(e,e.length-e.l);return{t:"Std",h:a,v:n}}function So(){throw new Error("File is password-protected: ECMA-376 Extensible")}function xo(e){var r=["saltSize","blockSize","keyBits","hashSize","cipherAlgorithm","cipherChaining","hashAlgorithm","saltValue"];e.l+=4;var t=e._R(e.length-e.l,"utf8");var a={};t.replace(Jr,function n(e){var t=et(e);switch(rt(t[0])){case"<?xml":break;case"<encryption":;case"</encryption>":break;case"<keyData":r.forEach(function(e){a[e]=t[e]});break;case"<dataIntegrity":a.encryptedHmacKey=t.encryptedHmacKey;a.encryptedHmacValue=t.encryptedHmacValue;break;case"<keyEncryptors>":;case"<keyEncryptors":a.encs=[];break;case"</keyEncryptors>":break;case"<keyEncryptor":a.uri=t.uri;break;case"</keyEncryptor>":break;case"<encryptedKey":a.encs.push(t);break;default:throw t[0];}});return a}function Oo(e,r){var t={};var a=t.EncryptionVersionInfo=mo(e,4);r-=4;if(a.Minor!=2)throw new Error("unrecognized minor version code: "+a.Minor);if(a.Major>4||a.Major<2)throw new Error("unrecognized major version code: "+a.Major);t.Flags=e._R(4);r-=4;var n=e._R(4);r-=4;t.EncryptionHeader=yo(e,n);r-=n;t.EncryptionVerifier=Eo(e,r);return t}function Ro(e){var r={};var t=r.EncryptionVersionInfo=mo(e,4);if(t.Major!=1||t.Minor!=1)throw"unrecognized version code "+t.Major+" : "+t.Minor;r.Salt=e._R(16);r.EncryptedVerifier=e._R(16);r.EncryptedVerifierHash=e._R(16);return r}function Io(e){var r=0,t;var a=po(e);var n=a.length+1,i,s;var f,l,o;t=x(n);t[0]=a.length;for(i=1;i!=n;++i)t[i]=a[i-1];for(i=n-1;i>=0;--i){s=t[i];f=(r&16384)===0?0:1;l=r<<1&32767;o=f|l;r=o^s}return r^52811}var No=function(){var e=[187,255,255,186,255,255,185,128,0,190,15,0,191,15,0];var r=[57840,7439,52380,33984,4364,3600,61902,12606,6258,57657,54287,34041,10252,43370,20163];var t=[44796,19929,39858,10053,20106,40212,10761,31585,63170,64933,60267,50935,40399,11199,17763,35526,1453,2906,5812,11624,23248,885,1770,3540,7080,14160,28320,56640,55369,41139,20807,41614,21821,43642,17621,28485,56970,44341,19019,38038,14605,29210,60195,50791,40175,10751,21502,43004,24537,18387,36774,3949,7898,15796,31592,63184,47201,24803,49606,37805,14203,28406,56812,17824,35648,1697,3394,6788,13576,27152,43601,17539,35078,557,1114,2228,4456,30388,60776,51953,34243,7079,14158,28316,14128,28256,56512,43425,17251,34502,7597,13105,26210,52420,35241,883,1766,3532,4129,8258,16516,33032,4657,9314,18628];var a=function(e){return(e/2|e*128)&255};var n=function(e,r){return a(e^r)};var i=function(e){var a=r[e.length-1];var n=104;for(var i=e.length-1;i>=0;--i){var s=e[i];for(var f=0;f!=7;++f){if(s&64)a^=t[n];s*=2;--n}}return a};return function(r){var t=po(r);var a=i(t);var s=t.length;var f=x(16);for(var l=0;l!=16;++l)f[l]=0;var o,c,h;if((s&1)===1){o=a>>8;f[s]=n(e[0],o);--s;o=a&255;c=t[t.length-1];f[s]=n(c,o)}while(s>0){--s;o=a>>8;f[s]=n(t[s],o);--s;o=a&255;f[s]=n(t[s],o)}s=15;h=15-t.length;while(h>0){o=a>>8;f[s]=n(e[h],o);--s;--h;o=a&255;f[s]=n(t[s],o);--s;--h}return f}}();var Fo=function(e,r,t,a,n){if(!n)n=r;if(!a)a=No(e);var i,s;for(i=0;i!=r.length;++i){s=r[i];s^=a[t];s=(s>>5|s<<3)&255;n[i]=s;++t}return[n,t,a]};var Do=function(e){var r=0,t=No(e);return function(e){var a=Fo("",e,r,t);r=a[1];return a[0]}};function Po(e,r,t,a){var n={key:hs(e),verificationBytes:hs(e)};if(t.password)n.verifier=Io(t.password);a.valid=n.verificationBytes===n.verifier;if(a.valid)a.insitu=Do(t.password);return n}function Lo(e,r,t){var a=t||{};a.Info=e._R(2);e.l-=2;if(a.Info===1)a.Data=Ro(e,r);else a.Data=Oo(e,r);return a}function Mo(e,r,t){var a={Type:t.biff>=8?e._R(2):0};if(a.Type)Lo(e,r-2,a);else Po(e,t.biff>=8?r:r-2,t,a);return a}function Uo(e,r){switch(r.type){case"base64":return Bo(E(e),r);case"binary":return Bo(e,r);case"buffer":return Bo(C&&Buffer.isBuffer(e)?e.toString("binary"):N(e),r);case"array":return Bo(wr(e),r);}throw new Error("Unrecognized type "+r.type)}function Bo(e,r){var t=r||{};var a={};var n=t.dense;if(n)a["!data"]=[];var i=e.match(/\\trowd[\s\S]*?\\row\b/g);if(!i)throw new Error("RTF missing table");var s={s:{c:0,r:0},e:{c:0,r:i.length-1}};var f=[];i.forEach(function(e,r){if(n)f=a["!data"][r]=[];var i=/\\[\w\-]+\b/g;var l=0;var o;var c=-1;var h=[];while((o=i.exec(e))!=null){var u=e.slice(l,i.lastIndex-o[0].length);if(u.charCodeAt(0)==32)u=u.slice(1);if(u.length)h.push(u);switch(o[0]){case"\\cell":++c;if(h.length){var d={v:h.join(""),t:"s"};if(d.v=="TRUE"||d.v=="FALSE"){d.v=d.v=="TRUE";d.t="b"}else if(!isNaN(Ar(d.v))){d.t="n";if(t.cellText!==false)d.w=d.v;d.v=Ar(d.v)}if(n)f[c]=d;else a[Wa({r:r,c:c})]=d}h=[];break;case"\\par":h.push("\n");break;}l=i.lastIndex}if(c>s.e.c)s.e.c=c});a["!ref"]=Ha(s);return a}function Wo(e,r){var t=Ka(Uo(e,r),r);t.bookType="rtf";return t}function zo(e,r){var t=["{\\rtf1\\ansi"];if(!e["!ref"])return t[0]+"}";var a=Ga(e["!ref"]),n;var i=e["!data"]!=null,s=[];for(var f=a.s.r;f<=a.e.r;++f){t.push("\\trowd\\trautofit1");for(var l=a.s.c;l<=a.e.c;++l)t.push("\\cellx"+(l+1));t.push("\\pard\\intbl");if(i)s=e["!data"][f]||[];for(l=a.s.c;l<=a.e.c;++l){var o=Wa({r:f,c:l});n=i?s[l]:e[o];if(!n||n.v==null&&(!n.f||n.F)){t.push(" \\cell");continue}t.push(" "+(n.w||(ja(n),n.w)||"").replace(/[\r\n]/g,"\\par "));t.push("\\cell")}t.push("\\pard\\intbl\\row")}return t.join("")+"}"}function Ho(e){var r=e.slice(e[0]==="#"?1:0).slice(0,6);return[parseInt(r.slice(0,2),16),parseInt(r.slice(2,4),16),parseInt(r.slice(4,6),16)]}function Vo(e){for(var r=0,t=1;r!=3;++r)t=t*256+(e[r]>255?255:e[r]<0?0:e[r]);return t.toString(16).toUpperCase().slice(1)}function Xo(e){var r=e[0]/255,t=e[1]/255,a=e[2]/255;var n=Math.max(r,t,a),i=Math.min(r,t,a),s=n-i;if(s===0)return[0,0,r];var f=0,l=0,o=n+i;l=s/(o>1?2-o:o);switch(n){case r:f=((t-a)/s+6)%6;break;case t:f=(a-r)/s+2;break;case a:f=(r-t)/s+4;break;}return[f/6,l,o/2]}function Go(e){var r=e[0],t=e[1],a=e[2];var n=t*2*(a<.5?a:1-a),i=a-n/2;var s=[i,i,i],f=6*r;var l;if(t!==0)switch(f|0){case 0:;case 6:l=n*f;s[0]+=n;s[1]+=l;break;case 1:l=n*(2-f);s[0]+=l;s[1]+=n;break;case 2:l=n*(f-2);s[1]+=n;s[2]+=l;break;case 3:l=n*(4-f);s[1]+=l;s[2]+=n;break;case 4:l=n*(f-4);s[2]+=n;s[0]+=l;break;case 5:l=n*(6-f);s[2]+=l;s[0]+=n;break;}for(var o=0;o!=3;++o)s[o]=Math.round(s[o]*255);return s}function $o(e,r){if(r===0)return e;var t=Xo(Ho(e));if(r<0)t[2]=t[2]*(1+r);else t[2]=1-(1-t[2])*(1-r);return Vo(Go(t))}var jo=6,Ko=15,Yo=1,Zo=jo;function Jo(e){return Math.floor((e+Math.round(128/Zo)/256)*Zo)}function qo(e){return Math.floor((e-5)/Zo*100+.5)/100}function Qo(e){return Math.round((e*Zo+5)/Zo*256)/256}function ec(e){return Qo(qo(Jo(e)))}function rc(e){var r=Math.abs(e-ec(e)),t=Zo;if(r>.005)for(Zo=Yo;Zo<Ko;++Zo)if(Math.abs(e-ec(e))<=r){r=Math.abs(e-ec(e));t=Zo}Zo=t}function tc(e){if(e.width){e.wpx=Jo(e.width);e.wch=qo(e.wpx);e.MDW=Zo}else if(e.wpx){e.wch=qo(e.wpx);e.width=Qo(e.wch);e.MDW=Zo}else if(typeof e.wch=="number"){e.width=Qo(e.wch);e.wpx=Jo(e.width);e.MDW=Zo}if(e.customWidth)delete e.customWidth}var ac=96,nc=ac;function ic(e){return e*96/nc}function sc(e){return e*nc/96}var fc={None:"none",Solid:"solid",Gray50:"mediumGray",Gray75:"darkGray",Gray25:"lightGray",HorzStripe:"darkHorizontal",VertStripe:"darkVertical",ReverseDiagStripe:"darkDown",DiagStripe:"darkUp",DiagCross:"darkGrid",ThickDiagCross:"darkTrellis",ThinHorzStripe:"lightHorizontal",ThinVertStripe:"lightVertical",ThinReverseDiagStripe:"lightDown",ThinHorzCross:"lightGrid"};function lc(e,r,t,a){r.Borders=[];var n={};var i=false;(e[0].match(Jr)||[]).forEach(function(e){var t=et(e);switch(rt(t[0])){case"<borders":;case"<borders>":;case"</borders>":break;case"<border":;case"<border>":;case"<border/>":n={};if(t.diagonalUp)n.diagonalUp=vt(t.diagonalUp);if(t.diagonalDown)n.diagonalDown=vt(t.diagonalDown);r.Borders.push(n);break;case"</border>":break;case"<left/>":break;case"<left":;case"<left>":break;case"</left>":break;case"<right/>":break;case"<right":;case"<right>":break;case"</right>":break;case"<top/>":break;case"<top":;case"<top>":break;case"</top>":break;case"<bottom/>":break;case"<bottom":;case"<bottom>":break;case"</bottom>":break;case"<diagonal":;case"<diagonal>":;case"<diagonal/>":break;case"</diagonal>":break;case"<horizontal":;case"<horizontal>":;case"<horizontal/>":break;case"</horizontal>":break;case"<vertical":;case"<vertical>":;case"<vertical/>":break;case"</vertical>":break;case"<start":;case"<start>":;case"<start/>":break;case"</start>":break;case"<end":;case"<end>":;case"<end/>":break;case"</end>":break;case"<color":;case"<color>":break;case"<color/>":;case"</color>":break;case"<extLst":;case"<extLst>":;case"</extLst>":break;case"<ext":i=true;break;case"</ext>":i=false;break;default:if(a&&a.WTF){if(!i)throw new Error("unrecognized "+t[0]+" in borders")};}})}function oc(e,r,t,a){r.Fills=[];var n={};var i=false;(e[0].match(Jr)||[]).forEach(function(e){var t=et(e);switch(rt(t[0])){case"<fills":;case"<fills>":;case"</fills>":break;case"<fill>":;case"<fill":;case"<fill/>":n={};r.Fills.push(n);break;case"</fill>":break;case"<gradientFill>":break;case"<gradientFill":;case"</gradientFill>":r.Fills.push(n);n={};break;case"<patternFill":;case"<patternFill>":if(t.patternType)n.patternType=t.patternType;break;case"<patternFill/>":;case"</patternFill>":break;case"<bgColor":if(!n.bgColor)n.bgColor={};if(t.indexed)n.bgColor.indexed=parseInt(t.indexed,10);if(t.theme)n.bgColor.theme=parseInt(t.theme,10);if(t.tint)n.bgColor.tint=parseFloat(t.tint);if(t.rgb)n.bgColor.rgb=t.rgb.slice(-6);break;case"<bgColor/>":;case"</bgColor>":break;case"<fgColor":if(!n.fgColor)n.fgColor={};if(t.theme)n.fgColor.theme=parseInt(t.theme,10);if(t.tint)n.fgColor.tint=parseFloat(t.tint);if(t.rgb!=null)n.fgColor.rgb=t.rgb.slice(-6);break;case"<fgColor/>":;case"</fgColor>":break;case"<stop":;case"<stop/>":break;case"</stop>":break;case"<color":;case"<color/>":break;case"</color>":break;case"<extLst":;case"<extLst>":;case"</extLst>":break;case"<ext":i=true;break;case"</ext>":i=false;break;default:if(a&&a.WTF){if(!i)throw new Error("unrecognized "+t[0]+" in fills")};}})}function cc(e,r,t,a){r.Fonts=[];var n={};var s=false;(e[0].match(Jr)||[]).forEach(function(e){var f=et(e);switch(rt(f[0])){case"<fonts":;case"<fonts>":;case"</fonts>":break;case"<font":;case"<font>":break;case"</font>":;case"<font/>":r.Fonts.push(n);n={};break;case"<name":if(f.val)n.name=wt(f.val);break;case"<name/>":;case"</name>":break;case"<b":n.bold=f.val?vt(f.val):1;break;case"<b/>":n.bold=1;break;case"<i":n.italic=f.val?vt(f.val):1;break;case"<i/>":n.italic=1;break;case"<u":switch(f.val){case"none":n.underline=0;break;case"single":n.underline=1;break;case"double":n.underline=2;break;case"singleAccounting":n.underline=33;break;case"doubleAccounting":n.underline=34;break;}break;case"<u/>":n.underline=1;break;case"<strike":n.strike=f.val?vt(f.val):1;break;case"<strike/>":n.strike=1;break;case"<outline":n.outline=f.val?vt(f.val):1;break;case"<outline/>":n.outline=1;break;case"<shadow":n.shadow=f.val?vt(f.val):1;break;case"<shadow/>":n.shadow=1;break;case"<condense":n.condense=f.val?vt(f.val):1;break;case"<condense/>":n.condense=1;break;case"<extend":n.extend=f.val?vt(f.val):1;break;case"<extend/>":n.extend=1;break;case"<sz":if(f.val)n.sz=+f.val;break;case"<sz/>":;case"</sz>":break;case"<vertAlign":if(f.val)n.vertAlign=f.val;break;case"<vertAlign/>":;case"</vertAlign>":break;case"<family":if(f.val)n.family=parseInt(f.val,10);break;case"<family/>":;case"</family>":break;case"<scheme":if(f.val)n.scheme=f.val;break;case"<scheme/>":;case"</scheme>":break;case"<charset":if(f.val=="1")break;f.codepage=i[parseInt(f.val,10)];break;case"<color":if(!n.color)n.color={};if(f.auto)n.color.auto=vt(f.auto);if(f.rgb)n.color.rgb=f.rgb.slice(-6);else if(f.indexed){n.color.index=parseInt(f.indexed,10);var l=Qn[n.color.index];if(n.color.index==81)l=Qn[1];if(!l)l=Qn[1];n.color.rgb=l[0].toString(16)+l[1].toString(16)+l[2].toString(16)}else if(f.theme){n.color.theme=parseInt(f.theme,10);if(f.tint)n.color.tint=parseFloat(f.tint);if(f.theme&&t.themeElements&&t.themeElements.clrScheme){n.color.rgb=$o(t.themeElements.clrScheme[n.color.theme].rgb,n.color.tint||0)}}break;case"<color/>":;case"</color>":break;case"<AlternateContent":s=true;break;case"</AlternateContent>":s=false;break;case"<extLst":;case"<extLst>":;case"</extLst>":break;case"<ext":s=true;break;case"</ext>":s=false;break;default:if(a&&a.WTF){if(!s)throw new Error("unrecognized "+f[0]+" in fonts")};}});
}function hc(e,r,t){r.NumberFmt=[];var a=nr(q);for(var n=0;n<a.length;++n)r.NumberFmt[a[n]]=q[a[n]];var i=e[0].match(Jr);if(!i)return;for(n=0;n<i.length;++n){var s=et(i[n]);switch(rt(s[0])){case"<numFmts":;case"</numFmts>":;case"<numFmts/>":;case"<numFmts>":break;case"<numFmt":{var f=nt(wt(s.formatCode)),l=parseInt(s.numFmtId,10);r.NumberFmt[l]=f;if(l>0){if(l>392){for(l=392;l>60;--l)if(r.NumberFmt[l]==null)break;r.NumberFmt[l]=f}Ze(f,l)}}break;case"</numFmt>":break;default:if(t.WTF)throw new Error("unrecognized "+s[0]+" in numFmts");}}}function uc(e){var r=["<numFmts>"];[[5,8],[23,26],[41,44],[50,392]].forEach(function(t){for(var a=t[0];a<=t[1];++a)if(e[a]!=null)r[r.length]=Rt("numFmt",null,{numFmtId:a,formatCode:ft(e[a])})});if(r.length===1)return"";r[r.length]="</numFmts>";r[0]=Rt("numFmts",null,{count:r.length-2}).replace("/>",">");return r.join("")}var dc=["numFmtId","fillId","fontId","borderId","xfId"];var vc=["applyAlignment","applyBorder","applyFill","applyFont","applyNumberFormat","applyProtection","pivotButton","quotePrefix"];function pc(e,r,t){r.CellXf=[];var a;var n=false;(e[0].match(Jr)||[]).forEach(function(e){var i=et(e),s=0;switch(rt(i[0])){case"<cellXfs":;case"<cellXfs>":;case"<cellXfs/>":;case"</cellXfs>":break;case"<xf":;case"<xf/>":a=i;delete a[0];for(s=0;s<dc.length;++s)if(a[dc[s]])a[dc[s]]=parseInt(a[dc[s]],10);for(s=0;s<vc.length;++s)if(a[vc[s]])a[vc[s]]=vt(a[vc[s]]);if(r.NumberFmt&&a.numFmtId>392){for(s=392;s>60;--s)if(r.NumberFmt[a.numFmtId]==r.NumberFmt[s]){a.numFmtId=s;break}}r.CellXf.push(a);break;case"</xf>":break;case"<alignment":;case"<alignment/>":var f={};if(i.vertical)f.vertical=i.vertical;if(i.horizontal)f.horizontal=i.horizontal;if(i.textRotation!=null)f.textRotation=i.textRotation;if(i.indent)f.indent=i.indent;if(i.wrapText)f.wrapText=vt(i.wrapText);a.alignment=f;break;case"</alignment>":break;case"<protection":break;case"</protection>":;case"<protection/>":break;case"<AlternateContent":n=true;break;case"</AlternateContent>":n=false;break;case"<extLst":;case"<extLst>":;case"</extLst>":break;case"<ext":n=true;break;case"</ext>":n=false;break;default:if(t&&t.WTF){if(!n)throw new Error("unrecognized "+i[0]+" in cellXfs")};}})}function mc(e){var r=[];r[r.length]=Rt("cellXfs",null);e.forEach(function(e){r[r.length]=Rt("xf",null,e)});r[r.length]="</cellXfs>";if(r.length===2)return"";r[0]=Rt("cellXfs",null,{count:r.length-2}).replace("/>",">");return r.join("")}var gc=function yT(){var e=/<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/;var r=/<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/;var t=/<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/;var a=/<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/;var n=/<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;return function i(s,f,l){var o={};if(!s)return o;s=s.replace(/<!--([\s\S]*?)-->/gm,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");var c;if(c=s.match(e))hc(c,o,l);if(c=s.match(a))cc(c,o,f,l);if(c=s.match(t))oc(c,o,f,l);if(c=s.match(n))lc(c,o,f,l);if(c=s.match(r))pc(c,o,l);return o}}();function bc(e,r){var t=[jr,Rt("styleSheet",null,{xmlns:Lt[0],"xmlns:vt":Pt.vt})],a;if(e.SSF&&(a=uc(e.SSF))!=null)t[t.length]=a;t[t.length]='<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>';t[t.length]='<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>';t[t.length]='<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>';t[t.length]='<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>';if(a=mc(r.cellXfs))t[t.length]=a;t[t.length]='<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>';t[t.length]='<dxfs count="0"/>';t[t.length]='<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>';if(t.length>2){t[t.length]="</styleSheet>";t[1]=t[1].replace("/>",">")}return t.join("")}function wc(e,r){var t=e._R(2);var a=Qa(e,r-2);return[t,a]}function kc(e,r,t){if(!t)t=Aa(6+4*r.length);t._W(2,e);en(r,t);var a=t.length>t.l?t.slice(0,t.l):t;if(t.l==null)t.l=t.length;return a}function Tc(e,r,t){var a={};a.sz=e._R(2)/20;var n=On(e,2,t);if(n.fItalic)a.italic=1;if(n.fCondense)a.condense=1;if(n.fExtend)a.extend=1;if(n.fShadow)a.shadow=1;if(n.fOutline)a.outline=1;if(n.fStrikeout)a.strike=1;var i=e._R(2);if(i===700)a.bold=1;switch(e._R(2)){case 1:a.vertAlign="superscript";break;case 2:a.vertAlign="subscript";break;}var s=e._R(1);if(s!=0)a.underline=s;var f=e._R(1);if(f>0)a.family=f;var l=e._R(1);if(l>0)a.charset=l;e.l++;a.color=Sn(e,8);switch(e._R(1)){case 1:a.scheme="major";break;case 2:a.scheme="minor";break;}a.name=Qa(e,r-21);return a}function Ac(e,r){if(!r)r=Aa(25+4*32);r._W(2,e.sz*20);Rn(e,r);r._W(2,e.bold?700:400);var t=0;if(e.vertAlign=="superscript")t=1;else if(e.vertAlign=="subscript")t=2;r._W(2,t);r._W(1,e.underline||0);r._W(1,e.family||0);r._W(1,e.charset||0);r._W(1,0);xn(e.color,r);var a=0;if(e.scheme=="major")a=1;if(e.scheme=="minor")a=2;r._W(1,a);en(e.name,r);return r.length>r.l?r.slice(0,r.l):r}var yc=["none","solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"];var Ec;var Cc=Ta;function _c(e,r){if(!r)r=Aa(4*3+8*7+16*1);if(!Ec)Ec=sr(yc);var t=Ec[e.patternType];if(t==null)t=40;r._W(4,t);var a=0;if(t!=40){xn({auto:1},r);xn({auto:1},r);for(;a<12;++a)r._W(4,0)}else{for(;a<4;++a)r._W(4,0);for(;a<12;++a)r._W(4,0)}return r.length>r.l?r.slice(0,r.l):r}function Sc(e,r){var t=e.l+r;var a=e._R(2);var n=e._R(2);e.l=t;return{ixfe:a,numFmtId:n}}function xc(e,r,t){if(!t)t=Aa(16);t._W(2,r||0);t._W(2,e.numFmtId||0);t._W(2,0);t._W(2,0);t._W(2,0);t._W(1,0);t._W(1,0);var a=0;t._W(1,a);t._W(1,0);t._W(1,0);t._W(1,0);return t}function Oc(e,r){if(!r)r=Aa(10);r._W(1,0);r._W(1,0);r._W(4,0);r._W(4,0);return r}var Rc=Ta;function Ic(e,r){if(!r)r=Aa(51);r._W(1,0);Oc(null,r);Oc(null,r);Oc(null,r);Oc(null,r);Oc(null,r);return r.length>r.l?r.slice(0,r.l):r}function Nc(e,r){if(!r)r=Aa(12+4*10);r._W(4,e.xfId);r._W(2,1);r._W(1,+e.builtinId);r._W(1,0);pn(e.name||"",r);return r.length>r.l?r.slice(0,r.l):r}function Fc(e,r,t){var a=Aa(4+256*2*4);a._W(4,e);pn(r,a);pn(t,a);return a.length>a.l?a.slice(0,a.l):a}function Dc(e,r,t){var a={};a.NumberFmt=[];for(var n in q)a.NumberFmt[n]=q[n];a.CellXf=[];a.Fonts=[];var i=[];var s=false;ya(e,function f(e,n,l){switch(l){case 44:a.NumberFmt[e[0]]=e[1];Ze(e[1],e[0]);break;case 43:a.Fonts.push(e);if(e.color.theme!=null&&r&&r.themeElements&&r.themeElements.clrScheme){e.color.rgb=$o(r.themeElements.clrScheme[e.color.theme].rgb,e.color.tint||0)}break;case 1025:break;case 45:break;case 46:break;case 47:if(i[i.length-1]==617){a.CellXf.push(e)}break;case 48:;case 507:;case 572:;case 475:break;case 1171:;case 2102:;case 1130:;case 512:;case 2095:;case 3072:break;case 35:s=true;break;case 36:s=false;break;case 37:i.push(l);s=true;break;case 38:i.pop();s=false;break;default:if(n.T>0)i.push(l);else if(n.T<0)i.pop();else if(!s||t.WTF&&i[i.length-1]!=37)throw new Error("Unexpected record 0x"+l.toString(16));}});return a}function Pc(e,r){if(!r)return;var t=0;[[5,8],[23,26],[41,44],[50,392]].forEach(function(e){for(var a=e[0];a<=e[1];++a)if(r[a]!=null)++t});if(t==0)return;Ca(e,615,qa(t));[[5,8],[23,26],[41,44],[50,392]].forEach(function(t){for(var a=t[0];a<=t[1];++a)if(r[a]!=null)Ca(e,44,kc(a,r[a]))});Ca(e,616)}function Lc(e){var r=1;if(r==0)return;Ca(e,611,qa(r));Ca(e,43,Ac({sz:12,color:{theme:1},name:"Calibri",family:2,scheme:"minor"}));Ca(e,612)}function Mc(e){var r=2;if(r==0)return;Ca(e,603,qa(r));Ca(e,45,_c({patternType:"none"}));Ca(e,45,_c({patternType:"gray125"}));Ca(e,604)}function Uc(e){var r=1;if(r==0)return;Ca(e,613,qa(r));Ca(e,46,Ic({}));Ca(e,614)}function Bc(e){var r=1;Ca(e,626,qa(r));Ca(e,47,xc({numFmtId:0,fontId:0,fillId:0,borderId:0},65535));Ca(e,627)}function Wc(e,r){Ca(e,617,qa(r.length));r.forEach(function(r){Ca(e,47,xc(r,0))});Ca(e,618)}function zc(e){var r=1;Ca(e,619,qa(r));Ca(e,48,Nc({xfId:0,builtinId:0,name:"Normal"}));Ca(e,620)}function Hc(e){var r=0;Ca(e,505,qa(r));Ca(e,506)}function Vc(e){var r=0;Ca(e,508,Fc(r,"TableStyleMedium9","PivotStyleMedium4"));Ca(e,509)}function Xc(){return}function Gc(e,r){var t=Ea();Ca(t,278);Pc(t,e.SSF);Lc(t,e);Mc(t,e);Uc(t,e);Bc(t,e);Wc(t,r.cellXfs);zc(t,e);Hc(t,e);Vc(t,e);Xc(t,e);Ca(t,279);return t.end()}var $c=["</a:lt1>","</a:dk1>","</a:lt2>","</a:dk2>","</a:accent1>","</a:accent2>","</a:accent3>","</a:accent4>","</a:accent5>","</a:accent6>","</a:hlink>","</a:folHlink>"];function jc(e,r,t){r.themeElements.clrScheme=[];var a={};(e[0].match(Jr)||[]).forEach(function(e){var n=et(e);switch(n[0]){case"<a:clrScheme":;case"</a:clrScheme>":break;case"<a:srgbClr":a.rgb=n.val;break;case"<a:sysClr":a.rgb=n.lastClr;break;case"<a:dk1>":;case"</a:dk1>":;case"<a:lt1>":;case"</a:lt1>":;case"<a:dk2>":;case"</a:dk2>":;case"<a:lt2>":;case"</a:lt2>":;case"<a:accent1>":;case"</a:accent1>":;case"<a:accent2>":;case"</a:accent2>":;case"<a:accent3>":;case"</a:accent3>":;case"<a:accent4>":;case"</a:accent4>":;case"<a:accent5>":;case"</a:accent5>":;case"<a:accent6>":;case"</a:accent6>":;case"<a:hlink>":;case"</a:hlink>":;case"<a:folHlink>":;case"</a:folHlink>":if(n[0].charAt(1)==="/"){r.themeElements.clrScheme[$c.indexOf(n[0])]=a;a={}}else{a.name=n[0].slice(3,n[0].length-1)}break;default:if(t&&t.WTF)throw new Error("Unrecognized "+n[0]+" in clrScheme");}})}function Kc(){}function Yc(){}var Zc=/<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/;var Jc=/<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/;var qc=/<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;function Qc(e,r,t){r.themeElements={};var a;[["clrScheme",Zc,jc],["fontScheme",Jc,Kc],["fmtScheme",qc,Yc]].forEach(function(n){if(!(a=e.match(n[1])))throw new Error(n[0]+" not found in themeElements");n[2](a,r,t)})}var eh=/<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;function rh(e,r){if(!e||e.length===0)e=th();var t;var a={};if(!(t=e.match(eh)))throw new Error("themeElements not found in theme");Qc(t[0],a,r);a.raw=e;return a}function th(e,r){if(r&&r.themeXLSX)return r.themeXLSX;if(e&&typeof e.raw=="string")return e.raw;var t=[jr];t[t.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">';t[t.length]="<a:themeElements>";t[t.length]='<a:clrScheme name="Office">';t[t.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>';t[t.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>';t[t.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>';t[t.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>';t[t.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>';t[t.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>';t[t.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>';t[t.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>';t[t.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>';t[t.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>';t[t.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>';t[t.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>';t[t.length]="</a:clrScheme>";t[t.length]='<a:fontScheme name="Office">';t[t.length]="<a:majorFont>";t[t.length]='<a:latin typeface="Cambria"/>';t[t.length]='<a:ea typeface=""/>';t[t.length]='<a:cs typeface=""/>';t[t.length]='<a:font script="Jpan" typeface="ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯"/>';t[t.length]='<a:font script="Hang" typeface="ë§‘ì€ ê³ ë”•"/>';t[t.length]='<a:font script="Hans" typeface="å®‹ä½“"/>';t[t.length]='<a:font script="Hant" typeface="æ–°ç´°æ˜Žé«”"/>';t[t.length]='<a:font script="Arab" typeface="Times New Roman"/>';t[t.length]='<a:font script="Hebr" typeface="Times New Roman"/>';t[t.length]='<a:font script="Thai" typeface="Tahoma"/>';t[t.length]='<a:font script="Ethi" typeface="Nyala"/>';t[t.length]='<a:font script="Beng" typeface="Vrinda"/>';t[t.length]='<a:font script="Gujr" typeface="Shruti"/>';t[t.length]='<a:font script="Khmr" typeface="MoolBoran"/>';t[t.length]='<a:font script="Knda" typeface="Tunga"/>';t[t.length]='<a:font script="Guru" typeface="Raavi"/>';t[t.length]='<a:font script="Cans" typeface="Euphemia"/>';t[t.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>';t[t.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';t[t.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>';t[t.length]='<a:font script="Thaa" typeface="MV Boli"/>';t[t.length]='<a:font script="Deva" typeface="Mangal"/>';t[t.length]='<a:font script="Telu" typeface="Gautami"/>';t[t.length]='<a:font script="Taml" typeface="Latha"/>';t[t.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>';t[t.length]='<a:font script="Orya" typeface="Kalinga"/>';t[t.length]='<a:font script="Mlym" typeface="Kartika"/>';t[t.length]='<a:font script="Laoo" typeface="DokChampa"/>';t[t.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>';t[t.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>';t[t.length]='<a:font script="Viet" typeface="Times New Roman"/>';t[t.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>';t[t.length]='<a:font script="Geor" typeface="Sylfaen"/>';t[t.length]="</a:majorFont>";t[t.length]="<a:minorFont>";t[t.length]='<a:latin typeface="Calibri"/>';t[t.length]='<a:ea typeface=""/>';t[t.length]='<a:cs typeface=""/>';t[t.length]='<a:font script="Jpan" typeface="ï¼­ï¼³ ï¼°ã‚´ã‚·ãƒƒã‚¯"/>';t[t.length]='<a:font script="Hang" typeface="ë§‘ì€ ê³ ë”•"/>';t[t.length]='<a:font script="Hans" typeface="å®‹ä½“"/>';t[t.length]='<a:font script="Hant" typeface="æ–°ç´°æ˜Žé«”"/>';t[t.length]='<a:font script="Arab" typeface="Arial"/>';t[t.length]='<a:font script="Hebr" typeface="Arial"/>';t[t.length]='<a:font script="Thai" typeface="Tahoma"/>';t[t.length]='<a:font script="Ethi" typeface="Nyala"/>';t[t.length]='<a:font script="Beng" typeface="Vrinda"/>';t[t.length]='<a:font script="Gujr" typeface="Shruti"/>';t[t.length]='<a:font script="Khmr" typeface="DaunPenh"/>';t[t.length]='<a:font script="Knda" typeface="Tunga"/>';t[t.length]='<a:font script="Guru" typeface="Raavi"/>';t[t.length]='<a:font script="Cans" typeface="Euphemia"/>';t[t.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>';t[t.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';t[t.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>';t[t.length]='<a:font script="Thaa" typeface="MV Boli"/>';t[t.length]='<a:font script="Deva" typeface="Mangal"/>';t[t.length]='<a:font script="Telu" typeface="Gautami"/>';t[t.length]='<a:font script="Taml" typeface="Latha"/>';t[t.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>';t[t.length]='<a:font script="Orya" typeface="Kalinga"/>';t[t.length]='<a:font script="Mlym" typeface="Kartika"/>';t[t.length]='<a:font script="Laoo" typeface="DokChampa"/>';t[t.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>';t[t.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>';t[t.length]='<a:font script="Viet" typeface="Arial"/>';t[t.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>';t[t.length]='<a:font script="Geor" typeface="Sylfaen"/>';t[t.length]="</a:minorFont>";t[t.length]="</a:fontScheme>";t[t.length]='<a:fmtScheme name="Office">';t[t.length]="<a:fillStyleLst>";t[t.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';t[t.length]='<a:gradFill rotWithShape="1">';t[t.length]="<a:gsLst>";t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';t[t.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';t[t.length]="</a:gsLst>";t[t.length]='<a:lin ang="16200000" scaled="1"/>';t[t.length]="</a:gradFill>";t[t.length]='<a:gradFill rotWithShape="1">';t[t.length]="<a:gsLst>";t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>';t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';t[t.length]="</a:gsLst>";t[t.length]='<a:lin ang="16200000" scaled="0"/>';t[t.length]="</a:gradFill>";t[t.length]="</a:fillStyleLst>";t[t.length]="<a:lnStyleLst>";t[t.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>';t[t.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';t[t.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';t[t.length]="</a:lnStyleLst>";t[t.length]="<a:effectStyleLst>";t[t.length]="<a:effectStyle>";t[t.length]="<a:effectLst>";t[t.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>';t[t.length]="</a:effectLst>";t[t.length]="</a:effectStyle>";t[t.length]="<a:effectStyle>";t[t.length]="<a:effectLst>";t[t.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';t[t.length]="</a:effectLst>";t[t.length]="</a:effectStyle>";t[t.length]="<a:effectStyle>";t[t.length]="<a:effectLst>";t[t.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';t[t.length]="</a:effectLst>";t[t.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>';t[t.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>';t[t.length]="</a:effectStyle>";t[t.length]="</a:effectStyleLst>";t[t.length]="<a:bgFillStyleLst>";t[t.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';t[t.length]='<a:gradFill rotWithShape="1">';t[t.length]="<a:gsLst>";t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';t[t.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>';t[t.length]="</a:gsLst>";t[t.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>';t[t.length]="</a:gradFill>";t[t.length]='<a:gradFill rotWithShape="1">';t[t.length]="<a:gsLst>";t[t.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';t[t.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>';t[t.length]="</a:gsLst>";t[t.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>';t[t.length]="</a:gradFill>";t[t.length]="</a:bgFillStyleLst>";t[t.length]="</a:fmtScheme>";t[t.length]="</a:themeElements>";t[t.length]="<a:objectDefaults>";t[t.length]="<a:spDef>";t[t.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>';t[t.length]="</a:spDef>";t[t.length]="<a:lnDef>";t[t.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>';t[t.length]="</a:lnDef>";t[t.length]="</a:objectDefaults>";t[t.length]="<a:extraClrSchemeLst/>";t[t.length]="</a:theme>";return t.join("")}function ah(e,r,t){var a=e.l+r;var n=e._R(4);if(n===124226)return;if(!t.cellStyles){e.l=a;return}var i=e.slice(e.l);e.l=a;var s;try{s=Gr(i,{type:"array"})}catch(f){return}var l=Wr(s,"theme/theme/theme1.xml",true);if(!l)return;return rh(l,t)}function nh(e){return e._R(4)}function ih(e){var r={};r.xclrType=e._R(2);r.nTintShade=e._R(2);switch(r.xclrType){case 0:e.l+=4;break;case 1:r.xclrValue=sh(e,4);break;case 2:r.xclrValue=Is(e,4);break;case 3:r.xclrValue=nh(e,4);break;case 4:e.l+=4;break;}e.l+=8;return r}function sh(e,r){return Ta(e,r)}function fh(e,r){return Ta(e,r)}function lh(e){var r=e._R(2);var t=e._R(2)-4;var a=[r];switch(r){case 4:;case 5:;case 7:;case 8:;case 9:;case 10:;case 11:;case 13:a[1]=ih(e,t);break;case 6:a[1]=fh(e,t);break;case 14:;case 15:a[1]=e._R(t===1?1:2);break;default:throw new Error("Unrecognized ExtProp type: "+r+" "+t);}return a}function oh(e,r){var t=e.l+r;e.l+=2;var a=e._R(2);e.l+=2;var n=e._R(2);var i=[];while(n-- >0)i.push(lh(e,t-e.l));return{ixfe:a,ext:i}}function ch(e,r){r.forEach(function(e){switch(e[0]){case 4:break;case 5:break;case 6:break;case 7:break;case 8:break;case 9:break;case 10:break;case 11:break;case 13:break;case 14:break;case 15:break;}})}function hh(e,r){return{flags:e._R(4),version:e._R(4),name:Qa(e,r-8)}}function uh(e){var r=Aa(12+2*e.name.length);r._W(4,e.flags);r._W(4,e.version);en(e.name,r);return r.slice(0,r.l)}function dh(e){var r=[];var t=e._R(4);while(t-- >0)r.push([e._R(4),e._R(4)]);return r}function vh(e){var r=Aa(4+8*e.length);r._W(4,e.length);for(var t=0;t<e.length;++t){r._W(4,e[t][0]);r._W(4,e[t][1])}return r}function ph(e,r){var t=Aa(8+2*r.length);t._W(4,e);en(r,t);return t.slice(0,t.l)}function mh(e){e.l+=4;return e._R(4)!=0}function gh(e,r){var t=Aa(8);t._W(4,e);t._W(4,r?1:0);return t}function bh(e,r,t){var a={Types:[],Cell:[],Value:[]};var n=t||{};var i=[];var s=false;var f=2;ya(e,function(e,r,t){switch(t){case 335:a.Types.push({name:e.name});break;case 51:e.forEach(function(e){if(f==1)a.Cell.push({type:a.Types[e[0]-1].name,index:e[1]});else if(f==0)a.Value.push({type:a.Types[e[0]-1].name,index:e[1]})});break;case 337:f=e?1:0;break;case 338:f=2;break;case 35:i.push(t);s=true;break;case 36:i.pop();s=false;break;default:if(r.T){}else if(!s||n.WTF&&i[i.length-1]!=35)throw new Error("Unexpected record 0x"+t.toString(16));}});return a}function wh(){var e=Ea();Ca(e,332);Ca(e,334,qa(1));Ca(e,335,uh({name:"XLDAPR",version:12e4,flags:3496657072}));Ca(e,336);Ca(e,339,ph(1,"XLDAPR"));Ca(e,52);Ca(e,35,qa(514));Ca(e,4096,qa(0));Ca(e,4097,us(1));Ca(e,36);Ca(e,53);Ca(e,340);Ca(e,337,gh(1,true));Ca(e,51,vh([[1,0]]));Ca(e,338);Ca(e,333);return e.end()}function kh(e,r,t){var a={Types:[],Cell:[],Value:[]};if(!e)return a;var n=false;var i=2;var s;e.replace(Jr,function(e){var r=et(e);switch(rt(r[0])){case"<?xml":break;case"<metadata":;case"</metadata>":break;case"<metadataTypes":;case"</metadataTypes>":break;case"<metadataType":a.Types.push({name:r.name});break;case"</metadataType>":break;case"<futureMetadata":for(var f=0;f<a.Types.length;++f)if(a.Types[f].name==r.name)s=a.Types[f];break;case"</futureMetadata>":break;case"<bk>":break;case"</bk>":break;case"<rc":if(i==1)a.Cell.push({type:a.Types[r.t-1].name,index:+r.v});else if(i==0)a.Value.push({type:a.Types[r.t-1].name,index:+r.v});break;case"</rc>":break;case"<cellMetadata":i=1;break;case"</cellMetadata>":i=2;break;case"<valueMetadata":i=0;break;case"</valueMetadata>":i=2;break;case"<extLst":;case"<extLst>":;case"</extLst>":;case"<extLst/>":break;case"<ext":n=true;break;case"</ext>":n=false;break;case"<rvb":if(!s)break;if(!s.offsets)s.offsets=[];s.offsets.push(+r.i);break;default:if(!n&&(t==null?void 0:t.WTF))throw new Error("unrecognized "+r[0]+" in metadata");}return e});return a}function Th(){var e=[jr];e.push('<metadata xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:xlrd="http://schemas.microsoft.com/office/spreadsheetml/2017/richdata" xmlns:xda="http://schemas.microsoft.com/office/spreadsheetml/2017/dynamicarray">\n  <metadataTypes count="1">\n    <metadataType name="XLDAPR" minSupportedVersion="120000" copy="1" pasteAll="1" pasteValues="1" merge="1" splitFirst="1" rowColShift="1" clearFormats="1" clearComments="1" assign="1" coerce="1" cellMeta="1"/>\n  </metadataTypes>\n  <futureMetadata name="XLDAPR" count="1">\n    <bk>\n      <extLst>\n        <ext uri="{bdbb8cdc-fa1e-496e-a857-3c3f30c029c3}">\n          <xda:dynamicArrayProperties fDynamic="1" fCollapsed="0"/>\n        </ext>\n      </extLst>\n    </bk>\n  </futureMetadata>\n  <cellMetadata count="1">\n    <bk>\n      <rc t="1" v="0"/>\n    </bk>\n  </cellMetadata>\n</metadata>');return e.join("")}function Ah(e){var r=[];if(!e)return r;var t=1;(e.match(Jr)||[]).forEach(function(e){var a=et(e);switch(a[0]){case"<?xml":break;case"<calcChain":;case"<calcChain>":;case"</calcChain>":break;case"<c":delete a[0];if(a.i)t=a.i;else a.i=t;r.push(a);break;}});return r}function yh(e){var r={};r.i=e._R(4);var t={};t.r=e._R(4);t.c=e._R(4);r.r=Wa(t);var a=e._R(1);if(a&2)r.l="1";if(a&8)r.a="1";return r}function Eh(e,r,t){var a=[];var n=false;ya(e,function i(e,r,s){switch(s){case 63:a.push(e);break;default:if(r.T){}else if(!n||t.WTF)throw new Error("Unexpected record 0x"+s.toString(16));}});return a}function Ch(){}function _h(e,r,t,a){if(!e)return e;var n=a||{};var i=false,s=false;ya(e,function f(e,r,t){if(s)return;switch(t){case 359:;case 363:;case 364:;case 366:;case 367:;case 368:;case 369:;case 370:;case 371:;case 472:;case 577:;case 578:;case 579:;case 580:;case 581:;case 582:;case 583:;case 584:;case 585:;case 586:;case 587:break;case 35:i=true;break;case 36:i=false;break;default:if(r.T){}else if(!i||n.WTF)throw new Error("Unexpected record 0x"+t.toString(16));}},n)}function Sh(e,r){if(!e)return"??";var t=(e.match(/<c:chart [^>]*r:id="([^"]*)"/)||["",""])[1];return r["!id"][t].Target}var xh=/<(?:\w+:)?shape(?:[^\w][^>]*)?>([\s\S]*?)<\/(?:\w+:)?shape>/g;function Oh(e,r,t){var a=0;(e.match(xh)||[]).forEach(function(e){var n="";var i=true;var s=-1;var f=-1,l=-1;e.replace(Jr,function(r,t){var a=et(r);switch(rt(a[0])){case"<ClientData":if(a.ObjectType)n=a.ObjectType;break;case"<Visible":;case"<Visible/>":i=false;break;case"<Row":;case"<Row>":s=t+r.length;break;case"</Row>":f=+e.slice(s,t).trim();break;case"<Column":;case"<Column>":s=t+r.length;break;case"</Column>":l=+e.slice(s,t).trim();break;}return""});switch(n){case"Note":var o=Hk(r,f>=0&&l>=0?Wa({r:f,c:l}):t[a].ref);if(o.c){o.c.hidden=i}++a;break;}})}function Rh(e,r,t){var a=[21600,21600];var n=["m0,0l0",a[1],a[0],a[1],a[0],"0xe"].join(",");var i=[Rt("xml",null,{"xmlns:v":Mt.v,"xmlns:o":Mt.o,"xmlns:x":Mt.x,"xmlns:mv":Mt.mv}).replace(/\/>/,">"),Rt("o:shapelayout",Rt("o:idmap",null,{"v:ext":"edit",data:e}),{"v:ext":"edit"})];var s=65536*e;var f=r||[];if(f.length>0)i.push(Rt("v:shapetype",[Rt("v:stroke",null,{joinstyle:"miter"}),Rt("v:path",null,{gradientshapeok:"t","o:connecttype":"rect"})].join(""),{id:"_x0000_t202",coordsize:a.join(","),"o:spt":202,path:n}));f.forEach(function(e){++s;i.push(Ih(e,s))});i.push("</xml>");return i.join("")}function Ih(e,r,t){var a=Ba(e[0]);var n={color2:"#BEFF82",type:"gradient"};if(n.type=="gradient")n.angle="-180";var i=n.type=="gradient"?Rt("o:fill",null,{type:"gradientUnscaled","v:ext":"view"}):null;var s=Rt("v:fill",i,n);var f={on:"t",obscured:"t"};return["<v:shape"+Ot({id:"_x0000_s"+r,type:"#_x0000_t202",style:"position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10"+(e[1].hidden?";visibility:hidden":""),fillcolor:"#ECFAD4",strokecolor:"#edeaa1"})+">",s,Rt("v:shadow",null,f),Rt("v:path",null,{"o:connecttype":"none"}),'<v:textbox><div style="text-align:left"></div></v:textbox>','<x:ClientData ObjectType="Note">',"<x:MoveWithCells/>","<x:SizeWithCells/>",xt("x:Anchor",[a.c+1,0,a.r+1,0,a.c+3,20,a.r+5,20].join(",")),xt("x:AutoFill","False"),xt("x:Row",String(a.r)),xt("x:Column",String(a.c)),e[1].hidden?"":"<x:Visible/>","</x:ClientData>","</v:shape>"].join("")}function Nh(e,r,t,a){var n=e["!data"]!=null;var i;r.forEach(function(r){var s=Ba(r.ref);if(s.r<0||s.c<0)return;if(n){if(!e["!data"][s.r])e["!data"][s.r]=[];i=e["!data"][s.r][s.c]}else i=e[r.ref];if(!i){i={t:"z"};if(n)e["!data"][s.r][s.c]=i;else e[r.ref]=i;var f=Ga(e["!ref"]||"BDWGO1000001:A1");if(f.s.r>s.r)f.s.r=s.r;if(f.e.r<s.r)f.e.r=s.r;if(f.s.c>s.c)f.s.c=s.c;if(f.e.c<s.c)f.e.c=s.c;var l=Ha(f);e["!ref"]=l}if(!i.c)i.c=[];var o={a:r.author,t:r.t,r:r.r,T:t};if(r.h)o.h=r.h;for(var c=i.c.length-1;c>=0;--c){if(!t&&i.c[c].T)return;if(t&&!i.c[c].T)i.c.splice(c,1)}if(t&&a)for(c=0;c<a.length;++c){if(o.a==a[c].id){o.a=a[c].name||o.a;break}}i.c.push(o)})}function Fh(e,r){if(e.match(/<(?:\w+:)?comments *\/>/))return[];var t=[];var a=[];var n=e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);if(n&&n[1])n[1].split(/<\/\w*:?author>/).forEach(function(e){if(e===""||e.trim()==="")return;var r=e.match(/<(?:\w+:)?author[^>]*>(.*)/);if(r)t.push(r[1])});var i=e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);if(i&&i[1])i[1].split(/<\/\w*:?comment>/).forEach(function(e){if(e===""||e.trim()==="")return;var n=e.match(/<(?:\w+:)?comment[^>]*>/);if(!n)return;var i=et(n[0]);var s={author:i.authorId&&t[i.authorId]||"sheetjsghost",ref:i.ref,guid:i.guid};var f=Ba(i.ref);if(r.sheetRows&&r.sheetRows<=f.r)return;var l=e.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/);var o=!!l&&!!l[1]&&to(l[1])||{r:"",t:"",h:""};s.r=o.r;if(o.r=="<t></t>")o.t=o.h="";s.t=(o.t||"").replace(/\r\n/g,"\n").replace(/\r/g,"\n");if(r.cellHTML)s.h=o.h;a.push(s)});return a}function Dh(e){var r=[jr,Rt("comments",null,{xmlns:Lt[0]})];var t=[];r.push("<authors>");e.forEach(function(e){e[1].forEach(function(e){var a=ft(e.a);if(t.indexOf(a)==-1){t.push(a);r.push("<author>"+a+"</author>")}if(e.T&&e.ID&&t.indexOf("tc="+e.ID)==-1){t.push("tc="+e.ID);r.push("<author>"+"tc="+e.ID+"</author>")}})});if(t.length==0){t.push("SheetJ5");r.push("<author>SheetJ5</author>")}r.push("</authors>");r.push("<commentList>");e.forEach(function(e){var a=0,n=[],i=0;if(e[1][0]&&e[1][0].T&&e[1][0].ID)a=t.indexOf("tc="+e[1][0].ID);e[1].forEach(function(e){if(e.a)a=t.indexOf(ft(e.a));if(e.T)++i;n.push(e.t==null?"":ft(e.t))});if(i===0){e[1].forEach(function(a){r.push('<comment ref="'+e[0]+'" authorId="'+t.indexOf(ft(a.a))+'"><text>');r.push(xt("t",a.t==null?"":ft(a.t)));r.push("</text></comment>")})}else{if(e[1][0]&&e[1][0].T&&e[1][0].ID)a=t.indexOf("tc="+e[1][0].ID);r.push('<comment ref="'+e[0]+'" authorId="'+a+'"><text>');var s="Comment:\n    "+n[0]+"\n";for(var f=1;f<n.length;++f)s+="Reply:\n    "+n[f]+"\n";r.push(xt("t",ft(s)));r.push("</text></comment>")}});r.push("</commentList>");if(r.length>2){r[r.length]="</comments>";r[1]=r[1].replace("/>",">")}return r.join("")}function Ph(e,r){var t=[];var a=false,n={},i=0;e.replace(Jr,function s(f,l){var o=et(f);switch(rt(o[0])){case"<?xml":break;case"<ThreadedComments":break;case"</ThreadedComments>":break;case"<threadedComment":n={author:o.personId,guid:o.id,ref:o.ref,T:1};break;case"</threadedComment>":if(n.t!=null)t.push(n);break;case"<text>":;case"<text":i=l+f.length;break;case"</text>":
n.t=e.slice(i,l).replace(/\r\n/g,"\n").replace(/\r/g,"\n");break;case"<mentions":;case"<mentions>":a=true;break;case"</mentions>":a=false;break;case"<extLst":;case"<extLst>":;case"</extLst>":;case"<extLst/>":break;case"<ext":a=true;break;case"</ext>":a=false;break;default:if(!a&&r.WTF)throw new Error("unrecognized "+o[0]+" in threaded comments");}return f});return t}function Lh(e,r,t){var a=[jr,Rt("ThreadedComments",null,{xmlns:Pt.TCMNT}).replace(/[\/]>/,">")];e.forEach(function(e){var n="";(e[1]||[]).forEach(function(i,s){if(!i.T){delete i.ID;return}if(i.a&&r.indexOf(i.a)==-1)r.push(i.a);var f={ref:e[0],id:"{54EE7951-7262-4200-6969-"+("000000000000"+t.tcid++).slice(-12)+"}"};if(s==0)n=f.id;else f.parentId=n;i.ID=f.id;if(i.a)f.personId="{54EE7950-7262-4200-6969-"+("000000000000"+r.indexOf(i.a)).slice(-12)+"}";a.push(Rt("threadedComment",xt("text",i.t||""),f))})});a.push("</ThreadedComments>");return a.join("")}function Mh(e,r){var t=[];var a=false;e.replace(Jr,function n(e){var n=et(e);switch(rt(n[0])){case"<?xml":break;case"<personList":break;case"</personList>":break;case"<person":t.push({name:n.displayname,id:n.id});break;case"</person>":break;case"<extLst":;case"<extLst>":;case"</extLst>":;case"<extLst/>":break;case"<ext":a=true;break;case"</ext>":a=false;break;default:if(!a&&r.WTF)throw new Error("unrecognized "+n[0]+" in threaded comments");}return e});return t}function Uh(e){var r=[jr,Rt("personList",null,{xmlns:Pt.TCMNT,"xmlns:x":Lt[0]}).replace(/[\/]>/,">")];e.forEach(function(e,t){r.push(Rt("person",null,{displayName:e,id:"{54EE7950-7262-4200-6969-"+("000000000000"+t).slice(-12)+"}",userId:e,providerId:"None"}))});r.push("</personList>");return r.join("")}function Bh(e){var r={};r.iauthor=e._R(4);var t=yn(e,16);r.rfx=t.s;r.ref=Wa(t.s);e.l+=16;return r}function Wh(e,r){if(r==null)r=Aa(36);r._W(4,e[1].iauthor);En(e[0],r);r._W(4,0);r._W(4,0);r._W(4,0);r._W(4,0);return r}var zh=Qa;function Hh(e){return en(e.slice(0,54))}function Vh(e,r){var t=[];var a=[];var n={};var i=false;ya(e,function s(e,f,l){switch(l){case 632:a.push(e);break;case 635:n=e;break;case 637:n.t=e.t;n.h=e.h;n.r=e.r;break;case 636:n.author=a[n.iauthor];delete n.iauthor;if(r.sheetRows&&n.rfx&&r.sheetRows<=n.rfx.r)break;if(!n.t)n.t="";delete n.rfx;t.push(n);break;case 3072:break;case 35:i=true;break;case 36:i=false;break;case 37:break;case 38:break;default:if(f.T){}else if(!i||r.WTF)throw new Error("Unexpected record 0x"+l.toString(16));}});return t}function Xh(e){var r=Ea();var t=[];Ca(r,628);Ca(r,630);e.forEach(function(e){e[1].forEach(function(e){if(t.indexOf(e.a)>-1)return;t.push(e.a.slice(0,54));Ca(r,632,Hh(e.a));if(e.T&&e.ID&&t.indexOf("tc="+e.ID)==-1){t.push("tc="+e.ID);Ca(r,632,Hh("tc="+e.ID))}})});Ca(r,631);Ca(r,633);e.forEach(function(e){e[1].forEach(function(a){var n=-1;if(a.ID)n=t.indexOf("tc="+a.ID);if(n==-1&&e[1][0].T&&e[1][0].ID)n=t.indexOf("tc="+e[1][0].ID);if(n==-1)n=t.indexOf(a.a);a.iauthor=n;var i={s:Ba(e[0]),e:Ba(e[0])};Ca(r,635,Wh([i,a]));if(a.t&&a.t.length>0)Ca(r,637,fn(a));Ca(r,636);delete a.iauthor})});Ca(r,634);Ca(r,629);return r.end()}var Gh="application/vnd.ms-office.vbaProject";function $h(e){var r=qe.utils.cfb_new({root:"R"});e.FullPaths.forEach(function(t,a){if(t.slice(-1)==="/"||!t.match(/_VBA_PROJECT_CUR/))return;var n=t.replace(/^[^\/]*/,"R").replace(/\/_VBA_PROJECT_CUR\u0000*/,"");qe.utils.cfb_add(r,n,e.FileIndex[a].content)});return qe.write(r)}function jh(e,r){r.FullPaths.forEach(function(t,a){if(a==0)return;var n=t.replace(/[^\/]*[\/]/,"/_VBA_PROJECT_CUR/");if(n.slice(-1)!=="/")qe.utils.cfb_add(e,n,r.FileIndex[a].content)})}var Kh=["xlsb","xlsm","xlam","biff8","xla"];function Yh(){return{"!type":"dialog"}}function Zh(){return{"!type":"dialog"}}function Jh(){return{"!type":"macro"}}function qh(){return{"!type":"macro"}}var Qh=function(){var e=/(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g;var r={r:0,c:0};function t(e,t,a,n){var i=false,s=false;if(a.length==0)s=true;else if(a.charAt(0)=="["){s=true;a=a.slice(1,-1)}if(n.length==0)i=true;else if(n.charAt(0)=="["){i=true;n=n.slice(1,-1)}var f=a.length>0?parseInt(a,10)|0:0,l=n.length>0?parseInt(n,10)|0:0;if(i)l+=r.c;else--l;if(s)f+=r.r;else--f;return t+(i?"":"$")+Pa(l)+(s?"":"$")+Ia(f)}return function a(n,i){r=i;return n.replace(e,t)}}();var eu=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;var ru=function(){return function e(r,t){return r.replace(eu,function(e,r,a,n,i,s){var f=Da(n)-(a?0:t.c);var l=Ra(s)-(i?0:t.r);var o=i=="$"?l+1:l==0?"":"["+l+"]";var c=a=="$"?f+1:f==0?"":"["+f+"]";return r+"R"+o+"C"+c})}}();function tu(e,r){return e.replace(eu,function(e,t,a,n,i,s){return t+(a=="$"?a+n:Pa(Da(n)+r.c))+(i=="$"?i+s:Ia(Ra(s)+r.r))})}function au(e,r,t){var a=za(r),n=a.s,i=Ba(t);var s={r:i.r-n.r,c:i.c-n.c};return tu(e,s)}function nu(e){if(e.length==1)return false;return true}function iu(e){return e.replace(/_xlfn\./g,"")}function su(e){e.l+=1;return}function fu(e,r){var t=e._R(r==1?1:2);return[t&16383,t>>14&1,t>>15&1]}function lu(e,r,t){var a=2;if(t){if(t.biff>=2&&t.biff<=5)return ou(e,r,t);else if(t.biff==12)a=4}var n=e._R(a),i=e._R(a);var s=fu(e,2);var f=fu(e,2);return{s:{r:n,c:s[0],cRel:s[1],rRel:s[2]},e:{r:i,c:f[0],cRel:f[1],rRel:f[2]}}}function ou(e){var r=fu(e,2),t=fu(e,2);var a=e._R(1);var n=e._R(1);return{s:{r:r[0],c:a,cRel:r[1],rRel:r[2]},e:{r:t[0],c:n,cRel:t[1],rRel:t[2]}}}function cu(e,r,t){if(t.biff<8)return ou(e,r,t);var a=e._R(t.biff==12?4:2),n=e._R(t.biff==12?4:2);var i=fu(e,2);var s=fu(e,2);return{s:{r:a,c:i[0],cRel:i[1],rRel:i[2]},e:{r:n,c:s[0],cRel:s[1],rRel:s[2]}}}function hu(e,r,t){if(t&&t.biff>=2&&t.biff<=5)return uu(e,r,t);var a=e._R(t&&t.biff==12?4:2);var n=fu(e,2);return{r:a,c:n[0],cRel:n[1],rRel:n[2]}}function uu(e){var r=fu(e,2);var t=e._R(1);return{r:r[0],c:t,cRel:r[1],rRel:r[2]}}function du(e){var r=e._R(2);var t=e._R(2);return{r:r,c:t&255,fQuoted:!!(t&16384),cRel:t>>15,rRel:t>>15}}function vu(e,r,t){var a=t&&t.biff?t.biff:8;if(a>=2&&a<=5)return pu(e,r,t);var n=e._R(a>=12?4:2);var i=e._R(2);var s=(i&16384)>>14,f=(i&32768)>>15;i&=16383;if(f==1)while(n>524287)n-=1048576;if(s==1)while(i>8191)i=i-16384;return{r:n,c:i,cRel:s,rRel:f}}function pu(e){var r=e._R(2);var t=e._R(1);var a=(r&32768)>>15,n=(r&16384)>>14;r&=16383;if(a==1&&r>=8192)r=r-16384;if(n==1&&t>=128)t=t-256;return{r:r,c:t,cRel:n,rRel:a}}function mu(e,r,t){var a=(e[e.l++]&96)>>5;var n=lu(e,t.biff>=2&&t.biff<=5?6:8,t);return[a,n]}function gu(e,r,t){var a=(e[e.l++]&96)>>5;var n=e._R(2,"i");var i=8;if(t)switch(t.biff){case 5:e.l+=12;i=6;break;case 12:i=12;break;}var s=lu(e,i,t);return[a,n,s]}function bu(e,r,t){var a=(e[e.l++]&96)>>5;e.l+=t&&t.biff>8?12:t.biff<8?6:8;return[a]}function wu(e,r,t){var a=(e[e.l++]&96)>>5;var n=e._R(2);var i=8;if(t)switch(t.biff){case 5:e.l+=12;i=6;break;case 12:i=12;break;}e.l+=i;return[a,n]}function ku(e,r,t){var a=(e[e.l++]&96)>>5;var n=cu(e,r-1,t);return[a,n]}function Tu(e,r,t){var a=(e[e.l++]&96)>>5;e.l+=t.biff==2?6:t.biff==12?14:7;return[a]}function Au(e){var r=e[e.l+1]&1;var t=1;e.l+=4;return[r,t]}function yu(e,r,t){e.l+=2;var a=e._R(t&&t.biff==2?1:2);var n=[];for(var i=0;i<=a;++i)n.push(e._R(t&&t.biff==2?1:2));return n}function Eu(e,r,t){var a=e[e.l+1]&255?1:0;e.l+=2;return[a,e._R(t&&t.biff==2?1:2)]}function Cu(e,r,t){var a=e[e.l+1]&255?1:0;e.l+=2;return[a,e._R(t&&t.biff==2?1:2)]}function _u(e){var r=e[e.l+1]&255?1:0;e.l+=2;return[r,e._R(2)]}function Su(e,r,t){var a=e[e.l+1]&255?1:0;e.l+=t&&t.biff==2?3:4;return[a]}function xu(e){var r=e._R(1),t=e._R(1);return[r,t]}function Ou(e){e._R(2);return xu(e,2)}function Ru(e){e._R(2);return xu(e,2)}function Iu(e,r,t){var a=(e[e.l]&96)>>5;e.l+=1;var n=hu(e,0,t);return[a,n]}function Nu(e,r,t){var a=(e[e.l]&96)>>5;e.l+=1;var n=vu(e,0,t);return[a,n]}function Fu(e,r,t){var a=(e[e.l]&96)>>5;e.l+=1;var n=e._R(2);if(t&&t.biff==5)e.l+=12;var i=hu(e,0,t);return[a,n,i]}function Du(e,r,t){var a=(e[e.l]&96)>>5;e.l+=1;var n=e._R(t&&t.biff<=3?1:2);return[lv[n],fv[n],a]}function Pu(e,r,t){var a=e[e.l++];var n=e._R(1),i=t&&t.biff<=3?[a==88?-1:0,e._R(1)]:Lu(e);return[n,(i[0]===0?fv:sv)[i[1]]]}function Lu(e){return[e[e.l+1]>>7,e._R(2)&32767]}function Mu(e,r,t){e.l+=t&&t.biff==2?3:4;return}function Uu(e,r,t){e.l++;if(t&&t.biff==12)return[e._R(4,"i"),0];var a=e._R(2);var n=e._R(t&&t.biff==2?1:2);return[a,n]}function Bu(e){e.l++;return ei[e._R(1)]}function Wu(e){e.l++;return e._R(2)}function zu(e){e.l++;return e._R(1)!==0}function Hu(e){e.l++;return Cn(e,8)}function Vu(e,r,t){e.l++;return ms(e,r-1,t)}function Xu(e,r){var t=[e._R(1)];if(r==12)switch(t[0]){case 2:t[0]=4;break;case 4:t[0]=16;break;case 0:t[0]=1;break;case 1:t[0]=2;break;}switch(t[0]){case 4:t[1]=os(e,1)?"TRUE":"FALSE";if(r!=12)e.l+=7;break;case 37:;case 16:t[1]=ei[e[e.l]];e.l+=r==12?4:8;break;case 0:e.l+=8;break;case 1:t[1]=Cn(e,8);break;case 2:t[1]=Ts(e,0,{biff:r>0&&r<8?2:r});break;default:throw new Error("Bad SerAr: "+t[0]);}return t}function Gu(e,r,t){var a=e._R(t.biff==12?4:2);var n=[];for(var i=0;i!=a;++i)n.push((t.biff==12?yn:Ws)(e,8));return n}function $u(e,r,t){var a=0,n=0;if(t.biff==12){a=e._R(4);n=e._R(4)}else{n=1+e._R(1);a=1+e._R(2)}if(t.biff>=2&&t.biff<8){--a;if(--n==0)n=256}for(var i=0,s=[];i!=a&&(s[i]=[]);++i)for(var f=0;f!=n;++f)s[i][f]=Xu(e,t.biff);return s}function ju(e,r,t){var a=e._R(1)>>>5&3;var n=!t||t.biff>=8?4:2;var i=e._R(n);switch(t.biff){case 2:e.l+=5;break;case 3:;case 4:e.l+=8;break;case 5:e.l+=12;break;}return[a,0,i]}function Ku(e,r,t){if(t.biff==5)return Yu(e,r,t);var a=e._R(1)>>>5&3;var n=e._R(2);var i=e._R(4);return[a,n,i]}function Yu(e){var r=e._R(1)>>>5&3;var t=e._R(2,"i");e.l+=8;var a=e._R(2);e.l+=12;return[r,t,a]}function Zu(e,r,t){var a=e._R(1)>>>5&3;e.l+=t&&t.biff==2?3:4;var n=e._R(t&&t.biff==2?1:2);return[a,n]}function Ju(e,r,t){var a=e._R(1)>>>5&3;var n=e._R(t&&t.biff==2?1:2);return[a,n]}function qu(e,r,t){var a=e._R(1)>>>5&3;e.l+=4;if(t.biff<8)e.l--;if(t.biff==12)e.l+=2;return[a]}function Qu(e,r,t){var a=(e[e.l++]&96)>>5;var n=e._R(2);var i=4;if(t)switch(t.biff){case 5:i=15;break;case 12:i=6;break;}e.l+=i;return[a,n]}var ed=Ta;var rd=Ta;var td=Ta;function ad(e,r,t){e.l+=2;return[du(e,4,t)]}function nd(e){e.l+=6;return[]}var id=ad;var sd=nd;var fd=nd;var ld=ad;function od(e){e.l+=2;return[hs(e),e._R(2)&1]}var cd=ad;var hd=od;var ud=nd;var dd=ad;var vd=ad;var pd=["Data","All","Headers","??","?Data2","??","?DataHeaders","??","Totals","??","??","??","?DataTotals","??","??","??","?Current"];function md(e){e.l+=2;var r=e._R(2);var t=e._R(2);var a=e._R(4);var n=e._R(2);var i=e._R(2);var s=pd[t>>2&31];return{ixti:r,coltype:t&3,rt:s,idx:a,c:n,C:i}}function gd(e){e.l+=2;return[e._R(4)]}function bd(e,r,t){e.l+=5;e.l+=2;e.l+=t.biff==2?1:4;return["PTGSHEET"]}function wd(e,r,t){e.l+=t.biff==2?4:5;return["PTGENDSHEET"]}function kd(e){var r=e._R(1)>>>5&3;var t=e._R(2);return[r,t]}function Td(e){var r=e._R(1)>>>5&3;var t=e._R(2);return[r,t]}function Ad(e){e.l+=4;return[0,0]}var yd={1:{n:"PtgExp",f:Uu},2:{n:"PtgTbl",f:td},3:{n:"PtgAdd",f:su},4:{n:"PtgSub",f:su},5:{n:"PtgMul",f:su},6:{n:"PtgDiv",f:su},7:{n:"PtgPower",f:su},8:{n:"PtgConcat",f:su},9:{n:"PtgLt",f:su},10:{n:"PtgLe",f:su},11:{n:"PtgEq",f:su},12:{n:"PtgGe",f:su},13:{n:"PtgGt",f:su},14:{n:"PtgNe",f:su},15:{n:"PtgIsect",f:su},16:{n:"PtgUnion",f:su},17:{n:"PtgRange",f:su},18:{n:"PtgUplus",f:su},19:{n:"PtgUminus",f:su},20:{n:"PtgPercent",f:su},21:{n:"PtgParen",f:su},22:{n:"PtgMissArg",f:su},23:{n:"PtgStr",f:Vu},26:{n:"PtgSheet",f:bd},27:{n:"PtgEndSheet",f:wd},28:{n:"PtgErr",f:Bu},29:{n:"PtgBool",f:zu},30:{n:"PtgInt",f:Wu},31:{n:"PtgNum",f:Hu},32:{n:"PtgArray",f:Tu},33:{n:"PtgFunc",f:Du},34:{n:"PtgFuncVar",f:Pu},35:{n:"PtgName",f:ju},36:{n:"PtgRef",f:Iu},37:{n:"PtgArea",f:mu},38:{n:"PtgMemArea",f:Zu},39:{n:"PtgMemErr",f:ed},40:{n:"PtgMemNoMem",f:rd},41:{n:"PtgMemFunc",f:Ju},42:{n:"PtgRefErr",f:qu},43:{n:"PtgAreaErr",f:bu},44:{n:"PtgRefN",f:Nu},45:{n:"PtgAreaN",f:ku},46:{n:"PtgMemAreaN",f:kd},47:{n:"PtgMemNoMemN",f:Td},57:{n:"PtgNameX",f:Ku},58:{n:"PtgRef3d",f:Fu},59:{n:"PtgArea3d",f:gu},60:{n:"PtgRefErr3d",f:Qu},61:{n:"PtgAreaErr3d",f:wu},255:{}};var Ed={64:32,96:32,65:33,97:33,66:34,98:34,67:35,99:35,68:36,100:36,69:37,101:37,70:38,102:38,71:39,103:39,72:40,104:40,73:41,105:41,74:42,106:42,75:43,107:43,76:44,108:44,77:45,109:45,78:46,110:46,79:47,111:47,88:34,120:34,89:57,121:57,90:58,122:58,91:59,123:59,92:60,124:60,93:61,125:61};var Cd={1:{n:"PtgElfLel",f:od},2:{n:"PtgElfRw",f:dd},3:{n:"PtgElfCol",f:id},6:{n:"PtgElfRwV",f:vd},7:{n:"PtgElfColV",f:ld},10:{n:"PtgElfRadical",f:cd},11:{n:"PtgElfRadicalS",f:ud},13:{n:"PtgElfColS",f:sd},15:{n:"PtgElfColSV",f:fd},16:{n:"PtgElfRadicalLel",f:hd},25:{n:"PtgList",f:md},29:{n:"PtgSxName",f:gd},255:{}};var _d={0:{n:"PtgAttrNoop",f:Ad},1:{n:"PtgAttrSemi",f:Su},2:{n:"PtgAttrIf",f:Cu},4:{n:"PtgAttrChoose",f:yu},8:{n:"PtgAttrGoto",f:Eu},16:{n:"PtgAttrSum",f:Mu},32:{n:"PtgAttrBaxcel",f:Au},33:{n:"PtgAttrBaxcel",f:Au},64:{n:"PtgAttrSpace",f:Ou},65:{n:"PtgAttrSpaceSemi",f:Ru},128:{n:"PtgAttrIfError",f:_u},255:{}};function Sd(e,r,t,a){if(a.biff<8)return Ta(e,r);var n=e.l+r;var i=[];for(var s=0;s!==t.length;++s){switch(t[s][0]){case"PtgArray":t[s][1]=$u(e,0,a);i.push(t[s][1]);break;case"PtgMemArea":t[s][2]=Gu(e,t[s][1],a);i.push(t[s][2]);break;case"PtgExp":if(a&&a.biff==12){t[s][1][1]=e._R(4);i.push(t[s][1])}break;case"PtgList":;case"PtgElfRadicalS":;case"PtgElfColS":;case"PtgElfColSV":throw"Unsupported "+t[s][0];default:break;}}r=n-e.l;if(r!==0)i.push(Ta(e,r));return i}function xd(e,r,t){var a=e.l+r;var n,i,s=[];while(a!=e.l){r=a-e.l;i=e[e.l];n=yd[i]||yd[Ed[i]];if(i===24||i===25)n=(i===24?Cd:_d)[e[e.l+1]];if(!n||!n.f){Ta(e,r)}else{s.push([n.n,n.f(e,r,t)])}}return s}function Od(e){var r=[];for(var t=0;t<e.length;++t){var a=e[t],n=[];for(var i=0;i<a.length;++i){var s=a[i];if(s)switch(s[0]){case 2:n.push('"'+s[1].replace(/"/g,'""')+'"');break;default:n.push(s[1]);}else n.push("")}r.push(n.join(","))}return r.join(";")}var Rd={PtgAdd:"+",PtgConcat:"&",PtgDiv:"/",PtgEq:"=",PtgGe:">=",PtgGt:">",PtgLe:"<=",PtgLt:"<",PtgMul:"*",PtgNe:"<>",PtgPower:"^",PtgSub:"-"};function Id(e,r){var t=e.lastIndexOf("!"),a=r.lastIndexOf("!");if(t==-1&&a==-1)return e+":"+r;if(t>0&&a>0&&e.slice(0,t).toLowerCase()==r.slice(0,a).toLowerCase())return e+":"+r.slice(a+1);console.error("Cannot hydrate range",e,r);return e+":"+r}function Nd(e,r,t){if(!e)return"SH33TJSERR0";if(t.biff>8&&(!e.XTI||!e.XTI[r]))return e.SheetNames[r];if(!e.XTI)return"SH33TJSERR6";var a=e.XTI[r];if(t.biff<8){if(r>1e4)r-=65536;if(r<0)r=-r;return r==0?"":e.XTI[r-1]}if(!a)return"SH33TJSERR1";var n="";if(t.biff>8)switch(e[a[0]][0]){case 357:n=a[1]==-1?"#REF":e.SheetNames[a[1]];return a[1]==a[2]?n:n+":"+e.SheetNames[a[2]];case 358:if(t.SID!=null)return e.SheetNames[t.SID];return"SH33TJSSAME"+e[a[0]][0];case 355:;default:return"SH33TJSSRC"+e[a[0]][0];}switch(e[a[0]][0][0]){case 1025:n=a[1]==-1?"#REF":e.SheetNames[a[1]]||"SH33TJSERR3";return a[1]==a[2]?n:n+":"+e.SheetNames[a[2]];case 14849:return e[a[0]].slice(1).map(function(e){return e.Name}).join(";;");default:if(!e[a[0]][0][3])return"SH33TJSERR2";n=a[1]==-1?"#REF":e[a[0]][0][3][a[1]]||"SH33TJSERR4";return a[1]==a[2]?n:n+":"+e[a[0]][0][3][a[2]];}}function Fd(e,r,t){var a=Nd(e,r,t);return a=="#REF"?a:Xa(a,t)}function Dd(e,r,t,a,n){var i=n&&n.biff||8;var s={s:{c:0,r:0},e:{c:0,r:0}};var f=[],l,o,c,h=0,u=0,d,v="";if(!e[0]||!e[0][0])return"";var p=-1,m="";for(var g=0,b=e[0].length;g<b;++g){var w=e[0][g];switch(w[0]){case"PtgUminus":f.push("-"+f.pop());break;case"PtgUplus":f.push("+"+f.pop());break;case"PtgPercent":f.push(f.pop()+"%");break;case"PtgAdd":;case"PtgConcat":;case"PtgDiv":;case"PtgEq":;case"PtgGe":;case"PtgGt":;case"PtgLe":;case"PtgLt":;case"PtgMul":;case"PtgNe":;case"PtgPower":;case"PtgSub":l=f.pop();o=f.pop();if(p>=0){switch(e[0][p][1][0]){case 0:m=Tr(" ",e[0][p][1][1]);break;case 1:m=Tr("\r",e[0][p][1][1]);break;default:m="";if(n.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][p][1][0]);}o=o+m;p=-1}f.push(o+Rd[w[0]]+l);break;case"PtgIsect":l=f.pop();o=f.pop();f.push(o+" "+l);break;case"PtgUnion":l=f.pop();o=f.pop();f.push(o+","+l);break;case"PtgRange":l=f.pop();o=f.pop();f.push(Id(o,l));break;case"PtgAttrChoose":break;case"PtgAttrGoto":break;case"PtgAttrIf":break;case"PtgAttrIfError":break;case"PtgRef":c=_a(w[1][1],s,n);f.push(xa(c,i));break;case"PtgRefN":c=t?_a(w[1][1],t,n):w[1][1];f.push(xa(c,i));break;case"PtgRef3d":h=w[1][1];c=_a(w[1][2],s,n);v=Fd(a,h,n);var k=v;f.push(v+"!"+xa(c,i));break;case"PtgFunc":;case"PtgFuncVar":var T=w[1][0],A=w[1][1];if(!T)T=0;T&=127;var y=T==0?[]:f.slice(-T);f.length-=T;if(A==="User")A=y.shift();f.push(A+"("+y.join(",")+")");break;case"PtgBool":f.push(w[1]?"TRUE":"FALSE");break;case"PtgInt":f.push(w[1]);break;case"PtgNum":f.push(String(w[1]));break;case"PtgStr":f.push('"'+w[1].replace(/"/g,'""')+'"');break;case"PtgErr":f.push(w[1]);break;case"PtgAreaN":d=Sa(w[1][1],t?{s:t}:s,n);f.push(Oa(d,n));break;case"PtgArea":d=Sa(w[1][1],s,n);f.push(Oa(d,n));break;case"PtgArea3d":h=w[1][1];d=w[1][2];v=Fd(a,h,n);f.push(v+"!"+Oa(d,n));break;case"PtgAttrSum":f.push("SUM("+f.pop()+")");break;case"PtgAttrBaxcel":;case"PtgAttrSemi":break;case"PtgName":u=w[1][2];var E=(a.names||[])[u-1]||(a[0]||[])[u];var C=E?E.Name:"SH33TJSNAME"+String(u);if(C&&C.slice(0,6)=="_xlfn."&&!n.xlfn)C=C.slice(6);f.push(C);break;case"PtgNameX":var _=w[1][1];u=w[1][2];var S;if(n.biff<=5){if(_<0)_=-_;if(a[_])S=a[_][u]}else{var x="";if(((a[_]||[])[0]||[])[0]==14849){}else if(((a[_]||[])[0]||[])[0]==1025){if(a[_][u]&&a[_][u].itab>0){x=a.SheetNames[a[_][u].itab-1]+"!"}}else x=a.SheetNames[u-1]+"!";if(a[_]&&a[_][u])x+=a[_][u].Name;else if(a[0]&&a[0][u])x+=a[0][u].Name;else{var O=(Nd(a,_,n)||"").split(";;");if(O[u-1])x=O[u-1];else x+="SH33TJSERRX"}f.push(x);break}if(!S)S={Name:"SH33TJSERRY"};f.push(S.Name);break;case"PtgParen":var R="(",I=")";if(p>=0){m="";switch(e[0][p][1][0]){case 2:R=Tr(" ",e[0][p][1][1])+R;break;case 3:R=Tr("\r",e[0][p][1][1])+R;break;case 4:I=Tr(" ",e[0][p][1][1])+I;break;case 5:I=Tr("\r",e[0][p][1][1])+I;break;default:if(n.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][p][1][0]);}p=-1}f.push(R+f.pop()+I);break;case"PtgRefErr":f.push("#REF!");break;case"PtgRefErr3d":f.push("#REF!");break;case"PtgExp":c={c:w[1][1],r:w[1][0]};var N={c:t.c,r:t.r};if(a.sharedf[Wa(c)]){var F=a.sharedf[Wa(c)];f.push(Dd(F,s,N,a,n))}else{var D=false;for(l=0;l!=a.arrayf.length;++l){o=a.arrayf[l];if(c.c<o[0].s.c||c.c>o[0].e.c)continue;if(c.r<o[0].s.r||c.r>o[0].e.r)continue;f.push(Dd(o[1],s,N,a,n));D=true;break}if(!D)f.push(w[1])}break;case"PtgArray":f.push("{"+Od(w[1])+"}");break;case"PtgMemArea":break;case"PtgAttrSpace":;case"PtgAttrSpaceSemi":p=g;break;case"PtgTbl":break;case"PtgMemErr":break;case"PtgMissArg":f.push("");break;case"PtgAreaErr":f.push("#REF!");break;case"PtgAreaErr3d":f.push("#REF!");break;case"PtgList":f.push("Table"+w[1].idx+"[#"+w[1].rt+"]");break;case"PtgMemAreaN":;case"PtgMemNoMemN":;case"PtgAttrNoop":;case"PtgSheet":;case"PtgEndSheet":break;case"PtgMemFunc":break;case"PtgMemNoMem":break;case"PtgElfCol":;case"PtgElfColS":;case"PtgElfColSV":;case"PtgElfColV":;case"PtgElfLel":;case"PtgElfRadical":;case"PtgElfRadicalLel":;case"PtgElfRadicalS":;case"PtgElfRw":;case"PtgElfRwV":throw new Error("Unsupported ELFs");case"PtgSxName":throw new Error("Unrecognized Formula Token: "+String(w));default:throw new Error("Unrecognized Formula Token: "+String(w));}var P=["PtgAttrSpace","PtgAttrSpaceSemi","PtgAttrGoto"];if(n.biff!=3)if(p>=0&&P.indexOf(e[0][g][0])==-1){w=e[0][p];var L=true;switch(w[1][0]){case 4:L=false;case 0:m=Tr(" ",w[1][1]);break;case 5:L=false;case 1:m=Tr("\r",w[1][1]);break;default:m="";if(n.WTF)throw new Error("Unexpected PtgAttrSpaceType "+w[1][0]);}f.push((L?m:"")+f.pop()+(L?"":m));p=-1}}if(f.length>1&&n.WTF)throw new Error("bad formula stack");if(f[0]=="TRUE")return true;if(f[0]=="FALSE")return false;return f[0]}function Pd(e,r,t){var a=e.l+r,n=t.biff==2?1:2;var i,s=e._R(n);if(s==65535)return[[],Ta(e,r-2)];var f=xd(e,s,t);if(r!==s+n)i=Sd(e,r-s-n,f,t);e.l=a;return[f,i]}function Ld(e,r,t){var a=e.l+r,n=t.biff==2?1:2;var i,s=e._R(n);if(s==65535)return[[],Ta(e,r-2)];var f=xd(e,s,t);if(r!==s+n)i=Sd(e,r-s-n,f,t);e.l=a;return[f,i]}function Md(e,r,t,a){var n=e.l+r;var i=xd(e,a,t);var s;if(n!==e.l)s=Sd(e,n-e.l,i,t);return[i,s]}function Ud(e,r,t){var a=e.l+r;var n,i=e._R(2);var s=xd(e,i,t);if(i==65535)return[[],Ta(e,r-2)];if(r!==i+2)n=Sd(e,a-i-2,s,t);return[s,n]}function Bd(e){var r;if(oa(e,e.l+6)!==65535)return[Cn(e),"n"];switch(e[e.l]){case 0:e.l+=8;return["String","s"];case 1:r=e[e.l+2]===1;e.l+=8;return[r,"b"];case 2:r=e[e.l+2];e.l+=8;return[r,"e"];case 3:e.l+=8;return["","s"];}return[]}function Wd(e){if(e==null){var r=Aa(8);r._W(1,3);r._W(1,0);r._W(2,0);r._W(2,0);r._W(2,65535);return r}else if(typeof e=="number")return _n(e);return _n(0)}function zd(e,r,t){var a=e.l+r;var n=Fs(e,6,t);var i=Bd(e,8);var s=e._R(1);if(t.biff!=2){e._R(1);if(t.biff>=5){e._R(4)}}var f=Ld(e,a-e.l,t);return{cell:n,val:i[0],formula:f,shared:s>>3&1,tt:i[1]}}function Hd(e,r,t,a,n){var i=Ds(r,t,n);var s=Wd(e.v);var f=Aa(6);var l=1|32;f._W(2,l);f._W(4,0);var o=Aa(e.bf.length);for(var c=0;c<e.bf.length;++c)o[c]=e.bf[c];var h=P([i,s,f,o]);return h}function Vd(e,r,t){var a=e._R(4);var n=xd(e,a,t);var i=e._R(4);var s=i>0?Sd(e,i,n,t):null;return[n,s]}var Xd=Vd;var Gd=Vd;var $d=Vd;var jd=Vd;function Kd(e){if((e|0)==e&&e<Math.pow(2,16)&&e>=0){var r=Aa(11);r._W(4,3);r._W(1,30);r._W(2,e);r._W(4,0);return r}var t=Aa(17);t._W(4,11);t._W(1,31);t._W(8,e);t._W(4,0);return t}function Yd(e){var r=Aa(10);r._W(4,2);r._W(1,28);r._W(1,e);r._W(4,0);return r}function Zd(e){var r=Aa(10);r._W(4,2);r._W(1,29);r._W(1,e?1:0);r._W(4,0);return r}function Jd(e){var r=Aa(7);r._W(4,3+2*e.length);r._W(1,23);r._W(2,e.length);var t=Aa(2*e.length);t._W(2*e.length,e,"utf16le");var a=Aa(4);a._W(4,0);return P([r,t,a])}function qd(e){var r=Ba(e);var t=Aa(15);t._W(4,7);t._W(1,4|1<<5);t._W(4,r.r);t._W(2,r.c|(e.charAt(0)=="$"?0:1)<<14|(e.match(/\$\d/)?0:1)<<15);t._W(4,0);return t}function Qd(e,r){var t=e.lastIndexOf("!");var a=e.slice(0,t);e=e.slice(t+1);var n=Ba(e);if(a.charAt(0)=="'")a=a.slice(1,-1).replace(/''/g,"'");var i=Aa(17);i._W(4,9);i._W(1,26|1<<5);i._W(2,2+r.SheetNames.map(function(e){return e.toLowerCase()}).indexOf(a.toLowerCase()));i._W(4,n.r);i._W(2,n.c|(e.charAt(0)=="$"?0:1)<<14|(e.match(/\$\d/)?0:1)<<15);i._W(4,0);return i}function ev(e,r){var t=e.lastIndexOf("!");var a=e.slice(0,t);e=e.slice(t+1);if(a.charAt(0)=="'")a=a.slice(1,-1).replace(/''/g,"'");var n=Aa(17);n._W(4,9);n._W(1,28|1<<5);n._W(2,2+r.SheetNames.map(function(e){return e.toLowerCase()}).indexOf(a.toLowerCase()));n._W(4,0);n._W(2,0);n._W(4,0);return n}function rv(e){var r=e.split(":"),t=r[0];var a=Aa(23);a._W(4,15);t=r[0];var n=Ba(t);a._W(1,4|1<<5);a._W(4,n.r);a._W(2,n.c|(t.charAt(0)=="$"?0:1)<<14|(t.match(/\$\d/)?0:1)<<15);a._W(4,0);t=r[1];n=Ba(t);a._W(1,4|1<<5);a._W(4,n.r);a._W(2,n.c|(t.charAt(0)=="$"?0:1)<<14|(t.match(/\$\d/)?0:1)<<15);a._W(4,0);a._W(1,17);a._W(4,0);return a}function tv(e,r){var t=e.lastIndexOf("!");var a=e.slice(0,t);e=e.slice(t+1);if(a.charAt(0)=="'")a=a.slice(1,-1).replace(/''/g,"'");var n=e.split(":");var i=Aa(27);i._W(4,19);var s=n[0],f=Ba(s);i._W(1,26|1<<5);i._W(2,2+r.SheetNames.map(function(e){return e.toLowerCase()}).indexOf(a.toLowerCase()));i._W(4,f.r);i._W(2,f.c|(s.charAt(0)=="$"?0:1)<<14|(s.match(/\$\d/)?0:1)<<15);s=n[1];f=Ba(s);i._W(1,26|1<<5);i._W(2,2+r.SheetNames.map(function(e){return e.toLowerCase()}).indexOf(a.toLowerCase()));i._W(4,f.r);i._W(2,f.c|(s.charAt(0)=="$"?0:1)<<14|(s.match(/\$\d/)?0:1)<<15);i._W(1,17);i._W(4,0);return i}function av(e,r){var t=e.lastIndexOf("!");var a=e.slice(0,t);e=e.slice(t+1);if(a.charAt(0)=="'")a=a.slice(1,-1).replace(/''/g,"'");var n=za(e);var i=Aa(23);i._W(4,15);i._W(1,27|1<<5);i._W(2,2+r.SheetNames.map(function(e){return e.toLowerCase()}).indexOf(a.toLowerCase()));i._W(4,n.s.r);i._W(4,n.e.r);i._W(2,n.s.c);i._W(2,n.e.c);i._W(4,0);return i}function nv(e,r){if(typeof e=="number")return Kd(e);if(typeof e=="boolean")return Zd(e);if(/^#(DIV\/0!|GETTING_DATA|N\/A|NAME\?|NULL!|NUM!|REF!|VALUE!)$/.test(e))return Yd(+ri[e]);if(e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/))return qd(e);if(e.match(/^\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/))return rv(e);if(e.match(/^#REF!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/))return av(e,r);if(e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/))return Qd(e,r);if(e.match(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5}):\$?(?:[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D]|[A-Z]{1,2})\$?(?:10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})$/))return tv(e,r);if(/^(?:'[^\\\/?*\[\]:]*'|[^'][^\\\/?*\[\]:'`~!@#$%^()\-=+{}|;,<.>]*)!#REF!$/.test(e))return ev(e,r);if(/^".*"$/.test(e))return Jd(e);if(/^[+-]\d+$/.test(e))return Kd(parseInt(e,10));throw"Formula |"+e+"| not supported for XLSB"}var iv=nv;var sv={0:"BEEP",1:"OPEN",2:"OPEN.LINKS",3:"CLOSE.ALL",4:"SAVE",5:"SAVE.AS",6:"FILE.DELETE",7:"PAGE.SETUP",8:"PRINT",9:"PRINTER.SETUP",10:"QUIT",11:"NEW.WINDOW",12:"ARRANGE.ALL",13:"WINDOW.SIZE",14:"WINDOW.MOVE",15:"FULL",16:"CLOSE",17:"RUN",22:"SET.PRINT.AREA",23:"SET.PRINT.TITLES",24:"SET.PAGE.BREAK",25:"REMOVE.PAGE.BREAK",26:"FONT",27:"DISPLAY",28:"PROTECT.DOCUMENT",29:"PRECISION",30:"A1.R1C1",31:"CALCULATE.NOW",32:"CALCULATION",34:"DATA.FIND",35:"EXTRACT",36:"DATA.DELETE",37:"SET.DATABASE",38:"SET.CRITERIA",39:"SORT",40:"DATA.SERIES",41:"TABLE",42:"FORMAT.NUMBER",43:"ALIGNMENT",44:"STYLE",45:"BORDER",46:"CELL.PROTECTION",47:"COLUMN.WIDTH",48:"UNDO",49:"CUT",50:"COPY",51:"PASTE",52:"CLEAR",53:"PASTE.SPECIAL",54:"EDIT.DELETE",55:"INSERT",56:"FILL.RIGHT",57:"FILL.DOWN",61:"DEFINE.NAME",62:"CREATE.NAMES",63:"FORMULA.GOTO",64:"FORMULA.FIND",65:"SELECT.LAST.CELL",66:"SHOW.ACTIVE.CELL",67:"GALLERY.AREA",68:"GALLERY.BAR",69:"GALLERY.COLUMN",70:"GALLERY.LINE",71:"GALLERY.PIE",72:"GALLERY.SCATTER",73:"COMBINATION",74:"PREFERRED",75:"ADD.OVERLAY",76:"GRIDLINES",77:"SET.PREFERRED",78:"AXES",79:"LEGEND",80:"ATTACH.TEXT",81:"ADD.ARROW",82:"SELECT.CHART",83:"SELECT.PLOT.AREA",84:"PATTERNS",85:"MAIN.CHART",86:"OVERLAY",87:"SCALE",88:"FORMAT.LEGEND",89:"FORMAT.TEXT",90:"EDIT.REPEAT",91:"PARSE",92:"JUSTIFY",93:"HIDE",94:"UNHIDE",95:"WORKSPACE",96:"FORMULA",97:"FORMULA.FILL",98:"FORMULA.ARRAY",99:"DATA.FIND.NEXT",100:"DATA.FIND.PREV",101:"FORMULA.FIND.NEXT",102:"FORMULA.FIND.PREV",103:"ACTIVATE",104:"ACTIVATE.NEXT",105:"ACTIVATE.PREV",106:"UNLOCKED.NEXT",107:"UNLOCKED.PREV",108:"COPY.PICTURE",109:"SELECT",110:"DELETE.NAME",111:"DELETE.FORMAT",112:"VLINE",113:"HLINE",114:"VPAGE",115:"HPAGE",116:"VSCROLL",117:"HSCROLL",118:"ALERT",119:"NEW",120:"CANCEL.COPY",121:"SHOW.CLIPBOARD",122:"MESSAGE",124:"PASTE.LINK",125:"APP.ACTIVATE",126:"DELETE.ARROW",127:"ROW.HEIGHT",128:"FORMAT.MOVE",129:"FORMAT.SIZE",130:"FORMULA.REPLACE",131:"SEND.KEYS",132:"SELECT.SPECIAL",133:"APPLY.NAMES",134:"REPLACE.FONT",135:"FREEZE.PANES",136:"SHOW.INFO",137:"SPLIT",138:"ON.WINDOW",139:"ON.DATA",140:"DISABLE.INPUT",142:"OUTLINE",143:"LIST.NAMES",144:"FILE.CLOSE",145:"SAVE.WORKBOOK",146:"DATA.FORM",147:"COPY.CHART",148:"ON.TIME",149:"WAIT",150:"FORMAT.FONT",151:"FILL.UP",152:"FILL.LEFT",153:"DELETE.OVERLAY",155:"SHORT.MENUS",159:"SET.UPDATE.STATUS",161:"COLOR.PALETTE",162:"DELETE.STYLE",163:"WINDOW.RESTORE",164:"WINDOW.MAXIMIZE",166:"CHANGE.LINK",167:"CALCULATE.DOCUMENT",168:"ON.KEY",169:"APP.RESTORE",170:"APP.MOVE",171:"APP.SIZE",172:"APP.MINIMIZE",173:"APP.MAXIMIZE",174:"BRING.TO.FRONT",175:"SEND.TO.BACK",185:"MAIN.CHART.TYPE",186:"OVERLAY.CHART.TYPE",187:"SELECT.END",188:"OPEN.MAIL",189:"SEND.MAIL",190:"STANDARD.FONT",191:"CONSOLIDATE",192:"SORT.SPECIAL",193:"GALLERY.3D.AREA",194:"GALLERY.3D.COLUMN",195:"GALLERY.3D.LINE",196:"GALLERY.3D.PIE",197:"VIEW.3D",198:"GOAL.SEEK",199:"WORKGROUP",200:"FILL.GROUP",201:"UPDATE.LINK",202:"PROMOTE",203:"DEMOTE",204:"SHOW.DETAIL",206:"UNGROUP",207:"OBJECT.PROPERTIES",208:"SAVE.NEW.OBJECT",209:"SHARE",210:"SHARE.NAME",211:"DUPLICATE",212:"APPLY.STYLE",213:"ASSIGN.TO.OBJECT",214:"OBJECT.PROTECTION",215:"HIDE.OBJECT",216:"SET.EXTRACT",217:"CREATE.PUBLISHER",218:"SUBSCRIBE.TO",219:"ATTRIBUTES",220:"SHOW.TOOLBAR",222:"PRINT.PREVIEW",223:"EDIT.COLOR",224:"SHOW.LEVELS",225:"FORMAT.MAIN",226:"FORMAT.OVERLAY",227:"ON.RECALC",228:"EDIT.SERIES",229:"DEFINE.STYLE",240:"LINE.PRINT",243:"ENTER.DATA",249:"GALLERY.RADAR",250:"MERGE.STYLES",251:"EDITION.OPTIONS",252:"PASTE.PICTURE",253:"PASTE.PICTURE.LINK",254:"SPELLING",256:"ZOOM",259:"INSERT.OBJECT",260:"WINDOW.MINIMIZE",265:"SOUND.NOTE",266:"SOUND.PLAY",267:"FORMAT.SHAPE",268:"EXTEND.POLYGON",269:"FORMAT.AUTO",272:"GALLERY.3D.BAR",273:"GALLERY.3D.SURFACE",274:"FILL.AUTO",276:"CUSTOMIZE.TOOLBAR",277:"ADD.TOOL",278:"EDIT.OBJECT",279:"ON.DOUBLECLICK",280:"ON.ENTRY",281:"WORKBOOK.ADD",282:"WORKBOOK.MOVE",283:"WORKBOOK.COPY",284:"WORKBOOK.OPTIONS",285:"SAVE.WORKSPACE",288:"CHART.WIZARD",289:"DELETE.TOOL",290:"MOVE.TOOL",291:"WORKBOOK.SELECT",292:"WORKBOOK.ACTIVATE",293:"ASSIGN.TO.TOOL",295:"COPY.TOOL",296:"RESET.TOOL",297:"CONSTRAIN.NUMERIC",298:"PASTE.TOOL",302:"WORKBOOK.NEW",305:"SCENARIO.CELLS",306:"SCENARIO.DELETE",307:"SCENARIO.ADD",308:"SCENARIO.EDIT",309:"SCENARIO.SHOW",310:"SCENARIO.SHOW.NEXT",311:"SCENARIO.SUMMARY",312:"PIVOT.TABLE.WIZARD",313:"PIVOT.FIELD.PROPERTIES",314:"PIVOT.FIELD",315:"PIVOT.ITEM",316:"PIVOT.ADD.FIELDS",318:"OPTIONS.CALCULATION",319:"OPTIONS.EDIT",320:"OPTIONS.VIEW",321:"ADDIN.MANAGER",322:"MENU.EDITOR",323:"ATTACH.TOOLBARS",324:"VBAActivate",325:"OPTIONS.CHART",328:"VBA.INSERT.FILE",330:"VBA.PROCEDURE.DEFINITION",336:"ROUTING.SLIP",338:"ROUTE.DOCUMENT",339:"MAIL.LOGON",342:"INSERT.PICTURE",343:"EDIT.TOOL",344:"GALLERY.DOUGHNUT",350:"CHART.TREND",352:"PIVOT.ITEM.PROPERTIES",354:"WORKBOOK.INSERT",
355:"OPTIONS.TRANSITION",356:"OPTIONS.GENERAL",370:"FILTER.ADVANCED",373:"MAIL.ADD.MAILER",374:"MAIL.DELETE.MAILER",375:"MAIL.REPLY",376:"MAIL.REPLY.ALL",377:"MAIL.FORWARD",378:"MAIL.NEXT.LETTER",379:"DATA.LABEL",380:"INSERT.TITLE",381:"FONT.PROPERTIES",382:"MACRO.OPTIONS",383:"WORKBOOK.HIDE",384:"WORKBOOK.UNHIDE",385:"WORKBOOK.DELETE",386:"WORKBOOK.NAME",388:"GALLERY.CUSTOM",390:"ADD.CHART.AUTOFORMAT",391:"DELETE.CHART.AUTOFORMAT",392:"CHART.ADD.DATA",393:"AUTO.OUTLINE",394:"TAB.ORDER",395:"SHOW.DIALOG",396:"SELECT.ALL",397:"UNGROUP.SHEETS",398:"SUBTOTAL.CREATE",399:"SUBTOTAL.REMOVE",400:"RENAME.OBJECT",412:"WORKBOOK.SCROLL",413:"WORKBOOK.NEXT",414:"WORKBOOK.PREV",415:"WORKBOOK.TAB.SPLIT",416:"FULL.SCREEN",417:"WORKBOOK.PROTECT",420:"SCROLLBAR.PROPERTIES",421:"PIVOT.SHOW.PAGES",422:"TEXT.TO.COLUMNS",423:"FORMAT.CHARTTYPE",424:"LINK.FORMAT",425:"TRACER.DISPLAY",430:"TRACER.NAVIGATE",431:"TRACER.CLEAR",432:"TRACER.ERROR",433:"PIVOT.FIELD.GROUP",434:"PIVOT.FIELD.UNGROUP",435:"CHECKBOX.PROPERTIES",436:"LABEL.PROPERTIES",437:"LISTBOX.PROPERTIES",438:"EDITBOX.PROPERTIES",439:"PIVOT.REFRESH",440:"LINK.COMBO",441:"OPEN.TEXT",442:"HIDE.DIALOG",443:"SET.DIALOG.FOCUS",444:"ENABLE.OBJECT",445:"PUSHBUTTON.PROPERTIES",446:"SET.DIALOG.DEFAULT",447:"FILTER",448:"FILTER.SHOW.ALL",449:"CLEAR.OUTLINE",450:"FUNCTION.WIZARD",451:"ADD.LIST.ITEM",452:"SET.LIST.ITEM",453:"REMOVE.LIST.ITEM",454:"SELECT.LIST.ITEM",455:"SET.CONTROL.VALUE",456:"SAVE.COPY.AS",458:"OPTIONS.LISTS.ADD",459:"OPTIONS.LISTS.DELETE",460:"SERIES.AXES",461:"SERIES.X",462:"SERIES.Y",463:"ERRORBAR.X",464:"ERRORBAR.Y",465:"FORMAT.CHART",466:"SERIES.ORDER",467:"MAIL.LOGOFF",468:"CLEAR.ROUTING.SLIP",469:"APP.ACTIVATE.MICROSOFT",470:"MAIL.EDIT.MAILER",471:"ON.SHEET",472:"STANDARD.WIDTH",473:"SCENARIO.MERGE",474:"SUMMARY.INFO",475:"FIND.FILE",476:"ACTIVE.CELL.FONT",477:"ENABLE.TIPWIZARD",478:"VBA.MAKE.ADDIN",480:"INSERTDATATABLE",481:"WORKGROUP.OPTIONS",482:"MAIL.SEND.MAILER",485:"AUTOCORRECT",489:"POST.DOCUMENT",491:"PICKLIST",493:"VIEW.SHOW",494:"VIEW.DEFINE",495:"VIEW.DELETE",509:"SHEET.BACKGROUND",510:"INSERT.MAP.OBJECT",511:"OPTIONS.MENONO",517:"MSOCHECKS",518:"NORMAL",519:"LAYOUT",520:"RM.PRINT.AREA",521:"CLEAR.PRINT.AREA",522:"ADD.PRINT.AREA",523:"MOVE.BRK",545:"HIDECURR.NOTE",546:"HIDEALL.NOTES",547:"DELETE.NOTE",548:"TRAVERSE.NOTES",549:"ACTIVATE.NOTES",620:"PROTECT.REVISIONS",621:"UNPROTECT.REVISIONS",647:"OPTIONS.ME",653:"WEB.PUBLISH",667:"NEWWEBQUERY",673:"PIVOT.TABLE.CHART",753:"OPTIONS.SAVE",755:"OPTIONS.SPELL",808:"HIDEALL.INKANNOTS"};var fv={0:"COUNT",1:"IF",2:"ISNA",3:"ISERROR",4:"SUM",5:"AVERAGE",6:"MIN",7:"MAX",8:"ROW",9:"COLUMN",10:"NA",11:"NPV",12:"STDEV",13:"DOLLAR",14:"FIXED",15:"SIN",16:"COS",17:"TAN",18:"ATAN",19:"PI",20:"SQRT",21:"EXP",22:"LN",23:"LOG10",24:"ABS",25:"INT",26:"SIGN",27:"ROUND",28:"LOOKUP",29:"INDEX",30:"REPT",31:"MID",32:"LEN",33:"VALUE",34:"TRUE",35:"FALSE",36:"AND",37:"OR",38:"NOT",39:"MOD",40:"DCOUNT",41:"DSUM",42:"DAVERAGE",43:"DMIN",44:"DMAX",45:"DSTDEV",46:"VAR",47:"DVAR",48:"TEXT",49:"LINEST",50:"TREND",51:"LOGEST",52:"GROWTH",53:"GOTO",54:"HALT",55:"RETURN",56:"PV",57:"FV",58:"NPER",59:"PMT",60:"RATE",61:"MIRR",62:"IRR",63:"RAND",64:"MATCH",65:"DATE",66:"TIME",67:"DAY",68:"MONTH",69:"YEAR",70:"WEEKDAY",71:"HOUR",72:"MINUTE",73:"SECOND",74:"NOW",75:"AREAS",76:"ROWS",77:"COLUMNS",78:"OFFSET",79:"ABSREF",80:"RELREF",81:"ARGUMENT",82:"SEARCH",83:"TRANSPOSE",84:"ERROR",85:"STEP",86:"TYPE",87:"ECHO",88:"SET.NAME",89:"CALLER",90:"DEREF",91:"WINDOWS",92:"SERIES",93:"DOCUMENTS",94:"ACTIVE.CELL",95:"SELECTION",96:"RESULT",97:"ATAN2",98:"ASIN",99:"ACOS",100:"CHOOSE",101:"HLOOKUP",102:"VLOOKUP",103:"LINKS",104:"INPUT",105:"ISREF",106:"GET.FORMULA",107:"GET.NAME",108:"SET.VALUE",109:"LOG",110:"EXEC",111:"CHAR",112:"LOWER",113:"UPPER",114:"PROPER",115:"LEFT",116:"RIGHT",117:"EXACT",118:"TRIM",119:"REPLACE",120:"SUBSTITUTE",121:"CODE",122:"NAMES",123:"DIRECTORY",124:"FIND",125:"CELL",126:"ISERR",127:"ISTEXT",128:"ISNUMBER",129:"ISBLANK",130:"T",131:"N",132:"FOPEN",133:"FCLOSE",134:"FSIZE",135:"FREADLN",136:"FREAD",137:"FWRITELN",138:"FWRITE",139:"FPOS",140:"DATEVALUE",141:"TIMEVALUE",142:"SLN",143:"SYD",144:"DDB",145:"GET.DEF",146:"REFTEXT",147:"TEXTREF",148:"INDIRECT",149:"REGISTER",150:"CALL",151:"ADD.BAR",152:"ADD.MENU",153:"ADD.COMMAND",154:"ENABLE.COMMAND",155:"CHECK.COMMAND",156:"RENAME.COMMAND",157:"SHOW.BAR",158:"DELETE.MENU",159:"DELETE.COMMAND",160:"GET.CHART.ITEM",161:"DIALOG.BOX",162:"CLEAN",163:"MDETERM",164:"MINVERSE",165:"MMULT",166:"FILES",167:"IPMT",168:"PPMT",169:"COUNTA",170:"CANCEL.KEY",171:"FOR",172:"WHILE",173:"BREAK",174:"NEXT",175:"INITIATE",176:"REQUEST",177:"POKE",178:"EXECUTE",179:"TERMINATE",180:"RESTART",181:"HELP",182:"GET.BAR",183:"PRODUCT",184:"FACT",185:"GET.CELL",186:"GET.WORKSPACE",187:"GET.WINDOW",188:"GET.DOCUMENT",189:"DPRODUCT",190:"ISNONTEXT",191:"GET.NOTE",192:"NOTE",193:"STDEVP",194:"VARP",195:"DSTDEVP",196:"DVARP",197:"TRUNC",198:"ISLOGICAL",199:"DCOUNTA",200:"DELETE.BAR",201:"UNREGISTER",204:"USDOLLAR",205:"FINDB",206:"SEARCHB",207:"REPLACEB",208:"LEFTB",209:"RIGHTB",210:"MIDB",211:"LENB",212:"ROUNDUP",213:"ROUNDDOWN",214:"ASC",215:"DBCS",216:"RANK",219:"ADDRESS",220:"DAYS360",221:"TODAY",222:"VDB",223:"ELSE",224:"ELSE.IF",225:"END.IF",226:"FOR.CELL",227:"MEDIAN",228:"SUMPRODUCT",229:"SINH",230:"COSH",231:"TANH",232:"ASINH",233:"ACOSH",234:"ATANH",235:"DGET",236:"CREATE.OBJECT",237:"VOLATILE",238:"LAST.ERROR",239:"CUSTOM.UNDO",240:"CUSTOM.REPEAT",241:"FORMULA.CONVERT",242:"GET.LINK.INFO",243:"TEXT.BOX",244:"INFO",245:"GROUP",246:"GET.OBJECT",247:"DB",248:"PAUSE",251:"RESUME",252:"FREQUENCY",253:"ADD.TOOLBAR",254:"DELETE.TOOLBAR",255:"User",256:"RESET.TOOLBAR",257:"EVALUATE",258:"GET.TOOLBAR",259:"GET.TOOL",260:"SPELLING.CHECK",261:"ERROR.TYPE",262:"APP.TITLE",263:"WINDOW.TITLE",264:"SAVE.TOOLBAR",265:"ENABLE.TOOL",266:"PRESS.TOOL",267:"REGISTER.ID",268:"GET.WORKBOOK",269:"AVEDEV",270:"BETADIST",271:"GAMMALN",272:"BETAINV",273:"BINOMDIST",274:"CHIDIST",275:"CHIINV",276:"COMBIN",277:"CONFIDENCE",278:"CRITBINOM",279:"EVEN",280:"EXPONDIST",281:"FDIST",282:"FINV",283:"FISHER",284:"FISHERINV",285:"FLOOR",286:"GAMMADIST",287:"GAMMAINV",288:"CEILING",289:"HYPGEOMDIST",290:"LOGNORMDIST",291:"LOGINV",292:"NEGBINOMDIST",293:"NORMDIST",294:"NORMSDIST",295:"NORMINV",296:"NORMSINV",297:"STANDARDIZE",298:"ODD",299:"PERMUT",300:"POISSON",301:"TDIST",302:"WEIBULL",303:"SUMXMY2",304:"SUMX2MY2",305:"SUMX2PY2",306:"CHITEST",307:"CORREL",308:"COVAR",309:"FORECAST",310:"FTEST",311:"INTERCEPT",312:"PEARSON",313:"RSQ",314:"STEYX",315:"SLOPE",316:"TTEST",317:"PROB",318:"DEVSQ",319:"GEOMEAN",320:"HARMEAN",321:"SUMSQ",322:"KURT",323:"SKEW",324:"ZTEST",325:"LARGE",326:"SMALL",327:"QUARTILE",328:"PERCENTILE",329:"PERCENTRANK",330:"MODE",331:"TRIMMEAN",332:"TINV",334:"MOVIE.COMMAND",335:"GET.MOVIE",336:"CONCATENATE",337:"POWER",338:"PIVOT.ADD.DATA",339:"GET.PIVOT.TABLE",340:"GET.PIVOT.FIELD",341:"GET.PIVOT.ITEM",342:"RADIANS",343:"DEGREES",344:"SUBTOTAL",345:"SUMIF",346:"COUNTIF",347:"COUNTBLANK",348:"SCENARIO.GET",349:"OPTIONS.LISTS.GET",350:"ISPMT",351:"DATEDIF",352:"DATESTRING",353:"NUMBERSTRING",354:"ROMAN",355:"OPEN.DIALOG",356:"SAVE.DIALOG",357:"VIEW.GET",358:"GETPIVOTDATA",359:"HYPERLINK",360:"PHONETIC",361:"AVERAGEA",362:"MAXA",363:"MINA",364:"STDEVPA",365:"VARPA",366:"STDEVA",367:"VARA",368:"BAHTTEXT",369:"THAIDAYOFWEEK",370:"THAIDIGIT",371:"THAIMONTHOFYEAR",372:"THAINUMSOUND",373:"THAINUMSTRING",374:"THAISTRINGLENGTH",375:"ISTHAIDIGIT",376:"ROUNDBAHTDOWN",377:"ROUNDBAHTUP",378:"THAIYEAR",379:"RTD",380:"CUBEVALUE",381:"CUBEMEMBER",382:"CUBEMEMBERPROPERTY",383:"CUBERANKEDMEMBER",384:"HEX2BIN",385:"HEX2DEC",386:"HEX2OCT",387:"DEC2BIN",388:"DEC2HEX",389:"DEC2OCT",390:"OCT2BIN",391:"OCT2HEX",392:"OCT2DEC",393:"BIN2DEC",394:"BIN2OCT",395:"BIN2HEX",396:"IMSUB",397:"IMDIV",398:"IMPOWER",399:"IMABS",400:"IMSQRT",401:"IMLN",402:"IMLOG2",403:"IMLOG10",404:"IMSIN",405:"IMCOS",406:"IMEXP",407:"IMARGUMENT",408:"IMCONJUGATE",409:"IMAGINARY",410:"IMREAL",411:"COMPLEX",412:"IMSUM",413:"IMPRODUCT",414:"SERIESSUM",415:"FACTDOUBLE",416:"SQRTPI",417:"QUOTIENT",418:"DELTA",419:"GESTEP",420:"ISEVEN",421:"ISODD",422:"MROUND",423:"ERF",424:"ERFC",425:"BESSELJ",426:"BESSELK",427:"BESSELY",428:"BESSELI",429:"XIRR",430:"XNPV",431:"PRICEMAT",432:"YIELDMAT",433:"INTRATE",434:"RECEIVED",435:"DISC",436:"PRICEDISC",437:"YIELDDISC",438:"TBILLEQ",439:"TBILLPRICE",440:"TBILLYIELD",441:"PRICE",442:"YIELD",443:"DOLLARDE",444:"DOLLARFR",445:"NOMINAL",446:"EFFECT",447:"CUMPRINC",448:"CUMIPMT",449:"EDATE",450:"EOMONTH",451:"YEARFRAC",452:"COUPDAYBS",453:"COUPDAYS",454:"COUPDAYSNC",455:"COUPNCD",456:"COUPNUM",457:"COUPPCD",458:"DURATION",459:"MDURATION",460:"ODDLPRICE",461:"ODDLYIELD",462:"ODDFPRICE",463:"ODDFYIELD",464:"RANDBETWEEN",465:"WEEKNUM",466:"AMORDEGRC",467:"AMORLINC",468:"CONVERT",724:"SHEETJS",469:"ACCRINT",470:"ACCRINTM",471:"WORKDAY",472:"NETWORKDAYS",473:"GCD",474:"MULTINOMIAL",475:"LCM",476:"FVSCHEDULE",477:"CUBEKPIMEMBER",478:"CUBESET",479:"CUBESETCOUNT",480:"IFERROR",481:"COUNTIFS",482:"SUMIFS",483:"AVERAGEIF",484:"AVERAGEIFS"};var lv={2:1,3:1,10:0,15:1,16:1,17:1,18:1,19:0,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,34:0,35:0,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,63:0,65:3,66:3,67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:0,75:1,76:1,77:1,79:2,80:2,83:1,85:0,86:1,89:0,90:1,94:0,95:0,97:2,98:1,99:1,101:3,102:3,105:1,106:1,108:2,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,144:4,161:1,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,186:1,189:3,190:1,195:3,196:3,197:1,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,225:0,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,247:4,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,382:3,385:1,392:1,393:1,396:2,397:2,398:2,399:1,400:1,401:1,402:1,403:1,404:1,405:1,406:1,407:1,408:1,409:1,410:1,414:4,415:1,416:1,417:2,420:1,421:1,422:2,424:1,425:2,426:2,427:2,428:2,430:3,438:3,439:3,440:3,443:2,444:2,445:2,446:2,447:6,448:6,449:2,450:2,464:2,468:3,476:2,479:1,480:2,65535:0};function ov(e){if(e.slice(0,3)=="of:")e=e.slice(3);if(e.charCodeAt(0)==61){e=e.slice(1);if(e.charCodeAt(0)==61)e=e.slice(1)}e=e.replace(/COM\.MICROSOFT\./g,"");e=e.replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,function(e,r){return r.replace(/\./g,"")});e=e.replace(/\$'([^']|'')+'/g,function(e){return e.slice(1)});e=e.replace(/\$([^\]\. #$]+)/g,function(e,r){return r.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/)?e:r});e=e.replace(/\[.(#[A-Z]*[?!])\]/g,"$1");return e.replace(/[;~]/g,",").replace(/\|/g,";")}function cv(e){var r="of:="+e.replace(eu,"$1[.$2$3$4$5]").replace(/\]:\[/g,":");return r.replace(/;/g,"|").replace(/,/g,";")}function hv(e){e=e.replace(/\$'([^']|'')+'/g,function(e){return e.slice(1)});e=e.replace(/\$([^\]\. #$]+)/g,function(e,r){return r.match(/^([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])?(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})?$/)?e:r});var r=e.split(":");var t=r[0].split(".")[0];return[t,r[0].split(".")[1]+(r.length>1?":"+(r[1].split(".")[1]||r[1].split(".")[0]):"")]}function uv(e){return e.replace(/!/,".").replace(/:/,":.")}var dv={};var vv={};var pv=typeof Map!=="undefined";function mv(e,r,t){var a=0,n=e.length;if(t){if(pv?t.has(r):Object.prototype.hasOwnProperty.call(t,r)){var i=pv?t.get(r):t[r];for(;a<i.length;++a){if(e[i[a]].t===r){e.Count++;return i[a]}}}}else for(;a<n;++a){if(e[a].t===r){e.Count++;return a}}e[n]={t:r};e.Count++;e.Unique++;if(t){if(pv){if(!t.has(r))t.set(r,[]);t.get(r).push(n)}else{if(!Object.prototype.hasOwnProperty.call(t,r))t[r]=[];t[r].push(n)}}return n}function gv(e,r){var t={min:e+1,max:e+1};var a=-1;if(r.MDW)Zo=r.MDW;if(r.width!=null)t.customWidth=1;else if(r.wpx!=null)a=qo(r.wpx);else if(r.wch!=null)a=r.wch;if(a>-1){t.width=Qo(a);t.customWidth=1}else if(r.width!=null)t.width=r.width;if(r.hidden)t.hidden=true;if(r.level!=null){t.outlineLevel=t.level=r.level}return t}function bv(e,r){if(!e)return;var t=[.7,.7,.75,.75,.3,.3];if(r=="xlml")t=[1,1,1,1,.5,.5];if(e.left==null)e.left=t[0];if(e.right==null)e.right=t[1];if(e.top==null)e.top=t[2];if(e.bottom==null)e.bottom=t[3];if(e.header==null)e.header=t[4];if(e.footer==null)e.footer=t[5]}function wv(e,r,t){var a=t.revssf[r.z!=null?r.z:"General"];var n=60,i=e.length;if(a==null&&t.ssf){for(;n<392;++n)if(t.ssf[n]==null){Ze(r.z,n);t.ssf[n]=r.z;t.revssf[r.z]=a=n;break}}for(n=0;n!=i;++n)if(e[n].numFmtId===a)return n;e[i]={numFmtId:a,fontId:0,fillId:0,borderId:0,xfId:0,applyNumberFormat:1};return i}function kv(e,r,t,a,n,i,s){try{if(a.cellNF)e.z=q[r]}catch(f){if(a.WTF)throw f}if(e.t==="z"&&!a.cellStyles)return;if(e.t==="d"&&typeof e.v==="string")e.v=br(e.v);if((!a||a.cellText!==false)&&e.t!=="z")try{if(q[r]==null)Ze(Ge[r]||"General",r);if(e.t==="e")e.w=e.w||ei[e.v];else if(r===0){if(e.t==="n"){if((e.v|0)===e.v)e.w=e.v.toString(10);else e.w=fe(e.v)}else if(e.t==="d"){var l=ur(e.v,!!s);if((l|0)===l)e.w=l.toString(10);else e.w=fe(l)}else if(e.v===undefined)return"";else e.w=le(e.v,vv)}else if(e.t==="d")e.w=We(r,ur(e.v,!!s),vv);else e.w=We(r,e.v,vv)}catch(f){if(a.WTF)throw f}if(!a.cellStyles)return;if(t!=null)try{e.s=i.Fills[t];if(e.s.fgColor&&e.s.fgColor.theme&&!e.s.fgColor.rgb){e.s.fgColor.rgb=$o(n.themeElements.clrScheme[e.s.fgColor.theme].rgb,e.s.fgColor.tint||0);if(a.WTF)e.s.fgColor.raw_rgb=n.themeElements.clrScheme[e.s.fgColor.theme].rgb}if(e.s.bgColor&&e.s.bgColor.theme){e.s.bgColor.rgb=$o(n.themeElements.clrScheme[e.s.bgColor.theme].rgb,e.s.bgColor.tint||0);if(a.WTF)e.s.bgColor.raw_rgb=n.themeElements.clrScheme[e.s.bgColor.theme].rgb}}catch(f){if(a.WTF&&i.Fills)throw f}}function Tv(e,r,t){if(e&&e["!ref"]){var a=Ga(e["!ref"]);if(a.e.c<a.s.c||a.e.r<a.s.r)throw new Error("Bad range ("+t+"): "+e["!ref"])}}function Av(e,r){var t=Ga(r);if(t.s.r<=t.e.r&&t.s.c<=t.e.c&&t.s.r>=0&&t.s.c>=0)e["!ref"]=Ha(t)}var yv=/<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g;var Ev=/<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/;var Cv=/<(?:\w:)?hyperlink [^>]*>/gm;var _v=/"(\w*:\w*)"/;var Sv=/<(?:\w:)?col\b[^>]*[\/]?>/g;var xv=/<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g;var Ov=/<(?:\w:)?pageMargins[^>]*\/>/g;var Rv=/<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/;var Iv=/<(?:\w:)?sheetPr[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetPr)>/;var Nv=/<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;function Fv(e,r,t,a,n,i,s){if(!e)return e;if(!a)a={"!id":{}};if(b!=null&&r.dense==null)r.dense=b;var f={};if(r.dense)f["!data"]=[];var l={s:{r:2e6,c:2e6},e:{r:0,c:0}};var o="",c="";var h=e.match(Ev);if(h){o=e.slice(0,h.index);c=e.slice(h.index+h[0].length)}else o=c=e;var u=o.match(Rv);if(u)Pv(u[0],f,n,t);else if(u=o.match(Iv))Lv(u[0],u[1]||"",f,n,t,s,i);var d=(o.match(/<(?:\w*:)?dimension/)||{index:-1}).index;if(d>0){var v=o.slice(d,d+50).match(_v);if(v&&!(r&&r.nodim))Av(f,v[1])}var p=o.match(Nv);if(p&&p[1])Yv(p[1],n);var m=[];if(r.cellStyles){var g=o.match(Sv);if(g)Xv(m,g)}if(h)qv(h[1],f,r,l,i,s,n);var w=c.match(xv);if(w)f["!autofilter"]=$v(w[0]);var k=[];var T=c.match(yv);if(T)for(d=0;d!=T.length;++d)k[d]=Ga(T[d].slice(T[d].indexOf('"')+1));var A=c.match(Cv);if(A)zv(f,A,a);var y=c.match(Ov);if(y)f["!margins"]=Hv(et(y[0]));var E;if(E=c.match(/legacyDrawing r:id="(.*?)"/))f["!legrel"]=E[1];if(r&&r.nodim)l.s.c=l.s.r=0;if(!f["!ref"]&&l.e.c>=l.s.c&&l.e.r>=l.s.r)f["!ref"]=Ha(l);if(r.sheetRows>0&&f["!ref"]){var C=Ga(f["!ref"]);if(r.sheetRows<=+C.e.r){C.e.r=r.sheetRows-1;if(C.e.r>l.e.r)C.e.r=l.e.r;if(C.e.r<C.s.r)C.s.r=C.e.r;if(C.e.c>l.e.c)C.e.c=l.e.c;if(C.e.c<C.s.c)C.s.c=C.e.c;f["!fullref"]=f["!ref"];f["!ref"]=Ha(C)}}if(m.length>0)f["!cols"]=m;if(k.length>0)f["!merges"]=k;if(a["!id"][f["!legrel"]])f["!legdrawel"]=a["!id"][f["!legrel"]];return f}function Dv(e){if(e.length===0)return"";var r='<mergeCells count="'+e.length+'">';for(var t=0;t!=e.length;++t)r+='<mergeCell ref="'+Ha(e[t])+'"/>';return r+"</mergeCells>"}function Pv(e,r,t,a){var n=et(e);if(!t.Sheets[a])t.Sheets[a]={};if(n.codeName)t.Sheets[a].CodeName=nt(wt(n.codeName))}function Lv(e,r,t,a,n){Pv(e.slice(0,e.indexOf(">")),t,a,n)}function Mv(e,r,t,a,n){var i=false;var s={},f=null;if(a.bookType!=="xlsx"&&r.vbaraw){var l=r.SheetNames[t];try{if(r.Workbook)l=r.Workbook.Sheets[t].CodeName||l}catch(o){}i=true;s.codeName=kt(ft(l))}if(e&&e["!outline"]){var c={summaryBelow:1,summaryRight:1};if(e["!outline"].above)c.summaryBelow=0;if(e["!outline"].left)c.summaryRight=0;f=(f||"")+Rt("outlinePr",null,c)}if(!i&&!f)return;n[n.length]=Rt("sheetPr",f,s)}var Uv=["objects","scenarios","selectLockedCells","selectUnlockedCells"];var Bv=["formatColumns","formatRows","formatCells","insertColumns","insertRows","insertHyperlinks","deleteColumns","deleteRows","sort","autoFilter","pivotTables"];function Wv(e){var r={sheet:1};Uv.forEach(function(t){if(e[t]!=null&&e[t])r[t]="1"});Bv.forEach(function(t){if(e[t]!=null&&!e[t])r[t]="0"});if(e.password)r.password=Io(e.password).toString(16).toUpperCase();return Rt("sheetProtection",null,r)}function zv(e,r,t){var a=e["!data"]!=null;for(var n=0;n!=r.length;++n){var i=et(wt(r[n]),true);if(!i.ref)return;var s=((t||{})["!id"]||[])[i.id];if(s){i.Target=s.Target;if(i.location)i.Target+="#"+nt(i.location)}else{i.Target="#"+nt(i.location);s={Target:i.Target,TargetMode:"Internal"}}i.Rel=s;if(i.tooltip){i.Tooltip=i.tooltip;delete i.tooltip}var f=Ga(i.ref);for(var l=f.s.r;l<=f.e.r;++l)for(var o=f.s.c;o<=f.e.c;++o){var c=Pa(o)+Ia(l);if(a){if(!e["!data"][l])e["!data"][l]=[];if(!e["!data"][l][o])e["!data"][l][o]={t:"z",v:undefined};e["!data"][l][o].l=i}else{if(!e[c])e[c]={t:"z",v:undefined};e[c].l=i}}}}function Hv(e){var r={};["left","right","top","bottom","header","footer"].forEach(function(t){if(e[t])r[t]=parseFloat(e[t])});return r}function Vv(e){bv(e);return Rt("pageMargins",null,e)}function Xv(e,r){var t=false;for(var a=0;a!=r.length;++a){var n=et(r[a],true);if(n.hidden)n.hidden=vt(n.hidden);var i=parseInt(n.min,10)-1,s=parseInt(n.max,10)-1;if(n.outlineLevel)n.level=+n.outlineLevel||0;delete n.min;delete n.max;n.width=+n.width;if(!t&&n.width){t=true;rc(n.width)}tc(n);while(i<=s)e[i++]=kr(n)}}function Gv(e,r){var t=["<cols>"],a;for(var n=0;n!=r.length;++n){if(!(a=r[n]))continue;t[t.length]=Rt("col",null,gv(n,a))}t[t.length]="</cols>";return t.join("")}function $v(e){var r={ref:(e.match(/ref="([^"]*)"/)||[])[1]};return r}function jv(e,r,t,a){var n=typeof e.ref=="string"?e.ref:Ha(e.ref);if(!t.Workbook)t.Workbook={Sheets:[]};if(!t.Workbook.Names)t.Workbook.Names=[];var i=t.Workbook.Names;var s=za(n);if(s.s.r==s.e.r){s.e.r=za(r["!ref"]).e.r;n=Ha(s)}for(var f=0;f<i.length;++f){var l=i[f];if(l.Name!="_xlnm._FilterDatabase")continue;if(l.Sheet!=a)continue;l.Ref=Xa(t.SheetNames[a])+"!"+Va(n);break}if(f==i.length)i.push({Name:"_xlnm._FilterDatabase",Sheet:a,Ref:"'"+t.SheetNames[a]+"'!"+n});return Rt("autoFilter",null,{ref:n})}var Kv=/<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/g;function Yv(e,r){if(!r.Views)r.Views=[{}];(e.match(Kv)||[]).forEach(function(e,t){var a=et(e);if(!r.Views[t])r.Views[t]={};if(+a.zoomScale)r.Views[t].zoom=+a.zoomScale;if(a.rightToLeft&&vt(a.rightToLeft))r.Views[t].RTL=true})}function Zv(e,r,t,a){var n={workbookViewId:"0"};if((((a||{}).Workbook||{}).Views||[])[0])n.rightToLeft=a.Workbook.Views[0].RTL?"1":"0";return Rt("sheetViews",Rt("sheetView",null,n),{})}function Jv(e,r,t,a,n,i,s){if(e.c)t["!comments"].push([r,e.c]);if((e.v===undefined||e.t==="z"&&!(a||{}).sheetStubs)&&typeof e.f!=="string"&&typeof e.z=="undefined")return"";var f="";var l=e.t,o=e.v;if(e.t!=="z")switch(e.t){case"b":f=e.v?"1":"0";break;case"n":if(isNaN(e.v)){e.t="e";f=ei[e.v=36]}else if(!isFinite(e.v)){e.t="e";f=ei[e.v=7]}else f=""+e.v;break;case"e":f=ei[e.v];break;case"d":if(a&&a.cellDates){var c=br(e.v,s);f=c.toISOString();if(c.getUTCFullYear()<1900)f=f.slice(f.indexOf("T")+1).replace("Z","")}else{e=kr(e);e.t="n";f=""+(e.v=ur(br(e.v,s),s))}if(typeof e.z==="undefined")e.z=q[14];break;default:f=e.v;break;}var h=e.t=="z"||e.v==null?"":xt("v",ft(f)),u={r:r};var d=wv(a.cellXfs,e,a);if(d!==0)u.s=d;switch(e.t){case"n":break;case"d":u.t="d";break;case"b":u.t="b";break;case"e":u.t="e";break;case"z":break;default:if(e.v==null){delete e.t;break}if(e.v.length>32767)throw new Error("Text length must not exceed 32767 characters");if(a&&a.bookSST){h=xt("v",""+mv(a.Strings,e.v,a.revStrings));u.t="s";break}else u.t="str";break;}if(e.t!=l){e.t=l;e.v=o}if(typeof e.f=="string"&&e.f){var v=e.F&&e.F.slice(0,r.length)==r?{t:"array",ref:e.F}:null;h=Rt("f",ft(e.f),v)+(e.v!=null?h:"")}if(e.l){e.l.display=ft(f);t["!links"].push([r,e.l])}if(e.D)u.cm=1;return Rt("c",h,u)}var qv=function(){var e=/<(?:\w+:)?c[ \/>]/,r=/<\/(?:\w+:)?row>/;var t=/r=["']([^"']*)["']/,a=/<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/;var n=/ref=["']([^"']*)["']/;var i=Tt("v"),s=Tt("f");return function f(l,o,c,h,u,d,v){var p=0,m="",g=[],b=[],w=0,k=0,T=0,A="",y;var E,C=0,_=0;var S,x;var O=0,R=0;var I=Array.isArray(d.CellXf),N;var F=[];var D=[];var P=o["!data"]!=null;var L=[],M={},U=false;var B=!!c.sheetStubs;var W=!!((v||{}).WBProps||{}).date1904;for(var z=l.split(r),H=0,V=z.length;H!=V;++H){m=z[H].trim();var X=m.length;if(X===0)continue;var G=0;e:for(p=0;p<X;++p)switch(m[p]){case">":if(m[p-1]!="/"){++p;break e}if(c&&c.cellStyles){E=et(m.slice(G,p),true);C=E.r!=null?parseInt(E.r,10):C+1;_=-1;if(c.sheetRows&&c.sheetRows<C)continue;M={};U=false;if(E.ht){U=true;M.hpt=parseFloat(E.ht);M.hpx=sc(M.hpt)}if(E.hidden&&vt(E.hidden)){U=true;M.hidden=true}if(E.outlineLevel!=null){U=true;M.level=+E.outlineLevel}if(U)L[C-1]=M}break;case"<":G=p;break;}if(G>=p)break;E=et(m.slice(G,p),true);C=E.r!=null?parseInt(E.r,10):C+1;_=-1;if(c.sheetRows&&c.sheetRows<C)continue;if(!c.nodim){if(h.s.r>C-1)h.s.r=C-1;if(h.e.r<C-1)h.e.r=C-1}if(c&&c.cellStyles){M={};U=false;if(E.ht){U=true;M.hpt=parseFloat(E.ht);M.hpx=sc(M.hpt)}if(E.hidden&&vt(E.hidden)){U=true;M.hidden=true}if(E.outlineLevel!=null){U=true;M.level=+E.outlineLevel}if(U)L[C-1]=M}g=m.slice(p).split(e);for(var $=0;$!=g.length;++$)if(g[$].trim().charAt(0)!="<")break;g=g.slice($);for(p=0;p!=g.length;++p){m=g[p].trim();if(m.length===0)continue;b=m.match(t);w=p;k=0;T=0;m="<c "+(m.slice(0,1)=="<"?">":"")+m;if(b!=null&&b.length===2){w=0;A=b[1];for(k=0;k!=A.length;++k){if((T=A.charCodeAt(k)-64)<1||T>26)break;w=26*w+T}--w;_=w}else++_;for(k=0;k!=m.length;++k)if(m.charCodeAt(k)===62)break;++k;E=et(m.slice(0,k),true);if(!E.r)E.r=Wa({r:C-1,c:_});A=m.slice(k);y={t:""};if((b=A.match(i))!=null&&b[1]!=="")y.v=nt(b[1]);if(c.cellFormula){if((b=A.match(s))!=null){if(b[1]==""){if(b[0].indexOf('t="shared"')>-1){x=et(b[0]);if(D[x.si])y.f=au(D[x.si][1],D[x.si][2],E.r)}}else{y.f=nt(wt(b[1]),true);if(!c.xlfn)y.f=iu(y.f);if(b[0].indexOf('t="array"')>-1){y.F=(A.match(n)||[])[1];if(y.F.indexOf(":")>-1)F.push([Ga(y.F),y.F])}else if(b[0].indexOf('t="shared"')>-1){x=et(b[0]);var j=nt(wt(b[1]));if(!c.xlfn)j=iu(j);D[parseInt(x.si,10)]=[x,j,E.r]}}}else if(b=A.match(/<f[^>]*\/>/)){x=et(b[0]);if(D[x.si])y.f=au(D[x.si][1],D[x.si][2],E.r)}var K=Ba(E.r);for(k=0;k<F.length;++k)if(K.r>=F[k][0].s.r&&K.r<=F[k][0].e.r)if(K.c>=F[k][0].s.c&&K.c<=F[k][0].e.c)y.F=F[k][1]}if(E.t==null&&y.v===undefined){if(y.f||y.F){y.v=0;y.t="n"}else if(!B)continue;else y.t="z"}else y.t=E.t||"n";if(h.s.c>_)h.s.c=_;if(h.e.c<_)h.e.c=_;switch(y.t){case"n":if(y.v==""||y.v==null){if(!B)continue;y.t="z"}else y.v=parseFloat(y.v);break;case"s":if(typeof y.v=="undefined"){if(!B)continue;y.t="z"}else{S=dv[parseInt(y.v,10)];y.v=S.t;y.r=S.r;if(c.cellHTML)y.h=S.h}break;case"str":y.t="s";y.v=y.v!=null?nt(wt(y.v),true):"";if(c.cellHTML)y.h=ct(y.v);break;case"inlineStr":b=A.match(a);y.t="s";if(b!=null&&(S=to(b[1]))){y.v=S.t;if(c.cellHTML)y.h=S.h}else y.v="";break;case"b":y.v=vt(y.v);break;case"d":if(c.cellDates)y.v=br(y.v,W);else{y.v=ur(br(y.v,W),W);y.t="n"}break;case"e":if(!c||c.cellText!==false)y.w=y.v;y.v=ri[y.v];break;}O=R=0;N=null;if(I&&E.s!==undefined){N=d.CellXf[E.s];if(N!=null){if(N.numFmtId!=null)O=N.numFmtId;if(c.cellStyles){if(N.fillId!=null)R=N.fillId}}}kv(y,O,R,c,u,d,W);if(c.cellDates&&I&&y.t=="n"&&Pe(q[O])){y.v=dr(y.v+(W?1462:0));y.t=typeof y.v=="number"?"n":"d"}if(E.cm&&c.xlmeta){var Y=(c.xlmeta.Cell||[])[+E.cm-1];if(Y&&Y.type=="XLDAPR")y.D=true}var Z;if(c.nodim){Z=Ba(E.r);if(h.s.r>Z.r)h.s.r=Z.r;if(h.e.r<Z.r)h.e.r=Z.r}if(P){Z=Ba(E.r);if(!o["!data"][Z.r])o["!data"][Z.r]=[];o["!data"][Z.r][Z.c]=y}else o[E.r]=y}}if(L.length>0)o["!rows"]=L}}();function Qv(e,r,t,a){var n=[],i=[],s=Ga(e["!ref"]),f="",l,o="",c=[],h=0,u=0,d=e["!rows"];var v=e["!data"]!=null;var p={r:o},m,g=-1;var b=(((a||{}).Workbook||{}).WBProps||{}).date1904;for(u=s.s.c;u<=s.e.c;++u)c[u]=Pa(u);for(h=s.s.r;h<=s.e.r;++h){i=[];o=Ia(h);for(u=s.s.c;u<=s.e.c;++u){l=c[u]+o;var w=v?(e["!data"][h]||[])[u]:e[l];if(w===undefined)continue;if((f=Jv(w,l,e,r,t,a,b))!=null)i.push(f)}if(i.length>0||d&&d[h]){p={r:o};if(d&&d[h]){m=d[h];if(m.hidden)p.hidden=1;g=-1;if(m.hpx)g=ic(m.hpx);else if(m.hpt)g=m.hpt;if(g>-1){p.ht=g;p.customHeight=1}if(m.level){p.outlineLevel=m.level}}n[n.length]=Rt("row",i.join(""),p)}}if(d)for(;h<d.length;++h){if(d&&d[h]){p={r:h+1};m=d[h];if(m.hidden)p.hidden=1;g=-1;if(m.hpx)g=ic(m.hpx);else if(m.hpt)g=m.hpt;if(g>-1){p.ht=g;p.customHeight=1}if(m.level){p.outlineLevel=m.level}n[n.length]=Rt("row","",p)}}return n.join("")}function ep(e,r,t,a){var n=[jr,Rt("worksheet",null,{xmlns:Lt[0],"xmlns:r":Pt.r})];var i=t.SheetNames[e],s=0,f="";var l=t.Sheets[i];if(l==null)l={};var o=l["!ref"]||"A1";var c=Ga(o);if(c.e.c>16383||c.e.r>1048575){if(r.WTF)throw new Error("Range "+o+" exceeds format limit A1:XFD1048576");c.e.c=Math.min(c.e.c,16383);c.e.r=Math.min(c.e.c,1048575);o=Ha(c)}if(!a)a={};l["!comments"]=[];var h=[];Mv(l,t,e,r,n);n[n.length]=Rt("dimension",null,{ref:o});n[n.length]=Zv(l,r,e,t);if(r.sheetFormat)n[n.length]=Rt("sheetFormatPr",null,{defaultRowHeight:r.sheetFormat.defaultRowHeight||"16",baseColWidth:r.sheetFormat.baseColWidth||"10",outlineLevelRow:r.sheetFormat.outlineLevelRow||"7"});if(l["!cols"]!=null&&l["!cols"].length>0)n[n.length]=Gv(l,l["!cols"]);n[s=n.length]="<sheetData/>";l["!links"]=[];if(l["!ref"]!=null){f=Qv(l,r,e,t,a);if(f.length>0)n[n.length]=f}if(n.length>s+1){n[n.length]="</sheetData>";n[s]=n[s].replace("/>",">")}if(l["!protect"])n[n.length]=Wv(l["!protect"]);if(l["!autofilter"]!=null)n[n.length]=jv(l["!autofilter"],l,t,e);if(l["!merges"]!=null&&l["!merges"].length>0)n[n.length]=Dv(l["!merges"]);var u=-1,d,v=-1;if(l["!links"].length>0){n[n.length]="<hyperlinks>";l["!links"].forEach(function(e){if(!e[1].Target)return;d={ref:e[0]};if(e[1].Target.charAt(0)!="#"){v=ui(a,-1,ft(e[1].Target).replace(/#.*$/,""),li.HLINK);d["r:id"]="rId"+v}if((u=e[1].Target.indexOf("#"))>-1)d.location=ft(e[1].Target.slice(u+1));if(e[1].Tooltip)d.tooltip=ft(e[1].Tooltip);d.display=e[1].display;n[n.length]=Rt("hyperlink",null,d)});n[n.length]="</hyperlinks>"}delete l["!links"];if(l["!margins"]!=null)n[n.length]=Vv(l["!margins"]);if(!r||r.ignoreEC||r.ignoreEC==void 0)n[n.length]=xt("ignoredErrors",Rt("ignoredError",null,{numberStoredAsText:1,sqref:o}));if(h.length>0){v=ui(a,-1,"../drawings/drawing"+(e+1)+".xml",li.DRAW);n[n.length]=Rt("drawing",null,{"r:id":"rId"+v});l["!drawing"]=h}if(l["!comments"].length>0){v=ui(a,-1,"../drawings/vmlDrawing"+(e+1)+".vml",li.VML);n[n.length]=Rt("legacyDrawing",null,{"r:id":"rId"+v});l["!legacy"]=v}if(n.length>1){n[n.length]="</worksheet>";n[1]=n[1].replace("/>",">")}return n.join("")}function rp(e,r){var t={};var a=e.l+r;t.r=e._R(4);e.l+=4;var n=e._R(2);e.l+=1;var i=e._R(1);e.l=a;if(i&7)t.level=i&7;if(i&16)t.hidden=true;if(i&32)t.hpt=n/20;return t}function tp(e,r,t){var a=Aa(17+8*16);var n=(t["!rows"]||[])[e]||{};a._W(4,e);a._W(4,0);var i=320;if(n.hpx)i=ic(n.hpx)*20;else if(n.hpt)i=n.hpt*20;a._W(2,i);a._W(1,0);var s=0;if(n.level)s|=n.level;if(n.hidden)s|=16;if(n.hpx||n.hpt)s|=32;a._W(1,s);a._W(1,0);var f=0,l=a.l;a.l+=4;var o={r:e,c:0};var c=t["!data"]!=null;for(var h=0;h<16;++h){if(r.s.c>h+1<<10||r.e.c<h<<10)continue;var u=-1,d=-1;for(var v=h<<10;v<h+1<<10;++v){o.c=v;var p=c?(t["!data"][o.r]||[])[o.c]:t[Wa(o)];if(p){if(u<0)u=v;d=v}}if(u<0)continue;++f;a._W(4,u);a._W(4,d)}var m=a.l;a.l=l;a._W(4,f);a.l=m;return a.length>a.l?a.slice(0,a.l):a}function ap(e,r,t,a){var n=tp(a,t,r);if(n.length>17||(r["!rows"]||[])[a])Ca(e,0,n)}var np=yn;var ip=En;function sp(){}function fp(e,r){var t={};var a=e[e.l];++e.l;t.above=!(a&64);t.left=!(a&128);e.l+=18;t.name=un(e,r-19);return t}function lp(e,r,t){if(t==null)t=Aa(84+4*e.length);var a=192;if(r){if(r.above)a&=~64;if(r.left)a&=~128}t._W(1,a);for(var n=1;n<3;++n)t._W(1,0);xn({auto:1},t);t._W(-4,-1);t._W(-4,-1);dn(e,t);return t.slice(0,t.l)}function op(e){var r=ln(e);return[r]}function cp(e,r,t){if(t==null)t=Aa(8);return on(r,t)}function hp(e){var r=cn(e);return[r]}function up(e,r,t){if(t==null)t=Aa(4);return hn(r,t)}function dp(e){var r=ln(e);var t=e._R(1);return[r,t,"b"]}function vp(e,r,t){if(t==null)t=Aa(9);on(r,t);t._W(1,e.v?1:0);return t}function pp(e){var r=cn(e);var t=e._R(1);return[r,t,"b"]}function mp(e,r,t){if(t==null)t=Aa(5);hn(r,t);t._W(1,e.v?1:0);return t}function gp(e){var r=ln(e);var t=e._R(1);return[r,t,"e"]}function bp(e,r,t){if(t==null)t=Aa(9);on(r,t);t._W(1,e.v);return t}function wp(e){var r=cn(e);var t=e._R(1);return[r,t,"e"]}function kp(e,r,t){if(t==null)t=Aa(8);hn(r,t);t._W(1,e.v);t._W(2,0);t._W(1,0);return t}function Tp(e){var r=ln(e);var t=e._R(4);return[r,t,"s"]}function Ap(e,r,t){if(t==null)t=Aa(12);on(r,t);t._W(4,r.v);return t}function yp(e){var r=cn(e);var t=e._R(4);return[r,t,"s"]}function Ep(e,r,t){if(t==null)t=Aa(8);hn(r,t);t._W(4,r.v);return t}function Cp(e){var r=ln(e);var t=Cn(e);return[r,t,"n"]}function _p(e,r,t){if(t==null)t=Aa(16);on(r,t);_n(e.v,t);return t}function Sp(e){var r=cn(e);var t=Cn(e);return[r,t,"n"]}function xp(e,r,t){if(t==null)t=Aa(12);hn(r,t);_n(e.v,t);return t}function Op(e){var r=ln(e);var t=wn(e);return[r,t,"n"]}function Rp(e,r,t){if(t==null)t=Aa(12);on(r,t);kn(e.v,t);return t}function Ip(e){var r=cn(e);var t=wn(e);return[r,t,"n"]}function Np(e,r,t){if(t==null)t=Aa(8);hn(r,t);kn(e.v,t);return t}function Fp(e){var r=ln(e);var t=an(e);return[r,t,"is"]}function Dp(e){var r=ln(e);var t=Qa(e);return[r,t,"str"]}function Pp(e,r,t){var a=e.v==null?"":String(e.v);if(t==null)t=Aa(12+4*e.v.length);on(r,t);en(a,t);return t.length>t.l?t.slice(0,t.l):t}function Lp(e){var r=cn(e);var t=Qa(e);return[r,t,"str"]}function Mp(e,r,t){var a=e.v==null?"":String(e.v);if(t==null)t=Aa(8+4*a.length);hn(r,t);en(a,t);return t.length>t.l?t.slice(0,t.l):t}function Up(e,r,t){var a=e.l+r;var n=ln(e);n.r=t["!row"];var i=e._R(1);var s=[n,i,"b"];if(t.cellFormula){e.l+=2;var f=Gd(e,a-e.l,t);s[3]=Dd(f,null,n,t.supbooks,t)}else e.l=a;return s}function Bp(e,r,t){var a=e.l+r;var n=ln(e);n.r=t["!row"];var i=e._R(1);var s=[n,i,"e"];if(t.cellFormula){e.l+=2;var f=Gd(e,a-e.l,t);s[3]=Dd(f,null,n,t.supbooks,t)}else e.l=a;return s}function Wp(e,r,t){var a=e.l+r;var n=ln(e);n.r=t["!row"];var i=Cn(e);var s=[n,i,"n"];if(t.cellFormula){e.l+=2;var f=Gd(e,a-e.l,t);s[3]=Dd(f,null,n,t.supbooks,t)}else e.l=a;return s}function zp(e,r,t){var a=e.l+r;var n=ln(e);n.r=t["!row"];var i=Qa(e);var s=[n,i,"str"];if(t.cellFormula){e.l+=2;var f=Gd(e,a-e.l,t);s[3]=Dd(f,null,n,t.supbooks,t)}else e.l=a;
return s}var Hp=yn;var Vp=En;function Xp(e,r){if(r==null)r=Aa(4);r._W(4,e);return r}function Gp(e,r){var t=e.l+r;var a=yn(e,16);var n=vn(e);var i=Qa(e);var s=Qa(e);var f=Qa(e);e.l=t;var l={rfx:a,relId:n,loc:i,display:f};if(s)l.Tooltip=s;return l}function $p(e,r){var t=Aa(50+4*(e[1].Target.length+(e[1].Tooltip||"").length));En({s:Ba(e[0]),e:Ba(e[0])},t);bn("rId"+r,t);var a=e[1].Target.indexOf("#");var n=a==-1?"":e[1].Target.slice(a+1);en(n||"",t);en(e[1].Tooltip||"",t);en("",t);return t.slice(0,t.l)}function jp(){}function Kp(e,r,t){var a=e.l+r;var n=Tn(e,16);var i=e._R(1);var s=[n];s[2]=i;if(t.cellFormula){var f=Xd(e,a-e.l,t);s[1]=f}else e.l=a;return s}function Yp(e,r,t){var a=e.l+r;var n=yn(e,16);var i=[n];if(t.cellFormula){var s=jd(e,a-e.l,t);i[1]=s;e.l=a}else e.l=a;return i}function Zp(e,r,t){if(t==null)t=Aa(18);var a=gv(e,r);t._W(-4,e);t._W(-4,e);t._W(4,(a.width||10)*256);t._W(4,0);var n=0;if(r.hidden)n|=1;if(typeof a.width=="number")n|=2;if(r.level)n|=r.level<<8;t._W(2,n);return t}var Jp=["left","right","top","bottom","header","footer"];function qp(e){var r={};Jp.forEach(function(t){r[t]=Cn(e,8)});return r}function Qp(e,r){if(r==null)r=Aa(6*8);bv(e);Jp.forEach(function(t){_n(e[t],r)});return r}function em(e){var r=e._R(2);e.l+=28;return{RTL:r&32}}function rm(e,r,t){if(t==null)t=Aa(30);var a=924;if((((r||{}).Views||[])[0]||{}).RTL)a|=32;t._W(2,a);t._W(4,0);t._W(4,0);t._W(4,0);t._W(1,0);t._W(1,0);t._W(2,0);t._W(2,100);t._W(2,0);t._W(2,0);t._W(2,0);t._W(4,0);return t}function tm(e){var r=Aa(24);r._W(4,4);r._W(4,1);En(e,r);return r}function am(e,r){if(r==null)r=Aa(16*4+2);r._W(2,e.password?Io(e.password):0);r._W(4,1);[["objects",false],["scenarios",false],["formatCells",true],["formatColumns",true],["formatRows",true],["insertColumns",true],["insertRows",true],["insertHyperlinks",true],["deleteColumns",true],["deleteRows",true],["selectLockedCells",false],["sort",true],["autoFilter",true],["pivotTables",true],["selectUnlockedCells",false]].forEach(function(t){if(t[1])r._W(4,e[t[0]]!=null&&!e[t[0]]?1:0);else r._W(4,e[t[0]]!=null&&e[t[0]]?0:1)});return r}function nm(){}function im(){}function sm(e,r,t,a,n,i,s){if(!e)return e;var f=r||{};if(!a)a={"!id":{}};if(b!=null&&f.dense==null)f.dense=b;var l={};if(f.dense)l["!data"]=[];var o;var c={s:{r:2e6,c:2e6},e:{r:0,c:0}};var h=[];var u=false,d=false;var v,p,m,g,w,k,T,A,y;var E=[];f.biff=12;f["!row"]=0;var C=0,_=false;var S=[];var x={};var O=f.supbooks||n.supbooks||[[]];O.sharedf=x;O.arrayf=S;O.SheetNames=n.SheetNames||n.Sheets.map(function(e){return e.name});if(!f.supbooks){f.supbooks=O;if(n.Names)for(var R=0;R<n.Names.length;++R)O[0][R+1]=n.Names[R]}var I=[],N=[];var F=false;Zg[16]={n:"BrtShortReal",f:Sp};var D,P;var L=1462*+!!((n||{}).WBProps||{}).date1904;ya(e,function U(e,r,b){if(d)return;switch(b){case 148:o=e;break;case 0:v=e;if(f.sheetRows&&f.sheetRows<=v.r)d=true;A=Ia(g=v.r);f["!row"]=v.r;if(e.hidden||e.hpt||e.level!=null){if(e.hpt)e.hpx=sc(e.hpt);N[e.r]=e}break;case 2:;case 3:;case 4:;case 5:;case 6:;case 7:;case 8:;case 9:;case 10:;case 11:;case 13:;case 14:;case 15:;case 16:;case 17:;case 18:;case 62:p={t:e[2]};switch(e[2]){case"n":p.v=e[1];break;case"s":T=dv[e[1]];p.v=T.t;p.r=T.r;break;case"b":p.v=e[1]?true:false;break;case"e":p.v=e[1];if(f.cellText!==false)p.w=ei[p.v];break;case"str":p.t="s";p.v=e[1];break;case"is":p.t="s";p.v=e[1].t;break;}if(m=s.CellXf[e[0].iStyleRef])kv(p,m.numFmtId,null,f,i,s,L>0);w=e[0].c==-1?w+1:e[0].c;if(f.dense){if(!l["!data"][g])l["!data"][g]=[];l["!data"][g][w]=p}else l[Pa(w)+A]=p;if(f.cellFormula){_=false;for(C=0;C<S.length;++C){var R=S[C];if(v.r>=R[0].s.r&&v.r<=R[0].e.r)if(w>=R[0].s.c&&w<=R[0].e.c){p.F=Ha(R[0]);_=true}}if(!_&&e.length>3)p.f=e[3]}if(c.s.r>v.r)c.s.r=v.r;if(c.s.c>w)c.s.c=w;if(c.e.r<v.r)c.e.r=v.r;if(c.e.c<w)c.e.c=w;if(f.cellDates&&m&&p.t=="n"&&Pe(q[m.numFmtId])){var M=te(p.v+L);if(M){p.t="d";p.v=new Date(Date.UTC(M.y,M.m-1,M.d,M.H,M.M,M.S,M.u))}}if(D){if(D.type=="XLDAPR")p.D=true;D=void 0}if(P)P=void 0;break;case 1:;case 12:if(!f.sheetStubs||u)break;p={t:"z",v:void 0};w=e[0].c==-1?w+1:e[0].c;if(f.dense){if(!l["!data"][g])l["!data"][g]=[];l["!data"][g][w]=p}else l[Pa(w)+A]=p;if(c.s.r>v.r)c.s.r=v.r;if(c.s.c>w)c.s.c=w;if(c.e.r<v.r)c.e.r=v.r;if(c.e.c<w)c.e.c=w;if(D){if(D.type=="XLDAPR")p.D=true;D=void 0}if(P)P=void 0;break;case 176:E.push(e);break;case 49:{D=((f.xlmeta||{}).Cell||[])[e-1]}break;case 494:var U=a["!id"][e.relId];if(U){e.Target=U.Target;if(e.loc)e.Target+="#"+e.loc;e.Rel=U}else if(e.relId==""){e.Target="#"+e.loc}for(g=e.rfx.s.r;g<=e.rfx.e.r;++g)for(w=e.rfx.s.c;w<=e.rfx.e.c;++w){if(f.dense){if(!l["!data"][g])l["!data"][g]=[];if(!l["!data"][g][w])l["!data"][g][w]={t:"z",v:undefined};l["!data"][g][w].l=e}else{k=Pa(w)+Ia(g);if(!l[k])l[k]={t:"z",v:undefined};l[k].l=e}}break;case 426:if(!f.cellFormula)break;S.push(e);y=f.dense?l["!data"][g][w]:l[Pa(w)+A];y.f=Dd(e[1],c,{r:v.r,c:w},O,f);y.F=Ha(e[0]);break;case 427:if(!f.cellFormula)break;x[Wa(e[0].s)]=e[1];y=f.dense?l["!data"][g][w]:l[Pa(w)+A];y.f=Dd(e[1],c,{r:v.r,c:w},O,f);break;case 60:if(!f.cellStyles)break;while(e.e>=e.s){I[e.e--]={width:e.w/256,hidden:!!(e.flags&1),level:e.level};if(!F){F=true;rc(e.w/256)}tc(I[e.e+1])}break;case 551:if(e)l["!legrel"]=e;break;case 161:l["!autofilter"]={ref:Ha(e)};break;case 476:l["!margins"]=e;break;case 147:if(!n.Sheets[t])n.Sheets[t]={};if(e.name)n.Sheets[t].CodeName=e.name;if(e.above||e.left)l["!outline"]={above:e.above,left:e.left};break;case 137:if(!n.Views)n.Views=[{}];if(!n.Views[0])n.Views[0]={};if(e.RTL)n.Views[0].RTL=true;break;case 485:break;case 64:;case 1053:break;case 151:break;case 152:;case 175:;case 644:;case 625:;case 562:;case 396:;case 1112:;case 1146:;case 471:;case 1050:;case 649:;case 1105:;case 589:;case 607:;case 564:;case 1055:;case 168:;case 174:;case 1180:;case 499:;case 507:;case 550:;case 171:;case 167:;case 1177:;case 169:;case 1181:;case 552:;case 661:;case 639:;case 478:;case 537:;case 477:;case 536:;case 1103:;case 680:;case 1104:;case 1024:;case 663:;case 535:;case 678:;case 504:;case 1043:;case 428:;case 170:;case 3072:;case 50:;case 2070:;case 1045:break;case 35:u=true;break;case 36:u=false;break;case 37:h.push(b);u=true;break;case 38:h.pop();u=false;break;default:if(r.T){}else if(!u||f.WTF)throw new Error("Unexpected record 0x"+b.toString(16));}},f);delete f.supbooks;delete f["!row"];if(!l["!ref"]&&(c.s.r<2e6||o&&(o.e.r>0||o.e.c>0||o.s.r>0||o.s.c>0)))l["!ref"]=Ha(o||c);if(f.sheetRows&&l["!ref"]){var M=Ga(l["!ref"]);if(f.sheetRows<=+M.e.r){M.e.r=f.sheetRows-1;if(M.e.r>c.e.r)M.e.r=c.e.r;if(M.e.r<M.s.r)M.s.r=M.e.r;if(M.e.c>c.e.c)M.e.c=c.e.c;if(M.e.c<M.s.c)M.s.c=M.e.c;l["!fullref"]=l["!ref"];l["!ref"]=Ha(M)}}if(E.length>0)l["!merges"]=E;if(I.length>0)l["!cols"]=I;if(N.length>0)l["!rows"]=N;if(a["!id"][l["!legrel"]])l["!legdrawel"]=a["!id"][l["!legrel"]];return l}function fm(e,r,t,a,n,i,s,f){var l={r:t,c:a};if(r.c)i["!comments"].push([Wa(l),r.c]);if(r.v===undefined)return false;var o="";switch(r.t){case"b":o=r.v?"1":"0";break;case"d":r=kr(r);r.z=r.z||q[14];r.v=ur(br(r.v,f),f);r.t="n";break;case"n":;case"e":o=""+r.v;break;default:o=r.v;break;}l.s=wv(n.cellXfs,r,n);if(r.l)i["!links"].push([Wa(l),r.l]);switch(r.t){case"s":;case"str":if(n.bookSST){o=mv(n.Strings,r.v==null?"":String(r.v),n.revStrings);l.t="s";l.v=o;if(s)Ca(e,18,Ep(r,l));else Ca(e,7,Ap(r,l))}else{l.t="str";if(s)Ca(e,17,Mp(r,l));else Ca(e,6,Pp(r,l))}return true;case"n":if(r.v==(r.v|0)&&r.v>-1e3&&r.v<1e3){if(s)Ca(e,13,Np(r,l));else Ca(e,2,Rp(r,l))}else if(isNaN(r.v)){if(s)Ca(e,14,kp({t:"e",v:36},l));else Ca(e,3,bp({t:"e",v:36},l))}else if(!isFinite(r.v)){if(s)Ca(e,14,kp({t:"e",v:7},l));else Ca(e,3,bp({t:"e",v:7},l))}else{if(s)Ca(e,16,xp(r,l));else Ca(e,5,_p(r,l))}return true;case"b":l.t="b";if(s)Ca(e,15,mp(r,l));else Ca(e,4,vp(r,l));return true;case"e":l.t="e";if(s)Ca(e,14,kp(r,l));else Ca(e,3,bp(r,l));return true;}if(s)Ca(e,12,up(r,l));else Ca(e,1,cp(r,l));return true}function lm(e,r,t,a,n){var i=Ga(r["!ref"]||"A1"),s,f="",l=[];var o=(((n||{}).Workbook||{}).WBProps||{}).date1904;Ca(e,145);var c=r["!data"]!=null;var h=i.e.r;if(r["!rows"])h=Math.max(i.e.r,r["!rows"].length-1);for(var u=i.s.r;u<=h;++u){f=Ia(u);ap(e,r,i,u);var d=false;if(u<=i.e.r)for(var v=i.s.c;v<=i.e.c;++v){if(u===i.s.r)l[v]=Pa(v);s=l[v]+f;var p=c?(r["!data"][u]||[])[v]:r[s];if(!p){d=false;continue}d=fm(e,p,u,v,a,r,d,o)}}Ca(e,146)}function om(e,r){if(!r||!r["!merges"])return;Ca(e,177,Xp(r["!merges"].length));r["!merges"].forEach(function(r){Ca(e,176,Vp(r))});Ca(e,178)}function cm(e,r){if(!r||!r["!cols"])return;Ca(e,390);r["!cols"].forEach(function(r,t){if(r)Ca(e,60,Zp(t,r))});Ca(e,391)}function hm(e,r){if(!r||!r["!ref"])return;Ca(e,648);Ca(e,649,tm(Ga(r["!ref"])));Ca(e,650)}function um(e,r,t){r["!links"].forEach(function(r){if(!r[1].Target)return;var a=ui(t,-1,r[1].Target.replace(/#.*$/,""),li.HLINK);Ca(e,494,$p(r,a))});delete r["!links"]}function dm(e,r,t,a){if(r["!comments"].length>0){var n=ui(a,-1,"../drawings/vmlDrawing"+(t+1)+".vml",li.VML);Ca(e,551,bn("rId"+n));r["!legacy"]=n}}function vm(e,r,t,a){if(!r["!autofilter"])return;var n=r["!autofilter"];var i=typeof n.ref==="string"?n.ref:Ha(n.ref);if(!t.Workbook)t.Workbook={Sheets:[]};if(!t.Workbook.Names)t.Workbook.Names=[];var s=t.Workbook.Names;var f=za(i);if(f.s.r==f.e.r){f.e.r=za(r["!ref"]).e.r;i=Ha(f)}for(var l=0;l<s.length;++l){var o=s[l];if(o.Name!="_xlnm._FilterDatabase")continue;if(o.Sheet!=a)continue;o.Ref=Xa(t.SheetNames[a])+"!"+Va(i);break}if(l==s.length)s.push({Name:"_xlnm._FilterDatabase",Sheet:a,Ref:Xa(t.SheetNames[a])+"!"+Va(i)});Ca(e,161,En(Ga(i)));Ca(e,162)}function pm(e,r,t){Ca(e,133);{Ca(e,137,rm(r,t));Ca(e,138)}Ca(e,134)}function mm(){}function gm(e,r){if(!r["!protect"])return;Ca(e,535,am(r["!protect"]))}function bm(e,r,t,a){var n=Ea();var i=t.SheetNames[e],s=t.Sheets[i]||{};var f=i;try{if(t&&t.Workbook)f=t.Workbook.Sheets[e].CodeName||f}catch(l){}var o=Ga(s["!ref"]||"A1");if(o.e.c>16383||o.e.r>1048575){if(r.WTF)throw new Error("Range "+(s["!ref"]||"A1")+" exceeds format limit A1:XFD1048576");o.e.c=Math.min(o.e.c,16383);o.e.r=Math.min(o.e.c,1048575)}s["!links"]=[];s["!comments"]=[];Ca(n,129);if(t.vbaraw||s["!outline"])Ca(n,147,lp(f,s["!outline"]));Ca(n,148,ip(o));pm(n,s,t.Workbook);mm(n,s);cm(n,s,e,r,t);lm(n,s,e,r,t);gm(n,s);vm(n,s,t,e);om(n,s);um(n,s,a);if(s["!margins"])Ca(n,476,Qp(s["!margins"]));if(!r||r.ignoreEC||r.ignoreEC==void 0)hm(n,s);dm(n,s,e,a);Ca(n,130);return n.end()}function wm(e){var r=[];var t=e.match(/^<c:numCache>/);var a;(e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm)||[]).forEach(function(e){var a=e.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);if(!a)return;r[+a[1]]=t?+a[2]:a[2]});var n=nt((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/)||["","General"])[1]);(e.match(/<c:f>(.*?)<\/c:f>/gm)||[]).forEach(function(e){a=e.replace(/<.*?>/g,"")});return[r,n,a]}function km(e,r,t,a,n,i){var s=i||{"!type":"chart"};if(!e)return i;var f=0,l=0,o="A";var c={s:{r:2e6,c:2e6},e:{r:0,c:0}};(e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm)||[]).forEach(function(e){var r=wm(e);c.s.r=c.s.c=0;c.e.c=f;o=Pa(f);r[0].forEach(function(e,t){if(s["!data"]){if(!s["!data"][t])s["!data"][t]=[];s["!data"][t][f]={t:"n",v:e,z:r[1]}}else s[o+Ia(t)]={t:"n",v:e,z:r[1]};l=t});if(c.e.r<l)c.e.r=l;++f});if(f>0)s["!ref"]=Ha(c);return s}function Tm(e,r,t,a,n){if(!e)return e;if(!a)a={"!id":{}};var i={"!type":"chart","!drawel":null,"!rel":""};var s;var f=e.match(Rv);if(f)Pv(f[0],i,n,t);if(s=e.match(/drawing r:id="(.*?)"/))i["!rel"]=s[1];if(a["!id"][i["!rel"]])i["!drawel"]=a["!id"][i["!rel"]];return i}function Am(e,r){e.l+=10;var t=Qa(e,r-10);return{name:t}}function ym(e,r,t,a,n){if(!e)return e;if(!a)a={"!id":{}};var i={"!type":"chart","!drawel":null,"!rel":""};var s=[];var f=false;ya(e,function l(e,a,o){switch(o){case 550:i["!rel"]=e;break;case 651:if(!n.Sheets[t])n.Sheets[t]={};if(e.name)n.Sheets[t].CodeName=e.name;break;case 562:;case 652:;case 669:;case 679:;case 551:;case 552:;case 476:;case 3072:break;case 35:f=true;break;case 36:f=false;break;case 37:s.push(o);break;case 38:s.pop();break;default:if(a.T>0)s.push(o);else if(a.T<0)s.pop();else if(!f||r.WTF)throw new Error("Unexpected record 0x"+o.toString(16));}},r);if(a["!id"][i["!rel"]])i["!drawel"]=a["!id"][i["!rel"]];return i}var Em=[["allowRefreshQuery",false,"bool"],["autoCompressPictures",true,"bool"],["backupFile",false,"bool"],["checkCompatibility",false,"bool"],["CodeName",""],["date1904",false,"bool"],["defaultThemeVersion",0,"int"],["filterPrivacy",false,"bool"],["hidePivotFieldList",false,"bool"],["promptedSolutions",false,"bool"],["publishItems",false,"bool"],["refreshAllConnections",false,"bool"],["saveExternalLinkValues",true,"bool"],["showBorderUnselectedTables",true,"bool"],["showInkAnnotation",true,"bool"],["showObjects","all"],["showPivotChartFilter",false,"bool"],["updateLinks","userSet"]];var Cm=[["activeTab",0,"int"],["autoFilterDateGrouping",true,"bool"],["firstSheet",0,"int"],["minimized",false,"bool"],["showHorizontalScroll",true,"bool"],["showSheetTabs",true,"bool"],["showVerticalScroll",true,"bool"],["tabRatio",600,"int"],["visibility","visible"]];var _m=[];var Sm=[["calcCompleted","true"],["calcMode","auto"],["calcOnSave","true"],["concurrentCalc","true"],["fullCalcOnLoad","false"],["fullPrecision","true"],["iterate","false"],["iterateCount","100"],["iterateDelta","0.001"],["refMode","A1"]];function xm(e,r){for(var t=0;t!=e.length;++t){var a=e[t];for(var n=0;n!=r.length;++n){var i=r[n];if(a[i[0]]==null)a[i[0]]=i[1];else switch(i[2]){case"bool":if(typeof a[i[0]]=="string")a[i[0]]=vt(a[i[0]]);break;case"int":if(typeof a[i[0]]=="string")a[i[0]]=parseInt(a[i[0]],10);break;}}}}function Om(e,r){for(var t=0;t!=r.length;++t){var a=r[t];if(e[a[0]]==null)e[a[0]]=a[1];else switch(a[2]){case"bool":if(typeof e[a[0]]=="string")e[a[0]]=vt(e[a[0]]);break;case"int":if(typeof e[a[0]]=="string")e[a[0]]=parseInt(e[a[0]],10);break;}}}function Rm(e){Om(e.WBProps,Em);Om(e.CalcPr,Sm);xm(e.WBView,Cm);xm(e.Sheets,_m);vv.date1904=vt(e.WBProps.date1904)}function Im(e){if(!e.Workbook)return"false";if(!e.Workbook.WBProps)return"false";return vt(e.Workbook.WBProps.date1904)?"true":"false"}var Nm=":][*?/\\".split("");function Fm(e,r){try{if(e=="")throw new Error("Sheet name cannot be blank");if(e.length>31)throw new Error("Sheet name cannot exceed 31 chars");if(e.charCodeAt(0)==39||e.charCodeAt(e.length-1)==39)throw new Error("Sheet name cannot start or end with apostrophe (')");if(e.toLowerCase()=="history")throw new Error("Sheet name cannot be 'History'");Nm.forEach(function(r){if(e.indexOf(r)==-1)return;throw new Error("Sheet name cannot contain : \\ / ? * [ ]")})}catch(t){if(r)return false;throw t}return true}function Dm(e,r,t){e.forEach(function(a,n){Fm(a);for(var i=0;i<n;++i)if(a==e[i])throw new Error("Duplicate Sheet Name: "+a);if(t){var s=r&&r[n]&&r[n].CodeName||a;if(s.charCodeAt(0)==95&&s.length>22)throw new Error("Bad Code Name: Worksheet"+s)}})}function Pm(e){if(!e||!e.SheetNames||!e.Sheets)throw new Error("Invalid Workbook");if(!e.SheetNames.length)throw new Error("Workbook is empty");var r=e.Workbook&&e.Workbook.Sheets||[];Dm(e.SheetNames,r,!!e.vbaraw);for(var t=0;t<e.SheetNames.length;++t)Tv(e.Sheets[e.SheetNames[t]],e.SheetNames[t],t);e.SheetNames.forEach(function(r,t){var a=e.Sheets[r];if(!a||!a["!autofilter"])return;var n;if(!e.Workbook)e.Workbook={};if(!e.Workbook.Names)e.Workbook.Names=[];e.Workbook.Names.forEach(function(e){if(e.Name=="_xlnm._FilterDatabase"&&e.Sheet==t)n=e});var i=Xa(r)+"!"+Va(a["!autofilter"].ref);if(n)n.Ref=i;else e.Workbook.Names.push({Name:"_xlnm._FilterDatabase",Sheet:t,Ref:i})})}var Lm=/<\w+:workbook/;function Mm(e,r){if(!e)throw new Error("Could not find file");var t={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},Names:[],xmlns:""};var a=false,n="xmlns";var i={},s=0;e.replace(Jr,function f(l,o){var c=et(l);switch(rt(c[0])){case"<?xml":break;case"<workbook":if(l.match(Lm))n="xmlns"+l.match(/<(\w+):/)[1];t.xmlns=c[n];break;case"</workbook>":break;case"<fileVersion":delete c[0];t.AppVersion=c;break;case"<fileVersion/>":;case"</fileVersion>":break;case"<fileSharing":break;case"<fileSharing/>":break;case"<workbookPr":;case"<workbookPr/>":Em.forEach(function(e){if(c[e[0]]==null)return;switch(e[2]){case"bool":t.WBProps[e[0]]=vt(c[e[0]]);break;case"int":t.WBProps[e[0]]=parseInt(c[e[0]],10);break;default:t.WBProps[e[0]]=c[e[0]];}});if(c.codeName)t.WBProps.CodeName=wt(c.codeName);break;case"</workbookPr>":break;case"<workbookProtection":break;case"<workbookProtection/>":break;case"<bookViews":;case"<bookViews>":;case"</bookViews>":break;case"<workbookView":;case"<workbookView/>":delete c[0];t.WBView.push(c);break;case"</workbookView>":break;case"<sheets":;case"<sheets>":;case"</sheets>":break;case"<sheet":switch(c.state){case"hidden":c.Hidden=1;break;case"veryHidden":c.Hidden=2;break;default:c.Hidden=0;}delete c.state;c.name=nt(wt(c.name));delete c[0];t.Sheets.push(c);break;case"</sheet>":break;case"<functionGroups":;case"<functionGroups/>":break;case"<functionGroup":break;case"<externalReferences":;case"</externalReferences>":;case"<externalReferences>":break;case"<externalReference":break;case"<definedNames/>":break;case"<definedNames>":;case"<definedNames":a=true;break;case"</definedNames>":a=false;break;case"<definedName":{i={};i.Name=wt(c.name);if(c.comment)i.Comment=c.comment;if(c.localSheetId)i.Sheet=+c.localSheetId;if(vt(c.hidden||"0"))i.Hidden=true;s=o+l.length}break;case"</definedName>":{i.Ref=nt(wt(e.slice(s,o)));t.Names.push(i)}break;case"<definedName/>":break;case"<calcPr":delete c[0];t.CalcPr=c;break;case"<calcPr/>":delete c[0];t.CalcPr=c;break;case"</calcPr>":break;case"<oleSize":break;case"<customWorkbookViews>":;case"</customWorkbookViews>":;case"<customWorkbookViews":break;case"<customWorkbookView":;case"</customWorkbookView>":break;case"<pivotCaches>":;case"</pivotCaches>":;case"<pivotCaches":break;case"<pivotCache":break;case"<smartTagPr":;case"<smartTagPr/>":break;case"<smartTagTypes":;case"<smartTagTypes>":;case"</smartTagTypes>":break;case"<smartTagType":break;case"<webPublishing":;case"<webPublishing/>":break;case"<fileRecoveryPr":;case"<fileRecoveryPr/>":break;case"<webPublishObjects>":;case"<webPublishObjects":;case"</webPublishObjects>":break;case"<webPublishObject":break;case"<extLst":;case"<extLst>":;case"</extLst>":;case"<extLst/>":break;case"<ext":a=true;break;case"</ext>":a=false;break;case"<ArchID":break;case"<AlternateContent":;case"<AlternateContent>":a=true;break;case"</AlternateContent>":a=false;break;case"<revisionPtr":break;default:if(!a&&r.WTF)throw new Error("unrecognized "+c[0]+" in workbook");}return l});if(Lt.indexOf(t.xmlns)===-1)throw new Error("Unknown Namespace: "+t.xmlns);Rm(t);return t}function Um(e){var r=[jr];r[r.length]=Rt("workbook",null,{xmlns:Lt[0],"xmlns:r":Pt.r});var t=e.Workbook&&(e.Workbook.Names||[]).length>0;var a={codeName:"ThisWorkbook"};if(e.Workbook&&e.Workbook.WBProps){Em.forEach(function(r){if(e.Workbook.WBProps[r[0]]==null)return;if(e.Workbook.WBProps[r[0]]==r[1])return;a[r[0]]=e.Workbook.WBProps[r[0]]});if(e.Workbook.WBProps.CodeName){a.codeName=e.Workbook.WBProps.CodeName;delete a.CodeName}}r[r.length]=Rt("workbookPr",null,a);var n=e.Workbook&&e.Workbook.Sheets||[];var i=0;if(n&&n[0]&&!!n[0].Hidden){r[r.length]="<bookViews>";for(i=0;i!=e.SheetNames.length;++i){if(!n[i])break;if(!n[i].Hidden)break}if(i==e.SheetNames.length)i=0;r[r.length]='<workbookView firstSheet="'+i+'" activeTab="'+i+'"/>';r[r.length]="</bookViews>"}r[r.length]="<sheets>";for(i=0;i!=e.SheetNames.length;++i){var s={name:ft(e.SheetNames[i].slice(0,31))};s.sheetId=""+(i+1);s["r:id"]="rId"+(i+1);if(n[i])switch(n[i].Hidden){case 1:s.state="hidden";break;case 2:s.state="veryHidden";break;}r[r.length]=Rt("sheet",null,s)}r[r.length]="</sheets>";if(t){r[r.length]="<definedNames>";if(e.Workbook&&e.Workbook.Names)e.Workbook.Names.forEach(function(e){var t={name:e.Name};if(e.Comment)t.comment=e.Comment;if(e.Sheet!=null)t.localSheetId=""+e.Sheet;if(e.Hidden)t.hidden="1";if(!e.Ref)return;r[r.length]=Rt("definedName",ft(e.Ref),t)});r[r.length]="</definedNames>"}if(r.length>2){r[r.length]="</workbook>";r[1]=r[1].replace("/>",">")}return r.join("")}function Bm(e,r){var t={};t.Hidden=e._R(4);t.iTabID=e._R(4);t.strRelID=gn(e,r-8);t.name=Qa(e);return t}function Wm(e,r){if(!r)r=Aa(127);r._W(4,e.Hidden);r._W(4,e.iTabID);bn(e.strRelID,r);en(e.name.slice(0,31),r);return r.length>r.l?r.slice(0,r.l):r}function zm(e,r){var t={};var a=e._R(4);t.defaultThemeVersion=e._R(4);var n=r>8?Qa(e):"";if(n.length>0)t.CodeName=n;t.autoCompressPictures=!!(a&65536);t.backupFile=!!(a&64);t.checkCompatibility=!!(a&4096);t.date1904=!!(a&1);t.filterPrivacy=!!(a&8);t.hidePivotFieldList=!!(a&1024);t.promptedSolutions=!!(a&16);t.publishItems=!!(a&2048);t.refreshAllConnections=!!(a&262144);t.saveExternalLinkValues=!!(a&128);t.showBorderUnselectedTables=!!(a&4);t.showInkAnnotation=!!(a&32);t.showObjects=["all","placeholders","none"][a>>13&3];t.showPivotChartFilter=!!(a&32768);t.updateLinks=["userSet","never","always"][a>>8&3];return t}function Hm(e,r){if(!r)r=Aa(72);var t=0;if(e){if(e.date1904)t|=1;if(e.filterPrivacy)t|=8}r._W(4,t);r._W(4,0);dn(e&&e.CodeName||"ThisWorkbook",r);return r.slice(0,r.l)}function Vm(e,r){var t={};e._R(4);t.ArchID=e._R(4);e.l+=r-8;return t}function Xm(e,r,t){var a=e.l+r;var n=e._R(4);e.l+=1;var i=e._R(4);var s=mn(e);var f=$d(e,0,t);var l=vn(e);if(n&32)s="_xlnm."+s;e.l=a;var o={Name:s,Ptg:f,Flags:n};if(i<268435455)o.Sheet=i;if(l)o.Comment=l;return o}function Gm(e,r){var t=Aa(9);var a=0;var n=e.Name;if(ti.indexOf(n)>-1){a|=32;n=n.slice(6)}t._W(4,a);t._W(1,0);t._W(4,e.Sheet==null?4294967295:e.Sheet);var i=[t,en(n),iv(e.Ref,r)];if(e.Comment)i.push(pn(e.Comment));else{var s=Aa(4);s._W(4,4294967295);i.push(s)}return P(i)}function $m(e,r){var t={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},xmlns:""};var a=[];var n=false;if(!r)r={};r.biff=12;var i=[];var s=[[]];s.SheetNames=[];s.XTI=[];Zg[16]={n:"BrtFRTArchID$",f:Vm};ya(e,function f(e,l,o){switch(o){case 156:s.SheetNames.push(e.name);t.Sheets.push(e);break;case 153:t.WBProps=e;break;case 39:if(e.Sheet!=null)r.SID=e.Sheet;e.Ref=Dd(e.Ptg,null,null,s,r);delete r.SID;delete e.Ptg;i.push(e);break;case 1036:break;case 357:;case 358:;case 355:;case 667:if(!s[0].length)s[0]=[o,e];else s.push([o,e]);s[s.length-1].XTI=[];break;case 362:if(s.length===0){s[0]=[];s[0].XTI=[]}s[s.length-1].XTI=s[s.length-1].XTI.concat(e);s.XTI=s.XTI.concat(e);break;case 361:break;case 2071:;case 158:;case 143:;case 664:;case 353:break;case 3072:;case 3073:;case 534:;case 677:;case 157:;case 610:;case 2050:;case 155:;case 548:;case 676:;case 128:;case 665:;case 2128:;case 2125:;case 549:;case 2053:;case 596:;case 2076:;case 2075:;case 2082:;case 397:;case 154:;case 1117:;case 553:;case 2091:break;case 35:a.push(o);n=true;break;case 36:a.pop();n=false;break;case 37:a.push(o);n=true;break;case 38:a.pop();n=false;break;case 16:break;default:if(l.T){}else if(!n||r.WTF&&a[a.length-1]!=37&&a[a.length-1]!=35)throw new Error("Unexpected record 0x"+o.toString(16));}},r);Rm(t);t.Names=i;t.supbooks=s;return t}function jm(e,r){Ca(e,143);for(var t=0;t!=r.SheetNames.length;++t){var a=r.Workbook&&r.Workbook.Sheets&&r.Workbook.Sheets[t]&&r.Workbook.Sheets[t].Hidden||0;var n={Hidden:a,iTabID:t+1,strRelID:"rId"+(t+1),name:r.SheetNames[t]};Ca(e,156,Wm(n))}Ca(e,144)}function Km(r,t){if(!t)t=Aa(127);for(var a=0;a!=4;++a)t._W(4,0);en("SheetJS",t);en(e.version,t);en(e.version,t);en("7262",t);return t.length>t.l?t.slice(0,t.l):t}function Ym(e,r){if(!r)r=Aa(29);r._W(-4,0);r._W(-4,460);r._W(4,28800);r._W(4,17600);r._W(4,500);r._W(4,e);r._W(4,e);var t=120;r._W(1,t);return r.length>r.l?r.slice(0,r.l):r}function Zm(e,r){if(!r.Workbook||!r.Workbook.Sheets)return;var t=r.Workbook.Sheets;var a=0,n=-1,i=-1;for(;a<t.length;++a){if(!t[a]||!t[a].Hidden&&n==-1)n=a;else if(t[a].Hidden==1&&i==-1)i=a}if(i>n)return;Ca(e,135);Ca(e,158,Ym(n));Ca(e,136)}function Jm(e,r){if(!r.Workbook||!r.Workbook.Names)return;r.Workbook.Names.forEach(function(t){try{if(t.Flags&14)return;Ca(e,39,Gm(t,r))}catch(a){console.error("Could not serialize defined name "+JSON.stringify(t))}})}function qm(e){var r=e.SheetNames.length;var t=Aa(12*r+28);t._W(4,r+2);t._W(4,0);t._W(4,-2);t._W(4,-2);t._W(4,0);t._W(4,-1);t._W(4,-1);for(var a=0;a<r;++a){t._W(4,0);t._W(4,a);t._W(4,a)}return t}function Qm(e,r){Ca(e,353);Ca(e,357);Ca(e,362,qm(r,0));Ca(e,354)}function eg(e,r){var t=Ea();Ca(t,131);Ca(t,128,Km());Ca(t,153,Hm(e.Workbook&&e.Workbook.WBProps||null));Zm(t,e,r);jm(t,e,r);Qm(t,e);if((e.Workbook||{}).Names)Jm(t,e);Ca(t,132);return t.end()}function rg(e,r,t){if(r.slice(-4)===".bin")return $m(e,t);return Mm(e,t)}function tg(e,r,t,a,n,i,s,f){if(r.slice(-4)===".bin")return sm(e,a,t,n,i,s,f);return Fv(e,a,t,n,i,s,f)}function ag(e,r,t,a,n,i,s,f){if(r.slice(-4)===".bin")return ym(e,a,t,n,i,s,f);return Tm(e,a,t,n,i,s,f)}function ng(e,r,t,a,n,i,s,f){if(r.slice(-4)===".bin")return Jh(e,a,t,n,i,s,f);return qh(e,a,t,n,i,s,f)}function ig(e,r,t,a,n,i,s,f){if(r.slice(-4)===".bin")return Yh(e,a,t,n,i,s,f);return Zh(e,a,t,n,i,s,f)}function sg(e,r,t,a){if(r.slice(-4)===".bin")return Dc(e,t,a);return gc(e,t,a)}function fg(e,r,t){if(r.slice(-4)===".bin")return co(e,t);return so(e,t)}function lg(e,r,t){if(r.slice(-4)===".bin")return Vh(e,t);return Fh(e,t)}function og(e,r,t){if(r.slice(-4)===".bin")return Eh(e,r,t);return Ah(e,r,t)}function cg(e,r,t,a){if(t.slice(-4)===".bin")return _h(e,r,t,a);return Ch(e,r,t,a)}function hg(e,r,t){if(r.slice(-4)===".bin")return bh(e,r,t);return kh(e,r,t)}var ug=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;var dg=/([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;function vg(e,r){var t=e.split(/\s+/);var a=[];if(!r)a[0]=t[0];if(t.length===1)return a;var n=e.match(ug),i,s,f,l;if(n)for(l=0;l!=n.length;++l){i=n[l].match(dg);if((s=i[1].indexOf(":"))===-1)a[i[1]]=i[2].slice(1,i[2].length-1);else{if(i[1].slice(0,6)==="xmlns:")f="xmlns"+i[1].slice(6);else f=i[1].slice(s+1);a[f]=i[2].slice(1,i[2].length-1)}}return a}function pg(e){var r=e.split(/\s+/);var t={};if(r.length===1)return t;var a=e.match(ug),n,i,s,f;if(a)for(f=0;f!=a.length;++f){n=a[f].match(dg);if((i=n[1].indexOf(":"))===-1)t[n[1]]=n[2].slice(1,n[2].length-1);else{if(n[1].slice(0,6)==="xmlns:")s="xmlns"+n[1].slice(6);else s=n[1].slice(i+1);t[s]=n[2].slice(1,n[2].length-1)}}return t}var mg;function gg(e,r,t){var a=mg[e]||nt(e);if(a==="General")return le(r);return We(a,r,{date1904:!!t})}function bg(e,r,t,a){var n=a;switch((t[0].match(/dt:dt="([\w.]+)"/)||["",""])[1]){case"boolean":n=vt(a);break;case"i2":;case"int":n=parseInt(a,10);break;case"r4":;case"float":n=parseFloat(a);break;case"date":;case"dateTime.tz":n=br(a);break;case"i8":;case"string":;case"fixed":;case"uuid":;case"bin.base64":break;default:throw new Error("bad custprop:"+t[0]);}e[nt(r)]=n}function wg(e,r,t,a){if(e.t==="z")return;if(!t||t.cellText!==false)try{if(e.t==="e"){e.w=e.w||ei[e.v]}else if(r==="General"){if(e.t==="n"){if((e.v|0)===e.v)e.w=e.v.toString(10);else e.w=fe(e.v)}else e.w=le(e.v)}else e.w=gg(r||"General",e.v,a)}catch(n){if(t.WTF)throw n}try{var i=mg[r]||r||"General";if(t.cellNF)e.z=i;if(t.cellDates&&e.t=="n"&&Pe(i)){var s=te(e.v+(a?1462:0));if(s){e.t="d";e.v=new Date(Date.UTC(s.y,s.m-1,s.d,s.H,s.M,s.S,s.u))}}}catch(n){if(t.WTF)throw n}}function kg(e,r,t){if(t.cellStyles){if(r.Interior){var a=r.Interior;if(a.Pattern)a.patternType=fc[a.Pattern]||a.Pattern}}e[r.ID]=r}function Tg(e,r,t,a,n,i,s,f,l,o,c){var h="General",u=a.StyleID,d={};o=o||{};var v=[];var p=0;if(u===undefined&&f)u=f.StyleID;if(u===undefined&&s)u=s.StyleID;while(i[u]!==undefined){if(i[u].nf)h=i[u].nf;if(i[u].Interior)v.push(i[u].Interior);if(!i[u].Parent)break;u=i[u].Parent}switch(t.Type){case"Boolean":a.t="b";a.v=vt(e);break;case"String":a.t="s";a.r=ut(nt(e));a.v=e.indexOf("<")>-1?nt(r||e).replace(/<.*?>/g,""):a.r;break;case"DateTime":if(e.slice(-1)!="Z")e+="Z";a.v=ur(br(e,c),c);if(a.v!==a.v)a.v=nt(e);if(!h||h=="General")h="yyyy-mm-dd";case"Number":if(a.v===undefined)a.v=+e;if(!a.t)a.t="n";break;case"Error":a.t="e";a.v=ri[e];if(o.cellText!==false)a.w=e;break;default:if(e==""&&r==""){a.t="z"}else{a.t="s";a.v=ut(r||e)}break;}wg(a,h,o,c);if(o.cellFormula!==false){if(a.Formula){var m=nt(a.Formula);if(m.charCodeAt(0)==61)m=m.slice(1);a.f=Qh(m,n);delete a.Formula;if(a.ArrayRange=="RC")a.F=Qh("RC:RC",n);else if(a.ArrayRange){a.F=Qh(a.ArrayRange,n);l.push([Ga(a.F),a.F])}}else{for(p=0;p<l.length;++p)if(n.r>=l[p][0].s.r&&n.r<=l[p][0].e.r)if(n.c>=l[p][0].s.c&&n.c<=l[p][0].e.c)a.F=l[p][1]}}if(o.cellStyles){v.forEach(function(e){if(!d.patternType&&e.patternType)d.patternType=e.patternType});a.s=d}if(a.StyleID!==undefined)a.ixfe=a.StyleID}function Ag(e){return ti.indexOf("_xlnm."+e)>-1?"_xlnm."+e:e}function yg(e){e.t=e.v||"";e.t=e.t.replace(/\r\n/g,"\n").replace(/\r/g,"\n");e.v=e.w=e.ixfe=undefined}function Eg(e,r){var t=r||{};Ve();var n=v(Ft(e));if(t.type=="binary"||t.type=="array"||t.type=="base64"){if(typeof a!=="undefined")n=a.utils.decode(65001,c(n));else n=wt(n)}var i=n.slice(0,1024).toLowerCase(),s=false;i=i.replace(/".*?"/g,"");if((i.indexOf(">")&1023)>Math.min(i.indexOf(",")&1023,i.indexOf(";")&1023)){var f=kr(t);f.type="string";return jl.to_workbook(n,f)}if(i.indexOf("<?xml")==-1)["html","table","head","meta","script","style","div"].forEach(function(e){if(i.indexOf("<"+e)>=0)s=true});if(s)return Cb(n,t);mg={"General Number":"General","General Date":q[22],"Long Date":"dddd, mmmm dd, yyyy","Medium Date":q[15],"Short Date":q[14],"Long Time":q[19],"Medium Time":q[18],"Short Time":q[20],Currency:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',Fixed:q[2],Standard:q[4],Percent:q[10],Scientific:q[11],"Yes/No":'"Yes";"Yes";"No";@',"True/False":'"True";"True";"False";@',"On/Off":'"Yes";"Yes";"No";@'};var l;var o=[],h;if(b!=null&&t.dense==null)t.dense=b;var u={},d=[],p={},m="";if(t.dense)p["!data"]=[];var g={},w={};var k=vg('<Data ss:Type="String">'),T=0;var A=0,y=0;var E={s:{r:2e6,c:2e6},e:{r:0,c:0}};var C={},_={};var S="",x=0;var O=[];var R={},I={},N=0,F=[];var D=[],P={};var L=[],M,U=false;var B=[];var W=[],z={},H=0,V=0;var X={Sheets:[],WBProps:{date1904:false}},G={};Dt.lastIndex=0;n=n.replace(/<!--([\s\S]*?)-->/gm,"");var $="";while(l=Dt.exec(n))switch(l[3]=($=l[3]).toLowerCase()){case"data":if($=="data"){if(l[1]==="/"){if((h=o.pop())[0]!==l[3])throw new Error("Bad state: "+h.join("|"))}else if(l[0].charAt(l[0].length-2)!=="/")o.push([l[3],true]);break}if(o[o.length-1][1])break;if(l[1]==="/")Tg(n.slice(T,l.index),S,k,o[o.length-1][0]=="comment"?P:g,{c:A,r:y},C,L[A],w,B,t,X.WBProps.date1904);else{S="";k=vg(l[0]);T=l.index+l[0].length}break;case"cell":if(l[1]==="/"){if(D.length>0)g.c=D;if((!t.sheetRows||t.sheetRows>y)&&g.v!==void 0){if(t.dense){if(!p["!data"][y])p["!data"][y]=[];p["!data"][y][A]=g}else p[Pa(A)+Ia(y)]=g}if(g.HRef){g.l={Target:nt(g.HRef)};if(g.HRefScreenTip)g.l.Tooltip=g.HRefScreenTip;delete g.HRef;delete g.HRefScreenTip}if(g.MergeAcross||g.MergeDown){H=A+(parseInt(g.MergeAcross,10)|0);V=y+(parseInt(g.MergeDown,10)|0);if(H>A||V>y)O.push({s:{c:A,r:y},e:{c:H,r:V}})}if(!t.sheetStubs){if(g.MergeAcross)A=H+1;else++A}else if(g.MergeAcross||g.MergeDown){for(var j=A;j<=H;++j){for(var K=y;K<=V;++K){if(j>A||K>y){if(t.dense){if(!p["!data"][K])p["!data"][K]=[];p["!data"][K][j]={t:"z"}}else p[Pa(j)+Ia(K)]={t:"z"}}}}A=H+1}else++A}else{g=pg(l[0]);if(g.Index)A=+g.Index-1;if(A<E.s.c)E.s.c=A;if(A>E.e.c)E.e.c=A;if(l[0].slice(-2)==="/>")++A;D=[]}break;case"row":if(l[1]==="/"||l[0].slice(-2)==="/>"){if(y<E.s.r)E.s.r=y;
if(y>E.e.r)E.e.r=y;if(l[0].slice(-2)==="/>"){w=vg(l[0]);if(w.Index)y=+w.Index-1}A=0;++y}else{w=vg(l[0]);if(w.Index)y=+w.Index-1;z={};if(w.AutoFitHeight=="0"||w.Height){z.hpx=parseInt(w.Height,10);z.hpt=ic(z.hpx);W[y]=z}if(w.Hidden=="1"){z.hidden=true;W[y]=z}}break;case"worksheet":if(l[1]==="/"){if((h=o.pop())[0]!==l[3])throw new Error("Bad state: "+h.join("|"));d.push(m);if(E.s.r<=E.e.r&&E.s.c<=E.e.c){p["!ref"]=Ha(E);if(t.sheetRows&&t.sheetRows<=E.e.r){p["!fullref"]=p["!ref"];E.e.r=t.sheetRows-1;p["!ref"]=Ha(E)}}if(O.length)p["!merges"]=O;if(L.length>0)p["!cols"]=L;if(W.length>0)p["!rows"]=W;u[m]=p}else{E={s:{r:2e6,c:2e6},e:{r:0,c:0}};y=A=0;o.push([l[3],false]);h=vg(l[0]);m=nt(h.Name);p={};if(t.dense)p["!data"]=[];O=[];B=[];W=[];G={name:m,Hidden:0};X.Sheets.push(G)}break;case"table":if(l[1]==="/"){if((h=o.pop())[0]!==l[3])throw new Error("Bad state: "+h.join("|"))}else if(l[0].slice(-2)=="/>")break;else{o.push([l[3],false]);L=[];U=false}break;case"style":if(l[1]==="/")kg(C,_,t);else _=vg(l[0]);break;case"numberformat":_.nf=nt(vg(l[0]).Format||"General");if(mg[_.nf])_.nf=mg[_.nf];for(var Y=0;Y!=392;++Y)if(q[Y]==_.nf)break;if(Y==392)for(Y=57;Y!=392;++Y)if(q[Y]==null){Ze(_.nf,Y);break}break;case"column":if(o[o.length-1][0]!=="table")break;if(l[1]==="/")break;M=vg(l[0]);if(M.Hidden){M.hidden=true;delete M.Hidden}if(M.Width)M.wpx=parseInt(M.Width,10);if(!U&&M.wpx>10){U=true;Zo=jo;for(var Z=0;Z<L.length;++Z)if(L[Z])tc(L[Z])}if(U)tc(M);L[M.Index-1||L.length]=M;for(var J=0;J<+M.Span;++J)L[L.length]=kr(M);break;case"namedrange":if(l[1]==="/")break;if(!X.Names)X.Names=[];var Q=et(l[0]);var ee={Name:Ag(Q.Name),Ref:Qh(Q.RefersTo.slice(1),{r:0,c:0})};if(X.Sheets.length>0)ee.Sheet=X.Sheets.length-1;X.Names.push(ee);break;case"namedcell":break;case"b":break;case"i":break;case"u":break;case"s":break;case"em":break;case"h2":break;case"h3":break;case"sub":break;case"sup":break;case"span":break;case"alignment":break;case"borders":break;case"border":break;case"font":if(l[0].slice(-2)==="/>")break;else if(l[1]==="/")S+=n.slice(x,l.index);else x=l.index+l[0].length;break;case"interior":if(!t.cellStyles)break;_.Interior=vg(l[0]);break;case"protection":break;case"author":;case"title":;case"description":;case"created":;case"keywords":;case"subject":;case"category":;case"company":;case"lastauthor":;case"lastsaved":;case"lastprinted":;case"version":;case"revision":;case"totaltime":;case"hyperlinkbase":;case"manager":;case"contentstatus":;case"identifier":;case"language":;case"appname":if(l[0].slice(-2)==="/>")break;else if(l[1]==="/")Pi(R,$,n.slice(N,l.index));else N=l.index+l[0].length;break;case"paragraphs":break;case"styles":;case"workbook":if(l[1]==="/"){if((h=o.pop())[0]!==l[3])throw new Error("Bad state: "+h.join("|"))}else o.push([l[3],false]);break;case"comment":if(l[1]==="/"){if((h=o.pop())[0]!==l[3])throw new Error("Bad state: "+h.join("|"));yg(P);D.push(P)}else{o.push([l[3],false]);h=vg(l[0]);if(!vt(h["ShowAlways"]||"0"))D.hidden=true;P={a:h.Author}}break;case"autofilter":if(l[1]==="/"){if((h=o.pop())[0]!==l[3])throw new Error("Bad state: "+h.join("|"))}else if(l[0].charAt(l[0].length-2)!=="/"){var re=vg(l[0]);p["!autofilter"]={ref:Qh(re.Range).replace(/\$/g,"")};o.push([l[3],true])}break;case"name":break;case"datavalidation":if(l[1]==="/"){if((h=o.pop())[0]!==l[3])throw new Error("Bad state: "+h.join("|"))}else{if(l[0].charAt(l[0].length-2)!=="/")o.push([l[3],true])}break;case"pixelsperinch":break;case"componentoptions":;case"documentproperties":;case"customdocumentproperties":;case"officedocumentsettings":;case"pivottable":;case"pivotcache":;case"names":;case"mapinfo":;case"pagebreaks":;case"querytable":;case"sorting":;case"schema":;case"conditionalformatting":;case"smarttagtype":;case"smarttags":;case"excelworkbook":;case"workbookoptions":;case"worksheetoptions":if(l[1]==="/"){if((h=o.pop())[0]!==l[3])throw new Error("Bad state: "+h.join("|"))}else if(l[0].charAt(l[0].length-2)!=="/")o.push([l[3],true]);break;case"null":break;default:if(o.length==0&&l[3]=="document")return Mb(n,t);if(o.length==0&&l[3]=="uof")return Mb(n,t);var te=true;switch(o[o.length-1][0]){case"officedocumentsettings":switch(l[3]){case"allowpng":break;case"removepersonalinformation":break;case"downloadcomponents":break;case"locationofcomponents":break;case"colors":break;case"color":break;case"index":break;case"rgb":break;case"targetscreensize":break;case"readonlyrecommended":break;default:te=false;}break;case"componentoptions":switch(l[3]){case"toolbar":break;case"hideofficelogo":break;case"spreadsheetautofit":break;case"label":break;case"caption":break;case"maxheight":break;case"maxwidth":break;case"nextsheetnumber":break;default:te=false;}break;case"excelworkbook":switch(l[3]){case"date1904":X.WBProps.date1904=true;break;case"hidehorizontalscrollbar":break;case"hideverticalscrollbar":break;case"hideworkbooktabs":break;case"windowheight":break;case"windowwidth":break;case"windowtopx":break;case"windowtopy":break;case"tabratio":break;case"protectstructure":break;case"protectwindow":break;case"protectwindows":break;case"activesheet":break;case"displayinknotes":break;case"firstvisiblesheet":break;case"supbook":break;case"sheetname":break;case"sheetindex":break;case"sheetindexfirst":break;case"sheetindexlast":break;case"dll":break;case"acceptlabelsinformulas":break;case"donotsavelinkvalues":break;case"iteration":break;case"maxiterations":break;case"maxchange":break;case"path":break;case"xct":break;case"count":break;case"selectedsheets":break;case"calculation":break;case"uncalced":break;case"startupprompt":break;case"crn":break;case"externname":break;case"formula":break;case"colfirst":break;case"collast":break;case"wantadvise":break;case"boolean":break;case"error":break;case"text":break;case"ole":break;case"noautorecover":break;case"publishobjects":break;case"donotcalculatebeforesave":break;case"number":break;case"refmoder1c1":break;case"embedsavesmarttags":break;default:te=false;}break;case"workbookoptions":switch(l[3]){case"owcversion":break;case"height":break;case"width":break;default:te=false;}break;case"worksheetoptions":switch(l[3]){case"visible":if(l[0].slice(-2)==="/>"){}else if(l[1]==="/")switch(n.slice(N,l.index)){case"SheetHidden":G.Hidden=1;break;case"SheetVeryHidden":G.Hidden=2;break;}else N=l.index+l[0].length;break;case"header":if(!p["!margins"])bv(p["!margins"]={},"xlml");if(!isNaN(+et(l[0]).Margin))p["!margins"].header=+et(l[0]).Margin;break;case"footer":if(!p["!margins"])bv(p["!margins"]={},"xlml");if(!isNaN(+et(l[0]).Margin))p["!margins"].footer=+et(l[0]).Margin;break;case"pagemargins":var ae=et(l[0]);if(!p["!margins"])bv(p["!margins"]={},"xlml");if(!isNaN(+ae.Top))p["!margins"].top=+ae.Top;if(!isNaN(+ae.Left))p["!margins"].left=+ae.Left;if(!isNaN(+ae.Right))p["!margins"].right=+ae.Right;if(!isNaN(+ae.Bottom))p["!margins"].bottom=+ae.Bottom;break;case"displayrighttoleft":if(!X.Views)X.Views=[];if(!X.Views[0])X.Views[0]={};X.Views[0].RTL=true;break;case"freezepanes":break;case"frozennosplit":break;case"splithorizontal":;case"splitvertical":break;case"donotdisplaygridlines":break;case"activerow":break;case"activecol":break;case"toprowbottompane":break;case"leftcolumnrightpane":break;case"unsynced":break;case"print":break;case"printerrors":break;case"panes":break;case"scale":break;case"pane":break;case"number":break;case"layout":break;case"pagesetup":break;case"selected":break;case"protectobjects":break;case"enableselection":break;case"protectscenarios":break;case"validprinterinfo":break;case"horizontalresolution":break;case"verticalresolution":break;case"numberofcopies":break;case"activepane":break;case"toprowvisible":break;case"leftcolumnvisible":break;case"fittopage":break;case"rangeselection":break;case"papersizeindex":break;case"pagelayoutzoom":break;case"pagebreakzoom":break;case"filteron":break;case"fitwidth":break;case"fitheight":break;case"commentslayout":break;case"zoom":break;case"lefttoright":break;case"gridlines":break;case"allowsort":break;case"allowfilter":break;case"allowinsertrows":break;case"allowdeleterows":break;case"allowinsertcols":break;case"allowdeletecols":break;case"allowinserthyperlinks":break;case"allowformatcells":break;case"allowsizecols":break;case"allowsizerows":break;case"nosummaryrowsbelowdetail":if(!p["!outline"])p["!outline"]={};p["!outline"].above=true;break;case"tabcolorindex":break;case"donotdisplayheadings":break;case"showpagelayoutzoom":break;case"nosummarycolumnsrightdetail":if(!p["!outline"])p["!outline"]={};p["!outline"].left=true;break;case"blackandwhite":break;case"donotdisplayzeros":break;case"displaypagebreak":break;case"rowcolheadings":break;case"donotdisplayoutline":break;case"noorientation":break;case"allowusepivottables":break;case"zeroheight":break;case"viewablerange":break;case"selection":break;case"protectcontents":break;default:te=false;}break;case"pivottable":;case"pivotcache":switch(l[3]){case"immediateitemsondrop":break;case"showpagemultipleitemlabel":break;case"compactrowindent":break;case"location":break;case"pivotfield":break;case"orientation":break;case"layoutform":break;case"layoutsubtotallocation":break;case"layoutcompactrow":break;case"position":break;case"pivotitem":break;case"datatype":break;case"datafield":break;case"sourcename":break;case"parentfield":break;case"ptlineitems":break;case"ptlineitem":break;case"countofsameitems":break;case"item":break;case"itemtype":break;case"ptsource":break;case"cacheindex":break;case"consolidationreference":break;case"filename":break;case"reference":break;case"nocolumngrand":break;case"norowgrand":break;case"blanklineafteritems":break;case"hidden":break;case"subtotal":break;case"basefield":break;case"mapchilditems":break;case"function":break;case"refreshonfileopen":break;case"printsettitles":break;case"mergelabels":break;case"defaultversion":break;case"refreshname":break;case"refreshdate":break;case"refreshdatecopy":break;case"versionlastrefresh":break;case"versionlastupdate":break;case"versionupdateablemin":break;case"versionrefreshablemin":break;case"calculation":break;default:te=false;}break;case"pagebreaks":switch(l[3]){case"colbreaks":break;case"colbreak":break;case"rowbreaks":break;case"rowbreak":break;case"colstart":break;case"colend":break;case"rowend":break;default:te=false;}break;case"autofilter":switch(l[3]){case"autofiltercolumn":break;case"autofiltercondition":break;case"autofilterand":break;case"autofilteror":break;default:te=false;}break;case"querytable":switch(l[3]){case"id":break;case"autoformatfont":break;case"autoformatpattern":break;case"querysource":break;case"querytype":break;case"enableredirections":break;case"refreshedinxl9":break;case"urlstring":break;case"htmltables":break;case"connection":break;case"commandtext":break;case"refreshinfo":break;case"notitles":break;case"nextid":break;case"columninfo":break;case"overwritecells":break;case"donotpromptforfile":break;case"textwizardsettings":break;case"source":break;case"number":break;case"decimal":break;case"thousandseparator":break;case"trailingminusnumbers":break;case"formatsettings":break;case"fieldtype":break;case"delimiters":break;case"tab":break;case"comma":break;case"autoformatname":break;case"versionlastedit":break;case"versionlastrefresh":break;default:te=false;}break;case"datavalidation":switch(l[3]){case"range":break;case"type":break;case"min":break;case"max":break;case"sort":break;case"descending":break;case"order":break;case"casesensitive":break;case"value":break;case"errorstyle":break;case"errormessage":break;case"errortitle":break;case"inputmessage":break;case"inputtitle":break;case"combohide":break;case"inputhide":break;case"condition":break;case"qualifier":break;case"useblank":break;case"value1":break;case"value2":break;case"format":break;case"cellrangelist":break;default:te=false;}break;case"sorting":;case"conditionalformatting":switch(l[3]){case"range":break;case"type":break;case"min":break;case"max":break;case"sort":break;case"descending":break;case"order":break;case"casesensitive":break;case"value":break;case"errorstyle":break;case"errormessage":break;case"errortitle":break;case"cellrangelist":break;case"inputmessage":break;case"inputtitle":break;case"combohide":break;case"inputhide":break;case"condition":break;case"qualifier":break;case"useblank":break;case"value1":break;case"value2":break;case"format":break;default:te=false;}break;case"mapinfo":;case"schema":;case"data":switch(l[3]){case"map":break;case"entry":break;case"range":break;case"xpath":break;case"field":break;case"xsdtype":break;case"filteron":break;case"aggregate":break;case"elementtype":break;case"attributetype":break;case"schema":;case"element":;case"complextype":;case"datatype":;case"all":;case"attribute":;case"extends":break;case"row":break;default:te=false;}break;case"smarttags":break;default:te=false;break;}if(te)break;if(l[3].match(/!\[CDATA/))break;if(!o[o.length-1][1])throw"Unrecognized tag: "+l[3]+"|"+o.join("|");if(o[o.length-1][0]==="customdocumentproperties"){if(l[0].slice(-2)==="/>")break;else if(l[1]==="/")bg(I,$,F,n.slice(N,l.index));else{F=l;N=l.index+l[0].length}break}if(t.WTF)throw"Unrecognized tag: "+l[3]+"|"+o.join("|");}var ne={};if(!t.bookSheets&&!t.bookProps)ne.Sheets=u;ne.SheetNames=d;ne.Workbook=X;ne.SSF=kr(q);ne.Props=R;ne.Custprops=I;ne.bookType="xlml";return ne}function Cg(e,r){Jw(r=r||{});switch(r.type||"base64"){case"base64":return Eg(E(e),r);case"binary":;case"buffer":;case"file":return Eg(e,r);case"array":return Eg(N(e),r);}}function _g(e,r){var t=[];if(e.Props)t.push(Li(e.Props,r));if(e.Custprops)t.push(Mi(e.Props,e.Custprops,r));return t.join("")}function Sg(e){if((((e||{}).Workbook||{}).WBProps||{}).date1904)return'<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"><Date1904/></ExcelWorkbook>';return""}function xg(e,r){var t=['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];r.cellXfs.forEach(function(e,r){var a=[];a.push(Rt("NumberFormat",null,{"ss:Format":ft(q[e.numFmtId])}));var n={"ss:ID":"s"+(21+r)};t.push(Rt("Style",a.join(""),n))});return Rt("Styles",t.join(""))}function Og(e){return Rt("NamedRange",null,{"ss:Name":e.Name.slice(0,6)=="_xlnm."?e.Name.slice(6):e.Name,"ss:RefersTo":"="+ru(e.Ref,{r:0,c:0})})}function Rg(e){if(!((e||{}).Workbook||{}).Names)return"";var r=e.Workbook.Names;var t=[];for(var a=0;a<r.length;++a){var n=r[a];if(n.Sheet!=null)continue;if(n.Name.match(/^_xlfn\./))continue;t.push(Og(n))}return Rt("Names",t.join(""))}function Ig(e,r,t,a){if(!e)return"";if(!((a||{}).Workbook||{}).Names)return"";var n=a.Workbook.Names;var i=[];for(var s=0;s<n.length;++s){var f=n[s];if(f.Sheet!=t)continue;if(f.Name.match(/^_xlfn\./))continue;i.push(Og(f))}return i.join("")}function Ng(e,r,t,a){if(!e)return"";var n=[];if(e["!margins"]){n.push("<PageSetup>");if(e["!margins"].header)n.push(Rt("Header",null,{"x:Margin":e["!margins"].header}));if(e["!margins"].footer)n.push(Rt("Footer",null,{"x:Margin":e["!margins"].footer}));n.push(Rt("PageMargins",null,{"x:Bottom":e["!margins"].bottom||"0.75","x:Left":e["!margins"].left||"0.7","x:Right":e["!margins"].right||"0.7","x:Top":e["!margins"].top||"0.75"}));n.push("</PageSetup>")}if(a&&a.Workbook&&a.Workbook.Sheets&&a.Workbook.Sheets[t]){if(a.Workbook.Sheets[t].Hidden)n.push(Rt("Visible",a.Workbook.Sheets[t].Hidden==1?"SheetHidden":"SheetVeryHidden",{}));else{for(var i=0;i<t;++i)if(a.Workbook.Sheets[i]&&!a.Workbook.Sheets[i].Hidden)break;if(i==t)n.push("<Selected/>")}}if(((((a||{}).Workbook||{}).Views||[])[0]||{}).RTL)n.push("<DisplayRightToLeft/>");if(e["!protect"]){n.push(xt("ProtectContents","True"));if(e["!protect"].objects)n.push(xt("ProtectObjects","True"));if(e["!protect"].scenarios)n.push(xt("ProtectScenarios","True"));if(e["!protect"].selectLockedCells!=null&&!e["!protect"].selectLockedCells)n.push(xt("EnableSelection","NoSelection"));else if(e["!protect"].selectUnlockedCells!=null&&!e["!protect"].selectUnlockedCells)n.push(xt("EnableSelection","UnlockedCells"));[["formatCells","AllowFormatCells"],["formatColumns","AllowSizeCols"],["formatRows","AllowSizeRows"],["insertColumns","AllowInsertCols"],["insertRows","AllowInsertRows"],["insertHyperlinks","AllowInsertHyperlinks"],["deleteColumns","AllowDeleteCols"],["deleteRows","AllowDeleteRows"],["sort","AllowSort"],["autoFilter","AllowFilter"],["pivotTables","AllowUsePivotTables"]].forEach(function(r){if(e["!protect"][r[0]])n.push("<"+r[1]+"/>")})}if(n.length==0)return"";return Rt("WorksheetOptions",n.join(""),{xmlns:Mt.x})}function Fg(e){return e.map(function(r){var t=dt(r.t||"");var a=Rt("ss:Data",t,{xmlns:"http://www.w3.org/TR/REC-html40"});var n={};if(r.a)n["ss:Author"]=r.a;if(!e.hidden)n["ss:ShowAlways"]="1";return Rt("Comment",a,n)}).join("")}function Dg(e,r,t,a,n,i,s){if(!e||e.v==undefined&&e.f==undefined)return"";var f={};if(e.f)f["ss:Formula"]="="+ft(ru(e.f,s));if(e.F&&e.F.slice(0,r.length)==r){var l=Ba(e.F.slice(r.length+1));f["ss:ArrayRange"]="RC:R"+(l.r==s.r?"":"["+(l.r-s.r)+"]")+"C"+(l.c==s.c?"":"["+(l.c-s.c)+"]")}if(e.l&&e.l.Target){f["ss:HRef"]=ft(e.l.Target);if(e.l.Tooltip)f["x:HRefScreenTip"]=ft(e.l.Tooltip)}if(t["!merges"]){var o=t["!merges"];for(var c=0;c!=o.length;++c){if(o[c].s.c!=s.c||o[c].s.r!=s.r)continue;if(o[c].e.c>o[c].s.c)f["ss:MergeAcross"]=o[c].e.c-o[c].s.c;if(o[c].e.r>o[c].s.r)f["ss:MergeDown"]=o[c].e.r-o[c].s.r}}var h="",u="";switch(e.t){case"z":if(!a.sheetStubs)return"";break;case"n":h="Number";u=String(e.v);break;case"b":h="Boolean";u=e.v?"1":"0";break;case"e":h="Error";u=ei[e.v];break;case"d":h="DateTime";u=new Date(e.v).toISOString();if(e.z==null)e.z=e.z||q[14];break;case"s":h="String";u=ht(e.v||"");break;}var d=wv(a.cellXfs,e,a);f["ss:StyleID"]="s"+(21+d);f["ss:Index"]=s.c+1;var v=e.v!=null?u:"";var p=e.t=="z"?"":'<Data ss:Type="'+h+'">'+v+"</Data>";if((e.c||[]).length>0)p+=Fg(e.c);return Rt("Cell",p,f)}function Pg(e,r){var t='<Row ss:Index="'+(e+1)+'"';if(r){if(r.hpt&&!r.hpx)r.hpx=sc(r.hpt);if(r.hpx)t+=' ss:AutoFitHeight="0" ss:Height="'+r.hpx+'"';if(r.hidden)t+=' ss:Hidden="1"'}return t+">"}function Lg(e,r,t,a){if(!e["!ref"])return"";var n=Ga(e["!ref"]);var i=e["!merges"]||[],s=0;var f=[];if(e["!cols"])e["!cols"].forEach(function(e,r){tc(e);var t=!!e.width;var a=gv(r,e);var n={"ss:Index":r+1};if(t)n["ss:Width"]=Jo(a.width);if(e.hidden)n["ss:Hidden"]="1";f.push(Rt("Column",null,n))});var l=e["!data"]!=null;for(var o=n.s.r;o<=n.e.r;++o){var c=[Pg(o,(e["!rows"]||[])[o])];for(var h=n.s.c;h<=n.e.c;++h){var u=false;for(s=0;s!=i.length;++s){if(i[s].s.c>h)continue;if(i[s].s.r>o)continue;if(i[s].e.c<h)continue;if(i[s].e.r<o)continue;if(i[s].s.c!=h||i[s].s.r!=o)u=true;break}if(u)continue;var d={r:o,c:h};var v=Pa(h)+Ia(o),p=l?(e["!data"][o]||[])[h]:e[v];c.push(Dg(p,v,e,r,t,a,d))}c.push("</Row>");if(c.length>2)f.push(c.join(""))}return f.join("")}function Mg(e,r,t){var a=[];var n=t.SheetNames[e];var i=t.Sheets[n];var s=i?Ig(i,r,e,t):"";if(s.length>0)a.push("<Names>"+s+"</Names>");s=i?Lg(i,r,e,t):"";if(s.length>0)a.push("<Table>"+s+"</Table>");a.push(Ng(i,r,e,t));if(i["!autofilter"])a.push('<AutoFilter x:Range="'+ru(Va(i["!autofilter"].ref),{r:0,c:0})+'" xmlns="urn:schemas-microsoft-com:office:excel"></AutoFilter>');return a.join("")}function Ug(e,r){if(!r)r={};if(!e.SSF)e.SSF=kr(q);if(e.SSF){Ve();He(e.SSF);r.revssf=fr(e.SSF);r.revssf[e.SSF[65535]]=0;r.ssf=e.SSF;r.cellXfs=[];wv(r.cellXfs,{},{revssf:{General:0}})}var t=[];t.push(_g(e,r));t.push(Sg(e,r));t.push("");t.push("");for(var a=0;a<e.SheetNames.length;++a)t.push(Rt("Worksheet",Mg(a,r,e),{"ss:Name":ft(e.SheetNames[a])}));t[2]=xg(e,r);t[3]=Rg(e,r);return jr+Rt("Workbook",t.join(""),{xmlns:Mt.ss,"xmlns:o":Mt.o,"xmlns:x":Mt.x,"xmlns:ss":Mt.ss,"xmlns:dt":Mt.dt,"xmlns:html":Mt.html})}function Bg(e){var r={};var t=e.content;t.l=28;r.AnsiUserType=t._R(0,"lpstr-ansi");r.AnsiClipboardFormat=Nn(t);if(t.length-t.l<=4)return r;var a=t._R(4);if(a==0||a>40)return r;t.l-=4;r.Reserved1=t._R(0,"lpstr-ansi");if(t.length-t.l<=4)return r;a=t._R(4);if(a!==1907505652)return r;r.UnicodeClipboardFormat=Fn(t);a=t._R(4);if(a==0||a>40)return r;t.l-=4;r.Reserved2=t._R(0,"lpwstr")}var Wg=[60,1084,2066,2165,2175];function zg(e,r,t,a,n){var i=a;var s=[];var f=t.slice(t.l,t.l+i);if(n&&n.enc&&n.enc.insitu&&f.length>0)switch(e){case 9:;case 521:;case 1033:;case 2057:;case 47:;case 405:;case 225:;case 406:;case 312:;case 404:;case 10:break;case 133:break;default:n.enc.insitu(f);}s.push(f);t.l+=i;var l=oa(t,t.l),o=Jg[l];var c=0;while(o!=null&&Wg.indexOf(l)>-1){i=oa(t,t.l+2);c=t.l+4;if(l==2066)c+=4;else if(l==2165||l==2175){c+=12}f=t.slice(c,t.l+4+i);s.push(f);t.l+=4+i;o=Jg[l=oa(t,t.l)]}var h=P(s);ka(h,0);var u=0;h.lens=[];for(var d=0;d<s.length;++d){h.lens.push(u);u+=s[d].length}if(h.length<a)throw"XLS Record 0x"+e.toString(16)+" Truncated: "+h.length+" < "+a;return r.f(h,h.length,n)}function Hg(e,r,t){if(e.t==="z")return;if(!e.XF)return;var a=0;try{a=e.z||e.XF.numFmtId||0;if(r.cellNF&&e.z==null)e.z=q[a]}catch(n){if(r.WTF)throw n}if(!r||r.cellText!==false)try{if(e.t==="e"){e.w=e.w||ei[e.v]}else if(a===0||a=="General"){if(e.t==="n"){if((e.v|0)===e.v)e.w=e.v.toString(10);else e.w=fe(e.v)}else e.w=le(e.v)}else e.w=We(a,e.v,{date1904:!!t,dateNF:r&&r.dateNF})}catch(n){if(r.WTF)throw n}if(r.cellDates&&a&&e.t=="n"&&Pe(q[a]||String(a))){var i=te(e.v+(t?1462:0));if(i){e.t="d";e.v=new Date(Date.UTC(i.y,i.m-1,i.d,i.H,i.M,i.S,i.u))}}}function Vg(e,r,t){return{v:e,ixfe:r,t:t}}function Xg(e,r){var t={opts:{}};var a={};if(b!=null&&r.dense==null)r.dense=b;var n={};if(r.dense)n["!data"]=[];var i={};var s={};var f=null;var o=[];var c="";var h={};var u,d="",v,p,m,g;var w={};var k=[];var T;var A;var y=[];var E=[];var C={Sheets:[],WBProps:{date1904:false},Views:[{}]},_={};var S=false;var x=function pe(e){if(e<8)return Qn[e];if(e<64)return E[e-8]||Qn[e];return Qn[e]};var O=function me(e,r,t){var a=r.XF.data;if(!a||!a.patternType||!t||!t.cellStyles)return;r.s={};r.s.patternType=a.patternType;var n;if(n=Vo(x(a.icvFore))){r.s.fgColor={rgb:n}}if(n=Vo(x(a.icvBack))){r.s.bgColor={rgb:n}}};var R=function ge(e,r,t){if(!S&&W>1)return;if(t.sheetRows&&e.r>=t.sheetRows)return;if(t.cellStyles&&r.XF&&r.XF.data)O(e,r,t);delete r.ixfe;delete r.XF;u=e;d=Wa(e);if(!s||!s.s||!s.e)s={s:{r:0,c:0},e:{r:0,c:0}};if(e.r<s.s.r)s.s.r=e.r;if(e.c<s.s.c)s.s.c=e.c;if(e.r+1>s.e.r)s.e.r=e.r+1;if(e.c+1>s.e.c)s.e.c=e.c+1;if(t.cellFormula&&r.f){for(var a=0;a<k.length;++a){if(k[a][0].s.c>e.c||k[a][0].s.r>e.r)continue;if(k[a][0].e.c<e.c||k[a][0].e.r<e.r)continue;r.F=Ha(k[a][0]);if(k[a][0].s.c!=e.c||k[a][0].s.r!=e.r)delete r.f;if(r.f)r.f=""+Dd(k[a][1],s,e,U,I);break}}{if(t.dense){if(!n["!data"][e.r])n["!data"][e.r]=[];n["!data"][e.r][e.c]=r}else n[d]=r}};var I={enc:false,sbcch:0,snames:[],sharedf:w,arrayf:k,rrtabid:[],lastuser:"",biff:8,codepage:0,winlocked:0,cellStyles:!!r&&!!r.cellStyles,WTF:!!r&&!!r.wtf};if(r.password)I.password=r.password;var N;var F=[];var D=[];var P=[],L=[];var M=false;var U=[];U.SheetNames=I.snames;U.sharedf=I.sharedf;U.arrayf=I.arrayf;U.names=[];U.XTI=[];var B=0;var W=0;var z=0,H=[];var V=[];var X;I.codepage=1200;l(1200);var G=false;while(e.l<e.length-1){var $=e.l;var j=e._R(2);if(j===0&&B===10)break;var K=e.l===e.length?0:e._R(2);var Y=Jg[j];if(W==0&&[9,521,1033,2057].indexOf(j)==-1)break;if(Y&&Y.f){if(r.bookSheets){if(B===133&&j!==133)break}B=j;if(Y.r===2||Y.r==12){var Z=e._R(2);K-=2;if(!I.enc&&Z!==j&&((Z&255)<<8|Z>>8)!==j)throw new Error("rt mismatch: "+Z+"!="+j);if(Y.r==12){e.l+=10;K-=10}}var J={};if(j===10)J=Y.f(e,K,I);else J=zg(j,Y,e,K,I);if(W==0&&[9,521,1033,2057].indexOf(B)===-1)continue;switch(j){case 34:t.opts.Date1904=C.WBProps.date1904=J;break;case 134:t.opts.WriteProtect=true;break;case 47:if(!I.enc)e.l=0;I.enc=J;if(!r.password)throw new Error("File is password-protected");if(J.valid==null)throw new Error("Encryption scheme unsupported");if(!J.valid)throw new Error("Password is incorrect");break;case 92:I.lastuser=J;break;case 66:var Q=Number(J);switch(Q){case 21010:Q=1200;break;case 32768:Q=1e4;break;case 32769:Q=1252;break;}l(I.codepage=Q);G=true;break;case 317:I.rrtabid=J;break;case 25:I.winlocked=J;break;case 439:t.opts["RefreshAll"]=J;break;case 12:t.opts["CalcCount"]=J;break;case 16:t.opts["CalcDelta"]=J;break;case 17:t.opts["CalcIter"]=J;break;case 13:t.opts["CalcMode"]=J;break;case 14:t.opts["CalcPrecision"]=J;break;case 95:t.opts["CalcSaveRecalc"]=J;break;case 15:I.CalcRefMode=J;break;case 2211:t.opts.FullCalc=J;break;case 129:if(J.fDialog)n["!type"]="dialog";if(!J.fBelow)(n["!outline"]||(n["!outline"]={})).above=true;if(!J.fRight)(n["!outline"]||(n["!outline"]={})).left=true;break;case 67:;case 579:;case 1091:;case 224:y.push(J);break;case 430:U.push([J]);U[U.length-1].XTI=[];break;case 35:;case 547:U[U.length-1].push(J);break;case 24:;case 536:X={Name:J.Name,Ref:Dd(J.rgce,s,null,U,I)};if(J.itab>0)X.Sheet=J.itab-1;U.names.push(X);if(!U[0]){U[0]=[];U[0].XTI=[]}U[U.length-1].push(J);if(J.Name=="_xlnm._FilterDatabase"&&J.itab>0)if(J.rgce&&J.rgce[0]&&J.rgce[0][0]&&J.rgce[0][0][0]=="PtgArea3d")V[J.itab-1]={ref:Ha(J.rgce[0][0][1][2])};break;case 22:I.ExternCount=J;break;case 23:if(U.length==0){U[0]=[];U[0].XTI=[]}U[U.length-1].XTI=U[U.length-1].XTI.concat(J);U.XTI=U.XTI.concat(J);break;case 2196:if(I.biff<8)break;if(X!=null)X.Comment=J[1];break;case 18:n["!protect"]=J;break;case 19:if(J!==0&&I.WTF)console.error("Password verifier: "+J);break;case 133:{i[I.biff==4?I.snames.length:J.pos]=J;I.snames.push(J.name)}break;case 10:{if(--W?!S:S)break;if(s.e){if(s.e.r>0&&s.e.c>0){s.e.r--;s.e.c--;n["!ref"]=Ha(s);if(r.sheetRows&&r.sheetRows<=s.e.r){var ee=s.e.r;s.e.r=r.sheetRows-1;n["!fullref"]=n["!ref"];n["!ref"]=Ha(s);s.e.r=ee}s.e.r++;s.e.c++}if(F.length>0)n["!merges"]=F;if(D.length>0)n["!objects"]=D;if(P.length>0)n["!cols"]=P;if(L.length>0)n["!rows"]=L;C.Sheets.push(_)}if(c==="")h=n;else a[c]=n;n={};if(r.dense)n["!data"]=[]}break;case 9:;case 521:;case 1033:;case 2057:{if(I.biff===8)I.biff={9:2,521:3,1033:4}[j]||{512:2,768:3,1024:4,1280:5,1536:8,2:2,7:2}[J.BIFFVer]||8;I.biffguess=J.BIFFVer==0;if(J.BIFFVer==0&&J.dt==4096){I.biff=5;G=true;l(I.codepage=28591)}if(I.biff==4&&J.dt&256)S=true;if(I.biff==8&&J.BIFFVer==0&&J.dt==16)I.biff=2;if(W++&&!S)break;n={};if(r.dense)n["!data"]=[];if(I.biff<8&&!G){G=true;l(I.codepage=r.codepage||1252)}if(I.biff==4&&S){c=(i[I.snames.indexOf(c)+1]||{name:""}).name}else if(I.biff<5||J.BIFFVer==0&&J.dt==4096){if(c==="")c="Sheet1";s={s:{r:0,c:0},e:{r:0,c:0}};var re={pos:e.l-K,name:c};i[re.pos]=re;I.snames.push(c)}else c=(i[$]||{name:""}).name;if(J.dt==32)n["!type"]="chart";if(J.dt==64)n["!type"]="macro";F=[];D=[];I.arrayf=k=[];P=[];L=[];M=false;_={Hidden:(i[$]||{hs:0}).hs,name:c}}break;case 515:;case 3:;case 2:{if(n["!type"]=="chart")if(r.dense?(n["!data"][J.r]||[])[J.c]:n[Pa(J.c)+Ia(J.r)])++J.c;T={ixfe:J.ixfe,XF:y[J.ixfe]||{},v:J.val,t:"n"};if(z>0)T.z=T.XF&&T.XF.numFmtId&&H[T.XF.numFmtId]||H[T.ixfe>>8&63];Hg(T,r,t.opts.Date1904);R({c:J.c,r:J.r},T,r)}break;case 5:;case 517:{T={ixfe:J.ixfe,XF:y[J.ixfe],v:J.val,t:J.t};if(z>0)T.z=T.XF&&T.XF.numFmtId&&H[T.XF.numFmtId]||H[T.ixfe>>8&63];Hg(T,r,t.opts.Date1904);R({c:J.c,r:J.r},T,r)}break;case 638:{T={ixfe:J.ixfe,XF:y[J.ixfe],v:J.rknum,t:"n"};if(z>0)T.z=T.XF&&T.XF.numFmtId&&H[T.XF.numFmtId]||H[T.ixfe>>8&63];Hg(T,r,t.opts.Date1904);R({c:J.c,r:J.r},T,r)}break;case 189:{for(var te=J.c;te<=J.C;++te){var ae=J.rkrec[te-J.c][0];T={ixfe:ae,XF:y[ae],v:J.rkrec[te-J.c][1],t:"n"};if(z>0)T.z=T.XF&&T.XF.numFmtId&&H[T.XF.numFmtId]||H[T.ixfe>>8&63];Hg(T,r,t.opts.Date1904);R({c:te,r:J.r},T,r)}}break;case 6:;case 518:;case 1030:{if(J.val=="String"){f=J;break}T=Vg(J.val,J.cell.ixfe,J.tt);T.XF=y[T.ixfe];if(r.cellFormula){var ne=J.formula;if(ne&&ne[0]&&ne[0][0]&&ne[0][0][0]=="PtgExp"){var ie=ne[0][0][1][0],se=ne[0][0][1][1];var fe=Wa({r:ie,c:se});if(w[fe])T.f=""+Dd(J.formula,s,J.cell,U,I);else T.F=((r.dense?(n["!data"][ie]||[])[se]:n[fe])||{}).F}else T.f=""+Dd(J.formula,s,J.cell,U,I)}if(z>0)T.z=T.XF&&T.XF.numFmtId&&H[T.XF.numFmtId]||H[T.ixfe>>8&63];Hg(T,r,t.opts.Date1904);R(J.cell,T,r);f=J}break;case 7:;case 519:{if(f){f.val=J;T=Vg(J,f.cell.ixfe,"s");T.XF=y[T.ixfe];if(r.cellFormula){T.f=""+Dd(f.formula,s,f.cell,U,I)}if(z>0)T.z=T.XF&&T.XF.numFmtId&&H[T.XF.numFmtId]||H[T.ixfe>>8&63];Hg(T,r,t.opts.Date1904);R(f.cell,T,r);f=null}else throw new Error("String record expects Formula")}break;case 33:;case 545:{k.push(J);var le=Wa(J[0].s);v=r.dense?(n["!data"][J[0].s.r]||[])[J[0].s.c]:n[le];if(r.cellFormula&&v){if(!f)break;if(!le||!v)break;v.f=""+Dd(J[1],s,J[0],U,I);v.F=Ha(J[0])}}break;case 1212:{if(!r.cellFormula)break;if(d){if(!f)break;w[Wa(f.cell)]=J[0];v=r.dense?(n["!data"][f.cell.r]||[])[f.cell.c]:n[Wa(f.cell)];(v||{}).f=""+Dd(J[0],s,u,U,I)}}break;case 253:T=Vg(o[J.isst].t,J.ixfe,"s");if(o[J.isst].h)T.h=o[J.isst].h;T.XF=y[T.ixfe];if(z>0)T.z=T.XF&&T.XF.numFmtId&&H[T.XF.numFmtId]||H[T.ixfe>>8&63];Hg(T,r,t.opts.Date1904);R({c:J.c,r:J.r},T,r);break;case 513:if(r.sheetStubs){T={ixfe:J.ixfe,XF:y[J.ixfe],t:"z"};if(z>0)T.z=T.XF&&T.XF.numFmtId&&H[T.XF.numFmtId]||H[T.ixfe>>8&63];Hg(T,r,t.opts.Date1904);R({c:J.c,r:J.r},T,r)}break;case 190:if(r.sheetStubs){for(var oe=J.c;oe<=J.C;++oe){var ce=J.ixfe[oe-J.c];T={ixfe:ce,XF:y[ce],t:"z"};if(z>0)T.z=T.XF&&T.XF.numFmtId&&H[T.XF.numFmtId]||H[T.ixfe>>8&63];Hg(T,r,t.opts.Date1904);R({c:oe,r:J.r},T,r)}}break;case 214:;case 516:;case 4:T=Vg(J.val,J.ixfe,"s");T.XF=y[T.ixfe];if(z>0)T.z=T.XF&&T.XF.numFmtId&&H[T.XF.numFmtId]||H[T.ixfe>>8&63];Hg(T,r,t.opts.Date1904);R({c:J.c,r:J.r},T,r);break;case 0:;case 512:{if(W===1)s=J}break;case 252:{o=J}break;case 1054:{if(I.biff>=3&&I.biff<=4){H[z++]=J[1];for(var he=0;he<z+163;++he)if(q[he]==J[1])break;if(he>=163)Ze(J[1],z+163)}else Ze(J[1],J[0])}break;case 30:{H[z++]=J;for(var ue=0;ue<z+163;++ue)if(q[ue]==J)break;if(ue>=163)Ze(J,z+163)}break;case 229:F=F.concat(J);break;case 93:D[J.cmo[0]]=I.lastobj=J;break;case 438:I.lastobj.TxO=J;break;case 127:I.lastobj.ImData=J;break;case 440:{for(g=J[0].s.r;g<=J[0].e.r;++g)for(m=J[0].s.c;m<=J[0].e.c;++m){v=r.dense?(n["!data"][g]||[])[m]:n[Wa({c:m,r:g})];if(v)v.l=J[1]}}break;case 2048:{for(g=J[0].s.r;g<=J[0].e.r;++g)for(m=J[0].s.c;m<=J[0].e.c;++m){v=r.dense?(n["!data"][g]||[])[m]:n[Wa({c:m,r:g})];if(v&&v.l)v.l.Tooltip=J[1]}}break;case 28:{v=r.dense?(n["!data"][J[0].r]||[])[J[0].c]:n[Wa(J[0])];if(!v){if(r.dense){if(!n["!data"][J[0].r])n["!data"][J[0].r]=[];v=n["!data"][J[0].r][J[0].c]={t:"z"}}else{v=n[Wa(J[0])]={t:"z"}}s.e.r=Math.max(s.e.r,J[0].r);s.s.r=Math.min(s.s.r,J[0].r);s.e.c=Math.max(s.e.c,J[0].c);s.s.c=Math.min(s.s.c,J[0].c)}if(!v.c)v.c=[];if(I.biff<=5&&I.biff>=2)p={a:"SheetJ5",t:J[1]};else{var de=D[J[2]];p={a:J[1],t:de.TxO.t};if(J[3]!=null&&!(J[3]&2))v.c.hidden=true}v.c.push(p)}break;case 2173:ch(y[J.ixfe],J.ext);break;case 125:{if(!I.cellStyles)break;while(J.e>=J.s){P[J.e--]={width:J.w/256,level:J.level||0,hidden:!!(J.flags&1)};if(!M){M=true;rc(J.w/256)}tc(P[J.e+1])}}break;case 520:{var ve={};if(J.level!=null){L[J.r]=ve;ve.level=J.level}if(J.hidden){L[J.r]=ve;ve.hidden=true}if(J.hpt){L[J.r]=ve;ve.hpt=J.hpt;ve.hpx=sc(J.hpt)}}break;case 38:;case 39:;case 40:;case 41:if(!n["!margins"])bv(n["!margins"]={});n["!margins"][{38:"left",39:"right",40:"top",41:"bottom"}[j]]=J;break;case 161:if(!n["!margins"])bv(n["!margins"]={});n["!margins"].header=J.header;n["!margins"].footer=J.footer;break;case 574:if(J.RTL)C.Views[0].RTL=true;break;case 146:E=J;break;case 2198:N=J;break;case 140:A=J;break;case 442:{if(!c)C.WBProps.CodeName=J||"ThisWorkbook";else _.CodeName=J||_.name}break;}}else{if(!Y)console.error("Missing Info for XLS Record 0x"+j.toString(16));e.l+=K}}t.SheetNames=nr(i).sort(function(e,r){return Number(e)-Number(r)}).map(function(e){return i[e].name});if(!r.bookSheets)t.Sheets=a;if(!t.SheetNames.length&&h["!ref"]){t.SheetNames.push("Sheet1");if(t.Sheets)t.Sheets["Sheet1"]=h}else t.Preamble=h;if(t.Sheets)V.forEach(function(e,r){t.Sheets[t.SheetNames[r]]["!autofilter"]=e});t.Strings=o;t.SSF=kr(q);if(I.enc)t.Encryption=I.enc;if(N)t.Themes=N;t.Metadata={};if(A!==undefined)t.Metadata.Country=A;if(U.names.length>0)C.Names=U.names;t.Workbook=C;return t}var Gg={SI:"e0859ff2f94f6810ab9108002b27b3d9",
DSI:"02d5cdd59c2e1b10939708002b2cf9ae",UDI:"05d5cdd59c2e1b10939708002b2cf9ae"};function $g(e,r,t){var a=qe.find(e,"/!DocumentSummaryInformation");if(a&&a.size>0)try{var n=ns(a,jn,Gg.DSI);for(var i in n)r[i]=n[i]}catch(s){if(t.WTF)throw s}var f=qe.find(e,"/!SummaryInformation");if(f&&f.size>0)try{var l=ns(f,Kn,Gg.SI);for(var o in l)if(r[o]==null)r[o]=l[o]}catch(s){if(t.WTF)throw s}if(r.HeadingPairs&&r.TitlesOfParts){Si(r.HeadingPairs,r.TitlesOfParts,r,t);delete r.HeadingPairs;delete r.TitlesOfParts}}function jg(e,r){var t=[],a=[],n=[];var i=0,s;var f=ir(jn,"n");var l=ir(Kn,"n");if(e.Props){s=nr(e.Props);for(i=0;i<s.length;++i)(Object.prototype.hasOwnProperty.call(f,s[i])?t:Object.prototype.hasOwnProperty.call(l,s[i])?a:n).push([s[i],e.Props[s[i]]])}if(e.Custprops){s=nr(e.Custprops);for(i=0;i<s.length;++i)if(!Object.prototype.hasOwnProperty.call(e.Props||{},s[i]))(Object.prototype.hasOwnProperty.call(f,s[i])?t:Object.prototype.hasOwnProperty.call(l,s[i])?a:n).push([s[i],e.Custprops[s[i]]])}var o=[];for(i=0;i<n.length;++i){if(rs.indexOf(n[i][0])>-1||_i.indexOf(n[i][0])>-1)continue;if(n[i][1]==null)continue;o.push(n[i])}if(a.length)qe.utils.cfb_add(r,"/SummaryInformation",is(a,Gg.SI,l,Kn));if(t.length||o.length)qe.utils.cfb_add(r,"/DocumentSummaryInformation",is(t,Gg.DSI,f,jn,o.length?o:null,Gg.UDI))}function Kg(e,r){if(!r)r={};Jw(r);o();if(r.codepage)s(r.codepage);var t,a;if(e.FullPaths){if(qe.find(e,"/encryption"))throw new Error("File is password-protected");t=qe.find(e,"!CompObj");a=qe.find(e,"/Workbook")||qe.find(e,"/Book")}else{switch(r.type){case"base64":e=R(E(e));break;case"binary":e=R(e);break;case"buffer":break;case"array":if(!Array.isArray(e))e=Array.prototype.slice.call(e);break;}ka(e,0);a={content:e}}var n;var i;if(t)Bg(t);if(r.bookProps&&!r.bookSheets)n={};else{var f=C?"buffer":"array";if(a&&a.content)n=Xg(a.content,r);else if((i=qe.find(e,"PerfectOffice_MAIN"))&&i.content)n=Yl.to_workbook(i.content,(r.type=f,r));else if((i=qe.find(e,"NativeContent_MAIN"))&&i.content)n=Yl.to_workbook(i.content,(r.type=f,r));else if((i=qe.find(e,"MN0"))&&i.content)throw new Error("Unsupported Works 4 for Mac file");else throw new Error("Cannot find Workbook stream");if(r.bookVBA&&e.FullPaths&&qe.find(e,"/_VBA_PROJECT_CUR/VBA/dir"))n.vbaraw=$h(e)}var l={};if(e.FullPaths)$g(e,l,r);n.Props=n.Custprops=l;if(r.bookFiles)n.cfb=e;return n}function Yg(e,r){var t=r||{};var a=qe.utils.cfb_new({root:"R"});var n="/Workbook";switch(t.bookType||"xls"){case"xls":t.bookType="biff8";case"xla":if(!t.bookType)t.bookType="xla";case"biff8":n="/Workbook";t.biff=8;break;case"biff5":n="/Book";t.biff=5;break;default:throw new Error("invalid type "+t.bookType+" for XLS CFB");}qe.utils.cfb_add(a,n,kb(e,t));if(t.biff==8&&(e.Props||e.Custprops))jg(e,a);if(t.biff==8&&e.vbaraw)jh(a,qe.read(e.vbaraw,{type:typeof e.vbaraw=="string"?"binary":"buffer"}));return a}var Zg={0:{f:rp},1:{f:op},2:{f:Op},3:{f:gp},4:{f:dp},5:{f:Cp},6:{f:Dp},7:{f:Tp},8:{f:zp},9:{f:Wp},10:{f:Up},11:{f:Bp},12:{f:hp},13:{f:Ip},14:{f:wp},15:{f:pp},16:{f:Sp},17:{f:Lp},18:{f:yp},19:{f:an},20:{},21:{},22:{},23:{},24:{},25:{},26:{},27:{},28:{},29:{},30:{},31:{},32:{},33:{},34:{},35:{T:1},36:{T:-1},37:{T:1},38:{T:-1},39:{f:Xm},40:{},42:{},43:{f:Tc},44:{f:wc},45:{f:Cc},46:{f:Rc},47:{f:Sc},48:{},49:{f:Ja},50:{},51:{f:dh},52:{T:1},53:{T:-1},54:{T:1},55:{T:-1},56:{T:1},57:{T:-1},58:{},59:{},60:{f:Al},62:{f:Fp},63:{f:yh},64:{f:nm},65:{},66:{},67:{},68:{},69:{},70:{},128:{},129:{T:1},130:{T:-1},131:{T:1,f:Ta,p:0},132:{T:-1},133:{T:1},134:{T:-1},135:{T:1},136:{T:-1},137:{T:1,f:em},138:{T:-1},139:{T:1},140:{T:-1},141:{T:1},142:{T:-1},143:{T:1},144:{T:-1},145:{T:1},146:{T:-1},147:{f:fp},148:{f:np,p:16},151:{f:jp},152:{},153:{f:zm},154:{},155:{},156:{f:Bm},157:{},158:{},159:{T:1,f:oo},160:{T:-1},161:{T:1,f:yn},162:{T:-1},163:{T:1},164:{T:-1},165:{T:1},166:{T:-1},167:{},168:{},169:{},170:{},171:{},172:{T:1},173:{T:-1},174:{},175:{},176:{f:Hp},177:{T:1},178:{T:-1},179:{T:1},180:{T:-1},181:{T:1},182:{T:-1},183:{T:1},184:{T:-1},185:{T:1},186:{T:-1},187:{T:1},188:{T:-1},189:{T:1},190:{T:-1},191:{T:1},192:{T:-1},193:{T:1},194:{T:-1},195:{T:1},196:{T:-1},197:{T:1},198:{T:-1},199:{T:1},200:{T:-1},201:{T:1},202:{T:-1},203:{T:1},204:{T:-1},205:{T:1},206:{T:-1},207:{T:1},208:{T:-1},209:{T:1},210:{T:-1},211:{T:1},212:{T:-1},213:{T:1},214:{T:-1},215:{T:1},216:{T:-1},217:{T:1},218:{T:-1},219:{T:1},220:{T:-1},221:{T:1},222:{T:-1},223:{T:1},224:{T:-1},225:{T:1},226:{T:-1},227:{T:1},228:{T:-1},229:{T:1},230:{T:-1},231:{T:1},232:{T:-1},233:{T:1},234:{T:-1},235:{T:1},236:{T:-1},237:{T:1},238:{T:-1},239:{T:1},240:{T:-1},241:{T:1},242:{T:-1},243:{T:1},244:{T:-1},245:{T:1},246:{T:-1},247:{T:1},248:{T:-1},249:{T:1},250:{T:-1},251:{T:1},252:{T:-1},253:{T:1},254:{T:-1},255:{T:1},256:{T:-1},257:{T:1},258:{T:-1},259:{T:1},260:{T:-1},261:{T:1},262:{T:-1},263:{T:1},264:{T:-1},265:{T:1},266:{T:-1},267:{T:1},268:{T:-1},269:{T:1},270:{T:-1},271:{T:1},272:{T:-1},273:{T:1},274:{T:-1},275:{T:1},276:{T:-1},277:{},278:{T:1},279:{T:-1},280:{T:1},281:{T:-1},282:{T:1},283:{T:1},284:{T:-1},285:{T:1},286:{T:-1},287:{T:1},288:{T:-1},289:{T:1},290:{T:-1},291:{T:1},292:{T:-1},293:{T:1},294:{T:-1},295:{T:1},296:{T:-1},297:{T:1},298:{T:-1},299:{T:1},300:{T:-1},301:{T:1},302:{T:-1},303:{T:1},304:{T:-1},305:{T:1},306:{T:-1},307:{T:1},308:{T:-1},309:{T:1},310:{T:-1},311:{T:1},312:{T:-1},313:{T:-1},314:{T:1},315:{T:-1},316:{T:1},317:{T:-1},318:{T:1},319:{T:-1},320:{T:1},321:{T:-1},322:{T:1},323:{T:-1},324:{T:1},325:{T:-1},326:{T:1},327:{T:-1},328:{T:1},329:{T:-1},330:{T:1},331:{T:-1},332:{T:1},333:{T:-1},334:{T:1},335:{f:hh},336:{T:-1},337:{f:mh,T:1},338:{T:-1},339:{T:1},340:{T:-1},341:{T:1},342:{T:-1},343:{T:1},344:{T:-1},345:{T:1},346:{T:-1},347:{T:1},348:{T:-1},349:{T:1},350:{T:-1},351:{},352:{},353:{T:1},354:{T:-1},355:{f:gn},357:{},358:{},359:{},360:{T:1},361:{},362:{f:qf},363:{},364:{},366:{},367:{},368:{},369:{},370:{},371:{},372:{T:1},373:{T:-1},374:{T:1},375:{T:-1},376:{T:1},377:{T:-1},378:{T:1},379:{T:-1},380:{T:1},381:{T:-1},382:{T:1},383:{T:-1},384:{T:1},385:{T:-1},386:{T:1},387:{T:-1},388:{T:1},389:{T:-1},390:{T:1},391:{T:-1},392:{T:1},393:{T:-1},394:{T:1},395:{T:-1},396:{},397:{},398:{},399:{},400:{},401:{T:1},403:{},404:{},405:{},406:{},407:{},408:{},409:{},410:{},411:{},412:{},413:{},414:{},415:{},416:{},417:{},418:{},419:{},420:{},421:{},422:{T:1},423:{T:1},424:{T:-1},425:{T:-1},426:{f:Kp},427:{f:Yp},428:{},429:{T:1},430:{T:-1},431:{T:1},432:{T:-1},433:{T:1},434:{T:-1},435:{T:1},436:{T:-1},437:{T:1},438:{T:-1},439:{T:1},440:{T:-1},441:{T:1},442:{T:-1},443:{T:1},444:{T:-1},445:{T:1},446:{T:-1},447:{T:1},448:{T:-1},449:{T:1},450:{T:-1},451:{T:1},452:{T:-1},453:{T:1},454:{T:-1},455:{T:1},456:{T:-1},457:{T:1},458:{T:-1},459:{T:1},460:{T:-1},461:{T:1},462:{T:-1},463:{T:1},464:{T:-1},465:{T:1},466:{T:-1},467:{T:1},468:{T:-1},469:{T:1},470:{T:-1},471:{},472:{},473:{T:1},474:{T:-1},475:{},476:{f:qp},477:{},478:{},479:{T:1},480:{T:-1},481:{T:1},482:{T:-1},483:{T:1},484:{T:-1},485:{f:sp},486:{T:1},487:{T:-1},488:{T:1},489:{T:-1},490:{T:1},491:{T:-1},492:{T:1},493:{T:-1},494:{f:Gp},495:{T:1},496:{T:-1},497:{T:1},498:{T:-1},499:{},500:{T:1},501:{T:-1},502:{T:1},503:{T:-1},504:{},505:{T:1},506:{T:-1},507:{},508:{T:1},509:{T:-1},510:{T:1},511:{T:-1},512:{},513:{},514:{T:1},515:{T:-1},516:{T:1},517:{T:-1},518:{T:1},519:{T:-1},520:{T:1},521:{T:-1},522:{},523:{},524:{},525:{},526:{},527:{},528:{T:1},529:{T:-1},530:{T:1},531:{T:-1},532:{T:1},533:{T:-1},534:{},535:{},536:{},537:{},538:{T:1},539:{T:-1},540:{T:1},541:{T:-1},542:{T:1},548:{},549:{},550:{f:gn},551:{f:vn},552:{},553:{},554:{T:1},555:{T:-1},556:{T:1},557:{T:-1},558:{T:1},559:{T:-1},560:{T:1},561:{T:-1},562:{},564:{},565:{T:1},566:{T:-1},569:{T:1},570:{T:-1},572:{},573:{T:1},574:{T:-1},577:{},578:{},579:{},580:{},581:{},582:{},583:{},584:{},585:{},586:{},587:{},588:{T:-1},589:{},590:{T:1},591:{T:-1},592:{T:1},593:{T:-1},594:{T:1},595:{T:-1},596:{},597:{T:1},598:{T:-1},599:{T:1},600:{T:-1},601:{T:1},602:{T:-1},603:{T:1},604:{T:-1},605:{T:1},606:{T:-1},607:{},608:{T:1},609:{T:-1},610:{},611:{T:1},612:{T:-1},613:{T:1},614:{T:-1},615:{T:1},616:{T:-1},617:{T:1},618:{T:-1},619:{T:1},620:{T:-1},625:{},626:{T:1},627:{T:-1},628:{T:1},629:{T:-1},630:{T:1},631:{T:-1},632:{f:zh},633:{T:1},634:{T:-1},635:{T:1,f:Bh},636:{T:-1},637:{f:sn},638:{T:1},639:{},640:{T:-1},641:{T:1},642:{T:-1},643:{T:1},644:{},645:{T:-1},646:{T:1},648:{T:1},649:{},650:{T:-1},651:{f:Am},652:{},653:{T:1},654:{T:-1},655:{T:1},656:{T:-1},657:{T:1},658:{T:-1},659:{},660:{T:1},661:{},662:{T:-1},663:{},664:{T:1},665:{},666:{T:-1},667:{},668:{},669:{},671:{T:1},672:{T:-1},673:{T:1},674:{T:-1},675:{},676:{},677:{},678:{},679:{},680:{},681:{},1024:{},1025:{},1026:{T:1},1027:{T:-1},1028:{T:1},1029:{T:-1},1030:{},1031:{T:1},1032:{T:-1},1033:{T:1},1034:{T:-1},1035:{},1036:{},1037:{},1038:{T:1},1039:{T:-1},1040:{},1041:{T:1},1042:{T:-1},1043:{},1044:{},1045:{},1046:{T:1},1047:{T:-1},1048:{T:1},1049:{T:-1},1050:{},1051:{T:1},1052:{T:1},1053:{f:im},1054:{T:1},1055:{},1056:{T:1},1057:{T:-1},1058:{T:1},1059:{T:-1},1061:{},1062:{T:1},1063:{T:-1},1064:{T:1},1065:{T:-1},1066:{T:1},1067:{T:-1},1068:{T:1},1069:{T:-1},1070:{T:1},1071:{T:-1},1072:{T:1},1073:{T:-1},1075:{T:1},1076:{T:-1},1077:{T:1},1078:{T:-1},1079:{T:1},1080:{T:-1},1081:{T:1},1082:{T:-1},1083:{T:1},1084:{T:-1},1085:{},1086:{T:1},1087:{T:-1},1088:{T:1},1089:{T:-1},1090:{T:1},1091:{T:-1},1092:{T:1},1093:{T:-1},1094:{T:1},1095:{T:-1},1096:{},1097:{T:1},1098:{},1099:{T:-1},1100:{T:1},1101:{T:-1},1102:{},1103:{},1104:{},1105:{},1111:{},1112:{},1113:{T:1},1114:{T:-1},1115:{T:1},1116:{T:-1},1117:{},1118:{T:1},1119:{T:-1},1120:{T:1},1121:{T:-1},1122:{T:1},1123:{T:-1},1124:{T:1},1125:{T:-1},1126:{},1128:{T:1},1129:{T:-1},1130:{},1131:{T:1},1132:{T:-1},1133:{T:1},1134:{T:-1},1135:{T:1},1136:{T:-1},1137:{T:1},1138:{T:-1},1139:{T:1},1140:{T:-1},1141:{},1142:{T:1},1143:{T:-1},1144:{T:1},1145:{T:-1},1146:{},1147:{T:1},1148:{T:-1},1149:{T:1},1150:{T:-1},1152:{T:1},1153:{T:-1},1154:{T:-1},1155:{T:-1},1156:{T:-1},1157:{T:1},1158:{T:-1},1159:{T:1},1160:{T:-1},1161:{T:1},1162:{T:-1},1163:{T:1},1164:{T:-1},1165:{T:1},1166:{T:-1},1167:{T:1},1168:{T:-1},1169:{T:1},1170:{T:-1},1171:{},1172:{T:1},1173:{T:-1},1177:{},1178:{T:1},1180:{},1181:{},1182:{},2048:{T:1},2049:{T:-1},2050:{},2051:{T:1},2052:{T:-1},2053:{},2054:{},2055:{T:1},2056:{T:-1},2057:{T:1},2058:{T:-1},2060:{},2067:{},2068:{T:1},2069:{T:-1},2070:{},2071:{},2072:{T:1},2073:{T:-1},2075:{},2076:{},2077:{T:1},2078:{T:-1},2079:{},2080:{T:1},2081:{T:-1},2082:{},2083:{T:1},2084:{T:-1},2085:{T:1},2086:{T:-1},2087:{T:1},2088:{T:-1},2089:{T:1},2090:{T:-1},2091:{},2092:{},2093:{T:1},2094:{T:-1},2095:{},2096:{T:1},2097:{T:-1},2098:{T:1},2099:{T:-1},2100:{T:1},2101:{T:-1},2102:{},2103:{T:1},2104:{T:-1},2105:{},2106:{T:1},2107:{T:-1},2108:{},2109:{T:1},2110:{T:-1},2111:{T:1},2112:{T:-1},2113:{T:1},2114:{T:-1},2115:{},2116:{},2117:{},2118:{T:1},2119:{T:-1},2120:{},2121:{T:1},2122:{T:-1},2123:{T:1},2124:{T:-1},2125:{},2126:{T:1},2127:{T:-1},2128:{},2129:{T:1},2130:{T:-1},2131:{T:1},2132:{T:-1},2133:{T:1},2134:{},2135:{},2136:{},2137:{T:1},2138:{T:-1},2139:{T:1},2140:{T:-1},2141:{},3072:{},3073:{},4096:{T:1},4097:{T:-1},5002:{T:1},5003:{T:-1},5081:{T:1},5082:{T:-1},5083:{},5084:{T:1},5085:{T:-1},5086:{T:1},5087:{T:-1},5088:{},5089:{},5090:{},5092:{T:1},5093:{T:-1},5094:{},5095:{T:1},5096:{T:-1},5097:{},5099:{},65535:{n:""}};var Jg={6:{f:zd},10:{f:ss},12:{f:hs},13:{f:hs},14:{f:os},15:{f:os},16:{f:Cn},17:{f:os},18:{f:os},19:{f:hs},20:{f:Kf},21:{f:Kf},23:{f:qf},24:{f:Jf},25:{f:os},26:{},27:{},28:{f:il},29:{},34:{f:os},35:{f:Zf},38:{f:Cn},39:{f:Cn},40:{f:Cn},41:{f:Cn},42:{f:os},43:{f:os},47:{f:Mo},49:{f:gf},51:{f:hs},60:{},61:{f:uf},64:{f:os},65:{f:mf},66:{f:hs},77:{},80:{},81:{},82:{},85:{f:hs},89:{},90:{},91:{},92:{f:Qs},93:{f:ol},94:{},95:{f:os},96:{},97:{},99:{f:os},125:{f:Al},128:{f:Hf},129:{f:rf},130:{f:hs},131:{f:os},132:{f:os},133:{f:tf},134:{},140:{f:gl},141:{f:hs},144:{},146:{f:kl},151:{},152:{},153:{},154:{},155:{},156:{f:hs},157:{},158:{},160:{f:xl},161:{f:El},174:{},175:{},176:{},177:{},178:{},180:{},181:{},182:{},184:{},185:{},189:{f:If},190:{f:Nf},193:{f:ss},197:{},198:{},199:{},200:{},201:{},202:{f:os},203:{},204:{},205:{},206:{},207:{},208:{},209:{},210:{},211:{},213:{},215:{},216:{},217:{},218:{f:hs},220:{},221:{f:os},222:{},224:{f:Df},225:{f:qs},226:{f:ss},227:{},229:{f:fl},233:{},235:{},236:{},237:{},239:{},240:{},241:{},242:{},244:{},245:{},246:{},247:{},248:{},249:{},251:{},252:{f:nf},253:{f:wf},255:{f:ff},256:{},259:{},290:{},311:{},312:{},315:{},317:{f:ds},318:{},319:{},320:{},330:{},331:{},333:{},334:{},335:{},336:{},337:{},338:{},339:{},340:{},351:{},352:{f:os},353:{f:ss},401:{},402:{},403:{},404:{},405:{},406:{},407:{},408:{},425:{},426:{},427:{},428:{},429:{},430:{f:Yf},431:{f:os},432:{},433:{},434:{},437:{},438:{f:ul},439:{f:os},440:{f:dl},441:{},442:{f:ks},443:{},444:{f:hs},445:{},446:{},448:{f:ss},449:{f:cf,r:2},450:{f:ss},512:{f:xf},513:{f:Sl},515:{f:$f},516:{f:Tf},517:{f:Xf},519:{f:Ol},520:{f:lf},523:{},545:{f:tl},549:{f:hf},566:{},574:{f:vf},638:{f:Rf},659:{},1048:{},1054:{f:yf},1084:{},1212:{f:rl},2048:{f:pl},2049:{},2050:{},2051:{},2052:{},2053:{},2054:{},2055:{},2056:{},2057:{f:Zs},2058:{},2059:{},2060:{},2061:{},2062:{},2063:{},2064:{},2066:{},2067:{},2128:{},2129:{},2130:{},2131:{},2132:{},2133:{},2134:{},2135:{},2136:{},2137:{},2138:{},2146:{},2147:{r:12},2148:{},2149:{},2150:{},2151:{f:ss},2152:{},2154:{},2155:{},2156:{},2161:{},2162:{},2164:{},2165:{},2166:{},2167:{},2168:{},2169:{},2170:{},2171:{},2172:{f:Tl,r:12},2173:{f:oh,r:12},2174:{},2175:{},2180:{},2181:{},2182:{},2183:{},2184:{},2185:{},2186:{},2187:{},2188:{f:os,r:12},2189:{},2190:{r:12},2191:{},2192:{},2194:{},2195:{},2196:{f:el,r:12},2197:{},2198:{f:ah,r:12},2199:{},2200:{},2201:{},2202:{f:al,r:12},2203:{f:ss},2204:{},2205:{},2206:{},2207:{},2211:{f:of},2212:{},2213:{},2214:{},2215:{},4097:{},4098:{},4099:{},4102:{},4103:{},4105:{},4106:{},4107:{},4108:{},4109:{},4116:{},4117:{},4118:{},4119:{},4120:{},4121:{},4122:{},4123:{},4124:{},4125:{},4126:{},4127:{},4128:{},4129:{},4130:{},4132:{},4133:{},4134:{f:hs},4135:{},4146:{},4147:{},4148:{},4149:{},4154:{},4156:{},4157:{},4158:{},4159:{},4160:{},4161:{},4163:{},4164:{f:Cl},4165:{},4166:{},4168:{},4170:{},4171:{},4174:{},4175:{},4176:{},4177:{},4187:{},4188:{f:wl},4189:{},4191:{},4192:{},4193:{},4194:{},4195:{},4196:{},4197:{},4198:{},4199:{},4200:{},0:{f:xf},1:{},2:{f:Pl},3:{f:Fl},4:{f:Nl},5:{f:Ul},7:{f:Ml},8:{},9:{f:Zs},11:{},22:{f:hs},30:{f:Cf},31:{},32:{},33:{f:tl},36:{},37:{f:hf},50:{f:Bl},62:{},52:{},67:{f:Lf},68:{f:hs},69:{},86:{},126:{},127:{f:Rl},135:{},136:{},137:{},143:{f:zl},145:{},148:{},149:{},150:{},169:{},171:{},188:{},191:{},192:{},194:{},195:{},214:{f:Wl},223:{},234:{},354:{},421:{},518:{f:zd},521:{f:Zs},536:{f:Jf},547:{f:Zf},561:{},579:{f:Wf},1030:{f:zd},1033:{f:Zs},1091:{f:zf},2157:{},2163:{},2177:{},2240:{},2241:{},2242:{},2243:{},2244:{},2245:{},2246:{},2247:{},2248:{},2249:{},2250:{},2251:{},2262:{r:12},101:{},102:{},105:{},106:{},107:{},109:{},112:{},114:{},29282:{}};function qg(e,r,t,a){var n=r;if(isNaN(n))return;var i=a||(t||[]).length||0;var s=e.next(4);s._W(2,n);s._W(2,i);if(i>0&&sa(t))e.push(t)}function Qg(e,r,t,a){var n=a||(t||[]).length||0;if(n<=8224)return qg(e,r,t,n);var i=r;if(isNaN(i))return;var s=t.parts||[],f=0;var l=0,o=0;while(o+(s[f]||8224)<=8224){o+=s[f]||8224;f++}var c=e.next(4);c._W(2,i);c._W(2,o);e.push(t.slice(l,l+o));l+=o;while(l<n){c=e.next(4);c._W(2,60);o=0;while(o+(s[f]||8224)<=8224){o+=s[f]||8224;f++}c._W(2,o);e.push(t.slice(l,l+o));l+=o}}function eb(e,r,t,a){var n=Aa(9);Il(n,e,r);ps(t,a||"b",n);return n}function rb(e,r,t){var a=Aa(8+2*t.length);Il(a,e,r);a._W(1,t.length);a._W(t.length,t,"sbcs");return a.l<a.length?a.slice(0,a.l):a}function tb(e,r){r.forEach(function(r){var t=r[0].map(function(e){return e.t}).join("");if(t.length<=2048)return qg(e,28,sl(t,r[1],r[2]));qg(e,28,sl(t.slice(0,2048),r[1],r[2],t.length));for(var a=2048;a<t.length;a+=2048)qg(e,28,sl(t.slice(a,Math.min(a+2048,t.length)),-1,-1,Math.min(2048,t.length-a)))})}function ab(e,r,t,a,n,i){var s=0;if(r.z!=null){s=n._BIFF2FmtTable.indexOf(r.z);if(s==-1){n._BIFF2FmtTable.push(r.z);s=n._BIFF2FmtTable.length-1}}var f=0;if(r.z!=null){for(;f<n.cellXfs.length;++f)if(n.cellXfs[f].numFmtId==s)break;if(f==n.cellXfs.length)n.cellXfs.push({numFmtId:s})}if(r.v!=null)switch(r.t){case"d":;case"n":var l=r.t=="d"?ur(br(r.v,i),i):r.v;if(n.biff==2&&l==(l|0)&&l>=0&&l<65536)qg(e,2,Ll(t,a,l,f,s));else if(isNaN(l))qg(e,5,eb(t,a,36,"e"));else if(!isFinite(l))qg(e,5,eb(t,a,7,"e"));else qg(e,3,Dl(t,a,l,f,s));return;case"b":;case"e":qg(e,5,eb(t,a,r.v,r.t));return;case"s":;case"str":qg(e,4,rb(t,a,r.v==null?"":String(r.v).slice(0,255)));return;}qg(e,1,Il(null,t,a))}function nb(e,r,t,a,n){var i=r["!data"]!=null;var s=Ga(r["!ref"]||"A1"),f,l="",o=[];if(s.e.c>255||s.e.r>16383){if(a.WTF)throw new Error("Range "+(r["!ref"]||"A1")+" exceeds format limit A1:IV16384");s.e.c=Math.min(s.e.c,255);s.e.r=Math.min(s.e.c,16383)}var c=(((n||{}).Workbook||{}).WBProps||{}).date1904;var h=[],u=[];for(var d=s.s.c;d<=s.e.c;++d)o[d]=Pa(d);for(var v=s.s.r;v<=s.e.r;++v){if(i)h=r["!data"][v]||[];l=Ia(v);for(d=s.s.c;d<=s.e.c;++d){var p=i?h[d]:r[o[d]+l];if(!p)continue;ab(e,p,v,d,a,c);if(p.c)u.push([p.c,v,d])}}tb(e,u)}function ib(e,r){var t=r||{};var a=Ea();var n=0;for(var i=0;i<e.SheetNames.length;++i)if(e.SheetNames[i]==t.sheet)n=i;if(n==0&&!!t.sheet&&e.SheetNames[0]!=t.sheet)throw new Error("Sheet not found: "+t.sheet);qg(a,t.biff==4?1033:t.biff==3?521:9,Js(e,16,t));if(((e.Workbook||{}).WBProps||{}).date1904)qg(a,34,cs(true));t.cellXfs=[{numFmtId:0}];t._BIFF2FmtTable=["General"];t._Fonts=[];var s=Ea();nb(s,e.Sheets[e.SheetNames[n]],n,t,e);t._BIFF2FmtTable.forEach(function(e){if(t.biff<=3)qg(a,30,_f(e));else qg(a,1054,Sf(e))});t.cellXfs.forEach(function(e){switch(t.biff){case 2:qg(a,67,Mf(e));break;case 3:qg(a,579,Uf(e));break;case 4:qg(a,1091,Bf(e));break;}});delete t._BIFF2FmtTable;delete t.cellXfs;delete t._Fonts;a.push(s.end());qg(a,10);return a.end()}var sb=1,fb=[];function lb(){var e=Aa(82+8*fb.length);e._W(2,15);e._W(2,61440);e._W(4,74+8*fb.length);{e._W(2,0);e._W(2,61446);e._W(4,16+8*fb.length);{e._W(4,sb);e._W(4,fb.length+1);var r=0;for(var t=0;t<fb.length;++t)r+=fb[t]&&fb[t][1]||0;e._W(4,r);e._W(4,fb.length)}fb.forEach(function(r){e._W(4,r[0]);e._W(4,r[2])})}{e._W(2,51);e._W(2,61451);e._W(4,18);e._W(2,191);e._W(4,524296);e._W(2,385);e._W(4,134217793);e._W(2,448);e._W(4,134217792)}{e._W(2,64);e._W(2,61726);e._W(4,16);e._W(4,134217741);e._W(4,134217740);e._W(4,134217751);e._W(4,268435703)}return e}function ob(e,r){var t=[],a=0,n=Ea(),i=sb;var s;r.forEach(function(e,r){var i="";var f=e[0].map(function(e){if(e.a&&!i)i=e.a;return e.t}).join("");++sb;{var l=Aa(150);l._W(2,15);l._W(2,61444);l._W(4,150);{l._W(2,3234);l._W(2,61450);l._W(4,8);l._W(4,sb);l._W(4,2560)}{l._W(2,227);l._W(2,61451);l._W(4,84);l._W(2,128);l._W(4,0);l._W(2,139);l._W(4,2);l._W(2,191);l._W(4,524296);l._W(2,344);l.l+=4;l._W(2,385);l._W(4,134217808);l._W(2,387);l._W(4,134217808);l._W(2,389);l._W(4,268435700);l._W(2,447);l._W(4,1048592);l._W(2,448);l._W(4,134217809);l._W(2,451);l._W(4,268435700);l._W(2,513);l._W(4,134217809);l._W(2,515);l._W(4,268435700);l._W(2,575);l._W(4,196609);l._W(2,959);l._W(4,131072|(e[0].hidden?2:0))}{l.l+=2;l._W(2,61456);l._W(4,18);l._W(2,3);l._W(2,e[2]+2);l.l+=2;l._W(2,e[1]+1);l.l+=2;l._W(2,e[2]+4);l.l+=2;l._W(2,e[1]+5);l.l+=2}{l.l+=2;l._W(2,61457);l.l+=4}l.l=150;if(r==0)s=l;else qg(n,236,l)}a+=150;{var o=Aa(52);o._W(2,21);o._W(2,18);o._W(2,25);o._W(2,sb);o._W(2,0);o.l=22;o._W(2,13);o._W(2,22);o._W(4,1651663474);o._W(4,2503426821);o._W(4,2150634280);o._W(4,1768515844+sb*256);o._W(2,0);o._W(4,0);o.l+=4;qg(n,93,o)}{var c=Aa(8);c.l+=2;c._W(2,61453);c.l+=4;qg(n,236,c)}a+=8;{var h=Aa(18);h._W(2,18);h.l+=8;h._W(2,f.length);h._W(2,16);h.l+=4;qg(n,438,h);{var u=Aa(1+f.length);u._W(1,0);u._W(f.length,f,"sbcs");qg(n,60,u)}{var d=Aa(16);d.l+=8;d._W(2,f.length);d.l+=6;qg(n,60,d)}}{var v=Aa(12+i.length);v._W(2,e[1]);v._W(2,e[2]);v._W(2,0|(e[0].hidden?0:2));v._W(2,sb);v._W(2,i.length);v._W(1,0);v._W(i.length,i,"sbcs");v.l++;t.push(v)}});{var f=Aa(80);f._W(2,15);f._W(2,61442);f._W(4,a+f.length-8);{f._W(2,16);f._W(2,61448);f._W(4,8);f._W(4,r.length+1);f._W(4,sb)}{f._W(2,15);f._W(2,61443);f._W(4,a+48);{f._W(2,15);f._W(2,61444);f._W(4,40);{f._W(2,1);f._W(2,61449);f._W(4,16);f.l+=16}{f._W(2,2);f._W(2,61450);f._W(4,8);f._W(4,i);f._W(4,5)}}}qg(e,236,s?P([f,s]):f)}e.push(n.end());t.forEach(function(r){qg(e,28,r)});fb.push([i,r.length+1,sb]);++sb}function cb(e,r,t){qg(e,49,bf({sz:12,color:{theme:1},name:"Arial",family:2,scheme:"minor"},t))}function hb(e,r,t){if(!r)return;[[5,8],[23,26],[41,44],[50,392]].forEach(function(a){for(var n=a[0];n<=a[1];++n)if(r[n]!=null)qg(e,1054,Ef(n,r[n],t))})}function ub(e,r){var t=Aa(19);t._W(4,2151);t._W(4,0);t._W(4,0);t._W(2,3);t._W(1,1);t._W(4,0);qg(e,2151,t);t=Aa(39);t._W(4,2152);t._W(4,0);t._W(4,0);t._W(2,3);t._W(1,0);t._W(4,0);t._W(2,1);t._W(4,4);t._W(2,0);zs(Ga(r["!ref"]||"A1"),t);t._W(4,4);qg(e,2152,t)}function db(e,r){for(var t=0;t<16;++t)qg(e,224,Pf({numFmtId:0,style:true},0,r));r.cellXfs.forEach(function(t){qg(e,224,Pf(t,0,r))})}function vb(e,r){for(var t=0;t<r["!links"].length;++t){var a=r["!links"][t];qg(e,440,vl(a));if(a[1].Tooltip)qg(e,2048,ml(a))}delete r["!links"]}function pb(e,r){if(!r)return;var t=0;r.forEach(function(r,a){if(++t<=256&&r){qg(e,125,yl(gv(a,r),a))}})}function mb(e,r,t,a,n,i){var s=16+wv(n.cellXfs,r,n);if(r.v==null&&!r.bf){qg(e,513,Ds(t,a,s));return}if(r.bf)qg(e,6,Hd(r,t,a,n,s));else switch(r.t){case"d":;case"n":var f=r.t=="d"?ur(br(r.v,i),i):r.v;if(isNaN(f))qg(e,517,Gf(t,a,36,s,n,"e"));else if(!isFinite(f))qg(e,517,Gf(t,a,7,s,n,"e"));else qg(e,515,jf(t,a,f,s,n));break;case"b":;case"e":qg(e,517,Gf(t,a,r.v,s,n,r.t));break;case"s":;case"str":if(n.bookSST){var l=mv(n.Strings,r.v==null?"":String(r.v),n.revStrings);qg(e,253,kf(t,a,l,s,n))}else qg(e,516,Af(t,a,(r.v==null?"":String(r.v)).slice(0,255),s,n));break;default:qg(e,513,Ds(t,a,s));}}function gb(e,r,t){var a=Ea();var n=t.SheetNames[e],i=t.Sheets[n]||{};var s=(t||{}).Workbook||{};var f=(s.Sheets||[])[e]||{};var l=i["!data"]!=null;var o=r.biff==8;var c,h="",u=[];var d=Ga(i["!ref"]||"A1");var v=o?65536:16384;if(d.e.c>255||d.e.r>=v){if(r.WTF)throw new Error("Range "+(i["!ref"]||"A1")+" exceeds format limit A1:IV16384");d.e.c=Math.min(d.e.c,255);d.e.r=Math.min(d.e.c,v-1)}qg(a,2057,Js(t,16,r));qg(a,13,us(1));qg(a,12,us(100));qg(a,15,cs(true));qg(a,17,cs(false));qg(a,16,_n(.001));qg(a,95,cs(true));qg(a,42,cs(false));qg(a,43,cs(false));qg(a,130,us(1));qg(a,128,Vf([0,0]));qg(a,131,cs(false));qg(a,132,cs(false));if(o)pb(a,i["!cols"]);qg(a,512,Of(d,r));var p=(((t||{}).Workbook||{}).WBProps||{}).date1904;if(o)i["!links"]=[];var m=[];var g=[];for(var b=d.s.c;b<=d.e.c;++b)u[b]=Pa(b);for(var w=d.s.r;w<=d.e.r;++w){if(l)g=i["!data"][w]||[];h=Ia(w);for(b=d.s.c;b<=d.e.c;++b){c=u[b]+h;var k=l?g[b]:i[c];if(!k)continue;mb(a,k,w,b,r,p);if(o&&k.l)i["!links"].push([c,k.l]);if(k.c)m.push([k.c,w,b])}}var T=f.CodeName||f.name||n;if(o)ob(a,m);else tb(a,m);if(o)qg(a,574,pf((s.Views||[])[0]));if(o&&(i["!merges"]||[]).length)qg(a,229,ll(i["!merges"]));if(o)vb(a,i);qg(a,442,As(T,r));if(o)ub(a,i);qg(a,10);return a.end()}function bb(e,r,t){var a=Ea();var n=(e||{}).Workbook||{};var i=n.Sheets||[];var s=n.WBProps||{};var f=t.biff==8,l=t.biff==5;qg(a,2057,Js(e,5,t));if(t.bookType=="xla")qg(a,135);qg(a,225,f?us(1200):null);qg(a,193,fs(2));if(l)qg(a,191);if(l)qg(a,192);qg(a,226);qg(a,92,ef("SheetJS",t));qg(a,66,us(f?1200:1252));if(f)qg(a,353,us(0));if(f)qg(a,448);qg(a,317,_l(e.SheetNames.length));if(f&&e.vbaraw)qg(a,211);if(f&&e.vbaraw){var o=s.CodeName||"ThisWorkbook";qg(a,442,As(o,t))}qg(a,156,us(17));qg(a,25,cs(false));qg(a,18,cs(false));qg(a,19,us(0));if(f)qg(a,431,cs(false));if(f)qg(a,444,us(0));qg(a,61,df(t));qg(a,64,cs(false));qg(a,141,us(0));qg(a,34,cs(Im(e)=="true"));qg(a,14,cs(true));if(f)qg(a,439,cs(false));qg(a,218,us(0));cb(a,e,t);hb(a,e.SSF,t);db(a,t);if(f)qg(a,352,cs(false));var c=a.end();var h=Ea();if(f)qg(h,140,bl());if(f&&fb.length)qg(h,235,lb());if(f&&t.Strings)Qg(h,252,sf(t.Strings,t));qg(h,10);var u=h.end();var d=Ea();var v=0,p=0;for(p=0;p<e.SheetNames.length;++p)v+=(f?12:11)+(f?2:1)*e.SheetNames[p].length;var m=c.length+v+u.length;for(p=0;p<e.SheetNames.length;++p){var g=i[p]||{};qg(d,133,af({pos:m,hs:g.Hidden||0,dt:0,name:e.SheetNames[p]},t));m+=r[p].length}var b=d.end();if(v!=b.length)throw new Error("BS8 "+v+" != "+b.length);var w=[];if(c.length)w.push(c);if(b.length)w.push(b);if(u.length)w.push(u);return P(w)}function wb(e,r){var t=r||{};var a=[];if(e&&!e.SSF){e.SSF=kr(q)}if(e&&e.SSF){Ve();He(e.SSF);t.revssf=fr(e.SSF);t.revssf[e.SSF[65535]]=0;t.ssf=e.SSF}sb=1;fb=[];t.Strings=[];t.Strings.Count=0;t.Strings.Unique=0;qw(t);t.cellXfs=[];wv(t.cellXfs,{},{revssf:{General:0}});if(!e.Props)e.Props={};for(var n=0;n<e.SheetNames.length;++n)a[a.length]=gb(n,t,e);a.unshift(bb(e,a,t));return P(a)}function kb(e,r){for(var t=0;t<=e.SheetNames.length;++t){var a=e.Sheets[e.SheetNames[t]];if(!a||!a["!ref"])continue;var n=za(a["!ref"]);if(n.e.c>255){if(typeof console!="undefined"&&console.error)console.error("Worksheet '"+e.SheetNames[t]+"' extends beyond column IV (255).  Data may be lost.")}}var i=r||{};switch(i.biff||2){case 8:;case 5:return wb(e,r);case 4:;case 3:;case 2:return ib(e,r);}throw new Error("invalid type "+i.bookType+" for BIFF")}function Tb(e,r){var t=r||{};var a=t.dense!=null?t.dense:b;var n={};if(a)n["!data"]=[];e=e.replace(/<!--.*?-->/g,"");var i=e.match(/<table/i);if(!i)throw new Error("Invalid HTML: could not find <table>");var s=e.match(/<\/table/i);var f=i.index,l=s&&s.index||e.length;var o=Ir(e.slice(f,l),/(:?<tr[^>]*>)/i,"<tr>");var c=-1,h=0,u=0,d=0;var v={s:{r:1e7,c:1e7},e:{r:0,c:0}};var p=[];for(f=0;f<o.length;++f){var m=o[f].trim();var g=m.slice(0,3).toLowerCase();if(g=="<tr"){++c;if(t.sheetRows&&t.sheetRows<=c){--c;break}h=0;continue}if(g!="<td"&&g!="<th")continue;var w=m.split(/<\/t[dh]>/i);for(l=0;l<w.length;++l){var k=w[l].trim();if(!k.match(/<t[dh]/i))continue;var T=k,A=0;while(T.charAt(0)=="<"&&(A=T.indexOf(">"))>-1)T=T.slice(A+1);for(var y=0;y<p.length;++y){var E=p[y];if(E.s.c==h&&E.s.r<c&&c<=E.e.r){h=E.e.c+1;y=-1}}var C=et(k.slice(0,k.indexOf(">")));d=C.colspan?+C.colspan:1;if((u=+C.rowspan)>1||d>1)p.push({s:{r:c,c:h},e:{r:c+(u||1)-1,c:h+d-1}});var _=C.t||C["data-t"]||"";if(!T.length){h+=d;continue}T=At(T);if(v.s.r>c)v.s.r=c;if(v.e.r<c)v.e.r=c;if(v.s.c>h)v.s.c=h;if(v.e.c<h)v.e.c=h;if(!T.length){h+=d;continue}var S={t:"s",v:T};if(t.raw||!T.trim().length||_=="s"){}else if(T==="TRUE")S={t:"b",v:true};else if(T==="FALSE")S={t:"b",v:false};else if(!isNaN(Ar(T)))S={t:"n",v:Ar(T)};else if(!isNaN(Rr(T).getDate())){S={t:"d",v:br(T)};if(t.UTC===false)S.v=Nr(S.v);if(!t.cellDates)S={t:"n",v:ur(S.v)};S.z=t.dateNF||q[14]}if(S.cellText!==false)S.w=T;if(a){if(!n["!data"][c])n["!data"][c]=[];n["!data"][c][h]=S}else n[Wa({r:c,c:h})]=S;h+=d}}n["!ref"]=Ha(v);if(p.length)n["!merges"]=p;return n}function Ab(e,r,t,a){var n=e["!merges"]||[];var i=[];var s={};var f=e["!data"]!=null;for(var l=r.s.c;l<=r.e.c;++l){var o=0,c=0;for(var h=0;h<n.length;++h){if(n[h].s.r>t||n[h].s.c>l)continue;if(n[h].e.r<t||n[h].e.c<l)continue;if(n[h].s.r<t||n[h].s.c<l){o=-1;break}o=n[h].e.r-n[h].s.r+1;c=n[h].e.c-n[h].s.c+1;break}if(o<0)continue;var u=Pa(l)+Ia(t);var d=f?(e["!data"][t]||[])[l]:e[u];var v=d&&d.v!=null&&(d.h||ct(d.w||(ja(d),d.w)||""))||"";s={};if(o>1)s.rowspan=o;if(c>1)s.colspan=c;if(a.editable)v='<span contenteditable="true">'+v+"</span>";else if(d){s["data-t"]=d&&d.t||"z";if(d.v!=null)s["data-v"]=d.v instanceof Date?d.v.toISOString():d.v;if(d.z!=null)s["data-z"]=d.z;if(d.l&&(d.l.Target||"#").charAt(0)!="#")v='<a href="'+ct(d.l.Target)+'">'+v+"</a>"}s.id=(a.id||"sjs")+"-"+u;i.push(Rt("td",v,s))}var p="<tr>";return p+i.join("")+"</tr>"}var yb='<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>';var Eb="</body></html>";function Cb(e,r){var t=e.match(/<table[\s\S]*?>[\s\S]*?<\/table>/gi);if(!t||t.length==0)throw new Error("Invalid HTML: could not find <table>");if(t.length==1){var a=Ka(Tb(t[0],r),r);a.bookType="html";return a}var n=Xk();t.forEach(function(e,t){Gk(n,Tb(e,r),"Sheet"+(t+1))});n.bookType="html";return n}function _b(e,r,t){var a=[];return a.join("")+"<table"+(t&&t.id?' id="'+t.id+'"':"")+">"}function Sb(e,r){var t=r||{};var a=t.header!=null?t.header:yb;var n=t.footer!=null?t.footer:Eb;var i=[a];var s=za(e["!ref"]);i.push(_b(e,s,t));for(var f=s.s.r;f<=s.e.r;++f)i.push(Ab(e,s,f,t));i.push("</table>"+n);return i.join("")}function xb(e,r,t){var a=r.rows;if(!a){throw"Unsupported origin when "+r.tagName+" is not a TABLE"}var n=t||{};var i=e["!data"]!=null;var s=0,f=0;if(n.origin!=null){if(typeof n.origin=="number")s=n.origin;else{var l=typeof n.origin=="string"?Ba(n.origin):n.origin;s=l.r;f=l.c}}var o=Math.min(n.sheetRows||1e7,a.length);var c={s:{r:0,c:0},e:{r:s,c:f}};if(e["!ref"]){var h=za(e["!ref"]);c.s.r=Math.min(c.s.r,h.s.r);c.s.c=Math.min(c.s.c,h.s.c);c.e.r=Math.max(c.e.r,h.e.r);c.e.c=Math.max(c.e.c,h.e.c);if(s==-1)c.e.r=s=h.e.r+1}var u=[],d=0;var v=e["!rows"]||(e["!rows"]=[]);var p=0,m=0,g=0,b=0,w=0,k=0;if(!e["!cols"])e["!cols"]=[];for(;p<a.length&&m<o;++p){var T=a[p];if(Ib(T)){if(n.display)continue;v[m]={hidden:true}}var A=T.cells;for(g=b=0;g<A.length;++g){var y=A[g];if(n.display&&Ib(y))continue;var E=y.hasAttribute("data-v")?y.getAttribute("data-v"):y.hasAttribute("v")?y.getAttribute("v"):At(y.innerHTML);var C=y.getAttribute("data-z")||y.getAttribute("z");for(d=0;d<u.length;++d){var _=u[d];if(_.s.c==b+f&&_.s.r<m+s&&m+s<=_.e.r){b=_.e.c+1-f;d=-1}}k=+y.getAttribute("colspan")||1;if((w=+y.getAttribute("rowspan")||1)>1||k>1)u.push({s:{r:m+s,c:b+f},e:{r:m+s+(w||1)-1,c:b+f+(k||1)-1}});var S={t:"s",v:E};var x=y.getAttribute("data-t")||y.getAttribute("t")||"";if(E!=null){if(E.length==0)S.t=x||"z";else if(n.raw||E.trim().length==0||x=="s"){}else if(E==="TRUE")S={t:"b",v:true};else if(E==="FALSE")S={t:"b",v:false};else if(!isNaN(Ar(E)))S={t:"n",v:Ar(E)};else if(!isNaN(Rr(E).getDate())){S={t:"d",v:br(E)};if(n.UTC)S.v=Fr(S.v);if(!n.cellDates)S={t:"n",v:ur(S.v)};S.z=n.dateNF||q[14]}}if(S.z===undefined&&C!=null)S.z=C;var O="",R=y.getElementsByTagName("A");if(R&&R.length)for(var I=0;I<R.length;++I)if(R[I].hasAttribute("href")){O=R[I].getAttribute("href");if(O.charAt(0)!="#")break}if(O&&O.charAt(0)!="#"&&O.slice(0,11).toLowerCase()!="javascript:")S.l={Target:O};if(i){if(!e["!data"][m+s])e["!data"][m+s]=[];e["!data"][m+s][b+f]=S}else e[Wa({c:b+f,r:m+s})]=S;if(c.e.c<b+f)c.e.c=b+f;b+=k}++m}if(u.length)e["!merges"]=(e["!merges"]||[]).concat(u);c.e.r=Math.max(c.e.r,m-1+s);
e["!ref"]=Ha(c);if(m>=o)e["!fullref"]=Ha((c.e.r=a.length-p+m-1+s,c));return e}function Ob(e,r){var t=r||{};var a={};if(t.dense)a["!data"]=[];return xb(a,e,r)}function Rb(e,r){var t=Ka(Ob(e,r),r);return t}function Ib(e){var r="";var t=Nb(e);if(t)r=t(e).getPropertyValue("display");if(!r)r=e.style&&e.style.display;return r==="none"}function Nb(e){if(e.ownerDocument.defaultView&&typeof e.ownerDocument.defaultView.getComputedStyle==="function")return e.ownerDocument.defaultView.getComputedStyle;if(typeof getComputedStyle==="function")return getComputedStyle;return null}function Fb(e){var r=e.replace(/[\t\r\n]/g," ").trim().replace(/ +/g," ").replace(/<text:s\/>/g," ").replace(/<text:s text:c="(\d+)"\/>/g,function(e,r){return Array(parseInt(r,10)+1).join(" ")}).replace(/<text:tab[^>]*\/>/g,"\t").replace(/<text:line-break\/>/g,"\n");var t=nt(r.replace(/<[^>]*>/g,""));return[t]}function Db(e,r,t){var a=t||{};var n=Ft(e);Dt.lastIndex=0;n=n.replace(/<!--([\s\S]*?)-->/gm,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");var i,s,f="",l="",o,c=0,h=-1,u=false,d="";while(i=Dt.exec(n)){switch(i[3]=i[3].replace(/_.*$/,"")){case"number-style":;case"currency-style":;case"percentage-style":;case"date-style":;case"time-style":;case"text-style":if(i[1]==="/"){u=false;if(s["truncate-on-overflow"]=="false"){if(f.match(/h/))f=f.replace(/h+/,"[$&]");else if(f.match(/m/))f=f.replace(/m+/,"[$&]");else if(f.match(/s/))f=f.replace(/s+/,"[$&]")}a[s.name]=f;f=""}else if(i[0].charAt(i[0].length-2)!=="/"){u=true;f="";s=et(i[0],false)}break;case"boolean-style":if(i[1]==="/"){u=false;a[s.name]="General";f=""}else if(i[0].charAt(i[0].length-2)!=="/"){u=true;f="";s=et(i[0],false)}break;case"boolean":f+="General";break;case"text":if(i[1]==="/"){d=n.slice(h,Dt.lastIndex-i[0].length);if(d=="%"&&s[0]=="<number:percentage-style")f+="%";else f+='"'+d.replace(/"/g,'""')+'"'}else if(i[0].charAt(i[0].length-2)!=="/"){h=Dt.lastIndex}break;case"day":{o=et(i[0],false);switch(o["style"]){case"short":f+="d";break;case"long":f+="dd";break;default:f+="dd";break;}}break;case"day-of-week":{o=et(i[0],false);switch(o["style"]){case"short":f+="ddd";break;case"long":f+="dddd";break;default:f+="ddd";break;}}break;case"era":{o=et(i[0],false);switch(o["style"]){case"short":f+="ee";break;case"long":f+="eeee";break;default:f+="eeee";break;}}break;case"hours":{o=et(i[0],false);switch(o["style"]){case"short":f+="h";break;case"long":f+="hh";break;default:f+="hh";break;}}break;case"minutes":{o=et(i[0],false);switch(o["style"]){case"short":f+="m";break;case"long":f+="mm";break;default:f+="mm";break;}}break;case"month":{o=et(i[0],false);if(o["textual"])f+="mm";switch(o["style"]){case"short":f+="m";break;case"long":f+="mm";break;default:f+="m";break;}}break;case"seconds":{o=et(i[0],false);switch(o["style"]){case"short":f+="s";break;case"long":f+="ss";break;default:f+="ss";break;}if(o["decimal-places"])f+="."+Tr("0",+o["decimal-places"])}break;case"year":{o=et(i[0],false);switch(o["style"]){case"short":f+="yy";break;case"long":f+="yyyy";break;default:f+="yy";break;}}break;case"am-pm":f+="AM/PM";break;case"week-of-year":;case"quarter":console.error("Excel does not support ODS format token "+i[3]);break;case"fill-character":if(i[1]==="/"){d=n.slice(h,Dt.lastIndex-i[0].length);f+='"'+d.replace(/"/g,'""')+'"*'}else if(i[0].charAt(i[0].length-2)!=="/"){h=Dt.lastIndex}break;case"scientific-number":o=et(i[0],false);f+="0."+Tr("0",+o["min-decimal-places"]||+o["decimal-places"]||2)+Tr("?",+o["decimal-places"]-+o["min-decimal-places"]||0)+"E"+(vt(o["forced-exponent-sign"])?"+":"")+Tr("0",+o["min-exponent-digits"]||2);break;case"fraction":o=et(i[0],false);if(!+o["min-integer-digits"])f+="#";else f+=Tr("0",+o["min-integer-digits"]);f+=" ";f+=Tr("?",+o["min-numerator-digits"]||1);f+="/";if(+o["denominator-value"])f+=o["denominator-value"];else f+=Tr("?",+o["min-denominator-digits"]||1);break;case"currency-symbol":if(i[1]==="/"){f+='"'+n.slice(h,Dt.lastIndex-i[0].length).replace(/"/g,'""')+'"'}else if(i[0].charAt(i[0].length-2)!=="/"){h=Dt.lastIndex}else f+="$";break;case"text-properties":o=et(i[0],false);switch((o["color"]||"").toLowerCase().replace("#","")){case"ff0000":;case"red":f="[Red]"+f;break;}break;case"text-content":f+="@";break;case"map":o=et(i[0],false);if(nt(o["condition"])=="value()>=0")f=a[o["apply-style-name"]]+";"+f;else console.error("ODS number format may be incorrect: "+o["condition"]);break;case"number":if(i[1]==="/")break;o=et(i[0],false);l="";l+=Tr("0",+o["min-integer-digits"]||1);if(vt(o["grouping"]))l=he(Tr("#",Math.max(0,4-l.length))+l);if(+o["min-decimal-places"]||+o["decimal-places"])l+=".";if(+o["min-decimal-places"])l+=Tr("0",+o["min-decimal-places"]||1);if(+o["decimal-places"]-(+o["min-decimal-places"]||0))l+=Tr("0",+o["decimal-places"]-(+o["min-decimal-places"]||0));f+=l;break;case"embedded-text":if(i[1]==="/"){if(c==0)f+='"'+n.slice(h,Dt.lastIndex-i[0].length).replace(/"/g,'""')+'"';else f=f.slice(0,c)+'"'+n.slice(h,Dt.lastIndex-i[0].length).replace(/"/g,'""')+'"'+f.slice(c)}else if(i[0].charAt(i[0].length-2)!=="/"){h=Dt.lastIndex;c=-+et(i[0],false)["position"]||0}break;}}return a}function Pb(e,r,t){var a=r||{};if(b!=null&&a.dense==null)a.dense=b;var n=Ft(e);var i=[],s;var f;var l,o="",c=0;var h;var u;var d={},v=[];var p={};if(a.dense)p["!data"]=[];var m,g;var w={value:""};var k="",T=0,A,y="",E=0;var C=[],_=[];var S=-1,x=-1,O={s:{r:1e6,c:1e7},e:{r:0,c:0}};var R=0;var I=t||{},N={};var F=[],D={},P=0,L=0;var M=[],U=1,B=1;var W=[];var z={Names:[],WBProps:{}};var H={};var V=["",""];var X=[],G={};var $="",j=0;var K=false,Y=false;var Z=0;Dt.lastIndex=0;n=n.replace(/<!--([\s\S]*?)-->/gm,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");while(m=Dt.exec(n))switch(m[3]=m[3].replace(/_.*$/,"")){case"table":;case"å·¥ä½œè¡¨":if(m[1]==="/"){if(O.e.c>=O.s.c&&O.e.r>=O.s.r)p["!ref"]=Ha(O);else p["!ref"]="A1:A1";if(a.sheetRows>0&&a.sheetRows<=O.e.r){p["!fullref"]=p["!ref"];O.e.r=a.sheetRows-1;p["!ref"]=Ha(O)}if(F.length)p["!merges"]=F;if(M.length)p["!rows"]=M;h.name=h["åç§°"]||h.name;if(typeof JSON!=="undefined")JSON.stringify(h);v.push(h.name);d[h.name]=p;Y=false}else if(m[0].charAt(m[0].length-2)!=="/"){h=et(m[0],false);S=x=-1;O.s.r=O.s.c=1e7;O.e.r=O.e.c=0;p={};if(a.dense)p["!data"]=[];F=[];M=[];Y=true}break;case"table-row-group":if(m[1]==="/")--R;else++R;break;case"table-row":;case"è¡Œ":if(m[1]==="/"){S+=U;U=1;break}u=et(m[0],false);if(u["è¡Œå·"])S=u["è¡Œå·"]-1;else if(S==-1)S=0;U=+u["number-rows-repeated"]||1;if(U<10)for(Z=0;Z<U;++Z)if(R>0)M[S+Z]={level:R};x=-1;break;case"covered-table-cell":if(m[1]!=="/")++x;if(a.sheetStubs){if(a.dense){if(!p["!data"][S])p["!data"][S]=[];p["!data"][S][x]={t:"z"}}else p[Wa({r:S,c:x})]={t:"z"}}k="";C=[];break;case"table-cell":;case"æ•°æ®":if(m[0].charAt(m[0].length-2)==="/"){++x;w=et(m[0],false);B=parseInt(w["number-columns-repeated"]||"1",10);g={t:"z",v:null};if(w.formula&&a.cellFormula!=false)g.f=ov(nt(w.formula));if(w["style-name"]&&N[w["style-name"]])g.z=N[w["style-name"]];if((w["æ•°æ®ç±»åž‹"]||w["value-type"])=="string"){g.t="s";g.v=nt(w["string-value"]||"");if(a.dense){if(!p["!data"][S])p["!data"][S]=[];p["!data"][S][x]=g}else{p[Pa(x)+Ia(S)]=g}}x+=B-1}else if(m[1]!=="/"){++x;k=y="";T=E=0;C=[];_=[];B=1;var J=U?S+U-1:S;if(x>O.e.c)O.e.c=x;if(x<O.s.c)O.s.c=x;if(S<O.s.r)O.s.r=S;if(J>O.e.r)O.e.r=J;w=et(m[0],false);X=[];G={};g={t:w["æ•°æ®ç±»åž‹"]||w["value-type"],v:null};if(w["style-name"]&&N[w["style-name"]])g.z=N[w["style-name"]];if(a.cellFormula){if(w.formula)w.formula=nt(w.formula);if(w["number-matrix-columns-spanned"]&&w["number-matrix-rows-spanned"]){P=parseInt(w["number-matrix-rows-spanned"],10)||0;L=parseInt(w["number-matrix-columns-spanned"],10)||0;D={s:{r:S,c:x},e:{r:S+P-1,c:x+L-1}};g.F=Ha(D);W.push([D,g.F])}if(w.formula)g.f=ov(w.formula);else for(Z=0;Z<W.length;++Z)if(S>=W[Z][0].s.r&&S<=W[Z][0].e.r)if(x>=W[Z][0].s.c&&x<=W[Z][0].e.c)g.F=W[Z][1]}if(w["number-columns-spanned"]||w["number-rows-spanned"]){P=parseInt(w["number-rows-spanned"],10)||0;L=parseInt(w["number-columns-spanned"],10)||0;D={s:{r:S,c:x},e:{r:S+P-1,c:x+L-1}};F.push(D)}if(w["number-columns-repeated"])B=parseInt(w["number-columns-repeated"],10);switch(g.t){case"boolean":g.t="b";g.v=vt(w["boolean-value"])||+w["boolean-value"]>=1;break;case"float":g.t="n";g.v=parseFloat(w.value);if(a.cellDates&&g.z&&Pe(g.z)){g.v=dr(g.v+(z.WBProps.date1904?1462:0));g.t=typeof g.v=="number"?"n":"d"}break;case"percentage":g.t="n";g.v=parseFloat(w.value);break;case"currency":g.t="n";g.v=parseFloat(w.value);break;case"date":g.t="d";g.v=br(w["date-value"],z.WBProps.date1904);if(!a.cellDates){g.t="n";g.v=ur(g.v,z.WBProps.date1904)}if(!g.z)g.z="m/d/yy";break;case"time":g.t="n";g.v=vr(w["time-value"])/86400;if(a.cellDates){g.v=dr(g.v);g.t=typeof g.v=="number"?"n":"d"}if(!g.z)g.z="HH:MM:SS";break;case"number":g.t="n";g.v=parseFloat(w["æ•°æ®æ•°å€¼"]);break;default:if(g.t==="string"||g.t==="text"||!g.t){g.t="s";if(w["string-value"]!=null){k=nt(w["string-value"]);C=[]}}else throw new Error("Unsupported value type "+g.t);}}else{K=false;if(g.t==="s"){g.v=k||"";if(C.length)g.R=C;K=T==0}if(H.Target)g.l=H;if(X.length>0){g.c=X;X=[]}if(k&&a.cellText!==false)g.w=k;if(K){g.t="z";delete g.v}if(!K||a.sheetStubs){if(!(a.sheetRows&&a.sheetRows<=S)){for(var q=0;q<U;++q){B=parseInt(w["number-columns-repeated"]||"1",10);if(a.dense){if(!p["!data"][S+q])p["!data"][S+q]=[];p["!data"][S+q][x]=q==0?g:kr(g);while(--B>0)p["!data"][S+q][x+B]=kr(g)}else{p[Wa({r:S+q,c:x})]=g;while(--B>0)p[Wa({r:S+q,c:x+B})]=kr(g)}if(O.e.c<=x)O.e.c=x}}}B=parseInt(w["number-columns-repeated"]||"1",10);x+=B-1;B=0;g={};k="";C=[]}H={};break;case"document":;case"document-content":;case"ç”µå­è¡¨æ ¼æ–‡æ¡£":;case"spreadsheet":;case"ä¸»ä½“":;case"scripts":;case"styles":;case"font-face-decls":;case"master-styles":if(m[1]==="/"){if((s=i.pop())[0]!==m[3])throw"Bad state: "+s}else if(m[0].charAt(m[0].length-2)!=="/")i.push([m[3],true]);break;case"annotation":if(m[1]==="/"){if((s=i.pop())[0]!==m[3])throw"Bad state: "+s;G.t=k;if(C.length)G.R=C;G.a=$;X.push(G);k=y;T=E;C=_}else if(m[0].charAt(m[0].length-2)!=="/"){i.push([m[3],false]);var Q=et(m[0],true);if(!(Q["display"]&&vt(Q["display"])))X.hidden=true;y=k;E=T;_=C;k="";T=0;C=[]}$="";j=0;break;case"creator":if(m[1]==="/"){$=n.slice(j,m.index)}else j=m.index+m[0].length;break;case"meta":;case"å…ƒæ•°æ®":;case"settings":;case"config-item-set":;case"config-item-map-indexed":;case"config-item-map-entry":;case"config-item-map-named":;case"shapes":;case"frame":;case"text-box":;case"image":;case"data-pilot-tables":;case"list-style":;case"form":;case"dde-links":;case"event-listeners":;case"chart":if(m[1]==="/"){if((s=i.pop())[0]!==m[3])throw"Bad state: "+s}else if(m[0].charAt(m[0].length-2)!=="/")i.push([m[3],false]);k="";T=0;C=[];break;case"scientific-number":;case"currency-symbol":;case"fill-character":break;case"text-style":;case"boolean-style":;case"number-style":;case"currency-style":;case"percentage-style":;case"date-style":;case"time-style":if(m[1]==="/"){var ee=Dt.lastIndex;Db(n.slice(l,Dt.lastIndex),r,I);Dt.lastIndex=ee}else if(m[0].charAt(m[0].length-2)!=="/"){l=Dt.lastIndex-m[0].length}break;case"script":break;case"libraries":break;case"automatic-styles":break;case"default-style":;case"page-layout":break;case"style":{var re=et(m[0],false);if(re["family"]=="table-cell"&&I[re["data-style-name"]])N[re["name"]]=I[re["data-style-name"]]}break;case"map":break;case"font-face":break;case"paragraph-properties":break;case"table-properties":break;case"table-column-properties":break;case"table-row-properties":break;case"table-cell-properties":break;case"number":break;case"fraction":break;case"day":;case"month":;case"year":;case"era":;case"day-of-week":;case"week-of-year":;case"quarter":;case"hours":;case"minutes":;case"seconds":;case"am-pm":break;case"boolean":break;case"text":if(m[0].slice(-2)==="/>")break;else if(m[1]==="/")switch(i[i.length-1][0]){case"number-style":;case"date-style":;case"time-style":o+=n.slice(c,m.index);break;}else c=m.index+m[0].length;break;case"named-range":f=et(m[0],false);V=hv(f["cell-range-address"]);var te={Name:f.name,Ref:V[0]+"!"+V[1]};if(Y)te.Sheet=v.length;z.Names.push(te);break;case"text-content":break;case"text-properties":break;case"embedded-text":break;case"body":;case"ç”µå­è¡¨æ ¼":break;case"forms":break;case"table-column":break;case"table-header-rows":break;case"table-rows":break;case"table-column-group":break;case"table-header-columns":break;case"table-columns":break;case"null-date":f=et(m[0],false);switch(f["date-value"]){case"1904-01-01":z.WBProps.date1904=true;break;}break;case"graphic-properties":break;case"calculation-settings":break;case"named-expressions":break;case"label-range":break;case"label-ranges":break;case"named-expression":break;case"sort":break;case"sort-by":break;case"sort-groups":break;case"tab":break;case"line-break":break;case"span":break;case"p":;case"æ–‡æœ¬ä¸²":if(["master-styles"].indexOf(i[i.length-1][0])>-1)break;if(m[1]==="/"&&(!w||!w["string-value"])){var ae=Fb(n.slice(T,m.index),A);k=(k.length>0?k+"\n":"")+ae[0]}else if(m[0].slice(-2)=="/>"){k+="\n"}else{A=et(m[0],false);T=m.index+m[0].length}break;case"s":break;case"database-range":if(m[1]==="/")break;try{V=hv(et(m[0])["target-range-address"]);d[V[0]]["!autofilter"]={ref:V[1]}}catch(ne){}break;case"date":break;case"object":break;case"title":;case"æ ‡é¢˜":break;case"desc":break;case"binary-data":break;case"table-source":break;case"scenario":break;case"iteration":break;case"content-validations":break;case"content-validation":break;case"help-message":break;case"error-message":break;case"database-ranges":break;case"filter":break;case"filter-and":break;case"filter-or":break;case"filter-condition":break;case"list-level-style-bullet":break;case"list-level-style-number":break;case"list-level-properties":break;case"sender-firstname":;case"sender-lastname":;case"sender-initials":;case"sender-title":;case"sender-position":;case"sender-email":;case"sender-phone-private":;case"sender-fax":;case"sender-company":;case"sender-phone-work":;case"sender-street":;case"sender-city":;case"sender-postal-code":;case"sender-country":;case"sender-state-or-province":;case"author-name":;case"author-initials":;case"chapter":;case"file-name":;case"template-name":;case"sheet-name":break;case"event-listener":break;case"initial-creator":;case"creation-date":;case"print-date":;case"generator":;case"document-statistic":;case"user-defined":;case"editing-duration":;case"editing-cycles":break;case"config-item":break;case"page-number":break;case"page-count":break;case"time":break;case"cell-range-source":break;case"detective":break;case"operation":break;case"highlighted-range":break;case"data-pilot-table":;case"source-cell-range":;case"source-service":;case"data-pilot-field":;case"data-pilot-level":;case"data-pilot-subtotals":;case"data-pilot-subtotal":;case"data-pilot-members":;case"data-pilot-member":;case"data-pilot-display-info":;case"data-pilot-sort-info":;case"data-pilot-layout-info":;case"data-pilot-field-reference":;case"data-pilot-groups":;case"data-pilot-group":;case"data-pilot-group-member":break;case"rect":break;case"dde-connection-decls":;case"dde-connection-decl":;case"dde-link":;case"dde-source":break;case"properties":break;case"property":break;case"a":if(m[1]!=="/"){H=et(m[0],false);if(!H.href)break;H.Target=nt(H.href);delete H.href;if(H.Target.charAt(0)=="#"&&H.Target.indexOf(".")>-1){V=hv(H.Target.slice(1));H.Target="#"+V[0]+"!"+V[1]}else if(H.Target.match(/^\.\.[\\\/]/))H.Target=H.Target.slice(3)}break;case"table-protection":break;case"data-pilot-grand-total":break;case"office-document-common-attrs":break;default:switch(m[2]){case"dc:":;case"calcext:":;case"loext:":;case"ooo:":;case"chartooo:":;case"draw:":;case"style:":;case"chart:":;case"form:":;case"uof:":;case"è¡¨:":;case"å­—:":break;default:if(a.WTF)throw new Error(m);};}var ie={Sheets:d,SheetNames:v,Workbook:z};if(a.bookSheets)delete ie.Sheets;return ie}function Lb(e,r){r=r||{};if(Mr(e,"META-INF/manifest.xml"))vi(Br(e,"META-INF/manifest.xml"),r);var t=Wr(e,"styles.xml");var a=t&&Db(wt(t),r);var n=Wr(e,"content.xml");if(!n)throw new Error("Missing content.xml in ODS / UOF file");var i=Pb(wt(n),r,a);if(Mr(e,"meta.xml"))i.Props=Ai(Br(e,"meta.xml"));i.bookType="ods";return i}function Mb(e,r){var t=Pb(e,r);t.bookType="fods";return t}var Ub=function(){var e=["<office:master-styles>",'<style:master-page style:name="mp1" style:page-layout-name="mp1">',"<style:header/>",'<style:header-left style:display="false"/>',"<style:footer/>",'<style:footer-left style:display="false"/>',"</style:master-page>","</office:master-styles>"].join("");var r="<office:document-styles "+Ot({"xmlns:office":"urn:oasis:names:tc:opendocument:xmlns:office:1.0","xmlns:table":"urn:oasis:names:tc:opendocument:xmlns:table:1.0","xmlns:style":"urn:oasis:names:tc:opendocument:xmlns:style:1.0","xmlns:text":"urn:oasis:names:tc:opendocument:xmlns:text:1.0","xmlns:draw":"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0","xmlns:fo":"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:number":"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0","xmlns:svg":"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0","xmlns:of":"urn:oasis:names:tc:opendocument:xmlns:of:1.2","office:version":"1.2"})+">"+e+"</office:document-styles>";return function t(){return jr+r}}();function Bb(e,r){var t="number",a="",n={"style:name":r},i="",s=0;e=e.replace(/"[$]"/g,"$");e:{if(e.indexOf(";")>-1){console.error("Unsupported ODS Style Map exported.  Using first branch of "+e);e=e.slice(0,e.indexOf(";"))}if(e=="@"){t="text";a="<number:text-content/>";break e}if(e.indexOf(/\$/)>-1){t="currency"}if(e[s]=='"'){i="";while(e[++s]!='"'||e[++s]=='"')i+=e[s];--s;if(e[s+1]=="*"){s++;a+="<number:fill-character>"+ft(i.replace(/""/g,'"'))+"</number:fill-character>"}else{a+="<number:text>"+ft(i.replace(/""/g,'"'))+"</number:text>"}e=e.slice(s+1);s=0}var f=e.match(/# (\?+)\/(\?+)/);if(f){a+=Rt("number:fraction",null,{"number:min-integer-digits":0,"number:min-numerator-digits":f[1].length,"number:max-denominator-value":Math.max(+f[1].replace(/./g,"9"),+f[2].replace(/./g,"9"))});break e}if(f=e.match(/# (\?+)\/(\d+)/)){a+=Rt("number:fraction",null,{"number:min-integer-digits":0,"number:min-numerator-digits":f[1].length,"number:denominator-value":+f[2]});break e}if(f=e.match(/(\d+)(|\.\d+)%/)){t="percentage";a+=Rt("number:number",null,{"number:decimal-places":f[2]&&f.length-1||0,"number:min-decimal-places":f[2]&&f.length-1||0,"number:min-integer-digits":f[1].length})+"<number:text>%</number:text>";break e}var l=false;if(["y","m","d"].indexOf(e[0])>-1){t="date";r:for(;s<e.length;++s)switch(i=e[s].toLowerCase()){case"h":;case"s":l=true;--s;break r;case"m":t:for(var o=s+1;o<e.length;++o)switch(e[o]){case"y":;case"d":break t;case"h":;case"s":l=true;--s;break r;};case"y":;case"d":while((e[++s]||"").toLowerCase()==i[0])i+=i[0];--s;switch(i){case"y":;case"yy":a+="<number:year/>";break;case"yyy":;case"yyyy":a+='<number:year number:style="long"/>';break;case"mmmmm":console.error("ODS has no equivalent of format |mmmmm|");case"m":;case"mm":;case"mmm":;case"mmmm":a+='<number:month number:style="'+(i.length%2?"short":"long")+'" number:textual="'+(i.length>=3?"true":"false")+'"/>';break;case"d":;case"dd":a+='<number:day number:style="'+(i.length%2?"short":"long")+'"/>';break;case"ddd":;case"dddd":a+='<number:day-of-week number:style="'+(i.length%2?"short":"long")+'"/>';break;}break;case'"':while(e[++s]!='"'||e[++s]=='"')i+=e[s];--s;a+="<number:text>"+ft(i.slice(1).replace(/""/g,'"'))+"</number:text>";break;case"\\":i=e[++s];a+="<number:text>"+ft(i)+"</number:text>";break;case"/":;case":":a+="<number:text>"+ft(i)+"</number:text>";break;default:console.error("unrecognized character "+i+" in ODF format "+e);}if(!l)break e;e=e.slice(s+1);s=0}if(e.match(/^\[?[hms]/)){if(t=="number")t="time";if(e.match(/\[/)){e=e.replace(/[\[\]]/g,"");n["number:truncate-on-overflow"]="false"}for(;s<e.length;++s)switch(i=e[s].toLowerCase()){case"h":;case"m":;case"s":while((e[++s]||"").toLowerCase()==i[0])i+=i[0];--s;switch(i){case"h":;case"hh":a+='<number:hours number:style="'+(i.length%2?"short":"long")+'"/>';break;case"m":;case"mm":a+='<number:minutes number:style="'+(i.length%2?"short":"long")+'"/>';break;case"s":;case"ss":if(e[s+1]==".")do{i+=e[s+1];++s}while(e[s+1]=="0");a+='<number:seconds number:style="'+(i.match("ss")?"long":"short")+'"'+(i.match(/\./)?' number:decimal-places="'+(i.match(/0+/)||[""])[0].length+'"':"")+"/>";break;}break;case'"':while(e[++s]!='"'||e[++s]=='"')i+=e[s];--s;a+="<number:text>"+ft(i.slice(1).replace(/""/g,'"'))+"</number:text>";break;case"/":;case":":a+="<number:text>"+ft(i)+"</number:text>";break;case"a":if(e.slice(s,s+3).toLowerCase()=="a/p"){a+="<number:am-pm/>";s+=2;break}if(e.slice(s,s+5).toLowerCase()=="am/pm"){a+="<number:am-pm/>";s+=4;break};default:console.error("unrecognized character "+i+" in ODF format "+e);}break e}if(e.indexOf(/\$/)>-1){t="currency"}if(e[0]=="$"){a+='<number:currency-symbol number:language="en" number:country="US">$</number:currency-symbol>';e=e.slice(1);s=0}s=0;if(e[s]=='"'){while(e[++s]!='"'||e[++s]=='"')i+=e[s];--s;if(e[s+1]=="*"){s++;a+="<number:fill-character>"+ft(i.replace(/""/g,'"'))+"</number:fill-character>"}else{a+="<number:text>"+ft(i.replace(/""/g,'"'))+"</number:text>"}e=e.slice(s+1);s=0}var c=e.match(/([#0][0#,]*)(\.[0#]*|)(E[+]?0*|)/i);if(!c||!c[0])console.error("Could not find numeric part of "+e);else{var h=c[1].replace(/,/g,"");a+="<number:"+(c[3]?"scientific-":"")+"number"+' number:min-integer-digits="'+(h.indexOf("0")==-1?"0":h.length-h.indexOf("0"))+'"'+(c[0].indexOf(",")>-1?' number:grouping="true"':"")+(c[2]&&' number:decimal-places="'+(c[2].length-1)+'"'||' number:decimal-places="0"')+(c[3]&&c[3].indexOf("+")>-1?' number:forced-exponent-sign="true"':"")+(c[3]?' number:min-exponent-digits="'+c[3].match(/0+/)[0].length+'"':"")+">"+"</number:"+(c[3]?"scientific-":"")+"number>";s=c.index+c[0].length}if(e[s]=='"'){i="";while(e[++s]!='"'||e[++s]=='"')i+=e[s];--s;a+="<number:text>"+ft(i.replace(/""/g,'"'))+"</number:text>"}}if(!a){console.error("Could not generate ODS number format for |"+e+"|");return""}return Rt("number:"+t+"-style",a,n)}function Wb(e,r,t){var a=[];for(var n=0;n<e.length;++n){var i=e[n];if(!i)continue;if(i.Sheet==(t==-1?null:t))a.push(i)}if(!a.length)return"";return"      <table:named-expressions>\n"+a.map(function(e){var r=(t==-1?"$":"")+uv(e.Ref);return"        "+Rt("table:named-range",null,{"table:name":e.Name,"table:cell-range-address":r,"table:base-cell-address":r.replace(/[\.]?[^\.]*$/,".$A$1")})}).join("\n")+"\n      </table:named-expressions>\n"}var zb=function(){var e=function(e){return ft(e).replace(/  +/g,function(e){return'<text:s text:c="'+e.length+'"/>'}).replace(/\t/g,"<text:tab/>").replace(/\n/g,"</text:p><text:p>").replace(/^ /,"<text:s/>").replace(/ $/,"<text:s/>")};var r="          <table:table-cell />\n";var t=function(t,a,n,i,s,f){var l=[];l.push('      <table:table table:name="'+ft(a.SheetNames[n])+'" table:style-name="ta1">\n');var o=0,c=0,h=za(t["!ref"]||"A1");var u=t["!merges"]||[],d=0;var v=t["!data"]!=null;if(t["!cols"]){for(c=0;c<=h.e.c;++c)l.push("        <table:table-column"+(t["!cols"][c]?' table:style-name="co'+t["!cols"][c].ods+'"':"")+"></table:table-column>\n")}var p="",m=t["!rows"]||[];for(o=0;o<h.s.r;++o){p=m[o]?' table:style-name="ro'+m[o].ods+'"':"";l.push("        <table:table-row"+p+"></table:table-row>\n")}for(;o<=h.e.r;++o){p=m[o]?' table:style-name="ro'+m[o].ods+'"':"";l.push("        <table:table-row"+p+">\n");for(c=0;c<h.s.c;++c)l.push(r);for(;c<=h.e.c;++c){var g=false,b={},w="";for(d=0;d!=u.length;++d){if(u[d].s.c>c)continue;if(u[d].s.r>o)continue;if(u[d].e.c<c)continue;if(u[d].e.r<o)continue;if(u[d].s.c!=c||u[d].s.r!=o)g=true;b["table:number-columns-spanned"]=u[d].e.c-u[d].s.c+1;b["table:number-rows-spanned"]=u[d].e.r-u[d].s.r+1;break}if(g){l.push("          <table:covered-table-cell/>\n");continue}var k=Wa({r:o,c:c}),T=v?(t["!data"][o]||[])[c]:t[k];if(T&&T.f){b["table:formula"]=ft(cv(T.f));if(T.F){if(T.F.slice(0,k.length)==k){var A=za(T.F);b["table:number-matrix-columns-spanned"]=A.e.c-A.s.c+1;b["table:number-matrix-rows-spanned"]=A.e.r-A.s.r+1}}}if(!T){l.push(r);continue}switch(T.t){case"b":w=T.v?"TRUE":"FALSE";b["office:value-type"]="boolean";b["office:boolean-value"]=T.v?"true":"false";break;case"n":w=T.w||String(T.v||0);b["office:value-type"]="float";b["office:value"]=T.v||0;break;case"s":;case"str":w=T.v==null?"":T.v;b["office:value-type"]="string";break;case"d":w=T.w||br(T.v,f).toISOString();b["office:value-type"]="date";b["office:date-value"]=br(T.v,f).toISOString();b["table:style-name"]="ce1";break;default:l.push(r);continue;}var y=e(w);if(T.l&&T.l.Target){var E=T.l.Target;E=E.charAt(0)=="#"?"#"+uv(E.slice(1)):E;if(E.charAt(0)!="#"&&!E.match(/^\w+:/))E="../"+E;y=Rt("text:a",y,{"xlink:href":E.replace(/&/g,"&amp;")})}if(s[T.z])b["table:style-name"]="ce"+s[T.z].slice(1);var C=Rt("text:p",y,{});if(T.c){var _="",S="",x={};for(var O=0;O<T.c.length;++O){if(!_&&T.c[O].a)_=T.c[O].a;S+="<text:p>"+e(T.c[O].t)+"</text:p>"}if(!T.c.hidden)x["office:display"]=true;C=Rt("office:annotation",S,x)+C}l.push("          "+Rt("table:table-cell",C,b)+"\n")}l.push("        </table:table-row>\n")}if((a.Workbook||{}).Names)l.push(Wb(a.Workbook.Names,a.SheetNames,n));l.push("      </table:table>\n");return l.join("")};var a=function(e,r){e.push(" <office:automatic-styles>\n");var t=0;r.SheetNames.map(function(e){return r.Sheets[e]}).forEach(function(r){if(!r)return;if(r["!cols"]){for(var a=0;a<r["!cols"].length;++a)if(r["!cols"][a]){var n=r["!cols"][a];if(n.width==null&&n.wpx==null&&n.wch==null)continue;tc(n);n.ods=t;var i=r["!cols"][a].wpx+"px";e.push('  <style:style style:name="co'+t+'" style:family="table-column">\n');e.push('   <style:table-column-properties fo:break-before="auto" style:column-width="'+i+'"/>\n');e.push("  </style:style>\n");++t}}});var a=0;r.SheetNames.map(function(e){return r.Sheets[e]}).forEach(function(r){if(!r)return;if(r["!rows"]){for(var t=0;t<r["!rows"].length;++t)if(r["!rows"][t]){r["!rows"][t].ods=a;var n=r["!rows"][t].hpx+"px";e.push('  <style:style style:name="ro'+a+'" style:family="table-row">\n');e.push('   <style:table-row-properties fo:break-before="auto" style:row-height="'+n+'"/>\n');e.push("  </style:style>\n");++a}}});e.push('  <style:style style:name="ta1" style:family="table" style:master-page-name="mp1">\n');e.push('   <style:table-properties table:display="true" style:writing-mode="lr-tb"/>\n');e.push("  </style:style>\n");e.push('  <number:date-style style:name="N37" number:automatic-order="true">\n');e.push('   <number:month number:style="long"/>\n');e.push("   <number:text>/</number:text>\n");e.push('   <number:day number:style="long"/>\n');e.push("   <number:text>/</number:text>\n");e.push("   <number:year/>\n");e.push("  </number:date-style>\n");var n={};var i=69;r.SheetNames.map(function(e){return r.Sheets[e]}).forEach(function(r){if(!r)return;var t=r["!data"]!=null;var a=za(r["!ref"]);for(var s=0;s<=a.e.r;++s)for(var f=0;f<=a.e.c;++f){var l=t?(r["!data"][s]||[])[f]:r[Wa({r:s,c:f})];if(!l||!l.z||l.z.toLowerCase()=="general")continue;if(!n[l.z]){var o=Bb(l.z,"N"+i);if(o){n[l.z]="N"+i;++i;e.push(o+"\n")}}}});e.push('  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n');nr(n).forEach(function(r){e.push('<style:style style:name="ce'+n[r].slice(1)+'" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="'+n[r]+'"/>\n')});e.push(" </office:automatic-styles>\n");return n};return function n(e,r){var n=[jr];var i=Ot({"xmlns:office":"urn:oasis:names:tc:opendocument:xmlns:office:1.0","xmlns:table":"urn:oasis:names:tc:opendocument:xmlns:table:1.0","xmlns:style":"urn:oasis:names:tc:opendocument:xmlns:style:1.0","xmlns:text":"urn:oasis:names:tc:opendocument:xmlns:text:1.0","xmlns:draw":"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0","xmlns:fo":"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:meta":"urn:oasis:names:tc:opendocument:xmlns:meta:1.0","xmlns:number":"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0","xmlns:presentation":"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0","xmlns:svg":"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0","xmlns:chart":"urn:oasis:names:tc:opendocument:xmlns:chart:1.0","xmlns:dr3d":"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0","xmlns:math":"http://www.w3.org/1998/Math/MathML","xmlns:form":"urn:oasis:names:tc:opendocument:xmlns:form:1.0","xmlns:script":"urn:oasis:names:tc:opendocument:xmlns:script:1.0","xmlns:ooo":"http://openoffice.org/2004/office","xmlns:ooow":"http://openoffice.org/2004/writer","xmlns:oooc":"http://openoffice.org/2004/calc","xmlns:dom":"http://www.w3.org/2001/xml-events","xmlns:xforms":"http://www.w3.org/2002/xforms","xmlns:xsd":"http://www.w3.org/2001/XMLSchema","xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","xmlns:sheet":"urn:oasis:names:tc:opendocument:sh33tjs:1.0","xmlns:rpt":"http://openoffice.org/2005/report","xmlns:of":"urn:oasis:names:tc:opendocument:xmlns:of:1.2","xmlns:xhtml":"http://www.w3.org/1999/xhtml","xmlns:grddl":"http://www.w3.org/2003/g/data-view#","xmlns:tableooo":"http://openoffice.org/2009/table","xmlns:drawooo":"http://openoffice.org/2010/draw","xmlns:calcext":"urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0","xmlns:loext":"urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0","xmlns:field":"urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0","xmlns:formx":"urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0","xmlns:css3t":"http://www.w3.org/TR/css3-text/","office:version":"1.2"});var s=Ot({"xmlns:config":"urn:oasis:names:tc:opendocument:xmlns:config:1.0","office:mimetype":"application/vnd.oasis.opendocument.spreadsheet"});if(r.bookType=="fods"){n.push("<office:document"+i+s+">\n");n.push(wi().replace(/<office:document-meta.*?>/,"").replace(/<\/office:document-meta>/,"")+"\n")}else n.push("<office:document-content"+i+">\n");var f=a(n,e);n.push("  <office:body>\n");n.push("    <office:spreadsheet>\n");if(((e.Workbook||{}).WBProps||{}).date1904)n.push('      <table:calculation-settings table:case-sensitive="false" table:search-criteria-must-apply-to-whole-cell="true" table:use-wildcards="true" table:use-regular-expressions="false" table:automatic-find-labels="false">\n        <table:null-date table:date-value="1904-01-01"/>\n      </table:calculation-settings>\n');for(var l=0;l!=e.SheetNames.length;++l)n.push(t(e.Sheets[e.SheetNames[l]],e,l,r,f,((e.Workbook||{}).WBProps||{}).date1904));if((e.Workbook||{}).Names)n.push(Wb(e.Workbook.Names,e.SheetNames,-1));n.push("    </office:spreadsheet>\n");n.push("  </office:body>\n");if(r.bookType=="fods")n.push("</office:document>");else n.push("</office:document-content>");return n.join("")}}();function Hb(e,r){if(r.bookType=="fods")return zb(e,r);var t=Xr();var a="";var n=[];var i=[];a="mimetype";Vr(t,a,"application/vnd.oasis.opendocument.spreadsheet");a="content.xml";Vr(t,a,zb(e,r));n.push([a,"text/xml"]);i.push([a,"ContentFile"]);a="styles.xml";Vr(t,a,Ub(e,r));n.push([a,"text/xml"]);i.push([a,"StylesFile"]);a="meta.xml";Vr(t,a,jr+wi());n.push([a,"text/xml"]);i.push([a,"MetadataFile"]);a="manifest.rdf";Vr(t,a,bi(i));n.push([a,"application/rdf+xml"]);a="META-INF/manifest.xml";Vr(t,a,pi(n));return t}var Vb=function(){try{if(typeof Uint8Array=="undefined")return"slice";if(typeof Uint8Array.prototype.subarray=="undefined")return"slice";if(typeof Buffer!=="undefined"){if(typeof Buffer.prototype.subarray=="undefined")return"slice";if((typeof Buffer.from=="function"?Buffer.from([72,62]):new Buffer([72,62]))instanceof Uint8Array)return"subarray";return"slice"}return"subarray"}catch(e){return"slice"}}();function Xb(e){return new DataView(e.buffer,e.byteOffset,e.byteLength);
}function Gb(e){return typeof TextDecoder!="undefined"?(new TextDecoder).decode(e):wt(N(e))}function $b(e){return typeof TextEncoder!="undefined"?(new TextEncoder).encode(e):R(kt(e))}function jb(e){var r=0;for(var t=0;t<e.length;++t)r+=e[t].length;var a=new Uint8Array(r);var n=0;for(t=0;t<e.length;++t){var i=e[t],s=i.length;if(s<250){for(var f=0;f<s;++f)a[n++]=i[f]}else{a.set(i,n);n+=s}}return a}function Kb(e){e-=e>>1&1431655765;e=(e&858993459)+(e>>2&858993459);return(e+(e>>4)&252645135)*16843009>>>24}function Yb(e,r){var t=(e[r+15]&127)<<7|e[r+14]>>1;var a=e[r+14]&1;for(var n=r+13;n>=r;--n)a=a*256+e[n];return(e[r+15]&128?-a:a)*Math.pow(10,t-6176)}function Zb(e,r,t){var a=Math.floor(t==0?0:Math.LOG10E*Math.log(Math.abs(t)))+6176-16;var n=t/Math.pow(10,a-6176);e[r+15]|=a>>7;e[r+14]|=(a&127)<<1;for(var i=0;n>=1;++i,n/=256)e[r+i]=n&255;e[r+15]|=t>=0?0:128}function Jb(e,r){var t=r.l;var a=e[t]&127;e:if(e[t++]>=128){a|=(e[t]&127)<<7;if(e[t++]<128)break e;a|=(e[t]&127)<<14;if(e[t++]<128)break e;a|=(e[t]&127)<<21;if(e[t++]<128)break e;a+=(e[t]&127)*Math.pow(2,28);++t;if(e[t++]<128)break e;a+=(e[t]&127)*Math.pow(2,35);++t;if(e[t++]<128)break e;a+=(e[t]&127)*Math.pow(2,42);++t;if(e[t++]<128)break e}r.l=t;return a}function qb(e){var r=new Uint8Array(7);r[0]=e&127;var t=1;e:if(e>127){r[t-1]|=128;r[t]=e>>7&127;++t;if(e<=16383)break e;r[t-1]|=128;r[t]=e>>14&127;++t;if(e<=2097151)break e;r[t-1]|=128;r[t]=e>>21&127;++t;if(e<=268435455)break e;r[t-1]|=128;r[t]=e/256>>>21&127;++t;if(e<=34359738367)break e;r[t-1]|=128;r[t]=e/65536>>>21&127;++t;if(e<=4398046511103)break e;r[t-1]|=128;r[t]=e/16777216>>>21&127;++t}return r[Vb](0,t)}function Qb(e){var r={l:0};var t=[];while(r.l<e.length)t.push(Jb(e,r));return t}function ew(e){return jb(e.map(function(e){return qb(e)}))}function rw(e){var r=0,t=e[r]&127;if(e[r++]<128)return t;t|=(e[r]&127)<<7;if(e[r++]<128)return t;t|=(e[r]&127)<<14;if(e[r++]<128)return t;t|=(e[r]&127)<<21;if(e[r++]<128)return t;t|=(e[r]&15)<<28;return t}function tw(e){var r=0,t=e[r]&127,a=0;e:if(e[r++]>=128){t|=(e[r]&127)<<7;if(e[r++]<128)break e;t|=(e[r]&127)<<14;if(e[r++]<128)break e;t|=(e[r]&127)<<21;if(e[r++]<128)break e;t|=(e[r]&127)<<28;a=e[r]>>4&7;if(e[r++]<128)break e;a|=(e[r]&127)<<3;if(e[r++]<128)break e;a|=(e[r]&127)<<10;if(e[r++]<128)break e;a|=(e[r]&127)<<17;if(e[r++]<128)break e;a|=(e[r]&127)<<24;if(e[r++]<128)break e;a|=(e[r]&127)<<31}return[t>>>0,a>>>0]}function aw(e){var r=[],t={l:0};while(t.l<e.length){var a=t.l;var n=Jb(e,t);var i=n&7;n=n/8|0;var s;var f=t.l;switch(i){case 0:{while(e[f++]>=128);s=e[Vb](t.l,f);t.l=f}break;case 1:{s=e[Vb](f,f+8);t.l=f+8}break;case 2:{var l=Jb(e,t);s=e[Vb](t.l,t.l+l);t.l+=l}break;case 5:{s=e[Vb](f,f+4);t.l=f+4}break;default:throw new Error("PB Type ".concat(i," for Field ").concat(n," at offset ").concat(a));}var o={data:s,type:i};if(r[n]==null)r[n]=[];r[n].push(o)}return r}function nw(e){var r=[];e.forEach(function(e,t){if(t==0)return;e.forEach(function(e){if(!e.data)return;r.push(qb(t*8+e.type));if(e.type==2)r.push(qb(e.data.length));r.push(e.data)})});return jb(r)}function iw(e,r){return(e==null?void 0:e.map(function(e){return r(e.data)}))||[]}function sw(e){var r;var t=[],a={l:0};while(a.l<e.length){var n=Jb(e,a);var i=aw(e[Vb](a.l,a.l+n));a.l+=n;var s={id:rw(i[1][0].data),messages:[]};i[2].forEach(function(r){var t=aw(r.data);var n=rw(t[3][0].data);s.messages.push({meta:t,data:e[Vb](a.l,a.l+n)});a.l+=n});if((r=i[3])==null?void 0:r[0])s.merge=rw(i[3][0].data)>>>0>0;t.push(s)}return t}function fw(e){var r=[];e.forEach(function(e){var t=[[],[{data:qb(e.id),type:0}],[]];if(e.merge!=null)t[3]=[{data:qb(+!!e.merge),type:0}];var a=[];e.messages.forEach(function(e){a.push(e.data);e.meta[3]=[{type:0,data:qb(e.data.length)}];t[2].push({data:nw(e.meta),type:2})});var n=nw(t);r.push(qb(n.length));r.push(n);a.forEach(function(e){return r.push(e)})});return jb(r)}function lw(e,r){if(e!=0)throw new Error("Unexpected Snappy chunk type ".concat(e));var t={l:0};var a=Jb(r,t);var n=[];var i=t.l;while(i<r.length){var s=r[i]&3;if(s==0){var f=r[i++]>>2;if(f<60)++f;else{var l=f-59;f=r[i];if(l>1)f|=r[i+1]<<8;if(l>2)f|=r[i+2]<<16;if(l>3)f|=r[i+3]<<24;f>>>=0;f++;i+=l}n.push(r[Vb](i,i+f));i+=f;continue}else{var o=0,c=0;if(s==1){c=(r[i]>>2&7)+4;o=(r[i++]&224)<<3;o|=r[i++]}else{c=(r[i++]>>2)+1;if(s==2){o=r[i]|r[i+1]<<8;i+=2}else{o=(r[i]|r[i+1]<<8|r[i+2]<<16|r[i+3]<<24)>>>0;i+=4}}if(o==0)throw new Error("Invalid offset 0");var h=n.length-1,u=o;while(h>=0&&u>=n[h].length){u-=n[h].length;--h}if(h<0){if(u==0)u=n[h=0].length;else throw new Error("Invalid offset beyond length")}if(c<u)n.push(n[h][Vb](n[h].length-u,n[h].length-u+c));else{if(u>0){n.push(n[h][Vb](n[h].length-u));c-=u}++h;while(c>=n[h].length){n.push(n[h]);c-=n[h].length;++h}if(c)n.push(n[h][Vb](0,c))}if(n.length>25)n=[jb(n)]}}var d=0;for(var v=0;v<n.length;++v)d+=n[v].length;if(d!=a)throw new Error("Unexpected length: ".concat(d," != ").concat(a));return n}function ow(e){if(Array.isArray(e))e=new Uint8Array(e);var r=[];var t=0;while(t<e.length){var a=e[t++];var n=e[t]|e[t+1]<<8|e[t+2]<<16;t+=3;r.push.apply(r,lw(a,e[Vb](t,t+n)));t+=n}if(t!==e.length)throw new Error("data is not a valid framed stream!");return r.length==1?r[0]:jb(r)}function cw(e){var r=[];var t=0;while(t<e.length){var a=Math.min(e.length-t,268435455);var n=new Uint8Array(4);r.push(n);var i=qb(a);var s=i.length;r.push(i);if(a<=60){s++;r.push(new Uint8Array([a-1<<2]))}else if(a<=256){s+=2;r.push(new Uint8Array([240,a-1&255]))}else if(a<=65536){s+=3;r.push(new Uint8Array([244,a-1&255,a-1>>8&255]))}else if(a<=16777216){s+=4;r.push(new Uint8Array([248,a-1&255,a-1>>8&255,a-1>>16&255]))}else if(a<=4294967296){s+=5;r.push(new Uint8Array([252,a-1&255,a-1>>8&255,a-1>>16&255,a-1>>>24&255]))}r.push(e[Vb](t,t+a));s+=a;n[0]=0;n[1]=s&255;n[2]=s>>8&255;n[3]=s>>16&255;t+=a}return jb(r)}var hw=function(){return{sst:[],rsst:[],ofmt:[],nfmt:[],fmla:[],ferr:[],cmnt:[]}};function uw(e,r,t,a,n){var i,s,f,l;var o=r&255,c=r>>8;var h=c>=5?n:a;e:if(t&(c>4?8:4)&&e.t=="n"&&o==7){var u=((i=h[7])==null?void 0:i[0])?rw(h[7][0].data):-1;if(u==-1)break e;var d=((s=h[15])==null?void 0:s[0])?rw(h[15][0].data):-1;var v=((f=h[16])==null?void 0:f[0])?rw(h[16][0].data):-1;var p=((l=h[40])==null?void 0:l[0])?rw(h[40][0].data):-1;var m=e.v,g=m;r:if(p){if(m==0){d=v=2;break r}if(m>=604800)d=1;else if(m>=86400)d=2;else if(m>=3600)d=4;else if(m>=60)d=8;else if(m>=1)d=16;else d=32;if(Math.floor(m)!=m)v=32;else if(m%60)v=16;else if(m%3600)v=8;else if(m%86400)v=4;else if(m%604800)v=2;if(v<d)v=d}if(d==-1||v==-1)break e;var b=[],w=[];if(d==1){g=m/604800;if(v==1){w.push('d"d"')}else{g|=0;m-=604800*g}b.push(g+(u==2?" week"+(g==1?"":"s"):u==1?"w":""))}if(d<=2&&v>=2){g=m/86400;if(v>2){g|=0;m-=86400*g}w.push('d"d"');b.push(g+(u==2?" day"+(g==1?"":"s"):u==1?"d":""))}if(d<=4&&v>=4){g=m/3600;if(v>4){g|=0;m-=3600*g}w.push((d>=4?"[h]":"h")+'"h"');b.push(g+(u==2?" hour"+(g==1?"":"s"):u==1?"h":""))}if(d<=8&&v>=8){g=m/60;if(v>8){g|=0;m-=60*g}w.push((d>=8?"[m]":"m")+'"m"');if(u==0)b.push((d==8&&v==8||g>=10?"":"0")+g);else b.push(g+(u==2?" minute"+(g==1?"":"s"):u==1?"m":""))}if(d<=16&&v>=16){g=m;if(v>16){g|=0;m-=g}w.push((d>=16?"[s]":"s")+'"s"');if(u==0)b.push((v==16&&d==16||g>=10?"":"0")+g);else b.push(g+(u==2?" second"+(g==1?"":"s"):u==1?"s":""))}if(v>=32){g=Math.round(1e3*m);if(d<32)w.push('.000"ms"');if(u==0)b.push((g>=100?"":g>=10?"0":"00")+g);else b.push(g+(u==2?" millisecond"+(g==1?"":"s"):u==1?"ms":""))}e.w=b.join(u==0?":":" ");e.z=w.join(u==0?'":"':" ");if(u==0)e.w=e.w.replace(/:(\d\d\d)$/,".$1")}}function dw(e,r,t,a){var n=Xb(e);var i=n.getUint32(4,true);var s=-1,f=-1,l=-1,o=NaN,c=0,h=new Date(Date.UTC(2001,0,1));var u=t>1?12:8;if(i&2){l=n.getUint32(u,true);u+=4}u+=Kb(i&(t>1?3468:396))*4;if(i&512){s=n.getUint32(u,true);u+=4}u+=Kb(i&(t>1?12288:4096))*4;if(i&16){f=n.getUint32(u,true);u+=4}if(i&32){o=n.getFloat64(u,true);u+=8}if(i&64){h.setTime(h.getTime()+(c=n.getFloat64(u,true))*1e3);u+=8}if(t>1){i=n.getUint32(8,true)>>>16;if(i&255){if(l==-1)l=n.getUint32(u,true);u+=4}}var d;var v=e[t>=4?1:2];switch(v){case 0:return void 0;case 2:d={t:"n",v:o};break;case 3:d={t:"s",v:r.sst[f]};break;case 5:{if(a==null?void 0:a.cellDates)d={t:"d",v:h};else d={t:"n",v:c/86400+35430,z:q[14]}}break;case 6:d={t:"b",v:o>0};break;case 7:d={t:"n",v:o};break;case 8:d={t:"e",v:0};break;case 9:{if(s>-1){var p=r.rsst[s];d={t:"s",v:p.v};if(p.l)d.l={Target:p.l}}else throw new Error("Unsupported cell type ".concat(e[Vb](0,4)))}break;default:throw new Error("Unsupported cell type ".concat(e[Vb](0,4)));}if(l>-1)uw(d,v|t<<8,i,r.ofmt[l],r.nfmt[l]);if(v==7)d.v/=86400;return d}function vw(e,r,t){var a=Xb(e);var n=a.getUint32(4,true);var i=a.getUint32(8,true);var s=12;var f=-1,l=-1,o=-1,c=NaN,h=NaN,u=0,d=new Date(Date.UTC(2001,0,1)),v=-1,p=-1;if(i&1){c=Yb(e,s);s+=16}if(i&2){h=a.getFloat64(s,true);s+=8}if(i&4){d.setTime(d.getTime()+(u=a.getFloat64(s,true))*1e3);s+=8}if(i&8){l=a.getUint32(s,true);s+=4}if(i&16){f=a.getUint32(s,true);s+=4}s+=Kb(i&480)*4;if(i&512){p=a.getUint32(s,true);s+=4}s+=Kb(i&1024)*4;if(i&2048){v=a.getUint32(s,true);s+=4}var m;var g=e[1];switch(g){case 0:m={t:"z"};break;case 2:m={t:"n",v:c};break;case 3:m={t:"s",v:r.sst[l]};break;case 5:{if(t==null?void 0:t.cellDates)m={t:"d",v:d};else m={t:"n",v:u/86400+35430,z:q[14]}}break;case 6:m={t:"b",v:h>0};break;case 7:m={t:"n",v:h};break;case 8:m={t:"e",v:0};break;case 9:{if(f>-1){var b=r.rsst[f];m={t:"s",v:b.v};if(b.l)m.l={Target:b.l}}else throw new Error("Unsupported cell type ".concat(e[1]," : ").concat(i&31," : ").concat(e[Vb](0,4)))}break;case 10:m={t:"n",v:c};break;default:throw new Error("Unsupported cell type ".concat(e[1]," : ").concat(i&31," : ").concat(e[Vb](0,4)));}s+=Kb(i&4096)*4;if(i&516096){if(o==-1)o=a.getUint32(s,true);s+=4}if(i&524288){var w=a.getUint32(s,true);s+=4;if(r.cmnt[w])m.c=_w(r.cmnt[w])}if(o>-1)uw(m,g|5<<8,i>>13,r.ofmt[o],r.nfmt[o]);if(g==7)m.v/=86400;return m}function pw(e,r){var t=new Uint8Array(32),a=Xb(t),n=12,i=0;t[0]=5;switch(e.t){case"n":if(e.z&&Pe(e.z)){t[1]=5;a.setFloat64(n,(dr(e.v+1462).getTime()-Date.UTC(2001,0,1))/1e3,true);i|=4;n+=8;break}else{t[1]=2;Zb(t,n,e.v);i|=1;n+=16}break;case"b":t[1]=6;a.setFloat64(n,e.v?1:0,true);i|=2;n+=8;break;case"s":{var s=e.v==null?"":String(e.v);if(e.l){var f=r.rsst.findIndex(function(r){var t;return r.v==s&&r.l==((t=e.l)==null?void 0:t.Target)});if(f==-1)r.rsst[f=r.rsst.length]={v:s,l:e.l.Target};t[1]=9;a.setUint32(n,f,true);i|=16;n+=4}else{var l=r.sst.indexOf(s);if(l==-1)r.sst[l=r.sst.length]=s;t[1]=3;a.setUint32(n,l,true);i|=8;n+=4}}break;case"d":t[1]=5;a.setFloat64(n,(e.v.getTime()-Date.UTC(2001,0,1))/1e3,true);i|=4;n+=8;break;case"z":t[1]=0;break;default:throw"unsupported cell type "+e.t;}if(e.c){r.cmnt.push(Sw(e.c));a.setUint32(n,r.cmnt.length-1,true);i|=524288;n+=4}a.setUint32(8,i,true);return t[Vb](0,n)}function mw(e,r){var t=new Uint8Array(32),a=Xb(t),n=12,i=0,s="";t[0]=4;switch(e.t){case"n":break;case"b":break;case"s":{s=e.v==null?"":String(e.v);if(e.l){var f=r.rsst.findIndex(function(r){var t;return r.v==s&&r.l==((t=e.l)==null?void 0:t.Target)});if(f==-1)r.rsst[f=r.rsst.length]={v:s,l:e.l.Target};t[1]=9;a.setUint32(n,f,true);i|=512;n+=4}else{}}break;case"d":break;case"e":break;case"z":break;default:throw"unsupported cell type "+e.t;}if(e.c){a.setUint32(n,r.cmnt.length-1,true);i|=4096;n+=4}switch(e.t){case"n":t[1]=2;a.setFloat64(n,e.v,true);i|=32;n+=8;break;case"b":t[1]=6;a.setFloat64(n,e.v?1:0,true);i|=32;n+=8;break;case"s":{s=e.v==null?"":String(e.v);if(e.l){}else{var l=r.sst.indexOf(s);if(l==-1)r.sst[l=r.sst.length]=s;t[1]=3;a.setUint32(n,l,true);i|=16;n+=4}}break;case"d":t[1]=5;a.setFloat64(n,(e.v.getTime()-Date.UTC(2001,0,1))/1e3,true);i|=64;n+=8;break;case"z":t[1]=0;break;default:throw"unsupported cell type "+e.t;}a.setUint32(8,i,true);return t[Vb](0,n)}function gw(e,r,t){switch(e[0]){case 0:;case 1:;case 2:;case 3:;case 4:return dw(e,r,e[0],t);case 5:return vw(e,r,t);default:throw new Error("Unsupported payload version ".concat(e[0]));}}function bw(e){var r=aw(e);return rw(r[1][0].data)}function ww(e){return nw([[],[{type:0,data:qb(e)}]])}function kw(e,r){var t;var a=((t=e.messages[0].meta[5])==null?void 0:t[0])?Qb(e.messages[0].meta[5][0].data):[];var n=a.indexOf(r);if(n==-1){a.push(r);e.messages[0].meta[5]=[{type:2,data:ew(a)}]}}function Tw(e,r){var t;var a=((t=e.messages[0].meta[5])==null?void 0:t[0])?Qb(e.messages[0].meta[5][0].data):[];e.messages[0].meta[5]=[{type:2,data:ew(a.filter(function(e){return e!=r}))}]}function Aw(e,r){var t=aw(r.data);var a=rw(t[1][0].data);var n=t[3];var i=[];(n||[]).forEach(function(r){var t,n;var s=aw(r.data);if(!s[1])return;var f=rw(s[1][0].data)>>>0;switch(a){case 1:i[f]=Gb(s[3][0].data);break;case 8:{var l=e[bw(s[9][0].data)][0];var o=aw(l.data);var c=e[bw(o[1][0].data)][0];var h=rw(c.meta[1][0].data);if(h!=2001)throw new Error("2000 unexpected reference to ".concat(h));var u=aw(c.data);var d={v:u[3].map(function(e){return Gb(e.data)}).join("")};i[f]=d;e:if((t=u==null?void 0:u[11])==null?void 0:t[0]){var v=(n=aw(u[11][0].data))==null?void 0:n[1];if(!v)break e;v.forEach(function(r){var t,a,n;var i=aw(r.data);if((t=i[2])==null?void 0:t[0]){var s=e[bw((a=i[2])==null?void 0:a[0].data)][0];var f=rw(s.meta[1][0].data);switch(f){case 2032:var l=aw(s.data);if(((n=l==null?void 0:l[2])==null?void 0:n[0])&&!d.l)d.l=Gb(l[2][0].data);break;case 2039:break;default:console.log("unrecognized ObjectAttribute type ".concat(f));}}})}}break;case 2:i[f]=aw(s[6][0].data);break;case 3:i[f]=aw(s[5][0].data);break;case 10:{var p=e[bw(s[10][0].data)][0];i[f]=Cw(e,p.data)}break;default:throw a;}});return i}function yw(e,r){var t,a,n,i,s,f,l,o,c,h,u,d,v,p;var m=aw(e);var g=rw(m[1][0].data)>>>0;var b=rw(m[2][0].data)>>>0;var w=((a=(t=m[8])==null?void 0:t[0])==null?void 0:a.data)&&rw(m[8][0].data)>0||false;var k,T;if(((i=(n=m[7])==null?void 0:n[0])==null?void 0:i.data)&&r!=0){k=(f=(s=m[7])==null?void 0:s[0])==null?void 0:f.data;T=(o=(l=m[6])==null?void 0:l[0])==null?void 0:o.data}else if(((h=(c=m[4])==null?void 0:c[0])==null?void 0:h.data)&&r!=1){k=(d=(u=m[4])==null?void 0:u[0])==null?void 0:d.data;T=(p=(v=m[3])==null?void 0:v[0])==null?void 0:p.data}else throw"NUMBERS Tile missing ".concat(r," cell storage");var A=w?4:1;var y=Xb(k);var E=[];for(var C=0;C<k.length/2;++C){var _=y.getUint16(C*2,true);if(_<65535)E.push([C,_])}if(E.length!=b)throw"Expected ".concat(b," cells, found ").concat(E.length);var S=[];for(C=0;C<E.length-1;++C)S[E[C][0]]=T[Vb](E[C][1]*A,E[C+1][1]*A);if(E.length>=1)S[E[E.length-1][0]]=T[Vb](E[E.length-1][1]*A);return{R:g,cells:S}}function Ew(e,r){var t;var a=aw(r.data);var n=-1;if((t=a==null?void 0:a[7])==null?void 0:t[0]){if(rw(a[7][0].data)>>>0)n=1;else n=0}var i=iw(a[5],function(e){return yw(e,n)});return{nrows:rw(a[4][0].data)>>>0,data:i.reduce(function(e,r){if(!e[r.R])e[r.R]=[];r.cells.forEach(function(t,a){if(e[r.R][a])throw new Error("Duplicate cell r=".concat(r.R," c=").concat(a));e[r.R][a]=t});return e},[])}}function Cw(e,r){var t,a,n,i,s,f,l,o,c,h;var u={t:"",a:""};var d=aw(r);if((a=(t=d==null?void 0:d[1])==null?void 0:t[0])==null?void 0:a.data)u.t=Gb((i=(n=d==null?void 0:d[1])==null?void 0:n[0])==null?void 0:i.data)||"";if((f=(s=d==null?void 0:d[3])==null?void 0:s[0])==null?void 0:f.data){var v=e[bw((o=(l=d==null?void 0:d[3])==null?void 0:l[0])==null?void 0:o.data)][0];var p=aw(v.data);if((h=(c=p[1])==null?void 0:c[0])==null?void 0:h.data)u.a=Gb(p[1][0].data)}if(d==null?void 0:d[4]){u.replies=[];d[4].forEach(function(r){var t=e[bw(r.data)][0];u.replies.push(Cw(e,t.data))})}return u}function _w(e){var r=[];r.push({t:e.t||"",a:e.a,T:e.replies&&e.replies.length>0});if(e.replies)e.replies.forEach(function(e){r.push({t:e.t||"",a:e.a,T:true})});return r}function Sw(e){var r={a:"",t:"",replies:[]};for(var t=0;t<e.length;++t){if(t==0){r.a=e[t].a;r.t=e[t].t}else{r.replies.push({a:e[t].a,t:e[t].t})}}return r}function xw(e,r,t,a){var n,i,s,f,l,o,c,h,u;var d=aw(r.data);var v={s:{r:0,c:0},e:{r:0,c:0}};v.e.r=(rw(d[6][0].data)>>>0)-1;if(v.e.r<0)throw new Error("Invalid row varint ".concat(d[6][0].data));v.e.c=(rw(d[7][0].data)>>>0)-1;if(v.e.c<0)throw new Error("Invalid col varint ".concat(d[7][0].data));t["!ref"]=Ha(v);var p=t["!data"]!=null,m=t;var g=aw(d[4][0].data);var b=hw();if((n=g[4])==null?void 0:n[0])b.sst=Aw(e,e[bw(g[4][0].data)][0]);if((i=g[6])==null?void 0:i[0])b.fmla=Aw(e,e[bw(g[6][0].data)][0]);if((s=g[11])==null?void 0:s[0])b.ofmt=Aw(e,e[bw(g[11][0].data)][0]);if((f=g[12])==null?void 0:f[0])b.ferr=Aw(e,e[bw(g[12][0].data)][0]);if((l=g[17])==null?void 0:l[0])b.rsst=Aw(e,e[bw(g[17][0].data)][0]);if((o=g[19])==null?void 0:o[0])b.cmnt=Aw(e,e[bw(g[19][0].data)][0]);if((c=g[22])==null?void 0:c[0])b.nfmt=Aw(e,e[bw(g[22][0].data)][0]);var w=aw(g[3][0].data);var k=0;w[1].forEach(function(r){var n=aw(r.data);var i=e[bw(n[2][0].data)][0];var s=rw(i.meta[1][0].data);if(s!=6002)throw new Error("6001 unexpected reference to ".concat(s));var f=Ew(e,i);f.data.forEach(function(e,r){e.forEach(function(e,n){var i=gw(e,b,a);if(i){if(p){if(!m["!data"][k+r])m["!data"][k+r]=[];m["!data"][k+r][n]=i}else{t[Pa(n)+Ia(k+r)]=i}}})});k+=f.nrows});if((h=g[13])==null?void 0:h[0]){var T=e[bw(g[13][0].data)][0];var A=rw(T.meta[1][0].data);if(A!=6144)throw new Error("Expected merge type 6144, found ".concat(A));t["!merges"]=(u=aw(T.data))==null?void 0:u[1].map(function(e){var r=aw(e.data);var t=Xb(aw(r[1][0].data)[1][0].data),a=Xb(aw(r[2][0].data)[1][0].data);return{s:{r:t.getUint16(0,true),c:t.getUint16(2,true)},e:{r:t.getUint16(0,true)+a.getUint16(0,true)-1,c:t.getUint16(2,true)+a.getUint16(2,true)-1}}})}}function Ow(e,r,t){var a=aw(r.data);var n={"!ref":"A1"};if(t==null?void 0:t.dense)n["!data"]=[];var i=e[bw(a[2][0].data)];var s=rw(i[0].meta[1][0].data);if(s!=6001)throw new Error("6000 unexpected reference to ".concat(s));xw(e,i[0],n,t);return n}function Rw(e,r,t){var a;var n=aw(r.data);var i={name:((a=n[1])==null?void 0:a[0])?Gb(n[1][0].data):"",sheets:[]};var s=iw(n[2],bw);s.forEach(function(r){e[r].forEach(function(r){var a=rw(r.meta[1][0].data);if(a==6e3)i.sheets.push(Ow(e,r,t))})});return i}function Iw(e,r,t){var a;var n=Xk();n.Workbook={WBProps:{date1904:true}};var i=aw(r.data);if((a=i[2])==null?void 0:a[0])throw new Error("Keynote presentations are not supported");var s=iw(i[1],bw);s.forEach(function(r){e[r].forEach(function(r){var a=rw(r.meta[1][0].data);if(a==2){var i=Rw(e,r,t);i.sheets.forEach(function(e,r){Gk(n,e,r==0?i.name:i.name+"_"+r,true)})}})});if(n.SheetNames.length==0)throw new Error("Empty NUMBERS file");n.bookType="numbers";return n}function Nw(e,r){var t,a,n,i,s,f,l;var o={},c=[];e.FullPaths.forEach(function(e){if(e.match(/\.iwpv2/))throw new Error("Unsupported password protection")});e.FileIndex.forEach(function(e){if(!e.name.match(/\.iwa$/))return;if(e.content[0]!=0)return;var r;try{r=ow(e.content)}catch(t){return console.log("?? "+e.content.length+" "+(t.message||t))}var a;try{a=sw(r)}catch(t){return console.log("## "+(t.message||t))}a.forEach(function(e){o[e.id]=e.messages;c.push(e.id)})});if(!c.length)throw new Error("File has no messages");if(((n=(a=(t=o==null?void 0:o[1])==null?void 0:t[0].meta)==null?void 0:a[1])==null?void 0:n[0].data)&&rw(o[1][0].meta[1][0].data)==1e4)throw new Error("Pages documents are not supported");var h=((l=(f=(s=(i=o==null?void 0:o[1])==null?void 0:i[0])==null?void 0:s.meta)==null?void 0:f[1])==null?void 0:l[0].data)&&rw(o[1][0].meta[1][0].data)==1&&o[1][0];if(!h)c.forEach(function(e){o[e].forEach(function(e){var r=rw(e.meta[1][0].data)>>>0;if(r==1){if(!h)h=e;else throw new Error("Document has multiple roots")}})});if(!h)throw new Error("Cannot find Document root");return Iw(o,h,r)}function Fw(e,r,t){var a,n,i;var s=[[],[{type:0,data:qb(0)}],[{type:0,data:qb(0)}],[{type:2,data:new Uint8Array([])}],[{type:2,data:new Uint8Array(Array.from({length:510},function(){return 255}))}],[{type:0,data:qb(5)}],[{type:2,data:new Uint8Array([])}],[{type:2,data:new Uint8Array(Array.from({length:510},function(){return 255}))}],[{type:0,data:qb(1)}]];if(!((a=s[6])==null?void 0:a[0])||!((n=s[7])==null?void 0:n[0]))throw"Mutation only works on post-BNC storages!";var f=0;if(s[7][0].data.length<2*e.length){var l=new Uint8Array(2*e.length);l.set(s[7][0].data);s[7][0].data=l}if(s[4][0].data.length<2*e.length){var o=new Uint8Array(2*e.length);o.set(s[4][0].data);s[4][0].data=o}var c=Xb(s[7][0].data),h=0,u=[];var d=Xb(s[4][0].data),v=0,p=[];var m=t?4:1;for(var g=0;g<e.length;++g){if(e[g]==null||e[g].t=="z"&&!((i=e[g].c)==null?void 0:i.length)||e[g].t=="e"){c.setUint16(g*2,65535,true);d.setUint16(g*2,65535);continue}c.setUint16(g*2,h/m,true);d.setUint16(g*2,v/m,true);var b,w;switch(e[g].t){case"d":if(e[g].v instanceof Date){b=pw(e[g],r);w=mw(e[g],r);break}b=pw(e[g],r);w=mw(e[g],r);break;case"s":;case"n":;case"b":;case"z":b=pw(e[g],r);w=mw(e[g],r);break;default:throw new Error("Unsupported value "+e[g]);}u.push(b);h+=b.length;{p.push(w);v+=w.length}++f}s[2][0].data=qb(f);s[5][0].data=qb(5);for(;g<s[7][0].data.length/2;++g){c.setUint16(g*2,65535,true);d.setUint16(g*2,65535,true)}s[6][0].data=jb(u);s[3][0].data=jb(p);s[8]=[{type:0,data:qb(t?1:0)}];return s}function Dw(e,r){return{meta:[[],[{type:0,data:qb(e)}]],data:r}}function Pw(e,r){if(!r.last)r.last=927262;for(var t=r.last;t<2e6;++t)if(!r[t]){r[r.last=t]=e;return t}throw new Error("Too many messages")}function Lw(e){var r={};var t=[];e.FileIndex.map(function(r,t){return[r,e.FullPaths[t]]}).forEach(function(e){var a=e[0],n=e[1];if(a.type!=2)return;if(!a.name.match(/\.iwa/))return;if(a.content[0]!=0)return;sw(ow(a.content)).forEach(function(e){t.push(e.id);r[e.id]={deps:[],location:n,type:rw(e.messages[0].meta[1][0].data)}})});e.FileIndex.forEach(function(e){if(!e.name.match(/\.iwa/))return;if(e.content[0]!=0)return;sw(ow(e.content)).forEach(function(e){e.messages.forEach(function(t){[5,6].forEach(function(a){if(!t.meta[a])return;t.meta[a].forEach(function(t){r[e.id].deps.push(rw(t.data))})})})})});return r}function Mw(e,r,t){return nw([[],[{type:0,data:qb(1)}],[],[{type:5,data:new Uint8Array(Float32Array.from([e/255]).buffer)}],[{type:5,data:new Uint8Array(Float32Array.from([r/255]).buffer)}],[{type:5,data:new Uint8Array(Float32Array.from([t/255]).buffer)}],[{type:5,data:new Uint8Array(Float32Array.from([1]).buffer)}],[],[],[],[],[],[{type:0,data:qb(1)}]])}function Uw(e){switch(e){case 0:return Mw(99,222,171);case 1:return Mw(162,197,240);case 2:return Mw(255,189,189);}return Mw(Math.random()*255,Math.random()*255,Math.random()*255)}function Bw(e,r){if(!r||!r.numbers)throw new Error("Must pass a `numbers` option -- check the README");var t=qe.read(r.numbers,{type:"base64"});var a=Lw(t);var n=zw(t,a,1);if(n==null)throw"Could not find message ".concat(1," in Numbers template");var i=iw(aw(n.messages[0].data)[1],bw);if(i.length>1)throw new Error("Template NUMBERS file must have exactly one sheet");e.SheetNames.forEach(function(r,s){if(s>=1){$w(t,a,s+1);n=zw(t,a,1);i=iw(aw(n.messages[0].data)[1],bw)}jw(t,a,e.Sheets[r],r,s,i[s])});return t}function Ww(e,r,t,a){var n=qe.find(e,r[t].location);if(!n)throw"Could not find ".concat(r[t].location," in Numbers template");var i=sw(ow(n.content));var s=i.find(function(e){return e.id==t});a(s,i);n.content=cw(fw(i));n.size=n.content.length}function zw(e,r,t){var a=qe.find(e,r[t].location);if(!a)throw"Could not find ".concat(r[t].location," in Numbers template");var n=sw(ow(a.content));var i=n.find(function(e){return e.id==t});return i}function Hw(e,r,t){e[3].push({type:2,data:nw([[],[{type:0,data:qb(r)}],[{type:2,data:$b(t.replace(/-.*$/,""))}],[{type:2,data:$b(t)}],[{type:2,data:new Uint8Array([2,0,0])}],[{type:2,data:new Uint8Array([2,0,0])}],[],[],[],[],[{type:0,data:qb(0)}],[],[{type:0,data:qb(0)}]])});e[1]=[{type:0,data:qb(Math.max(r+1,rw(e[1][0].data)))}]}function Vw(e,r,t,a,n,i){if(!i)i=Pw({deps:[],location:"",type:r},n);var s="".concat(a,"-").concat(i,".iwa");n[i].location="Root Entry"+s;qe.utils.cfb_add(e,s,cw(fw([{id:i,messages:[Dw(r,nw(t))]}])));var f=s.replace(/^[\/]/,"").replace(/^Index\//,"").replace(/\.iwa$/,"");Ww(e,n,2,function(e){var r=aw(e.messages[0].data);Hw(r,i||0,f);e.messages[0].data=nw(r)});return i}function Xw(e,r,t,a){var n=r[t].location.replace(/^Root Entry\//,"").replace(/^Index\//,"").replace(/\.iwa$/,"");var i=e[3].findIndex(function(e){var r,t;var a=aw(e.data);if((r=a[3])==null?void 0:r[0])return Gb(a[3][0].data)==n;if(((t=a[2])==null?void 0:t[0])&&Gb(a[2][0].data)==n)return true;return false});var s=aw(e[3][i].data);if(!s[6])s[6]=[];(Array.isArray(a)?a:[a]).forEach(function(e){s[6].push({type:2,data:nw([[],[{type:0,data:qb(e)}]])})});e[3][i].data=nw(s)}function Gw(e,r,t,a){var n=r[t].location.replace(/^Root Entry\//,"").replace(/^Index\//,"").replace(/\.iwa$/,"");var i=e[3].findIndex(function(e){var r,t;var a=aw(e.data);if((r=a[3])==null?void 0:r[0])return Gb(a[3][0].data)==n;if(((t=a[2])==null?void 0:t[0])&&Gb(a[2][0].data)==n)return true;return false});var s=aw(e[3][i].data);if(!s[6])s[6]=[];s[6]=s[6].filter(function(e){return rw(aw(e.data)[1][0].data)!=a});e[3][i].data=nw(s)}function $w(e,r,t){var a=-1,n=-1;var i={};Ww(e,r,1,function(t,s){var f=aw(t.messages[0].data);a=bw(aw(t.messages[0].data)[1][0].data);n=Pw({deps:[1],location:r[a].location,type:2},r);i[a]=n;kw(t,n);f[1].push({type:2,data:ww(n)});var l=zw(e,r,a);l.id=n;if(r[1].location==r[n].location)s.push(l);else Ww(e,r,n,function(e,r){return r.push(l)});t.messages[0].data=nw(f)});var s=-1;Ww(e,r,n,function(t,a){var f=aw(t.messages[0].data);for(var l=3;l<=69;++l)delete f[l];var o=iw(f[2],bw);o.forEach(function(e){return Tw(t,e)});s=Pw({deps:[n],location:r[o[0]].location,type:r[o[0]].type},r);kw(t,s);i[o[0]]=s;f[2]=[{type:2,data:ww(s)}];var c=zw(e,r,o[0]);c.id=s;if(r[o[0]].location==r[n].location)a.push(c);else{Ww(e,r,2,function(e){var t=aw(e.messages[0].data);Xw(t,r,n,s);e.messages[0].data=nw(t)});Ww(e,r,s,function(e,r){return r.push(c)})}t.messages[0].data=nw(f)});var f=-1;Ww(e,r,s,function(t,a){var n=aw(t.messages[0].data);var l=aw(n[1][0].data);for(var o=3;o<=69;++o)delete l[o];var c=bw(l[2][0].data);l[2][0].data=ww(i[c]);n[1][0].data=nw(l);var h=bw(n[2][0].data);Tw(t,h);f=Pw({deps:[s],location:r[h].location,type:r[h].type},r);kw(t,f);i[h]=f;n[2][0].data=ww(f);var u=zw(e,r,h);u.id=f;if(r[s].location==r[f].location)a.push(u);else Ww(e,r,f,function(e,r){return r.push(u)});t.messages[0].data=nw(n)});Ww(e,r,f,function(a,n){var s,l;var o=aw(a.messages[0].data);var c=Gb(o[1][0].data),h=c.replace(/-[A-Z0-9]*/,"-".concat(("0000"+t.toString(16)).slice(-4)));o[1][0].data=$b(h);[12,13,29,31,32,33,39,44,47,81,82,84].forEach(function(e){return delete o[e]});if(o[45]){var u=aw(o[45][0].data);var d=bw(u[1][0].data);Tw(a,d);delete o[45]}if(o[70]){var v=aw(o[70][0].data);(s=v[2])==null?void 0:s.forEach(function(e){var r=aw(e.data);[2,3].map(function(e){return r[e][0]}).forEach(function(e){var r=aw(e.data);if(!r[8])return;var t=bw(r[8][0].data);Tw(a,t)})});delete o[70]}[46,30,34,35,36,38,48,49,60,61,62,63,64,71,72,73,74,75,85,86,87,88,89].forEach(function(e){if(!o[e])return;var r=bw(o[e][0].data);delete o[e];Tw(a,r)});var p=aw(o[4][0].data);{[2,4,5,6,11,12,13,15,16,17,18,19,20,21,22].forEach(function(t){var s;if(!((s=p[t])==null?void 0:s[0]))return;var l=bw(p[t][0].data);var o=Pw({deps:[f],location:r[l].location,type:r[l].type},r);Tw(a,l);kw(a,o);i[l]=o;var c=zw(e,r,l);c.id=o;if(r[l].location==r[f].location)n.push(c);else{r[o].location=r[l].location.replace(l.toString(),o.toString());if(r[o].location==r[l].location)r[o].location=r[o].location.replace(/\.iwa/,"-".concat(o,".iwa"));qe.utils.cfb_add(e,r[o].location,cw(fw([c])));var h=r[o].location.replace(/^Root Entry\//,"").replace(/^Index\//,"").replace(/\.iwa$/,"");Ww(e,r,2,function(e){var t=aw(e.messages[0].data);Hw(t,o,h);Xw(t,r,f,o);e.messages[0].data=nw(t)})}p[t][0].data=ww(o)});var m=aw(p[1][0].data);{(l=m[2])==null?void 0:l.forEach(function(t){var s=bw(t.data);var l=Pw({deps:[f],location:r[s].location,type:r[s].type},r);Tw(a,s);kw(a,l);i[s]=l;var o=zw(e,r,s);o.id=l;if(r[s].location==r[f].location){n.push(o)}else{r[l].location=r[s].location.replace(s.toString(),l.toString());if(r[l].location==r[s].location)r[l].location=r[l].location.replace(/\.iwa/,"-".concat(l,".iwa"));qe.utils.cfb_add(e,r[l].location,cw(fw([o])));var c=r[l].location.replace(/^Root Entry\//,"").replace(/^Index\//,"").replace(/\.iwa$/,"");Ww(e,r,2,function(e){var t=aw(e.messages[0].data);Hw(t,l,c);Xw(t,r,f,l);e.messages[0].data=nw(t)})}t.data=ww(l)})}p[1][0].data=nw(m);var g=aw(p[3][0].data);{g[1].forEach(function(t){var n=aw(t.data);var s=bw(n[2][0].data);var l=i[s];if(!i[s]){l=Pw({deps:[f],location:"",type:r[s].type},r);r[l].location="Root Entry/Index/Tables/Tile-".concat(l,".iwa");i[s]=l;var o=zw(e,r,s);o.id=l;Tw(a,s);kw(a,l);qe.utils.cfb_add(e,"/Index/Tables/Tile-".concat(l,".iwa"),cw(fw([o])));Ww(e,r,2,function(e){var t=aw(e.messages[0].data);t[3].push({type:2,data:nw([[],[{type:0,data:qb(l)}],[{type:2,data:$b("Tables/Tile")}],[{type:2,data:$b("Tables/Tile-".concat(l))}],[{type:2,data:new Uint8Array([2,0,0])}],[{type:2,data:new Uint8Array([2,0,0])}],[],[],[],[],[{type:0,data:qb(0)}],[],[{type:0,data:qb(0)}]])});t[1]=[{type:0,data:qb(Math.max(l+1,rw(t[1][0].data)))}];Xw(t,r,f,l);e.messages[0].data=nw(t)})}n[2][0].data=ww(l);t.data=nw(n)})}p[3][0].data=nw(g)}o[4][0].data=nw(p);a.messages[0].data=nw(o)})}function jw(e,r,t,a,n,i){var s=[];Ww(e,r,i,function(e){var r=aw(e.messages[0].data);{r[1]=[{type:2,data:$b(a)}];s=iw(r[2],bw)}e.messages[0].data=nw(r)});var f=zw(e,r,s[0]);var l=bw(aw(f.messages[0].data)[2][0].data);Ww(e,r,l,function(a,n){return Yw(e,r,t,a,n,l)})}var Kw=true;function Yw(e,r,t,a,n,i){var s=za(t["!ref"]);s.s.r=s.s.c=0;var f=false;if(s.e.c>999){f=true;s.e.c=999}if(s.e.r>999999){f=true;s.e.r=999999}if(f)console.error("Truncating to ".concat(Ha(s)));var l=[];if(t["!data"])l=t["!data"];else{var o=[];for(var c=0;c<=s.e.c;++c)o[c]=Pa(c);for(var h=0;h<=s.e.r;++h){l[h]=[];var u=""+(h+1);for(c=0;c<=s.e.c;++c){var d=t[o[c]+u];if(!d)continue;l[h][c]=d}}}var v={cmnt:[{a:"~54ee77S~",t:"... the people who are crazy enough to think they can change the world, are the ones who do."}],ferr:[],fmla:[],nfmt:[],ofmt:[],rsst:[{v:"~54ee77S~",l:"https://sheetjs.com/"}],sst:["~Sh33tJ5~"]};var p=aw(a.messages[0].data);{p[6][0].data=qb(s.e.r+1);p[7][0].data=qb(s.e.c+1);delete p[46];var m=aw(p[4][0].data);{var g=bw(aw(m[1][0].data)[2][0].data);Ww(e,r,g,function(e,r){var t;var a=aw(e.messages[0].data);if((t=a==null?void 0:a[2])==null?void 0:t[0])for(var n=0;n<l.length;++n){var i=aw(a[2][0].data);i[1][0].data=qb(n);i[4][0].data=qb(l[n].length);a[2][n]={type:a[2][0].type,data:nw(i)}}e.messages[0].data=nw(a)});var b=bw(m[2][0].data);Ww(e,r,b,function(e,r){var t=aw(e.messages[0].data);for(var a=0;a<=s.e.c;++a){var n=aw(t[2][0].data);n[1][0].data=qb(a);n[4][0].data=qb(s.e.r+1);t[2][a]={type:t[2][0].type,data:nw(n)}}e.messages[0].data=nw(t)});var w=aw(m[9][0].data);w[1]=[];var k=aw(m[3][0].data);{var T=256;k[2]=[{type:0,data:qb(T)}];var A=bw(aw(k[1][0].data)[2][0].data);var y=function(){var t=zw(e,r,2);var a=aw(t.messages[0].data);var n=a[3].filter(function(e){return rw(aw(e.data)[1][0].data)==A});return(n==null?void 0:n.length)?rw(aw(n[0].data)[12][0].data):0}();{qe.utils.cfb_del(e,r[A].location);Ww(e,r,2,function(e){var t=aw(e.messages[0].data);t[3]=t[3].filter(function(e){return rw(aw(e.data)[1][0].data)!=A});Gw(t,r,i,A);e.messages[0].data=nw(t)});Tw(a,A)}k[1]=[];var E=Math.ceil((s.e.r+1)/T);for(var C=0;C<E;++C){var _=Pw({deps:[],location:"",type:6002},r);r[_].location="Root Entry/Index/Tables/Tile-".concat(_,".iwa");var S=[[],[{type:0,data:qb(0)}],[{type:0,data:qb(Math.min(s.e.r+1,(C+1)*T))}],[{type:0,data:qb(0)}],[{type:0,data:qb(Math.min((C+1)*T,s.e.r+1)-C*T)}],[],[{type:0,data:qb(5)}],[{type:0,data:qb(1)}],[{type:0,data:qb(Kw?1:0)}]];for(var x=C*T;x<=Math.min(s.e.r,(C+1)*T-1);++x){var O=Fw(l[x],v,Kw);O[1][0].data=qb(x-C*T);S[5].push({data:nw(O),type:2})}k[1].push({type:2,data:nw([[],[{type:0,data:qb(C)}],[{type:2,data:ww(_)}]])});var R={id:_,messages:[Dw(6002,nw(S))]};var I=cw(fw([R]));
qe.utils.cfb_add(e,"/Index/Tables/Tile-".concat(_,".iwa"),I);Ww(e,r,2,function(e){var t=aw(e.messages[0].data);t[3].push({type:2,data:nw([[],[{type:0,data:qb(_)}],[{type:2,data:$b("Tables/Tile")}],[{type:2,data:$b("Tables/Tile-".concat(_))}],[{type:2,data:new Uint8Array([2,0,0])}],[{type:2,data:new Uint8Array([2,0,0])}],[],[],[],[],[{type:0,data:qb(0)}],[],[{type:0,data:qb(y)}]])});t[1]=[{type:0,data:qb(Math.max(_+1,rw(t[1][0].data)))}];Xw(t,r,i,_);e.messages[0].data=nw(t)});kw(a,_);w[1].push({type:2,data:nw([[],[{type:0,data:qb(C*T)}],[{type:0,data:qb(C)}]])})}}m[3][0].data=nw(k);m[9][0].data=nw(w);m[10]=[{type:2,data:new Uint8Array([])}];if(t["!merges"]){var N=Pw({type:6144,deps:[i],location:r[i].location},r);n.push({id:N,messages:[Dw(6144,nw([[],t["!merges"].map(function(e){return{type:2,data:nw([[],[{type:2,data:nw([[],[{type:5,data:new Uint8Array(new Uint16Array([e.s.r,e.s.c]).buffer)}]])}],[{type:2,data:nw([[],[{type:5,data:new Uint8Array(new Uint16Array([e.e.r-e.s.r+1,e.e.c-e.s.c+1]).buffer)}]])}]])}})]))]});m[13]=[{type:2,data:ww(N)}];Ww(e,r,2,function(e){var t=aw(e.messages[0].data);Xw(t,r,i,N);e.messages[0].data=nw(t)});kw(a,N)}else delete m[13];var F=bw(m[4][0].data);Ww(e,r,F,function(e){var r=aw(e.messages[0].data);{r[3]=[];v.sst.forEach(function(e,t){if(t==0)return;r[3].push({type:2,data:nw([[],[{type:0,data:qb(t)}],[{type:0,data:qb(1)}],[{type:2,data:$b(e)}]])})})}e.messages[0].data=nw(r)});var D=bw(m[17][0].data);Ww(e,r,D,function(t){var a=aw(t.messages[0].data);a[3]=[];var n=[904980,903835,903815,903845];v.rsst.forEach(function(i,s){if(s==0)return;var f=[[],[{type:0,data:new Uint8Array([5])}],[],[{type:2,data:$b(i.v)}]];f[10]=[{type:0,data:new Uint8Array([1])}];f[19]=[{type:2,data:new Uint8Array([10,6,8,0,18,2,101,110])}];f[5]=[{type:2,data:new Uint8Array([10,8,8,0,18,4,8,155,149,55])}];f[2]=[{type:2,data:new Uint8Array([8,148,158,55])}];f[6]=[{type:2,data:new Uint8Array([10,6,8,0,16,0,24,0])}];f[7]=[{type:2,data:new Uint8Array([10,8,8,0,18,4,8,135,149,55])}];f[8]=[{type:2,data:new Uint8Array([10,8,8,0,18,4,8,165,149,55])}];f[14]=[{type:2,data:new Uint8Array([10,6,8,0,16,0,24,0])}];f[24]=[{type:2,data:new Uint8Array([10,6,8,0,16,0,24,0])}];var l=Pw({deps:[],location:"",type:2001},r);var o=[];if(i.l){var c=Vw(e,2032,[[],[],[{type:2,data:$b(i.l)}]],"/Index/Tables/DataList",r);f[11]=[];var h=[[],[]];if(!h[1])h[1]=[];h[1].push({type:2,data:nw([[],[{type:0,data:qb(0)}],[{type:2,data:ww(c)}]])});f[11][0]={type:2,data:nw(h)};o.push(c)}Vw(e,2001,f,"/Index/Tables/DataList",r,l);Ww(e,r,l,function(e){n.forEach(function(r){return kw(e,r)});o.forEach(function(r){return kw(e,r)})});var u=Vw(e,6218,[[],[{type:2,data:ww(l)}],[],[{type:2,data:new Uint8Array([13,255,255,255,0,18,10,16,255,255,1,24,255,255,255,255,7])}]],"/Index/Tables/DataList",r);Ww(e,r,u,function(e){return kw(e,l)});a[3].push({type:2,data:nw([[],[{type:0,data:qb(s)}],[{type:0,data:qb(1)}],[],[],[],[],[],[],[{type:2,data:ww(u)}]])});kw(t,u);Ww(e,r,2,function(e){var t=aw(e.messages[0].data);Xw(t,r,D,u);Xw(t,r,u,l);Xw(t,r,l,o);Xw(t,r,l,n);e.messages[0].data=nw(t)})});t.messages[0].data=nw(a)});if(v.cmnt.length>1){var P=bw(m[19][0].data);var L={},M=0;Ww(e,r,P,function(t){var a=aw(t.messages[0].data);{a[3]=[];v.cmnt.forEach(function(n,i){if(i==0)return;var s=[];if(n.replies)n.replies.forEach(function(t){if(!L[t.a||""])L[t.a||""]=Vw(e,212,[[],[{type:2,data:$b(t.a||"")}],[{type:2,data:Uw(++M)}],[],[{type:0,data:qb(0)}]],"/Index/Tables/DataList",r);var a=L[t.a||""];var n=Vw(e,3056,[[],[{type:2,data:$b(t.t||"")}],[{type:2,data:nw([[],[{type:1,data:new Uint8Array([0,0,0,128,116,109,182,65])}]])}],[{type:2,data:ww(a)}]],"/Index/Tables/DataList",r);Ww(e,r,n,function(e){return kw(e,a)});s.push(n);Ww(e,r,2,function(e){var t=aw(e.messages[0].data);Xw(t,r,n,a);e.messages[0].data=nw(t)})});if(!L[n.a||""])L[n.a||""]=Vw(e,212,[[],[{type:2,data:$b(n.a||"")}],[{type:2,data:Uw(++M)}],[],[{type:0,data:qb(0)}]],"/Index/Tables/DataList",r);var f=L[n.a||""];var l=Vw(e,3056,[[],[{type:2,data:$b(n.t||"")}],[{type:2,data:nw([[],[{type:1,data:new Uint8Array([0,0,0,128,116,109,182,65])}]])}],[{type:2,data:ww(f)}],s.map(function(e){return{type:2,data:ww(e)}}),[{type:2,data:nw([[],[{type:0,data:qb(i)}],[{type:0,data:qb(0)}]])}]],"/Index/Tables/DataList",r);Ww(e,r,l,function(e){kw(e,f);s.forEach(function(r){return kw(e,r)})});a[3].push({type:2,data:nw([[],[{type:0,data:qb(i)}],[{type:0,data:qb(1)}],[],[],[],[],[],[],[],[{type:2,data:ww(l)}]])});kw(t,l);Ww(e,r,2,function(e){var t=aw(e.messages[0].data);Xw(t,r,P,l);Xw(t,r,l,f);if(s.length)Xw(t,r,l,s);e.messages[0].data=nw(t)})})}a[2][0].data=qb(v.cmnt.length+1);t.messages[0].data=nw(a)})}}p[4][0].data=nw(m)}a.messages[0].data=nw(p)}function Zw(e){return function r(t){for(var a=0;a!=e.length;++a){var n=e[a];if(t[n[0]]===undefined)t[n[0]]=n[1];if(n[2]==="n")t[n[0]]=Number(t[n[0]])}}}function Jw(e){Zw([["cellNF",false],["cellHTML",true],["cellFormula",true],["cellStyles",false],["cellText",true],["cellDates",false],["sheetStubs",false],["sheetRows",0,"n"],["bookDeps",false],["bookSheets",false],["bookProps",false],["bookFiles",false],["bookVBA",false],["password",""],["WTF",false]])(e)}function qw(e){Zw([["cellDates",false],["bookSST",false],["bookType","xlsx"],["compression",false],["WTF",false]])(e)}function Qw(e){if(li.WS.indexOf(e)>-1)return"sheet";if(li.CS&&e==li.CS)return"chart";if(li.DS&&e==li.DS)return"dialog";if(li.MS&&e==li.MS)return"macro";return e&&e.length?e:"sheet"}function ek(e,r){if(!e)return 0;try{e=r.map(function a(r){if(!r.id)r.id=r.strRelID;return[r.name,e["!id"][r.id].Target,Qw(e["!id"][r.id].Type)]})}catch(t){return null}return!e||e.length===0?null:e}function rk(e,r,t,a,n,i,s,f){if(!e||!e["!legdrawel"])return;var l=$r(e["!legdrawel"].Target,a);var o=Wr(t,l,true);if(o)Oh(wt(o),e,f||[])}function tk(e,r,t,a,n,i,s,f,l,o,c,h){try{i[a]=ci(Wr(e,t,true),r);var u=Br(e,r);var d;switch(f){case"sheet":d=tg(u,r,n,l,i[a],o,c,h);break;case"chart":d=ag(u,r,n,l,i[a],o,c,h);if(!d||!d["!drawel"])break;var v=$r(d["!drawel"].Target,r);var p=oi(v);var m=Sh(Wr(e,v,true),ci(Wr(e,p,true),v));var g=$r(m,v);var b=oi(g);d=km(Wr(e,g,true),g,l,ci(Wr(e,b,true),g),o,d);break;case"macro":d=ng(u,r,n,l,i[a],o,c,h);break;case"dialog":d=ig(u,r,n,l,i[a],o,c,h);break;default:throw new Error("Unrecognized sheet type "+f);}s[a]=d;var w=[],k=[];if(i&&i[a])nr(i[a]).forEach(function(t){var n="";if(i[a][t].Type==li.CMNT){n=$r(i[a][t].Target,r);w=lg(Br(e,n,true),n,l);if(!w||!w.length)return;Nh(d,w,false)}if(i[a][t].Type==li.TCMNT){n=$r(i[a][t].Target,r);k=k.concat(Ph(Br(e,n,true),l))}});if(k&&k.length)Nh(d,k,true,l.people||[]);rk(d,f,e,r,n,l,o,w)}catch(T){if(l.WTF)throw T}}function ak(e){return e.charAt(0)=="/"?e.slice(1):e}function nk(e,r){Ve();r=r||{};Jw(r);if(Mr(e,"META-INF/manifest.xml"))return Lb(e,r);if(Mr(e,"objectdata.xml"))return Lb(e,r);if(Mr(e,"Index/Document.iwa")){if(typeof Uint8Array=="undefined")throw new Error("NUMBERS file parsing requires Uint8Array support");if(typeof Nw!="undefined"){if(e.FileIndex)return Nw(e,r);var t=qe.utils.cfb_new();Hr(e).forEach(function(r){Vr(t,r,zr(e,r))});return Nw(t,r)}throw new Error("Unsupported NUMBERS file")}if(!Mr(e,"[Content_Types].xml")){if(Mr(e,"index.xml.gz"))throw new Error("Unsupported NUMBERS 08 file");if(Mr(e,"index.xml"))throw new Error("Unsupported NUMBERS 09 file");var a=qe.find(e,"Index.zip");if(a){r=kr(r);delete r.type;if(typeof a.content=="string")r.type="binary";if(typeof Bun!=="undefined"&&Buffer.isBuffer(a.content))return mk(new Uint8Array(a.content),r);return mk(a.content,r)}throw new Error("Unsupported ZIP file")}var n=Hr(e);var i=si(Wr(e,"[Content_Types].xml"));var s=false;var f,l;if(i.workbooks.length===0){l="xl/workbook.xml";if(Br(e,l,true))i.workbooks.push(l)}if(i.workbooks.length===0){l="xl/workbook.bin";if(!Br(e,l,true))throw new Error("Could not find workbook");i.workbooks.push(l);s=true}if(i.workbooks[0].slice(-3)=="bin")s=true;var o={};var c={};if(!r.bookSheets&&!r.bookProps){dv=[];if(i.sst)try{dv=fg(Br(e,ak(i.sst)),i.sst,r)}catch(h){if(r.WTF)throw h}if(r.cellStyles&&i.themes.length)o=rh(Wr(e,i.themes[0].replace(/^\//,""),true)||"",r);if(i.style)c=sg(Br(e,ak(i.style)),i.style,o,r)}i.links.map(function(t){try{var a=ci(Wr(e,oi(ak(t))),t);return cg(Br(e,ak(t)),a,t,r)}catch(n){}});var u=rg(Br(e,ak(i.workbooks[0])),i.workbooks[0],r);var d={},v="";if(i.coreprops.length){v=Br(e,ak(i.coreprops[0]),true);if(v)d=Ai(v);if(i.extprops.length!==0){v=Br(e,ak(i.extprops[0]),true);if(v)xi(v,d,r)}}var p={};if(!r.bookSheets||r.bookProps){if(i.custprops.length!==0){v=Wr(e,ak(i.custprops[0]),true);if(v)p=Ii(v,r)}}var m={};if(r.bookSheets||r.bookProps){if(u.Sheets)f=u.Sheets.map(function N(e){return e.name});else if(d.Worksheets&&d.SheetNames.length>0)f=d.SheetNames;if(r.bookProps){m.Props=d;m.Custprops=p}if(r.bookSheets&&typeof f!=="undefined")m.SheetNames=f;if(r.bookSheets?m.SheetNames:r.bookProps)return m}f={};var g={};if(r.bookDeps&&i.calcchain)g=og(Br(e,ak(i.calcchain)),i.calcchain,r);var b=0;var w={};var k,T;{var A=u.Sheets;d.Worksheets=A.length;d.SheetNames=[];for(var y=0;y!=A.length;++y){d.SheetNames[y]=A[y].name}}var E=s?"bin":"xml";var C=i.workbooks[0].lastIndexOf("/");var _=(i.workbooks[0].slice(0,C+1)+"_rels/"+i.workbooks[0].slice(C+1)+".rels").replace(/^\//,"");if(!Mr(e,_))_="xl/_rels/workbook."+E+".rels";var S=ci(Wr(e,_,true),_.replace(/_rels.*/,"s5s"));if((i.metadata||[]).length>=1){r.xlmeta=hg(Br(e,ak(i.metadata[0])),i.metadata[0],r)}if((i.people||[]).length>=1){r.people=Mh(Br(e,ak(i.people[0])),r)}if(S)S=ek(S,u.Sheets);var x=Br(e,"xl/worksheets/sheet.xml",true)?1:0;e:for(b=0;b!=d.Worksheets;++b){var O="sheet";if(S&&S[b]){k="xl/"+S[b][1].replace(/[\/]?xl\//,"");if(!Mr(e,k))k=S[b][1];if(!Mr(e,k))k=_.replace(/_rels\/.*$/,"")+S[b][1];O=S[b][2]}else{k="xl/worksheets/sheet"+(b+1-x)+"."+E;k=k.replace(/sheet0\./,"sheet.")}T=k.replace(/^(.*)(\/)([^\/]*)$/,"$1/_rels/$3.rels");if(r&&r.sheets!=null)switch(typeof r.sheets){case"number":if(b!=r.sheets)continue e;break;case"string":if(d.SheetNames[b].toLowerCase()!=r.sheets.toLowerCase())continue e;break;default:if(Array.isArray&&Array.isArray(r.sheets)){var R=false;for(var I=0;I!=r.sheets.length;++I){if(typeof r.sheets[I]=="number"&&r.sheets[I]==b)R=1;if(typeof r.sheets[I]=="string"&&r.sheets[I].toLowerCase()==d.SheetNames[b].toLowerCase())R=1}if(!R)continue e};}tk(e,k,T,d.SheetNames[b],b,w,f,O,r,u,o,c)}m={Directory:i,Workbook:u,Props:d,Custprops:p,Deps:g,Sheets:f,SheetNames:d.SheetNames,Strings:dv,Styles:c,Themes:o,SSF:kr(q)};if(r&&r.bookFiles){if(e.files){m.keys=n;m.files=e.files}else{m.keys=[];m.files={};e.FullPaths.forEach(function(r,t){r=r.replace(/^Root Entry[\/]/,"");m.keys.push(r);m.files[r]=e.FileIndex[t]})}}if(r&&r.bookVBA){if(i.vba.length>0)m.vbaraw=Br(e,ak(i.vba[0]),true);else if(i.defaults&&i.defaults.bin===Gh)m.vbaraw=Br(e,"xl/vbaProject.bin",true)}m.bookType=s?"xlsb":"xlsx";return m}function ik(e,r){var t=r||{};var a="Workbook",n=qe.find(e,a);try{a="/!DataSpaces/Version";n=qe.find(e,a);if(!n||!n.content)throw new Error("ECMA-376 Encrypted file missing "+a);go(n.content);a="/!DataSpaces/DataSpaceMap";n=qe.find(e,a);if(!n||!n.content)throw new Error("ECMA-376 Encrypted file missing "+a);var i=wo(n.content);if(i.length!==1||i[0].comps.length!==1||i[0].comps[0].t!==0||i[0].name!=="StrongEncryptionDataSpace"||i[0].comps[0].v!=="EncryptedPackage")throw new Error("ECMA-376 Encrypted file bad "+a);a="/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace";n=qe.find(e,a);if(!n||!n.content)throw new Error("ECMA-376 Encrypted file missing "+a);var s=ko(n.content);if(s.length!=1||s[0]!="StrongEncryptionTransform")throw new Error("ECMA-376 Encrypted file bad "+a);a="/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary";n=qe.find(e,a);if(!n||!n.content)throw new Error("ECMA-376 Encrypted file missing "+a);Ao(n.content)}catch(f){}a="/EncryptionInfo";n=qe.find(e,a);if(!n||!n.content)throw new Error("ECMA-376 Encrypted file missing "+a);var l=Co(n.content);a="/EncryptedPackage";n=qe.find(e,a);if(!n||!n.content)throw new Error("ECMA-376 Encrypted file missing "+a);if(l[0]==4&&typeof decrypt_agile!=="undefined")return decrypt_agile(l[1],n.content,t.password||"",t);if(l[0]==2&&typeof decrypt_std76!=="undefined")return decrypt_std76(l[1],n.content,t.password||"",t);throw new Error("File is password-protected")}function sk(e,r){if(e&&!e.SSF){e.SSF=kr(q)}if(e&&e.SSF){Ve();He(e.SSF);r.revssf=fr(e.SSF);r.revssf[e.SSF[65535]]=0;r.ssf=e.SSF}r.rels={};r.wbrels={};r.Strings=[];r.Strings.Count=0;r.Strings.Unique=0;if(pv)r.revStrings=new Map;else{r.revStrings={};r.revStrings.foo=[];delete r.revStrings.foo}var t="bin";var a=true;var n=ii();qw(r=r||{});var i=Xr();var s="",f=0;r.cellXfs=[];wv(r.cellXfs,{},{revssf:{General:0}});if(!e.Props)e.Props={};s="docProps/core.xml";Vr(i,s,Ei(e.Props,r));n.coreprops.push(s);ui(r.rels,2,s,li.CORE_PROPS);s="docProps/app.xml";if(e.Props&&e.Props.SheetNames){}else if(!e.Workbook||!e.Workbook.Sheets)e.Props.SheetNames=e.SheetNames;else{var l=[];for(var o=0;o<e.SheetNames.length;++o)if((e.Workbook.Sheets[o]||{}).Hidden!=2)l.push(e.SheetNames[o]);e.Props.SheetNames=l}e.Props.Worksheets=e.Props.SheetNames.length;Vr(i,s,Oi(e.Props,r));n.extprops.push(s);ui(r.rels,3,s,li.EXT_PROPS);if(e.Custprops!==e.Props&&nr(e.Custprops||{}).length>0){s="docProps/custom.xml";Vr(i,s,Ni(e.Custprops,r));n.custprops.push(s);ui(r.rels,4,s,li.CUST_PROPS)}var c=["SheetJ5"];r.tcid=0;for(f=1;f<=e.SheetNames.length;++f){var h={"!id":{}};var u=e.Sheets[e.SheetNames[f-1]];var d=(u||{})["!type"]||"sheet";switch(d){case"chart":;default:s="xl/worksheets/sheet"+f+"."+t;Vr(i,s,bm(f-1,r,e,h));n.sheets.push(s);ui(r.wbrels,-1,"worksheets/sheet"+f+"."+t,li.WS[0]);}if(u){var v=u["!comments"];var p=false;var m="";if(v&&v.length>0){var g=false;v.forEach(function(e){e[1].forEach(function(e){if(e.T==true)g=true})});if(g){m="xl/threadedComments/threadedComment"+f+".xml";Vr(i,m,Lh(v,c,r));n.threadedcomments.push(m);ui(h,-1,"../threadedComments/threadedComment"+f+".xml",li.TCMNT)}m="xl/comments"+f+"."+t;Vr(i,m,Xh(v,r));n.comments.push(m);ui(h,-1,"../comments"+f+"."+t,li.CMNT);p=true}if(u["!legacy"]){if(p)Vr(i,"xl/drawings/vmlDrawing"+f+".vml",Rh(f,u["!comments"]))}delete u["!comments"];delete u["!legacy"]}if(h["!id"].rId1)Vr(i,oi(s),hi(h))}if(r.Strings!=null&&r.Strings.length>0){s="xl/sharedStrings."+t;Vr(i,s,vo(r.Strings,r));n.strs.push(s);ui(r.wbrels,-1,"sharedStrings."+t,li.SST)}s="xl/workbook."+t;Vr(i,s,eg(e,r));n.workbooks.push(s);ui(r.rels,1,s,li.WB);s="xl/theme/theme1.xml";var b=th(e.Themes,r);Vr(i,s,b);n.themes.push(s);ui(r.wbrels,-1,"theme/theme1.xml",li.THEME);s="xl/styles."+t;Vr(i,s,Gc(e,r));n.styles.push(s);ui(r.wbrels,-1,"styles."+t,li.STY);if(e.vbaraw&&a){s="xl/vbaProject.bin";Vr(i,s,e.vbaraw);n.vba.push(s);ui(r.wbrels,-1,"vbaProject.bin",li.VBA)}s="xl/metadata."+t;Vr(i,s,wh());n.metadata.push(s);ui(r.wbrels,-1,"metadata."+t,li.XLMETA);if(c.length>1){s="xl/persons/person.xml";Vr(i,s,Uh(c,r));n.people.push(s);ui(r.wbrels,-1,"persons/person.xml",li.PEOPLE)}Vr(i,"[Content_Types].xml",fi(n,r));Vr(i,"_rels/.rels",hi(r.rels));Vr(i,"xl/_rels/workbook."+t+".rels",hi(r.wbrels));delete r.revssf;delete r.ssf;return i}function fk(e,r){if(e&&!e.SSF){e.SSF=kr(q)}if(e&&e.SSF){Ve();He(e.SSF);r.revssf=fr(e.SSF);r.revssf[e.SSF[65535]]=0;r.ssf=e.SSF}r.rels={};r.wbrels={};r.Strings=[];r.Strings.Count=0;r.Strings.Unique=0;if(pv)r.revStrings=new Map;else{r.revStrings={};r.revStrings.foo=[];delete r.revStrings.foo}var t="xml";var a=Kh.indexOf(r.bookType)>-1;var n=ii();qw(r=r||{});var i=Xr();var s="",f=0;r.cellXfs=[];wv(r.cellXfs,{},{revssf:{General:0}});if(!e.Props)e.Props={};s="docProps/core.xml";Vr(i,s,Ei(e.Props,r));n.coreprops.push(s);ui(r.rels,2,s,li.CORE_PROPS);s="docProps/app.xml";if(e.Props&&e.Props.SheetNames){}else if(!e.Workbook||!e.Workbook.Sheets)e.Props.SheetNames=e.SheetNames;else{var l=[];for(var o=0;o<e.SheetNames.length;++o)if((e.Workbook.Sheets[o]||{}).Hidden!=2)l.push(e.SheetNames[o]);e.Props.SheetNames=l}e.Props.Worksheets=e.Props.SheetNames.length;Vr(i,s,Oi(e.Props,r));n.extprops.push(s);ui(r.rels,3,s,li.EXT_PROPS);if(e.Custprops!==e.Props&&nr(e.Custprops||{}).length>0){s="docProps/custom.xml";Vr(i,s,Ni(e.Custprops,r));n.custprops.push(s);ui(r.rels,4,s,li.CUST_PROPS)}var c=["SheetJ5"];r.tcid=0;for(f=1;f<=e.SheetNames.length;++f){var h={"!id":{}};var u=e.Sheets[e.SheetNames[f-1]];var d=(u||{})["!type"]||"sheet";switch(d){case"chart":;default:s="xl/worksheets/sheet"+f+"."+t;Vr(i,s,ep(f-1,r,e,h));n.sheets.push(s);ui(r.wbrels,-1,"worksheets/sheet"+f+"."+t,li.WS[0]);}if(u){var v=u["!comments"];var p=false;var m="";if(v&&v.length>0){var g=false;v.forEach(function(e){e[1].forEach(function(e){if(e.T==true)g=true})});if(g){m="xl/threadedComments/threadedComment"+f+".xml";Vr(i,m,Lh(v,c,r));n.threadedcomments.push(m);ui(h,-1,"../threadedComments/threadedComment"+f+".xml",li.TCMNT)}m="xl/comments"+f+"."+t;Vr(i,m,Dh(v,r));n.comments.push(m);ui(h,-1,"../comments"+f+"."+t,li.CMNT);p=true}if(u["!legacy"]){if(p)Vr(i,"xl/drawings/vmlDrawing"+f+".vml",Rh(f,u["!comments"]))}delete u["!comments"];delete u["!legacy"]}if(h["!id"].rId1)Vr(i,oi(s),hi(h))}if(r.Strings!=null&&r.Strings.length>0){s="xl/sharedStrings."+t;Vr(i,s,lo(r.Strings,r));n.strs.push(s);ui(r.wbrels,-1,"sharedStrings."+t,li.SST)}s="xl/workbook."+t;Vr(i,s,Um(e,r));n.workbooks.push(s);ui(r.rels,1,s,li.WB);s="xl/theme/theme1.xml";Vr(i,s,th(e.Themes,r));n.themes.push(s);ui(r.wbrels,-1,"theme/theme1.xml",li.THEME);s="xl/styles."+t;Vr(i,s,bc(e,r));n.styles.push(s);ui(r.wbrels,-1,"styles."+t,li.STY);if(e.vbaraw&&a){s="xl/vbaProject.bin";Vr(i,s,e.vbaraw);n.vba.push(s);ui(r.wbrels,-1,"vbaProject.bin",li.VBA)}s="xl/metadata."+t;Vr(i,s,Th());n.metadata.push(s);ui(r.wbrels,-1,"metadata."+t,li.XLMETA);if(c.length>1){s="xl/persons/person.xml";Vr(i,s,Uh(c,r));n.people.push(s);ui(r.wbrels,-1,"persons/person.xml",li.PEOPLE)}Vr(i,"[Content_Types].xml",fi(n,r));Vr(i,"_rels/.rels",hi(r.rels));Vr(i,"xl/_rels/workbook."+t+".rels",hi(r.wbrels));delete r.revssf;delete r.ssf;return i}function lk(e,r){var t="";switch((r||{}).type||"base64"){case"buffer":return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];case"base64":t=E(e.slice(0,12));break;case"binary":t=e;break;case"array":return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]];default:throw new Error("Unrecognized type "+(r&&r.type||"undefined"));}return[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3),t.charCodeAt(4),t.charCodeAt(5),t.charCodeAt(6),t.charCodeAt(7)]}function ok(e,r){if(qe.find(e,"EncryptedPackage"))return ik(e,r);return Kg(e,r)}function ck(e,r){var t,a=e;var n=r||{};if(!n.type)n.type=C&&Buffer.isBuffer(e)?"buffer":"base64";t=Gr(a,n);return nk(t,n)}function hk(e,r){var t=0;e:while(t<e.length)switch(e.charCodeAt(t)){case 10:;case 13:;case 32:++t;break;case 60:return Cg(e.slice(t),r);default:break e;}return jl.to_workbook(e,r)}function uk(e,r){var t="",a=lk(e,r);switch(r.type){case"base64":t=E(e);break;case"binary":t=e;break;case"buffer":t=e.toString("binary");break;case"array":t=wr(e);break;default:throw new Error("Unrecognized type "+r.type);}if(a[0]==239&&a[1]==187&&a[2]==191)t=wt(t);r.type="binary";return hk(t,r)}function dk(e,r){var t=e;if(r.type=="base64")t=E(t);if(typeof ArrayBuffer!=="undefined"&&e instanceof ArrayBuffer)t=new Uint8Array(e);t=typeof a!=="undefined"?a.utils.decode(1200,t.slice(2),"str"):C&&Buffer.isBuffer(e)?e.slice(2).toString("utf16le"):typeof Uint8Array!=="undefined"&&t instanceof Uint8Array?typeof TextDecoder!=="undefined"?new TextDecoder("utf-16le").decode(t.slice(2)):u(t.slice(2)):h(t.slice(2));r.type="binary";return hk(t,r)}function vk(e){return!e.match(/[^\x00-\x7F]/)?e:kt(e)}function pk(e,r,t,a){if(a){t.type="string";return jl.to_workbook(e,t)}return jl.to_workbook(r,t)}function mk(e,r){o();var t=r||{};if(t.codepage&&typeof a==="undefined")console.error("Codepage tables are not loaded.  Non-ASCII characters may not give expected results");if(typeof ArrayBuffer!=="undefined"&&e instanceof ArrayBuffer)return mk(new Uint8Array(e),(t=kr(t),t.type="array",t));if(typeof Uint8Array!=="undefined"&&e instanceof Uint8Array&&!t.type)t.type=typeof Deno!=="undefined"?"buffer":"array";var n=e,i=[0,0,0,0],s=false;if(t.cellStyles){t.cellNF=true;t.sheetStubs=true}vv={};if(t.dateNF)vv.dateNF=t.dateNF;if(!t.type)t.type=C&&Buffer.isBuffer(e)?"buffer":"base64";if(t.type=="file"){t.type=C?"buffer":"binary";n=ar(e);if(typeof Uint8Array!=="undefined"&&!C)t.type="array"}if(t.type=="string"){s=true;t.type="binary";t.codepage=65001;n=vk(e)}if(t.type=="array"&&typeof Uint8Array!=="undefined"&&e instanceof Uint8Array&&typeof ArrayBuffer!=="undefined"){var f=new ArrayBuffer(3),l=new Uint8Array(f);l.foo="bar";if(!l.foo){t=kr(t);t.type="array";return mk(D(n),t)}}switch((i=lk(n,t))[0]){case 208:if(i[1]===207&&i[2]===17&&i[3]===224&&i[4]===161&&i[5]===177&&i[6]===26&&i[7]===225)return ok(qe.read(n,t),t);break;case 9:if(i[1]<=8)return Kg(n,t);break;case 60:return Cg(n,t);case 73:if(i[1]===73&&i[2]===42&&i[3]===0)throw new Error("TIFF Image File is not a spreadsheet");if(i[1]===68)return Kl(n,t);break;case 84:if(i[1]===65&&i[2]===66&&i[3]===76)return Gl.to_workbook(n,t);break;case 80:return i[1]===75&&i[2]<9&&i[3]<9?ck(n,t):pk(e,n,t,s);case 239:return i[3]===60?Cg(n,t):pk(e,n,t,s);case 255:if(i[1]===254){return dk(n,t)}else if(i[1]===0&&i[2]===2&&i[3]===0)return Yl.to_workbook(n,t);break;case 0:if(i[1]===0){if(i[2]>=2&&i[3]===0)return Yl.to_workbook(n,t);if(i[2]===0&&(i[3]===8||i[3]===9))return Yl.to_workbook(n,t)}break;case 3:;case 131:;case 139:;case 140:return Vl.to_workbook(n,t);case 123:if(i[1]===92&&i[2]===114&&i[3]===116)return Wo(n,t);break;case 10:;case 13:;case 32:return uk(n,t);case 137:if(i[1]===80&&i[2]===78&&i[3]===71)throw new Error("PNG Image File is not a spreadsheet");break;case 8:if(i[1]===231)throw new Error("Unsupported Multiplan 1.x file!");break;case 12:if(i[1]===236)throw new Error("Unsupported Multiplan 2.x file!");if(i[1]===237)throw new Error("Unsupported Multiplan 3.x file!");break;}if(Hl.indexOf(i[0])>-1&&i[2]<=12&&i[3]<=31)return Vl.to_workbook(n,t);return pk(e,n,t,s)}function gk(e,r){var t=r||{};t.type="file";return mk(e,t)}function bk(e,r){switch(r.type){case"base64":;case"binary":break;case"buffer":;case"array":r.type="";break;case"file":return tr(r.file,qe.write(e,{type:C?"buffer":""}));case"string":throw new Error("'string' output type invalid for '"+r.bookType+"' files");default:throw new Error("Unrecognized type "+r.type);}return qe.write(e,r)}function wk(e,r){switch(r.bookType){case"ods":return Hb(e,r);case"numbers":return Bw(e,r);case"xlsb":return sk(e,r);default:return fk(e,r);}}function kk(e,r){var t=kr(r||{});var a=wk(e,t);return Ak(a,t)}function Tk(e,r){var t=kr(r||{});var a=fk(e,t);return Ak(a,t)}function Ak(e,r){var t={};var a=C?"nodebuffer":typeof Uint8Array!=="undefined"?"array":"string";if(r.compression)t.compression="DEFLATE";if(r.password)t.type=a;else switch(r.type){case"base64":t.type="base64";break;case"binary":t.type="string";break;case"string":throw new Error("'string' output type invalid for '"+r.bookType+"' files");case"buffer":;case"file":t.type=a;break;default:throw new Error("Unrecognized type "+r.type);}var n=e.FullPaths?qe.write(e,{fileType:"zip",type:{nodebuffer:"buffer",string:"binary"}[t.type]||t.type,compression:!!r.compression}):e.generate(t);if(typeof Deno!=="undefined"){if(typeof n=="string"){if(r.type=="binary"||r.type=="base64")return n;n=new Uint8Array(I(n))}}if(r.password&&typeof encrypt_agile!=="undefined")return bk(encrypt_agile(n,r.password),r);if(r.type==="file")return tr(r.file,n);return r.type=="string"?wt(n):n}function yk(e,r){var t=r||{};var a=Yg(e,t);return bk(a,t)}function Ek(e,r,t){if(!t)t="";var a=t+e;switch(r.type){case"base64":return T(kt(a));case"binary":return kt(a);case"string":return e;case"file":return tr(r.file,a,"utf8");case"buffer":{if(C)return _(a,"utf8");else if(typeof TextEncoder!=="undefined")return(new TextEncoder).encode(a);else return Ek(a,{type:"binary"}).split("").map(function(e){return e.charCodeAt(0)})};}throw new Error("Unrecognized type "+r.type)}function Ck(e,r){switch(r.type){case"base64":return A(e);case"binary":return e;case"string":return e;case"file":return tr(r.file,e,"binary");case"buffer":{if(C)return _(e,"binary");else return e.split("").map(function(e){return e.charCodeAt(0)})};}throw new Error("Unrecognized type "+r.type)}function _k(e,r){switch(r.type){case"string":;case"base64":;case"binary":var t="";for(var a=0;a<e.length;++a)t+=String.fromCharCode(e[a]);return r.type=="base64"?T(t):r.type=="string"?wt(t):t;case"file":return tr(r.file,e);case"buffer":return e;default:throw new Error("Unrecognized type "+r.type);}}function Sk(e,r){o();Pm(e);var t=kr(r||{});if(t.cellStyles){t.cellNF=true;t.sheetStubs=true}if(t.type=="array"){t.type="binary";var a=Sk(e,t);t.type="array";return I(a)}return Tk(e,t)}function xk(e,r){o();Pm(e);var t=kr(r||{});if(t.cellStyles){t.cellNF=true;t.sheetStubs=true}if(t.type=="array"){t.type="binary";var a=xk(e,t);t.type="array";return I(a)}var n=0;if(t.sheet){if(typeof t.sheet=="number")n=t.sheet;else n=e.SheetNames.indexOf(t.sheet);if(!e.SheetNames[n])throw new Error("Sheet not found: "+t.sheet+" : "+typeof t.sheet)}switch(t.bookType||"xlsb"){case"xml":;case"xlml":return Ek(Ug(e,t),t);case"slk":;case"sylk":return Ek(Xl.from_sheet(e.Sheets[e.SheetNames[n]],t,e),t);case"htm":;case"html":return Ek(Sb(e.Sheets[e.SheetNames[n]],t),t);case"txt":return Ck(Uk(e.Sheets[e.SheetNames[n]],t),t);case"csv":return Ek(Mk(e.Sheets[e.SheetNames[n]],t),t,"\ufeff");case"dif":return Ek(Gl.from_sheet(e.Sheets[e.SheetNames[n]],t),t);case"dbf":return _k(Vl.from_sheet(e.Sheets[e.SheetNames[n]],t),t);case"prn":return Ek(jl.from_sheet(e.Sheets[e.SheetNames[n]],t),t);case"rtf":return Ek(zo(e.Sheets[e.SheetNames[n]],t),t);case"eth":return Ek($l.from_sheet(e.Sheets[e.SheetNames[n]],t),t);case"fods":return Ek(Hb(e,t),t);case"wk1":return _k(Yl.sheet_to_wk1(e.Sheets[e.SheetNames[n]],t),t);case"wk3":return _k(Yl.book_to_wk3(e,t),t);case"biff2":if(!t.biff)t.biff=2;case"biff3":if(!t.biff)t.biff=3;case"biff4":if(!t.biff)t.biff=4;return _k(kb(e,t),t);case"biff5":if(!t.biff)t.biff=5;case"biff8":;case"xla":;case"xls":if(!t.biff)t.biff=8;return yk(e,t);case"xlsx":;case"xlsm":;case"xlam":;case"xlsb":;case"numbers":;case"ods":return kk(e,t);default:throw new Error("Unrecognized bookType |"+t.bookType+"|");}}function Ok(e){if(e.bookType)return;var r={xls:"biff8",htm:"html",slk:"sylk",socialcalc:"eth",Sh33tJS:"WTF"};var t=e.file.slice(e.file.lastIndexOf(".")).toLowerCase();if(t.match(/^\.[a-z]+$/))e.bookType=t.slice(1);e.bookType=r[e.bookType]||e.bookType}function Rk(e,r,t){var a=t||{};a.type="file";a.file=r;Ok(a);return xk(e,a)}function Ik(e,r,t){var a=t||{};a.type="file";a.file=r;Ok(a);return Sk(e,a)}function Nk(e,r,t,a){var n=t||{};n.type="file";n.file=e;Ok(n);n.type="buffer";var i=a;if(!(i instanceof Function))i=t;return Qe.writeFile(e,xk(r,n),i)}function Fk(e,r,t,a,n,i,s){var f=Ia(t);var l=s.defval,o=s.raw||!Object.prototype.hasOwnProperty.call(s,"raw");var c=true,h=e["!data"]!=null;var u=n===1?[]:{};if(n!==1){if(Object.defineProperty)try{Object.defineProperty(u,"__rowNum__",{value:t,enumerable:false})}catch(d){u.__rowNum__=t}else u.__rowNum__=t}if(!h||e["!data"][t])for(var v=r.s.c;v<=r.e.c;++v){var p=h?(e["!data"][t]||[])[v]:e[a[v]+f];if(p==null||p.t===undefined){if(l===undefined)continue;if(i[v]!=null){u[i[v]]=l}continue}var m=p.v;switch(p.t){case"z":if(m==null)break;continue;case"e":m=m==0?null:void 0;break;case"s":;case"b":;case"n":if(!p.z||!Pe(p.z))break;m=dr(m);if(typeof m=="number")break;case"d":if(!(s&&s.UTC))m=Nr(m);break;default:throw new Error("unrecognized type "+p.t);}if(i[v]!=null){if(m==null){if(p.t=="e"&&m===null)u[i[v]]=null;else if(l!==undefined)u[i[v]]=l;else if(o&&m===null)u[i[v]]=null;else continue}else{u[i[v]]=o&&(p.t!=="n"||p.t==="n"&&s.rawNumbers!==false)?m:ja(p,m,s)}if(m!=null)c=false}}return{row:u,isempty:c}}function Dk(e,r){if(e==null||e["!ref"]==null)return[];var t={t:"n",v:0},a=0,n=1,i=[],s=0,f="";var l={s:{r:0,c:0},e:{r:0,c:0}};var o=r||{};var c=o.range!=null?o.range:e["!ref"];if(o.header===1)a=1;else if(o.header==="A")a=2;else if(Array.isArray(o.header))a=3;else if(o.header==null)a=0;switch(typeof c){case"string":l=Ga(c);break;case"number":l=Ga(e["!ref"]);l.s.r=c;break;default:l=c;}if(a>0)n=0;var h=Ia(l.s.r);var u=[];var d=[];var v=0,p=0;var m=e["!data"]!=null;var g=l.s.r,b=0;var w={};if(m&&!e["!data"][g])e["!data"][g]=[];var k=o.skipHidden&&e["!cols"]||[];var T=o.skipHidden&&e["!rows"]||[];for(b=l.s.c;b<=l.e.c;++b){if((k[b]||{}).hidden)continue;u[b]=Pa(b);t=m?e["!data"][g][b]:e[u[b]+h];switch(a){case 1:i[b]=b-l.s.c;break;case 2:i[b]=u[b];break;case 3:i[b]=o.header[b-l.s.c];break;default:if(t==null)t={w:"__EMPTY",t:"s"};f=s=ja(t,null,o);p=w[s]||0;if(!p)w[s]=1;else{do{f=s+"_"+p++}while(w[f]);w[s]=p;w[f]=1}i[b]=f;}}for(g=l.s.r+n;g<=l.e.r;++g){if((T[g]||{}).hidden)continue;var A=Fk(e,l,g,u,a,i,o);if(A.isempty===false||(a===1?o.blankrows!==false:!!o.blankrows))d[v++]=A.row}d.length=v;return d}var Pk=/"/g;function Lk(e,r,t,a,n,i,s,f){var l=true;var o=[],c="",h=Ia(t);var u=e["!data"]!=null;var d=u&&e["!data"][t]||[];for(var v=r.s.c;v<=r.e.c;++v){if(!a[v])continue;var p=u?d[v]:e[a[v]+h];if(p==null)c="";else if(p.v!=null){l=false;c=""+(f.rawNumbers&&p.t=="n"?p.v:ja(p,null,f));for(var m=0,g=0;m!==c.length;++m)if((g=c.charCodeAt(m))===n||g===i||g===34||f.forceQuotes){c='"'+c.replace(Pk,'""')+'"';break}if(c=="ID")c='"ID"'}else if(p.f!=null&&!p.F){l=false;c="="+p.f;if(c.indexOf(",")>=0)c='"'+c.replace(Pk,'""')+'"'}else c="";o.push(c)}if(f.blankrows===false&&l)return null;return o.join(s)}function Mk(e,r){var t=[];var a=r==null?{}:r;if(e==null||e["!ref"]==null)return"";var n=Ga(e["!ref"]);var i=a.FS!==undefined?a.FS:",",s=i.charCodeAt(0);var f=a.RS!==undefined?a.RS:"\n",l=f.charCodeAt(0);var o=new RegExp((i=="|"?"\\|":i)+"+$");var c="",h=[];var u=a.skipHidden&&e["!cols"]||[];var d=a.skipHidden&&e["!rows"]||[];for(var v=n.s.c;v<=n.e.c;++v)if(!(u[v]||{}).hidden)h[v]=Pa(v);var p=0;for(var m=n.s.r;m<=n.e.r;++m){if((d[m]||{}).hidden)continue;c=Lk(e,n,m,h,s,l,i,a);if(c==null){continue}if(a.strip)c=c.replace(o,"");if(c||a.blankrows!==false)t.push((p++?f:"")+c)}return t.join("")}function Uk(e,r){if(!r)r={};r.FS="\t";r.RS="\n";var t=Mk(e,r);if(typeof a=="undefined"||r.type=="string")return t;var n=a.utils.encode(1200,t,"str");return String.fromCharCode(255)+String.fromCharCode(254)+n}function Bk(e){var r="",t,a="";if(e==null||e["!ref"]==null)return[];var n=Ga(e["!ref"]),i="",s=[],f;var l=[];var o=e["!data"]!=null;for(f=n.s.c;f<=n.e.c;++f)s[f]=Pa(f);for(var c=n.s.r;c<=n.e.r;++c){i=Ia(c);for(f=n.s.c;f<=n.e.c;++f){r=s[f]+i;t=o?(e["!data"][c]||[])[f]:e[r];a="";if(t===undefined)continue;else if(t.F!=null){r=t.F;if(!t.f)continue;a=t.f;if(r.indexOf(":")==-1)r=r+":"+r}if(t.f!=null)a=t.f;else if(t.t=="z")continue;else if(t.t=="n"&&t.v!=null)a=""+t.v;else if(t.t=="b")a=t.v?"TRUE":"FALSE";else if(t.w!==undefined)a="'"+t.w;else if(t.v===undefined)continue;else if(t.t=="s")a="'"+t.v;else a=""+t.v;l[l.length]=r+"="+a}}return l}function Wk(e,r,t){var a=t||{};var n=e?e["!data"]!=null:a.dense;if(b!=null&&n==null)n=b;var i=+!a.skipHeader;var s=e||{};if(!e&&n)s["!data"]=[];var f=0,l=0;if(s&&a.origin!=null){if(typeof a.origin=="number")f=a.origin;else{var o=typeof a.origin=="string"?Ba(a.origin):a.origin;f=o.r;l=o.c}}var c={s:{c:0,r:0},e:{c:l,r:f+r.length-1+i}};if(s["!ref"]){var h=Ga(s["!ref"]);c.e.c=Math.max(c.e.c,h.e.c);c.e.r=Math.max(c.e.r,h.e.r);if(f==-1){f=h.e.r+1;c.e.r=f+r.length-1+i}}else{if(f==-1){f=0;c.e.r=r.length-1+i}}var u=a.header||[],d=0;var v=[];r.forEach(function(e,r){if(n&&!s["!data"][f+r+i])s["!data"][f+r+i]=[];if(n)v=s["!data"][f+r+i];nr(e).forEach(function(t){if((d=u.indexOf(t))==-1)u[d=u.length]=t;var o=e[t];var c="z";var h="";var p=n?"":Pa(l+d)+Ia(f+r+i);var m=n?v[l+d]:s[p];if(o&&typeof o==="object"&&!(o instanceof Date)){if(n)v[l+d]=o;else s[p]=o}else{if(typeof o=="number")c="n";else if(typeof o=="boolean")c="b";else if(typeof o=="string")c="s";else if(o instanceof Date){
c="d";if(!a.UTC)o=Fr(o);if(!a.cellDates){c="n";o=ur(o)}h=m!=null&&m.z&&Pe(m.z)?m.z:a.dateNF||q[14]}else if(o===null&&a.nullError){c="e";o=0}if(!m){if(!n)s[p]=m={t:c,v:o};else v[l+d]=m={t:c,v:o}}else{m.t=c;m.v=o;delete m.w;delete m.R;if(h)m.z=h}if(h)m.z=h}})});c.e.c=Math.max(c.e.c,l+u.length-1);var p=Ia(f);if(n&&!s["!data"][f])s["!data"][f]=[];if(i)for(d=0;d<u.length;++d){if(n)s["!data"][f][d+l]={t:"s",v:u[d]};else s[Pa(d+l)+p]={t:"s",v:u[d]}}s["!ref"]=Ha(c);return s}function zk(e,r){return Wk(null,e,r)}function Hk(e,r,t){if(typeof r=="string"){if(e["!data"]!=null){var a=Ba(r);if(!e["!data"][a.r])e["!data"][a.r]=[];return e["!data"][a.r][a.c]||(e["!data"][a.r][a.c]={t:"z"})}return e[r]||(e[r]={t:"z"})}if(typeof r!="number")return Hk(e,Wa(r));return Hk(e,Pa(t||0)+Ia(r))}function Vk(e,r){if(typeof r=="number"){if(r>=0&&e.SheetNames.length>r)return r;throw new Error("Cannot find sheet # "+r)}else if(typeof r=="string"){var t=e.SheetNames.indexOf(r);if(t>-1)return t;throw new Error("Cannot find sheet name |"+r+"|")}else throw new Error("Cannot find sheet |"+r+"|")}function Xk(){return{SheetNames:[],Sheets:{}}}function Gk(e,r,t,a){var n=1;if(!t)for(;n<=65535;++n,t=undefined)if(e.SheetNames.indexOf(t="Sheet"+n)==-1)break;if(!t||e.SheetNames.length>=65535)throw new Error("Too many worksheets");if(a&&e.SheetNames.indexOf(t)>=0){var i=t.match(/(^.*?)(\d+)$/);n=i&&+i[2]||0;var s=i&&i[1]||t;for(++n;n<=65535;++n)if(e.SheetNames.indexOf(t=s+n)==-1)break}Fm(t);if(e.SheetNames.indexOf(t)>=0)throw new Error("Worksheet with name |"+t+"| already exists!");e.SheetNames.push(t);e.Sheets[t]=r;return t}function $k(e,r,t){if(!e.Workbook)e.Workbook={};if(!e.Workbook.Sheets)e.Workbook.Sheets=[];var a=Vk(e,r);if(!e.Workbook.Sheets[a])e.Workbook.Sheets[a]={};switch(t){case 0:;case 1:;case 2:break;default:throw new Error("Bad sheet visibility setting "+t);}e.Workbook.Sheets[a].Hidden=t}function jk(e,r){e.z=r;return e}function Kk(e,r,t){if(!r){delete e.l}else{e.l={Target:r};if(t)e.l.Tooltip=t}return e}function Yk(e,r,t){return Kk(e,"#"+r,t)}function Zk(e,r,t){if(!e.c)e.c=[];e.c.push({t:r,a:t||"SheetJS"})}function Jk(e,r,t,a){var n=typeof r!="string"?r:Ga(r);var i=typeof r=="string"?r:Ha(r);for(var s=n.s.r;s<=n.e.r;++s)for(var f=n.s.c;f<=n.e.c;++f){var l=Hk(e,s,f);l.t="n";l.F=i;delete l.v;if(s==n.s.r&&f==n.s.c){l.f=t;if(a)l.D=true}}var o=za(e["!ref"]);if(o.s.r>n.s.r)o.s.r=n.s.r;if(o.s.c>n.s.c)o.s.c=n.s.c;if(o.e.r<n.e.r)o.e.r=n.e.r;if(o.e.c<n.e.c)o.e.c=n.e.c;e["!ref"]=Ha(o);return e}var qk={encode_col:Pa,encode_row:Ia,encode_cell:Wa,encode_range:Ha,decode_col:Da,decode_row:Ra,split_cell:Ua,decode_cell:Ba,decode_range:za,format_cell:ja,sheet_add_aoa:Ya,sheet_add_json:Wk,sheet_add_dom:xb,aoa_to_sheet:Za,json_to_sheet:zk,table_to_sheet:Ob,table_to_book:Rb,sheet_to_csv:Mk,sheet_to_txt:Uk,sheet_to_json:Dk,sheet_to_html:Sb,sheet_to_formulae:Bk,sheet_to_row_object_array:Dk,sheet_get_cell:Hk,book_new:Xk,book_append_sheet:Gk,book_set_sheet_visibility:$k,cell_set_number_format:jk,cell_set_hyperlink:Kk,cell_set_internal_link:Yk,cell_add_comment:Zk,sheet_set_array_formula:Jk,consts:{SHEET_VISIBLE:0,SHEET_HIDDEN:1,SHEET_VERY_HIDDEN:2}};var Qk;function eT(e){Qk=e}function rT(e,r){var t=Qk();var a=r==null?{}:r;if(e==null||e["!ref"]==null){t.push(null);return t}var n=Ga(e["!ref"]);var i=a.FS!==undefined?a.FS:",",s=i.charCodeAt(0);var f=a.RS!==undefined?a.RS:"\n",l=f.charCodeAt(0);var o=new RegExp((i=="|"?"\\|":i)+"+$");var c="",h=[];var u=a.skipHidden&&e["!cols"]||[];var d=a.skipHidden&&e["!rows"]||[];for(var v=n.s.c;v<=n.e.c;++v)if(!(u[v]||{}).hidden)h[v]=Pa(v);var p=n.s.r;var m=false,g=0;t._read=function(){if(!m){m=true;return t.push("\ufeff")}while(p<=n.e.r){++p;if((d[p-1]||{}).hidden)continue;c=Lk(e,n,p-1,h,s,l,i,a);if(c!=null){if(a.strip)c=c.replace(o,"");if(c||a.blankrows!==false)return t.push((g++?f:"")+c)}}return t.push(null)};return t}function tT(e,r){var t=Qk();var a=r||{};var n=a.header!=null?a.header:yb;var i=a.footer!=null?a.footer:Eb;t.push(n);var s=za(e["!ref"]);t.push(_b(e,s,a));var f=s.s.r;var l=false;t._read=function(){if(f>s.e.r){if(!l){l=true;t.push("</table>"+i)}return t.push(null)}while(f<=s.e.r){t.push(Ab(e,s,f,a));++f;break}};return t}function aT(e,r){var t=Qk({objectMode:true});if(e==null||e["!ref"]==null){t.push(null);return t}var a={t:"n",v:0},n=0,i=1,s=[],f=0,l="";var o={s:{r:0,c:0},e:{r:0,c:0}};var c=r||{};var h=c.range!=null?c.range:e["!ref"];if(c.header===1)n=1;else if(c.header==="A")n=2;else if(Array.isArray(c.header))n=3;switch(typeof h){case"string":o=Ga(h);break;case"number":o=Ga(e["!ref"]);o.s.r=h;break;default:o=h;}if(n>0)i=0;var u=Ia(o.s.r);var d=[];var v=0;var p=e["!data"]!=null;var m=o.s.r,g=0;var b={};if(p&&!e["!data"][m])e["!data"][m]=[];var w=c.skipHidden&&e["!cols"]||[];var k=c.skipHidden&&e["!rows"]||[];for(g=o.s.c;g<=o.e.c;++g){if((w[g]||{}).hidden)continue;d[g]=Pa(g);a=p?e["!data"][m][g]:e[d[g]+u];switch(n){case 1:s[g]=g-o.s.c;break;case 2:s[g]=d[g];break;case 3:s[g]=c.header[g-o.s.c];break;default:if(a==null)a={w:"__EMPTY",t:"s"};l=f=ja(a,null,c);v=b[f]||0;if(!v)b[f]=1;else{do{l=f+"_"+v++}while(b[l]);b[f]=v;b[l]=1}s[g]=l;}}m=o.s.r+i;t._read=function(){while(m<=o.e.r){if((k[m-1]||{}).hidden)continue;var r=Fk(e,o,m,d,n,s,c);++m;if(r.isempty===false||(n===1?c.blankrows!==false:!!c.blankrows)){t.push(r.row);return}}return t.push(null)};return t}var nT={to_json:aT,to_html:tT,to_csv:rT,set_readable:eT};if(typeof Kg!=="undefined")e.parse_xlscfb=Kg;e.parse_zip=nk;e.read=mk;e.readFile=gk;e.readFileSync=gk;e.write=xk;e.writeFile=Rk;e.writeFileSync=Rk;e.writeFileAsync=Nk;e.utils=qk;e.writeXLSX=Sk;e.writeFileXLSX=Ik;e.set_fs=er;e.set_cptable=g;e.SSF=Xe;if(typeof nT!=="undefined")e.stream=nT;if(typeof qe!=="undefined")e.CFB=qe;if(typeof require!=="undefined"){var iT=undefined;if((iT||{}).Readable)eT(iT.Readable);try{Qe=undefined}catch(sT){}}}if(typeof exports!=="undefined")make_xlsx_lib(exports);else if(typeof module!=="undefined"&&module.exports)make_xlsx_lib(module.exports);else if(typeof define==="function"&&define.amd)define("xlsx",function(){if(!XLSX.version)make_xlsx_lib(XLSX);return XLSX});else make_xlsx_lib(XLSX);if(typeof window!=="undefined"&&!window.XLSX)try{window.XLSX=XLSX}catch(e){}



// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************
// ****************************************************************************************************************

// varlible \\
const DAY = {
  value: 86400000,
  unit: "ms",
};
const cdn = '<script src="./EZ.js"></script>';
const cdnStyle = '<link rel="stylesheet" href="https://giladmeirson.github.io/EZ/lib/EZ.css">';
const libraryName = "EZ";

canvas = 0;
ctx = 0;
base64 = "";
FadeInterval = 0;
VoiceSrcFile = "";
JsonData = [];
G_Ans='';
CBtoRemember=0;
userText='';
MsgArray=[];


// --------------------------------------------- Adminstrations --------------------------------------------- \\
// html \\

const CloseIt = (e) => {
  //console.log(e.srcElement);
  fadeOut(e.srcElement.parentNode);
};

const removeIt = (elm) => {
  // console.log(elm)
  elm.parentNode.remove();
};

document.addEventListener("DOMContentLoaded", () => {
  console.log('Welcome to EZ.js library.\nfor menu call to "help()" function');
  document.head.innerHTML = cdnStyle+document.head.innerHTML;
  const canArray = elm("canvas");
  if (canArray != false) {
    if (canArray[0].id == "") {
      canArray[0].id = "mycanvas";
    }
    setupCanvas(canArray[0].id);
  }

  const closeBtn = elm(".close");
  if (closeBtn != undefined) {
    for (let i = 0; i < closeBtn.length; i++) {
      const element = closeBtn[i];
      element.onclick = CloseIt;
    }
  }
});

const help = (menu = 0) => {
  let str = ``;
  if (menu == 0) {
    str = `Welcome to EZ.js library.\n`;
    str += `functions menu:\nfor more details info call "help()" functin according this parmeters \nTimes & Date = 1\nDOM = 2\nMath = 3\ncanvas = 4\nAI-models = 5\nGeneral = 0`;
  } else if (menu == 1) {
    str += `-----------------Times & Date-----------------\n`;
    str += `getDate(date) --->\n`;
    str += `this function get date type varlible and return it String format (dd-mm-yyyy)\n`;
    str += `------------------------------------------------\n`;
    str += `getTime(date) --->\n`;
    str += `this function get date type varlible and return the time in String format (hh:mm)\n`;
    str += `------------------------------------------------\n`;
    str += `timeDiff(dateStart,dateEnd) --->\n`;
    str += `this function get 2 dates type varlible calculate the different and return an object\n`;
    str += `object={\ndays : dd,\nhours : hh,\nminutes : mm,\nseconds : ss}`;
  } else if (menu == 2) {
    str += `-----------------DOM-----------------\n`;
    str += `elm(CssTag) --->\n`;
    str += `this function get Css tag like #id or .class or tag name and return the element\n`;
  } else if (menu == 3) {
    str += `-----------------Math-----------------\n`;
    str += `randBetween(startNumber,endNumber) --->\n`;
    str += `this function get two numbers and return random number between the values,(include the end number)\n`;
    str += `------------------------------------------------\n`;
    str += `isPrime(number) --->\n`;
    str += `this function get number and determine if it prime, (true mean its prime number)`;
    str += `------------------------------------------------\n`;
    str += `roundD(number,digit) --->\n`;
    str += `this function get number and amount of digit after the point and return the number after it round`;
  } else if (menu == 4) {
  } else if (menu == 5) {
  }

  console.log(str);
  // return "Made by Gilad Meirson.";
};




// --------------------------------------------- Times & Date --------------------------------------------- \\
const getDate = (date = new Date()) => {
  let day = parseInt(date.getDate());
  let month = parseInt(date.getMonth()) + 1;
  let year = parseInt(date.getFullYear());
  day < 10 ? (day = "0" + day) : (day = day);
  month < 10 ? (month = "0" + month) : (month = month);

  return day + "-" + month + "-" + year;
};

const getTime = (date = new Date()) => {
  let hour = parseInt(date.getHours());
  let min = parseInt(date.getMinutes());
  let sec = parseInt(date.getSeconds());
  hour < 10 ? (hour = "0" + hour) : (hour = hour);
  min < 10 ? (min = "0" + min) : (min = min);
  sec < 10 ? (sec = "0" + sec) : (sec = sec);
  return hour + ":" + min + ":" + sec;
};

const timeDiff = (start, end) => {
  if (
    start == "" ||
    end == "" ||
    start == null ||
    end == null ||
    start == undefined ||
    end == undefined
  ) {
    console.log("Error---> this function need 2 parameters to calaulate.");
    return false;
  }

  let d = new Date(start);
  let t = new Date(end);
  //Days
  let DAYSDiff = (t - d) / DAY.value;
  let leftDays = DAYSDiff % 1;
  DAYSDiff = Math.floor(DAYSDiff);

  //hours
  let HoursDiff = leftDays * 24;
  let leftHours = HoursDiff % 1;
  HoursDiff = Math.floor(HoursDiff);

  //min
  let minDiff = leftHours * 60;
  leftMin = minDiff % 1;
  minDiff = Math.floor(minDiff);

  //sec
  let SecDiff = leftMin * 60;
  SecDiff = Math.floor(SecDiff);

  if (DAYSDiff < 10) {
    DAYSDiff = "0" + DAYSDiff;
  }
  if (HoursDiff < 10) {
    HoursDiff = "0" + HoursDiff;
  }
  if (minDiff < 10) {
    minDiff = "0" + minDiff;
  }
  if (SecDiff < 10) {
    SecDiff = "0" + SecDiff;
  }

  if (DAYSDiff < 1) {
    DAYSDiff = "00";
  }

  if (HoursDiff < 1) {
    HoursDiff = "00";
  }
  if (minDiff < 1) {
    minDiff = "00";
  }

  const returnObject = {
    days: DAYSDiff.toString(),
    hours: HoursDiff,
    minutes: minDiff,
    seconds: SecDiff,
  };

  return returnObject;

  //console.log(returnObject.days,returnObject.hours,returnObject.minutes,returnObject.seconds)
};

// --------------------------------------------- Dom --------------------------------------------- \\

const elm = (tag) => {
  if (tag.includes(".")) {
    //class
    const classs = tag.replace(".", "");
	if (document.getElementsByClassName(classs).length==0) {
		return false;
	}
    return document.getElementsByClassName(classs)
  } else if (tag.includes("#")) {
    //id

    const id = tag.replace("#", "");
	if (document.getElementById(id)==null) {
		return false;
	}
    return document.getElementById(id);
  } 
  else {
	if (document.getElementsByTagName(tag).length==0) {
		return false;
	}
    return document.getElementsByTagName(tag);
  }
};

const Setprops =(tag='body',propsName='something',jsonData={key:'value'})=>{
	const Elm = elm(tag);
	if (Elm==false) {
		return false;
	}
	if (!(propsName.includes('data-'))) {
		propsName=`data-`+propsName;
	}

	if (Elm.length>0) {
		for (let i = 0; i < Elm.length; i++) {
			const element = Elm[i];
			element.setAttribute(propsName,JSON.stringify(jsonData));
			return true
			
		}
	}
	else {
		Elm.setAttribute(propsName,jsonData);
		return true;
	}
}

const Getprops =(tag='body',propsName='')=>{

	if (elm(tag)==false) {
		return false;
	}
	let resArr=[];

	if (elm(tag).length>0) {
		
		for (let i = 0; i < elm(tag).length; i++) {
			const element = 
			elm(tag)[i];
			if (propsName=='') {
				const names = element.getAttributeNames();
				for (let j = 0; j < names.length; j++) {
					const n = names[j];
					if (element.getAttribute(n)!=null) {
						const obj ={
							elementNumber:i,
							propsName:n,
							value:element.getAttribute(n)
						}
						resArr.push(obj);
					}
	

					
				}
			}
			
			else
			{
				if (propsName.includes('data-')==false) {
					propsName=`data-${propsName}`;
			
				}

				if (element.getAttribute(propsName)!=null) {
					resArr.push(JSON.parse(element.getAttribute(propsName)));
				}
			}
			
		}
		return resArr;
	}
	if (propsName.includes('data-')==false) {
		propsName=`data-${propsName}`;

	}


	if (elm(tag)!=false) {
		if (elm(tag).getAttribute(propsName)==null) {
			return false;
		}
		return elm(tag).getAttribute(propsName);
	}
}
// --------------------------------------------- Math --------------------------------------------- \\

const randBetween = (startNumber, endNumber) => {
  if (startNumber == "" || startNumber==undefined) {
    return Math.random();
  }
  if (endNumber == "" || endNumber==undefined) {
    return Math.random() * startNumber;
  }
  if (startNumber >= endNumber) {
    console.log("Error---> the end number smaller or even to startnumber");
    return false;
  }


  return startNumber + Math.round(Math.random() * (endNumber - startNumber));
};

const isPrime = (num) => {
  if (num=='') {
    return defultCallBack('The input is not a number',false);
  }
  num = parseInt(num);
  let flag = false;
  for (let i = 2; i < Math.round(Math.sqrt(num)) + 1; i++) {
    if (num % i == 0) {
      return flag;
    }
  }

  return !flag;
};

const roundD = (num, digit = 0) => {
  if (num == "") {
    console.log("Error the number parm is empty");
    return false;
  }
  if (digit == 0) {
    return Math.floor(num);
  } else {
    return Math.floor(num * 10 ** digit) / 10 ** digit;
  }
};

const sigmoid = (z = 0) => {
  return 1 / (1 + Math.E ** -z);
};

const crossBinaryEntropy=(p,y)=>{
  return -(y*Math.log2(p)+(1-y)*Math.log2(1-p));
}

const softMax=(z,Array_z)=>{
  let sum=0;
  for (let i = 0; i < Array_z.length; i++) {
    const zi = Array_z[i];
    sum+=Math.exp(zi);
  }
  return Math.exp(z)/sum;
}


// --------------------------------------------- canvas --------------------------------------------- \\
const setupCanvas = (canvasId) => {
  canvas = elm(`#${canvasId}`);
  ctx = canvas.getContext("2d");
  return true;
};
const canvasToPng = () => {
  base64 = canvas.toDataURL();
  return base64;
};

const circle = (
  x = canvas.width / 2,
  y = canvas.height / 2,
  radius = 15,
  fillColor = "#000",
  lineColor = "#000"
) => {
  if (canvas == 0) {
    console.log("Error---> there is no canvas element on your html page.");
    return false;
  }
  ctx.beginPath();
  ctx.fillStyle = fillColor;
  ctx.fillStroke = lineColor;
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
  ctx.closePath();
  return true;
};

const clearCanvas = () => {
  if (canvas == 0) {
    console.log("Error---> there is no canvas element on your html page.");
    return false;
  } else {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return true;
  }
};

const square = (
  x = canvas.width / 2,
  y = canvas.height / 2,
  size = 25,
  fillColor = "#000",
  lineColor = "#000"
) => {
  if (canvas == 0) {
    console.log("Error---> there is no canvas element on your html page.");
    return false;
  }
  ctx.fillStyle = fillColor;
  ctx.fillStroke = lineColor;
  ctx.rect(x - size / 2, y - size / 2, size, size);
  ctx.stroke();
  ctx.fill();
  return true;
};

const pointMiddleCanvas = (radius, color) => {
  if (canvas == 0) {
    console.log("Error---> there is no canvas element on your html page.");
    return false;
  }
  circle(canvas.width / 2, canvas.height / 2, radius, color);
  return true;
};

const lineIt = (
  ctxx = ctx,
  X_array = [0, 1, 2, 3, 4, 5],
  Y_array = [0, 50, 60, 100, 30, 60],
  AxisColor = "#ff0000",
  LineColor = "#000",
  AxisWidth = 3,
  LineWidth = 1
) => {
  if (ctxx == undefined || ctxx == "" || ctxx == null) {
    console.log("Error --> no canvas context (ctx) was suplied");
    return false;
  }

  const w = ctx.canvas.width;
  const h = ctx.canvas.height - 10;
  const jumpX = w / X_array.length;
  const jumpY = w / Y_array.length;
  const maxLength =
    X_array.length >= Y_array.length ? X_array.length : Y_array.length;
  const XMax = Math.max(...X_array);
  const YMax = Math.max(...Y_array);

  //draw axis x,y
  ctxx.beginPath();
  ctxx.moveTo(5, h);
  ctxx.lineWidth = AxisWidth;
  ctxx.strokeStyle = AxisColor;
  ctxx.lineTo(5, 0);
  ctxx.moveTo(5, h);
  ctxx.lineTo(w, h);
  ctxx.moveTo(5, h);
  ctxx.stroke();
  ctxx.closePath();

  //draw the mini lines
  ctxx.lineWidth = LineWidth;
  for (let i = 0; i < X_array.length; i++) {
    const x = (X_array[i] / XMax) * w + 5;
    ctxx.beginPath();
    ctxx.moveTo(x, h + 2);
    ctxx.lineTo(x, h + 20);
    ctx.fillText(`${x}`, x, h - 1);
    ctxx.stroke();
    ctxx.closePath();

    const y = (1 - Y_array[i] / YMax) * h;
    ctxx.beginPath();
    ctxx.moveTo(5, y);
    ctxx.lineTo(-5, y);
    ctx.fillText(`${Y_array[i]}`, 6, y + 5);
    ctxx.stroke();
    ctxx.closePath();
  }

  //draw graph
  ctxx.lineWidth = LineWidth;
  ctxx.strokeStyle = LineColor;
  ctxx.beginPath();
  for (let i = 0; i < maxLength; i++) {
    const x = (X_array[i] / XMax) * w + 5;
    const y = (1 - Y_array[i] / YMax) * h;
    ctxx.lineTo(x, y);
  }

  ctxx.stroke();
  ctxx.closePath();
};

// --------------------------------------------- Call Backs --------------------------------------------- \\

const errorCBMnist = (err) => {
  console.log("Error in the Ajax to the Api Model\n", err);
};

const succsesTextToVoice = (dataError) => {
  if (dataError.data[0].name != "" || dataError.data[0].name != undefined) {
    VoiceSrcFile =
      "https://matthijs-speecht5-tts-demo.hf.space/file=" +
      dataError.data[0].name;
    console.log(
      'The Src Output is store in varlible called "VoiceSrcFile" --->',
      VoiceSrcFile
    );
    return VoiceSrcFile;
  } else {
    console.log("Error --->", dataError);
    return false;
  }
};

const sucssesYolo = (dataError) => {
  //console.log(dataError)
  if (dataError.data[0] == undefined || dataError.data[0] == "") {
    defultCallBack();
  } else {
    base64 = dataError.data[0];
    const img = document.createElement("img");
    img.src = base64;
    document.body.append(img);
  }
};
const succsesimageVar = (res) => {
  let imageArray = [];
  let prefix = `https://lambdalabs-stable-diffusion-image-variations.hf.space/file=`;
  if (res.data[0] != undefined) {
    for (let index = 0; index < res.data[0].length; index++) {
      const element = res.data[0][index];
      imageArray.push(element);
    }
  } else {
    console.log("Error---> from Callback---->", res);
  }
};

const succsesCreateTone = (dataError) => {
  if (dataError.data[0].name != "" || dataError.data[0].name != undefined) {
    VoiceSrcFile =
      "https://gradio-generate-tone-main.hf.space/file=" +
      dataError.data[0].name;
    console.log(
      'The Src Output is store in varlible called "VoiceSrcFile" --->',
      VoiceSrcFile
    );
    return VoiceSrcFile;
  } else {
    console.log("Error --->", dataError);
    return false;
  }
};
const defultCallBack = (dataError,BoolRes=true) => {
  console.log("Defult CallBack --->", dataError);
  return BoolRes;
};

function connect(api, body, callback = defultCallBack, method = "POST") {
  // main.js

  // POST request using fetch()
  fetch(api, {
    // Adding method type
    method: method,

    // Adding body or contents to send
    body: JSON.stringify(body),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => callback(json));
}

// --------------------------------------------- AI models --------------------------------------------- \\
const runModel = (modelName, input, CallBack = defultCallBack) => {
  const ttvApi = `https://matthijs-speecht5-tts-demo.hf.space/run/predict`; // text to voice
  const MnistApi = `https://giladthefixer-mnist-classifier.hf.space/run/predict`;
  const Mnist2 = `https://gradio-digit-classifier.hf.space/run/predict`;
  const sentimentApi = `https://giladthefixer-test-sentiment.hf.space/api/predict`;
  const ItDApi = `https://akhaliq-arcanegan.hf.space/api/predict`; // img to draw
  const scApi =
    "https://giladthefixer-sketch-classifier2.hf.space/api/predict/"; //sketch claaifier
  const ivApi =
    "https://lambdalabs-stable-diffusion-image-variations.hf.space/run/predict"; //img varitation
  const GtApi = `https://gradio-generate-tone-main.hf.space/run/predict`; // create sound
  const vttApi =
    "https://gradio-automatic-speech-recognition-main.hf.space/run/predict"; //sound to text
  const yoloApi = `https://kadirnar-yolov8.hf.space/run/predict`;
  const yoloApi2 = "https://kadirnar-yolov7.hf.space/run/predict";
  const NLPApi = `https://huggingfaceh4-starchat-playground.hf.space/run/predict`;
  const NLPApi2 = 'https://huggingfaceh4-falcon-chat.hf.space/run/predict';

  //text input ------>text to voice work and sentiment analysis work and create tone work !
  if (modelName == "text to voice") {
    if (input[0] == "" || input[0] == undefined) {
      defultCallBack("Error ---> the input text is empty");
      return;
    }
    if (input[1] == "" || input[1] == undefined) {
      input[1] = "BDL (male)";
    }

    const objectToSend = {
      data: input,
    };
    if (CallBack == undefined || CallBack == "") {
      CallBack = succsesTextToVoice;
    }
    connect(ttvApi, objectToSend, CallBack);
  } else if (modelName == "sentiment analysis") {
    const objectToSend = {
      data: input,
    };
    if (CallBack == undefined || CallBack == "") {
      CallBack = defultCallBack;
    }

    connect(sentimentApi, objectToSend, CallBack);
  } else if (modelName == "create tone") {
    const objectToSend = {
      data: input,
    };
    if (CallBack == undefined || CallBack == "") {
      CallBack = succsesCreateTone;
    }
    connect(GtApi, objectToSend, CallBack);
  } else if (modelName == "yolo") {
    if (input.length < 5) {
      if (input[0] == "" || input[0] == undefined) {
        console.log("Error ---> empty values ! ");
      } else {
        input[1] = "kadirnar/yolov8n-v8.0";
        input[2] = 640;
        input[3] = 0.25;
        input[4] = 0.45;
      }
    }
    const objectToSend = {
      data: input,
    };
    if (CallBack == undefined || CallBack == "") {
      CallBack = sucssesYolo;
    }
    connect(yoloApi, objectToSend, CallBack);
  } else if (modelName == "yolo2") {
    if (input.length < 5) {
      if (input[0] == "" || input[0] == undefined) {
        console.log("Error ---> empty values ! ");
      } else {
        input[1] = "kadirnar/yolov7-tiny-v0.1";
        input[2] = 640;
        input[3] = 0.25;
        input[4] = 0.45;
      }
    }
    const objectToSend = {
      data: input,
    };
    if (CallBack == undefined || CallBack == "") {
      CallBack = sucssesYolo;
    }
    connect(yoloApi2, objectToSend, CallBack);
  } else if (modelName == "sketch classifier") {
    if (input[0] == "" || input[0] == undefined) {
      console.log("Error --> empty wrong values");
      return false;
    } else {
      const objectToSend = {
        data: input,
      };
      if (CallBack == undefined || CallBack == "") {
        CallBack = defultCallBack;
      }
      connect(scApi, objectToSend, CallBack);
    }
  } else if (modelName == "mnist") {
    if (input[0] == "" || input[0] == undefined) {
      console.log("Error --> empty wrong values");
      return false;
    } else {
      const objectToSend = {
        data: input,
      };
      if (CallBack == undefined || CallBack == "") {
        CallBack = defultCallBack;
      }
      connect(MnistApi, objectToSend, CallBack);
    }
  } else if (modelName == "image to draw") {
    if (input[0] == "" || input[0] == undefined) {
      console.log("Error --> empty wrong values");
      return false;
    }
    if (input[1] == "" || input[1] == undefined) {
      input[1] = "version 0.4";
    }

    const objectToSend = {
      data: input,
    };
    if (CallBack == undefined || CallBack == "") {
      CallBack = defultCallBack;
    }
    connect(ItDApi, objectToSend, CallBack);
  } else if (modelName == "image variations") {
    if (input[0] == "" || input[0] == undefined) {
      console.log("Error --> empty wrong values");
      return false;
    }
    if (input[1] == "" || input[1] == undefined) {
      input[1] = 3;
    }
    if (input[2] == "" || input[2] == undefined) {
      input[2] = 1;
    }
    if (input[3] == "" || input[3] == undefined) {
      input[3] = 25;
    }
    if (input[4] == "" || input[4] == undefined) {
      input[4] = 0;
    }

    const objectToSend = {
      data: input,
    };
    if (CallBack == undefined || CallBack == "") {
      CallBack = succsesimageVar;
    }
    connect(ivApi, objectToSend, CallBack);
  }
  else if (modelName == 'NLP') {
    userInput=input
    if (userInput==undefined || userInput==null ||userInput=='' || typeof(userInput)!='object') {
      return defultCallBack('there is a error in Input Values',false);
    }
    if (typeof(CallBack)!='function') {
      CallBack=defultCallBack;
    }
    BeginTextGenerator(userInput[0],'',input[1],input[2],CallBack);
    



    
  }
 
};

const speak = (text = 'Please write your text here and we will speak up for you.') => {
  // Create a new SpeechSynthesisUtterance object
  let utterance = new SpeechSynthesisUtterance();
  // Set the text and voice of the utterance
  utterance.text = text;
  utterance.voice = window.speechSynthesis.getVoices()[0];

  // Speak the utterance
  if (text !='' && text !=undefined) {
    window.speechSynthesis.speak(utterance);
    return true;

  }
  else {
    return defultCallBack('No text was defind to speak()',false);
  }
}

const listen =(callBack=defultCallBack)=>{
  let recognization = new webkitSpeechRecognition();
  recognization.onstart = () => {
  }
  recognization.onresult = (e) => {
     var transcript = e.results[0][0].transcript;

    callBack(transcript);
  }
  recognization.start();
}

//chat modol functions//

const changeRangeChatModol=(rangeInput)=>{
  elm(`#${rangeInput.id}-p`).innerHTML=`${rangeInput.id.replace('Fal_','').replace('_input','')} : ${rangeInput.value}`
}

const RenderChatModal = (placeHolderTag = 'body',withEnterKey=true) => {
  let str = `
  <div id="Chat-Fal-Container">
  <div class="wrap-C">
      <div class="header">
          <img class="msg-chat-bot-img" src="https://raw.githubusercontent.com/GiladMeirson/EZ/main/Assets/AIprofile.png" alt="">
         <p>Chat With Me ! <span class="Close-Chat-fal-con">X</span></p>
         
      </div>
      <div id="Msg-container">
          





      </div>
      <div id="msg-Input-container" class="wrap-C">
          <div id="slider-chat-container" class="wrap-R">
              <div id="temp-container" class="wrap-C">
                  <p id="Fal_Temperature_input-p">Temperature : 0.8</p>
                  <input class="slider" onchange="changeRangeChatModol(this)" type="range" value="0.8" min="0.1" max="2" step="0.1" name="Fal_Temp_input" id="Fal_Temperature_input">
              </div>
              <div id="sample-container" class="wrap-C">
                  <p id="Fal_sampling_input-p">sampling : 0.9</p>
                  <input class="slider" onchange="changeRangeChatModol(this)" type="range" value="0.9" min="0.1" max="2" step="0.1" name="Fal_sample_input" id="Fal_sampling_input">
              </div>
               

          </div>

          <textarea name="UserTextInput" id="UserTextInput"   draggable="false"></textarea>
          <button onclick="ManageChat()" class="glow-on-hover" id="Send-Chat-Btn">Send</button>
      </div>
  </div>
</div>
  `;

  $(placeHolderTag).html(str);
  document.getElementById('UserTextInput').addEventListener('keypress',(e)=>{
    if (e.key==='Enter') {
        event.preventDefault();
        ManageChat();
    }
})

}


const ManageChat =()=>{
  const text = elm('#UserTextInput').value;
  userText=text;
  const d = new Date();
  elm('#UserTextInput').value=''
  elm('#Msg-container').innerHTML+=`
  <div class="human-msg-con" style="width: 100%;">
  <p class="human-msg" >${text} <br> <span class="timemsgspan">${d.getHours()} : ${d.getMinutes()}</span> </p></div>
  `;
  elm('#Msg-container').innerHTML+=`
  <div class="bot-msg-con" style="width: 100%;">
  <p class="bot-msg" >... <br> <span class="timemsgspan">${d.getHours()} : ${d.getMinutes()}</span></p></div>
  `;
  const Temp = elm('#Fal_Temperature_input').value;
  const sampling =  elm('#Fal_sampling_input').value;
  // console.log(text,Temp,sampling);
  BeginTextGenerator(text,'',Temp,sampling,RenderToChat,true);

}
const RenderToChat=(data)=>{
  const msgarr = elm('.bot-msg')
  // console.log('answer from render',data,msgarr);
  const d = new Date();
  
  msgarr[msgarr.length-1].innerHTML=data+`<br> <span class="timemsgspan">${d.getHours()} : ${d.getMinutes()}</span>`

}

//chat modol functions//


const BeginTextGenerator = (text,response='',temp=0.8,sampling=0.9,callBack=defultCallBack,isEachWord=true,session_hash='1a2b3c4d5h')=>{
  // text =  the commend msg you want to send
  // respone please send it like that: '' without anything else
  // temp between 0 to 2 more high more hot
  // sampling recomanded 0.9
  // callback that the answer will go to ! 
  //isEachWord if you want to get each words (to typing effect) true mean yes, false mean just one time
  //session_hash sometimes get probalme with all the render of the words so need to change the session_hash to somthing else..
  if (response=='') {
    CBtoRemember=callBack;
  }
  const NLPApi2 = 'https://huggingfaceh4-falcon-chat.hf.space/run/predict';
  if (response!='' && response!='finish') {
    G_Ans=response;
    if (isEachWord) {
      CBtoRemember(G_Ans);
    }
    
  }
  if (response=='finish') {
    CBtoRemember(G_Ans);
    return G_Ans
  }

  input = [text,[],'',temp,sampling];
  const objectToSend = {
    fn_index:1,
    data: input,
    session_hash : session_hash,
    
  };
  connect(NLPApi2,objectToSend,SpeicalCB);
}

const SpeicalCB = (data)=>{
  if (data.data[0]==null ||data.data[0]==undefined) {
    BeginTextGenerator('','finish')
    return G_Ans;
  }
  let respon = data.data[0][0][1];
  BeginTextGenerator('',respon);
  
}

// --------------------------------------------- Colors --------------------------------------------- \\
function rgbToHsv(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);

  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    v = max;

  let d = max - min;
  s = max == 0 ? 0 : d / max;

  if (max == min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h, s, v };
}

function hsvToRgb(h, s, v) {
  let r, g, b;
  let i = Math.floor(h * 6);
  let f = h * 6 - i;
  let p = v * (1 - s);
  let q = v * (1 - f * s);
  let t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0:
      (r = v), (g = t), (b = p);
      break;
    case 1:
      (r = q), (g = v), (b = p);
      break;
    case 2:
      (r = p), (g = v), (b = t);
      break;
    case 3:
      (r = p), (g = q), (b = v);
      break;
    case 4:
      (r = t), (g = p), (b = v);
      break;
    case 5:
      (r = v), (g = p), (b = q);
      break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

function hexToRgb(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h, s, l };
}

function hslToRgb(h, s, l) {
  let r, g, b;
  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

function rgbToHex(r, g, b) {
  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };
  const hexR = componentToHex(r);
  const hexG = componentToHex(g);
  const hexB = componentToHex(b);
  return "#" + hexR + hexG + hexB;
}

function GetArrayOfColorsWithVarition(
  hexColor = "#aaddff",
  val = 0.2,
  amount = 255
) {
  // Remove the '#' character from the hex color string
  hexColor = hexColor.replace("#", "");

  // Split the hex color string into three substrings for the red, green, and blue values
  let red = parseInt(hexColor.substring(0, 2), 16);
  let green = parseInt(hexColor.substring(2, 4), 16);
  let blue = parseInt(hexColor.substring(4, 6), 16);

  // Determine the minimum and maximum value for the RGB components
  let minRGB = Math.min(red, green, blue);
  let maxRGB = Math.max(red, green, blue);

  // Calculate the difference between the maximum and minimum values
  let diff = maxRGB - minRGB;

  // Initialize an empty array for the output colors
  let outputColors = [];

  // Generate colors with varying shades
  for (let i = 0; i <= amount; i++) {
    let r = red + (i - 128) * (diff / 256) + (-val + Math.random() * val * 2);
    let g = green + (i - 128) * (diff / 256) + (-val + Math.random() * val * 2);
    let b = blue + (i - 128) * (diff / 256) + (-val + Math.random() * val * 2);

    // Ensure that RGB values are within the valid range (0-255)
    r = Math.max(0, Math.min(255, Math.round(r)));
    g = Math.max(0, Math.min(255, Math.round(g)));
    b = Math.max(0, Math.min(255, Math.round(b)));

    // Convert the RGB values to a hex color string and add it to the output array
    let hex =
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    outputColors.push(hex);
  }

  // Return the array of output colors
  return outputColors;
}

// --------------------------------------------- encrypt strings --------------------------------------------- \\

const encryptDecrypt = (InputStr, flag = true) => {
  InputStr = InputStr.toString();
  let res = "";
  if (flag) {
    for (let i = 0; i < InputStr.length; i++) {
      let CharCode = InputStr.charCodeAt(i);
      if (CharCode % 2 == 0) {
        CharCode = CharCode * 2 + 1;
      } else {
        CharCode = (CharCode - 1) * 2;
      }
      res += String.fromCharCode(CharCode);
    }
    return res;
  } else {
    return decrypt(InputStr);
  }
};

const decrypt = (InputStr) => {
  InputStr = InputStr.toString();
  let res = "";
  for (let i = 0; i < InputStr.length; i++) {
    let CharCode = InputStr.charCodeAt(i);
    console.log("before de", CharCode);
    if (CharCode % 2 != 0) {
      CharCode = (CharCode - 1) / 2;
    } else {
      CharCode = CharCode / 2 + 1;
    }
    console.log("after de", CharCode);
    res += String.fromCharCode(CharCode);
  }
  return res;
};

// --------------------------------------------- Array --------------------------------------------- \\

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
const toUniqArray=(array)=>{
  let uniq=[...new Set(array)];
  return uniq
}
const wordsArrayEncoder=(WordsArray,inputArray)=>{
  const Coder=[];
  for (let i = 0; i < WordsArray.length; i++) {
    const word = WordsArray[i];
    if (inputArray.includes(word)) {
      Coder.push(1);
    }
    else{
      Coder.push(0);
    }
    
  }
  return Coder;
}

// --------------------------------------------- styling --------------------------------------------- \\



const fadeOut = (elm) => {
  let fadelvl = 1;
  FadeInterval = setInterval(() => {
    elm.style.opacity = fadelvl;
    fadelvl = fadelvl - 0.03;
    if (fadelvl <= 0) {
      clearInterval(FadeInterval);
    }
  }, 10);
};
const fadeIn = (elm) => {
  let fadelvl = 0;
  FadeInterval = setInterval(() => {
    elm.style.opacity = fadelvl;
    fadelvl = fadelvl + 0.03;
    if (fadelvl >= 1) {
      clearInterval(FadeInterval);
    }
  }, 10);
};

const popIt = (
  title = "this is a title",
  message = "content content content content content",
  status = "good",
  button = "OK"
) => {
  if (status == "good") {
    const divpop = document.createElement("div");
    divpop.classList.add("popup-m", "wrap-C", "popStyleGood");
    divpop.style.opacity = 0;
    document.body.appendChild(divpop);
    divpop.innerHTML += `<h1 class="titleContent">${title}</h1>`;
    divpop.innerHTML += `<p class="contentContent">${message}</p>`;
    divpop.innerHTML += `<button onclick="removeIt(this)" class="btn-long btnContent">${button}</button>`;

    fadeIn(divpop);
    return true;
  } else if (status == "bad") {
    const divpop = document.createElement("div");
    divpop.classList.add("popup-m", "wrap-C", "popStylebad");
    divpop.style.opacity = 0;
    document.body.appendChild(divpop);
    divpop.innerHTML += `<h1 class="titleContent">${title}</h1>`;
    divpop.innerHTML += `<p class="contentContent">${message}</p>`;
    divpop.innerHTML += `<button onclick="removeIt(this)" class="btn-long btnContentbad">${button}</button>`;

    fadeIn(divpop);
    return true;
  } else {
    console.log(
      'Error ---> status input must be "good" or "bad", check this argument. '
    );
    return false;
  }
};

const colorIt = (tag = "body", hexColor = "#ffff00") => {
  const el = elm(tag);
  if (el.length == undefined) {
    el.style.backgroundColor = hexColor;
    return true;
  } else {
    for (let i = 0; i < el.length; i++) {
      const element = el[i];
      element.style.backgroundColor = hexColor;
    }
  }
};

const barIt = (
  placeHolderTag = "body",
  labels = ["red", "green", "blue", "yellow", "Purple"],
  values = [50, 100, 75, 25, 50],
  boardWidth = 50,
  colors = true,
  rotate = 0
) => {
  if (labels.length != values.length) {
    defultCallBack("Error ---> the arrays isnt in a same length");
    return false;
  }
  if (colors == false) {
    colors = ["blue"];
  } else if (colors == true) {
    colors = [
      "red",
      "green",
      "blue",
      "yellow",
      "Purple",
      "PapayaWhip",
      "Orange",
      "LightPink",
      "LightSeaGreen",
      "LightSlateGray",
      "OliveDrab",
      "Peru",
    ];
  }
  let forLater = ``;
  MaxVal = Math.max(...values);
  let htmlstring = `<div  style="border: 1px black solid; border-left:3px black solid;border-bottom:3px black solid; width: ${boardWidth}vw; height: ${boardWidth}vh;"
  id="conBoard">
  <div style="display: flex;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;" id="contentGraph">`;
  for (let i = 0; i < values.length; i++) {
    const val = values[i];
    const label = labels[i];
    const color = colors[i % colors.length];

    htmlstring += `<div class="barItBar" title="the values is : ${val}\n the label is : ${label}" style="background: ${color}; border:1px black solid;border-bottom: none; width: ${
      (boardWidth * 0.75) / values.length
    }vw; height: ${(val / MaxVal) * (boardWidth * 0.9)}vh;" id="level${i}">
    </div>`;
    forLater += `<p style="width: ${
      (boardWidth * 0.3) / values.length
    }vw; rotate:${rotate}deg; margin:0;">${label}</p>`;
  }
  htmlstring += `</div><div style="display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;" id="contentGraph">${forLater}
  </div></div>`;

  ph = elm(placeHolderTag);
  if (ph.length==0) {
    ph.innerHTML = htmlstring;

  }
  else{
    for (let i = 0; i < ph.length; i++) {
      const p = ph[i];
      p.innerHTML=htmlstring;
      
    }
  }
  return true;
};

const tableIt = (
  tag = "body",
  json = {
    col: ["col1", "col2", "col3"],
    data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  },
  flag = true
) => {
  const Colums = json.col;
  const Data = json.data;
  let len = Colums.length;
  let str = `<table id="${libraryName}Table" class="${libraryName}Table">`;
  str += `<tr>`;
  if (flag) {
    str += `<th>Row</th>`;
    len++;
  }
  for (let i = 0; i < Colums.length; i++) {
    const th = Colums[i];
    str += `<th>${th}</th>`;
  }
  let counter = 0;
  for (let i = 0; i < Data.length; i++) {
    if (i % Colums.length == 0) {
      counter++;
      str += `</tr>`;
      str += `<tr>`;
      if (flag) {
        str += `<td>${counter}</td>`;
      }
    }
    const somestring = Data[i];
    str += `<td>${somestring}</td>`;
  }
  str += `</tr>`;
  let ph = elm(tag);
  if (ph.length > 0) {
    ph = ph[0];
  }
  ph.innerHTML += str;
  return true;
};

// --------------------------------------------- files --------------------------------------------- \\

const TextFile = (
  FileName = "sample.txt",
  Content = "Content Content Content Content\nContent Content Content Content"
) => {
  const link = document.createElement("a");
  const content = Content;
  const file = new Blob([content], { type: "text/plain" });
  link.href = URL.createObjectURL(file);
  link.download = FileName;
  link.click();
  URL.revokeObjectURL(link.href);
};

const copy = (text='put here the text you want to copy',callBack=defultCallBack)=>{
  if (text!= undefined && text != '') {
    let i_element = `<input style="display:none" type="text" id="toDeleteNow" value="${text}"/>`;
    document.body.innerHTML+=i_element;

    i_element=elm('#toDeleteNow');
    i_element = document.getElementById('toDeleteNow');
    i_element.focus();
    i_element.select();
    navigator.clipboard.writeText(i_element.value);
    i_element.remove();
    callBack(text,true);
  }
  else{
    return defultCallBack('no text was insert to copy()',false);
  }

}

function convertTo64(file, CallBack) {
  var reader = new FileReader();
  reader.readAsDataURL(file.files[0]);
  reader.onload = function () {
    //console.log(reader.result);
    base64 = reader.result;
    return CallBack(base64);
  };

  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}

const fileToBase64 = (inputTypeFile, CallBack = defultCallBack) => {
  return convertTo64(inputTypeFile, CallBack);
};

const base64ToImgTag = (Basse64, placeHolderTag = "body") => {
  const ph = elm(placeHolderTag);
  if (ph.length >= 1) {
    ph[0].innerHTML += `<img src="${Basse64}" alt="">`;
  } else {
    ph.innerHTML += `<img src="${Basse64}" alt="">`;
  }
  return true;
};

function handleFileSelect() {
  var file = this.event.target.files[0];

  var reader = new FileReader();
  reader.onload = function (event) {
    var csvData = event.target.result;
    var jsonData = csvToJson(csvData);
    // console.log(jsonData);
    JsonData.push(jsonData);

    return jsonData;
  };

  reader.readAsText(file);
}

function readTextFile(cb) {
  var file = this.event.target.files[0];

  var reader = new FileReader();
  reader.onload = function (event) {
    var stringText = event.target.result;

    //console.log(stringText);
    cb(stringText);
  };

  reader.readAsText(file);
}

function csvToJson(csvData) {
  var lines = csvData.split("\n");
  var result = [];

  var headers = lines[0].split(",");
  for (var i = 1; i < lines.length - 1; i++) {
    var obj = {};
    var currentLine = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j];
    }

    result.push(obj);
  }

  toreturn = JSON.stringify(result);
  return JSON.parse(toreturn);
}
// --------------------------------------------- service --------------------------------------------- \\

class EZ {
  constructor() {
    // --------- About --------- \\

    this.version = "1.0.0";
    this.cdn = '<script src="./EZ.js"></script>';
    this.cdnStyle = `<link rel="stylesheet" href="./EZ.css">`;
    this.name = "EZ";
    // --------- Vars --------- \\
    this.canvas = 0;
    this.ctx = 0;
    this.base64String = "";
    this.fadeInterval = 0;
    this.voiceSrcFileString = "";
    this.VoiceSrcPrefix = "https://matthijs-speecht5-tts-demo.hf.space/file=";
    this.ImageVarPrefix = `https://lambdalabs-stable-diffusion-image-variations.hf.space/file=`;
    this.CreateTonePrefix = `https://gradio-generate-tone-main.hf.space/file=`;
    this.day = DAY;
    this.api = {
      textToVoice: `https://matthijs-speecht5-tts-demo.hf.space/run/predict`,
      mnist: `https://giladthefixer-mnist-classifier.hf.space/run/predict`,
      sentimentAnalysis: `https://giladthefixer-test-sentiment.hf.space/api/predict`,
      imageToDraw: "https://akhaliq-arcanegan.hf.space/api/predict",
      sketchClassifier:
        "https://giladthefixer-sketch-classifier2.hf.space/api/predict/",
      imageVariations:
        "https://lambdalabs-stable-diffusion-image-variations.hf.space/run/predict",
      createSound:
        "https://gradio-automatic-speech-recognition-main.hf.space/run/predict",
      yolo: "https://kadirnar-yolov8.hf.space/run/predict",
      yolo2: "https://kadirnar-yolov7.hf.space/run/predict",
    };
    this.jsonStore = [];
    this.modelsNames = [
      "text to voice",
      "sentiment analysis",
      "create tone",
      "yolo",
      "yolo2",
      "sketch classifier",
      "mnist",
      "image to draw",
      "image variations",
    ];

    // --------- functions --------- \\

    //dates
    this.dateToString = getDate;
    this.timeToString = getTime;
    this.timeDiff = timeDiff;
    //element
    this.elm = elm;
    //math
    this.rand = randBetween;
    this.isPrime = isPrime;
    this.round = roundD;
    //canvas
    this.CanvasToString = canvasToPng;
    this.cirlce = circle;
    this.square = square;
    this.clearCanvas = clearCanvas;
    this.middle = pointMiddleCanvas;
    this.lineIt = lineIt;
    this.barIt = barIt;

    //comuncation
    this.connectTo = connect;
    //AI Models
    this.runModel = runModel;
    this.speak=speak;
    this.listen=listen;
    //colors
    this.rgbToHsv = rgbToHsv;
    this.hsvToRgb = hsvToRgb;
    this.hexToRgb = hexToRgb;
    this.rgbToHsl = rgbToHsl;
    this.rgbToHex = rgbToHex;
    this.GetArrayOfColorsVarition = GetArrayOfColorsWithVarition;
    //Encripters
    this.encryptDecrypt = encryptDecrypt;
    //Array
    this.shuffle = shuffle;
    //styling
    this.fadeIn = fadeIn;
    this.fadeOut = fadeOut;
    this.plop = popIt;
    this.colorIt = colorIt;
    this.tableIt = tableIt;
    //files
    this.downloadTextFile = TextFile;
    this.fileToBase64String = fileToBase64;
    this.base64StringToImgTag = base64ToImgTag;
    this.inChangeFileToJson = handleFileSelect;
    this.csvStringToJson = csvToJson;
    this.copy=copy;
  }
}

const ez = new EZ();


