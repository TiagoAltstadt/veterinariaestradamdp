function Badge(props) {
  return (
    <section className="Badge">
      <div className="badgeImage">
        <img className="badgeFile" src={props.img}></img>
      </div>
      <div className="badgeName"> {props.name}</div>
      {/*
        <div className="badgeRol">({props.rol})</div>
        <div className="badgeDescription">"{props.description}"</div> 
      */}
    </section>
  );
}

export default Badge;
