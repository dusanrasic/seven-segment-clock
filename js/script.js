let nums = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];

var root = [];



function setup() {
	createCanvas(900, 320);
}

function draw() {
	let date = new Date();
	let tmpMin = date.getMinutes();
	let tmpHr = date.getHours();
	let tmpSec = date.getSeconds();
	let min = tmpMin < 10 ? "0" + tmpMin : "" + tmpMin;
	let hr = tmpHr < 10 ? "0" : "" + tmpHr;
	let sec = tmpSec%2 === 0 ? "0"  : "1";

	let combined = hr+""+min;

	let digits = combined.toString().split('');
	let realDigits = digits.map(Number);

	let splitter = new SevenSegment(0);

	realDigits.forEach(element => {
		root.splice(3, realDigits.length,new SevenSegment(element));
	});
	background(0);
	for(var i=0; i < 2; i++) {
		translate(i*150, 0);
		root[i].sevenSegment(nums[root[i].index]);
	}
	translate(300, 0);
	splitter.dots(nums[sec]);
	for(var i=2; i < 4; i++) {
		translate(i*50, 0);
		root[i].sevenSegment(nums[root[i].index]);
	}
}
