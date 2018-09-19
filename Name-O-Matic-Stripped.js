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

// The handlers object tells Alexa how to handle various actions
let handlers = {
	'LaunchRequest': function () {
		//session attributes
		//this.attributes['familyName'] = "";

		this.response.speak(welcomeOutput).listen(welcomeReprompt)
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
	'SessionEndedRequest': function () {
		speechOutput = '';
		this.response.speak(speechOutput).listen()
		this.emit(':responseReady');
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
		let lengthSlot = this.event.request.intent.slots.length.value;
		let surnameSlot = this.event.request.intent.slots.surname.value;
		let numberSlot = this.event.request.intent.slots.number.value;
		let letterSlot = this.event.request.intent.slots.letter.value;
		let middleNameSlot = this.event.request.intent.slots.middleName.value;
		let firstNameSlot = this.event.request.intent.slots.firstName.value;


		//Save the sessions slots if they haven't been updated in the latest requests
		if (typeof surnameSlot != "undefined"){
			this.attributes['familyName'] = surnameSlot;
		}

		//setup pick list by gender
		if (typeof sexSlot == "undefined"){
			pickArry = boysNames.concat(girlsNames);
		} else if (sexSlot.toLowerCase() === "boys" || sexSlot.toLowerCase() === "boy") {
			pickArry = boysNames;
		} else {
			pickArry = girlsNames;
		}
		//filter by letter if required
		if (typeof letterSlot != "undefined"){
			pickArry = pickArry.filter((name) => name.startsWith(letterSlot.toUpperCase()));
		}
		//get number of names to pick
		if (typeof numberSlot != "undefined"){

			let pickedNames = "";
			let pickedIndex = "";

			if (numberSlot > 10) {numberSlot = 10};

			for (var i=0; i<numberSlot; i++){
				pickedIndex = Math.floor(Math.random() * pickArry.length)
				pickedNames = pickedNames + pickArry[pickedIndex] + " " + this.attributes['familyName'] + ","
				pickArry.splice(pickedIndex,1)
			}

			speechOutput = " How about these?: " + pickedNames;
		} else {

			// random pick from remaining list
			let pickedName = pickArry[Math.floor(Math.random() * pickArry.length)];
			speechOutput = " How's this? " + pickedName + " " + this.attributes['familyName'];
		}

		this.response.speak(speechOutput + ". should I generate another?").listen("should I generate another?");
		this.emit(':responseReady');
	}
};


// This is the function that AWS Lambda calls every time Alexa uses the skill.
exports.handler = function(event, context, callback) {
	// Set up the Alexa object
	var alexa = Alexa.handler(event, context);
	alexa.appId = APP_ID;
  // Register Handlers
  alexa.registerHandlers(handlers);
	// Start our Alexa code
  alexa.execute();
};
