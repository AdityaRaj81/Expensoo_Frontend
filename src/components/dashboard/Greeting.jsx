import { useMemo } from "react";

const Greeting = ({ userName = "User" }) => {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    if (hour < 21) return "Good Evening";

    return "Good Night";
  }, []);

  const month = new Date().toLocaleString("default", {
    month: "long",
  });

  return (
    <section className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900">
        {greeting}, {userName} 👋
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        Here's your financial summary for {month}.
      </p>
    </section>
  );
};

export default Greeting;