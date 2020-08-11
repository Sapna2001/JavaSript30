// start with strings, numbers and booleans
let age1 = 19;
let age2 = age1;
console.log(age1,age2);
age1 = 20;
console.log(age1,age2); //only age1 update

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
const team = players;
team[3]='Sap'
console.log(players);
console.log(team); //team is reference to the original array player ->Reference

// and we want to make a copy of it.

// You might think we can just do something like this:

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

const teamcopy = players.slice(); //slice creates a new array ->Copy
console.log(players);
teamcopy[3]="sapna"
console.log(teamcopy);

// one way

// or create a new array and concat the old one in
const teamconcat = [].concat(players);

// or use the new ES6 Spread
const teamconcatfull = [...players];
teamconcatfull[3]="Sanjay";
console.log(players);
console.log(teamconcatfull);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
	name: "Wes Bos",
	age: 80,
};

// and think we make a copy:
const captain1 = person; // -> Reference
captain1.num = 100;
console.log(person);

// how do we take a copy instead?
const captain2 = Object.assign({},person,{num:200},{color:"red"},{age:50}); // -> Copy
console.log(person);
console.log(captain2);

// We will hopefully soon see the object ...spread
const captain3 = {...person}; // ->Referernce with spread
captain3.gender = "Female"
console.log(captain3)

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const sap ={
    name: "Sap",
    age: 19,
    gender: "Female",
    social: {
        fb: "@hsnfb",
        insta:"@hsninsta"
    }
}

console.log(sap);

const dev= Object.assign({},sap);
dev.social.insta = "@sap123";
// can be solved using deep clone
console.log(dev.social.insta);
console.log(sap.social.insta);

// another way to solve the above issue
const dev2 = JSON.parse(JSON.stringify(sap)); //string -> object
dev2.social.insta = "@sap1234";
console.log(dev2.social.insta);
console.log(sap.social.insta);

