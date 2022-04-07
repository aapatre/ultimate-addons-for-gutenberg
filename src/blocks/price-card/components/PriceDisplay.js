

const PriceDisplay = ( { variantName, price } ) => {

    return(
        <>
            <h4>
                <span>{variantName}:</span>
                <strong><span> {price}</span></strong>
            </h4>
        </>
    );
};

export default PriceDisplay;