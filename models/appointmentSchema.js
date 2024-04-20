import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [2, "First Name must contain atleast 2 Characters!"],
  },

  lastName: {
    type: String,
    required: true,
    minLength: [2, "Last Name must contain atleast 2 Characters!"],
  },

  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please Enter a Valid Email Id!"],
  },

  phone: {
    type: String,
    required: true,
    minLength: [10, "PLease Enter a Valid Phone Number!"],
    maxLength: [10, "PLease Enter a Valid Phone Number!"],
  },

  uid: {
    type: String,
    required: true,
    minLength: [12, "PLease Enter a Valid Aadhar Number"],
    maxLength: [12, "PLease Enter a Valid Aadhar Number!"],
  },

  dob: {
    type: Date,
    required: [true, "DOB is required!"],
  },

  gender: {
    type: String,
    required: true,
  },

  appointment_date: {
    type: String,
    required: true,
  },

  department: {
    type: String,
    required: true,
  },

  doctor: {
    firstName: {
      type: String,
      required: true,
    },

    lastName: {
      type: String,
      required: true,
    },
  },

  hasVisited: {
    type: Boolean,
    default: false,
  },

  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },

  patientId: {
    type: mongoose.Schema.ObjectId,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
