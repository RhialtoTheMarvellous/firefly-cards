var getSetsPredicate = function() {
    var setsCheckboxes = document.getElementsByName("sets");
    var sets = [];
    _.each(setsCheckboxes, function(obj) {
        if (obj.checked) sets.push(parseInt(obj.value));
    });
    return function(card) {
        return _.contains(sets, card["set"]);
    };
};

var getTypePredicate = function() {
    var dropdown = document.getElementById("type-dropdown");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    if (selectedValue === "none") {
        return _.constant(true);
    } else {
        var value = parseInt(selectedValue);
        return function(card) {
            return card["type"] === value;
        };
    }
};

var getKeywordPredicate = function() {
    var dropdown = document.getElementById("keyword-dropdown");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    if (selectedValue === "none") {
        return _.constant(true);
    } else {
        var value = parseInt(selectedValue);
        return function(card) {
            return _.contains(card["keywords"], value);
        };
    }
};

var getProfessionPredicate = function() {
    var dropdown = document.getElementById("profession-dropdown");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    if (selectedValue === "none") {
        return _.constant(true);
    } else {
        var value = parseInt(selectedValue);
        return function(card) {
            return _.contains(card["professions"], value);
        };
    }
};

var getMoralPredicate = function() {
    var dropdown = document.getElementById("moral-dropdown");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    if (selectedValue === "none") {
        return _.constant(true);
    } else {
        var value = selectedValue === "true" ? true : false;
        return function(card) {
            return card["moral"] === value;
        };
    }
};

var getWantedPredicate = function() {
    var dropdown = document.getElementById("wanted-dropdown");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    if (selectedValue === "none") {
        return _.constant(true);
    } else {
        var value = selectedValue === "true" ? true : false;
        return function(card) {
            return card["wanted"] === value;
        };
    }
};

var getCostPredicate = function() {
    var textbox = document.getElementById("cost-textbox");
    var stringValue = textbox.value.trim();
    var value = parseInt(stringValue);
    if (isNaN(value)) {
        return _.constant(true);
    } else {
        return function(card) {
            return card["cost"] <= value;
        }
    }
};

var getFightPredicate = function() {
    var textbox = document.getElementById("fight-textbox");
    var stringValue = textbox.value.trim();
    var value = parseInt(stringValue);
    if (isNaN(value)) {
        return _.constant(true);
    } else {
        return function(card) {
            return card["fight"] >= value;
        }
    }
};

var getTechPredicate = function() {
    var textbox = document.getElementById("tech-textbox");
    var stringValue = textbox.value.trim();
    var value = parseInt(stringValue);
    if (isNaN(value)) {
        return _.constant(true);
    } else {
        return function(card) {
            return card["tech"] >= value;
        }
    }
};

var getNegotiatePredicate = function() {
    var textbox = document.getElementById("negotiate-textbox");
    var stringValue = textbox.value.trim();
    var value = parseInt(stringValue);
    if (isNaN(value)) {
        return _.constant(true);
    } else {
        return function(card) {
            return card["negotiate"] >= value;
        }
    }
};

var getNamePredicate = function() {
    var textbox = document.getElementById("name-textbox");
    var str = textbox.value.trim().toLowerCase();
    if (str === "") {
        return _.constant(true);
    } else {
        return function(card) {
            return (card["name"].toLowerCase().indexOf(str) !== -1);
        }
    }
};

var getDescriptionPredicate = function() {
    var textbox = document.getElementById("description-textbox");
    var str = textbox.value.trim().toLowerCase();
    if (str === "") {
        return _.constant(true);
    } else {
        return function(card) {
            return (card["description"].toLowerCase().indexOf(str) !== -1);
        }
    }
};

var displayResults = function(matchingCards) {
    var i;
    for (i = 20; i <= 26; i++) {
        document.getElementById("results-" + i).textContent = 0;
    }

    var groups = _.groupBy(matchingCards, "shop");

    _.each(groups, function(value, key) {
        var resultsCell = document.getElementById("results-" + key);
        resultsCell.textContent = value.length;
    });
};

var submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    var setsPredicate = getSetsPredicate();
    var typePredicate = getTypePredicate();
    var keywordPredicate = getKeywordPredicate();
    var professionPredicate = getProfessionPredicate();
    var costPredicate = getCostPredicate();
    var fightPredicate = getFightPredicate();
    var techPredicate = getTechPredicate();
    var negotiatePredicate = getNegotiatePredicate();
    var moralPredicate = getMoralPredicate();
    var wantedPredicate = getWantedPredicate();
    var namePredicate = getNamePredicate();
    var descriptionPredicate = getDescriptionPredicate();

    var filteredCards = _.chain(cards)
        .filter(setsPredicate)
        .filter(typePredicate)
        .filter(keywordPredicate)
        .filter(professionPredicate)
        .filter(costPredicate)
        .filter(fightPredicate)
        .filter(fightPredicate)
        .filter(techPredicate)
        .filter(negotiatePredicate)
        .filter(moralPredicate)
        .filter(wantedPredicate)
        .filter(namePredicate)
        .filter(descriptionPredicate)
        .value();

    displayResults(filteredCards);
});
