# Email subscribe form → Google Sheet

The subscribe form on your home page sends submissions to a Google Apps Script that appends each email (and date) to a Google Sheet. You can download the sheet as Excel anytime (**File → Download → Microsoft Excel (.xlsx)**).

## One-time setup

### 1. Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.
2. Name it (e.g. “Blog subscribers”).
3. In the first row, put headers: **Email** in A1 and **Date** in B1.
4. (Optional) Share the sheet only with yourself so it stays private.

### 2. Add the script

1. In the sheet, open **Extensions → Apps Script**.
2. Delete any code in the editor and paste the script below.
3. Save (Ctrl/Cmd + S) and name the project (e.g. “Blog subscribe”).

```javascript
function doGet() {
  return ContentService.createTextOutput(JSON.stringify({ message: 'Subscribe form endpoint; use POST from the blog.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var body = e.postData && e.postData.contents ? JSON.parse(e.postData.contents) : {};
    var email = (body.email || '').toString().trim();
    if (!email) {
      return response(400, { error: 'Missing email' });
    }
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.appendRow([email, new Date()]);
    return response(200, { ok: true });
  } catch (err) {
    return response(500, { error: String(err.message) });
  }
}

function response(code, obj) {
  var out = ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  return out;
}
```

### 3. Deploy as web app

1. In Apps Script, click **Deploy → New deployment**.
2. Click the gear next to “Select type” and choose **Web app**.
3. Set:
   - **Description:** e.g. “Subscribe form”
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**, authorize the app when asked (choose your Google account and allow access).
5. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/.../exec`).

### 4. Add the URL to your blog

1. Open your blog repo and edit `hugo.toml`.
2. Set `subscribeFormEndpoint` to the URL you copied (inside quotes):

```toml
subscribeFormEndpoint = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```

3. Save, commit, and push (e.g. run `./deploy.sh`). The form will appear on the home page and new signups will show up in your sheet.

## Download as Excel

In the Google Sheet: **File → Download → Microsoft Excel (.xlsx)**.

## Troubleshooting

- **Form doesn’t appear:** Make sure `subscribeFormEndpoint` in `hugo.toml` is set and not empty, and that you’ve rebuilt/redeployed the site.
- **Submissions not in the sheet:** Confirm the script is deployed as “Anyone” and that you’re using the **exec** URL (ends with `/exec`). Test by opening the URL in a browser; you may see a simple JSON response or a blank page—that’s normal for a POST-only endpoint.
- **“Something went wrong”:** The browser can’t read the script’s response (cross-origin). The submission may still have been written to the sheet—check the sheet. If it’s missing, re-check the deployment URL and that the script runs as “Me” with “Anyone” access.
