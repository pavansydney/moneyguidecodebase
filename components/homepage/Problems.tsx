import Card from '@/components/ui/Card'
import { TrendingDown, CreditCard, AlertCircle, Target } from 'lucide-react'

const problems = [
  {
    icon: TrendingDown,
    title: 'Salary Vanishing Every Month',
    description: 'Earning ₹50,000 but saving nothing? We help you understand where your money goes and how to build savings.',
  },
  {
    icon: CreditCard,
    title: 'EMI vs SIP Confusion',
    description: 'Should you pay off loans first or start investing? Get clear guidance based on your situation.',
  },
  {
    icon: AlertCircle,
    title: 'Insurance Mis-selling Fear',
    description: 'Tired of agents pushing expensive policies? Learn what you actually need and how much it should cost.',
  },
  {
    icon: Target,
    title: 'No Financial Roadmap',
    description: 'Want to buy a car, home, or retire early? We help you create a clear, achievable plan.',
  },
]

export default function Problems() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Problems We Solve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real problems faced by Indian youngsters. Real solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <Card key={index} hover className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600">
                  {problem.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

