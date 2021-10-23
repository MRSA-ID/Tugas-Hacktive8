import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [idFromEditBtn, setIdFromEditBtn] = useState();
  const [isDisable, setisDisable] = useState(true);

  useEffect(() => {
    fetch("http://192.168.100.11:4000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length === 0) {
      handleIsValue(true);
    } else {
      handleIsValue(false);
    }
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
    if (e.target.value.length === 0) {
      handleIsValue(true);
    } else {
      handleIsValue(false);
    }
  };

  const handleIsValue = (value) => {
    setisDisable(value);
  };

  const handleSubmitAndUpdate = (event) => {
    if (idFromEditBtn !== undefined) {
      return updatePost(event);
    } else {
      return addPost(event);
    }
  };

  const addPost = (event) => {
    event.preventDefault();
    fetch("http://192.168.100.11:4000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts([...posts, data]);
        setTitle("");
        setDescription("");
        handleIsValue(true);
      })
      .catch((err) => console.log(err));
  };

  const deleteFromState = (id) => {
    let temp = [...posts];
    temp.splice(id, 1);
    setPosts(temp);
  };

  const deletePost = (postId, idx) => {
    fetch(`http://192.168.100.11:4000/posts/${postId}`, {
      method: "DELETE",
    }).then(() => deleteFromState(idx));
  };

  const editPost = (post) => {
    setTitle(post.title);
    setDescription(post.description);
    setIdFromEditBtn(post.id);
  };

  const updatePost = (event) => {
    event.preventDefault();
    fetch(`http://192.168.100.11:4000/posts/${idFromEditBtn}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(
          posts.map((post) =>
            post.id === idFromEditBtn
              ? { ...post, title: data.title, description: data.description }
              : post
          )
        );
        setTitle("");
        setDescription("");
        setIdFromEditBtn(undefined);
        handleIsValue(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-1/3 bg-green-600 h-screen px-5 py-2 overflow-auto">
      <nav>
        <h1 className="font-bold text-white text-2xl">POST</h1>
      </nav>
      <div>
        <form className="grid space-y-2 mt-2">
          <input
            className="bg-transparent text-white border-2 p-1 focus:outline-none focus:ring-1 focus:ring-white placeholder-white"
            placeholder="Title"
            value={title}
            onChange={handleChangeTitle}
          ></input>
          <input
            className="bg-transparent text-white border-2 p-1 focus:outline-none focus:ring-1 focus:ring-white placeholder-white"
            placeholder="Description"
            value={description}
            onChange={handleChangeDescription}
          ></input>
          <button
            className={` text-white ${
              idFromEditBtn !== undefined
                ? isDisable
                  ? "bg-gray-400 "
                  : "bg-green-500"
                : isDisable
                ? "bg-gray-400"
                : "bg-blue-500"
            }`}
            disabled={isDisable}
            onClick={handleSubmitAndUpdate}
          >
            {idFromEditBtn !== undefined ? "UPDATE" : "SAVE"}
          </button>
        </form>
      </div>

      {posts.map((post, idx) => (
        <div
          className="bg-gray-200 mt-4 p-2 text-sm rounded-lg grid grid-cols-3"
          key={idx}
        >
          <div className="col-span-2">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p>{post.description}</p>
          </div>
          <div className="flex justify-end items-center">
            <button
              className="text-lg bg-yellow-600 text-white h-8 px-2 rounded-md mr-1"
              onClick={() => editPost(post)}
            >
              edit
            </button>
            <button
              className="text-lg bg-red-600 text-white h-8 px-2 rounded-md"
              onClick={() => deletePost(post.id, idx)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
