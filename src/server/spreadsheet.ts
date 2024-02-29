import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

import { env } from '~/env.mjs';
import { type FormPayload } from '~/pages/api/form';

import { sheetIDs, editSheetIDs, referralSources, InterestGrouping, type Interest } from '~/constants/Constants';
const mainSheets = ['1_7XPZN4Jh3Q1irMbYiFPuVnlyWoC5_4TbXx6ej2_lRk', '1lzBRKpAcZGPo3r6sDyoTQYhVuBZGFzheQcFidkKgOGU']



const client = new JWT({
  email: env.SHEETS_CLIENT_EMAIL,
  key: env.EMAIL_PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth: client });

export default async function updateSpreadsheet(payload: FormPayload) {
      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId: '1_7XPZN4Jh3Q1irMbYiFPuVnlyWoC5_4TbXx6ej2_lRk',
          range: 'A1:AL1',
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
      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId: '1lzBRKpAcZGPo3r6sDyoTQYhVuBZGFzheQcFidkKgOGU',
          range: 'A1:AL1',
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
      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId: sheetIDs[payload.referralSource],
          range: 'A1:AL1',
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
      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId: editSheetIDs[payload.referralSource],
          range: 'A1:AL1',
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

  const now = new Date();

  return [
    has('evictions'),   // A: Urgent/ Emergency Need	
    payload.firstName,  // B: First Name	
    payload.lastName,   // C: Last Name	
    payload.phone,      // D: Phone #	
    payload.email,      // E: Email	
    
    payload.contactMethod,  // F: Preferred contact method
    payload.language,       // G: Preferred language	
    
    payload.zip,      // H: Zip Code/Neighborhood	
    payload.inRegion, // I: Y/N (Live in the project area)
    
    '',  // J: Event Name	
    now.toLocaleDateString(),  // K: Date	
    now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles'}),  // L: Time
    
    'No',                                                                                   // M:  Completed Contact Intake	
    payload.communityOwner,                                                                 // N:  Become Community Owner of EBPREC	
    has(...InterestGrouping['Permanently Affordable Homeownership'], 'affordableHousing'),  // O:  EB PREC Orientation (1)	
    has('investor'),                                                                        // P:  CO/IO (1.a)	
    has('groupBuy'),                                                                        // Q:  Owner Groups (1.b)		
    has('groupBuy'),                                                                        // R:  Acquisitions (1.c)		
    has('landTrusts'),                                                                      // S:  CLT Education (1.d)	
    has(...InterestGrouping.Housing),                                                       // T:  Housing (2)	
    has('tenantRights', 'evictions'),                                                       // U:  Eviction Defense (2.a)	
    has('tenantRights', 'evictions'),                                                       // V:  Foreclosure Prevention (2.b)	
    has('tenantRights', 'buildingOrg'),                                                     // W:  Forming Tenants Association (2.c)	
    has('tenantRights'),                                                                    // X:  Landlord harassment or neglect (2.d)	
    has('adu'),                                                                             // Y:  Building ADUs (2.e)	
    has('neighbors'),                                                                       // Z:  BNSN info (3)	
    has('neighbors'),                                                                       // AA:  Job training/workforce development (3.a)	
    has('neighbors'),                                                                       // AB: Tree Planting (3.b)	
    has('neighbors'),                                                                       // AC: Aquaponics Farm (3.c)	
    has('neighbors', 'merchantsAssc'),                                                      // AD: SBA/ Support (3.d)	
    has('neighbors'),                                                                       // AE: Bike Program (3.e)	
    has('volunteering'),                                                                    // AF: EBPPREC (4)	
    has('volunteering'),                                                                    // AG: BNSN (4.a)	
    has('volunteering'),                                                                    // AG: Policy (4.b)	
    has('volunteering'),                                                                    // AI: TAs (4.c)	
    payload.notes,                                // AJ: Notes	
    referralSources[payload.referralSource],      // AK: How you find us?	
    'No',                                         // AL: Have we asked/recieved feedback
  ]
}
