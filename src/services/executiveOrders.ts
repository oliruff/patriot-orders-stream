
import { useQuery } from "@tanstack/react-query";

interface ExecutiveOrder {
  id: string;
  title: string;
  publication_date: string;
  document_number: string;
  html_url: string;
  abstract: string;
  presidential_document_type: string;
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
  const documentTypes = [
    'determination',
    'executive_order',
    'memorandum',
    'notice',
    'proclamation',
    'presidential_order',
    'other'
  ];

  // Create the URL with properly formatted document type parameters
  const url = new URL(`${FEDERAL_REGISTER_API}/documents.json`);
  url.searchParams.append('conditions[type]', 'PRESDOCU');
  url.searchParams.append('conditions[president]', 'donald-trump');
  url.searchParams.append('conditions[publication_date][gte]', '2025-01-01');
  url.searchParams.append('order', 'newest');
  
  // Add each document type as a separate parameter
  documentTypes.forEach(type => {
    url.searchParams.append('conditions[presidential_document_type][]', type);
  });

  const response = await fetch(url.toString());
  
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
    type: order.presidential_document_type,
    isNew: new Date(order.publication_date) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  }));
};

export const useExecutiveOrders = () => {
  return useQuery({
    queryKey: ['executiveOrders'],
    queryFn: fetchExecutiveOrders,
  });
};
