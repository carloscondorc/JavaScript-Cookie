/*!
 * JavaScript Cookie
 *
 * @fileoverview JavaScript Cookie
 *
 * @author Radovan Janjic <rade@it-radionica.com>
 * @copyright 2013-2014 Radovan Janjic <rade@it-radionica.com>
 * @license http://opensource.org/licenses/BSD-3-Clause
 */

var Cookie = function (name, value, days) {
	"use strict";
	
	// Cookie name
	this.name = name;
	
	// Set cookie
	this.set = function (value, days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			var expires = "; expires=" + date.toGMTString();
		} else 
		var expires = null;
		document.cookie = this.name + "=" + value + expires + "; path=/";
		return this;
	}
	
	// Set cookie if value is passed
	if (value) this.set(value, days);
	
	// Get cookie value
	this.get = function () {
		var c = document.cookie.split(';');
		for (var i in c) {
			while (c[i].charAt(0) == ' ') c[i] = c[i].substring(1, c[i].length);
			if (c[i].indexOf(this.name + "=") == 0) return c[i].substring((this.name + "=").length, c[i].length);
		}
		return null;
	}
	
	// Remove cookie
	this.remove = function () { this.set(null, -1); }
	
	// Check is cookie exists
	this.check = function () { return !!this.get(); }
}