import { investorEmail } from "./emails/investor"
import { orientationEmail } from "./emails/orientation"

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

export type Interest = 
| 'orientation'
| 'investor'
| 'group_buy'
| 'land_trusts'
| 'affordable_housing'
| 'tenant_rights'
| 'evictions'
| 'adu'
| 'building_org'
| 'neighbors'
| 'merchants_assc'
| 'volunteering'

export const InterestGrouping = {
  'Permanently Affordable Homeownership': ['orientation', 'investor', 'group_buy', 'land_trusts'] as Interest[],
  'Housing': ['affordable_housing', 'tenant_rights', 'evictions', 'adu', 'building_org'] as Interest[],
  'Better Neighborhoods, Same Neighbors': ['neighbors', 'merchants_assc'] as Interest[],
  'Organizing/Volunteering': ['volunteering'] as Interest[],
}

export const interestText: {[key in Interest]: string} = {
  // Permanently Affordable Homeownership
  orientation: 'Attending an Orientation to EB PREC to join the movement',
  investor: 'Becoming a Community or Investor Owner of EB PREC',
  group_buy: 'Forming a group to purchase a building together w/ EB PREC',
  land_trusts: 'Learning about Community Land Trusts',
  // Housing
  affordable_housing: 'Finding Affordable Housing',
  tenant_rights: 'Receiving trainings/information on tenants\'/homeowners\' rights, eviction defense or foreclosure prevention',
  evictions: 'Getting direct support for an eviction or foreclosure',
  adu: 'Building an ADU on my property or legalizing an unpermitted ADU',
  building_org: 'Organizing my building to improve conditions or secure our housing (tenants association)',
  // Better Neighborhoods, Same Neighbors
  neighbors: 'Learning more about the Better Neighborhoods, Same Neighbors resources',
  merchants_assc: 'Joining a Merchants\' Association for East Oakland businesses (business owners only)',
  // Organizing/Volunteering 
  volunteering: 'Community Organizing or Volunteering in East/Deep East Oakland',
}

export const emails: {[key in Interest]: (name: string) => string} = {
  orientation: orientationEmail,
  investor: investorEmail,
  group_buy: (_: string) => 'TODO',
  land_trusts: (_: string) => 'TODO',
  affordable_housing: (_: string) => 'TODO',
  tenant_rights: (_: string) => 'TODO',
  evictions: (_: string) => 'TODO',
  adu: (_: string) => 'TODO',
  building_org: (_: string) => 'TODO',
  neighbors: (_: string) => 'TODO',
  merchants_assc: (_: string) => 'TODO',
  volunteering: (_: string) => 'TODO',
}
