declare interface IPlatform {
   request(url: string): void;
}

declare module '*./PLATFORM' {
    const platform: IPlatform;
    export { platform };
}