// Thay đổi nội dung búc thư ở đây
var letterContent =
"Gửi Xu cutee.\n\n" +
"Đây là lần đầu tiên Kiệt viết thư và tặng quà cho người Kiệt thương. Những bông hoa nay tuy không đẹp nhưng Kiệt đã làm bằng trái tim của mình ,băng tất cả những yêu thương Kiệt dành cho Xuu. Mong rằng xuu sẽ thíchh món quà mà Kiệt đã chuẩn bị và nhớ đến tình yêu Kiệt dành cho xuu mỗi khi thấy nó.\n\n" +
"🤍Chúc Xuuuu iuuu dấuuu có một Valentine thật vui vẻ, ấm áp, ngày càng trở nên cute và xinh đẹpppp hơn nữaa.\n\n" +
"Mãii iuuu xuuuuu\n\n" +
"- K dấu tên -";


// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    boxLetter.innerHTML = ""

    let i = 0
    let timer = setInterval(() => {
        if (i < letterContent.length) {
            if (letterContent[i] === "\n") {
                boxLetter.innerHTML += "<br>"
            } else {
                boxLetter.innerHTML += letterContent[i]
            }
            i++
        } else {
            clearInterval(timer)
        }
    }, durationWrite)
}


window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})