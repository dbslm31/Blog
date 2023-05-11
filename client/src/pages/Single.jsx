import React from "react";
import { Link } from "react-router-dom";

//Images
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";

//Components
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1662873689629-1598c1270bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.unsplash.com/photo-1679309252532-de2d31754e56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
            alt=""
          />
          <div className="infos">
            <span>Jessica</span>
            <p>Posté il y a 2 jours</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>

            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>Ceci est un titre</h1>
        <p>
          Lorem ipsum dolor sit amet. Non illo minima ex exercitationem corrupti
          quo repudiandae quidem? Qui tempora dignissimos id galisum autem et
          voluptatem voluptatem.
        </p>
        <p>
          Quo blanditiis deleniti ex corrupti voluptatibus est expedita expedita
          quo iure consequatur aut quaerat enim et omnis quasi? Eos enim earum
          et accusamus quaerat ea omnis perferendis et repudiandae dicta qui
          aspernatur molestiae? Est iusto numquam aut maxime voluptas quo autem
          necessitatibus est corrupti quod ea alias consectetur.
        </p>
        <p>
          Qui rerum dolorum et nesciunt dolorem a sint necessitatibus et
          expedita molestiae aut molestiae adipisci. Qui reprehenderit deleniti
          et laboriosam voluptates aut omnis corporis? Ut aliquid blanditiis est
          excepturi Quis et quisquam iste qui eaque animi qui excepturi
          voluptas! Hic esse fugit qui distinctio voluptatem ex omnis veritatis
          sit galisum voluptas id asperiores nulla et dolorem corrupti. Qui
          accusamus harum At illum doloribus sed consequatur accusamus eos
          tenetur facere.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
