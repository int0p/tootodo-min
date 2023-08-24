function minutesToCustomString(minutesIN:number){
    const hours = (Math.floor(minutesIN / 3600)).toString().padStart(2, '0');
    const minutes = (Math.floor((minutesIN % 3600) / 60)).toString().padStart(2, '0');
    const seconds = (Math.floor(minutesIN % 60)).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`
}
function addTime(times:string[]){
    let totalSeconds = 0;
    times.forEach(time => {
        const [hours, minutes, seconds] = time.split(':').map(Number);
        totalSeconds += hours * 3600 + minutes * 60 + seconds;
    });

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}H ${minutes}M`
    // return [hours, minutes, seconds]
    //     .workingBoard(value => String(value).padStart(2, '0')) // 두 자리 숫자로 패딩
    //     .join(':');
}
export { minutesToCustomString,addTime}