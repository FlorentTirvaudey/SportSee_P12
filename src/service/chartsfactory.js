export const formatActivityData = (data) => {
    let formattedDatas = []
    const valuesObjectData = Object.values(data.sessions);

    valuesObjectData.forEach(itemInObject => {
        formattedDatas.push(itemInObject)
    });

    return formattedDatas
}

export const formatSessionData = (data) => {
    let formattedDatas = []
    const valuesObjectData = Object.values(data.sessions)

    valuesObjectData.forEach(itemInObject => {
        formattedDatas.push(itemInObject)
    });

    return formattedDatas
}

export const formatPerformanceData = (data) => {
    let formattedDatas = []

    const valuesObjectData = Object.values(data.data)

    const valuesObjectKindData = Object.values(data.kind)

    valuesObjectData.forEach((itemInObject) => {
        switch (itemInObject.kind) {
            case 1:
                itemInObject.kind = valuesObjectKindData[0]
                break;

            case 2:
                itemInObject.kind = valuesObjectKindData[1]
                break

            case 3:
            itemInObject.kind = valuesObjectKindData[2]
            break

            case 4:
            itemInObject.kind = valuesObjectKindData[3]
            break

            case 5:
            itemInObject.kind = valuesObjectKindData[4]
            break
                
            case 6:
            itemInObject.kind = valuesObjectKindData[5]
            break
        
            default:
                break;
        }

        formattedDatas.push(itemInObject)
    })

    formattedDatas.forEach((label) => {
        switch (label.kind) {
            case 'energy':
                label.kind = 'Energie'
                break;
            case 'cardio':
                label.kind = 'Cardio'
                break;
            case 'endurance':
                label.kind = 'Endurance'
                break;
            case 'strenght':
                label.kind = 'Force'
                break;
            case 'speed':
                label.kind = 'Vitesse'
                break;
            case 'intensity':
                label.kind = 'Intensité'
                break;
                default:
                    break;
        }
    })

    return formattedDatas
    
}