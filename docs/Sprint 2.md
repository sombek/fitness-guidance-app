# Sprint 2 — Phase 2 Scope

> **Goal:** Improve reliability and engagement for the core client/coach loop by adding offline support, review capabilities, and notifications.

---

## 1. Mobile (Client)

### 1.1 Food

| Feature | Description | Priority |
|---------|-------------|----------|
| View meal history | Show a history of previously recorded meals with date filters. | P0 |
| Offline meal logging | Record meals without an internet connection and sync when online. | P0 |

**Acceptance criteria**
- Meal history is filterable by date range.
- Recorded meals are queued locally when offline.
- Pending changes sync automatically when the device comes back online.
- Sync conflicts are handled with clear user feedback.

---

### 1.2 Training

| Feature | Description | Priority |
|---------|-------------|----------|
| View training history | Show a history of recorded training sessions with date/exercise filters. | P0 |
| Offline training logging | Record training sessions without an internet connection and sync when online. | P0 |

**Acceptance criteria**
- Training history is filterable by date range and exercise.
- Active training sessions can be completed while offline.
- Completed sessions are queued locally and sync when the device is online.
- Sync conflicts are handled with clear user feedback.

---

### 1.3 Progress

| Feature | Description | Priority |
|---------|-------------|----------|
| View progress history | Display previously submitted progress forms and basic trends. | P0 |

**Acceptance criteria**
- History shows entries in a timeline view with basic trend indicators.
- Progress photos are viewable in a gallery/timeline.

---

## 2. Web (Coach)

### 2.1 Food

| Feature | Description | Priority |
|---------|-------------|----------|
| Review meals progress | Review what clients have logged against the meal plan. | P0 |

**Acceptance criteria**
- Review screen highlights compliance (completed, skipped, unlogged).
- Filters by client, date range, and meal type.

---

### 2.2 Training

| Feature | Description | Priority |
|---------|-------------|----------|
| Review training sessions | Review client-submitted training sessions. | P0 |

**Acceptance criteria**
- Review screen shows session completion, results, and client notes.
- Filters by client, date range, and workout/program.

---

### 2.3 Progress

| Feature | Description | Priority |
|---------|-------------|----------|
| Review clients' progress | View submitted progress forms and trends per client. | P0 |

**Acceptance criteria**
- Coach can view all progress forms for a selected client.
- Dashboard shows key trends (weight change, measurement changes over time).
- Progress photos are viewable in a gallery/timeline.

---

## 3. Cross-Cutting Concerns

| Area | Considerations |
|------|----------------|
| **Offline Sync** | Design a robust local queue, conflict resolution, and retry strategy for mobile. |
| **Push Notifications** | Notify clients about new plans, reminders to log, and sync status. |
| **Analytics & Trends** | Aggregate progress data for trend charts on both client and coach sides. |
| **Performance** | Optimize image handling for progress photos and large history lists. |

---

## 4. Definition of Done

- [ ] Feature is implemented and tested on target devices/browsers.
- [ ] Offline scenarios are manually tested (airplane mode, poor connectivity).
- [ ] Sync behavior is documented for support and QA.
- [ ] UI matches approved designs or wireframes.
- [ ] API changes are documented.