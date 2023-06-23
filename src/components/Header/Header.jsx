import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME PAGE</NavLink>
          </li>
          <li>
            <NavLink to="/page_1">PAGE 1</NavLink>
          </li>
          <li>
            <NavLink to="/page_2">PAGE 2</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
