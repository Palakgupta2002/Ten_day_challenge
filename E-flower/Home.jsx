import React, { useState } from 'react';
import ProductPage from './ProductPage';
import './Home.css';
import Filter from './Filter';
import { SearchOutlined } from '@ant-design/icons';

const Home = () => {
  const [filtervalue, setfiltervalue] = useState('');
  const [searchvalue, setsearchvalue] = useState('');

  const handlechange = (e) => {
    
    setsearchvalue(e.target.value);
  };
  
  return (
    <div>
      {/* <div className="Navigation">
        <div>Logo</div>
        <div style={{ display: 'flex', columnGap: '30px' }}>
          <div>Home</div>
          <div>Cart</div>
          <div>About</div>
        </div>
      </div> */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '2%' }}>
        <div>
          <input onChange={handlechange} className="SearchBar" placeholder="Search Yours One" type="text"></input>
        </div>
        <button className="SearchIcon">
          <SearchOutlined />
        </button>
      </div>
      <div style={{ display: 'flex', columnGap: '2%', marginTop: '3%' }}>
        <div style={{ width: '20%' }}>
          <Filter setfiltervalue={setfiltervalue} />
        </div>
        <div style={{ width: '72%' }}>
          <ProductPage filtervalue={filtervalue} searchvalue={searchvalue} />
        </div>
      </div>
    </div>
  );
};

export default Home;
