const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonDamage = () => {
  const maximo = dragon.strength;
  const minimo = 15;
  let dano = Math.floor(Math.random() * (maximo - minimo)) + minimo;
  return dano;
}

const warriorDamage = () => {
  const maximo = warrior.strength * warrior.weaponDmg;
  const minimo = warrior.strength;
  let dano = Math.floor(Math.random() * (maximo - minimo)) + minimo;
  return dano;
}

const mageManaAndDamage = () => {
  let objeto = {}
  let damageMin = mage.intelligence
  let damage = Math.floor(Math.random() * ((damageMin * 2) - damageMin)) + damageMin;
  if (mage.mana < 15){
    objeto.damage = 'Não possui mana suficiente'; 
    objeto.mana = mage.mana;
  }else {
    objeto.damage = damage; 
    objeto.mana = mage.mana - 15;
  }
  return objeto;
}

const gameActions = {
  turnoWarrior: (warriorDamage) => {
    const danoDoWarrior = warriorDamage();
    dragon.healthPoints -= danoDoWarrior;
    warrior.damage = danoDoWarrior;
  },
  turnoMage: (mageManaAndDamage) => {
    const objeto = mageManaAndDamage();
    const danoDaMage = objeto.damage;
    const manaDaMage = objeto.mana;
    dragon.healthPoints -= danoDaMage;
    mage.damage = danoDaMage;

  },
  turnoDragao: (dragonDamage) => {
    const dano = dragonDamage();
    mage.healthPoints -= dano;
    warrior.healthPoints -= dano;
    dragon.damage = dano;
  },
  finalDoTurno: () => {
    return battleMembers;
  }
  // Crie as HOFs neste objeto.
};

gameActions.turnoWarrior(warriorDamage);
gameActions.turnoMage(mageManaAndDamage);
gameActions.turnoDragao(dragonDamage);
console.log(gameActions.finalDoTurno())
