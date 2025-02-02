curl -X POST -H "Content-Type: application/json" -d '{
                                                         "retailer": "Walgreens",
                                                         "purchaseDate": "2022-01-02",
                                                         "purchaseTime": "08:13",
                                                         "total": "2.65",
                                                         "items": [
                                                             {"shortDescription": "Pepsi - 12-oz", "price": "1.25"},
                                                             {"shortDescription": "Dasani", "price": "1.40"}
                                                         ]
                                                     }' http://192.168.0.32:3000/receipts/process