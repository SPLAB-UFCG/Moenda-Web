const fs = require('fs');
const os = require('os');


module.exports = {
  /**
   * Tests whether the given path corresponds to a file.
   * 
   * @param {*} path Path to the file.
   */
  testIfIsFile: function (path) {
    const fileTest = fs.statSync(path);
    const result = fileTest.isFile();

    return result;
  },

  /**
   * Constructs a string according to the data contained in an object.
   * 
   * @param {*} method Object with 'line', 'column', 'msg' and 'name'.
   */
  toStringGenerate: function (method) {
    const string =
      method.line +
      ':' +
      method.column +
      '     ' +
      method.status +
      '     ' +
      method.msg +
      '     ' +
      method.name;

    return string;
  },

  /**
   * Ignores files of a certain extension.
   * 
   * @param {*} path File.
   * @param {*} extensionsArray Extensions that should be ignored.
   */
  ignoresExtensions: function (path, extensionsArray) {
    let result = false;

    if (extensionsArray !== undefined) {
      const list = extensionsArray.split(',');
      for (let i = 0; i < list.length; i++) {
        if (String(path.split('.')[1]) === list[i]) {
          result = true;
          break;
        }
      }
    }

    return result;
  },

  /**
   * Constructs an Array while ignoring certain extensions.
   * 
   * @param {*} path File directory.
   * @param {*} extensionsArray Extensions that should be ignored.
   */
  directoryFiles: function (path, extensionsArray) {
    let result = [];
    const arrayFiles = fs.readdirSync(path);

    for (let i = 0; i < arrayFiles.length; i++) {
      if (this.testIfIsFile(`${path}/${arrayFiles[i]}`)) {
        if (
          this.ignoresExtensions(arrayFiles[i], extensionsArray) ===
          false
        ) {
          result [result.length] = arrayFiles[i];
        }
      }
    }

    return result;
  },

  /**
   * Build the output.
   * @param {*} program CLI 
   * @param {*} genericalRules Set of generic rules that run on files of all extensions.
   * @param {*} file File to be analyzed.
   */
  exitAid: function (program, genericRules, file) {
    // Generic rules array joined to user-informed rules.
    const functions = Object.values(genericRules).concat(Object.values(program.rules));
    const config = program.config;

    let string = [];
    let errors = 0;
    let infos = 0;
    let returns = [];

    // Counting errors and infos and creating array of objects with status equal to 'info' and 'error'.
    if (this.testIfIsFile(program.path)) {
      string.push(program.path + os.EOL);
      errors = this.selectsObjectsWithStatusErrorAndInfo(functions, program.path, config).errors;
      infos = this.selectsObjectsWithStatusErrorAndInfo(functions, program.path, config).infos;
      returns = this.selectsObjectsWithStatusErrorAndInfo(functions, program.path, config).data;
      
    } else {
      string.push(`${program.path}/${file}` + os.EOL);
      errors = this.selectsObjectsWithStatusErrorAndInfo(functions, `${program.path}/${file}`, config).errors;
      infos = this.selectsObjectsWithStatusErrorAndInfo(functions, `${program.path}/${file}`, config).infos;
      returns = this.selectsObjectsWithStatusErrorAndInfo(functions, `${program.path}/${file}`, config).data;
    }

    //Sort the objects returned by the functions according to the line number.
    returns.sort(function (a, b) {
      if (a === '-' || b === '-') {
        return 0;
      }
      if (a.line > b.line) {
        return 1;
      }
      if (a.line < b.line) {
        return -1;
      }
      return 0;
    });

    for (let j = 0; j < returns.length; j++) {
      string.push(returns[j].toString + os.EOL);
    }

    string.push(os.EOL + '* ' + errors + ` problem(s) (${errors} errors)` + os.EOL);
    string.push('* ' + infos + ' info(s)' + os.EOL);
    
    return string;
  },

  /**
   * Constructs an Array with objects with status equal to 'error' and 'info'.
   * 
   * @param {*} functions Array with functions that will be executed in the file.
   * @param {*} parameter Parameter that will be passed to the function.
   * @param {*} config Rule configuration.
   */
  selectsObjectsWithStatusErrorAndInfo: function(functions, parameter, config){
    let result = {data: [], errors: 0, infos: 0};

    for (let j = 0; j < functions.length; j++) {
      if (functions[j](parameter, config).status === 'error') {
        result.data.push(functions[j](parameter, config));
        result.errors++;
      }
      if (functions[j](parameter, config).status === 'info') {
        result.data.push(functions[j](parameter, config));
        result.infos++;
      }
    }
    return result;
  }

};
