// Financial calculation functions

export interface SIPResult {
  investedAmount: number
  estimatedReturns: number
  totalValue: number
  breakdown: Array<{ year: number; invested: number; returns: number; total: number }>
}

export interface EMIResult {
  monthlyEMI: number
  totalAmount: number
  totalInterest: number
  breakdown: Array<{ month: number; principal: number; interest: number; balance: number }>
}

export interface EmergencyFundResult {
  targetAmount: number
  monthlySavings: number
  monthsToComplete: number
}

export interface InsuranceResult {
  recommendedCover: number
  monthlyPremium: number
  annualPremium: number
}

export interface RetirementResult {
  corpusRequired: number
  monthlySIP: number
  totalInvested: number
  estimatedReturns: number
}

export interface CreditScoreImpact {
  currentScore: number
  potentialScore: number
  improvement: number
  recommendations: string[]
}

// SIP Calculator
export function calculateSIP(
  monthlyAmount: number,
  annualReturn: number,
  years: number
): SIPResult {
  const months = years * 12
  const monthlyRate = annualReturn / 12 / 100
  const investedAmount = monthlyAmount * months

  // Future value of SIP formula: FV = P * [((1 + r)^n - 1) / r] * (1 + r)
  const futureValue = monthlyAmount * 
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))

  const estimatedReturns = futureValue - investedAmount

  // Yearly breakdown
  const breakdown = []
  for (let year = 1; year <= years; year++) {
    const monthsInYear = year * 12
    const invested = monthlyAmount * monthsInYear
    const fv = monthlyAmount * 
      (((Math.pow(1 + monthlyRate, monthsInYear) - 1) / monthlyRate) * (1 + monthlyRate))
    const returns = fv - invested
    breakdown.push({
      year,
      invested: Math.round(invested),
      returns: Math.round(returns),
      total: Math.round(fv)
    })
  }

  return {
    investedAmount: Math.round(investedAmount),
    estimatedReturns: Math.round(estimatedReturns),
    totalValue: Math.round(futureValue),
    breakdown
  }
}

// EMI Calculator
export function calculateEMI(
  principal: number,
  annualRate: number,
  years: number
): EMIResult {
  const months = years * 12
  const monthlyRate = annualRate / 12 / 100

  // EMI formula: [P x R x (1+R)^N] / [(1+R)^N - 1]
  const emi = principal * 
    (monthlyRate * Math.pow(1 + monthlyRate, months)) / 
    (Math.pow(1 + monthlyRate, months) - 1)

  const totalAmount = emi * months
  const totalInterest = totalAmount - principal

  // Monthly breakdown (first 12 months)
  const breakdown = []
  let balance = principal
  for (let month = 1; month <= Math.min(12, months); month++) {
    const interest = balance * monthlyRate
    const principalPaid = emi - interest
    balance = balance - principalPaid
    breakdown.push({
      month,
      principal: Math.round(principalPaid),
      interest: Math.round(interest),
      balance: Math.round(balance)
    })
  }

  return {
    monthlyEMI: Math.round(emi),
    totalAmount: Math.round(totalAmount),
    totalInterest: Math.round(totalInterest),
    breakdown
  }
}

// Emergency Fund Calculator
export function calculateEmergencyFund(
  monthlyExpenses: number,
  monthsCoverage: number = 6,
  currentSavings: number = 0
): EmergencyFundResult {
  const targetAmount = monthlyExpenses * monthsCoverage
  const remaining = Math.max(0, targetAmount - currentSavings)
  const monthlySavings = remaining > 0 ? remaining / 12 : 0 // Assume 12 months to build
  const monthsToComplete = monthlySavings > 0 ? Math.ceil(remaining / monthlySavings) : 0

  return {
    targetAmount: Math.round(targetAmount),
    monthlySavings: Math.round(monthlySavings),
    monthsToComplete
  }
}

// Insurance Cover Calculator
export function calculateInsuranceCover(
  annualIncome: number,
  yearsOfCoverage: number = 20,
  existingCover: number = 0,
  liabilities: number = 0
): InsuranceResult {
  // Rule of thumb: 10-15x annual income + liabilities
  const incomeCover = annualIncome * 12
  const recommendedCover = incomeCover + liabilities - existingCover
  const finalCover = Math.max(0, recommendedCover)

  // Rough premium estimate: ₹500-1000 per lakh for term insurance
  const premiumPerLakh = 800
  const annualPremium = (finalCover / 100000) * premiumPerLakh

  return {
    recommendedCover: Math.round(finalCover),
    monthlyPremium: Math.round(annualPremium / 12),
    annualPremium: Math.round(annualPremium)
  }
}

// Retirement Corpus Calculator
export function calculateRetirement(
  currentAge: number,
  retirementAge: number,
  currentExpenses: number,
  inflation: number = 6,
  expectedReturn: number = 12,
  lifeExpectancy: number = 85
): RetirementResult {
  const yearsToRetirement = retirementAge - currentAge
  const yearsInRetirement = lifeExpectancy - retirementAge

  // Future expenses at retirement (with inflation)
  const futureExpenses = currentExpenses * Math.pow(1 + inflation / 100, yearsToRetirement)
  const monthlyFutureExpenses = futureExpenses

  // Corpus needed (considering inflation during retirement)
  // Simplified: monthly expenses * 12 * years * 0.8 (assuming some income)
  const corpusRequired = monthlyFutureExpenses * 12 * yearsInRetirement * 0.8

  // Monthly SIP needed
  const monthlyRate = expectedReturn / 12 / 100
  const months = yearsToRetirement * 12
  const monthlySIP = corpusRequired / 
    (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))

  const totalInvested = monthlySIP * months
  const estimatedReturns = corpusRequired - totalInvested

  return {
    corpusRequired: Math.round(corpusRequired),
    monthlySIP: Math.round(monthlySIP),
    totalInvested: Math.round(totalInvested),
    estimatedReturns: Math.round(estimatedReturns)
  }
}

// Credit Score Impact Estimator
export function estimateCreditScoreImpact(
  currentScore: number,
  hasCreditCard: boolean,
  hasLoan: boolean,
  paymentHistory: 'good' | 'average' | 'poor',
  creditUtilization: number
): CreditScoreImpact {
  let potentialScore = currentScore
  const recommendations: string[] = []

  // Payment history impact
  if (paymentHistory === 'poor') {
    potentialScore += 50
    recommendations.push('Pay all bills on time for 6-12 months')
  } else if (paymentHistory === 'average') {
    potentialScore += 30
    recommendations.push('Maintain consistent on-time payments')
  }

  // Credit utilization impact
  if (creditUtilization > 30) {
    potentialScore += 20
    recommendations.push(`Reduce credit utilization below 30% (currently ${creditUtilization}%)`)
  } else if (creditUtilization > 0 && creditUtilization <= 30) {
    recommendations.push('Maintain credit utilization below 30%')
  }

  // Credit mix
  if (!hasCreditCard && !hasLoan) {
    potentialScore += 15
    recommendations.push('Consider getting a credit card to build credit history')
  }

  // Cap at 900
  potentialScore = Math.min(900, potentialScore)
  const improvement = potentialScore - currentScore

  if (improvement === 0) {
    recommendations.push('Your credit score is already in good shape!')
  }

  return {
    currentScore,
    potentialScore: Math.round(potentialScore),
    improvement: Math.round(improvement),
    recommendations
  }
}

