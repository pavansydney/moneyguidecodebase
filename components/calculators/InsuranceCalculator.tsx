'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { calculateInsuranceCover } from '@/lib/calculations'
import { Shield } from 'lucide-react'

export default function InsuranceCalculator() {
  const [annualIncome, setAnnualIncome] = useState('600000')
  const [yearsOfCoverage, setYearsOfCoverage] = useState('20')
  const [existingCover, setExistingCover] = useState('0')
  const [liabilities, setLiabilities] = useState('0')
  const [result, setResult] = useState<any>(null)

  const handleCalculate = () => {
    const income = parseFloat(annualIncome)
    const years = parseFloat(yearsOfCoverage)
    const existing = parseFloat(existingCover)
    const liability = parseFloat(liabilities)

    if (income > 0 && years > 0) {
      const calcResult = calculateInsuranceCover(income, years, existing, liability)
      setResult(calcResult)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
          <Shield className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Insurance Cover Calculator</h2>
          <p className="text-gray-600">Calculate how much term insurance you need</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label="Annual Income (₹)"
          type="number"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
          placeholder="600000"
        />
        <Input
          label="Years of Coverage Needed"
          type="number"
          value={yearsOfCoverage}
          onChange={(e) => setYearsOfCoverage(e.target.value)}
          placeholder="20"
        />
        <Input
          label="Existing Insurance Cover (₹)"
          type="number"
          value={existingCover}
          onChange={(e) => setExistingCover(e.target.value)}
          placeholder="0"
        />
        <Input
          label="Outstanding Liabilities (₹)"
          type="number"
          value={liabilities}
          onChange={(e) => setLiabilities(e.target.value)}
          placeholder="0"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium mb-6"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-8 p-6 bg-purple-50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">Recommended Cover</p>
              <p className="text-2xl font-bold text-gray-900">
                ₹{result.recommendedCover.toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Monthly Premium (Est.)</p>
              <p className="text-2xl font-bold text-purple-600">
                ₹{result.monthlyPremium.toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Annual Premium (Est.)</p>
              <p className="text-2xl font-bold text-blue-600">
                ₹{result.annualPremium.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Explanation:</strong> Based on your annual income of ₹{parseInt(annualIncome).toLocaleString('en-IN')}, 
              you should consider a term insurance cover of ₹{result.recommendedCover.toLocaleString('en-IN')}. 
              This is a rough estimate. Actual premiums may vary based on age, health, and insurer. 
              Always compare quotes from multiple insurers.
            </p>
          </div>
        </div>
      )}
    </Card>
  )
}

