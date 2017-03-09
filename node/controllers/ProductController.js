const productColl = [
    {id: "1", productName: "Product One", price: "100.000", shortDesc:"Product 1 Short Description", longDesc:"Product One Long Description", weight:"100", dimension:"1", rate: 3.5, productImage:"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/FG432B2OT4.jpg"},
    {id: "2", productName: "Product Two", price: "200.000", shortDesc:"Product 2 Short Description", longDesc:"Product Two Long Description", weight:"200", dimension:"2", rate: 4, productImage:"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/FG432B2OT4.jpg"},
    {id: "3", productName: "Product Three", price: "300.000", shortDesc:"Product 3 Short Description", longDesc:"Product Three Long Description", weight:"300", dimension:"3", rate: 5, productImage:"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/FG432B2OT4.jpg"},
    {id: "4", productName: "Product Four", price: "400.000", shortDesc:"Product 4 Short Description", longDesc:"Product Four Long Description", weight:"400", dimension:"4", rate: 1.5, productImage:"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/FG432B2OT4.jpg"},
    {id: "5", productName: "Product Five", price: "500.000", shortDesc:"Product 5 Short Description", longDesc:"Product Five Long Description", weight:"500", dimension:"5", rate: 4.5, productImage:"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/FG432B2OT4.jpg"},
    {id: "6", productName: "Product Six", price: "600.000", shortDesc:"Product 6 Short Description", longDesc:"Product Six Long Description", weight:"600", dimension:"6", rate: 2.5, productImage:"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/FG432B2OT4.jpg"},
    {id: "7", productName: "Product Seven", price: "700.000", shortDesc:"Product 7 Short Description", longDesc:"Product Seven Long Description", weight:"700", dimension:"7", rate: 4, productImage:"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/FG432B2OT4.jpg"},
    {id: "8", productName: "Product Eight", price: "800.000", shortDesc:"Product 8 Short Description", longDesc:"Product Eight Long Description", weight:"800", dimension:"8", rate: 3, productImage:"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/FG432B2OT4.jpg"},
    {id: "9", productName: "Product Nine", price: "900.000", shortDesc:"Product 9 Short Description", longDesc:"Product Nine Long Description", weight:"900", dimension:"9", rate: 1, productImage:"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/FG432B2OT4.jpg"},
    {id: "10", productName: "Product Ten", price: "1.000.000", shortDesc:"Product 10 Short Description", longDesc:"Product Ten Long Description", weight:"1000", dimension:"10", rate: 2.5, productImage:"https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/FG432B2OT4.jpg"},
    ];

const findByID = (request, reply) => {
	const params = request.params;
    const product = productColl.find((item) => {
        return item.id === params.id;
    });
    return reply(product);
};

const findProducts = (request, reply) => {
	return reply(productColl);
};

const defaults = (request, reply) => {
	return reply('Welcome');
};
        
module.exports = {
    findByID,
    findProducts,
    defaults
};
