export interface AppTheme {
  name: string;
  label: string;
  tokens: Record<string, string>;
}

export const themes: AppTheme[] = [
  {
    name: 'light',
    label: '☀️ Light',
    tokens: {
      '--color-primary': '99 102 241',
      '--color-primary-light': '165 180 252',
      '--color-primary-dark': '67 56 202',
      '--color-secondary': '139 92 246',
      '--color-secondary-light': '196 181 253',
      '--color-secondary-dark': '109 40 217',
      '--color-accent': '245 158 11',
      '--color-success': '34 197 94',
      '--color-warning': '234 179 8',
      '--color-danger': '239 68 68',
      '--color-background': '255 255 255',
      '--color-surface': '248 250 252',
      '--color-border': '226 232 240',
      '--color-text-primary': '15 23 42',
      '--color-text-secondary': '100 116 139',
      '--color-text-disabled': '148 163 184',
    },
  },
  {
    name: 'dark',
    label: '🌙 Dark',
    tokens: {
      '--color-primary': '129 140 248',
      '--color-primary-light': '199 210 254',
      '--color-primary-dark': '99 102 241',
      '--color-secondary': '167 139 250',
      '--color-secondary-light': '221 214 254',
      '--color-secondary-dark': '139 92 246',
      '--color-accent': '251 191 36',
      '--color-success': '74 222 128',
      '--color-warning': '250 204 21',
      '--color-danger': '248 113 113',
      '--color-background': '10 10 10',
      '--color-surface': '30 30 30',
      '--color-border': '63 63 70',
      '--color-text-primary': '248 250 252',
      '--color-text-secondary': '148 163 184',
      '--color-text-disabled': '100 116 139',
    },
  },
  {
    name: 'brand-green',
    label: '🌿 Green',
    tokens: {
      '--color-primary': '16 185 129',
      '--color-primary-light': '110 231 183',
      '--color-primary-dark': '5 150 105',
      '--color-secondary': '20 184 166',
      '--color-secondary-light': '153 246 228',
      '--color-secondary-dark': '15 118 110',
      '--color-accent': '245 158 11',
      '--color-success': '34 197 94',
      '--color-warning': '234 179 8',
      '--color-danger': '239 68 68',
      '--color-background': '255 255 255',
      '--color-surface': '240 253 250',
      '--color-border': '209 250 229',
      '--color-text-primary': '6 78 59',
      '--color-text-secondary': '52 211 153',
      '--color-text-disabled': '167 243 208',
    },
  },
];
