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
app.get('/product', (req, res) => {
	res.sendFile(__dirname+'/product.html')
});
app.get('/poultry', (req, res) => {
	res.sendFile(__dirname+'/poultry.html')
});
app.get('/horticulture', (req, res) => {
	res.sendFile(__dirname+'/horticulture.html')
});
app.get('/office', (req, res) => {
	res.sendFile(__dirname+'/office.html')
});
app.get('/street', (req, res) => {
	res.sendFile(__dirname+'/street.html')
});

app.get('/contact', (req, res) => {
	res.sendFile(__dirname+'/contact.html')
});
app.get('/Pricing', (req, res) => {
	res.sendFile(__dirname+'/Pricing.html')
});
app.get('/Career', (req, res) => {
	res.sendFile(__dirname+'/Career.html')
});
app.get('/piechart', (req, res) => {
	res.sendFile(__dirname+'/PieChart.html')
});
app.get('/ebphome', (req, res) => {
	res.sendFile(__dirname+'/EbpHome.html')
});
app.get('/formsebp', (req, res) => {
	res.sendFile(__dirname+'/FormsEBP.html')
});
app.get('/keepsight', (req, res) => {
	res.sendFile(__dirname+'/KeepSight.html')
});
app.get('/loadlogtime', (req, res) => {
	res.sendFile(__dirname+'/LoadLogTime.txt')
});
app.listen(port, () => { console.log(`App listening on port ${port}`) });
