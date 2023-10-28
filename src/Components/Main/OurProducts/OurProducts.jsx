import React from 'react'
import "./OurProducts.css"
import electricalImg from "../Sources/electricity-generation-transmission-distribution-guides.jpg"
const OurProducts = () => {
  const articlesData = [
    {
      id: 1,
      imageUrl: 'https://picsum.photos/id/1011/800/450',
      title: 'This is some title 1',
      content:
        "Lorem 1"
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/id/1005/800/450',
      title: 'This is some title 2',
      content:
        "lorem 2"
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/id/103/800/450',
      title: 'This is some title 3',
      content:
        "lorem 3"
    },
    {
      id: 1,
      imageUrl: 'https://picsum.photos/id/1011/800/450',
      title: 'This is some title 1',
      content:
        "lorem 4"
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/id/1005/800/450',
      title: 'This is some title 2',
      content:
        "lorem 5"
    },
    {
      id: 3,
      imageUrl: 'https://picsum.photos/id/103/800/450',
      title: 'This is some title 3',
      content:
        "lorem 6"
    },
    {
      id: 1,
      imageUrl: 'https://picsum.photos/id/1011/800/450',
      title: 'This is some title 1',
      content:
        "lorem 7"
    },
    {
      id: 2,
      imageUrl: 'https://picsum.photos/id/1005/800/450',
      title: 'This is some title 2',
      content:
        "lorem 8"
    },

  ];

  const handleProductOverView = () => {
    alert("Product overview")
  }

  return (
    <>
      <h2 className='OurProductTitle'>our Products</h2>
      <div className="HomeOfProduct">

        <section className="ProductArticles">
          {articlesData.map((article, index) => (
            <article className="productArticle" key={article.id}>
              <div className="article-wrapper">
                <figure>
                  <img src={electricalImg} alt="" />
                </figure>
                <div className="ProductArticle-body">
                  <p onClick={handleProductOverView}>{article.content}</p>

                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  )
}

export default OurProducts