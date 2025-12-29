import Link from 'next/link'
import Card from '@/components/ui/Card'
import { Calculator, TrendingUp, Shield, Home, Plane, CreditCard } from 'lucide-react'

const tools = [
  { name: 'SIP Calculator', icon: TrendingUp, href: '/calculators#sip' },
  { name: 'EMI Calculator', icon: Calculator, href: '/calculators#emi' },
  { name: 'Insurance Calculator', icon: Shield, href: '/calculators#insurance' },
  { name: 'Emergency Fund', icon: Home, href: '/calculators#emergency' },
  { name: 'Retirement Planning', icon: Plane, href: '/calculators#retirement' },
  { name: 'Credit Score Impact', icon: CreditCard, href: '/calculators#credit' },
]

export default function ToolsPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Financial Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Free calculators to plan your finances. No sign-up required.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, index) => {
            const Icon = tool.icon
            return (
              <Link key={index} href={tool.href}>
                <Card hover className="text-center cursor-pointer h-full">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {tool.name}
                  </h3>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-8">
          <Link href="/calculators">
            <button className="text-blue-600 font-semibold hover:text-blue-700">
              View All Calculators →
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

