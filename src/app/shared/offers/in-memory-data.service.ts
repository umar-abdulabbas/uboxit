import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{
    createDb(){

  
 const SOFFERS = {
    "categories": [
        {
            "categoryType": "NORTH_INDIAN",
            "combos": [
                {
                    "id": "23456",
                    "name": "Combo1",
                    "description": "Delicious combo",
                    "items": [
                        {
                            "id": "34577",
                            "name": "Paneer Tikka Wrap",
                            "imageUrls": [
                                "assets/images/banner1.jpg"
                            ],
                            "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                            "normalPrice": {
                                "amount": 20,
                                "currencyCode": "EUR"
                            },
                            "discountedPrice": {
                                "amount": 17,
                                "currencyCode": "EUR"
                            },
                            "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                            "dietType": "VEGETARIAN",
                            "availabilities": [
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Tuesday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Tuesday"
                                }
                            ],
                            "quantity": {},
                            "itemType": "MAIN_COURSE",
                            "deliveryOptionType": "TAKE_AWAY"
                        },
                        {
                            "id": "34567",
                            "name": "Paneer Tikka Wrap",
                            "imageUrls": [
                                "assets/images/banner1.jpg"
                            ],
                            "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                            "normalPrice": {
                                "amount": 20,
                                "currencyCode": "EUR"
                            },
                            "discountedPrice": {
                                "amount": 17,
                                "currencyCode": "EUR"
                            },
                            "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                            "dietType": "VEGETARIAN",
                            "availabilities": [
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Tuesday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Tuesday"
                                }
                            ],
                            "quantity": {},
                            "itemType": "MAIN_COURSE",
                            "deliveryOptionType": "TAKE_AWAY"
                        }
                    ],
                    "imageUrls": [
                        "assets/images/bannerx.jpg"
                    ],
                    "normalPrice": {
                        "amount": 20,
                        "currencyCode": "EUR"
                    },
                    "discountedPrice": {
                        "amount": 17,
                        "currencyCode": "EUR"
                    },
                    "quantity": {},
                    "deliveryOptionType": "TAKE_AWAY",
                    "availabilities": [
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Tuesday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Tuesday"
                        }
                    ]
                },
                {
                    "id": "23458",
                    "name": "Combo3",
                    "description": "Delicious Combo3",
                    "items": [
                        {
                            "id": "34569",
                            "name": "Paneer Tikka Wrap",
                            "imageUrls": [
                                 "assets/images/banner2.jpg"
                                
                            ],
                            "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                            "normalPrice": {
                                "amount": 20,
                                "currencyCode": "EUR"
                            },
                            "discountedPrice": {
                                "amount": 17,
                                "currencyCode": "EUR"
                            },
                            "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                            "dietType": "VEGETARIAN",
                            "availabilities": [
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Tuesday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Tuesday"
                                }
                            ],
                            "quantity": {},
                            "itemType": "MAIN_COURSE",
                            "deliveryOptionType": "TAKE_AWAY"
                        }
                    ],
                    "imageUrls": [
                        "assets/images/banner2.jpg"
                    ],
                    "normalPrice": {
                        "amount": 20,
                        "currencyCode": "EUR"
                    },
                    "discountedPrice": {
                        "amount": 17,
                        "currencyCode": "EUR"
                    },
                    "quantity": {},
                    "deliveryOptionType": "TAKE_AWAY",
                    "availabilities": [
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Tuesday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Tuesday"
                        }
                    ]
                },
                {
                    "id": "23461",
                    "name": "Combo6",
                    "description": "Delicious combo6",
                    "items": [
                        {
                            "id": "34573",
                            "name": "Paneer Tikka Wrap",
                            "imageUrls": [
                                "assets/images/banner3.jpg"
                            ],
                            "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                            "normalPrice": {
                                "amount": 20,
                                "currencyCode": "EUR"
                            },
                            "discountedPrice": {
                                "amount": 17,
                                "currencyCode": "EUR"
                            },
                            "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                            "dietType": "VEGETARIAN",
                            "availabilities": [
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Tuesday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Tuesday"
                                }
                            ],
                            "quantity": {},
                            "itemType": "MAIN_COURSE",
                            "deliveryOptionType": "TAKE_AWAY"
                        }
                    ],
                    "imageUrls": [
                        "assets/images/banner3.jpg"
                    ],
                    "normalPrice": {
                        "amount": 50,
                        "currencyCode": "EUR"
                    },
                    "discountedPrice": {
                        "amount": 47,
                        "currencyCode": "EUR"
                    },
                    "quantity": {},
                    "deliveryOptionType": "TAKE_AWAY",
                    "availabilities": [
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Friday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Friday"
                        },
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Saturday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Saturday"
                        }
                    ]
                },
                {
                    "id": "23462",
                    "name": "Combo7",
                    "description": "Delicious combo7",
                    "items": [
                        {
                            "id": "34575",
                            "name": "Paneer Tikka Wrap",
                            "imageUrls": [
                                "assets/images/banner4.jpg"
                            ],
                            "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                            "normalPrice": {
                                "amount": 20,
                                "currencyCode": "EUR"
                            },
                            "discountedPrice": {
                                "amount": 17,
                                "currencyCode": "EUR"
                            },
                            "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                            "dietType": "VEGETARIAN",
                            "availabilities": [
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Tuesday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Tuesday"
                                }
                            ],
                            "quantity": {},
                            "itemType": "MAIN_COURSE",
                            "deliveryOptionType": "TAKE_AWAY"
                        }
                    ],
                    "imageUrls": [
                        "assets/images/banner4.jpg"
                    ],
                    "normalPrice": {
                        "amount": 60,
                        "currencyCode": "EUR"
                    },
                    "discountedPrice": {
                        "amount": 57,
                        "currencyCode": "EUR"
                    },
                    "quantity": {},
                    "deliveryOptionType": "TAKE_AWAY",
                    "availabilities": [
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Saturday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Saturday"
                        },
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Monday"
                        }
                    ]
                }
            ],
            "items": []
        },
        {
            "categoryType": "SOUTH_INDIAN",
            "combos": [
                {
                    "id": "23460",
                    "name": "Combo5",
                    "description": "Delicious combo5",
                    "items": [
                        {
                            "id": "34572",
                            "name": "Paneer Tikka Wrap",
                            "imageUrls": [
                                "assets/images/banner1.jpg"
                            ],
                            "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                            "normalPrice": {
                                "amount": 20,
                                "currencyCode": "EUR"
                            },
                            "discountedPrice": {
                                "amount": 17,
                                "currencyCode": "EUR"
                            },
                            "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                            "dietType": "VEGETARIAN",
                            "availabilities": [
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Tuesday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Tuesday"
                                }
                            ],
                            "quantity": {},
                            "itemType": "MAIN_COURSE",
                            "deliveryOptionType": "TAKE_AWAY"
                        }
                    ],
                    "imageUrls": [
                        "assets/images/banner1.jpg"
                    ],
                    "normalPrice": {
                        "amount": 40,
                        "currencyCode": "EUR"
                    },
                    "discountedPrice": {
                        "amount": 37,
                        "currencyCode": "EUR"
                    },
                    "quantity": {},
                    "deliveryOptionType": "TAKE_AWAY",
                    "availabilities": [
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Wednesday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "21:00",
                            "day": "Wednesday"
                        },
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Thursday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "21:00",
                            "day": "Thursday"
                        }
                    ]
                }
            ],
            "items": [
                {
                    "id": "34568",
                    "name": "Paneer Tikka Wrap",
                    "imageUrls": [
                        "http://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"
                    ],
                    "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                    "normalPrice": {
                        "amount": 20,
                        "currencyCode": "EUR"
                    },
                    "discountedPrice": {
                        "amount": 17,
                        "currencyCode": "EUR"
                    },
                    "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                    "dietType": "VEGETARIAN",
                    "availabilities": [
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Tuesday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Tuesday"
                        }
                    ],
                    "quantity": {},
                    "itemType": "MAIN_COURSE",
                    "deliveryOptionType": "TAKE_AWAY"
                },
                {
                    "id": "34574",
                    "name": "Paneer Tikka Wrap",
                    "imageUrls": [
                        "http://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"
                    ],
                    "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                    "normalPrice": {
                        "amount": 20,
                        "currencyCode": "EUR"
                    },
                    "discountedPrice": {
                        "amount": 17,
                        "currencyCode": "EUR"
                    },
                    "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                    "dietType": "VEGETARIAN",
                    "availabilities": [
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Tuesday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Tuesday"
                        }
                    ],
                    "quantity": {},
                    "itemType": "MAIN_COURSE",
                    "deliveryOptionType": "TAKE_AWAY"
                },
                {
                    "id": "34576",
                    "name": "Paneer Tikka Wrap",
                    "imageUrls": [
                        "http://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"
                    ],
                    "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                    "normalPrice": {
                        "amount": 20,
                        "currencyCode": "EUR"
                    },
                    "discountedPrice": {
                        "amount": 17,
                        "currencyCode": "EUR"
                    },
                    "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                    "dietType": "VEGETARIAN",
                    "availabilities": [
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Tuesday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Tuesday"
                        }
                    ],
                    "quantity": {},
                    "itemType": "MAIN_COURSE",
                    "deliveryOptionType": "TAKE_AWAY"
                },
                {
                    "id": "34578",
                    "name": "Paneer Tikka Wrap",
                    "imageUrls": [
                        "http://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"
                    ],
                    "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                    "normalPrice": {
                        "amount": 20,
                        "currencyCode": "EUR"
                    },
                    "discountedPrice": {
                        "amount": 17,
                        "currencyCode": "EUR"
                    },
                    "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                    "dietType": "VEGETARIAN",
                    "availabilities": [
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Tuesday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Tuesday"
                        }
                    ],
                    "quantity": {},
                    "itemType": "MAIN_COURSE",
                    "deliveryOptionType": "TAKE_AWAY"
                }
            ]
        },
        {
            "categoryType": "CONTINENTAL",
            "combos": [
                {
                    "id": "23456",
                    "name": "Combo1",
                    "description": "Delicious combo",
                    "items": [
                        {
                            "id": "34577",
                            "name": "Paneer Tikka Wrap",
                            "imageUrls": [
                                "assets/images/banner2.jpg"
                            ],
                            "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                            "normalPrice": {
                                "amount": 20,
                                "currencyCode": "EUR"
                            },
                            "discountedPrice": {
                                "amount": 17,
                                "currencyCode": "EUR"
                            },
                            "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                            "dietType": "VEGETARIAN",
                            "availabilities": [
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Tuesday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Tuesday"
                                }
                            ],
                            "quantity": {},
                            "itemType": "MAIN_COURSE",
                            "deliveryOptionType": "TAKE_AWAY"
                        },
                        {
                            "id": "34567",
                            "name": "Paneer Tikka Wrap",
                            "imageUrls": [
                                "assets/images/banner2.jpg"
                            ],
                            "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                            "normalPrice": {
                                "amount": 20,
                                "currencyCode": "EUR"
                            },
                            "discountedPrice": {
                                "amount": 17,
                                "currencyCode": "EUR"
                            },
                            "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                            "dietType": "VEGETARIAN",
                            "availabilities": [
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Tuesday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Tuesday"
                                }
                            ],
                            "quantity": {},
                            "itemType": "MAIN_COURSE",
                            "deliveryOptionType": "TAKE_AWAY"
                        }
                    ],
                    "imageUrls": [
                        "assets/images/banner2.jpg"
                    ],
                    "normalPrice": {
                        "amount": 20,
                        "currencyCode": "EUR"
                    },
                    "discountedPrice": {
                        "amount": 17,
                        "currencyCode": "EUR"
                    },
                    "quantity": {},
                    "deliveryOptionType": "TAKE_AWAY",
                    "availabilities": [
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Tuesday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Tuesday"
                        }
                    ]
                },
                {
                    "id": "23459",
                    "name": "Combo4",
                    "description": "Delicious Combo4",
                    "items": [
                        {
                            "id": "34571",
                            "name": "Paneer Tikka Wrap",
                            "imageUrls": [
                                "assets/images/banner4.jpg"
                            ],
                            "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                            "normalPrice": {
                                "amount": 20,
                                "currencyCode": "EUR"
                            },
                            "discountedPrice": {
                                "amount": 17,
                                "currencyCode": "EUR"
                            },
                            "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                            "dietType": "VEGETARIAN",
                            "availabilities": [
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Monday"
                                },
                                {
                                    "startTime": "10:00",
                                    "endTime": "12:00",
                                    "day": "Tuesday"
                                },
                                {
                                    "startTime": "16:00",
                                    "endTime": "20:00",
                                    "day": "Tuesday"
                                }
                            ],
                            "quantity": {},
                            "itemType": "MAIN_COURSE",
                            "deliveryOptionType": "TAKE_AWAY"
                        }
                    ],
                    "imageUrls": [
                        "assets/images/banner4.jpg"
                    ],
                    "normalPrice": {
                        "amount": 30,
                        "currencyCode": "EUR"
                    },
                    "discountedPrice": {
                        "amount": 27,
                        "currencyCode": "EUR"
                    },
                    "quantity": {},
                    "deliveryOptionType": "TAKE_AWAY",
                    "availabilities": [
                        {
                            "startTime": "10:00",
                            "endTime": "11:00",
                            "day": "Tuesday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Tuesday"
                        },
                        {
                            "startTime": "10:00",
                            "endTime": "11:00",
                            "day": "Wednesday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Wednesday"
                        }
                    ]
                }
            ],
            "items": [
                {
                    "id": "34570",
                    "name": "Paneer Tikka Wrap",
                    "imageUrls": [
                        "http://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"
                    ],
                    "caption": "Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage",
                    "normalPrice": {
                        "amount": 20,
                        "currencyCode": "EUR"
                    },
                    "discountedPrice": {
                        "amount": 17,
                        "currencyCode": "EUR"
                    },
                    "description": "Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chill'd beverage.",
                    "dietType": "VEGETARIAN",
                    "availabilities": [
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Monday"
                        },
                        {
                            "startTime": "10:00",
                            "endTime": "12:00",
                            "day": "Tuesday"
                        },
                        {
                            "startTime": "16:00",
                            "endTime": "20:00",
                            "day": "Tuesday"
                        }
                    ],
                    "quantity": {},
                    "itemType": "MAIN_COURSE",
                    "deliveryOptionType": "TAKE_AWAY"
                }
            ]
        }
    ],
    "createdDateTime": "2018-01-02@11:28:01"
}
    return{SOFFERS};
}
}