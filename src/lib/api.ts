export interface Country {
  id: string;
  title: string;
  count: number;
}

export interface Category {
  id: string;
  title: string;
  count: number;
}

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_PROJECT_TOKEN;

const buildUrl = (...paths: string[]) =>
  `https://${PROJECT_TOKEN}.mockapi.io/crm/${paths.join('/')}`;

const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()) as T;
};

export const getSummaryStats = () => {
  return Promise.resolve({
    promotions: 427,
    categories: 8,
    newCompanies: 28,
    activeCompanies: 670,
  });
};

export const getSummarySales = () => {
  const items = [];
  for (let i = 0; i < 6; i++) {
    items.push({
      companyId: i + 1,
      companyTitle: 'Costco Wholesale',
      sold: 459,
      income: 600,
    });
  }

  return Promise.resolve(items);
};

export const getSummaryPromotions = () => {
  const items = [];
  for (let i = 0; i < 7; i++) {
    items.push({
      promotionId: i + 1,
      promotionName: 'Lorem ipsum dolor',
      companyTitle: 'Costco Wholesale',
      discount: 40,
    });
  }

  return Promise.resolve(items);
};

export const getCategories = (init?: RequestInit) => {
  return sendRequest<Category[]>(buildUrl('categories'), init);
};

export const getCountries = (init?: RequestInit) => {
  return sendRequest<Country[]>(buildUrl('countries'), init);
};
