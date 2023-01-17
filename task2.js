// 2. Write a program to list out the maximum and minimum temperatures recorded in a city on each
// day(City should not repeat on a single day). Let us consider the below array for the weather data
// based on different cities on different dates. Prepare an array which says on each day what is the
// maximum temperature recorded and in which city it is recorded. Same with the minimum
// temperature and the city it has been recorded.

var weather_data= [
    {
        "id": 4840240013377536,
        "applicable_date": "2022-03-28",
        "min_temp": 3.74,
        "max_temp": 16.240000000000003,
        "city": "Bangalore"
    },
    {
        "id": 6158451006767104,
        "applicable_date": "2022-03-29",
        "min_temp": 2.6300000000000005,
        "max_temp": 17.42,
            "city": "Bangalore"
        },
        {
            "id": 5139251006013440,
            "applicable_date": "2022-03-30",
            "min_temp": 3.83,
            "max_temp": 16.88,
            "city": "Bangalore"
        },
        {
            "id": 5037364718075904,
            "applicable_date": "2022-03-31",
            "min_temp": 5.485,
            "max_temp": 11.955,
            "city": "Bangalore"
        },
        {
            "id": 4961017379422208,
            "applicable_date": "2022-04-01",
            "min_temp": 1.22,
            "max_temp": 12.325,
            "city": "Bangalore"
        },
        {
            "id": 5559481041682432,
            "applicable_date": "2022-04-02",
            "min_temp": 2.035,
            "max_temp": 12.565,
            "city": "Bangalore"
        },
        {
            "id": 5838918358401024,
            "applicable_date": "2022-03-28",
            "min_temp": 0.195,
            "max_temp": 5.97,
            "city": "Delhi"
        },
        {
            "id": 6158451006767104,
            "applicable_date": "2022-03-29",
            "min_temp": 1.6300000000000005,
            "max_temp": 18.42,
            "city": "Delhi"
        }
        ]

        
        var max_temp = [];
        var min_temp = [];
        
        weather_data.forEach(function(element) {
            max_temp.push({
                applicable_date: element.applicable_date,
                max_temp: element.max_temp,
                city: element.city
            });
            min_temp.push({
                applicable_date: element.applicable_date,
                min_temp: element.min_temp,
                city: element.city
            });
        });
        console.log(max_temp)
       