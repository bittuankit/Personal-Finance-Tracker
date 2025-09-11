import { MdFormatListBulletedAdd } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");

  const getTransactions = async () => {
    const res = await axios(
      "http://localhost:4000/api/v1/transactions/get-transactions"
    );
    setTransactions(res.data.transactions);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  const filteredTransactions = transactions.filter((element) =>
    element.title.toLowerCase().includes(query)
  );

  return (
    <>
      <div className="home">
        <section className="top">
          <form className="transaction-form">
            <input
              id="search"
              type="search"
              placeholder="Search title, amount and date"
              onChange={(e) => setQuery(e.target.value)}
            />
            <MdFormatListBulletedAdd id="transaction-icon" />
          </form>
        </section>
        <section className="middle">
          <form>
            <div className="btn">
              <div className="sort-btn">
                <button>Date</button>
                <button>Amount</button>
              </div>
              <div className="category-btn">
                <select id="categories" name="categories">
                  <option value="all">All</option>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>
            </div>
          </form>
        </section>
        <section className="bottom">
          <Card transactions={filteredTransactions} />
        </section>
      </div>
    </>
  );
};

export default Home;
