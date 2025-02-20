
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface OrderCardProps {
  title: string;
  date: string;
  summary: string;
  isNew?: boolean;
  url?: string;
  type?: string;
}

const formatDocumentType = (type: string) => {
  return type
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const OrderCard = ({ title, date, summary, isNew, url, type }: OrderCardProps) => {
  return (
    <Card className="w-full p-6 bg-white hover:shadow-lg transition-all duration-300 border border-gray-200 rounded-xl animate-fade-up">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {isNew && (
              <Badge className="bg-patriot-red text-white">New</Badge>
            )}
            {type && (
              <Badge variant="secondary" className="capitalize">
                {formatDocumentType(type)}
              </Badge>
            )}
            <span className="text-sm text-gray-500">{date}</span>
          </div>
          <h3 className="text-xl font-semibold text-patriot-blue mb-2 line-clamp-2">
            {title}
          </h3>
        </div>
      </div>
      <p className="text-gray-600 mb-4 prose prose-sm">
        {summary}
      </p>
      <div className="flex items-center justify-between">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-patriot-blue hover:text-patriot-blue/80 font-medium transition-colors"
        >
          Read Full Order →
        </a>
      </div>
    </Card>
  );
};

export default OrderCard;
