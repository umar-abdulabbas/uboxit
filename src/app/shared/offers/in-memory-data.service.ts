import { InMemoryDbService } from 'angular-in-memory-web-api';
/* tslint:disable */
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const offer = {"categories":[{"categoryType":"NORTH_INDIAN","combos":[{"id":"23456","name":"Combo1","description":"Delicious combo ","items":[{"id":"34567","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"40000","name":"Chicken Pakora","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Chicken%20Pakora"],"caption":"Shredded chicken deep fried in a chickpea batter.","ingredients":[{"name":"Chutney"},{"name":"Chicken"}],"normalPrice":{"amount":6,"currencyCode":"EUR"},"discountedPrice":{"amount":4,"currencyCode":"EUR"},"description":"Shredded chicken deep fried in a chickpea batter.","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"STARTERS","deliveryOptionType":"TAKE_AWAY"}],"imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Combo1"],"normalPrice":{"amount":20,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"quantity":{"unit":"NULL"},"deliveryOptionType":"TAKE_AWAY","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday    "},{"startTime":"16:00","endTime":"20:00","day":"Tuesday    "}]}],"items":[{"id":"34567","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"34569","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"34573","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"34575","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"40000","name":"Chicken Pakora","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Chicken%20Pakora"],"caption":"Shredded chicken deep fried in a chickpea batter.","ingredients":[{"name":"Chutney"},{"name":"Chicken"}],"normalPrice":{"amount":6,"currencyCode":"EUR"},"discountedPrice":{"amount":4,"currencyCode":"EUR"},"description":"Shredded chicken deep fried in a chickpea batter.","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"STARTERS","deliveryOptionType":"TAKE_AWAY"},{"id":"50001","name":"Chicken Jalfrezi","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Chicken%20Jalfrezi"],"caption":"Chicken cooked with tomato, onion and green peppers.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":15,"currencyCode":"EUR"},"discountedPrice":{"amount":12,"currencyCode":"EUR"},"description":"A sauce of boneless chicken with tomato, onion and green peppers.","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"60001","name":"Kheer ","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Kheer%20"],"caption":"Indian rice pudding.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":6,"currencyCode":"EUR"},"discountedPrice":{"amount":4,"currencyCode":"EUR"},"description":"Indian rice pudding.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"DESERT","deliveryOptionType":"TAKE_AWAY"}]},{"categoryType":"SOUTH_INDIAN","combos":[{"id":"23458","name":"Combo3","description":"Delicious Combo3","items":[{"id":"40002","name":"Samosa","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Samosa"],"caption":"Deep fried flaky pastry with a filling of mixed vegetables","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":4,"currencyCode":"EUR"},"discountedPrice":{"amount":3,"currencyCode":"EUR"},"description":"Deep fried flaky pastry with a filling of mixed vegetables","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"STARTERS","deliveryOptionType":"TAKE_AWAY"},{"id":"40003","name":"Veg Spring Rolls","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Veg%20Spring%20Rolls"],"caption":"Stuffed with Indian style vegetables and deep fried.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":5,"currencyCode":"EUR"},"discountedPrice":{"amount":3,"currencyCode":"EUR"},"description":"Stuffed with Indian style vegetables and deep fried.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"STARTERS","deliveryOptionType":"TAKE_AWAY"}],"imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Combo3"],"normalPrice":{"amount":20,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"quantity":{"unit":"NULL"},"deliveryOptionType":"TAKE_AWAY","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday    "},{"startTime":"16:00","endTime":"20:00","day":"Tuesday    "}]},{"id":"23459","name":"Combo4","description":"Delicious Combo4","items":[{"id":"50000","name":"Chicken Korma","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Chicken%20Korma"],"caption":"Chicken cooked in a mild curry sauce with cream, cashewnuts and saffron.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":13,"currencyCode":"EUR"},"discountedPrice":{"amount":10,"currencyCode":"EUR"},"description":"Popular in the courts of Nawabs. Chicken cooked in a mild curry sauce with cream, cashewnuts and saffron. ","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"50001","name":"Chicken Jalfrezi","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Chicken%20Jalfrezi"],"caption":"Chicken cooked with tomato, onion and green peppers.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":15,"currencyCode":"EUR"},"discountedPrice":{"amount":12,"currencyCode":"EUR"},"description":"A sauce of boneless chicken with tomato, onion and green peppers.","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"}],"imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Combo4"],"normalPrice":{"amount":30,"currencyCode":"EUR"},"discountedPrice":{"amount":27,"currencyCode":"EUR"},"quantity":{"unit":"NULL"},"deliveryOptionType":"TAKE_AWAY","availabilities":[{"startTime":"10:00","endTime":"11:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"},{"startTime":"10:00","endTime":"11:00","day":"Wednesday "},{"startTime":"16:00","endTime":"20:00","day":"Wednesday "}]},{"id":"23460","name":"Combo5","description":"Delicious combo5","items":[{"id":"50001","name":"Chicken Jalfrezi","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Chicken%20Jalfrezi"],"caption":"Chicken cooked with tomato, onion and green peppers.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":15,"currencyCode":"EUR"},"discountedPrice":{"amount":12,"currencyCode":"EUR"},"description":"A sauce of boneless chicken with tomato, onion and green peppers.","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"50002","name":"Madras Chicken","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Madras%20Chicken"],"caption":"Traditional South Indian style chicken cooked with coconut milk.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":15,"currencyCode":"EUR"},"discountedPrice":{"amount":12,"currencyCode":"EUR"},"description":"Traditional South Indian style chicken cooked with coconut milk.","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"}],"imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Combo5"],"normalPrice":{"amount":40,"currencyCode":"EUR"},"discountedPrice":{"amount":37,"currencyCode":"EUR"},"quantity":{"unit":"NULL"},"deliveryOptionType":"TAKE_AWAY","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Wednesday"},{"startTime":"16:00","endTime":"21:00","day":"Wednesday"},{"startTime":"10:00","endTime":"12:00","day":"Thursday"},{"startTime":"16:00","endTime":"21:00","day":"Thursday"}]}],"items":[{"id":"34568","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"34572","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"34574","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"34576","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"34578","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"40001","name":"Cocktail Kebab","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Cocktail%20Kebab"],"caption":"Chunky pieces of Sheekh Kebab made with a thick creamy sauce. ","ingredients":[{"name":"Chutney"},{"name":"Beverage"}],"normalPrice":{"amount":8,"currencyCode":"EUR"},"discountedPrice":{"amount":7,"currencyCode":"EUR"},"description":"Chunky pieces of Sheekh Kebab made with a thick creamy sauce.","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"STARTERS","deliveryOptionType":"TAKE_AWAY"},{"id":"40003","name":"Veg Spring Rolls","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Veg%20Spring%20Rolls"],"caption":"Stuffed with Indian style vegetables and deep fried.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":5,"currencyCode":"EUR"},"discountedPrice":{"amount":3,"currencyCode":"EUR"},"description":"Stuffed with Indian style vegetables and deep fried.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"STARTERS","deliveryOptionType":"TAKE_AWAY"},{"id":"50000","name":"Chicken Korma","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Chicken%20Korma"],"caption":"Chicken cooked in a mild curry sauce with cream, cashewnuts and saffron.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":13,"currencyCode":"EUR"},"discountedPrice":{"amount":10,"currencyCode":"EUR"},"description":"Popular in the courts of Nawabs. Chicken cooked in a mild curry sauce with cream, cashewnuts and saffron. ","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"50002","name":"Madras Chicken","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Madras%20Chicken"],"caption":"Traditional South Indian style chicken cooked with coconut milk.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":15,"currencyCode":"EUR"},"discountedPrice":{"amount":12,"currencyCode":"EUR"},"description":"Traditional South Indian style chicken cooked with coconut milk.","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"60000","name":"Gulab Jamun","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Gulab%20Jamun"],"caption":"Sweet dumpling in a sugar syrup. ","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":8,"currencyCode":"EUR"},"discountedPrice":{"amount":5,"currencyCode":"EUR"},"description":"Sweet dumpling in a sugar syrup.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"DESERT","deliveryOptionType":"TAKE_AWAY"}]},{"categoryType":"CONTINENTAL","combos":[{"id":"23461","name":"Combo6","description":"Delicious combo6","items":[{"id":"50002","name":"Madras Chicken","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Madras%20Chicken"],"caption":"Traditional South Indian style chicken cooked with coconut milk.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":15,"currencyCode":"EUR"},"discountedPrice":{"amount":12,"currencyCode":"EUR"},"description":"Traditional South Indian style chicken cooked with coconut milk.","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"50003","name":"Butter Chicken","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Butter%20Chicken"],"caption":"Boneless tender chicken in a creamy tomato sauce with a mellow flavor.","ingredients":[{"name":"Boneless White Chicken meat"},{"name":"Tomatoes"},{"name":"Butter"},{"name":"Milk Cream"},{"name":"Honey "}],"normalPrice":{"amount":15,"currencyCode":"EUR"},"discountedPrice":{"amount":12,"currencyCode":"EUR"},"description":"Butter Chicken is one of our highly selling chicken dish in our menu.Almost every table and customer orders it.","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"}],"imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Combo6"],"normalPrice":{"amount":50,"currencyCode":"EUR"},"discountedPrice":{"amount":47,"currencyCode":"EUR"},"quantity":{"unit":"NULL"},"deliveryOptionType":"TAKE_AWAY","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Friday"},{"startTime":"16:00","endTime":"20:00","day":"Friday"},{"startTime":"10:00","endTime":"12:00","day":"Saturday   "},{"startTime":"16:00","endTime":"20:00","day":"Saturday   "}]},{"id":"23462","name":"Combo7","description":"Delicious combo7","items":[{"id":"60000","name":"Gulab Jamun","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Gulab%20Jamun"],"caption":"Sweet dumpling in a sugar syrup. ","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":8,"currencyCode":"EUR"},"discountedPrice":{"amount":5,"currencyCode":"EUR"},"description":"Sweet dumpling in a sugar syrup.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"DESERT","deliveryOptionType":"TAKE_AWAY"},{"id":"60001","name":"Kheer ","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Kheer%20"],"caption":"Indian rice pudding.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":6,"currencyCode":"EUR"},"discountedPrice":{"amount":4,"currencyCode":"EUR"},"description":"Indian rice pudding.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"DESERT","deliveryOptionType":"TAKE_AWAY"}],"imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Combo7"],"normalPrice":{"amount":60,"currencyCode":"EUR"},"discountedPrice":{"amount":57,"currencyCode":"EUR"},"quantity":{"unit":"NULL"},"deliveryOptionType":"TAKE_AWAY","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Saturday"},{"startTime":"16:00","endTime":"20:00","day":"Saturday"},{"startTime":"10:00","endTime":"12:00","day":"Monday   "},{"startTime":"16:00","endTime":"20:00","day":"Monday   "}]}],"items":[{"id":"34570","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"34571","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"34577","name":"Paneer Tikka Wrap","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Paneer%20Tikka%20Wrap"],"caption":"Soft Cottage Cheese Dices, Laccha Paratha, Tandoori Spices, Chutney, Beverage","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":21,"currencyCode":"EUR"},"discountedPrice":{"amount":17,"currencyCode":"EUR"},"description":"Paneer Tikka Wrap is a great way to enjoy paneer and it also tastes great with every bite. Dig into soft oven roasted paneer tikka and fresh onion juliennes with mint chutney wrapped in crisp laccha paratha. Comes with Chilld beverage.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"unit":"NULL"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"40002","name":"Samosa","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Samosa"],"caption":"Deep fried flaky pastry with a filling of mixed vegetables","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":4,"currencyCode":"EUR"},"discountedPrice":{"amount":3,"currencyCode":"EUR"},"description":"Deep fried flaky pastry with a filling of mixed vegetables","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"STARTERS","deliveryOptionType":"TAKE_AWAY"},{"id":"50003","name":"Butter Chicken","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Butter%20Chicken"],"caption":"Boneless tender chicken in a creamy tomato sauce with a mellow flavor.","ingredients":[{"name":"Boneless White Chicken meat"},{"name":"Tomatoes"},{"name":"Butter"},{"name":"Milk Cream"},{"name":"Honey "}],"normalPrice":{"amount":15,"currencyCode":"EUR"},"discountedPrice":{"amount":12,"currencyCode":"EUR"},"description":"Butter Chicken is one of our highly selling chicken dish in our menu.Almost every table and customer orders it.","dietType":"NON_VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"MAIN_COURSE","deliveryOptionType":"TAKE_AWAY"},{"id":"60002","name":"Rasmalai ","imageUrls":["https://res.cloudinary.com/your-delicacy-bv/image/upload/Rasmalai%20"],"caption":"A Bengal specialty made with cottage cheese balls soaked in sweetened cream.","ingredients":[{"name":"Chutney"},{"name":"Tandoori spices"},{"name":"Cottage cheese"},{"name":"Beverage"},{"name":"Laccha paratha"}],"normalPrice":{"amount":5,"currencyCode":"EUR"},"discountedPrice":{"amount":3,"currencyCode":"EUR"},"description":"A Bengal specialty made with cottage cheese balls soaked in sweetened cream.","dietType":"VEGETARIAN","availabilities":[{"startTime":"10:00","endTime":"12:00","day":"Monday"},{"startTime":"16:00","endTime":"20:00","day":"Monday"},{"startTime":"10:00","endTime":"12:00","day":"Tuesday"},{"startTime":"16:00","endTime":"20:00","day":"Tuesday"}],"quantity":{"value":"175","unit":"gram"},"allowedForCustomCombo":true,"allowedForIndividualSale":true,"itemType":"DESERT","deliveryOptionType":"TAKE_AWAY"}]}],"createdDateTime":"2018-04-04@11:50:11","availableItemsForCustomCombo":true,"availableItemsForIndividualSale":true,"id":"dd397058-d09e-4d8b-bb51-4ae89b832224"}
    return {offer};
  }
}
