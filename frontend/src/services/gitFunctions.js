const git = require("nodegit");
const moenda = require("../../../backend/Moenda/index");
const rules = require("../../../backend/Moenda/MD/MDRules");
const config = require("../../../backend/Moenda/config");
const context = require("../../../backend/Moenda/context/MDContext/MDContext");
const fs = require("fs");
const rimraf = require("rimraf");

module.exports = {
  gitClone: async function(link){
    if(fs.existsSync("./frontend/src/userRepository/master")){
      rimraf.sync("./frontend/src/userRepository/master");
    }
    
    return git.Clone(link, "./frontend/src/userRepository/master");
  },

  moendaExecute: function(){
    const exclude = "";
    return moenda.moenda(rules, "./frontend/src/userRepository/master", config, exclude, context);
  }
}
