import { env } from "~/env.mjs"

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

export type referralSource = 
  'doorstep' |
  'event' |
  'flyer' |
  'social_media' |
  'referred_by_org' |
  'referred_by_friend' |
  'walked_in' |
  'H4S' |
  'B2B'

export const referralSources: {[key in referralSource]: string} = {
  doorstep: 'At my doorstep',
  event: 'At an event',
  flyer: 'Flyer/Poster',
  social_media: 'Social Medial Post',
  referred_by_org: 'Referred by another organization',
  referred_by_friend: 'Referred by family or friend',
  walked_in: 'Walked into 94th Ave Resource Center',
  H4S: 'My home/Property I live in is for sale',
  B2B: 'Bussiness Canvassing',
 }

export type Interest = 
  'orientation'
| 'investor'
| 'groupBuy'
| 'landTrusts'
| 'affordableHousing'
| 'tenantRights'
| 'evictions'
| 'adu'
| 'buildingOrg'
| 'neighbors'
| 'merchantsAssc'
| 'volunteering'

export const InterestGrouping = {
  'Permanently Affordable Homeownership': ['orientation', 'investor', 'groupBuy', 'landTrusts'] as Interest[],
  'Housing': ['affordableHousing', 'tenantRights', 'adu', 'buildingOrg'] as Interest[],
  'Better Neighborhoods, Same Neighbors': ['neighbors', 'merchantsAssc'] as Interest[],
  'Organizing/Volunteering': ['volunteering'] as Interest[],
}

export const interestText: {[key in Interest]: string} = {
  // Permanently Affordable Homeownership
  orientation: 'Attending an Orientation to EB PREC to join the movement',
  investor: 'Becoming a Community or Investor Owner of EB PREC',
  groupBuy: 'Forming a group to purchase a building together w/ EB PREC',
  landTrusts: 'Learning about Community Land Trusts',
  // Housing
  affordableHousing: 'Finding Affordable Housing',
  tenantRights: 'Receiving trainings/information on tenants\'/homeowners\' rights, eviction defense or foreclosure prevention',
  evictions: 'Those in danger of losing housing (through eviction, foreclosure, or other means)',
  adu: 'Building an ADU on my property or legalizing an unpermitted ADU',
  buildingOrg: 'Organizing my building to improve conditions or secure our housing (tenants association)',
  // Better Neighborhoods, Same Neighbors
  neighbors: 'Learning more about the Better Neighborhoods, Same Neighbors resources',
  merchantsAssc: 'Joining a Small Business Alliance for East Oakland businesses (business owners only)',
  // Organizing/Volunteering 
  volunteering: 'Community Organizing or Volunteering in East/Deep East Oakland',
}

export type zipCode = '94621' | '94603' | '94602' | 'Other'
export const zipCodes: zipCode[] = ['94621', '94603', '94602', 'Other']

/*
 * sheets maps referral sources to the google sheets ID they should write data to
 */
export const sheetIDs: {[src in referralSource]: string} = {
  doorstep: '15bgi5YH_wLLCicSH4AtPfARKBmRif3q7fQwUkTWYRSE',
  event: '15bgi5YH_wLLCicSH4AtPfARKBmRif3q7fQwUkTWYRSE',

  flyer: '15bgi5YH_wLLCicSH4AtPfARKBmRif3q7fQwUkTWYRSE',
  social_media: '15bgi5YH_wLLCicSH4AtPfARKBmRif3q7fQwUkTWYRSE',
  referred_by_org: '15bgi5YH_wLLCicSH4AtPfARKBmRif3q7fQwUkTWYRSE',

  referred_by_friend: '15bgi5YH_wLLCicSH4AtPfARKBmRif3q7fQwUkTWYRSE',
  walked_in: '15bgi5YH_wLLCicSH4AtPfARKBmRif3q7fQwUkTWYRSE',
  
  H4S: '15bgi5YH_wLLCicSH4AtPfARKBmRif3q7fQwUkTWYRSE',
  B2B: '15bgi5YH_wLLCicSH4AtPfARKBmRif3q7fQwUkTWYRSE',
}
