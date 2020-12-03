const util = require('./util');
const genericRules = require("./genericRules/genericRules");
const mdContext = require("./context/MDContext/MDContext");
const os = require('os');

module.exports = {
  /**
   * Analyzes whether the informed path corresponds to a file or a directory, then calls the function that constructs the output.
   */
  moenda: function(rules, path, config, exclude, context){
    const program = {rules: rules, path: path, config: config, exclude: exclude, context: context};
    let result = "";

    if (util.testIfIsFile(path) === true) {
      result += util.exitAid(program, genericRules);
  
      if (program.context === "true"){
        result += mdContext.contextGenerator(program.path);
      }
      
    } else {
      let parameter = '';
  
      if (program.exclude) {
        parameter += program.exclude;
      }
      /**
       * Creates an array with the files in the directory informed by program.path, ignoring the extensions informed in program.exclude.
       */
      const array = util.directoryFiles(program.path, parameter);
  
      for (let i = 0; i < array.length; i++) {
        result += util.exitAid(program, genericRules, array[i]) + os.EOL;
        if (program.context === "true"){
          result += mdContext.contextGenerator(array[i]);
        }
      }
    }

    return result;
  }
}
