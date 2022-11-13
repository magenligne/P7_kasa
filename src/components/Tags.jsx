import React from "react";

function Tags(props) {
  console.log(props.tags);
  const tagsTab = props.tags;
  return (
    <div className="tagsContainer">
      {tagsTab.map((eachtag) => (
        <div className="tagsContainer_tag">
          <p className="tagsContainer_tag_p">{eachtag}</p>
        </div>
      ))}
    </div>
  );
}

export default Tags;
