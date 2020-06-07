const products = [];

exports.getAddProductPage = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    productCSS: true,
    formsCSS: true,
    activeAddProduct: true
  })
}

exports.postAddProductPage = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    products: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
}