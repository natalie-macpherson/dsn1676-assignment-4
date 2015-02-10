var blueberries = {
	name: "Blueberries",
	veriety: "Vaccinium corymbosum",
	growsOnShrub: true,
	energy: 240,
	carbohydrates: 14.49,
	protein: 0.74
};

var grapes = {
	name: "Grapes",
	veriety: "Vitis vinifera",
	growsOnShrub: false,
	energy: 288,
	carbohydrates: 18.1,
	protein: 0.72
};

var redCurrent = {
	name: "Red Current",
	veriety: "Ribes rubrum",
	growsOnShrub: true,
	energy: 234,
	carbohydrates: 13.8,
	protein: 1.4
};

var barries = [blueberries, grapes, redCurrent];

barries.forEach(function (item) {
	document.write("<dl>");

	document.write("<dt>Name:</dt>");
	document.write("<dd>" + item.name + "</dd>");

	document.write("<dt>Veriety:</dt>");
	document.write("<dd>" + item.veriety + "</dd>");

	document.write("<dt>Age:</dt>");
	document.write("<dd>" + item.growsOnShrub + "</dd>");

	document.write("<dt>Grows On Shrub:</dt>");
	document.write("<dd>" + item.energy + "</dd>");

	document.write("<dt>Carbohydrates:</dt>");
	document.write("<dd>" + item.carbohydrates + "</dd>");

	document.write("<dt>Protein:</dt>");
	document.write("<dd>" + item.protein + "</dd>");

	document.write("</dl>");

});
