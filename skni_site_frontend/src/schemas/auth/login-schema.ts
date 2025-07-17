import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email({ message: "Nieprawidłowy format adresu email." }),
    password: z.string().nonempty({ message: "Hasło nie może być puste." }),
});

export { loginSchema };