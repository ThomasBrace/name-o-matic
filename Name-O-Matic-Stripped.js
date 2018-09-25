"use strict";

// Include the Alexa SDK
const Alexa = require('alexa-sdk');
const APP_ID = "amzn1.ask.skill.25c4f3bb-949b-4952-93fc-fe49d62ced13";
// stock text

let speechOutput;
let reprompt;
let welcomeOutput = "Welcome to the name o matik generator, let me know the surname you would like me to pair with, and if you would like a boys or girls name. Then i'll see what i can come up with";
let welcomeReprompt = "Would you like a boys or a girls name?";


let boysNames = ["Oliver","George","Harry","Jack","Jacob","Noah","Charlie","Muhammad","Thomas","Oscar","William","James","Henry","Leo","Alfie","Joshua","Freddie","Archie","Ethan","Isaac","Alexander","Joseph","Edward","Samuel","Max","Daniel","Arthur","Lucas","Mohammed","Logan","Theo","Harrison","Benjamin","Mason","Sebastian","Finley","Adam","Dylan","Zachary","Riley","Teddy","Theodore","David","Toby","Jake","Louie","Elijah","Reuben","Arlo","Hugo","Luca","Jaxon","Matthew","Harvey","Reggie","Michael","Harley","Jude","Albert","Tommy","Luke","Stanley","Jenson","Frankie","Jayden","Gabriel","Elliot","Mohammad","Ronnie","Charles","Louis","Elliott","Frederick","Nathan","Lewis","Blake","Rory","Ollie","Ryan","Tyler","Jackson","Dexter","Alex","Austin","Kai","Albie","Caleb","Carter","Bobby","Ezra","Ellis","Leon","Roman","Ibrahim","Aaron","Liam","Jesse","Jasper","Felix","Jamie"];
let girlsNames = ["Amelia","Olivia","Emily","Isla","Ava","Jessica","Ella","Isabella","Poppy","Mia","Sophie","Sophia","Lily","Grace","Evie","Scarlett","Ruby","Chloe","Daisy","Isabelle","Phoebe","Florence","Freya","Alice","Charlotte","Sienna","Matilda","Evelyn","Eva","Millie","Sofia","Lucy","Elsie","Imogen","Layla","Rosie","Maya","Elizabeth","Esme","Willow","Lola","Ivy","Holly","Emilia","Molly","Erin","Jasmine","Eliza","Ellie","Abigail","Lilly","Eleanor","Georgia","Hannah","Harriet","Maisie","Amber","Emma","Annabelle","Bella","Amelie","Thea","Harper","Rose","Gracie","Summer","Violet","Martha","Penelope","Anna","Zara","Nancy","Maria","Maryam","Darcie","Darcey","Heidi","Lottie","Megan","Francesca","Mila","Lexi","Bethany","Julia","Lacey","Robyn","Aisha","Victoria","Zoe","Clara","Sara","Beatrice","Darcy","Leah","Arabella","Hollie","Sarah","Maddison","Katie","Eloise"]
let pickArry = [];

let nameArr = new Array();

// The handlers object tells Alexa how to handle various actions
let handlers = {
	'LaunchRequest': function () {
console.log('launch')
console.log(this.attributes.savedNames)
 		if (Object.keys(this.attributes).length === 0) {
			//fresh login

			this.response
				.speak("Welcome to the name o matik generator, let me know the surname you would like me to pair with, and if you would like a boys or girls name. Then i'll see what i can come up with")
				.listen("Would you like a boys or a girls name?, or a name begining with a particular Letter?");
		}else{
			//retuning user
			this.response
				.speak("Welcome back to the name o matik generator. Your family name is currently set as " + this.attributes.familyName + ", and you have " + this.attributes.savedNames.length + " saved names. Shall I generate a new name for you?")
				.listen("Would you like a boys or a girls name?, or a name begining with a particular Letter? or revew your saved names?");
		}


		this.emit(':responseReady');
	},
	'AMAZON.HelpIntent': function () {
		speechOutput = 'Try asking for up to ten names at a time, sepcify a either boys or girls name. You can even ask for names beginin with a certain letter';
		reprompt = '';
		this.response.speak(speechOutput).listen()
		this.emit(':responseReady');
	},
	'AMAZON.CancelIntent': function () {
		speechOutput = 'Ok, thanks bye.';
		this.response.speak(speechOutput).listen()
		this.emit(':responseReady');
	},
	'AMAZON.StopIntent': function () {
		speechOutput = 'Ok, thanks bye.';
		this.response.speak(speechOutput).listen()
		this.emit(':responseReady');
	},
	'SessionEndedRequest': function() {
    console.log('session ended!');
    this.emit(':saveState', true);
	},
	'AMAZON.FallbackIntent': function () {
		speechOutput = "I didn't quite get that, please try again.";
		this.response.speak(speechOutput).listen(speechOutput)
		this.emit(':responseReady');
	},
	'AMAZON.PauseIntent': function () {
		speechOutput = "Ok, I'll wait....";
		this.response.speak(speechOutput).listen(speechOutput)
		this.emit(':responseReady');
	},
	'AMAZON.ResumeIntent': function () {
		speechOutput = "Ok, please let me know the type of name you would like me to generate";
		this.response.speak(speechOutput).listen(speechOutput)
		this.emit(':responseReady');
  },
	'Unhandled': function () {
		speechOutput = "So i didn't understand that, What type of name you would like me to generate";
		this.response.speak(speechOutput).listen(speechOutput)
		this.emit(':responseReady');
  },
	'getNameIntent': function () {

		//get slots
		let sexSlot = this.event.request.intent.slots.sex.value;
		let lengthSlot = this.event.request.intent.slots.length.value; // not currently used
		let surnameSlot = this.event.request.intent.slots.surname.value;
		let numberSlot = this.event.request.intent.slots.number.value;
		let letterSlot = this.event.request.intent.slots.letter.value;
		let middleNameSlot = this.event.request.intent.slots.middleName.value; // not currently used
		let firstNameSlot = this.event.request.intent.slots.firstName.value; // not currently used


		//Save the sessions slots if they haven't been updated in the latest requests
		if (typeof sexSlot != "undefined"){
			this.attributes['sexSlot'] = sexSlot;
		}
		if (typeof surnameSlot != "undefined"){
			this.attributes['familyName'] = surnameSlot;
		}

		//setup pick list by gender
		if (typeof this.attributes['sexSlot'] == "undefined"){
			pickArry = boysNames.concat(girlsNames);
		} else if (this.attributes['sexSlot'].toLowerCase() === "boys" || this.attributes['sexSlot'].toLowerCase() === "boy") {
			pickArry = boysNames;
		} else {
			pickArry = girlsNames;
		}
		//filter by letter if required
		if (typeof this.attributes['letterSlot'] != "undefined"){
			pickArry = pickArry.filter((name) => name.startsWith(this.attributes['letterSlot'].toUpperCase()));
		}
		//get number of names to pick
		if (typeof numberSlot != "undefined"){

			let pickedNames = "";
			let pickedIndex = "";

			if (numberSlot > 10) {numberSlot = 10};

			for (var i=0; i<numberSlot; i++){
				pickedIndex = Math.floor(Math.random() * pickArry.length)
				this.attributes['currentName'] = pickArry[pickedIndex] + " " + this.attributes['familyName'] //save last name for potential save
				pickedNames = pickedNames + this.attributes['currentName'] + ", "
				pickArry.splice(pickedIndex,1)
			}

			speechOutput = " How about these?: " + pickedNames;
		} else {

			// random pick from remaining list
			let pickedName = pickArry[Math.floor(Math.random() * pickArry.length)];
			speechOutput = " How's this? " + pickedName + " " + this.attributes['familyName'];

			//save current name for potential save
			this.attributes['currentName'] = pickedName + " " + this.attributes['familyName'];
		}

		this.response
			.speak(speechOutput + ". should I generate another?")
			.listen("should I generate another?");

		this.emit(':responseReady');
	},
	'saveNameIntent': function () {

		//get slots
		let lastNameSlot = this.event.request.intent.slots.lastName.value; // not currently used
		let firstNameSlot = this.event.request.intent.slots.firstName.value; // not currently used

		let currentName = resloveName(firstNameSlot,lastNameSlot,this)

		nameArr.push(currentName)
		this.attributes.savedNames = nameArr;

		this.response
			.speak("I've added " + currentName + " to your saved names")
			.listen("should I generate name?");

		this.emit(':responseReady');
	},
	'reviewNamesIntent': function () {
		if (this.attributes.savedNames.length == 0){
			this.response
			.speak("you have no saved names. To add some just ask me to save any names you like the sound of. would you like me to suggest some names?")
			.listen("should I generate name?");

		} else {
			this.response
			.speak("Your saved names are:" + this.attributes.savedNames)
			.listen("Ask me to remove any names or ask me new ones?");
		}
		this.emit(':responseReady');
	},
	'removeNameIntent': function () {

		let firstNameSlot = this.event.request.intent.slots.firstName.value;
		let lastNameSlot = this.event.request.intent.slots.lastName.value;

		let currentName = resloveName(firstNameSlot,lastNameSlot,this)
		let index = this.attributes.savedNames.indexOf(currentName)
		//try and find name in saved names
		if (index != -1) {
			this.attributes.savedNames.splice(index,1)
			this.response
				.speak("I've removed " + currentName + " from your saved names. Would you like me to generate some new names?" )
				.listen("should I generate name?");
		} else {
			this.response
				.speak("I could not find " + currentName + " in your saved names. Would you like me to generate some new names?" )
				.listen("should I generate name?");
		}

		this.emit(':responseReady');
	},
	'emptySavedNamesIntent' : function () {
console.log(this.attributes.savedNames)
		this.attributes.savedNames = [];
		this.response
			.speak("I have emptyed your saved names. Would you like me to generate some new names?" )
			.listen("should I generate name?")

		this.emit(':responseReady');
	},
	'changeFamilyNameIntent' : function () {

		let surnameSlot = this.event.request.intent.slots.surname.value;

		if (typeof surnameSlot != "undefined"){
			this.attributes['familyName'] = surnameSlot;
		}

		this.response
			.speak("I have updated you family name to " + this.attributes['familyName'] + ". Would you like me to generate some new names?" )
			.listen("should I generate name?")

		this.emit(':responseReady');
	}
};

function resloveName(first,last,_this){
	let current = ""
	if (typeof first != "undefined" && typeof last != "undefined"){
		current = first + " " + last;
	} else if (typeof first != "undefined" && typeof last == "undefined") {
		current = first + " " + _this.attributes['familyName']
	} else {
		current = _this.attributes['currentName']
	}
	return current;
}


// This is the function that AWS Lambda calls every time Alexa uses the skill.
exports.handler = function(event, context, callback) {
	// Set up the Alexa object
	var alexa = Alexa.handler(event, context);
	alexa.appId = APP_ID;
	// fire up DynameDB and add table. rememebr to setup IAM and set ececution role on lambda
	alexa.dynamoDBTableName = 'name-o-matic';
  // Register Handlers
  alexa.registerHandlers(handlers);
	// Start our Alexa code
  alexa.execute();
};
