// function that is able to tu on/off sticky of headers
function initStickyHolder(container, headers) { 			

	//flag, is feature sticky is activated
	var isSticky;
	//header, that copies scrolled header, when sticky is enabled
	var stickyHeader;
	//temp variable, that keeps currently displayed sticky header;
	var currentHeader;

	//create sticky header and hide it, start listen onscroll event
	function setup() {
		if (container != undefined) {
			isSticky = false;
			stickyHeader = document.createElement("div");
			setStickyHeaderVisibility(false);
			container.appendChild(stickyHeader);

			window.onscroll = onScroll;
		}
	}

	//init sticky feature
	function initialize() {
		isSticky = true;
		var lastHidden = getLastHiddenHeader();
		//it is needed to stick header if it is the first one in list
		if (lastHidden != null && getTop(lastHidden) == 0) {
			setStickyHeaderVisibility(true);
			currentHeader = lastHidden;
		}
	}

	//disable sticky feature
	function disable() {
		isSticky = false;
		//it is needed to unstick header if it is the first one in list
		if (currentHeader != null && getTop(currentHeader) == 0) {
			setStickyHeaderVisibility(false);
			currentHeader = null;
		}
	}

	//calculate position of header, show sticky header with proper information
	function onScroll() {
		var lastHidden = getLastHiddenHeader();

		if (lastHidden != null) {
			//reset currently displayed header if it stayes in Y position  = 0
			//it is needed for cases, when we turn off/on sticky feature and first header is in Y position = 0
			if (getTop(lastHidden) == 0) {
				currentHeader = null;
			}

			//change state of sticky header only in cases when displayed header has changed
			//it helps to prevent sudden showing sticky header, when we just turn on feature or sudden hiding header, 
			//when we just turn off feature
			if (currentHeader == null || currentHeader != lastHidden) {
				//update information in sticky header and visibility state
				setStickyHeaderVisibility(isSticky);
				currentHeader = lastHidden;
				stickyHeader.className = lastHidden.className;
				stickyHeader.innerHTML = lastHidden.innerHTML;
				stickyHeader.style.backgroundColor = lastHidden.style.backgroundColor;
				stickyHeader.classList.add("sticky");
			} 
		} 
	}

	//last header, that absolutely hidden or partly visible is that one, that should be shown at sticky header
	function getLastHiddenHeader() {
		var last;
		for (i = 0; i < headers.length; i++) {
			if (getTop(headers[i]) <= 0) {
				last = headers[i];
			} 
		} 
		return last;
	}

	//get top position of element
	function getTop(element) {
		return element.getBoundingClientRect().top;
	}

	//set visibility of sticky header
	function setStickyHeaderVisibility(isVisible) {
		stickyHeader.style.visibility = isVisible ? "visible" : "hidden";
	}

	return {
		setup,
		initialize,
		disable
	}

}