let curPlatform = 'h5'

let platform: IPlatform = null;
import { H5Platform } from './h5'
import { WXPlatform } from './wx'

switch(curPlatform) {
    case 'h5':
        platform = new H5Platform();
        break;
    case 'wx':
        platform = new WXPlatform();
        break;
}

export { platform }