import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-main-content-card',
  templateUrl: './main-content-card.component.html',
  styleUrls: ['./main-content-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainContentCardComponent {
    JsonObj = {
    "data": [
      {
        "imgUrl": "https://framerusercontent.com/images/TQv9Req7ZME40dmudtRtkwz9lcQ.webp",
        "imgUrl2": "https://framerusercontent.com/images/nw3QmXYFLApMRCcnn6znTEo6KE.webp",
        "imgUrl3": "https://framerusercontent.com/images/0cV9whDLvUPcMsXBUPQL6qaR54.webp",
        "heading": "Whitefish Estate",
        "subHeading": "Whitefish, Montana, United States",
        "price": "$10,000",
        "day": "night",
        "rating": 5.0
      },
      {
        "imgUrl": "https://framerusercontent.com/images/afIWyPD7bAqXpOTuGYeO4FzrnU.webp",
        "imgUrl2": "https://framerusercontent.com/images/UbZMotnt6f6PzRjoEUkUqqPoGE.webp",
        "imgUrl3": "https://framerusercontent.com/images/qpfhB78P3kED99kanRfNuDVscmY.webp",
        "heading": "Luxury stay in Weston, Saint James, Barbados",
        "subHeading": "Weston, Saint James, Barbados",
        "price": "$1,500",
        "day": "night",
        "rating": 5.0
      },
      {
        "imgUrl": "https://framerusercontent.com/images/wTSsHOfD0gXYkODZBWWWOfdkw.webp",
        "imgUrl2": "https://framerusercontent.com/images/wqIEfjRYn0UbT7uk0i5wpVndBQ.webp",
        "imgUrl3": "https://framerusercontent.com/images/7d8JdJuuXTeM5XjBXGWdIr3RBEQ.jpeg",
        "heading": "Numero 22 - Lake Como - Design Living & Lake View",
        "subHeading": "Laglio, Lombardia, Italy",
        "price": "$359",
        "day": "night",
        "rating": 4.99
      },
      {
        "imgUrl": "https://framerusercontent.com/images/3E8SIyOR9oYK20P1hy1BtAelgI.webp",
        "imgUrl2": "https://framerusercontent.com/images/qhnktNKSOAVYxIll8u7LGPNS4so.webp",
        "imgUrl3": "https://framerusercontent.com/images/PoKbATiObNHJkj0Odn6Iu1w4hI.webp",
        "heading": "7,500 sq ft Private Beachfront Estate",
        "subHeading": "Dubai, United Arab Emirates",
        "price": "$2,478",
        "day": "night",
        "rating": 4.75
      },


      {
        "imgUrl": "https://framerusercontent.com/images/0RUEx3es60Z3CuB1eFkBxcPxmA.webp",
        "imgUrl2": "https://framerusercontent.com/images/zeX5Tu6LII3hUoS8pW7mPBKT1qs.webp",
        "imgUrl3": "https://framerusercontent.com/images/OkcW86CbpLKD4v3ivzgsilMcBTQ.webp",
        "heading": "Bohemian & Spacious / Private Pool and Garden",
        "subHeading": "Tulum, Quintana Roo, Mexico",
        "price": "$199",
        "day": "night",
        "rating": 4.97
      },
      {
        "imgUrl": "https://framerusercontent.com/images/3fX1fjZlrzbcXKbTqPD7FpY4Z8.webp",
        "imgUrl2": "https://framerusercontent.com/images/ENEPYDh4R9AUcypFQEWP6b3w2U.webp",
        "imgUrl3": "https://framerusercontent.com/images/msJ4Xe9nhyZpzv3PKhcbBqcpik.webp",
        "heading": "Designer A-Frame Cabin in the Trees",
        "subHeading": "Lake Arrowhead, California, United States",
        "price": "$225",
        "day": "night",
        "rating": 4.93
      },
      {
        "imgUrl": "https://framerusercontent.com/images/lIXcszNPyY7PC0yaVFg5TBtmfA.webp",
        "imgUrl2": "https://framerusercontent.com/images/9okvhQW7JdXxSXTXxATdClfOb0.webp",
        "imgUrl3": "https://framerusercontent.com/images/AhLiImdJyUhRKUinKF7uKxDOSWI.webp",
        "heading": "Fully Renovated 2 BR on River w/ Pool - Walk to To",
        "subHeading": "Aspen, Colorado, United States",
        "price": "$546",
        "day": "night",
        "rating": 5.00
      },
      {
        "imgUrl": "https://framerusercontent.com/images/ZEBw6ci9AF1cD4D1sFdPW3Mj5rE.webp",
        "imgUrl2": "https://framerusercontent.com/images/fZDWOKLuy6S414Va8FCCB8jJmp0.webp",
        "imgUrl3": "https://framerusercontent.com/images/pAhD9dvshjzpMRsn8tHZ83xkvw.webp",
        "heading": "Magnolia's Hillcrest Cottage",
        "subHeading": "Waco, Texas, United States",
        "price": "$500",
        "day": "night",
        "rating": 4.79
      },
      {
        "imgUrl": "https://framerusercontent.com/images/WO8ADTYBrqd6BunOnEocxOAS7c.webp",
        "imgUrl2": "https://framerusercontent.com/images/ImMdsP7sC0bAGrrcwfZ3RRrNs8.webp",
        "imgUrl3": "https://framerusercontent.com/images/2OcuFeFe4oCEt8IdSGRCPn5Wb3M.webp",
        "heading": "Unique Architecture Cave House by Cycladica",
        "subHeading": "Oia, South Aegean, Greece",
        "price": "$930",
        "day": "night",
        "rating": 4.95
      }
    ]
  }
  openRoomDetail = this.JsonObj.data[0];

  checkRoomDetail(roomDetail: any){
    this.openRoomDetail = roomDetail;
  }
}
