const emojis = ["😎", "😎", "😋", "😋", "😛", "😛", "🤑", "🤑", "🤡", "🤡", "❤", "❤", "🧡", "🧡", "⭐", "⭐"];
var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div')
    box.className = 'item';
    box.innerHTML = shuf_emojis[i]

    box.onclick = function () {
        this.classList.add('boxOpen')
        setTimeout(function () {
            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                    if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                        alert('You Win 😎')
                    }
                }
                else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                }
            }
        }, 200)
    }

    document.querySelector('.game').appendChild(box);
}



var cursor1 = document.querySelector(".cursor-1");
var cursor2 = document.querySelector(".cursor-2");
document.addEventListener("mousemove", function (e) {
    cursor1.style.cssText = cursor2.style.cssText = "left: " + e.clientX
        + "px; top: " + e.clientY + "px;";
})


// loading
var loader = document.querySelector('.loader');
window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("loader-hidden");
}