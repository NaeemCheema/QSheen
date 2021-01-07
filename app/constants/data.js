import { images } from './images';

const data = {
  step1: {
    image: images.logo,
    step1Image: images.step1Image,
    step1Logo: images.step1Logo,
  },
  profile: {
    personal: images.personal,
    personalText: 'Personal Detail',
    myorder: images.myorder,
    myorderText: 'My Orders',
    mymeasurement: 'jkk',
    mymeasurementText: 'My Measurements',
    mywishlist: images.heart,
    mywishlistText: 'My Wishlist',
    payment: '',
    paymentText: 'Payment',
    chevron: images.chevron,
  },
  designers: {
    data:[
    {
      image: images.d3,
      name: 'Jennifer',
      location: 'Doha',
      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
      tags: [ 'Jewellery','Beauty','Jewellery'],
    },
    {
      image: images.d2,
      name: 'Brake',
      location: 'AlKhor',
      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
      tags: ['jewelery','beauty','beauty'],
    },
    {
      image: images.d3,
      name: 'Shemina',
      location: 'Lusial',
      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
      tags: ['jewelery','beauty','dress'],
    },
    {
      image: images.d2,
      name: 'Brake',
      location: 'AlKhor1',
      message: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero',
      tags: ['jewelery','beauty'],
    },
    {
      image: images.d3,
      name: 'Jennifer',
      location: 'Doha1',
      message: 'Lorem ipsum dolor sit amet, consetetur sadips',
      tags: ['jewelery','beauty'],
    },
    {
      image: images.d2,
      name: 'Brake',
      location: 'AlKhor2',
      message: 'Lorem ipsum dolor sit amet, consetetur sadips',
      tags: ['jewelery','beauty'],
    },
    ],
  },
  recommendations: {
    data:[
    {
      name: 'Beauty',
    },
    {
      name: 'Fragrances',
    },
    {
      name: 'Rings',
    },
    {
      name: 'Glasses',
    },
    {
      name: 'Suits',
    },
    {
      name: 'Cardigans & Sweaters',
    },
    {
      name: 'Jeans',
    },
    {
      name: 'Shirts',
    },
    {
      name: 'Jogger & Sweaters',
    },
    {
      name: 'Tights',
    },
    {
      name: 'Shemagh',
    },
    {
      name: 'Dinin Oud',
    },
    {
      name: 'Oriental perfumes',
    },
    {
      name: 'Shirts',
    },
    {
      name: 'Jogger & Sweaters',
    },
    {
      name: 'Tighter',
    },
    ],
  },
  brands: {
    image:[ 
      {
        key: 1,
        val: images.brand1,
      },
      {
        key: 2,
        val: images.brand2,
      },
      { 
        key: 3,
        val:images.brand3,
      },
      {
        key:  4,
        val:images.brand4,
      },
      {
        key: 5,
        val: images.brand1,
      },
      {
        key: 6,
        val: images.brand2,
      },
      { 
        key: 7,
        val:images.brand3,
      },
      {
        key: 8,
        val:images.brand4,
      },
     ]
  },
  search: {
    image:[ 
      {
        key: 1,
        val: images.search1,
      },
      {
        key: 2,
        val: images.search2,
      },
     ]
  },
  category:[
    {
      image: images.category1,
      name: 'Fashion',
      product: [
        {
          images: images.cate1,
          price: "QR 400",
          productName: 'productGood'
        },
        {
          images: images.cate2,
          price: 'QR 1900',
          productName: 'productName'
        },
        {
          images: images.cate3,
          price: 'QR 1000',
          productName: 'productName'
        },        
        {
          images: images.cate4,
          price: 'QR 1300',
          productName: 'productName'
      },
      ],

    },
    {
      image: images.category,
      name: 'Beauty',
      product: [
        {
          images: images.b1,
          price: "QR 400",
          productName: 'productGood'
        },
        {
          images: images.b2,
          price: 'QR 1900',
          productName: 'productName'
        },
        {
          images: images.b1,
          price: 'QR 1000',
          productName: 'productName'
        },        
        {
          images: images.b2,
          price: 'QR 1300',
          productName: 'productName'
      },
      ],
    },
    {
      image: images.category2,
      name: 'Jewellery',
      product: [
        {
          images: images.j,
          price: "QR 400",
          productName: 'productGood'
        },
        {
          images: images.j,
          price: 'QR 1900',
          productName: 'productName'
        },
        {
          images: images.j,
          price: 'QR 1000',
          productName: 'productName'
        },        
        {
          images: images.j,
          price: 'QR 1300',
          productName: 'productName'
      },
      ],
    },
    {
      image: images.category1,
      name: 'Bags & Accessories',
      product: [
        {
          images: images.a1,
          price: "QR 400",
          productName: 'productGood'
        },
        {
          images: images.a2,
          price: 'QR 1900',
          productName: 'productName'
        },
        {
          images: images.a1,
          price: 'QR 1000',
          productName: 'productName'
        },        
        {
          images: images.a2,
          price: 'QR 1300',
          productName: 'productName'
      },
      ],
    },
  ]
};

export { data };
