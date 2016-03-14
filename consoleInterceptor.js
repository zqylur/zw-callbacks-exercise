(function () {
  var log = console.log;
  console.log = function () {
    logToDOM(arguments[0]);
    log.apply(this, Array.prototype.slice.call(arguments));
  };

  logToDOM = function (log) {
      var $consoleLog = document.getElementById('console-log');
      var $li = document.createElement("li");
      $li.appendChild(document.createTextNode(log));
      $consoleLog.appendChild($li);
  }
}());
