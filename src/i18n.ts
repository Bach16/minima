import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['es', 'en'];
 
export default getRequestConfig(async ({locale}) => {
    const baseLocal = new Intl.Locale(locale).baseName
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(baseLocal)) notFound();
 
  return {
    messages: (await import(`../messages/${baseLocal}.json`)).default
  };
});