//Configure optional settings for the rules.

const config = {
  ruleLessThanXLines: {limit: 600},
  ruleLineAboveXCharacters: {limit: 30},
  ruleFirstSectionStartsWithHx: {limit: 3},
  ruleConsecutiveBlankLines: {limit: 1},
};

module.exports = config;
