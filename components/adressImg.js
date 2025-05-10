// components/AddressWithImage.js

const addressImg = ({ imageUrl, address, googleMapsUrl }) => {
    return (
        <div className="address-container">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <img
                    src={imageUrl}
                    alt="Localização"
                    className="address-image"
                    style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                />
            </a>
            <p>{address}</p>
        </div>
    );
};

export default addressImg;
