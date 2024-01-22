import React from 'react';

const PropertyListing = ({ properties }) => {
  return (
    <section className="property-listing">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Featured Properties</h2>
        {/* Display property cards or listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property) => (
            <div key={property.id} className="property-card">
              {/* Add property details and image */}
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover mb-2" />
              <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
              <p className="text-gray-600">{property.description}</p>
              {/* Add more property details as needed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyListing;
