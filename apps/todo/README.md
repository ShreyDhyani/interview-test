# Todo Interview App

This app is intentionally a starter. Your goal is to implement core Todo functionality in clean, interview-friendly steps.

## Run the App

From the repo root:

```bash
yarn dev:todo
```

App URL: [http://localhost:3002](http://localhost:3002)

## Current Starter State

- Basic Next.js app structure in `apps/todo/app`
- Simple static UI in `app/page.tsx`
- No real todo state management yet
- No persistence yet

## Interview Tasks

### Task 1: Implement Add Todo

Implement real state for todos and allow adding new items from the input.

Requirements:
- Use React state for todo list
- Add on button click
- Add on Enter key press
- Ignore empty or whitespace-only input
- Clear input after successful add

### Task 2: Implement Toggle Complete

Allow users to mark todos complete/incomplete.

Requirements:
- Clicking checkbox toggles `done`
- Completed items should have visual feedback (already partially styled)
- Keep implementation immutable (no direct array/object mutation)

### Task 3: Implement Delete Todo

Allow removing a todo item.

Requirements:
- Add a delete action per item
- Remove only the targeted item
- Keep UI simple and accessible (button with label)

### Task 4: Persist Todos in Local Storage

Save and restore todos from `localStorage`.

Requirements:
- Load todos from storage on first render
- Save todos whenever list changes
- Handle empty or invalid stored values safely
- Use a stable storage key (example: `todo-app-items`)

## Suggested Submission Expectations

For interview readiness, your final solution should show:

- Clean state updates
- Predictable data model
- Local storage persistence correctness
- Good naming and component structure
- Basic accessibility considerations (labels, buttons, keyboard support)
