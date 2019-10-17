export const sampleResultsRequestObject = {
    "planet_names":[
        "Donlon",
        "Jebing",
        "Enchai",
        "Sapir"
    ],
    "vehicle_names":[
        "Space rocket",
        "Space shuttle",
        "Space pod",
        "Space ship"
    ],
    "token":"hPCXTGYCBqXyItfxehfADSIzrEifhpfh"
}
export const sampleResultsResponseObject = {
    "planet_name":"Donlon",
    "status":"success"
}
export const samplePlanetsObject = [
    {"name":"Donlon","distance":100},
    {"name":"Enchai","distance":200},
    {"name":"Jebing","distance":300},
    {"name":"Sapir","distance":400},
    {"name":"Lerbin","distance":500},
    {"name":"Pingasor","distance":600}
]

export const sampleVehiclesObject = [
    {
        name: "Space pod",
        total_no: 2,
        max_distance: 200,
        speed: 2,
        availableCount: 2,
        id: "vehicle_0",
    },
    {
        name: "Space rocket",
        total_no: 1,
        max_distance: 300,
        speed: 4,
        availableCount: 1,
        id: "vehicle_1",
    },
    {
        name: "Space shuttle",
        total_no: 1,
        max_distance: 400,
        speed: 5,
        availableCount: 1,
        id: "vehicle_2",
    },
    {
        name: "Space ship",
        total_no: 2,
        max_distance: 600,
        speed: 10,
        availableCount: 2,
        id: "vehicle_3",
    }
]

export const sampleSelectedValuesObject = {
    1: {
        name: "Donlon",
        distance: "100",
        vehicles: {
            name: "Space rocket",
            total_no: 1,
            max_distance: 300,
            speed: 4,
            availableCount: 0,
            id: "vehicle_1",
        },
        timer: 25
    },
    2: {
        name: "Jebing",
        distance: "300",
        vehicles: {
            name: "Space shuttle",
            total_no: 1,
            max_distance: 400,
            speed: 5,
            availableCount: 0,
            id: "vehicle_2",
        },
        timer: 60
    },
    3: {
        name: "Enchai",
        distance: "200",
        vehicles: {
            name: "Space pod",
            total_no: 2,
            max_distance: 200,
            speed: 2,
            availableCount: 1,
            id: "vehicle_0",
        },
        timer: 100
    },
    4: {
        name: "Sapir",
        distance: "400",
        vehicles: {
            name: "Space ship",
            total_no: 2,
            max_distance: 600,
            speed: 10,
            availableCount: 1,
            id: "vehicle_3"
        },
        timer: 40
    }
}
