import { useState } from 'react';
import MenuItem from '../components/MenuItem';

const menuItems = [
  { id: 1, name: 'Chicken Kebab', price: 10, category: 'Main' },
  { id: 2, name: 'Lamb Kebab', price: 12, category: 'Main' },
  { id: 3, name: 'Falafel Wrap', price: 9, category: 'Main' },
  { id: 4, name: 'Beef Burger', price: 11, category: 'Burgers' },
  { id: 5, name: 'Mixed HSP', price: 15, category: 'Halal Snack Pack' },
];

function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 'Main', 'Halal Snack Pack', 'Burgers', 'Handmade Gozleme', 
    'Hotdogs', 'Beverages', 'Sides', 'Mixed Deals'
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container">
      <h2 className="mb-4">Menu</h2>

      {/* Search Bar */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search menu..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Filters */}
      <div className="mb-4">
        {categories.map(category => (
          <button
            key={category}
            className={`btn btn-sm me-2 mb-2 ${selectedCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="row">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div className="col-md-4 mb-3" key={item.id}>
              <MenuItem item={item} />
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
