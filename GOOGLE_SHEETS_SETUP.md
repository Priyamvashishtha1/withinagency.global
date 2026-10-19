# Google Sheets form submissions

The Introduction form posts to the site's server route. The server forwards each valid submission to the Apps Script in `google-apps-script/Code.gs`; the script appends a row to the spreadsheet from the provided link. The browser never receives the shared secret.

The script creates a tab named **Introduction Requests** with these columns:

1. Serial No
2. Submitted At
3. Name
4. Email
5. Phone Number
6. Country of Residence
7. Area of Interest
8. Message
9. Consent

## One-time Google setup

1. Open the target spreadsheet and choose **Extensions → Apps Script**.
2. Replace the editor contents with `google-apps-script/Code.gs` and save.
3. In **Project Settings → Script Properties**, add `SHARED_SECRET` with a long, random value. Use this exact same value in the website environment; do not put it in frontend code or commit it to Git.
4. Choose **Deploy → New deployment → Web app**. Set **Execute as** to your Google account and **Who has access** to **Anyone**, then deploy and authorize the script. This exposes a write-only endpoint; the script rejects requests without the shared secret and contains no read operation. Keep that secret private and rotate it if it is exposed.
5. Copy the deployed web app URL ending in `/exec`.

## Website environment

Set these server-side environment variables in the site's hosting provider and for local development (for local development, copy `.env.example` to `.env.local` and replace both example values):

- `GOOGLE_SHEETS_WEBHOOK_URL`: the deployed `/exec` URL.
- `GOOGLE_SHEETS_WEBHOOK_SECRET`: the exact `SHARED_SECRET` value from Apps Script.

Redeploy the website after adding or changing the variables. The form then shows a success message only after the sheet confirms that the row was written. If the variables are missing or Google rejects the request, the form reports that it could not save the enquiry.
