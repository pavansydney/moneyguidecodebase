import Card from '@/components/ui/Card'
import { FileText, Calculator, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: FileText,
    title: 'Take Free Health Check',
    description: 'Answer simple questions about your income, expenses, and goals. Takes just 5 minutes.',
  },
  {
    number: '2',
    icon: Calculator,
    title: 'Get Your Financial Score',
    description: 'Receive a personalized score (0-100) and understand where you stand financially.',
  },
  {
    number: '3',
    icon: TrendingUp,
    title: 'Follow Action Steps',
    description: 'Get clear, prioritized recommendations. Know exactly what to do next with your money.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple. Fast. Actionable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card hover className="text-center h-full">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="mt-8 mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

