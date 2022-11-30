export default AppNav;

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppNavSearch from "./AppNavSearch";
import { useContext } from "react";

function AppNav({ headerData, articleData, updateSearch }) {

  function Search(searchInput) {
    let splitInput = searchInput.split(" ");
    let totalResults = [];
    
      let result = articleData.filter((article) => {
        for (let y of splitInput) {
        let title = article.article.title.split(" ");
        for (let word of title) {
          // console.log(y.toLowerCase(), word.toLowerCase())
          if (y.toLowerCase() == word.toLowerCase()) {
            return true;
          }
        }
        }
      });
      totalResults=totalResults.concat(result)
    
    // console.log(totalResults)
    updateSearch(totalResults);
    
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        {headerData.map((section) => {
          return (
            <Nav.Item key={section.label} className="capital">
              <Nav.Link key={section.label} href={`#/${section.label}`}>
                {section.label}
              </Nav.Link>
            </Nav.Item>
          );
        })}
        <AppNavSearch Search={Search} />
      </Navbar>
    </div>
  );
}
