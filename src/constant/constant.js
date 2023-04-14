export const productModulesOptions = [
    { label: "Manual", value: "manual" },
    { label: "Conveyor", value: "conveyor" },
    { label: "Spares", value: "spares" },
    { label: "Standalone", value: "standalone" },
  ];

 
  export const pricingArea = [
  {label: 'Killing' , value: 'Killing area'},
  {label: 'Evisceration' , value: 'Evisceration area'},
  {label: 'Chilling' , value: 'Chilling area'},
  {label: 'FurtherProcess' , value: 'Further process'},
  {label: 'Miscellaneous' , value: 'Miscellaneous/spares'}
  ]



  export const ZONE_WISE_STATE = {
    "North Zone": [
      "Jammu and Kashmir",
      "Himachal Pradesh",
      "Uttarakhand",
      "Punjab",
      "Haryana",
      "Rajasthan",
      "Uttar Pradesh",
      "Delhi (National Capital Territory)"
    ],
    "East Zone": [
      "Bihar",
      "Jharkhand",
      "Odisha",
      "West Bengal",
      "Sikkim"
    ],
    "Central Zone": [
      "Madhya Pradesh",
      "Chhattisgarh",
      "Uttar Pradesh"
    ],
    "West Zone": [
      "Gujarat",
      "Maharashtra",
      "Goa"
    ]
  }
  


export const zones = Object.keys(ZONE_WISE_STATE)



export const getStates = () => {
  let states = []
  zones.forEach(item => {
    states = [...states,...ZONE_WISE_STATE[item]]
  }
    )
  return states;
}

export const findZone = (state) => {
  for (const [zone, states] of Object.entries(ZONE_WISE_STATE)) {
    if (states.includes(state)) {
      return zone;
    }
  }

  return "Not Found";
}
