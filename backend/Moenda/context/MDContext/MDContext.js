const os = require('os');
const fs = require("fs");

module.exports = {

  contextGenerator: function(path){
    if (path.endsWith('.md')) {
      const lines = fs.readFileSync(path, 'utf-8').split(os.EOL);
      let result = {data: [], sections: 0, links: 0, lists: 0, images: 0, inLineCode: 0, texts: 0};
      
      for (let i = 0; i < lines.length; i++){
        if (this.sectionsSearch(lines[i], i) !== undefined){
          result.data.push(this.sectionsSearch(lines[i], i));
          result.sections += this.sectionsSearch(lines[i], i).quantity;
        }

        if (this.textSearch(lines[i], i) !== undefined){
          result.data.push(this.textSearch(lines[i], i));
          result.texts += this.textSearch(lines[i], i).quantity;
        }

        if (this.listsSearch(lines[i], i) !== undefined){
          result.data.push(this.listsSearch(lines[i], i));
          result.lists += this.listsSearch(lines[i], i).quantity;
        }

        if (this.orderedListsSearch(lines[i], i) !== undefined){
          result.data.push(this.orderedListsSearch(lines[i], i));
          result.lists += this.orderedListsSearch(lines[i], i).quantity;
        }

        if (this.linkSearch(lines[i], i) !== undefined){
          result.data.push(this.linkSearch(lines[i], i));
          result.links += this.linkSearch(lines[i], i).quantity;
        }
        
        if (this.directLinkSearch(lines[i], i) !== undefined){
          result.data.push(this.directLinkSearch(lines[i], i));
          result.links += this.directLinkSearch(lines[i], i).quantity;
        }

        if (this.inLineCodeSearch(lines[i], i) !== undefined){
          result.data.push(this.inLineCodeSearch(lines[i], i));
          result.inLineCode += this.inLineCodeSearch(lines[i], i).quantity;
        }
      }
      
      console.log(result);
    }
  },

  sectionsSearch: function(line, lineNumber){
    if (line.startsWith('#')) {
      let result = {type: "section", value: 0, line: lineNumber + 1, quantity: 1};
      let aux = '';

      for (let j = 0; j < line.length; j++) {
        if (line[j] === '#') {
          aux += '#';
        }
      }

      result.value = aux.length;

      return result;
    }
  },

  listsSearch: function(line, lineNumber){
    if (line.startsWith('* ')) {
      let result = {type: "list", value: "*", line: lineNumber + 1, quantity: 1};

      return result;
    }
  },

  orderedListsSearch: function(line, lineNumber){
    for (let i = 0; i < 7500; i++){
      if (line.startsWith(i + '. ')) {
        let result = {type: "ordered List", value: i, line: lineNumber + 1, quantity: 1};
  
        return result;
      }
    }
  },

  textSearch: function(line, lineNumber){
    let result = {type: "text", value: "", line: lineNumber + 1, quantity: 1};

    if (!line.startsWith('```') && !line.startsWith('* ') && !line.startsWith('#') && line.trim() != ""){
      for (let i = 0; i < 7500; i++){
        if (!line.startsWith(i + '. ')) {
          result.value = line;

          return result;
        }
      }
    } 
  },

  linkSearch: function(line, lineNumber){
    let result = {type: "link", value: "", line: lineNumber + 1, quantity: 1};
    let auxMD = "";
    let positions = [];
    let link = ""

    for (let i = 0; i < line.length; i++){
      if (line[i] === "[") {
        auxMD += "[";
      }
      if (i !== (line.length -7)){
        if (line[i] === "]" && line[i+1] === "(" && line[i+2] === "h" && line[i+3] === "t" && line[i+4] === "t" && line[i+5] === "p" && line[i+6] === "s" && line[i+7] === ":") {
          auxMD += "](https:";
          positions.push(i+2);
        }
      }
      if (line[i] === ")" && positions.length !== 0){
        positions.push(i);
      }
    }

    if (auxMD.indexOf("[](https:") !== -1){
      for (let i = positions[0]; i < positions[1]; i++){
        link += line[i];
      }
      result.value = link;

      return result;
    }
  },

  directLinkSearch: function(line, lineNumber){
    let result = {type: "link", value: "", line: lineNumber + 1, quantity: 1};
    let auxMD = "";
    let positions = [];
    let link = ""

    for (let i = 0; i < line.length; i++){
      if (i !== (line.length -7)){
        if (line[i] === "<" && line[i+1] === "h" && line[i+2] === "t" && line[i+3] === "t" && line[i+4] === "p" && line[i+5] === "s" && line[i+6] === ":" && line[i+7] === "/") {
          auxMD += "<https:";
          positions.push(i+1);
        }
      }
      if (line[i] === ">" && positions.length !== 0){
        positions.push(i);
      }
    }

    if (auxMD.indexOf("<https:") !== -1){
      for (let i = positions[0]; i < positions[1]; i++){
        link += line[i];
      }
      result.value = link;

      return result;
    }
  },

  inLineCodeSearch: function(line, lineNumber){
    let result = {type: "inLineCode", value: "", line: lineNumber + 1, quantity: 0};
    let positions = [];
    let aux = "";
    let cont = 0; 
    
    for (let i = 0; i < line.length; i++){
      if (line[i] === "`" && line[i+1] !== "`"){
        positions.push(i);
        cont++;
      }
    }

    while (cont >= 2){
      for (let i = positions[0]; i < positions[1]; i++){
        aux += line[i];
      }
      result.value += aux + " || ";
      aux = "";
      result.quantity++;
      positions = positions.slice(0,2);

      cont -= 2;
    }

    if (result.value.length !== 0){
      return result;
    }
  },

}
