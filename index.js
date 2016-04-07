
var fs = require('fs');
var path = require('path');
var deepExtend = require('deep-extend');
var reactGettextParser = require('react-gettext-parser');

module.exports = function(babel) {
  console.log(babel);
  var allMessages = [];

  var traverser = reactGettextParser.getTraverser(function(messages, state) {
    console.log('got messages', messages);
    allMessages = allMessages.concat(messages);

    reactGettextParser.outputPot(
      state.opts.target,
      reactGettextParser.toPot(allMessages)
    );
  });

  return {
    visitor: traverser
  };
};
