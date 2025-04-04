# GeoHelm Index App

A web application that allows users to click on a map, submit data, and index it to Elasticsearch.

![GeoHelm](https://github.com/charliek17/geohelm/blob/main/images/geohelm.png.jpg?raw=true)
## Features

- Interactive map for user input.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- Elasticsearch running locally at `http://localhost:9200`.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd map-click-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Configuration

Ensure Elasticsearch is running and accessible at `http://localhost:9200`. Update the credentials and connection details in `config.json` if necessary.

## Usage

1. Open the application in your browser.
2. Click on the map to select a location.
3. Submit the data to index it into Elasticsearch.

## Project Structure

```
map-click-app/
├── mapclick/
│   ├── public/          # Static assets (HTML, CSS, JS)
│   ├── server.js        # Backend server
│   ├── README.md        # Project documentation
│   └── ...other files
```


## Docker

'''bash 
docker run -p 3000:3000 -v ./config.json:/usr/share/map-click/config.json geohelm:VERSION
'''

## Contributing

Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or support, please open an issue in the repository.
