/* Some constants ... */

/* Expansions */
var base = 0, breakinAtmo = 1, piratesAndBountyHunters = 2;

/* Card types */
var crew = 0, gear = 1, shipUpgrade = 2, driveCore = 3;

/* Shops */
var osiris = 0, persephone = 1, regina = 2, silverhold = 3, spaceBazaar = 4;

/* Keywords */
var explosives = 0, fakeID = 1, fancyDuds = 2, firearm = 3, hackingRig = 4, sniperRifle = 5, transport = 6;

/* Professions */
var companion = 0, grifter = 1, mechanic = 2, medic = 3, merc = 4, pilot = 5, soldier = 6;





var cards = [
{
	"name":			"Bester",

	"type":			crew,
	"set":			base,
	"shop":			regina,
	"cost":			100,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[mechanic],

	"moral":		false,
	"wanted":		false,

	"title":		"\"Genius\" Mechanic",

	"description":	"On [Tech] Tests, \"Thrillin' Heroics\" bonus dice do not apply.",

	"flavourtext":	"\"Genius. No one's ever called me that before. Shiny!\""
},

{
	"name":			"Bridgit",

	"type":			crew,
	"set":			base,
	"shop":			regina,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	2,

	"keywords":		[],

	"professions":	[companion, grifter],

	"moral":		false,
	"wanted":		false,

	"title":		"Deceptive",

	"description":	"If Yolanda or Saffron are hired by anyone, Remove Bridgit from Play.",

	"flavourtext":	"\"But face it, Hubby. I'm really hot.\""
},

{
	"name":			"Concealed Smuggling Compartments",

	"type":			shipUpgrade,
	"set":			base,
	"shop":			regina,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"2 Additional Stash areas.\nUp to 2 Crew Onboard Ship may Ignore Alliance Wanted Crew rolls.",

	"flavourtext":	""
},

{
	"name":			"Concealed Smuggling Compartments",

	"type":			shipUpgrade,
	"set":			base,
	"shop":			regina,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"2 Additional Stash areas.\nUp to 2 Crew Onboard Ship may Ignore Alliance Wanted Crew rolls.",

	"flavourtext":	""
},

{
	"name":			"Crow",

	"type":			crew,
	"set":			base,
	"shop":			regina,
	"cost":			200,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[merc],

	"moral":		false,
	"wanted":		true,

	"title":		"Knife Fighter",

	"description":	"+[Fight] When Carrying a Knife.\nMay not Carry a Firearm.",

	"flavourtext":	"\"You entered into an arrangement with Mister Niska. There is no mind-changing.\""
},

{
	"name":			"Crow's Knife",

	"type":			gear,
	"set":			base,
	"shop":			regina,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"Discard to add +2[Fight] to a [Fight] Test, after rolling.",

	"flavourtext":	""
},

{
	"name":			"Cry Baby",

	"type":			shipUpgrade,
	"set":			base,
	"shop":			regina,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"When in a Sector with Alliance Cruiser, discard to ignore Alliance Cruiser's effects and move the Cruiser 1 Sector within Alliance Space.",

	"flavourtext":	""
},

{
	"name":			"Fast Horses",

	"type":			gear,
	"set":			base,
	"shop":			regina,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[transport],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"Discard to count as [TRANSPORT].",

	"flavourtext":	""
},

{
	"name":			"Fast Horses",

	"type":			gear,
	"set":			base,
	"shop":			regina,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[transport],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"Discard to count as [TRANSPORT].",

	"flavourtext":	""
},

{
	"name":			"Glucklich Jia 642X",

	"type":			gear,
	"set":			base,
	"shop":			regina,
	"cost":			800,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[firearm, sniperRifle],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"",

	"flavourtext":	""
},

{
	"name":			"Grange Brothers",

	"type":			crew,
	"set":			base,
	"shop":			regina,
	"cost":			200,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[merc],

	"moral":		false,
	"wanted":		true,

	"title":		"Two of a Kind",

	"description":	"May Carry 2 Gear.\nMust pass 2 Alliance Wanted Crew rolls to dodge capture.",

	"flavourtext":	""
},

{
	"name":			"Gun Hand",

	"type":			crew,
	"set":			base,
	"shop":			regina,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Expendable",

	"description":	"When Killed, discard instead of Removing from Play.",

	"flavourtext":	"\"There's just an acre of you fellas, isn't there?\" --Mal"
},

{
	"name":			"Gun Hand",

	"type":			crew,
	"set":			base,
	"shop":			regina,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Expendable",

	"description":	"When Killed, discard instead of Removing from Play.",

	"flavourtext":	"\"There's just an acre of you fellas, isn't there?\" --Mal"
},

{
	"name":			"Kaylee",

	"type":			crew,
	"set":			base,
	"shop":			regina,
	"cost":			300,

	"fight":		0,
	"tech":			3,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[mechanic],

	"moral":		true,
	"wanted":		false,

	"title":		"Natural Know How",

	"description":	"May re-roll [Tech] Tests.",

	"flavourtext":	"\"Don't know how. Machines just got workings and they talk to me.\""
},

{
	"name":			"Kaylee's Reprogrammer",

	"type":			gear,
	"set":			base,
	"shop":			regina,
	"cost":			1000,

	"fight":		0,
	"tech":			2,
	"negotiate":	0,

	"keywords":		[hackingRig],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"",

	"flavourtext":	""
},

{
	"name":			"Lucy",

	"type":			crew,
	"set":			base,
	"shop":			regina,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	2,

	"keywords":		[],

	"professions":	[grifter],

	"moral":		true,
	"wanted":		false,

	"title":		"Morale Booster",

	"description":	"You may use an Action on your turn to remove Disgruntled from a Crew other than Lucy.",

	"flavourtext":	""
},

{
	"name":			"Lund",

	"type":			crew,
	"set":			base,
	"shop":			regina,
	"cost":			200,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[soldier],

	"moral":		false,
	"wanted":		false,

	"title":		"Cheap Shot",

	"description":	"May use Gear in \"Kosherized\" [Fight] Tests.",

	"flavourtext":	"\"I said you're a coward and a pisspot. Now what're you gonna do about it?\""
},

{
	"name":			"Onboard Chop Shop",

	"type":			shipUpgrade,
	"set":			base,
	"shop":			regina,
	"cost":			1600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"After any Salvage Op, take $500 and Load 1 Contraband.",

	"flavourtext":	""
},

{
	"name":			"Onboard Chop Shop",

	"type":			shipUpgrade,
	"set":			base,
	"shop":			regina,
	"cost":			1600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"After any Salvage Op, take $500 and Load 1 Contraband.",

	"flavourtext":	""
},

{
	"name":			"Overcharged Grav Thruster",

	"type":			shipUpgrade,
	"set":			base,
	"shop":			regina,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"+1 to Full Burn Range.",

	"flavourtext":	""
},

{
	"name":			"Pistol",

	"type":			gear,
	"set":			base,
	"shop":			regina,
	"cost":			400,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[firearm],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"",

	"flavourtext":	""
},

{
	"name":			"Pistol",

	"type":			gear,
	"set":			base,
	"shop":			regina,
	"cost":			400,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[firearm],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"",

	"flavourtext":	""
},

{
	"name":			"Sky Hook",

	"type":			shipUpgrade,
	"set":			base,
	"shop":			regina,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[transport],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"Requires Pilot to use.\nCounts as [TRANSPORT].\nAfter completing a Crime Job, Load 1 Contraband.",

	"flavourtext":	""
},

{
	"name":			"Sky Hook",

	"type":			shipUpgrade,
	"set":			base,
	"shop":			regina,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[transport],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"Requires Pilot to use.\nCounts as TRANSPORT.\nAfter completing a Crime Job, Load 1 Contraband.",

	"flavourtext":	""
},

{
	"name":			"Two-Fry",

	"type":			crew,
	"set":			base,
	"shop":			regina,
	"cost":			200,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[merc],

	"moral":		false,
	"wanted":		true,

	"title":		"Dead-Eye",

	"description":	"When Carrying a Sniper Rifle on Jobs, draw 1 fewer Misbehave Card, down to a minimum of 1.",

	"flavourtext":	"\"Always makes it quick and clean.\" --Patience"
},

{
	"name":			"Mud Dog ATV",

	"type":			gear,
	"set":			breakinAtmo,
	"shop":			regina,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[transport],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"After completing a Smuggling Job, Load 1 Contraband.",

	"flavourtext":	""
},

{
	"name":			"Mud Dog ATV",

	"type":			gear,
	"set":			breakinAtmo,
	"shop":			regina,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[transport],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"After completing a Smuggling Job, Load 1 Contraband.",

	"flavourtext":	""
},

{
	"name":			"Nandi's Gun Collection",

	"type":			gear,
	"set":			breakinAtmo,
	"shop":			regina,
	"cost":			1200,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[fancyDuds, firearm],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"Reroll any [Negotiate] Test results of 1.",

	"flavourtext":	""
},

{
	"name":			"The Specialist",

	"type":			crew,
	"set":			breakinAtmo,
	"shop":			regina,
	"cost":			300,

	"fight":		1,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[firearm, sniperRifle],

	"professions":	[soldier],

	"moral":		false,
	"wanted":		true,

	"title":		"Wet Work",

	"description":	"May not Carry Gear.",

	"flavourtext":	""
},

{
	"name":			"Two-Fry's Carbine",

	"type":			gear,
	"set":			breakinAtmo,
	"shop":			regina,
	"cost":			1200,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[firearm, sniperRifle],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"Reroll any [Fight] Test results of 1.",

	"flavourtext":	""
}
];


/*

{
	"name":			"",

	"type":			,
	"set":			,
	"shop":			,
	"cost":			,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,

	"title":		"",

	"description":	"",

	"flavourtext":	""
},
*/

