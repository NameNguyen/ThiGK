
let fileU = null;
let jSONData = []
axios({
    method: 'get',
    url: 'http://localhost:8000/sanpham/'
})
    .then((result) => {
        console.log(result.data)
        jSONData = result.data
        for (let i = 0; i < result.data.length; i++) {
            const html = Mustache.render(datad, {
                ...result.data[i]
            })
            $messages.insertAdjacentHTML('beforeend', html)
        }
        console.log($messages)
    })

const addSP = document.getElementById('them').addEventListener('click', (e) => {
    axios({
        method: 'post',
        url: 'http://localhost:8000/sanpham/',
        data: {
            masp: document.getElementById('masp').value,
            namesp: document.getElementById('namesp').value,
            solg: document.getElementById('solg').value
        }
    })
        .then((result) => {
            console.log(result)
            location.reload("/")
        })
})

