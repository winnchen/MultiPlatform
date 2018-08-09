/// <reference path="./index.d.ts"/>
declare let wx: any;

class WXPlatform implements IPlatform {
    request(url: string): void {
        wx.showModal({
            title: 'WXPlatform.request',
            content: url,	
        })
    }
}

export const platform = new WXPlatform();