import { useRouter } from "next/router";
import React, { useState } from "react";

const Search = () => {
  return (
    <>
      <form>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
