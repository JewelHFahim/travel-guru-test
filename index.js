const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const hotels = require('./Data/data.json')


app.get('/', (req, res)=>{
    res.send('Hotel API Working Properly')
});

app.get('/hotels', (req, res)=>{
    res.send(hotels);
});

app.get('/hotel/:id', (req, res)=>{
    const id = req.params.id;
    const signleHotel = hotels.find(h => h.id == id);
    res.send(signleHotel);
});

app.listen(port, ()=>{
    console.log('On the port:', port);
});