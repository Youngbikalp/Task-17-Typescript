type CompanyData = {
  orgName: string;
  establishedDate: number;
  isTechCompany: boolean;
};

const company: CompanyData = {
  orgName: "Takeo",
  establishedDate: 2019,
  isTechCompany: false,
};

console.log(company);

function types(myCompany: CompanyData): string {
  return `Company is, ${myCompany.orgName}`;
}

export { company, types };
