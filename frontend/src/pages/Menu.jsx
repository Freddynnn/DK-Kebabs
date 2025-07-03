import MenuItem from '../components/MenuItem';

const menuItems = [
  { id: 1, name: 'Chicken Kebab', price: 10 },
  { id: 2, name: 'Lamb Kebab', price: 12 },
  { id: 3, name: 'Falafel Wrap', price: 9 },
];

function Menu() {
  return (
    <div>
      <h2 className="mb-4">Menu</h2>
      <div className="row">
        {menuItems.map(item => (
          <div className="col-md-4 mb-3" key={item.id}>
            <MenuItem item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
