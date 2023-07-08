import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-white "
        style={{ backgroundImage: 'linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%'}}
      >
        <div className="footer-contenedor">
          <hr className="my-5" />

          <section className="mb-2">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p className="mx-auto" style={{width:'80%'}}>
                  Registrate en nuestra web y comienza a vender y comprar miles de productos.
                  
                </p>
              </div>
            </div>
          </section>
          <section className="text-center mb-5">
            <a href="" className="text-white me-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-twitter" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-google" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-instagram" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-linkedin" />
            </a>
            <a href="" className="text-white me-4">
              <i className="fab fa-github" />
            </a>
          </section>
        </div>

        <div
          className=" text-center p-3  "
        >
          © 2022 Copyright: Market Place in React.
        </div>
      </footer>
    </>
  );
};

export default Footer;
