const mdRoules = require("./MDRules");

// FirstSectionStartsWithHx

test('ruleFirstSectionStartsWithHx returns object', 
  () => {
    const object = mdRoules.ruleFirstSectionStartsWithHx("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect("object").toBe(typeof object);
})

test('ruleFirstSectionStartsWithHx toString', 
  () => {
    const object = mdRoules.ruleFirstSectionStartsWithHx("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.toString).toBe("-:-               ");
})

test('ruleFirstSectionStartsWithHx msg', 
  () => {
    const object = mdRoules.ruleFirstSectionStartsWithHx("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.msg).toBe("");
})

test('ruleFirstSectionStartsWithHx data', 
  () => {
    const object = mdRoules.ruleFirstSectionStartsWithHx("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.data).toBe("");
})

test('ruleFirstSectionStartsWithHx name', 
  () => {
    const object = mdRoules.ruleFirstSectionStartsWithHx("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.name).toBe("");
})


// NeighboringSections

test('ruleNeighboringSections returns object', 
  () => {
    const object = mdRoules.ruleNeighboringSections("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect("object").toBe(typeof object);
})

test('ruleNeighboringSections String', 
  () => {
    const object = mdRoules.ruleNeighboringSections("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.toString).toBe("45:4     error     The file does not have increasing and decreasing sections     ruleNeighboringSections()");
})

test('ruleNeighboringSections msg', 
  () => {
    const object = mdRoules.ruleNeighboringSections("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.msg).toBe("The file does not have increasing and decreasing sections");
})

test('ruleNeighboringSections data', 
  () => {
    const object = mdRoules.ruleNeighboringSections("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.data).toBe("#### Output");
})

test('ruleNeighboringSections name', 
  () => {
    const object = mdRoules.ruleNeighboringSections("/home/felipe/fork/Moenda/README.md", "/home/felipe/fork/Moenda/config.js");
    expect(object.name).toBe("ruleNeighboringSections()");
})