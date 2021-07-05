const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  reps: {
    type: Number,
  },
  sets: {
    type: Number,
  },
});

const WorkoutSchema = new Schema({
  date: {
    type: String,
    default: Date.now,
  },
  exercises: [ExerciseSchema],
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
