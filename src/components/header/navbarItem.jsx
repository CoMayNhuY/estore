import React from 'react';

function NavBarItem({ item, isShowDropDown }) {
    return (
        <li class="nav-item ">
            {isShowDropDown ? (
                <div class="dropdown">
                    <button type="button" class="btn dropdown-toggle btn-hd-t-left" data-bs-toggle="dropdown">
                        {item.title}
                    </button>
                    <ul class="dropdown-menu">
                        {item.subTitles?.map((sub, index) => (
                            <li key={index.toString()}>
                                <a class="dropdown-item" href="#">
                                    {sub}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <li class="nav-item" key={item.id}>
                    <a class="nav-link" href="">
                        <span className={item.styTitle} id="nav-text">
                            {item.title}
                        </span>
                    </a>
                </li>
            )}
        </li>
    );
}

export default NavBarItem;
