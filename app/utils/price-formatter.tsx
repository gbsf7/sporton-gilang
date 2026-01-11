const PriceFormatter = (price: number) => {
    const newFormat = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumSignificantDigits: 3,
    }).format(price);

    return newFormat;
}

export default PriceFormatter;