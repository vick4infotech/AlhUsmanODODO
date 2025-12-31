/*
  Official portfolio copy
  ----------------------
  This site is written in an official portfolio tone.
  Facts and numerical highlights used in the UI are anchored to public reporting.

  Key references used while drafting (non exhaustive):
  - Ahmed Usman Ododo background and office start date: Wikipedia (Ahmed Usman Ododo)
  - Kogi State Government: approval of N72,500 minimum wage with one year tax relief
  - The Guardian Nigeria: minimum wage report
  - Punch Newspapers and BusinessDay: approval of N600m WASSCE fees covering 18,734 students
  - Kogi State Government: commissioning of 80 revitalised primary health care facilities
  - Kogi State Government: signing of the N582.4bn 2025 appropriation bill into law

  Images: Royalty free photos used on the site are sourced from Pexels and stored in /public/images.
  Each usage includes an inline comment with the source URL.
  Governor portrait is used for identity and favicon.
*/

export const site = {
  name: "His Excellency Alhaji Ahmed Usman Ododo",
  title: "Executive Governor of Kogi State, Nigeria",
  tagline: "Leadership anchored in service, stability, and shared prosperity.",
  description:
    "Official political portfolio and achievement showcase for His Excellency Alhaji Ahmed Usman Ododo, Executive Governor of Kogi State, Nigeria.",
  seoBaseTitle: "Governor Ahmed Usman Ododo | Official Portfolio",
  themeNote: "Deep green, gold, white, with subtle blue accents"
};

export const hero = {
  kicker: "Official Portfolio",
  headline: "Purposeful leadership for a stronger Kogi",
  subheadline:
    "A premium digital portfolio showcasing leadership profile, governance priorities, verified highlights, and a forward agenda for Kogi State.",
  primaryCta: { label: "Explore governance", to: "/achievements" },
  secondaryCta: { label: "Read biography", to: "/profile" },
  portrait: {
    src: "/images/ododo-portrait.jpg",
    alt: "Portrait of Governor Ahmed Usman Ododo"
  },
  heroBackground: {
    // Pexels source: https://www.pexels.com/photo/aerial-view-of-traditional-african-village-in-abuja-34780003/
    src: "/images/kogi-aerial.jpg",
    alt: "Aerial view of a community landscape"
  }
};

export const quickHighlights = [
  {
    label: "Workers welfare",
    value: "N72,500",
    // Sources: Kogi State Government; The Guardian Nigeria
    note: "Minimum wage approved with one year tax relief on the wage sum"
  },
  {
    label: "Education access",
    value: "18,734",
    // Sources: Punch Newspapers; BusinessDay
    note: "Students covered for WASSCE fees in public secondary schools"
  },
  {
    label: "Primary health care",
    value: "80",
    // Source: Kogi State Government
    note: "Revitalised facilities commissioned across the state"
  },
  {
    label: "2025 budget",
    value: "N582.4bn",
    // Source: Kogi State Government
    note: "Appropriation bill signed into law for jobs, infrastructure, food security, and welfare"
  }
];

export const achievementsPreview = {
  title: "A delivery agenda across every sector",
  description:
    "Governance is treated as a performance contract. The administration prioritises measurable outcomes, citizen centred service, and institutional strength.",
  cards: [
    {
      title: "Human capital",
      description:
        "Healthcare and education priorities focused on frontline services, outcomes, and opportunity for every community.",
      icon: "HeartPulse",
      // Pexels source: https://www.pexels.com/photo/happy-graduating-student-30683907/
      image: "/images/youth-graduation.jpg"
    },
    {
      title: "Infrastructure",
      description:
        "A modern Kogi requires roads, markets, water systems, and public assets that unlock productivity and growth.",
      icon: "Route",
      // Pexels source: https://www.pexels.com/photo/roadwork-crew-35340757/
      image: "/images/infrastructure-roadworks.jpg"
    },
    {
      title: "Security and stability",
      description:
        "Collaboration, community intelligence, and rapid response to strengthen safety across the state.",
      icon: "Shield",
      // Pexels source: https://www.pexels.com/photo/smiling-nigerian-police-officer-in-uniform-outdoors-32185187/
      image: "/images/security-police.jpg"
    }
  ]
};

export const biography = {
  title: "Profile and biography",
  intro:
    "His Excellency Alhaji Ahmed Usman Ododo is an accountant and public sector leader serving as the Executive Governor of Kogi State. His public service profile reflects a focus on accountability, fiscal discipline, and people centred development.",
  paragraphs: [
    "Governor Ododo assumed office on January 27, 2024, with a governance approach focused on security, human capital, productive infrastructure, and a confident investment environment.",
    "His leadership philosophy emphasises measurable delivery, institutional strength, and public trust as the foundation for inclusive growth.",
    "This portfolio presents a structured overview of biography, priorities, recognised highlights, and a forward roadmap for Kogi State."
  ],
  education: [
    {
      title: "Accountancy and public finance",
      details:
        "Academic and professional training in accounting and public finance, supporting transparent governance and value for money delivery."
    },
    {
      title: "Policy and leadership development",
      details:
        "Continuous learning and executive exposure focused on strategy, stakeholder management, and policy implementation in public administration."
    }
  ],
  professionalHighlights: [
    {
      title: "Public financial accountability",
      details:
        "Service in public finance and audit, advancing systems that protect public resources and strengthen compliance."
    },
    {
      title: "Local government audit leadership",
      details:
        "Served as Auditor General for Local Governments in Kogi State, supporting oversight and improved governance performance."
    },
    {
      title: "Unity and stability",
      details:
        "A leadership style that values listening, coordination, and practical execution across government and society."
    }
  ],
  philosophy: {
    title: "Leadership philosophy",
    points: [
      "Service with humility and responsibility",
      "Institutional strength and public trust",
      "Economic opportunity through productivity",
      "Community safety as a foundation for growth",
      "Youth advancement and social protection"
    ]
  },
  timeline: [
    {
      year: "Professional foundations",
      title: "Accounting and audit practice",
      description:
        "Built expertise in accounting, audit, and public sector systems, supporting disciplined management and integrity in service.",
      detailTitle: "Key strengths",
      details: [
        "Transparent financial systems",
        "Performance oversight",
        "Public value delivery"
      ]
    },
    {
      year: "Public service",
      title: "Audit leadership in government",
      description:
        "Strengthened financial accountability in public administration through audit leadership and systems improvement.",
      detailTitle: "Areas of focus",
      details: [
        "Compliance and value for money",
        "Process improvement",
        "Service delivery support"
      ]
    },
    {
      year: "Since January 2024",
      title: "Executive Governor of Kogi State",
      description:
        "Assumed office with clear priorities for security, human capital, productive infrastructure, and inclusive growth.",
      detailTitle: "Governance priorities",
      details: [
        "Safer communities",
        "Better schools and health services",
        "Infrastructure for productivity"
      ]
    }
  ]
};

export const achievements = {
  title: "Governance and achievements",
  subtitle:
    "A sector based view of delivery priorities, verified highlights, and citizen centred outcomes.",
  categories: [
    {
      id: "economy",
      title: "Economy",
      icon: "TrendingUp",
      description:
        "Building an investment friendly environment through fiscal discipline, ease of doing business, and support for enterprise.",
      bullets: [
        "Budget prioritisation for jobs and productive sectors",
        "Strengthening revenue systems with fairness and transparency",
        "Partnerships that expand local value chains"
      ],
      // Pexels source: https://www.pexels.com/photo/group-of-people-seated-around-a-table-having-a-discussion-3184311/
      image: "/images/leadership-meeting.jpg"
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      icon: "Landmark",
      description:
        "Upgrading public assets that connect communities and unlock economic activity.",
      bullets: [
        "Road rehabilitation and strategic corridors for trade",
        "Modern markets and service points that support commerce",
        "Priority support for community level infrastructure"
      ],
      // Pexels source: https://www.pexels.com/photo/roadwork-crew-35340757/
      image: "/images/infrastructure-roadworks.jpg"
    },
    {
      id: "healthcare",
      title: "Healthcare",
      icon: "Stethoscope",
      description:
        "Primary health care is treated as the foundation of universal health coverage: closer services, better equipment, and improved staffing.",
      bullets: [
        "Commissioning of 80 revitalised primary health care facilities across the state",
        "Improved essential equipment availability at primary care points",
        "Continued upgrades of additional facilities to raise access and quality"
      ],
      // Pexels source: https://www.pexels.com/photo/photo-of-medical-team-6129507/
      image: "/images/health-team.jpg"
    },
    {
      id: "education",
      title: "Education",
      icon: "GraduationCap",
      description:
        "Education policy is approached as human capital investment: access, quality teaching, and pathways to employability.",
      bullets: [
        "Approval of N600 million to cover WASSCE fees for 18,734 public school students",
        "Support for learning environments and school readiness",
        "Skills and employability focus for young people"
      ],
      // Pexels source: https://www.pexels.com/photo/classroom-learning-28593054/
      image: "/images/education-classroom.jpg"
    },
    {
      id: "agriculture",
      title: "Agriculture",
      icon: "Sprout",
      description:
        "Food sufficiency, agribusiness growth, and mechanisation support to raise productivity across farming communities.",
      bullets: [
        "Support to farmers through inputs and equipment distribution programmes",
        "Mechanisation support to improve farm productivity",
        "Value chain development to strengthen processing and markets"
      ],
      // Pexels source: https://www.pexels.com/photo/tractor-on-field-2889442/
      image: "/images/agriculture-tractor.jpg"
    },
    {
      id: "security",
      title: "Security",
      icon: "ShieldCheck",
      description:
        "Safety is treated as a public good: coordination, intelligence, community participation, and rapid response.",
      bullets: [
        "Community based security strengthening through stakeholder collaboration",
        "Support for coordinated response across security services",
        "Focus on protecting schools, roads, and vulnerable communities"
      ],
      // Pexels source: https://www.pexels.com/photo/smiling-nigerian-police-officer-in-uniform-outdoors-32185187/
      image: "/images/security-police.jpg"
    },
    {
      id: "youth",
      title: "Youth and social welfare",
      icon: "Users",
      description:
        "Opportunity is expanded through youth advancement, worker welfare, and targeted social support.",
      bullets: [
        "Approval of N72,500 minimum wage for Kogi workers",
        "One year tax relief on the approved minimum wage sum",
        "Youth skills, enterprise support, and community empowerment programmes"
      ],
      // Pexels source: https://www.pexels.com/photo/happy-graduating-student-30683907/
      image: "/images/youth-graduation.jpg"
    }
  ],
  stats: [
    { label: "Minimum wage", value: 72500, prefix: "N", suffix: "", note: "Approved for Kogi workers" },
    { label: "Students covered", value: 18734, prefix: "", suffix: "", note: "WASSCE fees" },
    { label: "Primary health care", value: 80, prefix: "", suffix: "", note: "Facilities commissioned" },
    { label: "2025 budget", value: 582, prefix: "N", suffix: "bn", note: "Appropriation bill signed" }
  ]
};

export const awards = {
  title: "Awards and recognition",
  subtitle:
    "Select recognitions highlighting governance focus areas and service delivery priorities.",
  items: [
    {
      year: "2024",
      title: "Governor of the Year in Agriculture",
      org: "Independent Newspapers Limited",
      description:
        "Recognition for policy focus on agricultural productivity, food sufficiency, and support to farming communities."
    },
    {
      year: "2025",
      title: "Human capital development recognition",
      org: "Blueprint Newspapers",
      description:
        "Recognition reported for strategic focus on human capital development priorities."
    }
  ]
};

export const vision = {
  title: "Vision and future agenda",
  subtitle:
    "A long term roadmap to a safer, more prosperous, and more competitive Kogi State.",
  headline: "A state that works for everyone",
  narrative:
    "The administration is building an enabling environment where businesses invest with confidence, communities feel protected, and citizens experience visible improvements in services and opportunity.",
  priorities: [
    {
      title: "Security as a foundation",
      description:
        "Deepen intelligence led coordination, strengthen community structures, and protect strategic corridors for trade and travel.",
      icon: "Shield"
    },
    {
      title: "Human capital for prosperity",
      description:
        "Scale primary health care delivery, upgrade schools, and expand pathways from learning to livelihoods.",
      icon: "HeartPulse"
    },
    {
      title: "Productive infrastructure",
      description:
        "Deliver resilient roads, modern markets, and public assets that support enterprise and reduce the cost of doing business.",
      icon: "Building2"
    },
    {
      title: "Inclusive growth",
      description:
        "Support agriculture, empower small businesses, and widen opportunities for women, youth, and vulnerable citizens.",
      icon: "Sprout"
    }
  ],
  roadmap: [
    {
      period: "Phase 1",
      title: "Stability and service quality",
      description:
        "Strengthen safety, improve frontline public services, and tighten performance management across government.",
      actions: [
        "Visible primary health care improvements",
        "Clearer service delivery standards",
        "Stronger collaboration on security"
      ]
    },
    {
      period: "Phase 2",
      title: "Productivity and jobs",
      description:
        "Expand agriculture and enterprise productivity, unlock investment, and accelerate strategic infrastructure.",
      actions: [
        "Mechanisation and value chains",
        "Business enabling reforms",
        "Projects that connect markets"
      ]
    },
    {
      period: "Phase 3",
      title: "Competitiveness and legacy",
      description:
        "Institutionalise reforms and deliver a durable platform for growth, inclusion, and pride.",
      actions: [
        "Sustained public service reforms",
        "A stronger investment brand for Kogi",
        "Expanded opportunities for young people"
      ]
    }
  ]
};

export const media = {
  title: "Media and gallery",
  subtitle:
    "A visual archive of governance focus areas: projects, people, and public service activity.",
  items: [
    {
      src: "/images/ododo-portrait.jpg",
      title: "Official portrait",
      category: "Portrait",
      caption:
        "Official portrait of His Excellency Alhaji Ahmed Usman Ododo, Executive Governor of Kogi State."
    },
    {
      // Pexels source: https://www.pexels.com/photo/roadwork-crew-35340757/
      src: "/images/infrastructure-roadworks.jpg",
      title: "Infrastructure activity",
      category: "Infrastructure",
      caption:
        "Infrastructure work that supports mobility, trade corridors, and community access."
    },
    {
      // Pexels source: https://www.pexels.com/photo/photo-of-medical-team-6129507/
      src: "/images/health-team.jpg",
      title: "Healthcare professionals",
      category: "Healthcare",
      caption:
        "Primary health care delivery relies on skilled teams, equipment, and well managed facilities."
    },
    {
      // Pexels source: https://www.pexels.com/photo/classroom-learning-28593054/
      src: "/images/education-classroom.jpg",
      title: "Learning environment",
      category: "Education",
      caption:
        "Education access and quality are central to human capital development."
    },
    {
      // Pexels source: https://www.pexels.com/photo/tractor-on-field-2889442/
      src: "/images/agriculture-tractor.jpg",
      title: "Agricultural mechanisation",
      category: "Agriculture",
      caption:
        "Mechanisation support helps farmers improve productivity and strengthen local value chains."
    },
    {
      // Pexels source: https://www.pexels.com/photo/central-bank-of-nigeria-building-in-uyo-akwa-ibom-nigeria-17366012/
      src: "/images/government-building.jpg",
      title: "Public infrastructure",
      category: "Governance",
      caption:
        "Stronger institutions and better public service management support long term development."
    },
    {
      // Pexels source: https://www.pexels.com/photo/group-of-people-seated-around-a-table-having-a-discussion-3184311/
      src: "/images/leadership-meeting.jpg",
      title: "Leadership meeting",
      category: "Governance",
      caption:
        "Strategy, coordination, and accountability drive results across government."
    },
    {
      // Pexels source: https://www.pexels.com/photo/smiling-nigerian-police-officer-in-uniform-outdoors-32185187/
      src: "/images/security-police.jpg",
      title: "Public safety",
      category: "Security",
      caption:
        "Collaboration and community confidence are essential to security and stability."
    },
    {
      // Pexels source: https://www.pexels.com/photo/happy-graduating-student-30683907/
      src: "/images/youth-graduation.jpg",
      title: "Youth advancement",
      category: "Youth",
      caption:
        "Investment in youth skills and education strengthens opportunity and productivity."
    },
    {
      // Pexels source: https://www.pexels.com/photo/aerial-view-of-traditional-african-village-in-abuja-34780003/
      src: "/images/kogi-aerial.jpg",
      title: "Community landscape",
      category: "Kogi",
      caption:
        "Kogi State sits at a strategic crossroads with diverse communities and growth potential."
    }
  ]
};

export const seo = {
  routes: [
    { path: "/", title: "Home", description: site.description },
    {
      path: "/profile",
      title: "Profile and Biography",
      description:
        "Biography, education, professional background, leadership philosophy, and career timeline of Governor Ahmed Usman Ododo."
    },
    {
      path: "/achievements",
      title: "Governance and Achievements",
      description:
        "Sector based overview of governance priorities and verified highlights across economy, infrastructure, health, education, agriculture, security, and social welfare."
    },
    {
      path: "/awards",
      title: "Awards and Recognition",
      description:
        "Select awards and recognitions for governance priorities and service delivery focus areas."
    },
    {
      path: "/vision",
      title: "Vision and Future Agenda",
      description:
        "Long term agenda, strategic priorities, and phased roadmap for a safer, more prosperous, and more competitive Kogi State."
    },
    {
      path: "/media",
      title: "Media and Gallery",
      description:
        "Image gallery of governance activities and sector priorities, with filters and lightbox viewing."
    }
  ]
};
