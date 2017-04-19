"use strict";

//Fixed timeline script begin
$(document).ready(function () {

    var $timeline = $(".calendar__header");
    var $header = "80";

    $(window).scroll(function () {
        if ($(this).scrollTop() > $header) {
            $('body').addClass('timeline-fixed');
            if ($(window).width() > 768) {
                $timeline.css({
                    width: "calc(100% - 30px)"
                });
            }
            else {
                $timeline.css({
                    width: "960px"
                });
            }
            $timeline.css({
                top: $(document).scrollTop()
            });
        } else if ($(this).scrollTop() <= $header) {
            $('body').removeClass('timeline-fixed');
        }
    });
});
//Fixed timeline script end


// Timeline scripts begin
function timestamp(str){
    return new Date(str).getTime();
}

var  months = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sept", "Oct",
        "Nov", "Dec"
    ];

function nth (d) {
  if(d>3 && d<21) return 'th';
  switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
}

function formatDate ( date ) {
    return months[date.getMonth()] + date.getDate()+ ", " + date.getFullYear();
}

var previousMonth = new Date();
previousMonth.setMonth(previousMonth.getMonth() - 1);

var dateSlider = document.getElementById('date-slider');

function toFormat ( v ) {
 return formatDate(new Date(v));
}

noUiSlider.create(dateSlider, {
    behaviour: 'tap',
    connect: true,
    format: { to: toFormat, from: Number },
    range: {
        min: timestamp('2016-01-01'),
        max: timestamp('2018-12-31')
    },
    step: 1 * 24 * 60 * 60 * 1000,
    start: [timestamp('2016-01-01'), timestamp('2017-11-01')]
});
        
var dateValues = [
    document.getElementById('date-start'), document.getElementById('date-end')
];

dateSlider.noUiSlider.on('update', function( values, handle ) {
        dateValues[handle].innerHTML = values[handle];
});
//Timeline scrips end


// Easy accordeon script for design sidebar begin
var accordion = function accordion(dir) {
    document.querySelector(dir).addEventListener('click', function (e) {
        var active = e.target.closest('.accordion__trigger');
        active.classList.toggle('is-hidden');
    });
};
accordion('.accordion');
// Accordeon script end

// Design sidebar appearence by click on menu-item 
document.querySelector('.header-nav__states-link_design').addEventListener('click', function () {
    document.querySelector('body').classList.toggle('design-sidebar');
});

// Legend transition on click
document.querySelector('.legend').addEventListener('click', function () {
    document.querySelector('.legend').classList.toggle('legend__active');
});