
import React from 'react'
import classes from './SearchPage.module.css'
import {Button} from '@material-ui/core'
import SearchResult from './SearchResult/SearchResult'

const SearchPage = () => {
    return (
        <div className={classes.searchPage}>
            <div className={classes.searchPage__info}>
                <p>62 stays | 26 August to 30 August | 2 Guest</p>
                <h1>Stays nearby</h1>
                <Button variant='outlined'>
                    Cancellation Flexibility
                </Button>
                <Button variant='outlined'>
                    Type of place
                </Button>
                <Button variant='outlined'>
                    Price
                </Button>
                <Button variant='outlined'>
                    Rooms and beds
                </Button>
                <Button variant='outlined'>
                    More filters
                </Button>
            </div>
            <SearchResult 
                img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU'
                location='Private room in center of London'
                title='Stay at this spacious Edwardian House'
                description='1 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | WiFi | Kitchen | Free Parking | Wahsing Machine'
                star={4.73}
                price='$30/night'
                total='$117 total'
            />
            <SearchResult 
                img='https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg'
                location='Private room in center of London'
                title='Independent luxury studio apartment'
                description='2 guest | 3 bedroom | 1 bed | 1.5 shared bathrooms | WiFi | Kitchen'
                star={4.3}
                price='$40/night'
                total='$157 total'
            />
            <SearchResult 
                img='https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg'
                location='Private room in center of London'
                title='London Studio Apartments'
                description='4 guest | 4 bedroom | 4 bed | 2 bathrooms | Free Parking | Washing Machine'
                star={3.8}
                price='$35/night'
                total='$207 total'
            />
            <SearchResult 
                img='https://news.airbnb.com/wp-content/uploads/sites/4/2019/01/hotelmemo.jpg'
                location='Private room in center of London'
                title='30 mins to Oxford Street, Excel London'
                description='1 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | Free Parking | WiFi | Kitchen | Washing Machine'
                star={4.1}
                price='$55/night'
                total='$320 total'
            />
            <SearchResult 
                img='https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg'
                location='Private room in center of London'
                title='Spacious Peaceful Modern Bedroom'
                description='3 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | Free Parking | Dry Cleaning'
                star={5.0}
                price='$60/night'
                total='$450 total'
            />
            <SearchResult 
                img='https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937'
                location='Private room in center of London'
                title='The blue Room in London'
                description='2 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | Washing Machine'
                star={4.34}
                price='$65/night'
                total='$480 total'
            />
            <SearchResult 
                img='https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp'
                location='Private room in center of London'
                title='5 Star Luxury Apartment'
                description='3 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | WiFi | Kitchen | Free Parking | Washing Machine'
                star={3.9}
                price='$90/night'
                total='$650 total'
            />
        </div>
    )
}

export default SearchPage
