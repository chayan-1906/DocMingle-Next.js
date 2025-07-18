# 📝 DocMingle - Real-Time Collaborative Document Editor

[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-000000.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Liveblocks](https://img.shields.io/badge/Liveblocks-2.5.0-ff6b6b.svg)](https://liveblocks.io/)
[![Clerk](https://img.shields.io/badge/Clerk-5.3.0-6c5ce7.svg)](https://clerk.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)

> Real-time collaborative document editor (Google Docs clone) built with Next.js, featuring live editing, cursors, comments, and rich text formatting.

![logo](https://raw.githubusercontent.com/chayan-1906/DocMingle-Next.js/master/public/assets/icons/logo-icon.svg)

## ✨ Features

- 📝 **Rich Text Editor** - Lexical editor with advanced formatting 🎨
- 🤝 **Real-Time Collaboration** - Multiple users editing simultaneously ⚡
- 👥 **Live Cursors** - See other users' cursors in real-time 👀
- 💬 **Commenting System** - Add and reply to comments 💭
- 🔐 **Authentication** - Secure Clerk authentication 🛡️
- 📱 **Responsive Design** - Works on all devices 📺
- 🎨 **Modern UI** - Clean Tailwind CSS design ✨
- ⚡ **Performance** - Optimized for speed 🚀
- 🛡️ **Type Safety** - Full TypeScript support 🎯

## [Live Site (Vercel)](https://doc-mingle.vercel.app/)

## 📱 Screenshots

<div>
  <img src="https://github.com/user-attachments/assets/f6a5e7b3-d3a3-4c06-b339-167fed4aad9d" width="500" alt="Login Page" />
  <img src="https://github.com/user-attachments/assets/339c4f48-a0e6-451e-94c1-5692e2fba71a" width="500" alt="Dashboard" />
  <img src="https://github.com/user-attachments/assets/7e56250e-b00d-464b-bd00-4ca5ae817ee7" width="500" alt="Document Editor" />
  <img src="https://github.com/user-attachments/assets/c597d487-9831-4996-9a0c-56d88198aa3c" width="500" alt="Document Editor" />
</div>

## 🏗️ Tech Stack

### 🖥️ Frontend

- ⚛️ **Next.js** 14.2.5 - React framework 🚀
- 📘 **TypeScript** - Type safety 🛡️
- 🎨 **Tailwind CSS** 3.4.1 - Styling ✨
- 📝 **Lexical** 0.16.1 - Rich text editor 📖

### 🔄 Real-Time Features

- 🔗 **Liveblocks** 2.5.0 - Real-time collaboration 🤝
- ⚛️ **Liveblocks React** 2.5.0 - React integration 🔧
- 📝 **Liveblocks Lexical** 2.5.0 - Lexical editor integration 📚

### 🔐 Authentication & UI

- 🔒 **Clerk** 5.3.0 - User authentication 👤
- 🎯 **Radix UI** - Accessible components ♿
- 🎨 **Heroicons** - Icon library 🌟

### 🛠️ Utilities

- 🎯 **clsx** - Conditional classes 📋
- 🆔 **nanoid** - ID generation 🔢
- 📝 **jsm-editor** - Editor utilities 🛠️

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 🟢
- Clerk account 🔐
- Liveblocks account 🔗

### Installation

1. **Clone repository** 📥
   ```bash
   git clone https://github.com/chayan-1906/DocMingle-Next.js.git
   cd DocMingle-Next.js
   ```

2. **Install dependencies** 📦
   ```bash
   npm install
   ```

3. **Environment setup** ⚙️
   ```bash
   cp .env.example .env
   ```

4. **Configure environment** 🔧
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_OUT_URL=/sign-up
   LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
   NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=your_liveblocks_public_key
   ```

5. **Start development server** 🚀
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
src/
├── app/
│   ├── (auth)/           # Authentication pages
│   ├── (root)/           # Main application
│   ├── api/              # API routes
│   └── globals.css       # Global styles
├── components/
│   ├── editor/           # Editor components
│   │   └── plugins/      # Editor plugins
│   ├── ui/               # UI components
│   └── *.jsx             # Feature components
├── lib/
│   ├── actions/          # Server actions
│   └── utils.js          # Utility functions
├── globals/              # Global constants
└── styles/               # Theme styles
```

## 🔧 Core Components

### 📝 Editor

- **Lexical Editor** - Rich text editing ✍️
- **Toolbar Plugin** - Formatting controls 🛠️
- **Floating Toolbar** - Context-sensitive tools 🎯
- **Theme Configuration** - Custom styling 🎨

### 🤝 Collaboration

- **Liveblocks Room** - Real-time sync ⚡
- **Active Collaborators** - User presence 👥
- **Live Cursors** - Real-time cursors 🖱️
- **Comments** - Threaded discussions 💬

### 🔐 Authentication

- **Clerk Integration** - User management 👤
- **Protected Routes** - Secure access 🛡️
- **User Profiles** - Avatar and info 🧑‍💻

## 🔗 API Routes

| Method | Endpoint               | Description               |
|--------|------------------------|---------------------------|
| `POST` | `/api/liveblocks-auth` | Liveblocks authentication |

## 📊 Features Breakdown

### 📁 Document Management

- 📄 Create new documents
- 👁️ View all documents
- 📋 Document metadata
- ⏰ Creation timestamps

### 🤝 Real-Time Collaboration

- 👥 Multiple users editing
- 🎯 Live cursor tracking
- 🟢 Presence indicators
- 🔄 Conflict resolution

### ✍️ Rich Text Editing

- **Bold**, *italic*, underline ✏️
- 📝 Headings (H1, H2, H3)
- 📐 Text alignment
- 📄 Paragraph formatting

### 💬 Comments System

- ➕ Add comments
- 💭 Reply to comments
- 🧵 Comment threading
- ⚡ Real-time updates

## 🔒 Authentication Flow

1. **User Sign-In** - Clerk authentication
2. **Session Management** - Secure sessions
3. **Room Access** - Liveblocks authorization
4. **Real-Time Auth** - Live collaboration

## 🎨 Styling

### 🎯 Tailwind Configuration

- 🌈 Custom colors
- 📏 Typography scale
- 📱 Responsive breakpoints
- ✨ Animation utilities

### 🎭 Theme Support

- ☀️ Light theme
- 🌙 Dark theme
- 📝 Editor themes
- 🎨 Component variants

## 📈 Performance

- 🚀 **Server-Side Rendering** - Fast page loads
- 📦 **Code Splitting** - Optimized bundles
- 🖼️ **Image Optimization** - Next.js images
- 💾 **Caching** - Efficient data fetching

## 🔧 Development Scripts

```bash
# Development server
npm run dev

# Build production
npm run build

# Start production
npm start

# Lint code
npm run lint
```

## 🚀 Deployment

### Vercel Deployment

1. Connect GitHub repository
2. Set environment variables
3. Deploy automatically on push

### Environment Variables

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
- `NEXT_PUBLIC_CLERK_SIGN_OUT_URL`
- `LIVEBLOCKS_SECRET_KEY`

## 📋 Requirements

- **Node.js:** ≥18.0.0
- **Memory:** 512MB RAM minimum
- **Storage:** 1GB disk space

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 🐛 Known Issues

- None currently reported

## 👨‍💻 Author

**Padmanabha Das**

- GitHub: [@chayan-1906](https://github.com/chayan-1906)
- LinkedIn: [Padmanabha Das](https://www.linkedin.com/in/padmanabha-das-59bb2019b/)
- Email: padmanabhadas9647@gmail.com

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">
  <p>Made with ❤️ by Padmanabha Das</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
