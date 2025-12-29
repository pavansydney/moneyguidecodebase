import Card from '@/components/ui/Card'

export default function LearnPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learning Hub
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple, practical financial education for Indian youngsters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card hover>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Beginner (0-1 year job)</h3>
            <p className="text-gray-600 mb-4">
              Just started earning? Learn the basics of saving, budgeting, and building your first emergency fund.
            </p>
            <button className="text-blue-600 font-semibold">Coming Soon →</button>
          </Card>
          <Card hover>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Intermediate (1-5 years)</h3>
            <p className="text-gray-600 mb-4">
              Ready to invest? Understand SIPs, insurance, loans, and goal-based planning.
            </p>
            <button className="text-blue-600 font-semibold">Coming Soon →</button>
          </Card>
          <Card hover>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced (Wealth Building)</h3>
            <p className="text-gray-600 mb-4">
              Building wealth? Learn tax planning, portfolio diversification, and retirement planning.
            </p>
            <button className="text-blue-600 font-semibold">Coming Soon →</button>
          </Card>
        </div>
      </div>
    </div>
  )
}

