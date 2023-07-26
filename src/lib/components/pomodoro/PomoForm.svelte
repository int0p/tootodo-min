<script>
import {defaultTimerSet as defaultTimer} from "$stores/defaultSet.ts";
</script>

<form class="flex-col space-y-6 " action="#">
    <h3 class="mb-4 text-xl font-medium">Default Settings</h3>

    <div class="flex w-full justify-between space-x-4">
        <label class="space-y-2 w-1/2">
            <span>하루 시작 시간</span>
            <input type="time" name="day start time" placeholder="AM 07:00" required
                   bind:value={$defaultTimer.dayStartTime}/>
            <!--                todo: 디폴트 설정...-->
        </label>
        <label class="space-y-2 w-1/2">
            <span>하루 끝 시간</span>
            <input type="time" name="day end time" placeholder="PM 11:00" required
                   bind:value={$defaultTimer.dayEndTime}/>
        </label>
    </div>
    <div class="flex w-full justify-between space-x-4">
        <label class="space-y-2 w-1/4">
            <span>반복횟수</span>
            <input type="number" name="repeat time" min="1" max="20" required
                   bind:value={$defaultTimer.repeat}
            />
        </label>
        <div class="flex-col w-3/4">
            <label class="space-y-2 w-full">
                <span>공부 시간 [분]</span>
                <input type="range" name="day start time" placeholder="AM 07:00" required
                       bind:value={$defaultTimer.working}
                />
            </label>
            <label class="space-y-2 w-full">
                <span>쉬는 시간 [분]</span>
                <input type="range" name="day end time" placeholder="PM 11:00" required
                       bind:value={$defaultTimer.breaking}
                />
            </label>
        </div>
    </div>

    <label class="space-y-2 w-full">
        <span>알람</span>
        <div class="w-full flex space-x-4">
            <div class="flex w-1/2 justify-between space-x-2">
                <label class="space-y-2 w-full">
                    <span>session 전환</span>
                </label>
                <input bind:checked={$defaultTimer.alarmSession}
                       type="checkbox" required size="sm" style="width:26px; height:26px;"
                />
            </div>
            <div class="flex w-1/2 justify-between space-x-2">
                <label class="space-y-2 w-full">
                    <span>공부 끝!</span>
                </label>
                <input checked={$defaultTimer.alarmDone}
                       type="checkbox" required size="sm" style="width:26px; height:26px;"/>
            </div>
        </div>
    </label>

    <label class="space-y-2 w-full">
        <span>배경음</span>
        <div class="flex justify-between space-x-2">
            <input checked={$defaultTimer.useBgm}
                   type="checkbox"  required size="sm" style="width:40px; height:40px;"/>
            <input id="with_helper" class="mb-2 w-full"  type="file"
                   bind:value={$defaultTimer.bgm}
            />

        </div>
    </label>
    <div class="flex w-full justify-between space-x-2">
        <input type="button" class="w-1/3" on:click={$defaultTimer.reset()} value="초기화">
        <input type="submit" class="w-2/3" value="등록">
    </div>
</form>
