const load = () => {
    generateHome()
    sec2contentMouseEvent()
}

const generateHome = () => {
    let element = document.querySelector("#section1 .terminal .terminal-content p #terminal-content-wording")
    const word = ` Hi 👋, I'm Khaiwhan 🐣 
    Coding, programming, and AI.
    Full-Stack Developer.`
    let i = 0
    const interval = setInterval(() => {
        if (i < word.length) {
            if (word[i] === "\n") element.innerHTML += "<br>"
            else element.innerHTML += word[i]
        }
        else {
            clearInterval(interval)
        }
        i++;
    }, 50);
}

const sec2contentMouseEvent = () => {
    // const elements = document.querySelectorAll('.sec2-content');

    // elements.forEach(element => {
    //     element.addEventListener('mouseover', (e) => {
    //         const { offsetX, offsetY } = calPositionSec2ContentMouseEvent(e.offsetX, e.offsetY)
    //         element.style.setProperty("--sec2-content-box-shadow", `${offsetX}px ${offsetY}px`);
    //     });

    //     element.addEventListener('mouseout', () => {
    //         element.style.setProperty("--sec2-content-box-shadow", `0px 0px`);
    //     });
    // })
}

const calPositionSec2ContentMouseEvent = (x, y) => {
    let { offsetX, offsetY } = ""

    if (x.toString().charAt(0) == "-") offsetX = x.toString().substring(1, 2)
    else offsetX = `-${x.toString().charAt(0)}`
    if (y.toString().charAt(0) == "-") offsetY = y.toString().substring(1, 2)
    else offsetY = `-${y.toString().charAt(0)}`

    return { offsetX, offsetY }
}

load()