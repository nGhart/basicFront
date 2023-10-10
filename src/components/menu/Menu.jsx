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

        <Link to="/feed" className="listItem">
          <img src={feed} alt="Grain sack" width={20} />
          <span className="listItemTitle">Feed Records</span>
        </Link>
      </div>
      <div className="item">
        <span className="menuTitle">Breeding</span>
        <Link to="/mating" className="listItem">
          <i className="fas fa-venus-mars"></i>
          <span className="listItemTitle">Mating Records</span>
        </Link>
      </div>
      <div className="item">
        <span className="menuTitle">Health</span>
        <Link to="disease" className="listItem">
          <i className="fas fa-plus-square"></i>
          <span className="listItemTitle">Disease Records</span>
        </Link>
        <Link to="quarantine" className="listItem">
          <i className="fas fa-plus-square"></i>
          <span className="listItemTitle">Quarantine Records</span>
        </Link>
      </div>
      <div className="item">
        <span className="menuTitle">Medication</span>
        <Link to="meds" className="listItem">
          <i className="fas fa-prescription"></i>
          <span className="listItemTitle">Medication Stock</span>
        </Link>
        <Link to="/vaccination" className="listItem">
          <i className="fas fa-venus-mars"></i>
          <span className="listItemTitle">Disease Prevention</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
