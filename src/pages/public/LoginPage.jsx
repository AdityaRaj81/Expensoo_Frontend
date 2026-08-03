import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Eye, EyeOff, Mail, Lock, CheckCircle, ArrowLeft, Wallet, BarChart3, ShieldCheck, TrendingUp } from "lucide-react";
import { loginUser, clearError } from "../../store/authSlice";
import logo from "../../assets/logo_1.png";
import LandingFooter from "./LandingFooter";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  const onSubmit = async (data) => {
    try {
      const response = await dispatch(loginUser(data)).unwrap();
      toast.success("Welcome back! 👋");

      if (response.user?.role === "ADMIN") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/app", { replace: true });
      }
    } catch (err) {
      toast.error(typeof err === "string" ? err : "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100">

      {/* =========== HEADER ============ */}

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

      {/* =========================== BODY ============================ */}

      <main className="flex-1 flex items-center justify-center px-5 py-10">

        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-12 items-center">

          {/* ============================= LEFT SIDE ============================== */}

          <div className="order-2 lg:order-1 flex justify-center">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-white/40 p-8">

              {/* Logo */}

              <div className="text-center">

                <img
                  src={logo}
                  alt="Expensoo"
                  className="w-20 h-20 mx-auto mb-4"
                />

                <h1 className="text-3xl font-bold text-slate-900">
                  Welcome Back 👋
                </h1>

                <p className="mt-2 text-gray-500">
                  Manage your expenses with confidence.
                </p>

              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-8 space-y-6"
              >

                {/* EMAIL */}

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

                {/* PASSWORD */}

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
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className={`w-full rounded-xl border ${errors.password
                        ? "border-red-400"
                        : "border-gray-300"
                        } pl-12 pr-12 py-3 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition`}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message:
                            "Password must be at least 6 characters",
                        },
                      })}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
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
                </div>

                {/* ========================== REMEMBER & FORGOT =========================== */}

                <div className="flex items-center justify-between text-sm">

                  <label className="flex items-center gap-2 cursor-pointer">

                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe((v) => !v)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />

                    <span className="text-gray-600">
                      Remember me
                    </span>

                  </label>

                  <Link
                    to="/forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-700 transition"
                  >
                    Forgot Password?
                  </Link>

                </div>

                {/* ========================== LOGIN BUTTON =========================== */}

                <button
                  type="submit"
                  disabled={loading}
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

                      Signing In...

                    </span>

                  ) : (

                    <span className="flex items-center justify-center">

                      <CheckCircle
                        size={20}
                        className="mr-2"
                      />

                      Sign In

                    </span>

                  )}

                </button>

                {/* ========================== REGISTER =========================== */}

                <div className="text-center">

                  <p className="text-gray-500">

                    Don't have an account?

                    <Link
                      to="/register"
                      className="ml-2 font-semibold text-blue-600 hover:text-indigo-600"
                    >
                      Create Account
                    </Link>

                  </p>

                </div>

              </form>

            </div>

          </div>

          {/* =========================== RIGHT SIDE ============================ */}

          <div className="hidden lg:flex order-1 lg:order-2">

            <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 p-12 text-white">

              {/* Background Blur */}

              <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

              <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-400/20 blur-3xl"></div>

              <div className="relative z-10 h-full flex flex-col justify-center">

                <h2 className="mt-6 text-4xl font-bold leading-tight">

                  Optimize your finances

                </h2>

                <p className="mt-6 max-w-lg text-blue-100 leading-7">

                  Track every income, organize expenses, analyze reports,
                  and build better financial habits with a secure,
                  modern and responsive expense management platform.

                </p>

                {/* Feature Cards */}

                <div className="grid grid-cols-3 gap-5 mt-10">

                  <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">

                    <Wallet className="mb-4 text-cyan-300" />

                    <h3 className="font-semibold">

                      Income Tracking

                    </h3>

                    <p className="text-sm text-blue-100 mt-2">

                      Organize all income sources in one place.

                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">

                    <BarChart3 className="mb-4 text-green-300" />

                    <h3 className="font-semibold">

                      Reports

                    </h3>

                    <p className="text-sm text-blue-100 mt-2">

                      Monthly analytics with interactive charts.

                    </p>

                  </div>

                  <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5">

                    <TrendingUp className="mb-4 text-pink-300" />

                    <h3 className="font-semibold">

                      Financial Growth

                    </h3>

                    <p className="text-sm text-blue-100 mt-2">

                      Understand your spending and improve savings.

                    </p>

                  </div>

                </div>

                {/* Stats */}

                <div className="grid grid-cols-3 gap-8 mt-14">

                  <div>

                    <h3 className="text-3xl font-bold">

                      100%

                    </h3>

                    <p className="text-blue-100 text-sm">

                      Secure Login

                    </p>

                  </div>

                  <div>

                    <h3 className="text-3xl font-bold">

                      24×7

                    </h3>

                    <p className="text-blue-100 text-sm">

                      Access

                    </p>

                  </div>

                  <div>

                    <h3 className="text-3xl font-bold">

                      Fast

                    </h3>

                    <p className="text-blue-100 text-sm">

                      Performance

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

      {/* =========================== FOOTER ============================ */}

      <LandingFooter />

      {/* =========================== PAGE STYLES ============================ */}

      <style>{`

      html{
        scroll-behavior:smooth;
      }

      .gradient-text{
        background:linear-gradient(
          135deg,
          #2563eb 0%,
          #7c3aed 50%,
          #2563eb 100%
        );
        background-size:200% 200%;
        animation:gradientMove 5s ease infinite;
        -webkit-background-clip:text;
        -webkit-text-fill-color:transparent;
        background-clip:text;
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

      @keyframes floatCard{

        0%{
          transform:translateY(0px);
        }

        50%{
          transform:translateY(-8px);
        }

        100%{
          transform:translateY(0px);
        }

      }

      @keyframes fadeUp{

        from{
          opacity:0;
          transform:translateY(25px);
        }

        to{
          opacity:1;
          transform:translateY(0px);
        }

      }

      @keyframes glow{

        0%{
          box-shadow:0 0 0 rgba(59,130,246,.2);
        }

        50%{
          box-shadow:0 18px 50px rgba(59,130,246,.18);
        }

        100%{
          box-shadow:0 0 0 rgba(59,130,246,.2);
        }

      }

      form{
        animation:fadeUp .6s ease;
      }

      form input{

        transition:all .3s ease;

      }

      form input:focus{

        transform:translateY(-1px);

      }

      .shadow-2xl{

        animation:floatCard 6s ease-in-out infinite;

      }

      .group:hover{

        transform:translateY(-2px);

      }

      .group{

        transition:all .3s ease;

      }

      .rounded-3xl{

        animation:glow 6s ease infinite;

      }

      @media (max-width:1024px){

        main{

          padding-top:2rem;
          padding-bottom:2rem;

        }

      }

      @media (max-width:768px){

        header{

          height:64px;

        }

        .shadow-2xl{

          border-radius:24px;

        }

      }

      @media (max-width:640px){

        main{

          align-items:flex-start;

        }

        .shadow-2xl{

          margin-top:10px;
          padding:24px;

        }

        h1{

          font-size:2rem;

        }

      }

    `}</style>

    </div>

  );
}

export default LoginPage;