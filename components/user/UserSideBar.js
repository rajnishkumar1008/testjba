import Link from "next/link";
import React from "react";

const UserSideBar = () => {
  return (
    <div className="user-list-account">
      <div className="user-i-name">
        <div className="usname">AC</div>
        <div className="user-info">
          Abhinav Chauhan
          <span>abinv.ds@gmail.com</span>
        </div>
        <div className="edit-prf">
          <Link href="/myaccounts/edit-profile/">
            <a>
              <i className="bi bi-pencil"></i> Edit Profile
            </a>
          </Link>
        </div>
      </div>
      <ul>
        <li className="active">
          <Link href="/myaccounts/order/">
            <a>
              <img
                src="/img/login/my-order-black.png/"
                alt="my-order-black"
                className="img-1"
              />
              <img
                src="/img/login/my-order-blue.png/"
                alt="my-order-blue"
                className="img-2"
              />
              <span>My Orders</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/myaccounts/track-order/">
            <a>
              <img
                src="/img/login/track-order-black.png/"
                alt="track-order-black"
                className="img-1"
              />
              <img
                src="/img/login/track-order-blue.png/"
                alt="track-order-blue"
                className="img-2"
              />
              <span>Track Orders</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/myaccounts/my-address/">
            <a>
              <img
                src="/img/login/location-black.png/"
                alt="location-black"
                className="img-1"
              />
              <img
                src="/img/login/location-blue.png/"
                alt="location-blue"
                className="img-2"
              />
              <span>My Address</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <img
                src="/img/login/logout-black.png/"
                alt="logout-black"
                className="img-1"
              />
              <img
                src="/img/login/logout-blue.png/"
                alt="logout-blue"
                className="img-2"
              />
              <span>Sign Out</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default UserSideBar;
