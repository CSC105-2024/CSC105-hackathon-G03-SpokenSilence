import {z} from "zod";

type User = {
    name: string,
    username: string,
    surname: string,
    password: string,
    url_user: string
}

type Flower = {
    name: string,
    message: string,
    url_flower: string,
    access_key: number,
}

type SuccessResponse<T = void> = {
    success: true;
    message: string;
} & (T extends void ? {} : { data: T });

type ErrorResponse = {
    success: false;
    error: string;
    isFormError?: boolean;
};

const CreateSchema = z.object({
    username: z.string().min(3),
    surname: z.string().min(3),
    email: z.string().email("Invalid email format"),
    password: z
        .string()
        .trim()
        .refine(
            (value) =>
                /^(?=(?:.*[A-Z]){1,})(?=(?:.*[!@#$&*]){1,})(?=(?:.*[0-9]){2,})(?=(?:.*[a-z]){2,}).*$/.test(
                    value,
                ),
            {
                message:
                    "Password must include at least 1 uppercase letter, 2 lowercase letters, 2 digits, and 1 special character",
            },
        ),
});

export type {ErrorResponse, SuccessResponse, Flower, User}
export {CreateSchema}