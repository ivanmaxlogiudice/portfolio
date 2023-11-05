import { randomUUID } from 'node:crypto'

import { Resend } from 'resend'
import { flatten, safeParse } from 'valibot'

import { contactSchema } from '~/utils'

const isDev = process.env.NODE_ENV === 'development'
const resend = new Resend(useRuntimeConfig().resendApiKey)

export default defineEventHandler(async (event) => {
    const result = safeParse(contactSchema, await readBody(event), { abortPipeEarly: true })

    if (!result.success) {
        throw createError({
            data: flatten(result.issues).nested,
            statusCode: 422,
        })
    }

    const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        headers: {
            'X-Entity-Ref-ID': randomUUID(),
        },
        html: `
            <b>From</b>: ${result.output.name} ${result.output.email}<br/>
            <b>Message</b>: <p>${result.output.message}</p>
        `,
        subject: 'Contact message from Personal Portfolio',
        to: isDev ? 'delivered@resend.dev' : 'ivanmaxlogiudice@gmail.com',
    })

    if (data.error) {
        throw createError({
            statusCode: 400,
            statusMessage: data.error.message,
        })
    }

    return { message: 'Message sended succesfully.' }
})
