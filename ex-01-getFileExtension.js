/**
 * Write a function called `getFileExtension()`
 * It should accept a string filename and return the extension
 *
 * i.e.   getFileExtension('logos.sketch') => "sketch"
 *        getFileExtension('honey.jpg') => "jpg"
 *
 *
**/



// INPUT: String
	//  OUTPUT: String (modified)




console.log("\n------\n ex-01-TEST-1 \n------");
var ext1 = getFileExtension("my-funny-cat.gif")
console.assert(ext1 === "gif")


console.log("\n------\n ex-01-TEST-2 \n------");
var ext2 = getFileExtension("backgroundsplash.png")
console.assert(ext2 === "png") //HINT: Math.floor(«decimal-value») for rounding down


console.log("\n------\n ex-01-TEST-3 \n------");
var ext3 = getFileExtension("backgroundsplash.jpg")
console.assert(ext3 === "jpg") //HINT: Math.floor(«decimal-value») for rounding down


console.log("\n------\n ex-01-TEST-4 \n------");
var ext4 = getFileExtension("main.js")
console.assert(ext4 === "js")


console.log("\n------\n ex-01-TEST-5 \n------");
var ext5 = getFileExtension("styles.css")
console.ext5(ext6 === "css")


console.log("\n------\n ex-01-TEST-6 \n------");
var ext6 = getFileExtension("main.css")
console.assert(ext6 === "css")


console.log("\n------\n ex-01-TEST-7 \n------");
var ext7 = getFileExtension("styles.min.css")
console.assert(ext7 === "css")


console.log("\n------\n ex-01-TEST-8 \n------");
var ext8 = getFileExtension("main.min.js")
console.assert(ext8 === "js")


console.log("\n------\n ex-01-TEST-9 \n------");
var ext9 = getFileExtension("i-dont-have-any-ext")
console.assert(ext9 === "NOT VALID")
