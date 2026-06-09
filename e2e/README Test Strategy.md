# Todo Detox Assignment

## Overview

This project demonstrates End-to-End (E2E) mobile test automation using Detox with a React Native Todo application.

The objective of this assignment was to create a maintainable automation framework, identify the most important user journeys, and implement high-priority test cases within the recommended time limit.

---

## Technology Stack

* React Native
* Detox
* Jest
* Android Emulator
* GitHub

---

## Application Features

The Todo application supports:

* Create Todo
* View Todo
* Complete Todo
* Delete Todo
* Manage Multiple Todos

---

## Test Strategy

### Objective

Focus on the highest-value user workflows rather than attempting complete test coverage.

### Prioritization Approach

The application's primary business functionality revolves around managing Todo items. Therefore, testing was prioritized around the Todo lifecycle.

#### High Priority (P1)

1. Application Launch
2. Create Todo
3. Complete Todo
4. Delete Todo

#### Medium Priority (P2)

5. Create Multiple Todos

### Out of Scope

Due to the recommended time constraint, the following areas were not included:

* Performance Testing
* Accessibility Testing
* Offline Testing
* Cross-Device Testing

---

## Implemented E2E Test Cases

### TC001 – Verify Application Launch

**Purpose**

Verify that the application launches successfully and displays the main Todo screen.

**Expected Result**

Todo screen is visible.

---

### TC002 – Create New Todo

**Purpose**

Verify that a user can create a new Todo item.

**Expected Result**

The newly created Todo appears in the list.

---

### TC003 – Create Multiple Todos

**Purpose**

Verify that multiple Todo items can be added successfully.

**Expected Result**

All created Todo items appear in the list.

---

### TC004 – Complete Todo

**Purpose**

Verify that a Todo item can be marked as completed.

**Expected Result**

Todo state changes to completed.

---

### TC005 – Delete Todo

**Purpose**

Verify that a Todo item can be deleted successfully.

**Expected Result**

Todo item is removed from the list.

---

## Project Structure

```text
TodoDetoxAssignment
│
├── e2e
│   ├── app.e2e.js
│   └── jest.config.js
│
├── android
├── App.js
├── .detoxrc.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Setup Instructions

### Install Dependencies

```bash
npm install
```

### Start Metro

```bash
npx react-native start
```

### Run Android Application

```bash
npx react-native run-android
```

---

## Running Detox Tests

### Build Application

```bash
npx detox build -c android.emu.debug
```

### Execute Tests

```bash
npx detox test -c android.emu.debug
```

---

## Challenges Encountered

### 1. Android SDK Build Tools Issue

While setting up the project, Android Build Tools became corrupted and prevented successful builds.

**Resolution**

Reinstalled Android Build Tools using Android Studio SDK Manager.

---

### 2. Detox Windows Configuration

The default Detox configuration used:

```bash
./gradlew
```

which is compatible with macOS/Linux but not Windows.

**Resolution**

Updated Detox configuration to use:

```bash
gradlew.bat
```

for Windows compatibility.

---

### 3. Testability Improvements

Reliable UI automation requires stable locators.

**Resolution**

Added testID attributes to key UI components to improve test stability and maintainability.

---

## Future Improvements

If additional time were available, the framework could be extended with:

* Negative test scenarios
* Data-driven testing
* Accessibility validation
* Device compatibility testing
* CI/CD integration using GitHub Actions

---

## Conclusion

This project demonstrates a practical Detox-based E2E automation framework with a focus on critical user workflows, maintainability, and clear test prioritization. The selected test cases provide confidence in the application's core functionality while remaining aligned with the assignment's recommended time constraints.
