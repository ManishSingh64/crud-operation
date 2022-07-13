import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "../GithubUsers/Github.module.css";

export const Github = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    showUsers();
  }, []);

  function handleChange(e) {
    setText(e.target.value);
  }

  function searchUser(text) {
    console.log(text, "text");
    showUsers(text);
  }
  function showUsers(text) {
    axios
      .get(`https://api.github.com/search/users?q=${text}&per_page=10`)
      .then((r) => {
        console.log(r.data.items);
        setData(r.data.items);
      }).catch((e) => {
        console.log('empty string')
        setData([])
      });
  }
 
  if(data.length === 0) return <h1>Search some thing after refresh</h1>

  return (
    <div>
      Github
      <div>
        <input type="text" placeholder="users" onChange={handleChange} />
        <button onClick={() => searchUser(text)}>Search</button>
      </div>
      <div className={styles.data}>
        {data.map((el) => (
          <div className={styles.inner}>
            <img src={el.avatar_url} alt="" />
            <h2>{el.login}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};
