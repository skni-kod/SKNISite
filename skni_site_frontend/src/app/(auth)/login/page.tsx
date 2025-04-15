import { LoginForm } from "../(components)/login-form";
import { Logo } from "@/components/logo";
import { Text } from "@/components/ui/text";
import { useTranslations } from "next-intl";

const LoginPage = () => {
  const t = useTranslations("auth.login");

  return (
    <main className="w-full flex flex-row">
      <div className="w-full md:w:1/2 flex items-center justify-center">
        <div className="w-full px-10 flex flex-col space-y-8">
          <div className="flex flex-col space-y-3">
            <Text variant="h1" className="uppercase">
              {t("title")}
            </Text>
            <Text variant="h5" className="font-light">
              {t("subtitle")}
            </Text>
          </div>
          <LoginForm />
        </div>
      </div>
      <div className="w-full md:w:1/2 bg-primary hidden sm:block">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Logo />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
