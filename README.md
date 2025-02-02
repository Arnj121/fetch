## Simple receipt api
### Available endpoints

- **POST** /receipts/process **Accepts**: application/json **response**: application/json
  - _Description_: accepts json to add receipts details and returns points
- **GET** /receipts/id/points **Accepts**: url parameters **response**: application/json
  - _Description_: returns the points assigned to the receipt with **id** passed in url
- **GET** /receipts/id **Accepts**: url parameters **response**: application/json
  - _Description_: returns the details of the receipt with **id** passed in url

### Running sample requests
 
- To make a post request, run the **postRequest.sh** file from your bash using `./postRequest.sh`
- To make a get request, copy the id returned from the previous command request and paste it 
in the **<paste_it_here>** section of **getRequest.sh** file and run the file from the bash using `./getRequest.sh`
- To run custom post requests, edit the **-d** option by pasting new json requests inside the **single quotes**
