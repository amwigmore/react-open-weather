export const apiForecastResponse = {
  city: {
    id: 2867714,
    name: 'Munich',
    coord: {
      lon: 11.5754,
      lat: 48.1371,
    },
    country: 'DE',
    population: 1260391,
    timezone: 3600,
  },
  cod: '200',
  message: 1.1827364,
  cnt: 5,
  list: [
    {
      dt: 1573552800,
      sunrise: 1573539316,
      sunset: 1573573228,
      temp: {
        day: 5.44,
        min: 0.37,
        max: 5.44,
        night: 0.37,
        eve: 3.57,
        morn: 5.44,
      },
      pressure: 1008,
      humidity: 69,
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      speed: 1.2,
      deg: 277,
      clouds: 100,
      snow: 1.25,
    },
    {
      dt: 1573639200,
      sunrise: 1573625808,
      sunset: 1573659552,
      temp: {
        day: 0.98,
        min: -2.32,
        max: 2.12,
        night: -2.32,
        eve: 2.12,
        morn: 0.29,
      },
      pressure: 1005,
      humidity: 97,
      weather: [
        {
          id: 601,
          main: 'Snow',
          description: 'snow',
          icon: '13d',
        },
      ],
      speed: 1.2,
      deg: 262,
      clouds: 100,
      snow: 5.26,
    },
    {
      dt: 1573725600,
      sunrise: 1573712301,
      sunset: 1573745879,
      temp: {
        day: 0.37,
        min: -4.38,
        max: 4.57,
        night: -1.67,
        eve: 1.98,
        morn: -3.76,
      },
      pressure: 1005,
      humidity: 76,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      speed: 0.28,
      deg: 201,
      clouds: 55,
    },
    {
      dt: 1573812000,
      sunrise: 1573798793,
      sunset: 1573832207,
      temp: {
        day: 2.41,
        min: -1.91,
        max: 4.43,
        night: 0.26,
        eve: 2.76,
        morn: -1.4,
      },
      pressure: 1002,
      humidity: 84,
      weather: [
        {
          id: 601,
          main: 'Snow',
          description: 'snow',
          icon: '13d',
        },
      ],
      speed: 4.07,
      deg: 263,
      clouds: 100,
      snow: 6.69,
    },
    {
      dt: 1573898400,
      sunrise: 1573885284,
      sunset: 1573918538,
      temp: {
        day: 2.3,
        min: -1.36,
        max: 4.16,
        night: 1.33,
        eve: 3.36,
        morn: -0.58,
      },
      pressure: 1015,
      humidity: 93,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      speed: 1.66,
      deg: 101,
      clouds: 67,
    },
  ],
};

export const mappedForecast = [
  {
    date: 'Tue 12 November',
    description: 'Snow',
    icon:
      'M0 19.25q0-2.891 1.773-5.133t4.57-2.93q0.781-3.406 3.508-5.594t6.258-2.188q3.438 0 6.133 2.133t3.508 5.477h0.531q2.234 0 4.141 1.102t3.016 3 1.109 4.133q0 3.313-2.313 5.703t-5.625 2.5q-0.328 0-0.328-0.281v-2.219q0-0.297 0.328-0.297 2.125-0.109 3.633-1.695t1.508-3.711q0-2.219-1.609-3.828t-3.859-1.609h-2.688q-0.297 0-0.297-0.281l-0.125-0.969q-0.281-2.703-2.32-4.531t-4.742-1.828q-2.75 0-4.773 1.844t-2.289 4.578l-0.094 0.828q0 0.313-0.328 0.313l-0.875 0.109q-2.078 0.172-3.492 1.727t-1.414 3.648q0 2.125 1.508 3.711t3.633 1.695q0.281 0 0.281 0.297v2.219q0 0.281-0.281 0.281-3.344-0.109-5.664-2.5t-2.32-5.703zM9.172 32.078q0-0.578 0.422-1 0.406-0.375 0.953-0.375 0.578 0 0.977 0.391t0.398 0.984-0.398 0.984-0.977 0.391-0.977-0.391-0.398-0.984zM10.609 26.031q0-0.563 0.398-0.969t0.977-0.406 0.977 0.406 0.398 0.969q0 0.594-0.398 1.008t-0.977 0.414-0.977-0.414-0.398-1.008zM13.781 35.344q0-0.563 0.422-1.016 0.406-0.406 0.953-0.406 0.594 0 1.016 0.422t0.422 1-0.422 0.977-1.016 0.398q-0.563 0-0.969-0.398t-0.406-0.977zM15.219 29.25q0-0.594 0.406-1.031 0.406-0.406 0.969-0.406 0.578 0 1 0.422t0.422 1.016q0 0.578-0.414 0.992t-1.008 0.414q-0.563 0-0.969-0.414t-0.406-0.992zM15.922 23.219q0-0.578 0.422-1 0.438-0.406 0.953-0.406 0.594 0 1.016 0.414t0.422 0.992-0.422 0.977-1.016 0.398q-0.563 0-0.969-0.398t-0.406-0.977zM19.875 32.078q0-0.563 0.406-1 0.406-0.375 1-0.375t0.984 0.391 0.391 0.984-0.391 0.984-0.984 0.391-1-0.398-0.406-0.977zM21.297 26.031q0-0.547 0.422-0.961t1-0.414 0.977 0.406 0.398 0.969q0 0.594-0.398 1.008t-0.977 0.414q-0.594 0-1.008-0.422t-0.414-1z',
    temperature: { min: '0', max: '5' },
    wind: '1',
    humidity: 69,
  },
  {
    date: 'Wed 13 November',
    description: 'Snow',
    icon:
      'M0 19.25q0-2.891 1.773-5.133t4.57-2.93q0.781-3.406 3.508-5.594t6.258-2.188q3.438 0 6.133 2.133t3.508 5.477h0.531q2.234 0 4.141 1.102t3.016 3 1.109 4.133q0 3.313-2.313 5.703t-5.625 2.5q-0.328 0-0.328-0.281v-2.219q0-0.297 0.328-0.297 2.125-0.109 3.633-1.695t1.508-3.711q0-2.219-1.609-3.828t-3.859-1.609h-2.688q-0.297 0-0.297-0.281l-0.125-0.969q-0.281-2.703-2.32-4.531t-4.742-1.828q-2.75 0-4.773 1.844t-2.289 4.578l-0.094 0.828q0 0.313-0.328 0.313l-0.875 0.109q-2.078 0.172-3.492 1.727t-1.414 3.648q0 2.125 1.508 3.711t3.633 1.695q0.281 0 0.281 0.297v2.219q0 0.281-0.281 0.281-3.344-0.109-5.664-2.5t-2.32-5.703zM9.172 32.078q0-0.578 0.422-1 0.406-0.375 0.953-0.375 0.578 0 0.977 0.391t0.398 0.984-0.398 0.984-0.977 0.391-0.977-0.391-0.398-0.984zM10.609 26.031q0-0.563 0.398-0.969t0.977-0.406 0.977 0.406 0.398 0.969q0 0.594-0.398 1.008t-0.977 0.414-0.977-0.414-0.398-1.008zM13.781 35.344q0-0.563 0.422-1.016 0.406-0.406 0.953-0.406 0.594 0 1.016 0.422t0.422 1-0.422 0.977-1.016 0.398q-0.563 0-0.969-0.398t-0.406-0.977zM15.219 29.25q0-0.594 0.406-1.031 0.406-0.406 0.969-0.406 0.578 0 1 0.422t0.422 1.016q0 0.578-0.414 0.992t-1.008 0.414q-0.563 0-0.969-0.414t-0.406-0.992zM15.922 23.219q0-0.578 0.422-1 0.438-0.406 0.953-0.406 0.594 0 1.016 0.414t0.422 0.992-0.422 0.977-1.016 0.398q-0.563 0-0.969-0.398t-0.406-0.977zM19.875 32.078q0-0.563 0.406-1 0.406-0.375 1-0.375t0.984 0.391 0.391 0.984-0.391 0.984-0.984 0.391-1-0.398-0.406-0.977zM21.297 26.031q0-0.547 0.422-0.961t1-0.414 0.977 0.406 0.398 0.969q0 0.594-0.398 1.008t-0.977 0.414q-0.594 0-1.008-0.422t-0.414-1z',
    temperature: { min: '-2', max: '2' },
    wind: '1',
    humidity: 97,
  },
  {
    date: 'Thu 14 November',
    description: 'Clouds',
    icon:
      'M0 20.328q0-2.484 1.547-4.414t3.969-2.477q0.641-2.938 2.969-4.805t5.359-1.867q2.953 0 5.273 1.82t3.008 4.664h0.453q2.938 0 5.016 2.070t2.078 5.008-2.078 5.023-5.016 2.086h-15.469q-1.438 0-2.758-0.563t-2.273-1.516-1.516-2.273-0.563-2.758zM2.422 20.328q0 1.906 1.375 3.273t3.313 1.367h15.469q1.938 0 3.313-1.367t1.375-3.273-1.375-3.266-3.313-1.359h-2.313q-0.25 0-0.25-0.25l-0.109-0.813q-0.25-2.359-1.977-3.914t-4.086-1.555-4.102 1.563-1.961 3.906l-0.109 0.703q0 0.25-0.266 0.25l-0.75 0.109q-1.797 0.156-3.016 1.484t-1.219 3.141zM17.172 5.797q-0.25 0.234 0.125 0.344 1.078 0.469 1.797 0.922 0.281 0.078 0.375-0.047 1.516-1.438 3.531-1.438t3.492 1.352 1.648 3.336l0.156 1.063h2.359q1.625 0 2.797 1.164t1.172 2.773q0 1.5-1.031 2.609t-2.547 1.281q-0.25 0-0.25 0.266v1.891q0 0.266 0.25 0.266 2.516-0.156 4.25-1.984t1.734-4.328q0-2.641-1.867-4.508t-4.508-1.867h-0.25q-0.656-2.5-2.742-4.117t-4.664-1.617q-3.531 0-5.828 2.641z',
    temperature: { min: '-4', max: '5' },
    wind: '0',
    humidity: 76,
  },
  {
    date: 'Fri 15 November',
    description: 'Snow',
    icon:
      'M0 19.25q0-2.891 1.773-5.133t4.57-2.93q0.781-3.406 3.508-5.594t6.258-2.188q3.438 0 6.133 2.133t3.508 5.477h0.531q2.234 0 4.141 1.102t3.016 3 1.109 4.133q0 3.313-2.313 5.703t-5.625 2.5q-0.328 0-0.328-0.281v-2.219q0-0.297 0.328-0.297 2.125-0.109 3.633-1.695t1.508-3.711q0-2.219-1.609-3.828t-3.859-1.609h-2.688q-0.297 0-0.297-0.281l-0.125-0.969q-0.281-2.703-2.32-4.531t-4.742-1.828q-2.75 0-4.773 1.844t-2.289 4.578l-0.094 0.828q0 0.313-0.328 0.313l-0.875 0.109q-2.078 0.172-3.492 1.727t-1.414 3.648q0 2.125 1.508 3.711t3.633 1.695q0.281 0 0.281 0.297v2.219q0 0.281-0.281 0.281-3.344-0.109-5.664-2.5t-2.32-5.703zM9.172 32.078q0-0.578 0.422-1 0.406-0.375 0.953-0.375 0.578 0 0.977 0.391t0.398 0.984-0.398 0.984-0.977 0.391-0.977-0.391-0.398-0.984zM10.609 26.031q0-0.563 0.398-0.969t0.977-0.406 0.977 0.406 0.398 0.969q0 0.594-0.398 1.008t-0.977 0.414-0.977-0.414-0.398-1.008zM13.781 35.344q0-0.563 0.422-1.016 0.406-0.406 0.953-0.406 0.594 0 1.016 0.422t0.422 1-0.422 0.977-1.016 0.398q-0.563 0-0.969-0.398t-0.406-0.977zM15.219 29.25q0-0.594 0.406-1.031 0.406-0.406 0.969-0.406 0.578 0 1 0.422t0.422 1.016q0 0.578-0.414 0.992t-1.008 0.414q-0.563 0-0.969-0.414t-0.406-0.992zM15.922 23.219q0-0.578 0.422-1 0.438-0.406 0.953-0.406 0.594 0 1.016 0.414t0.422 0.992-0.422 0.977-1.016 0.398q-0.563 0-0.969-0.398t-0.406-0.977zM19.875 32.078q0-0.563 0.406-1 0.406-0.375 1-0.375t0.984 0.391 0.391 0.984-0.391 0.984-0.984 0.391-1-0.398-0.406-0.977zM21.297 26.031q0-0.547 0.422-0.961t1-0.414 0.977 0.406 0.398 0.969q0 0.594-0.398 1.008t-0.977 0.414q-0.594 0-1.008-0.422t-0.414-1z',
    temperature: { min: '-2', max: '4' },
    wind: '4',
    humidity: 84,
  },
  {
    date: 'Sat 16 November',
    description: 'Clouds',
    icon:
      'M0 20.328q0-2.484 1.547-4.414t3.969-2.477q0.641-2.938 2.969-4.805t5.359-1.867q2.953 0 5.273 1.82t3.008 4.664h0.453q2.938 0 5.016 2.070t2.078 5.008-2.078 5.023-5.016 2.086h-15.469q-1.438 0-2.758-0.563t-2.273-1.516-1.516-2.273-0.563-2.758zM2.422 20.328q0 1.906 1.375 3.273t3.313 1.367h15.469q1.938 0 3.313-1.367t1.375-3.273-1.375-3.266-3.313-1.359h-2.313q-0.25 0-0.25-0.25l-0.109-0.813q-0.25-2.359-1.977-3.914t-4.086-1.555-4.102 1.563-1.961 3.906l-0.109 0.703q0 0.25-0.266 0.25l-0.75 0.109q-1.797 0.156-3.016 1.484t-1.219 3.141zM17.172 5.797q-0.25 0.234 0.125 0.344 1.078 0.469 1.797 0.922 0.281 0.078 0.375-0.047 1.516-1.438 3.531-1.438t3.492 1.352 1.648 3.336l0.156 1.063h2.359q1.625 0 2.797 1.164t1.172 2.773q0 1.5-1.031 2.609t-2.547 1.281q-0.25 0-0.25 0.266v1.891q0 0.266 0.25 0.266 2.516-0.156 4.25-1.984t1.734-4.328q0-2.641-1.867-4.508t-4.508-1.867h-0.25q-0.656-2.5-2.742-4.117t-4.664-1.617q-3.531 0-5.828 2.641z',
    temperature: { min: '-1', max: '4' },
    wind: '2',
    humidity: 93,
  },
];
