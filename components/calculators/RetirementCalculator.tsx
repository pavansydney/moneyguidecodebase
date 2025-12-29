'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { calculateRetirement } from '@/lib/calculations'
import { Plane } from 'lucide-react'

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState('25')
  const [retirementAge, setRetirementAge] = useState('60')
  const [currentExpenses, setCurrentExpenses] = useState('30000')
  const [result, setResult] = useState<any>(null)

  const handleCalculate = () => {
    const age = parseFloat(currentAge)
    const retireAge = parseFloat(retirementAge)
    const expenses = parseFloat(currentExpenses)

    if (age > 0 && retireAge > age && expenses > 0) {
      const calcResult = calculateRetirement(age, retireAge, expenses)
      setResult(calcResult)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
          <Plane className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Retirement Planning Calculator</h2>
          <p className="text-gray-600">Calculate how much you need for retirement</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Input
          label="Current Age"
          type="number"
          value={currentAge}
          onChange={(e) => setCurrentAge(e.target.value)}
          placeholder="25"
        />
        <Input
          label="Retirement Age"
          type="number"
          value={retirementAge}
          onChange={(e) => setRetirementAge(e.target.value)}
          placeholder="60"
        />
        <Input
          label="Current Monthly Expenses (₹)"
          type="number"
          value={currentExpenses}
          onChange={(e) => setCurrentExpenses(e.target.value)}
          placeholder="30000"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium mb-6"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">Corpus Required</p>
              <p className="text-2xl font-bold text-gray-900">
                ₹{result.corpusRequired.toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Monthly SIP Needed</p>
              <p className="text-2xl font-bold text-indigo-600">
                ₹{result.monthlySIP.toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Invested</p>
              <p className="text-2xl font-bold text-blue-600">
                ₹{result.totalInvested.toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Estimated Returns</p>
              <p className="text-2xl font-bold text-green-600">
                ₹{result.estimatedReturns.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Explanation:</strong> To retire comfortably at {retirementAge} years, 
              you'll need a corpus of approximately ₹{result.corpusRequired.toLocaleString('en-IN')}. 
              Start investing ₹{result.monthlySIP.toLocaleString('en-IN')} monthly in equity mutual funds 
              (assuming 12% returns) to achieve this goal.
            </p>
          </div>
        </div>
      )}
    </Card>
  )
}

