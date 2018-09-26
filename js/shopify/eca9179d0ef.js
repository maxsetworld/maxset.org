/*<![CDATA[*/

    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'max-set-mi.myshopify.com',
          storefrontAccessToken: 'ac2bb26bceadd024d459f3d19b91d7b8',
        });

        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: [1439870910516],
            node: document.getElementById('product-component-eca9179d0ef'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
  "product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#2bbbad",
        "font-family": "Roboto, sans-serif",
        ":hover": {
          "background-color": "#27a89c"
        },
        ":focus": {
          "background-color": "#27a89c"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Raleway, sans-serif",
        "color": "#6d6969",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal",
        "color": "#6d6969"
      },
      "description": {
        "color": "#6d6969",
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Raleway, sans-serif",
        "color": "#6d6969",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-size": "12px",
        "color": "#6d6969",
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto",
      "Raleway",
      "Raleway",
      "Raleway",
      "Raleway",
      "Raleway"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "notice": "A download link will be provided after purchase and also emailed to you. You will also receive your license key in a separate email."
    },
    "styles": {
      "button": {
        "background-color": "#2bbbad",
        "font-family": "Roboto, sans-serif",
        ":hover": {
          "background-color": "#27a89c"
        },
        ":focus": {
          "background-color": "#27a89c"
        },
        "font-weight": "normal"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#2bbbad",
        "font-family": "Roboto, sans-serif",
        ":hover": {
          "background-color": "#27a89c"
        },
        ":focus": {
          "background-color": "#27a89c"
        },
        "font-weight": "normal"
      },
      "variantTitle": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "description": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      },
      "compareAt": {
        "font-family": "Raleway, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto",
      "Raleway",
      "Raleway",
      "Raleway",
      "Raleway",
      "Raleway"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Roboto, sans-serif",
        "background-color": "#2bbbad",
        ":hover": {
          "background-color": "#27a89c"
        },
        ":focus": {
          "background-color": "#27a89c"
        },
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Roboto"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Raleway, sans-serif"
      },
      "select": {
        "font-family": "Raleway, sans-serif"
      }
    },
    "googleFonts": [
      "Raleway",
      "Raleway"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
          });
        });
      }
    })();
    /*]]>*/
