import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export const supportedLocales = ["pl"];
const defaultLocale = "pl";

export default getRequestConfig(async () => {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");
  let locale =
    (await cookies()).get("NEXT_LOCALE")?.value || acceptLanguage || "";

  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
