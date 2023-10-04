export function generateOneTimePasscode(){
    let result = '';
    let num;
    const length = 6;
    for (let i = 0; i < length; i++){
        num = Math.floor(Math.random() * 10);
        result += num;
    }

    return result
}

