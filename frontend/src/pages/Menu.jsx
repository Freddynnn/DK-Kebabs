import { useState, useEffect } from 'react';
import MenuItem from '../components/MenuItem';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    'All', 'Main', 'Halal Snack Pack', 'Burgers', 'Handmade Gozleme', 
    'Hotdogs', 'Beverages', 'Sides', 'Mixed Deals'
  ];

  // ✅ Fetch menu items from backend
  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await fetch('http://localhost:4000/menu');
        if (!response.ok) throw new Error('Failed to fetch menu');
        const data = await response.json();
        setMenuItems(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    }

    fetchMenu();
  }, []);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container">
      <h2 className="mb-4">Menu</h2>

      {loading && <p>Loading menu...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && (
        <>
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
        </>
      )}
    </div>
  );
}

export default Menu;
