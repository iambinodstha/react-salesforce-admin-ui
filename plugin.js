const svgToDataUri = require('mini-svg-data-uri')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { spacing, borderWidth, borderRadius } = defaultTheme

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        [[`[type='checkbox']`, `[type='radio']`]]: {
            appearance: 'none',
            padding: '0',
            'print-color-adjust': 'exact',
            display: 'inline-block',
            'vertical-align': 'middle',
            'background-origin': 'border-box',
            'user-select': 'none',
            'flex-shrink': '0',
            height: spacing[4],
            width: spacing[4],
            color: theme('colors.blue.600', colors.blue[600]),
            'background-color': '#fff',
            'border-color': theme('colors.gray.500', colors.gray[500]),
            'border-width': borderWidth['DEFAULT'],
            '--tw-shadow': '0 0 #0000',
        },
        [`[type='checkbox']`]: {
            'border-radius': borderRadius['none'],
        },
        [`[type='radio']`]: {
            'border-radius': '100%',
        },
        [[`[type='checkbox']:focus`, `[type='radio']:focus`]]: {
            outline: '2px solid transparent',
            'outline-offset': '2px',
            '--tw-ring-inset': 'var(--tw-empty,/*!*/ /*!*/)',
            '--tw-ring-offset-width': '2px',
            '--tw-ring-offset-color': '#fff',
            '--tw-ring-color': theme('colors.blue.600', colors.blue[600]),
            '--tw-ring-offset-shadow': `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
            '--tw-ring-shadow': `var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
            'box-shadow': `var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)`,
        },
        [[`[type='checkbox']:checked`, `[type='radio']:checked`, `.dark [type='checkbox']:checked`, `.dark [type='radio']:checked`]]: {
            'border-color': `transparent`,
            'background-color': `currentColor`,
            'background-size': `100% 100%`,
            'background-position': `center`,
            'background-repeat': `no-repeat`,
        },
        [`[type='checkbox']:checked`]: {
            'background-image': `url("${svgToDataUri(
                `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
            )}")`,
        },
        [`[type='radio']:checked`]: {
            'background-image': `url("${svgToDataUri(
                `<svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`
            )}")`,
        },
        [`[type='checkbox']:indeterminate`]: {
            'background-image': `url("${svgToDataUri(
                `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`
            )}")`,
            'border-color': `transparent`,
            'background-color': `currentColor`,
            'background-size': `100% 100%`,
            'background-position': `center`,
            'background-repeat': `no-repeat`,
        },
        [[`[type='checkbox']:indeterminate:hover`, `[type='checkbox']:indeterminate:focus`]]: {
            'border-color': 'transparent',
            'background-color': 'currentColor',
        },
    })
})