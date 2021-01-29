var initTools = (function () {
  function setRootFontSize() {
    document.addEventListener('DOMContentLoaded', function () {
      var html = document.documentElement;
      var windowWidth = html.clientWidth;
      html.style.fontSize = windowWidth / 7.5 + 'px';
    }, false);
    $(window).resize(function () {
      var html = document.documentElement;
      var windowWidth = html.clientWidth;
      html.style.fontSize = windowWidth / 7.5 + 'px';
    });
  }

  function debounce(fn, time, triggleNow) {
    var t = null;

    return function () {
      var _self = this
      args = arguments;

      if (t) {
        clearTimeout(t);
      }

      if (triggleNow) {
        var exce = !t;

        t = setTimeout(function () {
          t = null;
        }, time)

        if (exce) {
          fn.apply(_self, args);
        }
      } else {
        t = setTimeout(function () {
          fn.apply(_self, args);
          t = null;
        }, time)
      }
    }
  }

  return {
    setRootFontSize: setRootFontSize,
    debounce: debounce,
  }
})()