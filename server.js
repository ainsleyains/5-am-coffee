const express = require('express')
const app = express()
const PORT = 8000
const shop = {
    'coffee': {
        'beans': {
            'product':'Signature Blends',
            'price':'From $21.00',
        },
        
        'capsules': {
            'product':'100% Jamaica Blue Mountain',
            'price':'From $25.00',
        },

    },

    'tea & more': {
        'tea': {
            'product':'Brisbane Breakfast Loose Leaf',
            'price':18.90,
        },

        'more':{
            'product':'100% Certified Organic Matcha Tin',
            'price':48.80,
        }
        
    }
    

}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:item', (request, response)=>{
    const itemName = request.params.item.toLocaleLowerCase()
    if(shop[itemName]) {
        response.json(shop[itemName])
    }else {
        response.json('')
    }
    
})

app.listen(PORT, ()=>{
    console.log(`The server is running on port ${PORT}!`)
})