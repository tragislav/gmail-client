
// Russian
(function() {
  function numpf(n, f, s, t) {
    // f - 1, 21, 31, ...
    // s - 2-4, 22-24, 32-34 ...
    // t - 5-20, 25-30, ...
    var n10 = n % 10;
    if ( (n10 == 1) && ( (n == 1) || (n > 20) ) ) {
      return f;
    } else if ( (n10 > 1) && (n10 < 5) && ( (n > 20) || (n < 10) ) ) {
      return s;
    } else {
      return t;
    }
  }

  jQuery.timeago.settings.strings = {
    prefixAgo: null,
    prefixFromNow: null,
    suffixAgo: null,
    suffixFromNow: null,
    seconds: "%d s",
    minute: "1m",
    minutes: function(value) { return numpf(value, "%dm"); },
    hour: "1h",
    hours: function(value) { return numpf(value, "%dh"); },
    day: "1d",
    days: function(value) { return numpf(value, "%d d"); },
    month: "month",
    months: function(value) { return numpf(value, "%d month"); },
    year: "1y",
    years: function(value) { return numpf(value, "%d y"); }
  };
})();