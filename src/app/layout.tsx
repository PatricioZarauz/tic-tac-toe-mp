const locales = ['en', 'es'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children }: { children: React.ReactNode; }) {
  return (children);
};