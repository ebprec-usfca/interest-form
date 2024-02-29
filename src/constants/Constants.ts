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

export type zipCode = '94621' | '94603' | '94601' | 'Other'
export const zipCodes: zipCode[] = ['94621', '94603', '94601', 'Other']

/*
 * sheets maps referral sources to the google sheets ID they should write data to
 */
export const sheetIDs: {[src in referralSource]: string} = {
  doorstep: '1jMMrRWla-5O5cFtjjCpQDLgn9uH-NLGLmEFPbI_8xTE',
  event: '1CIF-f4hQLXwM84mgQqA47dRIzwICCpEVHGUPNUyoQIo',

  flyer: '1o7PhIcY6S8gt2cMHlzhxmemQKrba0v1ufuMBai8mKvc',
  social_media: '1DVTiWFCu_lEAUTxpLZQ_rur_ufDNHBOun-mZmWt_bO0',
  referred_by_org: '1qtR47fFzBPJcCdHbl-BMfrpoPdbeBdRkGxRq02rMiGM',

  referred_by_friend: '1qtR47fFzBPJcCdHbl-BMfrpoPdbeBdRkGxRq02rMiGM',
  walked_in: '1PS2PfsXu78l27fUanPvQLi1hHHEyPvSNz_mo1iiDH5s',
  
  H4S: '1iEA3f_BccFRuD3HSA-0XpUtyKz_Sj0bUCCrnxgMGRBY',
  B2B: '1Cn0w45n__BGZL0yOftjiDhQQBxxN91crq3rQrbpy6Do',
}

export const editSheetIDs: {[src in referralSource]: string} = {
  doorstep: '1SqmlgMNIkZDhHUhvqtMdRpi3Szzxfqzbm_6QFDks8WU',
  event: '1gw46_Ydd5uqLN0h6rAKGClbVOr0yX3JKWpSbzaWyW6I',

  flyer: '1dQNVha-9vwW4_DlPTQKOzpD8_JnePvFncqsZGBaS4xk',
  social_media: '1PsDGkpOcnjHDj3GSFGdAMaytlOjfKh-8ZrAcz8RBvYI',
  referred_by_org: '1u40jlL9b6AP1qzMrHWvDVSfmyQvEolvWw_7EcB9hZA8',

  referred_by_friend: '1u40jlL9b6AP1qzMrHWvDVSfmyQvEolvWw_7EcB9hZA8',
  walked_in: '19JmAcDrcrNNbLp_54hZ8WeyMDxFa5klIJ_u3hnrqJL0',
  
  H4S: '1N7YoFMIlw-3jw2SvZ9GbFkvu-Y3xzFzxWpI5sdk5BJQ',
  B2B: '1Mm2ZcMCrAgP1XIZtOmyA85hdG1uUuX3CMoSNZDVkc8Y',
}
