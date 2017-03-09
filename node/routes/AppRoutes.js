const productController = require('../controllers/ProductController');

module.exports = [
		{
			method: 'GET',
			path:  '/products/{id}',
			handler: productController.findByID
		},
		{
			method: 'GET',
			path: '/products',
			handler: productController.findProducts
		},
		{
			method: 'GET',
			path: '/',
			handler: productController.defaults
		}
	];