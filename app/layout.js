import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: 'WE TRANSPORT STL LLC',
  description: 'Reliable Freight • Cargo Vans • Logistics',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
