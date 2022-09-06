import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const day = props.date.tolocaleString("en-US", { day: "numeric" });
  const year = props.date.getFullYear();

  //   const month = "jan";
  const day = 12;
  //   const year = 2012;

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
