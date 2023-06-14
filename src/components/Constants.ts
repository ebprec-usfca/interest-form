export const languages = [
  'English',
  'Spanish',
  'Filipino/Tagalog',
  'Chinese',
  'Vietnamese',
  'Korean',
  'Mandarin',
  'Cantonese',
  'Hindi',
  'Persian/Iranian/Farsi',
  'Arabic',
]

export const referralSources = [
  'At my doorstep',
  'At an event',
  'Flyer/Poster',
  'Social Medial Post',
  'Referred by another organization',
  'Referred by family or friend',
  'Walked into 94th Ave Resource Center',
 ]

export type interest = 'find_housing' | 
  'protect_housing' |
  'resident_rights' |
  'volunteering' |
  'land_trusts' |
  'cooperative' |
  'selling' |
  'adu' |
  'merchants_assc' |
  'skill_development' |
  'better_neighborhoods'

export const interests: {[key in interest]: string} = {
  find_housing: 'Finding affordable housing',
  protect_housing: 'Protecting or improving your existing housing',
  resident_rights: 'Receiving trainings/information on tenants\'/homeowners\' rights, eviction defense or foreclosure prevention',
  volunteering: 'Community Organizing or Volunteering in East/Deep East Oakland',
  land_trusts: 'Learning about community land trusts, cooperatives',
  cooperative: 'Joining a cooperative to purchase a building together and build community wealth',
  selling: 'Selling your property without causing more displacement',
  adu: 'Building an ADU (accessory dwelling unit) on your property',
  merchants_assc: 'Joining a Merchants\' Association for East Oakland businesses (business owners only)',
  skill_development: 'Career/Skill or Small Business Development',
  better_neighborhoods: 'Learning more about the Better Neighborhoods, Same Neighbors resources',
}

export const emails: {[key in interest]: string} = {
  find_housing: '',
  protect_housing: '',
  resident_rights: '',
  volunteering: '',
  land_trusts: '',
  cooperative: '',
  selling: '',
  adu: '',
  merchants_assc: '',
  skill_development: '',
  better_neighborhoods: '',
}

export const emailSubject = (interest: string) => 'Resources for ' + interest;
export const emailGreeting = (name: string) => {
  return `Hello ${name},\n\nWe are so glad you reached out to us, hopefully these resources will be helpful to you! Here are the resources you requested:\n\n`
}
