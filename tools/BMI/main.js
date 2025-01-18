let root = document.querySelector(".window")
let calc = document.querySelector("#calc")
let show = document.querySelector(".show")
let height = document.querySelector(".height_value")
let weight = document.querySelector(".weight_value")
let bmi_show = document.querySelector("#BMIShow")
let suggestion = document.querySelector("#Suggestion")
let isShow = false

calc.addEventListener("click", ()=>{
    console.log(root.clientHeight, window.innerHeight, window.innerHeight/2+root.clientHeight/2)
    let weight_var = weight.value
    let height_var = height.value
    console.log(weight_var, height_var)
    if (weight_var !== "" && height_var !== "") {
        let bmi = weight_var / (height_var**2)
        console.log(bmi)
        let bmi_text = bmi.toString()
        if (bmi_text === "NaN") {
            suggestion.style.color = "#6483b0"
            bmi_show.innerHTML = ":-/ 你在干什么?"
            suggestion.innerHTML = "请检查你的输入!"
        }
        else {
            let bmi_text_point = bmi_text.indexOf(".")
            if (bmi_text_point === -1) {
                bmi_show.innerHTML = bmi_text
            } else {
                bmi_show.innerHTML = bmi_text.substring(0, bmi_text_point + 3)
            }
            if (bmi < 18.5) {
                suggestion.innerHTML = "偏瘦"
                suggestion.style.color = "#0066cc"
            } else if (18.5 <= bmi && bmi <= 24) {
                suggestion.innerHTML = "正常"
                suggestion.style.color = "#009966"
            } else if (24 <= bmi && bmi <= 28) {
                suggestion.innerHTML = "超重"
                suggestion.style.color = "#ffcc00"
            } else if (bmi >= 28) {
                suggestion.innerHTML = "肥胖"
                suggestion.style.color = "#fe4c40"
            }
        }
        show.style.top = `${window.innerHeight / 2 + root.clientHeight / 2 + 10}px`
        isShow = true
    }
})
window.onresize  = function() {
    if (isShow) {
        show.style.top = `${window.innerHeight/2+root.clientHeight/2+10}px`
    }
}