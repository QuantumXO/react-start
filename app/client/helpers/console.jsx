
export default (context, type = 'log') => {

    let result;

    switch(type) {
        case 'log':
            result = console.log(context);
            break;

        case 'warn':
            result = console.warn(context);
            break;

        case 'error':
            result = console.error(context);
            break;
    }

    return result;
}
