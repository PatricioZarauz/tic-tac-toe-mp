import Test from '@/components/Test';
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('Home');

  return (
    <main>
      <h1 className="mx-auto w-fit py-12 text-2xl font-bold">
        {t('title')}
      </h1>
      <Test />
    </main>
  );
};