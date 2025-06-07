![react-chousy banner](https://github.com/joelnbl/react-chousy/raw/master/react-chousy.png)

# 🎭 react-chousy

A lightweight 💡 React utility component that makes conditional rendering cleaner and more **readable** using JSX-friendly syntax.

No more messy `? :` everywhere — just clean and simple conditional blocks.

---

## 🚀 Features

✅ Intuitive JSX syntax  
✅ Type-safe with TypeScript  
✅ Fully tree-shakable  
✅ Works with any React component  
✅ Super lightweight (~300 bytes gzipped)

---

## 📦 Install

```bash
npm install react-chousy
```

---

## ✨ Usage

```tsx
import { ConditionalRender } from 'react-chousy';

<ConditionalRender condition={isLoggedIn}>
  {{
    true: <p>Welcome, hero 🦸!</p>,
    false: <p>Access denied! 🚫 Please log in.</p>
  }}
</ConditionalRender>
```

### 🧠 Bonus: Nesting

```tsx
<ConditionalRender condition={isLoggedIn}>
  {{
    true: (
      <ConditionalRender condition={hasProfile}>
        {{
          true: <p>Welcome to your profile 👤</p>,
          false: <p>Finish setting up your profile ✍️</p>
        }}
      </ConditionalRender>
    ),
    false: <p>Please log in to continue 👋</p>
  }}
</ConditionalRender>
```

---

## 🛠 API

| Prop       | Type                  | Description                            |
|------------|-----------------------|----------------------------------------|
| `condition`| `boolean`             | The condition to evaluate              |
| `children` | `{ true, false }` JSX | Content to render based on the result  |

---

## 🔀 SwitchCaseRender
A JSX-friendly alternative to switch statements. Pass a value and render different elements based on matched keys.

### ✨ Usage

```tsx
import { SwitchCaseRender } from 'react-chousy';

<SwitchCaseRender value={status}>
  {{
    idle: <p>Waiting...</p>,
    loading: <p>Loading...</p>,
    success: <p>✅ Success!</p>,
    error: <p>❌ Error</p>,
    default: <p>Unknown status</p>
  }}
</SwitchCaseRender>
```
--- 
### 📘 Real-world example
```tsx
import { SwitchCaseRender } from 'react-chousy';

const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

<SwitchCaseRender value={status}>
  {{
    idle: <p>Esperando acción...</p>,
    loading: <p>Cargando...</p>,
    success: <p>¡Completado con éxito!</p>,
    error: <p>Ocurrió un error.</p>,
    default: <p>Estado desconocido</p>,
  }}
</SwitchCaseRender>
```
---

## 🛠 API



| Prop       | Type                         | Description                                             |
|------------|------------------------------|---------------------------------------------------------|
| `value`    | `string \| number`           | The value to match                                      |
| `children` | `Record<string, ReactNode>`  | Keys that match the value + optional `default` fallback |




---
## 🌀 ChousyEach (Rails-inspired map/each for React)

A declarative, flexible, and beautiful way to render lists in React, inspired by Ruby/Rails' `each` method. Supports optional selection state and side effects out of the box.

### ✨ Usage

```tsx
import { ChousyEach } from 'react-chousy';

const fruits = ['🍎', '🍌', '🍇'];

<ChousyEach of={fruits}>
  {(fruit, idx) => (
    <span>{fruit}</span>
  )}
</ChousyEach>
```

### 🎯 With selection state (trackSelection)

```tsx
import { ChousyEach } from 'react-chousy';

const fruits = ['🍎', '🍌', '🍇'];

<ChousyEach of={fruits} trackSelection>
  {(fruit, idx, { selectedIdx, setSelectedIdx }) => (
    <button
      className={selectedIdx === idx ? 'font-bold text-blue-600' : 'text-gray-700'}
      onClick={() => setSelectedIdx(idx)}
    >
      {fruit}
    </button>
  )}
</ChousyEach>
```

### ⚡ With effect on list change (onChange)

```tsx
import { ChousyEach } from 'react-chousy';

const fruits = ['🍎', '🍌', '🍇'];

<ChousyEach
  of={fruits}
  onChange={list => console.log('List changed:', list)}
>
  {(fruit, idx) => <span>{fruit}</span>}
</ChousyEach>
```

### 🧭 Navbar highlighting (navHighlight)

```tsx
import { ChousyEach } from 'react-chousy';

const menu = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

// Assume you get currentPath from your router (e.g., window.location.pathname or a router hook)
const currentPath = '/about';

<ChousyEach
  of={menu}
  navHighlight
  getPath={item => item.path}
  currentPath={currentPath}
>
  {(item, idx, { isActive }) => (
    <a
      href={item.path}
      className={isActive ? 'text-blue-600 font-bold' : 'text-gray-700'}
    >
      {item.label}
    </a>
  )}
</ChousyEach>
```

---

## 🛠 ChousyEach API

| Prop            | Type                                               | Description                                                                 |
|-----------------|----------------------------------------------------|-----------------------------------------------------------------------------|
| `of`            | `T[]`                                              | Array of items to render                                                    |
| `children`      | `(item: T, idx: number, helpers?) => ReactNode`    | Render function for each item. If `trackSelection` or `navHighlight` is true, helpers are provided |
| `className`     | `string`                                           | Optional Tailwind classes for the `<ul>`                                    |
| `onChange`      | `(list: T[]) => void`                              | Optional effect callback when list changes                                  |
| `trackSelection`| `boolean`                                          | If true, exposes `selectedIdx` and `setSelectedIdx` to children             |
| `navHighlight`  | `boolean`                                          | If true, highlights the item whose path matches `currentPath`               |
| `getPath`       | `(item: T, idx: number) => string`                 | Function to extract the path from each item                                 |
| `currentPath`   | `string`                                           | The current path to match for highlighting                                  |

---
## 👨‍💻 Author

Made with ❤️ by **Joelnbl**  
🔗 [GitHub](https://github.com/joelnbl)  
🐦 [Twitter](https://twitter.com/joelnbl)

---
## 🙌 Contributors

Thanks to these awesome people:

- [@joelnbl](https://github.com/joelnbl) – Creator & Maintainer  
- [@SeveralReves](https://github.com/SeveralReves) – `SwitchCaseRender` component  



## 📝 License

MIT — use it freely, improve it, and share it!
