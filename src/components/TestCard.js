import React from 'react';

export function TestCard ({test, ...props}) {

  return <div key={test.id} style={{
    backgroundColor: test.active  ? "yellow" : "gray",
    border: " solid black", padding: "20px", margin: "10px"
  }} onClick={props.onTap}>
    <h2>이름: {test.name}</h2>
    <p>나이 : {test.age}</p>
    {props.children}
  </div>
}

export default TestCard;