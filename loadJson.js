let fs = require("fs");

let data = {};
data.scenes = [];

let scene231 = {
  sceneNumber: 132,
  sceneDescription: "you are in the kitchen",
  character1: "woman",
  hej: "jsd",
  dialogue1: "hey",
  sceneContinuations: [133, 14, 15],
};

let scene32 = {
  sceneNumber: 32,
  sceneDescription: "you are at the balcony",
  character1: "woman",
  dialogue1: "hello",
  sceneContinuations: [33, 4],
};

let scenes = [scene231, scene32];

data.scenes.push(scenes);

fs.writeFile("input.json", JSON.stringify(data), function (err) {
  if (err) throw err;
  console.log("complete");
});
