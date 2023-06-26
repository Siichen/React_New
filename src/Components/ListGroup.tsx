import { useState } from "react";
import "./ListGroup.css";
import "bootstrap/dist/css/bootstrap.css";
import Avatar from "react-avatar";
import { BsCloud } from "react-icons/bs";
import { VscNotebook } from "react-icons/vsc";
import { BsTag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

function ListGroup() {
  const [showDetail, setShowDetail] = useState(false);
  const [showClassment, setShowClassment] = useState(false);
  const [showPublic, setShowPublic] = useState(false);

  const handleDetailClick = () => {
    setShowDetail(true);
    setShowClassment(false);
    setShowPublic(false);
  };

  const handleClassmentClick = () => {
    setShowDetail(false);
    setShowClassment(true);
    setShowPublic(false);
  };

  const handlePublicClick = () => {
    setShowDetail(false);
    setShowClassment(false);
    setShowPublic(true);
  };

  return (
    <div className="ListGroupPage">
      <div className="header">
        <h1>Mon Profil</h1>
        <Avatar
          className="Avatar"
          name="Dupont Christophe"
          size="100"
          round={true}
          src="https://example.com/avatar.jpg"
        />
        <p className="Name">Dupont Christophe</p>
        <p>Points</p>
        <p>49 370</p>
        <p className="Date">Mise à jour il y a 2 jours</p>
        <div className="Box1"> </div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleDetailClick}
          >
            Detail
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClassmentClick}
          >
            Classment
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlePublicClick}
          >
            Public
          </button>

          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <div className="nav-link-container">
                    <div className="icon-container">
                      <BsCloud />
                    </div>
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </div>

                  <div className="nav-link-container">
                    <div className="icon-container">
                      <VscNotebook />
                    </div>
                    <a className="nav-link active" aria-current="page" href="#">
                      Tech
                    </a>
                  </div>

                  <div className="nav-link-container">
                    <div className="icon-container">
                      <BsTag />
                    </div>
                    <a className="nav-link active" aria-current="page" href="#">
                      Features
                    </a>
                  </div>

                  <div className="nav-link-container">
                    <div className="icon-container">
                      <CgProfile />
                    </div>
                    <a className="nav-link active" aria-current="page" href="#">
                      Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* Detail Content */}
        {showDetail && <p className="test">Il s'agit d'une page de test :0</p>}

        {/* Classment Content */}
        {showClassment && (
          <>
            <div className="div1">
              1 Jean Dupont{" "}
              <div className="Blackwords">Publié il y a 10 minutes {">"}</div>
            </div>
            <div className="div2">
              2 Marie Lefèvre{" "}
              <div className="Blackwords">Publié il y a 10 minutes {">"}</div>
            </div>
            <div className="div3">
              3 Pierre Dubois{" "}
              <div className="Blackwords">Publié il y a 10 minutes {">"}</div>
            </div>
            <div className="div4">
              4 Élise Laurent{" "}
              <div className="Blackwords">Publié il y a 10 minutes {">"}</div>
            </div>
            <div className="div5">
              5 Nico Martin{" "}
              <div className="Blackwords">Publié il y a 10 minutes {">"}</div>
            </div>
            <div className="div6">
              6 Céline Rous{" "}
              <div className="Blackwords">Publié il y a 10 minutes {">"}</div>
            </div>
            <div className="div7">
              7 Julien Leroy{" "}
              <div className="Blackwords">Publié il y a 10 minutes {">"}</div>
            </div>
          </>
        )}
        {/* Public Content */}
        {showPublic && (
          <>
            <div className="Pic">
              <img
                src="https://media.istockphoto.com/id/1459087025/fr/vectoriel/logo-eco-energy-vector-avec-symbole-de-feuille-ce-logo-est-adapt%C3%A9-%C3%A0-la-technologie-au.jpg?s=612x612&w=0&k=20&c=_1sV8JZYvdfqXO-6FxIUTAPlRvK-F_7e7gNNiN4Em4k="
                alt="Points_Pic"
              />
            </div>
            <div className="d-grid gap-1 col-6 mx-auto">
              <button className="btn btn-primary" type="button">
                <div className="Button">Contact me</div>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ListGroup;
