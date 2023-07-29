
import moment from "moment/moment.js";
import {settings} from "$stores/useLocStorage.js";
const pomoKey = Symbol();
let interval = null;
function startTimer(pomoInfo,settings){
    pomoInfo.isRunning = true;
    if(pomoInfo.timerStatusBefore === "IDLE"){
        pomoInfo.isRunning = true;
        pomoInfo.timerStatus = "WORKING";
        pomoInfo.timeLeft = settings.working * 60;
        pomoInfo.cycle.count = 1;
        pomoInfo.cycle.start = moment().format('hh:mm');
        pomoInfo.cycle.end= moment().add(settings.working, 'minutes').format('hh:mm');
    }
    interval = setInterval(()=>{
        pomoInfo.timeLeft--;
        if(pomoInfo.timeLeft <= 0){
            clearInterval(interval);
            pomoInfo.timerStatus = "BREAKING";
            pomoInfo.timeLeft = settings.breaking;
        }
    }, 1000)
    return pomoInfo;
};
function pauseTimer(){
    clearInterval(interval);
};
function resetTimer(){

};
function passSession(){

}
export {pomoKey,startTimer,pauseTimer,resetTimer,passSession};