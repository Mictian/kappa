define(['../core'], function(k)
{
	'use strict';

	if (!k.utils)
	{
		k.utils = {};
	}

	k.utils.obj = (function(){

        /*
        * @func Util function used to apply "Inheritance"
        *
        * @param {Object} superType Object to inherit from
        * @param {Object} subType Enhanced Object
        * @returns void
        */
        var __inherit = function (subType, superType)
        {
            for (var p in superType) {
                if (superType.hasOwnProperty(p)) {
                    subType[p] = superType[p];
                }
            }

            function __() {
                this.constructor = subType;
            }
            __.prototype = superType.prototype;
            /* jshint newcap:false */
            subType.prototype = new __();
        };

		/*
        * @func Util function used to define properties in objects, Common to define alias, insteas od using instance.options.property, used instance.property
        *	It is VERY IMPORTANT to notice that all propoerties are setted and get from a property called options in the context object
        *
        * @param {Object} ctx Object containing the options. Father object
        * @param {String} propName Name of the property to add/alias
        * @param {Function} getter Optional function used ot override the default getter
        * @param {Function} setter Optional function used ot override the default setter
        * @returns void
        */
        var __defineProperty = function(ctx, propName, getter, setter)
        {
			Object.defineProperty(ctx, propName, {
				// Create a new getter for the property
				get: getter || function () {
					return ctx.options[propName];
				},
				// Create a new setter for the property
				set: setter || function (val) {
					ctx.options[propName] = val;
				}
			});
        };

		/*
        * @func Util function to extend an object. This function accepts n arguments and the first one will be the same as the retuned one (the extended)
        * @param {Object} obj object to extend form
        * @returns {Object} The initial object with the added properties form next arguments
        */
		var __extend = function(obj)
		{
			var args = Array.prototype.slice.call(arguments, 1);
			for (var i = 0; i < args.length; i++) {
				if (args[i]) {
					for (var prop in args[i]) {
						obj[prop] = args[i][prop];
					}
				}
			}
			return obj;
		};

		/*
        * @func Util function to clone objects
        * @param {Object} obj object to clone
        * @returns {Object} A copy of the passed in object
        */
		var __clone = function(obj)
		{
            return JSON.parse(JSON.stringify(obj));
		};

		/*
        * @func Util function to extend an object. This function accepts n arguments and the first one will be the same as the retuned one (the extended)
        * @param {Object} obj object to extend form
        * @returns {Object} A new object with the added properties form next arguments
        */
		var __extendInNew = function(obj)
		{
			var args = Array.prototype.slice.call(arguments, 1),
                resOjb = __clone(obj);
			for (var i = 0; i < args.length; i++) {
				if (args[i]) {
					for (var prop in args[i]) {
						resOjb[prop] = args[i][prop];
					}
				}
			}
			return resOjb;
		};

        /*
        * @func Util function to determine if an object is or not an array
        * @param {Object} o object to check its type
        * @returns {Boolean} True if the object passed in is an Array or false otherwise
        */
		var __isArray = function(o)
		{
            return Object.prototype.toString.call(o) === '[object Array]';
		};

		/*
        * @func Util function to determine if an object is or not a String
        * @param {Object} s object to check its type
        * @returns {Boolean} True if the object passed in is a String or false otherwise
        */
		var __isString = function(s)
		{
            return Object.prototype.toString.call(s) === '[object String]';
		};

        /*
        * @func Util function to determine if an object is or not a Regular Expression
        * @param {Object} s object to check its type
        * @returns {Boolean} True if the object passed in is a Regular Expresion, false otherwise
        */
		var __isRegExp = function(r)
		{
            return Object.prototype.toString.call(r) === '[object RegExp]';
		};

		/*
        * @func Util function to determine if an object is or not a Number
        * @param {Object} n object to check its type
        * @returns {Boolean} True if the object passed in is a Number, false otherwise
        */
		var __isNumber = function(n)
		{
			return Object.prototype.toString.call(n) === '[object Number]';
		};

		/*The next function are copied from underscorejs.org. These function are here because I want to be in control of all the code I manage.
		Besides I like that I my code pass my JSHint rule, which are much more stringer that the onces applied by underscore.js */

		/*General Variables*/
		var breaker = {};
		var ArrayProto = Array.prototype;

		var nativeKeys         = Object.keys,
			nativeForEach      = ArrayProto.forEach;

		/*
        * @func Util function to determine if an thing is or not a Object
        * @param {Thing} n object to check its type
        * @returns {Boolean} True if the thing passed in is a Object, false otherwise
        */
		var __isObject = function(obj)
		{
			return obj === Object(obj);
		};

		/* @func Alias of hasOwnProperty just for brevety
        * @param {Object} obj object to check ownership of property
        * @param {String} key Property name to verify
        * @returns {Boolean} True if the object posses that property
        */
		var __has = function(obj, key) {
			return hasOwnProperty.call(obj, key);
		};

		/* @func Returns the list of own properties of an object
        * @param {Object} obj object from which extract keys
        * @returns {Array} List of string keys of property names of the object passed in
        */
		var __keys = function(obj) {
			if (!__isObject(obj))
			{
				return [];
			}
			if (nativeKeys)
			{
				return nativeKeys(obj);
			}
			var keys = [];
			for (var key in obj){
				if (__has(obj, key))
				{
					keys.push(key);
				}
			}
			return keys;
		};

		/* @func Iterate over the passed in first parameter calling the iterator with the specified context
        * @param {Object} obj object to traverse
        * @param {Function} iterator function called per each item founded in obj
        * @param {Object} context object from which extract keys
        * @returns {Array} List of string keys of property names of the object passed in
        */
		var __each = function(obj, iterator, context) {
			if (obj === null)
			{
				return obj;
			}
			var i,
				length;
			if (nativeForEach && obj.forEach === nativeForEach)
			{
				obj.forEach(iterator, context);
			}
			else if (obj.length === +obj.length)
			{
				for (i = 0, length = obj.length; i < length; i++)
				{
					if (iterator.call(context, obj[i], i, obj) === breaker) {
						return;
					}
				}
			}
			else
			{
				var keys = __keys(obj);
				for (i = 0, length = keys.length; i < length; i++)
				{
					if (iterator.call(context, obj[keys[i]], keys[i], obj) === breaker){
						return;
					}
				}
			}
			return obj;
		};

		/* @func Iterate over the passed in first parameter and mapping each of its valur according the iteration logic
        * @param {Object} obj object to traverse
        * @param {Function} iterator function called per each item founded in obj
        * @param {Object} context object from which extract keys
        * @returns {Array} List of string keys of property names of the object passed in
        */
		var __map =  function(obj, iterator, context)
		{
			var results = [];
			if (obj === null)
			{
				return results;
			}
			__each(obj, function(value, index, list) {
				results.push(iterator.call(context, value, index, list));
			});
			return results;
		};

        return {
            inherit: __inherit,
            extend: __extend,
            extendInNew: __extendInNew,
            clone: __clone,
            isArray: __isArray,
            isString: __isString,
            isRegExp: __isRegExp,
            isNumber: __isNumber,
            isObject: __isObject,
            keys: __keys,
            each: __each,
            map: __map,
            defineProperty: __defineProperty
        };

    })();

    return k;
});