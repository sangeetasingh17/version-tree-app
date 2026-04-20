# 🌳 Version Tree App

A full-stack application to visualize hierarchical version data (like Git history) in a tree structure with features like ancestor highlighting, pagination, and expand/collapse.

---

## 🚀 Live Demo

> [Version Tree App](https://version-tree-app-vercel-ouiinxzy1-sangeetasingh17s-projects.vercel.app/)

---

## 🧠 Features

* 🌲 Tree-based version visualization
* 🎯 Select a node and highlight its ancestor path
* 🔽 Expand / collapse branches
* 📄 Pagination without breaking tree structure
* ⚡ Backend API with PostgreSQL
* ☁️ Production-ready deployment setup

---

## 🏗️ Tech Stack

**Frontend**

* Next.js (App Router)
* React
* Tailwind CSS

**Backend**

* Next.js API Routes

**Database**

* PostgreSQL (via Supabase)

**Deployment**

* Vercel (recommended) or Render

---

## 📁 Project Structure

```
src/
  app/
    page.tsx              # Main UI
    api/
      versions/
        route.ts          # Backend API
  components/
    VersionTable.tsx      # Table UI
  lib/
    tree.ts               # Tree logic (build + flatten)
    db.ts                 # DB connection
```

---

## ⚙️ Local Setup

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/version-tree-app.git
cd version-tree-app
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup environment variables

Create a `.env.local` file:

```env
DATABASE_URL=your_postgresql_connection_string
```

---

### 4. Setup Database (Supabase)

Use PostgreSQL via Supabase.

Run this SQL:

```sql
CREATE TABLE versions (
  id TEXT PRIMARY KEY,
  parent_id TEXT,
  name TEXT,
  created_by TEXT,
  created_at TIMESTAMP,
  type TEXT
);
```

Insert sample data:

```sql
INSERT INTO versions VALUES
('v1', NULL, 'Initial Version', 'Alice', NOW(), 'TRUNK'),
('v2', 'v1', 'Update Config', 'Bob', NOW(), 'BRANCH'),
('v3', 'v1', 'Experimental', 'Carol', NOW(), 'BRANCH'),
('v4', 'v2', 'Bug Fix', 'Alice', NOW(), 'RELEASE');
```

---

### ⚠️ Important (DB Connection)

Use **connection pooling URL** from Supabase:

* Format:

```
postgresql://postgres:<password>@xxx.pooler.supabase.com:6543/postgres
```

* Replace `<password>` with your DB password
* Required for serverless environments

---

### 5. Run locally

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🧪 Production Build (Local Test)

```bash
npm run build
npm start
```

---

## ☁️ Deployment

### Option 1: Vercel (Recommended)

1. Push repo to GitHub
2. Import into Vercel
3. Add environment variable:

```env
DATABASE_URL=your_connection_string
```

4. Deploy

---

### Option 2: Render

* Build Command:

```bash
npm install && npm run build
```

* Start Command:

```bash
npm start
```

---

## 🔐 Environment Variables

| Variable     | Description           |
| ------------ | --------------------- |
| DATABASE_URL | PostgreSQL connection |

---

## 🧠 How It Works

### 1. Data Flow

```
DB → API → Tree Builder → Flatten → UI
```

---

### 2. Core Logic

* Convert flat DB data → tree structure
* Flatten tree → render in table
* Maintain parent-child order
* Highlight ancestor path using parent map

---

### 3. Key Functions

* `buildTree()` → constructs hierarchy
* `flattenTree()` → prepares UI data
* `buildParentMap()` → enables ancestor tracing

---

## ⚠️ Common Issues

### ❌ 500 Error on API

* Check DATABASE_URL
* Ensure SSL is enabled
* Verify table exists

---

### ❌ Works locally but not in production

* Missing env variables in deployment
* Using localhost DB instead of cloud DB

---

## 🚀 Future Improvements

* Add create/update/delete APIs
* Search with tree preservation
* Virtualized rendering for large datasets
* Authentication

---

## 👩‍💻 Author

Sangeeta Singh

---

## ⭐ If you found this useful

Give it a star ⭐ on GitHub!
