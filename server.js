const express = require('express');
const { Client } = require('@elastic/elasticsearch');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const client = new Client({
  node: 'http://localhost:9200',
  auth: {
    username: 'elastic',
    password: 'changeme'
  }
});

app.post('/api/location', async (req, res) => {
  try {
    const response = await client.index({
      index: 'locations',
      document: req.body
    });
    res.status(200).json({ result: response.result });
  } catch (error) {
    console.error('Indexing error:', error.meta?.body || error.message);
    res.status(500).json({ error: 'Elasticsearch indexing failed' });
  }
});

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
