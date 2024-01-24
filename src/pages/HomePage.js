import React from 'react';
import {useEffect} from "react";
import TestCard from "../components/TestCard";

export function HomePage() {
  const [list, setList] = React.useState([]);

  useEffect(() => {
    let data = [
      {id: 0, name: "eungee", age: 22, active: true},
      {id: 1, name: "uidon", age: 23, active: true},
      {id: 2, name: "ilsdoo", age: 24, active: true},
    ]
    setList(data);
  }, []);

  const onTap = (item) => {
    // console.log("onTap", item.id, item.name);
    let next = list.filter((i) => {
      if (i.id === item.id) {
        i.active = !i.active;
      }
      return i
    });
    setList(next);
  }
  return <div style={{padding: "20px"}}>
    <h1>리스트 만들기</h1>
    <p>리스트를 만들어 보세요.</p>
    {
      list.map((item) => {
        return <TestCard
          test={item}
          key={item.id}
          onTap={() => onTap(item)}>
          {item.id === 1 && <div style={{color: "tomato"}}>여기는 children</div>}
        </TestCard>
      })
    }
  </div>
}

export default HomePage;