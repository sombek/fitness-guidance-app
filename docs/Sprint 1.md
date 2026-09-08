# Sprint 1 — Phase 1 Scope

> **Goal:** Deliver the core client/coach loop for fitness guidance: clients can log in, follow meal and training plans, and submit progress; coaches can invite clients, create plans, and review progress.

---

## 1. Mobile (Client)

### 1.1 Users

| Feature | Description | Priority |
|---------|-------------|----------|
| Login | Authenticate into the mobile app with secure credentials. | P0 |

**Acceptance criteria**
- Client can log in with email/username and password.
- Invalid credentials show a clear error message.
- Successful login redirects to the app home/dashboard.
- Session/token is persisted across app restarts (where secure).

---

### 1.2 Food

| Feature | Description | Priority |
|---------|-------------|----------|
| View meal plan | Display the current meal plan assigned by the coach. | P0 |
| Record meals | Allow the client to log the meals they have eaten. | P0 |
| View meal history | Show a history of previously recorded meals. | P1 |

**Acceptance criteria**
- Meal plan is visible per day/week with meal type (breakfast, lunch, dinner, snack).
- Client can mark meals as eaten, skipped, or partially eaten.
- Recorded meals include timestamp and optional notes/photo.
- Meal history is filterable by date range.

---

### 1.3 Training

| Feature | Description | Priority |
|---------|-------------|----------|
| View training schedule | Display the client's assigned training schedule. | P0 |
| Record training sessions | Allow the client to log completed training sessions. | P0 |
| View training history | Show a history of recorded training sessions. | P1 |

**Acceptance criteria**
- Training schedule lists exercises, sets, reps, and rest times.
- Client can start a session, mark exercises complete, and add results (weight, reps, duration, RPE).
- Completed sessions are saved with date/time and duration.
- Training history is filterable by date range and exercise.

---

### 1.4 Progress

| Feature | Description | Priority |
|---------|-------------|----------|
| Record progress form | Submit a periodic progress form (weight, measurements, photos, notes). | P0 |
| View progress history | Display previously submitted progress forms and trends. | P1 |

**Acceptance criteria**
- Progress form includes weight, body measurements, progress photos, and subjective notes.
- Client can submit a new form only within the allowed cadence (e.g., once per week).
- History shows entries in a timeline view with basic trend indicators.

---

## 2. Web (Coach)

### 2.1 Users

| Feature | Description | Priority |
|---------|-------------|----------|
| Coach login | Authenticate into the coach web app with secure credentials. | P0 |
| Invite clients | Send invitations for clients to join the platform. | P0 |

**Acceptance criteria — Coach login**
- Coach can log in with email/username and password.
- Invalid credentials show a clear error message.
- Successful login redirects to the coach dashboard.
- Session/token is persisted securely across browser sessions.

**Acceptance criteria — Invite clients**
- Coach can send an invite by email.
- Invited client receives a signup/activation link.
- Coach sees the invite status (pending, accepted, expired).

---

### 2.2 Food

| Feature | Description | Priority |
|---------|-------------|----------|
| Plan meals | Create and assign meal plans to clients. | P0 |
| Review meals progress | Review what clients have logged against the meal plan. | P1 |

**Acceptance criteria**
- Coach can build meal plans with days, meal types, food items, quantities, and macros.
- Meal plans can be assigned to one or more clients.
- Review screen highlights compliance (completed, skipped, unlogged).

---

### 2.3 Training

| Feature | Description | Priority |
|---------|-------------|----------|
| Plan training | Create and assign training programs/schedules to clients. | P0 |
| Review training sessions | Review client-submitted training sessions. | P1 |

**Acceptance criteria**
- Coach can create training plans with workouts, exercises, sets/reps, and notes.
- Plans can be assigned to clients with start dates.
- Review screen shows session completion, results, and client notes.

---

### 2.4 Progress

| Feature | Description | Priority |
|---------|-------------|----------|
| Review clients' progress | View submitted progress forms and trends per client. | P1 |

**Acceptance criteria**
- Coach can view all progress forms for a selected client.
- Dashboard shows key trends (weight change, measurement changes over time).
- Progress photos are viewable in a gallery/timeline.

---

## 3. Cross-Cutting Concerns

| Area | Considerations |
|------|----------------|
| **Authentication & Authorization** | Separate roles for client and coach; protect endpoints by role. |
| **Data Model** | Users, meal plans, meal logs, training plans, training sessions, progress forms, invites. |
| **Notifications** | Notify clients when a new plan is assigned; remind to log meals/sessions. |
| **Offline Support** | Allow clients to record meals/sessions offline and sync when online. |
| **Audit & History** | Every recorded entry must have a created/updated timestamp and created-by reference. |

---

## 4. Definition of Done

- [ ] Feature is implemented for both mobile (client) and web (coach) where applicable.
- [ ] Unit and integration tests pass.
- [ ] UI matches approved designs or wireframes.
- [ ] API endpoints are documented.
- [ ] Security review for authentication/authorization paths.
- [ ] Smoke-tested on target devices/browsers.