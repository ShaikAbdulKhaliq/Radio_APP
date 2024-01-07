//event deatils component
const Lasvegas = process.env.PUBLIC_URL + "/svg/EventDetailslasvegas.svg"
const hashhouse = process.env.PUBLIC_URL + "/svg/EventDetailshashhouse.svg"
const linq = process.env.PUBLIC_URL + "/svg/EventDetailslinq.svg"
const culture = process.env.PUBLIC_URL + "/svg/EventDetailscultureevent.svg"
//entrypageinterest
const image1 = process.env.PUBLIC_URL + '/images/EntryPageInterestimg1.png';
const image2 = process.env.PUBLIC_URL + '/images/EntryPageInterestimg2.png';
const image3 = process.env.PUBLIC_URL + '/images/EntryPageInterestimg3.png';
const image4 = process.env.PUBLIC_URL + '/images/EntryPageInterestimg4.png';
const image5 = process.env.PUBLIC_URL + '/images/EntryPageInterestimg5.png';
const image6 = process.env.PUBLIC_URL + '/images/EntryPageInterestimg6.png';
const image7 = process.env.PUBLIC_URL + '/images/EntryPageInterestimg7.png';
// const image8 = process.env.PUBLIC_URL + '/images/EntryPageinterestimg8.png';

const image8 = process.env.PUBLIC_URL + '/images/EntryPageInterestimg9.png';
//event cards
// let brunomarsimg=process.env.PUBLIC_URL + '/images/Concertimg1.png'
let concertsimg1 = process.env.PUBLIC_URL + '/images/ConcertImg1.png'
let concertsimg2 = process.env.PUBLIC_URL + '/images/Concertimg2.png'
let Concertsimg3 = process.env.PUBLIC_URL + '/images/Concertimg3.png'
let Concertsimg4 = process.env.PUBLIC_URL + '/images/Concertimg4.png'
let Concertsimg5 = process.env.PUBLIC_URL + '/images/Concertimg5.png'
let Concertsimg6 = process.env.PUBLIC_URL + '/images/Concertimg6.png'
 //cultural events img
 const CulturalEventsimg1=process.env.PUBLIC_URL + '/images/CulturalEventsimg1.png'
 const CulturalEventsimg2=process.env.PUBLIC_URL + '/images/CulturalEventsimg2.png'
 const CulturalEventsimg3=process.env.PUBLIC_URL + '/images/CulturalEventsimg3.png'
//dashboardeventcard
const dashboardeventcardimg1 = process.env.PUBLIC_URL + '/images/dashboardEventCardimg1.png'
const dashboardeventcardimg2 = process.env.PUBLIC_URL + '/images/dashboardEventCardimg2.png'
const dashboardeventcardimg3 = process.env.PUBLIC_URL + '/images/dashboardEventCardimg3.png'

//RadioStationimgs
const RadioStationimg1 = process.env.PUBLIC_URL + "/images/RadioChannelsimage 90.png"
const RadioStationimg2 = process.env.PUBLIC_URL + "/images/RadioChannelsimage 92.png"
const RadioStationimg3 = process.env.PUBLIC_URL + "/images/RadioChannelsimage 93.png"

//Favouriteimgs
const Favouriteimg1 = process.env.PUBLIC_URL + "/images/Favoriteimage 78.png"
const Favouriteimg2 = process.env.PUBLIC_URL + "/images/Favoriteimage 66.png"
const Favouriteimg3 = process.env.PUBLIC_URL + "/images/Favoriteimage 71.png"
const Favouriteimg4 = process.env.PUBLIC_URL + "/images/Favoriteimage 102.png"

//agerestriction is sortcontainer class
//populargenre  is tophalf container card
 
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

    // {
    //   artist_name: "Ed Sheeran",
    //   venue: "Staples Center, LA",
    //   time: "8:00 PM",
    //   date: "Feb 20, 2024",
    //   price: 200,
    //   genre: "Pop/Folk",
    //   artist_images: [
    //     "https://www.rollingstone.com/wp-content/uploads/2023/05/ed-sheeran-songwriting.jpg?w=1581&h=1054&crop=1",
    //     "https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/12/05/18/Ed-Sheeran.jpg",
    //     "https://m.economictimes.com/thumb/msid-100025073,width-1200,height-900,resizemode-4,imgsize-50490/ed-sheeran.jpg",
    //   ],
    //   minimum_age: 18,
    //   parking_available: false,
    //   ramp_accessible: true,
    //   ticket_limit: 8,
    //   phone_number: "866-740-7711",
    // },
     // {
    //   artist_name: "Taylor Swift",
    //   venue: "Wembley Stadium, London",
    //   time: "7:45 PM",
    //   date: "Mar 5, 2024",
    //   price: 230,
    //   genre: "Pop/Country",
    //   artist_images: [
    //     "https://images.sbs.com.au/dims4/default/d2a7fb3/2147483647/strip/true/crop/5225x2939+547+525/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fb7%2F9f%2Fcb4bae83422abcb0e530590835a3%2F20230206001760429565-original.jpg",
    //     "https://resizing.flixster.com/TmqUWkX9sw-V2ybHEprdvZ-u4TI=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/516020_v9_bc.jpg",
    //     "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/191125_Taylor_Swift_at_the_2019_American_Music_Awards.png/220px-191125_Taylor_Swift_at_the_2019_American_Music_Awards.png",
    //   ],
    //   minimum_age: 18,
    //   parking_available: false,
    //   ramp_accessible: true,
    //   ticket_limit: 8,
    //   phone_number: "866-740-7711",
    // },
    // {
    //   artist_name: "Bruno Mars",
    //   venue: "Park MGM, LV",
    //   time: "11:00 PM",
    //   date: "Dec 31, 2023",
    //   price: 230,
    //   genre: "Rock/Pop",
    //   artist_images: [
    //     brunomarsimg,
    //     "https://i.ytimg.com/vi/w0kzS2u7lOI/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgUCg-MA8=&rs=AOn4CLCXR5IlVzhJsolVQyr1-YryOAkfjg",
    //     "https://assets.simpleviewinc.com/simpleview/image/upload/crm/lasvegas/bruno_mars_30D1F154-0475-C2D6-E773603CE857E818_30d2dc7f-a6f7-d7de-a706d382f4f5e920.jpg",
    //   ],
    //   minimum_age: 18,
    //   parking_available: false,
    //   ramp_accessible: true,
    //   ticket_limit: 8,
    //   phone_number: "866-740-7711",
    // },
    {
      artist_name: "Nelly",
      venue: "NightClub",
      time: "11:00 PM",
      date: "Jan 11, 2024",
      price: 230,
      genre: "Rock/Pop",
      artist_images: [
        Concertsimg4,Concertsimg5,Concertsimg5
      ],
      minimum_age: 18,
      parking_available: false,
      ramp_accessible: true,
      ticket_limit: 8,
      phone_number: "866-740-7711",
    },
    {
      artist_name: "Ultimate Music Experience",
      venue: "Excalibur Hotel & Casino ",
      time: "11:00 PM",
      date: "Jan 11, 2024",
      price: 230,
      genre: "Rock/Pop",
      artist_images: [
        Concertsimg6,Concertsimg6,Concertsimg6
      ],
      minimum_age: 18,
      parking_available: false,
      ramp_accessible: true,
      ticket_limit: 8,
      phone_number: "866-740-7711",
    },
   
    {
      artist_name: "Black Flag Tour",
      venue: "Chelsea Tower, 3778",
      time: "11:00 PM",
      date: "Jan 10, 2024",
      price: 230,
      genre: "Rock/Pop",
      artist_images: [
        concertsimg1, concertsimg2, Concertsimg3
      ],
      minimum_age: 18,
      parking_available: false,
      ramp_accessible: true,
      ticket_limit: 8,
      phone_number: "866-740-7711",
    },
  ],
  CulturalEvents:[
    {
      artist_name: "First Friday",
      venue: "1025 S 1st StLas Vegas, NV",
      time: "6:00PM",
      date: "Jan 10, 2024",
      price: 230,
      genre: "Culture",
      artist_images: [
        CulturalEventsimg1,CulturalEventsimg2,CulturalEventsimg3
      ],
      minimum_age: 18,
      parking_available: false,
      ramp_accessible: true,
      ticket_limit: 8,
      phone_number: "866-740-7711",
    },
    {
      artist_name: "Must-try Asian American Pacific Islanders (AAPI) Restaurants",
      venue: "LasVegas",
      time: "11:00PM",
      date: "Jan 10, 2024",
      price: 230,
      genre: "Culture",
      artist_images: [
        CulturalEventsimg1,CulturalEventsimg2,CulturalEventsimg3
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
      Place: "The Vegas Sign",
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
    {
      Time: "2:00 PM - 2:30 PM",
      City: "Austin",
      Place: "Hot Wheels Monster Trucks Live Glow Party",
      genre: "Motorsports/Racing",
      Banner: "https://s1.ticketm.net/dam/a/39c/d7fbd089-6b9d-4370-ac80-67dc5da6f39c_RETINA_PORTRAIT_16_9.jpg",
    },
    {
      Time: "2:30 PM - 3:00 PM",
      City: "San Diego",
      Place: "Monster Jam",
      genre: "Motorsports/Racing",
      Banner: "https://s1.ticketm.net/dam/a/60d/a8e53b98-e354-444f-958e-622e44cce60d_RETINA_PORTRAIT_16_9.jpg",
    },
    {
      Time: " 3:00 PM - 3:30 PM",
      City: "Dallas",
      Place: "Dallas Mavericks vs. Memphis Grizzlies",
      genre: "Sports",
      Banner: "https://s1.ticketm.net/dam/a/2cc/8cab8695-459e-4d89-9bbb-95156868b2cc_1340021_RETINA_PORTRAIT_16_9.jpg",
    },
    {
      Time: " 3:30 PM - 4:00 PM",
      City: "Washington",
      Place: "Capitals vs Kraken",
      genre: "Sports",
      Banner: "https://s1.ticketm.net/dam/a/92d/401576b6-8ef1-4aac-8dbe-0cf18f42492d_1277141_ARTIST_PAGE_3_2.jpg",
    },
    {
      Time: " 4:00 PM - 4:30 PM",
      City: "New York",
      Place: "Hamilton (NY)",
      genre: "Arts & Theatre",
      Banner: "https://s1.ticketm.net/dam/a/00f/b9aebee0-d1cb-4a5c-8e0e-0ca03fd4d00f_ARTIST_PAGE_3_2.jpg",
    },
    {
      Time: " 4:30 PM - 5:00 PM",
      City: "Las Vegas",
      Place: "Vegas Golden Knights vs. Boston Bruins",
      genre: "Sports",
      Banner: "https://s1.ticketm.net/dam/a/f5d/a102b982-759b-4cd4-aeb6-ed66453daf5d_CUSTOM.jpg",
    },
    {
      Time: "1:45 PM - 2:15 PM",
      City: "Boston",
      Place: "Boston Celtics vs MinnesotaTimberwolves",
      genre: "Sports",
      Banner: "https://s1.ticketm.net/dam/a/158/e8147ef7-aaf2-4be3-be49-815e08d32158_1340101_CUSTOM.jpg",
    }, {
      Time: "2:15 PM - 2:45 PM",
      City: "San Francisco",
      Place: "Monster Energy AMA Supercross Championship",
      genre: "Motorsports/Racing",
      Banner: "https://s1.ticketm.net/dam/a/d4c/cd569b31-f815-4080-a962-7a1bd7191d4c_RETINA_LANDSCAPE_16_9.jpg",
    },
    {
      Time: "2:45 PM - 3:15 PM",
      City: "Fort Wayne",
      Place: "Two Friends",
      genre: "Music",
      Banner: "https://s1.ticketm.net/dam/a/928/f09c4501-5d0d-4d66-b0ee-5f6d96b70928_CUSTOM.jpg",
    },
    {
      Time: "2:30 PM - 3:00 PM",
      City: "Seattle",
      Place: "The Book of Mormon",
      genre: "Arts & Theatre",
      Banner: "https://s1.ticketm.net/dam/a/70c/f8408501-c120-4b57-a857-a1711722970c_241621_CUSTOM.jpg",
    },

  ],
  Genre: [
    { id: 1, src: image6, alt: "fashion", title: "Fashion" },
    { id: 2, src: image1, alt: "sports", title: "Sports" },
    { id: 3, src: image2, alt: "cinema", title: "Cinema" },
    { id: 4, src: image3, alt: "fine-dine", title: "Fine-Dine" },
    { id: 5, src: image4, alt: "casino", title: "Casino" },
    { id: 8, src: image8, alt: "art & history", title: "Concert" },
    { id: 3, src: image2, alt: "Futuristic", title: "Futuristic" },
    { id: 2, src: image1, alt: "Concerts", title: "Concerts" },
    { id: 4, src: image3, alt: "Cultro", title: "Cultro" },
    { id: 1, src: image6, alt: "fashion", title: "Fashion" },
    { id: 2, src: image1, alt: "sports", title: "Sports" },
    { id: 3, src: image2, alt: "cinema", title: "Cinema" },
  ],
  PopularInCities: [
    {
      Name: "The LINQ Promenade",
      TotalPeriod: "2-3 hours",
      Visitplace: "Shopping Centre",
      ExactTime: "11:00am - 6:00pm",
      ImageUrl: dashboardeventcardimg1
    },
    {
      Name: "Fountains of Bellagio",
      TotalPeriod: "<1 hour",
      Visitplace: "Fountains of Bellagio",
      ExactTime: "11:00am - 6:00pm",
      ImageUrl: dashboardeventcardimg2
    },
    {
      Name: "Vegas Sphere",
      TotalPeriod: "2-3 hours",
      Visitplace: "Shopping Centre",
      ExactTime: "11:00am - 6:00pm",
      ImageUrl: dashboardeventcardimg3
    },

  ],
  RadioStation: [
    {
      Fmimg: RadioStationimg1,
      FmAlbum: "Puros Trancazos",
      FmName: "La Tricolour 87.7 FM"
    },
    {
      Fmimg: RadioStationimg2,
      FmAlbum: "Eres Lo Que Eschuchas",
      FmName: "la suavecita radio 92.7"
    },
    {
      Fmimg: RadioStationimg3,
      FmAlbum: "Puros Trancazos",
      FmName: "rokero radio"
    },
  ],
  RadioGenres: [
    "All", "Hip-Hop", "Latin", "Jazz", "Soul/ R&B", "Country", "Children’s Music"
  ]
  ,
  FavouriteEvents: [
    {
      Favimg: Favouriteimg1,
      EventName: "Grand Canyon Tour",
      SubName: "Grand Canyon",
      Date: "Jan 09, 2024",
      Time: "6:00AM",
      Cost: "$230"
    },
    {
      Favimg: Favouriteimg2,
      EventName: "Black Flag Tour",
      SubName: "House of Blues bar",
      Date: "Jan 10, 2024",
      Time: "11:00PM",
      Cost: "$230",

    },
    {
      Favimg: Favouriteimg3,
      EventName: "The Chainsmokers",
      SubName: "XS Nightclub",
      Date: "Jan 12, 2024",
      Time: "11:00PM",
      Cost: "$230",
      Status: "Expired"
    },
    {
      Favimg: Favouriteimg4,
      EventName: "Ultimate Music Experience",
      SubName: "Excalibur Hotel & Casino ",
      Date: "Jan 11, 2024",
      Time: "11:00PM",
      Cost: "$230",
      Status: "Sold Out"
    },
  ],
  AgeRestriction: ["All", "18+ only", "Kids/Family - Friendly", "21+ only", "50+ only", "Stories", "Songs"],
  populargenre: ["Culture", "Concert", "Comedy", "Magic", "Sports", "Concert"],
  MyTicketDetails:[{
    ConcertName:"BLACK FLAG CONCERT",
    Date:"Dec 31, 2023",
    Time:"11:00PM onwards",
    bookingid:"56372828",
    Place:"NotAvailable",
    seats:"1A,1B",
    Audlts:"2",
    price:"$200"
  }],
  ConfirmedTickets:[{
    ConcertName:"GRAND CANYON TOUR",
    Date:"Dec 31, 2023",
    Time:"11:00PM onwards",
    bookingid:"56372828",
    Place:"Park MGM, LV",
    seats:"1A,1B",
    Audlts:"2",
    price:"$200"
  }]
};

export default BigjsonData