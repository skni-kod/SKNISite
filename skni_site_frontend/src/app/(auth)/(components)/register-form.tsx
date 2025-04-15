"use client";

import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schemas/auth/register-schema";
import { z } from "zod";
import { Text } from "@/components/ui/text";
import { useTranslations } from "next-intl";

const RegisterForm = () => {
  const t = useTranslations("auth.register");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (values: z.infer<typeof registerSchema>) => {
    console.log(values);
  };

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.name")}</FormLabel>
                <FormControl>
                  <Input placeholder="Jan" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("form.surname")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Kowalski"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>{t("form.email")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="jan.kowalski@gmail.com"
                    {...field}
                    type={"email"}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>{t("form.password")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="*********"
                    {...field}
                    type={"password"}
                    disabled={isLoading}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>{t("form.confirmPassword")}</FormLabel>
                <FormControl>
                  <Input
                    placeholder="*********"
                    {...field}
                    type={"password"}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          variant={"default"}
          className="w-full bg-primary hover:bg-primary/80 text-secondary"
          disabled={isLoading}
        >
          {isLoading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
          {t("button")}{" "}
        </Button>

        <Text variant="p" className="text-muted-foreground">
          {t("hasAccount.text")}{" "}
          <Link
            href="/login"
            className="underline underline-offset-4 hover:text-primary"
          >
            {t("hasAccount.redirect")}{" "}
          </Link>{" "}
          !
        </Text>
      </form>
    </Form>
  );
};

export { RegisterForm };
