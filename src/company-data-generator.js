import { faker } from "@faker-js/faker";

export const getCompanyData = () => {
  const companies = [];
  for (let i = 0; i < 100; i++) {
    companies.push({
      id: i,
      name: faker.company.name(),
      description: faker.company.bs(),
      currency: faker.finance.currencyName(),
      routingNumber: faker.finance.routingNumber(),
    });
  }
  return companies;
};
