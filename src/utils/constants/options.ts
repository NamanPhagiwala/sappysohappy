export interface Option {
  label: string;
  value: number;
}

export const employmentStatusOptions: Option[] = [
  { label: "Practising Designer", value: 1 },
  { label: "Freelance", value: 2 },
  { label: "Employed", value: 3 },
  { label: "Student", value: 4 },
  { label: "Academia", value: 5 },
  { label: "Other", value: 6 },
];
export const experienceOptions: Option[] = [
  { label: "0 to 2 years", value: 1 },
  { label: "2 to 5 years", value: 2 },
  { label: "5 to 10 years", value: 3 },
  { label: "10 years and above", value: 4 },
];
export const areaOfExpertiseOptions: Option[] = [
  { label: "Architecture small scale (upto 500sqm)", value: 1 },
  { label: "Architecture large scale (more than 500sqm)", value: 2 },
  { label: "Interior design", value: 3 },
  { label: "Landscape design", value: 4 },
  { label: "Interior decor", value: 5 },
  { label: "Product design", value: 6 },
  { label: "Furniture design", value: 7 },
  { label: "Other", value: 8 },
];

export const placeOfEmploymentOptions: Option[] = [
  { label: "Design studio", value: 1 },
  { label: "Design school", value: 2 },
  { label: "Office", value: 3 },
  { label: "Other", value: 4 },
];

export const qualificationOptions: Option[] = [
  { label: "B.arch", value: 1 },
  { label: "B.ID", value: 2 },
  { label: "B.Tech", value: 3 },
  { label: "B.Comm", value: 4 },
  { label: "B.A", value: 5 },
  { label: "B.Sc", value: 6 },
  { label: "Other", value: 7 },
];

export const genderOptions: Option[] = [
  { label: "Male", value: 1 },
  { label: "Female", value: 2 },
  { label: "Prefer not to share", value: 3 },
];

export const formOptions = {
  projectTypes: [
    { id: 1, name: "architecture" },
    { id: 2, name: "interior" },
    { id: 3, name: "landscape" },
    // { id: 4, name: "Product Design" },
  ],
  projectCategories: [
    { id: 1, name: "Commercial" },
    { id: 2, name: "Residential" },
  ],
};
