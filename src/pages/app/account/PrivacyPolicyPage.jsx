import { useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  UserCircle,
  Database,
  Lock,
  ShieldCheck,
  ClipboardList,
  Mail,
} from 'lucide-react';

/**
 * Privacy Policy page — mobile-first scrollable layout.
 *
 * **Validates: Requirements 14.1, 14.2, 14.3**
 *
 * Sections:
 *  1. Information Collected
 *  2. How Data is Stored
 *  3. Data Security Practices
 *  4. User Privacy Rights
 *  5. User Responsibilities
 *  6. Contact Information
 */
function PrivacyPolicy() {
  const navigate = useNavigate();

  const sections = [
    {
      id: 'info-collected',
      icon: UserCircle,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      title: 'Information We Collect',
      items: [
        'Account information — your name and email address when you register',
        'Transaction data that you enter manually into the app',
        'Usage data to help us understand how you interact with the app and improve it',
      ],
    },
    {
      id: 'data-storage',
      icon: Database,
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      title: 'How Your Data Is Stored',
      items: [
        'Your data is stored securely on our servers',
        'We use industry-standard encryption for data at rest and in transit',
        'We retain your data only as long as your account is active or as required by law',
      ],
    },
    {
      id: 'security',
      icon: Lock,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      title: 'Data Security Practices',
      items: [
        'HTTPS is used for all communications between your device and our servers',
        'Passwords are encrypted and never stored in plain text',
        'We do not share your personal data with any third parties',
      ],
    },
    {
      id: 'privacy-rights',
      icon: ShieldCheck,
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      title: 'Your Privacy Rights',
      items: [
        'Access your data at any time through your account',
        'Request deletion of your data by contacting us at the address below',
        'Export your full transaction history directly from the app',
      ],
    },
    {
      id: 'responsibilities',
      icon: ClipboardList,
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      title: 'Your Responsibilities',
      items: [
        'Keep your login credentials secure and do not share them with others',
        'Log out of the app on shared or public devices',
        'Report any suspicious activity on your account to us immediately',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <h1 className="text-base font-semibold text-gray-900">Privacy Policy</h1>
      </div>

      {/* Scrollable content */}
      <div className="px-4 py-6 space-y-4">
        {/* Intro card */}
        <div className="rounded-2xl bg-white shadow-sm p-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            At Expensoo, your privacy matters. This policy explains what data we
            collect, how we protect it, and the rights you have over your
            information.
          </p>
        </div>

        {/* Section cards */}
        {sections.map(({ id, icon: Icon, iconBg, iconColor, title, items }) => (
          <div key={id} className="rounded-2xl bg-white shadow-sm p-4">
            {/* Section header */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${iconBg}`}
              >
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
            </div>

            {/* Bullet list */}
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact card */}
        <div className="rounded-2xl bg-white shadow-sm p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-red-100">
              <Mail className="w-5 h-5 text-red-600" />
            </div>
            <h2 className="text-sm font-semibold text-gray-900">
              Contact Us About Privacy
            </h2>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            If you have any questions or requests regarding your data, reach out
            to us:
          </p>
          <a
            href="mailto:privacy@expensoo.app"
            className="text-sm font-medium text-blue-600 underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          >
            privacy@expensoo.app
          </a>
        </div>

        {/* Footer note */}
        <p className="text-xs text-gray-400 text-center pb-2">
          Last updated: January 2025
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
