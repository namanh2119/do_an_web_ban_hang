import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import Login from '../Login';
import { useState } from 'react';

function Header() {
    const cx = classNames.bind(styles);

    const [form, setForm] = useState(false);
    const handleForm = () => {
        setForm((curr) => !curr);
    };

    const [page, setPage] = useState(1);
    const togglePage = (index) => {
        setPage(index);
    };

    const currentHeader = false;

    return (
        <header className={cx('header')}>
            <div className={cx('grid wide')}>
                <div className={cx('header__content')}>
                    <div className={cx('header__left')}>
                        <Link to="/" className={cx('logo')}>
                            <img src={logo} alt="logo" />
                        </Link>
                        <ul className={cx('header__list')}>
                            <li className={cx('header__list-item')}>
                                <NavLink
                                    to="/"
                                    className={cx('item__link', page === 1 ? 'active' : '')}
                                    onClick={() => togglePage(1)}
                                >
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li className={cx('header__list-item')}>
                                <NavLink
                                    to="/food"
                                    className={cx('item__link', page === 2 ? 'active' : '')}
                                    onClick={() => togglePage(2)}
                                >
                                    Món ăn
                                </NavLink>
                            </li>
                            <li className={cx('header__list-item')}>
                                <NavLink
                                    to="/drink"
                                    className={cx('item__link', page === 3 ? 'active' : '')}
                                    onClick={() => togglePage(3)}
                                >
                                    Đồ uống
                                </NavLink>
                            </li>
                            <li className={cx('header__list-item')}>
                                <NavLink
                                    to="/contact"
                                    className={cx('item__link', page === 4 ? 'active' : '')}
                                    onClick={() => togglePage(4)}
                                >
                                    Liên hệ
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('header__right')}>
                        <div className={cx('carts')}>
                            <Link to="/pay" className={cx('link')}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                            <span className={cx('num-carts')}>4</span>
                        </div>
                        {currentHeader ? (
                            <Link to="/account" className={cx('user__login')}>
                                <div
                                    style={{
                                        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsTY3dnw818v42oQ4urql3cTcRi-_2w6SYJg&usqp=CAU')`,
                                    }}
                                    className={cx('avatar')}
                                ></div>
                            </Link>
                        ) : (
                            <button className={cx('user')} onClick={handleForm}>
                                <FontAwesomeIcon icon={faUser} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <Login form={form} handleForm={handleForm} />
        </header>
    );
}

export default Header;
