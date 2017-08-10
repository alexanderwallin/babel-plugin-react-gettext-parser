var fs = require('fs');
var path = require('path');
var deepExtend = require('deep-extend');
var reactGettextParser = require('react-gettext-parser');

module.exports = function(babel) {
  var allMessages = [];

  var traverser = reactGettextParser.getTraverser(function(messages, state) {
    allMessages = reactGettextParser.getUniqueBlocks(allMessages.concat(messages));

    reactGettextParser.outputPot(
      state.opts.target || state.opts.output,
      reactGettextParser.toPot(allMessages)
    );
  });

  return {
    visitor: traverser
  };
};
