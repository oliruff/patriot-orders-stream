
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OrderCard from "@/components/OrderCard";

const mockOrders = [
  {
    id: 1,
    title: "Executive Order on Protecting American Jobs and Workers",
    date: "January 20, 2025",
    summary: "This executive order implements new policies to strengthen American workforce protections and enhance job opportunities for American citizens.",
    isNew: true,
  },
  {
    id: 2,
    title: "Executive Order on Energy Independence",
    date: "January 21, 2025",
    summary: "Establishes new guidelines for domestic energy production and reduces dependence on foreign energy sources.",
    isNew: true,
  },
  {
    id: 3,
    title: "Executive Order on Infrastructure Development",
    date: "January 22, 2025",
    summary: "Streamlines the approval process for critical infrastructure projects and establishes new funding mechanisms for development.",
    isNew: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Hero />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-patriot-blue mb-8">Latest Executive Orders</h2>
            <div className="grid gap-6">
              {mockOrders.map((order) => (
                <OrderCard
                  key={order.id}
                  title={order.title}
                  date={order.date}
                  summary={order.summary}
                  isNew={order.isNew}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
