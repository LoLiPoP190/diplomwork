import { NavLink } from "react-router-dom";
import "./CategoryList.css";

export default function CategoryList() {
  const categories = [
    { id: 1, name: "constructors", slug: "constructors" },
    { id: 2, name: "baby toys", slug: "baby-toys" },
    { id: 3, name: "girl toys", slug: "girl-toys" },
    { id: 4, name: "soft toys", slug: "soft-toys" },
    { id: 5, name: "nastolka", slug: "nastolka" },
  ];

  const output = categories.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>
        {category.name}
      </NavLink>
    </li>
  ))

  function showAndHide() {
    document.querySelector("#dropdown").classList.toggle("show");
  }

  return (
    <div className="CategoryList">
      <button className="dropBtn" onClick={showAndHide}> Categories ˅</button>
      <ul id="dropdown" className="dropdownContent">{output}</ul>
    </div>
  )
}