# OBSOLETE - Please do not use this.

This was written in 2012 as a drop-in replacement for a Flash menu system. It follows exactly zero best practices and is unusable on mobile devices. Now that responsive design is a thing, this menu is entirely obsolete and should never be used for anything. I recommend Samson Onna's [Ace Responsive Menu](https://github.com/samsono/Ace-Responsive-Menu) as a replacement, though it is from 2017 and thus is starting to age a bit as well.

TortoiseMenu was originally available under GPL 3.0. It is now available under the compatible Unlicense.

## TortoiseMenu

TortoiseMenu is a top navigation bar for web pages offering up to three levels of nested menus. It is written in pure JavaScript and will work in all 

### Usage

Include tortoisemenu.css in the head and tortoisemenu.js at the top of the body of each document:

```html
	<head>
	<title>TortoiseMenu</title>
	<meta charset="UTF-8">
	<style type="text/css">
		@import url('tortoisemenu.css');
	</style>
</head>
<body>
	<script type="text/javascript" src="tortoisemenu.js"></script>
</body>
```

Modify the `menuItems` variable at the top of tortoisemenu.js to describe your menu items. The syntax is as shown in the sample menu:

```javascript
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
```
