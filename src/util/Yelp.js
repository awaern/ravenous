const apiKey = 'l0GLaLwWHLQ6HLRa58SgSRKSdkuBnmMXupQuObydcCdwXAtuzGcuRFHA700tOafxH5-mmSmqh_LgfPPsUTXPNdS8FfQGsgrvrG5gsMKrSh14HhauDbOFhx-Kf0KbXHYx';

const Yelp = {
  search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
                headers: {
                  Authorization: `Bearer ${apiKey}`
                }
              }).then(response => {
                return response.json();
              }).then(jsonResponse => {
                if (jsonResponse.businesses) {
                  // console.log(jsonResponse.businesses);
                  return jsonResponse.businesses.map(business => {
                    return {
                      id: business.id,
                      imageSrc: business.image_url,
                      name: business.name,
                      url: business.url,
                      address: business.location.address1,
                      city: business.location.city,
                      state: business.location.state,
                      zipCode: business.location.zip_code,
                      category: business.categories[0].title,
                      rating: business.rating,
                      reviewCount: business.review_count
                    }
                  })
                }
              });
  }
};

export default Yelp;
