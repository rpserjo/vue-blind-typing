<template>
    <div class="spinner-wrapper">
        <div class="spinner">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>    
</template>

<style scoped>
    .spinner {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;

        div {
            display: inline-block;
            position: absolute;
            left: 8px;
            width: 16px;
            background: var(--main-color);
            animation: spinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

            &:nth-child(1) {
                left: 8px;
                animation-delay: -0.24s;
            }

            &:nth-child(2) {
                left: 32px;
                animation-delay: -0.12s;
            }

            &:nth-child(3) {
                left: 56px;
                animation-delay: 0;
            }
        }

        &-wrapper{
            background-color: rgba(0, 0, 0, 0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            backdrop-filter: blur(2px);
            z-index: 10;
        }
    }

    @keyframes spinner {
        0% {
            top: 8px;
            height: 64px;
        }
        50%, 100% {
            top: 24px;
            height: 32px;
        }
    }
</style>
