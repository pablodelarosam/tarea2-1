//Pablo de la Rosa Michicol /150245


//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------
split1 = _INPUT.split("\n"); //delete \n
cases = split1;



console.log(cases); //print all the cases
console.log(cases[0]); //print the number of cases

cas = parseInt(split1[0]); //change the variable in string to int

console.log(cas);

console.log("Primer ejemplo"); //print a string

for (var j=1;j<=cas;j++){ //this loop is because we need individual numbers as 3 and 9
var range = split1[j].split(" ");
console.log(squarePerfect(parseInt(range[0]),parseInt(range[1])));
}



//this example is using a different way but with the same results

_INPUT2 = "4\n1 8\n2 4\n10 13\n11 20";
split2  = _INPUT2.split("\n");
cases2 = split2;

console.log(cases2);

console.log("Segundo ejemplo");

console.log(squarePerfect( 4,8));
console.log(squarePerfect( 4,10));
console.log(squarePerfect( 13,20));

function squarePerfect (init,fin) { //this is the function to check any square int in the range gived 

var perfect =0;
for (var i=init;i<=fin;i++){
if (Math.sqrt(i)%1 ==0) {
	perfect++;
}

	
}
	return perfect; //return the number of square integers.
}
