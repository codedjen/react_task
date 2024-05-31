import React, { useState } from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './Filter.css';
import ReactSlider from 'react-slider';


const Filter = () => {
  const [price, setPrice] = useState([0, 5000]);
  const [long, setLong] = useState([0, 2000]);
  const [wide, setWide] = useState([0, 5000]);
  const [tall, setTall] = useState([0, 1000]);
  const [isCollapsed, setIsCollapsed] = useState({
    material: false,
    designStyle: false,
    category: false
  });

  const toggleCollapse = (group) => {
    setIsCollapsed({
      ...isCollapsed,
      [group]: !isCollapsed[group]
    });
  };

  return (
    <div className="filter">
      <div className="filter-group">
        <div className="filter-group-header">
          <h4>Category</h4>
          <ExpandLessIcon className={`collapse-icon ${isCollapsed.category ? 'collapsed' : ''}`} onClick={() => toggleCollapse('category')} />
        </div>
        {!isCollapsed.category && (
          <ul>
            <li><input type="radio" name="category" id="furniture" /><label for="furniture" className="radio-label">Furniture</label></li>
            <li><input type="radio" name="category" id="lighting" /><label for="lighting" className="radio-label">Lighting</label></li>
            <li><input type="radio" name="category" id="decor" /><label for="decor" className="radio-label">Decor</label></li>
          </ul>
        )}
      </div>
      <div className="filter-group">
        <div className="filter-group-header">
          <h4>Price Range</h4>
          <ExpandLessIcon className={`collapse-icon ${isCollapsed.price ? 'collapsed' : ''}`} onClick={() => toggleCollapse('price')} />
        </div>
        {!isCollapsed.price && (
          <div className="slider-wrapper">
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="thumb"
              trackClassName="track"
              value={price}
              min={0}
              max={10000}
              onChange={(value) => setPrice(value)}
              renderThumb={(props, state) => <div {...props}><span>{state.valueNow}</span></div>}
              renderTrack={(props, { index }) => (
                <div
                  {...props}
                  className={`track ${index === 0 ? 'track-left' : index === 1 ? 'track-middle' : 'track-right'}`}
                />
              )}
            />
          </div>
        )}
      </div>
      <div className="filter-group">
        <div className="filter-group-header">
          <h4>Material</h4>
          <ExpandLessIcon className={`collapse-icon ${isCollapsed.material ? 'collapsed' : ''}`} onClick={() => toggleCollapse('material')} />
        </div>
        {!isCollapsed.material && (
          <ul>
            <li><input type="radio" name="material" id="cloth" /><label for="cloth" className="radio-label">Cloth</label></li>
            <li><input type="radio" name="material" id="wood" /><label for="wood" className="radio-label">Wood</label></li>
            <li><input type="radio" name="material" id="leather" /><label for="leather" className="radio-label">Imitation Leather</label></li>
            <li><input type="radio" name="material" id="skin" /><label for="skin" className="radio-label">Skin</label></li>
            <li><input type="radio" name="material" id="plastic" /><label for="plastic" className="radio-label">Plastic</label></li>
            <li><input type="radio" name="material" id="rattan" /><label for="rattan" className="radio-label">Rattan</label></li>
          </ul>
        )}
      </div>
      <div className="filter-group">
        <div className="filter-group-header">
          <h4>Design Style</h4>
          <ExpandLessIcon className={`collapse-icon ${isCollapsed.designStyle ? 'collapsed' : ''}`} onClick={() => toggleCollapse('designStyle')} />
        </div>
        {!isCollapsed.designStyle && (
          <ul>
            <li><input type="radio" name="style" id="contemporary" /><label for="contemporary" className="radio-label">Contemporary</label></li>
            <li><input type="radio" name="style" id="traditional" /><label for="traditional" className="radio-label">Traditional</label></li>
          </ul>
        )}
      </div>
      <div className="filter-group">
        <div className="filter-group-header">
          <h4>Size</h4>
          <ExpandLessIcon className={`collapse-icon ${isCollapsed.long ? 'collapsed' : ''}`} onClick={() => toggleCollapse('Size')} />
        </div>
        {!isCollapsed.Size && (
          <div className="slider-wrapper">
            <h4>Long</h4>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="thumb"
              trackClassName="track"
              value={long}
              min={10}
              max={500}
              onChange={(value) => setLong(value)}
              renderThumb={(props, state) => <div {...props}><span>{state.valueNow}</span></div>}
              renderTrack={(props, { index }) => (
                <div
                  {...props}
                  className={`track ${index === 0 ? 'track-left' : index === 1 ? 'track-middle' : 'track-right'}`}
                />
              )}
            />
          </div>
        )}
        {!isCollapsed.Size && (
          <div className="slider-wrapper">
            <h4>Wide</h4>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="thumb"
              trackClassName="track"
              value={wide}
              min={10}
              max={700}
              onChange={(value) => setWide(value)}
              renderThumb={(props, state) => <div {...props}><span>{state.valueNow}</span></div>}
              renderTrack={(props, { index }) => (
                <div
                  {...props}
                  className={`track ${index === 0 ? 'track-left' : index === 1 ? 'track-middle' : 'track-right'}`}
                />
              )}
            />
          </div>
        )}
        {!isCollapsed.Size && (
          <div className="slider-wrapper">
            <h4>Tall</h4>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="thumb"
              trackClassName="track"
              value={tall}
              min={10}
              max={200}
              onChange={(value) => setTall(value)}
              renderThumb={(props, state) => <div {...props}><span>{state.valueNow}</span></div>}
              renderTrack={(props, { index }) => (
                <div
                  {...props}
                  className={`track ${index === 0 ? 'track-left' : index === 1 ? 'track-middle' : 'track-right'}`}
                />
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;