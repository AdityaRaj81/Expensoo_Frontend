import { Link } from 'react-router-dom';
import { useState } from 'react';
import LandingHeader from "./LandingHeader";
import LandingFooter from "./LandingFooter";

function LandingPage() {
  const highlights = [
    { icon: '📥', title: 'Unified Tracking', description: 'Capture expenses from cards, cash, and transfers in one clean timeline.' },
    { icon: '🧠', title: 'Smart Categorization', description: 'Auto-tags transactions and learns your habits over time.' },
    { icon: '🧾', title: 'Instant Reports', description: 'Generate monthly and yearly summaries with one click.' },
    { icon: '🔔', title: 'Budget Guardrails', description: 'Real-time alerts to keep spending on target.' },
    { icon: '📱', title: 'Mobile First', description: 'Quick add, offline capture, and fast search on the go.' },
    { icon: '🔒', title: 'Privacy First', description: 'Your data stays secure with encryption and strict access controls.' }
  ];

  const steps = [
    { n: '01', t: 'Create Account', d: 'Sign up in minutes with your email or Google.' },
    { n: '02', t: 'Add Transactions', d: 'Import CSV or enter expenses with smart suggestions.' },
    { n: '03', t: 'Set Budgets', d: 'Create flexible budgets by category or goal.' },
    { n: '04', t: 'Track Progress', d: 'Monitor trends and get insights weekly.' }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: 'Free',
      desc: 'Perfect for personal budgeting.',
      features: ['Unlimited transactions', 'Basic reports', 'Mobile access']
    },
    {
      name: 'Pro',
      price: '$6/mo',
      desc: 'For deeper insights and teams.',
      features: ['Advanced analytics', 'Custom categories', 'Priority support'],
      featured: true
    },
    {
      name: 'Business',
      price: '$18/mo',
      desc: 'Built for growing teams.',
      features: ['Multi-user workspaces', 'Expense approvals', 'Exports & integrations']
    }
  ];

  const faqs = [
    { q: 'Can I import old data?', a: 'Yes. Upload CSV files or connect a bank feed to backfill history.' },
    { q: 'Is my data secure?', a: 'We use encryption in transit and at rest, plus strict access policies.' },
    { q: 'Can I switch plans later?', a: 'Any plan can be upgraded or downgraded instantly.' },
    { q: 'Do you support multiple currencies?', a: 'Yes. Set a base currency and track international spending.' }
  ];

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.message) return;
    const subject = encodeURIComponent(`[Expensoo Contact] ${form.name || 'No Name'}`);
    const body = encodeURIComponent(`Name: ${form.name || '—'}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:support@expensoo.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-main">
      <LandingHeader />

      {/* Hero */}
      <section className="relative overflow-hidden hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full border shadow-sm bg-card border-brand-primary">
              <span className="text-xs sm:text-sm font-medium text-brand-primary">Trusted by 50k+ people to manage expenses</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight font-heading">
              <span className="block text-primary">Control every rupee,</span>
              <span className="block gradient-text">build your future</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-secondary">
              Track expenses, set budgets, and get smart insights with a clean, modern dashboard.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
              <Link to="/register" className="btn-primary w-full sm:w-auto text-base sm:text-lg">
                Get Started Free
              </Link>
              <Link to="/login" className="btn-outline w-full sm:w-auto text-base sm:text-lg">
                View Demo
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Money tracked', value: '$2M+' },
                { label: 'Average savings', value: '18%' },
                { label: 'Uptime', value: '99.9%' }
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-accent-light bg-card p-4">
                  <div className="text-2xl font-bold font-heading text-primary">{stat.value}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-subheading">
              Everything to <span className="gradient-text">master your money</span>
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto text-secondary">
              Purpose-built tools that simplify daily finance decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="group p-6 rounded-2xl border bg-card-translucent border-accent-light hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 gradient-bg">
                  <span className="text-white text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary font-subheading">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 lg:py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-subheading">
                Get started in <span className="gradient-text">4 quick steps</span>
              </h2>
              <p className="text-secondary mb-6">From signup to insights in under 10 minutes.</p>
              <div className="space-y-5">
                {steps.map((step) => (
                  <div key={step.n} className="flex items-start">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center font-heading text-xl mr-4 bg-brand-primary-10 border border-brand-primary text-brand-primary">
                      {step.n}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold font-subheading text-primary mb-1">{step.t}</h3>
                      <p className="text-muted">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-accent-light bg-card p-6 shadow-sm">
              <h3 className="text-xl font-semibold font-subheading text-primary mb-3">Weekly insights snapshot</h3>
              <ul className="space-y-3 text-sm text-muted">
                <li>✅ Dining budget used: 62%</li>
                <li>✅ Highest spend day: Saturday</li>
                <li>✅ Savings goal progress: 48%</li>
                <li>✅ Upcoming bills: 3 in next 7 days</li>
              </ul>
              <div className="mt-6">
                <Link to="/register" className="btn-primary w-full text-center">Start tracking today</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-subheading">
              Insights that <span className="gradient-text">drive better choices</span>
            </h2>
            <p className="text-secondary mb-6">Know where your money goes and what to improve next.</p>
            <div className="space-y-4">
              {[
                'Category breakdowns with trends',
                'Real-time budget utilization',
                'Smart alerts for unusual activity',
                'Monthly summary emails'
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-3 h-3 mt-2 rounded-full bg-brand-accent"></div>
                  <p className="text-muted">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-accent-light bg-main p-6 shadow-sm">
            <div className="rounded-xl bg-card p-6 border border-accent-light">
              <h3 className="text-lg font-semibold text-primary mb-4">Top categories this month</h3>
              <div className="space-y-3">
                {[
                  { name: 'Groceries', value: '₹8,420', width: '70%' },
                  { name: 'Transport', value: '₹3,150', width: '45%' },
                  { name: 'Subscriptions', value: '₹1,990', width: '30%' }
                ].map((row) => (
                  <div key={row.name}>
                    <div className="flex justify-between text-sm text-muted mb-2">
                      <span>{row.name}</span>
                      <span>{row.value}</span>
                    </div>
                    <div className="h-2 rounded-full bg-brand-primary-10">
                      <div className="h-2 rounded-full gradient-bg" style={{ width: row.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 lg:py-24 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-subheading">
              Plans for every <span className="gradient-text">stage</span>
            </h2>
            <p className="text-lg text-secondary">Start free and upgrade when you need more power.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-6 ${plan.featured ? 'gradient-bg text-white shadow-lg' : 'bg-card border-accent-light'}`}
              >
                <h3 className={`text-xl font-semibold font-subheading ${plan.featured ? 'text-white' : 'text-primary'}`}>{plan.name}</h3>
                <div className={`text-3xl font-bold font-heading mt-3 ${plan.featured ? 'text-white' : 'text-primary'}`}>{plan.price}</div>
                <p className={`mt-2 ${plan.featured ? 'text-white/90' : 'text-muted'}`}>{plan.desc}</p>
                <ul className={`mt-6 space-y-2 text-sm ${plan.featured ? 'text-white/90' : 'text-muted'}`}>
                  {plan.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <button className={`mt-6 w-full ${plan.featured ? 'bg-white text-primary' : 'btn-outline'}`}>
                  Choose plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-subheading">
              Frequently <span className="gradient-text">asked</span>
            </h2>
            <p className="text-secondary">Quick answers to common questions.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl border border-accent-light bg-card-translucent p-5">
                <h3 className="text-lg font-semibold text-primary mb-2">{item.q}</h3>
                <p className="text-muted">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-20 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-subheading">
              Let’s <span className="gradient-text">talk</span>
            </h2>
            <p className="text-lg text-secondary">We reply within 24 hours on business days.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="p-6 bg-card rounded-2xl border border-accent-light">
              <h3 className="text-xl font-semibold font-subheading text-primary mb-4">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-subtle mb-1">Name</label>
                  <input name="name" value={form.name} onChange={handleChange} className="w-full rounded-lg border border-accent-light bg-main p-3 text-primary" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-subtle mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg border border-accent-light bg-main p-3 text-primary" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-subtle mb-1">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full rounded-lg border border-accent-light bg-main p-3 text-primary" placeholder="How can we help?" />
                </div>
                <button type="submit" className="btn-primary w-full">Send message</button>
              </form>
            </div>
            <div className="p-6 bg-card rounded-2xl border border-accent-light flex flex-col gap-6">
              <div className="rounded-xl border border-accent-light bg-card-translucent p-5">
                <div className="text-2xl mb-2">📧</div>
                <h3 className="text-base font-semibold font-subheading text-primary mb-1">Email</h3>
                <a href="mailto:support@expensoo.com" className="text-brand-primary font-medium">support@expensoo.com</a>
                <p className="text-muted text-sm mt-1">The fastest way to reach us.</p>
              </div>
              <div className="rounded-xl border border-accent-light bg-card-translucent p-5">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="text-base font-semibold font-subheading text-primary mb-1">Office</h3>
                <div className="text-brand-primary font-medium">Patna, Bihar, India</div>
                <p className="text-muted text-sm mt-1">Adivika Digital Pvt. Ltd.</p>
              </div>
              <div className="rounded-xl border border-accent-light bg-card-translucent p-5">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="text-base font-semibold font-subheading text-primary mb-1">Live chat</h3>
                <p className="text-muted text-sm">Available Mon–Fri, 10am–6pm IST.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}

export default LandingPage;
