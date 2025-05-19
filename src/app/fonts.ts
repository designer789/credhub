import localFont from 'next/font/local';

// Load the variable font for optimal performance
export const generalSans = localFont({
  src: [
    {
      path: '../../public/fonts/GeneralSans-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../../public/fonts/GeneralSans-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-general-sans',
});

// If you need specific weights instead of the variable font
export const generalSansRegular = localFont({
  src: '../../public/fonts/GeneralSans-Regular.woff2',
  weight: '400',
  display: 'swap',
});

export const generalSansMedium = localFont({
  src: '../../public/fonts/GeneralSans-Medium.woff2',
  weight: '500',
  display: 'swap',
});

export const generalSansBold = localFont({
  src: '../../public/fonts/GeneralSans-Bold.woff2',
  weight: '700',
  display: 'swap',
}); 