<script setup>
    import { useAppStore } from '@/store/appStore';
    import { formatTime } from '@/utils/formatTime';

    const store = useAppStore();
</script>

<template>
    <Transition>
        <div class="detailed-statistics container">
            <h2>Задание выполнено!</h2>
            <div class="element">
                <div class="label">Количество знаков в задании:</div>
                <div class="value">{{ store.getTaskText.length }}</div>
            </div>
            <div class="element">
                <div class="label">Количество нажатий</div>
                <div class="value">{{ store.getTaskStatus.taps }}</div>
            </div>
            <div class="element">
                <div class="label">Количество ошибок:</div>
                <div class="value">{{ store.getTaskStatus.mistakes }}</div>
            </div>
            <div class="element">
                <div class="label">Затраченное время: </div>
                <div class="value">{{ formatTime(store.getTaskStatus.timer) }}</div>
            </div>
            <div class="element">
                <div class="label">Скорость: </div>
                <div class="value">{{ store.getTaskStatus.speed }} знаков/мин</div>
            </div>
            <div class="element">
                <div class="label">Точность: </div>
                <div class="value">{{ store.getAccuracy }} %</div>
            </div>
        </div>
    </Transition>    
</template>

<style scoped>
    .detailed-statistics{
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0 0 5px 5px var(--border-main-color);
        margin-top: 10px;

        h2{
            font-size: 30px;
            line-height: 150%;
        }

        .element{
            display: flex;
            flex-direction: row;
            height: 45px;
            align-items: center;
            gap: 10px;
            width: 100%;
            justify-content: center;
            
            .label, .value{
                font-size: 20px;
            }

            .label{
                font-weight: 600;
            }

            &:not(:last-of-type){
                border-bottom: 1px solid var(--border-main-color);
            }
        }
    }

    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s ease;
    }
    .v-enter-to,
    .v-leave-from{
        opacity: 1;
    }

    .v-enter-from,
    .v-leave-to{
        opacity: 0;
    }
</style>
