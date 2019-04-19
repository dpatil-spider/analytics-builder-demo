const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.use("/images", express.static(__dirname + '/images'));
app.use("/vendor", express.static(__dirname + '/vendor'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.get('/', (req, res) => {
	res.sendFile(__dirname+'/product.html')
});
app.get('/product-detail', (req, res) => {
	res.sendFile(__dirname+'/product-detail.html')
});
app.listen(port, () => { console.log(`App listening on port ${port}`) });
