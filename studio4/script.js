// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

 // tool tip for trip
 var trip = document.getElementById('trip');
 var tripTip = document.getElementById('tripTip');
 var tipTimer;

 trip.addEventListener('mouseover', function() {
     console.log('mouseover on trip');
     tipTimer = setTimeout(showTripTip, 300);
     trip.src = "images/trip_trans.png";
 });

 trip.addEventListener('mouseout', function() {
     console.log('mouseout on trip');
     clearTimeout(tipTimer);
     tripTip.style.opacity = 0;
     trip.src= "images/trip.png";
 });

 function showTripTip() {
     console.log('showing msg');
     tripTip.style.opacity = .95;
     tripTip.style.transition = 'all .5s';
 }

 // tool tip for year
 var year = document.getElementById('year');
 var yearTip = document.getElementById('yearTip');
 var tipTimer;

 year.addEventListener('mouseover', function() {
     console.log('mouseover on year');
     tipTimer = setTimeout(showYearTip, 300);
     year.src = "images/year_trans.png";
 });

 year.addEventListener('mouseout', function() {
     console.log('mouseout on year');
     clearTimeout(tipTimer);
     yearTip.style.opacity = 0;
     year.src= "images/year.png";
 });

 function showYearTip() {
     console.log('showing msg');
     yearTip.style.opacity = .95;
     yearTip.style.transition = 'all .5s';
 }

 // tool tip for ia
 var ia = document.getElementById('ia');
 var iaTip = document.getElementById('iaTip');
 var tipTimer;

 ia.addEventListener('mouseover', function() {
     console.log('mouseover on ia');
     tipTimer = setTimeout(showIaTip, 300);
     ia.src = "images/ia_trans.png";
 });

 ia.addEventListener('mouseout', function() {
     console.log('mouseout on ia');
     clearTimeout(tipTimer);
     iaTip.style.opacity = 0;
     ia.src= "images/ia.png";
 });

 function showIaTip() {
     console.log('showing msg');
     iaTip.style.opacity = .95;
     iaTip.style.transition = 'all .5s';
 }

 // tool tip for revived
 var revived = document.getElementById('revived');
 var revivedTip = document.getElementById('revivedTip');
 var tipTimer;

 revived.addEventListener('mouseover', function() {
     console.log('mouseover on revived');
     tipTimer = setTimeout(showRevivedTip, 300);
     revived.src = "images/revived_trans.png";
 });

 revived.addEventListener('mouseout', function() {
     console.log('mouseout on revived');
     clearTimeout(tipTimer);
     revivedTip.style.opacity = 0;
     revived.src= "images/revived.png";
 });

 function showRevivedTip() {
     console.log('showing msg');
     revivedTip.style.opacity = .95;
     revivedTip.style.transition = 'all .5s';
 }

 });
