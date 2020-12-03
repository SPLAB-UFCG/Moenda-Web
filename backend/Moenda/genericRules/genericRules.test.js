const genericRules = require('./genericRules');

//lineCounter tests

test('ruleLineCounter returns object', 
  () => {
    const object = genericRules.ruleLineCounter("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect("object").toBe(typeof object);
})

test('ruleLineCounter toString', 
  () => {
    const object = genericRules.ruleLineCounter("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.toString).toBe("-:-     info     The file has 94 line(s)     ruleLineCounter()");
})

test('ruleLineCounter msg', 
  () => {
    const object = genericRules.ruleLineCounter("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.msg).toBe("The file has 94 line(s)");
})

test('ruleLineCounter data', 
  () => {
    const object = genericRules.ruleLineCounter("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.data).toBe(94);
})

test('ruleLineCounter name', 
  () => {
    const object = genericRules.ruleLineCounter("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.name).toBe("ruleLineCounter()");
})



//lessThanXLines

test('ruleLessThanXLines returns object', 
  () => {
    const object = genericRules.ruleLineCounter("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect("object").toBe(typeof object);
})

test('ruleLessThanXLines toString', 
  () => {
    const object = genericRules.ruleLineCounter("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.toString).toBe("-:-     info     The file has 94 line(s)     ruleLineCounter()");
})

test('ruleLessThanXLines msg', 
  () => {
    const object = genericRules.ruleLineCounter("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.msg).toBe("The file has 94 line(s)");
})

test('ruleLessThanXLines data', 
  () => {
    const object = genericRules.ruleLineCounter("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.data).toBe(94);
})

test('ruleLessThanXLines name', 
  () => {
    const object = genericRules.ruleLineCounter("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.name).toBe("ruleLineCounter()");
})




//LineAboveXCharacters

test('ruleLineAboveXCharacters returns object', 
  () => {
    const object = genericRules.ruleLineAboveXCharacters("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect("object").toBe(typeof object);
})

test('ruleLineAboveXCharacters toString', 
  () => {
    const object = genericRules.ruleLineAboveXCharacters("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.toString).toBe("-:-     false          ");
})

test('ruleLineAboveXCharacters msg', 
  () => {
    const object = genericRules.ruleLineAboveXCharacters("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.msg).toBe("");
})

test('ruleLineAboveXCharacters data', 
  () => {
    const object = genericRules.ruleLineAboveXCharacters("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.data).toBe("");
})

test('ruleLineAboveXCharacters name', 
  () => {
    const object = genericRules.ruleLineAboveXCharacters("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.name).toBe("");
})



//InconsistencyOfSpaces

test('ruleLineAboveXCharacters returns object', 
  () => {
    const object = genericRules.ruleInconsistencyOfSpaces("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect("object").toBe(typeof object);
})

test('ruleInconsistencyOfSpaces toString', 
  () => {
    const object = genericRules.ruleInconsistencyOfSpaces("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.toString).toBe("-:-     false          ruleInconsistencyOfSpaces()");
})

test('ruleInconsistencyOfSpaces msg', 
  () => {
    const object = genericRules.ruleInconsistencyOfSpaces("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.msg).toBe("");
})

test('ruleInconsistencyOfSpaces data', 
  () => {
    const object = genericRules.ruleInconsistencyOfSpaces("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.data).toBe("");
})

test('ruleInconsistencyOfSpaces name', 
  () => {
    const object = genericRules.ruleInconsistencyOfSpaces("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.name).toBe("ruleInconsistencyOfSpaces()");
})



//ConsecutiveBlankLines

test('ruleConsecutiveBlankLines returns object', 
  () => {
    const object = genericRules.ruleConsecutiveBlankLines("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect("object").toBe(typeof object);
})

test('ruleConsecutiveBlankLines toString', 
  () => {
    const object = genericRules.ruleConsecutiveBlankLines("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.toString).toBe("-:-               ruleConsecutiveBlankLines()");
})

test('ruleConsecutiveBlankLines msg', 
  () => {
    const object = genericRules.ruleConsecutiveBlankLines("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.msg).toBe("");
})

test('ruleConsecutiveBlankLines data', 
  () => {
    const object = genericRules.ruleConsecutiveBlankLines("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.data).toBe(0);
})

test('ruleConsecutiveBlankLines name', 
  () => {
    const object = genericRules.ruleConsecutiveBlankLines("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.name).toBe("ruleConsecutiveBlankLines()");
})