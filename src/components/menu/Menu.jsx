import './menu.scss';
import { Link } from 'react-router-dom';
import feed from '../../assets/feed.png';
import bunny from '../../assets/rabbit.png';

const Menu = () => {
  return (
    <div className="menuContainer">
      <div className="item">
        <span className="menuTitle">General</span>
        <Link to="/animals" className="listItem">
          <img
            src={bunny}
            alt='<a href="https://www.flaticon.com/free-icons/rabbit" title="rabbit icons">Rabbit icons created by Freepik - Flaticon</a>'
            width={20}
          />

          <span className="listItemTitle">Animal Records</span>
        </Link>
        <Link to="/employee" className="listItem">
          <i className="fas fa-user-alt"></i>
          <span className="listItemTitle">Employee Records</span>
        </Link>
        <Link to="/feed" className="listItem">
          <img src={feed} alt="Grain sack" width={20} />
          <span className="listItemTitle">Feed Records</span>
        </Link>
        <Link to="/inventory" className="listItem">
          <i className="fas fa-list-ol"></i>
          <span className="listItemTitle">Inventory</span>
        </Link>
      </div>
      <div className="item">
        <span className="menuTitle">Breeding</span>
        <Link to="/mating" className="listItem">
          <i className="fas fa-venus-mars"></i>
          {/* <img src={mating} alt="" /> */}
          <span className="listItemTitle">Mating Records</span>
        </Link>
      </div>
      <div className="item">
        <span className="menuTitle">Health</span>
        <Link to="health" className="listItem">
          <i className="fas fa-plus-square"></i>
          <span className="listItemTitle">Health Records</span>
        </Link>
        <Link to="meds" className="listItem">
          <i className="fas fa-prescription"></i>
          <span className="listItemTitle">Medication Stock</span>
        </Link>
      </div>
      <div className="item">
        <span className="menuTitle">Finance</span>
        <Link to="transaction" className="listItem">
          <i className="fas fa-dollar-sign"></i>
          <span className="listItemTitle">Expense Manager</span>
        </Link>
        <Link to="invoice" className="listItem">
          <i className="fas fa-file-invoice"></i>
          <span className="listItemTitle">Invoice</span>
        </Link>
      </div>
      <div className="item">
        <span className="menuTitle">Others</span>
        <Link to="/contact" className="listItem">
          <i className="fas fa-address-book"></i>
          <span className="listItemTitle">Contacts</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
