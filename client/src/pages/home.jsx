import { MdFormatListBulletedAdd } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import AddTransactions from "../components/addTransactions";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [query, setQuery] = useState("");
  const [isTransaction, setIsTransaction] = useState(false);
  const [formBtn, setFormBtn] = useState("add");
  const [transactionData, setTransactionData] = useState({
    title: "",
    amount: "",
    source: "",
    date: "",
  });

  const getTransactions = async () => {
    const res = await axios(
      "http://localhost:4000/api/v1/transactions/get-transactions"
    );
    setTransactions(res.data.transactions);
  };

  useEffect(() => {
    getTransactions();
  }, [transactionData]);

  const filteredTransactions = transactions.filter((element) =>
    element.title.toLowerCase().includes(query)
  );

  const handleIsTransaction = () =>
    isTransaction ? setIsTransaction(false) : setIsTransaction(true);

  return (
    <>
      <AddTransactions
        setIsTransaction={setIsTransaction}
        isTransaction={isTransaction}
        setTransactions={setTransactions}
        transactions={transactions}
        transactionData={transactionData}
        setTransactionData={setTransactionData}
        formBtn={formBtn}
        setFormBtn={setFormBtn}
      />
      <div className="home">
        <section className="top">
          <form className="transaction-form">
            <input
              id="search"
              type="search"
              placeholder="Search title, amount and date"
              onChange={(e) => setQuery(e.target.value)}
            />
            <MdFormatListBulletedAdd
              id="transaction-icon"
              onClick={handleIsTransaction}
            />
          </form>
        </section>
        <section className="middle">
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
        </section>
        <section className="bottom">
          <Card
            transactions={filteredTransactions}
            setTransaction={setTransactions}
            setIsTransaction={setIsTransaction}
            setTransactionData={setTransactionData}
            setFormBtn={setFormBtn}
          />
        </section>
      </div>
    </>
  );
};

export default Home;
