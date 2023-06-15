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

export type referralSource = 'doorstep' |
  'event' |
  'flyer' |
  'social_media' |
  'referred_by_org' |
  'referred_by_friend' |
  'walked_in'

export const referralSources: {[key in referralSource]: string} = {
  doorstep: 'At my doorstep',
  event: 'At an event',
  flyer: 'Flyer/Poster',
  social_media: 'Social Medial Post',
  referred_by_org: 'Referred by another organization',
  referred_by_friend: 'Referred by family or friend',
  walked_in: 'Walked into 94th Ave Resource Center',
 }

 export const spreadsheetIDs: {[key in referralSource]: string} = {
   doorstep: 'TODO',
   event: 'TODO',
   flyer: 'TODO',
   social_media: 'TODO',
   referred_by_org: 'TODO',
   referred_by_friend: 'TODO',
   walked_in: 'TODO',
 }

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
