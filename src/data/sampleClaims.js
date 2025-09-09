export const sampleClaims = [
  {
    id: 1,
    platform: 'TikTok',
    claim: 'New study shows drinking 8 glasses of water daily is actually harmful',
    credibilityScore: 2,
    sources: ['Dubious health blog', 'No peer review found'],
    explanation: 'This claim lacks scientific backing. The origin appears to be a misinterpretation of a legitimate study about water intoxication in extreme cases.',
    verified: false,
    category: 'Health',
    originalPost: '@healthguru2024',
    datePosted: '2025-08-28'
  },
  {
    id: 2,
    platform: 'Instagram',
    claim: 'Local youth climate march happening this Saturday at City Hall',
    credibilityScore: 9,
    sources: ['City Council website', 'Local news outlet', 'Event organizer verified'],
    explanation: 'Multiple reliable sources confirm this event. Organizers have proper permits and verified social media presence.',
    verified: true,
    category: 'Events',
    originalPost: '@greenfutureyouth',
    datePosted: '2025-08-29'
  },
  {
    id: 3,
    platform: 'Facebook',
    claim: 'Free iPhone giveaway - just share this post and comment your email!',
    credibilityScore: 1,
    sources: ['Suspicious account with no verification', 'Common scam pattern identified'],
    explanation: 'Classic social media scam. Account created recently, asks for personal information, and uses urgency tactics typical of fraudulent giveaways.',
    verified: false,
    category: 'Scam Alert',
    originalPost: 'Fake Giveaway Account',
    datePosted: '2025-08-30'
  },
  {
    id: 4,
    platform: 'Twitter',
    claim: 'Youth coding bootcamp offers guaranteed job placement with 100% success rate',
    credibilityScore: 4,
    sources: ['Company website claims', 'Mixed student reviews', 'No independent verification'],
    explanation: 'While the bootcamp exists, the "100% guarantee" claim is misleading. Success rates vary and depend on many factors not mentioned in their marketing.',
    verified: false,
    category: 'Education',
    originalPost: '@codingbootcamp_pro',
    datePosted: '2025-08-27'
  }
];