export class Util {

    static splitStrByLen(str: string, len: number) {
        if (str.length <= len) {
            return [str];
        } else {
            const result = [];
            let start = 0;
            let end = len;
            while(end <= str.length) {
                result.push(str.substring(start, end));
                start += len;
                end += len;
            }
            return result
        }
    }
}