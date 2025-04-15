import { z } from "zod";

const registerSchema = z
    .object({
        firstName: z
            .string()
            .min(1, { message: "Imię jest wymagane." })
            .max(50, { message: "Imię nie może przekroczyć 50 znaków." }),
        lastName: z
            .string()
            .min(1, { message: "Nazwisko jest wymagane." })
            .max(50, { message: "Nazwisko nie może przekroczyć 50 znaków." }),
        email: z.string().email({ message: "Nieprawidłowy format adresu email." }),
        password: z
            .string()
            .min(8, { message: "Hasło musi mieć co najmniej 8 znaków." })
            .regex(/[a-zA-Z]/, {
                message: "Hasło musi zawierać przynajmniej jedną literę.",
            })
            .regex(/[0-9]/, {
                message: "Hasło musi zawierać przynajmniej jedną cyfrę.",
            })
            .regex(/[^a-zA-Z0-9]/, {
                message: "Hasło musi zawierać przynajmniej jeden znak specjalny.",
            }),
        confirmPassword: z.string().min(8, { message: "" }),
    })
    .superRefine((val, ctx) => {
        if (val.password !== val.confirmPassword) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Hasła się nie pokrywają.",
                path: ["confirmPassword"],
            });
        }
    });

export { registerSchema };