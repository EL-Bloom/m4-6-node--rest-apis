# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

CLIENT SIDE
| endpoint | method | Description |
| -------- | ------ | ---------------------- |
| `/test/clients` | `GET` | This is to retrieve the information of all the clients in the cafe|

| `/test/clients/:id` | `GET` | This is to retrieve the information of a particular client by their IDs |

| `/test/new-client` | `POST` | This is when a new client wants to make an account and it will be add to the system|

| `/test/clients/:id/info/activity` | `PATCH` | This is to update an existing client's account and toggle if they are active of not |
|
| `/test/clients/remove` | `DELETE` | This is to delete a client's account |

SERVER SIDE
| endpoint | method | Description |
| `/test/stocks` | `GET` | This is to retrieve all the items in the store and their quantity |

| `/test/stocks/:id` | `GET` | This is to retrieve the information and quantity of a particular product |

| `/test/stocks/new` | `POST` | This is to add new items to the database |

| `/test/stocks/new-quantity` | `PATCH` | This is to update the quantity of an existing item |

| `/test/stocks/remove` | `DELETE` | This is to delete an existing album, in the case it were discontinued or unavailable |
