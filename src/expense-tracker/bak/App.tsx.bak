import React, { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 20, category: "Groceries" },
    { id: 2, description: "bbb", amount: 20, category: "Utilities" },
    { id: 3, description: "eee", amount: 20, category: "Groceries" },
    { id: 4, description: "nnn", amount: 20, category: "Entertainment" },
    { id: 5, description: "hhh", amount: 20, category: "Groceries" },
  ]);

  // ! We dont need useState for this as this can be calculated from existing state variabels.
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handleSubmit = (expense: any) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  return (
    <div className="container">
      <div className="mb-5">
        <ExpenseForm onSubmit={(expense) => handleSubmit(expense)} />
      </div>
      {expenses.length > 0 && (
        <>
          <div className="mb-3 mt-5">
            <ExpenseFilter
              onSelectCategory={(category) => setSelectedCategory(category)}
            />
          </div>
          <ExpenseList
            onDelete={(id) =>
              setExpenses(expenses.filter((expense) => expense.id != id))
            }
            expenses={visibleExpenses}
          />
        </>
      )}
    </div>
  );
};

export default App;
