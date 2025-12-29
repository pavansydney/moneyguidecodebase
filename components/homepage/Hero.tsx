import Link from 'next/link'
import Button from '@/components/ui/Button'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 lg:py-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Confused about money?
            <br />
            <span className="text-blue-600">Get clear answers in 10 minutes.</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            One-stop financial clarity platform for Indian youngsters. 
            No jargon. No sales pitch. Just practical guidance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/health-check">
              <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4">
                Start Free Financial Checkup
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/learn">
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4">
                Learn Basics
              </Button>
            </Link>
            <Link href="/ask">
              <Button variant="secondary" className="w-full sm:w-auto text-lg px-8 py-4">
                Ask a Question
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>No Sign Up Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span>No Sales Pitch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

