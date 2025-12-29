import FeedbackForm from '@/components/feedback/FeedbackForm'
import Card from '@/components/ui/Card'
import { MessageSquare, Bug, Lightbulb, Palette, Heart } from 'lucide-react'

export default function FeedbackPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              We'd Love Your Feedback
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              MoneyGuide is in beta, and your feedback helps us build a better platform for Indian youngsters.
            </p>
          </div>

          {/* Feedback Form */}
          <div className="mb-12">
            <FeedbackForm />
          </div>

          {/* What We're Looking For */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What Kind of Feedback Are We Looking For?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Bug className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Bug Reports</h3>
                    <p className="text-gray-600 text-sm">
                      Found something that's not working? Let us know so we can fix it!
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Lightbulb className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Feature Requests</h3>
                    <p className="text-gray-600 text-sm">
                      Have an idea for a new calculator or feature? We want to hear it!
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Palette className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">UI/UX Suggestions</h3>
                    <p className="text-gray-600 text-sm">
                      Think something could be clearer or easier to use? Share your thoughts!
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover>
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">General Feedback</h3>
                    <p className="text-gray-600 text-sm">
                      Love something? Hate something? Just want to share? All feedback is welcome!
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Beta Notice */}
          <Card className="bg-yellow-50 border-yellow-200">
            <div className="flex items-start gap-4">
              <MessageSquare className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Beta Program</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  MoneyGuide is currently in beta. This means we're actively building, testing, and improving 
                  based on user feedback. Your input directly shapes the future of the platform. We appreciate 
                  your patience as we work to make MoneyGuide the best financial guidance platform for Indian youngsters.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

