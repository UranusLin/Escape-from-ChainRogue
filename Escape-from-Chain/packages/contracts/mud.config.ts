import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  // Block-Chain version of DB.
  tables: {
    Counter: {
      keySchema: {},
      schema: "uint32",
    },
    Ammo: {
      schema: {
        amount: "uint32",
        damage: "uint32",
      },
    },
    Health: {
      schema: {
        current: "int32",
        max: "int32",
      },
    },
    Position: {
      schema: {
        x: "int32",
        y: "int32",
      },
    },
  },
  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: [],
    },
  ],
});
