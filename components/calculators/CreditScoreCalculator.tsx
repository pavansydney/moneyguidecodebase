'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { estimateCreditScoreImpact } from '@/lib/calculations'
import { CreditCard } from 'lucide-react'

export default function CreditScoreCalculator() {
  const [currentScore, setCurrentScore] = useState('650')
  const [hasCreditCard, setHasCreditCard] = useState(false)
  const [hasLoan, setHasLoan] = useState(false)
  const [paymentHistory, setPaymentHistory] = useState<'good' | 'average' | 'poor'>('average')
  const [creditUtilization, setCreditUtilization] = useState('40')
  const [result, setResult] = useState<any>(null)

  const handleCalculate = () => {
    const score = parseFloat(currentScore)
    const utilization = parseFloat(creditUtilization)

    if (score > 0 && score <= 900 && utilization >= 0 && utilization <= 100) {
      const calcResult = estimateCreditScoreImpact(
        score,
        hasCreditCard,
        hasLoan,
        paymentHistory,
        utilization
      )
      setResult(calcResult)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
          <CreditCard className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Credit Score Impact Calculator</h2>
          <p className="text-gray-600">Estimate how to improve your credit score</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label="Current Credit Score"
          type="number"
          value={currentScore}
          onChange={(e) => setCurrentScore(e.target.value)}
          placeholder="650"
          max="900"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Credit Utilization (%)
          </label>
          <input
            type="number"
            value={creditUtilization}
            onChange={(e) => setCreditUtilization(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="40"
            max="100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment History
          </label>
          <select
            value={paymentHistory}
            onChange={(e) => setPaymentHistory(e.target.value as any)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          >
            <option value="good">Good (Always on time)</option>
            <option value="average">Average (Sometimes late)</option>
            <option value="poor">Poor (Frequently late)</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Credit Profile</label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={hasCreditCard}
              onChange={(e) => setHasCreditCard(e.target.checked)}
              className="w-4 h-4"
            />
            <span>I have a credit card</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={hasLoan}
              onChange={(e) => setHasLoan(e.target.checked)}
              className="w-4 h-4"
            />
            <span>I have an active loan</span>
          </label>
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium mb-6"
      >
        Calculate Impact
      </button>

      {result && (
        <div className="mt-8 p-6 bg-red-50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">Current Score</p>
              <p className="text-2xl font-bold text-gray-900">{result.currentScore}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Potential Score</p>
              <p className="text-2xl font-bold text-green-600">{result.potentialScore}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Improvement</p>
              <p className="text-2xl font-bold text-blue-600">+{result.improvement}</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-900 mb-2">Recommendations:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {result.recommendations.map((rec: string, index: number) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Card>
  )
}

