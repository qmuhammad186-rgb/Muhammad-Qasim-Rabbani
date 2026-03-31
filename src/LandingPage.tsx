import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  MessageSquare, 
  Star,
  Menu,
  X,
  Play
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-secondary">ConvertFlow</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Features</a>
            <a href="#solutions" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Solutions</a>
            <a href="#testimonials" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors">Pricing</a>
            <button className="bg-brand-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-1"
        >
          <a href="#features" className="block px-3 py-2 text-base font-medium text-slate-600">Features</a>
          <a href="#solutions" className="block px-3 py-2 text-base font-medium text-slate-600">Solutions</a>
          <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-slate-600">Testimonials</a>
          <a href="#pricing" className="block px-3 py-2 text-base font-medium text-slate-600">Pricing</a>
          <div className="pt-4">
            <button className="w-full bg-brand-primary text-white px-5 py-3 rounded-xl text-base font-semibold">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              New: AI-Powered Conversion Optimization
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-secondary tracking-tight leading-[1.1] mb-8">
              Turn Your Traffic Into <span className="text-brand-primary">Loyal Customers</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              The all-in-one platform to optimize your conversion funnel, track user behavior, and scale your revenue with data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="w-full sm:w-auto bg-brand-primary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Social Proof / Logos */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="pt-10 border-t border-slate-100"
          >
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by 500+ companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              <div className="text-2xl font-black text-slate-900">ACME</div>
              <div className="text-2xl font-black text-slate-900">GLOBEX</div>
              <div className="text-2xl font-black text-slate-900">SOYLENT</div>
              <div className="text-2xl font-black text-slate-900">INITECH</div>
              <div className="text-2xl font-black text-slate-900">UMBRELLA</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Problems = () => {
  const problems = [
    {
      title: "High Bounce Rates",
      desc: "Visitors leave your site within seconds without taking any action.",
      icon: <Zap className="w-6 h-6 text-red-500" />
    },
    {
      title: "Low Conversion",
      desc: "You have traffic, but your checkout or signup forms are ghost towns.",
      icon: <BarChart3 className="w-6 h-6 text-red-500" />
    },
    {
      title: "Wasted Ad Spend",
      desc: "Paying for clicks that don't convert into actual revenue.",
      icon: <Users className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-secondary mb-4">Stop Losing Potential Revenue</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Most websites lose 97% of their traffic. We help you capture the missing 3% and more.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-secondary mb-3">{p.title}</h3>
              <p className="text-slate-600 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Real-time Analytics",
      desc: "Watch how users interact with your site as it happens.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "A/B Testing",
      desc: "Easily test headlines, buttons, and layouts without code.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Heatmaps",
      desc: "Visualize where users click, move, and scroll on your pages.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Secure Data",
      desc: "Enterprise-grade security for all your customer information.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Smart Forms",
      desc: "Optimized forms that reduce friction and increase signups.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      title: "Expert Support",
      desc: "24/7 access to our conversion optimization specialists.",
      icon: <CheckCircle2 className="w-6 h-6" />
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-brand-secondary mb-6">Built for Modern Growth Teams</h2>
            <p className="text-lg text-slate-600 mb-10">Everything you need to understand your users and optimize their journey from first click to final purchase.</p>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 text-brand-primary rounded-lg flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-secondary mb-1">{f.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/dashboard/800/600" 
                alt="Dashboard Preview" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-brand-secondary text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-indigo-500 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-slate-400">Join thousands of happy users who scaled their business with us.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="flex gap-1 text-brand-accent mb-6">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-lg mb-8 italic text-slate-300">
                "ConvertFlow changed the way we look at our marketing data. Our conversion rate jumped by 45% in just the first month of using the platform."
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={`https://i.pravatar.cc/150?u=${i}`} 
                  alt="User" 
                  className="w-12 h-12 rounded-full border-2 border-blue-500"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold">Sarah Jenkins</h4>
                  <p className="text-sm text-slate-400">Marketing Director, TechCorp</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "49",
      features: ["Up to 10k visitors", "Basic Analytics", "3 A/B Tests", "Email Support"],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Pro",
      price: "99",
      features: ["Up to 50k visitors", "Advanced Heatmaps", "Unlimited A/B Tests", "Priority Support", "Custom Domains"],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Enterprise",
      price: "249",
      features: ["Unlimited visitors", "Full Data Export", "Dedicated Manager", "SLA Guarantee", "Custom Integrations"],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-secondary mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-600">No hidden fees. Scale as you grow.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`p-8 rounded-3xl border ${plan.popular ? 'border-brand-primary shadow-2xl scale-105 bg-white relative z-10' : 'border-slate-200 bg-slate-50'}`}
            >
              {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-brand-secondary mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-black text-brand-secondary">${plan.price}</span>
                <span className="text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-brand-primary text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20' : 'bg-white text-brand-secondary border border-slate-200 hover:bg-slate-100'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How long does it take to see results?", a: "Most customers see a significant improvement in their conversion metrics within the first 14-30 days of implementation." },
    { q: "Can I integrate with my existing tools?", a: "Yes, we integrate seamlessly with Shopify, WordPress, Webflow, and custom builds via our robust API." },
    { q: "Is there a free trial available?", a: "Absolutely! We offer a 14-day free trial on all our plans so you can experience the power of ConvertFlow risk-free." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-brand-secondary mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-brand-secondary mb-2">{faq.q}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/40">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Skyrocket Your Conversions?</h2>
            <p className="text-xl text-blue-100 mb-12">Join 5,000+ businesses already growing with ConvertFlow. No credit card required to start.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-white text-brand-primary px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all shadow-xl">
                Get Started for Free
              </button>
              <button className="w-full sm:w-auto bg-transparent text-white border border-white/30 px-10 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all">
                Book a Demo
              </button>
            </div>
            <p className="mt-8 text-sm text-blue-200">Free 14-day trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Zap className="text-white w-5 h-5 fill-current" />
              </div>
              <span className="text-xl font-bold tracking-tight text-brand-secondary">ConvertFlow</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering growth teams with the data and tools they need to build high-converting digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-secondary mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-secondary mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-secondary mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© 2026 ConvertFlow Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Users className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><MessageSquare className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-brand-primary transition-colors"><Shield className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
