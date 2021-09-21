// const moment = require("moment");
// const responses = {
// 	greetings: [
// 		"Hey, how's it going?",
// 		"Hi, What's good with you?",
// 		"Hello to you too.What's up?",
// 		"Hey, glad to see you. What's up?",
// 	],
// 	greetings2: ["Great. How can I help you?"],
// 	date: [moment().format("DD/MM/YYYY")],
// 	devInfo: ["Anuj Deep has developed me", "Anuj is my developer"],
// 	company: [
// 		"Card91 offers plug & play payment infrastructure as a service for the businesses.",
// 	],
// 	facts: [
// 		"It is impossible for most people to lick their own elbow",
// 		"A crocodile cannot stick its tongue out",
// 		"A shrimp's heart is in its head",
// 		"Cat urine glows under a black-light",
// 		"Rubber bands last longer when refrigerated",
// 		"An ostrich's eye is bigger than its brain",
// 		"Tigers have striped skin, not just striped fur",
// 		"Most people fall asleep in seven minutes",
// 	],
// };

// const firstValue = (obj, key) => {
// 	const val =
// 		obj &&
// 		obj[key] &&
// 		Array.isArray(obj[key]) &&
// 		obj[key].length > 0 &&
// 		obj[key][0].value;
// 	if (!val) {
// 		return null;
// 	}
// 	return val;
// };

// export var nlp = {
// 	handleMessage: async (entities, traits) => {
// 		console.log(entities);
// 		console.log(traits);

// 		if (Object.prototype.hasOwnProperty.call(traits, "wit$greetings")) {
// 			const greetings = firstValue(traits, "wit$greetings");
// 			console.log(greetings);

// 			if (greetings) {
// 				const greet = responses["greetings"];
// 				// console.log(greet[Math.floor(Math.random() * greet.length)]);
// 				return greet[Math.floor(Math.random() * greet.length)];
// 			}
// 		} else if (Object.prototype.hasOwnProperty.call(traits, "date")) {
// 			const date = firstValue(traits, "date");
// 			console.log(date);

// 			if (date) {
// 				const date = responses["date"];
// 				// console.log(greet[Math.floor(Math.random() * greet.length)]);
// 				console.log(date[0]);

// 				return date[0];
// 			}
// 		} else if (Object.prototype.hasOwnProperty.call(traits, "greetings2")) {
// 			const greetings = firstValue(traits, "greetings2");
// 			console.log(greetings);

// 			if (greetings) {
// 				const greet = responses["greetings2"];
// 				// console.log(greet[Math.floor(Math.random() * greet.length)]);
// 				return greet[0];
// 			}
// 		} else if (Object.prototype.hasOwnProperty.call(traits, "askInfo")) {
// 			const greetings = firstValue(traits, "askInfo");
// 			console.log(greetings);

// 			if (greetings) {
// 				const greet = responses["devInfo"];
// 				return greet[Math.floor(Math.random() * greet.length)];
// 			}
// 		} else if (Object.prototype.hasOwnProperty.call(traits, "company")) {
// 			const greetings = firstValue(traits, "company");
// 			console.log(greetings);

// 			if (greetings) {
// 				const greet = responses["company"];
// 				return greet[0];
// 			}
// 		} else if (Object.prototype.hasOwnProperty.call(traits, "fact")) {
// 			const greetings = firstValue(traits, "fact");
// 			console.log(greetings);

// 			if (greetings) {
// 				const greet = responses["facts"];
// 				return greet[Math.floor(Math.random() * greet.length)];
// 			}
// 		}
// 		return "Sorry, I have still a lot to learn";
// 	},
// };
