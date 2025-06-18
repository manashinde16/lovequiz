
# 💖 My GF App – A Personalized Romantic Quiz App for Her

This project is a heartfelt, beautifully crafted mobile app built entirely with **React Native (Expo)** — made as a personal gift for developer brothers to show their love to there girl. It's not just a quiz; it's an emotional experience filled with carefully written questions, AI-generated dreamy plans, vibey animations, and love.

Every detail — from the sparkle button to the heart animation and the music in the background — is designed to make her feel special.

````markdown
## ✨ What This App Does

- 🧠 Asks **10 personalized questions** from a set of 150+
- 💌 Based on her answers, generates:
  - A **3–4 line Dream Travel Date Plan**
  - A **7-line romantic “Her Vibe Summary”**
- 🎵 Plays romantic lo-fi background music
- 💖 Features animated hearts, sparkly buttons, soft gradients
- 🔐 Uses secure sign-up/login with email (Clerk Auth)
- 🔁 Allows restarting the quiz anytime
- 🎨 UI is girly, soft, and designed to feel romantic and magical

---

## 🛠️ Tech Stack

| Feature | Technology |
|--------|------------|
| Frontend | React Native + Expo + TypeScript |
| Auth | [Clerk](https://clerk.dev) (email/password login) |
| AI | [Cohere AI](https://cohere.com) for prompt-based date/vibe generation |
| Music & Animations | Lottie, Expo AV, Expo Linear Gradient |
| Build Tool | EAS Build (`.aab` → `.apk`) |
| Optional Storage (not required) | UploadThing (used in earlier stages, not active now) |

---

## 🔑 API Keys Required

To run the app completely:

### 1. **Clerk API Key**
Create an account on [https://clerk.dev](https://clerk.dev) and get your `CLERK_PUBLISHABLE_KEY`.

### 2. **Cohere AI Key**
Create a free account on [https://cohere.com](https://cohere.com)  
Then get your API key for generating date plans and vibe summaries.

> 💡 Store both in a `config.ts` or `.env` file:
```ts
export const CLERK_KEY = "your-clerk-key-here";
export const COHERE_API_KEY = "your-cohere-api-key-here";
````

---

## 📦 How to Run Locally

> This is an **Expo-managed project** — works great on Android and iOS via Expo Go or emulator.

### ✅ 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/my-gf-app.git
cd my-gf-app
```

### ✅ 2. Install dependencies

```bash
npm install
```

### ✅ 3. Set up your API keys

Update your `config.ts` or `.env` with:

```ts
export const CLERK_KEY = "your_clerk_key";
export const COHERE_API_KEY = "your_cohere_key";
```

### ✅ 4. Start the app

```bash
npx expo start
```

Scan the QR code using **Expo Go** or run it in an Android/iOS emulator.

---

## 📲 How to Build the App (APK / AAB)

### ✅ Build AAB file (for Google Play)

```bash
npx eas build --platform android
```

> This gives you an `.aab` file (used for publishing or converting to APK)

---

### ✅ Convert `.aab` to `.apk` (for direct phone install)

Use [BundleTool](https://github.com/google/bundletool) to convert:

```bash
java -jar bundletool-all-x.y.z.jar build-apks \
--bundle=your-app.aab \
--output=output.apks \
--mode=universal \
--ks=my-release-key.jks \
--ks-key-alias=my-key-alias \
--ks-pass=pass:yourpass \
--key-pass=pass:yourpass
```

Then:

```bash
rename output.apks output.zip
unzip output.zip
```

Inside `universal/` you'll find `universal.apk` → install on your phone.

---

## 📁 Folder Structure (Simplified)

```
my-gf-app/
├── app/
│   ├── (auth)/         → Sign-in / Sign-up screens
│   ├── (tabs)/         → Home & Result screens
├── ai/                 → AI prompt generation logic
├── api/                → Cohere API interaction
├── assets/
│   ├── animations/     → Lottie heart & sparkle JSONs
│   └── audio/          → Background romantic music
├── utils/              → Question bank (JSON)
├── config.ts           → Your API keys
```

---

## ❤️ Why I Made This App

I made this not for a company or a resume — but to create something *beautiful, thoughtful, and fun* for someone I love.
It’s more than just an app — it’s a memory, an experience, a smile, and a connection.

If you're reading this and inspired — go build something meaningful too.

---

## 📝 License

MIT — but don’t forget to **build with love** 💌
Credit is always appreciated.

---

## 🙌 Connect

If you like this app, give it a ⭐ or share your thoughts.
This app is open, but the love behind it is personal ✨

```

---

Let me know if you want:
- A version with your actual GitHub repo link auto-filled
- Help with uploading screenshots or a demo
- Or want to write a pinned tweet for it 😉

You’ve built something special, bro. Time to share it proudly 💖
```
