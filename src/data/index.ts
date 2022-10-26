import {
  BLACK_COFFEE,
  COFFEE,
  MOCKTAIL,
  NON_COFFEE,
  SIGNATURE,
  SINGLE_ORIGIN,
} from '../constant/MenuBox';
import Image from '../assets/images';

export const drinksMenu: IMenu[] = [
  {
    name: SIGNATURE,
    listMenu: [
      [
        {
          name: 'WILD BERIE LATTE',
          image: Image.coffeeImage,
        },
        {
          name: 'LUBENICA',
          image: Image.coffeeImage,
        },
        {
          name: 'GUD SPREE',
          image: Image.coffeeImage,
        },
      ],
    ],
  },
  {
    name: SINGLE_ORIGIN,
    listMenu: [
      [
        {
          name: 'V60',
          image: Image.coffeeImage,
        },
        {
          name: 'FLOAT BOTTOM',
          image: Image.coffeeImage,
        },
        {
          name: 'AEROPRESS',
          image: Image.coffeeImage,
        },
      ],
      [
        {
          name: 'JAPAN ICED COFFEE',
          image: Image.coffeeImage,
        },
        {
          name: 'TUBRUK',
          image: Image.coffeeImage,
        },
      ],
    ],
  },
  {
    name: BLACK_COFFEE,
    listMenu: [
      [
        {
          name: 'ESSPRESSO',
          image: Image.coffeeImage,
        },
        {
          name: 'ESSPRESSO ON THE ROCK',
          image: Image.coffeeImage,
        },
        {
          name: 'AMERICANO',
          image: Image.coffeeImage,
        },
      ],
      [
        {
          name: 'LONG BLACK',
          image: Image.coffeeImage,
        },
      ],
    ],
  },
  {
    name: COFFEE,
    listMenu: [
      [
        {
          name: 'AFFOGATO',
          image: Image.coffeeImage,
        },
        {
          name: 'ES KOPI BITTS',
          image: Image.coffeeImage,
        },
        {
          name: 'FLAT WHITE',
          image: Image.coffeeImage,
        },
      ],
      [
        {
          name: 'MACCHIATO CARAMEL',
          image: Image.coffeeImage,
        },
        {
          name: 'MOCHACCHINO',
          image: Image.coffeeImage,
        },
        {
          name: 'VIETNAMESE',
          image: Image.coffeeImage,
        },
      ],
      [
        {
          name: 'CAPPUCCINO',
          image: Image.coffeeImage,
        },
        {
          name: 'CAFE LATTE ORIGINAL',
          image: Image.coffeeImage,
        },
        {
          name: 'CAFE LATTE CHEESE CAKE',
          image: Image.coffeeImage,
        },
      ],
      [
        {
          name: 'CAFE LATTE HAZELNUT',
          image: Image.coffeeImage,
        },
        {
          name: 'CAFE LATTE BANANA',
          image: Image.coffeeImage,
        },
        {
          name: 'CAFE LATTE VANILLA',
          image: Image.coffeeImage,
        },
      ],
    ],
  },
  {
    name: NON_COFFEE,
    listMenu: [
      [
        {
          name: 'AIR MINERAL',
          image: Image.coffeeImage,
        },
        {
          name: 'AUTUMN TEA',
          image: Image.coffeeImage,
        },
        {
          name: 'FLAT WHITE',
          image: Image.coffeeImage,
        },
      ],
      [
        {
          name: 'WONKA CHOCOLATE CHEESE',
          image: Image.coffeeImage,
        },
        {
          name: 'CHOCO MIK SHAKE',
          image: Image.coffeeImage,
        },
        {
          name: 'CHOCOLATE MILK',
          image: Image.coffeeImage,
        },
      ],
      [
        {
          name: 'COOKIES SMOOTHIE',
          image: Image.coffeeImage,
        },
        {
          name: 'MILK GREEN TEA',
          image: Image.coffeeImage,
        },
        {
          name: 'ORIGINAL THAI TEA',
          image: Image.coffeeImage,
        },
      ],
      [
        {
          name: 'CHOCOBAN',
          image: Image.coffeeImage,
        },
        {
          name: 'PLANIFOLIA BERRY SMOOTHIES',
          image: Image.coffeeImage,
        },
      ],
    ],
  },
  {
    name: MOCKTAIL,
    listMenu: [
      [
        {
          name: 'ARTIC FLOAT',
          image: Image.coffeeImage,
        },
        {
          name: 'APPLE CREAM DELIGHT',
          image: Image.coffeeImage,
        },
        {
          name: 'TROPICAL HAZE',
          image: Image.coffeeImage,
        },
      ],
      [
        {
          name: 'HEART OF OCEANS',
          image: Image.coffeeImage,
        },
        {
          name: 'RED NIKAYA',
          image: Image.coffeeImage,
        },
        {
          name: 'POPITI OF EDEN',
          image: Image.coffeeImage,
        },
      ],
      [
        {
          name: 'TEA WHITE FOREST',
          image: Image.coffeeImage,
        },
        {
          name: 'PURPLE CANDY',
          image: Image.coffeeImage,
        },
      ],
    ],
  },
];

export interface ListMenu {
  name: string;
  image: any;
}

export interface IMenu {
  name: string;
  listMenu: ListMenu[][];
}
