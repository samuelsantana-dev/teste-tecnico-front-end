import { z } from "zod";
export const loginSchema = z.object({
    email: z.email("Email inválido"),
    password: z.string().min(5, "Senha deve ter no mínimo 6 caracteres"),
})

export const registerSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
  verifyPassword: z.string().min(6, "Confirmação de senha deve ter no mínimo 6 caracteres"),
  phone: z.object({
    country: z.string().min(1, "Código do país é obrigatório"),
    ddd: z.string().min(2, "DDD inválido").max(3, "DDD inválido"),
    number: z.string().min(8, "Número inválido"),
  }),
}).refine((data) => data.password === data.verifyPassword, {
  message: "As senhas não conferem",
  path: ["verifyPassword"],
});
