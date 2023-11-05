import { email, minLength, object, string } from 'valibot'

export const contactSchema = object({
    email: string([
        minLength(1, 'Please enter your email.'),
        email('The email address is badly formatted.'),
    ]),
    message: string([
        minLength(1, 'Please enter your message.'),
    ]),
    name: string([
        minLength(1, 'Please enter your name.'),
    ]),
})
