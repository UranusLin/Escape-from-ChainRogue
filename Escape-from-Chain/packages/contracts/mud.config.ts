import { mudConfig } from "@latticexyz/world/register";

export default mudConfig({
  // Block Chain version of DB.
  tables: {
    Counter: {
      keySchema: {},
      schema: "uint32",
    },
  },
});
