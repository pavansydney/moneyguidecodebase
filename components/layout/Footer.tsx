import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">MoneyGuide</h3>
            <p className="text-sm">
              Financial clarity for Indian youngsters. No jargon, just clear answers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/health-check" className="hover:text-white">
                  Health Check
                </Link>
              </li>
              <li>
                <Link href="/calculators" className="hover:text-white">
                  Calculators
                </Link>
              </li>
              <li>
                <Link href="/learn" className="hover:text-white">
                  Learn
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-3">
              Questions? We're here to help.
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/ask"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Ask a Question →
                </Link>
              </li>
              <li>
                <Link
                  href="/feedback"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Share Feedback →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>
            © {new Date().getFullYear()} MoneyGuide. Educational platform. Not a financial advisor.
          </p>
        </div>
      </div>
    </footer>
  )
}

