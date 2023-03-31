const body = document.querySelector("body")
const navbar = document.querySelector(".navbar")
const menu = document.querySelector(".menu-list")
const menuBtn = document.querySelector(".menu-btn")
const cancelBtn = document.querySelector(".cancel-btn")
var resources = "resources"
menuBtn.onclick = () => {
    menu.classList.add("active")
    menuBtn.classList.add("hide")
    body.classList.add("disabledScroll")
}
cancelBtn.onclick = () => {
    menu.classList.remove("active")
    menuBtn.classList.remove("hide")
    body.classList.remove("disabledScroll")
}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}

// Study Space Options
const btnEl = document.querySelector('.btn')
const toggleOptions = () => {
    const wrapperEl = document.querySelector('.wrapper')
    const iconEl = btnEl.querySelector('i')

    wrapperEl.classList.toggle('active')

    if (iconEl.classList.contains('ri-share-line')) {
        iconEl.classList.replace('ri-share-line', 'ri-close-line')
    } else {
        iconEl.classList.replace('ri-close-line', 'ri-share-line')
    }
}
btnEl.addEventListener('click', toggleOptions)

// TOGGLE STUDY SPACE WINDOW
const studySpaceBG = document.querySelector('.study-space')
const studySpaceMenu = document.querySelector('#studySpaceMenu')
const studySpaceWindow = document.querySelector('.study-space-window')

studySpaceMenu.onclick = function() {
    if (studySpaceWindow.style.display !== 'none') {
        studySpaceWindow.style.display = 'none'
    }
    else {
        studySpaceWindow.style.display = 'block'
    }
}

var bg = 0
var activeBG = null

var changeBG = function () {
    let newBG = generateBG(bg)
    // Beach BGs
    if (this.id === 'beach') {
        if (activeBG !== 'beach') {
            activeBG = 'beach'
            newBG = 0
        }
        switch (newBG) {
            case 0:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/beach/1.gif")'
                break
            case 1:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/beach/2.gif")'
                break
            case 2:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/beach/3.gif")'
                break
            case 3:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/beach/4.gif")'
                break
            case 4:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/beach/5.gif")'
                break
        }
    }
    // Space BGs
    if (this.id === 'space') {
        if (activeBG !== 'space') {
            activeBG = 'space'
            newBG = 0
        }
        switch (newBG) {
            case 0:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/space/1.gif")'
                break
            case 1:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/space/2.gif")'
                break
            case 2:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/space/3.gif")'
                break
            case 3:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/space/4.gif")'
                break
            case 4:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/space/5.gif")'
                break
        }
    }
    // Lofi BGs
    if (this.id === 'lofi') {
        if (activeBG !== 'lofi') {
            activeBG = 'lofi'
            newBG = 0
        }
        switch (newBG) {
            case 0:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/lofi/1.gif")'
                break
            case 1:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/lofi/2.gif")'
                break
            case 2:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/lofi/3.gif")'
                break
            case 3:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/lofi/4.gif")'
                break
            case 4:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/lofi/5.gif")'
                break
        }
    }
    // Cafe BGs
    if (this.id === 'cafe') { 
        if (activeBG !== 'cafe') {
            activeBG = 'cafe'
            newBG = 0
        }
        switch (newBG) {
            case 0:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/cafe/1.gif")'
                break
            case 1:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/cafe/2.gif")'
                break
            case 2:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/cafe/3.gif")'
                break
            case 3:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/cafe/4.gif")'
                break
            case 4:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/cafe/5.gif")'
                break
        }
    }
    // Nature BGs
    if (this.id === 'nature') {
        if (activeBG !== 'nature') {
            activeBG = 'nature'
            newBG = 0
        }
        switch (newBG) {
            case 0:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/nature/1.gif")'
                break
            case 1:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/nature/2.gif")'
                break
            case 2:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/nature/3.gif")'
                break
            case 3:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/nature/4.gif")'
                break
            case 4:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/nature/5.gif")'
                break
        }
    }
    // KPOP BGs
    if (this.id === 'kpop') {
        if (activeBG !== 'kpop') {
            activeBG = 'kpop'
            newBG = 0
        }
        switch (newBG) {
            case 0:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/kpop/1.gif")'
                break
            case 1:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/kpop/2.gif")'
                break
            case 2:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/kpop/3.gif")'
                break
            case 3:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/kpop/4.gif")'
                break
            case 4:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/kpop/5.gif")'
                break
        }
    }
    // Code BGs
    if (this.id === 'code') {
        if (activeBG !== 'code') {
            activeBG = 'code'
            newBG = 0
        }
        switch (newBG) {
            case 0:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/code/1.gif")'
                break
            case 1:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/code/2.gif")'
                break
            case 2:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/code/3.gif")'
                break
            case 3:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/code/4.gif")'
                break
            case 4:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/code/5.gif")'
                break
        }
    }
    // Library BGs
    if (this.id === 'library') {
        if (activeBG !== 'library') {
            activeBG = 'library'
            newBG = 0
        }
        switch (newBG) {
            case 0:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/library/1.gif")'
                break
            case 1:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/library/2.gif")'
                break
            case 2:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/library/3.gif")'
                break
            case 3:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/library/4.gif")'
                break
            case 4:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/library/5.gif")'
                break
        }
    }
    // City BGs
    if (this.id === 'city') {
        if (activeBG !== 'city') {
            activeBG = 'city'
            newBG = 0
        }
        switch (newBG) {
            case 0:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/city/1.gif")'
                break
            case 1:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/city/2.gif")'
                break
            case 2:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/city/3.gif")'
                break
            case 3:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/city/4.gif")'
                break
            case 4:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/city/5.gif")'
                break
        }
    }
    // Space BGs
    if (this.id === 'gaming') {
        if (activeBG !== 'gaming') {
            activeBG = 'gaming'
            newBG = 0
        }
        switch (newBG) {
            case 0:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/gaming/1.gif")'
                break
            case 1:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/gaming/2.gif")'
                break
            case 2:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/gaming/3.gif")'
                break
            case 3:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/gaming/4.gif")'
                break
            case 4:
                studySpaceBG.style.backgroundImage = 'url("../studySpace/bg/gaming/5.gif")'
                break
        }
    }
    bg = newBG
}

// Returns next background
var generateBG = function (bg) {
    if (bg === 4) {
        bg = 0     // Return back to the beginning if reached end of list
        return bg
    }
    else {
        bg++
        return bg
    }
}

// Change study space background when button is clicked
document.getElementById('beach').onclick = changeBG
document.getElementById('space').onclick = changeBG
document.getElementById('lofi').onclick = changeBG
document.getElementById('cafe').onclick = changeBG
document.getElementById('nature').onclick = changeBG
document.getElementById('kpop').onclick = changeBG
document.getElementById('code').onclick = changeBG
document.getElementById('library').onclick = changeBG
document.getElementById('city').onclick = changeBG
document.getElementById('gaming').onclick = changeBG