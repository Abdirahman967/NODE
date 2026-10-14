# Node.js Checkpoint

## Setup
```bash
npm install
```

## Tasks
| # | File | Run |
|---|------|-----|
| 1 | `hello-world.js` | `node hello-world.js` |
| 2 | `server.js` | `node server.js` → open http://localhost:3000 |
| 3 | `create-file.js` / `read-file.js` | `node create-file.js` then `node read-file.js` |
| 4 | `password-generator.js` | `node password-generator.js` |
| 5 | `email-sender.js` | `node email-sender.js` |

## Email setup (task 5)
1. Copy `.env.example` to `.env` and fill in your details.
2. For Gmail, turn on 2-Step Verification and create an **App Password**
   (Google Account → Security → App passwords). Use it as `EMAIL_PASS`.
3. `.env` is in `.gitignore`, so your credentials never get pushed to GitHub.
