import config from '@ivanmaxlogiudice/eslint-config'

export default config(
    {},
    {
        rules: {
            'antfu/top-level-function': 'off',
            'node/prefer-global/process': 'off',
        },
    },
)
