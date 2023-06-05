
import {TypeOf, object, string} from 'zod';

export const createUserSchema = object({
    body: object ({
        name: string({
            required_error: "Name is required"
        }),
        password: string({
            required_error: "Name is required"
        }).min(6, "password too short- should be 6 characters minimum"),
        passwordConfirmation: string({
            required_error: "Password is required"
        }).min(6, "password too short- should be 6 characters minimum"),
        
        email: string({
            required_error: "Email is required"
        }).email("Email not Valid!!!"),

    }).refine((data)=> data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ['passwordConfirmation'],
    })
})

export type createUserInput = Omit<TypeOf<typeof createUserSchema>, "body.passwordConfirmation">;