// =====================================Second slide=======
fetch('js/items.json').then(response => response.json())
                .then(data => {
                    
                    const swiper__top_featured = document.getElementById('slider-top-selled');

                    all_products_json = data;
                    
                    data.forEach(product => {
                      if (product.old_price) { 
                        swiper__top_featured.innerHTML += `
                        <div class="swiper-slide">
                        <!-- strat product -->
                        <div class="col">
                          <div class="product-item hover-effect-slide">
                            <div class="image-holder position-relative">
                              <img src="${product.img}" alt="categories" class="product-image img-fluid">
                              <a href="#" class="btn-icon btn-eye-con">
                                <span> <i class="fa fa-eye"></i></span>
                              </a>
                              <span   onclick="addToCart(${product.id}, this)"   class="btn btn-dark w-100 mt-2 rounded-3">Add to cart</span>
                            </div>
                            <div class="product-content position-relative">
                              <h5 class="product-name text-uppercase fs-5 mt-3">
                                <a href="single-product.html">${product.name}</a>
                              </h5>
                              <div class="product-price">
                                <span class="new-price">$${product.price}</span>
                                <span class="old-price">$${product.old_price}</span>
                              </div>
                              <div class="product-star">
                
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        
                        `

                      }
                      

                    });
                })