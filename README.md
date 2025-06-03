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
