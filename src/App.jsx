import { useEffect, useState } from "react";
import {
  Moon,
  Sun,
  ChevronDown,
  ArrowRight,
  Wallet,
  BriefcaseBusiness,
} from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () =>{
    if(darkMode){
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
    else{
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
    };

  return (
    <div className="min-h-screen bg-[#f7f7f8] dark:bg-[#0f172a] transition-all duration-300">
      {/* NAVBAR */}

      <div className="max-w-[1250px] mx-auto px-8">
        <nav className="h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#5b57ff] flex items-center justify-center text-white font-bold">
              )))
            </div>

            <h1 className="text-3xl font-bold text-black dark:text-white">
              Scappa.
            </h1>
          </div>

          <div className="hidden lg:flex items-center gap-12 text-sm font-medium text-gray-700 dark:text-gray-300">
            <a href="#">About</a>

            <div className="flex items-center gap-1 cursor-pointer">
              Services
              <ChevronDown size={16} />
            </div>

            <a href="#">Blog</a>
            <a href="#">Resources</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-11 h-11 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center"
            >
              {darkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} />
              )}
            </button>

            <button className="hidden md:block px-7 py-3 bg-white rounded-full font-medium shadow-sm">
              Sign Up
            </button>

            <button className="px-7 py-3 rounded-full bg-[#5b57ff] text-white font-medium">
              Login
            </button>
          </div>
        </nav>

        {/* HERO */}

        <section className="grid lg:grid-cols-2 gap-20 items-center pt-10 pb-20">
          {/* LEFT */}

          <div>
            <h1 className="text-[70px] leading-[78px] font-bold text-[#05052f] dark:text-white">
              {/* <h1 className= "text-[70px] leading-[78px] font-bold text-[#05052f] dark:text-red"> */}
              Bank Smarter.
              <br />
              Live Better.
            </h1>

            <p className="mt-8 text-[22px] leading-10 text-gray-500 max-w-xl">
              Manage your finances effortlessly with our advanced banking
              solutions. Safe, fast, and designed for your everyday needs.
            </p>

            <div className="flex items-center gap-5 mt-12">
              <button className="px-10 py-5 rounded-full bg-[#5b57ff] text-white font-medium text-lg hover:scale-105 transition">
                Get Started Today
              </button>

              <button className="px-10 py-5 rounded-full bg-white text-lg font-medium shadow-sm flex items-center gap-2">
                Learn More
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex gap-12 mt-16">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ecebff] flex items-center justify-center">
                  <Wallet
                    size={20}
                    className="text-[#5b57ff]"
                  />
                </div>

                <div>
                  <h4 className="font-semibold dark:text-white">
                    Personalized financial
                  </h4>

                  <p className="text-sm text-gray-500">
                    Analyzes your goals
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ecebff] flex items-center justify-center">
                  <BriefcaseBusiness
                    size={20}
                    className="text-[#5b57ff]"
                  />
                </div>

                <div>
                  <h4 className="font-semibold dark:text-white">
                    Investment tools
                  </h4>

                  <p className="text-sm text-gray-500">
                    Managing finances straightforward.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-[1fr_0.9fr] gap-5">
            {/* LEFT COLUMN */}

            <div className="space-y-5">
              {/* BUILDING */}

              <div
                 className="relative overflow-hidden h-[320px]"
                 style={{
                 borderTopLeftRadius: "40px",
                }}
             >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute top-5 right-5 w-12 h-12 bg-[#5b57ff] rounded-xl flex items-center justify-center text-white">
                  )))
                </div>

                <div className="absolute bottom-5 left-5 bg-white rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                  <img src="https://flagcdn.com/w40/us.png" alt="USA Flag"
                    className="w-7 h-5 rounded-sm object-cover"
                  />

                  <div>
                    <p className="text-xs text-gray-400 leading-none">
                      Received
                    </p>

                    <h4 className="font-bold text-[20px] leading-tight mt-1">
                      $150K USD
                    </h4>
                  </div>
                </div>
              </div>

              {/* MOBILE */}

              <div className="overflow-hidden h-[260px]"
                 style={{
                 clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 80%)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}

            <div className="space-y-5">
              {/* PERSON */}

            <div className="relative overflow-hidden h-[460px] bg-[#4f46e5]"
                  style={{
                  clipPath:
                  "polygon(0 0, 80% 0, 100% 10%, 100% 100%, 0 100%)",
                  }}
            >
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200"
                  alt=""
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-5 left-5 w-[240px] bg-white rounded-2xl px-5 py-4 flex items-center justify-between shadow-xl">
                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[270px] bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-xl"> */}
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
                    SM
                  </div>

                  <div className="flex-1">
                    <h4 className="font-semibold text-sm whitespace-nowrap">
                      Pedro Neto
                    </h4>

                    <p className="text-xs text-gray-400">
                       Nov 11, 2024
                    </p>
                  </div>

                  <span className="text-green-500 font-bold">
                    +$12.50
                  </span>
                </div>
              </div>

              {/* SERVICE CARD */}
                <div className="relative h-[160px] bg-gradient-to-br from-[#efedff] to-[#dfdafe]"
                  style={{
                  // borderTopLeftRadius: "0px",
                  // borderTopRightRadius: "0px",
                  // borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "40px",
                  }}
                >
                <div className="absolute top-6 right-6">
                  <ArrowRight
                  size={22}
                  strokeWidth={2.5}
                  className="text-[#5b57ff]"
                  />
                </div>

                <div className="absolute bottom-8 left-8">
                  <h3 className="font-bold text-[18px] leading-7 text-[#141414]">
                  WE PROVIDE
                  <br />
                   BEST SERVICES
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}