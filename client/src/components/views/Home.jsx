import { useNavigate } from "react-router-dom";
import "../styles/home-page.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aut, consequatur
        corporis cum cupiditate dolore dolorem dolorum, enim fuga in ipsa, minus nesciunt
        non omnis quo repudiandae sunt tenetur voluptates.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam assumenda
        cupiditate dolorum earum impedit ipsum iste neque nobis quo reiciendis,
        reprehenderit, rerum tempore vero? Beatae ex explicabo laborum non saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate
        doloribus excepturi exercitationem harum id incidunt ipsam modi nemo, obcaecati
        optio quisquam ratione sed, tempore velit. Aut eos perspiciatis repellat?
      </p>
      <button onClick={() => navigate("/labs")}>К списку лабораторных работ</button>
    </div>
  );
};

export default Home;
