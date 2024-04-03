const NewsDetail = ({ title, content, author, date }) => {
    return (
      <div className="news-detail">
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Author: {author}</p>
        <p>Date: {date}</p>
      </div>
    );
  };
  
  window.NewsDetail = NewsDetail;

  