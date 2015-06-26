// JavaScript Document
var imgLoc = "assets/img";

function toggleContent(parent) {

	var contentId = parent.getAttribute("id") + "_content";
	var curDisplay = document.getElementById(contentId).style.display;
	
	closeAccordion();
	
	if (curDisplay=="block") {
		document.getElementById(contentId).style.display="none";
		parent.getElementsByClassName("accordion_arrow").item(0).setAttribute("src", imgLoc + "/dropdown-arrow.png");
	} else {
		document.getElementById(contentId).style.display="block";
		parent.getElementsByClassName("accordion_arrow").item(0).setAttribute("src", imgLoc + "/dropdown-arrow-up.png");
	}
}

function closeAccordion() {
	var parent = document.getElementById("accordion_frame");
	for (var i = 0; i < parent.childNodes.length; i++) {
    	if (parent.childNodes[i].className == "accordion_content") {
			parent.childNodes.item(i).style.display="none";
    	}        
	}

	var accordionImages = parent.getElementsByTagName("img");
	for (var i = 0; i < accordionImages.length; i++) {
		if (accordionImages.item(i).className=="accordion_arrow" && accordionImages.item(i).getAttribute("src") == imgLoc + "/dropdown-arrow-up.png") {
			accordionImages.item(i).setAttribute("src", imgLoc + "/dropdown-arrow.png");
		}
	}
	
	
}

function initAccordion() {
	insertArrows();
	closeAccordion();
	toggleContent(document.getElementById("sec1"));
}

function insertArrows() {
	var parent = document.getElementById("accordion_frame");
	
	for (var i = 0; i < parent.childNodes.length; i++) {
    	if (parent.childNodes[i].className == "accordion_header") {
			var arrowImg = document.createElement("img");
			arrowImg.setAttribute("src", "assets/img/dropdown-arrow.png");
			arrowImg.setAttribute("class", "accordion_arrow");
			arrowImg.setAttribute("alt", "Dropdown Arrow");
  			parent.childNodes.item(i).appendChild(arrowImg);
    	}        
	}
}

/*function enhanceMenu() {
	var menu = document.getElementById("accordion_menu");
	var links = menu.getElementsByTagName("a");

	for (var i = 0; i < links.length; i ++) {
		links.item(i).setAttribute("onClick", "toggleContent(" + 
			links.item(i).getAttribute("href").substring(1) + ")");
	}
}*/

/* REPLACED WITH enhanceMenu() */
/*function generateMenu() {
	var menu = document.getElementById("accordion_menu");
	var accordionFrame = document.getElementById("accordion_frame");
	var accordionHeader = null;
	var menuItemText = "Error generating menu";
	var linkText = null;
	
	for (var i = 0; i < accordionFrame.childNodes.length; i++) {
		//Find an accordion header
    	if (accordionFrame.childNodes[i].className == "accordion_header") {
			
			accordionHeader = accordionFrame.childNodes[i];
			//get the id to be used for link text
			linkText = accordionHeader.getAttribute("id");
			//get menu text
			menuItemText = accordionHeader.getElementsByTagName("h3").item(0).innerHTML;
			
			//create menu item using text
			var menuItem = document.createElement("li");
			var menuLink = document.createElement("a");
			menuLink.setAttribute("href", "#" + linkText);		
			menuLink.setAttribute("onClick", "toggleContent(" + linkText + ")");
			menuLink.appendChild(document.createTextNode(menuItemText));
			menuItem.appendChild(menuLink);
			
			//insert link into menu
			menu.appendChild(menuItem);	
		}
	}
	
	//display the menu
	menu.style.display="block";
}*/

