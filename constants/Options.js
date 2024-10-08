import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';


export const SelectTravelsList=[
    {
        id: 1,
        title: 'Single',
        desc: 'A solo trip',
        icon: <MaterialCommunityIcons name="human-male" size={25} color="black" />,
        people: '1 person'
    },
    {
        id: 2,
        title: 'Couple',
        desc: 'A trip date',
        icon: <MaterialCommunityIcons name="human-male-female" size={25} color="black" />,
        people: '2 people'
    },
    {
        id:3,
        title: 'Family',
        desc: 'A little family trip',
        icon: <MaterialCommunityIcons name="human-male-female-child" size={25} color="black" />,
        people: '3-5 people'
    },
    {
        id:4,
        title: 'Group',
        desc: 'A bunch of friends',
        icon: <FontAwesome6 name="people-group" size={25} color="black" />,
        people: '3 & above'
    }

]

export const SelectBudgetOptions= [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Explore more for less',
        icon: <Entypo name="price-tag" size={24} color="black" />
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Enjoy comfort and value',
        icon: <FontAwesome name="briefcase" size={24} color="black" />
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Experience the premium life',
        icon: <Ionicons name="diamond-sharp" size={24} color="black" />
    }
]

export const AI_PROMPT = 'Generate Travel Plan for Location: {location}, for {totalDays} Days and {totalNight} Night for {traveler} with a {budget} budget with a Flight details, Flight Price with Booking url, Hotels Options list with hotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for {totalDays} Days and {totalNight} night with each day plan with best time to visit in JSON format'