declare module 'fast-two-sms' {
  interface SendMessageOptions {
    authorization: string;
    message: string;
    numbers: string[];
  }

  const fast2sms: {
    sendMessage(options: SendMessageOptions): Promise<any>;
  };

  export default fast2sms;
} 