declare module '*.css';
declare module '*.png';
declare module '*.less' {
  const content: any;
  export default content;
}
declare var API_PREFIX: string;
declare var MOCK_CONFIG: string;

declare interface Window {
  cancelRequest: any;
  less: any;
}
