'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import Button from '@/components/ui/Button'
import { Star, Send, CheckCircle } from 'lucide-react'

interface FeedbackData {
  name: string
  email: string
  feedbackType: string
  rating: number
  message: string
  betaQuestion: string
}

export default function FeedbackForm() {
  const [formData, setFormData] = useState<FeedbackData>({
    name: '',
    email: '',
    feedbackType: 'general',
    rating: 0,
    message: '',
    betaQuestion: ''
  })
  const [hoveredRating, setHoveredRating] = useState(0)
  const [errors, setErrors] = useState<Partial<FeedbackData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const feedbackTypes = [
    { value: 'general', label: 'General Feedback' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'uiux', label: 'UI/UX Suggestion' },
    { value: 'other', label: 'Other' }
  ]

  const handleChange = (field: keyof FeedbackData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<FeedbackData> = {}

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your feedback'
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call - Replace with actual API endpoint
    try {
      // TODO: Replace with actual API call
      console.log('Feedback submitted:', formData)
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          feedbackType: 'general',
          rating: 0,
          message: '',
          betaQuestion: ''
        })
        setIsSubmitted(false)
      }, 3000)
    } catch (error) {
      console.error('Error submitting feedback:', error)
      alert('Failed to submit feedback. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
          <p className="text-gray-700">
            Your feedback has been submitted. We appreciate your help in making MoneyGuide better!
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Share Your Feedback</h2>
        <p className="text-gray-600">
          Help us improve MoneyGuide! We're in beta and your feedback is invaluable.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            How would you rate your experience? <span className="text-gray-400">(Optional)</span>
          </label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => handleChange('rating', star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none transition-transform hover:scale-110"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= (hoveredRating || formData.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              </button>
            ))}
            {formData.rating > 0 && (
              <span className="ml-2 text-sm text-gray-600">
                {formData.rating === 5 ? 'Excellent!' : 
                 formData.rating === 4 ? 'Good!' : 
                 formData.rating === 3 ? 'Okay' : 
                 formData.rating === 2 ? 'Needs Improvement' : 'Poor'}
              </span>
            )}
          </div>
        </div>

        {/* Feedback Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type of Feedback
          </label>
          <select
            value={formData.feedbackType}
            onChange={(e) => handleChange('feedbackType', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          >
            {feedbackTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Name (Optional) */}
        <Input
          label="Your Name (Optional)"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="John Doe"
        />

        {/* Email (Optional) */}
        <Input
          label="Your Email (Optional)"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="john@example.com"
          error={errors.email}
        />

        {/* Message (Required) */}
        <Textarea
          label="Your Feedback *"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          placeholder="Tell us what you think, what you'd like to see, or any issues you've encountered..."
          error={errors.message}
          required
        />

        {/* Beta-Specific Question */}
        <Textarea
          label="What would make MoneyGuide better? (Beta Question)"
          value={formData.betaQuestion}
          onChange={(e) => handleChange('betaQuestion', e.target.value)}
          placeholder="As we're in beta, we'd love to know what features or improvements would make this platform more valuable for you..."
          className="min-h-[100px]"
        />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Your feedback helps us improve. We read every submission and use it to prioritize 
            features and fixes. Thank you for being part of our beta!
          </p>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            'Submitting...'
          ) : (
            <>
              <Send className="inline w-5 h-5 mr-2" />
              Submit Feedback
            </>
          )}
        </Button>
      </form>
    </Card>
  )
}

