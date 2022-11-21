import React from "react";

function Tags(props) {
  console.log(props.tags);
  const tagsTab = props.tags;
  return (
    <div className="tagsContainer">
      {tagsTab.map((eachtag, tag) => (
        <div className="tagsContainer_tag" key={tag}>
          <p className="tagsContainer_tag_p">{eachtag}</p>
        </div>
      ))}
    </div>
  );
}

export default Tags;
