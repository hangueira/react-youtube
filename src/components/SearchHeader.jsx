import React, { useEffect, useState } from "react";
import { FaYoutube, FaSearch } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };

  useEffect(() => setText(keyword || ""), [keyword]);

  return (
    <header>
      <Link to="/">
        <FaYoutube />
        <h1>YouTube</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="검색할 내용을 입력하세요."
          value={text}
          onChange={handleChange}
        />
        <button>
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
