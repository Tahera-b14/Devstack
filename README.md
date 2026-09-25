# 🧱 Dev Stack Builder

Build your ideal development stack. Browse frontend, backend, database, language,
styling, and DevOps tools side by side, search for what you need, and collect your
picks in a running "Your Stack" panel.

**Live Site:** _add your deployed link here_

## ✨ Features

- **Search and browse 12 technologies** loaded from a local JSON file, each with an
  icon, category, difficulty, star rating, and badge.
- **Build a stack interactively**  add a technology with one click, see it appear in
  the "Your Stack" sidebar, and remove one item or clear the whole stack at any time.
  Duplicate adds, removes, and clears all surface a toast notification
  (via `react-toastify`).
- **Fully responsive UI** with a dedicated mobile navbar (hamburger menu) and a
  single shared brand gradient (defined once as a CSS variable) reused across the
  brand name, hero heading, and every primary button.

## 🛠️ Built With

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)  dev server and build tool
- [Tailwind CSS v4](https://tailwindcss.com/)  styling
- [React-Toastify](https://fkhadra.github.io/react-toastify/)  alerts/notifications

## 🚀 Getting Started

\`\`\`bash
npm install
npm run dev
\`\`\`

## 💬 React Concept Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets you write HTML-like markup directly inside
JavaScript/TypeScript. It's used in React because it makes describing what the UI
should look like much easier to read and write than nested `createElement` calls 
under the hood it still compiles down to plain JavaScript function calls.

**2. What is the difference between props and state?**
Props are values passed *into* a component from its parent  a component can't
change its own props. State is data a component manages *itself* and can update
over time (with `useState`), which causes the component to re-render. In this
project, `tech` passed into `TechCard` is a prop; `stack` in `App` is state.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a function component hold and update local data between renders.
This project uses it for `technologies` (the loaded list), `loading`, `stack` (the
user's selected technologies), and `search` (the search box text)  all in `App.tsx`.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` runs side effects  code that reaches outside the component, like
fetching data  after render. Fetching `technologies.json` is a side effect, so it
belongs in `useEffect` with an empty dependency array `[]`, meaning it runs once
when `App` first mounts rather than on every re-render.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to track which item is which across re-renders, so it can
correctly add, remove, or reorder items without confusing one row for another. Using
each technology's `id` as the key (instead of the array index) keeps that identity
stable even if the list is filtered or reordered.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition,
instead of always rendering the same thing. `StackPanel` does this for the empty
state: when `stack.length === 0` it renders "Your stack is empty," and otherwise it
renders the list of selected items.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down as props (e.g. `App` passes `tech` and `isSelected` into
`TechCard`). To send something back up, the parent passes a *function* down as a
prop (e.g. `onAdd`), and the child calls that function with the relevant data
(`onAdd(tech)`)  this is how `TechCard` tells `App` to add a technology to the stack.
