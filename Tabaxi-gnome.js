var iFileName = "Tabaxi-gnome.js";
RequiredSheetVersion(12.999);

SourceList.D={
	name : "Tabaxi-gnome",
	abbreviation : "TG:BJ",
	group : "Homebrew",
	date : "2018/12/09"
};

RaceList["chultan half-troll"] = {
	regExpSearch : /^((?=.*tabaxi)(?=.*gnome)).*$/i,
	name : "Tabaxi-gnome",
	source : ["CHF:BJ", 1],
	plural : "Tabaxi-gnomes",
	sortname : "Tabaxi-gnome",
	size : 2,
	speed : { walk : { spd : 25, enc : 15 }
	},
	languageProfs : ["Common", "Gnomish", 1],
	vision : [["Darkvision", 60]],
	skills : ["Perception", "Stealth"],
	age : " mature at the same rate humans do, and are considered adults at age 20. They can live 175 to almost 250 years.",
	height : " range from 4 to 5 feet tall (3'8\" + 2d8\")",
	weight : " weigh between 75 and 120 lb (65 + 2d8 \xD7 2 lb)",
	heightMetric : " are between 1 and 1,5 metres tall (120 + 5d8 cm)",
	weightMetric : " weigh between 35 and 55 kg (30 + 5d8 \xD7 4 / 10 kg)",
	improvements : "Chultan Half-Troll: +2 Dexterity, +1 Wisdom;",
	scores : [0, 2, 0, 1, 0, 0],
	trait : "Tabaxi-gnome (+2 Dexterity, +1 Intelligence)" + (typePF ? "\n" : " ") + "Cat's Talent: You have proficiency in the Perception and Stealth skills.\nCat's Claws: Because of your claws, you have a climbing speed of 20 feet. In addition, your claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to 1d4 + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.\nFeline Agility: Your reflexes and agility allow you to move with a burst of speed. When you move on your turn in combat, you can double your speed until the end of the turn. Once you use this trait, you can't use it again until you move 0 feet on one of your turns.\nGnome Cunning. You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
	eval : "tDoc.getField('Carrying Capacity Multiplier').value *= 1/2;",
	removeeval : "tDoc.getField('Carrying Capacity Multiplier').value /= 1/2;",
	features : {
		"feline agility" : {
			name : "Feline Agility",
			usages : 1,
			minlevel : 1,
		},
	}
};
