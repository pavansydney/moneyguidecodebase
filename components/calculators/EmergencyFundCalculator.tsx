'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { calculateEmergencyFund } from '@/lib/calculations'
import { Home } from 'lucide-react'

export default function EmergencyFundCalculator() {
  const [monthlyExpenses, setMonthlyExpenses] = useState('30000')
  const [monthsCoverage, setMonthsCoverage] = useState('6')
  const [currentSavings, setCurrentSavings] = useState('0')
  const [result, setResult] = useState<any>(null)

  const handleCalculate = () => {
    const expenses = parseFloat(monthlyExpenses)
    const coverage = parseFloat(monthsCoverage)
    const savings = parseFloat(currentSavings)

    if (expenses > 0 && coverage > 0) {
      const calcResult = calculateEmergencyFund(expenses, coverage, savings)
      setResult(calcResult)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
          <Home className="w-6 h-6 text-yellow-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Emergency Fund Calculator</h2>
          <p className="text-gray-600">Calculate how much you need for emergencies</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Input
          label="Monthly Expenses (₹)"
          type="number"
          value={monthlyExpenses}
          onChange={(e) => setMonthlyExpenses(e.target.value)}
          placeholder="30000"
        />
        <Input
          label="Months of Coverage"
          type="number"
          value={monthsCoverage}
          onChange={(e) => setMonthsCoverage(e.target.value)}
          placeholder="6"
        />
        <Input
          label="Current Savings (₹)"
          type="number"
          value={currentSavings}
          onChange={(e) => setCurrentSavings(e.target.value)}
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
        <div className="mt-8 p-6 bg-green-50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">Target Emergency Fund</p>
              <p className="text-2xl font-bold text-gray-900">
                ₹{result.targetAmount.toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Monthly Savings Needed</p>
              <p className="text-2xl font-bold text-green-600">
                ₹{result.monthlySavings.toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Months to Complete</p>
              <p className="text-2xl font-bold text-blue-600">
                {result.monthsToComplete} months
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Explanation:</strong> For monthly expenses of ₹{parseInt(monthlyExpenses).toLocaleString('en-IN')}, 
              you need an emergency fund of ₹{result.targetAmount.toLocaleString('en-IN')} 
              to cover {monthsCoverage} months. Save ₹{result.monthlySavings.toLocaleString('en-IN')} 
              monthly to build this fund in {result.monthsToComplete} months.
            </p>
          </div>
        </div>
      )}
    </Card>
  )
}

