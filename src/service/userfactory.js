import User from "./user";

// formatage du nombre avec un séparateur aux milliers
const formatNumber = (number) => {
    return new Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3,
      }).format(number);
};

const createUser = (data) => {
    const datasFromApi = {
        id: data.id,
        firstName: data.userInfos.firstName,
        lastName: data.userInfos.lastName,
        age: data.userInfos.age,
        score: data.todayScore || data.score,
        calorieCount: formatNumber(data.keyData.calorieCount),
        proteinCount: data.keyData.proteinCount,
        carbohydrateCount: data.keyData.carbohydrateCount,
        lipidCount: data.keyData.lipidCount
    }

    return new User(datasFromApi);
}

export default createUser