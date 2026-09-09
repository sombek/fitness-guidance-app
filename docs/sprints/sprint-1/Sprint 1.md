# Sprint 1 — Phase 1 Scope

> **Goal:** Deliver the core client/coach loop for fitness guidance: clients can log in, follow meal and training plans, and submit progress; coaches can invite clients, create plans, and review progress.

---

## 1. Mobile (Client)

### 1.1 Users

| Feature | Description | Priority |
|---------|-------------|----------|
| Login | Authenticate into the mobile app using passwordless email sign-in. | P0 |

**Acceptance criteria**
- Client can request a magic link or one-time password (OTP) using their email address.


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
- Recorded meals include timestamp.
- Meal history is showing as list
---

### 1.3 Training

| Feature | Description | Priority |
|---------|-------------|----------|
| View training schedule | Display the client's assigned training schedule. | P0 |
| Record training sessions | Allow the client to log completed training sessions. | P0 |
| View training history | Show a history of recorded training sessions. | P1 |

**Acceptance criteria**
- Training schedule lists exercises
- Client can start a session, mark exercises complete, and add results (weight, reps).
- Completed sessions are saved with date/time and duration.
- Training history is showing as list

---

### 1.4 Progress

| Feature | Description | Priority |
|---------|-------------|----------|
| Record progress form | Submit a progress form (weight, measurements, notes). | P0 |
| View progress history | Display previously submitted progress forms and trends. | P1 |

**Acceptance criteria**
- Progress form includes weight, body measurements, and subjective notes.
- Client can submit progress forms on a daily basis with no submission limit.
- History shows entries in a timeline view with basic trend indicators.
- No restrictions on submission frequency (unlimited submissions allowed).

---

## 2. Web (Coach)

### 2.1 Users

| Feature | Description | Priority |
|---------|-------------|----------|
| Coach login | Authenticate into the coach web app using passwordless email sign-in. | P0 |
| Invite clients | Send invitations for clients to join the platform. | P0 |

**Acceptance criteria — Coach login**
- Coach can request a magic link or one-time password (OTP) using their email address.
- Invalid email addresses, expired links, and invalid OTPs show a clear error message.
- Coach can complete sign-in through the emailed magic link or OTP without a password.
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
- Progress form values are viewable in the selected client's timeline.

---

## 3. Technical Considerations

| Area | Considerations |
|------|----------------|
| **Authentication & Authorization** | Separate roles for client and coach; protect endpoints by role. |
| **Data Model** | Users, meal plans, meal logs, training plans, training sessions, progress forms, invites. |
| **Food & Workout Catalogs** | Use dummy seed data for food and workout catalogs during development. Do not add or migrate the Excel-based databases in Sprint 1; complete the Excel migration in Sprint 2. |
| **Audit & History** | Every recorded entry must have a created/updated timestamp and created-by reference. |
