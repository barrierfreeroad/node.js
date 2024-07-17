const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'barrierfree'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected...');
});

// API 정보를 가져오는 엔드포인트
app.get('/api/apis', (req, res) => {
    db.query('SELECT * FROM api_info', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// API 요청을 트리거하는 엔드포인트
app.post('/api/request-api', async (req, res) => {
    const { apiId } = req.body;
    db.query('SELECT * FROM api_info WHERE id = ?', [apiId], async (err, results) => {
        if (err) throw err;
        const apiInfo = results[0];
        try {
            const response = await axios.get(apiInfo.api_url);
            // 받은 데이터를 처리하는 로직을 여기에 추가합니다
            db.query('UPDATE api_info SET last_requested = NOW(), last_status = ? WHERE id = ?', ['Up', apiId]);
            res.json({ success: true, data: response.data });
        } catch (error) {
            db.query('UPDATE api_info SET last_requested = NOW(), last_status = ? WHERE id = ?', ['Down', apiId]);
            res.json({ success: false, error: error.message });
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
