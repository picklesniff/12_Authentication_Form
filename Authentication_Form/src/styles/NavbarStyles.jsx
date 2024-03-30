import React from 'react';

const NavbarStyles = () => {
  return (
    <style>{`
      .root {
        width: 100%;
        margin-bottom: 0;
      }

      .grow {
        flex-grow: 1;
      }

      .menuButton {
        margin-left: -12px;
        margin-right: 20px;
      }

      .title {
        display: none;
      }

      @media (min-width: 600px) {
        .title {
          display: block;
        }
      }

      .search {
        position: relative;
        border-radius: 4px; 
        background-color: rgba(255, 255, 255, 0.15); 
        &:hover {
          background-color: rgba(255, 255, 255, 0.25); 
        }
        margin-left: 0;
        width: 100%;
      }

      @media (min-width: 600px) {
        .search {
          margin-left: 8px; 
          width: auto;
        }
      }

      .searchIcon {
        width: 72px; 
        height: 100%;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .inputRoot {
        color: inherit;
        width: 100%;
      }

      .inputInput {
        padding-top: 8px; 
        padding-right: 8px;
        padding-bottom: 8px;
        padding-left: 80px; 
        transition: width;
        width: 100%;
      }

      @media (min-width: 600px) {
        .inputInput {
          width: 120px;
          &:focus {
            width: 200px;
          }
        }
      }
    `}</style>
  );
};

export default NavbarStyles;
