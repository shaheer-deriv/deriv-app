/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    corePlugins: {
        preflight: false,
    },
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                '.backface-hidden': {
                    'backface-visibility': 'hidden',
                },
                '.backface-visible': {
                    'backface-visibility': 'visible',
                },
                '.d-none': {
                    display: 'none',
                },
            });
        }),
    ],
    theme: {
        extend: {
            backfaceVisibility: {
                hidden: 'hidden',
            },
            borderRadius: {
                none: '0',
                xs: '4px',
                sm: '6px',
                default: '8px',
                lg: '12px',
                xl: '16px',
                full: '50%',
            },
            borderWidth: {
                0: '0',
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
                5: '5px',
                6: '6px',
                7: '7px',
                8: '8px',
                9: '9px',
                10: '10px',
            },
            boxShadow: {
                0: '0 0 0 0',
                1: '0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 -1px 2px 0 rgba(0, 0, 0, 0.03)',
                2: '1px 0 2px 0 rgba(0, 0, 0, 0.06), 1px 0 2px 0 rgba(0, 0, 0, 0.03)',
                3: '0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
                4: '-1px 0 2px 0 rgba(0, 0, 0, 0.06), -1px 0 2px 0 rgba(0, 0, 0, 0.03)',
                5: '0 -1px 4px 0 rgba(0, 0, 0, 0.08), 0 -1px 4px 0 rgba(0, 0, 0, 0.04)',
                6: '1px 0 4px 0 rgba(0, 0, 0, 0.08), 1px 0 4px 0 rgba(0, 0, 0, 0.04)',
                7: '0 1px 4px 0 rgba(0, 0, 0, 0.08), 0 1px 4px 0 rgba(0, 0, 0, 0.04)',
                8: '-1px 0 4px 0 rgba(0, 0, 0, 0.08), -1px 0 4px 0 rgba(0, 0, 0, 0.04)',
                9: '0 -4px 8px 2px rgba(0, 0, 0, 0.03), 0 -4px 8px 2px rgba(0, 0, 0, 0.02)',
                10: '4px 0 8px 2px rgba(0, 0, 0, 0.03), 4px 0 8px 2px rgba(0, 0, 0, 0.02)',
                11: '0 4px 8px 2px rgba(0, 0, 0, 0.03), 0 4px 8px 2px rgba(0, 0, 0, 0.02)',
                12: '-4px 0 8px 2px rgba(0, 0, 0, 0.03), -4px 0 8px 2px rgba(0, 0, 0, 0.02)',
                13: '0 -8px 16px 2px rgba(0, 0, 0, 0.04), 0 -8px 16px 2px rgba(0, 0, 0, 0.02)',
                14: '8px 0 16px 2px rgba(0, 0, 0, 0.04), 8px 0 16px 2px rgba(0, 0, 0, 0.02)',
                15: '0 8px 16px 2px rgba(0, 0, 0, 0.04), 0 8px 16px 2px rgba(0, 0, 0, 0.02)',
                16: '-8px 0 16px 2px rgba(0, 0, 0, 0.04), -8px 0 16px 2px rgba(0, 0, 0, 0.02)',
                17: '0 -16px 24px 4px rgba(0, 0, 0, 0.04), 0 -16px 24px 4px rgba(0, 0, 0, 0.02)',
                18: '16px 0 24px 4px rgba(0, 0, 0, 0.04), 16px 0 24px 4px rgba(0, 0, 0, 0.02)',
                19: '0 16px 24px 4px rgba(0, 0, 0, 0.04), 0 16px 24px 4px rgba(0, 0, 0, 0.02)',
                20: '-16px 0 24px 4px rgba(0, 0, 0, 0.04), -16px 0 24px 4px rgba(0, 0, 0, 0.02)',
                21: '0 -24px 48px 8px rgba(0, 0, 0, 0.06), 0 -24px 48px 8px rgba(0, 0, 0, 0.03)',
                22: '24px 0 48px 8px rgba(0, 0, 0, 0.06), 24px 0 48px 8px rgba(0, 0, 0, 0.03)',
                23: '0 24px 48px 8px rgba(0, 0, 0, 0.06), 0 24px 48px 8px rgba(0, 0, 0, 0.03)',
                24: '-24px 0 48px 8px rgba(0, 0, 0, 0.06), -24px 0 48px 8px rgba(0, 0, 0, 0.03)',
                25: '0 -32px 64px 12px rgba(0, 0, 0, 0.08), 0 -32px 64px 12px rgba(0, 0, 0, 0.04)',
                26: '32px 0 64px 12px rgba(0, 0, 0, 0.08), 32px 0 64px 12px rgba(0, 0, 0, 0.04)',
                27: '0 32px 64px 12px rgba(0, 0, 0, 0.08), 0 32px 64px 12px rgba(0, 0, 0, 0.04)',
                28: '-32px 0 64px 12px rgba(0, 0, 0, 0.08), -32px 0 64px 12px rgba(0, 0, 0, 0.04)',
            },
            colors: {
                brand: {
                    blue: '#85acb0',
                    brown: {
                        dark: '#664407',
                    },
                    coral: '#ff444f',
                    night: '#2a3052',
                    orange: '#ff6444',
                    pink: {
                        dark: '#3c2020',
                        default: '#ffc0cb',
                        light: '#ffe3e3',
                    },
                    red: {
                        dark: '#b33037',
                        darker: '#661b20',
                        light: '#ff444f',
                    },
                    violet: {
                        dark: '#4a3871',
                    },
                    yellow: {
                        dark: '#b3760d',
                        light: '#ffa912',
                    },
                },
                random: {
                    blue: '#3f6fe5',
                    green: '#71bd0e',
                    orange: '#ff8c00',
                    purple: '#db69e1',
                    teal: '#00a8af',
                },
                solid: {
                    red: {
                        100: '#ffe6e6',
                        200: '#ffbfbf',
                        300: '#ff9999',
                        400: '#ff7373',
                        500: '#ff4d4d',
                        600: '#f92e26',
                        700: '#e6190e',
                        800: '#db0800',
                        900: '#c40000',
                        1000: '#a60000',
                        1100: '#880000',
                        1200: '#6a0000',
                        1300: '#4d0000',
                    },
                    orange: {
                        100: '#feefe7',
                        200: '#fdd7c2',
                        300: '#fbbf9d',
                        400: '#faa778',
                        500: '#f88f54',
                        600: '#f7772f',
                        700: '#f55f0a',
                        800: '#d85409',
                        900: '#bc4908',
                        1000: '#9f3e07',
                        1100: '#833305',
                        1200: '#662804',
                        1300: '#4a1d03',
                    },
                    yellow: {
                        100: '#fff7e6',
                        200: '#ffeabf',
                        300: '#ffdd99',
                        400: '#ffce73',
                        500: '#ffbe4d',
                        600: '#ffae26',
                        700: '#ff9c13',
                        800: '#e18d00',
                        900: '#c47d00',
                        1000: '#a66c00',
                        1100: '#885a00',
                        1200: '#6a4800',
                        1300: '#4d3500',
                    },
                    mustard: {
                        100: '#fef9e7',
                        200: '#fdf1c2',
                        300: '#fce89d',
                        400: '#fbe079',
                        500: '#f9d754',
                        600: '#f8cf30',
                        700: '#f7c60b',
                        800: '#daaf0a',
                        900: '#bd9808',
                        1000: '#a18107',
                        1100: '#846a06',
                        1200: '#675305',
                        1300: '#4a3b03',
                    },
                    olive: {
                        100: '#fcfbe6',
                        200: '#f7f6c0',
                        300: '#f3f09a',
                        400: '#eeeb74',
                        500: '#e9e54e',
                        600: '#e5e028',
                        700: '#e0da02',
                        800: '#c6c102',
                        900: '#aca702',
                        1000: '#928e01',
                        1100: '#787401',
                        1200: '#5d5b01',
                        1300: '#434101',
                    },
                    green: {
                        100: '#e6fae9',
                        200: '#bfefc8',
                        300: '#99e2a8',
                        400: '#73d089',
                        500: '#4dbc6b',
                        600: '#26a44e',
                        700: '#008832',
                        800: '#00822a',
                        900: '#007a22',
                        1000: '#006f1b',
                        1100: '#006114',
                        1200: '#00500f',
                        1300: '#003d0a',
                    },
                    emerald: {
                        100: '#e6fff9',
                        200: '#bfffed',
                        300: '#99ffdf',
                        400: '#73f9cf',
                        500: '#4decbc',
                        600: '#26daa7',
                        700: '#00c390',
                        800: '#00bb86',
                        900: '#00ae7a',
                        1000: '#009e6d',
                        1100: '#00885d',
                        1200: '#006a4c',
                        1300: '#004d39',
                    },
                    tiffany: {
                        100: '#e8fdf8',
                        200: '#c5faef',
                        300: '#a2f7e5',
                        400: '#7ff3db',
                        500: '#5df0d1',
                        600: '#3aedc7',
                        700: '#17eabd',
                        800: '#14cfa7',
                        900: '#12b391',
                        1000: '#0f987b',
                        1100: '#0c7d65',
                        1200: '#0a624f',
                        1300: '#074639',
                    },
                    teal: {
                        100: '#e6fafa',
                        200: '#bff2f2',
                        300: '#99ebeb',
                        400: '#73e3e3',
                        500: '#4ddbdb',
                        600: '#26d4d4',
                        700: '#00cccc',
                        800: '#00b4b4',
                        900: '#009c9c',
                        1000: '#008585',
                        1100: '#006d6d',
                        1200: '#005555',
                        1300: '#003d3d',
                    },
                    seawater: {
                        100: '#e7f6f7',
                        200: '#c2e7eb',
                        300: '#9dd9df',
                        400: '#78cbd4',
                        500: '#54bdc8',
                        600: '#2faebc',
                        700: '#0aa0b0',
                        800: '#098d9c',
                        900: '#087b87',
                        1000: '#076872',
                        1100: '#05555e',
                        1200: '#044349',
                        1300: '#033035',
                    },
                    blue: {
                        100: '#e6f5ff',
                        200: '#bfe7ff',
                        300: '#99d8ff',
                        400: '#73c9ff',
                        500: '#53b9ff',
                        600: '#3daaff',
                        700: '#2c9aff',
                        800: '#1789e1',
                        900: '#0777c4',
                        1000: '#0066a6',
                        1100: '#005488',
                        1200: '#00426a',
                        1300: '#00304d',
                    },
                    sapphire: {
                        100: '#e7eafe',
                        200: '#c2c9fd',
                        300: '#9ea9fc',
                        400: '#7989fb',
                        500: '#5569f9',
                        600: '#3148f8',
                        700: '#0c28f7',
                        800: '#0b23da',
                        900: '#091fbd',
                        1000: '#081aa1',
                        1100: '#061584',
                        1200: '#051167',
                        1300: '#040c4a',
                    },
                    blueberry: {
                        100: '#ede6fc',
                        200: '#d2c0f7',
                        300: '#b69af3',
                        400: '#9b74ee',
                        500: '#804ee9',
                        600: '#6428e5',
                        700: '#4902e0',
                        800: '#4102c6',
                        900: '#3802ac',
                        1000: '#2f0192',
                        1100: '#270178',
                        1200: '#1e015d',
                        1300: '#160143',
                    },
                    grape: {
                        100: '#f2e7fa',
                        200: '#dfc3f3',
                        300: '#cc9eec',
                        400: '#b97ae5',
                        500: '#a556dd',
                        600: '#9231d6',
                        700: '#7f0dcf',
                        800: '#700cb7',
                        900: '#610a9f',
                        1000: '#530987',
                        1100: '#44076e',
                        1200: '#350556',
                        1300: '#26043e',
                    },
                    magenta: {
                        100: '#fae7fe',
                        200: '#f2c3fd',
                        300: '#ea9efc',
                        400: '#e27afb',
                        500: '#db56f9',
                        600: '#d331f8',
                        700: '#cb0df7',
                        800: '#b30cda',
                        900: '#9c0abd',
                        1000: '#8409a1',
                        1100: '#6c0784',
                        1200: '#550567',
                        1300: '#3d044a',
                    },
                    cherry: {
                        100: '#ffe6e7',
                        200: '#ffbfc6',
                        300: '#ff99a6',
                        400: '#ff7389',
                        500: '#ff4d6e',
                        600: '#f32656',
                        700: '#de0040',
                        800: '#d40032',
                        900: '#c40025',
                        1000: '#a6001a',
                        1100: '#880011',
                        1200: '#6a000a',
                        1300: '#4d0005',
                    },
                    coral: {
                        100: '#ffe6e6',
                        200: '#ffbfc2',
                        300: '#ff9ba3',
                        400: '#ff7e88',
                        500: '#ff6671',
                        600: '#ff535e',
                        700: '#ff444f',
                        800: '#e12e3a',
                        900: '#c41c28',
                        1000: '#a60e19',
                        1100: '#88030d',
                        1200: '#6a0004',
                        1300: '#4d0000',
                    },
                    slate: {
                        50: '#ffffff',
                        75: '#f6f7f8',
                        100: '#ebecef',
                        200: '#ced0d6',
                        300: '#b1b4bc',
                        400: '#9498a2',
                        500: '#787d88',
                        600: '#5c616d',
                        700: '#414652',
                        800: '#383d4a',
                        900: '#303541',
                        1000: '#282c38',
                        1100: '#20242f',
                        1200: '#181c25',
                        1300: '#11141b',
                        1400: '#000000',
                    },
                    grey: {
                        dark: '#d6d6d6',
                        default: '#d6dadb',
                        light: '#999999',
                    },
                },
                status: {
                    dark: {
                        danger: '#cc2e3d',
                        general: '#ffffff',
                        information: '#377cfc',
                        success: '#00a79e',
                        warning: '#ffad3a',
                    },
                    light: {
                        danger: '#ec3f3f',
                        information: '#377cfc',
                        success: '#4bb4b3',
                        warning: '#ffad3a',
                    },
                },
                system: {
                    dark: {
                        'active-background': '#323738',
                        'disabled-text': '#3e3e3e',
                        'general-text': '#c2c2c2',
                        'hover-background': '#242828',
                        'less-prominent': '#6e6e6e',
                        'less-prominent-text': '#6e6e6e',
                        'primary-background': '#0e0e0e',
                        'prominent-text': '#ffffff',
                        'secondary-background': '#151717',
                        'text-info-blue-background': '#182130',
                    },
                    light: {
                        'active-background': '#d6dadb',
                        'disabled-text': '#d6d6d6',
                        'general-text': '#333333',
                        'hover-background': '#e6e9e9',
                        'less-prominent': '#999999',
                        'less-prominent-text': '#999999',
                        'primary-background': '#ffffff',
                        'prominent-text': '#333333',
                        'secondary-background': '#f2f3f4',
                        'text-info-blue-background': '#dfeaff',
                    },
                },
            },
            fontFamily: {
                sans: ['IBM Plex Sans', 'sans-serif'],
            },
            fontSize: {
                '2xs': '8px',
                xs: '10px',
                sm: '12px',
                default: '14px',
                lg: '16px',
                xl: '18px',
                '2xl': '20px',
                '3xl': '22px',
                '4xl': '24px',
                '5xl': '26px',
                '6xl': '28px',
                '7xl': '30px',
                '8xl': '32px',
            },
            height: {
                'full-desktop': 'calc(100vh - 85px)',
                'full-mobile': 'calc(100vh - 40px)',
            },
            lineHeight: {
                0: '0',
                2: '2px',
                4: '4px',
                6: '6px',
                8: '8px',
                10: '10px',
                12: '12px',
                14: '14px',
                16: '16px',
                18: '18px',
                20: '20px',
                22: '22px',
                24: '24px',
                26: '26px',
                28: '28px',
                30: '30px',
            },
            opacity: {
                0: '0',
                4: '0.04',
                8: '0.08',
                16: '0.16',
                24: '0.24',
                32: '0.32',
                40: '0.4',
                48: '0.48',
                56: '0.56',
                64: '0.64',
                72: '0.72',
                80: '0.8',
                88: '0.88',
                96: '0.96',
                100: '1',
                overlay: 0.72,
                disabled: 0.32,
            },
            screens: {
                sm: { max: '600px' },
                md: { min: '601px' },
                lg: { min: '1280px' },
                xl: { min: '1440px' },
            },
            spacing: {
                0: '0px',
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
                5: '5px',
                6: '6px',
                7: '7px',
                8: '8px',
                9: '9px',
                10: '10px',
                11: '11px',
                12: '12px',
                14: '14px',
                16: '16px',
                18: '18px',
                20: '20px',
                22: '22px',
                24: '24px',
                26: '26px',
                28: '28px',
                30: '30px',
                32: '32px',
                34: '34px',
                36: '36px',
                38: '38px',
                40: '40px',
                42: '42px',
                44: '44px',
                46: '46px',
                48: '48px',
                50: '50px',
                52: '52px',
                54: '54px',
                56: '56px',
                58: '58px',
                60: '60px',
            },
        },
    },
};
