
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OrderCard from "@/components/OrderCard";
import { useExecutiveOrders } from "@/services/executiveOrders";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { data: orders, isLoading, error } = useExecutiveOrders();
  const { toast } = useToast();

  if (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to fetch executive orders. Please try again later.",
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-16">
        <Hero />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-patriot-blue mb-8">
              Latest Executive Orders
            </h2>
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-patriot-blue" />
              </div>
            ) : (
              <div className="grid gap-6">
                {orders?.map((order) => (
                  <OrderCard
                    key={order.id}
                    title={order.title}
                    date={order.date}
                    summary={order.summary}
                    isNew={order.isNew}
                    url={order.url}
                    type={order.type}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
