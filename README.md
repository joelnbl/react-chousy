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

## 👨‍💻 Author

Made with ❤️ by **Joelnbl**  
🔗 [GitHub](https://github.com/joelnbl)  
🐦 [Twitter](https://twitter.com/joelnbl)

---

## 📝 License

MIT — use it freely, improve it, and share it!
