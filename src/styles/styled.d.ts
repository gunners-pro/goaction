import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      primaryHover: string;
      secondary: string;
      grayBar: string;
      other: string;
      text: string;
      textDark?: string;
      title: string;
      background: string;
    }
  }
}
