import axios from 'axios';
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:"Bearer FHUhVVQ2X-O4b2GicGND3Q5hDH5Vie1b6KKwiSgBqMhemGizWAK0rVrqV2u0j3PKX3368enoqPt9eDd88RHvfUOAvqsjvUnFu98mqZSZ7rO-HmhGFtiQu9RA6l8vYHYx"
    }
})