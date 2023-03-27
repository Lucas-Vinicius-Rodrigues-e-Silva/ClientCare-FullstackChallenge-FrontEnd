import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <p>Essa é a página de Dashboard</p>
      <button>
        <Link to={"/login"}>Voltar a página inicial</Link>
      </button>
    </div>
  );
};

export default Dashboard;
