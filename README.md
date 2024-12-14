# React Router v6 Nested Routes Bug

This repository demonstrates a common bug encountered when using nested routes with `react-router-dom` v6. Incorrectly nesting `Routes` components can lead to unexpected routing behavior and prevent nested routes from rendering properly. 

## Bug Description
The bug arises from improper nesting of `<Routes>` components within each other. This results in routes failing to match correctly. The `bug.js` file demonstrates this error. The solution in `bugSolution.js` illustrates the correct nesting and usage of `<Routes>` for nested routes.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install`.
4. Run `npm start`.
5. Observe the routing behavior.  Note how in the `bug.js` file nested routes are not working as expected.

## Solution
The solution is to correctly nest your routes to ensure they render correctly.  The correct implementation can be found in the `bugSolution.js` file.