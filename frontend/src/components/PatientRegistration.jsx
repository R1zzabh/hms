import React, { useState } from "react";
import { FaNotesMedical, FaPhone, FaUser } from "react-icons/fa";
import { IoIosBody } from "react-icons/io";

export default function PatientRegistration() {
  const [formData, setFormData] = useState({
    patientId: "",
    patientName: "",
    roomNumber: "",
    doctorId: "",
    doctorName: "",
    age: "",
    gender: "",
    weight: "",
    height: "",
    bloodGroup: "",
    address: "",
    contactNumber: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    Object.keys(formData).forEach((field) => {
      if (!formData[field]) tempErrors[field] = "This field is required";
    });
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setModalOpen(true);
      setFormData({
        patientId: "",
        patientName: "",
        roomNumber: "",
        doctorId: "",
        doctorName: "",
        age: "",
        gender: "",
        weight: "",
        height: "",
        bloodGroup: "",
        address: "",
        contactNumber: "",
      });
    }, 1500);
  };

  return (
    <div className="p-4 mt-10 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-[#1E40AF] text-center">Patient Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex gap-2 items-center mb-2">
                <FaUser className="text-[#1E40AF]"/>
                <h3 className="font-semibold">Personal Details</h3>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label>Patient ID</label>
              <input
                type="text"
                name="patientId"
                value={formData.patientId}
                onChange={handleChange}
                className="w-full border-gray-300 border-1 p-2 rounded"
              />
              {errors.patientId && <p className="text-red-500 text-sm">{errors.patientId}</p>}
            </div>
            <div>
              <label>Patient Name</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full border-gray-300 border-1 p-2 rounded"
              />
              {errors.patientName && <p className="text-red-500 text-sm">{errors.patientName}</p>}
            </div>
            <div>
              <label>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border-gray-300 border-1 p-2 rounded"
              />
              {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
            </div>
            <div>
              <label>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border-gray-300 border-1 p-2 rounded"
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex gap-2 items-center mb-2">
                <FaNotesMedical className="text-[#1E40AF]"/>
                <h3 className="font-semibold">Medical Details</h3>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label>Room Number</label>
              <input
                type="text"
                name="roomNumber"
                value={formData.roomNumber}
                onChange={handleChange}
                className="w-full border-gray-300 border-1 p-2 rounded"
              />
              {errors.roomNumber && <p className="text-red-500 text-sm">{errors.roomNumber}</p>}
            </div>
            <div>
              <label>Doctor ID</label>
              <input
                type="text"
                name="doctorId"
                value={formData.doctorId}
                onChange={handleChange}
                className="w-full border-gray-300 border-1 p-2 rounded"
              />
              {errors.doctorId && <p className="text-red-500 text-sm">{errors.doctorId}</p>}
            </div>
            <div>
              <label>Doctor Name</label>
              <input
                type="text"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleChange}
                className="w-full border-gray-300 border-1 p-2 rounded"
              />
              {errors.doctorName && <p className="text-red-500 text-sm">{errors.doctorName}</p>}
            </div>
            <div>
              <label>Blood Group</label>
              <input
                type="text"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full border-gray-300 border-1 p-2 rounded"
              />
              {errors.bloodGroup && <p className="text-red-500 text-sm">{errors.bloodGroup}</p>}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex gap-2 items-center mb-2">
                <IoIosBody className="text-[#1E40AF]"/>
                <h3 className="font-semibold">Physical Details</h3>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="w-full border-gray-300 border-1 p-2 rounded"
              />
              {errors.weight && <p className="text-red-500 text-sm">{errors.weight}</p>}
            </div>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                className="w-full border-gray-300 border-1 p-2 rounded"
              />
              {errors.height && <p className="text-red-500 text-sm">{errors.height}</p>}
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex gap-2 items-center mb-2">
                <FaPhone className="text-[#1E40AF]"/>
                <h3 className="font-semibold">Contact Details</h3>
            </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-gray-300 border-1 p-2 rounded"
              ></textarea>
              {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            </div>
            <div>
              <label>Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full border-gray-300 border-1 p-2 rounded"
              />
              {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>

      {modalOpen && (
        <div className="fixed inset-0 bg-white/40 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg text-center max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">Success!</h3>
            <p>Patient details have been submitted successfully.</p>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
