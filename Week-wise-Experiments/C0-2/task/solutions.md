# C0-2 Quick Solutions

## 1) Movie Booking Dashboard
File: `movieDashboard.html`
- Displays 10 movie cards with ratings.
- `renderDirect()` performs a full DOM re-render.
- `renderVirtual()` updates only the changed rating text.
- Counts DOM operations for both methods.
- Use buttons:
  - `Direct DOM: Full re-render`
  - `Virtual DOM: Partial update`
  - `+1` / `-1` for direct update
  - `+V` / `-V` for virtual update

## 2) Student Analytics Library
File: `studentAnalytics.js`
- `getGrades(studentList, gradeCalculator)` is a higher-order grading function.
- `processToppers(gradeData, callback)` uses callback-based processing.
- `memoize()` caches GPA calculations.
- `createEvaluationCounter()` uses closure to count grade evaluations.
- Demo prints student grades, toppers, and memoized GPA results.

---

### Run instructions
- Open `movieDashboard.html` in a browser.
- Run `studentAnalytics.js` with Node: `node studentAnalytics.js`.
