import carousel from '../public/images/perritos.jpg';
import map from '../public/images/map.JPG'
function Home(){
    

    return(
        <section className='Home'>
            <div className="homeCarousel">
                <img className='homeCarouselImage' src={carousel}></img>
            </div>
            <div className="homeMap">
                <img className="homeMapImage" src={map}></img>
            </div>
            <div>

            </div>
        </section>
    );
}

export default Home;