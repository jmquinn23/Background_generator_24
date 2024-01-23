var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var hexColors = [];




// const styles = getComputedStyle(body);
// const background = const background = styles.getPropertyValue("background-image");
// const firstCol = background.substring(26,40);
// const secondCol = background.substring(42,58);



function setGradient(){
		body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value + ")";

		css.textContent = body.style.background;
}

//https://learnersbucket.com/examples/interview/convert-rgb-to-hex-color-in-javascript/
const componentToHex = (c) => {
  console.log(c.toString(16));
  const hex = c.toString(16);  
  return hex.length == 1 ? "0" + hex : hex;
}


const rgbToHex = (rgbvalues) => {
  console.log(rgbvalues);
  var r = rgbvalues[0];
  var g = rgbvalues[1];
  var b = rgbvalues[2];
  console.log(r, g, b);
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

document.addEventListener("DOMContentLoaded", () => {

	
	var styles = getComputedStyle(body);
	var background = styles.getPropertyValue("background-image");		
	// console.log(background);	
	var match = background.match(/(\d{1,3}), (\d{1,3}), (\d{1,3})/g);
	// console.log(match);
	match.forEach((values, i) => {
			var color = values.split(",");
			var stringColor = color.map(Number);
			hex = rgbToHex(stringColor);
			console.log(hex);
			// console.log(i);
			hexColors[i] = hex;

			// color2.setAttribute("value", hex)
	})

	console.log(hexColors);		
	color1.value = hexColors[0];
	color2.value = hexColors[1];


})

