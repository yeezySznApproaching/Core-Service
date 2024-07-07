const express = require('express');
const axios = require('axios');
require ('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const services = {
    user: 'http://localhost:3001',
    room: 'http://localhost:3002',
    booking: 'http://localhost:3003'
}

app.use('/api/:service/:endpoint', async (req, res) => {
    const {service, endpoint} = req.params;
    const url = `${services[service]}/${endpoint}`;

    try {
        const response = await axios ({
            method: req.method,
            url: url,
            data: req.body
        });

        res.status(response.status).json(response.data);
    }catch (error){
        res.status(500).json({ error: 'Service is not available'});
    }
});

app.listen(PORT, ()=>{
    console.log(`API Gateway is running on port ${PORT}`);
});