import { Button } from "primereact/button";

import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  return (
    <div className="w-full md:w-5 mx-auto text-center ">
      <h1 className="text-primary">Welcome</h1>

      <h3>Wingtip Toys can help you find the perfect gift.</h3>

      <p>
        We're all about transportation toys. You can order any of our toys
        today. Each toy listing has detailed information to help you choose the
        right toy.
      </p>

      <Button
        label="Explore our products"
        rounded
        size="small"
        className="w-full md:w-4"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          history.push("/products");
        }}
      />
    </div>
  );
}

export default Home;
