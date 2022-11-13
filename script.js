function hexToRgb(hex) {
    return ['0x' + hex[1] + hex[2] | 0, '0x' + hex[3] + hex[4] | 0, '0x' + hex[5] + hex[6] | 0];
}

const glassmorphism_code = document.getElementById("glassmorphism_example");
const text_color = document.getElementById("text_color_option");
const text_color_code = document.getElementById("text_color_code");

function textColor() {
    text_color_code.textContent = "color: " + text_color.value + ";"
    glassmorphism_code.style.color = text_color.value
}

const blur_code_1 = document.getElementById("blur_code_1");
const blur_code_2 = document.getElementById("blur_code_2");

function blurOption() {
    let blur_option = document.getElementById("blur_option").value/7;
    glassmorphism_code.style.backdropFilter = `blur(${blur_option}px)`
    blur_code_1.textContent = `backdrop-filter: blur(${blur_option.toFixed(2)}px);`
    blur_code_2.textContent = `-webkit-backdrop-filter: blur(${blur_option.toFixed(2)}px);`
}

const bg_code = document.getElementById("background_color_code");

function backgroundColor() {
    let background_color_input = document.getElementById("color_option").value;
    let bacground_opacity = document.getElementById("opacity_option").value/120;
    let background_color = "rgba(" + hexToRgb(background_color_input) + "," + bacground_opacity.toFixed(2) + ")"
    bg_code.textContent = "background:" + background_color
    glassmorphism_code.style.background = background_color
}

function copyCode() {
    let code_text = document.getElementById("code_text")
    navigator.clipboard.writeText(code_text.textContent);
}

const copy_button = document.getElementById("copy_clipboard");

copy_button.addEventListener("click", function() {
    copy_button.textContent = "Copied!"
})