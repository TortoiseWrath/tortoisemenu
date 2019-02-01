
var menuItems = {
	"Item1": {
		value: 'Home',
		destination: 'http://tortoisewrath.com'
	},
	"Item2": {
		value: 'Blog',
		destination: 'http://tortoisewrath.com/b',
		children: {
			"Item1": {
				value: 'Main',
				destination: 'http://tortoisewrath.com/b'
			},
			"Item2": {
				value: 'TortoiseMenu',
				destination: 'http://tortoisewrath.com/b/p166',
				children: {
					"Item1": {
						value: 'Live demo',
						destination: 'http://menu.tortoisewrath.com'
					},
					"Item2": {
						value: 'Download',
						destination: 'http://tortoisewrath.com/f8'
					}
				}
			}
		}
	},
	"Item3": {
		value: 'Email',
		destination: 'http://tortoisewrath.com/email'
	},
	"Item4": {
		value: 'Valid',
		children: {
			"Item1": {
				value: 'Valid HTML',
				destination: 'http://validator.w3.org/check?uri=http%3A%2F%2Fmenu.tortoisewrath.com%2F'
			},
			"Item2": {
				value: 'Valid CSS',
				destination: 'http://jigsaw.w3.org/css-validator/validator?uri=http%3A%2F%2Fmenu.tortoisewrath.com&profile=css3&usermedium=all&warning=2&vextwarning='
			},
			"Item3": {
				value: 'Valid SVG'
			}
		}
	}
}

var pagecode = document.getElementsByTagName("body")[0];
pagecode.innerHTML = '<div id="menu-container"></div><div id="page-originalcontent">' + pagecode.innerHTML + '</div>';
var menucontainer = document.getElementById("menu-container");
menucontainer.innerHTML='<div id="menubar"></div>';
var menubar = document.getElementById("menubar");

var mouseoverstate = new Array();
var elementtohide;
function hideElement(element) {
	if (mouseoverstate[element] == 0)
		document.getElementById(element).style.display = "none";
}
function showElement(element) {
	if (mouseoverstate[element] == 1)
		document.getElementById(element).style.display = "";
}

var item = 1;
var item2 = 1;
var item3 = 1;
var itemcount = 0;
var key;
var key2;
var key3;
var htmlcontent;
for (key in menuItems) { if (menuItems.hasOwnProperty(key)) itemcount++; }
var width = 1/itemcount*100;
for (key in menuItems) {
	if (menuItems.hasOwnProperty(key)) {
		//Level 1
		menubar.innerHTML += '<div id="menu-Item'+item+'" style="position: absolute; padding-top: 1pt; left: '+(item-1)*width+'%; top: 0; z-index: 4; height: 100%; width: '+width+'%; text-align: center; font-size: 14pt;" onmouseover="mouseoverstate[\'children-Item'+item+'\']=1;" onmouseout="mouseoverstate[\'children-Item'+item+'\']=0;window.setTimeout(\'hideElement(\\\'\'+\'children-Item'+item+'\'+\'\\\')\',200);"></div>';
		document.getElementById("menu-Item"+item).innerHTML = '<a class="nav" id="link-Item'+item+'" onmouseover="mouseoverstate[\'children-Item'+item+'\']=1;showElement(\'children-Item'+item+'\');" onmouseout="mouseoverstate[\'children-Item'+item+'\']=0;window.setTimeout(\'hideElement(\\\'\'+\'children-Item'+item+'\'+\'\\\')\',200);">'+menuItems["Item"+item].value+'</a>';
		if (menuItems["Item"+item].destination)
			document.getElementById("link-Item"+item).href = menuItems["Item"+item].destination;
		else
			document.getElementById("link-Item"+item).style.cursor = "pointer";
			
		//Level 2
		if (menuItems["Item"+item].children) {
			document.getElementById("menu-Item"+item).innerHTML += '<div id="children-Item'+item+'" style="position: fixed; left: '+(item-1)*width+'%; top: 20pt; z-index: 5; width: '+width+'%; text-align: center; font-size: 12pt; display: none; border-left: 1pt solid #bbb; border-right: 1pt solid #bbb; border-bottom: 1pt solid #bbb; border-bottom-left-radius: 10pt; border-bottom-right-radius: 10pt; padding-bottom: 3pt; padding-left: 3pt; padding-right: 3pt; background: rgb(250,250,250);background-color: rgba(250,250,250,0.985); box-shadow: 3pt 3pt 2pt rgba(204,204,204,0.9);" onmouseover="mouseoverstate[\'children-Item'+item+'\']=1;" onmouseout="mouseoverstate[\'children-Item'+item+'\']=0;window.setTimeout(\'hideElement(\\\'\'+\'children-Item'+item+'\'+\'\\\')\',200);"></div>';
			for (key2 in menuItems["Item"+item].children) {
				if (menuItems["Item"+item].children.hasOwnProperty(key2)) {
					htmlcontent = '<div id="menu-Item'+item+'-Item'+item2+'-2" class="menuitem" onmouseover="mouseoverstate[\'children-Item'+item+'\']=1;showElement(\'children-Item'+item+'\');mouseoverstate[\'children-Item'+item+'-Item'+item2+'\']=1;showElement(\'children-Item'+item+'-Item'+item2+'\');" onmouseout="mouseoverstate[\'children-Item'+item+'\']=0;window.setTimeout(\'hideElement(\\\'\'+\'children-Item'+item+'\'+\'\\\')\',200);mouseoverstate[\'children-Item'+item+'-Item'+item2+'\']=0;window.setTimeout(\'hideElement(\\\'children-Item'+item+'-Item'+item2+'\\\')\',200);"><a class="nav" href="';
					if (menuItems["Item"+item].children["Item"+item2].destination)
						htmlcontent += menuItems["Item"+item].children["Item"+item2].destination;
					document.getElementById("children-Item"+item).innerHTML += htmlcontent+'"><div id="menu-Item'+item+'-Item'+item2+'" style="width: 100%;"></div></a></div>';
					document.getElementById("menu-Item"+item+"-Item"+item2).innerHTML += menuItems["Item"+item].children["Item"+item2].value;
					
					//Level 3
					if (menuItems["Item"+item].children["Item"+item2].children) {
						document.getElementById("menu-Item"+item+"-Item"+item2+'-2').innerHTML += '<div id="children-Item'+item+'-Item'+item2+'" style="position: absolute; left: 100%; width: 90%; top: -1px; z-index: 6; text-align: left; font-size: 12pt; display: none; border-top: 1pt solid #bbb; border-right: 1pt solid #bbb; border-bottom: 1pt solid #bbb; border-left: 1pt solid rgba(250,250,250,0.985);border-top-right-radius: 10pt; border-bottom-right-radius: 10pt; padding-bottom: 3pt; padding-top: 3pt; padding-right: 3pt; margin-left: 3pt;background: rgb(250,250,250);background-color: rgba(250,250,250,0.985); box-shadow: 3pt 3pt 2pt rgba(204,204,204,0.9);"></div>';
						for (key3 in menuItems["Item"+item].children["Item"+item2].children) {
							if (menuItems["Item"+item].children["Item"+item2].children.hasOwnProperty(key3)) {
								htmlcontent = '<div id="menu-Item'+item+'-Item'+item2+'-Item'+item3+'-2" style="color: black; font-size: 10pt; padding: 2pt; z-index: 6;" class="menuitem"><a class="nav" href="';
								if (menuItems["Item"+item].children["Item"+item2].children["Item"+item3].destination)
									htmlcontent += menuItems["Item"+item].children["Item"+item2].children["Item"+item3].destination;
								document.getElementById("children-Item"+item+"-Item"+item2).innerHTML += htmlcontent + '"><div id="menu-Item'+item+'-Item'+item2+'-Item'+item3+'" style="width: 100%;"></div></a></div>';
								document.getElementById("menu-Item"+item+"-Item"+item2+"-Item"+item3).innerHTML += menuItems["Item"+item].children["Item"+item2].children["Item"+item3].value;
							}
							item3++;
						}
					}
					item3 = 1;
					
					item2++;
				}
			}
		}
		item2 = 1;
			
		item++;
	}
}

item = 1;