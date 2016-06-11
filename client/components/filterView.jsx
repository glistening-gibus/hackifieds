const FilterView = (props) => {

  const handleFilterSubmit = function(e) {
    console.log('etarget: ', document.getElementById("searchInput").value);
    const target = e.target.name
    let data;
    if (target === 'Distance') {
      data = ['distance', e.target.value];
    } else if (target === 'Price') {
      data = ['price', e.target.value];
    } else if (target === 'RoomType') {
      data = ['roomtype', e.target.value];
    } else if (document.getElementById("searchInput")) {
      console.log('making it')
      data = ['description', document.getElementById("searchInput").value];
    }
    console.log('filterdata', data);
    props.handleClick(data);
  }

  if (props.page === 'rent') {
    return (
      <form>
        <div>
          <h4>Distance</h4>
          <select name="Distance" id="distance" onChange={handleFilterSubmit.bind(this)}>
              <option value="All">All</option>
              <option value="2">{"<2"}</option>
              <option value="5">{"<5"}</option>
              <option value="10">{"<10"}</option>
              <option value="11">{"10+"}</option>
          </select>
        </div>
        <div>
        <h4>Price</h4>
          <select name="Price" id="price" onChange={handleFilterSubmit.bind(this)}>
              <option value="All">All</option>
              <option value="1,1000">0 - 1000</option>
              <option value="1001,2000">$1000 - $2000</option>
              <option value="2001,3000">$2000 - $3000</option>
              <option value="3001,4000">$3000 - $4000</option>
              <option value="5000">$5000+</option>
          </select>
        </div>
        <div>
        <h4>Room Type</h4>
          <select name="RoomType" id="roomtype" onChange={handleFilterSubmit.bind(this)}>
              <option value="All">All</option>
              <option value="Private room">Private room</option>
              <option value="Shared room">Shared room</option>
              <option value="Entire home/apt">Entire home/apt</option>
          </select>
        </div>
      </form>
    );
  } else if (props.page === 'buy') {
    return (
      <div>
      <form onSubmit={handleFilterSubmit.bind(this)}>
        <div>
          <h4>Keyword</h4>
            <input name="Description" type="text" id="searchInput" placeholder="Search mac, windows, bike, or whatever" className="searchInput" required />
        </div>
      </form>

      <form>
        <div>
        <h4>Price</h4>
          <select name="Price" id="price" onChange={handleFilterSubmit.bind(this)}>
              <option value="All">All</option>
              <option value="1,100">0 - 100</option>
              <option value="101,200">$100 - $200</option>
              <option value="201,300">$200 - $300</option>
              <option value="301,400">$300 - $400</option>
              <option value="500">$500+</option>
          </select>
        </div>
      </form>
      </div>
    );
  } else if (props.page === 'hack') {
    return (
      <form onSubmit={handleFilterSubmit.bind(this)}>
        <div>
          <h4>Keyword</h4>
            <input name="Description" type="text" id="searchInput" placeholder="Search mac, windows, bike, or whatever" className="searchInput" required />
        </div>
      </form>
    );
  }



};

export default FilterView;
