// Kilometer to Meter Conversion
function kilometerToMeter(num) {
    if (typeof (num) == 'number') {
        if (num >= 0) {
            var meter = num * 1000;
            return meter;
        }
        else {
            return 'Please enter a positive Number.';
        }
    }
    else {
        return "It is a String. Please input a positive Number.";
    }
}


// Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    if (typeof (watch, phone, laptop) == 'number') {
        if (watch >= 0 && phone >= 0 && laptop >= 0) {
            var price = watch * 50 + phone * 100 + laptop * 500;
            return price;
        }
        else {
            return 'Please enter positive Numbers.';
        }
    }
    else {
        return "Input are Strings. Please input a positive Number.";
    }
}


// Hotel Cost Calculation
function hotelCost(days) {
    var totalCost = 0;
    if (typeof (days == 'number')) {
        if (days >= 0) {
            if (days <= 10) {
                totalCost = 100 * days;
            }
            else if (days <= 20) {
                var firstTenDays = 100 * 10;
                var tenToTwentyDays = (days - 10) * 80;
                totalCost = firstTenDays + tenToTwentyDays;
            }
            else {
                var firstTenDays = 100 * 10;
                var tenToTwentyDays = 10 * 80;
                var otherDays = (days - 20) * 50;
                totalCost = firstTenDays + tenToTwentyDays + otherDays;
            }
        }
        else {
            return 'Please enter positive Numbers.';
        }
    }
    else {
        return "Please enter positive Numbers.";
    }
    return totalCost;
}


//Mega Friend Sorting
function megaFriend(name) {
    if (name.length > 0) {
        var myMegaFriend = name[0];
        for (var i = 0; i < name.length; i++) {
            if (name[i].length > myMegaFriend.length) {
                myMegaFriend = name[i];
            }
        }
    }
    else {
        return "Enter a valid array.";
    }
    return myMegaFriend;
}









