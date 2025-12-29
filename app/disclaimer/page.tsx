import Card from '@/components/ui/Card'

export default function DisclaimerPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Disclaimer
            </h1>
            <p className="text-lg text-gray-600">
              Important information about using MoneyGuide
            </p>
          </div>

          <Card className="mb-8 bg-yellow-50 border-yellow-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Important Notice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>MoneyGuide is an educational platform only.</strong> We are not SEBI-registered investment 
              advisors, financial planners, or tax consultants. The information provided on this platform is for 
              educational and informational purposes only.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Always consult a certified financial advisor, chartered accountant, or SEBI-registered 
              investment advisor for personalized financial advice.</strong>
            </p>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Not Financial Advice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The calculators, tools, articles, and content on MoneyGuide are designed to help you understand 
              financial concepts and make informed decisions. However, they should not be considered as:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Personalized financial advice</li>
              <li>Investment recommendations</li>
              <li>Tax advice</li>
              <li>Insurance product recommendations</li>
              <li>Legal or regulatory advice</li>
            </ul>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Guarantees</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              MoneyGuide does not guarantee:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Accuracy of calculations or projections</li>
              <li>Investment returns or performance</li>
              <li>Completeness of information</li>
              <li>Results from following our guidance</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Financial markets are subject to risks. Past performance does not guarantee future results. 
              Always do your own research and consult professionals before making financial decisions.
            </p>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our platform may contain links to third-party websites, financial products, or services. 
              MoneyGuide is not responsible for the content, accuracy, or practices of these external sites. 
              We do not endorse any specific financial products, services, or companies unless explicitly stated.
            </p>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Status</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Currently, MoneyGuide operates as an educational platform. We are working towards SEBI compliance 
              for any future paid advisory services. As of now:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>We are not registered with SEBI as investment advisors</li>
              <li>We do not provide paid financial advisory services</li>
              <li>All content is provided free of charge for educational purposes</li>
            </ul>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Responsibility</h2>
            <p className="text-gray-700 leading-relaxed">
              You are solely responsible for your financial decisions. MoneyGuide, its creators, and contributors 
              are not liable for any losses, damages, or consequences arising from your use of this platform or 
              the information provided herein. Always verify information independently and seek professional advice 
              for your specific situation.
            </p>
          </Card>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

