import SIPCalculator from '@/components/calculators/SIPCalculator'
import EMICalculator from '@/components/calculators/EMICalculator'
import EmergencyFundCalculator from '@/components/calculators/EmergencyFundCalculator'
import InsuranceCalculator from '@/components/calculators/InsuranceCalculator'
import RetirementCalculator from '@/components/calculators/RetirementCalculator'
import CreditScoreCalculator from '@/components/calculators/CreditScoreCalculator'

export default function CalculatorsPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Financial Calculators
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Free tools to plan your finances. No sign-up required.
          </p>
        </div>

        <div className="space-y-12">
          <div id="sip">
            <SIPCalculator />
          </div>
          <div id="emi">
            <EMICalculator />
          </div>
          <div id="emergency">
            <EmergencyFundCalculator />
          </div>
          <div id="insurance">
            <InsuranceCalculator />
          </div>
          <div id="retirement">
            <RetirementCalculator />
          </div>
          <div id="credit">
            <CreditScoreCalculator />
          </div>
        </div>
      </div>
    </div>
  )
}

