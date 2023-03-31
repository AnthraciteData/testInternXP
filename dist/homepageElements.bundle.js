/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./homePage/homePageElements.js":
/*!**************************************!*\
  !*** ./homePage/homePageElements.js ***!
  \**************************************/
/***/ (function() {

eval("const body = document.querySelector(\"body\");\nconst navbar = document.querySelector(\".navbar\")\nconst menu = document.querySelector(\".menu-list\");\nconst menuBtn = document.querySelector(\".menu-btn\");\nconst cancelBtn = document.querySelector(\".cancel-btn\");\nvar resources = \"resources\"\nmenuBtn.onclick = () => {\n    menu.classList.add(\"active\");\n    menuBtn.classList.add(\"hide\");\n    body.classList.add(\"disabledScroll\");\n}\ncancelBtn.onclick = () => {\n    menu.classList.remove(\"active\");\n    menuBtn.classList.remove(\"hide\");\n    body.classList.remove(\"disabledScroll\");\n}\n\nwindow.onscroll = () => {\n    this.scrollY > 20 ? navbar.classList.add(\"sticky\") : navbar.classList.remove(\"sticky\");\n}\n\nwindow.toStudySpace = function () {\n    location.href = \"../studySpace/study-space\";\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob21lUGFnZS9ob21lUGFnZUVsZW1lbnRzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lUGFnZS9ob21lUGFnZUVsZW1lbnRzLmpzPzMzZDgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIilcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtbGlzdFwiKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnRuXCIpO1xuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtYnRuXCIpO1xudmFyIHJlc291cmNlcyA9IFwicmVzb3VyY2VzXCJcbm1lbnVCdG4ub25jbGljayA9ICgpID0+IHtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFNjcm9sbFwiKTtcbn1cbmNhbmNlbEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImRpc2FibGVkU2Nyb2xsXCIpO1xufVxuXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5zY3JvbGxZID4gMjAgPyBuYXZiYXIuY2xhc3NMaXN0LmFkZChcInN0aWNreVwiKSA6IG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwic3RpY2t5XCIpO1xufVxuXG53aW5kb3cudG9TdHVkeVNwYWNlID0gZnVuY3Rpb24gKCkge1xuICAgIGxvY2F0aW9uLmhyZWYgPSBcIi4uL3N0dWR5U3BhY2Uvc3R1ZHktc3BhY2VcIjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./homePage/homePageElements.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./homePage/homePageElements.js"]();
/******/ 	
/******/ })()
;