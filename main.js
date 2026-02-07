// Thay đổi nội dung búc thư ở đây
var letterContent =
"Gửi Xu iuu.\n\n" +
"Valentine này Toaiii muốn viết cho Xuuu vài dòng, không quá dài nhưng là những điều tôii thật sự nghĩ.Tôii thích cảm giác được nói chuyện với xuu, đôi khi chỉ cần nhắn vài câu thôi cũng thấy vui cả ngày. Có những lúc bình thường thật, nhưng vì là xuu nên lại trở nên đặc biệt.\n\n" +
"Cảm ơn Xu vì đã xuất hiện trong cuộc sống của toaii theo cách rất đặc biệt, rất nhẹ nhàng nhưng đủ để làm taoii thao thức mỗi đêm. Toii trân trọng từng khoảnh khắc, từng câu chuyện cùng với Xuuu .Valentine này toaiii không mong gì hơn ngoài việc chúng ta vẫn có thể nói chuyệnvà cùng nhau tạo thêm nhiều kỷ niệm đẹp nữa.\n\n" +
"🤍Chúc Xuuuu iuuu dấuuu có một Valentine thật vui vẻ, ấm áp.Và nhớ là luôn có một người luônn nghĩ đếnn xuuuuu đóoooooo.\n\n" +
"- ngiu exuuuu -";


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