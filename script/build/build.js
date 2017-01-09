/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _marking = __webpack_require__(1);

	var _marking2 = _interopRequireDefault(_marking);

	var _search = __webpack_require__(2);

	var _search2 = _interopRequireDefault(_search);

	var _eventlistener = __webpack_require__(3);

	var _eventlistener2 = _interopRequireDefault(_eventlistener);

	var _resize = __webpack_require__(4);

	var _resize2 = _interopRequireDefault(_resize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	window.onload = init;

	var searchInput = document.createElement("input");
	var searchButton = document.createElement("input");

	var searchBlock = document.createElement("form");
	var contentBlock = document.createElement("div");

	var pageBtnNext = document.createElement("input");

	var elementMainBlock = document.getElementById("mainBlock");

	searchBlock.className = "searchBlock";
	searchInput.id = "searchInput";
	searchInput.type = "search";
	searchInput.placeholder = "what are you interested in?";
	searchInput.setAttribute("onclick", "return false;");

	searchButton.id = "searchButton";
	searchButton.value = "search";
	searchButton.type = "button";
	contentBlock.id = "contentBlock";
	contentBlock.style.minWidth = "380px";

	pageBtnNext.type = "button";
	pageBtnNext.className = "pageBtn";
	pageBtnNext.id = "pageBtnNext";

	function init() {
	    elementMainBlock.appendChild(searchBlock);
	    searchBlock.appendChild(searchInput);
	    searchBlock.appendChild(searchButton);
	    elementMainBlock.appendChild(contentBlock);

	    addList();
	    addButton();
	}

	function addList() {
	    var resultList = document.createElement("ul");
	    resultList.id = "resultList";
	    contentBlock.appendChild(resultList);
	}

	function removeList() {
	    resultList.remove();
	}

	function addButton() {
	    var pageBtnBlock = document.createElement("div");
	    elementMainBlock.appendChild(pageBtnBlock);
	    pageBtnBlock.id = "pageBtnBlock";
	}

	function removeButton() {
	    pageBtnBlock.remove();
	}

	function addNewVideo(title, url, chanel, chanelId, date, description, preview) {
	    var resultBlock = document.createElement("li");
	    var resultLink = document.createElement("a");
	    var resultChanel = document.createElement("a");
	    var resultDate = document.createElement("p");
	    var resultDescription = document.createElement("p");
	    var resultPreview = document.createElement("img");

	    resultList.appendChild(resultBlock);
	    resultBlock.className = "resultBlock";

	    resultBlock.appendChild(resultLink);
	    resultLink.className = "resultLink";
	    resultLink.setAttribute("href", url);
	    resultLink.innerHTML = title;

	    resultBlock.appendChild(resultChanel);
	    resultChanel.className = "resultChanel";
	    resultChanel.setAttribute("href", chanelId);
	    resultChanel.innerHTML = chanel;

	    resultBlock.appendChild(resultDate);
	    resultDate.className = "resultDate";
	    resultDate.innerHTML = date;

	    resultBlock.appendChild(resultDescription);
	    resultDescription.className = "resultDescription";
	    resultDescription.innerHTML = description;

	    resultLink.appendChild(resultPreview);
	    resultPreview.className = "resultPreview";
	    resultPreview.setAttribute("src", preview);
	}

	function addPageButtonNext() {
	    pageBtnBlock.appendChild(pageBtnNext);
	    pageBtnNext.value = ">";
	    pageBtnBlock.style.width = "25px";
	}

	function addPageButtonPrev() {
	    var pageBtnPrev = document.createElement("input");
	    pageBtnPrev.type = "button";
	    pageBtnPrev.className = "pageBtn";
	    pageBtnPrev.id = "pageBtnPrev";

	    pageBtnBlock.insertBefore(pageBtnPrev, pageBtnNext);
	    pageBtnPrev.value = "<";
	    pageBtnBlock.style.width = "90px";
	}

	function addPageButton() {
	    var pageBtnLeft = document.createElement("input");
	    var pageBtnRight = document.createElement("input");
	    var pageBtnCenter = document.createElement("input");

	    pageBtnLeft.type = "button";
	    pageBtnRight.type = "button";
	    pageBtnCenter.type = "button";

	    pageBtnLeft.className = "pageBtn";
	    pageBtnRight.className = "pageBtn";
	    pageBtnCenter.className = "pageBtn";

	    pageBtnLeft.id = "pageBtnLeft";
	    pageBtnRight.id = "pageBtnRight";
	    pageBtnCenter.id = "pageBtnCenter";

	    pageBtnBlock.appendChild(pageBtnRight);
	    pageBtnBlock.insertBefore(pageBtnCenter, pageBtnNext);
	    pageBtnBlock.insertBefore(pageBtnLeft, pageBtnPrev);
	    pageBtnBlock.style.width = "225px";
	}

	function valuePageButton(numLeft, numCenter, numRight) {
	    pageBtnRight.value = numRight;
	    pageBtnCenter.value = numCenter;
	    pageBtnLeft.value = numLeft;
	}

	exports.searchInput = searchInput;
	exports.searchButton = searchButton;
	exports.addNewVideo = addNewVideo;
	exports.addList = addList;
	exports.removeList = removeList;

	exports.addButton = addButton;
	exports.removeButton = removeButton;
	exports.addPageButtonNext = addPageButtonNext;
	exports.addPageButtonPrev = addPageButtonPrev;
	exports.addPageButton = addPageButton;
	exports.valuePageButton = valuePageButton;

	exports.elementMainBlock = elementMainBlock;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _marking = __webpack_require__(1);

	var _marking2 = _interopRequireDefault(_marking);

	var _eventlistener = __webpack_require__(3);

	var _eventlistener2 = _interopRequireDefault(_eventlistener);

	var _resize = __webpack_require__(4);

	var _resize2 = _interopRequireDefault(_resize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var searchInput = _marking2.default.searchInput;
	var searchButton = _marking2.default.searchButton;
	var addNewVideo = _marking2.default.addNewVideo;
	var addList = _marking2.default.addList;
	var removeList = _marking2.default.removeList;
	var addPageButtonNext = _marking2.default.addPageButtonNext;
	var addButton = _marking2.default.addButton;
	var removeButton = _marking2.default.removeButton;

	var chooseClientW = _resize2.default.chooseClientW;

	var searchValue = void 0;
	var tmpSearchValue = void 0;
	var nextRequest = "";

	document.addEventListener("mouseup", searchBtnListener);

	searchInput.addEventListener("keyup", searchInputVal);
	searchInput.addEventListener("keypress", function (key) {
	    if (key.keyCode == 13) {
	        tmpSearchValue = searchValue;
	        key.preventDefault();
	        createRequest();
	    }
	});

	function searchInputVal(key) {
	    searchValue = searchInput.value;

	    if (searchInput.value > 0) {
	        searchButton.style.background = "#f18719";
	    }

	    if (key.keyCode == 8 || key.keyCode == 46 || searchValue.length == 0) {
	        searchButton.style.background = "silver";
	        removeList();
	        addList();
	        removeButton();
	        addButton();
	    }
	}

	function createRequest() {
	    var urlForRequest = "https://www.googleapis.com/youtube/v3/search?pageToken=" + nextRequest + "&part=snippet&maxResults=15&q=" + searchValue + "&key=AIzaSyB1KxbUy-Faf0ZWydEneqSfvST2_gqH36E";
	    var xhr = new XMLHttpRequest();
	    xhr.open("GET", urlForRequest, true);
	    xhr.send();

	    xhr.onload = function () {
	        var objVideoData = void 0;
	        var responseObj = JSON.parse(this.responseText)["items"];
	        nextRequest = JSON.parse(this.responseText).nextPageToken;
	        for (var i = 0; i < 15; i++) {
	            objVideoData = {
	                videoTitle: responseObj[i].snippet.title,
	                videoLook: "https://www.youtube.com/watch?v=" + responseObj[i].id.videoId,
	                videoChanel: responseObj[i].snippet.channelTitle,
	                videoChanelId: responseObj[i].snippet.channelId,
	                publishedAt: responseObj[i].snippet.publishedAt.slice(0, 10),
	                description: responseObj[i].snippet.description,
	                thumbnails: responseObj[i].snippet.thumbnails.medium.url
	            };

	            addNewVideo(objVideoData.videoTitle, objVideoData.videoLook, objVideoData.videoChanel, objVideoData.videoChanelId, objVideoData.publishedAt, objVideoData.description, objVideoData.thumbnails);
	            chooseClientW();

	            if (!document.getElementById("pageBtnCenter")) {
	                addPageButtonNext();
	            }
	            document.getElementById("resultList").style.width = document.getElementsByTagName("li").length * 310 + "px";
	        }
	    };
	}

	function searchBtnListener(e) {
	    if (e.target.id == "searchButton" && searchInput.value.length > 0 && tmpSearchValue != searchValue) {
	        tmpSearchValue = searchValue;
	        createRequest();
	    }
	    if (document.getElementById("pageBtnCenter")) {
	        var limit = Math.floor(document.documentElement.clientWidth / 310);
	        var totalPages = Math.ceil(document.getElementsByTagName("li").length / limit);

	        if (document.getElementById("pageBtnCenter").value >= totalPages - 1) {
	            createRequest();
	        }
	    }
	}

	exports.searchBtnListener = searchBtnListener;
	exports.searchInputVal = searchInputVal;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _marking = __webpack_require__(1);

	var _marking2 = _interopRequireDefault(_marking);

	var _search = __webpack_require__(2);

	var _search2 = _interopRequireDefault(_search);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var elementMainBlock = _marking2.default.elementMainBlock;

	var addPageButtonPrev = _marking2.default.addPageButtonPrev;
	var addPageButton = _marking2.default.addPageButton;
	var valuePageButton = _marking2.default.valuePageButton;

	var posUl = -10;
	var countPage = 1;
	var liBlock = document.getElementsByTagName("li");

	document.addEventListener("mousedown", elementMainBlockListener); // page switch, paging

	elementMainBlock.addEventListener("mouseover", elementMainBlockListenerOver);
	elementMainBlock.addEventListener("mouseout", elementMainBlockListenerOut);

	function elementMainBlockListener(e) {

	    var limit = Math.floor(document.documentElement.clientWidth / 310); //li for 1 page
	    var totalPages = Math.ceil(document.getElementsByTagName("li").length / limit); //

	    var numLeft = countPage - 1;
	    var numRight = countPage + 1;

	    // page switch
	    if (e.target.id == "pageBtnNext" && countPage < totalPages) {
	        moveRight();
	    }

	    if (e.target.id == "pageBtnPrev" && countPage > 1) {
	        moveLeft();
	    }

	    function moveRight() {
	        posUl = posUl - 310 * limit;
	        document.getElementById("resultList").style.transition = "transform 0.5s";
	        document.getElementById("resultList").style.transform = "translate3D(" + posUl + "px, 0px, 0px";
	        countPage++;

	        if (!document.getElementById("pageBtnPrev")) {
	            addPageButtonPrev();
	        }

	        if (countPage > 2 && !document.getElementById("pageBtnCenter")) {
	            addPageButton();
	        }
	    }

	    function moveLeft() {
	        posUl = posUl + 310 * limit;
	        document.getElementById("resultList").style.transition = "transform 0.5s";
	        document.getElementById("resultList").style.transform = "translate3D(" + posUl + "px, 0px, 0px";
	        countPage--;
	    }

	    // paging
	    if (document.getElementById("pageBtnCenter")) {
	        var _numLeft = countPage - 1;
	        var _numRight = countPage + 1;

	        if (_numLeft < 1) {
	            document.getElementById("pageBtnLeft").style.visibility = "hidden";
	        } else if (_numLeft >= 1) {
	            document.getElementById("pageBtnLeft").style.visibility = "visible";
	        }
	        valuePageButton(_numLeft, countPage, _numRight);
	    }

	    var coordinateBefore = void 0;
	    var coordinateAfter = void 0;

	    if (e.changedTouches == undefined) {
	        coordinateBefore = e.pageX;
	    } else {
	        coordinateBefore = e.changedTouches[0].pageX;
	    }

	    //  swipe is disabled because of bug:(
	    // document.addEventListener("mouseup", moveUp);

	    function moveUp(ev) {
	        // ev.preventDefault();
	        if (ev.changedTouches == undefined) {
	            coordinateAfter = ev.pageX;
	        } else {
	            coordinateAfter = ev.changedTouches[0].pageX;
	        }

	        if (coordinateBefore > coordinateAfter && countPage < totalPages) {
	            moveRight();
	            document.removeEventListener("mouseup", moveUp);
	        }

	        if (coordinateBefore < coordinateAfter && countPage > 1) {
	            moveLeft();
	            document.removeEventListener("mouseup", moveUp);
	        }
	    }
	}

	function elementMainBlockListenerOver(e) {
	    if (e.target.id == "pageBtnNext" && document.getElementById("pageBtnCenter")) {
	        document.getElementById("pageBtnRight").style.color = "#555";
	    }

	    if (e.target.id == "pageBtnPrev" && document.getElementById("pageBtnCenter")) {
	        document.getElementById("pageBtnLeft").style.color = "#555";
	    }
	}

	function elementMainBlockListenerOut(e) {
	    if (e.target.id == "pageBtnNext" && document.getElementById("pageBtnCenter")) {
	        document.getElementById("pageBtnRight").style.color = "silver";
	    }

	    if (e.target.id == "pageBtnPrev" && document.getElementById("pageBtnCenter")) {
	        document.getElementById("pageBtnLeft").style.color = "silver";
	    }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	window.addEventListener('resize', chooseClientW);
	var limit = void 0;

	function chooseClientW() {
	    var clienPageWidth = document.documentElement.clientWidth;

	    if (clienPageWidth < 680) {
	        document.getElementById("contentBlock").style.width = 350 + "px";
	        limit = 1;
	    }

	    if (clienPageWidth >= 680 && clienPageWidth < 990) {
	        document.getElementById("contentBlock").style.width = 680 + "px";
	        limit = 2;
	    }

	    if (clienPageWidth >= 990 && clienPageWidth < 1300) {
	        document.getElementById("contentBlock").style.width = 990 + "px";
	        limit = 3;
	    }

	    if (clienPageWidth >= 1300) {
	        document.getElementById("contentBlock").style.width = 1300 + "px";
	        limit = 4;
	    }
	}
	exports.chooseClientW = chooseClientW;

/***/ }
/******/ ]);