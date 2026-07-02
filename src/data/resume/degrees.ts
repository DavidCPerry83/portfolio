export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'St. Edward\'s University',
    degree: 'B.S. Computer Science',
    link: 'https://www.stedwards.edu/',
    year: 2011,
  },
  {
    school: 'Austin Community College',
    degree: 'A.S. Mathematics and Computer Science',
    link: 'https://www.austincc.edu/',
    year: 2006,
  },
];

export default degrees;
