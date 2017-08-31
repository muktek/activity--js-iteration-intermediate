//------------------------------------------------------------------
// Write a function called `iPutTheFunIn()`

// It should accept a string and return a string with the word `~!FUN!~` inserted in the middle
// i.e.   iPutTheFunIn('ball') => ba~!FUN!~ll

//
// If the argument is an odd number of characters (like 7),
// make the fun come early and round down for the midpoint
// i.e.   iPutTheFunIn('you') => y~!FUN!~ou
//

//
// If the argument passed to the function is only
// one character long, then it should return:
// i.e.   iPutTheFunIn('I') => 'not very fun'
//
//------------------------------------------------------------------



// INPUT: String
var iPutTheFunIn = function(){

	//  OUTPUT: String (modified)
}


var output1 = iPutTheFunIn("blue")
var output2 = iPutTheFunIn("codings")
var output3 = iPutTheFunIn("this is a very serious issue")
var output4 = iPutTheFunIn("X")

console.assert(output1 === "bl~!FUN!~ue")
console.assert(output2 === "cod~!FUN!~ings") //HINT: Math.floor(«decimal-value») for rounding down
console.assert(output3 === "this is a very~!FUN!~ serious issue")
console.assert(output4 === "not very fun")
