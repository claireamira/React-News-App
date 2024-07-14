const NewsItem = ({ title, description, src, url }) => {
    return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-3 py-3 shadow-lg rounded" style={{ maxWidth: "500px", minHeight: "150px" }}>
        {src && (
          <img
            src={src}
            style={{ height: "150px", width: "100%", objectFit: "cover", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}
            className="card-img-top"
            alt={title || "News Image"}
          />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title ? title.slice(0, 50) : "No title available."}</h5>
          <p className="card-text flex-grow-1">{description ? description.slice(0, 160) : "News description about event is not available. It is information about something that just happened."}</p>
          <a href={url} className="btn btn-primary mt-auto">Read more</a>
        </div>
      </div>
    );
  };
  
  export default NewsItem;
  