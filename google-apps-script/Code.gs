const SPREADSHEET_ID = '1uzLxWyBjgEoVhVVtpfS9HxYm8gVTiPFCZKFY8IPiHKI';
const SHEET_NAME = 'Introduction Requests';
const HEADERS = [
  'Serial No',
  'Submitted At',
  'Name',
  'Email',
  'Phone Number',
  'Country of Residence',
  'Area of Interest',
  'Message',
  'Consent',
];

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents);
    const expectedSecret = PropertiesService.getScriptProperties().getProperty('SHARED_SECRET');
    if (!expectedSecret || payload.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: 'Unauthorized' });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
      let sheet = spreadsheet.getSheetByName(SHEET_NAME);
      if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

      if (sheet.getLastRow() === 0) {
        sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
        sheet.setFrozenRows(1);
      }

      const nextRow = sheet.getLastRow() + 1;
      const interests = Array.isArray(payload.interests) ? payload.interests.join(', ') : '';
      sheet.getRange(nextRow, 1, 1, HEADERS.length).setValues([[
        nextRow - 1,
        new Date(),
        String(payload.name || ''),
        String(payload.email || ''),
        String(payload.phone || ''),
        String(payload.country || ''),
        interests,
        String(payload.message || ''),
        payload.consent === true ? 'Yes' : 'No',
      ]]);
      return jsonResponse({ ok: true, serialNo: nextRow - 1 });
    } finally {
      lock.releaseLock();
    }
  } catch (error) {
    return jsonResponse({ ok: false, error: 'Unable to save submission' });
  }
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
