function Card(props) {
  function classes() {
    const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return 'card mb-3 d-flex' + bg + txt;
  }
  return (
    <div className={classes()} style={{ maxWidth: '40rem' }}>
      <div className='card-header'>{props.header}</div>
      <div className='card-body d-flex flex-column container-fluid'>
        {props.title && <h5 className='card-title'>{props.title}</h5>}
        {props.text && <h5 className='card-text'>{props.text}</h5>}
        {props.body}
        <br />
        {props.error && <div id='createStatus'>{props.error}</div>}
      </div>
      <div></div>
    </div>
  );
}

export default Card;
