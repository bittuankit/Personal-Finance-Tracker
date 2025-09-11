import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Card = ({ transactions }) => {
  return (
    <div>
      {transactions && transactions.length > 0 ? (
        <div className="card">
          {transactions.map((e) => (
            <div className="card-item" key={e._id}>
              <h4 id="title">{e.title}</h4>
              <div className="card-icons">
                <FaEdit id="card-icon-edit" />
                <MdDelete id="card-icon-delete" />
              </div>
              <h4 id="amount">Amount</h4>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No transactions yet...</p>
        </div>
      )}
    </div>
  );
};

export default Card;
