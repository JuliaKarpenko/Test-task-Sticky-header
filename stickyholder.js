// function that is able to tu on/off sticky of headers
function initStickyHolder(container, headers) { 			

	//flag, is feature sticky is activated
	var isSticky;
	//header, that copies scrolled header, when sticky is enabled
	var stickyHeader;

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
		setStickyHeaderVisibility(true);
	}

	//disable sticky feature
	function disable() {
		isSticky = false;
		setStickyHeaderVisibility(false);
	}

	//calculate position of header, show sticky header with proper information
	function onScroll() {
		var lastHidden = getLastHiddenHeader();

		if (lastHidden != null) {
			//update information in sticky header and visibility state
			setStickyHeaderVisibility(isSticky);
			stickyHeader.className = lastHidden.className;
			stickyHeader.innerHTML = lastHidden.innerHTML;
			stickyHeader.style.backgroundColor = lastHidden.style.backgroundColor;
			stickyHeader.classList.add("sticky");
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