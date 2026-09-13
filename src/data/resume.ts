export interface Experience {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  badges?: string[];
}

export interface Education {
  degree: string;
  field: string;
  school: string;
  start: string;
  end: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

/** Work history — newest first. Shown on /work */
export const experience: Experience[] = [
  {
    role: 'Systems Engineer',
    company: 'Amadeus',
    companyUrl: 'https://amadeus.com',
    location: 'Charlotte, NC',
    start: 'May 2025',
    end: 'Present',
    current: true,
    summary: 'Systems Engineer supporting the Charlotte Douglass International Airport (CLT) with a range of fully integrated solutions for airports to manage schedule planning, optimize resource allocation, control flight updates, centrally process contracts, billing.',
    bullets: [
      'Identify recurring operational issues and implement process improvements, automation opportunities, and configuration enhancements - developing PowerShell scripts to automate system health checks, event log monitoring, and alert generation to improve service reliability and user productivity',
      'Perform routine server maintenance and checks including updates, monitoring, and backups to help keep systems reliable and compliant; administer Windows Server environments (2016, 2019, 2022) with daily health checks and configuration management.',
      'Help maintain standard operating procedures and other IT documentation; maintain CMDB accuracy by tracking configuration items and asset records in ServiceNow to ensure up-to-date infrastructure inventory'
    ],
  },
  {
    role: 'Field Engineer',
    company: 'Amadeus',
    companyUrl: 'https://amadeus.com',
    location: 'Wilmington, NC',
    start: 'April 2024',
    end: 'May 2025',
    summary: 'Supported the Wilmington International Airport (ILM) as the first point of contact for Tier 1 and Tier 2 troubleshooting, daily system checks, and user assistance across airline and airport operations. ',
    bullets: [
      'Provided on-site technical training to airline and airport staff and ensured proper operability on critical airport systems',
      'Played a key role in the renovations of a mission-critical Airport Public Safety Office that monitored airport operations, access control, and fire control. Executed with minimal downtime and zero disruption to airport operations',
    ],
  },
  {
    role: 'IT Support Technician',
    company: 'The Davis Community',
    companyUrl: 'https://thedaviscommunity.org',
    location: 'Wilmington, NC',
    start: 'May 2023',
    end: 'April 2024',
    summary: 'First point of contact for IT Support, assisted with a full-scale infrastructure modernization, transforming The Davis Community into a modern, secure, cloud-aligned environment.',
    bullets: [
      'Maintained Active Directory, DNS, DHCP, and identity management — user provisioning, access control, authentication.',
      'Translated complex infrastructure issues into clear updates for non-technical staff and leadership during incidents.',
      'Played a key role in a network refresh project replacing legacy HP switches with new Cisco switches, contributing to CLI configuration, VLAN setup, and infrastructure validation.'
    ],
  }
];

/** Smaller/older roles — rendered as compact rows under the main timeline */
export const earlierRoles: { role: string; company: string; start: string; end: string }[] = [
  { role: 'Technician', company: 'CPR Cell Phone Repair', start: '2021', end: '2023' },
];

export const education: Education[] = [
  {
    degree: 'A.A.S',
    field: 'Information Technology',
    school: 'Cape Fear Community College',
    start: '2021',
    end: '2023',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Skills',
    skills: ['Networking, Microsoft 365, Windows Server, Linux, Proxmox'],
  },
  {
    title: 'Interests',
    skills: ['Automation'],
  },
  {
    title: 'Languages',
    skills: ['Powershell'],
  },
];

/** Words typed out one character at a time in the hero */
export const typingRoles = [
];
