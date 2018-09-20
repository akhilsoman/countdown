var now;
var end = moment(1597449600000);
var interval = 1000;

setInterval(function () {
    now = moment(new Date());
    duration = moment.duration(end.diff(now));
    $('.countdown-days').text(duration.years() + ' Year - ' + duration.months() + ' Months - ' + duration.days()+ ' Days');
    $('.countdown-time').text(duration.hours() + ":" + duration.minutes() + ":" + duration.seconds());
}, interval);