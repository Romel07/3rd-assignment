// Kilometer to Meter Conversion
function kilometerToMeter(num) {
    var meter = num * 1000;
    return meter;
}
// var result = kilometerToMeter(5.3);
// console.log(result);
// console.log(kilometerToMeter(3.33));

// Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    var price = watch * 50 + phone * 100 + laptop * 500;
    return price;
}
// console.log(budgetCalculator(4,3,2));

// Hotel Cost Calculation
function hotelCost(days) {
    var totalCost = 0;
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
    return totalCost;
}
// var result = hotelCost(2)
// console.log(result);


//Mega Friend Sorting

// friend = ["Kamal", "Jamall", "Rahimm", "Kashemmm", "etc", "Jamil"];
function megaFriend(name) {
    var myMegaFriend = name[0];
    for (var i = 0; i < name.length; i++) {
        if (name[i].length > myMegaFriend.length) {
            myMegaFriend = name[i];
        }
    }
    return myMegaFriend;
}
// console.log(megaFriend(friend));








