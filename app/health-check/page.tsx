import HealthCheckForm from '@/components/health-check/HealthCheckForm'

export default function HealthCheckPage() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Financial Health Check
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get your financial health score and personalized recommendations in 5 minutes.
          </p>
        </div>
        <HealthCheckForm />
      </div>
    </div>
  )
}

