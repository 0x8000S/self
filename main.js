var show = document.getElementById('show')

function jump_view(url) {
    window.location.assign(url)
}
function jump_out(url) {
    window.open(url, '_blank');
}
show.src = "Page/doc/C语言教程系列.pdf"