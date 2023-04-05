/* eslint-disable */

export const shipSelect = [
    {
        key: 'sloop',
        label: 'Sloop'
    },
    {
        key: 'cutter',
        label: 'Cutter'
    },
    {
        key: 'dhow',
        label: 'Dhow'
    },
    {
        key: 'fanchuan',
        label: 'Fanchuan'
    },
    {
        key: 'longship',
        label: 'LongShip'
    },
    {
        key: 'baghlah',
        label: 'Baghlah'
    },
    {
        key: 'junk',
        label: 'Junk'
    },
    {
        key: 'merchantBrig',
        label: 'Merchant Brig'
    },
    {
        key: 'warBrig',
        label: 'War Brig'
    },
    {
        key: 'merchantGalleon',
        label: 'Merchant Galleon'
    },
    {
        key: 'warGalleon',
        label: 'War Galleon'
    },
    {
        key: 'xebec',
        label: 'Xebec'
    },
    {
        key: 'warFrigate',
        label: 'War Frigate'
    },
    {
        key: 'grandFrigate',
        label: 'Grand Frigate'
    }
]
export const shipDamage = {
    sloop: {
        gunSize: 'small',
        ram: {
            small: 0.5,
            med: 0.333,
            large: 0.25
        },
        rock: {
            small: 0.5,
            med: 0.333,
            large: 0.25
        },
        fray: {
            small: 6,
            med: 4,
            large: 3
        },
        max: {
            small: 10,
            med: 6.667,
            large: 5
        }
    },
    cutter: {
        gunSize: 'small',
        ram: {
            small: 0.5,
            med: 0.333,
            large: 0.25
        },
        rock: {
            small: 0.625,
            med: 0.417,
            large: 0.3125
        },
        fray: {
            small: 7.5,
            med: 5,
            large: 3.75
        },
        max: {
            small: 12,
            med: 8,
            large: 6
        }
    },
    dhow: {
        gunSize: 'med',
        ram: {
            small: 0.5,
            med: 0.333,
            large: 0.25
        },
        rock: {
            small: 0.625,
            med: 0.417,
            large: 0.3125
        },
        fray: {
            small: 7.5,
            med: 5,
            large: 3.75
        },
        max: {
            small: 12,
            med: 8,
            large: 6
        }
    },
    fanchuan: {
        gunSize: 'large',
        ram: {
            small: 0.5,
            med: 0.333,
            large: 0.25
        },
        rock: {
            small: 0.65625,
            med: 0.4375,
            large: 0.328125
        },
        fray: {
            small: 7.875,
            med: 5.225,
            large: 3.9375
        },
        max: {
            small: 13.125,
            med: 8.75,
            large: 6.5625
        }
    },
    longship: {
        gunSize: 'small',
        ram: {
            small: 0.5,
            med: 0.333,
            large: 0.25
        },
        rock: {
            small: 0.75,
            med: 0.5,
            large: 0.375
        },
        fray: {
            small: 9,
            med: 6,
            large: 4.5
        },
        max: {
            small: 15,
            med: 10,
            large: 7.5
        }
    },
    baghlah: {
        gunSize: 'med',
        ram: {
            small: 1,
            med: 0.667,
            large: 0.5
        },
        rock: {
            small: 1,
            med: 0.667,
            large: 0.5
        },
        fray: {
            small: 12,
            med: 8,
            large: 6
        },
        max: {
            small: 20,
            med: 13.333,
            large: 10
        }
    },
    merchantBrig: {
        gunSize: 'med',
        ram: {
            small: 1,
            med: 0.667,
            large: 0.5
        },
        rock: {
            small: 1,
            med: 0.667,
            large: 0.5
        },
        fray: {
            small: 12,
            med: 8,
            large: 6
        },
        max: {
            small: 20,
            med: 13.333,
            large: 10
        }
    },
    junk: {
        gunSize: 'large',
        ram: {
            small: 1.5,
            med: 1,
            large: 0.75
        },
        rock: {
            small: 1.25,
            med: 0.833,
            large: 0.625
        },
        fray: {
            small: 15,
            med: 10,
            large: 7.5
        },
        max: {
            small: 25,
            med: 16.66,
            large: 12.5
        }
    },
    warBrig: {
        gunSize: 'med',
        ram: {
            small: 2,
            med: 1.333,
            large: 1
        },
        rock: {
            small: 1.25,
            med: 0.833,
            large: 0.625
        },
        fray: {
            small: 15,
            med: 10,
            large: 7.5
        },
        max: {
            small: 25,
            med: 16.66,
            large: 12.5
        }
    },
    merchantGalleon: {
        gunSize: 'large',
        ram: {
            small: 2.5,
            med: 1.667,
            large: 1.25
        },
        rock: {
            small: 1.5,
            med: 1,
            large: 0.75
        },
        fray: {
            small: 18,
            med: 12,
            large: 9
        },
        max: {
            small: 30,
            med: 20,
            large: 15
        }
    },
    xebec: {
        gunSize: 'med',
        ram: {
            small: 2.5,
            med: 1.667,
            large: 1.25
        },
        rock: {
            small: 1.75,
            med: 1.167,
            large: 0.875
        },
        fray: {
            small: 21,
            med: 14,
            large: 10.5
        },
        max: {
            small: 35,
            med: 23.333,
            large: 17.5
        }
    },
    warGalleon: {
        gunSize: 'large',
        ram: {
            small: 2,
            med: 1.333,
            large: 1
        },
        rock: {
            small: 1.25,
            med: 0.833,
            large: 0.625
        },
        fray: {
            small: 15,
            med: 10,
            large: 7.5
        },
        max: {
            small: 25,
            med: 16.66,
            large: 12.5
        }
    },
    warFrigate: {
        gunSize: 'large',
        ram: {
            small: 3,
            med: 2,
            large: 1.5
        },
        rock: {
            small: 2.5,
            med: 1.667,
            large: 1.25
        },
        fray: {
            small: 30,
            med: 20,
            large: 15
        },
        max: {
            small: 50,
            med: 33.333,
            large: 25
        }
    },
    grandFrigate: {
        gunSize: 'large',
        ram: {
            small: 4,
            med: 2.667,
            large: 2
        },
        rock: {
            small: 3,
            med: 2,
            large: 1.5
        },
        fray: {
            small: 36,
            med: 24,
            large: 18
        },
        max: {
            small: 60,
            med: 40,
            large: 30
        }
    }
}

export const shipStations = {
    sloop: {
        bilge: 2,
        carp: 2,
        sail: 3,
        gun: 1,
        total: 7,
    },
    cutter: {
        bilge: 2,
        carp: 3,
        sail: 5,
        gun: 2,
        total: 12,
    },
    dhow: {
        bilge: 2,
        carp: 3,
        sail: 5,
        gun: 1,
        total: 12,
    },
    fanchuan: {
        bilge: 2,
        carp: 3,
        sail: 5,
        gun: 1,
        total: 12,
    },
    longship: {
        bilge: 3,
        carp: 3,
        sail: 5,
        gun: 3,
        total: 15,
    },
    baghlah: {
        bilge: 4,
        carp: 4,
        sail: 6,
        gun: 3,
        total: 18,
    },
    merchantBrig: {
        bilge: 6,
        carp: 9,
        sail: 6,
        gun: 2,
        total: 20,
    },
    junk: {
        bilge: 4,
        carp: 4,
        sail: 6,
        gun: 3,
        total: 18,
    },
    warBrig: {
        bilge: 4,
        carp: 6,
        sail: 9,
        gun: 4,
        total: 30,
    },
    merchantGalleon: {
        bilge: 14,
        carp: 14,
        sail: 9,
        gun: 3,
        total: 30,
    },
    xebec: {
        bilge: 8,
        carp: 9,
        sail: 14,
        gun: 6,
        total: 45,
    },
    warGalleon: {
        bilge: 7,
        carp: 8,
        sail: 12,
        gun: 6,
        total: 40,
    },
    warFrigate: {
        bilge: 12,
        carp: 18,
        sail: 18,
        gun: 6,
        total: 75,
    },
    grandFrigate: {
        bilge: 16,
        carp: 24,
        sail: 30,
        gun: 6,
        total: 159,
    }
}