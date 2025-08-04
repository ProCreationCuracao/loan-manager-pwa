# Loan Manager PWA

## Prerequisites

- Node.js v16+ and npm/pnpm installed
- Supabase project (URL & anon key)
- GitHub account for Actions CI

## Environment Variables

Create a `.env.local` file in the project root with:

```bash
NEXT_PUBLIC_SUPABASE_URL=<your_supabase_url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
```

## Running Locally

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm run dev
   ```
3. Open your browser at `http://localhost:3000`. You should see the **Loan Manager Dashboard**.

## Testing Real-Time Updates

1. In your Supabase dashboard, open the **SQL Editor**.
2. Run an `INSERT` statement to add a new loan:
   ```sql
   INSERT INTO loans (borrower, amount, due_date)
   VALUES ('Alice', 5000, '2025-10-15');
   ```
3. Save. Return to your app page. The **Active Loans** list should auto-refresh within seconds, showing the new loan.

## Running Tests & CI

- **Local tests:**
  ```bash
  pnpm run test
  ```
- **CI in GitHub Actions:** on every push to `main`, the workflow in `.github/workflows/ci.yml` runs:
  - `pnpm install`
  - `pnpm run build`
  - `pnpm run test`

## Deploying

We recommend deploying on Vercel:
1. Import your GitHub repo into Vercel.
2. Set the same environment variables in Vercel dashboard.
3. Deploy. Your PWA will be available at `https://<your-domain>`.