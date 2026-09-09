# Sprint 2 — Stabilization, Iteration, and Food Recognition

> **Goal:** Stabilize the Sprint 1 client/coach experience, prioritize fixes and improvements based on Sprint 1 results, migrate the food and workout catalogs from Excel, and begin a validated food-calorie image-recognition capability.

> **Scope approach:** Sprint 2 backlog will be finalized after reviewing Sprint 1 feedback, defects, and usage. This document defines the baseline work and leaves capacity for the highest-impact findings.

---

## 1. Sprint 1 Follow-up

| Area           | Work                                                                                  | Priority |
| -------------- | ------------------------------------------------------------------------------------- | -------- |
| Fixes          | Resolve defects found through Sprint 1 QA, pilot feedback, and production monitoring. | P0       |
| Improvements   | Refine confusing or incomplete Sprint 1 flows based on client and coach feedback.     | P0       |
| Backlog review | Review Sprint 1 results and agree on the remaining Sprint 2 backlog and priorities.   | P0       |

**Acceptance criteria**

- Sprint 1 defects are triaged by severity and ownership.
- Critical and high-priority issues are resolved before Sprint 2 completion.
- Client and coach feedback is reviewed and converted into prioritized, actionable backlog items.
- Any Sprint 1 scope that is incomplete or needs revision is explicitly added to the Sprint 2 backlog.

---

## 2. Catalog Data Migration

| Feature                       | Description                                                                       | Priority |
| ----------------------------- | --------------------------------------------------------------------------------- | -------- |
| Food catalog migration        | Fully migrate the food database from the existing Excel sheets.                   | P0       |
| Workout catalog migration     | Fully migrate the workout database from the existing Excel sheets.                | P0       |
| Replace development seed data | Replace Sprint 1 dummy food and workout seed data with the migrated catalog data. | P0       |

**Acceptance criteria**

- All agreed food and workout Excel data is imported into the application database.
- Imported records preserve the required fields, relationships, and units from the source sheets.
- Duplicate, invalid, and incomplete source rows are identified and resolved or documented.
- The client and coach flows use the migrated catalog data rather than Sprint 1 dummy seed data.
- Import results are validated against the approved Excel source data.

---

## 3. Food Calorie Image Recognition

| Feature                | Description                                                                                        | Priority |
| ---------------------- | -------------------------------------------------------------------------------------------------- | -------- |
| Recognition foundation | Build the initial image-recognition flow for estimating food items and calories from a meal photo. | P1       |
| Validation prototype   | Evaluate recognition and calorie-estimation accuracy using representative meal images.             | P1       |

**Acceptance criteria**

- Client can submit a meal photo for analysis in a development or controlled test flow.
- The system returns identified food items and an estimated calorie total when recognition succeeds.
- The client can review and edit recognized items and calorie estimates before saving a meal log.
- Recognition failures and low-confidence results show clear guidance and allow manual meal entry.
- Test results document recognition accuracy, known limitations, and recommended next steps for production readiness.

---

## 4. Planned Features

| Area          | Feature           | Description                                                          | Priority |
| ------------- | ----------------- | -------------------------------------------------------------------- | -------- |
| Mobile client | Offline Support   | Allow clients to record meals/sessions offline and sync when online. | P1       |
| Notifications | Plan Assignments  | Notify clients when a new plan is assigned.                          | P1       |
| Notifications | Logging Reminders | Remind clients to log meals/sessions.                                | P1       |

---

## 5. Technical Considerations

| Area                     | Considerations                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Data Quality**         | Define migration validation, error reporting, and a correction process for Excel source data.                |
| **Recognition Privacy**  | Define consent, image retention, access control, and deletion behavior before production use of meal photos. |
| **Recognition Accuracy** | Treat calorie estimates as guidance; make estimates reviewable and editable before they affect meal logs.    |
| **Notifications**        | Notify clients when a new plan is assigned; remind to log meals/sessions.                                    |
| **Observability**        | Track Sprint 1 defects, migration outcomes, recognition failures, and low-confidence results.                |
