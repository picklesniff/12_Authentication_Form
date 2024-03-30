import React from 'react';

const FormStyles = () => {
  return (
    <style>{`
      .main {
        width: auto;
        display: block;
        margin-left: 24px; 
        margin-right: 24px;
      }

      @media (min-width: 600px) {
        .main {
          width: 400px;
          margin-left: auto;
          margin-right: auto;
        }
      }

      .paper {
        margin-top: 64px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px 24px; 
      }

      .avatar {
        margin: 8px; 
        background-color: #000000;
      }

      .form {
        width: 100%;
        margin-top: 24px;
      }

      .submit {
        margin-top: 24px; 
      }
    `}</style>
  );
};

export default FormStyles;