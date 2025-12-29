import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function AskPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Ask a Question
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to your financial questions.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <Card>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Free FAQs</h3>
            <p className="text-gray-600 mb-4">
              Browse our frequently asked questions about money, investing, and financial planning.
            </p>
            <Button variant="outline">View FAQs →</Button>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Community Q&A</h3>
            <p className="text-gray-600 mb-4">
              Ask questions and get answers from the community. Coming soon!
            </p>
            <Button variant="outline" disabled>Coming Soon</Button>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-gray-900 mb-4">1-on-1 Consultation</h3>
            <p className="text-gray-600 mb-4">
              Get personalized financial advice from certified advisors. Starting soon!
            </p>
            <Button variant="outline" disabled>Coming Soon</Button>
          </Card>
        </div>
      </div>
    </div>
  )
}

