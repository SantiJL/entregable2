class ProductManager {
	constructor() {
		this.products = [];
	}

	GetProducts() {
		return this.products;
	}

	AddProduct(product) {
		const existingProduct = this.products.find(
			(p) => p.code === product.code
		);
		if (existingProduct) {
			console.error('El codigo ya existe por favor verifique');
			return;
		}

		if (!product.title || !product.code || !product.price || !product.thumbnail || !product.stock || !product.description) {
			console.error('Todos los campos son obligatorios');
			return;
		}

		const newProduct = { ...product, id: this.products.length + 1 };
		this.products.push(newProduct);
		return newProduct;
	}

	GetProductById(id) {
		const product = this.products.find((item) => item.id === id);

		if (!product) {
			console.log('No se encontró el producto con el id:', id);
		}

		return product;
	}

	UpdateProduct(id, updatedProduct) {
		const index = this.products.findIndex((item) => item.id === id);

		if (index === -1) {
			console.log('No se encontró el producto con el id:', id);
			return;
		}

		this.products[index] = {
			id: this.products[index].id,
			...updatedProduct,
		};

		return this.products[index];
	}

	DeleteProduct(id) {
		const index = this.products.findIndex((item) => item.id === id);

		if (index === -1) {
			console.log('No se encontró el producto con el id:', id);
			return;
		}

		this.products.splice(index, 1);
	}
}

const productManager = new ProductManager();
console.log(productManager.GetProducts());

const addedProduct = productManager.AddProduct({
	title: 'producto prueba',
	description: 'Este es un producto prueba',
	price: 200,
	thumbnail: 'Sin imagen',
	code: 'abc123',
	stock: 25,
});
console.log(productManager.GetProducts());

const retrievedProduct = productManager.GetProductById(1);
console.log(retrievedProduct);

const updatedProduct = productManager.UpdateProduct(1, {
	title: 'producto prueba actualizado',
});
console.log(updatedProduct); // updatedProduct

productManager.DeleteProduct(1);
console.log(productManager.GetProducts());

module.exports = ProductManager;