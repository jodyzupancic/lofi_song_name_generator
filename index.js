const contentElOne = document.getElementById('content-el-one')
const contentElTwo = document.getElementById('content-el-two')
const generateBtn = document.getElementById('btn')

//listen for clicks on 'generate' button, execute renderNames function
generateBtn.addEventListener("click", function() {
    renderNames()
    renderNamesTwo()
})

//arrays of lo-fi words
const first = ['0', '2', '3', 'another','blazed', 'bleached', 'blue', 'blueberry', 'chilled', 'clipped', 'clouded', 'cruising', 'day time', 
'deep', 'deflated', 'distant', 'dull', 'empty', 'ending', 'evaporate', 'evening', 'faded', 'faint', 'fallen', 'far', 'flat', 'foggy', 'forever',
'free', 'front', 'frzn', 'glowing', 'green', 'grey', 'hazy', 'late night', 'lost', 'low', 'never', 'night', 'no', 'not', 'ocean', 'one', 'open', 
'orange', 'pale', 'purple', 'rainy', 'rented', 'repeat', 'same', 'scenic', 'seventh', 'slo', 'slow', 'smooth', 'smoked', 'soft', 'still',
'to', 'tru', 'vanish', 'vitamin', 'warmed', 'washed', 'wide']

const second = ['air', 'atmosphere', 'away', 'beat', 'below', 'blow', 'breaks', 'clip', 'cloud', 'clouds', 'close', 'color', 
'couch', 'daze','down', 'dream', 'drift', 'drive', 'drops', 'ends', 'eye', 'fayce', 'fade', 'flame', 'f#n', 'high', 'kush', 
'loop', 'loops', 'loud', 'mix', 'memory', 'moon', 'mountain', 'out', 'rain', 'sample', 'season', 'shapes', 
'side', 'sight', 'sky', 'sleep', 'star', 'stare', 'tape', 'tea', 'toast', 'trey', 'tripp', 'tone', 'tones', 'vibes', 'vol. 1', 'walk',
'water', 'weather', 'whispers']

const fake = ['ain', 'ed', 'ite', 'ition', 'ize', 're-', 'un']
const prefix = ['for', 'in', 'on', 'so', 'the', 'too', 'while i can']
const replaceLetter = ['//', '*', '((', '|', '#']

//ideas for later enhancement: create functions oneWord, twoWords, prefixWord, fakeWord, alterWord (add replaceLetter), doubleLetter (doubles a letter)


function renderNames() {
    let items = ""
    for (let i = 0; i < 5; i++){
        const x = first[Math.floor(Math.random() * first.length)]
        const y = second[Math.floor(Math.random() * second.length)]
        const random = Math.floor(Math.random() * 5)

        i === random ? items += `<ul><li>${x}<br><br></li></ul>`
                     : items += `<ul><li>${x} ${y}<br><br></li></ul>`
    }
    contentElOne.innerHTML = items
}

function renderNamesTwo() {
    let items = ""
    for (let i = 0; i < 5; i++) {
        const x = first[Math.floor(Math.random() * first.length)]
        const y = second[Math.floor(Math.random() * second.length)]
        const replace = replaceLetter[Math.floor(Math.random() * replaceLetter.length)]
        const random = Math.floor(Math.random() * 5)

        const re = new RegExp(/[loia]/, 'g')
        const word = y.match(re) ? y.replace(re, replace) : y

        i === random ? items += `<ul><li>${x} ${word}<br><br></li></ul>`
                     : items += `<ul><li>${word}<br><br></li></ul>`
    }
    contentElTwo.innerHTML = items
}