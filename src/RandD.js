//event deatils component
const Lasvegas =process.env.PUBLIC_URL + "/svg/EventDetailslasvegas.svg"
const hashhouse=process.env.PUBLIC_URL+"/svg/EventDetailshashhouse.svg"
const linq =process.env.PUBLIC_URL+ "/svg/EventDetailslinq.svg"
const culture =process.env.PUBLIC_URL+ "/svg/EventDetailscultureevent"
//entrypageinterest
const  image1= process.env.PUBLIC_URL + '/images/EntryPageinterestimg1.png';
const  image2= process.env.PUBLIC_URL + '/images/EntryPageinterestimg2.png';
const  image3= process.env.PUBLIC_URL + '/images/EntryPageinterestimg3.png';
const  image4= process.env.PUBLIC_URL + '/images/EntryPageinterestimg4.png';
const  image5= process.env.PUBLIC_URL + '/images/EntryPageinterestimg5.png';
const  image6= process.env.PUBLIC_URL + '/images/EntryPageinterestimg6.png';
const  image7= process.env.PUBLIC_URL + '/images/EntryPageinterestimg7.png';
const  image8= process.env.PUBLIC_URL + '/images/EntryPageinterestimg8.png';
//event cards
let brunomarsimg=process.env.PUBLIC_URL + '/images/Brunomars.png'
const BigjsonData = {
  concerts: [
    // {
    //     artist_name: "Adele",
    //     venue: "Madison Square Garden, NYC",
    //     time: "9:30 PM",
    //     date: "Jan 15, 2024",
    //     price: 180,
    //     genre: "Pop",
    //     artist_images: [
    //       "https://media.vanityfair.com/photos/631224427a579438d77c8c84/master/pass/adele-injured-back-from-prank.jpg",
    //       "https://media.newyorker.com/photos/6169d1caf9c7cf02c89a9454/1:1/w_1627,h_1627,c_limit/Battan-AdeleEasyOnMe-2.jpg",
    //       "https://hips.hearstapps.com/hmg-prod/images/adele-reveals-the-reason-she-s-started-therapy-again-1670917670.jpg?crop=0.743xw:1.00xh;0.0894xw,0&resize=1200:*",
    //     ],
    //     minimum_age: 18,
    //     parking_available: false,
    //     ramp_accessible: true,
    //     ticket_limit: 8,
    //     phone_number: "866-740-7711",
    //   },
      
    {
      artist_name: "Ed Sheeran",
      venue: "Staples Center, LA",
      time: "8:00 PM",
      date: "Feb 20, 2024",
      price: 200,
      genre: "Pop/Folk",
      artist_images: [
        "https://www.rollingstone.com/wp-content/uploads/2023/05/ed-sheeran-songwriting.jpg?w=1581&h=1054&crop=1",
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/12/05/18/Ed-Sheeran.jpg",
        "https://m.economictimes.com/thumb/msid-100025073,width-1200,height-900,resizemode-4,imgsize-50490/ed-sheeran.jpg",
      ],
      minimum_age: 18,
      parking_available: false,
      ramp_accessible: true,
      ticket_limit: 8,
      phone_number: "866-740-7711",
    },
    {
      artist_name: "Taylor Swift",
      venue: "Wembley Stadium, London",
      time: "7:45 PM",
      date: "Mar 5, 2024",
      price: 250,
      genre: "Pop/Country",
      artist_images: [
        "https://images.sbs.com.au/dims4/default/d2a7fb3/2147483647/strip/true/crop/5225x2939+547+525/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fb7%2F9f%2Fcb4bae83422abcb0e530590835a3%2F20230206001760429565-original.jpg",
        "https://resizing.flixster.com/TmqUWkX9sw-V2ybHEprdvZ-u4TI=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/516020_v9_bc.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/191125_Taylor_Swift_at_the_2019_American_Music_Awards.png/220px-191125_Taylor_Swift_at_the_2019_American_Music_Awards.png",
      ],
      minimum_age: 18,
      parking_available: false,
      ramp_accessible: true,
      ticket_limit: 8,
      phone_number: "866-740-7711",
    },
    {
      artist_name: "Bruno Mars",
      venue: "Park MGM, LV",
      time: "11:00 PM",
      date: "Dec 31, 2023",
      price: 230,
      genre: "Rock/Pop",
      artist_images: [
        brunomarsimg,
        "https://i.ytimg.com/vi/w0kzS2u7lOI/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgUCg-MA8=&rs=AOn4CLCXR5IlVzhJsolVQyr1-YryOAkfjg",
        "https://assets.simpleviewinc.com/simpleview/image/upload/crm/lasvegas/bruno_mars_30D1F154-0475-C2D6-E773603CE857E818_30d2dc7f-a6f7-d7de-a706d382f4f5e920.jpg",
      ],
      minimum_age: 18,
      parking_available: false,
      ramp_accessible: true,
      ticket_limit: 8,
      phone_number: "866-740-7711",
    },
  ],
  activities: [
    {
      Time: "8:00 am - 9:00 am",
      name: "The Vegas Sign",
      genre: "Entertainment",
      Banner: Lasvegas,
    },
    {
      Time: "9:00 am - 10:30 am",
      Place: "Hash House A Go Go",
      genre: "Breakfast",
      Banner: hashhouse
    },
    {
      Time: "11:00 am - 12:30 pm",
      Place: "The LINQ Promenade",
      genre: "Shopping Centre",
      Banner: linq,
    },
    {
      Time: "1:30 pm - 5:00 pm",
      Place: "The Last Friday",
      genre: "Cultural Event",
      Banner: culture,
    },
  ],
  Genre: [
    { id: 1, src: image6, alt: "fashion", title: "Fashion" },
    { id: 2, src: image1, alt: "sports", title: "Sports" },
    { id: 3, src: image2, alt: "cinema", title: "Cinema" },
    { id: 4, src: image3, alt: "fine-dine", title: "Fine-Dine" },
    { id: 5, src: image4, alt: "casino", title: "Casino" },
    { id: 8, src: image8, alt: "art & history", title: "Art & History" },
    { id: 3, src: image2, alt: "Futuristic", title: "Futuristic" },
    { id: 2, src: image1, alt: "Concerts", title: "Concerts" },
    { id: 4, src: image3, alt: "Cultro", title: "Cultro" },
    { id: 1, src: image6, alt: "fashion", title: "Fashion" },
    { id: 2, src: image1, alt: "sports", title: "Sports" },
    { id: 3, src: image2, alt: "cinema", title: "Cinema" },
  ],
};

export default BigjsonData