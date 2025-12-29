import Card from '@/components/ui/Card'

export default function PrivacyPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              How we protect and handle your information
            </p>
          </div>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              At MoneyGuide, we respect your privacy and are committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
              use our website and services.
            </p>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Information You Provide</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Financial information entered into calculators (stored locally in your browser)</li>
                  <li>Questions or feedback submitted through our contact forms</li>
                  <li>Email address (if you choose to subscribe to updates)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Browser type and version</li>
                  <li>Device information (type, operating system)</li>
                  <li>IP address and general location</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Provide and improve our financial calculators and tools</li>
              <li>Respond to your questions and feedback</li>
              <li>Analyze website usage to enhance user experience</li>
              <li>Send you updates (only if you've subscribed)</li>
              <li>Ensure website security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Storage and Security</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Local Storage:</strong> Financial data entered into calculators is stored locally in your 
                browser. We do not store this information on our servers unless you explicitly choose to save it.
              </p>
              <p>
                <strong>Security Measures:</strong> We implement appropriate technical and organizational measures 
                to protect your information. However, no method of transmission over the internet is 100% secure.
              </p>
              <p>
                <strong>No Sensitive Financial Data:</strong> We do not collect or store sensitive financial 
                information such as bank account numbers, credit card details, or investment account information.
              </p>
            </div>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use cookies and similar tracking technologies to:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve website functionality</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              You can control cookies through your browser settings. However, disabling cookies may affect 
              website functionality.
            </p>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may use third-party services for analytics, hosting, and other functions. These services have 
              their own privacy policies. We do not sell your personal information to third parties.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Common third-party services we may use include:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside mt-2">
              <li>Website analytics tools (e.g., Google Analytics)</li>
              <li>Hosting and cloud services</li>
              <li>Email service providers (if you subscribe)</li>
            </ul>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Under applicable data protection laws, you have the right to:</p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent (where applicable)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, please contact us through our contact form or email.
            </p>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              MoneyGuide is designed for users aged 18 and above. We do not knowingly collect personal information 
              from children under 18. If you believe we have collected information from a child, please contact us 
              immediately.
            </p>
          </Card>

          <Card className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes 
              by posting the new policy on this page and updating the "Last updated" date. Your continued use of 
              the website after changes constitutes acceptance of the updated policy.
            </p>
          </Card>

          <Card className="bg-blue-50 border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Through our contact form on the website</li>
              <li>Via the "Ask a Question" feature</li>
            </ul>
          </Card>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

