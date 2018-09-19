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
// 2. Skill Code =======================================================================================================
"use strict";
const Alexa = require('alexa-sdk');
const APP_ID = "amzn1.ask.skill.25c4f3bb-949b-4952-93fc-fe49d62ced13";  // TODO replace with your app ID (OPTIONAL).
speechOutput = '';
const handlers = {
	'LaunchRequest': function () {
		this.emit(':ask', welcomeOutput, welcomeReprompt);
		this.attributes['familyName'] = "";
	},
	'AMAZON.HelpIntent': function () {
		speechOutput = 'Try asking for up to ten names at a time, sepcify a either boys or girls name. You can even ask for names beginin with a certain letter';
		reprompt = '';
		this.emit(':ask', speechOutput, reprompt);
	},
   'AMAZON.CancelIntent': function () {
		speechOutput = 'Ok, thanks bye.';
		this.emit(':tell', speechOutput);
	},
   'AMAZON.StopIntent': function () {
		speechOutput = 'Ok, thanks bye.';
		this.emit(':tell', speechOutput);
   },
   'SessionEndedRequest': function () {
		speechOutput = '';
		//this.emit(':saveState', true);//uncomment to save attributes to db on session end
		this.emit(':tell', speechOutput);
   },
	'AMAZON.FallbackIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "I didn't quite get that, please try again.";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'getNameIntent': function () {
		//delegate to Alexa to collect all the required slot values
       let filledSlots = delegateSlotCollection.call(this);
		speechOutput = '';
		//any intent slot variables are listed here for convenience


		let sexSlot = resolveCanonical(this.event.request.intent.slots.sex);
		let lengthSlot = resolveCanonical(this.event.request.intent.slots.length);
		let surnameSlot = resolveCanonical(this.event.request.intent.slots.surname);
		let numberSlot = resolveCanonical(this.event.request.intent.slots.number);
		let letterSlot = resolveCanonical(this.event.request.intent.slots.letter);
		let middleNameSlot = resolveCanonical(this.event.request.intent.slots.middleName);
		let firstNameSlot = resolveCanonical(this.event.request.intent.slots.firstName);

		//Custom intent handling goes here
		let boysNames = ["Oliver","George","Harry","Jack","Jacob","Noah","Charlie","Muhammad","Thomas","Oscar","William","James","Henry","Leo","Alfie","Joshua","Freddie","Archie","Ethan","Isaac","Alexander","Joseph","Edward","Samuel","Max","Daniel","Arthur","Lucas","Mohammed","Logan","Theo","Harrison","Benjamin","Mason","Sebastian","Finley","Adam","Dylan","Zachary","Riley","Teddy","Theodore","David","Toby","Jake","Louie","Elijah","Reuben","Arlo","Hugo","Luca","Jaxon","Matthew","Harvey","Reggie","Michael","Harley","Jude","Albert","Tommy","Luke","Stanley","Jenson","Frankie","Jayden","Gabriel","Elliot","Mohammad","Ronnie","Charles","Louis","Elliott","Frederick","Nathan","Lewis","Blake","Rory","Ollie","Ryan","Tyler","Jackson","Dexter","Alex","Austin","Kai","Albie","Caleb","Carter","Bobby","Ezra","Ellis","Leon","Roman","Ibrahim","Aaron","Liam","Jesse","Jasper","Felix","Jamie"];

    let girlsNames = ["Amelia","Olivia","Emily","Isla","Ava","Jessica","Ella","Isabella","Poppy","Mia","Sophie","Sophia","Lily","Grace","Evie","Scarlett","Ruby","Chloe","Daisy","Isabelle","Phoebe","Florence","Freya","Alice","Charlotte","Sienna","Matilda","Evelyn","Eva","Millie","Sofia","Lucy","Elsie","Imogen","Layla","Rosie","Maya","Elizabeth","Esme","Willow","Lola","Ivy","Holly","Emilia","Molly","Erin","Jasmine","Eliza","Ellie","Abigail","Lilly","Eleanor","Georgia","Hannah","Harriet","Maisie","Amber","Emma","Annabelle","Bella","Amelie","Thea","Harper","Rose","Gracie","Summer","Violet","Martha","Penelope","Anna","Zara","Nancy","Maria","Maryam","Darcie","Darcey","Heidi","Lottie","Megan","Francesca","Mila","Lexi","Bethany","Julia","Lacey","Robyn","Aisha","Victoria","Zoe","Clara","Sara","Beatrice","Darcy","Leah","Arabella","Hollie","Sarah","Maddison","Katie","Eloise"]

    let pickArry = [];

		//filter pick array according to requirements

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


		//save family name
		this.attributes['familyName'] = surnameSlot;

		//get number of names to pick
		if (typeof numberSlot != "undefined"){

			let pickedNames = "";
			let pickedIndex = "";

			if (numberSlot > 10) {numberSlot = 10};

			for (i=0; i<numberSlot; i++){
				pickedIndex = Math.floor(Math.random() * pickArry.length)
				pickedNames = pickedNames + pickArry[pickedIndex] + " " + surnameSlot + ","
				pickArry.splice(pickedIndex,1)
			}

			speechOutput = " How about these?: " + pickedNames;
		} else {

			// random pick from remaining list
			let pickedName = pickArry[Math.floor(Math.random() * pickArry.length)];
			speechOutput = " How's this? " + pickedName + " " + surnameSlot;
		}

		//announce the names
		this.emit(':ask', speechOutput, speechOutput);

		//keep session open
		this.handler.response.shouldEndSession = false;
console.log("Session Closed:" + this.handler.response.shouldEndSession)
	},
	'AMAZON.PauseIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "Ok, I'll wait....";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.ResumeIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "Ok, please let me know the type of name you would like me to generate";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'Unhandled': function () {
        speechOutput = "So i didn't understand that, What type of name you would like me to generate";
        this.emit(':ask', speechOutput, speechOutput);
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
	//alexa.dynamoDBTableName = 'DYNAMODB_TABLE_NAME'; //uncomment this line to save attributes to DB
    alexa.execute();
};

//    END of Intent Handlers {} ========================================================================================
// 3. Helper Function  =================================================================================================

function resolveCanonical(slot){
	//this function looks at the entity resolution part of request and returns the slot value if a synonyms is provided
	let canonical;
    try{
		canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
	}catch(err){
	    //console.log(err.message);
	    canonical = slot.value;
	};
	return canonical;
};

function delegateSlotCollection(){
console.log("in delegateSlotCollection");
console.log("current dialogState: "+this.event.request.dialogState);
    if (this.event.request.dialogState === "STARTED") {
console.log(" ");
console.log("in Beginning");
console.log(" ");
	  let updatedIntent= null;
	  updatedIntent=this.event.request.intent;
console.log(updatedIntent)
console.log(this.attributes['familyName'])

			//updatedIntent.slots.name.value = this.attributes['familyName'];
console.log(updatedIntent)
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
      console.log("is not completed");
console.log(Dialog.Delegate);
			//return Dialog.Delegate;
			// return a Dialog.Delegate directive with no updatedIntent property.
      this.emit(":delegate"); //uncomment this is using ASK SDK 1.0.9 or newer

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
