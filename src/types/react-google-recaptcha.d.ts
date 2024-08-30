declare module 'react-google-recaptcha' {
  import { Component } from 'react';

  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (value: string | null) => void;
    onExpired?: () => void;
    onErrored?: () => void;
    theme?: 'light' | 'dark';
    size?: 'normal' | 'compact' | 'invisible';
    hl?: string;
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {}
}