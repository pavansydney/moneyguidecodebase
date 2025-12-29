import Card from '@/components/ui/Card'
import { Shield, Heart, Eye } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'No Sales Pitch',
    description: 'We don\'t sell insurance or mutual funds. This is purely educational.',
  },
  {
    icon: Heart,
    title: 'Built for You',
    description: 'Created by someone who faced the same financial confusion. We get it.',
  },
  {
    icon: Eye,
    title: 'Transparent',
    description: 'Clear disclaimers. No hidden agendas. Your financial education is our only goal.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Trust Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're different. Here's why.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <Card key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600">
                  {point.description}
                </p>
              </Card>
            )
          })}
        </div>

        <Card className="max-w-3xl mx-auto bg-blue-50 border-blue-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              About This Platform
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              MoneyGuide was built to solve a simple problem: financial advice in India is either too complicated, 
              too salesy, or too expensive. We wanted to create a platform where Indian youngsters can get clear, 
              honest, and practical financial guidance—without any agenda.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Disclaimer:</strong> This is an educational platform. We are not SEBI-registered advisors. 
              Always consult a certified financial advisor for personalized advice. We're working towards SEBI compliance 
              for future paid services.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}

