import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  CheckCircle,
  ArrowLeft,
  Wallet,
  ShieldCheck,
  TrendingUp,
  BarChart3,
} from "lucide-react";

import {
  registerUser,
  clearError,
} from "../../store/authSlice";

import logo from "../../assets/logo_1.png";
import LandingFooter from "./LandingFooter";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const { loading } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const watchPassword = watch("password", "");

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const onSubmit = async (data) => {
    try {
      await dispatch(
        registerUser({
          name: data.fullName,
          email: data.email,
          password: data.password,
        })
      ).unwrap();

      toast.success("Welcome aboard! 🎉 Your account has been created.");
      navigate("/app", { replace: true });
    } catch (error) {
      toast.error(
        typeof error === "string"
          ? error
          : error?.message || "Unable to create account."
      );
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Home</span>
            </Link>

            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Expensoo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold gradient-text">
                Expensoo
              </span>
            </Link>

            <div className="hidden md:block text-sm text-gray-500">
              Smart Expense Tracker
            </div>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-5 py-10">
          <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:flex">
              <div className="relative w-full rounded-[32px] overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 p-12 text-white">
                <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-400/20 blur-3xl" />

                <div className="relative z-10 flex flex-col justify-center h-full">
                  <span className="inline-flex w-fit rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
                    Welcome to Expensoo
                  </span>

                  <h2 className="mt-6 text-5xl font-bold leading-tight">
                    Start Your
                    <br />
                    Financial Journey
                  </h2>

                  <p className="mt-6 max-w-lg text-blue-100 leading-7">
                    Create your account today and begin tracking every income,
                    expense and financial goal with confidence.
                  </p>

                  <div className="grid grid-cols-2 gap-5 mt-10">
                    <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">
                      <Wallet className="mb-4 text-cyan-300" />
                      <h3 className="font-semibold">Track Income</h3>
                      <p className="text-sm text-blue-100 mt-2">
                        Organize every earning.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">
                      <BarChart3 className="mb-4 text-green-300" />
                      <h3 className="font-semibold">Smart Reports</h3>
                      <p className="text-sm text-blue-100 mt-2">
                        Beautiful monthly analytics.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">
                      <ShieldCheck className="mb-4 text-yellow-300" />
                      <h3 className="font-semibold">Secure</h3>
                      <p className="text-sm text-blue-100 mt-2">
                        JWT Authentication.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">
                      <TrendingUp className="mb-4 text-pink-300" />
                      <h3 className="font-semibold">Grow Savings</h3>
                      <p className="text-sm text-blue-100 mt-2">
                        Build better habits.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 border-t border-white/20 pt-8">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          24×7
                        </h3>
                        <p className="mt-2 text-sm text-blue-100">
                          Secure Access
                        </p>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          100%
                        </h3>
                        <p className="mt-2 text-sm text-blue-100">
                          Data Privacy
                        </p>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          Fast
                        </h3>
                        <p className="mt-2 text-sm text-blue-100">
                          Performance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-white/40 p-8">
                <div className="text-center">
                  <img
                    src={logo}
                    alt="Expensoo"
                    className="w-20 h-20 mx-auto mb-4"
                  />

                  <h1 className="text-2xl font-bold text-slate-700">
                    Join Expensoo ✨
                  </h1>

                  <p className="mt-2 text-sm text-gray-500">
                    Start tracking your expenses smarter.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-8 space-y-6"
                >
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block mb-2 font-medium text-gray-700"
                    >
                      Full Name
                    </label>

                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="Enter your full name"
                        className={`w-full rounded-xl border ${errors.fullName
                            ? "border-red-400"
                            : "border-gray-300"
                          } pl-12 pr-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition`}
                        {...register("fullName", {
                          required: "Full name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                          },
                        })}
                      />
                    </div>

                    {errors.fullName && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 font-medium text-gray-700"
                    >
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        className={`w-full rounded-xl border ${errors.email
                            ? "border-red-400"
                            : "border-gray-300"
                          } pl-12 pr-4 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition`}
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                          },
                          setValueAs: (value) =>
                            value.toLowerCase().trim(),
                        })}
                      />
                    </div>

                    {errors.email && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 font-medium text-gray-700"
                    >
                      Password
                    </label>

                    <div className="relative">
                      <Lock
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="Create a strong password"
                        className={`w-full rounded-xl border ${errors.password
                            ? "border-red-400"
                            : "border-gray-300"
                          } pl-12 pr-12 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition`}
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                          },
                          pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                            message:
                              "Password must contain uppercase, lowercase and number",
                          },
                        })}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((value) => !value)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>

                    {errors.password && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.password.message}
                      </p>
                    )}

                    {watchPassword && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="text-gray-500">
                            Password Strength
                          </span>

                          <span
                            className={`font-semibold ${watchPassword.length >= 12 &&
                                /[a-z]/.test(watchPassword) &&
                                /[A-Z]/.test(watchPassword) &&
                                /\d/.test(watchPassword)
                                ? "text-green-600"
                                : watchPassword.length >= 8
                                  ? "text-yellow-600"
                                  : "text-red-500"
                              }`}
                          >
                            {watchPassword.length >= 12 &&
                              /[a-z]/.test(watchPassword) &&
                              /[A-Z]/.test(watchPassword) &&
                              /\d/.test(watchPassword)
                              ? "Strong"
                              : watchPassword.length >= 8
                                ? "Medium"
                                : "Weak"}
                          </span>
                        </div>

                        <div className="grid grid-cols-4 gap-2">
                          <div
                            className={`h-2 rounded-full ${watchPassword.length >= 8
                                ? "bg-green-500"
                                : "bg-gray-200"
                              }`}
                          />

                          <div
                            className={`h-2 rounded-full ${/[a-z]/.test(watchPassword)
                                ? "bg-green-500"
                                : "bg-gray-200"
                              }`}
                          />

                          <div
                            className={`h-2 rounded-full ${/[A-Z]/.test(watchPassword)
                                ? "bg-green-500"
                                : "bg-gray-200"
                              }`}
                          />

                          <div
                            className={`h-2 rounded-full ${/\d/.test(watchPassword)
                                ? "bg-green-500"
                                : "bg-gray-200"
                              }`}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="block mb-2 font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>

                    <div className="relative">
                      <Lock
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      />

                      <input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        placeholder="Confirm your password"
                        className={`w-full rounded-xl border ${errors.confirmPassword
                            ? "border-red-400"
                            : "border-gray-300"
                          } pl-12 pr-12 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition`}
                        {...register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (value) =>
                            value === watchPassword ||
                            "Passwords do not match",
                        })}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword((value) => !value)
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
                      >
                        {showConfirmPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>

                    {errors.confirmPassword && (
                      <p className="mt-2 text-sm text-red-500">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(event) =>
                          setAcceptTerms(event.target.checked)
                        }
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />

                      <span className="text-sm text-gray-600 leading-6">
                        I agree to the{" "}
                        <Link
                          to="/terms"
                          className="font-semibold text-blue-600 hover:text-blue-700"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/privacy"
                          className="font-semibold text-blue-600 hover:text-blue-700"
                        >
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !acceptTerms}
                    className="group w-full rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-3.5 text-white font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-3"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="opacity-20"
                          />
                          <path
                            fill="currentColor"
                            className="opacity-80"
                            d="M4 12a8 8 0 018-8V0C5.3 0 0 5.3 0 12h4z"
                          />
                        </svg>
                        Creating Account...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <CheckCircle size={20} className="mr-2" />
                        Create Free Account
                      </span>
                    )}
                  </button>

                  <div className="text-center">
                    <p className="text-gray-500">
                      Already have an account?
                      <Link
                        to="/login"
                        className="ml-2 font-semibold text-blue-600 hover:text-indigo-600"
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>

        <LandingFooter />
      </div>

      <style>{`
        html{scroll-behavior:smooth}
        .gradient-text{
          background:linear-gradient(135deg,#2563eb 0%,#7c3aed 50%,#2563eb 100%);
          background-size:200% 200%;
          animation:gradientMove 5s ease infinite;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text
        }
        @keyframes gradientMove{
          0%{background-position:0% 50%}
          50%{background-position:100% 50%}
          100%{background-position:0% 50%}
        }
        @keyframes floatCard{
          0%{transform:translateY(0)}
          50%{transform:translateY(-8px)}
          100%{transform:translateY(0)}
        }
        @keyframes fadeUp{
          from{opacity:0;transform:translateY(25px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes glow{
          0%{box-shadow:0 0 0 rgba(59,130,246,.15)}
          50%{box-shadow:0 18px 50px rgba(59,130,246,.18)}
          100%{box-shadow:0 0 0 rgba(59,130,246,.15)}
        }
        form{animation:fadeUp .6s ease}
        form input{transition:all .3s ease}
        form input:focus{transform:translateY(-1px)}
        .shadow-2xl{animation:floatCard 6s ease-in-out infinite}
        .rounded-3xl{animation:glow 6s ease infinite}
        .group{transition:all .3s ease}
        .group:hover{transform:translateY(-2px)}
        @media(max-width:1024px){
          main{padding-top:2rem;padding-bottom:2rem}
        }
        @media(max-width:768px){
          header{height:64px}
        }
        @media(max-width:640px){
          main{align-items:flex-start}
          .shadow-2xl{margin-top:10px;padding:24px;border-radius:24px}
          h1{font-size:2rem}
        }
      `}</style>
    </>
  );
}

export default RegisterPage;