'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { calculateEMI } from '@/lib/calculations'
import { Calculator } from 'lucide-react'

export default function EMICalculator() {
  const [principal, setPrincipal] = useState('500000')
  const [annualRate, setAnnualRate] = useState('10')
  const [years, setYears] = useState('5')
  const [result, setResult] = useState<any>(null)

  const handleCalculate = () => {
    const principalValue = parseFloat(principal)
    const rate = parseFloat(annualRate)
    const yearsValue = parseFloat(years)

    if (principalValue > 0 && rate > 0 && yearsValue > 0) {
      const calcResult = calculateEMI(principalValue, rate, yearsValue)
      setResult(calcResult)
    }
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <Calculator className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">EMI Calculator</h2>
          <p className="text-gray-600">Calculate your Equated Monthly Installment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Input
          label="Loan Amount (₹)"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          placeholder="500000"
        />
        <Input
          label="Annual Interest Rate (%)"
          type="number"
          value={annualRate}
          onChange={(e) => setAnnualRate(e.target.value)}
          placeholder="10"
        />
        <Input
          label="Loan Tenure (Years)"
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
          placeholder="5"
        />
      </div>

      <button
        onClick={handleCalculate}
        className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium mb-6"
      >
        Calculate EMI
      </button>

      {result && (
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-600">Monthly EMI</p>
              <p className="text-2xl font-bold text-gray-900">
                ₹{result.monthlyEMI.toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Interest</p>
              <p className="text-2xl font-bold text-red-600">
                ₹{result.totalInterest.toLocaleString('en-IN')}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Amount</p>
              <p className="text-2xl font-bold text-blue-600">
                ₹{result.totalAmount.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Explanation:</strong> For a loan of ₹{parseInt(principal).toLocaleString('en-IN')} 
              at {annualRate}% interest for {years} years, your monthly EMI will be ₹{result.monthlyEMI.toLocaleString('en-IN')}. 
              You'll pay a total of ₹{result.totalAmount.toLocaleString('en-IN')}, 
              including ₹{result.totalInterest.toLocaleString('en-IN')} in interest.
            </p>
          </div>
        </div>
      )}
    </Card>
  )
}

