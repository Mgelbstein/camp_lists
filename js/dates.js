"use strict";
/*
Author: Miriam Gelbstein
Date: 1/05/2023
Term Project
 */

runClock();
setInterval("runClock()",1000);
/* Function to create and run the countdown clock */
function runClock() {

    /* Store the current date and time */
    var currentDay = new Date();

    /* Display the current date and time */
    document.getElementById("dateNow").innerHTML = currentDay.toLocaleDateString();

    /* find last modified date */
    var date = document.lastModified;
    var lastModifiedDate = new Date(date);
    document.getElementById("result").innerHTML =  lastModifiedDate.toLocaleDateString();

    /* find diff btwn the dates */
    var date1 = currentDay;
    var date2 = lastModifiedDate;

    // time difference
    var timeDiff = Math.abs(date1.getTime() - date2.getTime());

    // days difference
    var diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    // difference
    document.getElementById("diffDays").innerHTML = diffDays;
}

