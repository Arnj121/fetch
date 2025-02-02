let Receipts={};

const addReceipt = (req,res)=>{
    console.log(req.body)
    let retailer = req.body.retailer;
    let purchaseDate = req.body.purchaseDate;
    let purchaseTime = req.body.purchaseTime;
    let items = req.body.items;
    let total = parseFloat(req.body.total);
    let id='';
    let idList= [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        0,1,2,3,4,5,6,7,8,9
    ];
    for(let i=0;i<15;i++){
        id+=idList[Math.floor(Math.random()*idList.length)];
    }
    let points=0;
    for (let i = 0; i < retailer.length; i++) {
       if(idList.indexOf(retailer[i].toLowerCase())!==-1)
           points+=1
    }
    points+=parseInt(total*100)%100 === 0 ? 50 :0
    points+=parseInt(total*100)%25 === 0 ? 25 :0
    points+=Math.floor(items.length/2)*5
    for(let i=0;i<items.length;i++)
        points += items[i]['shortDescription'].trim().length % 3 === 0 ? Math.ceil(items[i]['price'] * 0.2) : 0
    points+=parseInt(purchaseDate.split('-')[2])%2 !== 0? 6:0
    if(parseInt(purchaseTime.split(':')[0])>=14){
        if (parseInt(purchaseTime.split(':')[0]) <= 16){
            if (parseInt(purchaseTime.split(':')[0]) === 16 && parseInt(purchaseTime.split(':')[1]) <= 0)
                points += 10
            else
                points+=10
        }
    }
    console.log(`list with ${id} added with ${points} points!`);
    Receipts[id]={'retailer':retailer,'purchaseDate':purchaseDate,'purchaseTime':purchaseTime,'items':items,'total':total,'points':points};
    console.log(Receipts[id])
    res.send({'response':id})
}
const getReceiptPoints = (req,res)=>{
    let id=req.params.id
    res.send({'response':{'points':Receipts[id]['points']}})
}

const getReceiptDetails =  (req,res)=>{
    let id=req.params.id
    res.send({'response':Receipts[id]})
}

module.exports = {addReceipt,getReceiptDetails,getReceiptPoints}