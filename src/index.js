const hex = require('./hex.json');
const 中土 = require('./中土.json');
const 心水土 = require('./心水土.json');

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
    let children = [];

    for (let i = 0; i < hexcode.length; i++) {
      map.push(心水土.keys[i].children[hex[hexcode[i]]]);
    }

    map.forEach((establishment, index) => {
      map[index] = {
        'index': index,
        'step': steps[index],
        'lettuce': lettuce[index],
        'establishment': establishment
      };
      
      map[index]['result'] = this[map[index].establishment.data.character_key_name_package].call(this, lettuce[index]);
      
      if (hexcode[hex[index]] == 0 || hex[hexcode[index]] >= 10) {
        let v = 中土.value.filter((v) => !map[index]['result']['value'].includes(v));
        let f = 中土.function.filter((f) => !map[index]['result']['function'].includes(f));
        let b = 中土.behavior.filter((b) => !map[index]['result']['behavior'].includes(b));
        let r = 中土.result.filter((r) => !map[index]['result']['result'].includes(r));
        
        map[index]['result']['value'] = v;
        map[index]['result']['function'] = f;
        map[index]['result']['behavior'] = b;
        map[index]['result']['result'] = r;
      }
        
      if (this.debug) console.log({ 'step': map[index]['step'], 'result': map[index]['result'] });
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
        value: 中土.value,
        function: 中土.function.filter((w) => w !== 'F' && w !== 'G' && w !== 'N' && w !== 'P'),
        behavior: 中土.behavior.filter((w) => w !== 'S' || w !== 'U' || w !== 'V'),
        result: 中土.result
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E'),
        function: 中土.function.filter((w) => w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w !== 'J' && w !== 'K' && w !== 'L'),
        result: 中土.result.filter((w) => w === 'M' || w === 'O' || w === 'V')
      }
    }
  }

  gas_station(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value,
        function: 中土.function.filter((w) => w === 'B' ||  w === 'D' ||  w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'J' ||  w === 'K' ||  w === 'L'),
        result: 中土.result.filter((w) => w === 'C' || w === 'K' || w === 'O' ||  w === 'Z')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'E' ||  w === 'O'),
        function: 中土.function,
        behavior: 中土.behavior,
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value,
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w === 'K' || w === 'M' || w === 'V')
      }
    }
  }

  pepper_spray(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value,
        function: 中土.function.filter((w) => w !== 'B' || w !== 'D' || w !== 'F'),
        behavior: 中土.behavior.filter((w) => w !== 'K' || w !== 'R' || w !== 'V'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K' || w === 'L')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value,
        function: 中土.function.filter((w) => w === 'G' || w === 'P'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w !== 'J' && w !== 'K' && w !== 'L'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w === 'K' && w === 'L')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value,
        function: 中土.function.filter((w) => w !== 'B' && w !== 'D' && w !== 'F'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w !== 'J' && w !== 'K'),
        result: 中土.result
      }
    }
  }

  fire_extinguisher(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w !== 'A' && w !== 'E'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'L' || w === 'Q' || w === 'R' || w === 'S'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D'),
        behavior: 中土.behavior.filter((w) => w === 'L' || w === 'Q' || w === 'R'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K')
      }
    }
  }

  umbrella(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'U'),
        function: 中土.function.filter((w) => w === 'P' || w === 'T' || w === 'W' || w === 'X'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w === 'V' || w === 'Y' || w === 'Z')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'R' || w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w === 'O' || w === 'V' || w === 'Y' || w === 'Z')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'I' || w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w === 'K' || w === 'L' || w === 'M')
      }
    }
  }

  eagle(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'I' || w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G' || w === 'N'),
        behavior: 中土.behavior.filter((w) => w !== 'K' && w !== 'L' && w !== 'Q' && w !== 'R'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K' || w === 'L' || w === 'M' || w === 'O')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'E'),
        function: 中土.function.filter((w) => w === 'T' || w === 'W' || w === 'X'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K' && w !== 'L')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value,
        function: 中土.function.filter((w) => w === 'P' || w === 'T' || w === 'W' || w === 'X'),
        behavior: 中土.behavior.filter((w) => w === 'R' || w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w === 'V' || w === 'Y' || w === 'Z')
      }
    }
  }

  snowflake(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w !== 'O' && w !== 'U'),
        function: 中土.function.filter((w) => w !== 'B' && w !== 'D' && w !== 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value,
        function: 中土.function.filter((w) => w !== 'G' && w !== 'N' && w !== 'P'),
        behavior: 中土.behavior.filter((w) => w === 'K' || w === 'L' || w === 'Q'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w !== 'E'),
        function: 中土.function,
        behavior: 中土.behavior.filter((w) => w !== 'S' && w !== 'U' && w !== 'V'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K')
      }
    }
  }

  sunflower(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J'  || w === 'K'  || w === 'L' ),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value,
        function: 中土.function.filter((w) => w !== 'P' && w !== 'T' && w !== 'W' && w !== 'X'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w === 'L' || w === 'M' || w === 'O') 
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w === 'J' && w === 'K' && w === 'L'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    }
  }

  watch(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w !== 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'R' || w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K' && w !== 'L')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L' ),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'P' || w === 'T' || w === 'W' || w === 'X'),
        behavior: 中土.behavior.filter((w) => w === 'R' || w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K')
      }
    }
  }

  tent(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value,
        function: 中土.function.filter((w) => w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'R' || w === 'S' || w === 'U'),
        result: 中土.result.filter((w) => w === 'V' || w === 'Y' || w === 'Z')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K'),
        result: 中土.result.filter((w) => w !== 'L' && w !== 'M' && w !== 'O')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'P' || w === 'T' || w === 'W' || w === 'X'),
        behavior: 中土.behavior.filter((w) => w === 'R' || w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w === 'K' || w === 'L' || w === 'M')
      }
    }
  }

  taxi_cab(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'P' || w === 'T' || w === 'W' || w === 'X'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w !== 'J' && w !== 'K' && w !== 'L'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K' && w !== 'L')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w !== 'B' && w !== 'D' && w !== 'F' && w !== 'G'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K' || w === 'L')
      }
    }
  }

  toolbox(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w !== 'B' || w !== 'J' || w !== 'K'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    }
  }

  tennis(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w !== 'J' && w !== 'K'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'D' || w === 'K'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K' || w === 'L')
      }
    }
  }

  bullseye(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w !== 'B' && w !== 'D' && w !== 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K')
      }
    }
  }

  joystick(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'I' || w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w !== 'J' && w !== 'K' && w !== 'L'),
        result: 中土.result.filter((w) => w === 'C' && w === 'H' && w === 'K')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K')
      }
    }
  }

  telephone(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w !== 'B' && w !== 'D' && w !== 'F'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w !== 'J' && w !== 'K'),
        result: 中土.result.filter((w) => w === 'C' && w === 'H' && w === 'K' && w === 'L')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w !== 'B' && w !== 'N' && w !== 'X'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w !== 'Q' && w !== 'R'),
        result: 中土.result.filter((w) => w !== 'L'  && w !== 'Y'  && w !== 'Z')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'G' || w === 'N'),
        behavior: 中土.behavior.filter((w) => w !== 'R' && w !== 'S' && w !== 'U' && w !== 'V'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K' || w === 'L')
      }
    }
  }

  trash_can(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w === 'V' || w === 'Y' || w === 'Z')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K' || w === 'L')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E'),
        function: 中土.function.filter((w) => w !== 'B' && w !== 'D' && w !== 'F' && w !== 'G'),
        behavior: 中土.behavior.filter((w) => w !== 'R' && w !== 'S' && w !== 'U' && w !== 'V'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K' || w === 'L')
      }
    }
  }

  guitar(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value,
        function: 中土.function.filter((w) => w !== 'B' && w === 'D' && w === 'F'),
      behavior: 中土.behavior.filter((w) => w === 'R' || w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K' && w !== 'O')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'I'),
        function: 中土.function.filter((w) => w !== 'B' && w !== 'J' && w !== 'K'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w === 'J' && w !== 'K' && w !== 'L'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K' || w === 'L')
      }
    }
  }

  calendar(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'R' || w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w !== 'O' && w !== 'U'),
        function: 中土.function.filter((w) => w !== 'B' && w !== 'D' && w !== 'F' && w !== 'G'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K' && w !== 'L')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w !== 'J' && w !== 'K' && w !== 'L'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K' || w === 'L')
      }
    }
  }

  magnet(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value,
        function: 中土.function.filter((w) => w !== 'P' && w !== 'T' && w !== 'W' && w !== 'X'),
        behavior: 中土.behavior.filter((w) => w !== 'R' && w !== 'S' && w !== 'U' && w !== 'V'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K' || w === 'L')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w !== 'A' && w !== 'E'),
        function: 中土.function.filter((w) => w !== 'B' && w !== 'D' && w !== 'F' && w !== 'G'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w !== 'J' && w !== 'K' && w !== 'L'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K' && w !== 'L')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'D' || w === 'F' || w === 'G' || w === 'N'),
        behavior: 中土.behavior.filter((w) => w !== 'B' && w !== 'J' && w !== 'U' && w !== 'V'),
        result: 中土.result.filter((w) => w === 'L' || w === 'M' || w === 'O' || w === 'V')
      }
    }
  }

  flashlight(s) {
    if (s === 'hydrogen') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w !== 'P' && w !== 'T' && w !== 'W' && w !== 'X'),
        behavior: 中土.behavior.filter((w) => w === 'R' || w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w !== 'C')
      }
    } else if (s === 'helium') {
      return {
        value: 中土.value.filter((w) => w === 'A' || w === 'E' || w === 'I'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F'),
        behavior: 中土.behavior.filter((w) => w === 'B' || w === 'J' || w === 'K' || w === 'L'),
        result: 中土.result.filter((w) => w === 'C' || w === 'H' || w === 'K' || w === 'L')
      }
    } else if (s === 'lithium') {
      return {
        value: 中土.value.filter((w) => w === 'I' || w === 'O' || w === 'U'),
        function: 中土.function.filter((w) => w === 'B' || w === 'D' || w === 'F' || w === 'G'),
        behavior: 中土.behavior.filter((w) => w === 'R' || w === 'S' || w === 'U' || w === 'V'),
        result: 中土.result.filter((w) => w !== 'C' && w !== 'H' && w !== 'K' && w !== 'L')
      }
    }
  }
}

module.exports.GunPowder = GunPowder;
