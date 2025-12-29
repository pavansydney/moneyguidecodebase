'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { calculateSIP } from '@/lib/calculations'
import { TrendingUp } from 'lucide-react'

export default function SIPCalculator() {
  const [monthlyAmount, setMonthlyAmount] = useState('5000')
  const [annualReturn, setAnnualReturn] = useState('12')
  const [years, setYears] = useState('10')
  const [result, setResult] = useState<any>(null)

  const handleCalculate = () => {
    const amount = parseFloat(monthlyAmount)
    const returnRate = parseFloat(annualReturn)
    const yearsValue = parseFloat(years)

    if (amount > 0 && returnRate > 0 && yearsValue > 0) {
      const calcResult = calculateSIP(amount, returnRate, yearsValue)
      setResult(calcResult)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">SIP Calculator</h2>
          <p className="text-gray-600">Calculate your Systematic Investment Plan returns</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Input
          label="Monthly Investment (₹)"
          type="number"
          value={monthlyAmount}
          onChange={(e) => setMonthlyAmount(e.target.value)}
          placeholder="5000"
        />
        <Input
          label="Expected Annual Return (%)"
          type="number"
          value={annualReturn}
          onChange={(e) => setAnnualReturn(e.target.value)}
          placeholder="12"
        />
        <Input
          label="Investment Period (Years)"
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="10"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium mb-6"
      >
        Calculate
      </button>

      {result && (
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">Total Invested</p>
              <p className="text-2xl font-bold text-gray-900">
                ₹{result.investedAmount.toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Estimated Returns</p>
              <p className="text-2xl font-bold text-green-600">
                ₹{result.estimatedReturns.toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-2xl font-bold text-blue-600">
                ₹{result.totalValue.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Explanation:</strong> If you invest ₹{parseInt(monthlyAmount).toLocaleString('en-IN')} 
              monthly for {years} years at {annualReturn}% annual return, you'll invest ₹{result.investedAmount.toLocaleString('en-IN')} 
              and potentially get ₹{result.estimatedReturns.toLocaleString('en-IN')} in returns, 
              making your total corpus ₹{result.totalValue.toLocaleString('en-IN')}.
            </p>
          </div>
        </div>
      )}
    </Card>
  )
}

