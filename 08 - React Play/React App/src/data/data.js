// object describing the team lineup of the 2019 F1 season
const f1Teams = {
  "name": "F1 Teams",
  "teams": [
    {
      "name": "Mercedes",
      "color": "#00D2BE",
      "riders": [
        {
          "name": {
            "first": "Lewis",
            "last": "Hamilton"
          },
          "number": "44"
        },
        {
          "name": {
            "first": "Valteri",
            "last": "Bottas"
          },
          "number": "77"
        }
      ]
    },
    {
      "name": "Ferrari",
      "color": "#DC0000",
      "riders": [
        {
          "name": {
            "first": "Sebastian",
            "last": "Vettel"
          },
          "number": "5"
        },
        {
          "name": {
            "first": "Charles",
            "last": "Leclerc"
          },
          "number": "16"
        }
      ]
    },
    {
      "name": "Red Bull Racing",
      "color": "#1E41FF",
      "riders": [
        {
          "name": {
            "first": "Max",
            "last": "Verstappen"
          },
          "number": "33"
        },
        {
          "name": {
            "first": "Pierre",
            "last": "Gasly"
          },
          "number": "10"
        }
      ]
    },
    {
      "name": "McLaren",
      "color": "#FF8700",
      "riders": [
        {
          "name": {
            "first": "Carlos",
            "last": "Sainz"
          },
          "number": "55"
        },
        {
          "name": {
            "first": "Lando",
            "last": "Norris"
          },
          "number": "4"
        }
      ]
    },
    {
      "name": "Renault",
      "color": "#FFF500",
      "riders": [
        {
          "name": {
            "first": "Nico",
            "last": "Hulkenberg"
          },
          "number": "27"
        },
        {
          "name": {
            "first": "Daniel",
            "last": "Ricciardo"
          },
          "number": "3"
        }
      ]
    },
    {
      "name": "Racing Point",
      "color": "#F596C8",
      "riders": [
        {
          "name": {
            "first": "Sergio",
            "last": "Perez"
          },
          "number": "11"
        },
        {
          "name": {
            "first": "Lance",
            "last": "Stroll"
          },
          "number": "18"
        }
      ]
    },
    {
      "name": "Toro Rosso",
      "color": "#469BFF",
      "riders": [
        {
          "name": {
            "first": "Daniil",
            "last": "Kvyat"
          },
          "number": "26"
        },
        {
          "name": {
            "first": "Alexander",
            "last": "Albon"
          },
          "number": "23"
        }
      ]
    },
    {
      "name": "Haas",
      "color": "#BD9E57",
      "riders": [
        {
          "name": {
            "first": "Romain",
            "last": "Grosjean"
          },
          "number": "8"
        },
        {
          "name": {
            "first": "Kevin",
            "last": "Magnussen"
          },
          "number": "20"
        }
      ]
    },
    {
      "name": "Alfa Romeo",
      "color": "#9B0000",
      "riders": [
        {
          "name": {
            "first": "Kimi",
            "last": "Raikkonen"
          },
          "number": "7"
        },
        {
          "name": {
            "first": "Antonio",
            "last": "Giovinazzi"
          },
          "number": "99"
        }
      ]
    },
    {
      "name": "Williams",
      "color": "#FFFFFF",
      "riders": [
        {
          "name": {
            "first": "Robert",
            "last": "Kubica"
          },
          "number": "88"
        },
        {
          "name": {
            "first": "George",
            "last": "Russel"
          },
          "number": "63"
        }
      ]
    }
  ]
};

// object describing the questions and options for each prediction
// the options array describe the number of each rider to be included for the prediction
// the name could be very well included and matched through concatenation
const f1Predictions = {
  "name": "F1 Grand Prix Predictions",
  "predictions": [
    {
      "name": "Who will top the podium?",
      "options": [
        44,
        77,
        5,
        16,
        33,
        10
      ]
    },
    {
      "name": "Who will finish in the highest position?",
      "options": [
        63,
        88,
        99,
        7
      ]
    }
  ]

};

// export an object contemplating both the f1 teams and the f1 predictions
const data = {
  f1Teams,
  f1Predictions,
}
export default data;