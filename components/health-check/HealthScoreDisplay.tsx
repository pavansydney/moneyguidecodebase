'use client'

import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react'

interface HealthScoreDisplayProps {
  score: number
  formData: any
}

export default function HealthScoreDisplay({ score, formData }: HealthScoreDisplayProps) {
  const getScoreColor = () => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-blue-600'
    if (score >= 40) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreLabel = () => {
    if (score >= 80) return 'Excellent'
    if (score >= 60) return 'Good'
    if (score >= 40) return 'Needs Improvement'
    return 'Critical'
  }

  const getRecommendations = () => {
    const recommendations: string[] = []
    const income = parseFloat(formData.monthlyIncome) || 0
    const expenses = parseFloat(formData.monthlyExpenses) || 0
    const savings = parseFloat(formData.currentSavings) || 0
    const emis = parseFloat(formData.monthlyEMIs) || 0
    const hasInsurance = formData.hasInsurance === 'yes'
    const insuranceCover = parseFloat(formData.insuranceCover) || 0

    // Emergency fund check
    const emergencyFundNeeded = expenses * 6
    if (savings < emergencyFundNeeded) {
      recommendations.push(`Build emergency fund of ₹${Math.round(emergencyFundNeeded - savings).toLocaleString('en-IN')} (6 months expenses)`)
    }

    // Insurance check
    const recommendedCover = income * 12
    if (!hasInsurance || insuranceCover < recommendedCover) {
      recommendations.push(`Get term insurance cover of ₹${Math.round(recommendedCover).toLocaleString('en-IN')} (12x annual income)`)
    }

    // Savings rate check
    const savingsRate = ((income - expenses - emis) / income) * 100
    if (savingsRate < 20) {
      recommendations.push(`Increase savings rate to at least 20% (currently ${savingsRate.toFixed(1)}%)`)
    }

    // EMI check
    const emiRatio = (emis / income) * 100
    if (emiRatio > 40) {
      recommendations.push(`Reduce EMIs - they should be less than 40% of income (currently ${emiRatio.toFixed(1)}%)`)
    }

    // SIP recommendation
    if (savingsRate > 0) {
      const suggestedSIP = (income - expenses - emis) * 0.5
      if (suggestedSIP > 0) {
        recommendations.push(`Start SIP of ₹${Math.round(suggestedSIP).toLocaleString('en-IN')} monthly in equity mutual funds`)
      }
    }

    if (recommendations.length === 0) {
      recommendations.push('Your financial health is excellent! Keep maintaining good habits.')
    }

    return recommendations
  }

  const recommendations = getRecommendations()

  return (
    <div className="space-y-6">
      <Card className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Financial Health Score</h2>
        <div className="mb-6">
          <div className={`text-6xl font-bold ${getScoreColor()} mb-2`}>
            {score}
          </div>
          <Badge variant={score >= 80 ? 'success' : score >= 60 ? 'info' : score >= 40 ? 'warning' : 'danger'}>
            {getScoreLabel()}
          </Badge>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className={`h-4 rounded-full transition-all duration-500 ${
              score >= 80 ? 'bg-green-600' :
              score >= 60 ? 'bg-blue-600' :
              score >= 40 ? 'bg-yellow-600' : 'bg-red-600'
            }`}
            style={{ width: `${score}%` }}
          />
        </div>
      </Card>

      <Card>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-blue-600" />
          Personalized Action Steps
        </h3>
        <div className="space-y-3">
          {recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{rec}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="primary" onClick={() => window.location.reload()}>
          Take Checkup Again
        </Button>
        <Button variant="outline" onClick={() => window.print()}>
          Download Report
        </Button>
      </div>
    </div>
  )
}

