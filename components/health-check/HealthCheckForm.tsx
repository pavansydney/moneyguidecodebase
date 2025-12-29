'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import HealthScoreDisplay from './HealthScoreDisplay'

interface FormData {
  age: string
  monthlyIncome: string
  monthlyExpenses: string
  currentSavings: string
  monthlyEMIs: string
  hasInsurance: string
  insuranceCover: string
  goals: string[]
}

export default function HealthCheckForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    age: '',
    monthlyIncome: '',
    monthlyExpenses: '',
    currentSavings: '',
    monthlyEMIs: '',
    hasInsurance: 'no',
    insuranceCover: '0',
    goals: []
  })
  const [score, setScore] = useState<number | null>(null)

  const goalsList = [
    'Buy a Car',
    'Buy a Home',
    'Marriage',
    'Travel',
    'Early Retirement',
    'Emergency Fund'
  ]

  const calculateScore = () => {
    const income = parseFloat(formData.monthlyIncome) || 0
    const expenses = parseFloat(formData.monthlyExpenses) || 0
    const savings = parseFloat(formData.currentSavings) || 0
    const emis = parseFloat(formData.monthlyEMIs) || 0
    const age = parseFloat(formData.age) || 25
    const hasInsurance = formData.hasInsurance === 'yes'
    const insuranceCover = parseFloat(formData.insuranceCover) || 0

    let score = 50 // Base score

    // Savings ratio (30% of income is good)
    const savingsRatio = ((income - expenses - emis) / income) * 100
    if (savingsRatio >= 30) score += 20
    else if (savingsRatio >= 20) score += 15
    else if (savingsRatio >= 10) score += 10
    else if (savingsRatio > 0) score += 5

    // Emergency fund (6 months expenses)
    const emergencyFundNeeded = expenses * 6
    if (savings >= emergencyFundNeeded) score += 15
    else if (savings >= emergencyFundNeeded * 0.5) score += 10
    else if (savings > 0) score += 5

    // Insurance coverage
    const recommendedCover = income * 12
    if (hasInsurance && insuranceCover >= recommendedCover) score += 10
    else if (hasInsurance && insuranceCover >= recommendedCover * 0.5) score += 5

    // EMI to income ratio (should be < 40%)
    const emiRatio = (emis / income) * 100
    if (emiRatio < 20) score += 5
    else if (emiRatio < 40) score += 3
    else if (emiRatio >= 50) score -= 10

    // Age factor (younger = more time to build)
    if (age < 30) score += 5

    // Goals
    if (formData.goals.length > 0) score += 5

    score = Math.min(100, Math.max(0, score))
    setScore(score)
  }

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      calculateScore()
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }))
  }

  return (
    <div className="max-w-3xl mx-auto">
      {score === null ? (
        <Card>
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Step {step} of 4</span>
              <span className="text-sm font-medium text-gray-700">{Math.round((step / 4) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
              <Input
                label="Your Age"
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                placeholder="25"
              />
              <Input
                label="Monthly Income (₹)"
                type="number"
                value={formData.monthlyIncome}
                onChange={(e) => setFormData({ ...formData, monthlyIncome: e.target.value })}
                placeholder="50000"
              />
              <Input
                label="Monthly Expenses (₹)"
                type="number"
                value={formData.monthlyExpenses}
                onChange={(e) => setFormData({ ...formData, monthlyExpenses: e.target.value })}
                placeholder="30000"
              />
            </div>
          )}

          {/* Step 2: Financial Status */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Financial Status</h2>
              <Input
                label="Current Savings (₹)"
                type="number"
                value={formData.currentSavings}
                onChange={(e) => setFormData({ ...formData, currentSavings: e.target.value })}
                placeholder="100000"
              />
              <Input
                label="Monthly EMIs (₹)"
                type="number"
                value={formData.monthlyEMIs}
                onChange={(e) => setFormData({ ...formData, monthlyEMIs: e.target.value })}
                placeholder="10000"
              />
            </div>
          )}

          {/* Step 3: Insurance */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Insurance Coverage</h2>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you have term insurance?
                </label>
                <select
                  value={formData.hasInsurance}
                  onChange={(e) => setFormData({ ...formData, hasInsurance: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              {formData.hasInsurance === 'yes' && (
                <Input
                  label="Current Insurance Cover (₹)"
                  type="number"
                  value={formData.insuranceCover}
                  onChange={(e) => setFormData({ ...formData, insuranceCover: e.target.value })}
                  placeholder="5000000"
                />
              )}
            </div>
          )}

          {/* Step 4: Goals */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Financial Goals</h2>
              <p className="text-gray-600 mb-4">Select your financial goals (multiple selections allowed)</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {goalsList.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => handleGoalToggle(goal)}
                    className={`p-4 border-2 rounded-lg text-left transition ${
                      formData.goals.includes(goal)
                        ? 'border-blue-600 bg-blue-50 text-blue-900'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={step === 1}
            >
              Back
            </Button>
            <Button
              variant="primary"
              onClick={handleNext}
            >
              {step === 4 ? 'Calculate Score' : 'Next'}
            </Button>
          </div>
        </Card>
      ) : (
        <HealthScoreDisplay score={score} formData={formData} />
      )}
    </div>
  )
}

