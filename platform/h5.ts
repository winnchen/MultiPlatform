/// <reference path="./index.d.ts"/>

class H5Platform implements IPlatform {
    request(url: string): void {
        window.alert(`H5Platform.request: ${url}`);
    }
}

export const platform = new H5Platform();