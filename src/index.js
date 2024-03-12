/* eslint max-classes-per-file: ["error", 2] */

class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}

class Team {
  constructor() {
    this.members = [];
    this.currentOfMembers = 0;
  }

  addAll(...teammates) {
    teammates.forEach((i) => {
      this.members.push(i);
    });
  }

  iterator() {
    this.members[Symbol.iterator] = function iter() {
      const current = 0;
      const last = Infinity;

      return {
        next() {
          if (current < last) {
            return {
              done: false,
              value: current + 1,
            };
          }

          return {
            done: true,
          };
        },
      };
    };

    /* eslint-disable-next-line */
    for (const i of this.members) {
      if (this.currentOfMembers === this.members.length) {
        break;
      }
      this.currentOfMembers += 1;
      return this.members[i];
    }
  }
}
