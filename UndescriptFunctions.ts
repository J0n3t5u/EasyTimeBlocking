const weekdays = [
    "sunday", 
    "monday",
    "tuesday",  //Continuity might need to be checked to seperate tuesday from thursday if it goes by single character formatting. (SMTWTFS)
    "wednesday",
    "thursday",
    "friday",
    "saturday"
]

//debug
let bogusSchedule = `Sun 1/26 12:00PM to 9:45PM (2 Shifts) 

#299408 - 894 NowhereVille Av Unit 3421, Somewhere, NY

Mon 1/27 2:30PM to 10:15PM

#299408 - 894 NowhereVille Av Unit 3421, Somewhere, NY

Tue 1/28 3:00PM to 10:15PM

#299408 - 894 NowhereVille Av Unit 3421, Somewhere, NY

Thu 2/6 12:00PM to 10:00PM (2 Shifts)

#299408 - 894 NowhereVille Av Unit 3421, Somewhere, NY

Fri 2/7 5:00PM to 10:30PM

#299408 - 894 NowhereVille Av Unit 3421, Somewhere, NY

Sat 2/8 3:00PM to 10:30PM

#299408 - 894 NowhereVille Av Unit 3421, Somewhere, NY

Sun 2/9 12:00PM to 9:45PM (2 Shifts)

#299408 - 894 NowhereVille Av Unit 3421, Somewhere, NY

Mon 2/10 2:30PM to 10:00PM

#299408 - 894 NowhereVille Av Unit 3421, Somewhere, NY`


let processStringToData = function (input:String,seperator:String) {
    for (const i in input.split('')) { //Kind of gross.
        console.log(i);
        //Search for integers
        //Add it onto an array
        //Make a new entry to the array once it reaches the seperator.
        //Somehow use this information it gathers to determine when things are scheduled.
    }   
}

processStringToData(bogusSchedule, " ");
