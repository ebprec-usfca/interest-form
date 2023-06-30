import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

import { env } from '~/env.mjs';
import { type FormPayload } from '~/pages/api/form';

import { sheetIDs, referralSources, InterestGrouping, type Interest } from '~/constants/Constants';

const client = new JWT({
  email: env.SHEETS_CLIENT_EMAIL,
  key: env.EMAIL_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth: client });

export default async function updateSpreadsheet(payload: FormPayload) {
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetIDs[payload.referralSource],
      range: 'A1:AK1',
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          getRowData(payload),
        ],
      },
    });
    console.log('Spreadsheet updated');
  } catch(err) {
    console.error('Spreadsheet update failed:', err);
  }
}

// get the row data from the payload
function getRowData(payload: FormPayload): string[] {
  // O(n) creation of a set, then O(1) lookup
  const set: Set<Interest> = new Set(payload.interests);
  const has = (...interest: Interest[]) => {
    for (const i of interest) {
      if (set.has(i)) return 'Yes';
    }
    return 'No';
  }

  return [
    has('evictions'),   // A: Urgent/ Emergency Need	
    payload.firstName,  // First Name	
    payload.lastName,   // Last Name	
    payload.phone,      // Phone #	
    payload.email,      // Email	
    
    payload.language,   // Preferred language	
    
    payload.zip,  // Zip Code/Neighborhood	
    payload.inRegion,                                         // Y/N (Live in the project area)
    
    '',  // Event Name	
    '',  // Date	
    '',  // Time	
    
    'No',                                                                                   // L:  Completed Contact Intake	
    payload.communityOwner,                                                                 // M:  Become Community Owner of EBPREC	
    has(...InterestGrouping['Permanently Affordable Homeownership'], 'affordableHousing'), // N:  EB PREC Orientation (1)	
    has('investor'),                                                                        // O:  CO/IO (1.a)	
    has('groupBuy'),                                                                       // P:  Owner Groups (1.b)		
    has('groupBuy'),                                                                       // Q:  Acquisitions (1.c)		
    has('landTrusts'),                                                                     // R:  CLT Education (1.d)	
    has(...InterestGrouping.Housing),                                                       // S:  Housing (2)	
    has('tenantRights', 'evictions'),                                                      // T:  Eviction Defense (2.a)	
    has('tenantRights', 'evictions'),                                                      // U:  Foreclosure Prevention (2.b)	
    has('tenantRights', 'buildingOrg'),                                                   // V:  Forming Tenants Association (2.c)	
    has('tenantRights'),                                                                   // W:  Landlord harassment or neglect (2.d)	
    has('adu'),                                                                             // X:  Building ADUs (2.e)	
    has('neighbors'),                                                                       // Y:  BNSN info (3)	
    has('neighbors'),                                                                       // Z:  Job training/workforce development (3.a)	
    has('neighbors'),                                                                       // AA: Tree Planting (3.b)	
    has('neighbors'),                                                                       // AB: Aquaponics Farm (3.c)	
    has('neighbors', 'merchantsAssc'),                                                     // AC: SBA/ Support (3.d)	
    has('neighbors'),                                                                       // AD: Bike Program (3.e)	
    has('volunteering'),                                                                    // AE: EBPPREC (4)	
    has('volunteering'),                                                                    // AF: BNSN (4.a)	
    has('volunteering'),                                                                    // AG: Policy (4.b)	
    has('volunteering'),                                                                    // AH: TAs (4.c)	
    `${payload.contactMethod}\n${payload.notes || ""}`, // 	AI: Notes	
    referralSources[payload.referralSource],      // 	AJ: How you find us?	
    'No',                                         // 	AK: Have we asked/recieved feedback
  ]
}
