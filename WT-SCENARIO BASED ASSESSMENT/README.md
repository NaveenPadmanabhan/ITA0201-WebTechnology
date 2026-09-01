# University Course Registration Portal — Glassmorphism UI

## Files
- `index.html` — semantic HTML/XHTML-style document structure, navigation, table, lists, form and contact details.
- `style.css` — glassmorphism visual design, CSS selectors, box model, Grid/Flexbox, hover effects and responsive media queries.
- `script.js` — course array/objects, dynamic course rendering, validation, reusable credit calculation, event handling and registration summary.
- `README.md` — requirement mapping and execution notes.

## How to run
1. Keep all three source files in the same folder.
2. Open `index.html` in a modern browser.
3. Fill the registration form.
4. Select one or more courses.
5. Click **Generate Registration Summary**.
6. Open Developer Tools → Console to see the debugging logs.

## Assignment requirement mapping
1. University title, navigation, course information and contact details → `index.html`
2. Five courses with Course Code, Course Name, Credits and Course Type → Courses table
3. Ordered/unordered lists and internal/external-style hyperlinks → instructions, eligibility and navigation links
4. Registration form with Register Number, Student Name, Email, Department, Semester and Course Selection → registration section
5. CSS selectors, box model, Flexbox/Grid, responsive design, hover effects and spacing → `style.css`
6. Mandatory field, email and semester validation → `validateForm()` in `script.js`
7. Selected course data stored as a JavaScript array of objects → `courses`
8. Reusable `calculateSelection()` function → returns selected course count and total credits
9. Dynamic registration summary without reload → `displaySummary()`
10. Developer Tools / `console.log()` debugging evidence → submit handler logs validation and selected data

## Notes
The course names, codes, departments and contact details are sample academic data because the assignment PDF specifies the required fields but does not provide a fixed university dataset.

Source basis: ITA02 Web Technology Assignment 1, which requires an interactive University Course Registration Portal with HTML/XHTML, tables/lists/forms, CSS layout and responsiveness, JavaScript validation, course objects/arrays, credit calculation, dynamic summary and debugging.
