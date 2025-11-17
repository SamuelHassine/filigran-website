export interface UseCaseContent {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  stats: { value: string; label: string }[];
  challenges: string[];
  highlights: { title: string; description: string }[];
  outcomes: string[];
}

export const useCases: UseCaseContent[] = [
  {
    slug: 'intelligence-driven-defense-against-disinformation',
    title: 'Intelligence-driven defense against disinformation',
    subtitle: 'Protect your brand and stakeholders with verifiable intelligence',
    description:
      'Monitor narratives that target your employees, partners and citizens. Fuse multi-source intelligence with workflows that accelerate takedowns.',
    stats: [
      { value: '4x', label: 'faster campaign detection' },
      { value: '90%', label: 'false-positive reduction when enriching datasets' }
    ],
    challenges: [
      'Identify narratives and botnets before they become mainstream',
      'Prioritize investigations when every hour counts',
      'Coordinate with communication and legal teams on tight deadlines'
    ],
    highlights: [
      {
        title: 'Centralized context',
        description: 'Bring OSINT, dark web chatter and law-enforcement reporting into a single graph.'
      },
      {
        title: 'Playbooks for takedowns',
        description: 'Codify outreach workflows, reporting templates and escalation paths.'
      },
      {
        title: 'Executive-ready briefings',
        description: 'Use Agentic AI to summarize risks for the board and communications leads.'
      }
    ],
    outcomes: [
      'Proactively neutralize disinformation and protect your reputation',
      'Give leadership fact-based assessments in minutes',
      'Measure the impact of takedowns and counter narratives'
    ]
  },
  {
    slug: 'intelligence-led-breach-attack-simulation',
    title: 'Intelligence-led breach & attack simulation',
    subtitle: 'Turn intelligence into exercises that harden defenses',
    description:
      'Continuously simulate the attack paths that matter most to your organization using OpenAEV scenarios powered by OpenCTI intelligence.',
    stats: [
      { value: '80%', label: 'reduction in planning time' },
      { value: '2x', label: 'more exercises conducted per quarter' }
    ],
    challenges: [
      'Translate threat intelligence into actionable tabletop exercises',
      'Keep playbooks up to date with new TTPs',
      'Quantify how teams respond under pressure'
    ],
    highlights: [
      {
        title: 'Scenario marketplace',
        description: 'Start from curated adversary paths mapped to MITRE ATT&CK.'
      },
      {
        title: 'BYO controls',
        description: 'Use your existing tooling and telemetry—no extra agents required.'
      },
      {
        title: 'Feedback loops',
        description: 'Capture lessons learned, gaps and remediation owners in one place.'
      }
    ],
    outcomes: [
      'Align blue, red and purple teams on prioritized threats',
      'Show leadership where investments improve readiness',
      'Improve time-to-detect and time-to-recover metrics'
    ]
  },
  {
    slug: 'threat-monitoring-hunting',
    title: 'Threat monitoring and hunting',
    subtitle: 'Give hunters richer context and automation',
    description:
      'Fuse telemetry, threat intelligence and enrichment services so hunters can pivot faster and operationalize discoveries.',
    stats: [
      { value: '70%', label: 'faster threat qualification' },
      { value: '300+', label: 'connectors for telemetry & enrichment' }
    ],
    challenges: [
      'Siloed data slows down investigations',
      'Manual enrichment wastes valuable analyst cycles',
      'Sharing intelligence across regions and teams is inconsistent'
    ],
    highlights: [
      {
        title: 'Unified hunting workbench',
        description: 'Correlate observables, campaigns and sightings in OpenCTI.'
      },
      {
        title: 'Automated workflows',
        description: 'Trigger enrichments, case creation and notifications via playbooks.'
      },
      {
        title: 'Knowledge transfer',
        description: 'Share curated hunt packages with other teams or partners.'
      }
    ],
    outcomes: [
      'Accelerate investigations with contextualized signals',
      'Reduce toil through automation and AI copilots',
      'Build a repeatable library of successful hunts'
    ]
  },
  {
    slug: 'incident-response-and-investigation',
    title: 'Incident response and investigation',
    subtitle: 'Coordinate response with intelligence-grade context',
    description:
      'Use XTM Suite to centralize evidence, leverage automations and brief stakeholders with confidence during high-pressure incidents.',
    stats: [
      { value: '50%', label: 'faster incident scoping' },
      { value: '24/7', label: 'global collaboration' }
    ],
    challenges: [
      'Fragmented tooling makes it hard to establish a single source of truth',
      'Executives want concise updates rooted in data',
      'Hand-offs between responders, comms and legal slow down progress'
    ],
    highlights: [
      {
        title: 'Case management',
        description: 'Track hypotheses, evidence and dispositions in structured workspaces.'
      },
      {
        title: 'Stakeholder briefings',
        description: 'Agentic AI summarises progress for executives and regulators.'
      },
      {
        title: 'Learning loop',
        description: 'Push findings back into threat intelligence and exercises.'
      }
    ],
    outcomes: [
      'Shorten mean time to detect and respond',
      'Ensure every stakeholder receives actionable updates',
      'Institutionalize lessons learned'
    ]
  },
  {
    slug: 'intelligence-driven-soc',
    title: 'Intelligence-driven SOC',
    subtitle: 'Empower the SOC with machine-speed intelligence',
    description:
      'Connect SOC tooling, detection engineering workflows and threat intelligence so analysts can respond with precision.',
    stats: [
      { value: '95%', label: 'uptick in relevant alerts' },
      { value: '6K+', label: 'organizations powered by XTM' }
    ],
    challenges: [
      'SOC teams drown in noise and lack context',
      'Threat intelligence often lives outside of operational workflows',
      'Reporting on SOC value is time-consuming'
    ],
    highlights: [
      {
        title: 'Contextual triage',
        description: 'Automatically enrich SOC alerts with intelligence, sightings and previous cases.'
      },
      {
        title: 'Guided response',
        description: 'Provide step-by-step actions and orchestrations tied to your environment.'
      },
      {
        title: 'Continuous measurement',
        description: 'Dashboards highlight coverage, gaps and ROI.'
      }
    ],
    outcomes: [
      'Increase SOC efficiency with curated context',
      'Scale best practices across shifts and regions',
      'Prove the value of intelligence-driven operations'
    ]
  }
];

export const getUseCaseBySlug = (slug: string) => useCases.find((useCase) => useCase.slug === slug);

