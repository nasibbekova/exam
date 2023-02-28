const data = [
    {
        title: 'MacBook Air',
        img: 'macbookair.png',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-air',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: ''
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 18,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 2.8,
            other: [
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Pro 13”',
        price: 1299,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/13-inch',
        colors: ['#C7C8CA', '#B1B2B7'],
        specs: {
            display: {
                title: 'Retina display',
                size: 13.3
            },
            chip: {
                title: 'Apple M1 chip',
                description: 'Also available with Intel Core i5 or i7 processor'
            },
            ram: {
                title: 'Up to 16GB unified memory',
                description: 'For increased performance and power efficiency'
            },
            memory: {
                size: 2,
                type: 'tb'
            },
            battery: 20,
            camera: {
                title: '720p FaceTime HD camera',
                description: 'With the image signal processor of M1 for drastically improved performance'
            },
            weight: 3.0,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
    {
        title: 'MacBook Air',
        price: 999,
        url: 'https://www.apple.com/shop/buy-mac/macbook-pro/16-inch',
        colors: ['#C7C8CA', '#B1B2B7', '#E3CCB4'],
        specs: {
            display: {
                title: 'Retina display',
                size: 16
            },
            chip: {
                title: 'Up to Intel Core i9 processor',
                description: ''
            },
            ram: {
                title: 'Up to 64GB memory',
                description: ''
            },
            memory: {
                size: 8,
                type: 'tb'
            },
            battery: 11,
            camera: {
                title: '720p FaceTime HD camera',
                description: ''
            },
            weight: 4.3,
            other: [
                'Touch Bar',
                'Sound',
                'Touch ID'
            ]
        }
    },
]


// let cont = document.querySelector('.container')

// for (item of data){
//     let item = document.createElement('div')
//     let img = document.createElement('img')
//     let h2 = document.createElement('h2')
//     let pOne =  document.createElement('p')
//     let button = document.createElement('button')
//     let hr = document.createElement('hr')
//     let pTwo = document.createElement('h2')
//     let span = document.createElement('span')
//     let imgOne = document.createElement('img')
//     let spanTwo = document.createElement('span')
//     let imgTwo = document.createElement('img')
//     let spanThree = document.createElement('span')
//     let h2Three = document.createElement('h2')
//     let spanThee = document.createElement('span')
//     let imgThree = document.createElement('img')
//     let spanFour = document.createElement('span')
//     let imgFour = document.createElement('img')
//     let spanFive = document.createElement('span')
//     let h2Four = document.createElement('h2')
//     let p = document.createElement('span')


//     item.classList.add('item')
//     img.src =  `./img/${item.img}.png`
//     h2.classList = item.title
//     pOne.classList.add = 'from' + item.price
//     button.classList.add = "Buy"
//     pTwo.classList.add = item.specs.display.size
//     span.classList.add = item.specs.display.title
//     imgOne.classList.add = item.url
//     spanTwo.classList.add = item.specs.chip.title
//     imgTwo.classList.add = 
//     spanThree.classList.add = item.specs.memory.size + type

//     item.append(img, h2, p)
//     button.append (button)



// }
let container = document.querySelector('container')

for (let elem of data) {
    let item = document.createElement('div')
    let box = document.createElement('div')
    let box_Img = document.createElement('img')
    let boxes_text = document.createElement('p')
    let boxes_desc = document.createElement('p')
    let boxes = document.createElement('div')
    let bought = document.createElement('div')
    let hr = document.createElement('hr')
    let el = document.createElement('div')
    let titles = document.createElement('div')
    let title_text = document.createElement('p')
    let title_Img = document.createElement('img')
    let memory = document.createElement('div')
    let memory_text = document.createElement('h1')
    let memory_desc = document.createElement('p')
    let bottom = document.createElement('div')
    let camera = document.createElement('div')
    let camera_Img = document.createElement('img')
    let weight = document.createElement('div')
    let smth = document.createElement('div')
    let img = document.createElement('img')
    let bottom_Img = document.createElement('img')
    let h1 = document.createElement('h1')
    let weight_txt = document.createElement('h1')
    let h2 = document.createElement('h2')
    let inch = document.createElement('p')
    let inch_txt = document.createElement('p')

    let bottom_desc = document.createElement('p')
    let camera_text = document.createElement('p')
    let camera_desc = document.createElement('p')
    let weight_desc = document.createElement('p')
    let smthings = document.createElement('p')
    let a = document.createElement('a')
    let more = document.createElement('a')
    let hr2 = document.createElement('hr')
  
    img.classList.add('img_mac')
    box.classList.add('box')
    bought.classList.add('bought')
    a.classList.add('buy')
    el.classList.add('el')
    titles.classList.add('titles')
    boxes.classList.add('boxes')
    memory.classList.add('memory')
    bottom.classList.add('bottom')
    camera.classList.add('camera')
    weight.classList.add('weight')
    smth.classList.add('smth')
    more.classList.add('more')

    h1.innerHTML = elem.box
    h2.innerHTML = elem.price
    title_text.innerHTML = elem.specs.chip.title
    boxes_text.innerHTML = elem.specs.boxes.title
    boxes_desc.innerHTML = elem.specs.boxes.description
    inch.innerHTML = elem.specs.el.size
    inch_txt.innerHTML = elem.specs.el.title
    memory_text.innerHTML = elem.specs.memory.size + elem.specs.memory.type
    bottom_desc.innerHTML = elem.specs.battery + ' ' + 'Hours'
    camera_text.innerHTML = elem.specs.camera.title
    camera_desc.innerHTML = elem.specs.camera.description
    weight_txt.innerHTML = elem.specs.weight
    smthings.innerHTML = elem.specs.smth
    title_Img.src = `./img/${elem.specs.chip.chip_ing}`
    box_Img.src = `./img/${elem.specs.boxes.memory_img}`
    img.src = `./img/${elem.img}`
    bottom_Img.src = `./img/battery.png`
    camera_Img.src = `./img/video.png`
    memory_desc.innerHTML = 'Memory'
    a.innerHTML = 'Buy'
    a.href = `{i.url}`
    more.innerHTML = 'Learn more'
    weight_desc.innerHTML = 'Weight'
    more.href = '#'
    
    smth.append(smthings)
    weight.append(weight_txt, weight_desc)
    camera.append(camera_Img, camera_text)
    bottom.append(bottom_Img, bottom_desc)
    memory.append(memory_text, memory_desc)
    boxes.append(box_Img, boxes_text)
    titles.append(title_Img, title_text)
    el.append(inch, inch_txt)
    bought.append(a)
    box.append(h1, h2)
    item.append(img, box, bought, hr, el, titles, boxes, memory, bottom, camera, weight, smth, hr2, more)
    container.append(item)

    // document.body.prepent(item)
}