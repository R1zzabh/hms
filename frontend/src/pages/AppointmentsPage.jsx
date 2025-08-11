import { useState } from "react"

const doctors = [
  { id: "dr-smith", name: "Dr. Sarah Smith", specialty: "Cardiology" },
  { id: "dr-johnson", name: "Dr. Michael Johnson", specialty: "Neurology" },
  { id: "dr-williams", name: "Dr. Emily Williams", specialty: "Pediatrics" },
  { id: "dr-brown", name: "Dr. David Brown", specialty: "Orthopedics" },
  { id: "dr-davis", name: "Dr. Lisa Davis", specialty: "Dermatology" },
  { id: "dr-miller", name: "Dr. James Miller", specialty: "Internal Medicine" },
]

// Mock backend function to simulate form submission
const submitAppointment = async (data) => {
  console.log("Appointment Data Submitted:", {
    ...data,
    submittedAt: new Date().toISOString(),
  })

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    success: true,
    appointmentId: `APT-${Date.now()}`,
  }
}

export default function AppointmentBooking() {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    contactNumber: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
    symptoms: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState(null)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.patientName.trim()) {
      newErrors.patientName = "Patient name is required"
    }
    if (!formData.age || Number(formData.age) < 1 || Number(formData.age) > 120) {
      newErrors.age = "Please enter a valid age (1-120)"
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required"
    }
    if (!formData.contactNumber || !/^\+?[\d\s\-\(\)]{10,}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid contact number"
    }
    if (!formData.doctor) {
      newErrors.doctor = "Please select a doctor"
    }
    if (!formData.appointmentDate) {
      newErrors.appointmentDate = "Appointment date is required"
    } else {
      const selectedDate = new Date(formData.appointmentDate)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.appointmentDate = "Appointment date must be in the future"
      }
    }
    if (!formData.appointmentTime) {
      newErrors.appointmentTime = "Appointment time is required"
    }
    if (!formData.symptoms.trim()) {
      newErrors.symptoms = "Please describe your symptoms or reason for visit"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage(null)

    if (!validateForm()) {
      setMessage({ type: "error", text: "Please correct the errors in the form." })
      return
    }

    setIsSubmitting(true)
    try {
      const result = await submitAppointment(formData)
      if (result.success) {
        setMessage({
          type: "success",
          text: `Appointment booked successfully! ID: ${result.appointmentId}`,
        })
        setFormData({
          patientName: "",
          age: "",
          gender: "",
          contactNumber: "",
          doctor: "",
          appointmentDate: "",
          appointmentTime: "",
          symptoms: "",
        })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Failed to book appointment. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="appointment-container">
      <header className="header">
        <h2>Book an Appointment</h2>
        <p>Schedule your visit with our experienced medical professionals</p>
      </header>

      <form onSubmit={handleSubmit} className="form-grid">
        <div className="form-grid form-grid-2-cols">
          <div className="form-group">
            <label htmlFor="patientName">Patient Name *</label>
            <input
              id="patientName"
              name="patientName"
              type="text"
              placeholder="Enter full name"
              value={formData.patientName}
              onChange={handleChange}
            />
            {errors.patientName && <p className="error-message">{errors.patientName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="age">Age *</label>
            <input
              id="age"
              name="age"
              type="number"
              placeholder="Enter age"
              min="1"
              max="120"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <p className="error-message">{errors.age}</p>}
          </div>
        </div>

        <div className="form-grid form-grid-2-cols">
          <div className="form-group">
            <label htmlFor="gender">Gender *</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="error-message">{errors.gender}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number *</label>
            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              placeholder="+1 (555) 123-4567"
              value={formData.contactNumber}
              onChange={handleChange}
            />
            {errors.contactNumber && <p className="error-message">{errors.contactNumber}</p>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="doctor">Select Doctor *</label>
          <select
            id="doctor"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
          >
            <option value="">Choose your preferred doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.id}>
                {doctor.name} - {doctor.specialty}
              </option>
            ))}
          </select>
          {errors.doctor && <p className="error-message">{errors.doctor}</p>}
        </div>

        <div className="form-grid form-grid-2-cols">
          <div className="form-group">
            <label htmlFor="appointmentDate">Appointment Date *</label>
            <input
              id="appointmentDate"
              name="appointmentDate"
              type="date"
              value={formData.appointmentDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
            />
            {errors.appointmentDate && <p className="error-message">{errors.appointmentDate}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="appointmentTime">Appointment Time *</label>
            <input
              id="appointmentTime"
              name="appointmentTime"
              type="time"
              value={formData.appointmentTime}
              onChange={handleChange}
            />
            {errors.appointmentTime && <p className="error-message">{errors.appointmentTime}</p>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="symptoms">Symptoms / Reason for Visit *</label>
          <textarea
            id="symptoms"
            name="symptoms"
            placeholder="Please describe your symptoms or reason for the visit..."
            rows={4}
            value={formData.symptoms}
            onChange={handleChange}
          />
          {errors.symptoms && <p className="error-message">{errors.symptoms}</p>}
        </div>

        <div className="form-group">
          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="loading-spinner"></span>
                Booking Appointment...
              </>
            ) : (
              "Book Appointment"
            )}
          </button>
        </div>
      </form>

      {message && (
        <div className={`message-box ${message.type}`}>
          {message.text}
        </div>
      )}
    </div>
  )
}