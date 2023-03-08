import * as React from 'react';
import { Grid, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Lady from './lady-nobg.png';
import DiamondIcon from '@mui/icons-material/Diamond';


function BodyBoxes2() {

    const messages = ["Style too own civil out along. Perfectly mesmerising and fascinating products and their prices.<br />I love all the products by this company and hope to see more beauty products soon.", "Style too own civil out along. Perfectly mesmerising and fascinating products and their prices.<br />I love all the products by this company and hope to see more beauty products soon.", "Style too own civil out along. Perfectly mesmerising and fascinating products and their prices.<br />I love all the products by this company and hope to see more beauty products soon."];
    const delay = 4000;

    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    
    React.useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === messages.length - 1 ? 0 : prevIndex + 1
          ),
        delay);
    
      return () => {
        resetTimeout();
      };
    }, [index]);

    return (
        <Grid container sx={{backgroundColor:'#F8C8DC', pt: 16}}>
          <Grid item sx={{ marginTop: '-20px' }}>
            <Box
              sx={{
              width: 650,
              height: 500,
              backgroundColor: '#E6E6FA'
              }}
            >
              <img src={Lady} id='makeup-img'/>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
              display: 'flex',
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 699,
              height: 500,
              backgroundColor: '#E6E6FA'
              }}
              >
            
                <p className='about-para1'> our customer </p>
                <DiamondIcon />
                <p className='about-para2'> reviews </p>
                <div className="slideshow">
                    <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                    {messages.map((item, index) => (
                      <p className="slide" key={index} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                    <Avatar sx={{ backgroundColor: "violet", marginLeft: "100px" }}>AA</Avatar>
                    </div>

                <div className="slideshowDots">
                    {messages.map((_, idx) => (
                <div
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                    setIndex(idx);
                    }}
                ></div>
                ))}
              </div>
              </div>
            </Box>
          </Grid>
        </Grid>
    )
}

export default BodyBoxes2;
