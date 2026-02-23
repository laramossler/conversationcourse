// ============================================================
// Google Apps Script — Feedback Form Backend
// Receives POST requests and writes responses to a Google Sheet.
//
// SETUP (takes ~2 minutes):
//
// 1. Create a new Google Sheet:
//    - Go to https://sheets.google.com and create a new spreadsheet
//    - Name it something like "Art of Conversation — Feedback"
//    - In Row 1, add these column headers (one per cell):
//      A: Timestamp
//      B: Name
//      C: Rating
//      D: What Resonated
//      E: What to Change
//      F: Who to Recommend To
//      G: Quote
//      H: Attribution Style
//      I: Attribution Detail
//      J: Quote Consent
//      K: Anything Else
//
// 2. Open the Apps Script editor:
//    - In your Google Sheet, go to Extensions > Apps Script
//    - Delete any code in the editor
//    - Paste this entire file's contents into the editor
//    - Click the Save icon (or Ctrl+S)
//
// 3. Deploy as a web app:
//    - Click "Deploy" > "New deployment"
//    - Click the gear icon next to "Select type" and choose "Web app"
//    - Set "Execute as" to "Me"
//    - Set "Who has access" to "Anyone"
//    - Click "Deploy"
//    - Authorize the app when prompted (click through the "unsafe" warning — it's your own script)
//    - Copy the Web app URL
//
// 4. Paste the URL into feedback.html:
//    - Open feedback.html
//    - Find the line: var GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';
//    - Replace YOUR_GOOGLE_APPS_SCRIPT_URL with the URL you copied
//
// Done! Form submissions will now appear as rows in your Google Sheet.
// ============================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.submitted_at || new Date().toISOString(),
      data.name || '',
      data.rating || '',
      data.resonated || '',
      data.improve || '',
      data.recommend || '',
      data.quote || '',
      data.attribution_style || '',
      data.attribution_detail || '',
      data.quote_consent === true ? 'Yes' : 'No',
      data.anything_else || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for CORS preflight (though we use no-cors on the client)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'Feedback endpoint is running.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
