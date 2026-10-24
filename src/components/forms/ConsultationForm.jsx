import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, Loader2, Send } from 'lucide-react'

const initialValues = {
  name: '',
  phone: '',
  email: '',
  job: '',
  projectDetail: '',
  description: '',
  honeypot: '',
}

export default function ConsultationForm({ className = '' }) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  function validate(v) {
    const errs = {}
    if (!v.name.trim()) errs.name = 'Please enter your name.'
    if (!v.phone.trim()) errs.phone = 'Please enter your phone number.'
    if (!v.email.trim()) {
      errs.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!v.job.trim()) errs.job = 'Please enter your job title / role.'
    if (!v.projectDetail.trim()) errs.projectDetail = 'Please provide your project detail.'
    if (!v.description.trim()) errs.description = 'Please enter your project description.'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()

    // Bot honeypot trap
    if (values.honeypot) return

    const validationErrors = validate(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const formData = new FormData()
      Object.entries(values).forEach(([k, v]) => formData.append(k, v))
      formData.append('form_type', 'simple_contact')

      const response = await fetch('/php/contact.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: formData,
      })

      let data
      try {
        data = await response.json()
      } catch {
        if (response.ok) {
          data = { success: true }
        } else {
          throw new Error('Server returned non-JSON response')
        }
      }

      if (data && data.success) {
        setStatus('success')
        setValues(initialValues)
        setErrors({})
      } else {
        setStatus('error')
        setErrorMessage(data?.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Unable to reach the server. Please contact us directly at empirexbusinessacademy577@gmail.com')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6 bg-empire-lightGrey rounded-2xl border border-empire-border"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-600">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-empire-navy mb-2">Message Sent Successfully</h3>
        <p className="text-empire-textMuted text-sm max-w-md mx-auto mb-6">
          Thank you for reaching out to EmpireX Business Academy. We have received your project details and will get back to you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-navy text-xs tracking-wider uppercase font-bold"
        >
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <form
      action="/php/contact.php"
      method="POST"
      onSubmit={handleSubmit}
      noValidate
      className={`space-y-5 ${className}`}
    >
      {/* Honeypot field for anti-spam */}
      <div aria-hidden="true" className="hidden">
        <input
          name="honeypot"
          value={values.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-700 font-semibold text-xs uppercase tracking-wider">Notice</p>
              <p className="text-red-600 text-sm mt-0.5">{errorMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="form-label">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            className={`form-input ${errors.name ? 'border-red-400 focus:ring-red-200' : ''}`}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="form-label">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="+1 555 123 4567"
            className={`form-input ${errors.phone ? 'border-red-400 focus:ring-red-200' : ''}`}
          />
          {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="form-label">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="yourname@example.com"
            className={`form-input ${errors.email ? 'border-red-400 focus:ring-red-200' : ''}`}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        {/* Job */}
        <div>
          <label htmlFor="job" className="form-label">
            Job / Role <span className="text-red-500">*</span>
          </label>
          <input
            id="job"
            name="job"
            type="text"
            value={values.job}
            onChange={handleChange}
            placeholder="e.g. E-Commerce Seller, Brand Owner, Trader"
            className={`form-input ${errors.job ? 'border-red-400 focus:ring-red-200' : ''}`}
          />
          {errors.job && <p className="text-xs text-red-600 mt-1">{errors.job}</p>}
        </div>
      </div>

      {/* Project Detail */}
      <div>
        <label htmlFor="projectDetail" className="form-label">
          Project Detail <span className="text-red-500">*</span>
        </label>
        <input
          id="projectDetail"
          name="projectDetail"
          type="text"
          value={values.projectDetail}
          onChange={handleChange}
          placeholder="e.g. Amazon Store Launch, eBay Listing Optimization, Etsy Management"
          className={`form-input ${errors.projectDetail ? 'border-red-400 focus:ring-red-200' : ''}`}
        />
        {errors.projectDetail && <p className="text-xs text-red-600 mt-1">{errors.projectDetail}</p>}
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="form-label">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          value={values.description}
          onChange={handleChange}
          placeholder="Describe your project, requirements, products, or questions in detail..."
          className={`form-input resize-y ${errors.description ? 'border-red-400 focus:ring-red-200' : ''}`}
        />
        {errors.description && <p className="text-xs text-red-600 mt-1">{errors.description}</p>}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary w-full sm:w-auto px-8 py-3.5 justify-center font-bold uppercase tracking-wider text-xs"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending Message…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  )
}
