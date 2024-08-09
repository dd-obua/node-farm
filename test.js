// Result of loggin req.url

// For /
pathname: '/';
path: '/';
href: '/';

// For /product
search: '?id=0';
query: 'id=0';
pathname: '/product';
path: '/product?id=0';
href: '/product?id=0';

// Result of loggin url.parse(req.url, true)

// For /
pathname: '/';
path: '/';
href: '/';

// For /product
search: '?id=0';
query: {
  id: '0'
}
pathname: '/product';
path: '/product?id=0';
href: '/product?id=0';
