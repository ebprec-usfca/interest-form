import { aduEmail } from "./emails/adu"
import { investorEmail } from "./emails/investor"
import { groupBuyEmail } from "./emails/group_buy"
import { evictionsEmail } from "./emails/evictions"
import { neighborsEmail } from "./emails/neighbors"
import { landTrustsEmail } from "./emails/land_trusts"
import { orientationEmail } from "./emails/orientation"
import { buildingsOrgEmail } from "./emails/buildings_org"
import { tenantRightsEmail } from "./emails/tenant_rights"
import { affordableHousingEmail } from "./emails/affordable_housing"
import { volunteeringEmail } from "./emails/volunteering"
import { merchantsAsscEmail } from "./emails/merchants_assc"

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

export type Interest = 
| 'orientation'
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

export const emails: {[key in Interest]: (name: string) => string} = {
  orientation: orientationEmail,
  investor: investorEmail,
  groupBuy: groupBuyEmail,
  landTrusts: landTrustsEmail,
  affordableHousing: affordableHousingEmail,
  tenantRights: tenantRightsEmail,
  evictions: evictionsEmail,
  adu: aduEmail,
  buildingOrg: buildingsOrgEmail,
  neighbors: neighborsEmail,
  merchantsAssc: merchantsAsscEmail,
  volunteering: volunteeringEmail,
}

export type zipCode = '94621' | '94603' | '94602' | 'Other'
export const zipCodes: zipCode[] = ['94621', '94603', '94602', 'Other']
