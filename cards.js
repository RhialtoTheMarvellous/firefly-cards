/* Some constants ... */

/* Sets */
var SETS = {
	base: 0,
	breakinAtmo: 1,
	promo: 2,
	piratesAndBountyHunters: 3,
	blueSun: 4,
	kalidasa: 5,
	esmerelda: 6,
	jetwash: 7
};

/* Card types */
var TYPES = {
	crew: 10,
	gear: 11,
	shipUpgrade: 12,
	driveCore: 13
};

/* Shops */
var SHOPS = {
	osiris: 20,
	persephone: 21,
	regina: 22,
	silverhold: 23,
	spaceBazaar: 24,
	meridian: 25,
	beaumonde: 26
};

/* Keywords */
var KEYWORDS = {
	explosives: 30,
	fakeID: 31,
	fancyDuds: 32,
	firearm: 33,
	hackingRig: 34,
	sniperRifle: 35,
	transport: 36
};

/* Professions */
var PROFESSIONS = {
	companion: 40,
	grifter: 41,
	hillFolk: 42,
	mechanic: 43,
	medic: 44,
	merc: 45,
	pilot: 46,
	soldier: 47,
	lawman: 48,
	mudder: 49
};





var cards = [
/*** BASE CARDS ***/

/** Osiris (Base) **/
{
	"id":			1,

	"name":			"Alliance Ident Card",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			1600,

	"fight":		0,
	"tech":			0,
	"negotiate":	2,

	"keywords":		[KEYWORDS.fakeID],

	"professions":	[],

	"title":		"",

	"description":	"Counts as Solid with Harken.\nCrew carrying ignores Wanted Crew Roll.",

	"flavourText":	""
},

{
	"id":			2,

	"name":			"\"Bona Fide\" Credentials",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[KEYWORDS.fakeID],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			3,

	"name":			"Enhanced Graviton Accelerator",

	"type":			TYPES.driveCore,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			2400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],
	
	"range":		6,

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			4,

	"name":			"Expanded Crew Quarters",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"+3 to Ship's Max Crew.",

	"flavourText":	""
},

{
	"id":			5,

	"name":			"Expanded Crew Quarters",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"+3 to Ship's Max Crew.",

	"flavourText":	""
},

{
	"id":			6,

	"name":			"Exterior Cargo Pods",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"2 Additional Cargo Hold areas.",

	"flavourText":	""
},

{
	"id":			7,

	"name":			"Exterior Cargo Pods",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"2 Additional Cargo Hold areas.",

	"flavourText":	""
},

{
	"id":			8,

	"name":			"Full Tune-Up & Retro-Fit",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Ignore all Breakdowns.",

	"flavourText":	""
},

{
	"id":			9,

	"name":			"Fully Equipped Med Bay",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"May re-roll Medic Checks.",

	"flavourText":	""
},

{
	"id":			10,

	"name":			"Fully Equipped Med Bay",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"May re-roll Medic Checks.",

	"flavourText":	""
},

{
	"id":			11,

	"name":			"Hyper Efficient Radion Accelerator Mark III",

	"type":			TYPES.driveCore,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"range":		4,

	"title":		"",

	"description":	"No Fuel required to initiate Full Burn.",

	"flavourText":	""
},

{
	"id":			12,

	"name":			"Hyper Efficient Radion Accelerator Mark III",

	"type":			TYPES.driveCore,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"range":		4,

	"title":		"",

	"description":	"No Fuel required to initiate Full Burn.",

	"flavourText":	""
},

{
	"id":			13,

	"name":			"Inara",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			300,

	"fight":		0,
	"tech":			0,
	"negotiate":	3,

	"keywords":		[KEYWORDS.fancyDuds],

	"professions":	[PROFESSIONS.companion],

	"moral":		true,
	"wanted":		false,

	"title":		"Ambassador",

	"description":	"May re-roll [Negotiate Test]s.",

	"flavourText":	"\"What exactly was our net profit on the famous wobbly-headed doll caper?\""
},

{
	"id":			14,

	"name":			"Interrogator",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			100,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.medic],

	"moral":		false,
	"wanted":		true,

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			15,

	"name":			"Med Staff",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.medic],

	"moral":		true,
	"wanted":		false,

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			16,

	"name":			"Med Staff",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.medic],

	"moral":		true,
	"wanted":		false,

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			17,

	"name":			"Med Staff",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.medic],

	"moral":		true,
	"wanted":		false,

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			18,

	"name":			"Med Staff",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.medic],

	"moral":		true,
	"wanted":		false,

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			19,

	"name":			"Modified Radion Accelerator Mark II",

	"type":			TYPES.driveCore,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			1200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"range":		6,

	"title":		"",

	"description":	"1 Fuel to initiate Full Burn.",

	"flavourText":	""
},

{
	"id":			20,

	"name":			"Modified Radion Accelerator Mark II",

	"type":			TYPES.driveCore,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			1200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"range":		6,

	"title":		"",

	"description":	"1 Fuel to initiate Full Burn.",

	"flavourText":	""
},

{
	"id":			21,

	"name":			"Official Lookin' Vehicle",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			1400,

	"fight":		0,
	"tech":			0,
	"negotiate":	2,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			22,

	"name":			"Security Interface Pad",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			1000,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[KEYWORDS.hackingRig],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			23,

	"name":			"Shiny New State-of-the-Art Compression Coils",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			1600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"May Mosey up to 2 Sectors.\nIgnore all Breakdowns.",

	"flavourText":	""
},

{
	"id":			24,

	"name":			"Simon's Surgical Kit",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			800,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"+1 to Medic Checks.",

	"flavourText":	""
},

{
	"id":			25,

	"name":			"Yolonda",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.osiris,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	2,

	"keywords":		[],

	"professions":	[PROFESSIONS.companion, PROFESSIONS.grifter],

	"moral":		false,
	"wanted":		false,

	"title":		"Deceptive",

	"description":	"If Saffron or Bridgit are hired by anyone, Remove Yolonda from Play.",

	"flavourText":	"\"Did you think I was a princess? ... You're a rutting fool.\""
},

/** Persephone (Base) **/

{
	"id":			26,

	"name":			"4WD Mule",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"After completing a Crime Job, Load 1 Cargo.",

	"flavourText":	""
},

{
	"id":			27,

	"name":			"4WD Mule",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"After completing a Crime Job, Load 1 Cargo.",

	"flavourText":	""
},

{
	"id":			28,

	"name":			"A Very Fine Hat",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[KEYWORDS.fancyDuds],

	"professions":	[],

	"title":		"",

	"description":	"When Dealing with Contacts, you may Consider up to 4 Jobs.",

	"flavourText":	""
},

{
	"id":			29,

	"name":			"Billy",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			200,

	"fight":		0,
	"tech":			2,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mechanic],

	"moral":		false,
	"wanted":		true,

	"title":		"Salvage Pro",

	"description":	"+1 Cargo from Salvage Ops.",

	"flavourText":	""
},

{
	"id":			30,

	"name":			"\"Bona Fide\" Credentials",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[KEYWORDS.fakeID],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			31,

	"name":			"Bree",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			200,

	"fight":		0,
	"tech":			2,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mechanic],

	"moral":		false,
	"wanted":		true,

	"title":		"Black Market Ties",

	"description":	"May sell Parts to any Solid Contact for $300.",

	"flavourText":	"\"It's a wreck ... It's parts. A lot of cheap parts we'll never unload.\""
},

{
	"id":			32,

	"name":			"Cry Baby",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"When in a Sector with Alliance Cruiser, discard to ignore Alliance Cruiser's effects and move the Cruiser 1 Sector within Alliance Space.",

	"flavourText":	""
},

{
	"id":			33,

	"name":			"Cry Baby",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"When in a Sector with Alliance Cruiser, discard to ignore Alliance Cruiser's effects and move the Cruiser 1 Sector within Alliance Space.",

	"flavourText":	""
},

{
	"id":			34,

	"name":			"Emma",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	2,

	"keywords":		[],

	"professions":	[PROFESSIONS.grifter],

	"moral":		true,
	"wanted":		false,

	"title":		"Morale Booster",

	"description":	"You may use an Action on your turn to remove Disgruntled from a Crew other than Emma.",

	"flavourText":	""
},

{
	"id":			35,

	"name":			"Enforcer",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			200,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Intimidating",

	"description":	"+[Negotiate] when Carrying a Firearm.",

	"flavourText":	""
},

{
	"id":			36,

	"name":			"Enforcer",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			200,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Intimidating",

	"description":	"+[Negotiate] when Carrying a Firearm.",

	"flavourText":	""
},

{
	"id":			37,

	"name":			"Explosive Charge",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.explosives],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as [EXPLOSIVES].\n--OR--\nDiscard to add +[Fight] to a [Fight Test], after rolling.",

	"flavourText":	""
},

{
	"id":			38,

	"name":			"Gun Hand",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Expendable",

	"description":	"When Killed, discard instead of Removing from Play.",

	"flavourText":	"\"There's just an acre of you fellas, isn't there?\" --Mal"
},

{
	"id":			39,

	"name":			"Gun Hand",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Expendable",

	"description":	"When Killed, discard instead of Removing from Play.",

	"flavourText":	"\"There's just an acre of you fellas, isn't there?\" --Mal"
},

{
	"id":			40,

	"name":			"Hastily Forged Documents",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.fakeID],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as [FAKE ID].\n--OR--\nDiscard to add +[Negotiate] to a [Negotiate Test], after rolling.",

	"flavourText":	""
},

{
	"id":			41,

	"name":			"Improvised Hacking Rig",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.hackingRig],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as [HACKING RIG].\n--OR--\nDiscard to add +[Tech] to a [Tech Test], after rolling.",

	"flavourText":	""
},

{
	"id":			42,

	"name":			"Kaylee's Fluffy Pink Dress",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[KEYWORDS.fancyDuds],

	"professions":	[],

	"title":		"",

	"description":	"When Buying from Suppliers, you may Buy up to 3 cards.",

	"flavourText":	""
},

{
	"id":			43,

	"name":			"Knife",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to add +[Fight] to a [Fight Test], after rolling.",

	"flavourText":	""
},

{
	"id":			44,

	"name":			"River Tam",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"moral":		true,
	"wanted":		true,

	"title":		"Gifted",

	"description":	"Before each Test, roll:\n1-2: Return to Ship\n3: 2[Fight]\n4: 2[Tech]\n5: 2[Negotiate]\n6: 3 of any chosen Skill.",

	"flavourText":	""
},

{
	"id":			45,

	"name":			"Scrapper",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mechanic],

	"moral":		false,
	"wanted":		false,

	"title":		"Low Life Vulture",

	"description":	"+1 Part from Salvage Ops.",

	"flavourText":	""
},

{
	"id":			46,

	"name":			"Scrapper",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mechanic],

	"moral":		false,
	"wanted":		false,

	"title":		"Low Life Vulture",

	"description":	"+1 Part from Salvage Ops.",

	"flavourText":	""
},

{
	"id":			47,

	"name":			"Scrapper",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mechanic],

	"moral":		false,
	"wanted":		false,

	"title":		"Low Life Vulture",

	"description":	"+1 Part from Salvage Ops.",

	"flavourText":	""
},

{
	"id":			48,

	"name":			"Security Interface Pad",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			1000,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[KEYWORDS.hackingRig],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			49,

	"name":			"Shepherd Book",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			0,

	"fight":		1,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[KEYWORDS.fakeID],

	"professions":	[PROFESSIONS.soldier],

	"moral":		true,
	"wanted":		false,

	"title":		"Secret Past",

	"description":	"If Working Immoral Job, Shepherd Book must stay Onboard Ship.",

	"flavourText":	"\"Wasn't born a Shepherd, Mal.\""
},

{
	"id":			50,

	"name":			"Simon Tam",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.persephone,
	"cost":			200,

	"fight":		0,
	"tech":			2,
	"negotiate":	0,

	"keywords":		[KEYWORDS.fancyDuds],

	"professions":	[PROFESSIONS.medic],

	"moral":		true,
	"wanted":		true,

	"title":		"\"I am Very Smart\"",

	"description":	"+2 to Medic Checks.\n+2 to River Tam's \"Gifted\" rolls.",

	"flavourText":	""
},

/** Regina (Base) **/

{
	"id":			51,

	"name":			"Bester",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			100,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mechanic],

	"moral":		false,
	"wanted":		false,

	"title":		"\"Genius\" Mechanic",

	"description":	"On [Tech Tests], \"Thrillin' Heroics\" bonus dice do not apply.",

	"flavourText":	"\"Genius. No one's ever called me that before. Shiny!\""
},

{
	"id":			52,

	"name":			"Bridgit",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	2,

	"keywords":		[],

	"professions":	[PROFESSIONS.companion, PROFESSIONS.grifter],

	"moral":		false,
	"wanted":		false,

	"title":		"Deceptive",

	"description":	"If Yolanda or Saffron are hired by anyone, Remove Bridgit from Play.",

	"flavourText":	"\"But face it, Hubby. I'm really hot.\""
},

{
	"id":			53,

	"name":			"Concealed Smuggling Compartments",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"2 Additional Stash areas.\nUp to 2 Crew Onboard Ship may Ignore Alliance Wanted Crew rolls.",

	"flavourText":	""
},

{
	"id":			54,

	"name":			"Concealed Smuggling Compartments",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"2 Additional Stash areas.\nUp to 2 Crew Onboard Ship may Ignore Alliance Wanted Crew rolls.",

	"flavourText":	""
},

{
	"id":			55,

	"name":			"Crow",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			200,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		true,

	"title":		"Knife Fighter",

	"description":	"+[Fight] When Carrying a Knife.\nMay not Carry a Firearm.",

	"flavourText":	"\"You entered into an arrangement with Mister Niska. There is no mind-changing.\""
},

{
	"id":			56,

	"name":			"Crow's Knife",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to add +2[Fight] to a [Fight Test], after rolling.",

	"flavourText":	""
},

{
	"id":			57,

	"name":			"Cry Baby",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"When in a Sector with Alliance Cruiser, discard to ignore Alliance Cruiser's effects and move the Cruiser 1 Sector within Alliance Space.",

	"flavourText":	""
},

{
	"id":			58,

	"name":			"Fast Horses",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as [TRANSPORT].",

	"flavourText":	""
},

{
	"id":			59,

	"name":			"Fast Horses",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as [TRANSPORT].",

	"flavourText":	""
},

{
	"id":			60,

	"name":			"Glucklich Jia 642X",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			800,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm, KEYWORDS.sniperRifle],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			61,

	"name":			"Grange Brothers",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			200,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		true,

	"title":		"Two of a Kind",

	"description":	"May Carry 2 Gear.\nMust pass 2 Alliance Wanted Crew rolls to dodge capture.",

	"flavourText":	""
},

{
	"id":			62,

	"name":			"Gun Hand",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Expendable",

	"description":	"When Killed, discard instead of Removing from Play.",

	"flavourText":	"\"There's just an acre of you fellas, isn't there?\" --Mal"
},

{
	"id":			63,

	"name":			"Gun Hand",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Expendable",

	"description":	"When Killed, discard instead of Removing from Play.",

	"flavourText":	"\"There's just an acre of you fellas, isn't there?\" --Mal"
},

{
	"id":			64,

	"name":			"Kaylee",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			300,

	"fight":		0,
	"tech":			3,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mechanic],

	"moral":		true,
	"wanted":		false,

	"title":		"Natural Know How",

	"description":	"May re-roll [Tech Tests].",

	"flavourText":	"\"Don't know how. Machines just got workings and they talk to me.\""
},

{
	"id":			65,

	"name":			"Kaylee's Reprogrammer",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			1000,

	"fight":		0,
	"tech":			2,
	"negotiate":	0,

	"keywords":		[KEYWORDS.hackingRig],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			66,

	"name":			"Lucy",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	2,

	"keywords":		[],

	"professions":	[PROFESSIONS.grifter],

	"moral":		true,
	"wanted":		false,

	"title":		"Morale Booster",

	"description":	"You may use an Action on your turn to remove Disgruntled from a Crew other than Lucy.",

	"flavourText":	""
},

{
	"id":			67,

	"name":			"Lund",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			200,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.soldier],

	"moral":		false,
	"wanted":		false,

	"title":		"Cheap Shot",

	"description":	"May use Gear in [Kosherized] [Fight Tests].",

	"flavourText":	"\"I said you're a coward and a pisspot. Now what're you gonna do about it?\""
},

{
	"id":			68,

	"name":			"Onboard Chop Shop",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			1600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"After any Salvage Op, take $500 and Load 1 Contraband.",

	"flavourText":	""
},

{
	"id":			69,

	"name":			"Onboard Chop Shop",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			1600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"After any Salvage Op, take $500 and Load 1 Contraband.",

	"flavourText":	""
},

{
	"id":			70,

	"name":			"Overcharged Grav Thruster",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"+1 to Full Burn Range.",

	"flavourText":	""
},

{
	"id":			71,

	"name":			"Pistol",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			400,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			72,

	"name":			"Pistol",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			400,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			73,

	"name":			"Sky Hook",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"Requires Pilot to use.\nCounts as [TRANSPORT].\nAfter completing a Crime Job, Load 1 Contraband.",

	"flavourText":	""
},

{
	"id":			74,

	"name":			"Sky Hook",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"Requires Pilot to use.\nCounts as [TRANSPORT].\nAfter completing a Crime Job, Load 1 Contraband.",

	"flavourText":	""
},

{
	"id":			75,

	"name":			"Two-Fry",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.regina,
	"cost":			200,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		true,

	"title":		"Dead-Eye",

	"description":	"When Carrying a Sniper Rifle on Jobs, draw 1 fewer Misbehave Card, down to a minimum of 1.",

	"flavourText":	"\"Always makes it quick and clean.\" --Patience"
},

/** Silverhold (Base) **/

{
	"id":			76,

	"name":			"Burgess's Hovering Bad-Ass Space Jeep",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			1600,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm, KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			77,

	"name":			"Burgess's Laser",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			1800,

	"fight":		3,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.explosives, KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"Requires [Tech] to Carry.",

	"flavourText":	""
},

{
	"id":			78,

	"name":			"Doralee",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			100,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.hillFolk, PROFESSIONS.medic],

	"moral":		true,
	"wanted":		false,

	"title":		"Angry Mob",

	"description":	"+[Fight] when you have at least 3 Hill Folk in Crew.",

	"flavourText":	"\"Life sometimes takes you places you weren't expectin' to go.\""
},

{
	"id":			79,

	"name":			"Explosive Charge",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.explosives],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as [EXPLOSIVES].\n--OR--\nDiscard to add +[Fight] to a [Fight Test], after rolling.",

	"flavourText":	""
},

{
	"id":			80,

	"name":			"Explosive Charge",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.explosives],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as [EXPLOSIVES].\n--OR--\nDiscard to add +[Fight] to a [Fight Test], after rolling.",

	"flavourText":	""
},

{
	"id":			81,

	"name":			"Fast Horses",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as [TRANSPORT].",

	"flavourText":	""
},

{
	"id":			82,

	"name":			"Fast Horses",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as [TRANSPORT].",

	"flavourText":	""
},

{
	"id":			83,

	"name":			"Fendris",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.soldier],

	"moral":		false,
	"wanted":		false,

	"title":		"Henchman #2",

	"description":	"If your Leader becomes Disgruntled, Disgruntle Fendris instead.",

	"flavourText":	""
},

{
	"id":			84,

	"name":			"GJ Flashkill Pod Grenades",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			1000,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.explosives],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			85,

	"name":			"GJ Flashkill Pod Grenades",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			1000,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.explosives],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			86,

	"name":			"Glucklich Jia 642X",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			800,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm, KEYWORDS.sniperRifle],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			87,

	"name":			"Glucklich Jia 642X",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			800,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm, KEYWORDS.sniperRifle],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			88,

	"name":			"Hill Folk",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.hillFolk],

	"moral":		true,
	"wanted":		false,

	"title":		"Angry Mob",

	"description":	"+[Fight] when you have at least 3 Hill Folk in Crew.",

	"flavourText":	""
},

{
	"id":			89,

	"name":			"Hill Folk",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.hillFolk],

	"moral":		true,
	"wanted":		false,

	"title":		"Angry Mob",

	"description":	"+[Fight] when you have at least 3 Hill Folk in Crew.",

	"flavourText":	""
},

{
	"id":			90,

	"name":			"Jayne",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			300,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		true,

	"title":		"Public Relations",

	"description":	"May Carry 3 Gear.",

	"flavourText":	"\"Time for some thrillin' heroics.\""
},

{
	"id":			91,

	"name":			"Knife",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			92,

	"name":			"Pistol",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			400,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			93,

	"name":			"Pistol",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			400,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			94,

	"name":			"Saffron",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	2,

	"keywords":		[],

	"professions":	[PROFESSIONS.companion, PROFESSIONS.grifter],

	"moral":		false,
	"wanted":		false,

	"title":		"Deceptive",

	"description":	"If Bridgit or Yolonda are hired by anyone, Remove Saffron from Play.",

	"flavourText":	"\"You're assuming the payoff is the point.\""
},

{
	"id":			95,

	"name":			"Skunk",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			200,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.soldier],

	"moral":		false,
	"wanted":		false,

	"title":		"Firebug",

	"description":	"+[Negotiate] when Carrying Explosives.",

	"flavourText":	"\"Who needs that kind of paperwork? Skunk, light him on fire.\" --Womack"
},

{
	"id":			96,

	"name":			"Stark",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.hillFolk],

	"moral":		true,
	"wanted":		false,

	"title":		"Angry Mob",

	"description":	"+[Fight] when you have at least 3 Hill Folk in Crew.",

	"flavourText":	"\"Look at what we got! It's a doctor! Got ourselves a doctor!\""
},

{
	"id":			97,

	"name":			"Stitch",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			300,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		true,

	"title":		"Cantankerous",

	"description":	"Once per Job, may treat a [Negotiate Test] as a [Fight Test].",

	"flavourText":	"\"You tell me, boy, or I'm a' cut off every last bit a' your good looks.\""
},

{
	"id":			98,

	"name":			"The Patron",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			200,

	"fight":		1,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.hillFolk],

	"moral":		true,
	"wanted":		false,

	"title":		"Angry Mob",

	"description":	"+[Fight] when you have at least 3 Hill Folk in Crew.",

	"flavourText":	"\"We will purge the Devil from her!\""
},

{
	"id":			99,

	"name":			"\"Vera\"",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			1600,

	"fight":		2,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[KEYWORDS.firearm, KEYWORDS.sniperRifle],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			100,

	"name":			"Zoe",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.silverhold,
	"cost":			300,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.soldier],

	"moral":		true,
	"wanted":		true,

	"title":		"Dust Devil",

	"description":	"May re-roll [Fight Tests].",

	"flavourText":	"\"You're losing the higher ground here, sweet cakes.\""
},

/** Space Bazaar (Base) **/

{
	"id":			101,

	"name":			"4WD Mule",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"After completing a Crime Job, Load 1 Cargo.",

	"flavourText":	""
},

{
	"id":			102,

	"name":			"\"Bona Fide\" Credentials",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[KEYWORDS.fakeID],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			103,

	"name":			"Cry Baby",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"When in a Sector with Alliance Cruiser, discard to ignore Alliance Cruiser's effects and move the Cruiser 1 Sector within Alliance Space.",

	"flavourText":	""
},

{
	"id":			104,

	"name":			"Cry Baby",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"When in a Sector with Alliance Cruiser, discard to ignore Alliance Cruiser's effects and move the Cruiser 1 Sector within Alliance Space.",

	"flavourText":	""
},

{
	"id":			105,

	"name":			"Enforcer",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			200,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Intimidating",

	"description":	"+[Negotiate] when Carrying a Firearm.",

	"flavourText":	""
},

{
	"id":			106,

	"name":			"Enforcer",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			200,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Intimidating",

	"description":	"+[Negotiate] when Carrying a Firearm.",

	"flavourText":	""
},

{
	"id":			107,

	"name":			"Explosive Charge",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.explosives],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as [EXPLOSIVES].\n--OR--\nDiscard to add +[Fight] to a [Fight Test], after rolling.",

	"flavourText":	""
},

{
	"id":			108,

	"name":			"Gun Hand",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Expendable",

	"description":	"When Killed, discard instead of Removing from Play.",

	"flavourText":	"\"There's just an acre of you fellas, isn't there?\" --Mal"
},

{
	"id":			109,

	"name":			"Gun Hand",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Expendable",

	"description":	"When Killed, discard instead of Removing from Play.",

	"flavourText":	"\"There's just an acre of you fellas, isn't there?\" --Mal"
},

{
	"id":			110,

	"name":			"Gun Hand",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Expendable",

	"description":	"When Killed, discard instead of Removing from Play.",

	"flavourText":	"\"There's just an acre of you fellas, isn't there?\" --Mal"
},

{
	"id":			111,

	"name":			"Gun Hand",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Expendable",

	"description":	"When Killed, discard instead of Removing from Play.",

	"flavourText":	"\"There's just an acre of you fellas, isn't there?\" --Mal"
},

{
	"id":			112,

	"name":			"Hastily Forged Documents",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.fakeID],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as [FAKE ID].\n--OR--Discard to add +[Negotiate] to a [Negotiate Test], after rolling.",

	"flavourText":	""
},

{
	"id":			113,

	"name":			"Helen",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			200,

	"fight":		1,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.grifter],

	"moral":		true,
	"wanted":		true,

	"title":		"Morale Booster",

	"description":	"You may use an Action on your turn to remove Disgruntled from a Crew other than Helen.",

	"flavourText":	""
},

{
	"id":			114,

	"name":			"Improvised Hacking Rig",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.hackingRig],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as [HACKING RIG].\n--OR--\nDiscard to add +[Tech] to a [Tech Test], after rolling.",

	"flavourText":	""
},

{
	"id":			115,

	"name":			"Jayne's \"Cunning\" Hat",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"When Misbehaving, re-roll any Test result of 1.\nDoes not count towards Gear Limit.",

	"flavourText":	"\"A man walks down the street in that hat, people know he's not afraid of anything.\" --Wash"
},

{
	"id":			116,

	"name":			"Jesse",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			200,

	"fight":		1,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.pilot],

	"moral":		false,
	"wanted":		true,

	"title":		"Opportunist",

	"description":	"+1 Contraband from Salvage Ops.",

	"flavourText":	""
},

{
	"id":			117,

	"name":			"Knife",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to add +[Fight] to a [Fight Test], after rolling.",

	"flavourText":	""
},

{
	"id":			118,

	"name":			"Pistol",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			400,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			119,

	"name":			"Scrapper",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.pilot],

	"moral":		false,
	"wanted":		true,

	"title":		"Dirty Leech",

	"description":	"+2 Fuel from Salvage Ops.",

	"flavourText":	""
},

{
	"id":			120,

	"name":			"Scrapper",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.pilot],

	"moral":		false,
	"wanted":		true,

	"title":		"Dirty Leech",

	"description":	"+2 Fuel from Salvage Ops.",

	"flavourText":	""
},

{
	"id":			121,

	"name":			"Scrapper",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.pilot],

	"moral":		false,
	"wanted":		true,

	"title":		"Dirty Leech",

	"description":	"+2 Fuel from Salvage Ops.",

	"flavourText":	""
},

{
	"id":			122,

	"name":			"Security Interface Pad",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			1000,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[KEYWORDS.hackingRig],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			123,

	"name":			"Shiny Neck Tie",

	"type":			TYPES.gear,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[KEYWORDS.fancyDuds],

	"professions":	[],

	"title":		"",

	"description":	"",

	"flavourText":	""
},

{
	"id":			124,

	"name":			"Tracey",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.grifter],

	"moral":		false,
	"wanted":		true,

	"title":		"Unlucky",

	"description":	"Whenever a Crew is Killed, Tracey must be Killed first.",

	"flavourText":	"\"Oh, you're helping lots! Cause I needed a chest wound ...\""
},

{
	"id":			125,

	"name":			"Wash",

	"type":			TYPES.crew,
	"set":			SETS.base,
	"shop":			SHOPS.spaceBazaar,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.pilot],

	"moral":		true,
	"wanted":		false,

	"title":		"Hard Burn",

	"description":	"+1 to Full Burn Range.",

	"flavourText":	"\"Whoo! This kind of flyin' really wakes up a guy.\""
},

/*** BREAKIN' ATMO CARDS ***/

/** Osiris (Breakin' Atmo) **/

{
	"id":			126,

	"name":			"Alliance Body Armor",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.osiris,
	"cost":			400,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"If Crew carrying Armor is Killed, roll:\n1-3: Crew is Killed.\n4-6: Crew is not Killed.",

	"flavourText":	""
},

{
	"id":			127,

	"name":			"Alliance Body Armor",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.osiris,
	"cost":			400,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"If Crew carrying Armor is Killed, roll:\n1-3: Crew is Killed.\n4-6: Crew is not Killed.",

	"flavourText":	""
},

{
	"id":			128,

	"name":			"Helmsman",

	"type":			TYPES.crew,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.osiris,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.pilot],

	"moral":		true,
	"wanted":		false,

	"title":		"Alliance Training",

	"description":	"Counts as Solid with Harken.",

	"flavourText":	""
},

{
	"id":			129,

	"name":			"Helmsman",

	"type":			TYPES.crew,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.osiris,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.pilot],

	"moral":		true,
	"wanted":		false,

	"title":		"Alliance Training",

	"description":	"Counts as Solid with Harken.",

	"flavourText":	""
},

{
	"id":			130,

	"name":			"Universal Encyclopedia",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.osiris,
	"cost":			1200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"From any location, you may use a Deal Action to look at the top 3 cards of the Misbehave Deck. Replace them in any order.",

	"flavourText":	""
},

/** Persephone (Breakin' Atmo) **/

{
	"id":			131,

	"name":			"Accountant",

	"type":			TYPES.crew,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.persephone,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.grifter],

	"moral":		false,
	"wanted":		false,

	"title":		"Cooking the Books",

	"description":	"Whenever you take a Goal token, take $500.",

	"flavourText":	""
},

{
	"id":			132,

	"name":			"Cortex Uplink",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.persephone,
	"cost":			1200,

	"fight":		0,
	"tech":			1,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"From any location, you may use a Deal Action to Consider the top, face down card from any Contact. Accept or discard the Job as normal.",

	"flavourText":	""
},

{
	"id":			133,

	"name":			"Cortex Uplink",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.persephone,
	"cost":			1200,

	"fight":		0,
	"tech":			1,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"From any location, you may use a Deal Action to Consider the top, face down card from any Contact. Accept or discard the Job as normal.",

	"flavourText":	""
},

{
	"id":			134,

	"name":			"Gentleman's Dueling Sword",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.persephone,
	"cost":			1000,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.fancyDuds],

	"professions":	[],

	"title":		"",

	"description":	"Counts as a Knife:\nDiscard to add +[Fight] to a [Fight Test], after rolling.",

	"flavourText":	""
},

{
	"id":			135,

	"name":			"The Fixer",

	"type":			TYPES.crew,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.persephone,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	1,

	"keywords":		[KEYWORDS.fakeID],

	"professions":	[PROFESSIONS.grifter],

	"moral":		false,
	"wanted":		true,

	"title":		"Shady Connections",

	"description":	"",

	"flavourText":	""
},

/** Regina (Breakin' Atmo) **/

{
	"id":			136,

	"name":			"Mud Dog ATV",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.regina,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"After completing a Smuggling Job, Load 1 Contraband.",

	"flavourText":	""
},

{
	"id":			137,

	"name":			"Mud Dog ATV",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.regina,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"After completing a Smuggling Job, Load 1 Contraband.",

	"flavourText":	""
},

{
	"id":			138,

	"name":			"Nandi's Gun Collection",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.regina,
	"cost":			1200,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.fancyDuds, KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"Reroll any [Negotiate Test] results of 1.",

	"flavourText":	""
},

{
	"id":			139,

	"name":			"The Specialist",

	"type":			TYPES.crew,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.regina,
	"cost":			300,

	"fight":		1,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm, KEYWORDS.sniperRifle],

	"professions":	[PROFESSIONS.soldier],

	"moral":		false,
	"wanted":		true,

	"title":		"Wet Work",

	"description":	"May not Carry Gear.",

	"flavourText":	""
},

{
	"id":			140,

	"name":			"Two-Fry's Carbine",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.regina,
	"cost":			1200,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm, KEYWORDS.sniperRifle],

	"professions":	[],

	"title":		"",

	"description":	"Reroll any [Fight Test] results of 1.",

	"flavourText":	""
},

/** Silverhold (Breakin' Atmo) **/

{
	"id":			141,

	"name":			"Elder Gommen",

	"type":			TYPES.crew,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.silverhold,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	2,

	"keywords":		[],

	"professions":	[PROFESSIONS.hillFolk],

	"moral":		true,
	"wanted":		false,

	"title":		"Devout",

	"description":	"If Working Immoral Job, Elder Gommen must stay Onboard Ship.",

	"flavourText":	""
},

{
	"id":			142,

	"name":			"Head Goon",

	"type":			TYPES.crew,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.silverhold,
	"cost":			300,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Goon Squad",

	"description":	"+2[Negotiate] when you have at least 3 Mercs in Crew.",

	"flavourText":	""
},

{
	"id":			143,

	"name":			"\"The Best in the House\"",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.silverhold,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to remove Disgruntled from all Crew.",

	"flavourText":	""
},

{
	"id":			144,

	"name":			"Vehicle Mounted BFG",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.silverhold,
	"cost":			600,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"Requires Transport.",

	"flavourText":	""
},

{
	"id":			145,

	"name":			"Vehicle Mounted BFG",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.silverhold,
	"cost":			600,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"Requires Transport.",

	"flavourText":	""
},

/** Space Bazaar (Breakin' Atmo) **/

{
	"id":			146,

	"name":			"Breaching Tool",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.spaceBazaar,
	"cost":			1200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[KEYWORDS.explosives],

	"professions":	[],

	"title":		"",

	"description":	"+1 Contraband from Salvage Ops.",

	"flavourText":	""
},

{
	"id":			147,

	"name":			"Breaching Tool",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.spaceBazaar,
	"cost":			1200,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[KEYWORDS.explosives],

	"professions":	[],

	"title":		"",

	"description":	"+1 Contraband from Salvage Ops.",

	"flavourText":	""
},

{
	"id":			148,

	"name":			"Merchant",

	"type":			TYPES.crew,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.spaceBazaar,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[],

	"moral":		false,
	"wanted":		false,

	"title":		"Shrewd Trader",

	"description":	"Whenever you sell Cargo to a Contact, take an extra $100 per Cargo.",

	"flavourText":	""
},

{
	"id":			149,

	"name":			"Merchant",

	"type":			TYPES.crew,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.spaceBazaar,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[],

	"moral":		false,
	"wanted":		false,

	"title":		"Shrewd Trader",

	"description":	"Whenever you sell Cargo to a Contact, take an extra $100 per Cargo.",

	"flavourText":	""
},

{
	"id":			150,

	"name":			"Tall Playing Cards",

	"type":			TYPES.gear,
	"set":			SETS.breakinAtmo,
	"shop":			SHOPS.spaceBazaar,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"[GAMBLING]\nDiscard to Use: Pay the Bank $500. Draw 5 Misbehave Cards. If at least 3 of the 5 cards have matching suits, take $1500.",

	"flavourText":	""
},

/*** PROMO CARDS ***/

{
	"id":			151,

	"name":			"Mal's Pretty Floral Bonnet",

	"type":			TYPES.gear,
	"set":			SETS.promo,
	"shop":			SHOPS.silverhold,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Crew carrying Bonnet ignores Wanted Crew Rolls.\nDoes not count towards Gear Limit.",

	"flavourText":	"\"... if your hand touches metal, I swear by my pretty floral bonnet, I will end you.\" --Mal"
},

{
	"id":			152,

	"name":			"Wash's Lucky Dinosaurs",

	"type":			TYPES.gear,
	"set":			SETS.promo,
	"shop":			SHOPS.spaceBazaar,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"When Flying, re-roll any Test result of 1.\nDoes not count towards Gear Limit.",

	"flavourText":	"\"This is a fertile land and we will thrive. We will rule over all this land and we will call it ... This Land.\" --Stegosaurus"
},

/*** PIRATES & BOUNTY HUNTERS CARDS ***/

/** Osiris (Pirates & Bounty Hunters) **/

{
	"id":			153,

	"name":			"Agent McGinnis",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.osiris,
	"cost":			0,

	"fight":		0,
	"tech":			1,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.lawman],

	"moral":		false,
	"wanted":		false,

	"title":		"Fed",

	"description":	"Whenever you lose a [Showdown], Warrant Issued to Rival.\nBounty Bonus: +$500\nWill not work Illegal Jobs.",

	"flavourText":	"\"By the authority of the Union of Allied Planets, you are hereby bound by law.\""
},

{
	"id":			154,

	"name":			"Alliance Sonic Rifle",

	"type":			TYPES.gear,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.osiris,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Rivals using [Fight] in [Showdowns] must follow [Kosherized] rules.",

	"flavourText":	""
},

{
	"id":			155,

	"name":			"Alliance Sonic Rifle",

	"type":			TYPES.gear,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.osiris,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Rivals using [Fight] in [Showdowns] must follow [Kosherized] rules.",

	"flavourText":	""
},

{
	"id":			156,

	"name":			"Electronic Defense Suite",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.osiris,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Rivals boarding your ship may not use [Tech] Skill for Boarding Tests.\nSpend 1 Fuel to Evade Reaver Cutter. Ignore the effects of either the Reaver Cutter Nav Card or Contact Event.",

	"flavourText":	""
},

{
	"id":			157,

	"name":			"Electronic Defense Suite",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.osiris,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Rivals boarding your ship may not use [Tech] Skill for Boarding Tests.\nSpend 1 Fuel to Evade Reaver Cutter. Ignore the effects of either the Reaver Cutter Nav Card or Contact Event.",

	"flavourText":	""
},

{
	"id":			158,

	"name":			"The Guardian",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.osiris,
	"cost":			300,

	"fight":		1,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.medic, PROFESSIONS.soldier],

	"moral":		false,
	"wanted":		false,

	"title":		"Security Pro",

	"description":	"May re-roll [Showdown] Tests.",

	"flavourText":	"\"We're all clear here, Councilor.\""
},

/** Persephone (Pirates & Bounty Hunters) **/

{
	"id":			159,

	"name":			"Booby Traps",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.persephone,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.explosives],

	"professions":	[],

	"title":		"",

	"description":	"-2 to Rival's [Tech] Boarding Tests.\nIf Rival rolls a 1 when Boarding your ship, 1 of their Crew is Killed.\nDiscard to count as [EXPLOSIVES].",

	"flavourText":	""
},

{
	"id":			160,

	"name":			"Booby Traps",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.persephone,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.explosives],

	"professions":	[],

	"title":		"",

	"description":	"-2 to Rival's [Tech] Boarding Tests.\nIf Rival rolls a 1 when Boarding your ship, 1 of their Crew is Killed.\nDiscard to count as [EXPLOSIVES].",

	"flavourText":	""
},

{
	"id":			161,

	"name":			"Cryo Statis Unit",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.persephone,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Rivals may not Jump your Bounties.\n1 Crew aboard ship may ignore Alliance Wanted Crew rolls.",

	"flavourText":	""
},

{
	"id":			162,

	"name":			"Dobson",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.persephone,
	"cost":			0,

	"fight":		1,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.lawman],

	"moral":		false,
	"wanted":		false,

	"title":		"Mole",

	"description":	"In Alliance Space, you may move Alliance Cruiser to your Sector as a Fly Action.\nBounty Bonus: +$500\nWill not work Illegal Jobs.",

	"flavourText":	"\"The Cruiser's en route for intercept so talk all you want. You got about 20 minutes.\""
},

{
	"id":			163,

	"name":			"Dobson's Vector Pistol",

	"type":			TYPES.gear,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.persephone,
	"cost":			600,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"May be used in [Kosherized] Fights.\nDoes not count towards Gear Limit.",

	"flavourText":	""
},

{
	"id":			164,

	"name":			"Scan-Proof Shades",

	"type":			TYPES.gear,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.persephone,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[KEYWORDS.fancyDuds],

	"professions":	[],

	"title":		"",

	"description":	"Crew carrying Scan-Proof Shades may ignore Alliance Wanted Crew rolls.",

	"flavourText":	""
},

/** Regina (Pirates & Bounty Hunters) **/

{
	"id":			165,

	"name":			"Bandit",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.regina,
	"cost":			200,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		true,

	"title":		"Bird-Doggin'",

	"description":	"When you complete a Piracy Job, steal $200 from the targeted Rival.",

	"flavourText":	""
},

{
	"id":			166,

	"name":			"Bandit",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.regina,
	"cost":			200,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		true,

	"title":		"Bird-Doggin'",

	"description":	"When you complete a Piracy Job, steal $200 from the targeted Rival.",

	"flavourText":	""
},

{
	"id":			167,

	"name":			"Deputy",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.regina,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.lawman],

	"moral":		true,
	"wanted":		false,

	"title":		"Posse",

	"description":	"+[Fight] in [Showdown]\nBounty Bonus: $300\nWill not work Illegal Jobs.",

	"flavourText":	"\"If I ever find those people, they ain't never gonna see the inside of a jail.\" --Sheriff Bourne"
},

{
	"id":			168,

	"name":			"Mag-Grappler Launchers",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.regina,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"+3[Tech] for Boarding Tests.\nAfter all Salvage Ops, Roll:\n[Tech Test] 8:\n1-7: Nothing Shiny.\n8+: Take 1 Ship Upgrade from any discard pile.",

	"flavourText":	""
},

{
	"id":			169,

	"name":			"\"Sash's\" Hand Cannon",

	"type":			TYPES.gear,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.regina,
	"cost":			800,

	"fight":		1,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"Before rolling [Showdown], Disgruntle Rival's Leader.",

	"flavourText":	""
},

{
	"id":			170,

	"name":			"Sheriff Bourne",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.regina,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	2,

	"keywords":		[],

	"professions":	[PROFESSIONS.lawman],

	"moral":		true,
	"wanted":		false,

	"title":		"Jurisdiction",

	"description":	"+2[Fight] for all Tests while in Border Space.\nBounty Bonus: $500\nWill not work Illegal Jobs.",

	"flavourText":	"\"Alliance ain't much use to us out here on the border planets.\""
},

/** Silverhold (Pirates & Bounty Hunters) **/

{
	"id":			171,

	"name":			"Bandit",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.silverhold,
	"cost":			200,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		true,

	"title":		"Bird-Doggin'",

	"description":	"When you complete a Piracy Job, steal $200 from the targeted Rival.",

	"flavourText":	""
},

{
	"id":			172,

	"name":			"Bandit",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.silverhold,
	"cost":			200,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		true,

	"title":		"Bird-Doggin'",

	"description":	"When you complete a Piracy Job, steal $200 from the targeted Rival.",

	"flavourText":	""
},

{
	"id":			173,

	"name":			"Chari",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.silverhold,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	2,

	"keywords":		[],

	"professions":	[PROFESSIONS.grifter],

	"moral":		false,
	"wanted":		false,

	"title":		"Turncoat",

	"description":	"In a [Showdown], you may force Rival to re-roll.",

	"flavourText":	"\"Earned yourself quite a bag of silver, little kitten.\" --Rance Burgess"
},

{
	"id":			174,

	"name":			"Fed Marshal",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.silverhold,
	"cost":			0,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.lawman],

	"moral":		false,
	"wanted":		false,

	"title":		"Posse",

	"description":	"+[Fight] in [Showdown]\nBounty Bonus: +$300\nWill not work Illegal Jobs.",

	"flavourText":	"\"You're under arrest for aiding and abetting federal fugitives.\" --Agent McGinnis"
},

{
	"id":			175,

	"name":			"\"Friendly\" Game of Cards",

	"type":			TYPES.gear,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.silverhold,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"[GAMBLING]\nDiscard to Use: Pay Bank $300. Name a Suit. Flip over 3 Misbehave Cards. Take $500 and remove 1 Disgruntled token for each card that matches the named suit.",

	"flavourText":	""
},

{
	"id":			176,

	"name":			"Meadows",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.silverhold,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"moral":		true,
	"wanted":		false,

	"title":		"Hero Worship",

	"description":	"Any time a Crew is Killed, Apprehended, or Seized by the Alliance, you may Kill Meadows instead.",

	"flavourText":	"\"Don't you understand? He's come back! It's Jayne!\""
},

/** Space Bazaar (Pirates & Bounty Hunters) **/

{
	"id":			177,

	"name":			"Dalin",

	"type":			TYPES.crew,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.spaceBazaar,
	"cost":			200,

	"fight":		0,
	"tech":			1,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[],

	"moral":		false,
	"wanted":		true,

	"title":		"Intel Broker",

	"description":	"Once per Work Action, you may pay $200 to discard and re-draw a Misbehave Card.",

	"flavourText":	"\"Our long ranges picked up a read on the other side of the world ...\""
},

{
	"id":			178,

	"name":			"Early's Combat Armor",

	"type":			TYPES.gear,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.spaceBazaar,
	"cost":			1000,

	"fight":		1,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"If Crew carrying Armor is Killed, roll:\n1-3: Crew is Killed.\n4-6: Crew is not Killed.",

	"flavourText":	""
},

{
	"id":			179,

	"name":			"Early's Datascope",

	"type":			TYPES.gear,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.spaceBazaar,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.hackingRig],

	"professions":	[],

	"title":		"",

	"description":	"As a Work Action, you may reveal the top 3 cards of your current location's Supply Deck and place them all in the discard pile.",

	"flavourText":	""
},

{
	"id":			180,

	"name":			"Early's Pistol",

	"type":			TYPES.gear,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.spaceBazaar,
	"cost":			600,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"+2[Fight] in [Showdown]",

	"flavourText":	""
},

{
	"id":			181,

	"name":			"EVA Suit",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.spaceBazaar,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"+[Tech] for Boarding Tests.\n+1 Cargo from Salvage Ops.\n1 Crew abord ship may ignore Alliance Wanted Crew rolls.",

	"flavourText":	""
},

{
	"id":			182,

	"name":			"EVA Suit",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.piratesAndBountyHunters,
	"shop":			SHOPS.spaceBazaar,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"+[Tech] for Boarding Tests.\n+1 Cargo from Salvage Ops.\n1 Crew abord ship may ignore Alliance Wanted Crew rolls.",

	"flavourText":	""
},

/*** BLUE SUN CARDS ***/

/** Meridian (Blue Sun) **/

{
	"id":			183,

	"name":			"Cortland",

	"type":			TYPES.crew,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			300,

	"fight":		1,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mechanic, PROFESSIONS.soldier],

	"moral":		false,
	"wanted":		false,

	"title":		"Laws Are for the Poor",

	"description":	"May pay Bribes before any [Negiotiate Test].\nBribes may not be used in [Showdowns]",

	"flavourText":	""
},

{
	"id":			184,

	"name":			"Fruity Oaty Bar",

	"type":			TYPES.gear,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			100,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard before rolling to add +1 to any test result.\n--OR--\nDiscard to remove Disgruntled from the owner.",

	"flavourText":	""
},

{
	"id":			185,

	"name":			"Fruity Oaty Bar",

	"type":			TYPES.gear,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			100,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard before rolling to add +1 to any test result.\n--OR--\nDiscard to remove Disgruntled from the owner.",

	"flavourText":	""
},

{
	"id":			186,

	"name":			"Gun Hand",

	"type":			TYPES.crew,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Expendable",

	"description":	"When Killed, discard instead of Removing from Play.",

	"flavourText":	"\"There's just an acre of you fellas, isn't there?\" --Mal"
},

{
	"id":			187,

	"name":			"Gun Hand",

	"type":			TYPES.crew,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			100,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Expendable",

	"description":	"When Killed, discard instead of Removing from Play.",

	"flavourText":	"\"There's just an acre of you fellas, isn't there?\" --Mal"
},

{
	"id":			188,

	"name":			"Head Goon",

	"type":			TYPES.crew,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			300,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.merc],

	"moral":		false,
	"wanted":		false,

	"title":		"Goon Squad",

	"description":	"+2[Negotiate] when you have at least 3 Mercs in Crew.",

	"flavourText":	""
},

{
	"id":			189,

	"name":			"Heist Intel",

	"type":			TYPES.gear,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			500,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"On your turn, discard to look at the top 3 cards of the Misbehave deck. Return them to the top of the deck, in any order, or discard all of them.",

	"flavourText":	""
},

{
	"id":			190,

	"name":			"Hull-Mounted Flak Gun",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"When in a Sector with a Reaver Cutter, discard to ignore Reaver Cutter's effects and move that Reaver Cutter 1 Sector within Rim or Border Space.",

	"flavourText":	""
},

{
	"id":			191,

	"name":			"Hull-Mounted Flak Gun",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"When in a Sector with a Reaver Cutter, discard to ignore Reaver Cutter's effects and move that Reaver Cutter 1 Sector within Rim or Border Space.",

	"flavourText":	""
},

{
	"id":			192,

	"name":			"Kaylee's Parasol",

	"type":			TYPES.gear,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Does not count towards Gear Limit.",

	"flavourText":	""
},

{
	"id":			193,

	"name":			"Long-Range Scanner Array",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"During a Fly Action you may resolve Reaver or Alliance Alert Tokens in adjacent Sectors.",

	"flavourText":	""
},

{
	"id":			194,

	"name":			"Love bot",

	"type":			TYPES.gear,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			1200,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.companion],

	"title":		"",

	"description":	"Counts as [Companion].\nYou may use an Action on your turn to remove Disgruntled from a Crew.",

	"flavourText":	""
},

{
	"id":			195,

	"name":			"Mal's Brown Coat",

	"type":			TYPES.gear,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Disgruntle Owner to add their [Fight] to a [Negotiate Test].\nDoes not count towards Gear Limit.",

	"flavourText":	""
},

{
	"id":			196,

	"name":			"Mal's Frontier Model B",

	"type":			TYPES.gear,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			800,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"Before each [Fight Test[, remove Disgruntled from the Owner.",

	"flavourText":	""
},

{
	"id":			197,

	"name":			"Maque Tiles",

	"type":			TYPES.gear,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"[GAMBLING]\nDiscard to Use:\nChoose red or black.\nDraw 2 Misbehave Cards.\nIf both suits match choice, take $1200.",

	"flavourText":	""
},

{
	"id":			198,

	"name":			"MF-813 Flying Mule",

	"type":			TYPES.gear,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			1400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.transport],

	"professions":	[],

	"title":		"",

	"description":	"After completing a Crime Job, Load 6 Goods, minus 1 per Crew Working the Job.",

	"flavourText":	""
},

{
	"id":			199,

	"name":			"Modded Fuel Catalyzer",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"When initiating a Full Burn, Spend 1 additional Fuel to add +2 to your Drive Core's Max Range this turn.",

	"flavourText":	""
},

{
	"id":			200,

	"name":			"Reaver-Flage",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Ship may move into a Sector occupied by a Reaver Ship.\nDiscard after losing any Crew to the Reavers.",

	"flavourText":	""
},

{
	"id":			201,

	"name":			"Reaver-Flage",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Ship may move into a Sector occupied by a Reaver Ship.\nDiscard after losing any Crew to the Reavers.",

	"flavourText":	""
},

{
	"id":			202,

	"name":			"Sheydra",

	"type":			TYPES.crew,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	2,

	"keywords":		[KEYWORDS.fancyDuds],

	"professions":	[PROFESSIONS.companion],

	"moral":		true,
	"wanted":		false,

	"title":		"Composure",

	"description":	"Once per Job, may treat a [Fight Test] as a [Negotiate Test].",

	"flavourText":	"\"I'm not the one who had a torrid affair with a pirate.\""
},

{
	"id":			203,

	"name":			"Simon's Sonic Stun Baton",

	"type":			TYPES.gear,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.fakeID],

	"professions":	[],

	"title":		"",

	"description":	"Discard, after a [Fight Test], to count the roll as a 6 and add Thrillin' Heroics bonus roll.",

	"flavourText":	""
},

{
	"id":			204,

	"name":			"The Middleman",

	"type":			TYPES.crew,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			200,

	"fight":		1,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.grifter],

	"moral":		false,
	"wanted":		true,

	"title":		"Facilitator",

	"description":	"Whenever you sell Contraband to a Contact, take an extra $100 per Contraband sold.",

	"flavourText":	"\"I'd advise we all just lay low for the moment.\""
},

{
	"id":			205,

	"name":			"The Operative's Sword",

	"type":			TYPES.gear,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			1000,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Counts as a Knife.\nDiscard to count as an \"Ace\" for any Misbehave Card: Proceed.",

	"flavourText":	""
},

{
	"id":			206,

	"name":			"The Salesman",

	"type":			TYPES.crew,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.grifter],

	"moral":		false,
	"wanted":		false,

	"title":		"Wholesaler",

	"description":	"As a Buy Action, discard to purchase a Ship Upgrade or Drive Core from any discard pile, at half price. This may be done from any location.",

	"flavourText":	""
},

{
	"id":			207,

	"name":			"Xunsu Whisper X11",

	"type":			TYPES.driveCore,
	"set":			SETS.blueSun,
	"shop":			SHOPS.meridian,
	"cost":			1600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"range":		6,

	"title":		"",

	"description":	"1 Fuel to initiate Full Burn.\nWhenever a Reaver or Alliance Ship enters your current Sector, you may immediately roll a Dice:\n1-2: No effect.\n3-6: Evade.",

	"flavourText":	""
},

/*** KALIDASA CARDS ***/

/** Osiris (Kalidasa) **/

{
	"id":			208,

	"name":			"Med Foam",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.osiris,
	"cost":			300,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as having made a successful Medic Check.",

	"flavourText":	""
},

{
	"id":			209,

	"name":			"Med Foam",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.osiris,
	"cost":			300,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as having made a successful Medic Check.",

	"flavourText":	""
},

{
	"id":			210,

	"name":			"Nav Charts: Alliance Space",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.osiris,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to look at the top 5 Cards of the Alliance Space Nav Deck. Return the cards to the top of the Deck in any order.",

	"flavourText":	""
},

{
	"id":			211,

	"name":			"Nav Charts: Alliance Space",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.osiris,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to look at the top 5 Cards of the Alliance Space Nav Deck. Return the cards to the top of the Deck in any order.",

	"flavourText":	""
},

{
	"id":			212,

	"name":			"Yolanda's Pistol",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.osiris,
	"cost":			400,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"Discard to re-roll a [Fight Test]",

	"flavourText":	""
},

/** Persephone (Kalidasa) **/

{
	"id":			213,

	"name":			"Hydraulic Docking Clamps",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.persephone,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Crime Jobs also count as Salvage Ops.",

	"flavourText":	""
},

{
	"id":			214,

	"name":			"Mudder",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.persephone,
	"cost":			100,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mudder],

	"moral":		false,
	"wanted":		true,

	"title":		"Indentured",

	"description":	"Remove from Play at Harvest, Red Sun to take $500. This counts as Immoral.",

	"flavourText":	""
},

{
	"id":			215,

	"name":			"Mudder",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.persephone,
	"cost":			100,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mudder],

	"moral":		false,
	"wanted":		true,

	"title":		"Indentured",

	"description":	"Remove from Play at Harvest, Red Sun to take $500. This counts as Immoral.",

	"flavourText":	""
},

{
	"id":			216,

	"name":			"Nav Charts: Rim Space",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.persephone,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to look at the top 5 Cards of the Rim Space Nav Deck. Return the cards to the top of the Deck in any order.",

	"flavourText":	""
},

{
	"id":			217,

	"name":			"Nav Charts: Rim Space",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.persephone,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to look at the top 5 Cards of the Rim Space Nav Deck. Return the cards to the top of the Deck in any order.",

	"flavourText":	""
},

/** Regina (Kalidasa) **/

{
	"id":			218,

	"name":			"Border Space Nav Charts",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.regina,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to look at the top 5 cards of the Border Space Nav Deck. Return the cards to the top of the Deck in any order.",

	"flavourText":	""
},

{
	"id":			219,

	"name":			"Border Space Nav Charts",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.regina,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to look at the top 5 cards of the Border Space Nav Deck. Return the cards to the top of the Deck in any order.",

	"flavourText":	""
},

{
	"id":			220,

	"name":			"Emissions Recycler",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.regina,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],
	
	"title":		"",

	"description":	"+1 to Full Burn Range.\nIf you draw 2 'Big Black' Nav Cards in a row while Full Burning, you may take 1 Fuel. Limit once per Fly Action.",

	"flavourText":	""
},

{
	"id":			221,

	"name":			"Mudder",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.regina,
	"cost":			100,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mudder],

	"moral":		false,
	"wanted":		true,

	"title":		"Indentured",

	"description":	"Remove from Play at Harvest, Red Sun to take $500. This counts as Immoral.",

	"flavourText":	""
},

{
	"id":			222,

	"name":			"Mudder",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.regina,
	"cost":			100,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mudder],

	"moral":		false,
	"wanted":		true,

	"title":		"Indentured",

	"description":	"Remove from Play at Harvest, Red Sun to take $500. This counts as Immoral.",

	"flavourText":	""
},

/** Silverhold (Kalidasa) **/

{
	"id":			223,

	"name":			"Barkeep",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.silverhold,
	"cost":			200,

	"fight":		1,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.mudder],

	"moral":		false,
	"wanted":		true,

	"title":		"Good Times",

	"description":	"Giving your Crew Shore Leave at Supply Planets is free.",

	"flavourText":	""
},

{
	"id":			224,

	"name":			"Extra Ammo Clips",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.silverhold,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to re-roll a [Fight Test].",

	"flavourText":	""
},

{
	"id":			225,

	"name":			"Extra Ammo Clips",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.silverhold,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to re-roll a [Fight Test].",

	"flavourText":	""
},

{
	"id":			226,

	"name":			"Mudder",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.silverhold,
	"cost":			100,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mudder],

	"moral":		false,
	"wanted":		true,

	"title":		"Indentured",

	"description":	"Remove from Play at Harvest, Red Sun to take $500. This counts as Immoral.",

	"flavourText":	""
},

{
	"id":			227,

	"name":			"Mudder",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.silverhold,
	"cost":			100,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mudder],

	"moral":		false,
	"wanted":		true,

	"title":		"Indentured",

	"description":	"Remove from Play at Harvest, Red Sun to take $500. This counts as Immoral.",

	"flavourText":	""
},

/** Space Bazaar (Kalidasa) **/

{
	"id":			228,

	"name":			"Emissions Recycler",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.spaceBazaar,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"+1 to Full Burn Range.\nIf you draw 2 'Big Black' Nav Cards in a row while Full Burning, you may take 1 Fuel. Limit once per Fly Action.",

	"flavourText":	""
},

{
	"id":			229,

	"name":			"Nav Charts: Alliance Space",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.spaceBazaar,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to look at the top 5 cards of the Alliance Space Nav Deck. Return the cards to the top of the Deck in any order.",

	"flavourText":	""
},

{
	"id":			230,

	"name":			"Nav Charts: Border Space",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.spaceBazaar,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to look at the top 5 cards of the Border Space Nav Deck. Return the cards to the top of the Deck in any order.",

	"flavourText":	""
},

{
	"id":			231,

	"name":			"Nav Charts: Rim Space",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.spaceBazaar,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to look at the top 5 cards of the Rim Space Nav Deck. Return the cards to the top of the Deck in any order.",

	"flavourText":	""
},

{
	"id":			232,

	"name":			"Wash's Hawaiian Shirt",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.spaceBazaar,
	"cost":			300,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to reshuffle any 1 Nav Deck.",

	"flavourText":	""
},

/** Beaumonde (Kalidasa) **/

{
	"id":			233,

	"name":			"Barkeep",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			200,

	"fight":		1,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.grifter],

	"moral":		false,
	"wanted":		true,

	"title":		"Good Times",

	"description":	"Giving your Crew Shore Leave at Supply Planets is free.",

	"flavourText":	""
},

{
	"id":			234,

	"name":			"Billiards Betting",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			500,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"[GAMBLING]\nWhen you Buy this card, roll two dice. Take $100 times the total of the dice and discard this card.",

	"flavourText":	""
},

{
	"id":			235,

	"name":			"Board Game Collection",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"You may use a Buy Action to give your Crew Shore Leave in any Sector.",

	"flavourText":	""
},

{
	"id":			236,

	"name":			"Busker",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.grifter, PROFESSIONS.mudder],

	"moral":		false,
	"wanted":		true,

	"title":		"Work the Crowd",

	"description":	"When you Make-Work, take an extra $100.",

	"flavourText":	""
},

{
	"id":			237,

	"name":			"Emissions Recycler",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			800,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"+1 to Full Burn Range.\nIf you draw 2 \"Big Black\" Nav Cards in a row while Full Burning, you may take 1 Fuel. Limit once per Fly Action.",

	"flavourText":	""
},

{
	"id":			238,

	"name":			"Extra Ammo Clips",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to re-roll a [Fight Test].",

	"flavourText":	""
},

{
	"id":			239,

	"name":			"Fan Dancer",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			300,

	"fight":		0,
	"tech":			0,
	"negotiate":	2,

	"keywords":		[],

	"professions":	[PROFESSIONS.grifter],

	"moral":		false,
	"wanted":		false,
	
	"title":		"Mesmerize",

	"description":	"Discard to ignore a Warrant Issued.",

	"flavourText":	""
},

{
	"id":			240,

	"name":			"Fess",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			300,

	"fight":		0,
	"tech":			2,
	"negotiate":	0,

	"keywords":		[KEYWORDS.hackingRig],

	"professions":	[],

	"moral":		false,
	"wanted":		false,

	"title":		"Phone Home",

	"description":	"From any location, you may use a Deal Action to Deal with Higgins. Accept or discard the Jobs normally.",

	"flavourText":	""
},

{
	"id":			241,

	"name":			"Foreman",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			200,

	"fight":		1,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.mechanic, PROFESSIONS.mudder],

	"moral":		false,
	"wanted":		false,

	"title":		"Mudder Manager",

	"description":	"+2[Fight] when you have at least 3 Mudders in your crew.",

	"flavourText":	""
},

{
	"id":			242,

	"name":			"Grimey",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			0,

	"fight":		0,
	"tech":			0,
	"negotiate":	1,

	"keywords":		[],

	"professions":	[PROFESSIONS.mudder],

	"moral":		false,
	"wanted":		false,
	
	"title":		"Errand Boy",

	"description":	"When you discard a Gear Card, roll a die. If you roll a 6, keep the Gear Card. Otherwise, discard it normally.",

	"flavourText":	""
},

{
	"id":			243,

	"name":			"Holder",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			200,

	"fight":		1,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[PROFESSIONS.pilot],

	"moral":		false,
	"wanted":		true,
	
	"title":		"Shanghai",

	"description":	"When you Make-Work, you may also take a Fugitive Token.",

	"flavourText":	"\"Stronger locks, thicker doors, keep everybody where they're s'posed to be.\" --Wright"
},

{
	"id":			244,

	"name":			"Hydraulic Docking Clamps",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Crime Jobs also count as Salvage Ops.",

	"flavourText":	""
},

{
	"id":			245,

	"name":			"Inara's Bow",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			500,

	"fight":		2,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"When carried by a Companion, re-roll 1s in all [Fight Tests].",

	"flavourText":	""
},

{
	"id":			246,

	"name":			"Inara's Guild Papers",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			1000,

	"fight":		0,
	"tech":			0,
	"negotiate":	2,

	"keywords":		[],

	"professions":	[PROFESSIONS.companion],

	"title":		"",

	"description":	"Counts as [Companion].",

	"flavourText":	""
},

{
	"id":			247,

	"name":			"Jayne's Holdout Pistol",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			500,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"May be used in [Kosherized] fights. Does not count towards Gear Limit.",

	"flavourText":	""
},

{
	"id":			248,

	"name":			"Labor Contract: Persephone",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			500,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"From any location, you may use a Buy Action to Hire 1 Crew from the Persephone Discard Pile for free.",

	"flavourText":	""
},

{
	"id":			249,

	"name":			"Labor Contract: Regina",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			500,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"From any location, you may use a Buy Action to Hire 1 Crew from the Regina Discard Pile for free.",

	"flavourText":	""
},

{
	"id":			250,

	"name":			"Labor Contract: Silverhold",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			500,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"From any location, you may use a Buy Action to Hire 1 Crew from the Silverhold Discard Pile for free.",

	"flavourText":	""
},

{
	"id":			251,

	"name":			"Labor Contract: Space Bazaar",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			500,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"From any location, you may use a Buy Action to Hire 1 Crew from the Space Bazaar Discard Pile for free.",

	"flavourText":	""
},

{
	"id":			252,

	"name":			"Mal's Sniper Rifle",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			800,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm, KEYWORDS.sniperRifle],

	"professions":	[],

	"title":		"",

	"description":	"Before each [Fight Test], remove Disgruntled from the Owner.",

	"flavourText":	""
},

{
	"id":			253,

	"name":			"Med Foam",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			300,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to count as having made a successful Medic Check.",

	"flavourText":	""
},

{
	"id":			254,

	"name":			"Roberta",

	"type":			TYPES.crew,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			300,

	"fight":		1,
	"tech":			0,
	"negotiate":	2,

	"keywords":		[KEYWORDS.fakeID],

	"professions":	[PROFESSIONS.companion],

	"moral":		false,
	"wanted":		false,

	"title":		"Make Nice",

	"description":	"You may discard Roberta instead of losing Solid Rep with a Contact.",

	"flavourText":	""
},

{
	"id":			255,

	"name":			"Wash's Nav Charts",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			300,

	"fight":		0,
	"tech":			1,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard to look at the top 5 cards of ANY Nav Deck. Return the cards to the top of the Deck in any order.",

	"flavourText":	""
},

{
	"id":			256,

	"name":			"Zoe's Flak Jacket",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			200,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"If the Crew carrying this is Killed, discard this card instead.",

	"flavourText":	""
},

{
	"id":			257,

	"name":			"Zoe's Mare's Leg Rifle",

	"type":			TYPES.gear,
	"set":			SETS.kalidasa,
	"shop":			SHOPS.beaumonde,
	"cost":			800,

	"fight":		1,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[KEYWORDS.firearm],

	"professions":	[],

	"title":		"",

	"description":	"When making a [Fight Test], roll two dice and use the highest.",

	"flavourText":	""
},

/*** ESMERELDA CARDS ***/

/** Persephone (Esmerelda) **/

{
	"id":			258,

	"name":			"Caravan Pods",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.esmerelda,
	"shop":			SHOPS.persephone,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"2 Additional Cargo Hold areas. May only hold Passengers/Fugitives.\n+1 to Ship's Max Crew.",

	"flavourText":	""
},

{
	"id":			259,

	"name":			"Caravan Pods",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.esmerelda,
	"shop":			SHOPS.persephone,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"2 Additional Cargo Hold areas. May only hold Passengers/Fugitives.\n+1 to Ship's Max Crew.",

	"flavourText":	""
},

{
	"id":			260,

	"name":			"Full Mess Deck",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.esmerelda,
	"shop":			SHOPS.persephone,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"During your Fly Action you may discard a Cargo or Contraband to remove Disgruntled from all your Crew.",

	"flavourText":	""
},

/*** JETWASH CARDS ***/

/** Space Bazaar (Jetwash) **/

{
	"id":			261,

	"name":			"Decoy Nav Sat Cluster",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.jetwash,
	"shop":			SHOPS.spaceBazaar,
	"cost":			400,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard at the start of a Move Action to treat all Nav Cards that would normally move a Reaver or Alliance Ship as a \"Big Black\" card instead.",

	"flavourText":	""
},

{
	"id":			262,

	"name":			"Xunsu Emergency Ram Jets",

	"type":			TYPES.shipUpgrade,
	"set":			SETS.jetwash,
	"shop":			SHOPS.spaceBazaar,
	"cost":			600,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"title":		"",

	"description":	"Discard and use an Action to initiate a Full Burn.\nMay be used in addition to a standard Move Action.",

	"flavourText":	""
}
];



/*

{
	"id":			,

	"name":			"",

	"type":			TYPES.,
	"set":			SETS.,
	"shop":			SHOPS.,
	"cost":			,

	"fight":		0,
	"tech":			0,
	"negotiate":	0,

	"keywords":		[],

	"professions":	[],

	"moral":		undefined,
	"wanted":		undefined,
	"range":		undefined,

	"title":		"",

	"description":	"",

	"flavourText":	""
},
*/

