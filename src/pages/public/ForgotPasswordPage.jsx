import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

import logo from "../../assets/logo_1.png";
import LandingFooter from "./LandingFooter";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  /* ======================== SUCCESS SCREEN ========================== */

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden relative">

        {/* Decorative Background */}

        <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-32 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl" />

        {/* ========================== HEADER ============================= */}

        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-sm">

          <div className="max-w-7xl mx-auto h-16 px-5 flex items-center justify-between">

            <Link
              to="/"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">
                Back
              </span>
            </Link>

            <Link
              to="/"
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Expensoo"
                className="w-10 h-10 object-contain"
              />

              <span className="text-2xl font-bold gradient-text"> Expensoo </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle size={16} className="text-green-500" /> Secure Recovery
            </div>
          </div>
        </header>

        {/* ======================= MAIN ================================ */}

        <main className="flex-1 flex items-center justify-center px-5 py-12 relative z-10">

          <div className="w-full max-w-lg">

            <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-8 md:p-10">

              {/* Success Icon */}

              <div className="flex justify-center mb-8">

                <div className="relative">

                  <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>

                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-xl">

                    <CheckCircle className="w-12 h-12 text-white" />

                  </div>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-4">

                Check Mail! 📧

              </h1>

              {/* Subtitle */}

              <p className="text-center text-slate-600 mb-2">

                We've sent a password reset link to:

              </p>

              {/* Email Box */}

              <div className="bg-slate-100 border border-slate-200 rounded-xl py-3 px-4 text-center font-semibold text-slate-800 mb-8">

                {email}

              </div>

              {/* Action Buttons */}

              <div className="space-y-4">

                <Link
                  to="/login"
                  className="btn btn-primary w-full py-3 rounded-xl text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Sign In
                </Link>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="w-full py-3 rounded-xl border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 transition-all duration-300 font-medium"
                >
                  Try different email
                </button>

              </div>

              {/* Help Card */}

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-5">

                <div className="flex items-start gap-3">

                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">

                    <Mail className="w-5 h-5 text-blue-600" />

                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-800 mb-1">

                      Didn't receive the email?

                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">

                      Check your spam folder or wait a few minutes and try
                      again.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <LandingFooter />
      </div>
    );
  }

  /* ================= FORGOT PASSWORD FORM ========================= */

  return (

    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden relative">

      {/* Decorative Background */}

      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-blue-300/20 blur-3xl"></div>
      {/* 
      <div className="absolute top-40 -right-32 w-80 h-80 rounded-full bg-purple-300/20 blur-3xl"></div> */}

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-300/20 blur-3xl"></div>

      {/* ==================== HEADER =========================== */}

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-sm">

        <div className="max-w-7xl mx-auto h-16 px-5 flex items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
          >
            <ArrowLeft size={20} />

            <span className="font-medium">

              Back

            </span>

          </Link>

          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <img
              src={logo}
              alt="Expensoo Logo"
              className="w-10 h-10 object-contain"
            />

            <span className="text-2xl font-bold gradient-text">

              Expensoo

            </span>

          </Link>

          <div className="hidden md:block text-sm text-slate-500">

            Secure Password Recovery

          </div>

        </div>

      </header>

      {/* ==================== MAIN =============================== */}

      <main className="flex-1 flex items-center justify-center px-5 py-12 relative z-10">

        <div className="w-full max-w-lg">

          <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-8 md:p-10">

            {/* Logo */}

            <div className="text-center mb-8">

              <Link
                to="/"
                className="inline-flex flex-col items-center"
              >

                <img
                  src={logo}
                  alt="Expensoo Logo"
                  className="w-20 h-20 object-contain mb-3 drop-shadow-lg"
                />

                <span className="text-3xl font-bold gradient-text">

                  Expensoo

                </span>

              </Link>

              <h1 className="text-3xl font-bold text-slate-800 mt-6 mb-3">

                Reset Your Password 🔐

              </h1>

              <p className="text-slate-600 leading-relaxed">

                Enter your email address and we'll send you a secure link to
                reset your password.

              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div>

                <label
                  htmlFor="email"
                  className="form-label"
                >

                  <Mail className="inline w-4 h-4 mr-1" />

                  Email Address

                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your registered email"
                  autoComplete="email"
                  required
                />

                <p className="mt-2 text-xs text-slate-500">

                  We'll send reset instructions to this email.

                </p>

              </div>

              <button
                type="submit"
                className="btn btn-primary w-full py-3 rounded-xl text-base font-semibold shadow-md hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">

                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373
                        0 0 5.373 0 12h4zm2
                        5.291A7.962 7.962
                        0 014 12H0c0
                        3.042 1.135 5.824
                        3 7.938l3-2.647z"
                      />

                    </svg>

                    Sending Reset Link...

                  </span>
                ) : (
                  <span className="flex items-center justify-center">

                    <Mail className="w-5 h-5 mr-2" />

                    Send Reset Link

                  </span>
                )}
              </button>

            </form>

            {/* Divider */}

            <div className="relative my-8">

              <div className="absolute inset-0 flex items-center">

                <div className="w-full border-t border-slate-200"></div>

              </div>

              <div className="relative flex justify-center">

                <span className="bg-white px-4 text-xs uppercase tracking-wider text-slate-400">

                  Quick Links

                </span>

              </div>

            </div>

            {/* Links */}

            <div className="space-y-4 text-center">

              <p className="text-slate-600 text-sm">

                Remember your password?{" "}

                <Link
                  to="/login"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Sign in here
                </Link>

              </p>

              <p className="text-slate-600 text-sm">

                Don't have an account?{" "}

                <Link
                  to="/register"
                  className="font-semibold text-purple-600 hover:text-purple-700"
                >
                  Create one now
                </Link>

              </p>

            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-blue-100 p-5">
              <h3 className="text-center font-semibold text-slate-800 mb-4"> Your Security Matters </h3>

              <div className="grid grid-cols-3 gap-4 text-center">

                <div>
                  <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-xs font-medium text-slate-600"> Secure Reset </p>
                </div>

                <div>
                  <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"> 🔒 </div>
                  <p className="text-xs font-medium text-slate-600"> Encrypted </p>
                </div>

                <div>
                  <div className="mx-auto mb-2 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center"> ⚡ </div>
                  <p className="text-xs font-medium text-slate-600"> Instant </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <LandingFooter />


      <style>{`

      .gradient-text {
        background: linear-gradient(
          135deg,
          #2563eb,
          #7c3aed,
          #0ea5e9
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 300% 300%;
        animation: gradientMove 8s ease infinite;
      }

      .form-label {
        display: block;
        margin-bottom: .6rem;
        font-size: .95rem;
        font-weight: 600;
        color: #334155;
      }

      .form-input {
        width: 100%;
        padding: .95rem 1rem;
        border-radius: 14px;
        border: 1px solid #dbe4f0;
        background: rgba(255,255,255,.85);
        backdrop-filter: blur(8px);
        transition: all .25s ease;
        font-size: .95rem;
      }

      .form-input::placeholder{
        color:#94a3b8;
      }

      .form-input:hover{
        border-color:#93c5fd;
      }

      .form-input:focus{
        outline:none;
        border-color:#3b82f6;
        box-shadow:
          0 0 0 4px rgba(59,130,246,.12);
        background:white;
      }

      .btn{
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        text-decoration:none;
      }

      .btn-primary{
        background:
          linear-gradient(
            135deg,
            #2563eb,
            #4f46e5,
            #7c3aed
          );
        color:#fff;
        border:none;
        transition:all .3s ease;
      }

      .btn-primary:hover{
        transform:translateY(-2px);
        box-shadow:
          0 15px 35px rgba(37,99,235,.25);
      }

      .btn-primary:active{
        transform:translateY(0);
      }

      .btn-primary:disabled{
        opacity:.75;
        cursor:not-allowed;
        transform:none;
        box-shadow:none;
      }

      header{
        animation:fadeDown .7s ease;
      }

      main{
        animation:fadeUp .8s ease;
      }

      @keyframes gradientMove{

        0%{
          background-position:0% 50%;
        }

        50%{
          background-position:100% 50%;
        }

        100%{
          background-position:0% 50%;
        }

      }

      @keyframes fadeDown{

        from{
          opacity:0;
          transform:translateY(-25px);
        }

        to{
          opacity:1;
          transform:translateY(0);
        }

      }

      @keyframes fadeUp{

        from{
          opacity:0;
          transform:translateY(30px);
        }

        to{
          opacity:1;
          transform:translateY(0);
        }

      }

      .animate-spin{
        animation:spin 1s linear infinite;
      }

      @keyframes spin{

        to{
          transform:rotate(360deg);
        }

      }

      @media (max-width:768px){

        header .gradient-text{
          font-size:1.45rem;
        }

        main{
          padding:2rem 1rem;
        }

        .form-input{
          padding:.85rem .95rem;
        }

        .btn-primary{
          padding:.9rem;
        }

      }

      @media (max-width:640px){

        header{
          height:auto;
        }

        .form-label{
          font-size:.9rem;
        }

        .form-input{
          font-size:16px;
        }

        .btn-primary{
          font-size:.95rem;
        }

        h1{
          line-height:1.25;
        }

      }

      @media (min-width:1024px){

        main{
          padding-top:4rem;
          padding-bottom:4rem;
        }

      }
        `}</style>
    </div>
  );
}

export default ForgotPasswordPage;