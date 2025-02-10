
import { useQuery } from "@tanstack/react-query";

interface ExecutiveOrder {
  id: string;
  title: string;
  publication_date: string;
  document_number: string;
  html_url: string;
  abstract: string;
}

interface FederalRegisterResponse {
  count: number;
  results: ExecutiveOrder[];
}

const FEDERAL_REGISTER_API = "https://www.federalregister.gov/api/v1";

const generateSummary = (abstract: string): string => {
  // If there's no abstract, provide a generic message
  if (!abstract) {
    return "This executive order addresses matters of federal policy and administration. Please refer to the full document for detailed information.";
  }

  // Clean and format the abstract
  const cleanAbstract = abstract
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ')    // Remove extra whitespace
    .trim();

  // If the abstract is too long, truncate it
  const maxLength = 300;
  if (cleanAbstract.length > maxLength) {
    return cleanAbstract.substring(0, maxLength) + '...';
  }

  return cleanAbstract;
};

export const fetchExecutiveOrders = async () => {
  const response = await fetch(
    `${FEDERAL_REGISTER_API}/documents.json?conditions[type]=PRESDOCU&conditions[president]=donald-trump&order=newest`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch executive orders');
  }
  
  const data: FederalRegisterResponse = await response.json();
  return data.results.map(order => ({
    id: order.document_number,
    title: order.title,
    date: new Date(order.publication_date).toLocaleDateString(),
    summary: generateSummary(order.abstract),
    url: order.html_url,
    isNew: new Date(order.publication_date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  }));
};

export const useExecutiveOrders = () => {
  return useQuery({
    queryKey: ['executiveOrders'],
    queryFn: fetchExecutiveOrders,
  });
};
