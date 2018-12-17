

export const setDate = (element) => {
    const actualDate = new Date();

    const polishMonths = ['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipiec','sierpień','wrzesień','październik','listopad','grudzień'];

    const actualDateString = `${polishMonths[actualDate.getMonth()]} / ${actualDate.getFullYear()}`;

    element.innerHTML = actualDateString;
};

