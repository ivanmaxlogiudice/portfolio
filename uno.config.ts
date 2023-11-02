import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
import { colors } from 'unocss/preset-mini'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            scale: 1.2,
            warn: true,
        }),
        presetWebFonts({
            fonts: {
                rubik: [
                    {
                        name: 'Rubik',
                        weights: [400, 500, 700],
                    },
                ],
            },
            provider: 'bunny',
        }),
    ],
    theme: {
        colors: {
            gray: colors.zinc,
            primary: colors.green,
        },
        container: {
            maxWidth: {
                '2xl': '90rem',
                'xl': '70rem',
            },
            padding: {
                DEFAULT: '1rem',
            },
        },
    },
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
})
