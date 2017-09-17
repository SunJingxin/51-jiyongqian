$(function(){
	var url = 'https://sdcr.jisuqianbao.com/frontend/web/pc/location.html'
    $('.qr_code').qrcode({
        text: url,
        height: 190,
        width: 190
    })
})