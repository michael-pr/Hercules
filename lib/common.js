var Schemas = {};

Schemas.Routine = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    min: 4,
    max: 140
  },
  author: {
    type: String
  },
  bodyType: {
    type: Object
  },
  "bodyType.gender": {
    type: String
  },
  "bodyType.age": {
    type: Number,
    min: 4,
    max: 120
  },
  "bodyType.height": {
    type: Object
  },
  "bodyType.height.feet": {
    type: Number
  },
  "bodyType.height.inches": {
    type: Number
  },
  "bodyType.weight": {
    type: Number, // Lbs
    min: 20,
    max: 1000
  },
  goalType: {
    type: [String]
  },

  exercises: {
    type: [Object]
  }
  "exercises.exercise"

  submitted: {
    type: Date
  }
});
