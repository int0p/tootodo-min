// 참고 링크: https://svelte.dev/repl/4dc8559756cf491abe7ad8f7189a8873?version=3.38.3
import { readable, derived } from 'svelte/store'
import moment from "moment";

export const current = readable(new Date(), set => {
    const interval = setInterval(() => {
        set(new Date());
    }, 1000);

    return () => clearInterval(interval);
});

Date.prototype.getWeek = function() {
    let dt = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - dt) / 86400000) + dt.getDay()+1)/7);
};
export const currentTime = derived(current, $current => {
        let hours = $current.getHours();
        let minutes = $current.getMinutes();
        let seconds = $current.getSeconds();
        let year = $current.getFullYear();
        let month = $current.getMonth()+1;//월 0~11
        let week:number = $current.getWeek();//주 0~53
        let date = $current.getDate(); //일 1~31
        let day = $current.getDay(); //요일 0~6
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const fullTime = `${(hours%12).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        const shortTime = `${(hours%12).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
        const shortDate = `${month.toString().padStart(2, '0')}/${date.toString().padStart(2, '0')}`;
        const fullDate = `${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
        return { month, week, date, day, shortDate, hours, minutes, seconds, fullTime,shortTime, fullDate };
    }
);

