import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useEffect, useRef } from "react";

export default function AppNavSearch({ Search }) {
  let firstRender = useRef(true);

  const [typingValue, changeValue] = useState("");
  const [submitValue, onSubmitValue] = useState("");
  function TypeInField(event) {
    changeValue(event.target.value);
  }

  // console.log(Search("server bone done"))

  useEffect(() => {
    // the ordering of the useEffect matters here, because firstRender.current is set to false in the second useEffect
    if (!firstRender.current) {
      // componentDidUpdate()
      console.log("componentDidUpdate: I AM UPDATING NOW!");
      Search(submitValue)
    }
  }, [submitValue]);

  useEffect(() => {
    // componentDidMount
    console.log("componentDidMount: I AM ALIVE NOW!");
    firstRender.current = false;

    // componentWillUnmount
    return () => console.log("componentWillUnmount: I AM DYING NOW!");
  }, []);

  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          onChange={TypeInField}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
    <a href="/#/search">
        <Button
          onClick={() => onSubmitValue(typingValue)}
          variant="outline-success"
        >
          Search
        </Button>
        </a>
      </Form>
    </div>
  );
}
