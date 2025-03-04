# Fridge View Full-Stack Application

This is a settings table for mock quantum computer information. This frontend is a React App built with Vite and the backend is built using Flask.

## Setup

### Clone the Repository

```bash
git clone https://github.com/mcrich921/fridge-view.git
cd fridge-view
```

### Backend

First, download everything

```bash
cd backend
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

Then, activate the server:

```bash
flask --app app run
```

### Frontend

Install dependencies and run the server

```bash
cd ../frontend
npm install
npm run dev
```

After that, something like this should pop up.

```bash
  VITE v6.2.0  ready in _ ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Visit the localhost link to view the website.

Once there, click the Settings button or visit http://localhost:5173/settings
