import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ItemCardSmall from "./ItemCardSmall";
import "./Explore.css"
import items from "./database/featured-list.js";

function Explore() {
  const productComponents = items.map((item) => {
    return (
      <ItemCardSmall
        key={item.id}
        name={item.name}
        price={item.cost}
        image={item.image}
      />
    );
  });
    return (
      <div className = "Explore">
        <div className="title"><h1>WHAT ARE YOU LOOKING FOR?</h1></div>
        <Box
          component="form"
          style={{
            width:'70%'
          }}
          noValidate
          autoComplete="off"
        >
          <div className="search-bar">
            <TextField 
              id="outlined-search"
              sx={{
                width: { sm: 900, md: 900 },
                "& .MuiInputBase-root": {
                height: 60,
                }
              }}
              label="SEARCH FOR AN ITEM..." 
              type="search"
              style={{fontStyle:"italic"}}/>
          </div>
        </Box>
        <br/>
        <Box sx={{ width: '15%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs>
              <Tab label="FEATURED ITEMS" style={{fontSize:"20px"}}/>
            </Tabs>
          </Box>
          
        </Box>
        <br/><br/>
        <div className="featured-grid">{productComponents}</div>
      </div>
      
    );
  }
  
  export default Explore;