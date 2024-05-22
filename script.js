const load = () => {
    generateHome()
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

load()