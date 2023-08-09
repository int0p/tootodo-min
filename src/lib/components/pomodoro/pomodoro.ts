
const pomoKey = Symbol();
function getFriendlyTime(minutesIN){
    const hours = (Math.floor(minutesIN / 3600)).toString().padStart(2, '0');
    const minutes = (Math.floor((minutesIN % 3600) / 60)).toString().padStart(2, '0');
    const seconds = (Math.floor(minutesIN % 60)).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`
}

export {pomoKey,getFriendlyTime};