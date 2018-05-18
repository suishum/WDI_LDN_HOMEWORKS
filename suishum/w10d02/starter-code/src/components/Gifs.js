import React from 'react';

const Gifs = ({ gifArray }) => {
  return (

    <section className="">
      <ul className="columns is-multiline">
        {gifArray.map((gif, i) =>
          <li className="column is-one-quarter" key={i}>
            <div className="card">
              <div className="card-image">
                <figure className="image">
                  <img src={gif.images.downsized_medium.url} alt={gif.title} />
                </figure>
              </div>
            </div>
          </li>
        )}
      </ul>
    </section>

  );
};

export default Gifs;
