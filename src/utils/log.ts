export const Info = (logStr: String, ...rest) => {
    let len = logStr.length + 1;
    let paramLen = rest.length;
    
    console.log(Array(len).join('-'));
    
    if (paramLen === 0) {
        console.log(logStr);
    } else {
        console.log(logStr, rest);
    }

    console.log(Array(len).join('-'));
}