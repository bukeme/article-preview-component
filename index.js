var shareCon = document.getElementsByClassName('share-container')[0]
var iconShare = document.getElementsByClassName('icon-share')[0]
var mcm = document.getElementsByClassName('media-container-mobile')[0]

shareCon.addEventListener('mouseover', function() {
    console.log('working')
    iconShare.src = 'images/icon-share-hover.svg'
    if (window.innerWidth <= 600) {
        mcm.style.visibility = 'visible'
        shareCon.style.backgroundColor = 'hsl(214, 17%, 51%)'
        shareCon.style.marginTop = '15px'

    }

})
shareCon.addEventListener('mouseout', function() {
    console.log('working')
    if (window.innerWidth > 600) {
        iconShare.src = 'images/icon-share.svg'
    }

})

document.addEventListener('click', function(e) {
    if (window.innerWidth <= 600) {
        var ignore = mcm.contains(e.target) || shareCon.contains(e.target)
        if (!ignore) {
            mcm.style.visibility = 'hidden'
            iconShare.src = 'images/icon-share.svg'
            shareCon.style.backgroundColor = 'hsl(210, 46%, 95%)'
            shareCon.style.marginTop = '7.5px'

        }


    }
})