import dayjs from 'dayjs';

import { StatData } from '../../components/Stats/types';

/* Keys match keys returned by the github api. Fields without keys are
 * mostly jokes. To see everything returned by the github api, run:
 curl https://api.github.com/repos/DavidCPerry83/portfolio
 */
const data: StatData[] = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: 'https://github.com/DavidCPerry83/portfolio/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: 'https://github.com/DavidCPerry83/portfolio/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: 'https://github.com/DavidCPerry83/portfolio/network',
  },
  {
    label: 'Number of spoons',
    value: '0',
  },
  {
    label: 'Number of linter warnings',
    value: '0', // enforced via github workflow
  },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: 'https://github.com/DavidCPerry83/portfolio/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/DavidCPerry83/portfolio/commits',
    format: (x: unknown) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
  {
    label: 'Lines of TypeScript powering this website',
    value: '2272',
    link: 'https://github.com/DavidCPerry83/portfolio/graphs/contributors',
  },
];

export default data;
