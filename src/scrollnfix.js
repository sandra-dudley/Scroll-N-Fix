/*!
 * Scroll'N'Fix v1.0.0: Fixes the background image of an element when it reaches the top of the browser
 * (c) 2016 Sandra Dudley
 * MIT License
 * https://github.com/sandra-dudley/Scroll-N-Fix
 */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory(root));
    } else if (typeof exports === 'object') {
        module.exports = factory(root);
    } else {
        root.scrollnfix = factory(root);
    }
})(typeof global !== "undefined" ? global : this.window || this.global, function(root) {

    'use strict';

    //
    // Variables
    //
    var scrollnfix = {}; // Object for public APIs
    var supports = !!document.querySelector && !!root.addEventListener; // Feature test
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var settings, container, targets, target, isIOS; // Placeholder variables

    // Default settings
    var defaults = {};


    //
    // Methods
    //

    /**
     * Merge two or more objects. Returns a new object.
     * @private
     * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
     * @param {Object}   objects  The objects to merge together
     * @returns {Object}          Merged values of defaults and options
     */
    var extend = function() {

        // Variables
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;

        // Check if a deep merge
        if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
            deep = arguments[0];
            i++;
        }

        // Merge the object into the extended object
        var merge = function(obj) {
            for (var prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    // If deep merge and property is an object, merge properties
                    if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        // Loop through each object and conduct a merge
        for (; i < length; i++) {
            var obj = arguments[i];
            merge(obj);
        }

        return extended;

    };

    /**
     * Find all elements that has a particular attribute. Returns an array.
     * @private
     * @param {string} attribute
     */

    //http://stackoverflow.com/questions/9496427/get-elements-by-attribute-when-queryselectorall-is-not-available-without-using-l
    var getAllElementsWithAttribute = function (attribute) {
        var matchingElements = [];
        var allElements = document.getElementsByTagName('*');
        for (var i = 0, n = allElements.length; i < n; i++) {
            if (allElements[i].getAttribute(attribute) !== null) {
                // Element exists with attribute. Add to array.
                matchingElements.push(allElements[i]);
            }
        }
        return matchingElements;
    };

    /**
     * calculates the position of the element relatively to the top of the browser. Returns a number.
     * @private
     * @param {elem} container: parent of the element with the background image
     * @param {elem} target: element with the background image
     */

    var findPos = function(container, target) {
        return window.pageYOffset - container.offsetTop - target.offsetTop;
    };

    /**
     * changes the background attachment value depending on the position of the target
     * @private
     */
    var toggleFixScroll = function() {
        targets = getAllElementsWithAttribute("data-fix");
        for (var i = 0; i < targets.length; i++) {
            var target = targets[i];
            if (isIOS === false) { // problem with ios, doesn't like the fixed background

                if (findPos(container, target) > 0 && target.style.backgroundAttachment != "fixed") {
                    target.style.backgroundAttachment = "fixed";
                } else if (findPos(container, target) < 0 && target.style.backgroundAttachment != "scroll") {
                    target.style.backgroundAttachment = "scroll";
                }
            }
        }
    };

    /**
     * Initialize Plugin
     * @public
     * @param {Object} options User settings
     */
    scrollnfix.init = function(options) {
        console.log("initialisation");
        // feature test
        if (!supports) return;

        // Selectors and variables
        settings = extend(defaults, options || {}); // Merge user options with defaults

        isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
        targets = getAllElementsWithAttribute("data-fix");
        container = targets[0].parentNode;
        container.style.position = "relative";

        window.addEventListener("scroll", toggleFixScroll, false);

    };


    //
    // Public APIs
    //

    return scrollnfix;

});
