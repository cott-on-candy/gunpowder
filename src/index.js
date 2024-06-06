const characters = require('./中人.json');
const hex_json = require('./hex.json');
const swiss = require('./心水土.json');
const 中土 = require('./中土.json');

const steps = ['Manhattan', 'Star', 'Sky', 'Bike', 'Sparkle', 'Water Field'];
const lettuce = ['hydrogen', 'hydrogen', 'helium', 'helium', 'lithium', 'lithium'];

class GunPowder {
  constructor(s, a, d = false) {
    this.action = a;
    this.debug = d;
    this.phrase = s;
    this.result = [];

    if (!s) {
      console.error('Expected first argument to be a string.');

      return null;
    }

    this[a].call(this, s);
  }

  parse(str) {

  }

  generate(hexcode) {
    let map = [];

    for (let i = 0; i < hexcode.length; i++) {
      map.push(swiss.keys[i].children[hex_json[hexcode[i]]]);
    }

    map.forEach((i, index) => {
      map[index] = {
        'index': index,
        'step': steps[index],
        'element': lettuce[index],
        'establishment': map[index]
      };
    });

    this.result = map;
  }

  camping(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'E' || w === 'O'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'R' || w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'Z')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I' || w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'T' || w === 'W' || w === 'X'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'E' || w === 'I' || w === 'O'),
        function: 中土.function.filter((w) => w === 'D' || w === 'G' || w === 'W' || w === 'X'),
        behavior: 中土.behavior.filter((w) => w === 'Q' || w === 'R' || w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w === 'C' || w === 'O' || w === 'V' || w === 'Y' || w === 'Z')
      }
    }
  }

  placard(s) {
    if (s === 'hydrogen') {
      return {
        value: null,
        function: 中土.function.filter((w) => w === 'B' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'K' || w === 'Q' || w === 'S'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K' || w === 'L' || w === 'O')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A'),
        function: 中土.function.filter((w) => w === 'P' || w === 'T' || w === 'X'),
        behavior: 中土.behavior.filter((w) => w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w === 'H' || w === 'O' || w === 'V' || w === 'Y' || w === 'Z')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'E' || w === 'I' || w === 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'G' || w === 'N'),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === 'C' || w === 'M' || w === 'Z')
      }
    }
  }

  compass(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'E' || w === 'I' || w === 'U'),
        function: 中土.function.filter((w) => w !== 'B' && w !== 'P' && w !== 'T' && w !== 'X'),
        behavior: 中土.behavior.filter((w) => w === 'L' || w === 'R'),
        result: 中土.result.filter((w) => w === 'C' || w === 'O' || w === 'V' || w === 'Y' || w === 'Z')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'E' || w === 'I' || w === 'O'),
        function: 中土.function.filter((w) => w !== 'D' && w !== 'P'),
        behavior: 中土.behavior.filter((w) => w !== 'K' && w !== 'S' && w !== 'U' && w !== 'V'),
        result: 中土.result.filter((w) => w === 'L' || w === 'Z')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'I' || w === 'O' || w === 'U'),
        function: [],
        behavior: [],
        result: 中土.result.filter((w) => w === 'K' || w === 'M' || w === 'V' || w === 'Y' || w === 'Z')
      }
    }
  }

  christmas_tree(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'E' || w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w !== 'D' || w !== 'G'),
        behavior: 中土.behavior.filter((w) => w === 'L' || w !== 'S' || w !== 'U' || w !== 'V'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'I'),
        function: 中土.function.filter((w) => w !== 'G'),
        behavior: 中土.behavior.filter((w) => w === 'K' && w === 'S'),
        result: 中土.result.filter((w) => w !== 'K' && w !== 'L' && w !== 'M')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.function.filter((w) => w === 'I' || w === 'O'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w !== 'Y' && w !== 'Z')
      }
    }
  }

  sunglasses(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w !== 'G'),
        behavior: 中土.behavior,
        result: 中土.result.filter((w) => w === 'H' || w === 'K' || w === 'L')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  gas_station(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  pepper_spray(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  fire_extinguisher(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  umbrella(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  eagle(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  snowflake(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  sunflower(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  watch(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  tent(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  taxi_cab(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  toolbox(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  tennis(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  bullseye(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  joystick(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  telephone(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  trash_can(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  guitar(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  calendar(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  magnet(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }

  flashlight(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === ''),
        function: 中土.function.filter((w) => w === ''),
        behavior: 中土.behavior.filter((w) => w === ''),
        result: 中土.result.filter((w) => w === '')
      }
    }
  }
}

module.exports.GunPowder = GunPowder;