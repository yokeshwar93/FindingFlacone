const getTotalTime = (selectedValues) => {
    let timeTaken = 0;
    Object.values(selectedValues).map(selectedValue => {
        timeTaken += selectedValue.timer
    })
    return timeTaken;
}

export const getInitialVehiclesList = (vehicles) => {
    vehicles.map(vehicle => vehicle.availableCount = vehicle.total_no)
    return vehicles
}

export default getTotalTime;