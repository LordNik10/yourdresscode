import './ChoosePrice.scss';

const services = [
  {
    serviceId: 1,
    serviceTitle: 'Small Service',
    serviceSubtitle: 'For beginners',
    price: 19.99,
    discountedPrice: 9.99,
    save: 50,
    features: ['features1', 'features2', 'features3', 'features4'],
  },
  {
    serviceId: 2,
    serviceTitle: 'Standard Service',
    serviceSubtitle: 'Perfect for personal web sites',
    price: 39.99,
    discountedPrice: 19.99,
    save: 50,
    features: ['features1', 'features2', 'features3', 'features4', 'features5'],
  },
  {
    serviceId: 3,
    serviceTitle: 'Business Service',
    serviceSubtitle: 'Great for companies',
    price: 69.99,
    discountedPrice: 29.99,
    save: 57,
    features: [
      'features1',
      'features2',
      'features3',
      'features4',
      'features5',
      'features7',
      'features8',
    ],
  },
];

function ChoosePrice() {
  return (
    <div className="container">
      {services.map((el) => (
        <div
          className="service-container"
          style={{ height: el.serviceId === 2 ? '630px' : null }}
          key={el.serviceId}
        >
          {el.serviceId === 2 && (
            <div className="most-popular" key={el.serviceId}>
              MOST POPULAR
            </div>
          )}
          <span className="service-title">{el.serviceTitle}</span>
          <span className="service-subtitle">{el.serviceSubtitle} </span>
          <div className="service-price">
            <span className="old-price">{el.price}$</span>
            <span
              className="save-price"
              style={{ backgroundColor: el.serviceId === 2 ? '#fc5185' : null }}
            >
              Save {el.save}%
            </span>
          </div>
          {el.serviceId === 2 && (
            <button type="button" className="service2-btn">
              Add to cart
            </button>
          )}
          {el.serviceId !== 2 && (
            <button type="button" className="service-btn">
              Add to cart
            </button>
          )}
          <ul
            className="features-list"
            style={{ padding: 0, marginTop: '10%' }}
          >
            {el.features.map((feature) => (
              <li style={{ marginBottom: '20%' }} key={feature}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* <div className="container-service">
        <span className="title-service">Small Service</span>
        <span className="subtitle-service">For beginners</span>
      </div>
      <div className="container-service">
        <span className="title-service">Standard Service</span>
        <span className="subtitle-service">Perfect for personal web sites</span>
      </div>
      <div className="container-service">
        <span className="title-service">Business Service</span>
        <span className="subtitle-service">Great for companies</span>
      </div> */}
    </div>
  );
}

export default ChoosePrice;
