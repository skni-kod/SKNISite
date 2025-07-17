import { RegisterForm } from "../(components)/register-form";
import { Logo } from "@/components/logo";
import { Text } from "@/components/ui/text";
import { useTranslations } from "next-intl";

const RegisterPage = () => {
  const t = useTranslations("auth.register");

  return (
    <main className="w-full flex flex-row">
      <div className="w-full md:w:1/2 bg-primary hidden sm:block">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <Logo />
        </div>
      </div>
      <div className="w-full md:w:1/2 flex items-center justify-center">
        <div className="w-full px-10 flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <Text variant={"h1"} className="font-bold uppercase">
              {t("title")}
            </Text>
            <Text variant={"h6"} className="font-light">
              {t("subtitle")}
            </Text>
          </div>
          <RegisterForm />
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;
