import Card from '@/components/ui/Card'

export default function AboutPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About MoneyGuide
            </h1>
            <p className="text-lg text-gray-600">
              Financial clarity for Indian youngsters. No jargon, just clear answers.
            </p>
          </div>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MoneyGuide was built to solve a simple problem: financial advice in India is either too complicated, 
              too salesy, or too expensive. We wanted to create a platform where Indian youngsters can get clear, 
              honest, and practical financial guidance—without any agenda.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our goal is to make financial planning accessible, understandable, and actionable for every young Indian 
              who's just starting their financial journey.
            </p>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span><strong>Financial Health Check:</strong> Get a personalized assessment of your financial situation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span><strong>Smart Calculators:</strong> SIP, EMI, Emergency Fund, Insurance, Retirement, and more</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span><strong>Learning Hub:</strong> Life-stage based financial education tailored for Indian context</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span><strong>Goal-Based Planning:</strong> Plan for car, home, marriage, travel, retirement</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 font-bold">✓</span>
                <span><strong>Insurance Simplifier:</strong> Clear guidance on insurance needs without the sales pitch</span>
              </li>
            </ul>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Clarity Over Complexity</h3>
                <p>We break down complex financial concepts into simple, actionable advice.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Honesty Over Hype</h3>
                <p>No sales pitches, no hidden agendas. Just honest, practical guidance.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Education Over Sales</h3>
                <p>We believe in empowering you with knowledge, not pushing products.</p>
              </div>
            </div>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              MoneyGuide is an educational platform designed specifically for Indian youngsters aged 18-35. 
              We understand the unique financial challenges you face—from managing your first salary to planning 
              for major life goals. Our content is tailored to the Indian financial landscape, including local 
              tax laws, investment options, and financial products available in India.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

