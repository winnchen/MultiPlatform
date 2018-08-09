/// <reference path="./index.d.ts"/>

export class H5Platform implements IPlatform {
    request(url: string): void {
        window.alert(`H5Platform.request\n${url}`);
    }
}