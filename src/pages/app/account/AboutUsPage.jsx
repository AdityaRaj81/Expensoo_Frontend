import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Info,
  Target,
  Star,
  TrendingUp,
  BarChart2,
  ShieldCheck,
  Smartphone,
  Clock,
  Code2,
  Heart,
} from 'lucide-react';

/**
 * About Us page component
 *
 * **Validates: Requirements 13.1, 13.2, 13.3**
 *
 * Sections:
 * - What is Expensoo
 * - Purpose of the application
 * - Key features list
 * - Application version
 * - Developer / organization information
 */
function AboutUs() {
  const navigate = useNavigate();

  const features = [
    {
      icon: TrendingUp,
      label: 'Track Income & Expenses',
      description: 'Log every transaction in seconds and stay on top of your cash flow.',
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      icon: BarChart2,
      label: 'Visual Reports & Analytics',
      description: 'Understand your spending patterns through intuitive charts.',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: ShieldCheck,
      label: 'Secure Authentication',
      description: 'Your data is protected with JWT-based secure login.',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
    },
    {
      icon: Smartphone,
      label: 'Mobile-First PWA',
      description: 'Installable, fast, and works seamlessly on any device.',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
    },
    {
      icon: Clock,
      label: 'Transaction History with Filters',
      description: 'Browse and filter your full transaction history with ease.',
      color: 'text-indigo-600',
      bg: 'bg-indigo-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 space-y-4">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 active:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-1 -ml-1"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-900">About Expensoo</h1>

      {/* What is Expensoo */}
      <div className="rounded-2xl bg-white shadow-sm p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Info className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-base font-semibold text-gray-900">What is Expensoo?</h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Expensoo is a personal finance tracker that helps you manage income and
          expenses with ease. Whether you're saving for a goal or just keeping
          tabs on daily spending, Expensoo gives you a clear picture of where
          your money goes.
        </p>
      </div>

      {/* Purpose */}
      <div className="rounded-2xl bg-white shadow-sm p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-base font-semibold text-gray-900">Our Purpose</h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          We built Expensoo to simplify personal budgeting by giving everyone a
          clear, real-time view of their financial health — no spreadsheets, no
          complexity, just insight.
        </p>
      </div>

      {/* Key Features */}
      <div className="rounded-2xl bg-white shadow-sm p-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Star className="w-5 h-5 text-green-600" />
          </div>
          <h2 className="text-base font-semibold text-gray-900">Key Features</h2>
        </div>
        <ul className="space-y-4">
          {features.map(({ icon: Icon, label, description, color, bg }) => (
            <li key={label} className="flex items-start gap-3">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${bg}`}
              >
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Version */}
      <div className="rounded-2xl bg-white shadow-sm p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Code2 className="w-5 h-5 text-gray-600" />
          </div>
          <h2 className="text-base font-semibold text-gray-900">Version</h2>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Current version</p>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
            v1.0.0
          </span>
        </div>
      </div>

      {/* Developer / Organization */}
      <div className="rounded-2xl bg-white shadow-sm p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5 text-red-500" />
          </div>
          <h2 className="text-base font-semibold text-gray-900">Developer</h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Built with ❤️ by the{' '}
          <span className="font-semibold text-gray-900">Expensoo Team</span>.
          We're passionate about making personal finance accessible and
          stress-free for everyone.
        </p>
      </div>

    </div>
  );
}

export default AboutUs;
