'use client'
import "@styles/globals.css"
import "@styles/furniture.css"
import React, { useState, useEffect } from "react";
import { useAppContext } from "@components/PathProvider";
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Divider } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {TextField} from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BigFooter from "@components/BigFooter";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
const FurnitureCategory = () => {
  return (
    <div className="furniture-category">
      <p>Coffee Tables & End Tables</p>
      <p>Loveseats</p>
      <p>TV Stands & Media Storage Furniture</p>
      <p>Coffee Tables & End Tables</p>
      <p>Loveseats</p>
      <p>TV Stands & Media Storage Furniture</p>
      <p>Coffee Tables & End Tables</p>
      <p>Loveseats</p>
      <p>TV Stands & Media Storage Furniture</p>
      <p>Coffee Tables & End Tables</p>
      <p>Loveseats</p>
      <p>TV Stands & Media Storage Furniture</p>
    </div>
  )
}

const FurniturePricePerItem = ({passedItems, passedProps, filteredItem, allItems, setFilteredItem, setFilterLists}) => {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    // Update the state based on the checkbox name
    switch (name) {
      case 'under500':
        passedProps.setUnder500(checked);
        break;
      case 'from500to1000':
        passedProps.setFrom500to1000(checked);
        break;
      case 'from1000to2000':
        passedProps.setFrom1000to2000(checked);
        break;
      case 'above2000':
        passedProps.setAbove2000(checked);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (passedProps.minNumber < 0) {
      passedProps.setDisplayErrorMin("Value must be between 0 and 1000000")
    }    
    else if (passedProps.minNumber >= 0) {
      passedProps.setDisplayErrorMin("")
    }
  }, [passedProps.minNumber])

  useEffect(() => {
    if (passedProps.maxNumber < passedProps.minNumber) {
      passedProps.setDisplayErrorMax(`Value must be between ${Math.max(0, passedProps.minNumber)} and 1000000`);
    }
    else {
      passedProps.setDisplayErrorMax("")
    }
  }, [passedProps.minNumber, passedProps.maxNumber])

  useEffect(() => {
    passedProps.setNoFilter((passedProps.minNumber > passedProps.maxNumber) || ((passedProps.minNumber == 0 && passedProps.maxNumber == 0) && (passedProps.under500 == false && passedProps.from500to1000 == false && passedProps.from1000to2000 == false && passedProps.above2000 == false)))
      let addFilterItem = []
      let temp1 = [];
      let temp2 = [];
  
      
      // Filter items based on the price range
      if ((passedProps.minNumber != 0 || passedProps.maxNumber != 0) && passedProps.minNumber <= passedProps.maxNumber) {
        temp1 = allItems.filter((item) => {
          return item.salePrice >= passedProps.minNumber && item.salePrice < passedProps.maxNumber;
        });
        addFilterItem.push(`Price Per item: ${passedProps.minNumber} - ${passedProps.maxNumber}`)
      }
  
      // Filter items based on checkboxes
      if (passedProps.under500) {
        temp2 = temp2.concat(allItems.filter((item) => item.salePrice < 500));
        addFilterItem.push(`Price Per item: Under $500`)
      }
      if (passedProps.from500to1000) {
        temp2 = temp2.concat(allItems.filter((item) => item.salePrice >= 500 && item.salePrice < 1000));
        addFilterItem.push(`Price Per item: From $500 to $1000`)
      }
      if (passedProps.from1000to2000) {
        temp2 = temp2.concat(allItems.filter((item) => item.salePrice >= 1000 && item.salePrice < 2000));
        addFilterItem.push(`Price Per item: From $1000 to $2000`)
      }
      if (passedProps.above2000) {
        temp2 = temp2.concat(allItems.filter((item) => item.salePrice >= 2000));
        addFilterItem.push(`Price Per item: Above $2000`)
        
      }
    
      // Remove duplicates by converting the array to a Set and back to an array
      const unionResult = Array.from(new Set([...temp1, ...temp2]));
      if (unionResult.length === 0)
        setFilteredItem(passedItems)
      else
        setFilteredItem(unionResult);
      setFilterLists(addFilterItem);
    
  }, [passedProps.minNumber, passedProps.maxNumber, passedProps.under500, passedProps.from500to1000, passedProps.from1000to2000, passedProps.above2000])

  return (
    <div className="furniture-category">
      
      <div style={{display: 'flex', flexDirection: "column", justifyContent:"center"}}>
        <div style={{display: 'flex'}}>
          <div style={{display: "flex", flexDirection: "column"}}>
            <TextField
              label="Min"
              type="number"
              id="Min"
              name="Min"
              value={passedProps.minNumber}
              color={passedProps.displayErrorMin ? "error" : "primary"}
              onChange={(e) => {
                passedProps.setMinNumber(e.target.value);
              }}
              sx={{mt: "10px", mr: "20px"}}
            />
            <p style={{display: passedProps.displayErrorMin ? "block" : "none", color: "red", margin:"10px 0 0 0"}}>{passedProps.displayErrorMin}</p>
          </div>

          <div style={{display: "flex", flexDirection: "column"}}>
            <TextField
              label="Max"
              type="number"
              id="Max"
              name="Max"
              value={passedProps.maxNumber}
              color={passedProps.displayErrorMax ? "error" : "primary"}
              onChange={(e) => {
                passedProps.setMaxNumber(e.target.value);
                
              }}
              sx={{
                mt: "10px",
                mr: "20px",
              }}
            />
            <p style={{display: passedProps.displayErrorMax ? "block" : "none", color: "red", margin:"10px 0 0 0"}}>{passedProps.displayErrorMax}</p>
          </div>       
          
        </div>
        <FormGroup sx={{ marginTop: '10px' }}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="under500" checked={passedProps.under500} onChange={handleCheckboxChange} />}
            label="Under $500"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="from500to1000" checked={passedProps.from500to1000} onChange={handleCheckboxChange} />}
            label="$500 to $1,000"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="from1000to2000" checked={passedProps.from1000to2000} onChange={handleCheckboxChange} />}
            label="$1,000 to $2,000"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="above2000" checked={passedProps.above2000} onChange={handleCheckboxChange} />}
            label="$2,000 & Above"
          />
        </FormGroup>

      </div>
      
    </div>
  )
}

const DropdownMenu = (props) => {
  const {dropName, ComponentProp, filteredItem, allItems, setFilteredItem, setFilterLists, passedProps, passedItems} = props
  const [anchorEl, setAnchorEl] = useState(null);
  const [openState, setOpenState] = useState(false);
  const handleClick = (event) => {
    setOpenState(!openState)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="furniture-dropDown">
      <div style={{
        
        border: openState ? "1px solid blue" : "none",
        borderRadius: openState ? "10px 10px 0 0" : "10px", 
        
      }}>
      <Button sx={{
        display: "flex", 
        justifyContent: "space-between", 
        width: "100%", 
        color: "black",
        padding: "15px 5px 10px 5px",
        borderRadius: openState ? "10px 10px 0 0" : "10px", 
        "&:hover": {border: "1px solid black"},
        fontWeight: "bold"
      }} 
        aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <p>{dropName}</p>
        {openState ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>
      <Divider style={{width: "95%", marginLeft: "5px"}}/>
      </div>
      
      
      <Collapse in={openState} timeout="auto" unmountOnExit>
        <ComponentProp passedItems={passedItems} passedProps={passedProps} filteredItem={filteredItem} allItems={allItems} setFilteredItem={setFilteredItem} setFilterLists={setFilterLists}/>
      </Collapse>
    </div>
  );
};

const FavoriteItem = ({ item, setFavoriteItem, favoriteItems }) => {
  const [favoriteState, setFavState] = useState(false);

  const handleButtonClick = () => {
    if (favoriteState === false) 
      setFavoriteItem([...favoriteItems, item]);
    else
      setFavoriteItem((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
    
    setFavState(!favoriteState);
  };

  return (
    <div className="furniture-outerlayer">
      <div className="furniture-item">
        <Link href="/Login">
          <img src={item.photoURL} alt={item.saleItemName} />
          <p style={{ display: item.saleType ? "block" : "none" }} className="saleType">{item.saleType}</p>
          <div>
            <p style={{ fontSize: "1.2em", marginTop: "10px", color: "black" }}>{item.saleItemName}</p>
            <span style={{ color: "black", fontSize: "1.5vw", fontWeight: "bold" }}>${item.salePrice}</span>
            <span style={{ color: "gray", textDecoration: "line-through", marginLeft: "10px" }}>{item.prevSalePrice}</span>
            <div style={{ display: "flex", alignItems: 'center' }}>
              <Rating name="read-only" value={item.saleRating} precision={0.5} readOnly />
              <p style={{ marginLeft: '10px' }}>({item.numberOfComment})</p>
            </div>
          </div>
        </Link>
        <span style={{ display: item.sponsor ? "inline" : "none", position: "absolute", bottom: 0, right: 0, color: "gray" }}>Sponsored</span>
        <IconButton
          type="button"
          onClick={handleButtonClick}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            border: "1px solid purple",
            backgroundColor: "transparent",
            cursor: "pointer"
          }}
        >
          {favoriteState ? (
            <FavoriteIcon sx={{ color: "purple" }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: "purple" }} />
          )}
        </IconButton>
      </div>
    </div>
  );
};

const Furniture = () => {
    const {passedItems,allItems, favoriteItems, setFavoriteItem} = useAppContext()
  const [filteredItem, setFilteredItem] = useState(passedItems)
  const [minNumber, setMinNumber] = useState(0)
  const [maxNumber, setMaxNumber] = useState(0)
  const [displayErrorMin, setDisplayErrorMin] = useState("")
  const [displayErrorMax, setDisplayErrorMax] = useState("")
  const [noFilter, setNoFilter] = useState(true)
  const [under500, setUnder500] = useState(false);
  const [from500to1000, setFrom500to1000] = useState(false);
  const [from1000to2000, setFrom1000to2000] = useState(false);
  const [above2000, setAbove2000] = useState(false);
  const passedProps = {minNumber: minNumber, setMinNumber: setMinNumber, maxNumber: maxNumber, setMaxNumber: setMaxNumber, displayErrorMin: displayErrorMin, setDisplayErrorMin: setDisplayErrorMin, displayErrorMax: displayErrorMax, setDisplayErrorMax: setDisplayErrorMax, 
    noFilter: noFilter, setNoFilter: setNoFilter, under500: under500, setUnder500: setUnder500, from500to1000: from500to1000, setFrom500to1000: setFrom500to1000, from1000to2000: from1000to2000, setFrom1000to2000: setFrom1000to2000, above2000: above2000, setAbove2000: setAbove2000}
  const [filterLists, setFilterLists] = useState([])
  

  const handleCloseClick = (itemToRemove) => {
    switch(itemToRemove) {
      case `Price Per item: Under $500`:
        setUnder500(false)
        break;
      case `Price Per item: From $500 to $1000`:
        setFrom500to1000(false)
        break;
      case `Price Per item: From $1000 to $2000`:
        setFrom1000to2000(false)
        break;
      case `Price Per item: Above $2000`:
        setAbove2000(false)
        break;
      default:
        setMinNumber(0)
        setMaxNumber(0)
    }
      
    // Create a new array without the itemToRemove
    const updatedFilterLists = filterLists.filter((item) => (item !== itemToRemove));

    // Update the state with the new array
    setFilterLists(updatedFilterLists);
  };

  const clearAll = () => {
    setFilterLists([]);
    setUnder500(false)
    setFrom500to1000(false)
    setFrom1000to2000(false)
    setAbove2000(false)
    setMinNumber(0)
    setMaxNumber(0)
    setFilteredItem(passedItems)
  }
  return (
    <div className="furniture">
      <div className="furniture-main-content">
        <div className="furniture-sideBar">
          <DropdownMenu dropName={"Category"} ComponentProp={FurnitureCategory}/>
          <DropdownMenu passedItems={passedItems} passedProps={passedProps} setFilterLists={setFilterLists} filteredItem={filteredItem} allItems={allItems} setFilteredItem={setFilteredItem} dropName={"Price Per Item"} ComponentProp={FurniturePricePerItem}/>
        </div>
        
        <div style={{display: "flex", flexDirection: "column", marginLeft: "10px", marginTop: "20px"}}>
          <div className="furniture-filter-container">
            {filterLists.map((item, id1) => (
              <div key={id1} className="furniture-filter-item" onClick={() => handleCloseClick(item)}>
                <p>{item}</p>
                <CloseIcon sx={{ml: "5px", width: "20px"}}/>
              </div>
            ))}
            <p style={{display: filterLists.length === 0 ? "none" : "block", cursor: "pointer"}} onClick={clearAll}>Clear all</p>
          </div>
          <div className="furniture-container">
            
            {filteredItem.map((item, id2) => (
              <FavoriteItem key={id2} item={item} setFavoriteItem={setFavoriteItem} favoriteItems={favoriteItems} />
            ))}
          </div>
        </div>
        
      </div>
      <div style={{margin: "-10px 10vw 0px 10vw"}}>
      <BigFooter/>
      </div>
      
    </div>
  );
};

export default Furniture;
