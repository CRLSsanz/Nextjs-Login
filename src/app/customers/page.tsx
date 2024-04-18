"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";

const CustomersPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>CustomersPage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure reiciendis
        delectus quibusdam nisi minima necessitatibus iusto atque unde quisquam?
        Est amet eos nisi fuga nesciunt tempore, numquam veniam quae iusto
        deserunt neque molestias? Earum provident accusantium dolore quas ut
        saepe voluptatibus incidunt? Suscipit culpa ducimus, incidunt quisquam
        quae pariatur hic.
      </p>
      <div>
        <h1> {count} </h1>
        <Button onClick={() => setCount((count) => count + 1)}>
          {" "}
          Increment{" "}
        </Button>
        <Button onClick={() => setCount((count) => count - 1)}>
          {" "}
          Decrement{" "}
        </Button>
      </div>
    </div>
  );
};

export default CustomersPage;
