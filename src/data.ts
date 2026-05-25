import { Product } from './types';

export const CATEGORIES = [
  'Fried Chicken',
  'Chicken Buckets',
  'Burgers',
  'Wraps',
  'Fries & Sides',
  'Drinks',
  'Desserts',
  'Family Meals'
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'pc-1',
    name: '8-Piece Chicken Bucket',
    description: '8 pieces of our signature original recipe chicken, perfectly seasoned and cooked to crispy perfection.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop',
    category: 'Chicken Buckets',
    spiceLevel: 'mild',
    ingredients: ['Chicken', 'Signature Spice Blend', 'Flour', 'Oil'],
    nutrition: { calories: 2400, protein: '160g', fat: '144g', carbs: '96g' },
    options: {
      addOns: [
        { id: 'a1', name: 'Extra Gravy', price: 1.50 },
        { id: 'a2', name: 'Extra Biscuits (2)', price: 2.00 }
      ]
    }
  },
  {
    id: 'pc-2',
    name: 'Spicy Zinger Burger',
    description: 'A 100% chicken breast fillet crunch-breaded and spicy, served with fresh lettuce and mayo on a sesame seed bun.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1615719413546-198b25453f85?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers',
    spiceLevel: 'spicy',
    options: {
      addOns: [
        { id: 'a3', name: 'Extra Cheese', price: 0.99 },
        { id: 'a4', name: 'Bacon', price: 1.49 }
      ]
    }
  },
  {
    id: 'pc-3',
    name: 'Crispy Fries (Large)',
    description: 'Golden, crispy fries tossed in our secret seasoning blend.',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=800&auto=format&fit=crop',
    category: 'Fries & Sides',
    spiceLevel: 'none',
  },
  {
    id: 'pc-4',
    name: 'Classic Wrap',
    description: 'Tender crispy chicken strip, lettuce, mayo, wrapped in a soft tortilla.',
    price: 4.49,
    image: 'https://images.unsplash.com/photo-1626700051175-1031d2baaf01?q=80&w=800&auto=format&fit=crop',
    category: 'Wraps',
    spiceLevel: 'none',
  },
  {
    id: 'pc-5',
    name: 'Refreshing Cola',
    description: 'Classic ice-cold cola drink.',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1581005856755-662584160a0a?q=80&w=800&auto=format&fit=crop',
    category: 'Drinks',
  },
  {
    id: 'pc-6',
    name: 'Family Feast Combo',
    description: '12-piece mixed chicken, 3 large sides, and 6 biscuits. Perfect for the whole family.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=800&auto=format&fit=crop',
    category: 'Family Meals',
  },
  {
    id: 'pc-7',
    name: '12-Piece Chicken Bucket',
    description: '12 pieces of our signature original recipe chicken to feed the whole family.',
    price: 26.99,
    image: 'https://images.unsplash.com/photo-1574676174786-9b51fa161eb3?q=80&w=800&auto=format&fit=crop',
    category: 'Chicken Buckets',
    spiceLevel: 'mild',
  },
  {
    id: 'pc-8',
    name: 'Classic Chicken Sandwich',
    description: 'A crispy fried chicken breast fillet on a brioche bun with pickles and mayo.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop',
    category: 'Burgers',
    spiceLevel: 'none',
  },
  {
    id: 'pc-9',
    name: 'Spicy Twister Wrap',
    description: 'Spicy crispy chicken strip with lettuce, tomatoes, and spicy mayo inside a warm tortilla.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop',
    category: 'Wraps',
    spiceLevel: 'spicy',
  },
  {
    id: 'pc-10',
    name: 'Popcorn Chicken (Large)',
    description: 'Bite-sized pieces of crispy fried chicken breast, perfect for snacking.',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1562967914-01efa7e87832?q=80&w=800&auto=format&fit=crop',
    category: 'Fried Chicken',
    spiceLevel: 'mild',
  },
  {
    id: 'pc-11',
    name: 'Mashed Potatoes & Gravy',
    description: 'Creamy mashed potatoes topped with our signature savory brown gravy.',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1518593467406-8d5cfd4f553f?q=80&w=800&auto=format&fit=crop',
    category: 'Fries & Sides',
    spiceLevel: 'none',
  },
  {
    id: 'pc-12',
    name: 'Mac & Cheese',
    description: 'Elbow macaroni mixed in a rich and creamy cheddar cheese sauce.',
    price: 3.49,
    image: 'https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?q=80&w=800&auto=format&fit=crop',
    category: 'Fries & Sides',
    spiceLevel: 'none',
  },
  {
    id: 'pc-13',
    name: 'Fresh Coleslaw',
    description: 'Freshly prepared cabbage and carrots mixed with our signature creamy dressing.',
    price: 2.49,
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fbc40?q=80&w=800&auto=format&fit=crop',
    category: 'Fries & Sides',
    spiceLevel: 'none',
  },
  {
    id: 'pc-14',
    name: 'Chocolate Chip Cookie',
    description: 'A warm, gooey chocolate chip cookie baked fresh in-store.',
    price: 1.99,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop',
    category: 'Desserts',
    spiceLevel: 'none',
  },
  {
    id: 'pc-15',
    name: 'Sweet Iced Tea',
    description: 'Chilled, refreshing black tea sweetened to perfection.',
    price: 2.19,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop',
    category: 'Drinks',
    spiceLevel: 'none',
  },
  {
    id: 'pc-16',
    name: 'Crispy Onion Rings',
    description: 'Thick-cut onion rings battered and fried until golden brown.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=800&auto=format&fit=crop',
    category: 'Fries & Sides',
    spiceLevel: 'none',
  }
];
