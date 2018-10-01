/* This code has been generated from your interaction model by skillinator.io

/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the contents as the code for a new Lambda function, using the alexa-skill-kit-sdk-factskill template.
// This code includes helper functions for compatibility with versions of the SDK prior to 1.0.9, which includes the dialog directives.



 // 1. Text strings =====================================================================================================
 //    Modify these strings and messages to change the behavior of your Lambda function


let speechOutput;
let reprompt;
let welcomeOutput = "Welcome to the name o matik generator, let me know the surname you would like me to pair with, and if you would like a boys or girls name. Then i'll see what i can come up with";
let welcomeReprompt = "Would you like a boys or a girls name?";
let boysNames = ["Oliver","George","Harry","Jack","Jacob","Noah","Charlie","Muhammad","Thomas","Oscar","William","James","Henry","Leo","Alfie","Joshua","Freddie","Archie","Ethan","Isaac","Alexander","Joseph","Edward","Samuel","Max","Daniel","Arthur","Lucas","Mohammed","Logan","Theo","Harrison","Benjamin","Mason","Sebastian","Finley","Adam","Dylan","Zachary","Riley","Teddy","Theodore","David","Toby","Jake","Louie","Elijah","Reuben","Arlo","Hugo","Luca","Jaxon","Matthew","Harvey","Reggie","Michael","Harley","Jude","Albert","Tommy","Luke","Stanley","Jenson","Frankie","Jayden","Gabriel","Elliot","Mohammad","Ronnie","Charles","Louis","Elliott","Frederick","Nathan","Lewis","Blake","Rory","Ollie","Ryan","Tyler","Jackson","Dexter","Alex","Austin","Kai","Albie","Caleb","Carter","Bobby","Ezra","Ellis","Leon","Roman","Ibrahim","Aaron","Liam","Jesse","Jasper","Felix","Jamie"];
let girlsNames = ["Amelia","Olivia","Emily","Isla","Ava","Jessica","Ella","Isabella","Poppy","Mia","Sophie","Sophia","Lily","Grace","Evie","Scarlett","Ruby","Chloe","Daisy","Isabelle","Phoebe","Florence","Freya","Alice","Charlotte","Sienna","Matilda","Evelyn","Eva","Millie","Sofia","Lucy","Elsie","Imogen","Layla","Rosie","Maya","Elizabeth","Esme","Willow","Lola","Ivy","Holly","Emilia","Molly","Erin","Jasmine","Eliza","Ellie","Abigail","Lilly","Eleanor","Georgia","Hannah","Harriet","Maisie","Amber","Emma","Annabelle","Bella","Amelie","Thea","Harper","Rose","Gracie","Summer","Violet","Martha","Penelope","Anna","Zara","Nancy","Maria","Maryam","Darcie","Darcey","Heidi","Lottie","Megan","Francesca","Mila","Lexi","Bethany","Julia","Lacey","Robyn","Aisha","Victoria","Zoe","Clara","Sara","Beatrice","Darcy","Leah","Arabella","Hollie","Sarah","Maddison","Katie","Eloise"]
let pickArry = [];

let nameArr = new Array();

// 2. Skill Code =======================================================================================================
"use strict";
const Alexa = require('alexa-sdk');
const APP_ID = "amzn1.ask.skill.25c4f3bb-949b-4952-93fc-fe49d62ced13";
speechOutput = '';
const handlers = {
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
		// add better help
		speechOutput = "I'm here to generate baby names. I can give basic suggestions by just asking me for a name, or I can generate names by gender and names by specific letters. I can suggest multiple names at a time if you want too. Try asking me one of the following: <break time='500ms'/>Generate a Boys name<break time='500ms'/>, or something like Give me three girls names<break time='500ms'/>, or maybe Can I have 5 names that begin with B?<break time='500ms'/> If I come up with a name you like, you can ask me to save it. By asking Review my saved names you can hear your list of current favourites. You can manage this list by asking me to add, remove names, or clear the list entirely.";
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
		speechOutput = 'Ok, thanks bye.';
    console.log('session ended!');
    this.emit(':saveState', true);
	},
	'AMAZON.FallbackIntent': function () {
		speechOutput = "I didn't quite get that, please try again.";
		this.response.speak(speechOutput).listen(speechOutput)
		this.emit(':responseReady');
	},
	'getNameIntent': function () {
		//delegate to Alexa to collect all the required slot values
       let filledSlots = delegateSlotCollection.call(this);
		speechOutput = '';
		//any intent slot variables are listed here for convenience

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
	'emptySavedNamesIntent': function () {
console.log(this.attributes.savedNames)
		this.attributes.savedNames = [];
		this.response
			.speak("I have emptyed your saved names. Would you like me to generate some new names?" )
			.listen("should I generate name?")

		this.emit(':responseReady');
	},
	'changeFamilyNameIntent': function () {

		let surnameSlot = this.event.request.intent.slots.surname.value;

		if (typeof surnameSlot != "undefined"){
			this.attributes['familyName'] = surnameSlot;
		}

		this.response
			.speak("I have updated your family name to " + this.attributes['familyName'] + ". Would you like me to generate some new names?" )
			.listen("should I generate name?")

		this.emit(':responseReady');
	},
	'Unhandled': function () {
		speechOutput = "I didn't understand that, What type of name you would like me to generate";
		this.response.speak(speechOutput).listen(speechOutput)
		this.emit(':responseReady');
	},
	'finishedIntent': function () {
		speechOutput = "ok, you can ask me to save names you like at any point. You can then review them or remove them just by asking. Alternatively, If your finished with the name o matik generator, just ask me to close.";
		this.response.speak(speechOutput).listen(speechOutput)
		this.emit(':responseReady');
	}
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
		// fire up DynameDB and add table. rememebr to setup IAM and set ececution role on lambda
		alexa.dynamoDBTableName = 'name-o-matic';
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
	//alexa.dynamoDBTableName = 'DYNAMODB_TABLE_NAME'; //uncomment this line to save attributes to DB
    alexa.execute();
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

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function resolveCanonical(slot){
	//this function looks at the entity resolution part of request and returns the slot value if a synonyms is provided
	let canonical;
    try{
		canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
	}catch(err){
	    console.log(err.message);
	    canonical = slot.value;
	};
	return canonical;
};

function delegateSlotCollection(){
  console.log("in delegateSlotCollection");
  console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
      console.log("in Beginning");
			let updatedIntent = "";

		if (Object.keys(this.attributes).length != 0) { // If object is not empty assume they have a saved surname

		  updatedIntent = this.event.request.intent;
			updatedIntent.slots.surname.value = this.attributes.familyName;

			this.event.request.intent = updatedIntent;
		}
	  // updatedIntent=this.event.request.intent;
      //optionally pre-fill slots: update the intent object with slot values for which
      //you have defaults, then return Dialog.Delegate with this updated intent
      // in the updatedIntent property
      //this.emit(":delegate", updatedIntent); //uncomment this is using ASK SDK 1.0.9 or newer

	  //this code is necessary if using ASK SDK versions prior to 1.0.9
	  if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', updatedIntent, null),
			shouldEndSession: false
		});
		this.emit(':responseReady', updatedIntent);

    } else if (this.event.request.dialogState !== "COMPLETED") {
      console.log("in not completed");
      // return a Dialog.Delegate directive with no updatedIntent property.
      //this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer

	  //this code necessary is using ASK SDK versions prior to 1.0.9
		if(this.isOverridden()) {
			return;
		}
		this.handler.response = buildSpeechletResponse({
			sessionAttributes: this.attributes,
			directives: getDialogDirectives('Dialog.Delegate', null, null),
			shouldEndSession: false
		});
		this.emit(':responseReady');

    } else {
      console.log("in completed");
      console.log("returning: "+ JSON.stringify(this.event.request.intent));
      // Dialog is now complete and all required slots should be filled,
      // so call your normal intent handler.
      return this.event.request.intent;
    }
}


function randomPhrase(array) {
    // the argument is an array [] of words or phrases
    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return(array[i]);
}

function isSlotValid(request, slotName){
        let slot = request.intent.slots[slotName];
        //console.log("request = "+JSON.stringify(request)); //uncomment if you want to see the request
        let slotValue;

        //if we have a slot, get the text and store it into speechOutput
        if (slot && slot.value) {
            //we have a value in the slot
            slotValue = slot.value.toLowerCase();
            return slotValue;
        } else {
            //we didn't get a value in the slot.
            return false;
        }
}

//These functions are here to allow dialog directives to work with SDK versions prior to 1.0.9
//will be removed once Lambda templates are updated with the latest SDK

function createSpeechObject(optionsParam) {
    if (optionsParam && optionsParam.type === 'SSML') {
        return {
            type: optionsParam.type,
            ssml: optionsParam['speech']
        };
    } else {
        return {
            type: optionsParam.type || 'PlainText',
            text: optionsParam['speech'] || optionsParam
        };
    }
}

function buildSpeechletResponse(options) {
    let alexaResponse = {
        shouldEndSession: options.shouldEndSession
    };

    if (options.output) {
        alexaResponse.outputSpeech = createSpeechObject(options.output);
    }

    if (options.reprompt) {
        alexaResponse.reprompt = {
            outputSpeech: createSpeechObject(options.reprompt)
        };
    }

    if (options.directives) {
        alexaResponse.directives = options.directives;
    }

    if (options.cardTitle && options.cardContent) {
        alexaResponse.card = {
            type: 'Simple',
            title: options.cardTitle,
            content: options.cardContent
        };

        if(options.cardImage && (options.cardImage.smallImageUrl || options.cardImage.largeImageUrl)) {
            alexaResponse.card.type = 'Standard';
            alexaResponse.card['image'] = {};

            delete alexaResponse.card.content;
            alexaResponse.card.text = options.cardContent;

            if(options.cardImage.smallImageUrl) {
                alexaResponse.card.image['smallImageUrl'] = options.cardImage.smallImageUrl;
            }

            if(options.cardImage.largeImageUrl) {
                alexaResponse.card.image['largeImageUrl'] = options.cardImage.largeImageUrl;
            }
        }
    } else if (options.cardType === 'LinkAccount') {
        alexaResponse.card = {
            type: 'LinkAccount'
        };
    } else if (options.cardType === 'AskForPermissionsConsent') {
        alexaResponse.card = {
            type: 'AskForPermissionsConsent',
            permissions: options.permissions
        };
    }

    let returnResult = {
        version: '1.0',
        response: alexaResponse
    };

    if (options.sessionAttributes) {
        returnResult.sessionAttributes = options.sessionAttributes;
    }
    return returnResult;
}

function getDialogDirectives(dialogType, updatedIntent, slotName) {
    let directive = {
        type: dialogType
    };

    if (dialogType === 'Dialog.ElicitSlot') {
        directive.slotToElicit = slotName;
    } else if (dialogType === 'Dialog.ConfirmSlot') {
        directive.slotToConfirm = slotName;
    }

    if (updatedIntent) {
        directive.updatedIntent = updatedIntent;
    }
    return [directive];
}
