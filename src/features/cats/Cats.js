import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CatList from "./CatList";
import { fetchCats } from "./catsSlice";

function Cats() {
  const catPics = useSelector(state=> state.entities)
  // const allCatPics = catPics.map(cat => (<CatList key={cat.id} catPic={cat} />) )
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchCats())
  })

  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
      <CatList catPics={catPics} />
    </div>
  );
}

export default Cats;
