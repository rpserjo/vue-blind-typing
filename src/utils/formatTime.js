const formatTime = (time) => {
    let mins = Math.floor(time / 60);
    let secs = time - mins * 60;

    mins = (mins < 10) ? `0${mins}` : `${mins}`;
    secs = (secs < 10) ? `0${secs}` : `${secs}`;

    return `${mins}:${secs}`;
}

export { formatTime };
