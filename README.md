[https://github.com/Arnj121/fetch](https://github.com/Arnj121/fetch)

## Simple receipt api

- start the server using `node server.js` command

### Available endpoints

- **POST** `/receipts/process` **Accepts**: `application/json` **response**: `application/json`
  - _Description_: accepts json to add receipts details and returns points
- **GET** `/receipts/id/points` **Accepts**: `url parameters` **response**: `application/json`
  - _Description_: returns the points assigned to the receipt with **id** passed in url
- **GET** `/receipts/id` **Accepts**: `url parameters` **response**: `application/json`
  - _Description_: returns the details of the receipt with **id** passed in url

### Running sample requests
 
- To make a POST request, run the **postRequest.sh** file from your bash using `./postRequest.sh`
- To make a GET request, copy the id returned from the previous command request and paste it 
in the **<paste_it_here>** section of **getRequest.sh** file and run the file from the bash using `./getRequest.sh`
- To run custom POST requests, edit the **-d** option by pasting new json requests inside the **single quotes**

### Running in a docker container

- Build the docker image using the dockerfile as `docker build -t fetch .`
- Run the docker image using `docker run -p 3000:3000 fetch`
- This would provide you with a docker ip address, instead use `http://localhost:3000/` as your base URL for your requests.
- Refer the Available endpoints section for more details.