import axios from 'axios';

// each request will have this params added to it
export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e105bb0512604aaea867da33f5b92ebe'
    // key: `${process.env.RAWG_API_KEY}` // not working??
  }
})