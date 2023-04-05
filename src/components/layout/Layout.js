import Nav from "../nav/Nav";
import "./Layout.css";

export default function Layout(props) {
  return (
    <div className="Layout">

      <header>
        <Nav />
      </header>
      <aside>
        <nav>NAV Categories</nav>
      </aside>
      <main>{props.children}</main>
      <footer>FOOTER</footer>
    
    </div>
  )
}