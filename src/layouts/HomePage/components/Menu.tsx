import React from "react";
import Card from "./Card"; // Import the Card component

// Define types for product item
interface MenuItem {
  title: string;
  description: string;
  price: string;
  imageSrc: string; // Add image source to the product item
}

// Sample product data for each category with images
const savouryItems: MenuItem[] = [
  {
    title: "Quiche Lorraine",
    description: "A classic savory pie with bacon.",
    price: "€5.99",
    imageSrc: require("./../../../Images/PublicImages/quiche.jpeg"), // Placeholder image URL
  },
  {
    title: "Cheese Croissant",
    description: "Buttery, flaky croissant with melted cheese.",
    price: "€3.49",
    imageSrc: require("./../../../Images/PublicImages/hamcr.jpg"), // Placeholder image URL
  },
  {
    title: "Chocolat Croissant",
    description: "Buttery, flaky croissant with melted cheese.",
    price: "€3.49",
    imageSrc: require("./../../../Images/PublicImages/choccr.jpg"), // Placeholder image URL
  },
];

const patisserieItems: MenuItem[] = [
  {
    title: "Chocolate Eclair",
    description: "A choux pastry filled with chocolate cream.",
    price: "€4.99",
    imageSrc: require("./../../../Images/PublicImages/eclair.jpg"), // Placeholder image URL
  },
  {
    title: "Fruit Tart",
    description: "A sweet tart topped with fresh seasonal fruit.",
    price: "€6.99",
    imageSrc: require("./../../../Images/PublicImages/tart.jpg"), // Placeholder image URL
  },
];

const boulangerieItems: MenuItem[] = [
  {
    title: "Baguette",
    description: "Classic French baguette with a crunchy crust.",
    price: "€2.49",
    imageSrc: require("./../../../Images/PublicImages/pulled.jpg"), // Placeholder image URL
  },
  {
    title: "Pain au Chocolat",
    description: "Delicious croissant filled with rich chocolate.",
    price: "€2.99",
    imageSrc: require("./../../../Images/PublicImages/chocbread.jpg"), // Placeholder image URL
  },
];

export const Menu = () => {
  return (
    <div
      className="menu-container"
      style={{
        backgroundColor: "#f8f3e9",
        padding: "2rem 0",
        minHeight: "100vh",
      }}
    >
      <div className="container text-center">
        {/* Title and Description */}
        <h1 className="display-5 fw-bold text-brown mb-4">Our Menu</h1>
        <p className="fs-5 mb-5">
          Explore the delectable offerings of our bakery. From savoury bites to
          delicate patisserie creations and freshly baked boulangerie goods,
          there's something for every taste.
        </p>

        {/* SAVOURY Section */}
        <section className="menu-section mb-5">
          <h2 className="fw-bold text-uppercase text-brown">SAVOURY</h2>
          <p className="mb-4">
            Indulge in our handcrafted savoury delights, perfect for any time of
            the day. From quiches to savory pastries, every bite is a treat.
          </p>
          <div className="row g-4 justify-content-center">
            {savouryItems.map((item, index) => (
              <div className="col-12 col-md-4" key={index}>
                <Card
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  imageSrc={item.imageSrc} // Pass the image source here
                />
              </div>
            ))}
          </div>
        </section>

        {/* PATISSERIE Section */}
        <section className="menu-section mb-5">
          <h2 className="fw-bold text-uppercase text-brown">PATISSERIE</h2>
          <p className="mb-4">
            Our patisserie is filled with sweet creations that showcase the art
            of French pastry. Enjoy macarons, tarts, and other elegant desserts.
          </p>
          <div className="row g-4 justify-content-center">
            {patisserieItems.map((item, index) => (
              <div className="col-12 col-md-4" key={index}>
                <Card
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  imageSrc={item.imageSrc} // Pass the image source here
                />
              </div>
            ))}
          </div>
        </section>

        {/* BOULANGERIE Section */}
        <section className="menu-section mb-5">
          <h2 className="fw-bold text-uppercase text-brown">BOULANGERIE</h2>
          <p className="mb-4">
            Freshly baked bread, croissants, and more await you in our
            boulangerie section. Perfect for breakfast or pairing with a meal.
          </p>
          <div className="row g-4 justify-content-center">
            {boulangerieItems.map((item, index) => (
              <div className="col-12 col-md-4" key={index}>
                <Card
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  imageSrc={item.imageSrc} // Pass the image source here
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
