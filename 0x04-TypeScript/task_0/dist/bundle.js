/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Write your code in the main.ts file:

Write an interface named Student that accepts the following elements:
firstName(string), lastName(string), age(number), and location(string)

Create two students
Create an array named studentsList containing the two variables

Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
Each row should contain the first name of the student and the location
Requirements:

When running, Webpack should return No type errors found.
Every variable should use TypeScript when possible.
*/
var studentOne = {
    firstName: 'Liz',
    lastName: 'Muthoni',
    age: 22,
    location: 'Eldoret',
};
var studentTwo = {
    firstName: 'Juma',
    lastName: 'Otieno',
    age: 21,
    location: 'Nairobi',
};
var studentsList = [studentOne, studentTwo];
/**
 * generate a table with first name of the student and the location
 *
 * @param stdArr list of students
 */
function genTable(stdArr) {
    // create <table> and <tbody>
    var tbl = document.createElement('table');
    var tblbody = document.createElement('tbody');
    // create title row
    var titleRow = document.createElement('tr');
    var fNameTitle = document.createElement('th');
    fNameTitle.appendChild(document.createTextNode('First name'));
    var locationTitle = document.createElement('th');
    locationTitle.appendChild(document.createTextNode('Location'));
    titleRow.appendChild(fNameTitle);
    titleRow.appendChild(locationTitle);
    tblbody.appendChild(titleRow);
    for (var _i = 0, stdArr_1 = stdArr; _i < stdArr_1.length; _i++) {
        var student = stdArr_1[_i];
        // create row
        var row = document.createElement('tr');
        // create td
        var nameDetail = document.createElement('td');
        nameDetail.appendChild(document.createTextNode("" + student.firstName));
        var locationDetail = document.createElement('td');
        locationDetail.appendChild(document.createTextNode("" + student.location));
        row.appendChild(nameDetail);
        row.appendChild(locationDetail);
        tblbody.appendChild(row);
    }
    tbl.appendChild(tblbody);
    document.body.appendChild(tbl);
}
genTable(studentsList);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7Ozs7OztFQWVFO0FBU0YsSUFBTSxVQUFVLEdBQVk7SUFDMUIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsUUFBUSxFQUFFLFNBQVM7SUFDbkIsR0FBRyxFQUFFLEVBQUU7SUFDUCxRQUFRLEVBQUUsU0FBUztDQUNwQjtBQUVELElBQU0sVUFBVSxHQUFZO0lBQzFCLFNBQVMsRUFBRSxNQUFNO0lBQ2pCLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLFNBQVM7Q0FDcEI7QUFFRCxJQUFNLFlBQVksR0FBbUIsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFFOUQ7Ozs7R0FJRztBQUNILFNBQVMsUUFBUSxDQUFDLE1BQWlCO0lBQ2pDLDZCQUE2QjtJQUM3QixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFaEQsbUJBQW1CO0lBQ25CLElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFOUMsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUU5RCxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELGFBQWEsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRS9ELFFBQVEsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVwQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTlCLEtBQXNCLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTSxFQUFFO1FBQXpCLElBQU0sT0FBTztRQUNoQixhQUFhO1FBQ2IsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxZQUFZO1FBQ1osSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFVLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBRyxPQUFPLENBQUMsU0FBVyxDQUFDLENBQUMsQ0FBQztRQUV4RSxJQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFHLE9BQU8sQ0FBQyxRQUFVLENBQUMsQ0FBQyxDQUFDO1FBRTNFLEdBQUcsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVoQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzFCO0lBRUQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvbWFpbi50c1wiKTtcbiIsIi8qXG5Xcml0ZSB5b3VyIGNvZGUgaW4gdGhlIG1haW4udHMgZmlsZTpcblxuV3JpdGUgYW4gaW50ZXJmYWNlIG5hbWVkIFN0dWRlbnQgdGhhdCBhY2NlcHRzIHRoZSBmb2xsb3dpbmcgZWxlbWVudHM6IFxuZmlyc3ROYW1lKHN0cmluZyksIGxhc3ROYW1lKHN0cmluZyksIGFnZShudW1iZXIpLCBhbmQgbG9jYXRpb24oc3RyaW5nKVxuXG5DcmVhdGUgdHdvIHN0dWRlbnRzXG5DcmVhdGUgYW4gYXJyYXkgbmFtZWQgc3R1ZGVudHNMaXN0IGNvbnRhaW5pbmcgdGhlIHR3byB2YXJpYWJsZXNcblxuVXNpbmcgVmFuaWxsYSBKYXZhc2NyaXB0LCByZW5kZXIgYSB0YWJsZSBhbmQgZm9yIGVhY2ggZWxlbWVudHMgaW4gdGhlIGFycmF5LCBhcHBlbmQgYSBuZXcgcm93IHRvIHRoZSB0YWJsZVxuRWFjaCByb3cgc2hvdWxkIGNvbnRhaW4gdGhlIGZpcnN0IG5hbWUgb2YgdGhlIHN0dWRlbnQgYW5kIHRoZSBsb2NhdGlvblxuUmVxdWlyZW1lbnRzOlxuXG5XaGVuIHJ1bm5pbmcsIFdlYnBhY2sgc2hvdWxkIHJldHVybiBObyB0eXBlIGVycm9ycyBmb3VuZC5cbkV2ZXJ5IHZhcmlhYmxlIHNob3VsZCB1c2UgVHlwZVNjcmlwdCB3aGVuIHBvc3NpYmxlLlxuKi9cblxuaW50ZXJmYWNlIFN0dWRlbnQge1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgYWdlOiBudW1iZXI7XG4gIGxvY2F0aW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IHN0dWRlbnRPbmU6IFN0dWRlbnQgPSB7XG4gIGZpcnN0TmFtZTogJ0xpeicsXG4gIGxhc3ROYW1lOiAnTXV0aG9uaScsXG4gIGFnZTogMjIsXG4gIGxvY2F0aW9uOiAnRWxkb3JldCcsXG59XG5cbmNvbnN0IHN0dWRlbnRUd286IFN0dWRlbnQgPSB7XG4gIGZpcnN0TmFtZTogJ0p1bWEnLFxuICBsYXN0TmFtZTogJ090aWVubycsXG4gIGFnZTogMjEsXG4gIGxvY2F0aW9uOiAnTmFpcm9iaScsXG59XG5cbmNvbnN0IHN0dWRlbnRzTGlzdDogQXJyYXk8U3R1ZGVudD4gPSBbc3R1ZGVudE9uZSwgc3R1ZGVudFR3b107XG5cbi8qKlxuICogZ2VuZXJhdGUgYSB0YWJsZSB3aXRoIGZpcnN0IG5hbWUgb2YgdGhlIHN0dWRlbnQgYW5kIHRoZSBsb2NhdGlvblxuICpcbiAqIEBwYXJhbSBzdGRBcnIgbGlzdCBvZiBzdHVkZW50c1xuICovXG5mdW5jdGlvbiBnZW5UYWJsZShzdGRBcnI6IFN0dWRlbnRbXSkge1xuICAvLyBjcmVhdGUgPHRhYmxlPiBhbmQgPHRib2R5PlxuICBjb25zdCB0YmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICBjb25zdCB0Ymxib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcblxuICAvLyBjcmVhdGUgdGl0bGUgcm93XG4gIGNvbnN0IHRpdGxlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICBjb25zdCBmTmFtZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgZk5hbWVUaXRsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnRmlyc3QgbmFtZScpKTtcblxuICBjb25zdCBsb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgbG9jYXRpb25UaXRsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnTG9jYXRpb24nKSk7XG5cbiAgdGl0bGVSb3cuYXBwZW5kQ2hpbGQoZk5hbWVUaXRsZSk7XG4gIHRpdGxlUm93LmFwcGVuZENoaWxkKGxvY2F0aW9uVGl0bGUpO1xuXG4gIHRibGJvZHkuYXBwZW5kQ2hpbGQodGl0bGVSb3cpO1xuXG4gIGZvciAoY29uc3Qgc3R1ZGVudCBvZiBzdGRBcnIpIHtcbiAgICAvLyBjcmVhdGUgcm93XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgIC8vIGNyZWF0ZSB0ZFxuICAgIGNvbnN0IG5hbWVEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIG5hbWVEZXRhaWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7c3R1ZGVudC5maXJzdE5hbWV9YCkpO1xuXG4gICAgY29uc3QgbG9jYXRpb25EZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgIGxvY2F0aW9uRGV0YWlsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke3N0dWRlbnQubG9jYXRpb259YCkpO1xuXG4gICAgcm93LmFwcGVuZENoaWxkKG5hbWVEZXRhaWwpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChsb2NhdGlvbkRldGFpbCk7XG5cbiAgICB0Ymxib2R5LmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cblxuICB0YmwuYXBwZW5kQ2hpbGQodGJsYm9keSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGJsKTtcbn1cblxuZ2VuVGFibGUoc3R1ZGVudHNMaXN0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=