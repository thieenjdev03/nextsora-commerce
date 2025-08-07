declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: {
        page_title?: string;
        page_location?: string;
        description?: string;
        fatal?: boolean;
        [key: string]: any;
      }
    ) => void;
  }
}

export {}; 